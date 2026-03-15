type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="primary-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;