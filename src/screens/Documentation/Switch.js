import React from 'react';
import { Row, Col, Title, Switch as Comp } from '@components';

const Switch = () => {
  // const [switch, setSwitch] = React.useState(false);
  const [switchOne, setSwitchOne] = React.useState(false);
  const [switchTwo, setSwitchTwo] = React.useState(true);

  const handleSwitch = () => setSwitchOne(!switchOne);
  const handleSwitchTwo = () => setSwitchTwo(!switchTwo);

  return (
    <>
      <a id="switch" />
      <Title title="Switch" align="left" />
      <Row>
        <Col sm={4}>
          <Comp name="switch" checked={switchOne} onClick={handleSwitch} />
        </Col>
        <Col sm={4}>
          <Comp name="switch" checked={switchTwo} onClick={handleSwitchTwo} />
        </Col>
      </Row>
    </>
  );
};

export default Switch;
