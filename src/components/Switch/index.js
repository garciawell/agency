import React from 'react';
import { SwitchStyle } from './Styled';

const Switch = (props) => {
  const { id, name, checked, onClick, ref } = props;
  debugger;
  return (
    <SwitchStyle htmlFor={name} onClick={onClick}>
      <input
        id={id || name}
        name={name}
        type="checkbox"
        ref={ref || null}
        checked={checked}
        onChange={onClick}
      />
      <span />
    </SwitchStyle>
  );
};

Switch.defaultProps = {
  id: '',
  name: '',
  checked: false,
  onClick: (e) => e,
};

export default Switch;
export { Switch };
