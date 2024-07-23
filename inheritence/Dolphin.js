import { Fish } from "./Fish.js";

export class Dolphin extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'dolphin';
        this.sound = 'oooo';
        this.emoji = '🐬';
    }
}