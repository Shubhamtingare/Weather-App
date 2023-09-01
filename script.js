const apiKey = "2f63047f7cd540e8a52936b832942a03";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityName = document.querySelector(".header input");
const searchbtn = document.querySelector(".header button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
  let response = await fetch(apiUrl + city + "&appid=" + apiKey);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".main").style.display = "none";
    document.querySelector(".footer").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    let temperature = document.querySelector(".temp");
    temperature.innerHTML = Math.round(data.main.temp) + "°c";

    let name = document.querySelector(".name");
    name.innerHTML = data.name;

    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity + "%";

    let windSpeed = document.querySelector(".wind");
    windSpeed.innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/clear.png";
    } else {
      weatherIcon.src = "images/clear.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".main").style.display = "block";
    document.querySelector(".footer").style.display = "flex";
  }
}
const searchWeather = () => {
  checkWeather(cityName.value);
};

searchbtn.addEventListener("click", searchWeather);
