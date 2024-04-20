import { ViteDevServer } from "vite";
import * as gb from "globby";

export type IMIME = Record<string, string>;

export type Option = {
  src: fg.Pattern | fg.Pattern[];
  // 相对 vite build.outDir
  dest?: string;
  noBuildCopy?: boolean;
  globbyOption?: gb.Options;
  mimeTypes?: IMIME;
  ssr?: boolean;
};