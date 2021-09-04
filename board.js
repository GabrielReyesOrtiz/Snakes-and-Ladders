import Player from "./player.js";
export default class Board {
  constructor() {
    this._player1 = new Player();
    this._player2 = new Player();
  }
  play() {
    let round = 0;
    do {
      round++;
      let valueDice = this._player1.throwDice();
      this._player1.setPos(this._player1.getPos() + valueDice);
      console.log(`Round ${round} PLayer1 position ${this._player1.getPos()} `);
      if (this._player1.getPos() >= 100) {
        break;
      }

      let valueDice2 = this._player2.throwDice();
      this._player2.setPos(this._player2.getPos() + valueDice2);
      console.log(`Round ${round} PLayer2 position ${this._player2.getPos()} `);
    } while (this._player1.getPos() < 100 && this._player2.getPos() < 100);
  }
  win() {
    if (this._player1.getPos() > this._player2.getPos()) {
      console.log("EL GANADOR ES PLAYER 1");
    } else {
      console.log("EL GANADOR ES PLAYER 2");
    }
    }
    
    snake() {
        if(this._player1)
    }
}
