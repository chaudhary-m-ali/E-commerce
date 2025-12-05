import React, { useContext } from "react";
import "../css/ShopCategory.css";
import { ShopDataContext } from "../components/context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopDataContext);
  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>showing 1/12</span>
          out of 36 Products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} height={20} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
