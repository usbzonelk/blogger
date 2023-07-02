import Head from "next/head";

const LostApiConnection = () => {
  return (
    <>
      <Head>
        <title>Lost API Connection</title>
      </Head>

      <div class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <span class="icon is-large is-loading">
              <i class="fas fa-spinner fa-spin fa-3x"></i>
            </span>
            <h1 class="title">Lost API Connection</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LostApiConnection;
