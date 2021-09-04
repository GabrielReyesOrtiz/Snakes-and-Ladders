import Dice from "./dice.js";
export default class Player {
  constructor() {
    this._pos = 0;
  }

  getPos() {
    return this._pos;
  }

  setPos(pos) {
    this._pos = pos;
  }

  throwDice() {
    let dice1 = new Dice();
    return dice1.valueDice();
  }
}
