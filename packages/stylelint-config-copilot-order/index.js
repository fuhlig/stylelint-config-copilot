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
      'at-rules', /* @TODO */
      'rules',
    ],
    'order/properties-order': [
      'content',
      {
        groupName: 'positioning',
        properties: [
          'position',
          'z-index',
        ],
      },
      {
        groupName: 'position-properties',
        order: 'flexible',
        properties: [
          'left',
          'right',
          'top',
          'bottom',
        ],
      },
      {
        groupName: 'display',
        properties: [
          'display',
        ],
      },
      {
        groupName: 'grid',
        order: 'flexible',
        properties: [
          'grid',
          'grid-area',
          'grid-auto-columns',
          'grid-auto-flow',
          'grid-auto-rows',
          'grid-column',
          'grid-column-end',
          'grid-column-start',
          'grid-row',
          'grid-row-end',
          'grid-row-start',
          'grid-template',
          'grid-template-areas',
          'grid-template-columns',
          'grid-template-rows',
          'gap',
        ],
      },
      {
        groupName: 'flexbox-container',
        order: 'flexible',
        properties: [
          'flex-direction',
          'flex-flow',
          'flex-wrap',
          'align-content',
          'align-items',
          'justify-content',
          'justify-items',
        ],
      },
      {
        groupName: 'flexbox-item-size',
        properties: [
          'flex-grow',
          'flex-shrink',
          'flex-basis',
        ],
      },
      {
        groupName: 'flexbox-item',
        order: 'flexible',
        properties: [
          'order',
          'align-self',
          'justify-self',
        ],
      },
      {
        groupName: 'float',
        properties: [
          'float',
        ],
      },
      {
        groupName: 'dimensions',
        properties: [
          'width',
          'height',
          'min-width',
          'min-height',
          'max-width',
          'max-height',
        ],
      },
      {
        groupName: 'transforms',
        order: 'flexible',
        properties: [
          'transform',
          'transform-box',
          'transform-origin',
          'transform-style',
        ],
      },
      {
        groupName: 'columns',
        properties: [
          'columns',
          'column-count',
          'column-fill',
          'column-gap',
          'column-span',
          'column-width',
          'column-rule',
          'column-rule-color',
          'column-rule-style',
          'column-rule-width',
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
        groupName: 'borders',
        order: 'flexible',
        properties: [
          'border',
          'border-radius',
        ],
      },
      {
        groupName: 'font',
        properties: [
          'font-family',
          'font-size',
          'font-weight',
          'font-style',
        ],
      },
      {
        groupName: 'typography',
        order: 'flexible',
        properties: [
          'text-decoration',
          'text-indent',
          'text-justify',
          'text-overflow',
          'letter-spacing',
          'line-height',
          'text-align',
          'word-break',
          'word-spacing',
          'word-wrap',
        ],
      },
      {
        groupName: 'hyphenation',
        order: 'flexible',
        properties: [
          'hyphens',
          'hyphenate-character',
          'hyphenate-limit-chars',
          'hyphenate-limit-last',
          'hyphenate-limit-lines',
          'hyphenate-limit-zone',
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
        order: 'flexible',
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
      {
        groupName: 'color',
        properties: [
          'color',
        ],
      },
    ],
  },
};
