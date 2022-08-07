# Contribution Guidelines

When contributing to `start-coding-challenge` whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded.
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/martijnd/start-coding-challenge/issues) for known issues or fixes.

## How to Contribute

1. [Open an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) and describe the problem.
2. [Fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to your own GitHub account, then [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your machine.
3. Follow the [README](https://github.com/martijnd/start-coding-challenge#readme) to install the project.
4. Create a new branch and implement your changes.

> Note: We use `commitlint` to autoupdate the changelog and versioning.
>
> - Make sure you follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) guidelines when making commits.
> - Do not manually update the [changelog](./CHANGELOG.md) and version in the [package.json](./package.json).

5. Open a pull request! All pull requests must be made to the `main` branch.

## Adding new coding challenges

Help me with adding some coding challenges! The challenges can range from very easy to expert level.
Since I provide the challenges in both TypeScript and JavaScript, the exercises are duplicated in the project.

The best way to add a challenge, is to copy over an existing challenge from the `src/exercises/ts` folder.
Create a new file, paste in the copied contents and modify it to your needs. Think about the level of the challenge, whether it's
a very easy, easy, medium, hard or expert level challenge and place it inside the appropriate folder.

Once your challenge is added, you _must_ run the following command to generate the JavaScript version for it.

```bash
npm run detype
```

This command will generate the JavaScript version of the challenge in the `src/exercises/js` folder. Please check this file to make sure it happened correctly.

## Contributor Development Setup

```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Initial build
pnpm run build

# Start the package locally
pnpm start
```

This contribution guide is inspired by the [Next.js contribution guide.](https://github.com/vercel/next.js/blob/canary/contributing.md)
