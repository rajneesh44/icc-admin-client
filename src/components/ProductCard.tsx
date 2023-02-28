import "../App.css";
import Product from "../models/Product";
import dollar from "../assets/dollar.png";

interface ProductsProps {
  product: Product;
}

const ProductCard: React.FC<ProductsProps> = ({ product }) => {
  const starTotal = 5;

  const starPercentage = (product.ratings / starTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  return (
    <div className="card" id="product-card" style={{ width: "18rem" }}>
      <div className="card-top">
        <img src={product.display_image} className="card-img-top" alt="new" />
      </div>
      <div className="card-body">
        <div className="card-heading-rating">
          <p className="card-title">{product.name}</p>
          <div className="ratings">
            <div className="stars-outer">
              <div
                className="stars-inner"
                style={{ width: `${starPercentageRounded}` }}
              ></div>
            </div>
          </div>
        </div>
        <p className="card-text" id="description">
          {product.description}
        </p>
        <span className="discount-span">
          <img className="dollar" src={dollar} alt="" />
          <p className="card-text" id="discount">
            {product.discount}
          </p>
        </span>
        <p className="card-text" id="price">
          ₹{product.price}
        </p>
        <p className="product-quantity">{product.quantity} units left</p>

        {/* <a href="#" className="btn btn-primary">
          Go
        </a> */}
      </div>
    </div>
  );
};

export default ProductCard;
