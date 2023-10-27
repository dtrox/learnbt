import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sass from 'vite-plugin-sass';

export default defineConfig({
    plugins: [vue(), sass()],
    root: "src",
    assetsInclude: ["./assets/**/*.*"],
    build: {
        emptyOutDir: true,
        outDir: "../dist"
    }
})
