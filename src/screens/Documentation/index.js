import React from 'react';
import { LayoutDefault } from '@layouts';
import { Title, Container } from '@components';
import { DocumentationStyle } from './Styled';
import Head from 'next/head';

import Buttons from './Buttons';
import Modal from './Modal';
import Typography from './Typography';
import Colors from './Colors';
import Switch from './Switch';
import Box from './Box';
import Brand from './Brand';

const Documentation = () => {
  return (
    <DocumentationStyle>
      <Head>
        <title>Features Documentation</title>
        <meta
          property="og:title"
          content="Features Documentation"
          key="title"
        />
      </Head>
      <LayoutDefault>
        <Title
          title="Guide Style"
          subtitle="You guide of components for all projects with ComponentStyled and Reactjs"
          align="center"
        />
        <Container>
          {/* START DOC BUTTONS  */}
          <Buttons />
          {/* END DOC BUTTONS  */}
          {/* START DOC BRAND  */}
          <Brand />
          {/* END DOC BRAND  */}
          {/* START DOC SWITCH  */}
          <Switch />
          {/* END DOC SWITCH  */}
          {/* START DOC BOX  */}
          <Box />
          {/* END DOC BOX  */}
          {/* START DOC COLORS  */}
          <Colors />
          {/* END DOC COLORS  */}
          {/* START DOC MODAL  */}
          <Modal />
          {/* END DOC MODAL  */}
          {/* START DOC TYPOGRAPHY  */}
          <Typography />
          {/* START DOC TYPOGRAPHY  */}
        </Container>
      </LayoutDefault>
    </DocumentationStyle>
  );
};

export default Documentation;
export { Documentation };
