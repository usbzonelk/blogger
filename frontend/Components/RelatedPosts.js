const RelatedPosts = () => {
  return (
    <>
      <div class="columns is-multiline" style={{ margin: "2rem" }}>
        <div class="column is-3">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://picsum.photos/200/150/?random"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">Related Post Title</p>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dignissim eleifend risus vel convallis. Sed eget volutpat nulla.
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default RelatedPosts;
