const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d95219989amsh06c228a94995b36p125696jsn7374752df48c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
let cities = [
  "Vijayawada",
  "Chennai",
  "Delhi",
  "Kolkata",
  "Mumbai",
  "Visakhapatnam",
];
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  cities = [change.value,...cities.slice(0,5)];
  console.log(cities);
  getWeather(change.value);
  getWeather2(cities[0]);
  getWeather3(cities[1]);
  getWeather4(cities[2]);
  getWeather5(cities[3]);
  getWeather6(cities[4]);
  getWeather7(cities[5]);
});

getWeather("Tenali");

const getWeather2 = (city) => {
  cityName1.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      feels_like1.innerHTML = response.feels_like;
      humidity1.innerHTML = response.humidity;
      max_temp1.innerHTML = response.max_temp;
      min_temp1.innerHTML = response.min_temp;
      sunrise1.innerHTML = response.sunrise;
      sunset1.innerHTML = response.sunset;
      temp1.innerHTML = response.temp;
      wind_degrees1.innerHTML = response.wind_degrees;
      wind_speed1.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getWeather2(cities[0]);

const getWeather3 = (city) => {
  cityName2.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      feels_like2.innerHTML = response.feels_like;
      humidity2.innerHTML = response.humidity;
      max_temp2.innerHTML = response.max_temp;
      min_temp2.innerHTML = response.min_temp;
      sunrise2.innerHTML = response.sunrise;
      sunset2.innerHTML = response.sunset;
      temp2.innerHTML = response.temp;
      wind_degrees2.innerHTML = response.wind_degrees;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getWeather3(cities[1]);

const getWeather4 = (city) => {
  cityName3.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      feels_like3.innerHTML = response.feels_like;
      humidity3.innerHTML = response.humidity;
      max_temp3.innerHTML = response.max_temp;
      min_temp3.innerHTML = response.min_temp;
      sunrise3.innerHTML = response.sunrise;
      sunset3.innerHTML = response.sunset;
      temp3.innerHTML = response.temp;
      wind_degrees3.innerHTML = response.wind_degrees;
      wind_speed3.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getWeather4(cities[2]);

const getWeather5 = (city) => {
  cityName4.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      feels_like4.innerHTML = response.feels_like;
      humidity4.innerHTML = response.humidity;
      max_temp4.innerHTML = response.max_temp;
      min_temp4.innerHTML = response.min_temp;
      sunrise4.innerHTML = response.sunrise;
      sunset4.innerHTML = response.sunset;
      temp4.innerHTML = response.temp;
      wind_degrees4.innerHTML = response.wind_degrees;
      wind_speed4.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getWeather5(cities[3]);

const getWeather6 = (city) => {
  cityName5.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      feels_like5.innerHTML = response.feels_like;
      humidity5.innerHTML = response.humidity;
      max_temp5.innerHTML = response.max_temp;
      min_temp5.innerHTML = response.min_temp;
      sunrise5.innerHTML = response.sunrise;
      sunset5.innerHTML = response.sunset;
      temp5.innerHTML = response.temp;
      wind_degrees5.innerHTML = response.wind_degrees;
      wind_speed5.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getWeather6(cities[4]);

const getWeather7 = (city) => {
  cityName6.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      feels_like6.innerHTML = response.feels_like;
      humidity6.innerHTML = response.humidity;
      max_temp6.innerHTML = response.max_temp;
      min_temp6.innerHTML = response.min_temp;
      sunrise6.innerHTML = response.sunrise;
      sunset6.innerHTML = response.sunset;
      temp6.innerHTML = response.temp;
      wind_degrees6.innerHTML = response.wind_degrees;
      wind_speed6.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getWeather7(cities[5]);
