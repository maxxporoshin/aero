export class Game {
    constructor() {
        this._isRunning = false;
        this._rafListener = this._onRaf.bind(this);
    }

    public start(): void {
        this._isRunning = true;
        requestAnimationFrame(this._rafListener);
    }

    public stop(): void {
        this._isRunning = false;
    }

    private _onRaf(time: number) {
        if (this._isRunning) {
            requestAnimationFrame(this._rafListener);
        }
    }

    private _isRunning: boolean;
    private _rafListener : (time: number) => void;
}
