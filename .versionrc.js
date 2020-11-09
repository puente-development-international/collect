module.exports = {
  bumpFiles: [
    {
      filename: 'package.json',
    },
    {
      filename: 'app.json',
      updater: require.resolve('standard-version-expo'),
    },
    {
      filename: 'app.json',
      updater: require.resolve('standard-version-expo/android'),
    },
    {
      filename: 'app.json',
      updater: require.resolve('standard-version-expo/ios'),
    }
  ],
  types: [
    { type: 'chore', section: 'Other chores' },
    { type: 'ci', section: 'Pipeline changes' },
    { type: 'docs', section: 'Documentation changes' },
    { type: 'feat', section: 'New features' },
    { type: 'fix', section: 'Bug fixes' },
    { type: 'perf', hidden: true },
    { type: 'refactor', section: 'Code refactors' },
    { type: 'release', hidden: true },
    { type: 'style', hidden: true },
    { type: 'test', hidden: true },
  ],
};