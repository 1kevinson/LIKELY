import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/+esm';

export default class Confetti {

    static run() {
        confetti({
            particleCount: 35,
            spread: 75,
            scalar: .85,
            startVelocity: 30,
            angle: 90,
            origin: { y: 0.515 }
        });
    }
}