import PropTypes from "prop-types";

function InputBox({ onChange }) {
  return (
    <input
      type="text"
      placeholder="Type something..."
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "5px", width: "200px" }}
    />
  );
}

InputBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputBox;
