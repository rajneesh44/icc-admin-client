import "../App.css";
import Product from "../models/Product";
import dollar from "../assets/dollar.png";

interface ProductsProps {
  product: Product;
}

const ProductCard: React.FC<ProductsProps> = ({ product }) => {
    console.log('Product: ',product)
  const starTotal = 5;
  product.description =
    "Cricket bats are generally used by people who play cricket as a hobby. The bats are made of quality material and are ideal for playing cricket. Bats are available for age groups below four years to above 15 years. They are available in sizes from zero to six, including harrow, long and short handles. A sizing chart is available online to understand which one is better for you.";
  const starPercentage = (product.ratings / starTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  const element: any = document.querySelector(".stars-inner");
  if (element) {
    element.style.width = starPercentageRounded;
  }
  return (
    <div className="card" id="product-card" style={{ width: "18rem" }}>
      <div className="card-top">
        <img
          src={product.display_image}
          className="card-img-top"
          alt="new"
        />
      </div>
      <div className="card-body">
        <div className="card-heading-rating">
          <p className="card-title">{product.name}</p>
          <div className="ratings">
            <div className="stars-outer">
              <div className="stars-inner"></div>
            </div>
          </div>
        </div>
        <p className="card-text" id="description">{product.description}</p>
        <span className="discount-span">
          <img className="dollar" src={dollar} alt="" />
          <p className="card-text" id="discount">
            {product.discount}
          </p>
        </span>
        <p className="card-text" id="price">
          ₹{product.price}
        </p>
        <p className="product-quantity">10 units left</p>

        {/* <a href="#" className="btn btn-primary">
          Go
        </a> */}
      </div>
    </div>
  );
};

export default ProductCard;
