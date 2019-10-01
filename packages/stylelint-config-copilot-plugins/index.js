/**
 * Stylelint config with scss specific rules
 * @requires stylelint-scss
 */
module.exports = {
  'plugins': [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-high-performance-animation',
    'stylelint-declaration-use-variable',
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

    'sh-waqar/declaration-use-variable': [
      [
        // @TODO:
        // border (^border-collapse)
        '/animation/',
        '/background/',
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
          ],
        },
      ],
    ],

  },
};
