import { observable } from 'mobx';

const timerData = observable({
  secondsPassed: 0
});

setInterval(() => {
  timerData.secondsPassed++;
}, 1000);
export default timerData;