/* eslint-disable no-undef */
import "./styles.scss";
import burg from "../../../../assets/png/products.png";

const Quantity =() => {
  return (
    <>
      <div className="quantity">
        <div className="background-card">
        <div className="img-card">
          <img src={burg} alt="Imagem do produto" />
        </div>
        </div>
      </div>
    </>
  );
}

export default Quantity;
