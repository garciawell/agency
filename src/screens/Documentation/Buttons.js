import React from 'react';
import { Row, Col, Title, Button, Anchor } from '@components';
import IconEyes from '@icons/eyes.svg';

const Buttons = () => {
  return (
    <>
      <a id="buttons" />
      <Title title="Buttons" align="left" />
      <Row>
        <Col sm={12}>
          <h3>Anchors</h3>
        </Col>
        <Col sm={4}>
          <Anchor href="/">Button anchor default</Anchor>
        </Col>
        <Col sm={4}>
          <Anchor block={true} variant="primary" href="/">
            Button anchor primary block
          </Anchor>
        </Col>
        <Col sm={4}>
          <Anchor variant="secondary" href="/">
            Button anchor secondary
          </Anchor>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={12}>
          <h3>Buttons</h3>
        </Col>
        <Col sm={4}>
          <Button icon={<IconEyes />}>Button default</Button>
        </Col>
        <Col sm={4}>
          <Button block={true} variant="primary" icon={<IconEyes />}>
            Button primary block
          </Button>
        </Col>
        <Col sm={4}>
          <Button variant="secondary" icon={<IconEyes />}>
            Button secondary
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Buttons;
