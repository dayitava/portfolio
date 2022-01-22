const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="primary-button">
      {text}
    </button>
  );
};

export default Button;
