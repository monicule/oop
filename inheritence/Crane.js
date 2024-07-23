import { Bird } from "./Bird.js";

export class Crane extends Bird {
    constructor(name) {
        super(name);
        this.animalType = 'bird';
        this.sound = 'kar kar';
        this.emoji = '🦩';
        this.emojiCount = 3;
    }
}