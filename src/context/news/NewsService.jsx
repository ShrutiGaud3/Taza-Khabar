const proxy = "https://api.allorigins.win/raw?url=";

export const fetchNews = async (topic = "india") => {
  const url = `https://gnews.io/api/v4/search?q=${topic}&apikey=f41451d1f86e98907dc4d3de4fb633b1`;

  const response = await fetch(proxy + encodeURIComponent(url));

  const data = await response.json();
  return data.articles;
};
