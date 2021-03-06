import React from "react";
import useNewPost from "../hooks/useNewPost";

const NewPost = () => {
  const [newPost] = useNewPost();

  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    newPost({ title, content });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <h1>New Post</h1>
      <label>
        <span>title:</span>
        <input name="title" />
      </label>
      <label>
        <span>content:</span>
        <textarea name="content" />
      </label>

      <button type="submit">submit</button>
    </form>
  );
};

export default NewPost;
