# stylelint-config-copilot [![CircleCI](https://circleci.com/gh/fuhlig/stylelint-config-copilot/tree/main.svg?style=svg)](https://circleci.com/gh/fuhlig/stylelint-config-copilot/tree/main)  [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)



> A copilot that helps you navigating through authoring styleesheets. Highly opinionated stylelint configurations.

⚠ Current Status: ⚠

_This project is very much work-in-progress. Right now it's about testing out different rules, combinations and plugins_

Collection of shareable configurations for [Stylelint](https://stylelint.io/) and [Stylelint plugins](https://stylelint.io/user-guide/plugins).



The configs are separated into dedicated packages:
- [base](/packages/stylelint-config-copilot-base): Stylelint's built-in rules
- [scss](/packages/stylelint-config-copilot-scss): Sass (scss syntax) specific rules
- [plugins](/packages/stylelint-config-copilot-plugins): rules from various Stylelint plugins
- [order](/packages/stylelint-config-copilot-order) - order specific rules
- [stylistic](/packages/stylelint-config-copilot-stylistic) - stylistic rules in plugin form (previously built-in Stylelint rules)

Usage information are in the packages' documentations.

## Usage

See the [official documentation on configuration](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md).

Example configuration to extend copilot-configs. 

```js
module.exports = {
  extends: [
    'stylelint-config-copilot-<package>',
  ],

  // enter files to ignore (e.g. dependencies, libs, styleguide styles)
  ignoreFiles: [
    '**/node_modules/**',
  ],
  
  // define severity level
  defaultSeverity: 'warning', 
  
  // custom-rules & overwrites
  rules: {
  },
};
```

The `defaultSeverity` is set to `warning`. Some rules are set to `error`. 

Warnings are considered violations to coding guidelines while errors (may) cause defective code.

While only errors exit with an exit code, using a _zero tolerance policy_ is recommended by setting `--max-warnings 0` (`--mw 0`) in combination with a [Git-Hook](https://git-scm.com/docs/githooks). To simplify the setup of hooks, consider using [husky](https://github.com/typicode/husky).

Linting your stylesheets automated via CLI or during build is great, but linting warnings & errors as soon as they happen is the most effective. Consider using [editor plugins](https://stylelint.io/user-guide/complementary-tools/#editor-plugins) to get short feedback loops.

Using a linter for the first time or changed the config and it all turns into colorful warnings and errors? Don't worry - this is quite normal. Your code (and you) have to get used to the rules. Start small and adjust your code over time.

If you do not agree with a rule - change or disable it. When there are exceptions and the linter should be bypassed, [disable them selectively within the stylesheet](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#turning-rules-off-from-within-your-css).

Using the [formatter](https://stylelint.io/user-guide/node-api#formatter), a report can be generated to go through the potential violations step-by-step.

### Development

#### Setup

```bash
npm install
```

#### Test
Test will run `ESLint` and find potentially unused Stylelint rules in the base config

```bash
npm test
```
