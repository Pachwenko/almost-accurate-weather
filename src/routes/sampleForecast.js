export default function sampleForecast() {
  return {
    "@context": [
      "https://geojson.org/geojson-ld/geojson-context.jsonld",
      {
        "@version": "1.1",
        "wx": "https://api.weather.gov/ontology#",
        "geo": "http://www.opengis.net/ont/geosparql#",
        "unit": "http://codes.wmo.int/common/unit/",
        "@vocab": "https://api.weather.gov/ontology#"
      }
    ],
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            -93.8175316,
            41.5971713
          ],
          [
            -93.8177863,
            41.5753317
          ],
          [
            -93.78859059999999,
            41.5751389
          ],
          [
            -93.78832969999999,
            41.5969785
          ],
          [
            -93.8175316,
            41.5971713
          ]
        ]
      ]
    },
    "properties": {
      "updated": "2021-12-20T20:51:33+00:00",
      "units": "us",
      "forecastGenerator": "BaselineForecastGenerator",
      "generatedAt": "2021-12-21T01:22:26+00:00",
      "updateTime": "2021-12-20T20:51:33+00:00",
      "validTimes": "2021-12-20T14:00:00+00:00/P7DT11H",
      "elevation": {
        "unitCode": "wmoUnit:m",
        "value": 301.1424
      },
      "periods": [
        {
          "number": 1,
          "name": "Tonight",
          "startTime": "2021-12-20T19:00:00-06:00",
          "endTime": "2021-12-21T06:00:00-06:00",
          "isDaytime": false,
          "temperature": 17,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "2 to 9 mph",
          "windDirection": "NE",
          "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
          "shortForecast": "Mostly Clear",
          "detailedForecast": "Mostly clear, with a low around 17. Northeast wind 2 to 9 mph."
        },
        {
          "number": 2,
          "name": "Tuesday",
          "startTime": "2021-12-21T06:00:00-06:00",
          "endTime": "2021-12-21T18:00:00-06:00",
          "isDaytime": true,
          "temperature": 39,
          "temperatureUnit": "F",
          "temperatureTrend": "falling",
          "windSpeed": "6 to 20 mph",
          "windDirection": "WSW",
          "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
          "shortForecast": "Sunny",
          "detailedForecast": "Sunny. High near 39, with temperatures falling to around 33 in the afternoon. Wind chill values as low as 9. West southwest wind 6 to 20 mph, with gusts as high as 29 mph."
        },
        {
          "number": 3,
          "name": "Tuesday Night",
          "startTime": "2021-12-21T18:00:00-06:00",
          "endTime": "2021-12-22T06:00:00-06:00",
          "isDaytime": false,
          "temperature": 17,
          "temperatureUnit": "F",
          "temperatureTrend": "rising",
          "windSpeed": "2 to 14 mph",
          "windDirection": "WNW",
          "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
          "shortForecast": "Mostly Clear",
          "detailedForecast": "Mostly clear. Low around 17, with temperatures rising to around 20 overnight. West northwest wind 2 to 14 mph, with gusts as high as 21 mph."
        },
        {
          "number": 4,
          "name": "Wednesday",
          "startTime": "2021-12-22T06:00:00-06:00",
          "endTime": "2021-12-22T18:00:00-06:00",
          "isDaytime": true,
          "temperature": 40,
          "temperatureUnit": "F",
          "temperatureTrend": "falling",
          "windSpeed": "3 to 14 mph",
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
          "shortForecast": "Sunny",
          "detailedForecast": "Sunny. High near 40, with temperatures falling to around 35 in the afternoon. South wind 3 to 14 mph, with gusts as high as 22 mph."
        },
        {
          "number": 5,
          "name": "Wednesday Night",
          "startTime": "2021-12-22T18:00:00-06:00",
          "endTime": "2021-12-23T06:00:00-06:00",
          "isDaytime": false,
          "temperature": 28,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "10 mph",
          "windDirection": "SSW",
          "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
          "shortForecast": "Partly Cloudy",
          "detailedForecast": "Partly cloudy, with a low around 28. South southwest wind around 10 mph."
        },
        {
          "number": 6,
          "name": "Thursday",
          "startTime": "2021-12-23T06:00:00-06:00",
          "endTime": "2021-12-23T18:00:00-06:00",
          "isDaytime": true,
          "temperature": 50,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "6 to 10 mph",
          "windDirection": "SW",
          "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
          "shortForecast": "Mostly Sunny",
          "detailedForecast": "Mostly sunny, with a high near 50."
        },
        {
          "number": 7,
          "name": "Thursday Night",
          "startTime": "2021-12-23T18:00:00-06:00",
          "endTime": "2021-12-24T06:00:00-06:00",
          "isDaytime": false,
          "temperature": 37,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "6 to 10 mph",
          "windDirection": "S",
          "icon": "https://api.weather.gov/icons/land/night/bkn?size=medium",
          "shortForecast": "Mostly Cloudy",
          "detailedForecast": "Mostly cloudy, with a low around 37."
        },
        {
          "number": 8,
          "name": "Friday",
          "startTime": "2021-12-24T06:00:00-06:00",
          "endTime": "2021-12-24T18:00:00-06:00",
          "isDaytime": true,
          "temperature": 51,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "8 to 14 mph",
          "windDirection": "WSW",
          "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
          "shortForecast": "Partly Sunny",
          "detailedForecast": "Partly sunny, with a high near 51."
        },
        {
          "number": 9,
          "name": "Friday Night",
          "startTime": "2021-12-24T18:00:00-06:00",
          "endTime": "2021-12-25T06:00:00-06:00",
          "isDaytime": false,
          "temperature": 26,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "8 to 12 mph",
          "windDirection": "NW",
          "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
          "shortForecast": "Mostly Clear",
          "detailedForecast": "Mostly clear, with a low around 26."
        },
        {
          "number": 10,
          "name": "Christmas Day",
          "startTime": "2021-12-25T06:00:00-06:00",
          "endTime": "2021-12-25T18:00:00-06:00",
          "isDaytime": true,
          "temperature": 43,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "9 mph",
          "windDirection": "WSW",
          "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
          "shortForecast": "Mostly Sunny",
          "detailedForecast": "Mostly sunny, with a high near 43."
        },
        {
          "number": 11,
          "name": "Saturday Night",
          "startTime": "2021-12-25T18:00:00-06:00",
          "endTime": "2021-12-26T06:00:00-06:00",
          "isDaytime": false,
          "temperature": 26,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "7 mph",
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
          "shortForecast": "Partly Cloudy",
          "detailedForecast": "Partly cloudy, with a low around 26."
        },
        {
          "number": 12,
          "name": "Sunday",
          "startTime": "2021-12-26T06:00:00-06:00",
          "endTime": "2021-12-26T18:00:00-06:00",
          "isDaytime": true,
          "temperature": 47,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "7 to 10 mph",
          "windDirection": "SE",
          "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
          "shortForecast": "Mostly Sunny",
          "detailedForecast": "Mostly sunny, with a high near 47."
        },
        {
          "number": 13,
          "name": "Sunday Night",
          "startTime": "2021-12-26T18:00:00-06:00",
          "endTime": "2021-12-27T06:00:00-06:00",
          "isDaytime": false,
          "temperature": 26,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "6 to 9 mph",
          "windDirection": "E",
          "icon": "https://api.weather.gov/icons/land/night/bkn?size=medium",
          "shortForecast": "Mostly Cloudy",
          "detailedForecast": "Mostly cloudy, with a low around 26."
        },
        {
          "number": 14,
          "name": "Monday",
          "startTime": "2021-12-27T06:00:00-06:00",
          "endTime": "2021-12-27T18:00:00-06:00",
          "isDaytime": true,
          "temperature": 40,
          "temperatureUnit": "F",
          "temperatureTrend": null,
          "windSpeed": "12 mph",
          "windDirection": "NNW",
          "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
          "shortForecast": "Mostly Sunny",
          "detailedForecast": "Mostly sunny, with a high near 40."
        }
      ]
    }
  }
}