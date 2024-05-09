import { createContext, useState } from "react";

export const CartContext = createContext(null)


const CartContextProvider =(props)=>{
            const [cart, setCartItem] = useState([])

            const addToCart = (id)=>{
                setCartItem((prev)=>({...prev,[id]:prev[id]+1}))
                console.log(cart);
            }
            
            const removeFromCart = (id)=>{
                setCartItem((prev)=>({...prev,[id]:prev[id]-1}))
            }

            const Context = {cart, addToCart, removeFromCart}

    return(
        <CartContext.Provider value={Context}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider