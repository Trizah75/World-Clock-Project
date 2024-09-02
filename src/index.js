function updateTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector("#paris-date");
  let parisTimeElement = parisElement.querySelector("#paris-time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss");

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector("#london-date");
  let londonTimeElement = londonElement.querySelector("#london-time");
  let londonTime = moment().tz("Europe/london");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format("h:mm:ss");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector("#tokyo-date");
  let tokyoTimeElement = tokyoElement.querySelector("#tokyo-time");
  let tokyoTime = moment().tz("Asia/tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss");
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName, cityCountry;
  if (cityTimeZone === "Europe/Paris") {
    cityName = "Paris";
    cityCountry = "France";
  } else if (cityTimeZone === "Europe/London") {
    cityName = "London";
    cityCountry = "England";
  } else if (cityTimeZone === "Asia/Tokyo") {
    cityName = "Tokyo";
    cityCountry = "Japan";
  } else if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
    cityName = cityTimeZone.replace("_", " ").split("/")[1];
    cityCountry = cityTimeZone.replace("_", " ").split("/")[0];
  }

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div class="city-info">
            <h2>${cityName}</h2>
            <p>${cityCountry}</p>
            <a href="/">All cities</a>
          </div>
          <div class="time-container">
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            <div class="time">${cityTime.format("h:mm:ss")}</div>
            `;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
