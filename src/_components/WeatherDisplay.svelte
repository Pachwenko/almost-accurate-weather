<script>
  import { onMount } from 'svelte';
  export let data;
  function catImage(src, alt) {
    this.src = src;
    this.alt = alt;
  }
  const catImages = {
    default: new catImage('/cats/default_cat.jpg', 'default cat picture'),
    clearDay: new catImage('/cats/justright_cat.jpg', 'A blissful cat picture'),
    hot: new catImage('/cats/hot_cat.jpg', 'A cat feeling hot'),
    cold: new catImage('/cats/cold_cat.jpg', 'A cat feeling cold'),
    snow: new catImage('/cats/snow_cat.jpg', 'A cat covered in snow'),
    sunny: new catImage('/cats/snow_cat.jpg', 'A cat in the sunshin'),
    rainy: new catImage('/cats/rainy_cat.jpg', 'A cat in the rain'),
    rainy2: new catImage('/cats/rainy2_cat.jpg', 'A cat in the rain'),
    windy: new catImage('/cats/windy_cat.jpg', 'A cat in the wind'),
  };
  let image = {
    src: null,
    alt: null
  };
  function getCatImage() {
    // make sure temperature is in fahrenheit
    let temp = "F" === data.temperatureUnit ? data.temperature : data.temperature* 1.8 + 32;
    let windSpeed = data.windSpeed;
    let snowing = data.detailedForecast.toLowerCase().includes("snow");

    if (temp > 60 && temp < 80 && windSpeed < 15) {
      return catImages.clearDay;
    } else if (snowing) {
     return catImages.snow;
    } else {
      // default case, no other scenarios hit
      return catImages.default;
    }
  }
  onMount(() => {
    // this runs when the component is mounted (page is loaded)
    image = getCatImage();
  });
</script>

<article>
  <div class="grid grid-cols-3 gap-2 justify-items-center">
    <h3 class="col-span-3">{data.dayOfWeek}</h3>
    <p>
      <em class="italic">It may or may not be</em>
      <em class="font-bold">{data.temperature}&deg;{data.temperatureUnit}</em>
    </p>
    <p>With winds {data.windSpeed} {data.windDirection}</p>
    <img src={image.src} alt={image.alt} />
    <p class="col-span-3">{data.detailedForecast}</p>
  </div>
</article>
