import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

/**
 * ESLint flat config (ESLint 9+).
 * - `src/**`: browser + ESM (Vite client code)
 * - `*.mjs` / tooling: Node + ESM
 * - `*.config.js` + `tailwind.config.js`: Node + CommonJS
 */
export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '**/*.min.js'],
  },

  js.configs.recommended,

  {
    name: 'getwork/browser-esm',
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
  },

  {
    name: 'getwork/node-esm',
    files: ['**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
  },

  {
    name: 'getwork/node-commonjs',
    files: ['postcss.config.js', 'tailwind.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },

  eslintConfigPrettier,
];
