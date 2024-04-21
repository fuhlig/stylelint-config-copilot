/**
 * Stylelint config with scss specific rules
 * @requires stylelint-scss
 */
module.exports = {
  'plugins': [
    '@stylistic/stylelint-plugin',
  ],
  'rules': {

    /* These rules should be configured on an editor level (e.g. with editorconfig) */
    /* start */

    // Specify indentation.
    '@stylistic/indentation': null,

    // Disallow end-of-line whitespace.
    '@stylistic/no-eol-whitespace': true,

    // Disallow missing end-of-source newlines.
    '@stylistic/no-missing-end-of-source-newline': true,

    // Specify unix or windows linebreaks.
    '@stylistic/linebreaks': null,
    /* end */

    // Require or disallow the Unicode Byte Order Mark.
    '@stylistic/unicode-bom': null,

    '@stylistic/max-empty-lines': 5,

    // Limit the length of a line.
    '@stylistic/max-line-length': null,

    '@stylistic/no-empty-first-line': null,

    // Disallow extra semicolons.
    '@stylistic/no-extra-semicolons': true,

    // Specify lowercase or uppercase for hex colors.
    '@stylistic/color-hex-case': 'upper',

    /* ------------------------------------*\
            #FUNCTION
    \*------------------------------------ */

    // Require a newline or disallow whitespace after the commas of functions.
    // There must always be a newline after the commas in multi-line functions.
    '@stylistic/function-comma-newline-after': 'never-multi-line',

    // Require a newline or disallow whitespace before the commas of functions.
    // There must never be a whitespace before the commas in multi-line functions.
    '@stylistic/function-comma-newline-before': 'never-multi-line',

    // Require a single space or disallow whitespace after the commas of functions.
    // There must always be a single space after the commas in single-line functions
    '@stylistic/function-comma-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the commas of functions.
    // There must never be whitepace before the commas in single-line functions.
    '@stylistic/function-comma-space-before': 'never',

    // Limit the number of adjacent empty lines within functions.
    '@stylistic/function-max-empty-lines': 0,

    // Require a newline or disallow whitespace on the inside of the parentheses of functions.
    // There must always be a newline if the function call is multiline.
    '@stylistic/function-parentheses-newline-inside': 'never-multi-line',

    // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    // There must never be whitespace on the inside the parentheses.
    '@stylistic/function-parentheses-space-inside': 'never',

    // Require a single space or disallow whitespace after functions.
    // There must always be a single space after the function.
    '@stylistic/function-whitespace-after': 'always',

    /* ------------------------------------*\
            #NUMBER
    \*------------------------------------ */

    // Require or disallow a leading zero for fractional numbers less than 1.
    // There must always be a leading zero.
    '@stylistic/number-leading-zero': 'always',

    // Disallow trailing zeros within numbers.
    '@stylistic/number-no-trailing-zeros': true,

    // Specify single or double quotes around strings
    // Strings must always be wrapped with single quotes.
    '@stylistic/string-quotes': 'double',

    // Specify lowercase or uppercase for units.
    '@stylistic/unit-case': [
      'lower',
      {
        'severity': 'error',
      },
    ],

    // Require a newline or disallow whitespace after the commas of value lists.
    // There must always be a newline after the commas in multi-line value lists.
    '@stylistic/value-list-comma-newline-after': 'always-multi-line',

    // Require a newline or disallow whitespace before the commas of value lists.
    // There must always be whitespace before the commas in multi-line value lists.
    '@stylistic/value-list-comma-newline-before': 'never-multi-line',

    // Require a single space or disallow whitespace after the commas of value lists.
    // There must always be a single space after the commas in single-line value lists.
    '@stylistic/value-list-comma-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the commas of value lists.
    // There must never be whitespace before the commas in single-line value lists.
    '@stylistic/value-list-comma-space-before': 'never',

    // Limit the number of adjacent empty lines within value lists.
    '@stylistic/value-list-max-empty-lines': 0,

    /* ------------------------------------*\
            #PROPERTY
    \*------------------------------------ */

    // Specify lowercase or uppercase for properties.
    '@stylistic/property-case': [
      'lower',
      {
        'severity': 'error',
      },
    ],

    /* ------------------------------------*\
            #DECLARATION
    \*------------------------------------ */

    // Require a single space or disallow whitespace after the bang of declarations.
    // There must never be whitespace after the bang.
    '@stylistic/declaration-bang-space-after': 'never',

    // Require a single space or disallow whitespace before the bang of declarations.
    // There must always be a single space before the bang.
    '@stylistic/declaration-bang-space-before': 'always',

    // Require a single space or disallow whitespace after the colon of declarations.
    // There must always be a single space after the colon if the declaration"s value is single-line.
    '@stylistic/declaration-colon-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the colon of declarations.
    // There must never be whitespace before the colon
    '@stylistic/declaration-colon-space-before': 'never',

    // Require a newline or disallow whitespace after the colon of declarations.
    '@stylistic/declaration-colon-newline-after': null,

    // Require a newline or disallow whitespace after the semicolons of declaration blocks.
    // There must always be a newline after the semicolon.
    '@stylistic/declaration-block-semicolon-newline-after': 'always',

    // Require a newline or disallow whitespace before the semicolons of declaration blocks.
    // There must never be whitespace before the semicolons in multi-line rules.
    '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',

    // Require a single space or disallow whitespace after the semicolons of declaration blocks.
    // There must always be a single space after the semicolon in single-line declaration blocks.
    '@stylistic/declaration-block-semicolon-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the semicolons of declaration blocks.
    // There must never be whitespace before the semicolons.
    '@stylistic/declaration-block-semicolon-space-before': 'never',

    // Require or disallow a trailing semicolon within declaration blocks.
    '@stylistic/declaration-block-trailing-semicolon': 'always',

    /* ------------------------------------*\
            #BLOCK
    \*------------------------------------ */
    // Require or disallow an empty line before the closing brace of blocks.
    '@stylistic/block-closing-brace-empty-line-before': null,

    // Require a newline or disallow whitespace after the closing brace of blocks.
    // There must always be a newline after the closing brace.
    '@stylistic/block-closing-brace-newline-after': [
      'always',
      {
        'ignoreAtRules': [
          'if',
          'else',
        ],
      },
    ],

    // Require a newline or disallow whitespace before the closing brace of blocks.
    // There must always be a newline before the closing brace in multi-line blocks.
    '@stylistic/block-closing-brace-newline-before': 'always-multi-line',

    // Require a single space or disallow whitespace after the closing brace of blocks.
    // There must always be a single space after the closing brace in single-line blocks.
    '@stylistic/block-closing-brace-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the closing brace of blocks.
    '@stylistic/block-closing-brace-space-before': null,

    // Require a newline after the opening brace of blocks.
    // There must always be a newline after the opening brace.
    '@stylistic/block-opening-brace-newline-after': null,

    // Require a newline or disallow whitespace before the opening brace of blocks.
    // (this rule is totally bugged out and does not work properly)
    '@stylistic/block-opening-brace-newline-before': 'never-single-line',

    // Require a single space or disallow whitespace after the opening brace of blocks.
    // There must always be a single space after the opening brace in single-line blocks.
    '@stylistic/block-opening-brace-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the opening brace of blocks.
    // There must always be a single space before the opening brace.
    '@stylistic/block-opening-brace-space-before': 'always',

    // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
    '@stylistic/selector-attribute-brackets-space-inside': 'never',

    // Require a single space or disallow whitespace after operators within attribute selectors.
    '@stylistic/selector-attribute-operator-space-after': 'never',

    // Require a single space or disallow whitespace before operators within attribute selectors.
    '@stylistic/selector-attribute-operator-space-before': 'never',

    // Require a single space or disallow whitespace after the combinators of selectors.
    // There must always be a single space after the combinators.
    '@stylistic/selector-combinator-space-after': 'always',

    // Require a single space or disallow whitespace before the combinators of selectors.
    // There must always be a single space before the combinators.
    '@stylistic/selector-combinator-space-before': 'always',

    // Disallow non-space characters for descendant combinators of selectors.
    '@stylistic/selector-descendant-combinator-no-non-space': true,

    // Limit the number of adjacent empty lines within selectors.
    '@stylistic/selector-max-empty-lines': 0,

    // Specify lowercase or uppercase for pseudo-class selectors.
    '@stylistic/selector-pseudo-class-case': 'lower',

    // Specify lowercase or uppercase for pseudo-element selectors.
    '@stylistic/selector-pseudo-element-case': 'lower',

    // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',

    /* ------------------------------------*\
          #SELECTOR-LIST
    \*------------------------------------ */

    // Require a newline or disallow whitespace after the commas of selector lists.
    // There must always be a newline after the commas in multi-line selector lists.
    '@stylistic/selector-list-comma-newline-after': 'always-multi-line',

    // Require a newline or disallow whitespace before the commas of selector lists.
    // There must never be whitespace before the commas in multi-line selector lists.
    '@stylistic/selector-list-comma-newline-before': 'never-multi-line',

    // Require a single space or disallow whitespace after the commas of selector lists.
    // There must always be a single space after the commas in single-line selector lists.
    '@stylistic/selector-list-comma-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the commas of selector lists.
    // There must never be whitespace before the commas.
    '@stylistic/selector-list-comma-space-before': 'never',

    /* ------------------------------------*\
            #MEDIA-FEATURE
    \*------------------------------------ */

    // Require a single space or disallow whitespace after the colon in media features.
    // There must always be a single space after the colon.
    '@stylistic/media-feature-colon-space-after': 'always',

    // Require a single space or disallow whitespace before the colon in media features.
    // There must never be whitespace before the colon.
    '@stylistic/media-feature-colon-space-before': 'never',

    // Specify lowercase or uppercase for media feature names.
    '@stylistic/media-feature-name-case': 'lower',

    // Require a single space or disallow whitespace on the inside of the parentheses within media features.
    '@stylistic/media-feature-parentheses-space-inside': null,

    // Require a single space or disallow whitespace after the range operator in media features (Autofixable).
    '@stylistic/media-feature-range-operator-space-after': 'always',

    // Require a single space or disallow whitespace before the range operator in media features (Autofixable).
    '@stylistic/media-feature-range-operator-space-before': 'always',

    /* ------------------------------------*\
            #MEDIA-QUERY-LIST
    \*------------------------------------ */
    // Require a newline or disallow whitespace after the commas of media query lists.
    // There must always be a newline after the commas in multi-line media query lists.
    '@stylistic/media-query-list-comma-newline-after': 'never-multi-line',

    // Require a newline or disallow whitespace before the commas of media query lists.
    // There must never be a white before the commas in multi-line media query lists.
    '@stylistic/media-query-list-comma-newline-before': 'never-multi-line',

    // Require a single space or disallow whitespace after the commas of media query lists.
    // There must always be a single space after the commas in single-line media query lists.
    '@stylistic/media-query-list-comma-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the commas of media query lists.
    // There must never be whitepace before the commas.
    '@stylistic/media-query-list-comma-space-before': 'never',

    // Specify lowercase or uppercase for at-rules names.
    '@stylistic/at-rule-name-case': 'lower',

    // Require a newline after at-rule names.
    '@stylistic/at-rule-name-newline-after': null,

    // Require a single space after at-rule names.
    '@stylistic/at-rule-name-space-after': 'always',

    // Require a newline after the semicolon of at-rules.
    '@stylistic/at-rule-semicolon-newline-after': 'always',

    // Require a single space or disallow whitespace before the semicolons at-rules.
    '@stylistic/at-rule-semicolon-space-before': 'never',

    // Require cell tokens (and optionally ending quotes) within grid-template-areas to be aligned.
    '@stylistic/named-grid-areas-alignment': null,

  },
};
