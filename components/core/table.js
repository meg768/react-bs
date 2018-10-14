"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _component = _interopRequireDefault(require("./component.js"));

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

var Table =
/*#__PURE__*/
function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          responsive = _this$props.responsive,
          className = _this$props.className,
          striped = _this$props.striped,
          dark = _this$props.dark,
          hover = _this$props.hover,
          bordered = _this$props.bordered,
          borderless = _this$props.borderless,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, ["style", "responsive", "className", "striped", "dark", "hover", "bordered", "borderless", "size"]);

      className = (0, _classnames.default)(className, 'table');
      className = (0, _classnames.default)(className, striped ? 'table-striped' : false);
      className = (0, _classnames.default)(className, hover ? 'table-hover' : false);
      className = (0, _classnames.default)(className, dark ? 'table-dark' : false);
      className = (0, _classnames.default)(className, bordered ? 'table-bordered' : false);
      className = (0, _classnames.default)(className, borderless ? 'table-borderless' : false);
      className = (0, _classnames.default)(className, size ? 'table-' + size : false);

      var table = _react.default.createElement("table", _extends({}, props, {
        className: className,
        style: style
      }), this.props.children);

      if (responsive) {
        var wrapperClassName = typeof responsive == 'string' ? 'table-responsive-' + responsive : 'table-responsive';
        table = _react.default.createElement("div", {
          className: wrapperClassName
        }, table);
      }

      return table;
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        striped: false,
        dark: false,
        bordered: false,
        borderless: false,
        responsive: false,
        size: 'md'
      };
    }
  }]);

  return Table;
}(_component.default);

exports.default = Table;

_defineProperty(Table, "propTypes", {
  borderless: _propTypes.default.bool,
  bordered: _propTypes.default.bool,
  striped: _propTypes.default.bool,
  dark: _propTypes.default.bool,
  size: _propTypes.default.string
});

;

Table.Row = function (props) {
  var className = props.className,
      bg = props.bg,
      color = props.color,
      other = _objectWithoutProperties(props, ["className", "bg", "color"]);

  className = (0, _classnames.default)(className, _defineProperty({}, "table-".concat(color), color));
  return _react.default.createElement(_tag.default, _extends({
    tag: "tr",
    style: {
      textAlign: 'left'
    },
    className: className
  }, other));
};

Table.Col = function (props) {
  var className = props.className,
      header = props.header,
      color = props.color,
      other = _objectWithoutProperties(props, ["className", "header", "color"]);

  className = (0, _classnames.default)(className, _defineProperty({}, "table-".concat(color), color));
  return _react.default.createElement(_tag.default, _extends({
    tag: header ? 'th' : 'td',
    className: className
  }, other));
};

Table.Header = function (props) {
  var className = props.className,
      light = props.light,
      dark = props.dark,
      other = _objectWithoutProperties(props, ["className", "light", "dark"]);

  className = (0, _classnames.default)(className, {
    'thead-dark': dark
  });
  className = (0, _classnames.default)(className, {
    'thead-light': light
  });
  return _react.default.createElement(_tag.default, _extends({
    tag: "thead",
    className: className
  }, other));
};

Table.Body = function (props) {
  return _react.default.createElement(_tag.default, _extends({
    tag: "tbody"
  }, props));
};