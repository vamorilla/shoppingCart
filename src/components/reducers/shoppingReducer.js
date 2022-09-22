import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [
        {id: 1, name: " Producto 1", price: 100},
        {id: 2, name: " Producto 2", price: 230},
        {id: 3, name: " Producto 3", price: 140},
        {id: 4, name: " Producto 4", price: 50},
        {id: 5, name: " Producto 5", price: 500},
        {id: 6, name: " Producto 6", price: 200},
    ],
    cart: []
}

export function shoppingReducer(state, action){
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(prod => prod.id === action.payload);
            let itemCart = state.cart.find(item => item.id === newItem.id);
            
            return itemCart 
            ? {
                ...state, cart: state.cart.map(item => item.id === newItem.id 
                    ? {...item, quantity: item.quantity + 1}
                    : item)
            } 
            : {
                ...state,cart: [...state.cart, {...newItem, quantity: 1}]
            };
        
        }
        
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemDelete = state.cart.find(prod => prod.id === action.payload);

            return itemDelete.quantity > 1 ? {
                ...state, cart: state.cart.map(prod => prod.id === action.payload ? {...prod, quantity: prod.quantity - 1} : prod)
            } 
            : {
                ...state,
                cart: state.cart.filter(prod => prod.id !== action.payload)
            }
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(prod => prod.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState;
        }
    
        default:
            return state;
    }
}