import p5 from 'p5';
export default class Board {
  private static instance: Board;
  private P5: p5;
  private tileSize: number;
  private tiles: Array<any>;

  private constructor(_P5: p5) {
    this.P5 = _P5;
    this.tileSize = 24;
    this.tiles = new Array(28).fill(new Array(36));
  }

  public static getInstance(P5: p5): Board {
    if (!Board.instance) {
      Board.instance = new Board(P5);
    }
    return Board.instance;
  }

  public display() {
    this.P5.background(0);
  }
}
