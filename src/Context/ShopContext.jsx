import React, { createContext, useState } from "react"
import all_products from "../Components/Assets/all_product"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++){
        cart[index] = 0; 
    }

    return cart;
}

const ShopContextProvider = (props) => {


    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        // Use the functional form of setCartItems to ensure you're working with the latest state
        setCartItems((prev) => {
            // Create a copy of the previous state
            const newCartItems = { ...prev };
            
            // Increment the count of the specific item
            newCartItems[itemId] = (newCartItems[itemId] || 0) + 1;
    
            // Log the updated state
            console.log(newCartItems);
    
            // Return the updated state
            return newCartItems;
        });
    };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]- 1}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            }

            return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    
    const contextValue = {getTotalCartItems,all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;