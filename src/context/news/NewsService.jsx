export const fetchNews = async (topic) => {
    const response = await fetch(`https://gnews.io/api/v4/search?q=${topic}&apikey=f41451d1f86e98907dc4d3de4fb633b1`)
    const data = await response.json()
     return data.articles
    
}