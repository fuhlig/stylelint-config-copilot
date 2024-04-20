'use strict';

module.exports = {
  'rules': {
    /* ------------------------------------*\
            #GENERAL
    \*------------------------------------ */

    /* These rules should be configured on an editor level (e.g. with editorconfig) */
    /* start */

    // Disallow irregular whitespaces.
    'no-irregular-whitespace': null,

    // Limit the allowed nesting depth.
    'max-nesting-depth': [
      3,
      {
        ignore: [
          'blockless-at-rules',
        ],
        ignoreAtRules: [
          'media',
          'include',
          'if',
          'else',
          'else if',
        ],
      },
    ],

    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
    'no-descending-specificity': true,

    // Disallow empty sources.
    'no-empty-source': true,

    // Disallow duplicate selectors within a stylesheet.
    'no-duplicate-selectors': true,

    // Disallow duplicate @import rules within a stylesheet.
    'no-duplicate-at-import-rules': [
      true,
      {
        'severity': 'error',
      },
    ],

    // Disallow invalid position @import rules within a stylesheet.
    'no-invalid-position-at-import-rule': null,

    // Disallow units for zero lengths.
    'length-zero-no-unit': null,

    /* ------------------------------------*\
            #COLOR
    \*------------------------------------ */

    // Disallow hex colors.
    'color-no-hex': null,

    // Require or disallow alpha channel for hex colors.
    'color-hex-alpha': null,

    // Specify short or long notation for hex colors.
    // Hex colours must always use shorthand where possible.
    'color-hex-length': 'short',

    // Require (where possible) or disallow named colors.
    'color-named': [
      'never',
      {
        'ignore': [
          'inside-function',
        ],
      },
    ],

    // Disallow hex colors.
    // "color-no-hex": false,

    // Disallow invalid hex colors.
    'color-no-invalid-hex': [
      true,
      {
        'severity': 'error',
      },
    ],

    // Specify modern or legacy notation for applicable color-functions
    'color-function-notation': null,

    // Specify percentage or number notation for alpha-values
    'alpha-value-notation': null,

    // Specify number or angle notation for degree hues
    'hue-degree-notation': null,

    // Specify number or percentage notation for lightness.
    'lightness-notation': null,

    /* ------------------------------------*\
            #ANNOTATION
    \*------------------------------------ */
    // Disallow unknown annotations.
    'annotation-no-unknown': true,

    /* ------------------------------------*\
            #IMPORT
    \*------------------------------------ */
    // Specify string or URL notation for @import rules.
    'import-notation': 'string',

    /* ------------------------------------*\
            #FONT-FAMILY
    \*------------------------------------ */
    // Specify whether or not quotation marks should be used around font family names.
    // "always-where-required"|"always-where-recommended"|"always-unless-keyword"
    // @TODO
    'font-family-name-quotes': 'always-unless-keyword',

    // # Font weight
    // Require consistent numeric or named font-weight values.
    'font-weight-notation': null,

    // Disallow duplicate font family names.
    'font-family-no-duplicate-names': true,

    // Disallow missing generic families in lists of font family names.
    'font-family-no-missing-generic-family-keyword': true,

    /* ------------------------------------*\
            #FUNCTION
    \*------------------------------------ */
    // Specify a disallowed-list of disallowed functions.
    'function-disallowed-list': null,

    // Disallow an unspaced operator within calc functions.
    'function-calc-no-unspaced-operator': true,

    // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
    'function-linear-gradient-no-nonstandard-direction': [
      true,
      {
        'severity': 'error',
      },
    ],

    // Specify lowercase or uppercase for function names.
    'function-name-case': 'lower',

    // Require or disallow data URIs for urls.
    // "function-url-data-uris": "always",

    // Require or disallow quotes for urls.
    // always | never
    'function-url-quotes': 'always',

    // Specify a allowed-list of only allowed functions.
    // "function-allowed-list": false,

    // Disallow scheme-relative urls.
    'function-url-no-scheme-relative': null,

    // Specify a disallowed-list of disallowed URL schemes.
    'function-url-scheme-disallowed-list': [
      '/^http/',
      'ftp',
    ],
    // Specify a list of allowed URL schemes.
    'function-url-scheme-allowed-list': null,

    // Specify a list of allowed functions.
    'function-allowed-list': null,

    // Disallow unknown functions.
    'function-no-unknown': null,

    /* ------------------------------------*\
            #NUMBER
    \*------------------------------------ */
    // Disallow units for zero lengths.
    // "number-zero-length-no-unit": true,

    // Limit the number of decimal places allowed in numbers.
    'number-max-precision': 3,

    /* ------------------------------------*\
            #STRING
    \*------------------------------------ */
    // Disallow (unescaped) newlines in strings.
    'string-no-newline': true,

    /* ------------------------------------*\
            #TIME
    \*------------------------------------ */
    // Disallow animation and transition times under 100ms.
    // "time-no-imperceptible": true,

    /* ------------------------------------*\
            #UNIT
    \*------------------------------------ */
    // Specify a disallowed-list of disallowed units.
    'unit-disallowed-list': [
      'in', 'pt', 'pc', 'mm', 'cm', 'ex',
    ],

    // Specify a allowed-list of allowed units.
    'unit-allowed-list': null,

    // Specify a allowed-list of allowed units.
    // "unit-allowed-list": false,

    // Disallow unknown units.
    'unit-no-unknown': true,

    /* ------------------------------------*\
            #VALUE
    \*------------------------------------ */
    // # Value
    // Disallow vendor prefixes for values.
    'value-no-vendor-prefix': true,

    // @TODO:
    // - deactivated due to `font-family` not being ignored
    // Specify lowercase or uppercase for keywords values.
    'value-keyword-case': null,
    // 'value-keyword-case': [
    //   'lower',
    //   {
    //     'ignoreKeywords': [
    //     ],
    //     'ignoreProperties': [
    //       'font-family',
    //     ],
    //   },
    // ],

    /* ------------------------------------*\
            #SHORTHAND
    \*------------------------------------ */
    // # Shorthand property
    // Disallow redundant values in shorthand properties.
    'shorthand-property-no-redundant-values': true,

    // Disallow vendor prefixes for properties.
    'property-no-vendor-prefix': true,

    // Disallow unknown properties.
    'property-no-unknown': [
      true,
      {
        'severity': 'error',
      },
    ],

    // Specify a disallowed-list of disallowed properties.
    'property-disallowed-list': null,

    // Specify a allowed-list of allowed properties.
    'property-allowed-list': null,

    /* ------------------------------------*\
            #DECLARATION
    \*------------------------------------ */
    // Disallow !important within declarations.
    'declaration-no-important': true,

    // Disallow longhand properties that can be combined into one shorthand property.
    'declaration-block-no-redundant-longhand-properties': null,

    // Require a newline or disallow whitespace after the colon of declarations.
    'declaration-empty-line-before': null,
    'declaration-property-unit-disallowed-list': null,
    'declaration-property-unit-allowed-list': null,
    'declaration-property-value-disallowed-list': [
      {
        '/^padding/': [
          'auto',
        ],
      },
    ],

    'declaration-property-value-no-unknown': true,

    // Specify a list of allowed property and value pairs within declarations.
    'declaration-property-value-allowed-list': null,

    // Limit the number of values for a list of properties within declarations.
    'declaration-property-max-values': null,

    /* ------------------------------------*\
            #DECLARATION-BLOCK
    \*------------------------------------ */
    // Disallow duplicate properties within declaration blocks.
    'declaration-block-no-duplicate-properties': [
      true,
      {
        'severity': 'error',
        'ignore': [
          'consecutive-duplicates-with-different-values',
        ],
      },
    ],

    // Disallow shorthand properties that override related longhand properties within declaration blocks.
    'declaration-block-no-shorthand-property-overrides': [
      true,
      {
        'severity': 'error',
      },
    ],

    // Disallow duplicate custom properties within declaration blocks.
    'declaration-block-no-duplicate-custom-properties': true,

    // Limit the number of declaration within single line declaration blocks.
    'declaration-block-single-line-max-declarations': 1,

    /* ------------------------------------*\
            #BLOCK
    \*------------------------------------ */
    // Require a single space or disallow whitespace before the closing brace of blocks.
    // There must always be a single space before the closing brace in single-line blocks.
    // "block-closing-brace-space-before": "always-single-line",

    // Disallow empty blocks.
    'block-no-empty': true,

    /* ------------------------------------*\
            #SELECTOR
    \*------------------------------------ */
    // Specify a list of disallowed attribute names.
    'selector-attribute-name-disallowed-list': null,

    // Specify a disallowed-list of disallowed attribute operators.
    // "selector-attribute-operator-disallowed-list": false,

    // Specify a allowed-list of allowed attribute operators.
    // "selector-attribute-operator-allowed-list": false,

    // Require or disallow quotes for attribute values.
    'selector-attribute-quotes': 'always',

    // Specify a pattern for class selectors.
    // "selector-class-pattern": /^.([a-z](-[a-z])?)+(__([a-z](-[a-z])?)+)?(--([a-z](-[a-z])?)+)?$/,

    // Limit the number of attribute selectors in a selector.
    'selector-max-attribute': 2,

    // Limit the number of classes in a selector.
    'selector-max-class': 3,

    // Limit the number of combinators in a selector.
    'selector-max-combinators': 2,

    // Limit the number of compound selectors in a selector.
    'selector-max-compound-selectors': 3,

    // Specify a pattern for id selectors.
    // "selector-id-pattern": false,
    // Limit the specificity of selectors.
    'selector-max-specificity': [
      '0,4,0',
      {
        'severity': 'warning',
      },
    ],

    // Limit the number of id selectors in a selector.
    'selector-max-id': 0,

    // Limit the number of type selectors in a selector.
    'selector-max-type': 2,

    // Disallow attribute selectors.
    // "selector-no-attribute": false,

    // Disallow combinators in selectors.
    // "selector-no-combinator": false,

    // Disallow qualifying a selector by type.
    'selector-no-qualifying-type': [
      true,
      {
        'ignore': [
          'attribute',
          'class',
        ],
      },
    ],

    // Specify a list of disallowed selectors.
    'selector-disallowed-list': null,

    // Disallow vendor prefixes for selectors.
    'selector-no-vendor-prefix': null,

    // Disallow unknown pseudo-class selectors.
    'selector-pseudo-class-no-unknown': true,

    // Disallow unknown pseudo-element selectors.
    'selector-pseudo-element-no-unknown': true,

    // Specify single or double colon notation for applicable pseudo-elements.
    // Applicable pseudo-elements must always use the double colon notation.
    'selector-pseudo-element-colon-notation': 'double',

    // Specify lowercase or uppercase for type selector.
    'selector-type-case': 'lower',

    // Disallow unknown type selectors.
    'selector-type-no-unknown': true,

    // Specify a disallowed-list of disallowed attribute operators.
    'selector-attribute-operator-disallowed-list': null,

    // Specify a allowed-list of allowed attribute operators.
    'selector-attribute-operator-allowed-list': null,

    // Specify a pattern for class selectors.
    'selector-class-pattern': null,

    // Specify a disallowed-list of disallowed combinators.
    'selector-combinator-disallowed-list': null,

    // Specify a allowed-list of allowed combinators.
    'selector-combinator-allowed-list': null,

    // Specify a pattern for ID selectors.
    'selector-id-pattern': null,

    // Limit the number of pseudo-classes in a selector.
    'selector-max-pseudo-class': null,

    // Limit the number of universal selectors in a selector.
    'selector-max-universal': 2,

    // Specify a pattern for the selectors of rules nested within rules.
    'selector-nested-pattern': null,

    // Specify a disallowed-list of disallowed pseudo-class selectors.
    'selector-pseudo-class-disallowed-list': null,

    // Specify a allowed-list of allowed pseudo-class selectors.
    'selector-pseudo-class-allowed-list': null,

    // Specify a disallowed-list of disallowed pseudo-element selectors.
    'selector-pseudo-element-disallowed-list': null,

    // Specify a allowed-list of allowed pseudo-element selectors.
    'selector-pseudo-element-allowed-list': null,

    // Specify simple or complex notation for :not() pseudo-class selectors.
    'selector-not-notation': null,

    // Disallow unmatchable An+B selectors.
    'selector-anb-no-unmatchable': true,

    /* ------------------------------------*\
            #RULE
    \*------------------------------------ */
    // Require or disallow an empty line before rules.
    'rule-empty-line-before': [
      'always-multi-line',
      {
        'except': [
          'first-nested',
        ],
        'ignore': [
          'after-comment',
          'inside-block',
        ],
      },
    ],

    // Specify a list of disallowed properties for selectors within rules.
    'rule-selector-property-disallowed-list': null,

    /* ------------------------------------*\
            #MEDIA-FEATURE
    \*------------------------------------ */
    // Disallow vendor prefixes for media feature names.
    'media-feature-name-no-vendor-prefix': null,

    // Specify a disallowed-list of disallowed media feature names.
    'media-feature-name-disallowed-list': null,

    // Specify a allowed-list of allowed media feature name and value pairs.
    'media-feature-name-value-allowed-list': null,

    // Specify a allowed-list of allowed media feature names.
    'media-feature-name-allowed-list': null,

    // Disallow unknown media feature names.
    'media-feature-name-no-unknown': true,

    // Specify context or prefix notation for media feature ranges.
    'media-feature-range-notation': null,

    // Specify a list of allowed name and unit pairs within media features.
    'media-feature-name-unit-allowed-list': null,

    // Disallow unknown values for media features.
    'media-feature-name-value-no-unknown': true,

    // Disallow invalid media queries.
    'media-query-no-invalid': true,

    /* ------------------------------------*\
            #AT-RULE
    \*------------------------------------ */
    // Require or disallow an empty line before @rules.
    // There must always be an empty line before @rules.
    'at-rule-empty-line-before': [
      'always',
      {
        'ignore': [
          'after-comment',
          'inside-block',
        ],
        'ignoreAtRules': [
          'import',
          'if',
          'else',
          'mixin',
          'include',
          'for',
          'each',
        ],
        'except': [
          'after-same-name',
          'blockless-after-same-name-blockless',
          'blockless-after-blockless',
        ],
      },
    ],

    // Specify a disallowed-list of disallowed at-rules.
    'at-rule-disallowed-list': null,

    // Disallow vendor prefixes for at-rules.
    'at-rule-no-vendor-prefix': true,

    // Specify a requirelist of properties for an at-rule.
    'at-rule-property-required-list': null,

    // Specify a allowed-list of allowed at-rules.
    'at-rule-allowed-list': null,

    // Disallow unknown at-rules.
    'at-rule-no-unknown': true,

    /* ------------------------------------*\
            #ANIMATIONS / KEYFRAMES
    \*------------------------------------ */

    // Disallow unknown animations.
    'no-unknown-animations': true,

    // Disallow !important within keyframe declarations.
    'keyframe-declaration-no-important': true,

    // Specify a pattern for keyframe names.
    'keyframes-name-pattern': null,

    // Disallow duplicate selectors within keyframe blocks.
    'keyframe-block-no-duplicate-selectors': true,

    // Specify keyword or percentage notation for keyframe selectors.
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',

    // Specify the minimum number of milliseconds for time values.
    'time-min-milliseconds': null,

    /* ------------------------------------*\
            #COMMENTS
    \*------------------------------------ */
    // Require or disallow an empty line before comments (Autofixable).
    'comment-empty-line-before': null,

    // Require or disallow an empty line before comments (Autofixable).
    'comment-no-empty': true,

    // Specify a pattern for comments.
    'comment-pattern': null,

    // Require or disallow whitespace on the inside of comment markers (Autofixable).
    'comment-whitespace-inside': 'always',

    // Specify a disallowed-list of disallowed words within comments.
    'comment-word-disallowed-list': null,

    // Disallow double-slash comments (//...) which are not supported by CSS and could lead to unexpected results.
    'no-invalid-double-slash-comments': true,

    /* ------------------------------------*\
            #CUSTOM
    \*------------------------------------ */

    // Specify a pattern for custom media query names.
    'custom-media-pattern': null,

    // Require or disallow an empty line before custom properties (Autofixable).
    'custom-property-empty-line-before': null,

    // Specify a pattern for custom properties.
    'custom-property-pattern': null,

    // Disallow missing var function for custom properties.
    'custom-property-no-missing-var-function': true,

    // Disallow unknown custom properties.
    // @TODO:
    // evaluate 'This rule considers custom properties defined within the same source to be known.'
    // https://stylelint.io/user-guide/rules/no-unknown-custom-properties/
    'no-unknown-custom-properties': null,

    /* ------------------------------------*\
            #GRID
    \*------------------------------------ */
    // Disallow invalid named grid areas.
    'named-grid-areas-no-invalid': true,
  },
};
