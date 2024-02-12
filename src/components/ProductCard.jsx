import React, { useState } from "react";

const ProductCard = ({ item,index,setCartCount }) => {
  const [status,setStatus] = useState(true);
  const addCart = () => {
    setStatus(false);
    setCartCount(val => val + 1)
  }
  const removeCart = () => {
    setStatus(true);
    setCartCount(val => val - 1)
  }
  return (
    <div>
      <div key={index}>
                <div class="col">
                  <div class="card h-100">
                    <img src={item.url} alt="Image" />
                    <div class="card-body text-center">
                      <h5 class="card-title">{item.name}</h5>
                      <p class="card-text">
                        {item.price}
                      </p>
                       {status ? <button className="btn btn-primary" onClick={addCart}>Add Cart</button> :
                         <button className="btn btn-danger" onClick={removeCart}>Remove From Cart</button>
                       }
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
};

export default ProductCard;
