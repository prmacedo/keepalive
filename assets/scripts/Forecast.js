class Forecast {
  #temperature;
  #icon;
  #apiKey = "7521c9062a094e56b6e13950221310";

  constructor() {
    this.#temperature = document.querySelector(".js-temperature");
    this.#icon = document.querySelector(".js-forecastIcon");

    this.#getTemperature();
  }

  #getTemperature() {
    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;
      const xhr = new XMLHttpRequest();

      xhr.open('GET', `http://api.weatherapi.com/v1/current.json?key=${this.#apiKey}&q=${latitude},${longitude}`);

      xhr.addEventListener("load", () => {
        const weatherInfo = JSON.parse(xhr.responseText);
        const temperatureValue = weatherInfo.current.temp_c.toFixed(0);

        this.#temperature.textContent = `${temperatureValue}°`;
        this.#icon.src = `https:${weatherInfo.current.condition.icon}`
      });

      xhr.send();
    });
  }
}

export { Forecast }