import styled from 'styled-components';
import { tokens } from '@theme';

const TitleStyle = styled.div`
  text-align: ${({ theme }) => theme.align || 'left'};
  margin: 30px auto;

  & h3 {
    line-height: ${tokens.fontSize.big};
    font-size: ${tokens.fontSize.big};
    color: ${tokens.color.black};
    margin: 0.5rem;
  }

  & span {
    font-size: ${tokens.fontSize.medium};
    line-height: ${tokens.fontSize.medium};
    color: ${tokens.color.medium};
  }
`;

export { TitleStyle };
