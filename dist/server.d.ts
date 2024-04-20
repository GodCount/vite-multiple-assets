import { Option } from './types.d.js';
import { ViteDevServer } from 'vite';
import 'globby';

declare function ServerMiddleWare(server: ViteDevServer, options: Option[]): Promise<() => void>;

export { ServerMiddleWare };
