import AddedTransport from './addToList/AddedTransport';
import { shipValues, shipBtn } from './variables/ship/shipVariables';
import { truckValues, truckBtn } from './variables/truck/truckVariables';
import { costValues, costBtn } from './variables/cost/costVariables';

truckBtn.addEventListener('click', truckValues);
shipBtn.addEventListener('click', shipValues);
costBtn.addEventListener('click', costValues);

const add = new AddedTransport();
add.createTransportElements();
add.createCostElements();
