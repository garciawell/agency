import styled from 'styled-components';
import { tokens } from '@theme';

const FooterStyle = styled.footer`
  border-top: ${tokens.border.light};
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  padding-bottom: 0;

  > div {
    padding: 15px;
  }
`;

export default FooterStyle;
export { FooterStyle };
