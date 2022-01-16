import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';

export default {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		adapter: adapter({
			// default options
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		})
	}
};