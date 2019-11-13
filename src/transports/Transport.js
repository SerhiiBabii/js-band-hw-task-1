class Transport {
  constructor(model, capacity, producedYear, averageSpeed) {
    this.model = model;
    this.capacity = capacity;
    this.producedYear = producedYear;
    this.averageSpeed = averageSpeed;
  }

  showCapacityInPounds() {
    console.log(this.capacity);
    return this.capacity;
  }
}

export default Transport;
