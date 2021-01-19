import styled from 'styled-components';
import { tokens } from '@theme';

const TypographyStyle = styled.div`
  text-align: ${({ theme }) => theme.align};
  margin: 30px auto;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    text-align: ${({ theme }) => theme.align};
    font-weight: ${tokens.textWeight.bold};
    color: ${({ theme }) => theme.color || undefined};
  }

  & p,
  & b,
  & span,
  & small,
  & label {
    line-height: normal;
    color: ${({ theme }) => theme.color || tokens.color.medium};
    font-weight: ${tokens.textWeight.default};
    text-align: ${({ theme }) => theme.align};
    font-size: ${({ theme }) => `${theme.size}px` || tokens.fontSize.default};
  }

  & small {
    font-size: ${({ theme }) => `${theme.size}px` || tokens.fontSize.small};
    color: ${({ theme }) => theme.color || tokens.color.medium};
  }

  & b {
    font-weight: ${({ theme }) => `${theme.size}px` || tokens.textWeight.bold};
    color: ${({ theme }) => theme.color || tokens.color.medium};
  }
`;

export { TypographyStyle };
