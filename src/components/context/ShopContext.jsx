import React from "react";
import { createContext } from "react";
import all_product from "../../assets/all_product";
export const ShopDataContext = createContext(null);
const ShopContext = (props) => {
  const contextValue = { all_product };
  return (
    <ShopDataContext.Provider value={contextValue}>
      {props.children}
    </ShopDataContext.Provider>
  );
};

export default ShopContext;
