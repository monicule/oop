import { Animal } from "./Animal.js";

export class Pet extends Animal {
    constructor(name, breed) {
        super(name)
        this.name = name;
        this.breed = breed;
        this.legsCount = 4;
        this.animalType = 'pet';
        this.sound = '';
        this.emoji = '';
        this.emojiCount = 10;
    }
}