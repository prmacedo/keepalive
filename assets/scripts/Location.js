class Location {
  #location;

  constructor() {
    this.#location = document.querySelector('.js-location');

    this.#getLocation();
  }

  #getLocation() {
    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;
      const xhr = new XMLHttpRequest();

      xhr.open('GET', `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}&zoom=10`);

      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        const properties = response.features[0].properties;
        const city = properties.name;
        const uf = properties.address['ISO3166-2-lvl4'].split('-')[1];

        this.#location.textContent = `${city} - ${uf}`;
      });

      xhr.send();
    });
  }
}

export { Location }