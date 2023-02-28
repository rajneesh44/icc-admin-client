import axios from "axios";
import { useEffect, useState } from "react";
import "../App";
import ProductCard from "./ProductCard";
import Product from "../models/Product";
import Navbar from "./Navbar";

// const BASE_URL = "http://127.0.0.1:8080";
const BASE_URL = "https://icc-hack.ap-south-1.elasticbeanstalk.com";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    console.log("====", BASE_URL);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    const response = await axios.get(`${BASE_URL}/products/admin`, {withCredentials: true});
    const responseProducts: Product[] = response.data.data as Product[];
    setProducts(responseProducts);
    return response.data;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
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
        <div className="grid">
          {products.map((product: Product) => (
            <ProductCard key={product.uuid} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
