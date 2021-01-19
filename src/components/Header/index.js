import React, { useState, useEffect, useCallback } from 'react';
import { Brand, Container } from '@components';
import { HeaderStyled, HeaderItens } from './Styled';

const Header = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(true);
  let lastScroll = 0;

  const handleScroll = useCallback(() => {
    const currentPositionY = window.pageYOffset;
    const visible = lastScroll > currentPositionY;
    setVisible(visible);
    lastScroll = currentPositionY;
  }, []);

  useEffect(() => {
    if (props.autoHidden) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div ref={ref}>
      <HeaderStyled className={visible ? '' : 'auto-hidden'} ref={ref}>
        <Container>
          <HeaderItens>
            <Brand size={16} />
          </HeaderItens>
        </Container>
      </HeaderStyled>
    </div>
  );
});

export default Header;
export { Header };
