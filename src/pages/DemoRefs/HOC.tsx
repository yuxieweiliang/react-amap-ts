import React, { Component, ComponentType, ComponentClass, FC } from 'react';
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


interface WithLogProps {
  time: string
}

function withLog(options: Partial<WithLogProps>) {
  return <P extends {}>(
    WrappedComponent: ComponentType<P>
  ): ComponentClass<any> =>
    class extends Component<P> {
      componentDidMount() {
        const { time } = options
        console.log(`log ${time}`)
      }
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
}
function withLogOrig<P extends {}>(Com: ComponentType<P>) {

  return class extends Component<P> {
    componentDidMount() {
      console.log('log')
    }
    render() {
      return <Com {...this.props} />
    }
  }

}
interface IonicExampleProps {
  value: string
}
interface State {}

class IonicExample extends Component<IonicExampleProps, State> {
  render() {
    return <div>'我是被包裹的'</div>
  }
}
export default withLog({ time: '20' })(IonicExample)


/* function GetColor({ children }) {
  return <div> { children && children }</div>
}

const InjectColor = (Component: React.ComponentType<{ color: string }>): React.ComponentClass<{}> =>
  class extends React.Component<any, any> {
    public render() {
      return <GetColor>{color => <Component {...this.props} color={color} />}</GetColor>;
    }
  }; */
