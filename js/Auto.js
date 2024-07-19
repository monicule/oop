export class Auto {
    constructor(pavadinimas, modelis, spalva, kuroBakoTalpa, vidutinesKuroSanaudos) {
        this.brandName = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTankCapacity = kuroBakoTalpa;
        this.averageFuelConsumption = vidutinesKuroSanaudos;
        this.fuelInTank = kuroBakoTalpa;
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
        } else {
            return 'Variklis išjungtas.';
        }
    }

    beginToDrive() {
        this.speed = 10;
        return `Greitis: ${this.speed}km/h. Kuro sanaudos: ${this.averageFuelConsumption * 2}l/100km.`;
    }

    drive() {
        return `Važiuojam! Kuro sanaudos: ${this.averageFuelConsumption}l/100km.`;
    }

    stopDriving() {
        this.speed = 0;
        return `Greitis: ${this.speed}km/h. Sustojome.`;
    }

    fuelLeft() {
        return `Kuro likutis bake: ${this.fuelInTank-this.averageFuelConsumption}l.`;

    }

    refuel() {
        return `Reikia įpilti: ${this.fuelTankCapacity-(this.fuelInTank-this.averageFuelConsumption)}l.`;

    }



}