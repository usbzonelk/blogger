import Head from "next/head";
import { useState } from "react";

import Cookies from "js-cookie";

import { useSendLoginDataMutation } from "../redux/features/users/login";

import { useGetAllPostsMutation } from "../redux/features/posts/adminPosts";

const Login = () => {
  const [getAllPosts, { data, isError: kk }] = useGetAllPostsMutation();

  const [sendLoginData, { data: token, isLoading, isError, status }] =
    useSendLoginDataMutation();
  const [isVisible, setIsVisible] = useState(true);
  const [isErr, setIsErr] = useState(false);

  const handleClose = () => {
    setIsVisible(true);
  };

  const handleLoginBtn = async (ev) => {
    getAllPosts();

    ev.preventDefault();
    const loginData = {
      email: ev.target.email.value,
      password: ev.target.password.value,
    };
    const res = await sendLoginData(loginData);
    if (status == "rejected") {
      setIsErr(true);
      setIsVisible(false);
    }
    if (status == "uninitialized") {
      await sendLoginData(loginData);
      if (status == "rejected") {
        setIsErr(true);
        setIsVisible(false);
      }
    }
    if (token) {
      Cookies.set("token", token.token, { expires: 7, path: "/" });
      Cookies.set("user", ev.target.email.value, { expires: 7, path: "/" });
    }
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
                    <button
                      type="submit"
                      className={`button is-primary ${
                        isLoading ? "is-loading" : ""
                      }`}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "9999",
          }}
          className={`notification is-danger`}
          hidden={isVisible}
        >
          <button className="delete" onClick={handleClose}></button>
          Invalid login credentials!
        </div>
      </section>
    </>
  );
};

export default Login;
