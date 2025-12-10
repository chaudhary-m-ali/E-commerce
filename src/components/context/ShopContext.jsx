import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../../assets/all_product";
import CartItem from "../cartItems/CartItem";
export const ShopDataContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

console.log("getDefaultCart", getDefaultCart());

const ShopContext = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    console.log("itemId", itemId);
    console.log("cartItem value in add to cart function:", cartItem);
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("cartItem after add to cart", cartItem);
  };
  const decreaseFromCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: 0 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItem = () => {
    let totalitem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalitem += cartItem[item];
      }
    }
    return totalitem;
  };

  const contextValue = {
    getTotalCartItem,
    getTotalCartAmount,
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    decreaseFromCart,
  };
  return (
    <ShopDataContext.Provider value={contextValue}>
      {props.children}
    </ShopDataContext.Provider>
  );
};

export default ShopContext;
