import axios from "axios";
import { useEffect, useState } from "react";
import "../App";
import ProductCard from "./ProductCard";
import Product from "../models/Product";

const BASE_URL = "http://127.0.0.1:8080";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    console.log("====", BASE_URL);
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    const response = await axios.get(`${BASE_URL}/products`);
    const responseProducts: Product[] = response.data.data as Product[];
    setProducts(responseProducts);
    return response.data;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container" id="products-container">
      <div className="product-heading-parent">
        <div className="prodcuts-heading">
          <h2>All Products</h2>
        </div>
        <button
          className="btn btn-success"
          type="submit"
          id="add-product-button"
        >
          + Add Product
        </button>
        <button
          className="btn btn-success"
          type="submit"
          id="add-product-button-2"
        >
          +
        </button>
        <div className="product-search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      <div className="hl"></div>

      {products.map((product: Product) => (
        <ProductCard key={product.uuid} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
