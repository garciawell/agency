import Styled from 'styled-components';
import { tokens } from '@theme';

const gradients = () => {
  return `#${Math.random().toString(16).substr(-6)}`;
};

const HeroContainer = Styled.div`
  margin-bottom: 1.5rem; 
`;

const HeroBackground = Styled.div`
  background-color: ${({ theme }) => theme.backgroundColor || 'transparent'};
  background: url(${({ theme }) => theme.backgroundImage}) center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;

  &:before {
    background-image: linear-gradient(
      120deg,
      ${({ theme }) =>
        theme.overlay ||
        'rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0.99)'},
      ${({ theme }) =>
        theme.overlay || 'rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0.99)'}
    );
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.80;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    backdrop-filter: blur(200px);
  }
`;

export default HeroBackground;
export { HeroContainer, HeroBackground };
