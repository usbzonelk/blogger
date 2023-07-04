import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGetAllSlugsMutation } from "../../../redux/features/slugs/publicSlugApi";

import FullScreenLoading from "../../../components/FullScreenLoading";
import EditPost from "../../../components/admin/EditPost";
import NotFound from "../../../components/NotFound";

const EditPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [getAllSlugs, { data: slugs, isLoading: isLoadingSlugs, isError }] =
    useGetAllSlugsMutation();

  useEffect(() => {
    getAllSlugs();
  }, []);

  if (isLoadingSlugs) {
    window.document.title = "Loading";

    return <FullScreenLoading />;
  }

  if (slugs) {
    const matchingSlug = slugs.find((slug0) => slug0.slug === slug);
    if (matchingSlug) {
      <EditPost slug={slug} />;
    } else {
      return <NotFound />;
    }
  }
};
export default EditPostPage;
