import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const WeatherForecast = ({ weatherData, celsius, celsiusToFahr, showFirstSix, showSecondSix, showThirdSix, showFourthSix, nextSixHours, thirdSixHours, fourthSixHours}) => {
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
          {/* <div>
            <div className='forescastContainer'>{weatherData.forecast.forecastday[0].hour.map((h, i) => (
              <div key={i}><div>{h.time.substring(11, 16)}</div><div>{h.temp_c}°C</div></div>
            ))}</div>
          </div> */}
          <div className='forescastContainer'>
            { showFirstSix &&
            <div className='sixHours'>
              <button className='hiddenButton'><ArrowBackIosIcon/></button>
                <div>
                  <div>{weatherData.forecast.forecastday[0].hour[0].time.substring(11, 16)}</div>
                  <div>{Math.round(weatherData.forecast.forecastday[0].hour[0].temp_c)}°C</div>
                </div>
                <div>
                  <div>{weatherData.forecast.forecastday[0].hour[1].time.substring(11, 16)}</div>
                  <div>{Math.round(weatherData.forecast.forecastday[0].hour[1].temp_c)}°C</div>
                </div>
                <div>
                  <div>{weatherData.forecast.forecastday[0].hour[2].time.substring(11, 16)}</div>
                  <div>{Math.round(weatherData.forecast.forecastday[0].hour[2].temp_c)}°C</div>
                </div>
                <div>
                  <div>{weatherData.forecast.forecastday[0].hour[3].time.substring(11, 16)}</div>
                  <div>{Math.round(weatherData.forecast.forecastday[0].hour[3].temp_c)}°C</div>
                </div>
                <div>
                  <div>{weatherData.forecast.forecastday[0].hour[4].time.substring(11, 16)}</div>
                  <div>{Math.round(weatherData.forecast.forecastday[0].hour[4].temp_c)}°C</div>
                </div>
                <div>
                  <div>{weatherData.forecast.forecastday[0].hour[5].time.substring(11, 16)}</div>
                  <div>{Math.round(weatherData.forecast.forecastday[0].hour[5].temp_c)}°C</div>
                </div>
              <button onClick={nextSixHours}><ArrowForwardIosIcon/></button>
            </div>
            }
            {
              showSecondSix &&
            <div className='sixHours'>
              <button onClick={nextSixHours}><ArrowBackIosIcon/></button>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[6].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[6].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[7].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[7].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[8].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[8].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[9].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[9].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[10].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[10].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[11].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[11].temp_c)}°C</div>
              </div>
              <button onClick={thirdSixHours}><ArrowForwardIosIcon/></button>
            </div>
            }          
            {
              showThirdSix &&
            <div className='sixHours'>
              <button onClick={thirdSixHours}><ArrowBackIosIcon/></button>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[12].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[12].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[13].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[13].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[14].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[14].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[15].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[15].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[16].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[16].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[17].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[17].temp_c)}°C</div>
              </div>
              <button onClick={fourthSixHours}><ArrowForwardIosIcon/></button>
            </div>
            }          
            {
              showFourthSix &&
            <div className='sixHours'>
              <button onClick={fourthSixHours}><ArrowBackIosIcon/></button>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[18].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[18].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[19].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[19].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[20].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[20].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[21].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[21].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[22].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[22].temp_c)}°C</div>
              </div>
              <div>
                <div>{weatherData.forecast.forecastday[0].hour[23].time.substring(11, 16)}</div>
                <div>{Math.round(weatherData.forecast.forecastday[0].hour[23].temp_c)}°C</div>
              </div>
              <button className='hiddenButton'><ArrowForwardIosIcon/></button>
            </div>
            }          
          </div>
        </div>    
      }
    </div>
  )
}

export default WeatherForecast