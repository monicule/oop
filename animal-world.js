import { Cat } from "./inheritence/Cat.js";
import { Dog } from "./inheritence/Dog.js";
import { GoldenFish } from "./inheritence/GoldenFish.js";
import { Pigeon } from "./inheritence/Pigeon.js";
import { Hamster } from "./inheritence/Hamster.js"

console.clear();

const rexas = new Dog('Rex', 'aviganis');
console.log(rexas.voice());

const brisius = new Dog('Brisius', 'taksas');
console.log(brisius.voice());

const rainis = new Cat('Rainis', 'bengalu');
console.log(rainis.voice());

const tom = new Cat('Tom', 'animacinis');
console.log(tom.voice());

const nemo = new GoldenFish('Nemo');
console.log(nemo.voice());

const burkulis = new Pigeon('Burkulis');
console.log(burkulis.voice());

const timis = new Hamster('Timis');
console.log(timis.voice());