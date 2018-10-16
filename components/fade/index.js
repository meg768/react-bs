"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Fade;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Fade(props) {
  var Tag = props.tag,
      children = props.children,
      other = _objectWithoutProperties(props, ["tag", "children"]);

  return _react.default.createElement(_Transition.default, {
    in: props.in,
    timeout: 0
  }, function (state) {
    var child = _react.default.Children.toArray(children);

    if ((0, _utils.isArray)(child)) child = child[0];
    var className = child.props.className;
    className = (0, _classnames.default)(className, {
      'fade': true
    });
    className = (0, _classnames.default)(className, {
      'show': state == 'entered'
    });
    return _react.default.cloneElement(child, _objectSpread({
      className: className
    }, other));
  });
}

;
Fade.defaultProps = {
  tag: 'div'
};