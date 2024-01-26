const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    markdown: false,
    reportUnusedDirectives: true,
  },
  {
    rules: {
      'import/first': 'off',
      'no-alert': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'prefer-const': 'off',
      'ts/ban-ts-comment': 'off',
      'ts/ban-types': 'off',
      'ts/consistent-type-definitions': 'off',
      'ts/no-namespace': 'off',
      'ts/no-require-imports': 'off',
      'ts/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
      'ts/array-type': ['error', { default: 'generic', readonly: 'generic' }], // https://tkdodo.eu/blog/array-types-in-type-script
      'ts/no-explicit-any': 'error',
    },
  },
)
