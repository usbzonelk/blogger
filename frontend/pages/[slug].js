import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useGetAllSlugsMutation } from "../redux/features/slugs/publicSlugApi";
import { useGetFullPostMutation } from "../redux/features/posts/postApiSlice";
import NotFound from "../components/NotFound";
import LoadPost from "../components/LoadPost";
import FullScreenLoading from "../components/FullScreenLoading";

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

  if (isLoadingSlugs) {
    window.document.title = "Loading";

    return <FullScreenLoading />;
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
