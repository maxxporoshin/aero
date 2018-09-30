import { App } from './app';

(() => {
    const canvas = <HTMLCanvasElement>document.getElementById('app');
    new App(canvas);
})()
