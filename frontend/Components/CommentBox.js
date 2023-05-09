import Link from "next/link";

const CommentBox = (props) => {
  const username = props.username;
  const content = props.content;
  const date = props.date;
  const key = props.itemNum;
  return (
    <>
      <Link href={"#" + key}>
        <div
          class="card-content"
          style={{
            borderStyle: "groove",
            borderWidth: "0.2rem",
            borderColor: "Highlight",
            margin: "0.5rem",
          }}
        >
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{username}</p>
            </div>
          </div>
          <br />
          <div class="content">
            <b>{content}</b>
            <br />
            <br />
            <time datetime="2016-1-1">
              <i>{date}</i>
            </time>
          </div>
        </div>

        <br />
      </Link>
    </>
  );
};

export default CommentBox;
