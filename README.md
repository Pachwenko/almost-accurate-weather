# [Almost Accurate Weather](https://nostalgic-kare-4cc6ce.netlify.app/)

[See this site live here](https://nostalgic-kare-4cc6ce.netlify.app/)


An honest and fun weather application. Built using the [weather.gov API](https://www.weather.gov/documentation/services-web-api) which requires a gridpoint and that gridpoint requires knowing a geolocation so we are using [a free lookup API](https://ipapi.co).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/github.com/Pachwenko/almost-accurate-weather)


## [Sveltekit documention](https://kit.svelte.dev/docs)

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
