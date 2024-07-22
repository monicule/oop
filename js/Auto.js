export class Auto {
    constructor(pavadinimas, modelis, spalva, kuroBakoTalpa, vidutinesKuroSanaudos) {
        this.brandName = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTankCapacity = kuroBakoTalpa;
        this.averageFuelConsumption = vidutinesKuroSanaudos;
        this.fuelInTank = this.fuelTankCapacity;
        this.engineOn = false;
        this.speed = 0;        
    }
    
    startTheEngine() {
        if (this.engineOn === true) {
            return 'Įjungto variklio dar kartą įjungti negalima, sugadinsite starterį!';
        } else {
            return 'Variklis įjungtas.';
        }
    }

    turnOffTheEngine() {
        if (this.engineOn === false) {
            return 'Variklis jau yra išjungtas. Pakartotinai išjungti nebegalima.';
        } else if (this.speed !==0) {
            return 'Variklį išjungti galima tik automobiliui sustojus!';
        } else {
            return 'Variklis išjungtas.';
        }
    }

    beginToDrive() {
        if (this.speed !==0) {
            return 'Pajudėjome iš vietos';
        }
        if (this.fuelInTank < 2 * this.averageFuelConsumption) {
            return 'Nepakanka kuro';
        }

        this.speed = 10;
        this.fuelInTank = `${this.fuelInTank} - ${this.averageFuelConsumption * 2}`;
        return `Pajudėjome iš vietos. Greitis: ${this.speed}km/h. Kuro sanaudos: ${this.averageFuelConsumption * 2}l/100km.`;
    }

    drive() {
        if (this.fuelInTank < this.averageFuelConsumption) {
            return 'Reikia įpilti kuro.';
        } else {        
            return `Važiuojam! Kuro sanaudos: ${this.averageFuelConsumption}l/100km.`;
        }
    }

    stopDriving() {
        this.speed = 0;
        return `Greitis: ${this.speed}km/h. Sustojome.`;
        }
    

    fuelLeft() {
        return `Kuro likutis bake: ${this.fuelInTank - this.averageFuelConsumption}l.`;
    }

    refuel() {
        if (this.engineOn === true) {
            return 'Prieš pilant kurą išjunkite variklį.'
        }
        if (this.fuelInTank === this.fuelTankCapacity) {
            return 'Kuro bakas yra pilnas.'
        }
        if ()
        } else {
        return `Reikia įpilti: ${this.fuelTankCapacity-(this.fuelInTank-this.averageFuelConsumption)}l.`;
        }
    }