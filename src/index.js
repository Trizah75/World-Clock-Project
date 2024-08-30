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
