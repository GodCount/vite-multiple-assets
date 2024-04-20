import { Options } from 'globby';

type IMIME = Record<string, string>;

type Option = {
  src: string | string[];
  // 相对 vite build.outDir
  dest?: string;
  noBuildCopy?: boolean;
  globbyOption?: Options;
  mimeTypes?: IMIME;
  ssr?: boolean;
};

export type { IMIME, Option };
