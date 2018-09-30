import { Engine } from "./engine";
import { Scene } from "./scene";
import { Pad } from "./objects/pad";

export class Game {
    constructor(gl: WebGLRenderingContext) {
        this._isRunning = false;
        this._rafListener = this._onRaf.bind(this);
        this._gl = gl;
        const scene = new Scene(gl);
        this._scene = scene;
        this._engine = new Engine(gl, scene);

        scene.add(new Pad(gl));
    }

    public start(): void {
        this._isRunning = true;
        requestAnimationFrame(this._rafListener);
    }

    public stop(): void {
        this._isRunning = false;
    }

    private _render() {
        this._engine.render();
    }

    private _onRaf(time: number) {
        this._render();
        if (this._isRunning) {
            requestAnimationFrame(this._rafListener);
        }
    }

    private _gl: WebGLRenderingContext;
    private _scene: Scene;
    private _engine: Engine;
    private _isRunning: boolean;
    private _rafListener : (time: number) => void;
}
