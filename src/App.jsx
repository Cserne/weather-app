import './App.css';
import http from 'axios';
import React, { useState, useEffect } from 'react';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//import img from '../src/images/background.jpg';
import background from '../src/images/sky-dark-light-clouds.jpg';
import BasicCityData from './components/BasicCityData';
import WeatherForecast from './components/WeatherForecast';

function App() {
  const [basicCity, setBasicCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [searched, setSearched] = useState("");
  const [celsius, setCelsius] = useState(true);
  const [kmPerHour, setKmPerHour] = useState(true);
  const [showFirstSix, setShowFirstSix] = useState(true);
  const [showSecondSix, setShowSecondSix] = useState(false);
  const [showThirdSix, setShowThirdSix] = useState(false);
  const [showFourthSix, setShowFourthSix] = useState(false);

  //http://api.weatherapi.com/v1/forecast.json?key=fa7cf46dad1d4b5f8c992048220306&q=London&days=1&aqi=no&alerts=no
  const api = "http://api.weatherapi.com/v1/forecast.json?";
  const key = "key=fa7cf46dad1d4b5f8c992048220306&q=";

  
  const found = (e) => {
    setSearched(e.target.value);
    if(e.target.value < 1) setWeatherData(null);
    // console.log(searched);
    // load();
    // console.log(weatherData.location);
  }
  
  useEffect(() => {
    console.log(searched);
    const budapest = async () => {
      let basicResponse = await http.get("http://api.weatherapi.com/v1/forecast.json?key=fa7cf46dad1d4b5f8c992048220306&q=Budapest&days=3");
      // console.log("BASIC:", basicResponse.data);
      setBasicCity(basicResponse.data);
    };
    budapest();
  
  
    const load = async (e) => {
      let response = await http.get(api + key + searched + "&days=3");
      // console.log('Ez minden:', response.data);
      setWeatherData(response.data);
      // console.log(weatherData.location.name);
      // console.log('Előrejelzés:', weatherData.forecast);
      // setSearched(response.data);
    };
    load();
  }, [searched])

  const metricToImperial = () => {
    setCelsius(!celsius);
    setKmPerHour(!kmPerHour);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    }
  };

  const nextSixHours = () => {
    setShowFirstSix(!showFirstSix);
    setShowSecondSix(!showSecondSix);
  }

  const thirdSixHours = () => {
    setShowSecondSix(!showSecondSix);
    setShowThirdSix(!showThirdSix);
  }

  const fourthSixHours = () => {
    setShowThirdSix(!showThirdSix);
    setShowFourthSix(!showFourthSix);
  }

  
  return (
    <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh'}}>
      <div className="App" >
        <header className="App-header">

          <input placeholder='Find your city' onChange={found}/>
            {
                weatherData ?
                <WeatherForecast weatherData={weatherData} celsius={celsius} kmPerHour={kmPerHour} metricToImperial={metricToImperial} responsive={responsive} showFirstSix={showFirstSix} showSecondSix={showSecondSix} showThirdSix={showThirdSix} showFourthSix={showFourthSix} nextSixHours={nextSixHours} thirdSixHours={thirdSixHours} fourthSixHours={fourthSixHours}/>
                : 
                <BasicCityData basicCity={basicCity} celsius={celsius} metricToImperial={metricToImperial} kmPerHour={kmPerHour} responsive={responsive} showFirstSix={showFirstSix} showSecondSix={showSecondSix} showThirdSix={showThirdSix} showFourthSix={showFourthSix} nextSixHours={nextSixHours} thirdSixHours={thirdSixHours} fourthSixHours={fourthSixHours}/>
              // weatherData ?
              //     <div className='container'>
              //       <div className='locationName'>{weatherData.location.name}
              //         <div>({weatherData.location.region}, {weatherData.location.country})</div>
              //       </div>
              //         <div className='celsius'>
              //           {
              //             celsius ? 
              //             <div>
              //               <span>{weatherData.current.temp_c}°C</span> 
              //               <button onClick={celsiusToFahr}>F</button>
              //             </div>
              //             :
              //             <div>
              //               {weatherData.current.temp_f}°F 
              //               <button onClick={celsiusToFahr}>C</button>
              //             </div>
              //           }
              //         </div>
              //         <img alt='icon' src={`https:${weatherData.current.condition.icon}`}></img>
              //       <div className='conditionText'>{weatherData.current.condition.text}</div>
              //       <div className='bottom'>
              //         <div>Humidity: {weatherData.current.humidity}%</div>
              //         <div>UV-index: {weatherData.current.uv}</div>
              //         <div>Wind: {weatherData.current.wind_kph} km/h / {weatherData.current.wind_mph} m/h</div>
              //       </div>
              //       <div>Local time: {weatherData.location.localtime.substring(11, 16)}</div>
              //       {/* <div>
              //         <div className='forescastContainer'>{weatherData.forecast.forecastday[0].hour.map((h, i) => (
              //           <div key={i}><div>{h.time.substring(11, 16)}</div><div>{h.temp_c}°C</div></div>
              //         ))}</div>
              //       </div> */}
              //       <div className='forescastContainer'>
              //         { showFirstSix &&
              //         <div className='sixHours'>
              //           <button className='hiddenButton'><ArrowBackIosIcon/></button>
              //             <div>
              //               <div>{weatherData.forecast.forecastday[0].hour[0].time.substring(11, 16)}</div>
              //               <div>{Math.round(weatherData.forecast.forecastday[0].hour[0].temp_c)}°C</div>
              //             </div>
              //             <div>
              //               <div>{weatherData.forecast.forecastday[0].hour[1].time.substring(11, 16)}</div>
              //               <div>{Math.round(weatherData.forecast.forecastday[0].hour[1].temp_c)}°C</div>
              //             </div>
              //             <div>
              //               <div>{weatherData.forecast.forecastday[0].hour[2].time.substring(11, 16)}</div>
              //               <div>{Math.round(weatherData.forecast.forecastday[0].hour[2].temp_c)}°C</div>
              //             </div>
              //             <div>
              //               <div>{weatherData.forecast.forecastday[0].hour[3].time.substring(11, 16)}</div>
              //               <div>{Math.round(weatherData.forecast.forecastday[0].hour[3].temp_c)}°C</div>
              //             </div>
              //             <div>
              //               <div>{weatherData.forecast.forecastday[0].hour[4].time.substring(11, 16)}</div>
              //               <div>{Math.round(weatherData.forecast.forecastday[0].hour[4].temp_c)}°C</div>
              //             </div>
              //             <div>
              //               <div>{weatherData.forecast.forecastday[0].hour[5].time.substring(11, 16)}</div>
              //               <div>{Math.round(weatherData.forecast.forecastday[0].hour[5].temp_c)}°C</div>
              //             </div>
              //           <button onClick={nextSixHours}><ArrowForwardIosIcon/></button>
              //         </div>
              //         }
              //         {
              //           showSecondSix &&
              //         <div className='sixHours'>
              //           <button onClick={nextSixHours}><ArrowBackIosIcon/></button>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[6].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[6].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[7].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[7].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[8].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[8].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[9].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[9].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[10].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[10].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[11].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[11].temp_c)}°C</div>
              //           </div>
              //           <button onClick={thirdSixHours}><ArrowForwardIosIcon/></button>
              //         </div>
              //         }          
              //         {
              //           showThirdSix &&
              //         <div className='sixHours'>
              //           <button onClick={thirdSixHours}><ArrowBackIosIcon/></button>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[12].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[12].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[13].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[13].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[14].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[14].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[15].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[15].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[16].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[16].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[17].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[17].temp_c)}°C</div>
              //           </div>
              //           <button onClick={fourthSixHours}><ArrowForwardIosIcon/></button>
              //         </div>
              //         }          
              //         {
              //           showFourthSix &&
              //         <div className='sixHours'>
              //           <button onClick={fourthSixHours}><ArrowBackIosIcon/></button>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[18].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[18].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[19].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[19].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[20].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[20].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[21].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[21].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[22].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[22].temp_c)}°C</div>
              //           </div>
              //           <div>
              //             <div>{weatherData.forecast.forecastday[0].hour[23].time.substring(11, 16)}</div>
              //             <div>{Math.round(weatherData.forecast.forecastday[0].hour[23].temp_c)}°C</div>
              //           </div>
              //           <button className='hiddenButton'><ArrowForwardIosIcon/></button>
              //         </div>
              //         }          
              //       </div>
              //     </div>
                // basicCity &&
                // <div className='container'>
                // <div className='locationName'>{basicCity.location.name}
                //   <div>({basicCity.location.region}, {basicCity.location.country})</div>
                // </div>
                //   {/* <div className='celsius'>{basicCity.current.temp_c}°C / {basicCity.current.temp_f}°F</div> */}
                //   <div className='celsius'>
                //     {
                //       celsius ? 
                //       <div>
                //         <span>{basicCity.current.temp_c}°C</span> 
                //         <button onClick={celsiusToFahr}>F</button>
                //       </div>
                //       :
                //       <div>
                //         {basicCity.current.temp_f}°F 
                //         <button onClick={celsiusToFahr}>C</button>
                //       </div>
                //     }
                //   </div>
                //   <img alt='icon' src={`https:${basicCity.current.condition.icon}`}></img>
                // <div className='conditionText'>{basicCity.current.condition.text}</div>
                // <div className='bottom'>
                //   <div>Humidity: {basicCity.current.humidity}%</div>
                //   <div>UV-index: {basicCity.current.uv}</div>
                //   <div>Wind: {basicCity.current.wind_kph} km/h / {basicCity.current.wind_mph} m/h</div>
                // </div>
                // <div>Local time: {basicCity.location.localtime.substring(11, 16)}</div>

                // {/<div>
                //   <div className='forescastContainer'>{basicCity.forecast.forecastday[0].hour.map((h, i) => (
                //     <div key={i}><div>{h.time.substring(11, 16)}</div><div>{h.temp_c}°C</div></div>
                //   ))}</div>
                // </div>}

                // <div className='forescastContainer'>
                //   { showFirstSix &&
                //   <div className='sixHours'>
                //     <button className='hiddenButton'><ArrowBackIosIcon/></button>
                //       <div>
                //         <div>{basicCity.forecast.forecastday[0].hour[0].time.substring(11, 16)}</div>
                //         <div>{Math.round(basicCity.forecast.forecastday[0].hour[0].temp_c)}°C</div>
                //       </div>
                //       <div>
                //         <div>{basicCity.forecast.forecastday[0].hour[1].time.substring(11, 16)}</div>
                //         <div>{Math.round(basicCity.forecast.forecastday[0].hour[1].temp_c)}°C</div>
                //       </div>
                //       <div>
                //         <div>{basicCity.forecast.forecastday[0].hour[2].time.substring(11, 16)}</div>
                //         <div>{Math.round(basicCity.forecast.forecastday[0].hour[2].temp_c)}°C</div>
                //       </div>
                //       <div>
                //         <div>{basicCity.forecast.forecastday[0].hour[3].time.substring(11, 16)}</div>
                //         <div>{Math.round(basicCity.forecast.forecastday[0].hour[3].temp_c)}°C</div>
                //       </div>
                //       <div>
                //         <div>{basicCity.forecast.forecastday[0].hour[4].time.substring(11, 16)}</div>
                //         <div>{Math.round(basicCity.forecast.forecastday[0].hour[4].temp_c)}°C</div>
                //       </div>
                //       <div>
                //         <div>{basicCity.forecast.forecastday[0].hour[5].time.substring(11, 16)}</div>
                //         <div>{Math.round(basicCity.forecast.forecastday[0].hour[5].temp_c)}°C</div>
                //       </div>
                //     <button onClick={nextSixHours}><ArrowForwardIosIcon/></button>
                //   </div>
                //   }
                //   {
                //     showSecondSix &&
                //   <div className='sixHours'>
                //     <button onClick={nextSixHours}><ArrowBackIosIcon/></button>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[6].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[6].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[7].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[7].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[8].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[8].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[9].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[9].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[10].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[10].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[11].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[11].temp_c)}°C</div>
                //     </div>
                //     <button onClick={thirdSixHours}><ArrowForwardIosIcon/></button>
                //   </div>
                //   }          
                //   {
                //     showThirdSix &&
                //   <div className='sixHours'>
                //     <button onClick={thirdSixHours}><ArrowBackIosIcon/></button>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[12].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[12].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[13].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[13].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[14].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[14].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[15].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[15].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[16].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[16].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[17].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[17].temp_c)}°C</div>
                //     </div>
                //     <button onClick={fourthSixHours}><ArrowForwardIosIcon/></button>
                //   </div>
                //   }          
                //   {
                //     showFourthSix &&
                //   <div className='sixHours'>
                //     <button onClick={fourthSixHours}><ArrowBackIosIcon/></button>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[18].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[18].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[19].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[19].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[20].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[20].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[21].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[21].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[22].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[22].temp_c)}°C</div>
                //     </div>
                //     <div>
                //       <div>{basicCity.forecast.forecastday[0].hour[23].time.substring(11, 16)}</div>
                //       <div>{Math.round(basicCity.forecast.forecastday[0].hour[23].temp_c)}°C</div>
                //     </div>
                //     <button className='hiddenButton'><ArrowForwardIosIcon/></button>
                //   </div>
                //   }          
                // </div>
              // </div>
            }
        </header>
      </div>
    </div>
  );
}

export default App;
