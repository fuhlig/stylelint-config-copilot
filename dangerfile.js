const danger = require('danger');
const _ = require('lodash');

const hasPackageChanges = _.includes(danger.git.modified_files, 'package.json');
const hasLockfileChanges = _.includes(danger.git.modified_files, 'package-lock.json');
if (hasPackageChanges && !hasLockfileChanges) {
  danger.warn('There are `package.json` changes with no corresponding lockfile changes');
}
