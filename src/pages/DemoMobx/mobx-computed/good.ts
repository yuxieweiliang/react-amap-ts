import { computed, observable } from 'mobx';

/*第一种*/
class Good {
  @observable public price = 100;

  @observable public amount = 3;

  @computed
  public get totalPrice() {
    return this.amount * this.price;
  }

  public set totalPrice(totalPrice: number) {
    this.price = totalPrice / this.amount;
  }
}

const good = new Good();
export default good;
