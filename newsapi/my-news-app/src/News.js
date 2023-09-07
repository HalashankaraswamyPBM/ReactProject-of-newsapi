import React, { useState, useEffect } from 'react';

const apiKey = '5ef1bc8f70654226b676ded13925c03d'; // Replace with your News API key

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch news data from the News API when the component mounts

    fetch(`https://newsapi.org/v2/top-headlines?country=nz&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>My News App</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;