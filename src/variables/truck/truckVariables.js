import AddedToLocalStorage from '../../addedToLocalStorage/AddedToLocalStorage';
import AddedTransport from '../../addToList/AddedTransport';

const truckId = document.querySelector('#truckId');
const truckModel = document.querySelector('#truckModel');
const truckLicensePlate = document.querySelector('#truckLicensePlate');
const truckProducedYear = document.querySelector('#truckProducedYear');
const truckCapacity = document.querySelector('#truckCapacity');
const truckAverageSpeed = document.querySelector('#truckAverageSpeed');
const truckTypeOfGas = document.querySelector('#truckTypeOfGas');

const truckBtn = document.querySelector('.truck__btn');

const truckValues = e => {
  e.preventDefault();

  const saveToLS = new AddedToLocalStorage();
  saveToLS.addTransports({
    type: 'truck',
    [truckAverageSpeed.name]: truckAverageSpeed.value,
    [truckCapacity.name]: truckCapacity.value,
    [truckId.name]: truckId.value,
    [truckLicensePlate.name]: truckLicensePlate.value,
    [truckModel.name]: truckModel.value,
    [truckProducedYear.name]: truckProducedYear.value,
    [truckTypeOfGas.name]: truckTypeOfGas.value,
  });

  truckAverageSpeed.value = '';
  truckCapacity.value = '';
  truckId.value = '';
  truckLicensePlate.value = '';
  truckModel.value = '';
  truckProducedYear.value = '';
  truckTypeOfGas.value = '';

  const add = new AddedTransport();
  add.createTransportElements();
};

export { truckValues, truckBtn };
