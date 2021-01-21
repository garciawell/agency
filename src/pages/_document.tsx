import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="icon" href="/static/images/icons/system/favicon.ico" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="LESSFramework" />
          <meta
            name="description"
            content="LESS Framework - This is one framework NextJS with ReactJS"
          />
          <meta name="ROBOTS" content="INDEX, NOFOLLOW" />
          <link
            rel="apple-touch-icon"
            href="/static/images/icons/system/logo192.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200,400;800;900&display=swap"
            rel="stylesheet"
          />
          {/* START SCRIPTS HEAD */}
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-110060254-9"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'UA-110060254-9');
            `,
            }}
          /> */}
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          {/* END SCRIPTS HEAD */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
