import { observable } from 'mobx';

class Colors {
  @observable bgColor = 'pink';
  @observable fontColor = 'red';
}

const colors = new Colors();
export default colors;