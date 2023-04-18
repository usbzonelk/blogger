import PostThumbnail from "./PostThumbnail";

export default function PostsContainer() {
  const posts = [
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
      status: "published",
    },
    {
      slug: "123",
      title: "123",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
      status: "draft",
    },
  ];
  return (
    <>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Post Title</p>
            </div>
          </div>

          <div class="tags">
            <span class="tag is-info">Tag 1</span>
            <span class="tag is-success">Tag 2</span>
            <span class="tag is-warning">Tag 3</span>
          </div>
        </div>
      </div>
      {posts.length < 1 ? (
        <section>
          <h1>No Posts found</h1>
        </section>
      ) : (
        <div class="container" style={{ maxWidth: "800px" }}>
          {posts.map((post) => (
            <PostThumbnail post={post} />
          ))}
        </div>
      )}
    </>
  );
}
