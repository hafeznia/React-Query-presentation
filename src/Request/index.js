import axios from "axios";

const Request = axios.create({
  baseURL: "/localhost:3000",
});

const getPosts = async () => {
  const { data } = await Request.get(`/posts`);
  return data;
};

const getPost = async (_, id) => {
  const { data } = await Request.get(`/posts/${id}`);
  return data;
};

const createPost = async ({ title, content }) => {
  const newPost = { title, content };
  const { data } = await Request.post(`/posts`, newPost);
  return data;
};

const editPost = async ({ id, ...post }) => {
  const { data } = await Request.put(`/posts/${id}`, post);
  return data;
};

const deletePost = async (id) => {
  const { data } = await Request.delete(`/posts/${id}`);
  return data;
};

export { getPosts, getPost, createPost, editPost, deletePost };
