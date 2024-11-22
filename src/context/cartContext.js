const { createContext, useContext } = require("react")

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {

    const value = {
        cartList: [],
        total: 0
    }

    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}