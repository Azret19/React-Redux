import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import {ProductsPage} from "./page/ProductsPage";
import BasketPage from "./page/BasketPage";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<span>Home Page</span>} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="basket" element={<BasketPage />} />
            <Route path="*" element={<span>Not found</span>}/>
          </Route>
        </Routes>
      </>
  );
}

export default App;
