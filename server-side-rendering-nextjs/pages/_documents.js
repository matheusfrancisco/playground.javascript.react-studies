import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Docuemnt {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App { ...props }/>));
    const styleTags = sheet.getStyleElements();

    return { ...page, styleTags };
  }
  render() {
    return (
      <html>
        <Head>
          <style>{`body { backgroun: #069 }`}</styles>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
