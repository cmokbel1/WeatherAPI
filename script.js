savedLoop();
let apiKey = 'c361e4cd9ce2250893c154c7277e8eab';

// CLICKING ON STORED DATA TO RE-RENDER THE HTML //
document.addEventListener('click', event => {
  if (event.target.className.split(' ')[0] === 'btn') {
  event.preventDefault()
  getCity(event.target.innerHTML)
  getCurrent(event.target.innerHTML)
  }
})
//API CURRENT WEATHER DATA //
const getCurrent = (cityName) => {
  //set fetch data for current weather //
  var currentFetch = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`
  // fetch the URL //
  axios.get(currentFetch)
    .then(res => {
      // assign whole data set to variable //
      let current = res.data;
      //log data to verify integrity //
      console.log(current)
      var uviCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${current.coord.lat}&lon=${current.coord.lon}&exclude="hourly,daily"&appid=${apiKey}`;
      axios.get(uviCall)
        .then(res => {
          let sunspots = res.data;
          console.log(sunspots)
        // edit the top of the right-side container //
          $('#daily').text("")
          $('#daily').append(`
          <p class="topLabel">${current.name}</p>
          <img src="https://openweathermap.org/img/w/${current.weather[0].icon}.png"  alt="weather icon"><br>
       <span> Feels Like: ${current.main.feels_like} ºF</span><br>
       <span> Temperature: ${current.main.temp} ºF</span><br>
       <span> Wind Speed: ${current.wind.speed} MPH </span><br>
       <span> Humidity: ${current.main.humidity} %</span><br>
        <span id="uvi"> Uvi: ${sunspots.current.uvi}</span >
      `)
      

      var uvi =sunspots.current.uvi
          function changeColor() {
            console.log(uvi)
            if (uvi > 7) {
              document.getElementById('uvi').style.backgroundColor = "red"
            } else if (uvi > 5) {
              document.getElementById('uvi').style.backgroundColor = "orange"
            } else if (uvi > 2) {
              document.getElementById('uvi').style.backgroundColor = "yellow"
            } else {
              document.getElementById('uvi').style.backgroundColor = "green"
            }
          }
          changeColor(uvi);
        })

    })
    .catch((err) => {
  alert(err)
  return;
 })
};



