const CommentBox = () => {
  return (
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
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>
      <br />
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
        <a href="#">#responsive</a>
        <br />
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  );
};

export default CommentBox;
