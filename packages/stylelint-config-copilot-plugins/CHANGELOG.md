# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.6.2] - 15.08.2021
- chore:
  - update to [`stylelint 13.13.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#13131)
  - move `stylelint` to `peerDependencies` (closes #371)
  - update to [`stylelint-declaration-use-variable 1.7.3`](https://github.com/sh-waqar/stylelint-declaration-use-variable)

  Since `stylelint-declaration-use-variable` is deprecated/not actively developed, future releases might move to another plugin.

## [0.6.1] - 27.01.2021
- chore
  - update to [`stylelint 13.9.0`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1390)

## [0.6.0] - 09.01.2021
- LICENSE: include license file from monorepo root

## [0.5.0] - 06.01.2021
- rules
  - add properties to allowlist for `declaration-use-variable`:
    - change `background*` to `background-color` as properties like `background-repeat` should not be forced to use variables        
    - allow positional and size values to be used, without forcing to use variables

## [0.4.2] - 27.11.2020
- chore:
  - update dependencies

## [0.4.1] - 24.10.2020
- chore:
  - update dependencies

## [0.4.0] - 19.05.2020
- chore:
  - set minimum node version to >= 10
  - update dependencies

## [0.3.7] - 24.03.2019
- chore:
  - update to [`stylelint 13.2.0`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1320)
  
## [0.3.6] - 04.03.2019
- chore:
  - update deps

## [0.3.5] - 17.11.2019
- chore:
  - update to [`stylelint 12.0.0`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1200)

## [0.3.3] - 14.11.2019
- chore:
  - update to [`stylelint 11.1.1`](https://github.com/stylelint/stylelint/blob/master/CHANGELOG.md#1111) (_other dependencies updated to the same version as a peerDependency_)

## [0.3.2] - 01.10.2019
- allow `0 auto` & `auto 0` wihtout variable-use

## [0.3.2] - 18.09.2019
- deps:
  - update deps

## [0.3.1] - 01.09.2019
- docs: minor changes in readme to clarify rules and imports


## [0.3.0] - 21.07.2019
- add [`stylelint-itcss`](https://github.com/KamiKillertO/stylelint-itcss)
- docs: 
  - add reference to other stylelint-config-copilot packages

## [0.1.1] - 07.07.2019
- add README

## [0.1.0] - 02.06.2019

### Added
- add config:
  - all stylelint default rules
  - opinionated config
  - add example manifest
- add documentation
- add test-files (fixtures)
