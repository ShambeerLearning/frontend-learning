import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { basename, dirname, resolve } from 'node:path';

const projectRoot = process.cwd();
const group = basename(dirname(projectRoot));

export default defineConfig({
    cacheDir: resolve(import.meta.dirname, 'node_modules/.vite', group, basename(projectRoot)),
    plugins: [
        group === 'full-code-and-html' && preact(),
        group === 'autogen' && viteSingleFile()
    ],
    resolve: {
        alias: {
            '@': resolve(projectRoot, 'src')
        }
    }
});
