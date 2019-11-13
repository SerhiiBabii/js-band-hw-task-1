import Ship from '../transports/Ship';
import Truck from '../transports/Truck';

class CreateTransport {
  create(type, ...args) {
    let transport = null;
    if (type === '1') {
      transport = new Ship(...args);
    } else if (type === '2') {
      transport = new Truck(...args);
    }
    return transport;
  }
}

export default CreateTransport;
