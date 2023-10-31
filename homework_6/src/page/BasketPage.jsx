import {useSelector, useDispatch} from "react-redux";
import {counterActions} from "../store/counterSlice";
import {productsActions} from "../store/productsSlice";

export const BasketPage = () => {
    const allProducts = useSelector((state) => state.products.products)
    const val = useSelector((state) => state.counter.value);
    const quantity = useSelector(state => state.products.quantity)
    const dispatch = useDispatch();
    const handleIncrementQuantity = () => {
        dispatch(productsActions.increaseQuantity())
    };
    const handleRemove = () => {
        dispatch(productsActions.removeProducts())
    }
    return (
        <div>
            <span>Счетчик корзины {val}</span>
            <div>
                <div>
                    <div>{allProducts.map(product => (
                        <div key={product.id}>
                            <h1>{product.name}</h1>
                            <h3>{product.price}</h3>
                            <img src={product.picture} alt="image"/>
                            <h3>{product.color}</h3>
                            <p>{product.description}</p>
                            <span>{quantity}</span>
                            <button
                                onClick={handleIncrementQuantity}
                            >
                                +
                            </button>
                            <button
                                onClick={handleRemove}
                            >
                                Удалить
                            </button>
                        </div>
                    ))}</div>
                </div>
            </div>
        </div>
    )
}

export default BasketPage