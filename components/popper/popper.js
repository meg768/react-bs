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

var Popper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popper, _React$Component);

  function Popper(args) {
    var _this;

    _classCallCheck(this, Popper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popper).call(this, args));
    _this.state = {
      popper: null
    };
    _this.popper = null;
    _this.targetNode = null;
    _this.popupNode = null;
    _this.onDocumentClick = _this.onDocumentClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Popper, [{
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

      var children = _react.default.Children.toArray(this.props.children);

      if (children.length == 1) {
        var child = children[0];
        var style = Object.assign({}, child.props.style, {
          display: this.state.popper && this.props.isOpen ? 'block' : 'none'
        });
        return _react.default.cloneElement(child, {
          style: style,
          ref: function ref(element) {
            _this5.popupNode = _reactDom.default.findDOMNode(element);
          }
        });
      }
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
        isOpen: false,
        placement: 'bottom-start',
        modifiers: {
          preventOverflow: {
            boundariesElement: 'viewport'
          }
        }
      };
    }
  }]);

  return Popper;
}(_react.default.Component);

exports.default = Popper;

_defineProperty(Popper, "propTypes", {
  target: _propTypes.default.element.isRequired,
  placement: _propTypes.default.string,
  toggle: _propTypes.default.func
});