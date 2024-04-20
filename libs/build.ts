import fs from "fs-extra";
import { NormalizedOutputOptions } from "rollup";
import { Option } from "./types";
import * as gb from "globby";
import path from "path";

export async function buildMiddleWare(
  viteOptions: NormalizedOutputOptions,
  options: Option[]
) {
  if (!viteOptions.dir) throw new Error("options.dir is undefined");

  const cwd = process.cwd();

  for (const option of options) {
    if (option.noBuildCopy) continue;
    const matchedPaths = await gb.globby(option.src, {
      expandDirectories: false,
      onlyFiles: false,
      ...option.globbyOption,
    });

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
