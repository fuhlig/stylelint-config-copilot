# stylelint-config-copilot-plugins

> [Stylelint](https://stylelint.io) shareable config for various stylelint plugins.


## Install

```
$ npm install --save-dev stylelint-config-copilot-plugins
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

_Example: Rename [`.stylelintrc.example.js`](.stylelintrc.example.js) to `.stylelintrc.js`_


## Related

- [stylelint-config-copilot](https://github.com/fuhlig/stylelint-config-copilot/packages/stylelint-config-copilot-base/) - Shareable config based on built-in rules
- [stylelint-config-scss](https://github.com/fuhlig/stylelint-config-copilot/packages/stylelint-config-copilot-scss/) - Shareable config for Sass (scss) support
