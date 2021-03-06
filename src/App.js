import Posts from "./Components/posts";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostDetail from "./Components/PostDetail";
import NewPost from "./Components/NewPost";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./index.css";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/post/:id">
            <PostDetail />
          </Route>
          <Route path="/newpost">
            <NewPost />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
