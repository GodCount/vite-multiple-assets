import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import DynamicPublicDirectory from "../../../libs";

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',

                assetFileNames: ({name}) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                        return 'assets/images/[name]-[hash][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                }
            }
        }
    },
    server: {
        port: 3000
    },
    plugins: [
        react(),
        DynamicPublicDirectory([{
            src: ["../../../shared-assets"],
        }])
    ],
})
