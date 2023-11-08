import "./App.css";
import NavBar from "./components/navBar/navBar";
import { blogText } from "./components/blogpost/BlogText";
import BlogList from "./components/blogpost/BlogList";

function App() {
  return (
    <div>
      <NavBar />
      <BlogList blogText={blogText} />
      <footer>
        <p>© Kodehode 2023</p>
      </footer>
    </div>
  );
}

export default App;
