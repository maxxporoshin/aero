export function createProgram(gl: WebGLRenderingContext, vertexShaderSrc: string, fragmentShaderSrc: string) {
    const vShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vShader) {
        throw new Error('cannot create vertex shader');
    }
    gl.shaderSource(vShader, vertexShaderSrc);
    gl.compileShader(vShader);
    if (!gl.getShaderParameter(vShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vShader));
    }

    const fShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fShader) {
        throw new Error('cannot create fragment shader');
    }
    gl.shaderSource(fShader, fragmentShaderSrc);
    gl.compileShader(fShader);
    if (!gl.getShaderParameter(vShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vShader));
    }

    const program = gl.createProgram();
    if (!program) {
        throw new Error('cannot create program');
    }
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
    }

    return program;
}
