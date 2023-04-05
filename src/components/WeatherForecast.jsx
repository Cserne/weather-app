import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WeatherForecast = ({ weatherData, celsius, kmPerHour, metricToImperial, responsive}) => {
  
  return (
    <div>
      {
        weatherData &&
        <div className='container'>

          <div className='locationName'>
            {weatherData.location.name}
            <div className='regionName'>({weatherData.location.region}, {weatherData.location.country})</div>
            {
              celsius ?
              <button onClick={metricToImperial}>imperial</button>
              :
              <button onClick={metricToImperial}>metric</button>
            }
          </div>

          <div className='top'>
            <div>
              {
                celsius ? 
                <div className='celsius'>{Math.round(weatherData.current.temp_c)}°C</div>
                :
                <div className='celsius'>{Math.round(weatherData.current.temp_f)}°F</div>
              }
              <img alt='icon' src={`https:${weatherData.current.condition.icon}`}></img>
            </div>
            <div className='conditionText'>{weatherData.current.condition.text}</div>
          </div>

          <div className='bottom'>
            <div>Humidity: {weatherData.current.humidity}%</div>
            <div>UV-index: {weatherData.current.uv}</div>
            <div>
              {
                kmPerHour ?
                <div>Wind: {Math.round(weatherData.current.wind_kph)} km/h</div>
                : 
                <div>Wind: {Math.round(weatherData.current.wind_mph)} m/h</div>
              }
            </div>
          </div>

          <div className='localTime'>Local time: {weatherData.location.localtime.substring(11, 16)}</div>

          <div className='foreCastContainer'>
            <Carousel infinite={false} autoPlay={false} responsive={responsive}>
              {
                weatherData.forecast.forecastday[0].hour.map((h, i) => (
                  <div key={i}>
                    <div className='time'>{h.time.substring(11, 16)}</div>
                    <hr></hr>
                    {
                      celsius ?
                      <div>{Math.round(h.temp_c)}°C</div>
                      :
                      <div>{Math.round(h.temp_f)}°F</div>
                    }
                  </div>
                ))
              }
            </Carousel>
          </div>

          <div >
            <div className='threeDayForecastContainer'>{weatherData.forecast.forecastday.map((day) => (
              <div className='threeDayForecast'>
                <div>{day.date}</div>
                {
                  celsius ?
                  <div>{Math.round(day.day.avgtemp_c)}°C</div>
                  :
                  <div>{Math.round(day.day.avgtemp_f)}°F</div>
                }
              </div>
            ))}
            </div>
          </div>

        </div>    
      }
    </div>
  )
}

export default WeatherForecast