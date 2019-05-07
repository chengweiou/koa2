module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'mocha': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'no-console': process.env.NODE_ENV === 'prod' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'error' : 'off',
    'indent': ['error',2],
    'linebreak-style': ['error','unix'],
    'quotes': ['error','single'],
    'semi': ['error','never'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-trailing-spaces': ['error'],
    'generator-star-spacing': 'off',
    'space-before-function-paren': ['error', 'never'],
    // allow debugger during development
    'no-tabs': 0,
  }
};