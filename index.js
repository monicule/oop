import { Dog } from "./js/Dog.js";

const rexas = new Dog('Rexas', 'black', 3);
console.log(rexas);

console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(3, 2));
console.log(rexas.addNumbers(3, -2));
console.log(rexas.addNumbers(-3, -2));
console.log(rexas.addNumbers(-3, 3));
console.log(rexas.manyBones(20));

console.clear();

const brisius = new Dog('Brisius', 'white', 2);
console.log(brisius);

console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());

console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(brisius.birthday());

console.clear();
console.log('--------------------');

import { Auto } from "./js/Auto.js";

const audi = new Auto('Audi', '80', 'Raudona', 68, 7);
console.log(audi);
console.log(audi.startTheEngine());
console.log(audi.turnOffTheEngine());
console.log(audi.beginToDrive());
console.log(audi.drive());
console.log(audi.stopDriving());
console.log(audi.fuelLeft());
console.log(audi.refuel());
