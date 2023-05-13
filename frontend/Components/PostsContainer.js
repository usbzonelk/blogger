import PostThumbnail from "./PostThumbnail";
import { useGetAllPostsMutation } from "../redux/features/posts/postApiSlice";
import { useSearchPostsMutation } from "../redux/features/posts/postApiSlice";
import React, { useState, useEffect } from "react";

import FullScreenLoading from "./FullScreenLoading";
import LostApiConnection from "./LostApiConnection";

function PostsContainer() {
  const [search, setSearch] = useState(false);

  const [getAllPosts, { data: postsLoad, isLoadingPosts, isErrorPosts }] =
    useGetAllPostsMutation();
  const [searchPosts, { data: searchData, isLoadingSearch, isErrorSearch }] =
    useSearchPostsMutation();

  const [posts, setPosts] = useState(search ? searchData : postsLoad);
  const [isLoading, setIsLoading] = useState(
    search ? isLoadingSearch : isLoadingPosts
  );
  const [isError, setIsError] = useState(
    search ? isErrorSearch : isLoadingPosts
  );

  useEffect(() => {
    async function loadPosts() {
      setSearch(false);
      setPosts(postsLoad);
      setIsLoading(isLoadingPosts);
      setIsError(isErrorPosts);
      return await getAllPosts();
    }
    async function searchPost(searchString) {
      setSearch(true);
      setPosts(searchData);
      setIsLoading(isLoadingSearch);
      setIsError(isErrorSearch);
      return await searchPosts(searchString);
    }
    let searchString = new URLSearchParams(window.location.search).get(
      "search"
    );
    searchString ? (searchString = searchString.split("/")[0]) : null;

    if (searchString) {
      console.log("4", searchString);
      searchPost(searchString);
    } else {
      loadPosts();
    }
  }, [getAllPosts, searchPosts, setSearch]);

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

export default PostsContainer;;
