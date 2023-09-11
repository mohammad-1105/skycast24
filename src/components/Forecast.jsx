import earthAnimation from "../assets/earthAnimation.json";
import Lottie from "lottie-react";
import { BiWind, BiSolidMoon } from "react-icons/bi";
import {
  BsWater,
  BsFillDropletFill,
  BsFillSunriseFill,
  BsFillSunsetFill,
  BsSunFill,
} from "react-icons/bs";
import { GiWindTurbine } from "react-icons/gi";
import { SiWeightsandbiases } from "react-icons/si";
import { AiOutlineAntCloud } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import { TbUvIndex } from "react-icons/tb";
import { GiWindSlap } from "react-icons/gi";
import {
  WiMoonrise,
  WiMoonset,
  WiMoonAltWaxingCrescent5,
} from "react-icons/wi";
import { useEffect, useState } from "react";


const Forecast = () => {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('madinah');
  const [inputValue, setInputValue] = useState('')
  const temperature = document.getElementById('temperature');
  const realfeel = document.getElementById('realfeel');

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const search = () => {
    setQuery(inputValue);
  }

  
  

  const url = "https://api.weatherapi.com/v1/forecast.json?q=";
  const api_key = "1363b05c50fc4e28a5e105056231307";
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(`${url}${query}&days=1&aqi=yes&key=${api_key}`);
        const data = await res.json();
        setLoading(true);
        setError(false);
        setWeatherData(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setError(true);
      }
    };
    fetchWeather();
  }, [query]);

  


  const handleCelsius = ()=> {
    temperature.innerHTML = weatherData.current.temp_c + '&deg; C'
    realfeel.innerHTML ='RealFeel ' + weatherData.current.feelslike_c + '&deg; C'
  }
  const handleFahrenheit = ()=> {
    temperature.innerHTML =weatherData.current.temp_f + '&deg; F'
    realfeel.innerHTML ='RealFeel ' + weatherData.current.feelslike_f + '&deg; F'

  }
  

  if(error) return <h1 className="font-syne font-bold sm:text-2xl px-3 py-2">
  Error: Problem occurred while fetching data. <span className="font-spaceGrotesk font-normal">This message is used when the app is unable to retrieve data from a server or database.</span> 
