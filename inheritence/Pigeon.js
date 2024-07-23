import { Bird } from "./Bird.js";

export class Pigeon extends Bird {
    constructor(name) {
        super(name);
        this.animalType = 'bird';
        this.sound = 'burku burku';
        this.emoji = '🕊';
        this.emojiCount = 3;
    }
}