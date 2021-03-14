class Counter {
  constructor() {
    this.clicks = 5;
  }

  changeValue(diff) {
    this.clicks += diff;
    this.valueElement.textContent = this.clicks;
  }

  mount(el) {
    el.innerHTML = `
      <button class="bplus">+</button>
      <button class="bminus">-</button>
      <p>You clicked
        <span class="value">${this.clicks}</span>
      times</p>
    `;
    el.classList.add('counter');
    el.querySelector('.bplus').addEventListener('click', 
      () => this.changeValue(1)
    );
    el.querySelector('.bminus').addEventListener('click', 
      () => this.changeValue(-1)
    );

    this.valueElement = el.querySelector('.value');
  }
}

class LightBulb {
  constructor() {
    this.on = true;
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.on = !this.on;
    if (this.on) {
      this.lightElement.style.background = 'yellow';
    } else {
      this.lightElement.style.background = 'transparent';
    };
  }

  mount(el) {
    el.innerHTML = `
      <div class="lightbulb">
        <div class="light" style="width:100px; height:100px; background:yellow; display: inline-block"></div>
        <button>Toggle</button>
      </div>
    `;
    el.querySelector('button').addEventListener('click', this.toggle);

    this.lightElement = el.querySelector('.light');
  }
}


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











