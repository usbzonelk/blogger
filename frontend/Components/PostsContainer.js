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
