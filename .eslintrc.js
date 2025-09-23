module.exports = {
    env: {
    browser: true,
    es2021: true,
    },
    extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
    ecmaFeatures: {
    jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
    react: {
    version: 'detect',
    },
    },
    rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'max-lines-per-function': ['error', { max: 40 }],
    'no-magic-numbers': ['warn', { ignore: [0, 1, -1, 2, 3, 4, 5, 7, 10] }],
    },
    };