import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginPrettierConfig from 'eslint-config-prettier';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';

const GLOBALS_BROWSER = Object.assign({}, globals.browser, {
  AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope '],
  process: 'readonly',
  module: 'readonly',
  node: true,
});

delete GLOBALS_BROWSER['AudioWorkletGlobalScope '];

export default [
  {
    languageOptions: {
      globals: {
        ...GLOBALS_BROWSER,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
    plugins: {
      prettier,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['warn', 'always'],
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ['**/*.tsx', '**/*.ts'], languageOptions: { parserOptions: { ecmaFeatures: { tsx: true } } } },
  pluginReactConfig,
  pluginPrettierConfig,
];
