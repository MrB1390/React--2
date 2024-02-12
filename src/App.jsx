import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ConditionalRender from './components/ConditionalRender';

const App = () => {
      const arrObj = [{
        id: 1,
        name: "Addidas-120",
        url: "https://images.pexels.com/photos/1032109/pexels-photo-1032109.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "Rs 800"
      },
      {
        id: 2,
        name: "Addidas-320",
        url: "https://images.pexels.com/photos/1161538/pexels-photo-1161538.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "Rs 600"
      },
      {
        id: 3,
        name: "Addidas-420",
        url: "https://images.pexels.com/photos/1449844/pexels-photo-1449844.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "Rs 900"
      },
      {
        id: 4,
        name: "Addidas-620",
        url: "https://images.pexels.com/photos/233312/pexels-photo-233312.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "Rs 1200"
      },
      {
        id: 5,
        name: "Addidas-720",
        url: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "Rs 1200"
      },
      {
        id: 6,
        name: "Addidas-820",
        url: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "Rs 1500"
      },
    ]
    const[product,setProduct] = useState(arrObj);
    const[cartCount,setCartCount] = useState(0)
  return (
    <div>
      <Navbar setCartCount={setCartCount} cartCount={cartCount}/>
      <Header />
      <ConditionalRender product={product} setProduct={setProduct} setCartCount={setCartCount}/>
      <Footer />
    </div>
  );
};

export default App;