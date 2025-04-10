function updateWeather(response) {
  console.log(response.data.temperature.current);
  let degree = document.querySelector("#degree");
  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.city;

  degree.innerHTML = Math.round(response.data.temperature.current);
}

function searchCity(city) {
  let apiKey = "f2784deoc3ec5b8af02864390dt6ce37";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateWeather);
}

function hanldeSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", hanldeSearchSubmit);
searchCity("Paris");
