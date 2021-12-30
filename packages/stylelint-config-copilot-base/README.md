# stylelint-config-copilot-base

> [Stylelint](https://stylelint.io) shareable config with stylelint's built-in rules


## Install

```
npm install stylelint-config-copilot-base --save-dev
```


## Usage

Add this to your [Stylelint config](https://stylelint.io/user-guide/configuration/):

```json
{
	"extends": "stylelint-config-copilot-base"
}
```

_Example: Rename [`.stylelintrc.example.js`](.stylelintrc.example.js) to `.stylelintrc.js`_


## Related

- [stylelint-config-copilot-scss](https://github.com/fuhlig/stylelint-config-copilot/tree/main/packages/stylelint-config-copilot-scss) - Shareable config based with scss specific rules
- [stylelint-config-copilot-plugins](https://github.com/fuhlig/stylelint-config-copilot/tree/main/packages/stylelint-config-copilot-plugins) - Shareable config for various stylelint plugins
- [stylelint-config-copilot-order](https://github.com/fuhlig/stylelint-config-copilot/tree/main/packages/stylelint-config-copilot-order) - Shareable config for order specific rules

## Troubleshooting

- VSCode: `stylelint: Undefined rule unicode-bom`: 
This is an issue that (might) occur when using `vscode-stylelint (shinnn.stylelint)` or `vscode-stylelint-plus (hex-ci.stylelint-plus)`. Use the official [`stylelint.vscode-stylelint`](https://github.com/stylelint/vscode-stylelint) extension which should fix the problem. If the linter still throws the warning/error, you can overwrite the rule in your config:

```json
"rules": {
  "unicode-bom": null
}
```
