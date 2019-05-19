'use strict';

module.exports = {
  'plugins': [
    'stylelint-scss'
  ],
  'extends': [
    'stylelint-config-copilot-scss'
  ],
  'ignoreFiles': [
    // enter files to ignore (e.g. libs, styleguide styles)
    '**/node_modules/**'
  ],
  'defaultSeverity': 'warning',
  'rules': {
    // custom-rules & overwrites
  }
};
