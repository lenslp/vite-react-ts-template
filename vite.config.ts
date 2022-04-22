import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import antdDayjs from 'antd-dayjs-vite-plugin';
import lessToJS from 'less-vars-to-js';
import * as path from 'path';
import * as fs from 'fs';
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import legacy from '@vitejs/plugin-legacy';

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/styles/variables.less'),
    'utf8',
  ),
);

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    proxy: {
      '/api': {
        target: '服务端地址',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  plugins: [
    react(),
    antdDayjs(), // 用dayjs替换moment减少包体积
    createStyleImportPlugin({
      // 按需引入antd，由于vite本身已按需导入了组件库，因此只需按需导入样式即可
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: name => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
    legacy({
      targets: ['ie >= 11'], // 兼容旧版本浏览器
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  css: {
    // 支持css Modules
    modules: {
      generateScopedName: '[path]___[name]__[local]___[hash:base64:5]',
      hashPrefix: 'hashPrefix',
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript，支持 less 内联 JS
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables,
      },
    },
  },
});
