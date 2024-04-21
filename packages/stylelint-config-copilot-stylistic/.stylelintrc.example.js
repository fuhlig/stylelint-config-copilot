'use strict';

module.exports = {
  'plugins': [],
  'extends': [
    'stylelint-config-copilot-stylistic'
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
