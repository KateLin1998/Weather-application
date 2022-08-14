let now = new Date();

let h2 = document.querySelector("h2");

let hours = now.getHours();
let minutes = now.getMinutes();
let date = now.getDate();
let days = ["Sun", "Mon", "Tue", "Wedn", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let year = now.getFullYear();

h2.innerHTML = `<p>Current time: ${hours}:${minutes} </p> <p> Current day: ${day} ${date} ${month} ${year}</p>`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h3 = document.querySelector("h3");
  if (searchInput.value) {
    h3.innerHTML = `${searchInput.value}`;
  } else {
    h3.innerHTML = null;
    h3.innerHTML = ``;
  }

  let apiKey = "1b6c0398e1da79a12e6750bada098ecc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;
  let apiUrls = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=imperial`;

  function showTemperature(response) {
    console.log(response.data);
    let temperature = Math.round(response.data.main.temp);
    let h4 = document.querySelector("h4");
    h4.innerHTML = `${temperature}°C`;
  }

  function showTemperatures(response) {
    let temperatures = Math.round(response.data.main.temp);
    let tempo = document.querySelector("#temp");
    tempo.innerHTML = `${temperatures} F`;
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  axios.get(`${apiUrls}&appid=${apiKey}`).then(showTemperatures);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);
