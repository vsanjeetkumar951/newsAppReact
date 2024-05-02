import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchNews from "./components/SearchNews";
import NewsCard from "./components/NewsCard";

function App() {
  const [allNewsData, setAllNewsData] = useState([]);
  const [searchNews, setSearchNews] = useState("");
  const [loading, setLoading] = useState(false);



// https://newsapi.org/v2/everything?q=india&apiKey=89cc7ef1d12b45c4a0b806664dda95e5
  const fetchNewsData = async () => {
    try {
        setLoading(true);
        const res=await fetch('https://newsapi.org/v2/everything?q=india&apiKey=89cc7ef1d12b45c4a0b806664dda95e5');
        const data = await res.json();
        setAllNewsData(data.Search);
        setLoading(false)
        console.log(res)
        
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}
  return (
    <div>
      <Navbar />
      <SearchNews searchNews={searchNews} setSearchNews={setSearchNews} fetchNewsData={fetchNewsData} />
      <NewsCard  allNewsData={allNewsData} loading={loading}/>
    </div>
  );
}

export default App;
