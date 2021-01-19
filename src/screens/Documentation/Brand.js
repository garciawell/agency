import React from 'react';
import { Row, Col, Title, Brand as Comp, Box } from '@components';

const Brand = () => {
  return (
    <>
      <a id="brand" />
      <Title title="Brand" align="left" />
      <Row>
        <Col sm={4}>
          <Box>
            <Comp size={25} />
          </Box>
        </Col>
        <Col sm={4}>
          <Box style={{ background: 'black', alignItens: 'center' }}>
            <Comp size={25} variant="white" />
          </Box>
        </Col>
        <Col sm={4}>
          <Box>
            <Comp size={25} variant="black" />
          </Box>
        </Col>
      </Row>
    </>
  );
};

export default Brand;
