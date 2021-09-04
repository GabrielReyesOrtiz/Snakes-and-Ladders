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
      //Player 1 --------------------------------------------------------
      let valueDice = this._player1.throwDice();
      this._player1.setPos(this._player1.getPos() + valueDice);
      let ladder = this.ladder(this._player1.getPos());
      let snake = this.snake(this._player1.getPos());
      if (ladder == 0 && snake == 0) {
        console.log(
          `Round ${round} PLayer1 position ${this._player1.getPos()} `
        );
      } else if (snake == 0) {
        this._player1.setPos(this._player1.getPos() + ladder);
        console.log(
          `Round ${round} PLayer1 position ${this._player1.getPos()} Escalera `
        );
      } else {
        this._player1.setPos(this._player1.getPos() + snake);
        console.log(
          `Round ${round} PLayer1 position ${this._player1.getPos()} Serpiente `
        );
      }
      if (this._player1.getPos() >= 100) {
        break;
      }
      //PLayer 2 ----------------------------------------------------------------------------------------
      let valueDice2 = this._player2.throwDice();
      this._player2.setPos(this._player2.getPos() + valueDice2);
      let ladder2 = this.ladder(this._player2.getPos());
      let snake2 = this.snake(this._player2.getPos());
      if (ladder2 == 0 && snake2 == 0) {
        console.log(
          `Round ${round} PLayer2 position ${this._player2.getPos()} `
        );
      } else if (snake2 == 0) {
        this._player2.setPos(this._player2.getPos() + ladder2);
        console.log(
          `Round ${round} PLayer2 position ${this._player2.getPos()} Escalera `
        );
      } else {
        this._player1.setPos(this._player2.getPos() + snake);
        console.log(
          `Round ${round} PLayer2 position ${this._player2.getPos()} Serpiente `
        );
      }
    } while (this._player1.getPos() < 100 && this._player2.getPos() < 100);
    if (this._player1.getPos() > this._player2.getPos()) {
      console.log("EL GANADOR ES PLAYER 1");
    } else {
      console.log("EL GANADOR ES PLAYER 2");
    }
  }

  ladder(pos) {
    if (pos == 17 || pos == 61) {
      return 20;
    }

    if (pos == 32 || pos == 78) {
      return 12;
    }

    if (pos == 49 || pos == 80) {
      return 14;
    }

    if (pos == 55 || pos == 90) {
      return 9;
    }

    if (pos == 9 || pos == 68) {
      return 30;
    }
    return 0;
  }

  snake(pos) {
    if (pos == 15 || pos == 63) {
      return -11;
    }

    if (pos == 30 || pos == 76) {
      return -12;
    }

    if (pos == 47 || pos == 82) {
      return -17;
    }

    if (pos == 53 || pos == 92) {
      return -45;
    }

    if (pos == 28 || pos == 69) {
      return -15;
    }
    return 0;
  }
}
