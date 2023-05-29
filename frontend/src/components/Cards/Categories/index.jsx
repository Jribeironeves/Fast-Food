/* eslint-disable no-undef */
import PropTypes from "prop-types";
import "./styles.scss";

function Categories({ img, title, ...props }) {
  return (
    <>
      <div className="categories" {...props}>
        <div className="img-card">
          <img src={img} alt="Imagem da categoria de pedidos" />
        </div>
        <div className="title-card">{title}</div>
      </div>
    </>
  );
}

Categories.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
};

export default Categories;
