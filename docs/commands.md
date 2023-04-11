[BACK TO README](../README.md)

## Dependancy command
- `pnpm install` : Allow you to install the dependancy.
- `pnpm outdated` : Check if the dependancy are outdated.
- `pnpm update -L <packageName>` : Allow you to update a specific package.

## Dev command
- `pnpm run dev` : Allow you to run the website in dev mode.
- `pnpm run sb:dev` : Allow you to start the design system (Storybook) from the dev.

## Production
> Useful to debug in case of error from the GitHub action during the test build. Otherwise the build is generated automatically.
- `pnpm run build` : Build of the website.
- `pnpm run start` : Allow you to start the website.
- `pnpm run sb:build` : Build of the StoryBook.
- `pnpm run sb:start` : Allow you to start the StoryBook.

## Code check and Unit test
> Uusually used before a `git push` to detect potential issues.
- `pnpm run lint:fix` : Formating & linting of the code.
- `pnpm run test:unit` : Launch of the unit test.