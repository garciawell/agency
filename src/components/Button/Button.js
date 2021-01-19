import React, { ReactChildren } from 'react';
import { ButtonStyle } from './Styled';

const Button = (props) => {
  const {
    children,
    icon,
    block,
    style,
    variant,
    type,
    disabled,
    onClick,
  } = props;

  const cssStyle = {
    width: block ? '100%' : 'auto',
    ...style,
  };

  const concatChild = (
    <>
      {icon}
      {children}
    </>
  );

  return (
    <ButtonStyle
      className={variant}
      style={cssStyle}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon ? concatChild : children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  variant: 'default',
  type: 'button',
  style: {},
  block: false,
  disabled: false,
  onClick: () => null,
};

export default Button;
export { Button };
