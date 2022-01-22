const Button = ({ text, ...props }) => {
  return (
    <button {...props} className="primary-button">
      {text}
    </button>
  );
};

export default Button;
