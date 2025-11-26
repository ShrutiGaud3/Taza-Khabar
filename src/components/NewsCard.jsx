import React from 'react'

const NewsCard = ({news}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
     
      <img 
        src={news.image} 
        alt={news.title} 
        className="h-60 w-full object-cover"
      />

      <div className="p-4 space-y-3">
        <h3 className="text-xl font-bold text-gray-800">
          {news.title}
        </h3>

        <p className="text-gray-700 text-base">
          {news.description}
        </p>

        <p className="text-sm text-gray-600 line-clamp-4">
          {news.content}
        </p>

        

        <div className="text-sm text-gray-500">
          Source: <span className="font-medium">{news.source.name}</span>
        </div>

         <div className="text-sm text-gray-500">
          Date :   <span className="font-medium">
         {new Date(news.publishedAt).toLocaleDateString('en-IN')}
          </span>
        </div>
 

          <button className="text-sm w-full  text-white py-3 px-5 rounded bg-blue-600 break-all cursor-pointer">
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            Read More..
          </a>
        </button>

      </div>
    </div>
  )
}

export default NewsCard