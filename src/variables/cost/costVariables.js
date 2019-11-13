import AddedToLocalStorage from '../../addedToLocalStorage/AddedToLocalStorage';
import AddedTransport from '../../addToList/AddedTransport';

const costTransportModel = document.querySelector('#costTransportModel');
const costCargo = document.querySelector('#costCargo');
const costDistance = document.querySelector('#costDistance');
const costBtn = document.querySelector('.cost__btn');

const costValues = e => {
  e.preventDefault();

  const saveToLS = new AddedToLocalStorage();
  saveToLS.addCost({
    [costTransportModel.name]: costTransportModel.value,
    [costCargo.name]: costCargo.value,
    [costDistance.name]: costDistance.value,
  });

  costTransportModel.value = '';
  costCargo.value = '';
  costDistance.value = '';

  const add = new AddedTransport();
  add.createCostElements();
};

export { costValues, costBtn };
