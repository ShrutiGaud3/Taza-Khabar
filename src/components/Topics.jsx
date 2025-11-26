import React, { useContext } from 'react'
import NewsContext from '../context/news/NewsContext'
import { fetchNews } from '../context/news/NewsService'

const Topics = () => {

   const {dispatch} = useContext(NewsContext)

    const getNews = async(topic) => {
       const data =await fetchNews(topic)
       dispatch({
         type : "GET_NEWS",
         payload : data
       })
       
     }

  return (
   <>
    <div className="flex flex-wrap justify-center gap-3">
      <div onClick={()=> getNews("Indore")} className='px-4 py-1 bg-blue-100 hover:bg-blue-300 text-blue-700 font-medium rounded-full text-sm shadow cursor-pointer'>
        Indore
      </div>
       <div onClick={()=> getNews("Sports")} className='px-4 py-1 hover:bg-blue-300 bg-blue-100 text-blue-700 font-medium rounded-full text-sm shadow cursor-pointer '>
        Sports
      </div>
       <div onClick={()=> getNews("Entertainment")} className='px-4 py-1 hover:bg-blue-300 bg-blue-100 text-blue-700 font-medium rounded-full text-sm shadow cursor-pointer'>
        Entertainment
      </div>
       <div onClick={()=> getNews("Bollywood")} className='px-4 py-1 bg-blue-100 hover:bg-blue-300 text-blue-700 font-medium rounded-full text-sm shadow cursor-pointer'>
        Bollywood
      </div>
       <div  onClick={()=> getNews("Education")} className='px-4 py-1 bg-blue-100 hover:bg-blue-300 text-blue-700 font-medium rounded-full text-sm shadow cursor-pointer'>
        Education
      </div>
       <div onClick={()=> getNews("Bussiness")} className='px-4 py-1 bg-blue-100 hover:bg-blue-300 text-blue-700 font-medium rounded-full text-sm shadow cursor-pointer'>
        Bussiness
      </div>
       <div onClick={()=> getNews("Politics")} className='px-4 py-1 bg-blue-100 hover:bg-blue-300 text-blue-700 font-medium rounded-full text-sm shadow cursor-pointer'>
        Politics
      </div>

        <div onClick={()=> getNews("Crypto")} className='px-4 py-1 bg-blue-100 hover:bg-blue-300 text-blue-700 font-medium rounded-full text-sm shadow cursor-pointer'>
        Crypto
      </div>
        <div onClick={()=> getNews("International")} className='px-4 py-1 bg-blue-100 hover:bg-blue-300 text-blue-700 font-medium rounded-full text-sm shadow cursor-pointer'>
        International
      </div>
    </div>
   </>
  )
}

export default Topics