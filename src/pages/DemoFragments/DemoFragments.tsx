import React from 'react';
import DemoFragmentsA from './DemoFragmentsA';

class DemoFragments extends React.Component<any, any> {
  render() {
    return (
        <React.Fragment>
          <p>第1行</p>
          <p>第2行</p>
          <p>第3行</p>
          <table>
            <tbody>
            <tr>
              <DemoFragmentsA/>
            </tr>
            <tr>
              <DemoFragmentsA/>
            </tr>
            </tbody>
          </table>
        </React.Fragment>
    );
  }
}

export default DemoFragments;