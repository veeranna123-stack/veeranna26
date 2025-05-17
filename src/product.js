import React from 'react';
import './product.css';

function Product() {
  return (
    <div className="container">
      <h1>CSS Positioning Task</h1>
      
      <div className="card">
 
        <img src="https://via.placeholder.com/200" alt="Product" />
        <h3>Product Name</h3>
        <p className="price">$99.99</p>
      </div>

    </div>
  );
}
export default Product;