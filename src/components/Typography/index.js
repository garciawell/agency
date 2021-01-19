import React from 'react';
import { TypographyStyle } from './Styled';

// align?: 'left' | 'center' | 'justify' | 'right';

const Typography = (props) => {
  const { children, align, size, color } = props;

  return (
    <TypographyStyle theme={{ align, size, color }}>{children}</TypographyStyle>
  );
};

Typography.defaultProps = {
  align: 'left',
};

export default Typography;
export { Typography };
