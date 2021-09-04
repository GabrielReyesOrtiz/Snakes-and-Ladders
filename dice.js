export default class Dice {
  valueDice() {
    let valueDice = Math.floor(Math.random() * 6 + 1);
    return valueDice;
  }
}
