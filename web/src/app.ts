import { Game } from './game';

export class App {
    constructor(canvas: HTMLCanvasElement) {
        const gl = canvas.getContext('webgl');
        if (!gl) {
            throw new Error('no webgl');
        }
        const game = new Game(gl);
        this._game = game;
        game.start();
    }

    private _game: Game;
}
