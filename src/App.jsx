import './App.css';
import http from 'axios';
import React, { useState, useEffect } from 'react';
import background from '../src/images/sky-dark-light-clouds.jpg';
import BasicCityData from './components/BasicCityData';
import WeatherForecast from './components/WeatherForecast';

function App() {
  const [basicCity, setBasicCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [searched, setSearched] = useState("");
  const [celsius, setCelsius] = useState(true);
  const [kmPerHour, setKmPerHour] = useState(true);

  const api = "http://api.weatherapi.com/v1/forecast.json?";
  const key = "key=fa7cf46dad1d4b5f8c992048220306&q=";

  
  const found = (e) => {
    setSearched(e.target.value);
    if(e.target.value < 1) setWeatherData(null);
  }
  
  useEffect(() => {
    //console.log(searched);
    const budapest = async () => {
      let basicResponse = await http.get("http://api.weatherapi.com/v1/forecast.json?key=fa7cf46dad1d4b5f8c992048220306&q=Budapest&days=3");
      setBasicCity(basicResponse.data);
    };
    budapest();
  
    const load = async (e) => {
      let response = await http.get(api + key + searched + "&days=3");
      setWeatherData(response.data);
    };
    if (searched.length >= 3) load();
  }, [searched])

  const metricToImperial = () => {
    setCelsius(!celsius);
    setKmPerHour(!kmPerHour);
  };

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1
    },
  };

  return (
    <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh'}}>
      <div className="App" >
        <header className="App-header">

          <input placeholder='Find your city' onChange={found}/>
            {
                weatherData ?
                <WeatherForecast weatherData={weatherData} celsius={celsius} kmPerHour={kmPerHour} metricToImperial={metricToImperial} responsive={responsive}/>
                : 
                <BasicCityData basicCity={basicCity} celsius={celsius} kmPerHour={kmPerHour} metricToImperial={metricToImperial} responsive={responsive}/>
            }
        </header>
      </div>
    </div>
  );
}

export default App;