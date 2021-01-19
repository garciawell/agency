import React from 'react';
import { ContainerStyle } from './Styled';

const DivContainer = (props) => {
  let { children, fluid, className, style } = props;
  className = `${className} ${fluid ? 'fluid' : ''}`;
  return (
    <ContainerStyle style={style} className={className}>
      {children}
    </ContainerStyle>
  );
};

DivContainer.defaultProps = {
  fluid: false,
  className: '',
  style: {},
};

const Container = React.memo(DivContainer);

export default Container;
export { Container };
