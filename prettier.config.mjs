/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  // JavaScript / general
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',

  // HTML
  bracketSameLine: false,
  htmlWhitespaceSensitivity: 'css',
  singleAttributePerLine: false,

  // Tailwind CSS v4: class sorting uses your design tokens from this entry
  tailwindStylesheet: './src/styles/tailwind.css',

  // Must be last when combining with other Prettier plugins
  plugins: ['prettier-plugin-tailwindcss'],

  overrides: [
    {
      files: '*.html',
      options: {
        printWidth: 100,
        htmlWhitespaceSensitivity: 'css',
      },
    },
    {
      files: '*.{js,mjs,cjs}',
      options: {
        singleQuote: true,
      },
    },
  ],
};
