import React from "react";
import usePosts from "../hooks/usePosts";
import useDeletePost from "../hooks/useDeletePost";

import { Link } from "react-router-dom";
import RemoveIcon from "../assets/Icon/Remove.webp";

const Posts = () => {
  const { data: posts, loading, error } = usePosts();
  const { mutate } = useDeletePost();
  // console.log(deletePost);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {posts &&
        posts.map((item) => (
          <li>
            <Link to={`post/${item.id}`}>{item.title}</Link>
            <img src={RemoveIcon} width={20} onClick={() => mutate(item.id)} />
          </li>
        ))}
    </ul>
  );
};
export default Posts;
