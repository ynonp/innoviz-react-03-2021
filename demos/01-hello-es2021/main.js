import Counter from './counter.js';
import LightBulb from './lightbulb.js';

const c1 = new Counter();
const e1 = document.createElement('div');
c1.mount(e1);
document.body.appendChild(e1);


const c2 = new Counter();
const e2 = document.createElement('div');
c2.mount(e2);
document.body.appendChild(e2);


const c3 = new Counter();
const e3 = document.createElement('div');
c3.mount(e3);
document.body.appendChild(e3);

const l1 = new LightBulb();
const e4 = document.createElement('div');
l1.mount(e4);
document.body.appendChild(e4);
