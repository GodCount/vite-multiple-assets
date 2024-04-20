import { PluginOption } from "vite";
import { ServerMiddleWare } from "./server";
import { buildMiddleWare } from "./build";
import { Option } from "./types";

export default function DynamicPublicDirectory(
  options: Option[]
): any {
  return {
    configureServer(server) {
      return ServerMiddleWare(server, options);
    },
    async writeBundle(viteOptions) {
      await buildMiddleWare(viteOptions, options);
    },
    name: "dynamic assets",
  };
}
