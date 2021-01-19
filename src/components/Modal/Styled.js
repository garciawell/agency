import Styled from 'styled-components';
import { tokens } from '@theme';

const ModalStyle = Styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  opacity: 0;
  z-index: 500;
  display: none;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all .8s linear;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &.show {
    opacity: 1;
    transition: all .8s linear;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Overlay = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  outline: 0;

  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    position: absolute;
    transition: all .8s linear;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Container = Styled.dialog`
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 15px;
  max-width: 600px;
  display: block;
  width: 100vw;
  z-index: 510;
  background: none;
  border: none;
`;

const Footer = Styled.div`
  display: flex;
  margin: -15px;
  margin-top: 3rem;
  border-top: ${tokens.border.light};

  & button,
  & a {
    display: block;
    width: 100%;
    background: ${tokens.color.white};
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    color: ${tokens.color.medium};
    border-left: none;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      border-color: none;
      background: ${tokens.color.grey0};
      color: ${tokens.color.grey8};

      & svg,
      & path {
        transition: all 0.5s ease;
        color: ${tokens.color.grey8};
        fill: ${tokens.color.grey8};
      }
    }

    + button, 
    + a {
      border-left: ${tokens.border.light};
    }

    &.primary {
      background: ${tokens.color.white};
      color: ${tokens.color.primary};

      &:hover,
      &:focus,
      &:active {
        background: ${tokens.color.primary};
        color: ${tokens.color.white};

        & svg,
        & path {
          color: ${tokens.color.primary};
          fill: ${tokens.color.primary};
        }
      }
    }
  }
`;

export default ModalStyle;
export { ModalStyle, Overlay, Container, Footer };
