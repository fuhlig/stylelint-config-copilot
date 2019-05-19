'use strict';

module.exports = {
  'plugins': [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-declaration-use-variable',
    'stylelint-high-performance-animation'
  ],
  'extends': [
    // 'stylelint-config-copilot-base',
  ],
  'ignoreFiles': [
    // enter files to ignore (e.g. libs, styleguide styles)
    '**/node_modules/**'
  ],
  'defaultSeverity': 'warning',
  'rules': {
    // custom-rules & overwrites

    // PLUGINS
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-low-performance-animation-properties': [
      true,
      {
        ignore: 'paint-properties'
      }
    ],

    'sh-waqar/declaration-use-variable': [
      [
        '/background/',
        '/color/',
        '/margin/',
        '/padding/',
        {
          ignoreValues: [
            'transparent',
            'inherit',
            'initial',
            '0',
            'auto'
          ]
        }
      ]
    ]
  }
};
