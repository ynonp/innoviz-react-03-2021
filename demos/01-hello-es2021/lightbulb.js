export default class LightBulb {
  constructor() {
    this.on = true;
    // Event Handling - BIND
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.on = !this.on;
    // Modify DOM to reflect state
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
