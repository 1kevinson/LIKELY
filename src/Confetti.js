import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/+esm';

export default class Confetti {

    static run() {
        confetti({
            particleCount: 17.5,
            spread: 80,
            scalar: .85,
            startVelocity: 25,
            angle: 90,
            origin: { y: 0.465 }
        });
    }
}