import React, { useContext } from "react";
import NewsContext from "../context/news/NewsContext";
import NewsCard from "./NewsCard";


const News = () => {

  const {allNews} = useContext(NewsContext)

  if(!allNews || allNews.length === 0){
    return <h1 className="my-12 text-center text-gray-500 text-2xl ">Loading...</h1>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {
      allNews.map((news , index)=> <NewsCard key={index} news ={news}/>)
      }
    </div>
  );
};

export default News;