import axios from "axios";

//NEW
import { useQuery } from "react-query";

export default function usePosts() {
  return useQuery(
    "posts",
    () => axios.get("http://localhost:3000/posts").then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      retry: 5,
      retryDelay: 1000,
    }
  );
}
