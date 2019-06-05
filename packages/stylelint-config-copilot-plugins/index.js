/**
 * Stylelint config with scss specific rules
 * @requires stylelint-scss
 */
module.exports = {
  'plugins': [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-high-performance-animation',
    'stylelint-declaration-use-variable',
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

    'sh-waqar/declaration-use-variable': [
      [
        '/animation/',
        '/background/',
        '/border/',
        '/color/',
        '/columns',
        '/flex-basis/',
        '/height/',
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