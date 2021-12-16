# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.0-rc.2] - 16.12.2021
- fix tagged version `0.6.2-1.0.0-rc.1.0` => `1.0.0-rc.x`

## [1.0.0-rc.1] - 04.12.2021
This is the first release candidate for a stable version. 
- breaking changes:
  - update to Stylelint v14 (see [migration guide](https://github.com/stylelint/stylelint/blob/main/docs/migration-guide/to-14.md) for details)
  - Node v10 support dropped (see [Stylelint v14 migration guide](https://github.com/stylelint/stylelint/blob/main/docs/migration-guide/to-14.md#users)), v12 or greater is required
  - remove `function-calc-no-invalid` 
- rules:
  - add [`color-hex-alpha`](https://stylelint.io/user-guide/rules/list/color-hex-alpha/)
  - add [`rule-selector-property-disallowed-list`](https://stylelint.io/user-guide/rules/list/rule-selector-property-disallowed-list/)
  - add [`custom-property-no-missing-var-function`](https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function/)
  - remove `function-calc-no-invalid` (removed completely from Stylelint)
- ci:
  - add runners for Node v16
    - current runners: 12, 14, 16 (`lts`), 17 (`latest`)
  
## [0.7.0] - 15.08.2021
- chore:
  - update to [`stylelint 13.13.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#13131)
  - move `stylelint` to `peerDependencies` (closes #371)
- rules:
  - add rules introduced between `stylelint` between version `13.9.0` and `13.13.1`

## [0.6.1] - 27.01.2021
- chore
  - update to [`stylelint 13.9.0`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1390)

## [0.6.0] - 09.01.2021
- LICENSE: include license file from monorepo root

## [0.5.0] - 06.01.2021
- rules:
  - add conditional at-rules (if, else, else if) to be ignored for `max-nesting-depth`
  - allow duplicated properties for 'native' fallbacks
    > Ignore consecutive duplicated properties with different values. Including duplicate properties (fallbacks) is useful to deal with older browsers support for CSS properties. E.g. using px units when rem isn't available.
    [rule docs](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties)
  - allow 2 universal selectors: allow selectors like `* + *` (any element that has a previous sibling)
  
## [0.4.1] - 27.11.2020
- rules: 
  - allow `ch` (remove from `unit-disallowed-list`)

## [0.4.0] - 24.10.2020
- chore
  - update to [`stylelint 13.7.2`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1372)
- refactor:
  - inclusive language: rename `blacklist` & `whitelist` to `disallowed-list` & `allowed-list` ([see stylelint changelog](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1370))

## [0.3.0] - 19.05.2020
- chore
  - set minimum node version to >= 10
  - update dependencies

## [0.2.1] - 24.03.2020
- chore
  - update to [`stylelint 13.2.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1321)

## [0.2.0] - 04.03.2020
- chore
  - update deps

## [0.1.7] - 17.11.2019
- chore:
  - update to [`stylelint 13.2.0`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1320)
- fix:
  - enable `unicode-bom`. See `README` for troubleshooting. 

## [0.1.6] - 14.11.2019
- chore:
  - update to [`stylelint 11.1.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1111)

## [0.1.5] - 29.09.2019
- fix:
  - disable `unicode-bom` rule until it is being fixed by `stylelint-vscode` ([see PR](https://github.com/shinnn/stylelint-vscode/pull/12))

[Pull Request](https://github.com/shinnn/stylelint-vscode/pulls)
## [0.1.2] - 21.07.2019
- docs:
  - add references to other styleling-config-copilot packages

## [0.1.1] - 07.07.2019
- chore:
  - update to [`stylelint 10.1.0`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1010)
- rules:
  - disable `value-keyword-case` to avoid false negatives on fonts
  - disable `at-rule-name-newline-after`
  - ignore mixins for `at-rule-empty-line-before`

## [0.1.0] - 02.06.2019

### Added
- add config:
  - all stylelint default rules
  - opinionated config
  - add example manifest
- add documentation
- add test-files (fixtures)
