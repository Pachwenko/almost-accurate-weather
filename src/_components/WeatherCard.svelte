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
            <div class="">
                <p>{data.name}</p>
                <div class="grid grid-cols-3 gap-2 justify-items-center">
                    <h3>It may or may not be {data.temperature}&deg;{data.temperatureUnit}</h3>
                    <h3>With winds {data.windSpeed} {data.windDirection}</h3>
                    <img src={data.icon} alt="forecast icon">
                    <h3 class="col-span-3">{data.detailedForecast}</h3>
                </div>
            </div>
            <div>
                <p>{data.name}</p>
                <div class="grid grid-cols-3 gap-2 justify-items-center">
                    <h3>It may or may not be {data.temperature}&deg;{data.temperatureUnit}</h3>
                    <h3>With winds {data.windSpeed} {data.windDirection}</h3>
                    <img src={data.icon} alt="forecast icon">
                    <h3 class="col-span-3">{data.detailedForecast}</h3>
                </div>
            </div>
        </div>
        {:else}
            <h2>{data.name}'s Forecast: {data.shortForecast}</h2>
        {/if}
    </button>
</article>
