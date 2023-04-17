import { useRouter } from "next/router";
import { useEffect } from "react";

import NotFound from "../components/NotFound";
/* import Post from "../components/Post";
 */ import dynamic from "next/dynamic";
const Post = dynamic(() => import("../components/Post"), { ssr: true });

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const author = {
    username: "Jon",
    displayName: "John gaggs",
  };

  const post = {
    title: "A Small River by Their Place",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Satis est ad hoc responsum. Quamquam wordpress blog theme recte et reiecta dicere licebit. Quam nemo umquam voluptatem appellavit, appellat erat enim polemonis duo reges constructio. interrete. Nihil opus est exemplis hoc facere longius.",
    images: {
      header:
        "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      imgs: [
        "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
        "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
        "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
        "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
      ],
    },
    date: {
      fullDate: "1674890763837",
      year: "2023",
      month: "01",
    },
    status: "published",
    _id: "63d4ce0b0969cbdfb123b3ff",
  };

  if (slug == "123") {
    /* useEffect(() => {
      window.document.title = post.title;
    }, [post.title]); */
    return <Post post={post} author={author} />;
  } else {
    return <NotFound />;
  }
};
export default PostPage;
