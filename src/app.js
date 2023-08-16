function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours;
  let day = date.getDay;
  return `${day} ${hours}:${minuntes}`;
  let minuntes = date.getMinutes;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;
  descriptionElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "b37ef2363439c504480df8d372acfaa0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Durban&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
