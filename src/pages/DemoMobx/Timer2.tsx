import { observer } from 'mobx-react';
import React from 'react';
import { TimerProps } from './Timer';

@observer
class Timer2 extends React.Component<TimerProps> {
  render() {
    return (
        <div>
          <span>倒计时第三种写法: {this.props.timerData.secondsPassed} </span>
        </div>
    );
  }
}

export default Timer2;