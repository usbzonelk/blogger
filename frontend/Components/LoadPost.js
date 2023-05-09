import { useEffect, useState } from "react";
import {
  useGetFullPostMutation,
  useGetAuthsPostMutation,
} from "../redux/features/posts/postApiSlice";
import { useGetLabelsOfPostMutation } from "../redux/features/posts/postApiSlice";
import { useGetRelatedPostsMutation } from "../redux/features/posts/postApiSlice";
import Post from "./Post";
import CommentsLoader from "./CommentsLoader";
import RelatedPosts from "./RelatedPosts";

import FullScreenLoading from "./FullScreenLoading";

const LoadPost = (props) => {
  const slug = props.slug;

  const [
    getFullPost,
    { data: post, isLoading: isLoadingPost, isError: loadingPostError },
  ] = useGetFullPostMutation();
  const [
    getAuthsPost,
    { data: author, isLoading: isLoadingAuth, isError: loadingAuthError },
  ] = useGetAuthsPostMutation();
  const [
    getLabelsOfPost,
    { data: labels, isLoading: isLabelsLoading, isError: loadingTagsError },
  ] = useGetLabelsOfPostMutation();
  const [
    getRelatedPosts,
    { data: relatedPosts, isLoading: isRelatedLoading, isError: isRelatedErr },
  ] = useGetRelatedPostsMutation();

  useEffect(() => {
    getFullPost(slug);
    getAuthsPost(slug);
    getLabelsOfPost(slug);
    getRelatedPosts(slug);
  }, [getFullPost, getAuthsPost, getLabelsOfPost, getRelatedPosts, slug]);

  if (isLoadingPost || isLoadingAuth) {
    window.document.title = "Loading";
    return <FullScreenLoading />;
  }

  if (post && author) {
    window.document.title = post.title;

    return (
      <>
        <Post
          post={post}
          author={author ? (author[0] ? author[0] : "Anonymous") : "Anonymous"}
          labels={labels ? labels : null}
        />

        <br />
        <RelatedPosts related={relatedPosts} />

        <CommentsLoader slug={slug} />
        <br />
      </>
    );
  }
};
export default LoadPost;
