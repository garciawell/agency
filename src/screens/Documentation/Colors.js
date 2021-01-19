import React from 'react';
import { Row, Col, Title, Box } from '@components';
import { tokens } from '@theme';

const buildColor = () => {
  const { color } = tokens;

  const getNameColors = () => {
    const arr = [];

    for (var name in color) {
      arr.push({ name, hex: color[name] });
    }
    return arr;
  };

  return getNameColors();
};

const Colors = () => {
  const arrNameColors = buildColor();

  return (
    <>
      <Title title="Colors" align="left" />
      <Row>
        {arrNameColors.map((color) => {
          return (
            <Col sm={4} key={color?.name}>
              <div className="flex align-center justify-start">
                <Box
                  style={{
                    borderRadius: tokens.radius.small,
                    background: color?.hex || '',
                    padding: '0',
                    width: '50px',
                    height: '50px',
                  }}
                />
                <div style={{ margin: '10px' }}>
                  <p style={{ margin: '0' }}>
                    name:{' '}
                    <b style={{ color: color?.hex }}>{color?.name || ''}</b>
                  </p>
                  <p style={{ margin: '0' }}>
                    code:{' '}
                    <b style={{ color: color?.hex }}>{color?.hex || ''}</b>
                  </p>
                </div>
              </div>
            </Col>
          );
        })}
        <Col sm={4}></Col>
        <Col sm={4}></Col>
      </Row>
    </>
  );
};

export default Colors;
