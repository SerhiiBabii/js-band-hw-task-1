import Transport from './Transport';

class Truck extends Transport {
  constructor(
    id,
    model,
    licensePlate,
    producedYear,
    capacity,
    averageSpeed,
    typeOfGas,
  ) {
    super(model, capacity, producedYear, averageSpeed);
    this.id = id;
    this.licensePlate = licensePlate;
    this.typeOfGas = typeOfGas;

    this.showAverageSpeed = () => {
      console.log(`${this.averageSpeed}km`);
      return `${this.averageSpeed}km`;
    };
  }
}

export default Truck;
