import { useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  return (
    <Container>
      <Header
        onSearchChange={(value) => setSearchTerm(value)}
        onCategoryChange={(value) => setCategory(value)}
      />
      <NewsFeed searchTerm={searchTerm} category={category} />
    </Container>
  );
}

export default App;
