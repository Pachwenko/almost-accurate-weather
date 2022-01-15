# [Almost Accurate Weather](https://weather.patrickmccartney.dev)

[See this site live here](https://weather.patrickmccartney.dev)


An honest and fun weather application. Built using the [weather.gov API](https://www.weather.gov/documentation/services-web-api) which requires a gridpoint and retreiving that gridpoint requires having a geolocation. To get a geolocation your [browser location is requested](https://w3c.github.io/geolocation-api/#dom-navigator-geolocation). To allow viewing weather in other locations we are making use of [the free geocoding API Nominatim](https://nominatim.org/release-docs/develop/api/Search/#examples).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/github.com/Pachwenko/almost-accurate-weather)


## [Sveltekit documention](https://kit.svelte.dev/docs)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
```

## Building

This site uses the [sveltekit cloudflare-pages adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-cloudflare) which presently just does server side rendering to speed up the first page load (not that we even need that as currently there's no dynamic content on first page load).

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
