module.exports = {
  extends: [
    'eslint-config-ali/typescript/react',
    'eslint-config-ali/jsx-a11y',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['prettier'],
  root: true,
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 80,
      },
    ],
    'react/prop-types': 0,
    'generator-star-spacing': 0,
  },
  globals: {},
};
