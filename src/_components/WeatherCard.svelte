<script>
  import { fly } from 'svelte/transition';
  import '../styles.css';
  import WeatherDisplay from './WeatherDisplay.svelte';

  export let data;
  export let expand = true;
  $: shortDisplay = data.night
    ? `High: ${data.morning.temperature} Low: ${data.night.temperature}, ${data.morning.shortForecast}`
    : `High: ${data.morning.temperature} ${data.morning.shortForecast}`;
</script>

<article class="weatherCard">
  <div>
    {#if expand}
      <div class:grid={data.night} class="md:grid-cols-2" in:fly={{ y: 5, duration: 250 }}>
        {#if data.morning}
          <WeatherDisplay data={data.morning} />
        {/if}
        {#if data.night}
          <WeatherDisplay data={data.night} />
        {/if}
      </div>
    {:else}
      <h2>{data.morning.name}'s Forecast: {shortDisplay}</h2>
    {/if}
  </div>
</article>
