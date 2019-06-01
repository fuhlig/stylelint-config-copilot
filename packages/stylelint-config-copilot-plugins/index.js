/**
 * Stylelint config with scss specific rules
 * @requires stylelint-scss
 */
module.exports = {
  'plugins': [
    'stylelint-declaration-block-no-ignored-properties'
  ],
  'rules': {
    'plugin/declaration-block-no-ignored-properties': true,
    // 'plugin/no-low-performance-animation-properties': [
    //   true,
    //   {
    //     ignore: 'paint-properties'
    //   }
    // ],

    // 'sh-waqar/declaration-use-variable': [
    //   [
    //     '/background/',
    //     '/color/',
    //     '/margin/',
    //     '/padding/',
    //     {
    //       ignoreValues: [
    //         'transparent',
    //         'inherit',
    //         'initial',
    //         '0',
    //         'auto'
    //       ]
    //     }
    //   ]
    // ]

  }
};
