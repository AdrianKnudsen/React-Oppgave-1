import React from "react";
import NavBar from "../components/navBar/navBar";

const About: React.FC = () => {
  return (
    <div>
      <NavBar>{}</NavBar>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to our technology hub! We are a diverse team of experts,
          enthusiasts, and creators with a shared passion for exploring the
          possibilities of the digital world.
        </p>
        <p>
          Our journey began with a simple idea: to create a space where people
          can stay informed, inspired, and connected with the latest trends in
          technology. Whether you're a seasoned professional or just starting to
          dip your toes into the vast ocean of tech, we've got something for
          everyone.
        </p>
        <h2>What We Offer:</h2>
        <ul>
          <li>Insightful articles on cutting-edge technologies</li>
          <li>Tutorials and guides for tech enthusiasts</li>
          <li>Product reviews and recommendations</li>
          <li>Community forums for discussions and Q&A</li>
        </ul>
        <p>
          Join us on this exciting adventure, and let's navigate the digital
          landscape together. Feel free to reach out, engage in conversations,
          and become a part of our growing community!
        </p>
      </div>
    </div>
  );
};

export default About;
