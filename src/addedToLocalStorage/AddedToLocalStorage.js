class AddedToLocalStorage {
  constructor() {
    this.addTransports = ({ ...args }) => {
      const transportItems =
        JSON.parse(localStorage.getItem('Transports')) || [];

      const newItem = { ...args };
      transportItems.push(newItem);

      localStorage.setItem('Transports', JSON.stringify(transportItems));
    };

    this.addCost = ({ ...args }) => {
      const costItems = JSON.parse(localStorage.getItem('Cost')) || [];

      const newItem = { ...args };
      costItems.push(newItem);

      localStorage.setItem('Cost', JSON.stringify(costItems));
    };
  }
}

export default AddedToLocalStorage;
