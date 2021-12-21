/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	// console.log('params next');
	// console.log(params);
	// const geolocated = await fetch('https://example.com');
	// console.log('geolocated next');
	// console.log(geolocated);
	let latitude = 41.5769;
	let longitude = -93.8021;

	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
			'Strict-Transport-Security': 'max-age=3600',
			'X-Frame-Options': 'deny',
			'X-Content-Type-Options': 'nosniff',
			'Cache-Control': 'public, max-age=604800'
		},
		body: {
			latitude: latitude,
			longitude: longitude
		}
	};
}