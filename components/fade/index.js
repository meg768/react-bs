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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Fade(props) {
  var Tag = props.tag,
      children = props.children,
      other = _objectWithoutProperties(props, ["tag", "children"]);

  return _react.default.createElement("div", null, _react.default.createElement(_Transition.default, {
    in: props.in,
    timeout: 0
  }, function (state) {
    var className = '';
    className = (0, _classnames.default)(className, {
      'fade': true
    });
    className = (0, _classnames.default)(className, {
      'show': state == 'entered'
    });
    return _react.default.createElement(Tag, _extends({
      className: className
    }, other), children);
  }));
}

;
Fade.defaultProps = {
  tag: 'div'
};