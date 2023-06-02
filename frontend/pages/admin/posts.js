import Head from "next/head";
import DataTable from "react-data-table-component";

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
    selector: (row) => row.labels,
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
    labels: null,
    status: "published",
  },
];
const Posts = () => {
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
        <DataTable columns={columns} data={data} selectableRows />
      </div>
    </>
  );
};

export default Posts;
