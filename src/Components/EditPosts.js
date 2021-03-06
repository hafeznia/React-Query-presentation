import React from "react";
import useEditPost from "../hooks/useEditPost";

const EditPost = ({ title, content, id }) => {
  const { mutate } = useEditPost();

  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    mutate({ id, title, content });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <h1>Edit Post</h1>
      <label>
        <span>title:</span>
        <input name="title" defaultValue={title} />
      </label>
      <label>
        <span>content:</span>
        <textarea name="content" defaultValue={content} />
      </label>

      <button type="submit">submit</button>
    </form>
  );
};

export default EditPost;
