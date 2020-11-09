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
    { type: "feat", "section": "Features" },
    { type: "fix", "section": "Bug Fixes" },
    { type: "chore", "section": "Upkeep" },
    { type: "docs", "hidden": true },
    { type: "style", "hidden": true },
    { type: "refactor", "hidden": true },
    { type: "perf", "hidden": true },
    { type: "test", "hidden": true }
  ]
};