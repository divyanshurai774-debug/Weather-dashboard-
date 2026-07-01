const API_KEY = "YOUR_API_KEY";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

const city = document.getElementById("city").value;

if(city===""){

alert("Enter city name");

return;

}

getWeather(city);

});

async function getWeather(city){

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

try{

const response = await fetch(url);

if(!response.ok){

throw new Error("City not found");

}

const data = await response.json();

document.getElementById("error").innerText="";

document.getElementById("cityName").innerText=data.name;

document.getElementById("description").innerText=data.weather[0].description;

document.getElementById("temperature").innerText=data.main.temp+" °C";

document.getElementById("humidity").innerText=data.main.humidity;

document.getElementById("wind").innerText=data.wind.speed;

}

catch(error){

document.getElementById("error").innerText=error.message;

}

}
