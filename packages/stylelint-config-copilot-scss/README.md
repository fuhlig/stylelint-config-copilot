# stylelint-config-copilot-scss

> [Stylelint](https://stylelint.io) shareable config for Sass (scss) support


## Install

```
npm install stylelint-config-copilot-scss --save-dev 
```


## Usage

Add this to your [Stylelint config](https://stylelint.io/user-guide/configuration/):

```json
{
	"extends": "stylelint-config-copilot-scss"
}
```

The plugin is already imported in the config, no need to set it in the [`plugins` array](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#plugins)

_Example: Rename [`.stylelintrc.example.js`](.stylelintrc.example.js) to `.stylelintrc.js`_


## Related

- [stylelint-config-copilot-base](https://github.com/fuhlig/stylelint-config-copilot/tree/main/packages/stylelint-config-copilot-base) - Shareable config based on built-in rules
- [stylelint-config-copilot-plugins](https://github.com/fuhlig/stylelint-config-copilot/tree/main/packages/stylelint-config-copilot-plugins) - Shareable config for various stylelint plugins
- [stylelint-config-copilot-order](https://github.com/fuhlig/stylelint-config-copilot/tree/main/packages/stylelint-config-copilot-order) - Shareable config for order specific rules
