import Head from "next/head";

import { useSendLoginDataMutation } from "../redux/features/users/login";

const Login = () => {
  const [sendLoginData, { data, isLoading, isError }] =
    useSendLoginDataMutation();

  const handleLoginBtn = async (ev) => {
    ev.preventDefault();
    console.log(ev.target.password.value);
    await sendLoginData({
      email: ev.target.email.value,
      password: ev.target.password.value,
    });
  };

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
              <form
                onSubmit={(ev) => {
                  handleLoginBtn(ev);
                }}
              >
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input
                      class="input"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <button type="submit" class="button is-primary">
                      Login
                    </button>
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
