import { Option } from './types.d.js';
import 'globby';

declare function DynamicPublicDirectory(options: Option[]): any;

export { DynamicPublicDirectory as default };
