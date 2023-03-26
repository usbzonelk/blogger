"use client"; // this is a client component 👈🏽

import {
  InfoCircleOutlined,
  InsertRowBelowOutlined,
  SmallDashOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
import { useState } from "react";
const items = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },

  {
    label: "All Posts",
    key: "app",
    icon: <SmallDashOutlined />,
    disabled: true,
  },
  {
    label: "Categories",
    key: "categories",
    icon: <InsertRowBelowOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "About ",
    key: "about",
    icon: <InfoCircleOutlined />,
  },
  {
    label: (
      <a href="/" target="_blank" rel="noopener noreferrer">
        More Info{" "}
      </a>
    ),
    key: "moreInfo",
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Navbar;
