import styled from 'styled-components';
import { tokens } from '@theme';

const BrandStyle = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border: none;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: nowrap;
    margin: 0;
    padding: 0;
    font-weight: ${tokens.textWeight.default};
    font-size: ${({ theme }) => `${theme?.size}px`};
    line-height: ${({ theme }) => `${theme?.size}px`};
    color: ${({ theme }) => theme?.variant || tokens.color.grey8};
    letter-spacing: 0.05rem;

    & b {
      color: ${({ theme }) => theme?.variant || tokens.color.primary};
      line-height: ${({ theme }) => `${theme?.size}px`};
      font-weight: ${tokens.textWeight.black};
      letter-spacing: 0;
      margin: 0;
      padding: 0;
    }
  }
`;

export { BrandStyle };
