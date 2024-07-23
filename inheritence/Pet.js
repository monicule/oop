export class Pet {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.legsCount = 4;
        this.animalType = '';
        this.sound = 'GARSAS';
        this.emoji = '👽';
        this.emojiCount = 10;
    }

    intro() {
        return `Hello, I am a ${this.animalType} and my name is ${this.name}!`;
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`;
    }
}