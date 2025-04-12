# Backing Tracks Isomorphic

Contains code that we use on both the client and server, namely:

- zod schemas... spent a lot of time thinking if want to use something like **TypeSpec** to first define my endpoints there. And then generate openapi and zod schemas.. Would be really cool to do it in such an API first approach. But decided it was too much for this. Might try it in a big prod someday.
- ts types
- possibly more in the future

Code is built and published to npm from my machine :P

1. Bump up the version.
2. `npm run build`
3. `npm publish`
4. git commit & push.

For local integration of this bulld with other projects there are quite a few different ways:

- npm link
- just point the dependacy to a file
- yalc

## TODO (MoSCoW):

- **(M)** CI/CD with GitHub Actions - build and publish to npm - we should qualify for the free plan.
- **(C)** TypeSpec - define api first, then generate open api and zod.
- **(W)** check release management tools although we really don't need one! - release-it, changesets, semantic-release, etc.. Now, we will just do npm publish.
