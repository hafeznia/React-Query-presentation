import { useEffect, useState } from "react";
import axios from "axios";

//NEW
import { useQuery } from "react-query";

export default function usePostDetail(postId) {
  //NEW
  return useQuery(["post", postId], () =>
    axios.get(`http://localhost:3000/posts/${postId}`).then((res) => res.data)
  );
}
