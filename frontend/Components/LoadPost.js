import { useEffect } from "react";
import { useGetFullPostMutation } from "../redux/features/posts/postApiSlice";
import Post from "./Post";
import FullScreenLoading from "./FullScreenLoading";

const LoadPost = (props) => {
  const slug = props.slug;

  const [
    getFullPost,
    { data: post, isLoading: isLoadingPost, isError: loadingPostError },
  ] = useGetFullPostMutation();

  useEffect(() => {
    getFullPost(slug);
  }, [getFullPost]);

  const author = {
    username: "Jon",
    displayName: "John gaggs",
  };

  if (isLoadingPost) {
    window.document.title = "Loading";
    console.log(isLoadingPost, "454");

    return <FullScreenLoading />;
  } else {
    console.log(isLoadingPost, "454");
  }
  if (post) {
    window.document.title = post.title;
    return <Post post={post} author={author} />;
  }
};
export default LoadPost;
