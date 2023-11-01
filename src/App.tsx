import "./App.css";
import NavBar from "./components/navBar/navBar.tsx";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Tech Blog</h1>

        <section className="blog-post">
          <h2>The Future of Artificial Intelligence</h2>
          <p>
            Artificial Intelligence (AI) is advancing at an astonishing pace.
            From self-driving cars to natural language processing, this article
            explores the latest breakthroughs in AI and their potential impact
            on various industries.
          </p>
          <p className="read-more">Read More...</p>
          <button className="like-button">Like</button>
        </section>

        <section className="blog-post">
          <h2>Blockchain Technology: Beyond Cryptocurrency</h2>
          <p>
            Blockchain, the technology behind cryptocurrencies like Bitcoin, has
            applications far beyond digital currencies. Learn how blockchain is
            revolutionizing supply chain management and data security.
          </p>
          <p className="read-more">Read More...</p>
          <button className="like-button">Like</button>
        </section>

        <section className="blog-post">
          <h2>The Rise of Quantum Computing</h2>
          <p>
            Quantum computing is poised to transform computing as we know it.
            Explore the fundamental concepts of quantum computing and the
            potential for solving complex problems that are currently beyond
            classical computers.
          </p>
          <p className="read-more">Read More...</p>
          <button className="like-button">Like</button>
        </section>
      </main>

      <footer>
        <p>© Kodehode 2023</p>
      </footer>
    </div>
  );
}

export default App;
