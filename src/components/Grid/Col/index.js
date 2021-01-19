import React from 'react';
import { ColStyle } from './Styled';

const sortMediaQuery = (arr) => {
  const sort = arr.sort((a, b) => {
    if (a.width > b.width) return -1;
    if (a.width < b.width) return 1;
    return 0;
  });
  return sort;
};

const buildMediaQuery = (props) => {
  const { xs, sm, md, lg, xl } = props;
  const screens = { xs, sm, md, lg, xl };
  const arrTheme = [];
  for (let width in screens) {
    if (screens[width]) {
      arrTheme.push({
        width: parseInt(screens[width]),
        mediaQuery: width.toString(),
      });
    }
  }
  return sortMediaQuery(arrTheme);
};

const DivCol = (props) => {
  const { style, className, children } = props;
  const arrTheme = buildMediaQuery(props);
  return (
    <ColStyle style={style} className={className} theme={arrTheme}>
      {children}
    </ColStyle>
  );
};

DivCol.defaultProps = {
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  className: '',
  style: {},
};

const Col = React.memo(DivCol);

export default Col;
export { Col };
