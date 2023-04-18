const Post = (props) => {
  const post = props.post;
  const author = props.author;

  return (
    <div style={{ paddingTop: "5rem" }}>
      <div class="container" style={{ maxWidth: "800px" }}>
        <section class="section" style={{ paddingBottom: "0rem" }}>
          <h1 class="title">{post.title} </h1>

          <h2 class="subtitle">By {author.displayName}</h2>
          <h3 class="subtitle">{post.fullDate}</h3>
        </section>
        <section class="section" style={{ paddingTop: "1rem" }}>
          <figure class="image is-16by9">
            <img src={post.images.header} />
          </figure>
          <div style={{ whiteSpace: "pre-line", paddingTop: "3rem" }}>
            {" "}
            {post.content}
          </div>
        </section>{" "}
      </div>
    </div>
  );
};

export default Post;
