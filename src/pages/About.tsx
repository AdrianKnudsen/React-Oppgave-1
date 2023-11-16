import React from "react";
import NavBar from "../components/navBar/navBar";
import FooterSection from "../components/navBar/footer";

const About: React.FC = () => {
  return (
    <div>
      <NavBar>{}</NavBar>
      <h1>About Us</h1>
      <div className="about-container">
        <p>
          Welcome to our technology hub! We are a passionate team of innovators
          and tech enthusiasts committed to exploring and sharing the wonders of
          the digital realm.
        </p>
        <p>
          Our story is rooted in a shared curiosity about how technology shapes
          our world. From the latest developments in artificial intelligence to
          the evolving landscape of web development, we strive to provide
          valuable insights and resources for both beginners and seasoned
          professionals.
        </p>
        <h2>Our Mission:</h2>
        <p>
          At our core, we believe in demystifying technology and making it
          accessible to everyone. Whether you're a coding prodigy or just
          starting your journey, our mission is to be your go-to source for
          inspiration, knowledge, and community.
        </p>
        <h2>What Sets Us Apart:</h2>
        <p>
          - <strong>Diverse Content:</strong> Our content spans a wide range of
          topics, from programming languages to the latest trends in tech
          culture.
        </p>
        <p>
          - <strong>Interactive Learning:</strong> Dive into our tutorials,
          challenges, and hands-on projects to sharpen your skills and stay
          engaged.
        </p>
        <p>
          - <strong>Community Focus:</strong> Connect with like-minded
          individuals in our forums. Share your experiences, ask questions, and
          be a part of our growing community.
        </p>
        <h2>Join Us on the Tech Journey:</h2>
        <p>
          As we navigate the ever-evolving landscape of technology, we invite
          you to join us on this exciting journey. Explore our articles, engage
          with the community, and let's embrace the future together.
        </p>
      </div>
      <FooterSection />
    </div>
  );
};

export default About;
