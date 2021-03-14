export default class Counter {
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
