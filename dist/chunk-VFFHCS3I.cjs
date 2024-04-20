"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkHZ6LTHYMcjs = require('./chunk-HZ6LTHYM.cjs');

// libs/build.ts
var _fsextra = require('fs-extra'); var _fsextra2 = _interopRequireDefault(_fsextra);
var _globby = require('globby'); var gb = _interopRequireWildcard(_globby);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
async function buildMiddleWare(viteOptions, options) {
  if (!viteOptions.dir)
    throw new Error("options.dir is undefined");
  const cwd = process.cwd();
  for (const option of options) {
    if (option.noBuildCopy)
      continue;
    const matchedPaths = await gb.globby(option.src, _chunkHZ6LTHYMcjs.__spreadValues.call(void 0, {
      expandDirectories: false,
      onlyFiles: false
    }, option.globbyOption));
    for (const matchedPath of matchedPaths) {
      _fsextra2.default.copySync(
        _path2.default.join(cwd, matchedPath),
        _path2.default.join(
          viteOptions.dir,
          option.dest || "",
          _path2.default.parse(matchedPath).base
        )
      );
    }
  }
}



exports.buildMiddleWare = buildMiddleWare;
