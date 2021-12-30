# stylelint-config-copilot-order

> [Stylelint](https://stylelint.io) shareable config for order specific rules via [stylelint-order](https://github.com/hudochenkov/stylelint-order).


## Install

```
npm install stylelint-config-copilot-order --save-dev 
```

The following plugin is included:
[stylelint-order](https://github.com/hudochenkov/stylelint-order)

## Usage

Add this to your [Stylelint config](https://stylelint.io/user-guide/configuration/):

```json
{
	"extends": "stylelint-config-copilot-order"
}
```

The plugin is already imported in the config, no need to set it in the [`plugins` array](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#plugins)

_Example: Rename [`.stylelintrc.example.js`](.stylelintrc.example.js) to `.stylelintrc.js`_


## Related

- [stylelint-config-copilot-base](https://github.com/fuhlig/stylelint-config-copilot/tree/main/packages/stylelint-config-copilot-base) - Shareable config based on built-in rules
- [stylelint-config-scss](https://github.com/fuhlig/stylelint-config-copilot/tree/main/packages/stylelint-config-copilot-scss) - Shareable config for Sass (scss) support
- [stylelint-config-copilot-plugins](https://github.com/fuhlig/stylelint-config-copilot/tree/main/packages/stylelint-config-copilot-plugins) - Shareable config for various stylelint plugins
