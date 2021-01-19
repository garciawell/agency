import styled from 'styled-components';
import { tokens } from '@theme';

const CopyRightStyle = styled.footer`
  width: 100%;
  height: auto;
  border-top: ${tokens.border.light};

  & small {
    margin: 10px;
    color: ${tokens.color.medium};
    text-align: center;
    font-size: ${tokens.fontSize.small};
  }
`;

export { CopyRightStyle };
