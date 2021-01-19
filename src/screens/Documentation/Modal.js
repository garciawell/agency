import React from 'react';
import { Row, Col, Title, Button, Modal as Comp } from '@components';

const Modal = () => {
  const [modal, setModal] = React.useState(false);
  const [modalTwo, setModalTwo] = React.useState(false);

  const toggleModalTwo = () => setModalTwo(!modalTwo);
  const toggleModal = () => setModal(!modal);

  const ModalActions = [
    {
      onClick: () => toggleModal,
      label: 'Fechar',
    },
    {
      onClick: () => toggleModal,
      label: 'Confirmar',
      primary: true,
    },
  ];

  return (
    <>
      <Comp visible={modal} toggle={toggleModal} actions={ModalActions}>
        <h1>Hello geek</h1>
        <p>
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo
          de texto legível de uma página quando estiver examinando sua
          diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
          distribuição normal de letras, ao contrário de "Conteúdo aqui,
          conteúdo aqui", fazendo com que ele tenha uma aparência similar a de
          um texto legível.
        </p>
      </Comp>
      <Comp visible={modalTwo} toggle={toggleModalTwo}>
        <h1>Hello geek Two</h1>
        <p>
          É um fato conhecido de todos que um leitor se distrairá com o conteúdo
          de texto legível de uma página quando estiver examinando sua
          diagramação.
        </p>
      </Comp>
      <Title title="Modal" align="left" />
      <Row>
        <Col sm={4}>
          <Button onClick={toggleModalTwo} variant="secondary">
            Modal
          </Button>
        </Col>
        <br />
        <Col sm={4}>
          <Button onClick={toggleModal}>Modal</Button>
          <br />
        </Col>
      </Row>
    </>
  );
};

export default Modal;
