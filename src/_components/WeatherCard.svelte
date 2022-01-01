<script>
    import '../styles.css';
    export let data;
    export let expand = true;
</script>

<article class="weatherCard">
    <button 
        on:click={() => expand = !expand}
        class="w-full"
    >
        {#if expand }
        <div class="grid grid-cols-2">
            {#if data.morning}
            <div class="">
                <div class="grid grid-cols-3 gap-2 justify-items-center">
                    <p class="col-span-3">{data.morning.dayOfWeek}</p>
                    <h3>It may or may not be {data.morning.temperature}&deg;{data.morning.temperatureUnit}</h3>
                    <h3>With winds {data.morning.windSpeed} {data.morning.windDirection}</h3>
                    <img src={data.morning.icon} alt="forecast icon">
                    <h3 class="col-span-3">{data.morning.detailedForecast}</h3>
                </div>
            </div>
            {/if}
            {#if data.night}
            <div>
                <div class="grid grid-cols-3 gap-2 justify-items-center border-l">
                    <p class="col-span-3">{data.night.dayOfWeek} night</p>
                    <h3>It may or may not be {data.night.temperature}&deg;{data.night.temperatureUnit}</h3>
                    <h3>With winds {data.night.windSpeed} {data.night.windDirection}</h3>
                    <img src={data.night.icon} alt="forecast icon">
                    <h3 class="col-span-3">{data.night.detailedForecast}</h3>
                </div>
            </div>
            {/if}
        </div>
        {:else}
            <h2>{data.morning.name}'s Forecast: {data.morning.shortForecast}</h2>
        {/if}
    </button>
</article>
