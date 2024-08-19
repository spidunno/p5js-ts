import P5JS from 'p5';
import './style.css';

export function setup(p5: P5JS) {
	p5.createCanvas(500, 500);
}

export function draw(p5: P5JS) {
	p5.fill('red');
	p5.noStroke();
	p5.ellipse(0, 0, 100, 100);
}