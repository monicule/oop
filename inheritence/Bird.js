import { Animal } from "./Animal.js";

export class Bird extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
        this.animalType = 'bird';
        this.legsCount = 2;
        this.sound = '';
        this.emoji = '🦆';
        this.emojiCount = 8;
    }
}