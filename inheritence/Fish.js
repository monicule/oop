import { Animal } from "./Animal.js";

export class Fish extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
        this.animalType = 'fish';
        this.finCount = 3;
        this.sound = '';
        this.emoji = '🐟';
        this.emojiCount = 1;
    }
}