import styled, { css } from 'styled-components';
import { tokens } from '@theme';

const btnHover = () => css`
  &:hover,
  &:focus,
  &:active {
    box-shadow: none;
  }
`;

const btnStyle = () => css`
  appearance: none;
  min-width: auto;
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.5s ease;
  outline: none;
  text-transform: uppercase;
  font-size: ${tokens.fontSize.medium};
  background: ${tokens.color.black};
  border: ${tokens.border.default};
  border-color: ${tokens.color.black};
  color: ${tokens.color.white};
  padding: 0.5rem 2rem;
  border-radius: ${tokens.radius.micro};
  cursor: pointer;
  outline: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  box-shadow: ${tokens.shadow.default};

  & svg,
  & path {
    color: ${tokens.color.white};
    fill: ${tokens.color.white};
    margin: 0 3px;
  }

  &:hover,
  &:focus,
  &:active {
    color: ${tokens.color.white};
    box-shadow: none;
  }

  &.primary {
    background: ${tokens.color.primary};
    color: ${tokens.color.white};
    border-color: ${tokens.color.primary};
    transition: all 0.5s ease;

    & svg,
    & path {
      color: ${tokens.color.white};
      fill: ${tokens.color.white};
      margin: 0 3px;
    }

    &:hover,
    &:focus,
    &:active {
      color: ${tokens.color.white};
      box-shadow: none;
    }
  }

  &.secondary {
    background: none;
    color: ${tokens.color.grey4};
    border-color: ${tokens.color.grey4};
    transition: all 0.5s ease;

    & svg,
    & path {
      color: ${tokens.color.grey4};
      fill: ${tokens.color.grey4};
      margin: 0 3px;
    }

    &:hover,
    &:focus,
    &:active {
      color: ${tokens.color.grey4};
      box-shadow: none;
    }
  }
`;

const ButtonStyle = styled.button`
  ${btnStyle}
`;

const AnchorStyle = styled.a`
  ${btnStyle}
`;

export default ButtonStyle;
export { ButtonStyle, AnchorStyle };
