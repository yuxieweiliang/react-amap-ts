import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot: HTMLElement | null = document.getElementById('modal-root');
// createPortal 将dom插到别 的位置。
class DemoPortalsChild extends React.Component<any, any> {

  public el = document.createElement('div');

  componentDidMount() {
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }

  render() {
    return ReactDOM.createPortal(
        this.props.children,
        this.el
    );
  }
}

export default DemoPortalsChild;