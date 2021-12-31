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
        <h2>{data.name}'s Forecast</h2>
        <hr />
        {#if expand }
            <br />
            <div class="grid grid-cols-2 gap-2 justify-items-center">
                <h3>It may or may not be {data.temperature}&deg;{data.temperatureUnit}</h3>
                <img src={data.icon} alt="forecast icon">
                <h3 class="col-span-2">{data.detailedForecast}</h3>
            </div>
        {/if}
    </button>
</article>
