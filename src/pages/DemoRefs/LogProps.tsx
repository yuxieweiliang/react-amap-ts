import React, { ComponentType, FC } from 'react';
import PropTypes from "prop-types";

export function logProps<P extends FC>(WrappedComponent: ComponentType<P>) {
  class LogProps extends React.Component<P, any>  {
    componentDidUpdate(prevProps: any) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    static defaultProps = {
      options: PropTypes.string
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}
