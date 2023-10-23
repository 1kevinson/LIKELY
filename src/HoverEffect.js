import atropos from 'https://cdn.jsdelivr.net/npm/atropos@2.0.2/+esm';

const heartAtropos = atropos({
    el: '.my-atropos',
    activeOffset: 3,
    shadowScale: 1.5,
    alwaysActive: true,
    shadow: true,
    shadowOffset: 15,
    rotateXMax: 25,
    rotateYMax: 25,
    hightlight: true,
    onEnter() {},
    onLeave() {},
    onRotate(x, y) {}
})