import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ children, className, onClick, as: Component }) => {
  return (
    <Component className={`button ${className}`} onClick={onClick}>
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  as: PropTypes.string,
};

Button.defaultProps = {
  as: "button",
};

export default Button;
