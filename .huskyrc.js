const tasks = arr => arr.join(' && ');

module.exports = {
  'hooks': {
    'pre-push': tasks([
      'npm test',
      'npx danger local',
    ]),
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
