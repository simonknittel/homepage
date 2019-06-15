# Contributing

## Branches

This project will somewhat follow the _git-flow_ branching model.

### feature/* hotfix/*
The development of each change will happen in these separate branches and then merged into the nightly branch.

### nightly
Will get automatically deployed to nightly server on each push. Every change will be merged into this branch first. Expect it to be broken often.

### beta
Will get automatically deployed to beta server on each push. Latest bunch of changes will be tested here before pushing them to the production server. This somewhat reflects the _releases_ of git-flow.

### master
Will get automatically deployed to production server on each push.

## Pull Requests
Changes can be only merged to nightly, beta and master through pull requests. Each pull request needs to pass the CI and review by the [Code Owners](./.github/CODEOWNERS).
