module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'never'],
    // 'comma-dangle': ['error', 'always-multiline'],
    'no-extra-boolean-cast': 'off',
    "no-unused-vars": [
      1,
      {
        "ignoreSiblings": true,
        "argsIgnorePattern": "res|next|^err"
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [2, {
      'singleline': 20,
      'multiline': {
         'max': 1,
         'allowFirstLine': false
       }
    }],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "any"
        }
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        tabWidth: 2,
        semi: false,
        printWidth: 100,
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
  },
}
