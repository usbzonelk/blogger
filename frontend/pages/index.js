import Head from "next/head";
import PostsContainer from "../components/PostsContainer";

export default function Home() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <PostsContainer />
    </div>
  );
}
