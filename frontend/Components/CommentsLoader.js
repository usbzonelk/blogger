import CommentBox from "./CommentBox";
import AddCommentBox from "./AddCommentBox";
import { useEffect, useState } from "react";

import { useGetCommentsOfPostMutation } from "../redux/features/posts/postApiSlice";

const CommentsLoader = (props) => {
  const slug = props.slug;

  const [
    getCommentsOfPost,
    {
      data: commentsLoad,
      isLoading: areCommentsLoading,
      isError: loadingCommentsError,
    },
  ] = useGetCommentsOfPostMutation();

  const [comments, setComments] = useState(commentsLoad);

  useEffect(() => {
    getCommentsOfPost(slug);
  }, [slug, getCommentsOfPost]);

  useEffect(() => {
    if (commentsLoad && !areCommentsLoading) {
      setComments(commentsLoad);
    }
  }, [commentsLoad]);

  return (
    <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
      <AddCommentBox slug={slug} />
      <br />
      <div>
        {" "}
        {comments
          ? comments.map((comment, idx) => {
              return (
                <CommentBox
                  itemNum={idx + 1}
                  key={idx}
                  username={comment.username}
                  content={comment.content}
                  date={comment.date}
                />
              );
            })
          : "No Comments"}
      </div>
    </div>
  );
};

export default CommentsLoader;
