import {
  buildMiddleWare
} from "./chunk-3VUZJJ2R.js";
import {
  ServerMiddleWare
} from "./chunk-HOUEZA5O.js";
import "./chunk-IYHLREDX.js";

// libs/index.ts
function DynamicPublicDirectory(options) {
  return {
    configureServer(server) {
      return ServerMiddleWare(server, options);
    },
    async writeBundle(viteOptions) {
      await buildMiddleWare(viteOptions, options);
    },
    name: "dynamic assets"
  };
}
export {
  DynamicPublicDirectory as default
};
