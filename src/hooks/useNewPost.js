import { useEffect, useState } from "react";
import axios from "axios";

export default function useNewPost(postId) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(false);
  const [error, setError] = useState(false);

  const newPost = async ({ title, content }) => {
    setLoading(true);
    try {
      const data = await axios
        .post(`http://localhost:3000/posts/`, { title, content })
        .then((res) => res.data);
      setPost(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return [newPost, { loading, post, error }];
}
