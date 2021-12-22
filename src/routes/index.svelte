<script>
	import '../styles.css';
	import  WeatherCard from '../_components/WeatherCard.svelte';
	let DEBUGGING = true;
	// const forecastUrl = 'https://api.weather.gov/gridpoints/DMX/66,48/forecast';
	// docs for weather.gov API https://www.weather.gov/documentation/services-web-api
	let city;
	let state;
	let office;
	let gridX;
	let gridY;
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
		// try {
		// 	if (!DEBUGGING) {
		// 		const geoIPResponse = await fetch(
		// 			// won't work due to some weird CORS thing running locally with http
		// 			// may work once deployed...
		// 			'https://ipapi.co/json/'
		// 		);
		// 		if (geoIPResponse.status === 200) {
		// 			const data = await geoIPResponse.json();
		// 			lat = data.latitude;
		// 			lng = data.longitude;
		// 		}
		// 	}
		// } catch (error) {
		// 	// we need to catch the CORS error for now untill we can figure out a better solution
		// 	// keep this incase we need to use a custom API for geoip stuff
		// 	// if (!lat || !lng) {
		// 	// 	const customGeoIPResponse = await fetch('/geolocate.json').then((response) =>
		// 	// 		response.json()
		// 	// 	);
		// 	// 	lat = customGeoIPResponse.latitude;
		// 	// 	lng = customGeoIPResponse.longitude;
		// 	// }
		// }

		let pointsResponse;
		if (DEBUGGING) {
			pointsResponse = await fetch('/samplepointsWDM.json').then((response) => response.json());
		} else {
			pointsResponse = await fetch(pointsUrl()).then((response) => response.json());
		}
		// console.log(pointsResponse);
		office = pointsResponse.properties.gridId;
		gridX = pointsResponse.properties.gridX;
		gridY = pointsResponse.properties.gridY;
		city = pointsResponse.properties.relativeLocation.properties.city;
		state = pointsResponse.properties.relativeLocation.properties.state;
	}

	async function getForecast() {
		const TONIGHT = 'Tonight';
		await getGridInfo(); // need to set up office and grid data first
		let forecastResponse;
		if (DEBUGGING) {
			forecastResponse = await fetch('/sampleForecastNighttime.json').then((response) => response.json());
		} else {
			forecastResponse = await fetch(forecastUrl()).then((response) => response.json());
		}
		// console.log(response);
		if (forecastResponse.properties.periods[0].name === TONIGHT) {
			// we only have 1 item to display for today
			todaysForecast.now = forecastResponse.properties.periods[0];
		} else {
			todaysForecast.now = forecastResponse.properties.periods[0];
			todaysForecast.tonight = forecastResponse.properties.periods[1];
		}
	}
</script>

<svelte:head>
	<title>Your fun and honest Weather forecast</title>
</svelte:head>

<div class="mx-auto bg-gray-900 text-gray-100 flex flex-col mx-auto text-center">
	<h1>Welcome to a special weather App. It tells you the weather but is fun and honest about it</h1>
	<div class="text-gray-900 p-4">
		<input value={lat} type="text">:<input value={lng} type="text">
	</div>
	<button on:click={getForecast} class="purplebutton w-1/3 mx-auto">Get forecast</button>
	{#if city && state}
		<h2>{city}, {state}</h2>
	{/if}
	{#if todaysForecast.now}
		<WeatherCard data={todaysForecast.now} />
	{/if}
</div>