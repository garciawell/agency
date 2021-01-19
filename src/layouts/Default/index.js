import React, {
  ReactNode,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
  RefObject,
} from 'react';
import { Header, Footer, Hero, Status } from '@components';
import { LayoutStyle } from './Styled';

const LayoutDefault = (props) => {
  const { header, hero, children, footer, headerAutoHidden } = props;
  const [paddingBottom, setPaddingBottom] = useState(0);
  const headerDom = useRef(null);
  const footerDom = useRef(null);
  const [paddingTop, setPaddingTop] = useState(0);

  const renderHeader = <Header autoHidden={headerAutoHidden} ref={headerDom} />;
  const renderHero = <Hero />;
  const renderFooter = <Footer ref={footerDom} />;

  const calcMainMargins = () => {
    setPaddingTop(headerDom?.current?.clientHeight || 0);
    setPaddingBottom(footerDom?.current?.clientHeight || 0);
  };

  useEffect(() => {
    window.addEventListener('resize', calcMainMargins);
    return () => window.removeEventListener('resize', calcMainMargins);
  }, []);

  return (
    <>
      <LayoutStyle theme={{ paddingTop, paddingBottom }}>
        {header ? renderHeader : false}
        {hero ? renderHero : false}
        <main>{children}</main>
        {footer ? renderFooter : false}
      </LayoutStyle>
    </>
  );
};

LayoutDefault.defaultProps = {
  headerAutoHidden: true,
  header: true,
  hero: true,
  footer: true,
};

export default LayoutDefault;
export { LayoutDefault };
