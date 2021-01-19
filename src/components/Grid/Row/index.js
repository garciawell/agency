import React from 'react';
import { RowStyle } from './Styled';

const DivRow = ({ children, noGutters, className, style }) => {
  className = `${className} ${noGutters ? 'no-gutters' : ''}`;
  return (
    <RowStyle style={style} className={className}>
      {children}
    </RowStyle>
  );
};

DivRow.defaultProps = {
  noGutters: false,
  className: '',
  style: {},
};

const Row = React.memo(DivRow);
export default Row;
export { Row };
