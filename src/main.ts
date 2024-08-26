import './style.css';
import type { p5Module } from './types';
import P5JS from 'p5';

export const project: p5Module = {
  setup: (p5) => {
    const canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
  },
  windowResized: (p5) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  },
  draw: (p5) => {
    p5.background('black');
    p5.fill('white');
    p5.noStroke();
	p5.circle(p5.width/2, p5.height/2, 50);
  }
};
