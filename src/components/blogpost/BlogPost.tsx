import { useState } from "react";

type BlogPostProps = {
  title: string;
  initialContent: string;
  additionalContent: string;
  readMore: string;
};

export default function BlogPost(props: BlogPostProps) {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const toggleShowAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  const displayContent = showAdditionalContent
    ? props.initialContent + " " + props.additionalContent
    : props.initialContent;

  return (
    <div>
      <section className="blog-post">
        <h2>{props.title}</h2>
        <p>{displayContent}</p>
        <p className="read-more" onClick={toggleShowAdditionalContent}>
          {showAdditionalContent ? "Read Less" : props.readMore}
        </p>
        <button className="like-button">Like</button>
      </section>
    </div>
  );
}
