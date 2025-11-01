export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const post = await res.json();
  console.log(" Re rendered server side rendering");
  return {
    props: { post },
  };
}

export default function SSRPage({ post }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>SSR Example</h1>
      <h2>Title :{post.title}</h2>
      <p>Body :{post.body}</p>
    </div>
  );
}
