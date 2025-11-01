export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  const post = await res.json();
  console.log('Re generated after 15 sec displayed')
  return {
    props: { post },
    revalidate: 15,
  };
}

export default function ISR({ post }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>ISR Example</h1>
      <h2>Title : {post.title}</h2>
      <p>Body : {post.body}</p>
      <p>Revalidates every 5 seconds</p>
    </div>
  );
}
