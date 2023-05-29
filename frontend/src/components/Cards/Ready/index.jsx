/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";
import "./styles.scss";

function Ready({
  img,
  title,
  description,
  className,
  btnExcluir,
  btnIncluir,
  ...props
}) {
  return (
    <>
      <div className={className} {...props}>
        <div className="img-card">
          <img src={img} alt="Imagem do produto" />
        </div>
        <div className="text-description">
          <h3>{title}</h3>
          <h4>{description}</h4>
        </div>
        <div className="img-delete">
          <img src={btnExcluir} alt="button-imagem" />
        </div>
      </div>
    </>
  );
}

Ready.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  btnExcluir: PropTypes.string,
  btnIncluir: PropTypes.string,
};
export default Ready;
