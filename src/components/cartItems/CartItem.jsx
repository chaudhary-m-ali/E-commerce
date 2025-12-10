import React, { useContext } from "react";
import "./cartItem.css";
import { ShopDataContext } from "../context/ShopContext";
import remove_icon from "../../assets/remove.webp";
import toast from "react-hot-toast";
const CartItem = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItem,
    removeFromCart,
    addToCart,
    decreaseFromCart,
  } = useContext(ShopDataContext);

  console.log("cart item", cartItem);
  return (
    <div className="cartItems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, index) => {
        if (cartItem[e.id] > 0) {
          console.log("have cart item...", cartItem[e.id]);
          console.log("add to cart product:", e);
          return (
            <div key={index}>
              <div className="cartItems-format cartitems-format-main">
                <img src={e.image} alt="" width={100} height={100} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <p className="cartitems-quantity">
                  <button
                    className="increament-btn"
                    onClick={() => {
                      addToCart(e.id);
                      toast.success("1 Item Added!");
                    }}
                  >
                    +
                  </button>
                  <span>{cartItem[e.id]}</span>
                  <button
                    className="decreament-btn"
                    onClick={() => {
                      decreaseFromCart(e.id);
                      toast.error("1 Item Removed!");
                    }}
                  >
                    -
                  </button>
                </p>
                <p>${e.new_price * cartItem[e.id]}</p>

                <img
                  src={remove_icon}
                  alt=""
                  height={20}
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitemdown">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>if you have a promo code, Enter it here</p>
        </div>
        <div className="cartitems-promobox">
          <input type="text" placeholder="Promo Code" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
