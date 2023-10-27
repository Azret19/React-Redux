import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import {increaseCounter} from "../store/counterReducer";
import {fetchProducts} from "../store/productsReducer";

export const ProductsPage = () => {
    const allProducts = useSelector((state) => state.products.products)
    const val = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleIncrement = () => {
        dispatch(increaseCounter(1));
    };

    return (
        <div>
            <span>Счетчик товаров</span>
            <div>
                <span>{val}</span>
                <div>{allProducts.map(product => (
                    <div key={product.id}>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <h3>{product.price}</h3>
                        <h3>{product.discountPercentage}</h3>
                        <h3>{product.rating}</h3>
                        <h3>{product.stock}</h3>
                        <h3>{product.brand}</h3>
                        <h3>{product.category}</h3>
                        <button
                            onClick={handleIncrement}
                        >
                            Купить
                        </button>
                    </div>
                ))}</div>
            </div>
        </div>
    )
}
