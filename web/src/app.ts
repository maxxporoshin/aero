import { Game } from './game';

class App {
    constructor() {
        const game = new Game();
        this._game = game;
        game.start();
    }

    private _game: Game;
}
