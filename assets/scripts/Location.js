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

      xhr.open('GET', `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`);

      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        const address = response.features[0].properties.address;
        const { town } = address;
        const uf = address['ISO3166-2-lvl4'].split('-')[1];

        this.#location.textContent = `${town} - ${uf}`;
      });

      xhr.send();
    });
  }
}

export { Location }