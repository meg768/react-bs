"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Jumbotron;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tag = _interopRequireDefault(require("./tag.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Jumbotron(props) {
  var tag = props.tag,
      className = props.className,
      other = _objectWithoutProperties(props, ["tag", "className"]);

  return _react.default.createElement(_tag.default, _extends({
    tag: tag,
    className: className
  }, other));
}

;
Jumbotron.propTypes = {
  className: _propTypes.default.string,
  tag: _propTypes.default.string
};
Jumbotron.defaultProps = {
  className: 'jumbotron',
  tag: 'div' ///////////////////////////////////////////////////////////////////////////////

};

Jumbotron.Header = function (props) {
  var tag = props.tag,
      other = _objectWithoutProperties(props, ["tag"]);

  return _react.default.createElement(_tag.default, _extends({
    tag: tag
  }, other));
};

Jumbotron.Header.defaultProps = {
  tag: 'h2' ///////////////////////////////////////////////////////////////////////////////

};

Jumbotron.Body = function (props) {
  var tag = props.tag,
      other = _objectWithoutProperties(props, ["tag"]);

  return _react.default.createElement(_tag.default, _extends({
    tag: tag
  }, other));
};

Jumbotron.Body.defaultProps = {
  tag: 'div'
};