let now = new Date();

let h2 = document.querySelector("h2");

let hours = now.getHours(); 
let minutes = now.getMinutes();
let date = now.getDate();
let days = ["Sun", "Mon", "Tue", "Wedn", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];
let year = now.getFullYear();

h2.innerHTML = `<p>Current time: ${hours}:${minutes} </p> <p> Current day: ${day} ${date} ${month} ${year}</p>`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector
  ("#search-text-input");

  let h3 = document.querySelector("h3");
  if (searchInput.value) {
    h3.innerHTML = `${searchInput.value}`;
  } else {
    h3.innerHTML = null;
    alert("Please type a city");
  }
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

function farenheit(event) {
  event.preventDefault();
  let link = document.querySelector("h4");
  link.innerHTML = Math.round((16 * 9 / 5) + 32);
  }

function celsius(event) {
  event.preventDefault();
  let links = document.querySelector("h4");
  links.innerHTML = Math.round((60 - 32) * 5/9);
}

  let followLinks = document.querySelector("#celsius");
  let followLink = document.querySelector("#farenheit");
  followLinks.addEventListener("click", celsius)
  followLink.addEventListener("click", farenheit)