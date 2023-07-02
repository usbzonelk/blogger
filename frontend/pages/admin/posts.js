import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Head from "next/head";

import LostApiConnection from "../../components/LostApiConnection";
import { useSearchPostsMutation } from "../../redux/features/posts/postApiSlice";
import { useGetAllPostsMutation } from "../../redux/features/posts/postApiSlice";

//todo:
// table search function ; table filtering ;

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

const columns = [
  {
    name: "Author",
    selector: "author",
    sortable: true,
  },
  {
    name: "Title",
    selector: "title",
    sortable: true,
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
  },
];

const Posts = () => {
  const [showPostControlButtons, setShowPostControlButtons] = useState(false);

  const [
    searchPosts,
    { data: searchData, isLoading: isLoadingSearch, isError: isErrorSearch },
  ] = useSearchPostsMutation();

  const [
    getAllPosts,
    { data: postsLoad, isLoading: isLoadingPosts, isError: isErrorPosts },
  ] = useGetAllPostsMutation();

  const [posts, setPosts] = useState(postsLoad ? postsLoad : data);

  const handleSelection = ({ selectedRows }) => {
    const selected = selectedRows;

    if (selected.length <= 0) {
      setShowPostControlButtons(false);
    } else if (selected.length > 0) {
      setShowPostControlButtons(true);
    }
  };

  useEffect(() => {
    async function loadPosts() {
      await getAllPosts();
    }
    loadPosts();
  }, [getAllPosts]);

  if (isErrorPosts || isErrorSearch) return <LostApiConnection />;

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
          <button disabled={false} class="button is-primary is-medium">
            Create a new post
          </button>
        </div>
        <div class="buttons is-centered">
          <button disabled={!showPostControlButtons} class="button is-danger">
            Delete
          </button>
        </div>
        {(isLoadingPosts || postsLoad) && (
          <div>
            {" "}
            <DataTable
              title="All the posts"
              columns={columns}
              data={postsLoad}
              pagination
              highlightOnHover
              selectableRows
              onSelectedRowsChange={handleSelection}
              progressPending={isLoadingPosts || isLoadingSearch}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Posts;
