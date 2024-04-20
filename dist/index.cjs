"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVFFHCS3Icjs = require('./chunk-VFFHCS3I.cjs');


var _chunk2M7SKDE6cjs = require('./chunk-2M7SKDE6.cjs');
require('./chunk-HZ6LTHYM.cjs');

// libs/index.ts
function DynamicPublicDirectory(options) {
  return {
    configureServer(server) {
      return _chunk2M7SKDE6cjs.ServerMiddleWare.call(void 0, server, options);
    },
    async writeBundle(viteOptions) {
      await _chunkVFFHCS3Icjs.buildMiddleWare.call(void 0, viteOptions, options);
    },
    name: "dynamic assets"
  };
}


exports.default = DynamicPublicDirectory;
