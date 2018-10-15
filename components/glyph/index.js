"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Glyph;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tag = _interopRequireDefault(require("../tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Glyph(props) {
  var _props$tag = props.tag,
      tag = _props$tag === void 0 ? 'i' : _props$tag,
      className = props.className,
      name = props.name,
      glyph = props.glyph,
      icon = props.icon,
      other = _objectWithoutProperties(props, ["tag", "className", "name", "glyph", "icon"]);

  if (icon && !name) name = icon;
  if (glyph && !name) name = glyph;
  return _react.default.createElement(_tag.default, _extends({
    tag: tag,
    className: (0, _classnames.default)(className, 'icon-' + name)
  }, other));
}

Glyph.defaultProps = {
  tag: 'i',
  prefix: 'icon-'
};