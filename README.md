<h1 align="center">Remix Boilerplate</h1>

<p align="center">
  <img alt="Made by" src="https://img.shields.io/badge/made%20by-Morpa%20-%2356BEB8">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/morpa/Remix-Styled-Components-Boilerplate.svg?color=56BEB8">

  <img alt="Code size" src="https://img.shields.io/github/languages/code-size/morpa/Remix-Styled-Components-Boilerplate.svg?color=56BEB8">

  <img alt="Github top language" src="https://img.shields.io/github/languages/top/Morpa/Remix-Styled-Components-Boilerplate?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/Morpa/Remix-Styled-Components-Boilerplate?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Morpa/Remix-Styled-Components-Boilerplate?color=56BEB8">

</p>

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [Remix](https://remix.run/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Learn More

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
