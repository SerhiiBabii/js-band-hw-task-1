// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/addToList/AddedTransport.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AddedTransport =
/*#__PURE__*/
function () {
  function AddedTransport() {
    _classCallCheck(this, AddedTransport);

    this.transport = JSON.parse(localStorage.getItem('Transports')) || [];
    this.cost = JSON.parse(localStorage.getItem('Cost')) || [];
  }

  _createClass(AddedTransport, [{
    key: "createTransportElements",
    value: function createTransportElements() {
      var result = document.querySelector('.list-transport');
      var out = '';

      if (this.transport.length > 0) {
        this.transport.forEach(function (element) {
          if (element.type === 'truck') {
            var truckAverageSpeed = element.truckAverageSpeed,
                truckCapacity = element.truckCapacity,
                truckId = element.truckId,
                truckLicensePlate = element.truckLicensePlate,
                truckModel = element.truckModel,
                truckProducedYear = element.truckProducedYear,
                truckTypeOfGas = element.truckTypeOfGas;
            out += "<li>";
            out += "<ul>";
            out += "<li><b>Truck Id:</b> ".concat(truckId, "</li>");
            out += "<li><b>Truck Model:</b> ".concat(truckModel, "</li>");
            out += "<li><b>Truck Produced year:</b> ".concat(truckProducedYear, "</li>");
            out += "<li><b>Truck Capacity:</b> ".concat(truckCapacity, "</li>");
            out += "<li><b>Truck License plate:</b> ".concat(truckLicensePlate, "</li>");
            out += "<li><b>Truck Average speed:</b> ".concat(truckAverageSpeed, "</li>");
            out += "<li><b>Truck Count of team:</b> ".concat(truckTypeOfGas, "</li>");
            out += "</ul>";
            out += "</li>";
            result.innerHTML = "<li>".concat(out, "</li>");
          }

          if (element.type === 'ship') {
            var shipAverageSpeed = element.shipAverageSpeed,
                shipCapacity = element.shipCapacity,
                shipId = element.shipId,
                shipName = element.shipName,
                shipModel = element.shipModel,
                shipProducedYear = element.shipProducedYear,
                shipCountOfTeam = element.shipCountOfTeam;
            out += "<li>";
            out += "<ul>";
            out += "<li><b>Ship Id:</b> ".concat(shipId, "</li>");
            out += "<li><b>Ship Model:</b> ".concat(shipModel, "</li>");
            out += "<li><b>Ship Name:</b> ".concat(shipName, "</li>");
            out += "<li><b>Ship Produced year:</b> ".concat(shipProducedYear, "</li>");
            out += "<li><b>Ship Capacity:</b> ".concat(shipCapacity, "</li>");
            out += "<li><b>Ship Average speed:</b> ".concat(shipAverageSpeed, "</li>");
            out += "<li><b>Ship Count of team:</b> ".concat(shipCountOfTeam, "</li>");
            out += "</ul>";
            out += "</li>";
            result.innerHTML = "<li>".concat(out, "</li>");
          }
        });
      } else {
        result.innerHTML = '';
      }
    }
  }, {
    key: "createCostElements",
    value: function createCostElements() {
      var result = document.querySelector('.list-cost');
      var out = '';

      if (this.cost.length > 0) {
        this.cost.forEach(function (element) {
          var costTransportModel = element.costTransportModel,
              costCargo = element.costCargo,
              costDistance = element.costDistance;
          out += "<li>";
          out += "<ul>";
          out += "<li><b>Cost transport model:</b> ".concat(costTransportModel, "</li>");
          out += "<li><b>Cost cargo:</b> ".concat(costCargo, "</li>");
          out += "<li><b>Cost distance:</b> ".concat(costDistance, "</li>");
          out += "</ul>";
          out += "</li>";
          result.innerHTML = "<li>".concat(out, "</li>");
        });
      } else {
        result.innerHTML = '';
      }
    }
  }]);

  return AddedTransport;
}();

