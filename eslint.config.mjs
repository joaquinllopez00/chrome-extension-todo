import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,jsx,mjs}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/jsx-uses-react': 'error', // Ensure JSX uses React
      'react/jsx-uses-vars': 'error', // Ensure JSX uses defined variables
      'react/prop-types': 'off', // Turn off prop-types validation
      'no-unused-vars': 'warn', // Warn for unused variables
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
  pluginJs.configs.recommended,
];
