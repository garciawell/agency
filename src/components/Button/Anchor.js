import React, { ReactChildren, forwardRef } from 'react';
import Link from 'next/link';
import { AnchorStyle } from './Styled';

const Anchor = (props) => {
  const { href, icon, children, block, style, variant } = props;

  const cssStyle = {
    width: block ? 'auto' : '',
    ...style,
  };

  const concatChild = (
    <>
      {icon}
      {children}
    </>
  );

  const Anchor = (
    <AnchorStyle className={variant} style={cssStyle}>
      {icon ? concatChild : children}
    </AnchorStyle>
  );

  return <Link href={href}>{Anchor}</Link>;
};

Anchor.defaultProps = {
  href: '/',
  variant: 'default',
  style: {},
  block: false,
};

export default Anchor;
export { Anchor };
