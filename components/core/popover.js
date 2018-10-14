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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover(args) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, args));
    _this.state = {
      popper: null
    };
    _this.popper = null;
    _this.targetNode = null;
    _this.popupNode = null;
    _this.arrowNode = null;
    _this.onDocumentClick = _this.onDocumentClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.toggle) document.addEventListener('click', this.onDocumentClick, true);
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
      document.removeEventListener('click', this.onDocumentClick, true);
      this.destroyPopper();
    }
  }, {
    key: "createPopper",
    value: function createPopper() {
      var _this2 = this;

      var modifiers = {
        arrow: {
          element: this.arrowNode
        }
      };
      var options = {
        placement: this.props.placement,
        modifiers: modifiers,
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
      this.popper = new _popper.default(this.targetNode, this.popupNode, options);
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
    key: "onDocumentClick",
    value: function onDocumentClick(event) {
      if (this.props.isOpen) {
        if (this.props.toggle && !this.popupNode.contains(event.target)) {
          this.props.toggle();
        }
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
    key: "renderTarget",
    value: function renderTarget() {
      var _this4 = this;

      return _react.default.cloneElement(this.props.target, {
        ref: function ref(element) {
          _this4.targetNode = _reactDom.default.findDOMNode(element);
        }
      });
    }
  }, {
    key: "renderPopup",
    value: function renderPopup() {
      var _this5 = this;

      var popoverClassName = 'popover fade show';
      var popoverStyle = {};

      if (this.state.popper) {
        switch (this.state.popper.placement) {
          case 'left':
          case 'left-start':
          case 'left-end':
            {
              popoverClassName = (0, _classnames.default)(popoverClassName, 'bs-popover-left');
              break;
            }

          case 'right':
          case 'right-start':
          case 'right-end':
            {
              popoverClassName = (0, _classnames.default)(popoverClassName, 'bs-popover-right');
              break;
            }

          case 'top':
          case 'top-start':
          case 'top-end':
            {
              popoverClassName = (0, _classnames.default)(popoverClassName, 'bs-popover-top');
              break;
            }

          case 'bottom':
          case 'bottom-start':
          case 'bottom-end':
            {
              popoverClassName = (0, _classnames.default)(popoverClassName, 'bs-popover-bottom');
              break;
            }
        }

        popoverStyle.display = this.props.isOpen ? 'block' : 'none';
      } else {
        popoverStyle.display = 'none';
      }

      var arrow = null;

      if (this.props.arrow) {
        arrow = _react.default.createElement("div", {
          className: "arrow",
          ref: function ref(element) {
            _this5.arrowNode = element;
          }
        });
      }

      return _react.default.createElement("div", {
        className: popoverClassName,
        style: popoverStyle,
        ref: function ref(element) {
          _this5.popupNode = element;
        }
      }, arrow, this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, this.renderTarget(), this.renderPopup());
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        placement: 'bottom-start',
        isOpen: false,
        arrow: true,
        modifiers: {
          preventOverflow: {
            boundariesElement: 'viewport'
          }
        }
      };
    }
  }]);

  return Popover;
}(_react.default.Component);

exports.default = Popover;

_defineProperty(Popover, "propTypes", {
  target: _propTypes.default.element.isRequired,
  arrow: _propTypes.default.bool,
  placement: _propTypes.default.string,
  toggle: _propTypes.default.func
});

Popover.Body =
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
      var _this$props = this.props,
          className = _this$props.className,
          props = _this$props.props;
      return _react.default.createElement("div", _extends({
        className: (0, _classnames.default)(className, 'popover-body')
      }, props), this.props.children);
    }
  }]);

  return _class;
}(_react.default.Component);

Popover.Header =
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
          className = _this$props2.className,
          props = _this$props2.props;
      return _react.default.createElement("div", _extends({
        className: (0, _classnames.default)(className, 'popover-header')
      }, props), this.props.children);
    }
  }]);

  return _class2;
}(_react.default.Component);