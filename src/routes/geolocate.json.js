/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	// This is likely never going to be used but I'm keeping it until
	// we finish building it, but if we do need to use it we would need to
	// call google maps in here to convert the user's address into a lat/lng for use
	// in the NWS API
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