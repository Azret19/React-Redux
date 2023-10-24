import {useSelector, useDispatch} from "react-redux";
import {increaseCounter} from "../store/counterReducer";

export const ProductsPage = () => {
    const allProducts = useSelector((state) => state.products.products)
    const val = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increaseCounter(1));
    };

    return (
        <div>
            <span>Счетчик товаров</span>
            <div>
                <span>{val}</span>
                <div>{allProducts.map(product => (
                    <div key={product}>
                        <h1>{product.name}</h1>
                        <h3>{product.price}</h3>
                        <img src={product.picture} alt="image"/>
                        <h3>{product.color}</h3>
                        <p>{product.description}</p>
                        <h4>{product.category}</h4>
                        <h4>{product.tags.toString()}</h4>
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