import { useEffect } from "react";
import {
  useGetFullPostMutation,
  useGetAuthsPostMutation,
} from "../redux/features/posts/postApiSlice";
import Post from "./Post";
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

  useEffect(() => {
    getFullPost(slug);
    getAuthsPost(slug);
  }, [getFullPost, getAuthsPost, slug]);

  if (isLoadingPost || isLoadingAuth) {
    window.document.title = "Loading";
    return <FullScreenLoading />;
  }
  if (post && author) {
    window.document.title = post.title;

    return (
      <Post
        post={post}
        author={author ? (author[0] ? author[0] : "Anonymous") : "Anonymous"}
      />
    );
  }
};
export default LoadPost;
