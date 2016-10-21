'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

exports.default = function (_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type === _constants.PRINT_PAGE) {
        dispatch({
          type: _constants.PAGE_WILL_PRINT
        });
        setTimeout(function () {
          try {
            if (window && window.print) {
              window.print();
            }
          } catch (e) {
            /*eslint-disable no-console */
            if (console && console.error) {
              console.error('Failed to print current document');
            }
            /*eslint-enabled */
          }
          dispatch({
            type: _constants.PAGE_DID_PRINT
          });
        }, 0);
      }
      return next(action);
    };
  };
};