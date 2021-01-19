import React from 'react';
import { BoxStyled } from './Styled';

const Box = (props) => (
  <BoxStyled style={props.style}>{props.children}</BoxStyled>
);

Box.defaultProps = {
  style: {},
};

export default Box;
export { Box };
