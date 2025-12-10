import React, { useContext } from "react";
import { ShopDataContext } from "../components/context/ShopContext";
import { useParams } from "react-router-dom";
import BredCrums from "../components/BredCrums/BredCrums";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import Description from "../components/description/Description";
import RelatedProduct from "../components/relatedProduct/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopDataContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id == productId);
  return (
    <div>
      <BredCrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct />
    </div>
  );
};

export default Product;
