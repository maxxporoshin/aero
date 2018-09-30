uniform mat4 viewModelMatrix;
uniform mat4 projectionMatrix;
attribute vec2 position;

varying vec4 color;

void main() {
    gl_Position = projectionMatrix * viewModelMatrix * vec4(position.xy, 0., 1.);
    color = vec4(1., 0., 0., 1.);
}
