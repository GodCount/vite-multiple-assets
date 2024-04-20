"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSOA3Z2BWcjs = require('./chunk-SOA3Z2BW.cjs');


var _chunk54VE4WZWcjs = require('./chunk-54VE4WZW.cjs');
require('./chunk-PYN5DZXK.cjs');

// libs/index.ts
function DynamicPublicDirectory(options) {
  return {
    configureServer(server) {
      return _chunk54VE4WZWcjs.ServerMiddleWare.call(void 0, server, options);
    },
    async writeBundle(viteOptions) {
      await _chunkSOA3Z2BWcjs.buildMiddleWare.call(void 0, viteOptions, options);
    },
    name: "dynamic assets"
  };
}


exports.default = DynamicPublicDirectory;
