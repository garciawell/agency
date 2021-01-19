import color from './color';
import textSize from './fontSize';
import radius from './radius';
import border from './border';
import textWeight from './fontWeight';

const button = {
  primary: {
    background: color.primary,
    fontWeight: textWeight.default,
    border: border.default,
    borderColor: color.primary,
    radius: radius.small,
    color: color.white,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: textSize.medium,
    textOverflow: 'ellipsis',
    shadow: '0px 0px 30px rgba(42, 0, 79, 0.1)',
  },
  secondary: {
    background: color.grey7,
    fontWeight: textWeight.default,
    border: border.default,
    borderColor: color.grey7,
    radius: radius.small,
    fontSize: textSize.medium,
    color: color.white,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    shadow: '0px 0px 30px rgba(42, 0, 79, 0.1)',
  },
  outLine: {
    background: 'transparent',
    fontWeight: textWeight.default,
    radius: radius.small,
    fontSize: textSize.medium,
    color: color.grey3,
    border: border.default,
    borderColor: color.grey3,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    shadow: '0px 0px 30px rgba(42, 0, 79, 0.1)',
  },
  link: {
    borderBottom: border.primary,
    padding: '0 5px 3px',
    color: color.black,
    fontWeight: textWeight.bold,
    textDecoration: 'none',
    cursor: 'pointer',
    active: {
      transform: 'none',
      boxShadow: 'none',
      color: color.primary,
    },
  },
}

export default button;
export {button}
