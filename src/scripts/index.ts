import P5 from 'p5';
import Board from './modules/board';

let board: Board;

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(672, 864);
    board = Board.getInstance(p5);
  };
  p5.draw = () => {
    board.display();
  };
};

new P5(sketch);
