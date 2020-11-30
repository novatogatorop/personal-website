import React from 'react';
import "./Button.css"

const STYLE = [
  "btn--primary",
  "btn--plain"
]

// const SIZES = [
//   "btn--medium",
//   "btn--large"
// ]

const Button = ({
  children,
  type,
  onClick,
  buttonStyle
}) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

  // const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
