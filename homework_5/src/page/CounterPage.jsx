import { useSelector, useDispatch } from "react-redux";
import {increaseCounter} from "../store/counterReducer";
import {useEffect} from "react";
import {asyncCreateCart} from "../store/productsReducer";

const CounterPage = () => {
    const allProducts = useSelector((state) => state.products.products)
    const val = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncCreateCart);
    }, [dispatch]);

    return (
        <div>
            <span>Корзина товаров</span>
            <div>
                <span>{val}</span>
            </div>
            <div>{allProducts.map(product => (
                <div key={product.id}>
                    <h2>{product.id}</h2>
                    <h2>Title: {product.title}</h2>
                    <h2>Price: {product.price}</h2>
                    <button
                        onClick={asyncCreateCart}
                    >
                        Оплатить
                    </button>
                </div>
            ))}</div>
        </div>
    );
};

export default CounterPage;