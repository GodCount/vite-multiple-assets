import * as gb from 'globby';

type IMIME = Record<string, string>;

type Option = {
  src: fg.Pattern | fg.Pattern[];
  // 相对 vite build.outDir
  dest?: string;
  noBuildCopy?: boolean;
  globbyOption?: gb.Options;
  mimeTypes?: IMIME;
  ssr?: boolean;
};

declare function DynamicPublicDirectory(options: Option[]): any;

export { DynamicPublicDirectory as default };
