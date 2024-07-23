import { Pet } from "./Pet.js";

export class Dog extends Pet {
    constructor(name, breed) {
        super(name, breed);
        this.animalType = 'dog';
        this.sound = 'au';
        this.emoji = '🐕';
        this.emojiCount = 4;
    }
}