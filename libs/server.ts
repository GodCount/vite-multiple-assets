import fs from "fs";
import { Option } from "./types";
import mime from "mime-types";
import http from "node:http";
import { ViteDevServer } from "vite";
import * as gb from "globby";
import path from "path";

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "font/eot",
  ".otf": "font/otf",
  ".wasm": "application/wasm",
  ".mjs": "text/javascript",
  ".txt": "text/plain",
  ".xml": "text/xml",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".webp": "image/webp",
  ".wgsl": "text/wgsl",
  ".ico": "image/x-icon",
  ".tiff": "image/tiff",
  ".gz": "application/gzip",
  ".zip": "application/zip",
  ".rar": "application/x-rar-compressed",
  ".7z": "application/x-7z-compressed",
};

function getContentType(file: string) {
  return mime.lookup(file);
}

function handleWriteToServe(
  res: http.ServerResponse,
  contentType: string,
  path: string
) {
  res.setHeader("Cache-Control", "max-age=31536000, immutable");
  res.setHeader("Content-Type", contentType);
  res.write(fs.readFileSync(path));
  res.end();
}

const postfixRE = /[?#].*$/s;
const sepRE = /\\|\//g;

/**
 * Get pure file url
 * @param {string} url
 * @example
 * toFilePath('vite.svg?t=1703075066566') // return 'vite.svg'
 * @returns {string} Returns file url
 */
function toFilePath(url: string = "") {
  return url.replace(postfixRE, "").replace(sepRE, path.sep);
}

export async function ServerMiddleWare(
  server: ViteDevServer,
  options: Option[]
) {
  const optionInfo: (Option & {
    files: { src: string; dest: string; dir: boolean }[];
  })[] = [];

  const cwd = process.cwd();

  for (const option of options) {
    const matchedPaths = await gb.globby(option.src, {
      expandDirectories: false,
      onlyFiles: false,
      ...option.globbyOption,
      objectMode: true,
    });

    const files = matchedPaths.map((file) => {
      return {
        src: path.join(cwd, file.path),
        dest: path.normalize(
          path.join(option.dest || "", path.parse(file.path).base)
        ),
        dir: file.dirent.isDirectory(),
      };
    });

    console.log("files", files);

    optionInfo.push({
      ...option,
      files,
    });
  }

  return () => {
    server.middlewares.use(async (req, res, next) => {
      const relativePath = toFilePath(req.originalUrl);
      console.log("relativePath", relativePath);

      for (const info of optionInfo) {
        const file = info.files.find(
          (item) => relativePath.indexOf(item.dest) != -1
        );

        console.log("file", file);

        if (file) {
          let filepath = file.src;

          if (file.dir) {
            filepath = path.join(file.src, relativePath.replace(file.dest, ""));
            if (!fs.existsSync(filepath)) continue;
          }

          const extension = filepath.substring(filepath.lastIndexOf("."));
          const contentType =
            { ...info.mimeTypes, ...mimeTypes }[extension] ||
            getContentType(filepath);
          if (info.ssr) {
            res.addListener("pipe", () => {
              handleWriteToServe(res, contentType, filepath);
            });
          } else {
            handleWriteToServe(res, contentType, filepath);
          }
          break;
        }
      }
      next();
    });
  };
}
