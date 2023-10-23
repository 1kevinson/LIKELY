export default class Sounds {
    static playInterfaceSound() {
        const interfaceSound = document.getElementsByTagName("audio")[2];
        interfaceSound.volume = .75;
        interfaceSound.play();
    }

    static playCartoonJump() {
        const cartoonJump = document.getElementsByTagName("audio")[0];
        cartoonJump.play();
    }
}