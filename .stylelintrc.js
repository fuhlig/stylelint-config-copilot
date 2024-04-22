'use strict';

module.exports = {
  plugins: [
  ],
  extends: [
    './packages/stylelint-config-copilot-base',
    './packages/stylelint-config-copilot-scss',
    './packages/stylelint-config-copilot-plugins',
    './packages/stylelint-config-copilot-order',
    './packages/stylelint-config-copilot-stylistic',
  ],
  ignoreFiles: [
    // enter files to ignore (e.g. libs, styleguide styles)
    '**/node_modules/**',
  ],
  defaultSeverity: 'warning',
  rules: {
    // custom-rules & overwrites
  },
};
