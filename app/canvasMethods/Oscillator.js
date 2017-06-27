export default class Oscillator {
  constructor(frequency, waveform, maxVolume, time) {
    const context = this.context = new AudioContext();
    const oscillator = context.createOscillator();
    const gainNode = this.gainNode = context.createGain();
    this.maxVolume = maxVolume;
    this.time = time;
    oscillator.type = waveform;
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.start(0);
    gainNode.gain.value = 0;
  }
  start() {
    const volume = this.gainNode.gain;
    const now = this.context.currentTime;
    volume.setTargetAtTime(1, now, this.time);
    volume.setTargetAtTime(0, now + this.time, this.time);
  }
}
