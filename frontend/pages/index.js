import Head from "next/head";
import PostsContainer from "../components/PostsContainer";
import { useState } from "react";
export default function Home() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      <Head>
        <title>Blogger</title>
      </Head>
      <PostsContainer search={"45"} />{" "}
    </div>
  );
}
