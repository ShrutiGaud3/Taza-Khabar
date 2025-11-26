import React from "react";

const WeatherCard = () => {
  return (
   <div className="w-full  bg-gradient-to-br from-blue-300 to-blue-500 text-white p-6 rounded-2xl shadow-xl">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-xl font-bold">Current Weather</h2>
        <p className="text-white/90 text-sm">📍 New Delhi</p>
        <p className="text-5xl font-extrabold mt-2">32°C</p>
        <p className="text-white/80 text-lg">☀️ Sunny</p>
      </div>
    </div>
  );
};

export default WeatherCard;