import React from 'react';
import { observable } from 'mobx';
import { interval } from 'rxjs';
import { observer } from 'mobx-react';

@observer
class Timer1 extends React.Component {
  @observable seconds = 100;

  componentDidMount() {
    interval(1000).subscribe(() => {
      this.seconds++;
    });
  }

  render() {
    return (<div>
      <span>倒计时第二种写法：{this.seconds}（区分1 3）</span>
    </div>);
  }
}

export default Timer1;
