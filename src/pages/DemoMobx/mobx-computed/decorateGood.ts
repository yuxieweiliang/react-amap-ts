import { computed, decorate, observable } from 'mobx';

/*第三种*/
class DecorateGood {

  public price = 60;
  public amount = 4;

  public get totalPrice() {
    return this.price * this.amount;
  }

  public set totalPrice(totalPrice: number) {
    this.price = totalPrice / this.amount;
  }
}

decorate(DecorateGood, {
  price: observable,
  amount: observable,
  totalPrice: computed
});

const decorateGood = new DecorateGood();
export default decorateGood;
