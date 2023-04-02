import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const WeatherForecast = ({ weatherData, celsius, celsiusToFahr, showFirstSix, showSecondSix, showThirdSix, showFourthSix, nextSixHours, thirdSixHours, fourthSixHours}) => {
  
  let first6 = weatherData.forecast.forecastday[0].hour.slice(0, 6);
  let second6 = weatherData.forecast.forecastday[0].hour.slice(6, 12);
  let third6 = weatherData.forecast.forecastday[0].hour.slice(12, 18);
  let fourth6 = weatherData.forecast.forecastday[0].hour.slice(18, 24);

  return (
    <div>
      {
        weatherData &&
        <div className='container'>
          <div className='locationName'>{weatherData.location.name}
            <div>({weatherData.location.region}, {weatherData.location.country})</div>
          </div>
            <div className='celsius'>
              {
                celsius ? 
                <div>
                  <span>{weatherData.current.temp_c}°C</span> 
                  <button onClick={celsiusToFahr}>F</button>
                </div>
                :
                <div>
                  {weatherData.current.temp_f}°F 
                  <button onClick={celsiusToFahr}>C</button>
                </div>
              }
            </div>
            <img alt='icon' src={`https:${weatherData.current.condition.icon}`}></img>
          <div className='conditionText'>{weatherData.current.condition.text}</div>
          <div className='bottom'>
            <div>Humidity: {weatherData.current.humidity}%</div>
            <div>UV-index: {weatherData.current.uv}</div>
            <div>Wind: {weatherData.current.wind_kph} km/h / {weatherData.current.wind_mph} m/h</div>
          </div>
          <div>Local time: {weatherData.location.localtime.substring(11, 16)}</div>

          <div className='foreCastContainer'>
          {
            showFirstSix &&
              <div className='sixHours'>
                <button className='hiddenButton'><ArrowBackIosIcon/></button>
                {
                  celsius ?
                  <div className='byHour'>{first6.map((h, i) => (
                    <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_c)}°C</div></div>
                  ))}</div>
                  :
                  <div className='byHour'>{first6.map((h, i) => (
                    <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_f)}°F</div></div>
                  ))}</div>  
                }
                <button onClick={nextSixHours}><ArrowForwardIosIcon/></button>
              </div>
          }
          {
            showSecondSix &&
            <div className='sixHours'>
              <button onClick={nextSixHours}><ArrowBackIosIcon/></button>
              {
                celsius ?
                <div className='byHour'>{second6.map((h, i) => (
                  <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_c)}°C</div></div>
                ))}</div>
                :
                <div className='byHour'>{second6.map((h, i) => (
                  <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_f)}°F</div></div>
                ))}</div>  
              }
              <button onClick={thirdSixHours}><ArrowForwardIosIcon/></button>
            </div>
          }
          {
            showThirdSix &&
            <div className='sixHours'>
              <button onClick={thirdSixHours}><ArrowBackIosIcon/></button>
              {
                celsius ?
                <div className='byHour'>{third6.map((h, i) => (
                  <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_c)}°C</div></div>
                ))}</div>
                :
                <div className='byHour'>{third6.map((h, i) => (
                  <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_f)}°F</div></div>
                ))}</div>  
              }
              <button onClick={fourthSixHours}><ArrowForwardIosIcon/></button>
            </div>
          }
          {
            showFourthSix &&
            <div className='sixHours'>
              <button onClick={fourthSixHours}><ArrowBackIosIcon/></button>
              {
                celsius ?
                <div className='byHour'>{fourth6.map((h, i) => (
                  <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_c)}°C</div></div>
                ))}</div>
                :
                <div className='byHour'>{fourth6.map((h, i) => (
                  <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_f)}°F</div></div>
                ))}</div>  
              }
              <button className='hiddenButton'><ArrowForwardIosIcon/></button>
            </div>
          }
          </div>

          <div >
            <div className='threeDayForecastContainer'>{weatherData.forecast.forecastday.map((day) => (
              <div>
                <div className='threeDayForecast'>{day.date}</div>
                {
                  celsius ?
                  <div className='threeDayForecast'>{Math.round(day.day.avgtemp_c)}°C</div>
                  :
                  <div className='threeDayForecast'>{Math.round(day.day.avgtemp_f)}°F</div>
                }
              </div>
            ))}</div>
          </div>
        </div>    
      }
    </div>
  )
}

export default WeatherForecast