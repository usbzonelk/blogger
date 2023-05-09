import { useState } from "react";
import { useAddNewCommentMutation } from "../redux/features/posts/postApiSlice";

const AddCommentBox = (props) => {
  const slug = props.slug;

  const [addNewComment, { data, isLoading, isError }] =
    useAddNewCommentMutation();

  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
      {" "}
      <div
        class="container"
        style={{
          maxWidth: "800px",
        }}
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const commentObj = {};
            commentObj.slug = slug;
            commentObj.username = userName;
            commentObj.content = comment;
            commentObj.date = new Date();
            await addNewComment(commentObj);
          }}
        >
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-right">
              <input
                required
                class="input is-success"
                type="text"
                placeholder="Enter username"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Comment</label>
            <div class="control">
              <textarea
                required
                class="textarea"
                placeholder="Enter you thoughts"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              {isLoading && (
                <button type="submit" class="button is-link is-loading">
                  Adding Comment
                </button>
              )}
              {!isLoading && !isError && (
                <button type="submit" class="button is-link">
                  Add Comment
                </button>
              )}
              {isError && (
                <button type="submit" class="button is-danger" disabled>
                  Error Occured!
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCommentBox;
