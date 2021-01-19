import styled from 'styled-components';
import { tokens } from '@theme';

const ContainerStyle = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (min-width: 1600px) {
    width: 1600px;
  }

  &:before,
  &:after {
    box-sizing: border-box;
  }

  &.fluid {
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;

    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
`;

export { ContainerStyle };
