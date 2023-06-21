import dynamic from "next/dynamic";

import Head from "next/head";
const DataTable = dynamic(
  () => import("react-data-table-component").then((module) => module.default),
  {
    loading: () => <p>Loading posts...</p>,
    ssr: false,
  }
);
import { useSearchPostsMutation } from "../../redux/features/posts/postApiSlice";
import { useGetAllPostsMutation } from "../../redux/features/posts/postApiSlice";
import { useState } from "react";

//todo:
// table search function ; table filtering ;
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Author",
    selector: (row) => row.author,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Labels",
    selector: "labels",
    cell: (row) => (
      <span style={{ whiteSpace: "pre" }}>{row.labels.join(" / ")}</span>
    ),
  },
  {
    name: " ",
    selector: (row) => row.editBtn,

    cell: () => (
      <button class="button is-primary is-small" onClick={null}>
        Action
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const data = [
  {
    author: "a-small-river-by-their-place",
    title: "A Small River by Their Place",
    labels: [
      "https://a0.muscache.com/",
      "im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
    ],
    status: "published",
  },
  {
    author: "63e145b63782cedf741d8e2c",
    title: "00",
    labels: ["null"],
    status: "published",
  },
];
const Posts = () => {
  const [searchPosts, { data: searchData, isLoadingSearch, isErrorSearch }] =
    useSearchPostsMutation();

  const [getAllPosts, { data: postsLoad, isLoadingPosts, isErrorPosts }] =
    useGetAllPostsMutation();

  const [posts, setPosts] = useState(postsLoad ? postsLoad : data);

  const handleSelection = ({ selectedRows }) => {
    console.log("Selected Rows: ", selectedRows);
  };

  return (
    <>
      <Head>
        <title>Manage your posts</title>
      </Head>

      <div
        style={{
          paddingTop: "6rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div class="buttons is-centered">
          <button class="button is-primary is-medium">Create a new post</button>
        </div>

        <DataTable
          columns={columns}
          data={posts}
          selectableRows
          pagination
          onSelectedRowsChange={handleSelection}
        />
      </div>
    </>
  );
};

export default Posts;
