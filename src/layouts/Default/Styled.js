import Styled from 'styled-components';
import { tokens } from '@theme';

const LayoutStyle = Styled.div`
  min-height: 100vh;
  position: relative;

  > main {
    position: relative;
    padding-top: ${({ theme }) =>
      `${Number(theme.paddingTop) / Number(tokens.fontSize.base) + 3}rem` ||
      '3rem'};
    padding-bottom: ${({ theme }) =>
      `${Number(theme.paddingBottom) / Number(tokens.fontSize.base) + 3}rem` ||
      '3rem'};
  }
`;

export default LayoutStyle;
export { LayoutStyle };
