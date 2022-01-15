import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-cloudflare';

export default {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		adapter: adapter(),
		vite: () => ({})
	}
};