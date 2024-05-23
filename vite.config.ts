import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const envWithProcessPrefix = { 'process.env': `${JSON.stringify(env)}` };

  return {
    define: envWithProcessPrefix,
    plugins: [react({
      jsxImportSource: '@emotion/react',
    })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
})
