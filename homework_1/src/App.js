import './App.css';
import {Routes, Route} from "react-router-dom";

import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import Layout from "./components/Layout";
import NewPosts from "./pages/NewPosts";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/posts' element={<PostsPage/>}/>
                    <Route path='/NewPosts' element={<NewPosts/>}/>

                    <Route path="*" element={<h1>Не найдено</h1>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
