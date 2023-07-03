import React, { useState } from "react";
import Head from "next/head";

const EditPost = () => {
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [labels, setLabels] = useState("");
  const [title, setTitle] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const handlePublish = () => {
    setIsPublished(true);
    // Publish post logic here
  };

  const handleSaveDraft = () => {
    setIsPublished(false);
    // Save draft logic here
  };

  return (
    <>
      <div
        style={{
          paddingTop: "6rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div className="columns">
          <div className="column is-one-fifth">
            <aside className="menu">
              <p className="menu-label">Manage the post</p>
              <ul className="menu-list">
                <li>
                  <a>Slug</a>
                  <input
                    className="input"
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </li>
                <li>
                  <a>Labels</a>
                  <input
                    className="input"
                    type="text"
                    value={labels}
                    onChange={(e) => setLabels(e.target.value)}
                  />
                </li>
              </ul>
            </aside>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input is-medium"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Content</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-fifth">
            <div className="buttons has-addons is-right">
              <button
                className="button is-primary is-outlined"
                onClick={handleSaveDraft}
              >
                Save as Draft
              </button>
              <button className="button is-primary" onClick={handlePublish}>
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPost;
