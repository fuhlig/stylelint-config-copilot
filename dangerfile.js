import { danger, warn, fail, schedule } from 'danger';
const _ = require('lodash');

/**
 * Check if `package.json` has updated dependencies (added, removed, updated).
 * @param {Object} diff diff-object of `package.json`
 */
function hasUpdatedDependencies(diff) {
  if (diff.devDependencies) {
    return !!(diff.devDependencies.after);
  }

  if (diff.dependencies) {
    return !!(diff.devDependencies.after);
  }

  return false;
}

/**
 * Check if there was an update to the `package-lock.json`.
 */
function hasUpdatedLockfile() {
  return _.includes(danger.git.modified_files, 'package-lock.json');
}

schedule(async() => {
  const packageDiff = await danger.git.JSONDiffForFile('package.json');

  if (hasUpdatedDependencies(packageDiff)) {
    warn('Updated dependencies, did you mark it as a breaking change?');

    if (!hasUpdatedLockfile()) {
      fail('There are changes in `package.json` with no corresponding changes in `package-lock.json`.\n Make sure to run `npm install` to update modules and lock-file.');
    }
  }
});
