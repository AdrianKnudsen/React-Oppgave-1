import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import { blogText } from "./components/blogpost/BlogText";
import BlogList from "./components/blogpost/BlogList";
import SearchBar from "./components/navBar/SearchBar";

function App() {
  const [filteredBlogText, setFilteredBlogText] = useState(blogText);

  const handleSearch = (searchTerm: string) => {
    const filteredResults = blogText.filter((post) =>
      (post.content + " " + post.additionalContent)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredBlogText(filteredResults);
  };

  return (
    <div>
      <NavBar>
        <SearchBar onSearch={handleSearch} />
      </NavBar>
      <BlogList blogText={filteredBlogText} />
      <footer>
        <p>© Kodehode 2023</p>
      </footer>
    </div>
  );
}

export default App;
