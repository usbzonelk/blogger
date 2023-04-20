import { useEffect } from "react";
import { useGetFullPostMutation } from "../redux/features/posts/postApiSlice";
import Post from "./Post";

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

    return (
      <div class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <span class="icon is-large is-loading">
              <i class="fas fa-spinner fa-spin fa-3x"></i>
            </span>
            <h1 class="title">Loading...</h1>
          </div>
        </div>
      </div>
    );
  } else {
    console.log(isLoadingPost, "454");
  }
  if (post) {
    window.document.title = post.title;
    return <Post post={post} author={author} />;
  }
};
export default LoadPost;
