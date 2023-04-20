import PostThumbnail from "./PostThumbnail";
import { useGetAllPostsMutation } from "../redux/features/posts/postApiSlice";
import React, { useState, useEffect } from "react";
import FullScreenLoading from "./FullScreenLoading";
import LostApiConnection from "./LostApiConnection";

function PostsContainer() {
  const [getAllPosts, { data: posts, isLoading, isError }] =
    useGetAllPostsMutation();
  console.log(posts);
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  if (isLoading) return <FullScreenLoading />;
  if (isError) return <LostApiConnection />;

  return (
    <>
      {!isLoading && (!posts || posts.length < 1) ? (
        <section class="section">
          <h1 className="title">No Posts found</h1>
        </section>
      ) : (
        <div class="container" style={{ maxWidth: "800px" }}>
          {posts.map((post) => (
            <PostThumbnail post={post} key={post.slug} />
          ))}
        </div>
      )}
    </>
  );
}

export default PostsContainer;
