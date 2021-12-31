<script>
	// docs for weather.gov API https://www.weather.gov/documentation/services-web-api

	import { onMount } from 'svelte';
	import '../styles.css';
	import WeatherCard from '../_components/WeatherCard.svelte';

	const DEBUGGING = false;
	// const DEBUGGING = true;
	const defaultLocationData = {
		city: 'Salt Lake City',
		state: 'UT',
		office: 'SLC',
		gridX: 97,
		gridY: 176,
		lat: 40.788333,
		lng: -111.977778
	};
	let locationData = {};
	let forecast = [];
	// let todaysForecast = {
	// 	now: null,
	// 	tonight: null // may be missing if it is currently night time (current sample data)
	// };

	onMount(async () => {
		await initializePage();
		console.log('done');
	});

	function initializePage() {
		// asks for permission to get user's location
		// then populates the page with the forecast
		navigator.geolocation.getCurrentPosition((success) => {
			locationData.lat = success.coords.latitude,
			locationData.lng = success.coords.longitude
			setLocationGridInfo(locationData.lat, locationData.lng);
			retrieveForecast();
		}, (error) => {
			locationData = defaultLocationData;
			retrieveForecast();
		});
	}

	function pointsUrl(latitude, longitude) {
		return `https://api.weather.gov/points/${latitude},${longitude}`;
	}

	function forecastUrl(office, gridX, gridY) {
		return `https://api.weather.gov/gridpoints/${office}/${gridX},${gridY}/forecast`;
	}

	async function getGeocode(address) {
		// *****************
		// not used yet, will probably allow entering an address as the last thing we do
		// for now we can just request the user's location to get a lat/lng
		// *****************
		// use OSM to turn addresjs into lat/lng
		// const response = await fetch('https://nominatim.openstreetmap.org/search?q=west+des+moines&format=geocodejson');
		// let data = await response.json();
		// console.log(data);
		// call our serverless function
		// -------------------------------------------
		// keep this incase we need to use a custom API for geolocation stuff
		// if (!lat || !lng) {
		// 	const customGeoIPResponse = await fetch('/geolocate.json').then((response) =>
		// 		response.json()
		// 	);
		// 	lat = customGeoIPResponse.latitude;
		// 	lng = customGeoIPResponse.longitude;
		// }
	}

	async function setLocationGridInfo(lat, lng) {
		let pointsResponse;
		// TODO: trim the lat/lng to the preicison wanted by weather.gov to avoid extra API calls
		// looks like they want 4 decimals
		if (DEBUGGING) {
			pointsResponse = await fetch('/samplepointsSLC.json').then((response) => response.json());
		} else {
			pointsResponse = await fetch(pointsUrl(locationData.lat, locationData.lng)).then((response) => response.json());
		}
		// console.log(pointsResponse);
		locationData.office = pointsResponse.properties.gridId;
		locationData.gridX = pointsResponse.properties.gridX;
		locationData.gridY = pointsResponse.properties.gridY;
		locationData.city = pointsResponse.properties.relativeLocation.properties.city;
		locationData.state = pointsResponse.properties.relativeLocation.properties.state;
	}

	async function retrieveForecast() {
		const TONIGHT = 'Tonight';
		if (!locationData.office || !locationData.gridX || !locationData.gridY) {
			await setLocationGridInfo(locationData.lat, locationData.lng);
		}
		let forecastResponse;
		if (DEBUGGING) {
			forecastResponse = await fetch('/sampleForecastSLCAfternoon.json').then((response) =>
				response.json()
			);
		} else {
			forecastResponse = await fetch(
				forecastUrl(locationData.office, locationData.gridX, locationData.gridY)
			).then((response) => response.json());
		}
		forecast = forecastResponse.properties.periods;
		// if (forecastResponse.properties.periods[0].name === TONIGHT) {
		// 	// we only have 1 item to display for today
		// 	todaysForecast.now = forecastResponse.properties.periods[0];
		// } else {
		// 	todaysForecast.now = forecastResponse.properties.periods[0];
		// 	todaysForecast.tonight = forecastResponse.properties.periods[1];
		// }
	}
</script>

<svelte:head>
	<title>Your fun and honest Weather forecast</title>
</svelte:head>

<div class="mx-auto bg-gray-900 text-gray-100 flex flex-col mx-auto text-center min-h-screen">
	<h1>Welcome to a special weather App. It tells you the weather, but is honest about it</h1>
	<!-- <div class="text-gray-900 p-4">
		<input value={locationData.lat} type="text" />:<input value={locationData.lng} type="text" />
	</div> -->
	{#if locationData.city && locationData.state}
		<h2>{locationData.city}, {locationData.state}</h2>
	{/if}
	<!-- <button on:click={retrieveForecast} class="purplebutton w-1/3 mx-auto">Get forecast</button> -->
	{#each forecast as f, i}
	<div class="py-2">
		{#if i === 0}
			<WeatherCard data={f} expand={true}/>
		{:else}
			<WeatherCard data={f} expand={false}/>
		{/if}
	</div>
	{/each}
	<div class="object-bottom">
		<p>Data provided by the US NWS. <a href="https://github.com/Pachwenko/almost-accurate-weather">View source code</a></p>
	</div>
</div>