</h1>

  return (
    
    <>
      {loading ? (
        <h1 className="font-spaceGrotesk font-bold sm:text-2xl">
          Loading... Please Wait...
        </h1>
      ) : (
        <div className="w-full min-h-screen bg-[#79addc] py-16">
          <div className="max-w-[1000px] mx-auto sm:px-5 px-1 py-6">
            <div className="flex items-center max-w-[500px] sm:mx-0 mx-auto mb-10 sm:px-0 px-5">
              <input
                onChange={handleChange}
                value={inputValue}
                className="border-none px-3 py-2 rounded-l-md block w-full font-syne focus:outline focus:outine-black"
                type="text"
                placeholder="City Name..."
              />
              <button disabled={inputValue === '' ? true : false} onClick={search} className="px-2 py-2 bg-[#adf7b6] rounded-r-md font-syne ">
                Search
              </button>
            </div>

            <div className="flex sm:flex-row items-center flex-col">
              <div className="bg-[#384648] sm:w-[350px] w-full flex item-center justify-between  rounded-md text-white font-spaceGrotesk sm:px-5 px-3 py-4">
                <div>
                  <h2 className="font-bold sm:text-2xl text-xl leading-3">{weatherData.location.name}</h2>
                  <p className="mb-4">{weatherData.location.country}</p>

                  <div className="flex items-center sm:gap-3 gap-1 mb-2">
                    <img
                      className="object-cover sm:w-12 w-8 sm:h-12 h-8 rounded-xl"
                      src={weatherData.current.condition.icon}
                      alt=""
                    />
                    <h2 id="temperature" className="font-bold sm:text-2xl text-xl">{weatherData.current.temp_c}&deg; C</h2>
                  </div>
                  <p className="mb-3 sm:text-normal text-xs">{weatherData.current.condition.text}</p>
                  <p id="realfeel" >RealFeel {weatherData.current.feelslike_c}&deg; C</p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="sm:text-normal text-xs">
                    <p>Latitude: {weatherData.location.lat}&deg;</p>
                    <p>Longitude: {weatherData.location.lon}&deg;</p>
                    <p>Time zone:{weatherData.location.tz_id}</p>
                  </div>
                  <div className=" flex items-center gap-4">
                    <button onClick={handleCelsius} className="bg-gray-800 w-10 rounded-md cursor-pointer select-none ">
                      &deg;C
                    </button>
                    <button onClick={handleFahrenheit} className="bg-gray-800 w-10 rounded-md cursor-pointer select-none ">
                      &deg;F
                    </button>
                  </div>
                </div>
              </div>
              <div className="sm:w-[200px]">
                <Lottie animationData={earthAnimation} />
              </div>
            </div>

            <div className="sm:my-20 my-10 ">
              <h1 className="text-2xl font-bold font-syne px-4">
                Today&apos;s Forecast
              </h1>
              <div className="flex flex-none gap-6 py-5 overflow-x-scroll px-3">

                {
                

                weatherData.forecast.forecastday[0].hour .map((hourData,index) => (
                    <div key={index} className="font-bold sm:text-lg text-sm font-spaceGrotesk flex flex-col items-center gap-2 shadow-xl rounded-md sm:px-5 px-3 sm:py-2 py-1">
                    <p>{hourData.time.split(" ")[1]}</p>
                    <img
                      className="object-cover w-12 h-12 rounded-xl"
                      src={hourData.condition.icon}
                      alt=""
                    />
                    <p>{hourData.temp_c}&deg;C</p>
                  </div>

                  ))
                }
              
                
              </div>
            </div>

            <div className="sm:my-20 my-10 bg-[#384648] px-4 py-5 text-white rounded-md">
              <h1 className="font-syne font-bold text-2xl mb-7">Air Quality</h1>
              <div className="flex sm:flex-row justify-between flex-col sm:gap-10 gap-1 my-6 shadow-md p-2 rounded-sm">
                <p className="font-syne font-bold">
                  PM<sub>2.5</sub>
                </p>
                <div className="max-w-[760px]">
                  <p>
                    <span className="font-bold font-spaceGrotesk">
                      Fine Particulate Matter{" "}
                    </span>
                    are inhalable pollutant particles with a diameter less than
                    2.5 micrometers that can enter the lungs and bloodstream,
                    resulting in serious health issues. The most severe impacts
                    are on the lungs and heart. Exposure can result in coughing
                    or difficulty breathing, aggravated asthma, and the
                    development of chronic respiratory disease.
                  </p>
                </div>
                <div>
                  <p className="font-spaceGrotesk font-bold">{weatherData.current.air_quality.pm2_5}{" "}µg/m³</p>
                </div>
              </div>
              <div className="flex sm:flex-row justify-between flex-col sm:gap-10 gap-1 my-6 shadow-md p-2 rounded-sm">
                <p className="font-syne font-bold">
                  PM<sub>10</sub>
                </p>
                <div className="max-w-[760px]">
                  <p>
                    <span className="font-bold font-spaceGrotesk">
                      Particulate Matter{" "}
                    </span>
                    are inhalable pollutant particles with a diameter less than
                    10 micrometers. Particles that are larger than 2.5
                    micrometers can be deposited in airways, resulting in health
                    issues. Exposure can result in eye and throat irritation,
                    coughing or difficulty breathing, and aggravated asthma.
                    More frequent and excessive exposure can result in more
                    serious health effects.
                  </p>
                </div>
                <div>
                  <p className="font-spaceGrotesk font-bold">{weatherData.current.air_quality.pm10}{" "}µg/m³</p>
                </div>
              </div>
              <div className="flex sm:flex-row justify-between flex-col sm:gap-10 gap-1 my-6 shadow-md p-2 rounded-sm">
                <p className="font-syne font-bold">
                  &nbsp;&nbsp;O<sub>3</sub>
                </p>
                <div className="max-w-[760px]">
                  <p>
                    Ground-level
                    <span className="font-bold font-spaceGrotesk">
                      {" "}
                      Ozone{" "}
                    </span>{" "}
                    can aggravate existing respiratory diseases and also lead to
                    throat irritation, headaches, and chest pain.
                  </p>
                </div>
                <div>
                  <p className="font-spaceGrotesk font-bold">{weatherData.current.air_quality.o3}{" "}µg/m³</p>
                </div>
              </div>

              <div className="flex sm:flex-row justify-between flex-col sm:gap-10 gap-1 my-6 shadow-md p-2 rounded-sm">
                <p className="font-syne font-bold">CO</p>
                <div className="max-w-[760px]">
                  <p>
                    <span className="font-bold font-spaceGrotesk">
                      Carbon Monoxide{" "}
                    </span>
                    is a colorless and odorless gas and when inhaled at high
                    levels can cause headache, nausea, dizziness, and vomiting.
                    Repeated long-term exposure can lead to heart disease
                  </p>
                </div>
                <div>
                  <p className="font-spaceGrotesk font-bold">{weatherData.current.air_quality.co}{" "}µg/m³</p>
                </div>
              </div>
              <div className="flex sm:flex-row justify-between flex-col sm:gap-10 gap-1 my-6 shadow-md p-2 rounded-sm">
                <p className="font-syne font-bold">
                  SO<sub>2</sub>
                </p>
                <div className="max-w-[760px]">
                  <p>
                    Exposure to{" "}
                    <span className="font-bold font-spaceGrotesk">
                      Sulfur Dioxide{" "}
                    </span>
                    can lead to throat and eye irritation and aggravate asthma
                    as well as chronic bronchitis.
                  </p>
                </div>
                <div>
                  <p className="font-spaceGrotesk font-bold">{weatherData.current.air_quality.so2}{" "}µg/m³</p>
                </div>
              </div>
              <div className="flex sm:flex-row justify-between flex-col sm:gap-10 gap-1 my-6 shadow-md p-2 rounded-sm">
                <p className="font-syne font-bold">
                  NO<sub>2</sub>
                </p>
                <div className="max-w-[760px]">
                  <p>
                    Breathing in high levels of{" "}
                    <span className="font-bold font-spaceGrotesk">
                      {" "}
                      Nitrogen Dioxide{" "}
                    </span>{" "}
                    increases the risk of respiratory problems. Coughing and
                    difficulty breathing are common and more serious health
                    issues such as respiratory infections can occur with longer
                    exposure.
                  </p>
                </div>
                <div>
                  <p className="font-spaceGrotesk font-bold">{weatherData.current.air_quality.no2}{" "}µg/m³</p>
                </div>
              </div>
            </div>

            <div className="sm:my-20 my-10 bg-[#384648] px-4 py-5 text-white rounded-md">
              <h1 className="font-syne font-bold text-2xl mb-7">
                More Information
              </h1>
              <div className="flex sm:gap-10 gap-5 flex-wrap justify-between">
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <BiWind className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Wind Speed:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.current.wind_kph}{" "}km/h</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <BiWind className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Wind Degree:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.current.wind_degree}&deg;</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <GiWindTurbine className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Wind Direction:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.current.wind_dir}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <SiWeightsandbiases className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Pressure:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.current.pressure_mb}{" "}millibars</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <BsWater className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Precipitation:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.current.precip_mm}{" "}millimeters</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <BsFillDropletFill className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Humidity:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.current.humidity}{" "}%</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <AiOutlineAntCloud className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Cloud:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.current.cloud}{" "}%</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <MdVisibility className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Visibility:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.current.vis_km}{" "}km</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <TbUvIndex className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">UV Index:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.current.uv}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <GiWindSlap className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Gust Speed:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.current.gust_kph}{" "}km/h</div>
                </div>
              </div>
            </div>

            <div className="sm:my-20 my-10 bg-[#384648] px-4 py-5 text-white rounded-md">
              <h1 className="font-syne font-bold text-2xl mb-7">Astronomy</h1>
              <div className="flex sm:gap-10 gap-5 flex-wrap justify-between">
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <BsFillSunriseFill className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Sunrise:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.forecast.forecastday[0].astro.sunrise}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <BsFillSunsetFill className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Sunset:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.forecast.forecastday[0].astro.sunset}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <WiMoonrise className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Moonrise:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.forecast.forecastday[0].astro.moonrise}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <WiMoonset className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Moonset:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.forecast.forecastday[0].astro.moonset}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <BiSolidMoon className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Moon Phase:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.forecast.forecastday[0].astro.moon_phase}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <WiMoonAltWaxingCrescent5 className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Moon illumination:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{weatherData.forecast.forecastday[0].astro.moon_illumination}{" "}% </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <BiSolidMoon className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Moon Up:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{
                    weatherData.forecast.forecastday[0].astro.is_moon_up === 1 ? "Yes" : "No"
                  }</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-syne font-bold flex items-center gap-2">
                    <BsSunFill className="sm:text-xl" />{" "}
                    <span className="sm:text-xl">Sun Up:</span>
                  </div>
                  <div className="font-spaceGrotesk sm:text-xl">{
                  weatherData.forecast.forecastday[0].astro.is_sun_up === 1 ? "Yes" : "No"
                  }</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Forecast;
