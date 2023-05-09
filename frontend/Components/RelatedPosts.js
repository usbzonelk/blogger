import Link from "next/link";

const RelatedPosts = (props) => {
  const relatedPosts = props.related;
  return (
    <>
      <div class="columns is-multiline" style={{ margin: "2rem" }}>
        {relatedPosts
          ? relatedPosts.map((post) => {
              return (
                <div class="column is-3">
                  <Link href={post.slug}>
                    <div class="card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img
                            src={
                              post.images
                                ? post.images.header
                                  ? post.images.header
                                  : "https://1.1.1.1"
                                : "https://1.1.1.1"
                            }
                            alt="Placeholder image"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <p class="title is-4">{post.title}</p>
                        {/* <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis dignissim eleifend risus vel convallis. Sed eget
                        volutpat nulla.
                      </div> */}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
      <br />
    </>
  );
};

export default RelatedPosts;
