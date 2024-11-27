/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export const useNewsData = (
  searchTerm = "",
  page = 1,
  pageSize = 5,
  category = ""
) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchNewsData();
  }, [searchTerm, page, category]); // Refetch when searchTerm, page, or category changes

  const fetchNewsData = async () => {
    setIsLoading(true);
    setIsError(false);

    const apiKey = import.meta.env.VITE_NEWS_FEED_API_KEY;
    const baseUrl = "https://newsapi.org/v2/top-headlines";
    const url = `${baseUrl}?country=us&q=${searchTerm}&page=${page}&pageSize=${pageSize}&category=${category}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch news articles");
      }
      const data = await response.json();

      const formattedArticles = data.articles.map((article) => {
        const { title, description, author, publishedAt, urlToImage } = article;
        return {
          title,
          description,
          author,
          publishedAt,
          image: urlToImage,
          url,
        };
      });

      setArticles(formattedArticles);
      setTotalResults(data.totalResults);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    articles,
    isLoading,
    isError,
    totalResults,
  };
};
