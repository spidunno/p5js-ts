import p5 from "p5";
import { setup, draw } from "./main";

let p5Instance = new p5((p) => {
	p.setup = () => setup(p);
	p.draw = () => draw(p);
});

if (import.meta.hot) {
	import.meta.hot.accept('./main', (newModule) => {
		p5Instance.remove();
		p5Instance = new p5((p) => {
			// @ts-expect-error
			p.setup = () => newModule.setup(p);
			// @ts-expect-error
			p.draw = () => newModule.draw(p);
		});
	})
}