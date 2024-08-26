import P5JS from 'p5';

export interface p5Module {
  setup?(p5: P5JS): void;
  draw?(p5: P5JS): void;
  preload?(p5: P5JS): void;

  keyPressed?(p5: P5JS, event?: KeyboardEvent): void;
  keyReleased?(p5: P5JS, event?: KeyboardEvent): void;
  keyTyped?(p5: P5JS, event?: KeyboardEvent): void;

  doubleClicked?(p5: P5JS, event?: MouseEvent): void;
  mouseClicked?(p5: P5JS, event?: MouseEvent): void;
  mouseDragged?(p5: P5JS, event?: MouseEvent): void;
  mouseMoved?(p5: P5JS, event?: MouseEvent): void;
  mousePressed?(p5: P5JS, event?: MouseEvent): void;
  mouseReleased?(p5: P5JS, event?: MouseEvent): void;
  mouseWheel?(p5: P5JS, event?: WheelEvent): void;

  touchEnded?(p5: P5JS, event?: TouchEvent): void;
  touchMoved?(p5: P5JS, event?: TouchEvent): void;
  touchStarted?(p5: P5JS, event?: TouchEvent): void;

  windowResized?(p5: P5JS, event?: UIEvent): void;

  unmount?(p5: P5JS): void;
}
