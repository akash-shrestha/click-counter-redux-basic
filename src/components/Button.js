import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, color, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: "button",
};

export default Button;
