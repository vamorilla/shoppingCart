import { useReducer } from "react";
import { TYPES } from "./actions/shoppingActions";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import styles from './ShoppingCart.module.css';
import { shoppingInitialState, shoppingReducer } from "./reducers/shoppingReducer";

const ShoppingCart = () => {
    
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const {products, cart} = state;

    const addToCart = (id)=>{
        dispatch({type: TYPES.ADD_TO_CART, payload: id});
    };
    const removeFromCart = (id, all = false)=>{
        if(all){
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
        }else{
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})
        }
    };
    const clearCart = ()=>{
        dispatch({type: TYPES.CLEAR_CART})
    };
    
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Carrito de Compras</h2>
            <h3 className={styles.subtitle}>Productos</h3>
            <article className="product-box grid-responsive">
                {products.map((prod) => (
                    <ProductItem key={prod.id} data={prod} addToCart={addToCart} />
                ))}
            </article>
            <h3 className={styles.subtitle}>Carrito</h3>
            <article className="product-box">
                <button className={styles.delete} onClick={clearCart}>Eliminar productos</button>
                {cart.map((item, index) => (
                    <CartItem key={index} data={item} removeFromCart={removeFromCart} />
                ))}
            </article>
        </div>
    )
}

export default ShoppingCart;
