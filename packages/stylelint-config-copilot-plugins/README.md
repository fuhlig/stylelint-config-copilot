# stylelint-config-copilot-plugins

> [Stylelint](https://stylelint.io) shareable config for various stylelint plugins.


## Install

```
npm install stylelint-config-copilot-plugins --save-dev 
```

The following plugins are included:
- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties) 
  
  Disallow property values that are ignored due to another property value in the same rule. E.g. `float` and `vertical-align`.


- [stylelint-declaration-use-variable](https://github.com/sh-waqar/stylelint-declaration-use-variable) 

  Enforce usage of variables (pre-processors or CSS custom properties aka CSS variables).


- [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation): 

  Warn about properties with low-performance animation (e.g. paint). Read more about [animations and performance](https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance).


## Usage

Add this to your [Stylelint config](https://stylelint.io/user-guide/configuration/):

```json
{
	"extends": "stylelint-config-copilot-plugins"
}
```

The plugins are already imported in the config, no need to set it in the [`plugins` array](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#plugins)

_Example: Rename [`.stylelintrc.example.js`](.stylelintrc.example.js) to `.stylelintrc.js`_


## Related

- [stylelint-config-copilot-base](https://github.com/fuhlig/stylelint-config-copilot/tree/master/packages/stylelint-config-copilot-base) - Shareable config based on built-in rules
- [stylelint-config-scss](https://github.com/fuhlig/stylelint-config-copilot/tree/master/packages/stylelint-config-copilot-scss) - Shareable config for Sass (scss) support
- [stylelint-config-copilot-order](https://github.com/fuhlig/stylelint-config-copilot/tree/master/packages/stylelint-config-copilot-order) - Shareable config for order specific rules
