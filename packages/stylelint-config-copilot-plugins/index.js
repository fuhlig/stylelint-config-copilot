/**
 * Stylelint config with scss specific rules
 * @requires stylelint-scss
 */
module.exports = {
  'plugins': [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-high-performance-animation',
    'stylelint-declaration-strict-value',
    'stylelint-itcss',
  ],
  'rules': {
    'plugin/declaration-block-no-ignored-properties': true,

    // Stylelint rule for preventing the use of low performance animation and transition properties.
    'plugin/no-low-performance-animation-properties': [
      true,
      {
        ignore: 'paint-properties',
      },
    ],

    // ITCSS specific rules
    'itcss/no-variable-declaration': null,
    'itcss/no-mixin-declaration': [
      true,
      {
        ignoreLayers: [
          'tools',
        ],
      },
    ],

    // disable default no-important rule, overwrite with itcss-specific
    'declaration-no-important': null,
    'itcss/no-at-important': [
      true,
      {
        ignoreLayers: [
          'utilities',
        ],
      },
    ],

    'scale-unlimited/declaration-strict-value': [
      [
        // @TODO:
        // border (^border-collapse)
        '/animation/',
        'background-color',
        '/border/',
        '/color/',
        '/columns',
        '/flex-basis/',
        'height',
        '/margin/',
        '/max-height/',
        '/max-width/',
        '/padding/',
        '/shadow/',
        '/width/',
        'bottom',
        'left',
        'right',
        'top',
      ],
      {
        ignoreValues: [
          '/-\\(/', // -(x) calculations
          '/.*\\$/', // include $
          '/\\%/', // percentage %
          '/percentage/', // sass `percentage()` function
          '/vw/', // number with vw unit
          '/vh/', // number with vh unit
          'transparent',
          'inherit',
          'initial',
          '0',
          'auto',
          '0 auto',
          'auto 0',
          'currentColor',
          'inherit',
          'initial',
          'none',
          'solid',
          'transparent',
          'contain',
          'cover',
          'fill',
          'content-box',
          // @TODO: regex for position keywords?
          'center',
          'top',
          'right',
          'left',
          'bottom',
          'scroll',
        ],
      },
    ],

  },
};
