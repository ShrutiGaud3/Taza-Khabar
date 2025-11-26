import React, { useContext, useEffect, useState } from "react";
import { fetchNews } from "../context/news/NewsService";
import NewsContext from "../context/news/NewsContext";



const Header = () => {

const {dispatch} = useContext(NewsContext)

const [search , setSearch] = useState("")

  const getNews = async(topic) => {
    const data =await fetchNews(topic)
    dispatch({
      type : "GET_NEWS",
      payload : data
    })
    
  }

  const handleSubmit = e =>{
    e.preventDefault()
    getNews(search)
    setSearch("")
  }

  useEffect(()=>{
  getNews('Indore')
  },[])




  return (
    <>
 
       <form onSubmit={handleSubmit} className="flex justify-center mb-8 gap-2">
      <input
      
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search news..."
        className="w-full max-w-xl px-5 py-3 border bg-white border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-500 text-white text-lg rounded-lg shadow-md px-10 ">Search</button>
    </form>
    
    </>
  );
};

export default Header;