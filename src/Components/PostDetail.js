import React from "react";
import usePostDetail from "../hooks/usePostDetail";
import { useParams } from "react-router-dom";
import EditPosts from "../Components/EditPosts";

const PostDetail = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = usePostDetail(id);
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  return (
    <div className="postDetail">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <EditPosts title={post.title} content={post.content} id={post.id} />
        </>
      )}
    </div>
  );
};

export default PostDetail;
