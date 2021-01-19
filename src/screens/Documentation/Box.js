import React from 'react';
import { Row, Col, Title, Typography, Box as Comp } from '@components';
import { tokens } from '@theme';

const Box = () => {
  return (
    <>
      <a id="box" />
      <Title title="Box" align="left" />
      <Row>
        <Col sm={4}>
          <Comp style={{ background: tokens.color.pink }}></Comp>
        </Col>

        <Col sm={4}>
          <Comp style={{ padding: '0' }}>
            <img src="https://picsum.photos/500/300?random=2" />
          </Comp>
        </Col>
        <Col sm={4}>
          <Comp style={{ background: tokens.color.green }}>
            <Typography align="justify" color="white">
              <h1>Paragraph default size - justify align</h1>
              <p>
                É um fato conhecido de todos que um leitor se distrairá com o
                conteúdo de texto legível de uma página quando estiver
                examinando sua diagramação. A vantagem de usar Lorem Ipsum é que
                ele tem uma distribuição normal de letras, ao contrário de
                "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma
                aparência similar a de um texto legível.
              </p>
            </Typography>
          </Comp>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={8}>
          <Comp style={{ padding: '0' }}>
            <img src="https://picsum.photos/2000/300?random=1" />
          </Comp>
        </Col>
        <Col sm={4}>
          <Comp style={{ background: tokens.color.yellow }}>
            <Typography align="justify" color="black">
              <h1>Paragraph default size - justify align</h1>
              <p>
                É um fato conhecido de todos que um leitor se distrairá com o
                conteúdo de texto legível de uma página quando estiver
                examinando sua diagramação.
              </p>
            </Typography>
          </Comp>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={2}>
          <Comp style={{ padding: '0' }}>
            <img src="https://picsum.photos/500/300?random=3" />
          </Comp>
        </Col>
        <Col sm={4}>
          <Comp style={{ background: tokens.color.indigo }}>
            <Typography align="justify" color="white">
              <h1>Paragraph default size - justify align</h1>
              <p>
                É um fato conhecido de todos que um leitor se distrairá com o
                conteúdo de texto legível de uma página quando estiver
                examinando sua diagramação. A vantagem de usar Lorem Ipsum é que
                ele tem uma distribuição normal de letras, ao contrário de
                "Conteúdo aqui, conteúdo aqui"
              </p>
            </Typography>
          </Comp>
        </Col>
        <Col sm={6}>
          <Comp style={{ padding: '0' }}>
            <img src="https://picsum.photos/2000/300?random=4" />
          </Comp>
        </Col>
      </Row>
    </>
  );
};

export default Box;