var _default = AddedTransport;
exports.default = _default;
},{}],"src/addedToLocalStorage/AddedToLocalStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddedToLocalStorage = function AddedToLocalStorage() {
  _classCallCheck(this, AddedToLocalStorage);

  this.addTransports = function (_ref) {
    var args = Object.assign({}, _ref);
    var transportItems = JSON.parse(localStorage.getItem('Transports')) || [];

    var newItem = _objectSpread({}, args);

    transportItems.push(newItem);
    localStorage.setItem('Transports', JSON.stringify(transportItems));
  };

  this.addCost = function (_ref2) {
    var args = Object.assign({}, _ref2);
    var costItems = JSON.parse(localStorage.getItem('Cost')) || [];

    var newItem = _objectSpread({}, args);

    costItems.push(newItem);
    localStorage.setItem('Cost', JSON.stringify(costItems));
  };
};

var _default = AddedToLocalStorage;
exports.default = _default;
},{}],"src/variables/ship/shipVariables.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shipBtn = exports.shipValues = void 0;

var _AddedToLocalStorage = _interopRequireDefault(require("../../addedToLocalStorage/AddedToLocalStorage"));

var _AddedTransport = _interopRequireDefault(require("../../addToList/AddedTransport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shipId = document.querySelector('#shipId');
var shipModel = document.querySelector('#shipModel');
var shipName = document.querySelector('#shipName');
var shipProducedYear = document.querySelector('#shipProducedYear');
var shipCapacity = document.querySelector('#shipCapacity');
var shipAverageSpeed = document.querySelector('#shipAverageSpeed');
var shipCountOfTeam = document.querySelector('#shipCountOfTeam');
var shipBtn = document.querySelector('.ship__btn');
exports.shipBtn = shipBtn;

var shipValues = function shipValues(e) {
  var _saveToLS$addTranspor;

  e.preventDefault();
  var saveToLS = new _AddedToLocalStorage.default();
  saveToLS.addTransports((_saveToLS$addTranspor = {
    type: 'ship'
  }, _defineProperty(_saveToLS$addTranspor, shipAverageSpeed.name, shipAverageSpeed.value), _defineProperty(_saveToLS$addTranspor, shipCapacity.name, shipCapacity.value), _defineProperty(_saveToLS$addTranspor, shipId.name, shipId.value), _defineProperty(_saveToLS$addTranspor, shipName.name, shipName.value), _defineProperty(_saveToLS$addTranspor, shipModel.name, shipModel.value), _defineProperty(_saveToLS$addTranspor, shipProducedYear.name, shipProducedYear.value), _defineProperty(_saveToLS$addTranspor, shipCountOfTeam.name, shipCountOfTeam.value), _saveToLS$addTranspor));
  shipAverageSpeed.value = '';
  shipCapacity.value = '';
  shipId.value = '';
  shipName.value = '';
  shipModel.value = '';
  shipProducedYear.value = '';
  shipCountOfTeam.value = '';
  var add = new _AddedTransport.default();
  add.createTransportElements();
};

exports.shipValues = shipValues;
},{"../../addedToLocalStorage/AddedToLocalStorage":"src/addedToLocalStorage/AddedToLocalStorage.js","../../addToList/AddedTransport":"src/addToList/AddedTransport.js"}],"src/variables/truck/truckVariables.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truckBtn = exports.truckValues = void 0;

var _AddedToLocalStorage = _interopRequireDefault(require("../../addedToLocalStorage/AddedToLocalStorage"));

