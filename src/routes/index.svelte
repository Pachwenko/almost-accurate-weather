<script>
    // import '../styles.css';
	// const forecastUrl = 'https://api.weather.gov/gridpoints/DMX/66,48/forecast';
	// docs for weather.gov API https://www.weather.gov/documentation/services-web-api
	let city = 'West Des Moines';
	let state = 'IA';
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
        try {
            const geoIPResponse = await fetch(
                // won't work due to some weird CORS thing running locally with http
                // may work once deployed...
                'https://ipapi.co/json/',
            );
            if (geoIPResponse.status === 200) {
                const data = await geoIPResponse.json();
                lat = data.latitude;
                lng = data.longitude;
            }
        } catch (error) {
            // fails for local development so we need to catch it for now untill
            // we can figure out a better solution

            // keep this incase we need to use a custom API for geoip stuff
            // if (!lat || !lng) {
            // 	const customGeoIPResponse = await fetch('/geolocate.json').then((response) =>
            // 		response.json()
            // 	);
            // 	lat = customGeoIPResponse.latitude;
            // 	lng = customGeoIPResponse.longitude;
            // }
        }

		const pointsResponse = await fetch(pointsUrl()).then((response) => response.json());
        // const pointsResponse = await fetch('/samplepointsWDM.json').then((response) => response.json());
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
		const response = await fetch(forecastUrl()).then((response) => response.json());
		// const response = await fetch('/sampleForecastNighttime.json').then((response) => response.json());
        todaysForecast.now = response.properties.periods[0];
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

<body class="prose">
<h1>Welcome to a special weather App. It tells you the weather but is fun and honest about it</h1>
<button on:click={getForecast}>Get forecast</button>
{#if todaysForecast.now}
    <h2>Today's forecast for {city}, {state}</h2>
	{#each Object.entries(todaysForecast.now) as [key, value]}
		<h2>{key} : {value}</h2>
	{/each}
{/if}
</body>