import React from 'react';
import { DividerStyle } from './Styled';

const Hr = () => <DividerStyle />;

const Divider = React.memo(React.forwardRef(Hr));

export default Divider;
export { Divider };
