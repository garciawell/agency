import React from 'react';
import { TitleStyle } from './Styled';

// align?: 'left' | 'center' | 'right';

const Title = (props) => {
  const { title, subtitle, align } = props;

  return (
    <TitleStyle theme={{ align }}>
      <h3>{title}</h3>
      {subtitle ? <span>{subtitle}</span> : false}
    </TitleStyle>
  );
};

export default Title;
export { Title };
