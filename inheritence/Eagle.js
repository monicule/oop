import { Bird } from "./Bird.js";

export class Eagle extends Bird {
    constructor(name) {
        super(name);
        this.animalType = 'bird';
        this.sound = 'kwyyyy';
        this.emoji = '🦅';
        this.emojiCount = 3;
    }
}