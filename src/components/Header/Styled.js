import styled from 'styled-components';
import { tokens } from '@theme';

const HeaderItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
`;

const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  position: fixed;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);
  border-bottom: ${tokens.border.light};
  transition: top 0.6s;

  &.auto-hidden {
    top: -3rem;
  }
`;

export default HeaderStyled;
export { HeaderStyled, HeaderItens };
