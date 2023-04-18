import Head from "next/head";
import PostsContainer from "../components/PostsContainer";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Home() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <Provider store={store}>
        <PostsContainer />{" "}
      </Provider>
    </div>
  );
}
