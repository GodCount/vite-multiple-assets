import { NormalizedOutputOptions } from 'rollup';
import { Option } from './types.d.js';
import 'globby';

declare function buildMiddleWare(viteOptions: NormalizedOutputOptions, options: Option[]): Promise<void>;

export { buildMiddleWare };
