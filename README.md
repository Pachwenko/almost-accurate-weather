# [Almost Accurate Weather](https://weather.patrickmccartney.dev)

[See this site live here](https://weather.patrickmccartney.dev)


An honest and fun weather application. Built using the [weather.gov API](https://www.weather.gov/documentation/services-web-api) which requires a gridpoint and retreiving that gridpoint requires having a geolocation. To get a geolocation your [browser location is requested](https://w3c.github.io/geolocation-api/#dom-navigator-geolocation). To allow viewing weather in other locations we are making use of [the free geocoding API Nominatim](https://nominatim.org/release-docs/develop/api/Search/#examples).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/github.com/Pachwenko/almost-accurate-weather)


## [Sveltekit documention](https://kit.svelte.dev/docs)

## Developing

Once you've created a project and installed dependencies with `pnpm install` (use `corepack enable` if using node 16.3 or newer, else see [pnpm documentation](https://pnpm.io/installation)), start a development server:

```bash
npm run dev
```

## Building

This site uses the [sveltekit static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) which outputs the build site to the build folder. You can make use of workers/serverless functions with sveltekit, but this site doesn't need anything fancy.

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