// API FORCAST QUERY FUNCTION //
const getCity = (cityName) => {
  // log name to verify integrity //
  console.log(cityName)
  // assign API url //
  var urlToFetch = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`
  // fetch the URL //
  axios.get(`${urlToFetch}`)
    .then(res => {
      // assign whole data set to variable //
      let city = res.data;
      //log data to verify integrity //
      console.log(city)
      // edit the top of the right-side container //
      // edit the botton row of right-side container//
      document.getElementById('bottom').innerHTML = `
      <div class="daddy" style="display:flex">
        <div class="card" style="width: 11rem; display:inline-block">
        <ul>
          <li class="card-title">
          ${city.list[0].dt_txt}
        </li>
         <img src="https://openweathermap.org/img/w/${city.list[0].weather[0].icon}.png" class="card-img-top" alt="weather icon"> 
        <li class="card-title">
          ${city.list[0].weather[0].description}
        </li>
        <li class="card-text">
          Humidity: ${city.list[0].main.humidity} %
        </li>
        <li class="card-text">
          Temperature: ${city.list[0].main.temp} ºF
        </li>
        <li class="card-text">
          Minimum Temp: ${city.list[0].main.temp_min} ºF
        </li>
        <li class="card-text">
          Maximum Temp: ${city.list[0].main.temp_max} ºF
        </li>
        <li class="card-text">
          Wind Speed: ${city.list[0].wind.speed} MPH
        </li>
        </ul>
      </div>
      <div class="card" style="width: 11rem; display:inline-block">
      <ul>
         <li class="card-title">
          ${city.list[8].dt_txt}
        </li>
      <img src="https://openweathermap.org/img/w/${city.list[8].weather[0].icon}.png" class="card-img-top" alt="weather icon"> 
      <ul>
        <li class="card-title"> 
          <b>${city.list[8].weather[0].description}</b>
        </li>
        <li class="card-text">
          Humidity: ${city.list[8].main.humidity} %
        </li>
        <li class="card-text">
          Temperature: ${city.list[8].main.temp} ºF
        </li>
        <li class="card-text">
          Minimum Temp: ${city.list[8].main.temp_min} ºF
        </li>
        <li class="card-text">
          Maximum Temp: ${city.list[8].main.temp_max} ºF
        </li>
        <li class="card-text">
          Wind Speed: ${city.list[8].wind.speed} MPH
        </li>
        </ul>
      </div>
      <div class="card" style="width: 11rem; display:inline-block">
      <ul>
       <li class="card-title">
          ${city.list[16].dt_txt}
        </li>
      <img src="https://openweathermap.org/img/w/${city.list[16].weather[0].icon}.png" class="card-img-top" alt="weather icon">
        <li class="card-title">
          <b>${city.list[16].weather[0].description}</b>
        </li>
        <li class="card-text">
          Humidity: ${city.list[16].main.humidity} %
        </li>
        <li class="card-text">
          Temperature: ${city.list[16].main.temp} ºF
        </li>
        <li class="card-text">
          Minimum Temp: ${city.list[16].main.temp_min} ºF
        </li>
        <li class="card-text">
          Maximum Temp: ${city.list[16].main.temp_max} ºF
        </li>
        <li class="card-text">
          Wind Speed: ${city.list[16].wind.speed} MPH
        </li>
      </ul>
      </div>
     
      <div class="card" style="width: 11rem; display:inline-block">
      <ul>
      <li class="card-title">
          ${city.list[24].dt_txt}
        </li>
      <img src="https://openweathermap.org/img/w/${city.list[24].weather[0].icon}.png" class="card-img-top" alt="weather icon">
        <li class="card-title">
          <b>${city.list[24].weather[0].description}</b>
        </li>
        <li class="card-text">
          Humidity: ${city.list[24].main.humidity} %
        </li>
        <li class="card-text">
          Temperature: ${city.list[24].main.temp} ºF
        </li>
        <li class="card-text">
          Minimum Temp: ${city.list[24].main.temp_min} ºF
        </li>
        <li class="card-text">
          Maximum Temp: ${city.list[24].main.temp_max} ºF
        </li>
        <li class="card-text">
          Wind Speed: ${city.list[24].wind.speed} MPH
        </li>
        </ul>
      </div> 
      <div class="card" style="width: 11rem; display:inline-block">
      <ul>
        <li class="card-title">
          ${city.list[32].dt_txt}
        </li>
      <img src="https://openweathermap.org/img/w/${city.list[32].weather[0].icon}.png" class="card-img-top" alt="weather icon">
        <li class="card-title">
          <b>${city.list[32].weather[0].description}</b>
        </li>
        <li class="card-text">
          Humidity: ${city.list[32].main.humidity} %
        </li>
        <li class="card-text">
          Temperature: ${city.list[32].main.temp} ºF
        </li>
        <li class="card-text">
          Minimum Temp: ${city.list[32].main.temp_min} ºF
        </li>
        <li class="card-text">
          Maximum Temp: ${city.list[32].main.temp_max} ºF
        </li>
        <li class="card-text">
          Wind Speed: ${city.list[32].wind.speed} MPH
        </li>
        </ul>
     </div>
 </div>`
    }) .catch((err) => {
          alert("City Was Not Found");
          return;
      })
  };

  searchEvents = [];
  currentWeather =[];
 // SEARCH EVENT OCCURS //
  document.getElementById("searchButton").addEventListener("click", (event) => {
      event.preventDefault();
      // retrieve user input for city //
    cityName = document.getElementById('input').value.toLowerCase();
    // push search history to search events array //
    searchEvents.push(cityName)
    // stringify the search events and store//
    localStorage.setItem('location', JSON.stringify(searchEvents));
    // call API function //
        getCurrent(cityName);
        getCity(cityName);
      // reset input html //
      document.getElementById('input').value = ' ';
      // call local storage loop function //
      savedLoop();
  })


// ITERATE THROUGH SAVED LOCATIONS //
function savedLoop() {
  document.getElementById('saved').innerHTML = ' '
  // PARSE INTO A USEABLE ARRAY
  searches = JSON.parse(localStorage.getItem('location') || "[]")
  // RUN THROUGH FOR EACH LOCATION IN STORAGE //
  searches.forEach(location => {
    // LOAD TO SAVED HTML AS A BUTTON //
    document.getElementById('saved').innerHTML += `<button type = "button" class="btn btn-info">${location}</button><hr>`

  })
}