/* eslint-disable react/prop-types */

const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <img src={rightIcon} alt="arrow_left" className="object-contain" />
      </div>
    )}
  </button>
);

export default Button;
