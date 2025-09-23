import PropTypes from "prop-types";

function Display({ text }) {
  return (
    <p>
      Typed Input: <strong>{text}</strong>
    </p>
  );
}

Display.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Display;
