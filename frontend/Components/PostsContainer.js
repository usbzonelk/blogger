import PostThumbnail from "./PostThumbnail";
import { useGetAllPostsMutation } from "../redux/features/posts/postApiSlice";
import React, { useState, useEffect } from "react";

function PostsContainer() {
  const [getAllPosts, { data: posts, isLoading, isError }] =
    useGetAllPostsMutation();
  console.log(posts);
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  if (isLoading)
    return (
      <section class="section">
        <h1 className="title">Loading...</h1>
      </section>
    );
  if (isError)
    return (
      <section class="section">
        <h1 className="title">Error Connecting to API</h1>
      </section>
    );

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
