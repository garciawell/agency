import React from 'react';
import { Row, Col, Title, Typography as Comp } from '@components';

const Typography = () => {
  return (
    <>
      <Title title="Typography" align="left" />
      <Row>
        <Col sm={4}>
          <Comp align="left">
            <h1>Title Head I</h1>
            <h2>Title Head II</h2>
          </Comp>
        </Col>
        <Col sm={4}>
          <Comp align="left">
            <h3>Title Head III</h3>
            <h4>Title Head IV</h4>
          </Comp>
        </Col>
        <Col sm={4}>
          <Comp align="left">
            <h5>Title Head V</h5>
            <h6>Title Head VI</h6>
          </Comp>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Comp align="justify">
            <h1>Paragraph default size - justify align</h1>
            <p>
              É um fato conhecido de todos que um leitor se distrairá com o
              conteúdo de texto legível de uma página quando estiver examinando
              sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
              distribuição normal de letras, ao contrário de "Conteúdo aqui,
              conteúdo aqui", fazendo com que ele tenha uma aparência similar a
              de um texto legível.
            </p>
          </Comp>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Comp size={12}>
            <h2>Paragraph size 12 - left align</h2>
            <p>
              É um fato conhecido de todos que um leitor se distrairá com o
              conteúdo de texto legível de uma página quando estiver examinando
              sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
              distribuição normal de letras, ao contrário de "Conteúdo aqui,
              conteúdo aqui", fazendo com que ele tenha uma aparência similar a
              de um texto legível.
            </p>
          </Comp>
        </Col>
        <Col sm={4}>
          <Comp align="center" size={14}>
            <h4>Paragraph size 14 - center align</h4>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos.
            </p>
          </Comp>
        </Col>
        <Col sm={4}>
          <Comp align="right" size={10}>
            <h6>Paragraph size 10 - right align</h6>
            <p>
              Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um
              texto randômico. Com mais de 2000 anos, suas raízes podem ser
              encontradas em uma obra de literatura latina clássica datada de 45
              AC. Richard McClintock, um professor de latim do Hampden-Sydney
              College na Virginia, pesquisou uma das mais obscuras palavras em
              latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e,
              procurando por entre citações da palavra na literatura clássica,
              descobriu a sua indubitável origem. Lorem Ipsum vem das seções
              1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos
              do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um
              tratado de teoria da ética muito popular na época da Renascença. A
              primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem
              de uma linha na seção 1.10.32.
            </p>
          </Comp>
        </Col>
      </Row>
    </>
  );
};

export default Typography;
