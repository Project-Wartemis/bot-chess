import { Bot } from 'wartemis';

const { Chess } = require('chess.js');

interface State {
  fen: string;
}

interface Action {
  from: string;
  to: string;
  promote?: string;
}

class BotChess extends Bot {

  constructor() {
    super('Chess', 'Demobot');
  }

  handleError(error: string): void {
    console.error(error);
  }

  handleState(state: State): Action {
    const board = new Chess(state.fen);
    const moves: Array<any> = board.moves({
      verbose: true
    });
    const index = Math.floor(moves.length * Math.random());
    const move = moves[index];
    return move;
  }
}

const bot = new BotChess();
bot.start();
