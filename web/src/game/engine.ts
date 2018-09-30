import { Scene } from "./scene";

export class Engine {
    constructor(gl: WebGLRenderingContext, scene: Scene) {
        this._gl = gl;
        this._scene = scene;
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clearDepth(1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    }

    public render() {
        const gl = this._gl;
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        this._scene.render();
    }

    private _gl: WebGLRenderingContext;
    private _scene: Scene;
}
