import { Renderable } from "./objects/renderable";

export class Scene {
    constructor(gl: WebGLRenderingContext) {
        this._gl = gl;
        this._objects = new Set();
    }

    public add(object: Renderable) {
        this._objects.add(object);
    }

    public delete(object: Renderable) {
        this._objects.delete(object);
    }

    public render() {
        const gl = this._gl;

        for (const object of this._objects) {
            object.render();
        }
    }

    private _gl: WebGLRenderingContext;
    private _objects: Set<Renderable>;
}
