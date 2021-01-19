import styled from 'styled-components';
import { tokens } from '@theme';

const RowStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  &.no-gutters {
    margin-right: 0;
    margin-left: 0;

    /* > [class*='-'] {
      padding-right: 0;
      padding-left: 0;
      background: green;
    } */
  }

  &:before,
  &:after {
    box-sizing: border-box;
  }
`;

export { RowStyle };
