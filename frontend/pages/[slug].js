import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGetAllSlugsMutation } from "../redux/features/slugs/publicSlugApi";
import NotFound from "../components/NotFound";
import LoadPost from "../components/LoadPost";
import FullScreenLoading from "../components/FullScreenLoading";

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [getAllSlugs, { data: slugs, isLoading: isLoadingSlugs, isError }] =
    useGetAllSlugsMutation();

  useEffect(() => {
    getAllSlugs();
  }, [getAllSlugs]);

  if (isLoadingSlugs) {
    window.document.title = "Loading";

    return <FullScreenLoading />;
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
