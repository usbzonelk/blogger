import React, { useState, useEffect } from "react";

import { useGetFullPostMutation } from "../../redux/features/posts/postApiSlice";

const EditPost = (props) => {
  const [slug, setSlug] = useState(props ? props.slug : "");
  /* const [content, setContent] = useState(props ? props.content : "");
  const [labels, setLabels] = useState(props ? props.labels : []);
  const [title, setTitle] = useState(props ? props.title : ""); */
  const [isPublished, setIsPublished] = useState(false);
  const [isNewPost, setIsNewPost] = useState(
    props ? (props.new ? true : false) : false
  );
  const [
    getFullPost,
    { data: post, isLoading: isLoadingPost, isError: loadingPostError },
  ] = useGetFullPostMutation();

  useEffect(() => {
    getFullPost(slug);
  });
  
  const postData = {
    slug: slug,
    title: title,
    content: content,
    status: "published",
    labels: labels,
  };

  const handlePublish = () => {
    setIsPublished(true);
  };

  const handleSaveDraft = () => {
    setIsPublished(false);
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
