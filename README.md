# stylelint-config-copilot [![Build Status](https://travis-ci.org/fuhlig/stylelint-config-copilot.svg?branch=master)](https://travis-ci.org/fuhlig/stylelint-config-copilot) [![Greenkeeper badge](https://badges.greenkeeper.io/fuhlig/stylelint-config-copilot.svg)](https://greenkeeper.io/)

> Highly opinionated stylelint configurations.


⚠ Current Status: ⚠

_This project is very much work-in-progress. Right now it's about testing out different rules, combinations and plugins_



The configs are separated into dedicated packages:
- [base](/packages/stylelint-config-copilot-base): stylelint's built-in rules
- [scss](/packages/stylelint-config-copilot-scss): Sass (scss syntax) specific rules
- [plugins](/packages/stylelint-config-copilot-plugins): rules from various stylelint plugins
- [order](https://github.com/fuhlig/stylelint-config-copilot/tree/master/packages/stylelint-config-copilot-order) - order specific rules

Usage information are in the packages' documentations.


## Setup

```bash
npm install
```

## Test
Test will run `ESLint` and find potentially unused stylelint rules in the base config

```bash
npm test
```
