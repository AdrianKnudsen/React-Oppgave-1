import { useState } from "react";
import "../App.css";
import NavBar from "../components/navBar/navBar";
import { blogText } from "../components/blogpost/BlogText";
import BlogList from "../components/blogpost/BlogList";
import SearchBar from "../components/navBar/SearchBar";
import FooterSection from "../components/navBar/footer";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredBlogText, setFilteredBlogText] = useState(blogText);

  const handleSearch = (searchTerm: string) => {
    try {
      setLoading(true);

      const filteredResults = blogText.filter((post) =>
        (post.content + " " + post.additionalContent)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );

      setFilteredBlogText(filteredResults);
    } catch (error) {
      if (typeof error === "string") {
        setError(error);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar>
        <SearchBar onSearch={handleSearch} />
      </NavBar>
      <BlogList blogText={filteredBlogText} loading={loading} error={error} />
      <FooterSection />
    </div>
  );
};

export default Home;
