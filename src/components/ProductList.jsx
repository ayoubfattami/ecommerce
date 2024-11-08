import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  render() {
    const { onAddToCart } = this.props;
    const products = [
      {
        id: 1,
        name: "Product 1",
        price: 10,
        image: "src/assets/imgArticle/galaxys20plus.png",
        description: "Description of Product 1",
      },
      {
        id: 2,
        name: "Product 2",
        price: 15,
        image: "src/assets/imgArticle/huaweip40black.png",
        description: "Description of Product 2",
      },
      {
        id: 3,
        name: "Product 3",
        price: 2000,
        image: "src/assets/imgArticle/huaweip50black.png",
        description: "Description of Product 4",
      },
      {
        id: 4,
        name: "Product 4",
        price: 15,
        image: "src/assets/imgArticle/huaweip50gold.png",
        description: "Description of Product 4",
      },
      {
        id: 5,
        name: "Product 5",
        price: 1500,
        image: "src/assets/imgArticle/iphone_12_black.png",
        description: "Description of Product 5",
      },
      {
        id: 6,
        name: "Product 6",
        price: 1600,
        image: "src/assets/imgArticle/iphone_12_black.png",
        description: "Description of Product 6",
      },
      {
        id: 7,
        name: "Product 7",
        price: 1700,
        image: "src/assets/imgArticle/iphone_12_black.png",
        description: "Description of Product 7",
      },
      {
        id: 8,
        name: "Product 8",
        price: 1800,
        image: "src/assets/imgArticle/iphone_12_black.png",
        description: "Description of Product 8",
      },
    ];

    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
