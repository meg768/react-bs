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

var _class, _temp, _class2, _temp2, _class3, _temp3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Alert =
/*#__PURE__*/
function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Alert).call(this, props));
    _this.state = {};
    _this.state.dismissed = false;
    _this.onDismiss = _this.onDismiss.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Alert, [{
    key: "onDismiss",
    value: function onDismiss() {
      this.setState({
        dismissed: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.dismissed) return null;

      var _this$props = this.props,
          dismissable = _this$props.dismissable,
          tag = _this$props.tag,
          color = _this$props.color,
          role = _this$props.role,
          children = _this$props.children,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ["dismissable", "tag", "color", "role", "children", "className"]);

      className = (0, _classnames.default)(className, {
        'alert': true
      });
      className = (0, _classnames.default)(className, {
        'alert-dismissible': dismissable
      });
      className = (0, _classnames.default)(className, _defineProperty({}, "alert-".concat(color), color));
      var dismiss = null;

      if (dismissable) {
        dismiss = _react.default.createElement("button", {
          type: "button",
          className: "close",
          "data-dismiss": "alert",
          "aria-label": "Close",
          onClick: this.onDismiss
        }, _react.default.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7"));
      }

      return _react.default.createElement(_tag.default, _extends({
        tag: tag,
        className: className,
        role: role
      }, props), dismiss, children);
    }
  }]);

  return Alert;
}(_component.default);

exports.default = Alert;

_defineProperty(Alert, "propTypes", {
  color: _propTypes.default.string,
  dismissable: _propTypes.default.bool,
  tag: _propTypes.default.string
});

_defineProperty(Alert, "defaultProps", {
  color: 'info',
  role: 'alert',
  tag: 'div',
  dismissable: false
});

;
/**
 * Alert Header
 */

Alert.Header = (_temp = _class =
/*#__PURE__*/
function (_Component2) {
  _inherits(_class, _Component2);

  function _class(props) {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          tag = _this$props2.tag,
          className = _this$props2.className,
          other = _objectWithoutProperties(_this$props2, ["tag", "className"]);

      className = (0, _classnames.default)(className, 'alert-heading');
      return _react.default.createElement(_tag.default, _extends({
        tag: tag,
        className: className
      }, other));
    }
  }]);

  return _class;
}(_component.default), _defineProperty(_class, "propTypes", {
  tag: _propTypes.default.string
}), _defineProperty(_class, "defaultProps", {
  tag: 'h5'
}), _temp);
Alert.Body = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component3) {
  _inherits(_class2, _Component3);

  function _class2(props) {
    var _this2;

    _classCallCheck(this, _class2);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, props));
    _this2.displayName = 'Alarm.Body';
    return _this2;
  }

  _createClass(_class2, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          tag = _this$props3.tag,
          other = _objectWithoutProperties(_this$props3, ["tag"]);

      return _react.default.createElement(_tag.default, _extends({
        tag: tag
      }, other));
    }
  }]);

  return _class2;
}(_component.default), _defineProperty(_class2, "propTypes", {
  tag: _propTypes.default.string
}), _defineProperty(_class2, "defaultProps", {
  tag: 'div'
}), _temp2);
/*   


    

var Module = function(props)  {
    var {tag, ...other} = props;
    return <Tag tag={tag} {...other}/>;
};

Module.propTypes = {
    tag: PropTypes.string
};


Module.defaultProps = {
    tag: 'div'
};

Module.displayName = 'Alert.Body';

Alert.Body = Module;
export default Module;


*/

Alert.Separator = (_temp3 = _class3 =
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
          tag = _this$props4.tag,
          other = _objectWithoutProperties(_this$props4, ["tag"]);

      return _react.default.createElement(_tag.default, _extends({
        tag: tag
      }, other));
    }
  }]);

  return _class3;
}(_component.default), _defineProperty(_class3, "propTypes", {
  tag: _propTypes.default.string
}), _defineProperty(_class3, "defaultProps", {
  tag: 'hr'
}), _temp3);