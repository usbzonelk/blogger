import React from "react";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  });

  const [searchString, setSearchString] = useState(
    isClient
      ? new URLSearchParams(window.location.search).get("search") || ""
      : ""
  );

  return (
    <p class="control has-icons-right">
      <input
        class="input"
        type="search"
        placeholder="Search..."
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        onKeyPress={(e) => {
          e.key === "Enter"
            ? (window.location.href = `/?search=${e.target.value}`)
            : null;
        }}
      />
      <span class="icon is-small is-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ddd"
            d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"
          />
        </svg>
      </span>
    </p>
  );
};

export default SearchBar;
