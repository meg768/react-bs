"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = _interopRequireDefault(require("./component.js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tag = _interopRequireDefault(require("./tag.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Container =
/*#__PURE__*/
function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          fluid = _this$props.fluid,
          props = _objectWithoutProperties(_this$props, ["className", "fluid"]);

      className = (0, _classnames.default)(className, {
        'container': true
      });
      className = (0, _classnames.default)(className, {
        'container-fluid': fluid
      });
      return _react.default.createElement("div", _extends({
        className: className
      }, props), this.props.children);
    }
  }]);

  return Container;
}(_component.default);

exports.default = Container;

_defineProperty(Container, "propTypes", {
  fluid: _propTypes.default.bool
});

_defineProperty(Container, "defaultProps", {
  fluid: false
});

;

Container.Col = function (props) {
  var tag = props.tag,
      className = props.className,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      width = props.width,
      other = _objectWithoutProperties(props, ["tag", "className", "xs", "sm", "md", "lg", "width"]);

  className = (0, _classnames.default)(className, 'col');
  className = (0, _classnames.default)(className, _defineProperty({}, "col-".concat(xs), width));
  className = (0, _classnames.default)(className, _defineProperty({}, "col-".concat(xs), xs));
  className = (0, _classnames.default)(className, _defineProperty({}, "col-sm-".concat(sm), sm));
  className = (0, _classnames.default)(className, _defineProperty({}, "col-md-".concat(md), md));
  className = (0, _classnames.default)(className, _defineProperty({}, "col-lg-".concat(lg), lg));
  return _react.default.createElement(_tag.default, _extends({
    tag: tag,
    className: className
  }, other));
};

Container.Row = function (props) {
  var className = props.className,
      other = _objectWithoutProperties(props, ["className"]);

  className = (0, _classnames.default)(className, 'row');
  return _react.default.createElement("div", _extends({
    className: className
  }, other), props.children);
};

Container.Robocop = function (props) {
  var className = props.className,
      other = _objectWithoutProperties(props, ["className"]);

  className = (0, _classnames.default)(className, 'row');
  return _react.default.createElement("div", _extends({
    className: className
  }, other), props.children);
};

Container.RowX = function (props) {
  return _react.default.createElement("div", null, props.children);
};

Container.Col.propTypes = {
  tag: _propTypes.default.string,
  xs: _propTypes.default.number,
  sm: _propTypes.default.number,
  md: _propTypes.default.number,
  lg: _propTypes.default.number,
  width: _propTypes.default.number
};
Container.Col.defaultProps = {
  tag: 'div'
};