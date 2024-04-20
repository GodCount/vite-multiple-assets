import {
  buildMiddleWare
} from "./chunk-IBIW2EPM.js";
import {
  ServerMiddleWare
} from "./chunk-IJSY3UA5.js";
import "./chunk-KLNSLHAC.js";

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
