import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:1337',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api')
            }
        }
    },
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                index: './index.html',
                event: './event.html',
                content: './content.html'
            },
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/chunks/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
});