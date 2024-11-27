/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { useNewsData } from "../../useNewsfeed";
import NewsArticle from "./NewsArticle";
import Pagination from "./Pagination";
import NoResults from "./NoResults";
import SkeletonLoader from "./SkeletonLoader";

const NewsFeed = ({ searchTerm, category }) => {
  const pageRef = useRef(1); // Ref to track the current page
  const pageSize = 5;

  // Utility to force re-render
  const [, setRerender] = useState(false);
  const forceUpdate = () => setRerender((prev) => !prev);

  // Reset pageRef to 1 whenever searchTerm or category changes
  useEffect(() => {
    pageRef.current = 1;
    forceUpdate(); // Trigger re-render
  }, [searchTerm, category]);

  // Fetch data using the hook
  const { articles, isLoading, isError, totalResults } = useNewsData(
    searchTerm,
    pageRef.current,
    pageSize,
    category // Pass category to the hook
  );

  const totalPages = Math.ceil(totalResults / pageSize);

  const handlePageChange = (newPage) => {
    pageRef.current = newPage;
    forceUpdate(); // Trigger re-render manually
  };

  if (isLoading) return <SkeletonLoader count={pageSize} />;
  if (isError) return <div>Error: Unable to fetch news</div>;
  if (articles.length === 0) return <NoResults />;

  return (
    <div>
      {articles.map((article) => (
        <NewsArticle key={JSON.stringify(article)} {...article} />
      ))}
      <Pagination
        currentPage={pageRef.current}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NewsFeed;
