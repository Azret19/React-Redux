import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<span>Home Page</span>} />
              <Route path="posts" element={<PostList />} />
              <Route path="form" element={<PostForm />} />
            <Route path="*" element={<span>Not found</span>}/>
          </Route>
        </Routes>
      </>
  );
}

export default App;
