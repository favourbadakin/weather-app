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

  return (
    <main className="px-4 py-8 lg:px-8 bg-hero-image bg-no-repeat bg-cover h-screen text-white">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-transparent border text-white text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Enter a Location"
            value={location}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <div className="flex flex-col sm:gap-20 lg:gap-60">
        <div className="text-center">
          <p className="text-sm mt-16">
            {weatherData.name},{" "}
            {weatherData.sys ? <span>{weatherData.sys.country}</span> : null}
          </p>
          {weatherData.main ? (
            <h2 className="text-5xl font-bold">
              {Math.round(weatherData.main.temp - 273.15)}°C
            </h2>
          ) : null}
        </div>
        <div className="flex text-center drop-shadow-lg justify-between w-full p-5 mt-60 sm:mt-0 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg">
          <div>
            {weatherData.main ? (
              <h4 className="font-bold">
                {Math.round(weatherData.main.feels_like - 273.15)}°C
              </h4>
            ) : null}

            <p className="text-sm sm:text-base">Feels like</p>
          </div>
          <div>
            {weatherData.main ? (
              <h4 className="font-bold">{weatherData.main.pressure}hPa</h4>
            ) : null}

            <p className="text-sm sm:text-base">Pressure</p>
          </div>
          <div>
            {weatherData.main ? (
              <h4 className="font-bold">{weatherData.main.humidity}%</h4>
            ) : null}

            <p className="text-sm sm:text-base">Humidity</p>
          </div>
          <div>
            {weatherData.wind ? (
              <h4 className="font-bold">{weatherData.wind.speed}MPH</h4>
            ) : null}

            <p className="text-sm sm:text-base">Wind Speed</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
