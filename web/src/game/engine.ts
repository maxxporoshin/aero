import { Scene } from "./scene";

export class Engine {
    constructor(gl: WebGLRenderingContext) {
        this._gl = gl;
    }

    public render() {
    }

    private _gl: WebGLRenderingContext;
    private _scene: Scene;
}
