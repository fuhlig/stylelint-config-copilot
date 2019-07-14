/**
 * Stylelint config with order specific rules
 * @requires stylelint-order
 */
module.exports = {
  'plugins': [
    'stylelint-order',
  ],
  'rules': {
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules',
    ],
    'order/properties-order': [
      'content',
      'display',
      {
        groupName: 'positioning',
        properties: [
          'position',
          'left',
          'right',
          'top',
          'bottom',
          'z-index',
        ],
      },
      {
        groupName: 'flexbox',
        order: 'flexible',
        properties: [
          'flex-direction',
          'flex-flow',
          'flex-wrap',
          'align-content',
          'align-items',
          'justify-content',
          'justify-items',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'order',
          'align-self',
          'justify-self',
        ],
      },
      {
        groupName: 'spacings',
        order: 'flexible',
        properties: [
          'margin',
          'margin-left',
          'margin-right',
          'margin-top',
          'margin-bottom',
          'padding',
          'padding-left',
          'padding-right',
          'padding-top',
          'padding-bottom',
        ],
      },
      {
        groupName: 'font',
        properties: [
          'font-size',
          'font-weight',
        ],
      },
      {
        groupName: 'transition',
        properties: [
          'transition',
          'transition-property',
          'transition-duration',
          'transition-timing-function',
          'transition-delay',
        ],
      },
      {
        groupName: 'animation',
        order: 'flexible',
        properties: [
          'animation',
          'animation-delay',
          'animation-direction',
          'animation-duration',
          'animation-fill-mode',
          'animation-iteration-count',
          'animation-name',
          'animation-play-state',
          'animation-timing-function',
        ],
      },
      {
        groupName: 'background',
        properties: [
          'background',
          'background-attachment',
          'background-blend-mode',
          'background-clip',
          'background-color',
          'background-image',
          'background-origin',
          'background-position',
          'background-repeat',
          'background-size',
        ],
      },
    ],
  },
};
