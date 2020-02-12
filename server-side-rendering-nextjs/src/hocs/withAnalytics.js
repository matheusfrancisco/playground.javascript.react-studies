import React, { Component } from 'react';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import ReactGA from 'react-ga';

export defatul () => Composed =>
  class extends Component {
    static async getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx)
    }
    componentDidMount() {
      ReactGA.initialize('ID_ANALYTICS')
      ReactGA.pageview(window.location.pathname);
    }
    render() {
      return <Composed {... this.props} />
    }
  }
