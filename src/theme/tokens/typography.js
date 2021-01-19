import color from './color';
import textSize from './fontSize';
import textWeight from './fontWeight';

const text = {
  family: `"Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  fontSize: textSize.base,
  textAlign: 'left',
  paragraph: {
    fontStyle: 'normal',
    fontWeight: textWeight.default,
    fontSize: textSize.default,
    color: color.grey6,
    lineHeight: 'normal',
    letterSpacing: '-.02em',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: textWeight.bold,
    fontSize: textSize.big,
    color: color.black,
    lineHeight: textSize.big,
  },
}

export default text;
export {text}
