import styles from './ProductItem.module.css'; 
import image from '../images/cafetera.jpg'

const ProductItem = ({data, addToCart}) => {

    let {id, name, price} = data;
    return (
        <div className={styles.containerProd}>
            <img src={image} width="100" height="70" alt="Imagen de cafetera" />
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button className={styles.add} onClick={()=> addToCart(id)}>Agregar</button>
        </div>
    )
}

export default ProductItem;
