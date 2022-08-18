import React from "react";
import { useState } from "react";
import './weather.css';


const Weather = () => {

    const[weatherList,setWeatherList]=useState({});
    const [cityName, setCityName] = useState("");

    const searchOption = async(e) => {
      e.stopPropagation()
      e.preventDefault()
      let data = await fetch(
        `http://api.weatherstack.com/current?access_key=41923acf08892b168c6a70e233ca62e3&query=${cityName}`
      );
      let finalData = await data.json();
      setWeatherList(finalData);
    };


  return (
    <>    <form id="search-form">
        <input type="search" placeholder="enter city" id="search-input" required autoComplete="off"
        onChange={(e) => {
          setCityName(e.target.value);
        }}/>
        <br/>
        <button id="search-button"  onClick={searchOption}>GET WEATHER</button>
      </form>

      <main id="container">
        <div id="location">
            <p>{cityName}</p>
        </div>
        <div id="temp">
            {/* <img id="temp-icom" src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" alt=""/> */}
<br/>
            <img
                  src={weatherList && weatherList.current && weatherList.current.weather_icons}
                  height="35px"
                  alt=""
                  class="icon"
                />
            <br/>
            <br/>
            <div class="time">
                <h3>Time-Zone:{weatherList && weatherList.location && weatherList.location.localtime} </h3>
              </div>
            <p>
              <br/>
             
                <span id="temp-unit">
                  temperature:{weatherList && weatherList.current && weatherList.current.temperature}°C</span>
                <br/>
                
                <div class="wind">
                Wind Direction:{weatherList && weatherList.current && weatherList.current.wind_dir}, Wind Speed:{weatherList && weatherList.current && weatherList.current.wind_speed}
              </div>
              <br/>
          
            </p>
        </div>
        <div id="climate">
            <h4>{weatherList && weatherList.current && weatherList.current.weather_descriptions}</h4>
        </div>
        <div id="humidity">
            <p>Humidity:{weatherList && weatherList.current && weatherList.current.humidity}</p>
        </div>
      </main>
      </>

  )
}

export default Weather