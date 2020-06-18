import { observable } from 'mobx';

/*第二种*/
const goodLine = observable.object({
  price: 10,
  amount: 30,
  get totalPrice() {
    return this.price * this.amount;
  },
  set totalPrice(totalPrice) {
    this.price = totalPrice / this.amount;
  }
});
export default goodLine;
