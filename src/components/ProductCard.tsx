import "../App.css";
import Product from "../models/Product";
import Star from "../assets/star2.png";

interface ProductsProps {
  product: Product;
}

const ProductCard: React.FC<ProductsProps> = ({ product }) => {
  const starTotal = 5;
  const starPercentage = (product.ratings / starTotal) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
//   const element = document.getElementsByClassName('ratin')
//   document.querySelector(`.ratings .stars-inner`)!!.style.width =
//     starPercentageRounded;
  return (
    <div className="card" id="product-card" style={{ width: "18rem" }}>
      <div className="card-top">
        {/* <img className="ratings" src={Star} alt="yoookd" /> */}

        <div className="rating-number">({product.ratings})</div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/A_Modern_Cricket_Bat.jpg"
          className="card-img-top"
          alt="new"
        />
      </div>
      <div className="card-body">
        <div className="card-heading-rating">
          <h5 className="card-title">{product.name}</h5>
          {/* <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span> */}
          <div className="ratings">
            <div className="stars-outer">
              <div className="stars-inner"></div>
            </div>
          </div>
        </div>
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
