import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export default function useDeletePost() {
  //NEW
  const queryClient = useQueryClient();

  return useMutation(
    (id) => axios.delete(`http://localhost:3000/posts/${id}`),
    {
      onSuccess: (_, id) => {
        const posts = queryClient.getQueryData("posts");
        const data = posts.filter((item) => item.id !== id);
        queryClient.setQueryData("posts", data);
      },
    }
  );
}
