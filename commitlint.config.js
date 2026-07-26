module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Subjects are written in Korean and often include mixed-case proper
    // nouns (NativeWind, GitHub Actions, MMKV), which trip the Latin-script
    // case heuristics in this rule.
    'subject-case': [0],
    // Dependabot commit bodies embed unbreakable changelog/diff URLs that
    // routinely exceed 100 chars; human commits in this repo are subject-only
    // with no body, so this rule has no effect on them anyway.
    'body-max-line-length': [0],
  },
};
