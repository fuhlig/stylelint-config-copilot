# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.2.0] - 04.03.2020
- chore
  - update

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
