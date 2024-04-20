import {
  __spreadValues
} from "./chunk-KLNSLHAC.js";

// libs/build.ts
import fs from "fs-extra";
import * as gb from "globby";
import path from "path";
async function buildMiddleWare(viteOptions, options) {
  if (!viteOptions.dir)
    throw new Error("options.dir is undefined");
  const cwd = process.cwd();
  for (const option of options) {
    if (option.noBuildCopy)
      continue;
    const matchedPaths = await gb.globby(option.src, __spreadValues({
      expandDirectories: false,
      onlyFiles: false
    }, option.globbyOption));
    for (const matchedPath of matchedPaths) {
      fs.copySync(
        path.join(cwd, matchedPath),
        path.join(
          viteOptions.dir,
          option.dest || "",
          path.parse(matchedPath).base
        )
      );
    }
  }
}

export {
  buildMiddleWare
};
