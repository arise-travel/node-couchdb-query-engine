'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ensure = require('../ensure');

var ensure = _interopRequireWildcard(_ensure);

var _oniguruma = require('oniguruma');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  conditions: {

    $regex: function $regex(d, q, p) {
      // return !!d.match(new RegExp(q, p.$options))
      var regex = new _oniguruma.OnigRegExp(q);
      return regex.testSync(d);
    }

  }
};
module.exports = exports['default'];