
import p5 from 'p5';
import { project } from './main';

let p5Instance = new p5((p: p5) => {
  Object.assign(
    p,
    Object.fromEntries(
      Object.entries(project).map((v) => [
        v[0],
        (...args: unknown[]) => v[1](p, ...args),
      ])
    )
  );
});

if (import.meta.hot) {
  import.meta.hot.accept(
    './main',
    ({ project: newModule }: typeof import('./main')) => {
      p5Instance.remove();
      p5Instance = new p5((p: p5) => {
        Object.assign(
          p,
          Object.fromEntries(
            Object.entries(newModule).map((v) => [
              v[0],
              (...args: unknown[]) => v[1](p, ...args),
            ])
          )
        );
      });
    }
  );
}
