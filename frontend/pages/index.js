import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import PostThumbnail from "../components/PostThumbnail";

export default function Home() {
  const posts = [
    {
      slug: "a-small-river-by-their-place",
      title: "A Small River by Their Place",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
      status: "published",
    },
    {
      slug: "123",
      title: "123",
      images: {
        header:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
      status: "draft",
    },
  ];
  return <></>;
}
