import { Pet } from "./Pet.js";

export class Hamster extends Pet {
    constructor(name) {
        super(name);
        this.animalType = 'hamster';
        this.sound = 'gham gham';
        this.emoji = '🐹';
        this.emojiCount = 2;
    }
}