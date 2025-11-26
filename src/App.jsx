
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

// import WeatherCard from "./components/WeatherCard";

import News from "./components/News";
import Footer from "./components/Footer";
import ThemeContext from "./context/theme/ThemeContext";
import { NewsProvider } from "./context/news/NewsContext";
import Topics from "./components/Topics";

const App = () => {

  const {theme} = useContext(ThemeContext)


  return (
  <NewsProvider>
    <div className={theme ? 
      "bg-gray-900 min-h-screen" 
    : "bg-gray-100 min-h-screen"}>
      <Navbar />
      <main className="container mx-auto p-4">
          <div className="my-5">
         <h1 className= {
          theme ? "text-4xl text-center text-gray-200 font-bold my-5" : "text-4xl text-center text-gray-800 font-bold my-5"
         }>Get All Trending News 24/7</h1>
        <p className={
          theme ? "text-center text-gray-400 " : "text-center text-gray-500 "
        }>Get All trending news from around the world you will be getting news from trusted sources</p>
        </div>
        <Header />

        <Topics/>
        
       
<div className="flex flex-col lg:flex-row gap-6 mt-10">
  {/* <div className="w-full lg:w-[300px] shrink-0">
    <WeatherCard />
  </div> */}
  <div className="flex-1">
    <News />
  </div>
</div>



      </main>
      
    </div>
    <Footer/>
    </NewsProvider>
  );
};

export default App;