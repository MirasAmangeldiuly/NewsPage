import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsItem } from "../components/NewsItem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = 'everything/cnn.json';
    const getArticles = async () => {
      const response = await axios.get(
        `https://saurav.tech/NewsAPI/${apiKey}`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
