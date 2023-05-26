/* eslint-disable no-undef */
import PropTypes from "prop-types";
import "./styles.scss";

function ProductsThree({ img, title, description, price, ...props }) {
  return (
    <>
      <div className="products-three" {...props}>
        <div className="background-card">
        <div className="img-card">
          <img src={img} alt="Imagem do produto" />
        </div>
        </div>
        <div className="title-card">{title}</div>
        <div className="description-card">{description}</div>
        <div className="price-card">{price}</div>
      </div>
    </>
  );
}

ProductsThree.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};

export default ProductsThree;
