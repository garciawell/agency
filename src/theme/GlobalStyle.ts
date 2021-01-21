import { createGlobalStyle } from 'styled-components';
import * as tokens from './tokens';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;      
    position: relative;
    font-style: normal;
    font-family: ${tokens.text.family};
    font-weight: ${tokens.textWeight.default};
    text-align: ${tokens.text.textAlign};
    font-size: ${`${tokens.text.fontSize}px`};
    color: ${tokens.color.medium};

    & .wrapper {
      position: relative;
      width: ${tokens.container.wrapper.width};
      padding-right: ${tokens.container.wrapper.paddingRight};
      padding-left: ${tokens.container.wrapper.paddingLeft};
      margin-right: ${tokens.container.wrapper.marginRight};
      margin-left: ${tokens.container.wrapper.marginLeft};
    }

    & .not-margin {
      margin: 0;
      padding: 0;
    }

    & .flex {
      display: flex;
    }

    & .justify-start {
      justify-content: flex-start;
    }
    
    & .justify-center {
      justify-content: center;
    }

    & .justify-space {
      justify-content: space-between;
    }
    
    & .justify-end {
      justify-content: flex-end;
    }

    & .align-left {
      align-items: left;
    }

    & .align-center {
      align-items: center;
    }

    & .align-right {
      align-items: center;
    }

    a {
      color: ${tokens.color.dark};
      font-weight: ${tokens.textWeight.default};
      text-decoration: none;

      &:hover {
        color: ${tokens.color.primary}
      }
    }

    & p,
    & span,
    & label {
      line-height: ${tokens.text.paragraph.lineHeight};
      letter-spacing: .03em;
      font-size: ${tokens.fontSize.default};
      font-weight: ${tokens.textWeight.default};
      color: ${tokens.color.medium};
      font-family: ${tokens.text.family};
    }

    & b {
      font-weight: ${tokens.textWeight.bold};
    }

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
      line-height: normal;
      letter-spacing: 0em;
      font-family: ${tokens.text.family};
      font-weight: ${tokens.textWeight.bold};
    }
  }

  * {
    box-sizing: border-box;
    direction: ltr;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-scroll-behavior: smooth;
    -moz-scroll-behavior: smooth;
    -ms-scroll-behavior: smooth;
    scroll-behavior: smooth;

    ::selection { 
      background: greenyellow;
      color: ${tokens.color.dark};
    }
  }
`;

export default GlobalStyle;
export { GlobalStyle };
