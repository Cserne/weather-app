import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BasicCityData = ({ basicCity, celsius, kmPerHour, metricToImperial, responsive }) => {

  return (
    <div>
      {
        basicCity &&
        <div className='container'>

          <div className='locationName'>
            {basicCity.location.name}
            <div className='regionName'>({basicCity.location.region}, {basicCity.location.country})</div>
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
                <div className='celsius'>{Math.round(basicCity.current.temp_c)}°C</div>
                :
                <div className='celsius'>{Math.round(basicCity.current.temp_f)}°F</div>
              }
              <img alt='icon' src={`https:${basicCity.current.condition.icon}`}></img>
            </div>
            <div className='conditionText'>{basicCity.current.condition.text}</div>
          </div>

          <div className='bottom'>
            <div>Humidity: {basicCity.current.humidity}%</div>
            <div>UV-index: {basicCity.current.uv}</div>
            <div>
              {
                kmPerHour ?
                <div>Wind: {Math.round(basicCity.current.wind_kph)} km/h</div>
                : 
                <div>Wind: {Math.round(basicCity.current.wind_mph)} m/h</div>
              }
            </div>
          </div>

          <div className='localTime'>Local time: {basicCity.location.localtime.substring(11, 16)}</div>
          
          <div className='foreCastContainer'>
            <Carousel infinite={false} autoPlay={false} transitionTime={10000} responsive={responsive}>
              {
                basicCity.forecast.forecastday[0].hour.map((h, i) => (
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

          <div>
            <div className='threeDayForecastContainer'>{basicCity.forecast.forecastday.map((day, i) => (
              <div className='threeDayForecast' key={i}>
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

export default BasicCityData