import { mat4 } from 'gl-matrix';
import { Renderable } from '../renderable';
import vertexShaderSrc from './shaders/pad.vert';
import fragmentShaderSrc from './shaders/pad.frag';
import { createProgram } from '../../gl';

const vertexData = [
    -1., -1.,
    1., -1.,
    -1., 1.,
    1., 1.
];

let buffer: WebGLBuffer | null = null;
let program: WebGLProgram | null = null;
let locations: PadAttribLocations | null = null;

export class Pad implements Renderable {
    constructor(gl: WebGLRenderingContext) {
        this._gl = gl;
        if (!program) {
            program = createProgram(gl, vertexShaderSrc, fragmentShaderSrc);
            locations = {
                position: gl.getAttribLocation(program!, 'position'),
                viewModelMatrix: gl.getUniformLocation(program!, 'viewModelMatrix'),
                projectionMatrix: gl.getUniformLocation(program!, 'projectionMatrix')
            }
        }
        if (!buffer) {
            buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
        }
        this._viewModelMatrix = mat4.create();
        mat4.translate(this._viewModelMatrix, this._viewModelMatrix, [0, 0, -6]);
        this._projectionMatrix = mat4.create();
        const fov = 45 * Math.PI / 180;
        const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
        mat4.perspective(this._projectionMatrix, fov, aspect, 0.1, 100);
    }

    public render() {
        const gl = this._gl;
        gl.useProgram(program);
        gl.uniformMatrix4fv(locations!.viewModelMatrix, false, this._viewModelMatrix);
        gl.uniformMatrix4fv(locations!.projectionMatrix, false, this._projectionMatrix);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.vertexAttribPointer(locations!.position, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(locations!.position);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    private _viewModelMatrix: mat4;
    private _projectionMatrix: mat4;
    private _gl: WebGLRenderingContext;
}

interface PadAttribLocations {
    position: number;
    viewModelMatrix: WebGLUniformLocation | null;
    projectionMatrix: WebGLUniformLocation | null;
}
