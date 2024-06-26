import { ViteDevServer } from "vite";
import { Options } from "globby";

export type IMIME = Record<string, string>;

export type Option = {
  src: string | string[];
  // 相对 vite build.outDir
  dest?: string;
  noBuildCopy?: boolean;
  globbyOption?: Options;
  mimeTypes?: IMIME;
  ssr?: boolean;
};
