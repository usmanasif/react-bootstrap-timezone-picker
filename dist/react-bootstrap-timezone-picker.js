module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(7);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _FormControl = __webpack_require__(6);

	var _FormControl2 = _interopRequireDefault(_FormControl);

	var _timezones = __webpack_require__(2);

	var _timezones2 = _interopRequireDefault(_timezones);

	__webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UP_KEY = 38;
	var DOWN_KEY = 40;
	var ENTER_KEY = 13;
	var RETURN_KEY = 14;
	var ESCAPE_KEY = 27;

	var propTypes = {
	  absolute: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  defaultValue: _propTypes2.default.any,
	  initialValue: _propTypes2.default.any,
	  onBlur: _propTypes2.default.func,
	  onChange: _propTypes2.default.func,
	  onFocus: _propTypes2.default.func,
	  onKeyDown: _propTypes2.default.func,
	  placeholder: _propTypes2.default.string,
	  timezones: _propTypes2.default.object,
	  style: _propTypes2.default.object,
	  disabled: _propTypes2.default.bool,
	  value: _propTypes2.default.any
	};

	var defaultProps = {
	  absolute: true,
	  defaultValue: '',
	  initialValue: '',
	  placeholder: '',
	  onBlur: function onBlur() {},
	  onChange: function onChange() {},
	  onFocus: function onFocus() {},
	  onKeyDown: function onKeyDown() {},
	  overflow: false,
	  style: {},
	  disabled: false,
	  timezones: _timezones2.default
	};

	var TimezonePicker = function (_React$Component) {
	  _inherits(TimezonePicker, _React$Component);

	  _createClass(TimezonePicker, null, [{
	    key: 'zoneCompare',
	    value: function zoneCompare(key, filter) {
	      return key.toLowerCase().indexOf(filter.toLowerCase().trim()) !== -1;
	    }
	  }]);

	  function TimezonePicker(props) {
	    _classCallCheck(this, TimezonePicker);

	    var _this = _possibleConstructorReturn(this, (TimezonePicker.__proto__ || Object.getPrototypeOf(TimezonePicker)).call(this, props));

	    _this.filterItems = _this.filterItems.bind(_this);
	    _this.getTimezone = _this.getTimezone.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleFilterChange = _this.handleFilterChange.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
	    _this.handleSelect = _this.handleSelect.bind(_this);
	    _this.scrollToIndex = _this.scrollToIndex.bind(_this);

	    _this.state = {
	      focused: 0,
	      isOpen: false,
	      timezones: _this.props.timezones,
	      value: props.value || props.defaultValue || props.initialValue
	    };

	    _this.prevValue = _this.state.value;
	    return _this;
	  }

	  _createClass(TimezonePicker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this.props.value) {
	        var value = this.getTimezone(nextProps.value) || '';

	        this.setState({ value: value });
	      }
	    }
	  }, {
	    key: 'getTimezone',
	    value: function getTimezone(query) {
	      var _this2 = this;

	      if (!query) {
	        return null;
	      }

	      return Object.keys(this.props.timezones).find(function (zone) {
	        return zone === query || _this2.props.timezones[zone] === query;
	      });
	    }
	  }, {
	    key: 'filterItems',
	    value: function filterItems(filter) {
	      var _this3 = this;

	      var timezones = this.props.timezones;


	      if (filter.trim().length === 0) {
	        return timezones;
	      }

	      var filteredTimezones = {};

	      Object.keys(timezones).forEach(function (key) {
	        if (_this3.constructor.zoneCompare(key, filter) || _this3.constructor.zoneCompare(timezones[key], filter)) {
	          filteredTimezones[key] = timezones[key];
	        }
	      });

	      return filteredTimezones;
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      var tz = this.getTimezone(this.state.value);

	      if (tz === undefined) {
	        this.setState({ value: '', timezones: this.props.timezones });
	        if (this.prevValue) {
	          this.props.onChange('');
	          this.prevValue = '';
	        }
	      }

	      this.setState({ isOpen: false });

	      this.props.onBlur();
	    }
	  }, {
	    key: 'handleFilterChange',
	    value: function handleFilterChange(e) {
	      var timezones = this.filterItems(e.target.value);

	      this.setState({
	        focused: 0,
	        isOpen: Object.keys(timezones).length > 0,
	        value: e.target.value || '',
	        timezones: timezones
	      });

	      if (!e.target.value) this.props.onChange('');
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(ev) {
	      var _this4 = this;

	      var _state = this.state,
	          value = _state.value,
	          timezones = _state.timezones;

	      if (ev) {
	        ev.target.select();
	      }

	      if (value) {
	        var keyz = Object.keys(timezones);

	        var _loop = function _loop(i) {
	          if (keyz[i] === value || timezones[keyz[i]] === value) {
	            _this4.setState({ isOpen: true, focused: i }, function () {
	              _this4.scrollToIndex(i);
	            });

	            _this4.props.onFocus(ev);

	            return {
	              v: void 0
	            };
	          }
	        };

	        for (var i = 0; i < keyz.length; ++i) {
	          var _ret = _loop(i);

	          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        }
	      }

	      this.setState({ isOpen: true });

	      this.props.onFocus();
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      var _state2 = this.state,
	          focused = _state2.focused,
	          timezones = _state2.timezones;


	      if (e.which === UP_KEY || e.which === DOWN_KEY) {
	        e.preventDefault();

	        var newFocused = void 0;

	        if (e.which === UP_KEY) {
	          newFocused = focused === 0 ? Object.keys(timezones).length - 1 : focused - 1;
	        } else {
	          newFocused = focused === Object.keys(timezones).length - 1 ? 0 : focused + 1;
	        }

	        this.setState({ focused: newFocused });

	        this.scrollToIndex(newFocused);
	      } else if (e.which === ENTER_KEY || e.which === RETURN_KEY) {
	        this.handleSelect(focused);
	      } else if (e.which === ESCAPE_KEY) {
	        (0, _reactDom.findDOMNode)(this.refInput).blur();
	        this.handleBlur();
	      }

	      this.props.onKeyDown(e);
	    }
	  }, {
	    key: 'handleMouseEnter',
	    value: function handleMouseEnter(idx, e) {
	      if (e.pageX !== this.mouseX || e.pageY !== this.mouseY) {
	        if (this.disableMouse) {
	          this.disableMouse = false;
	          this.mouseY = e.pageY;
	          return;
	        }

	        this.mouseX = e.pageX;
	        this.mouseY = e.pageY;
	        this.setState({ focused: idx });
	      }
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(index) {
	      var _this5 = this;

	      var timezones = this.state.timezones;


	      var key = Object.keys(timezones)[index] || '';
	      var value = timezones[key] || '';

	      if (this.prevValue !== value) {
	        this.prevValue = value;
	        this.props.onChange(value);
	      }

	      this.setState({
	        focused: 0,
	        isOpen: false,
	        timezones: this.props.timezones,
	        value: key
	      }, function () {
	        (0, _reactDom.findDOMNode)(_this5.refInput).blur();
	      });
	    }
	  }, {
	    key: 'scrollToIndex',
	    value: function scrollToIndex(idx) {
	      var index = Math.max(0, idx - 3);

	      this.disableMouse = true;
	      (0, _reactDom.findDOMNode)(this.list).scrollTop = this.list.children[index].offsetTop;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this6 = this;

	      var _state3 = this.state,
	          isOpen = _state3.isOpen,
	          value = _state3.value;

	      var _props = this.props,
	          absolute = _props.absolute,
	          className = _props.className,
	          placeholder = _props.placeholder,
	          style = _props.style,
	          disabled = _props.disabled,
	          restProps = _objectWithoutProperties(_props, ['absolute', 'className', 'placeholder', 'style', 'disabled']);

	      var rest = Object.assign({}, restProps);

	      ['defaultValue', 'initialValue', 'onBlur', 'onChange', 'onFocus', 'onKeyDown', 'timezones', 'value'].forEach(function (p) {
	        return delete rest[p];
	      });

	      var isSelected = !isOpen && value;
	      var containerClasses = (0, _classnames2.default)('timezone-picker', className, {
	        'timezone-picker-open': isOpen,
	        'timezone-picker-selected': isSelected
	      });

	      var listClass = (0, _classnames2.default)('timezone-picker-list', 'timezone-picker-list-' + (absolute ? 'abs' : 'rel'));

	      var timezones = Object.keys(this.state.timezones).map(function (zone, idx) {
	        var focused = _this6.state.focused === idx;

	        return _react2.default.createElement(
	          'li',
	          {
	            className: (0, _classnames2.default)('timezone-picker-list-item', { 'timezone-picker-list-item-active': focused }),
	            key: zone,
	            onMouseDown: function onMouseDown() {
	              _this6.handleSelect(idx);
	            },
	            onMouseEnter: function onMouseEnter(e) {
	              _this6.handleMouseEnter(idx, e);
	            },
	            onTouchStart: function onTouchStart() {
	              _this6.handleSelect(idx);
	            }
	          },
	          zone
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: containerClasses, style: style },
	        _react2.default.createElement(
	          'div',
	          { className: 'timezone-picker-textfield' },
	          _react2.default.createElement(_FormControl2.default, _extends({
	            onBlur: this.handleBlur,
	            onChange: this.handleFilterChange,
	            onFocus: this.handleFocus,
	            disabled: disabled,
	            onKeyDown: this.handleKeyPress,
	            placeholder: placeholder,
	            ref: function ref(c) {
	              _this6.refInput = c;
	            },
	            value: this.getTimezone(value) || value
	          }, rest)),
	          isOpen && _react2.default.createElement(
	            'ul',
	            { className: listClass, ref: function ref(c) {
	                _this6.list = c;
	              } },
	            timezones
	          )
	        )
	      );
	    }
	  }]);

	  return TimezonePicker;
	}(_react2.default.Component);

	TimezonePicker.propTypes = propTypes;
	TimezonePicker.defaultProps = defaultProps;

	exports.default = TimezonePicker;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {"(GMT-11:00) Pago Pago":"Pacific/Pago_Pago","(GMT-10:00) Hawaii Time":"Pacific/Honolulu","(GMT-08:00) Pacific Time":"America/Los_Angeles","(GMT-08:00) Pacific Time - Tijuana":"America/Tijuana","(GMT-07:00) Mountain Time":"America/Denver","(GMT-07:00) Mountain Time - Arizona":"America/Phoenix","(GMT-07:00) Mountain Time - Chihuahua, Mazatlan":"America/Mazatlan","(GMT-06:00) Central Time":"America/Chicago","(GMT-06:00) Central Time - Mexico City":"America/Mexico_City","(GMT-06:00) Central Time - Regina":"America/Regina","(GMT-06:00) Guatemala":"America/Guatemala","(GMT-05:00) Bogota":"America/Bogota","(GMT-05:00) Eastern Time":"America/New_York","(GMT-05:00) Lima":"America/Lima","(GMT-04:30) Caracas":"America/Caracas","(GMT-04:00) Atlantic Time - Halifax":"America/Halifax","(GMT-04:00) Guyana":"America/Guyana","(GMT-04:00) La Paz":"America/La_Paz","(GMT-03:00) Buenos Aires":"America/Argentina/Buenos_Aires","(GMT-03:00) Godthab":"America/Godthab","(GMT-03:00) Montevideo":"America/Montevideo","(GMT-03:30) Newfoundland Time - St. Johns":"America/St_Johns","(GMT-03:00) Santiago":"America/Santiago","(GMT-02:00) Sao Paulo":"America/Sao_Paulo","(GMT-02:00) South Georgia":"Atlantic/South_Georgia","(GMT-01:00) Azores":"Atlantic/Azores","(GMT-01:00) Cape Verde":"Atlantic/Cape_Verde","(GMT+00:00) Casablanca":"Africa/Casablanca","(GMT+00:00) Dublin":"Europe/Dublin","(GMT+00:00) Lisbon":"Europe/Lisbon","(GMT+00:00) London":"Europe/London","(GMT+00:00) Monrovia":"Africa/Monrovia","(GMT+01:00) Algiers":"Africa/Algiers","(GMT+01:00) Amsterdam":"Europe/Amsterdam","(GMT+01:00) Berlin":"Europe/Berlin","(GMT+01:00) Brussels":"Europe/Brussels","(GMT+01:00) Budapest":"Europe/Budapest","(GMT+01:00) Central European Time - Belgrade":"Europe/Belgrade","(GMT+01:00) Central European Time - Prague":"Europe/Prague","(GMT+01:00) Copenhagen":"Europe/Copenhagen","(GMT+01:00) Madrid":"Europe/Madrid","(GMT+01:00) Paris":"Europe/Paris","(GMT+01:00) Rome":"Europe/Rome","(GMT+01:00) Stockholm":"Europe/Stockholm","(GMT+01:00) Vienna":"Europe/Vienna","(GMT+01:00) Warsaw":"Europe/Warsaw","(GMT+02:00) Athens":"Europe/Athens","(GMT+02:00) Bucharest":"Europe/Bucharest","(GMT+02:00) Cairo":"Africa/Cairo","(GMT+02:00) Jerusalem":"Asia/Jerusalem","(GMT+02:00) Johannesburg":"Africa/Johannesburg","(GMT+02:00) Helsinki":"Europe/Helsinki","(GMT+02:00) Kiev":"Europe/Kiev","(GMT+02:00) Moscow-01 - Kaliningrad":"Europe/Kaliningrad","(GMT+02:00) Riga":"Europe/Riga","(GMT+02:00) Sofia":"Europe/Sofia","(GMT+02:00) Tallinn":"Europe/Tallinn","(GMT+02:00) Vilnius":"Europe/Vilnius","(GMT+03:00) Istanbul":"Europe/Istanbul","(GMT+03:00) Baghdad":"Asia/Baghdad","(GMT+03:00) Nairobi":"Africa/Nairobi","(GMT+03:00) Minsk":"Europe/Minsk","(GMT+03:00) Riyadh":"Asia/Riyadh","(GMT+03:00) Moscow+00 - Moscow":"Europe/Moscow","(GMT+03:30) Tehran":"Asia/Tehran","(GMT+04:00) Baku":"Asia/Baku","(GMT+04:00) Moscow+01 - Samara":"Europe/Samara","(GMT+04:00) Tbilisi":"Asia/Tbilisi","(GMT+04:00) Yerevan":"Asia/Yerevan","(GMT+04:30) Kabul":"Asia/Kabul","(GMT+05:00) Karachi":"Asia/Karachi","(GMT+05:00) Moscow+02 - Yekaterinburg":"Asia/Yekaterinburg","(GMT+05:00) Tashkent":"Asia/Tashkent","(GMT+05:30) Colombo":"Asia/Colombo","(GMT+06:00) Almaty":"Asia/Almaty","(GMT+06:00) Dhaka":"Asia/Dhaka","(GMT+06:30) Rangoon":"Asia/Rangoon","(GMT+07:00) Bangkok":"Asia/Bangkok","(GMT+07:00) Jakarta":"Asia/Jakarta","(GMT+07:00) Moscow+04 - Krasnoyarsk":"Asia/Krasnoyarsk","(GMT+08:00) China Time - Beijing":"Asia/Shanghai","(GMT+08:00) Hong Kong":"Asia/Hong_Kong","(GMT+08:00) Kuala Lumpur":"Asia/Kuala_Lumpur","(GMT+08:00) Moscow+05 - Irkutsk":"Asia/Irkutsk","(GMT+08:00) Singapore":"Asia/Singapore","(GMT+08:00) Taipei":"Asia/Taipei","(GMT+08:00) Ulaanbaatar":"Asia/Ulaanbaatar","(GMT+08:00) Western Time - Perth":"Australia/Perth","(GMT+09:00) Moscow+06 - Yakutsk":"Asia/Yakutsk","(GMT+09:00) Seoul":"Asia/Seoul","(GMT+09:00) Tokyo":"Asia/Tokyo","(GMT+09:30) Central Time - Darwin":"Australia/Darwin","(GMT+10:00) Eastern Time - Brisbane":"Australia/Brisbane","(GMT+10:00) Guam":"Pacific/Guam","(GMT+10:00) Moscow+07 - Magadan":"Asia/Magadan","(GMT+10:00) Moscow+07 - Yuzhno-Sakhalinsk":"Asia/Vladivostok","(GMT+10:00) Port Moresby":"Pacific/Port_Moresby","(GMT+10:30) Central Time - Adelaide":"Australia/Adelaide","(GMT+11:00) Eastern Time - Hobart":"Australia/Hobart","(GMT+11:00) Eastern Time - Melbourne, Sydney":"Australia/Sydney","(GMT+11:00) Guadalcanal":"Pacific/Guadalcanal","(GMT+11:00) Noumea":"Pacific/Noumea","(GMT+12:00) Majuro":"Pacific/Majuro","(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy":"Asia/Kamchatka","(GMT+13:00) Auckland":"Pacific/Auckland","(GMT+13:00) Fakaofo":"Pacific/Fakaofo","(GMT+13:00) Fiji":"Pacific/Fiji","(GMT+13:00) Tongatapu":"Pacific/Tongatapu","(GMT+14:00) Apia":"Pacific/Apia"}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("react-bootstrap/lib/FormControl");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("react-dom");

/***/ })
/******/ ]);