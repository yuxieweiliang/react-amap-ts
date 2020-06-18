import React from 'react';
import { observer } from 'mobx-react';

export interface TimerProps {
  timerData: any
}

// 写法与下相同
const Timer = observer(({timerData}: TimerProps) =>
    <div><span>倒计时第一种写法: {timerData.secondsPassed} </span></div>
);



export default Timer;