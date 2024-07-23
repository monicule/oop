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

    intro() {
        return `Hello, I am a ${this.animalType} and my name is ${this.name}!`;
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`;
    }
}