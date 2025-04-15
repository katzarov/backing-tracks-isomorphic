# Backing Tracks Isomorphic

Contains code that we use on both the client and server, namely:

- zod schemas... spent a lot of time thinking if want to use something like **TypeSpec** to first define my endpoints there. And then generate openapi and zod schemas.. Would be really cool to do it in such an API first approach. But decided it was too much for this. Might try it in a big prod someday.
- ts types
- possibly more in the future

## Prod

Code is built and published to npm from my machine :P

1. Bump up the version.
2. `npm run build`
3. `npm publish`
4. git commit & push.

## Local

For local integration of this bulld with other projects there are quite a few different ways:

- yalc - have used it before and like it.
- npm local file. Creates a symlink like npm link does. https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies https://docs.npmjs.com/cli/v10/configuring-npm/package-json#local-paths
- npm link https://docs.npmjs.com/cli/v10/commands/npm-link
- npm workspaces - bigger abstraction, need to check it out.

Ended up using symlinks by specifying the local file path in package json.

`npm run dev` - builds the pkg on src file changes.

## TODO (MoSCoW):

- **(M)** CI/CD with GitHub Actions - build and publish to npm - we should qualify for the free plan.
- **(C)** TypeSpec - define api first, then generate open api and zod.
- **(W)** check release management tools although we really don't need one! - release-it, changesets, semantic-release, etc.. Now, we will just do npm publish.
