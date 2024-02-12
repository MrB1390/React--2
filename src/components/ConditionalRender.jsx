import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ConditionalRender = ({ product,setCartCount }) => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
      {product.map((item, index) => {
        return (
          <>
           <ProductCard item={item} index={index} setCartCount={setCartCount}/>
          </>
        );
      })}
      </div>
    </div>
  );
};

export default ConditionalRender;
