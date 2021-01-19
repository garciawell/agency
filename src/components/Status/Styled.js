import Styled from 'styled-components';
import { tokens } from '@theme';

const PageStatus = Styled.div`
  color: ${tokens.color.black};
  background: ${tokens.color.white};
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      
      & img {
        width: 30px;
        height: 30px;
      }

      & span {
        display: inline-block;
        vertical-align: top;
        margin: 0;
        margin-right: 20px;
        padding: 10px 23px 10px 0;
        color: ${tokens.color.black};
        font-size: ${tokens.fontSize.big};
        border-right: ${tokens.border.light};
        font-weight: ${tokens.textWeight.light};
        line-height: ${tokens.fontSize.big};
      }

      > div {
      display: inline-block;
      text-align: left;
      /* line-height: 49px; */
      /* height: 49px; */
      vertical-align: middle;

        & h1 {
          font-size: ${tokens.fontSize.medium};
          font-weight: ${tokens.textWeight.medium};
          line-height: ${tokens.fontSize.medium};
          font-family: ${tokens.text.family};
          color: ${tokens.color.medium};
          margin: 0;
          padding: 0;
      }
    }
  }

  > p {
    margin-top: 50px;
    display:  block;
    margin-bottom: 0;
    letter-spacing: .1rem;
    font-size: red;
  }

  > button,
  > a {
    display:  block;
    margin-top: 10px;
  }
`;

export default PageStatus;
export { PageStatus };
