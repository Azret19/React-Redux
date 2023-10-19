import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import Layout from "./components/Layout";
import NewPosts from "./pages/NewPosts";
import DeletePostPage from "./pages/DeletePostPage";

export const routes = {
    posts: "/posts",
    login: "/login",
    main: "/",
};

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="posts" element={<PostsPage />} />
                    <Route path="posts/:id" element={<SinglePostPage />} />
                    <Route path="posts/:id/delete" element={<DeletePostPage />} />
                    <Route path="addNewPost" element={<NewPosts/>} />
                    <Route path="*" element={<h3>Не найдено</h3>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
