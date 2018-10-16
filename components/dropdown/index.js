"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _popper = _interopRequireDefault(require("popper.js"));

var _fade = _interopRequireDefault(require("../fade"));

var _tag = _interopRequireDefault(require("../tag"));

var _class2, _temp;

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

function debug() {
  console.log.apply(null, arguments);
}

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(args) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, args));
    _this.state = {
      popper: null
    };
    _this.popper = null;
    _this.targetNode = null;
    _this.dropdownNode = null;
    _this.onDocumentClick = _this.onDocumentClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.dismiss) document.addEventListener('click', this.onDocumentClick, true);
      this.createPopper();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      if (!this.popper) {
        this.createPopper();
      }

      this.updatePopper();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.dismiss) document.removeEventListener('click', this.onDocumentClick, true);
      this.destroyPopper();
    }
  }, {
    key: "onDocumentClick",
    value: function onDocumentClick(event) {
      if (this.props.isOpen) {
        if (this.targetNode.contains(event.target)) {
          return;
        }

        if (!this.dropdownNode.contains(event.target)) {
          if (this.props.dismiss) {
            this.props.dismiss();
          }
        }
      }
    }
  }, {
    key: "createPopper",
    value: function createPopper() {
      var _this2 = this;

      var options = {
        placement: this.props.placement,
        modifiers: this.props.modifiers,
        onCreate: function onCreate(state) {
          _this2.setState({
            popper: state
          });
        },
        onUpdate: function onUpdate(state) {
          _this2.setState({
            popper: state
          });
        }
      };
      this.popper = new _popper.default(this.targetNode, this.dropdownNode, options);
      this.updatePopper();
    }
  }, {
    key: "destroyPopper",
    value: function destroyPopper() {
      if (this.popper) {
        this.popper.destroy();
      }
    }
  }, {
    key: "updatePopper",
    value: function updatePopper() {
      var _this3 = this;

      requestAnimationFrame(function () {
        if (_this3.popper) {
          _this3.popper.update();
        }
      });
    }
  }, {
    key: "getDropdownTarget",
    value: function getDropdownTarget() {
      return _react.default.Children.toArray(this.props.children).find(function (child) {
        return child.type === Dropdown.Target;
      });
    }
  }, {
    key: "getDropdownMenu",
    value: function getDropdownMenu() {
      return _react.default.Children.toArray(this.props.children).find(function (child) {
        return child.type === Dropdown.Menu;
      });
    }
  }, {
    key: "renderDropdownTarget",
    value: function renderDropdownTarget() {
      var _this4 = this;

      var target = this.getDropdownTarget();
      return _react.default.cloneElement(target, {
        ref: function ref(element) {
          _this4.targetNode = _reactDom.default.findDOMNode(element);
        }
      });
    }
  }, {
    key: "renderDropdownMenu",
    value: function renderDropdownMenu() {
      var _this5 = this;

      var menu = this.getDropdownMenu();
      return _react.default.cloneElement(menu, {
        isOpen: this.props.isOpen,
        ref: function ref(element) {
          _this5.dropdownNode = _reactDom.default.findDOMNode(element);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tag = _this$props.tag,
          _name = _this$props._name,
          placement = _this$props.placement,
          modifiers = _this$props.modifiers,
          isOpen = _this$props.isOpen,
          toggle = _this$props.toggle,
          dismiss = _this$props.dismiss,
          props = _objectWithoutProperties(_this$props, ["tag", "_name", "placement", "modifiers", "isOpen", "toggle", "dismiss"]);

      return _react.default.createElement(_tag.default, _extends({
        tag: tag
      }, props), this.renderDropdownTarget(), this.renderDropdownMenu());
    }
  }]);

  return Dropdown;
}(_react.default.Component);

exports.default = Dropdown;

_defineProperty(Dropdown, "propTypes", {
  dismiss: _propTypes.default.func,
  isOpen: _propTypes.default.bool
});

_defineProperty(Dropdown, "defaultProps", {
  tag: 'div',
  placement: 'bottom-start',
  isOpen: false,
  toggle: null,
  dismiss: null,
  modifiers: {
    preventOverflow: {
      boundariesElement: 'viewport'
    }
  }
});

Dropdown.Target =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(_class, _React$Component2);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return _class;
}(_react.default.Component);

Dropdown.Menu = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(_class2, _React$Component3);

  function _class2() {
    _classCallCheck(this, _class2);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments));
  }

  _createClass(_class2, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          tag = _this$props2.tag,
          style = _this$props2.style,
          isOpen = _this$props2.isOpen,
          className = _this$props2.className,
          props = _objectWithoutProperties(_this$props2, ["tag", "style", "isOpen", "className"]);

      className = (0, _classnames.default)(className, 'dropdown-menu');
      style = Object.assign({}, style, {
        display: isOpen ? 'block' : 'none'
      });
      return _react.default.createElement(_fade.default, {
        in: isOpen
      }, _react.default.createElement(_tag.default, _extends({
        tag: tag,
        style: style,
        className: className
      }, props)));
    }
  }]);

  return _class2;
}(_react.default.Component), _defineProperty(_class2, "propTypes", {
  isOpen: _propTypes.default.bool
}), _defineProperty(_class2, "defaultProps", {
  tag: 'div',
  isOpen: false
}), _temp);

Dropdown.Item = function (props) {
  var _props$tag = props.tag,
      tag = _props$tag === void 0 ? 'div' : _props$tag,
      style = props.style,
      className = props.className,
      other = _objectWithoutProperties(props, ["tag", "style", "className"]);

  className = (0, _classnames.default)(className, 'dropdown-item');
  style = Object.assign({}, style, {
    cursor: 'pointer'
  });
  return _react.default.createElement(_tag.default, _extends({
    tag: tag,
    tabIndex: 1,
    style: style,
    className: className
  }, other));
};

Dropdown.Separator = function (props) {
  var _props$tag2 = props.tag,
      tag = _props$tag2 === void 0 ? 'div' : _props$tag2,
      className = props.className,
      other = _objectWithoutProperties(props, ["tag", "className"]);

  className = (0, _classnames.default)(className, 'dropdown-divider');
  return _react.default.createElement(_tag.default, _extends({
    tag: tag,
    className: className
  }, other));
};