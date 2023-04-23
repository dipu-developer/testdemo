const date = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const theYear = date.getFullYear();
const theMonth = date.getMonth();
const theDate = date.getDate();
const theDay = date.getDay();
document.getElementById('date').innerHTML= `${days[theDay]}  ${theDate} ${months[theMonth]} ${theYear}`;

const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': 'e045243025msh64fab2d8713ef58p1c0ecdjsn9bfc6f114df8',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  },
  };
  const getWeather= (city)=>{
      cityName.innerHTML= city  
      fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city,
    options
    )
    .then((response) => response.json())
    .then((response) => {
         document.getElementById("temp").innerHTML = response.temp
        humidity.innerHTML = response.humidity
        wind_speed.innerHTML = response.wind_speed
      })
      .catch((err) => console.error(err));   
  }
  submit.addEventListener("click",(e)=>{
      getWeather(city.value)
      console.log(city.value)
      console.log("click button sunction")
      e.preventDefault()
  })
  
  getWeather("Delhi")

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
options
)
.then((response) => response.json())
.then((response) => {
   document.getElementById("temp1").innerHTML = response.temp
  humidity1.innerHTML = response.humidity
  wind_speed1.innerHTML = response.wind_speed
}).catch((err) => console.error(err));  
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Surat",
options
)
.then((response) => response.json())
.then((response) => {
   document.getElementById("temp2").innerHTML = response.temp
  humidity2.innerHTML = response.humidity
  wind_speed2.innerHTML = response.wind_speed
}).catch((err) => console.error(err));   
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Valsad",
options
)
.then((response) => response.json())
.then((response) => {
   document.getElementById("temp3").innerHTML = response.temp
  humidity3.innerHTML = response.humidity
  wind_speed3.innerHTML = response.wind_speed
}).catch((err) => console.error(err));   
