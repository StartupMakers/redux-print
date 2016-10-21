'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

var initialState = {
  isProcessing: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (action.type === _constants.PAGE_WILL_PRINT) {
    return _extends({}, state, { isProcessing: true });
  } else if (action.type === _constants.PAGE_DID_PRINT) {
    return _extends({}, state, { isProcessing: false });
  } else {
    return state;
  }
};