class AddedTransport {
  constructor() {
    this.transport = JSON.parse(localStorage.getItem('Transports')) || [];
    this.cost = JSON.parse(localStorage.getItem('Cost')) || [];
  }

  createTransportElements() {
    const result = document.querySelector('.list-transport');
    let out = '';
    if (this.transport.length > 0) {
      this.transport.forEach(element => {
        if (element.type === 'truck') {
          const {
            truckAverageSpeed,
            truckCapacity,
            truckId,
            truckLicensePlate,
            truckModel,
            truckProducedYear,
            truckTypeOfGas,
          } = element;
          out += `<li>`;
          out += `<ul>`;
          out += `<li><b>Truck Id:</b> ${truckId}</li>`;
          out += `<li><b>Truck Model:</b> ${truckModel}</li>`;
          out += `<li><b>Truck Produced year:</b> ${truckProducedYear}</li>`;
          out += `<li><b>Truck Capacity:</b> ${truckCapacity}</li>`;
          out += `<li><b>Truck License plate:</b> ${truckLicensePlate}</li>`;
          out += `<li><b>Truck Average speed:</b> ${truckAverageSpeed}</li>`;
          out += `<li><b>Truck Count of team:</b> ${truckTypeOfGas}</li>`;
          out += `</ul>`;
          out += `</li>`;

          result.innerHTML = `<li>${out}</li>`;
        }
        if (element.type === 'ship') {
          const {
            shipAverageSpeed,
            shipCapacity,
            shipId,
            shipName,
            shipModel,
            shipProducedYear,
            shipCountOfTeam,
          } = element;
          out += `<li>`;
          out += `<ul>`;
          out += `<li><b>Ship Id:</b> ${shipId}</li>`;
          out += `<li><b>Ship Model:</b> ${shipModel}</li>`;
          out += `<li><b>Ship Name:</b> ${shipName}</li>`;
          out += `<li><b>Ship Produced year:</b> ${shipProducedYear}</li>`;
          out += `<li><b>Ship Capacity:</b> ${shipCapacity}</li>`;
          out += `<li><b>Ship Average speed:</b> ${shipAverageSpeed}</li>`;
          out += `<li><b>Ship Count of team:</b> ${shipCountOfTeam}</li>`;
          out += `</ul>`;
          out += `</li>`;

          result.innerHTML = `<li>${out}</li>`;
        }
      });
    } else {
      result.innerHTML = '';
    }
  }

  createCostElements() {
    const result = document.querySelector('.list-cost');
    let out = '';
    if (this.cost.length > 0) {
      this.cost.forEach(element => {
        const { costTransportModel, costCargo, costDistance } = element;
        out += `<li>`;
        out += `<ul>`;
        out += `<li><b>Cost transport model:</b> ${costTransportModel}</li>`;
        out += `<li><b>Cost cargo:</b> ${costCargo}</li>`;
        out += `<li><b>Cost distance:</b> ${costDistance}</li>`;
        out += `</ul>`;
        out += `</li>`;

        result.innerHTML = `<li>${out}</li>`;
      });
    } else {
      result.innerHTML = '';
    }
  }
}

export default AddedTransport;
