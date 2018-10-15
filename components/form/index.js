"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tag = _interopRequireDefault(require("../tag"));

var _class, _temp, _class4, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _uniqueID = 0;
/**
 * 
 * Form
 * 
 * 
 */

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  _createClass(Form, null, [{
    key: "defaultProps",
    get: function get() {
      return {};
    }
  }]);

  function Form(args) {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, args));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ["className"]);

      className = (0, _classnames.default)('form', className);
      return _react.default.createElement("form", _extends({}, props, {
        className: className
      }), this.props.children);
    }
  }]);

  return Form;
}(_react.Component);

exports.default = Form;
;
Form.Group = (_temp = _class =
/*#__PURE__*/
function (_Component2) {
  _inherits(_class, _Component2);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          xs = _this$props2.xs,
          sm = _this$props2.sm,
          md = _this$props2.md,
          lg = _this$props2.lg,
          width = _this$props2.width,
          props = _objectWithoutProperties(_this$props2, ["className", "xs", "sm", "md", "lg", "width"]);

      className = (0, _classnames.default)(className, 'form-group');
      className = (0, _classnames.default)(className, {
        width: width
      });
      className = (0, _classnames.default)(className, _defineProperty({}, "col-".concat(xs), xs));
      className = (0, _classnames.default)(className, _defineProperty({}, "col-sm-".concat(sm), sm));
      className = (0, _classnames.default)(className, _defineProperty({}, "col-md-".concat(md), md));
      className = (0, _classnames.default)(className, _defineProperty({}, "col-lg-".concat(lg), lg));
      return _react.default.createElement("div", _extends({}, props, {
        className: className
      }), this.props.children);
    }
  }]);

  return _class;
}(_react.Component), _defineProperty(_class, "propTypes", {
  xs: _propTypes.default.number,
  sm: _propTypes.default.number,
  md: _propTypes.default.number,
  lg: _propTypes.default.number,
  width: _propTypes.default.number
}), _temp);

Form.Row =
/*#__PURE__*/
function (_Component3) {
  _inherits(_class2, _Component3);

  function _class2() {
    _classCallCheck(this, _class2);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments));
  }

  _createClass(_class2, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          props = _objectWithoutProperties(_this$props3, ["className"]);

      className = (0, _classnames.default)(className, 'form-row');
      return _react.default.createElement("div", _extends({}, props, {
        className: className
      }), this.props.children);
    }
  }]);

  return _class2;
}(_react.Component);

Form.Col =
/*#__PURE__*/
function (_Component4) {
  _inherits(_class3, _Component4);

  function _class3() {
    _classCallCheck(this, _class3);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class3).apply(this, arguments));
  }

  _createClass(_class3, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          props = _objectWithoutProperties(_this$props4, ["className"]);

      className = (0, _classnames.default)(className, 'col');
      return _react.default.createElement("div", _extends({}, props, {
        className: className
      }), this.props.children);
    }
  }]);

  return _class3;
}(_react.Component);

Form.Input = (_temp2 = _class4 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_class4, _React$Component);

  function _class4() {
    _classCallCheck(this, _class4);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class4).apply(this, arguments));
  }

  _createClass(_class4, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          plainText = _this$props5.plainText,
          className = _this$props5.className,
          props = _objectWithoutProperties(_this$props5, ["plainText", "className"]);

      className = (0, _classnames.default)(className, {
        'form-control': true
      });
      className = (0, _classnames.default)(className, {
        'form-control-plainText': plainText
      });
      return _react.default.createElement("input", _extends({}, props, {
        className: className
      }), this.props.children);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        type: 'text'
      };
    }
  }]);

  return _class4;
}(_react.default.Component), _defineProperty(_class4, "propTypes", {
  plainText: _propTypes.default.bool
}), _temp2);

Form.Label =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(_class5, _React$Component2);

  function _class5() {
    _classCallCheck(this, _class5);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class5).apply(this, arguments));
  }

  _createClass(_class5, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("label", this.props, this.props.children);
    }
  }]);

  return _class5;
}(_react.default.Component);

Form.Label = function (props) {
  var _props$tag = props.tag,
      tag = _props$tag === void 0 ? 'label' : _props$tag,
      other = _objectWithoutProperties(props, ["tag"]);

  return _react.default.createElement(_tag.default, _extends({
    tag: tag
  }, other));
};