const FullScreenLoading = () => {
  return (
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <span class="icon is-large is-loading">
            <i class="fas fa-spinner fa-spin fa-3x"></i>
          </span>
          <h1 class="title">Loading...</h1>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoading;
