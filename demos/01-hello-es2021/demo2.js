class Counter {
  constructor() {
    this.clicks = 5;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    // ev.target === this;
    this.clicks += 1;
    this.valueElement.textContent = this.clicks;
  }

  mount(el) {
    el.innerHTML = `
      <button>Click Me</button>
      <p>You clicked
        <span class="value">${this.clicks}</span>
      times</p>
    `;
    el.classList.add('counter');
    el.querySelector('button').addEventListener('click', this.handleClick);
    this.valueElement = el.querySelector('.value');
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











