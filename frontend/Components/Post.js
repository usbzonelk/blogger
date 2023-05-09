const Post = (props) => {
  const post = props.post;
  const author = props.author;
  const labels = props.labels;

  return (
    <div style={{ paddingTop: "5rem" }}>
      <div class="container" style={{ maxWidth: "800px" }}>
        <section class="section" style={{ paddingBottom: "0rem" }}>
          <h1 class="title">{post.title} </h1>

          <h2 class="subtitle">By {author.displayName}</h2>
          <h3 class="subtitle">{post.fullDate}</h3>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <div class="tags">
                  {labels
                    ? labels.map((label, idx) => {
                        return (
                          <span key={idx} class="tag is-info">
                            {label}
                          </span>
                        );
                      })
                    : ""}
                  {/* <span class="tag is-success">Tag 2</span>
                  <span class="tag is-warning">Tag 3</span> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section" style={{ paddingTop: "1rem" }}>
          <figure class="image is-16by9">
            <img
              src={
                post.images
                  ? post.images.header
                    ? post.images.header
                    : "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png"
                  : "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png"
              }
            />
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
