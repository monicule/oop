export class Auto {
    constructor(pavadinimas, modelis, spalva, kuroBakoTalpa, vidutinesKuroSanaudos) {
        this.brandName = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTankCapacity = kuroBakoTalpa;
        this.averageFuelConsumption = vidutinesKuroSanaudos;
        this.engineOn = false;
        this.speed = 0;        
    }
    
    startEngine() {
        if (this.engineOn = true) {
            return 'Įjungto variklio dar kartą įjungti negalima, sugadinsite starterį!';
        }
    }

}