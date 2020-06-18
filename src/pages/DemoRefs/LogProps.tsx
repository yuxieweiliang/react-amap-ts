import React from 'react';

export function logProps(WrappedComponent: any) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps: any) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}