<script>
	import sampleForecast from './sampleForecast';
	// const forecastUrl = 'https://api.weather.gov/gridpoints/DMX/66,48/forecast';
	// docs for weather.gov API https://www.weather.gov/documentation/services-web-api
	let city = 'West Des Moines';
	let region = 'Iowa';
	let office = 'DMX';
	let gridX = 66;
	let gridY = 48;
	let lat = 41.5769;
	let lng = -93.8021;
	let todaysForecast = {
		now: null,
		tonight: null // may be missing if it is currently night time (current sample data)
	};

	function pointsUrl() {
		return `https://api.weather.gov/points/${lat},${lng}`;
	}

	function forecastUrl() {
		return `https://api.weather.gov/gridpoints/${office}/${gridX},${gridY}/forecast`;
	}

	async function getGridInfo() {
		const geoIPResponse = await fetch(
			// won't work due to some weird CORS thing running locally with http
			// may work once deployed...
			'https://ipapi.co/json/',
			{
				method: 'GET',
				mode: 'no-cors',
				headers: {
					Referer: 'https://localhost:3000'
				}
			}
		);
		if (geoIPResponse.status === 200) {
			const data = await geoIPResponse.json();
			lat = data.latitude;
			lng = data.longitude;
			console.log(`just set lat and lng. ${lat}:${lng}`);
		}
		console.log(`outside context just set lat and lng. ${lat}:${lng}`);
		// keep this incase we need to use a custom API for geoip stuff
		// if (!lat || !lng) {
		// 	const customGeoIPResponse = await fetch('/geolocate.json').then((response) =>
		// 		response.json()
		// 	);
		// 	lat = customGeoIPResponse.latitude;
		// 	lng = customGeoIPResponse.longitude;
		// }
		const pointsResponse = await fetch(pointsUrl()).then((response) => response.json());
		if (pointsResponse.status === 200) {
			office = gridResponse.properties.gridId;
			gridX = gridResponse.properties.gridX;
			gridY = gridResponse.properties.gridY;
		}
	}

	async function getForecast() {
		await getGridInfo();
		const TONIGHT = 'Tonight';
		const response = await fetch(forecastUrl()).then((response) => response.json());
		// const response = sampleForecast();
		// console.log(response);
		if (todaysForecast.now.name === TONIGHT) {
			todaysForecast.now = response.properties.periods[0];
		} else {
			todaysForecast.now = response.properties.periods[0];
			todaysForecast.tonight = response.properties.periods[1];
		}
	}
</script>

<svelte:head>
	<title>Your fun and honest Weather forecast</title>
</svelte:head>

{#if todaysForecast.now}
	{#each Object.entries(todaysForecast.now) as [key, value]}
		<h2>{key} : {value}</h2>
	{/each}
{:else}
	<h2>You are at {city}, {region}</h2>
{/if}
<button on:click={getForecast}>Get forecast for {city}, {region}</button>
<br />
