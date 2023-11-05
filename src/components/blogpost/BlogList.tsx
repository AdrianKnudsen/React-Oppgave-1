import BlogPost from "./BlogPost";

type BlogListProps = {
  blogText: BlogPostData[];
};

type BlogPostData = {
  id: number;
  title: string;
  content: string;
  additionalContent: string;
};

export default function BlogList({ blogText }: BlogListProps) {
  return (
    <main>
      <h1>Tech Blog</h1>

      {blogText.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          initialContent={post.content}
          additionalContent={post.additionalContent}
          readMore="Read More..."
        />
      ))}
    </main>
  );
}
