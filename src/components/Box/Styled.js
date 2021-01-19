import Styled from 'styled-components';
import { tokens } from '@theme';

const BoxStyled = Styled.div`
  border-radius: ${tokens.radius.default};
  box-shadow: ${tokens.shadow.default};
  background: ${tokens.color.white};
  transition: all 0.5s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 15px;
  height: 100%;
  width: 100%;
`;

export { BoxStyled };
