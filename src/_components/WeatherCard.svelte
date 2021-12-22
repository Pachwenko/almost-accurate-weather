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
        <h2>Today's forecast</h2>
    </button>
    <hr />
    {#if expand }
        <br />
        <div class="grid grid-cols-3 gap-2 justify-items-center">
            <h3>{data.temperature}&deg;{data.temperatureUnit}</h3>
            <h3>{data.detailedForecast}</h3>
            <img src={data.icon} alt="forecast icon">
        </div>
    {/if}
</article>
