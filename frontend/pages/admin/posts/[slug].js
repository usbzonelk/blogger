import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGetAllSlugsMutation } from "../../../redux/features/slugs/publicSlugApi";

import FullScreenLoading from "../../../components/FullScreenLoading";
import EditPost from "../../../components/admin/EditPost";

const EditPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [getAllSlugs, { data: slugs, isLoading: isLoadingSlugs, isError }] =
    useGetAllSlugsMutation();

  

  const loadFullPost = async (slug) => {
    await getFullPost(slug);
  };

  const sendFullPostRequest = (slug, loadFullPost) => {
    useEffect(() => {
      loadFullPost(slug);
    }, [slug, loadFullPost]);
  };

  useEffect(() => {
    getAllSlugs();
  }, []);

  if (isLoadingSlugs || isLoadingPost) {
    window.document.title = "Loading";

    return <FullScreenLoading />;
  }

  if (slugs) {
    const matchingSlug = slugs.find((slug0) => slug0.slug === slug);
    if (matchingSlug) {
      sendFullPostRequest(slug, loadFullPost);
    } else {
      return <NotFound />;
    }
  }
  if (post && !isLoadingPost) {
    return <EditPost slug={slug} />;
  }
};
export default EditPostPage;
