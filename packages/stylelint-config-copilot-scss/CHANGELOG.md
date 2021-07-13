# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.10.2] - xxx
- chore:
  - update to [`stylelint 13.13.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#13131)
  - move `stylelint` to `peerDependencies` (closes #371)

## [0.10.1] - 27.01.2021
- chore
  - update to [`stylelint 13.9.0`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1390)

## [0.10.0] - 09.01.2021
- LICENSE: include license file from monorepo root

## [0.9.0] - 06.01.2021
- rules:
  - do not force quotes for map-keys
    - do not force quotes (e.g. `$map("key": "value")`) as they are not necessary and verbose
  - exclude conditional at-rules for duplicated variables:
    - add `else` & `else if` to at-rules to be excluded
    from duplicated variables

    allows:
    ```
    @if ($condition) {
      $a: 1;
    } @else if {
      $a: 2;
    } @else {
      $a: 3;
    }
    ```
  - allow empty Sass comments
    - disable `scss/comment-no-empty`
    - allows multiline comments with empty lines / breaks

    example:
    ```
    // first part
    //
    // second part
    ```

## [0.8.0] - 24.10.2020
- chore:
  - update dependencies
- rules:
  - add `scss/map-keys-quotes`
  - add `scss/dimension-no-non-numeric-values`

## [0.7.0] - 19.05.2020
- chore:
  - set minimum node version to >= 10
  - update dependencies

## [0.6.0] - 24.03.2020
- chore:
  - update to [`stylelint 13.2.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1321)
  - update to [`stylelint-scss 3.16.0`](https://github.com/kristerkari/stylelint-scss/blob/master/CHANGELOG.md#3160)
- rules:
  - add new rules introduced in stylelint-scss [3.16.0](https://github.com/kristerkari/stylelint-scss/blob/master/CHANGELOG.md#3160)

## [0.5.1] - 04.03.2020
- chore:
  - update to [`stylelint-scss 3.14.2`](https://github.com/kristerkari/stylelint-scss/blob/master/CHANGELOG.md#3142)

## [0.5.0] - 17.11.2019
- chore:
  - update to [`stylelint 12.0.0`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1200)
  - update to [`stylelint-scss 3.12.1`](https://github.com/kristerkari/stylelint-scss/blob/master/CHANGELOG.md#3121)
- rules: 
  - add new rules introduced in stylelint-scss [3.12.0](https://github.com/kristerkari/stylelint-scss/blob/master/CHANGELOG.md#3120)

## [0.4.1] - 14.11.2019
- chore:
  - update to [`stylelint 11.1.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1111)

## [0.4.0] - 29.09.2019
- rules:
  - disable general import extension rule to fix `dot.separted.file` as extension warning
  - add `scss` to import extension disallowed-list `file.scss` is considered as a warning

## [0.3.2] - 27.09.2019
- deps:
  - update deps

## [0.3.1] - 18.09.2019
- deps:
  - update deps

## [0.3.0] - 01.09.2019
- deps:
  - update deps
- rules:
  - add new rules introducted in stylelint-scss [3.10.0](https://github.com/kristerkari/stylelint-scss/blob/master/CHANGELOG.md#3100)
  - ignore scoped variables in `@each` directive for duplicated variables


## [0.2.0] - 21.07.2019
- deps:
  - update deps
- docs: 
  - add reference to other stylelint-config-copilot packages

## [0.2.0] - 07.07.2019
- chore
  - update to [stylelint 10.1.0](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1010)
  - update to [stylelint-scss 3.9.0](https://github.com/kristerkari/stylelint-scss/blob/master/CHANGELOG.md#390)
- rules:
  - add new rules introducted in stylelint-scss 3.9.0 ([eb12802](https://github.com/fuhlig/stylelint-config-copilot/commit/eb128025b18e3938abd633070cdd8a5fc16d1e83))
  - `no-duplicate-dollar-variables`: Ignore _private vars_ in directive scopes ([d20654d](https://github.com/fuhlig/stylelint-config-copilot/commit/d20654d8ed854c5689a3b9316e2370e3cb3cba73))

## [0.1.0] - 02.06.2019

### Added
- add config:
  - all stylelint default rules
  - opinionated config
  - add example manifest
- add documentation
- add test-files (fixtures)
