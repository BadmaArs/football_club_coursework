import { createContext, useState, useEffect } from 'react';
import Category from '../components/Home/Category/Category';
import { useLocation } from "react-router-dom"

export const Context = createContext();  

const AppContext = ({ children }) => {
    const [ categories, setCategories ] = useState();
    const [ products, setProducts ] = useState();
    const [ cartItems, setCartItem] = useState([]);
    const [ cartCaunt, setCartCaunt] = useState(0);
    const [ cartSubTitles, setCartSubTitles] = useState(0);
    const location = useLocation();

    useEffect(() => {

    },[cartItems])

    const handleAddToCart = ( product, quantity ) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id);
        if( index !== -1 ){
            items[index].attributes.quantity += quantity
        } else {
            product.attributes.quantity = quantity
            items = [...cartItems, product];
        }
        setCartItem(items)
    }
    const handleRemoveFromCart = ( product ) => {
        let items = [...cartItems];
        items = items.filter(p => p.id !== product.id);
        setCartItem(items);
    }
    const handleCartProductQuantity = ( type, product ) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id);
        if (type === "inc"){
            items[index].attributes.quantity += 1
        } else if (type === "dec"){
            if (items[index].attributes.quantity === 1) return;
                items[index].attributes.quantity -= 1;
        }
        setCartItem(items);
    }

    return (
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartCaunt,
            setCartCaunt,
            cartItems,
            setCartItem,
            cartSubTitles,
            setCartSubTitles,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity,
        }}>
            {children}
        </Context.Provider>
    );
}

export default AppContext;