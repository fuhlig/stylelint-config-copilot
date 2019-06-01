module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'standard',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    'semi': [
      'warn',
      'always',
    ],
    'quotes': [
      'error', 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      },
    ],
    'space-before-function-paren': [
      'warn',
      'never',
    ],
    'comma-dangle': [
      'warn',
      'always',
    ],
    'array-bracket-newline': [
      'warn',
      'always',
    ],
  },
};
