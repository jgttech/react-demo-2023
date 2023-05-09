module.exports = {
  env: {
    browser: true,
    es2020: true,
    es6: true,
  },
  ignorePatterns: [
    '**/node_modules',
    '**/_dist',
    '**/*.json',
    '**/*.config.json',
    '**/*.config.js',
    '**/*.js',
    '.eslintrc.cjs',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // extends: [
  //   'eslint:recommended',
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:react-hooks/recommended',
  // ],
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node'
  ],
  plugins: [
    'react-refresh',
  ],
  rules: {
    semi: 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'arrow-parens': [2, 'as-needed'],
    '@typescript-eslint/semi': [2],
    'nonblock-statement-body-position': [2, 'below'],
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 0,
    '@typescript-eslint/ban-types': [
      2,
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
}
