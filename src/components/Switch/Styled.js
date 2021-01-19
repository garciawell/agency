import Styled from 'styled-components';
import { tokens } from '@theme';

const SwitchStyle = Styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 24px;

  > input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      + span {
        background-color: ${tokens.color.green};

        :before {
          transform: translateX(22px);
          border-color: ${tokens.color.green};
        }
      }
    }
  }

  > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${tokens.radius.default};
    background-color: ${tokens.color.light};
    transition: all 0.5s ease;

    &:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 0px;
      top: 0px;
      background:${tokens.color.white};
      border: ${tokens.border.light};
      transition: all 0.5s ease;
      border-radius: ${tokens.radius.default};
    }
  }
`;

export default SwitchStyle;
export { SwitchStyle };
