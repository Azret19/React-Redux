import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import FormPage from "./pages/FormPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="form" element={<FormPage />}/>
                    <Route path="*" element={<h3>Не найдено</h3>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
