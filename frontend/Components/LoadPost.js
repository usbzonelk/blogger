import { useEffect, useState } from "react";
import {
  useGetFullPostMutation,
  useGetAuthsPostMutation,
} from "../redux/features/posts/postApiSlice";
import { useGetLabelsOfPostMutation } from "../redux/features/posts/postApiSlice";
import { useGetCommentsOfPostMutation } from "../redux/features/posts/postApiSlice";

import Post from "./Post";
import CommentsLoader from "./CommentsLoader";
import AddCommentBox from "./AddCommentBox";
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
    getCommentsOfPost,
    {
      data: commentsLoad,
      isLoading: areCommentsLoading,
      isError: loadingCommentsError,
    },
  ] = useGetCommentsOfPostMutation();

  useEffect(() => {
    getFullPost(slug);
    getAuthsPost(slug);
    getLabelsOfPost(slug);
    getCommentsOfPost(slug);
    setComments(commentsLoad);
  }, [getFullPost, getAuthsPost, getLabelsOfPost, getCommentsOfPost, slug]);

  const [comments, setComments] = useState(commentsLoad);

  if (isLoadingPost || isLoadingAuth || areCommentsLoading) {
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
          comments={comments ? comments : null}
        />

        <AddCommentBox slug={slug} />
        <br />
        {comments ? <CommentsLoader comments={comments} /> : "No Comments"}
      </>
    );
  }
};
export default LoadPost;
