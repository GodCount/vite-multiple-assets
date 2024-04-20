import { Option } from './types.d.cjs';
import 'globby';

declare function DynamicPublicDirectory(options: Option[]): any;

export { DynamicPublicDirectory as default };
