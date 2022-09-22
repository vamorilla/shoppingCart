import image from '../images/cafetera.jpg'

const CartItem = ({data, removeFromCart}) => {
    let {id, name, price, quantity} = data;
    return (
        <div style={{borderBottom: "thin solid grey", padding: "15px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <img src={image} width="100" height="70" alt="Imagen de cafetera" />
            <h4>{name}</h4>
            <h5>${price}.00 x {quantity} = ${price * quantity}.00</h5>
            <button onClick={() => removeFromCart(id)} style={{marginBottom: "2%", backgroundColor: "rgb(151, 37, 37)", padding: "8px", color: "whitesmoke", border: "1px solid gray", borderRadius: "5px", cursor: "pointer"}}>Eliminar uno</button>
            <button onClick={() => removeFromCart(id, true)} style={{marginBottom: "2%", backgroundColor: "rgb(151, 37, 37)", padding: "8px", color: "whitesmoke", border: "1px solid gray", borderRadius: "5px", cursor: "pointer"}}>Eliminar Todos</button>
        </div>
    )
}

export default CartItem;
