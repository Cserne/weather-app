import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BasicCityData = ({ basicCity, celsius, celsiusToFahr, showFirstSix, showSecondSix, showThirdSix, showFourthSix, nextSixHours, thirdSixHours, fourthSixHours }) => {

  return (
    <div>
      {
        basicCity &&
        <div className='container'>
        <div className='locationName'>{basicCity.location.name}
          <div>({basicCity.location.region}, {basicCity.location.country})</div>
        </div>
          <div className='celsius'>
            {
              celsius ? 
              <div>
                <span>{basicCity.current.temp_c}°C</span> 
                <button onClick={celsiusToFahr}>°F</button>
              </div>
              :
              <div>
                {basicCity.current.temp_f}°F 
                <button onClick={celsiusToFahr}>°C</button>
              </div>
            }
          </div>
          <img alt='icon' src={`https:${basicCity.current.condition.icon}`}></img>
        <div className='conditionText'>{basicCity.current.condition.text}</div>
        <div className='bottom'>
          <div>Humidity: {basicCity.current.humidity}%</div>
          <div>UV-index: {basicCity.current.uv}</div>
          <div>Wind: {basicCity.current.wind_kph} km/h / {basicCity.current.wind_mph} m/h</div>
        </div>
        <div>Local time: {basicCity.location.localtime.substring(11, 16)}</div>
        
        <div className='foreCastContainer'>
          {
            showFirstSix &&
              <div className='sixHours'>
                <button className='hiddenButton'><ArrowBackIosIcon/></button>
                {
                  celsius ?
                  <div className='byHour'>{basicCity.forecast.forecastday[0].hour.slice(0, 6).map((h, i) => (
                    <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_c)}°C</div></div>
                  ))}</div>
                  :
                  <div className='byHour'>{basicCity.forecast.forecastday[0].hour.slice(0, 6).map((h, i) => (
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
                <div className='byHour'>{basicCity.forecast.forecastday[0].hour.slice(6, 12).map((h, i) => (
                  <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_c)}°C</div></div>
                ))}</div>
                :
                <div className='byHour'>{basicCity.forecast.forecastday[0].hour.slice(6, 12).map((h, i) => (
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
                <div className='byHour'>{basicCity.forecast.forecastday[0].hour.slice(12, 18).map((h, i) => (
                  <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_c)}°C</div></div>
                ))}</div>
                :
                <div className='byHour'>{basicCity.forecast.forecastday[0].hour.slice(12, 18).map((h, i) => (
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
                <div className='byHour'>{basicCity.forecast.forecastday[0].hour.slice(18, 24).map((h, i) => (
                  <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_c)}°C</div></div>
                ))}</div>
                :
                <div className='byHour'>{basicCity.forecast.forecastday[0].hour.slice(18, 24).map((h, i) => (
                  <div key={i}><div>{h.time.substring(11, 16)}</div><div>{Math.round(h.temp_f)}°F</div></div>
                ))}</div>  
              }
              <button className='hiddenButton'><ArrowForwardIosIcon/></button>
            </div>
          }
        </div>

        <div >
          <div className='threeDayForecastContainer'>{basicCity.forecast.forecastday.map((day) => (
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

export default BasicCityData