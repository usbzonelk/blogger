import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Log in to continue</title>
      </Head>
      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half">
              <h1 class="title has-text-centered">Login to admin panel</h1>
              <form>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <button class="button is-primary">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
