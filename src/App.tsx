import "./App.css";
import NavBar from "./components/navBar/navBar.tsx";
import BlogPost from "./components/blogpost/BlogPost.tsx";

function App() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      content:
        "Artificial Intelligence (AI) is advancing at an astonishing pace. From self-driving cars to natural language processing, this article explores the latest breakthroughs in AI and their potential impact on various industries.",
      readMore: "Read More...",
      additionalContent:
        "As AI continues to advance, it opens up new possibilities for automation and innovation. In this blog post, we delve deeper into the ethical considerations surrounding AI and its implications for job markets.",
    },
    {
      id: 2,
      title: "Blockchain Technology: Beyond Cryptocurrency",
      content:
        "Blockchain, the technology behind cryptocurrencies like Bitcoin, has applications far beyond digital currencies. Learn how blockchain is revolutionizing supply chain management and data security.",
      readMore: "Read More...",
      additionalContent:
        "Blockchain's decentralized ledger system has the potential to enhance data security and integrity in various industries. In this blog post, we explore real-world use cases of blockchain technology beyond cryptocurrencies.",
    },
    {
      id: 3,
      title: "The Rise of Quantum Computing",
      content:
        "Quantum computing is poised to transform computing as we know it. Explore the fundamental concepts of quantum computing and the potential for solving complex problems that are currently beyond classical computers.",
      readMore: "Read More...",
      additionalContent:
        "Quantum computing's promise lies in its ability to tackle complex problems in fields such as cryptography and drug discovery. In this blog post, we discuss the race to develop practical quantum computers and their potential impact.",
    },
  ];

  return (
    <div>
      <NavBar />
      <main>
        <h1>Tech Blog</h1>

        {blogPosts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            initialContent={post.content}
            additionalContent={post.additionalContent}
            readMore="Read More..."
          />
        ))}
      </main>

      <footer>
        <p>© Kodehode 2023</p>
      </footer>
    </div>
  );
}

export default App;
