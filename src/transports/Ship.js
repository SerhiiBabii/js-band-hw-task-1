import Transport from './Transport';

class Ship extends Transport {
  constructor(
    id,
    model,
    name,
    producedYear,
    capacity,
    averageSpeed,
    countOfTeam,
  ) {
    super(model, capacity, producedYear, averageSpeed);
    this.id = id;
    this.name = name;
    this.countOfTeam = countOfTeam;

    this.showAverageSpeed = () => {
      console.log(`${this.averageSpeed}nm`);
      return `${this.averageSpeed}nm`;
    };
  }
}

export default Ship;
