import Link from "next/link";

const PostThumbnail = (props) => {
  const postData = props.post;

  return (
    <section class="section">
      <Link href={postData.slug}>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src={
                  !postData.images
                    ? "https://4.bp.blogspot.com/-SFvd24mMj4M/XbdGtVvkBJI/AAAAAAAAADg/u6jCI-VpFF4H0lSKvtVBuiUq0bUhCT78gCLcBGAsYHQ/s640/It%25E2%2580%2599s%2BSomething%2BThat%2BI%2Bwanted%2Bgo%2Bto%2BAchieve%2B1.jpg"
                    : postData.images.header
                }
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{postData.title}</p>
                <div class="tags">
                  <span class="tag is-info">Tag 1</span>
                  <span class="tag is-success">Tag 2</span>
                  <span class="tag is-warning">Tag 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default PostThumbnail;

/*
{
        slug: "a-small-river-by-their-place",
        title: "A Small River by Their Place",
        images: {
          header: "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
        },
        status: "published"
      },


*/
