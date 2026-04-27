class Wave {
  constructor(freq, amp, phase) {
    this.freq = freq;
    this.amp = amp;
    this.phase = phase;
    this.speed = random(0.01, 0.03);
  }

  evaluate(x) {
    return sin(x * this.freq + this.phase) * this.amp;
  }

  update() {
    this.phase += this.speed;
  }
}