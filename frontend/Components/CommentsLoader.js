import CommentBox from "./CommentBox";

const CommentsLoader = (props) => {
  const comments = props.comments;
  return (
    <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
      <div>
        {" "}
        {comments.map((comment, idx) => {
          return (
            <CommentBox
              itemNum={idx + 1}
              key={idx}
              username={comment.username}
              content={comment.content}
              date={comment.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentsLoader;
