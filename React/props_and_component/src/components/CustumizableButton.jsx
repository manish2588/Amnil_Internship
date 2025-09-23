import React from "react";
import PropTypes from "prop-types";

function CustumizableButton({ name, color }) {
  return (
    <button className="buttonComponent" style={{ backgroundColor: color }}>
      {name}
    </button>
  );
}

CustumizableButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CustumizableButton;
