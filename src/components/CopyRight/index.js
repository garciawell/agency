import React from 'react';
import { CopyRightStyle } from './Styled';

const CopyRight = React.memo(() => {
  const getYear = new Date().getFullYear();

  return (
    <CopyRightStyle className="flex justify-center align-center">
      <small>
        Copyright © {getYear} LESS Framework. Todos os direitos reservados.
      </small>
    </CopyRightStyle>
  );
});

export default CopyRight;
export { CopyRight };
