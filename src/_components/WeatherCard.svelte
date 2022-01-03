<script>
	import { fly } from 'svelte/transition';
	import '../styles.css';

	export let data;
	export let expand = true;
	$: shortDisplay = data.night
		? `High: ${data.morning.temperature} Low: ${data.night.temperature}, ${data.morning.shortForecast}`
		: `High: ${data.morning.temperature} ${data.morning.shortForecast}`;
</script>

<article class="weatherCard">
	<!-- <div on:click={() => (expand = !expand)} class="w-full"> -->
    <div>
		{#if expand}
			<div class:grid={data.night} class="md:grid-cols-2" in:fly={{ y: 5, duration: 250 }}>
				{#if data.morning}
					<div class="">
						<div class="grid grid-cols-3 gap-2 justify-items-center">
							<h3 class="col-span-3">{data.morning.dayOfWeek}</h3>
							<p>
								<em class="italic">It may or may not be</em> <em class="font-bold">{data.morning.temperature}&deg;{data.morning.temperatureUnit}</em>
                            </p>
							<p>With winds {data.morning.windSpeed} {data.morning.windDirection}</p>
							<img src={data.morning.icon} alt="forecast icon" />
							<p class="col-span-3">{data.morning.detailedForecast}</p>
						</div>
					</div>
				{/if}
				{#if data.night}
					<div>
						<div class="grid grid-cols-3 pl-2 gap-2 justify-items-center md:border-l">
							<h3 class="col-span-3">{data.night.dayOfWeek} night</h3>
							<p>
								<em class="italic">It may or may not be</em> <em class="font-bold">{data.night.temperature}&deg;{data.night.temperatureUnit}</em> 
                            </p>
							<p>With winds {data.night.windSpeed} {data.night.windDirection}</p>
							<img src={data.night.icon} alt="forecast icon" />
							<p class="col-span-3">{data.night.detailedForecast}</p>
						</div>
					</div>
				{/if}
			</div>
		{:else}
			<h2>{data.morning.name}'s Forecast: {shortDisplay}</h2>
		{/if}
	</div>
</article>
