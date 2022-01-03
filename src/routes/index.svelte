<script>
	// docs for weather.gov API https://www.weather.gov/documentation/services-web-api

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
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
	let address = '';
	let displayForecast = false;

	onMount(async () => {
		await initializePage();
	});

	function initializePage() {
		// asks for permission to get user's location
		// then populates the page with the forecast
		if (DEBUGGING) {
			locationData = defaultLocationData;
			retrieveForecast();
		} else {
			navigator.geolocation.getCurrentPosition(
				(success) => {
					(locationData.lat = success.coords.latitude),
						(locationData.lng = success.coords.longitude);
					setLocationGridInfo(locationData.lat, locationData.lng);
					retrieveForecast();
				},
				(error) => {
					locationData = defaultLocationData;
					retrieveForecast();
				},
				{
					enableHighAccuracy: true
				}
			);
		}
	}

	function pointsUrl(latitude, longitude) {
		return `https://api.weather.gov/points/${latitude},${longitude}`;
	}

	function forecastUrl(office, gridX, gridY) {
		return `https://api.weather.gov/gridpoints/${office}/${gridX},${gridY}/forecast`;
	}

	async function setLocationGridInfo(lat, lng) {
		let pointsResponse;
		if (DEBUGGING) {
			pointsResponse = await fetch('/samplepointsSLC.json').then((response) => response.json());
		} else {
			pointsResponse = await fetch(pointsUrl(locationData.lat, locationData.lng)).then((response) =>
				response.json()
			);
		}
		locationData.office = pointsResponse.properties.gridId;
		locationData.gridX = pointsResponse.properties.gridX;
		locationData.gridY = pointsResponse.properties.gridY;
		locationData.city = pointsResponse.properties.relativeLocation.properties.city;
		locationData.state = pointsResponse.properties.relativeLocation.properties.state;
	}

	async function retrieveForecast() {
		const TONIGHT = 'Tonight';
		const startTime = new Date();
		if (!locationData.office || !locationData.gridX || !locationData.gridY) {
			await setLocationGridInfo(locationData.lat, locationData.lng);
		}
		let forecastResponse;
		if (DEBUGGING) {
			// forecastResponse = await fetch('/sampleForecastSLCMorning.json').then((response) =>
			// 	response.json()
			// );
			forecastResponse = await fetch('/sampleForecastNighttime.json').then((response) =>
				response.json()
			);
		} else {
			forecastResponse = await fetch(
				forecastUrl(locationData.office, locationData.gridX, locationData.gridY)
			).then((response) => response.json());
		}
		forecast = groupForecastByDays(forecastResponse.properties.periods);
		const endTime = new Date();
		const waitToDisplayMilliseconds = 1000;
		const elapsed = endTime.getTime() - startTime.getTime();
		if (elapsed < waitToDisplayMilliseconds) {
			setTimeout(() => {
				displayForecast = true;
			}, 1000 - elapsed);
		} else {
			displayForecast = true;
		}
	}

	function groupForecastByDays(forecast) {
		// returns data in format of
		// {
		//   [
		//      {morning: {}, night: {}},
		//      {morning: {}, night: {}},
		// 	 ]
		// }
		// night may be null in the case that the forecast is at nighttime
		// this code is specific to the NWS forecast API
		return forecast.reduce((accumulator, _, index) => {
			if (index < forecast.length - 1) {
				let firstDay = new Date(forecast[index].startTime).getDay();
				let secondDay = new Date(forecast[index + 1].startTime).getDay();
				if (firstDay === secondDay) {
					let newForecast = {
						morning: forecast[index],
						night: forecast[index + 1]
					};
					newForecast.morning.dayOfWeek = getWeekDayName(firstDay);
					newForecast.night.dayOfWeek = getWeekDayName(secondDay);
					accumulator.push(newForecast);
				} else if (index === 0) {
					let newForecast = {
						morning: forecast[index],
						night: null
					};
					newForecast.morning.dayOfWeek = getWeekDayName(firstDay);
					accumulator.push(newForecast);
				}
			}
			return accumulator;
		}, []);
	}

	function getWeekDayName(day) {
		return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
	}

	async function getForecastForAddress() {
		if (address.length > 0) {
			displayForecast = false;
			let response;
			if (DEBUGGING) {
				response = await fetch('/geocodeSaltLakeCity.json').then((response) => response.json());
			} else {
				let url = `https://nominatim.openstreetmap.org/search?q=${address}&format=geocodejson`;
				response = await fetch(encodeURI(url)).then((response) => response.json());
			}
			locationData.lng = response.features[0].geometry.coordinates[0];
			locationData.lat = response.features[0].geometry.coordinates[1];
			setLocationGridInfo(locationData.lat, locationData.lng);
			retrieveForecast();
		}
	}
</script>

<svelte:head>
	<title>Your honest Weather forecast</title>
</svelte:head>

<div class="mx-auto bg-stone-900 text-stone-100 flex flex-col mx-auto text-center min-h-screen">
	<h1>Welcome to a special weather App. It tells you the weather, but is honest about it</h1>
	<div class="container mx-auto my-4" id="address-input">
		<input type="text" bind:value={address} placeholder="Enter a location" class="text-gray-900" />
		<button
			on:click={getForecastForAddress}
			class="bg-white hover:bg-stone-100 text-stone-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
		>
			Get Forecast
		</button>
	</div>
	{#if locationData.city && locationData.state}
		<h2 class="text-3xl text-sky-100 m-2">{locationData.city}, {locationData.state}</h2>
	{/if}
	{#if displayForecast}
		{#each forecast as f, i}
			<div class="py-2" in:fade={{ duration: 500 }} out:fade>
				{#if i === 0}
					<WeatherCard data={f} expand={true} />
				{:else}
					<WeatherCard data={f} expand={true} />
				{/if}
			</div>
		{/each}
	{/if}
	<div>
		<p>
			Data provided by the US NWS. <a
				href="https://github.com/Pachwenko/almost-accurate-weather"
				class="normal-link">View source code</a
			>
		</p>
	</div>
</div>
