import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useGetAllSlugsMutation } from "../redux/features/slugs/publicSlugApi";
import { useGetFullPostMutation } from "../redux/features/posts/postApiSlice";
import NotFound from "../components/NotFound";
import LoadPost from "../components/LoadPost";

import dynamic from "next/dynamic";

const Post = dynamic(() => import("../components/Post"), { ssr: true });

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [getAllSlugs, { data: slugs, isLoading: isLoadingSlugs, isError }] =
    useGetAllSlugsMutation();

  useEffect(() => {
    getAllSlugs();
  }, [getAllSlugs]);

  const author = {
    username: "Jon",
    displayName: "John gaggs",
  };

  if (isLoadingSlugs ) {
    window.document.title = "Loading";

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
  } else {
    console.log("444");
  }

  if (slugs) {
    if (slugs.find((slug0) => slug0.slug === slug)) {
      return <LoadPost slug={slug} />;
    } else {
      return <NotFound />;
    }
  }
};
export default PostPage;