var _AddedTransport = _interopRequireDefault(require("../../addToList/AddedTransport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var truckId = document.querySelector('#truckId');
var truckModel = document.querySelector('#truckModel');
var truckLicensePlate = document.querySelector('#truckLicensePlate');
var truckProducedYear = document.querySelector('#truckProducedYear');
var truckCapacity = document.querySelector('#truckCapacity');
var truckAverageSpeed = document.querySelector('#truckAverageSpeed');
var truckTypeOfGas = document.querySelector('#truckTypeOfGas');
var truckBtn = document.querySelector('.truck__btn');
exports.truckBtn = truckBtn;

var truckValues = function truckValues(e) {
  var _saveToLS$addTranspor;

  e.preventDefault();
  var saveToLS = new _AddedToLocalStorage.default();
  saveToLS.addTransports((_saveToLS$addTranspor = {
    type: 'truck'
  }, _defineProperty(_saveToLS$addTranspor, truckAverageSpeed.name, truckAverageSpeed.value), _defineProperty(_saveToLS$addTranspor, truckCapacity.name, truckCapacity.value), _defineProperty(_saveToLS$addTranspor, truckId.name, truckId.value), _defineProperty(_saveToLS$addTranspor, truckLicensePlate.name, truckLicensePlate.value), _defineProperty(_saveToLS$addTranspor, truckModel.name, truckModel.value), _defineProperty(_saveToLS$addTranspor, truckProducedYear.name, truckProducedYear.value), _defineProperty(_saveToLS$addTranspor, truckTypeOfGas.name, truckTypeOfGas.value), _saveToLS$addTranspor));
  truckAverageSpeed.value = '';
  truckCapacity.value = '';
  truckId.value = '';
  truckLicensePlate.value = '';
  truckModel.value = '';
  truckProducedYear.value = '';
  truckTypeOfGas.value = '';
  var add = new _AddedTransport.default();
  add.createTransportElements();
};

exports.truckValues = truckValues;
},{"../../addedToLocalStorage/AddedToLocalStorage":"src/addedToLocalStorage/AddedToLocalStorage.js","../../addToList/AddedTransport":"src/addToList/AddedTransport.js"}],"src/variables/cost/costVariables.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.costBtn = exports.costValues = void 0;

var _AddedToLocalStorage = _interopRequireDefault(require("../../addedToLocalStorage/AddedToLocalStorage"));

var _AddedTransport = _interopRequireDefault(require("../../addToList/AddedTransport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var costTransportModel = document.querySelector('#costTransportModel');
var costCargo = document.querySelector('#costCargo');
var costDistance = document.querySelector('#costDistance');
var costBtn = document.querySelector('.cost__btn');
exports.costBtn = costBtn;

var costValues = function costValues(e) {
  var _saveToLS$addCost;

  e.preventDefault();
  var saveToLS = new _AddedToLocalStorage.default();
  saveToLS.addCost((_saveToLS$addCost = {}, _defineProperty(_saveToLS$addCost, costTransportModel.name, costTransportModel.value), _defineProperty(_saveToLS$addCost, costCargo.name, costCargo.value), _defineProperty(_saveToLS$addCost, costDistance.name, costDistance.value), _saveToLS$addCost));
  costTransportModel.value = '';
  costCargo.value = '';
  costDistance.value = '';
  var add = new _AddedTransport.default();
  add.createCostElements();
};

exports.costValues = costValues;
},{"../../addedToLocalStorage/AddedToLocalStorage":"src/addedToLocalStorage/AddedToLocalStorage.js","../../addToList/AddedTransport":"src/addToList/AddedTransport.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _AddedTransport = _interopRequireDefault(require("./addToList/AddedTransport"));

var _shipVariables = require("./variables/ship/shipVariables");

var _truckVariables = require("./variables/truck/truckVariables");

var _costVariables = require("./variables/cost/costVariables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_truckVariables.truckBtn.addEventListener('click', _truckVariables.truckValues);

_shipVariables.shipBtn.addEventListener('click', _shipVariables.shipValues);

_costVariables.costBtn.addEventListener('click', _costVariables.costValues);

var add = new _AddedTransport.default();
add.createTransportElements();
add.createCostElements();
},{"./addToList/AddedTransport":"src/addToList/AddedTransport.js","./variables/ship/shipVariables":"src/variables/ship/shipVariables.js","./variables/truck/truckVariables":"src/variables/truck/truckVariables.js","./variables/cost/costVariables":"src/variables/cost/costVariables.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "14683" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map