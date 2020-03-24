/**
 * Stylelint config with scss specific rules
 * @requires stylelint-scss
 */
module.exports = {
  'plugins': [
    'stylelint-scss',
  ],
  'rules': {
    // Unset rule as it does it throws a warning when combining `calc` and interpolated Sass var.
    'function-calc-no-invalid': null,

    /* ------------------------------------*\
      #SCSS-RULES
    \*------------------------------------ */

    /* ------------------------------------*\
      #AT-IF
    \*------------------------------------ */

    // Require a single space or disallow whitespace after the closing brace of @if statements.
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // Require or disallow a newline after the closing brace of @if statements.
    'scss/at-if-closing-brace-newline-after': null,

    // Check for equality to null is unnecessarily explicit since null is falsey in Sass.
    'scss/at-if-no-null': null,

    /* ------------------------------------*\
      #AT-ELSE
    \*------------------------------------ */

    // Require or disallow a newline after the closing brace of @else statements.
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

    // Require a single space or disallow whitespace after the closing brace of @else statements.
    'scss/at-else-closing-brace-space-after': 'always-intermediate',

    // Require an empty line or disallow empty lines before @-else.
    'scss/at-else-empty-line-before': 'never',

    // Require or disallow a space before @else if parentheses.
    'scss/at-else-if-parentheses-space-before': 'always',

    /* ------------------------------------*\
      #AT-EXTEND
    \*------------------------------------ */

    // Disallow at-extends (@extend) with missing placeholders.
    'scss/at-extend-no-missing-placeholder': [
      true,
      {
        // default message incl. custom hint & reference
        'message': 'Expected a placeholder selector (e.g. %placeholder) to be used in @extend  [ avoid using @extend (https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/   http://8gramgorilla.com/mastering-sass-extends-and-placeholders/) ]',
      },
    ],

    /* ------------------------------------*\
      #AT-FUNCTION
    \*------------------------------------ */

    // Require named parameters in SCSS function call rule.
    'scss/at-function-named-arguments': null,

    // Require or disallow a space before @function parentheses (Autofixable).
    'scss/at-function-parentheses-space-before': 'never',

    // Specify a pattern for Sass/SCSS-like function names.
    'scss/at-function-pattern': null,

    // This is a rule that checks for situations where users have.
    'scss/at-each-key-value-single-line': true,

    /* ------------------------------------*\
      #AT-IMPORT
    \*------------------------------------ */

    // Disallow leading underscore in partial names in @import.
    'scss/at-import-no-partial-leading-underscore': null,

    // Specify blacklist of disallowed file extensions for partial names in @import commands.
    'scss/at-import-partial-extension-blacklist': [
      'scss',
    ],

    // Specify whitelist of allowed file extensions for partial names in @import commands.
    'scss/at-import-partial-extension-whitelist': null,

    // Require or disallow extension in @import commands.
    'scss/at-import-partial-extension': null,

    /* ------------------------------------*\
      #AT-MIXINS
    \*------------------------------------ */

    // Require or disallow parentheses in argumentless @mixin calls (Autofixable).
    'scss/at-mixin-argumentless-call-parentheses': 'always',

    // Require named parameters in at-mixin call rule.
    'scss/at-mixin-named-arguments': [
      'always',
      {
        'ignore':
        [
          'single-argument',
        ],
      },
    ],

    // Require or disallow a space before @mixin parentheses (Autofixable).
    'scss/at-mixin-parentheses-space-before': 'never',

    // Specify a pattern for Sass/SCSS-like mixin names.
    'scss/at-mixin-pattern': null,

    /* ------------------------------------*\
      #AT-RULE
    \*------------------------------------ */

    // Disallow unknown at-rules. Should be used instead of stylelint's at-rule-no-unknown.
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    'at-rule-blacklist': [
      'debug',
    ],

    // Disallow parentheses in conditional @ rules (if, elsif, while).
    'scss/at-rule-conditional-no-parentheses': null,

    /* ------------------------------------*\
      #FUNCTIONS
    \*------------------------------------ */

    // Disallows the use of global function names, as these global functions are now located inside built-in Sass modules.
    'scss/no-global-function-names': null,

    // Encourage the use of the scale-color over sass color-functions (darken, lighten, etc.).
    'scss/function-color-relative': null,

    // Disallow quoted strings inside the quote function.
    'scss/function-quote-no-quoted-strings-inside': true,

    // Disallow unquoted strings inside the unquote function.
    'scss/function-unquote-no-unquoted-strings-inside': null,

    // Require for variables to be put first in a block (a rule or in root)
    'scss/dollar-variable-first-in-block': [
      true,
      {
        'ignore': [
          'comments',
          'imports',
        ],
        'except': [
          'root',
          'at-rule',
          'function',
          'mixin',
          'if-else',
          'loops',
        ],
      },
    ],

    /* ------------------------------------*\
      #VARIABLES
    \*------------------------------------ */

    // Require a newline after the colon in $-variable declarations.
    'scss/dollar-variable-colon-newline-after': null,

    // Require a single space or disallow whitespace after the colon in $-variable declarations.
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',

    // Require !default flag for $-variable declarations
    'scss/dollar-variable-default': [
      true,
      {
        'ignore': 'local',
      },
    ],

    // Require a single space or disallow whitespace before the colon in $-variable declarations.
    'scss/dollar-variable-colon-space-before': 'never',

    // Require an empty line or disallow empty lines before $-variable declarations.
    'scss/dollar-variable-empty-line-before': [
      null,
      {
        'except': [
          'first-nested',
          'after-comment',
          'after-dollar-variable',
        ],
      },
    ],

    // Require an empty line or disallow empty lines after $-variable declarations.
    'scss/dollar-variable-empty-line-after': [
      null,
      {
        'except': [
          'last-nested',
          'before-comment',
          'before-dollar-variable',
        ],
      },
    ],

    // Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
    'scss/dollar-variable-no-missing-interpolation': true,

    // Specify a pattern for Sass-like variables.
    'scss/dollar-variable-pattern': null,

    /* ------------------------------------*\
      #DIMENSIONS
    \*------------------------------------ */
    // Disallow non-numeric values when interpolating a value with a unit.
    // [!!!] Throws an error when activated (https://github.com/kristerkari/stylelint-scss/issues/363)
    // 'scss/dimension-no-non-numeric-values': true,

    /* ------------------------------------*\
      #PLACEHOLDER
    \*------------------------------------ */

    // Specify a pattern for %-placeholders.
    'scss/percent-placeholder-pattern': null,

    /* ------------------------------------*\
      #COMMENT
    \*------------------------------------ */

    // Disallow /*-comments.
    'scss/comment-no-loud': null,

    // Require or disallow an empty line before //-comments.
    'scss/double-slash-comment-empty-line-before': null,

    // Require or disallow //-comments to be inline comments.
    'scss/double-slash-comment-inline': null,

    // Require or disallow whitespace after the // in //-comments
    'scss/double-slash-comment-whitespace-inside': null,

    /* ------------------------------------*\
      #DECLARATION
    \*------------------------------------ */

    // Require or disallow properties with - in their names to be in a form of a nested group.
    'scss/declaration-nested-properties': null,

    // Disallow nested properties of the same "namespace" be divided into multiple groups.
    'scss/declaration-nested-properties-no-divided-groups': true,

    /* ------------------------------------*\
      #MEDIA-FEATURE
    \*------------------------------------ */

    // Require a media feature value be a $-variable or disallow $-variables in media feature values.
    'scss/media-feature-value-dollar-variable': 'always',

    /* ------------------------------------*\
      #OPERATOR
    \*------------------------------------ */

    // Disallow linebreaks after Sass operators.
    'scss/operator-no-newline-after': true,

    // Disallow linebreaks before Sass operators.
    'scss/operator-no-newline-before': true,

    // Disallow unspaced operators in Sass operations.
    'scss/operator-no-unspaced': true,

    /* ------------------------------------*\
      #PARTIAL
    \*------------------------------------ */

    // Disallow non-CSS @imports in partial files.
    'scss/partial-no-import': null,

    /* ------------------------------------*\
      #SELECTOR
    \*------------------------------------ */

    // Require or disallow nesting of combinators in selectors.
    'scss/selector-nest-combinators': null,

    // Disallow redundant nesting selectors (&).
    'scss/selector-no-redundant-nesting-selector': true,

    // Disallow union class names with the parent selector (&).
    'scss/selector-no-union-class-name': true,

    /* ------------------------------------*\
      #GENERAL
    \*------------------------------------ */

    // Disallow dollar variables within a stylesheet.
    'scss/no-dollar-variables': null,

    // Disallow duplicate dollar variables within a stylesheet.
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        'ignoreInsideAtRules': [
          'mixin',
          'if',
          'for',
          'each',
        ],
      },
    ],

    // Disallow duplicate mixins within a stylesheet.
    'scss/no-duplicate-mixins': true,
  },
};
