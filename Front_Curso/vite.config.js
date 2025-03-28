import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Configura la base para rutas relativas
    root: 'src', // La raíz del proyecto es src/
    publicDir: '../public', // La carpeta public está fuera de src, en la raíz del proyecto
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
        outDir: '../dist', // La salida será en Front_Curso/dist
        emptyOutDir: true, // Limpia la carpeta dist antes de construir
        rollupOptions: {
            input: {
                index: '/index.html', // Ruta relativa a src/
                event: '/event.html',  // Ruta relativa a src/
                content: '/content.html' // Ruta relativa a src/
            },
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/chunks/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
});