import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export default function useEditPost() {
  //NEW
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, title, content }) =>
      axios.put(`http://localhost:3000/posts/${id}`, { title, content }),
    {
      onSuccess: (_, { id, response }) => {
        queryClient.refetchQueries();
        // queryClient.refetchQueries(["posts", id]);
      },
    }
  );
}
