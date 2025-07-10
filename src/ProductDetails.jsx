// Use <h3> for name, <p> for price. Conditionally display a "In Stock" or "Out of Stock" message using the inStock boolean prop and a ternary operator or logical &&. Format the price (e.g., "$25.99").
// Expected Output (Conceptual): Product name, price, and its stock status.import React from "react";

//.toFixed(2)


import React from "react";

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <h3>{product.name}</h3>
      <p>Price: $ {product.price.toFixed(2)}</p>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}
export default ProductDetails;
