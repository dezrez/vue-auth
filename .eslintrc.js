module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'key-spacing': 0,
    'padded-blocks' :0,
    'indent': 0,
    'space-before-blocks' :0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'handle-callback-err': 0,
    'eol-last': 0,
    'no-multi-spaces': 0,
    'no-trailing-spaces': 0,
    'spaced-comment': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-multiple-empty-lines': 0,
    'keyword-spacing' : 0,
    'semi': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
