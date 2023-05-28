import PropTypes from "prop-types";
import "./styles.scss";

function Additional({ img, ...props }) {
  return (
    <>
      <div className="additional" {...props}>
        <div className="img-card">
          <img src={img} alt="Imagem do produto" />
        </div>
      </div>
    </>
  );
}

Additional.propTypes = {
  img: PropTypes.string,
};
export default Additional;
