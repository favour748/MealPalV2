import PropTypes from "prop-types";

const Button = ({ children, className, ...props }) => {
  const btnClass =
    props.color === "blue"
      ? "bg-[#4268fb] text-white text-sm px-8 py-2 rounded cursor-pointer outline-none border-none"
      : "bg-blue-100 text-blue text-sm px-8 py-2 rounded cursor-pointer outline-none border-none";

  return (
    <div className={className}>
      <button
        className={`${btnClass} ${className}`}
        onClick={props.btnClicked}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  btnClicked: PropTypes.func,
  color: PropTypes.string,
};

export default Button;
