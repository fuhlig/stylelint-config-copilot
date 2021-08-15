# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.6.1] - 15.08.2021
- chore:
  - update to [`stylelint 13.13.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#13131)
  - move `stylelint` to `peerDependencies` (closes #371)

## [0.6.0] - 27.01.2021
- chore
  - update to [`stylelint 13.9.0`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1390)
- rules:
  - group `float`: add `clear`
  - group `overflow`: add
  - group `transforms`: order blow `spacings` group
  - group `borders`: add properties
  - group `user-interactions`: add

## [0.5.0] - 09.01.2021
- LICENSE: include license file from monorepo root

## [0.4.0] - 06.01.2021
- rules:
  - add properties to typography group
  - change order of position properties:
    - order: top, bottom, left, right
    - this has no affect on the linting as the `order` is set to `flexible`
    - has only affect when using autofix option as this order will be used    IF autofix re-orders properties
  - disable autofix for `order/order`:
    - as autofix for selector ordering can have inversive effects despite 
    code formatting & refactoring, autofix is disabled for it
  - reorder properties for transitions & animations:
    Order below `background-color` & `color` as those are subject
    to be animated and should therefor be defined
    before animation declarations.
## [0.3.1] - 24.10.2020
- chore:
  - update dependencies

## [0.3.0] - 19.05.2020
- chore:
  - set minimum node version to >= 10
  - update dependencies

## [0.2.5] - 24.03.2020
- chore:
  - update to [`stylelint 13.2.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1321)
  - 
## [0.2.4] - 04.03.2020
- chore:
  - update to [`stylelint-order 4.0.0`](https://github.com/hudochenkov/stylelint-order/blob/master/CHANGELOG.md#400))

## [0.2.3] - 17.11.2019
- chore:
  - update to [`stylelint 12.0.0`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1200)

## [0.2.2] - 14.11.2019
- chore:
  - update to [`stylelint 11.1.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1111)

## [0.2.0] - 01.09.2019
- deps:
  - update deps ([stylelint-order 3.1.0](https://github.com/hudochenkov/stylelint-order/blob/master/CHANGELOG.md#310))

## [0.1.0] - 21.07.2019

### Added
- add config:
  - opinionated config
- add documentation
- add test-files (fixtures)
