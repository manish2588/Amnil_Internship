export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();
  
  return {
    props: { post },
  };
}

export default function SSG({ post }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>SSG Example</h1>
      <h2>Title : {post.title}</h2>
      <p>Body :{post.body}</p>
     
    </div>
  );
}
