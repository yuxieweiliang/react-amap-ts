import React from 'react';
import { logProps } from './LogProps';

class DemoRefsB extends React.Component {
  render() {
    return 'DemoRefsB';
  }
}

export default logProps(DemoRefsB);