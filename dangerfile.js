import { danger, warn, fail, schedule } from 'danger';
import { includes } from 'lodash';

const COMMITS = danger.git.commits;
const FILES_MODIFIED = danger.git.modified_files;

COMMITS.forEach(commit => {
  const message = commit.message;
  const breakingChange = {
    indicator: '!:',
    title: 'BREAKING CHANGE',
    reference: 'See [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-both-and-breaking-change-footer) for details.',
  };

  if (message.includes(breakingChange.indicator)) {
    if (!message.includes(breakingChange.title)) {
      warn(`The commit message title indicates a breaking change. Make sure to include a "BREAKING CHANGE" in the commit footer to give more details about the breaking change. ${breakingChange.reference}`);
      warn(message);
    }
  }

  if (message.includes(breakingChange.title)) {
    if (!message.includes(breakingChange.indicator)) {
      warn(`The commit includes a breaking change without an indicator in the title ("<type>!: <title>"). Make sure to include it to draw attention to the breaking change. See [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-both-and-breaking-change-footer) for details. ${breakingChange.reference}`);
      warn(message);
    }
  }
});

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
  return includes(FILES_MODIFIED, 'package-lock.json');
}

schedule(async() => {
  const packageDiff = await danger.git.JSONDiffForFile('package.json');

  if (hasUpdatedDependencies(packageDiff)) {
    if (!hasUpdatedLockfile()) {
      fail('There are changes in `package.json` with no corresponding changes in `package-lock.json`.\n Make sure to run `npm install` to update modules and lock-file.');
    }
  }
});
