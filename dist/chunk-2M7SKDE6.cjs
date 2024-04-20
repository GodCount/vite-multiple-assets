"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _chunkHZ6LTHYMcjs = require('./chunk-HZ6LTHYM.cjs');

// libs/server.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _mimetypes = require('mime-types'); var _mimetypes2 = _interopRequireDefault(_mimetypes);
var _globby = require('globby'); var gb = _interopRequireWildcard(_globby);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var mimeTypes = {
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
  ".7z": "application/x-7z-compressed"
};
function getContentType(file) {
  return _mimetypes2.default.lookup(file);
}
function handleWriteToServe(res, contentType, path2) {
  res.setHeader("Cache-Control", "max-age=31536000, immutable");
  res.setHeader("Content-Type", contentType);
  res.write(_fs2.default.readFileSync(path2));
  res.end();
}
var postfixRE = new RegExp("[?#].*$", "s");
var sepRE = /\\|\//g;
function toFilePath(url = "") {
  return url.replace(postfixRE, "").replace(sepRE, _path2.default.sep);
}
async function ServerMiddleWare(server, options) {
  const optionInfo = [];
  const cwd = process.cwd();
  for (const option of options) {
    const matchedPaths = await gb.globby(option.src, _chunkHZ6LTHYMcjs.__spreadProps.call(void 0, _chunkHZ6LTHYMcjs.__spreadValues.call(void 0, {
      expandDirectories: false,
      onlyFiles: false
    }, option.globbyOption), {
      objectMode: true
    }));
    const files = matchedPaths.map((file) => {
      return {
        src: _path2.default.join(cwd, file.path),
        dest: _path2.default.normalize(
          _path2.default.join(option.dest || "", _path2.default.parse(file.path).base)
        ),
        dir: file.dirent.isDirectory()
      };
    });
    optionInfo.push(_chunkHZ6LTHYMcjs.__spreadProps.call(void 0, _chunkHZ6LTHYMcjs.__spreadValues.call(void 0, {}, option), {
      files
    }));
  }
  return () => {
    server.middlewares.use(async (req, res, next) => {
      const relativePath = toFilePath(req.originalUrl);
      for (const info of optionInfo) {
        const file = info.files.find(
          (item) => relativePath.indexOf(item.dest) != -1
        );
        if (file) {
          let filepath = file.src;
          if (file.dir) {
            filepath = _path2.default.join(file.src, relativePath.replace(file.dest, ""));
            if (!_fs2.default.existsSync(filepath))
              continue;
          }
          const extension = filepath.substring(filepath.lastIndexOf("."));
          const contentType = _chunkHZ6LTHYMcjs.__spreadValues.call(void 0, _chunkHZ6LTHYMcjs.__spreadValues.call(void 0, {}, info.mimeTypes), mimeTypes)[extension] || getContentType(filepath);
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



exports.ServerMiddleWare = ServerMiddleWare;
