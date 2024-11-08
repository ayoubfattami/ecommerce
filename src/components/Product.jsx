import React, { Component } from "react";

class Product extends Component {
  render() {
    const { product, onAddToCart } = this.props;

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-blue-600 font-bold mt-2">{product.price} €</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
