import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const key = import.meta.env.VITE_APIKEY;
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});

  

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(location);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
        )
        .then((res) => {
          setWeatherData(res.data);
        }); 
  };

  console.log(weatherData.sys.country);
  //console.log(weatherData.main.temp);

  return (
    <main className="px-4 py-8 lg:px-8 bg-hero-image bg-no-repeat bg-cover h-screen text-white">
      <form className="grid place-items-center" onSubmit={handleSubmit}>
        <input
          className="border-white border-2 bg-transparent p-2 w-[80%] lg:w-[400px] rounded-lg focus:outline-none"
          placeholder="Enter a Location"
          onChange={handleChange}
          value={location}
          type="text"
        />
        <button>Submit</button>
      </form>
      <div className="flex flex-col sm:gap-20 lg:gap-60">
        <div>
          <p className="text-sm mt-16">
            {weatherData.name}, {weatherData.sys.country}
          </p>
          {weatherData.main ? (
            <h2 className="text-5xl font-bold">
              {Math.round(weatherData.main.temp - 273.15)}°C
            </h2>
          ) : null}
          {/* <h2 className="text-5xl font-bold">56°C</h2> */}
        </div>
        <div className="flex text-center drop-shadow-lg justify-between w-full p-5 mt-60 sm:mt-0 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg">
          <div>
            <h4 className="font-bold">34°C</h4>
            <p className="text-sm sm:text-base">Feels like</p>
          </div>
          <div>
            <h4 className="font-bold">33%</h4>
            <p className="text-sm sm:text-base">Humidity</p>
          </div>
          <div>
            <h4 className="font-bold">2MPH</h4>
            <p className="text-sm sm:text-base">Wind Speed</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
