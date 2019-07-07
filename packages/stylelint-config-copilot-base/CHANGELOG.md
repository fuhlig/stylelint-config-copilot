# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.1.1] - unreleased
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
