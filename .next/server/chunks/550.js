"use strict";
exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 73906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(30935));
var _jsxRuntime = __webpack_require__(56786);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"
}), 'Casino');
exports.Z = _default;

/***/ }),

/***/ 71013:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(30935));
var _jsxRuntime = __webpack_require__(56786);
var _default = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m12 12.9-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07L12 12.9z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m16 6-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-.56-.79-.89-1.76-.89-2.8 0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5 0 1.02-.31 1.96-.85 2.75 1.89-1.15 3.29-3.06 3.71-5.3.66-3.55-1.07-6.9-3.86-8.52z"
}, "1")], 'LocalFireDepartment');
exports.Z = _default;

/***/ }),

/***/ 36415:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(30935));
var _jsxRuntime = __webpack_require__(56786);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z"
}), 'StarRate');
exports.Z = _default;

/***/ }),

/***/ 68144:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(14889));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _base = __webpack_require__(29923);
var _styles = __webpack_require__(76163);
var _styled = _interopRequireDefault(__webpack_require__(6720));
var _cardContentClasses = __webpack_require__(53794);
var _cardOverflowClasses = _interopRequireDefault(__webpack_require__(84696));
var _useSlot = _interopRequireDefault(__webpack_require__(34705));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "component", "children", "orientation", "slots", "slotProps"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return (0, _base.unstable_composeClasses)(slots, _cardContentClasses.getCardContentUtilityClass, {});
};
const CardContentRoot = (0, _styled.default)('div', {
  name: 'JoyCardContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => ({
  display: 'flex',
  flexDirection: ownerState.orientation === 'horizontal' ? 'row' : 'column',
  flex: 1,
  // fill the available space in the Card and also shrink if needed
  zIndex: 1,
  columnGap: 'calc(0.75 * var(--Card-padding))',
  padding: 'var(--unstable_padding)',
  [`.${_cardOverflowClasses.default.root} > &`]: {
    '--unstable_padding': 'calc(var(--Card-padding) * 0.75) 0px'
  }
}));
/**
 * ⚠️ CardContent must be used as a direct child of the [Card](https://mui.com/joy-ui/react-card/) component.
 *
 * Demos:
 *
 * - [Card](https://mui.com/joy-ui/react-card/)
 *
 * API:
 *
 * - [CardContent API](https://mui.com/joy-ui/api/card-content/)
 */
const CardContent = /*#__PURE__*/React.forwardRef(function CardContent(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyCardContent'
  });
  const {
      className,
      component = 'div',
      children,
      orientation = 'vertical',
      slots = {},
      slotProps = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const externalForwardedProps = (0, _extends2.default)({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = (0, _extends2.default)({}, props, {
    component,
    orientation
  });
  const classes = useUtilityClasses();
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: CardContentRoot,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, (0, _extends2.default)({}, rootProps, {
    children: children
  }));
});
 false ? 0 : void 0;
var _default = CardContent;
exports["default"] = _default;

/***/ }),

/***/ 22422:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 53794:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getCardContentUtilityClass = getCardContentUtilityClass;
var _className = __webpack_require__(28238);
function getCardContentUtilityClass(slot) {
  return (0, _className.generateUtilityClass)('MuiCardContent', slot);
}
const cardClasses = (0, _className.generateUtilityClasses)('MuiCardContent', ['root']);
var _default = cardClasses;
exports["default"] = _default;

/***/ }),

/***/ 58424:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  cardContentClasses: true
};
Object.defineProperty(exports, "cardContentClasses", ({
  enumerable: true,
  get: function () {
    return _cardContentClasses.default;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _CardContent.default;
  }
}));
var _CardContent = _interopRequireDefault(__webpack_require__(68144));
var _cardContentClasses = _interopRequireWildcard(__webpack_require__(53794));
Object.keys(_cardContentClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _cardContentClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cardContentClasses[key];
    }
  });
});
var _CardContentProps = __webpack_require__(22422);
Object.keys(_CardContentProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CardContentProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CardContentProps[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 64993:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(14889));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _base = __webpack_require__(29923);
var _styles = __webpack_require__(76163);
var _styled = _interopRequireDefault(__webpack_require__(6720));
var _cardCoverClasses = __webpack_require__(47378);
var _useSlot = _interopRequireDefault(__webpack_require__(34705));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "component", "children", "slots", "slotProps"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return (0, _base.unstable_composeClasses)(slots, _cardCoverClasses.getCardCoverUtilityClass, {});
};
const CardCoverRoot = (0, _styled.default)('div', {
  name: 'JoyCardCover',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  position: 'absolute',
  zIndex: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: 'var(--CardCover-radius)',
  // use data-attribute instead of :first-child to support zero config SSR (emotion)
  // use nested selector for integrating with nextjs image `fill` layout (spans are inserted on top of the img)
  '& [data-first-child]': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    boxSizing: 'border-box',
    borderRadius: 'var(--CardCover-radius)',
    margin: 0,
    padding: 0,
    '& > img': {
      // support art-direction that uses <picture><img /></picture>
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }
});
/**
 *
 * Demos:
 *
 * - [Card](https://mui.com/joy-ui/react-card/)
 *
 * API:
 *
 * - [CardCover API](https://mui.com/joy-ui/api/card-cover/)
 */
const CardCover = /*#__PURE__*/React.forwardRef(function CardCover(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyCardCover'
  });
  const {
      className,
      component = 'div',
      children,
      slots = {},
      slotProps = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    component
  });
  const classes = useUtilityClasses();
  const externalForwardedProps = (0, _extends2.default)({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: CardCoverRoot,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, (0, _extends2.default)({}, rootProps, {
    children: React.Children.map(children, (child, index) => index === 0 && /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
      'data-first-child': ''
    }) : child)
  }));
});
 false ? 0 : void 0;
var _default = CardCover;
exports["default"] = _default;

/***/ }),

/***/ 17353:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 47378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getCardCoverUtilityClass = getCardCoverUtilityClass;
var _className = __webpack_require__(28238);
function getCardCoverUtilityClass(slot) {
  return (0, _className.generateUtilityClass)('MuiCardCover', slot);
}
const cardCoverClasses = (0, _className.generateUtilityClasses)('MuiCardCover', ['root']);
var _default = cardCoverClasses;
exports["default"] = _default;

/***/ }),

/***/ 98535:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  cardCoverClasses: true
};
Object.defineProperty(exports, "cardCoverClasses", ({
  enumerable: true,
  get: function () {
    return _cardCoverClasses.default;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _CardCover.default;
  }
}));
var _CardCover = _interopRequireDefault(__webpack_require__(64993));
var _cardCoverClasses = _interopRequireWildcard(__webpack_require__(47378));
Object.keys(_cardCoverClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _cardCoverClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cardCoverClasses[key];
    }
  });
});
var _CardCoverProps = __webpack_require__(17353);
Object.keys(_CardCoverProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CardCoverProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CardCoverProps[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 84696:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getCardOverflowUtilityClass = getCardOverflowUtilityClass;
var _className = __webpack_require__(28238);
function getCardOverflowUtilityClass(slot) {
  return (0, _className.generateUtilityClass)('MuiCardOverflow', slot);
}
const aspectRatioClasses = (0, _className.generateUtilityClasses)('MuiCardOverflow', ['root', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorInfo', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid']);
var _default = aspectRatioClasses;
exports["default"] = _default;

/***/ }),

/***/ 93060:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(14889));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _base = __webpack_require__(29923);
var _utils = __webpack_require__(90480);
var _styles = __webpack_require__(76163);
var _styled = _interopRequireDefault(__webpack_require__(6720));
var _ColorInversion = __webpack_require__(86098);
var _cardClasses = __webpack_require__(149);
var _styleUtils = __webpack_require__(5149);
var _useSlot = _interopRequireDefault(__webpack_require__(34705));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "color", "component", "invertedColors", "size", "variant", "children", "orientation", "slots", "slotProps"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`, color && `color${(0, _utils.unstable_capitalize)(color)}`, size && `size${(0, _utils.unstable_capitalize)(size)}`]
  };
  return (0, _base.unstable_composeClasses)(slots, _cardClasses.getCardUtilityClass, {});
};
const CardRoot = (0, _styled.default)('div', {
  name: 'JoyCard',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$colorInversion;
  return [(0, _extends2.default)({
    // a context variable for any child component
    '--Card-childRadius': 'max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))',
    // AspectRatio integration
    '--AspectRatio-radius': 'var(--Card-childRadius)',
    // Link integration
    '--unstable_actionMargin': 'calc(-1 * var(--variant-borderWidth, 0px))',
    // Link, Radio, Checkbox integration
    '--unstable_actionRadius': (0, _styleUtils.resolveSxValue)({
      theme,
      ownerState
    }, 'borderRadius', 'var(--Card-radius)'),
    // CardCover integration
    '--CardCover-radius': 'calc(var(--Card-radius) - var(--variant-borderWidth, 0px))',
    // CardOverflow integration
    '--CardOverflow-offset': `calc(-1 * var(--Card-padding))`,
    '--CardOverflow-radius': 'calc(var(--Card-radius) - var(--variant-borderWidth, 0px))',
    // Divider integration
    '--Divider-inset': 'calc(-1 * var(--Card-padding))'
  }, ownerState.size === 'sm' && {
    '--Card-radius': theme.vars.radius.sm,
    '--Card-padding': '0.5rem',
    gap: '0.375rem 0.5rem'
  }, ownerState.size === 'md' && {
    '--Card-radius': theme.vars.radius.md,
    '--Card-padding': '1rem',
    gap: '0.75rem 1rem'
  }, ownerState.size === 'lg' && {
    '--Card-radius': theme.vars.radius.lg,
    '--Card-padding': '1.5rem',
    gap: '1rem 1.5rem'
  }, {
    padding: 'var(--Card-padding)',
    borderRadius: 'var(--Card-radius)',
    boxShadow: theme.shadow.sm,
    backgroundColor: theme.vars.palette.background.surface,
    fontFamily: theme.vars.fontFamily.body,
    fontSize: theme.vars.fontSize.md,
    position: 'relative',
    display: 'flex',
    flexDirection: ownerState.orientation === 'horizontal' ? 'row' : 'column'
  }), (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], ownerState.color !== 'context' && ownerState.invertedColors && ((_theme$colorInversion = theme.colorInversion[ownerState.variant]) == null ? void 0 : _theme$colorInversion[ownerState.color])];
});

/**
 *
 * Demos:
 *
 * - [Card](https://mui.com/joy-ui/react-card/)
 *
 * API:
 *
 * - [Card API](https://mui.com/joy-ui/api/card/)
 */
const Card = /*#__PURE__*/React.forwardRef(function Card(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'JoyCard'
  });
  const {
      className,
      color: colorProp = 'neutral',
      component = 'div',
      invertedColors = false,
      size = 'md',
      variant = 'plain',
      children,
      orientation = 'vertical',
      slots = {},
      slotProps = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    getColor
  } = (0, _ColorInversion.useColorInversion)(variant);
  const color = getColor(inProps.color, colorProp);
  const ownerState = (0, _extends2.default)({}, props, {
    color,
    component,
    orientation,
    size,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = (0, _extends2.default)({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: (0, _clsx.default)(classes.root, className),
    elementType: CardRoot,
    externalForwardedProps,
    ownerState
  });
  const result = /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotRoot, (0, _extends2.default)({}, rootProps, {
    children: React.Children.map(children, (child, index) => {
      if (! /*#__PURE__*/React.isValidElement(child)) {
        return child;
      }
      const extraProps = {};
      if ((0, _utils.unstable_isMuiElement)(child, ['Divider'])) {
        extraProps.inset = 'inset' in child.props ? child.props.inset : 'context';
        const dividerOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
        extraProps.orientation = 'orientation' in child.props ? child.props.orientation : dividerOrientation;
      }
      if ((0, _utils.unstable_isMuiElement)(child, ['CardOverflow'])) {
        if (orientation === 'horizontal') {
          extraProps['data-parent'] = 'Card-horizontal';
        }
        if (orientation === 'vertical') {
          extraProps['data-parent'] = 'Card-vertical';
        }
      }
      if (index === 0) {
        extraProps['data-first-child'] = '';
      }
      if (index === React.Children.count(children) - 1) {
        extraProps['data-last-child'] = '';
      }
      return /*#__PURE__*/React.cloneElement(child, extraProps);
    })
  }));
  if (invertedColors) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorInversion.ColorInversionProvider, {
      variant: variant,
      children: result
    });
  }
  return result;
});
 false ? 0 : void 0;
var _default = Card;
exports["default"] = _default;

/***/ }),

/***/ 32420:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 149:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getCardUtilityClass = getCardUtilityClass;
var _className = __webpack_require__(28238);
function getCardUtilityClass(slot) {
  return (0, _className.generateUtilityClass)('MuiCard', slot);
}
const cardClasses = (0, _className.generateUtilityClasses)('MuiCard', ['root', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorInfo', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'sizeSm', 'sizeMd', 'sizeLg', 'horizontal', 'vertical']);
var _default = cardClasses;
exports["default"] = _default;

/***/ }),

/***/ 39854:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  cardClasses: true
};
Object.defineProperty(exports, "cardClasses", ({
  enumerable: true,
  get: function () {
    return _cardClasses.default;
  }
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Card.default;
  }
}));
var _Card = _interopRequireDefault(__webpack_require__(93060));
var _cardClasses = _interopRequireWildcard(__webpack_require__(149));
Object.keys(_cardClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _cardClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cardClasses[key];
    }
  });
});
var _CardProps = __webpack_require__(32420);
Object.keys(_CardProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CardProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CardProps[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 16107:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.TypographyNestedContext = exports.TypographyInheritContext = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var _utils = __webpack_require__(90480);
var _system = __webpack_require__(47447);
var _composeClasses = _interopRequireDefault(__webpack_require__(2455));
var _styled = _interopRequireDefault(__webpack_require__(6720));
var _useThemeProps2 = _interopRequireDefault(__webpack_require__(82134));
var _ColorInversion = __webpack_require__(86098);
var _useSlot = _interopRequireDefault(__webpack_require__(34705));
var _typographyClasses = __webpack_require__(68414);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["color", "textColor"],
  _excluded2 = ["component", "gutterBottom", "noWrap", "level", "levelMapping", "children", "endDecorator", "startDecorator", "variant", "slots", "slotProps"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @internal
 * For creating nested Typography to have inherit level (unless an explicit `level` prop is provided)
 * and change the HTML tag to `span` (unless an explicit `component` prop is provided).
 */
const TypographyNestedContext = /*#__PURE__*/React.createContext(false);

/**
 * @internal
 * Typography's level will be inherit within this context unless an explicit `level` prop is provided.
 *
 * This is used in components, e.g. Table, to inherit the parent's size by default.
 */
exports.TypographyNestedContext = TypographyNestedContext;
const TypographyInheritContext = /*#__PURE__*/React.createContext(false);
exports.TypographyInheritContext = TypographyInheritContext;
const useUtilityClasses = ownerState => {
  const {
    gutterBottom,
    noWrap,
    level,
    color,
    variant
  } = ownerState;
  const slots = {
    root: ['root', level, gutterBottom && 'gutterBottom', noWrap && 'noWrap', color && `color${(0, _utils.unstable_capitalize)(color)}`, variant && `variant${(0, _utils.unstable_capitalize)(variant)}`],
    startDecorator: ['startDecorator'],
    endDecorator: ['endDecorator']
  };
  return (0, _composeClasses.default)(slots, _typographyClasses.getTypographyUtilityClass, {});
};
const StartDecorator = (0, _styled.default)('span', {
  name: 'JoyTypography',
  slot: 'StartDecorator',
  overridesResolver: (props, styles) => styles.startDecorator
})(({
  ownerState
}) => {
  var _ownerState$sx;
  return (0, _extends2.default)({
    display: 'inline-flex',
    marginInlineEnd: 'clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)'
  }, typeof ownerState.startDecorator !== 'string' && (ownerState.alignItems === 'flex-start' || ((_ownerState$sx = ownerState.sx) == null ? void 0 : _ownerState$sx.alignItems) === 'flex-start') && {
    marginTop: '2px' // this makes the alignment perfect in most cases
  });
});

const EndDecorator = (0, _styled.default)('span', {
  name: 'JoyTypography',
  slot: 'endDecorator',
  overridesResolver: (props, styles) => styles.endDecorator
})(({
  ownerState
}) => {
  var _ownerState$sx2;
  return (0, _extends2.default)({
    display: 'inline-flex',
    marginInlineStart: 'clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)'
  }, typeof ownerState.endDecorator !== 'string' && (ownerState.alignItems === 'flex-start' || ((_ownerState$sx2 = ownerState.sx) == null ? void 0 : _ownerState$sx2.alignItems) === 'flex-start') && {
    marginTop: '2px' // this makes the alignment perfect in most cases
  });
});

const TypographyRoot = (0, _styled.default)('span', {
  name: 'JoyTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$typography$own, _theme$typography$own2, _theme$vars$palette$o, _theme$variants$owner;
  return (0, _extends2.default)({
    '--Icon-fontSize': '1.25em',
    margin: 'var(--Typography-margin, 0px)'
  }, ownerState.nesting ? {
    display: 'inline' // looks better than `inline-block` when using with `variant` prop.
  } : {
    fontFamily: theme.vars.fontFamily.body,
    // for nested typography, the font family will be inheriting.
    display: 'block' // don't rely on user agent, always `block`.
  }, (ownerState.startDecorator || ownerState.endDecorator) && (0, _extends2.default)({
    display: 'flex',
    // should not be used as a default because it does not work well with `noWrap`.
    alignItems: 'center'
  }, ownerState.nesting && (0, _extends2.default)({
    display: 'inline-flex'
  }, ownerState.startDecorator && {
    verticalAlign: 'bottom' // to make the text align with the parent's content
  })), ownerState.level && ownerState.level !== 'inherit' && theme.typography[ownerState.level], {
    fontSize: `var(--Typography-fontSize, ${ownerState.level && ownerState.level !== 'inherit' ? (_theme$typography$own = (_theme$typography$own2 = theme.typography[ownerState.level]) == null ? void 0 : _theme$typography$own2.fontSize) != null ? _theme$typography$own : 'inherit' : 'inherit'})`
  }, ownerState.noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, ownerState.gutterBottom && {
    marginBottom: '0.35em'
  }, ownerState.color && ownerState.color !== 'context' && {
    color: `rgba(${(_theme$vars$palette$o = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette$o.mainChannel} / 1)`
  }, ownerState.variant && (0, _extends2.default)({
    borderRadius: theme.vars.radius.xs,
    paddingBlock: 'min(0.15em, 4px)',
    paddingInline: '0.375em'
  }, !ownerState.nesting && {
    marginInline: '-0.375em'
  }, (_theme$variants$owner = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants$owner[ownerState.color]));
});
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  display1: 'h1',
  display2: 'h2',
  body1: 'p',
  body2: 'p',
  body3: 'span',
  body4: 'span',
  body5: 'span',
  inherit: 'p'
};
/**
 *
 * Demos:
 *
 * - [Typography](https://mui.com/joy-ui/react-typography/)
 *
 * API:
 *
 * - [Typography API](https://mui.com/joy-ui/api/typography/)
 */
const Typography = /*#__PURE__*/React.forwardRef(function Typography(inProps, ref) {
  const _useThemeProps = (0, _useThemeProps2.default)({
      props: inProps,
      name: 'JoyTypography'
    }),
    {
      color: colorProp,
      textColor
    } = _useThemeProps,
    themeProps = (0, _objectWithoutPropertiesLoose2.default)(_useThemeProps, _excluded);
  const nesting = React.useContext(TypographyNestedContext);
  const inheriting = React.useContext(TypographyInheritContext);
  const props = (0, _system.unstable_extendSxProp)((0, _extends2.default)({}, themeProps, {
    color: textColor
  }));
  const {
      component: componentProp,
      gutterBottom = false,
      noWrap = false,
      level: levelProp = 'body1',
      levelMapping = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        body1: 'p',
        body2: 'p',
        body3: 'p',
        inherit: 'p'
      },
      children,
      endDecorator,
      startDecorator,
      variant,
      slots = {},
      slotProps = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded2);
  const {
    getColor
  } = (0, _ColorInversion.useColorInversion)(variant);
  const color = getColor(inProps.color, variant ? colorProp != null ? colorProp : 'neutral' : colorProp);
  const level = nesting || inheriting ? inProps.level || 'inherit' : levelProp;
  const component = componentProp || (nesting ? 'span' : levelMapping[level] || defaultVariantMapping[level] || 'span');
  const ownerState = (0, _extends2.default)({}, props, {
    level,
    component,
    color,
    gutterBottom,
    noWrap,
    nesting,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = (0, _extends2.default)({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = (0, _useSlot.default)('root', {
    ref,
    className: classes.root,
    elementType: TypographyRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = (0, _useSlot.default)('startDecorator', {
    className: classes.startDecorator,
    elementType: StartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = (0, _useSlot.default)('endDecorator', {
    className: classes.endDecorator,
    elementType: EndDecorator,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TypographyNestedContext.Provider, {
    value: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(SlotRoot, (0, _extends2.default)({}, rootProps, {
      children: [startDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotStartDecorator, (0, _extends2.default)({}, startDecoratorProps, {
        children: startDecorator
      })), children, endDecorator && /*#__PURE__*/(0, _jsxRuntime.jsx)(SlotEndDecorator, (0, _extends2.default)({}, endDecoratorProps, {
        children: endDecorator
      }))]
    }))
  });
});
 false ? 0 : void 0;
var _default = Typography;
exports["default"] = _default;

/***/ }),

/***/ 78012:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 41378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  typographyClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Typography.default;
  }
}));
Object.defineProperty(exports, "typographyClasses", ({
  enumerable: true,
  get: function () {
    return _typographyClasses.default;
  }
}));
var _Typography = _interopRequireDefault(__webpack_require__(16107));
var _TypographyProps = __webpack_require__(78012);
Object.keys(_TypographyProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TypographyProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TypographyProps[key];
    }
  });
});
var _typographyClasses = _interopRequireWildcard(__webpack_require__(68414));
Object.keys(_typographyClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _typographyClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _typographyClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 68414:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTypographyUtilityClass = getTypographyUtilityClass;
var _className = __webpack_require__(28238);
function getTypographyUtilityClass(slot) {
  return (0, _className.generateUtilityClass)('MuiTypography', slot);
}
const typographyClasses = (0, _className.generateUtilityClasses)('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'body3', 'noWrap', 'gutterBottom', 'startDecorator', 'endDecorator', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorInfo', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid']);
var _default = typographyClasses;
exports["default"] = _default;

/***/ }),

/***/ 28238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.generateUtilityClasses = exports.generateUtilityClass = void 0;
Object.defineProperty(exports, "unstable_ClassNameGenerator", ({
  enumerable: true,
  get: function () {
    return _utils.unstable_ClassNameGenerator;
  }
}));
var _utils = __webpack_require__(90480);
const generateUtilityClass = (componentName, slot) => (0, _utils.unstable_generateUtilityClass)(componentName, slot, 'Joy');
exports.generateUtilityClass = generateUtilityClass;
const generateUtilityClasses = (componentName, slots) => (0, _utils.unstable_generateUtilityClasses)(componentName, slots, 'Joy');
exports.generateUtilityClasses = generateUtilityClasses;

/***/ }),

/***/ 64629:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const colors = {
  grey: {
    50: '#F7F7F8',
    100: '#EBEBEF',
    200: '#D8D8DF',
    300: '#B9B9C6',
    400: '#8F8FA3',
    500: '#73738C',
    600: '#5A5A72',
    700: '#434356',
    800: '#25252D',
    900: '#131318'
  },
  blue: {
    50: '#F4FAFF',
    100: '#DDF1FF',
    200: '#ADDBFF',
    300: '#6FB6FF',
    400: '#3990FF',
    500: '#096BDE',
    600: '#054DA7',
    700: '#02367D',
    800: '#072859',
    900: '#00153C'
  },
  yellow: {
    50: '#FFF8C5',
    100: '#FAE17D',
    200: '#EAC54F',
    300: '#D4A72C',
    400: '#BF8700',
    500: '#9A6700',
    600: '#7D4E00',
    700: '#633C01',
    800: '#4D2D00',
    900: '#3B2300'
  },
  red: {
    50: '#FFF8F6',
    100: '#FFE9E8',
    200: '#FFC7C5',
    300: '#FF9192',
    400: '#FA5255',
    500: '#D3232F',
    600: '#A10E25',
    700: '#77061B',
    800: '#580013',
    900: '#39000D'
  },
  green: {
    50: '#F3FEF5',
    100: '#D7F5DD',
    200: '#77EC95',
    300: '#4CC76E',
    400: '#2CA24D',
    500: '#1A7D36',
    600: '#0F5D26',
    700: '#034318',
    800: '#002F0F',
    900: '#001D09'
  },
  purple: {
    50: '#FDF7FF',
    100: '#F4EAFF',
    200: '#E1CBFF',
    300: '#C69EFF',
    400: '#A374F9',
    500: '#814DDE',
    600: '#5F35AE',
    700: '#452382',
    800: '#301761',
    900: '#1D0A42'
  }
};
var _default = colors;
exports["default"] = _default;

/***/ }),

/***/ 97175:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _colors.default;
  }
}));
var _colors = _interopRequireDefault(__webpack_require__(64629));

/***/ }),

/***/ 86098:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ColorInversionProvider = ColorInversionProvider;
exports.useColorInversion = exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ThemeProvider = __webpack_require__(63226);
var _defaultTheme = _interopRequireDefault(__webpack_require__(99312));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ColorInversion = /*#__PURE__*/React.createContext(undefined);
const useColorInversion = childVariant => {
  const overridableVariants = React.useContext(ColorInversion);
  return {
    /**
     * Resolve the `color` value for the component.
     * @param {ColorPaletteProp | 'inherit' | undefined} instanceColorProp The color defined on the instance.
     * @param {ColorPaletteProp | 'inherit' | undefined} defaultColorProp The default color to use when variant inversion is not enabled.
     */
    getColor: (instanceColorProp, defaultColorProp) => {
      if (overridableVariants && childVariant) {
        if (overridableVariants.includes(childVariant)) {
          // @ts-ignore internal logic
          return instanceColorProp || 'context';
        }
      }
      // @ts-ignore internal logic
      return instanceColorProp || defaultColorProp;
    }
  };
};
exports.useColorInversion = useColorInversion;
function ColorInversionProvider({
  children,
  variant
}) {
  var _theme$colorInversion;
  const theme = (0, _ThemeProvider.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorInversion.Provider, {
    value: variant ?
    // `theme` could come from other emotion/styled-components context.
    ((_theme$colorInversion = theme.colorInversionConfig) != null ? _theme$colorInversion : _defaultTheme.default.colorInversionConfig)[variant] : undefined,
    children: children
  });
}
var _default = ColorInversion;
exports["default"] = _default;

/***/ }),

/***/ 54841:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useColorScheme = exports.getInitColorSchemeScript = exports.CssVarsProvider = void 0;
var _utils = __webpack_require__(90480);
var _system = __webpack_require__(47447);
var _defaultTheme = _interopRequireDefault(__webpack_require__(99312));
var _variantUtils = __webpack_require__(53363);
var _identifier = _interopRequireDefault(__webpack_require__(1577));
const {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} = (0, _system.unstable_createCssVarsProvider)({
  themeId: _identifier.default,
  theme: _defaultTheme.default,
  attribute: 'data-joy-color-scheme',
  modeStorageKey: 'joy-mode',
  colorSchemeStorageKey: 'joy-color-scheme',
  defaultColorScheme: {
    light: 'light',
    dark: 'dark'
  },
  resolveTheme: mergedTheme => {
    const colorInversionInput = mergedTheme.colorInversion;
    mergedTheme.colorInversion = (0, _utils.deepmerge)({
      soft: (0, _variantUtils.createSoftInversion)(mergedTheme),
      solid: (0, _variantUtils.createSolidInversion)(mergedTheme)
    }, typeof colorInversionInput === 'function' ? colorInversionInput(mergedTheme) : colorInversionInput, {
      clone: false
    });
    return mergedTheme;
  }
});
exports.getInitColorSchemeScript = getInitColorSchemeScript;
exports.useColorScheme = useColorScheme;
exports.CssVarsProvider = CssVarsProvider;

/***/ }),

/***/ 76478:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _system.StyledEngineProvider;
  }
}));
var _system = __webpack_require__(47447);

/***/ }),

/***/ 63226:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ThemeProvider;
exports.useTheme = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _system = __webpack_require__(47447);
var _defaultTheme = _interopRequireDefault(__webpack_require__(99312));
var _extendTheme = _interopRequireDefault(__webpack_require__(71014));
var _identifier = _interopRequireDefault(__webpack_require__(1577));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useTheme = () => {
  const theme = (0, _system.useTheme)(_defaultTheme.default);
  if (false) {}

  // @ts-ignore internal logic
  return theme[_identifier.default] || theme;
};
exports.useTheme = useTheme;
function ThemeProvider({
  children,
  theme: themeInput
}) {
  let theme = _defaultTheme.default;
  if (themeInput) {
    theme = (0, _extendTheme.default)(_identifier.default in themeInput ? themeInput[_identifier.default] : themeInput);
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_system.ThemeProvider, {
    theme: theme,
    themeId: themeInput && _identifier.default in themeInput ? _identifier.default : undefined,
    children: children
  });
}

/***/ }),

/***/ 99312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extendTheme = _interopRequireDefault(__webpack_require__(71014));
const defaultTheme = (0, _extendTheme.default)();
var _default = defaultTheme;
exports["default"] = _default;

/***/ }),

/***/ 71014:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createGetCssVar = void 0;
exports["default"] = extendTheme;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var _utils = __webpack_require__(90480);
var _system = __webpack_require__(47447);
var _sxConfig = _interopRequireDefault(__webpack_require__(62406));
var _colors = _interopRequireDefault(__webpack_require__(97175));
var _shouldSkipGeneratingVar = _interopRequireDefault(__webpack_require__(86103));
var _className = __webpack_require__(28238);
var _variantUtils = __webpack_require__(53363);
const _excluded = ["cssVarPrefix", "breakpoints", "spacing", "components", "variants", "colorInversion", "shouldSkipGeneratingVar"],
  _excluded2 = ["colorSchemes"];
// Use Partial2Level instead of PartialDeep because nested value type is CSSObject which does not work with PartialDeep.

const createGetCssVar = (cssVarPrefix = 'joy') => (0, _system.unstable_createGetCssVar)(cssVarPrefix);
exports.createGetCssVar = createGetCssVar;
function extendTheme(themeOptions) {
  var _scalesInput$focus$th, _scalesInput$focus, _scalesInput$focus$th2, _scalesInput$focus2, _scalesInput$colorSch, _scalesInput$colorSch2, _scalesInput$colorSch3, _scalesInput$colorSch4, _scalesInput$colorSch5, _scalesInput$colorSch6, _scalesInput$colorSch7, _scalesInput$colorSch8, _scalesInput$colorSch9, _scalesInput$colorSch10, _scalesInput$colorSch11, _scalesInput$colorSch12, _scalesInput$colorSch13, _scalesInput$colorSch14, _scalesInput$colorSch15, _scalesInput$colorSch16, _scalesInput$colorSch17, _scalesInput$colorSch18, _scalesInput$colorSch19, _scalesInput$colorSch20, _scalesInput$colorSch21, _scalesInput$colorSch22, _scalesInput$colorSch23, _scalesInput$colorSch24, _scalesInput$colorSch25, _scalesInput$colorSch26, _scalesInput$colorSch27, _scalesInput$colorSch28, _scalesInput$colorSch29, _scalesInput$colorSch30, _scalesInput$colorSch31, _scalesInput$colorSch32, _scalesInput$colorSch33, _scalesInput$colorSch34, _scalesInput$colorSch35, _scalesInput$colorSch36, _scalesInput$colorSch37, _scalesInput$colorSch38, _scalesInput$colorSch39, _scalesInput$colorSch40, _scalesInput$colorSch41, _scalesInput$colorSch42, _scalesInput$colorSch43, _scalesInput$colorSch44, _scalesInput$colorSch45, _scalesInput$colorSch46, _scalesInput$colorSch47, _scalesInput$colorSch48, _scalesInput$colorSch49, _scalesInput$colorSch50, _scalesInput$colorSch51, _scalesInput$colorSch52, _scalesInput$colorSch53, _scalesInput$colorSch54, _scalesInput$colorSch55, _scalesInput$colorSch56, _scalesInput$colorSch57, _scalesInput$colorSch58, _scalesInput$colorSch59, _scalesInput$colorSch60, _scalesInput$colorSch61, _scalesInput$colorSch62, _scalesInput$colorSch63, _scalesInput$colorSch64, _scalesInput$colorSch65, _scalesInput$colorSch66, _scalesInput$colorSch67, _scalesInput$colorSch68, _scalesInput$colorSch69, _scalesInput$colorSch70, _scalesInput$colorSch71, _scalesInput$colorSch72, _scalesInput$colorSch73, _scalesInput$colorSch74, _scalesInput$colorSch75, _scalesInput$colorSch76, _scalesInput$colorSch77, _scalesInput$colorSch78;
  const _ref = themeOptions || {},
    {
      cssVarPrefix = 'joy',
      breakpoints,
      spacing,
      components: componentsInput,
      variants: variantsInput,
      colorInversion: colorInversionInput,
      shouldSkipGeneratingVar = _shouldSkipGeneratingVar.default
    } = _ref,
    scalesInput = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const getCssVar = createGetCssVar(cssVarPrefix);
  const defaultColors = {
    primary: _colors.default.blue,
    neutral: _colors.default.grey,
    danger: _colors.default.red,
    info: _colors.default.purple,
    success: _colors.default.green,
    warning: _colors.default.yellow,
    common: {
      white: '#FFF',
      black: '#09090D'
    }
  };
  const getCssVarColor = cssVar => {
    var _defaultColors$color;
    const tokens = cssVar.split('-');
    const color = tokens[1];
    const index = tokens[2];

    // @ts-ignore
    return getCssVar(cssVar, (_defaultColors$color = defaultColors[color]) == null ? void 0 : _defaultColors$color[index]);
  };
  const createLightModeVariantVariables = color => ({
    plainColor: getCssVarColor(`palette-${color}-600`),
    plainHoverBg: getCssVarColor(`palette-${color}-100`),
    plainActiveBg: getCssVarColor(`palette-${color}-200`),
    plainDisabledColor: getCssVarColor(`palette-${color}-200`),
    outlinedColor: getCssVarColor(`palette-${color}-500`),
    outlinedBorder: getCssVarColor(`palette-${color}-200`),
    outlinedHoverBg: getCssVarColor(`palette-${color}-100`),
    outlinedHoverBorder: getCssVarColor(`palette-${color}-300`),
    outlinedActiveBg: getCssVarColor(`palette-${color}-200`),
    outlinedDisabledColor: getCssVarColor(`palette-${color}-100`),
    outlinedDisabledBorder: getCssVarColor(`palette-${color}-100`),
    softColor: getCssVarColor(`palette-${color}-600`),
    softBg: getCssVarColor(`palette-${color}-100`),
    softHoverBg: getCssVarColor(`palette-${color}-200`),
    softActiveBg: getCssVarColor(`palette-${color}-300`),
    softDisabledColor: getCssVarColor(`palette-${color}-300`),
    softDisabledBg: getCssVarColor(`palette-${color}-50`),
    solidColor: '#fff',
    solidBg: getCssVarColor(`palette-${color}-500`),
    solidHoverBg: getCssVarColor(`palette-${color}-600`),
    solidActiveBg: getCssVarColor(`palette-${color}-700`),
    solidDisabledColor: `#fff`,
    solidDisabledBg: getCssVarColor(`palette-${color}-200`)
  });
  const createDarkModeVariantVariables = color => ({
    plainColor: getCssVarColor(`palette-${color}-300`),
    plainHoverBg: getCssVarColor(`palette-${color}-800`),
    plainActiveBg: getCssVarColor(`palette-${color}-700`),
    plainDisabledColor: getCssVarColor(`palette-${color}-800`),
    outlinedColor: getCssVarColor(`palette-${color}-200`),
    outlinedBorder: getCssVarColor(`palette-${color}-700`),
    outlinedHoverBg: getCssVarColor(`palette-${color}-800`),
    outlinedHoverBorder: getCssVarColor(`palette-${color}-600`),
    outlinedActiveBg: getCssVarColor(`palette-${color}-900`),
    outlinedDisabledColor: getCssVarColor(`palette-${color}-800`),
    outlinedDisabledBorder: getCssVarColor(`palette-${color}-800`),
    softColor: getCssVarColor(`palette-${color}-200`),
    softBg: getCssVarColor(`palette-${color}-900`),
    softHoverBg: getCssVarColor(`palette-${color}-800`),
    softActiveBg: getCssVarColor(`palette-${color}-700`),
    softDisabledColor: getCssVarColor(`palette-${color}-800`),
    softDisabledBg: getCssVarColor(`palette-${color}-900`),
    solidColor: `#fff`,
    solidBg: getCssVarColor(`palette-${color}-600`),
    solidHoverBg: getCssVarColor(`palette-${color}-700`),
    solidActiveBg: getCssVarColor(`palette-${color}-800`),
    solidDisabledColor: getCssVarColor(`palette-${color}-700`),
    solidDisabledBg: getCssVarColor(`palette-${color}-900`)
  });
  const lightColorSystem = {
    palette: {
      mode: 'light',
      primary: (0, _extends2.default)({}, defaultColors.primary, createLightModeVariantVariables('primary')),
      neutral: (0, _extends2.default)({}, defaultColors.neutral, {
        plainColor: getCssVarColor(`palette-neutral-800`),
        plainHoverColor: getCssVarColor(`palette-neutral-900`),
        plainHoverBg: getCssVarColor(`palette-neutral-100`),
        plainActiveBg: getCssVarColor(`palette-neutral-200`),
        plainDisabledColor: getCssVarColor(`palette-neutral-300`),
        outlinedColor: getCssVarColor(`palette-neutral-800`),
        outlinedBorder: getCssVarColor(`palette-neutral-200`),
        outlinedHoverColor: getCssVarColor(`palette-neutral-900`),
        outlinedHoverBg: getCssVarColor(`palette-neutral-100`),
        outlinedHoverBorder: getCssVarColor(`palette-neutral-300`),
        outlinedActiveBg: getCssVarColor(`palette-neutral-200`),
        outlinedDisabledColor: getCssVarColor(`palette-neutral-300`),
        outlinedDisabledBorder: getCssVarColor(`palette-neutral-100`),
        softColor: getCssVarColor(`palette-neutral-800`),
        softBg: getCssVarColor(`palette-neutral-100`),
        softHoverColor: getCssVarColor(`palette-neutral-900`),
        softHoverBg: getCssVarColor(`palette-neutral-200`),
        softActiveBg: getCssVarColor(`palette-neutral-300`),
        softDisabledColor: getCssVarColor(`palette-neutral-300`),
        softDisabledBg: getCssVarColor(`palette-neutral-50`),
        solidColor: getCssVarColor(`palette-common-white`),
        solidBg: getCssVarColor(`palette-neutral-600`),
        solidHoverBg: getCssVarColor(`palette-neutral-700`),
        solidActiveBg: getCssVarColor(`palette-neutral-800`),
        solidDisabledColor: getCssVarColor(`palette-neutral-300`),
        solidDisabledBg: getCssVarColor(`palette-neutral-50`)
      }),
      danger: (0, _extends2.default)({}, defaultColors.danger, createLightModeVariantVariables('danger')),
      info: (0, _extends2.default)({}, defaultColors.info, createLightModeVariantVariables('info')),
      success: (0, _extends2.default)({}, defaultColors.success, createLightModeVariantVariables('success')),
      warning: (0, _extends2.default)({}, defaultColors.warning, createLightModeVariantVariables('warning'), {
        solidColor: getCssVarColor(`palette-warning-800`),
        solidBg: getCssVarColor(`palette-warning-200`),
        solidHoverBg: getCssVarColor(`palette-warning-300`),
        solidActiveBg: getCssVarColor(`palette-warning-400`),
        solidDisabledColor: getCssVarColor(`palette-warning-200`),
        solidDisabledBg: getCssVarColor(`palette-warning-50`),
        softColor: getCssVarColor(`palette-warning-800`),
        softBg: getCssVarColor(`palette-warning-50`),
        softHoverBg: getCssVarColor(`palette-warning-100`),
        softActiveBg: getCssVarColor(`palette-warning-200`),
        softDisabledColor: getCssVarColor(`palette-warning-200`),
        softDisabledBg: getCssVarColor(`palette-warning-50`),
        outlinedColor: getCssVarColor(`palette-warning-800`),
        outlinedHoverBg: getCssVarColor(`palette-warning-50`),
        plainColor: getCssVarColor(`palette-warning-800`),
        plainHoverBg: getCssVarColor(`palette-warning-50`)
      }),
      common: {
        white: '#FFF',
        black: '#09090D'
      },
      text: {
        primary: getCssVarColor('palette-neutral-800'),
        secondary: getCssVarColor('palette-neutral-600'),
        tertiary: getCssVarColor('palette-neutral-500')
      },
      background: {
        body: getCssVarColor('palette-common-white'),
        surface: getCssVarColor('palette-common-white'),
        popup: getCssVarColor('palette-common-white'),
        level1: getCssVarColor('palette-neutral-50'),
        level2: getCssVarColor('palette-neutral-100'),
        level3: getCssVarColor('palette-neutral-200'),
        tooltip: getCssVarColor('palette-neutral-800'),
        backdrop: 'rgba(255 255 255 / 0.5)'
      },
      divider: `rgba(${getCssVar('palette-neutral-mainChannel', (0, _system.colorChannel)(defaultColors.neutral[500]) // should be the same index as in `attachColorChannels`
      )} / 0.28)`,
      focusVisible: getCssVarColor('palette-primary-500')
    },
    shadowRing: '0 0 #000',
    shadowChannel: '187 187 187'
  };
  const darkColorSystem = {
    palette: {
      mode: 'dark',
      primary: (0, _extends2.default)({}, defaultColors.primary, createDarkModeVariantVariables('primary')),
      neutral: (0, _extends2.default)({}, defaultColors.neutral, {
        plainColor: getCssVarColor(`palette-neutral-200`),
        plainHoverColor: getCssVarColor(`palette-neutral-50`),
        plainHoverBg: getCssVarColor(`palette-neutral-800`),
        plainActiveBg: getCssVarColor(`palette-neutral-700`),
        plainDisabledColor: getCssVarColor(`palette-neutral-700`),
        outlinedColor: getCssVarColor(`palette-neutral-200`),
        outlinedBorder: getCssVarColor(`palette-neutral-800`),
        outlinedHoverColor: getCssVarColor(`palette-neutral-50`),
        outlinedHoverBg: getCssVarColor(`palette-neutral-800`),
        outlinedHoverBorder: getCssVarColor(`palette-neutral-700`),
        outlinedActiveBg: getCssVarColor(`palette-neutral-800`),
        outlinedDisabledColor: getCssVarColor(`palette-neutral-800`),
        outlinedDisabledBorder: getCssVarColor(`palette-neutral-800`),
        softColor: getCssVarColor(`palette-neutral-200`),
        softBg: getCssVarColor(`palette-neutral-800`),
        softHoverColor: getCssVarColor(`palette-neutral-50`),
        softHoverBg: getCssVarColor(`palette-neutral-700`),
        softActiveBg: getCssVarColor(`palette-neutral-600`),
        softDisabledColor: getCssVarColor(`palette-neutral-700`),
        softDisabledBg: getCssVarColor(`palette-neutral-900`),
        solidColor: getCssVarColor(`palette-common-white`),
        solidBg: getCssVarColor(`palette-neutral-600`),
        solidHoverBg: getCssVarColor(`palette-neutral-700`),
        solidActiveBg: getCssVarColor(`palette-neutral-800`),
        solidDisabledColor: getCssVarColor(`palette-neutral-700`),
        solidDisabledBg: getCssVarColor(`palette-neutral-900`)
      }),
      danger: (0, _extends2.default)({}, defaultColors.danger, createDarkModeVariantVariables('danger')),
      info: (0, _extends2.default)({}, defaultColors.info, createDarkModeVariantVariables('info')),
      success: (0, _extends2.default)({}, defaultColors.success, createDarkModeVariantVariables('success'), {
        solidColor: '#fff',
        solidBg: getCssVarColor(`palette-success-600`),
        solidHoverBg: getCssVarColor(`palette-success-700`),
        solidActiveBg: getCssVarColor(`palette-success-800`)
      }),
      warning: (0, _extends2.default)({}, defaultColors.warning, createDarkModeVariantVariables('warning'), {
        solidColor: getCssVarColor(`palette-common-black`),
        solidBg: getCssVarColor(`palette-warning-300`),
        solidHoverBg: getCssVarColor(`palette-warning-400`),
        solidActiveBg: getCssVarColor(`palette-warning-500`)
      }),
      common: {
        white: '#FFF',
        black: '#09090D'
      },
      text: {
        primary: getCssVarColor('palette-neutral-100'),
        secondary: getCssVarColor('palette-neutral-300'),
        tertiary: getCssVarColor('palette-neutral-400')
      },
      background: {
        body: getCssVarColor('palette-neutral-900'),
        surface: getCssVarColor('palette-common-black'),
        popup: getCssVarColor('palette-neutral-900'),
        level1: getCssVarColor('palette-neutral-800'),
        level2: getCssVarColor('palette-neutral-700'),
        level3: getCssVarColor('palette-neutral-600'),
        tooltip: getCssVarColor('palette-neutral-600'),
        backdrop: `rgba(${getCssVar('palette-neutral-darkChannel', (0, _system.colorChannel)(defaultColors.neutral[800]) // should be the same index as in `attachColorChannels`
        )} / 0.5)`
      },
      divider: `rgba(${getCssVar('palette-neutral-mainChannel', (0, _system.colorChannel)(defaultColors.neutral[500]) // should be the same index as in `attachColorChannels`
      )} / 0.24)`,
      focusVisible: getCssVarColor('palette-primary-500')
    },
    shadowRing: '0 0 #000',
    shadowChannel: '0 0 0'
  };
  const fontFamilyFallback = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  const fontFamily = (0, _extends2.default)({
    body: `"Public Sans", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
    display: `"Public Sans", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
    code: 'Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
    fallback: fontFamilyFallback
  }, scalesInput.fontFamily);
  const fontWeight = (0, _extends2.default)({
    xs: 200,
    sm: 300,
    md: 500,
    lg: 600,
    xl: 700,
    xl2: 800,
    xl3: 900
  }, scalesInput.fontWeight);
  const fontSize = (0, _extends2.default)({
    xs3: '0.5rem',
    xs2: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xl2: '1.5rem',
    xl3: '1.875rem',
    xl4: '2.25rem',
    xl5: '3rem',
    xl6: '3.75rem',
    xl7: '4.5rem'
  }, scalesInput.fontSize);
  const lineHeight = (0, _extends2.default)({
    sm: 1.25,
    md: 1.5,
    lg: 1.7
  }, scalesInput.lineHeight);
  const letterSpacing = (0, _extends2.default)({
    sm: '-0.01em',
    md: '0.083em',
    lg: '0.125em'
  }, scalesInput.letterSpacing);
  const defaultScales = {
    colorSchemes: {
      light: lightColorSystem,
      dark: darkColorSystem
    },
    fontSize,
    fontFamily,
    fontWeight,
    focus: {
      thickness: '2px',
      selector: `&.${(0, _className.generateUtilityClass)('', 'focusVisible')}, &:focus-visible`,
      default: {
        outlineOffset: `var(--focus-outline-offset, ${getCssVar('focus-thickness', (_scalesInput$focus$th = (_scalesInput$focus = scalesInput.focus) == null ? void 0 : _scalesInput$focus.thickness) != null ? _scalesInput$focus$th : '2px')})`,
        outline: `${getCssVar('focus-thickness', (_scalesInput$focus$th2 = (_scalesInput$focus2 = scalesInput.focus) == null ? void 0 : _scalesInput$focus2.thickness) != null ? _scalesInput$focus$th2 : '2px')} solid ${getCssVar('palette-focusVisible', defaultColors.primary[500])}`
      }
    },
    lineHeight,
    letterSpacing,
    radius: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px'
    },
    shadow: {
      xs: `${getCssVar('shadowRing', (_scalesInput$colorSch = (_scalesInput$colorSch2 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch3 = _scalesInput$colorSch2.light) == null ? void 0 : _scalesInput$colorSch3.shadowRing) != null ? _scalesInput$colorSch : lightColorSystem.shadowRing)}, 0 1px 2px 0 rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch4 = (_scalesInput$colorSch5 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch6 = _scalesInput$colorSch5.light) == null ? void 0 : _scalesInput$colorSch6.shadowChannel) != null ? _scalesInput$colorSch4 : lightColorSystem.shadowChannel)} / 0.12)`,
      sm: `${getCssVar('shadowRing', (_scalesInput$colorSch7 = (_scalesInput$colorSch8 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch9 = _scalesInput$colorSch8.light) == null ? void 0 : _scalesInput$colorSch9.shadowRing) != null ? _scalesInput$colorSch7 : lightColorSystem.shadowRing)}, 0.3px 0.8px 1.1px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch10 = (_scalesInput$colorSch11 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch12 = _scalesInput$colorSch11.light) == null ? void 0 : _scalesInput$colorSch12.shadowChannel) != null ? _scalesInput$colorSch10 : lightColorSystem.shadowChannel)} / 0.11), 0.5px 1.3px 1.8px -0.6px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch13 = (_scalesInput$colorSch14 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch15 = _scalesInput$colorSch14.light) == null ? void 0 : _scalesInput$colorSch15.shadowChannel) != null ? _scalesInput$colorSch13 : lightColorSystem.shadowChannel)} / 0.18), 1.1px 2.7px 3.8px -1.2px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch16 = (_scalesInput$colorSch17 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch18 = _scalesInput$colorSch17.light) == null ? void 0 : _scalesInput$colorSch18.shadowChannel) != null ? _scalesInput$colorSch16 : lightColorSystem.shadowChannel)} / 0.26)`,
      md: `${getCssVar('shadowRing', (_scalesInput$colorSch19 = (_scalesInput$colorSch20 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch21 = _scalesInput$colorSch20.light) == null ? void 0 : _scalesInput$colorSch21.shadowRing) != null ? _scalesInput$colorSch19 : lightColorSystem.shadowRing)}, 0.3px 0.8px 1.1px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch22 = (_scalesInput$colorSch23 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch24 = _scalesInput$colorSch23.light) == null ? void 0 : _scalesInput$colorSch24.shadowChannel) != null ? _scalesInput$colorSch22 : lightColorSystem.shadowChannel)} / 0.12), 1.1px 2.8px 3.9px -0.4px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch25 = (_scalesInput$colorSch26 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch27 = _scalesInput$colorSch26.light) == null ? void 0 : _scalesInput$colorSch27.shadowChannel) != null ? _scalesInput$colorSch25 : lightColorSystem.shadowChannel)} / 0.17), 2.4px 6.1px 8.6px -0.8px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch28 = (_scalesInput$colorSch29 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch30 = _scalesInput$colorSch29.light) == null ? void 0 : _scalesInput$colorSch30.shadowChannel) != null ? _scalesInput$colorSch28 : lightColorSystem.shadowChannel)} / 0.23), 5.3px 13.3px 18.8px -1.2px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch31 = (_scalesInput$colorSch32 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch33 = _scalesInput$colorSch32.light) == null ? void 0 : _scalesInput$colorSch33.shadowChannel) != null ? _scalesInput$colorSch31 : lightColorSystem.shadowChannel)} / 0.29)`,
      lg: `${getCssVar('shadowRing', (_scalesInput$colorSch34 = (_scalesInput$colorSch35 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch36 = _scalesInput$colorSch35.light) == null ? void 0 : _scalesInput$colorSch36.shadowRing) != null ? _scalesInput$colorSch34 : lightColorSystem.shadowRing)}, 0.3px 0.8px 1.1px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch37 = (_scalesInput$colorSch38 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch39 = _scalesInput$colorSch38.light) == null ? void 0 : _scalesInput$colorSch39.shadowChannel) != null ? _scalesInput$colorSch37 : lightColorSystem.shadowChannel)} / 0.11), 1.8px 4.5px 6.4px -0.2px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch40 = (_scalesInput$colorSch41 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch42 = _scalesInput$colorSch41.light) == null ? void 0 : _scalesInput$colorSch42.shadowChannel) != null ? _scalesInput$colorSch40 : lightColorSystem.shadowChannel)} / 0.13), 3.2px 7.9px 11.2px -0.4px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch43 = (_scalesInput$colorSch44 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch45 = _scalesInput$colorSch44.light) == null ? void 0 : _scalesInput$colorSch45.shadowChannel) != null ? _scalesInput$colorSch43 : lightColorSystem.shadowChannel)} / 0.16), 4.8px 12px 17px -0.5px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch46 = (_scalesInput$colorSch47 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch48 = _scalesInput$colorSch47.light) == null ? void 0 : _scalesInput$colorSch48.shadowChannel) != null ? _scalesInput$colorSch46 : lightColorSystem.shadowChannel)} / 0.19), 7px 17.5px 24.7px -0.7px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch49 = (_scalesInput$colorSch50 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch51 = _scalesInput$colorSch50.light) == null ? void 0 : _scalesInput$colorSch51.shadowChannel) != null ? _scalesInput$colorSch49 : lightColorSystem.shadowChannel)} / 0.21)`,
      xl: `${getCssVar('shadowRing', (_scalesInput$colorSch52 = (_scalesInput$colorSch53 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch54 = _scalesInput$colorSch53.light) == null ? void 0 : _scalesInput$colorSch54.shadowRing) != null ? _scalesInput$colorSch52 : lightColorSystem.shadowRing)}, 0.3px 0.8px 1.1px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch55 = (_scalesInput$colorSch56 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch57 = _scalesInput$colorSch56.light) == null ? void 0 : _scalesInput$colorSch57.shadowChannel) != null ? _scalesInput$colorSch55 : lightColorSystem.shadowChannel)} / 0.11), 1.8px 4.5px 6.4px -0.2px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch58 = (_scalesInput$colorSch59 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch60 = _scalesInput$colorSch59.light) == null ? void 0 : _scalesInput$colorSch60.shadowChannel) != null ? _scalesInput$colorSch58 : lightColorSystem.shadowChannel)} / 0.13), 3.2px 7.9px 11.2px -0.4px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch61 = (_scalesInput$colorSch62 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch63 = _scalesInput$colorSch62.light) == null ? void 0 : _scalesInput$colorSch63.shadowChannel) != null ? _scalesInput$colorSch61 : lightColorSystem.shadowChannel)} / 0.16), 4.8px 12px 17px -0.5px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch64 = (_scalesInput$colorSch65 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch66 = _scalesInput$colorSch65.light) == null ? void 0 : _scalesInput$colorSch66.shadowChannel) != null ? _scalesInput$colorSch64 : lightColorSystem.shadowChannel)} / 0.19), 7px 17.5px 24.7px -0.7px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch67 = (_scalesInput$colorSch68 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch69 = _scalesInput$colorSch68.light) == null ? void 0 : _scalesInput$colorSch69.shadowChannel) != null ? _scalesInput$colorSch67 : lightColorSystem.shadowChannel)} / 0.21), 10.2px 25.5px 36px -0.9px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch70 = (_scalesInput$colorSch71 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch72 = _scalesInput$colorSch71.light) == null ? void 0 : _scalesInput$colorSch72.shadowChannel) != null ? _scalesInput$colorSch70 : lightColorSystem.shadowChannel)} / 0.24), 14.8px 36.8px 52.1px -1.1px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch73 = (_scalesInput$colorSch74 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch75 = _scalesInput$colorSch74.light) == null ? void 0 : _scalesInput$colorSch75.shadowChannel) != null ? _scalesInput$colorSch73 : lightColorSystem.shadowChannel)} / 0.27), 21px 52.3px 74px -1.2px rgba(${getCssVar('shadowChannel', (_scalesInput$colorSch76 = (_scalesInput$colorSch77 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch78 = _scalesInput$colorSch77.light) == null ? void 0 : _scalesInput$colorSch78.shadowChannel) != null ? _scalesInput$colorSch76 : lightColorSystem.shadowChannel)} / 0.29)`
    },
    zIndex: {
      badge: 1,
      table: 10,
      popup: 1000,
      modal: 1300,
      tooltip: 1500
    },
    typography: {
      display1: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-xl, ${fontWeight.xl}`),
        fontSize: getCssVar(`fontSize-xl7, ${fontSize.xl7}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        letterSpacing: getCssVar(`letterSpacing-sm, ${letterSpacing.sm}`),
        color: getCssVar('palette-text-primary', lightColorSystem.palette.text.primary)
      },
      display2: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-xl, ${fontWeight.xl}`),
        fontSize: getCssVar(`fontSize-xl6, ${fontSize.xl6}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        letterSpacing: getCssVar(`letterSpacing-sm, ${letterSpacing.sm}`),
        color: getCssVar('palette-text-primary', lightColorSystem.palette.text.primary)
      },
      h1: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
        fontSize: getCssVar(`fontSize-xl5, ${fontSize.xl5}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        letterSpacing: getCssVar(`letterSpacing-sm, ${letterSpacing.sm}`),
        color: getCssVar('palette-text-primary', lightColorSystem.palette.text.primary)
      },
      h2: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
        fontSize: getCssVar(`fontSize-xl4, ${fontSize.xl4}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        letterSpacing: getCssVar(`letterSpacing-sm, ${letterSpacing.sm}`),
        color: getCssVar('palette-text-primary', lightColorSystem.palette.text.primary)
      },
      h3: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-xl3, ${fontSize.xl3}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        color: getCssVar('palette-text-primary', lightColorSystem.palette.text.primary)
      },
      h4: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-xl2, ${fontSize.xl2}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar('palette-text-primary', lightColorSystem.palette.text.primary)
      },
      h5: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-xl, ${fontSize.xl}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar('palette-text-primary', lightColorSystem.palette.text.primary)
      },
      h6: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-lg, ${fontSize.lg}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar('palette-text-primary', lightColorSystem.palette.text.primary)
      },
      body1: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-md, ${fontSize.md}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar('palette-text-primary', lightColorSystem.palette.text.primary)
      },
      body2: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-sm, ${fontSize.sm}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar('palette-text-secondary', lightColorSystem.palette.text.secondary)
      },
      body3: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-xs, ${fontSize.xs}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar('palette-text-tertiary', lightColorSystem.palette.text.tertiary)
      },
      body4: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-xs2, ${fontSize.xs2}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar('palette-text-tertiary', lightColorSystem.palette.text.tertiary)
      },
      body5: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-xs3, ${fontSize.xs3}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar('palette-text-tertiary', lightColorSystem.palette.text.tertiary)
      }
    }
  };
  const _ref2 = scalesInput ? (0, _utils.deepmerge)(defaultScales, scalesInput) : defaultScales,
    {
      colorSchemes
    } = _ref2,
    mergedScales = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  const theme = (0, _extends2.default)({
    colorSchemes
  }, mergedScales, {
    breakpoints: (0, _system.createBreakpoints)(breakpoints != null ? breakpoints : {}),
    components: (0, _utils.deepmerge)({
      // TODO: find a way to abstract SvgIcon out of @mui/material
      MuiSvgIcon: {
        defaultProps: {
          fontSize: 'xl'
        },
        styleOverrides: {
          root: ({
            ownerState,
            theme: themeProp
          }) => {
            var _themeProp$vars$palet;
            const instanceFontSize = ownerState.instanceFontSize;
            return (0, _extends2.default)({
              color: 'var(--Icon-color)',
              margin: 'var(--Icon-margin)'
            }, ownerState.fontSize && ownerState.fontSize !== 'inherit' && {
              fontSize: `var(--Icon-fontSize, ${themeProp.vars.fontSize[ownerState.fontSize]})`
            }, ownerState.color && ownerState.color !== 'inherit' && ownerState.color !== 'context' && themeProp.vars.palette[ownerState.color] && {
              color: `rgba(${(_themeProp$vars$palet = themeProp.vars.palette[ownerState.color]) == null ? void 0 : _themeProp$vars$palet.mainChannel} / 1)`
            }, ownerState.color === 'context' && {
              color: themeProp.vars.palette.text.secondary
            }, instanceFontSize && instanceFontSize !== 'inherit' && {
              '--Icon-fontSize': themeProp.vars.fontSize[instanceFontSize]
            });
          }
        }
      }
    }, componentsInput),
    cssVarPrefix,
    getCssVar,
    spacing: (0, _system.createSpacing)(spacing),
    colorInversionConfig: {
      soft: ['plain', 'outlined', 'soft', 'solid'],
      solid: ['plain', 'outlined', 'soft', 'solid']
    }
  }); // Need type casting due to module augmentation inside the repo

  /**
   Color channels generation
  */
  function attachColorChannels(supportedColorScheme, palette) {
    Object.keys(palette).forEach(key => {
      const channelMapping = {
        main: '500',
        light: '200',
        dark: '800'
      };
      if (supportedColorScheme === 'dark') {
        // @ts-ignore internal
        channelMapping.main = 400;
      }
      if (!palette[key].mainChannel && palette[key][channelMapping.main]) {
        palette[key].mainChannel = (0, _system.colorChannel)(palette[key][channelMapping.main]);
      }
      if (!palette[key].lightChannel && palette[key][channelMapping.light]) {
        palette[key].lightChannel = (0, _system.colorChannel)(palette[key][channelMapping.light]);
      }
      if (!palette[key].darkChannel && palette[key][channelMapping.dark]) {
        palette[key].darkChannel = (0, _system.colorChannel)(palette[key][channelMapping.dark]);
      }
    });
  }
  // Set the channels
  Object.entries(theme.colorSchemes).forEach(([supportedColorScheme, colorSystem]) => {
    attachColorChannels(supportedColorScheme, colorSystem.palette);
  });

  // ===============================================================
  // Create `theme.vars` that contain `var(--*)` as values
  // ===============================================================
  const parserConfig = {
    prefix: cssVarPrefix,
    shouldSkipGeneratingVar
  };
  const {
    vars: themeVars,
    generateCssVars
  } = (0, _system.unstable_prepareCssVars)( // @ts-ignore property truDark is missing from colorSchemes
  (0, _extends2.default)({
    colorSchemes
  }, mergedScales), parserConfig);
  theme.vars = themeVars;
  theme.generateCssVars = generateCssVars;
  theme.unstable_sxConfig = (0, _extends2.default)({}, _sxConfig.default, themeOptions == null ? void 0 : themeOptions.unstable_sxConfig);
  theme.unstable_sx = function sx(props) {
    return (0, _system.unstable_styleFunctionSx)({
      sx: props,
      theme: this
    });
  };
  theme.getColorSchemeSelector = colorScheme => colorScheme === 'light' ? '&' : `&[data-joy-color-scheme="${colorScheme}"], [data-joy-color-scheme="${colorScheme}"] &`;
  const createVariantInput = {
    getCssVar,
    palette: theme.colorSchemes.light.palette
  };
  theme.variants = (0, _utils.deepmerge)({
    plain: (0, _variantUtils.createVariant)('plain', createVariantInput),
    plainHover: (0, _variantUtils.createVariant)('plainHover', createVariantInput),
    plainActive: (0, _variantUtils.createVariant)('plainActive', createVariantInput),
    plainDisabled: (0, _variantUtils.createVariant)('plainDisabled', createVariantInput),
    outlined: (0, _variantUtils.createVariant)('outlined', createVariantInput),
    outlinedHover: (0, _variantUtils.createVariant)('outlinedHover', createVariantInput),
    outlinedActive: (0, _variantUtils.createVariant)('outlinedActive', createVariantInput),
    outlinedDisabled: (0, _variantUtils.createVariant)('outlinedDisabled', createVariantInput),
    soft: (0, _variantUtils.createVariant)('soft', createVariantInput),
    softHover: (0, _variantUtils.createVariant)('softHover', createVariantInput),
    softActive: (0, _variantUtils.createVariant)('softActive', createVariantInput),
    softDisabled: (0, _variantUtils.createVariant)('softDisabled', createVariantInput),
    solid: (0, _variantUtils.createVariant)('solid', createVariantInput),
    solidHover: (0, _variantUtils.createVariant)('solidHover', createVariantInput),
    solidActive: (0, _variantUtils.createVariant)('solidActive', createVariantInput),
    solidDisabled: (0, _variantUtils.createVariant)('solidDisabled', createVariantInput)
  }, variantsInput);
  theme.palette = (0, _extends2.default)({}, theme.colorSchemes.light.palette, {
    colorScheme: 'light'
  });
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar;

  // @ts-ignore if the colorInversion is provided as callbacks, it needs to be resolved in the CssVarsProvider
  theme.colorInversion = typeof colorInversionInput === 'function' ? colorInversionInput : (0, _utils.deepmerge)({
    soft: (0, _variantUtils.createSoftInversion)(theme, true),
    solid: (0, _variantUtils.createSolidInversion)(theme, true)
  }, colorInversionInput || {}, {
    clone: false
  });
  return theme;
}

/***/ }),

/***/ 1577:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '$$joy';
exports["default"] = _default;

/***/ }),

/***/ 76163:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

// reexports from system for module augmentation
var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  THEME_ID: true,
  CssVarsProvider: true,
  useColorScheme: true,
  getInitColorSchemeScript: true,
  shouldSkipGeneratingVar: true,
  styled: true,
  ThemeProvider: true,
  useThemeProps: true,
  ColorInversionProvider: true,
  useColorInversion: true,
  extendTheme: true,
  createGetCssVar: true,
  StyledEngineProvider: true
};
Object.defineProperty(exports, "ColorInversionProvider", ({
  enumerable: true,
  get: function () {
    return _ColorInversion.ColorInversionProvider;
  }
}));
Object.defineProperty(exports, "CssVarsProvider", ({
  enumerable: true,
  get: function () {
    return _CssVarsProvider.CssVarsProvider;
  }
}));
Object.defineProperty(exports, "StyledEngineProvider", ({
  enumerable: true,
  get: function () {
    return _StyledEngineProvider.default;
  }
}));
Object.defineProperty(exports, "THEME_ID", ({
  enumerable: true,
  get: function () {
    return _identifier.default;
  }
}));
Object.defineProperty(exports, "ThemeProvider", ({
  enumerable: true,
  get: function () {
    return _ThemeProvider.default;
  }
}));
Object.defineProperty(exports, "createGetCssVar", ({
  enumerable: true,
  get: function () {
    return _extendTheme.createGetCssVar;
  }
}));
Object.defineProperty(exports, "extendTheme", ({
  enumerable: true,
  get: function () {
    return _extendTheme.default;
  }
}));
Object.defineProperty(exports, "getInitColorSchemeScript", ({
  enumerable: true,
  get: function () {
    return _CssVarsProvider.getInitColorSchemeScript;
  }
}));
Object.defineProperty(exports, "shouldSkipGeneratingVar", ({
  enumerable: true,
  get: function () {
    return _shouldSkipGeneratingVar.default;
  }
}));
Object.defineProperty(exports, "styled", ({
  enumerable: true,
  get: function () {
    return _styled.default;
  }
}));
Object.defineProperty(exports, "useColorInversion", ({
  enumerable: true,
  get: function () {
    return _ColorInversion.useColorInversion;
  }
}));
Object.defineProperty(exports, "useColorScheme", ({
  enumerable: true,
  get: function () {
    return _CssVarsProvider.useColorScheme;
  }
}));
Object.defineProperty(exports, "useThemeProps", ({
  enumerable: true,
  get: function () {
    return _useThemeProps.default;
  }
}));
var _identifier = _interopRequireDefault(__webpack_require__(1577));
var _CssVarsProvider = __webpack_require__(54841);
var _shouldSkipGeneratingVar = _interopRequireDefault(__webpack_require__(86103));
var _styled = _interopRequireDefault(__webpack_require__(6720));
var _ThemeProvider = _interopRequireWildcard(__webpack_require__(63226));
Object.keys(_ThemeProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ThemeProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ThemeProvider[key];
    }
  });
});
var _useThemeProps = _interopRequireDefault(__webpack_require__(82134));
var _ColorInversion = __webpack_require__(86098);
var _extendTheme = _interopRequireWildcard(__webpack_require__(71014));
var _StyledEngineProvider = _interopRequireDefault(__webpack_require__(76478));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 86103:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = shouldSkipGeneratingVar;
function shouldSkipGeneratingVar(keys) {
  var _keys$;
  return !!keys[0].match(/^(typography|variants|breakpoints|colorInversion|colorInversionConfig)$/) || !!keys[0].match(/sxConfig$/) ||
  // ends with sxConfig
  keys[0] === 'palette' && !!((_keys$ = keys[1]) != null && _keys$.match(/^(mode)$/)) || keys[0] === 'focus' && keys[1] !== 'thickness';
}

/***/ }),

/***/ 5149:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resolveSxValue = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
/**
 * internal utility
 */
// eslint-disable-next-line import/prefer-default-export
const resolveSxValue = ({
  theme,
  ownerState
}, key, defaultValue) => {
  let parsedValue;
  let sxObject = {};
  function resolveSx(sxProp) {
    if (typeof sxProp === 'function') {
      const result = sxProp(theme);
      resolveSx(result);
    } else if (Array.isArray(sxProp)) {
      sxProp.forEach(sxItem => {
        if (typeof sxItem !== 'boolean') {
          resolveSx(sxItem);
        }
      });
    } else if (typeof sxProp === 'object') {
      sxObject = (0, _extends2.default)({}, sxObject, sxProp);
    }
  }
  if (ownerState.sx) {
    resolveSx(ownerState.sx);
    const value = sxObject[key];
    if (typeof value === 'string' || typeof value === 'number') {
      if (key === 'borderRadius') {
        var _theme$vars;
        if (typeof value === 'number') {
          return `${value}px`;
        }
        parsedValue = ((_theme$vars = theme.vars) == null ? void 0 : _theme$vars.radius[value]) || value;
      } else {
        parsedValue = value;
      }
    }
    if (typeof value === 'function') {
      parsedValue = value(theme);
    }
  }
  return parsedValue || defaultValue;
};
exports.resolveSxValue = resolveSxValue;

/***/ }),

/***/ 6720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _system = __webpack_require__(47447);
var _defaultTheme = _interopRequireDefault(__webpack_require__(99312));
var _identifier = _interopRequireDefault(__webpack_require__(1577));
const styled = (0, _system.createStyled)({
  defaultTheme: _defaultTheme.default,
  themeId: _identifier.default
});
var _default = styled;
exports["default"] = _default;

/***/ }),

/***/ 62406:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _system = __webpack_require__(47447);
const sxConfig = (0, _extends2.default)({}, _system.unstable_defaultSxConfig, {
  // The default system themeKey is shape
  borderRadius: {
    themeKey: 'radius'
  },
  // The default system themeKey is shadows
  boxShadow: {
    themeKey: 'shadow'
  },
  // The default system themeKey is typography
  fontFamily: {
    themeKey: 'fontFamily'
  },
  // The default system themeKey is typography
  fontSize: {
    themeKey: 'fontSize'
  },
  // The default system themeKey is typography
  fontWeight: {
    themeKey: 'fontWeight'
  },
  // The default system themeKey is typography
  letterSpacing: {
    themeKey: 'letterSpacing'
  },
  // The default system themeKey is typography
  lineHeight: {
    themeKey: 'lineHeight'
  }
});
var _default = sxConfig;
exports["default"] = _default;

/***/ }),

/***/ 82134:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useThemeProps;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _system = __webpack_require__(47447);
var _defaultTheme = _interopRequireDefault(__webpack_require__(99312));
var _identifier = _interopRequireDefault(__webpack_require__(1577));
function useThemeProps({
  props,
  name
}) {
  return (0, _system.useThemeProps)({
    props,
    name,
    defaultTheme: (0, _extends2.default)({}, _defaultTheme.default, {
      components: {}
    }),
    themeId: _identifier.default
  });
}

/***/ }),

/***/ 53363:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isVariantPalette = exports.createVariantStyle = exports.createVariant = exports.createSolidInversion = exports.createSoftInversion = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _system = __webpack_require__(47447);
const isVariantPalette = colorPalette => colorPalette && typeof colorPalette === 'object' && Object.keys(colorPalette).some(value => {
  var _value$match;
  return (_value$match = value.match) == null ? void 0 : _value$match.call(value, /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/);
});
exports.isVariantPalette = isVariantPalette;
const assignCss = (target, variantVar, value) => {
  if (variantVar.includes('Color')) {
    target.color = value;
  }
  if (variantVar.includes('Bg')) {
    target.backgroundColor = value;
  }
  if (variantVar.includes('Border')) {
    target.borderColor = value;
  }
};

/**
 *
 * @param name variant name
 * @example 'plain'
 *
 * @param palette object that contains palette tokens
 * @example { primary: { plainColor: '', plainHoverColor: '', ...tokens }, ...other palette }
 *
 * @param getCssVar a function that receive variant token and return a CSS variable
 *
 * result will be the stylesheet based on the palette tokens
 * @example {
 *   color: '--token',
 *   backgroundColor: '--token',
 *   '--variant-borderWidth': '0px',
 * }
 * @example {
 *   cursor: 'pointer',
 *   color: '--token',
 *   backgroundColor: '--token',
 *   '--variant-borderWidth': '1px',
 * }
 * @example {
 *   pointerEvents: 'none',
 *   cursor: 'default',
 *   color: '--token',
 *   backgroundColor: '--token',
 *   '--variant-borderWidth': '0px',
 * }
 */
const createVariantStyle = (name, palette, getCssVar) => {
  const result = {};
  Object.entries(palette || {}).forEach(([variantVar, value]) => {
    if (variantVar.match(new RegExp(`${name}(color|bg|border)`, 'i')) && !!value) {
      const cssVar = getCssVar ? getCssVar(variantVar) : value;
      if (variantVar.includes('Disabled')) {
        result.pointerEvents = 'none';
        result.cursor = 'default';
      }
      if (variantVar.match(/(Hover|Active|Disabled)/)) {
        assignCss(result, variantVar, cssVar);
      } else {
        // initial state
        if (!result['--variant-borderWidth']) {
          // important to prevent inheritance, otherwise the children will have the wrong styles e.g.
          //   <Card variant="outlined">
          //     <Typography variant="soft">
          result['--variant-borderWidth'] = '0px';
        }
        if (variantVar.includes('Border')) {
          result['--variant-borderWidth'] = '1px';
          result.border = 'var(--variant-borderWidth) solid';
        }
        // border color should come later
        assignCss(result, variantVar, cssVar);
      }
    }
  });
  return result;
};
exports.createVariantStyle = createVariantStyle;
const createPrefixVar = cssVarPrefix => {
  return cssVar => `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}${cssVar.replace(/^--/, '')}`;
};

// It's used only in extendTheme, so it's safe to always include default values
const createVariant = (variant, theme) => {
  let result = {};
  if (theme) {
    const {
      getCssVar,
      palette
    } = theme;
    Object.entries(palette).forEach(entry => {
      const [color, colorPalette] = entry;
      if (isVariantPalette(colorPalette) && typeof colorPalette === 'object') {
        result = (0, _extends2.default)({}, result, {
          [color]: createVariantStyle(variant, colorPalette, variantVar => getCssVar(`palette-${color}-${variantVar}`, palette[color][variantVar]))
        });
      }
    });
  }
  result.context = createVariantStyle(variant, {
    plainColor: 'var(--variant-plainColor)',
    plainHoverColor: `var(--variant-plainHoverColor)`,
    plainHoverBg: 'var(--variant-plainHoverBg)',
    plainActiveBg: 'var(--variant-plainActiveBg)',
    plainDisabledColor: 'var(--variant-plainDisabledColor)',
    outlinedColor: 'var(--variant-outlinedColor)',
    outlinedBorder: 'var(--variant-outlinedBorder)',
    outlinedHoverColor: `var(--variant-outlinedHoverColor)`,
    outlinedHoverBorder: `var(--variant-outlinedHoverBorder)`,
    outlinedHoverBg: `var(--variant-outlinedHoverBg)`,
    outlinedActiveBg: `var(--variant-outlinedActiveBg)`,
    outlinedDisabledColor: `var(--variant-outlinedDisabledColor)`,
    outlinedDisabledBorder: `var(--variant-outlinedDisabledBorder)`,
    softColor: 'var(--variant-softColor)',
    softBg: 'var(--variant-softBg)',
    softHoverColor: 'var(--variant-softHoverColor)',
    softHoverBg: 'var(--variant-softHoverBg)',
    softActiveBg: 'var(--variant-softActiveBg)',
    softDisabledColor: 'var(--variant-softDisabledColor)',
    softDisabledBg: 'var(--variant-softDisabledBg)',
    solidColor: 'var(--variant-solidColor)',
    solidBg: 'var(--variant-solidBg)',
    solidHoverColor: 'var(--variant-solidHoverColor)',
    solidHoverBg: 'var(--variant-solidHoverBg)',
    solidActiveBg: 'var(--variant-solidActiveBg)',
    solidDisabledColor: 'var(--variant-solidDisabledColor)',
    solidDisabledBg: 'var(--variant-solidDisabledBg)'
  });
  return result;
};
exports.createVariant = createVariant;
const createSoftInversion = (theme, addDefaultValues) => {
  const getCssVarDefault = (0, _system.unstable_createGetCssVar)(theme.cssVarPrefix);
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  const result = {};
  const getCssVar = addDefaultValues ? cssVar => {
    var _theme$palette, _theme$palette$color;
    const tokens = cssVar.split('-');
    const color = tokens[1];
    const value = tokens[2];
    return getCssVarDefault(cssVar, (_theme$palette = theme.palette) == null ? void 0 : (_theme$palette$color = _theme$palette[color]) == null ? void 0 : _theme$palette$color[value]);
  } : getCssVarDefault;
  Object.entries(theme.palette).forEach(entry => {
    const [color, colorPalette] = entry;
    if (isVariantPalette(colorPalette)) {
      result[color] = {
        '--Badge-ringColor': getCssVar(`palette-${color}-softBg`),
        [prefixVar('--shadowChannel')]: getCssVar(`palette-${color}-darkChannel`),
        [theme.getColorSchemeSelector('dark')]: {
          [prefixVar('--palette-focusVisible')]: getCssVar(`palette-${color}-300`),
          [prefixVar('--palette-background-body')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
          [prefixVar('--palette-background-surface')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          [prefixVar('--palette-background-level1')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          [prefixVar('--palette-background-level2')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
          [prefixVar('--palette-background-level3')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          [prefixVar('--palette-text-primary')]: getCssVar(`palette-${color}-100`),
          [prefixVar('--palette-text-secondary')]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          [prefixVar('--palette-text-tertiary')]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.6)`,
          [prefixVar('--palette-divider')]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.2)`,
          '--variant-plainColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
          '--variant-plainHoverColor': getCssVar(`palette-${color}-50`),
          '--variant-plainHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
          '--variant-plainActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          '--variant-plainDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-outlinedColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
          '--variant-outlinedHoverColor': getCssVar(`palette-${color}-50`),
          '--variant-outlinedBg': 'initial',
          '--variant-outlinedBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
          '--variant-outlinedHoverBorder': getCssVar(`palette-${color}-600`),
          '--variant-outlinedHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
          '--variant-outlinedActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          '--variant-outlinedDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-outlinedDisabledBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          '--variant-softColor': getCssVar(`palette-${color}-100`),
          '--variant-softBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
          '--variant-softHoverColor': '#fff',
          '--variant-softHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          '--variant-softActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
          '--variant-softDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-softDisabledBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-solidColor': '#fff',
          '--variant-solidBg': getCssVar(`palette-${color}-500`),
          '--variant-solidHoverColor': '#fff',
          '--variant-solidHoverBg': getCssVar(`palette-${color}-400`),
          '--variant-solidActiveBg': getCssVar(`palette-${color}-400`),
          '--variant-solidDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-solidDisabledBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`
        },
        // `light` (default color scheme) should come last in case that `theme.getColorSchemeSelector()` return the same value
        [theme.getColorSchemeSelector('light')]: {
          [prefixVar('--palette-focusVisible')]: getCssVar(`palette-${color}-500`),
          [prefixVar('--palette-background-body')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
          [prefixVar('--palette-background-surface')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          [prefixVar('--palette-background-level1')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          [prefixVar('--palette-background-level2')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          [prefixVar('--palette-background-level3')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
          [prefixVar('--palette-text-primary')]: getCssVar(`palette-${color}-700`),
          [prefixVar('--palette-text-secondary')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
          [prefixVar('--palette-text-tertiary')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.68)`,
          [prefixVar('--palette-divider')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          '--variant-plainColor': `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
          '--variant-plainHoverColor': `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 1)`,
          '--variant-plainHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-plainActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
          '--variant-plainDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          '--variant-outlinedColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 1)`,
          '--variant-outlinedBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
          '--variant-outlinedHoverColor': getCssVar(`palette-${color}-600`),
          '--variant-outlinedHoverBorder': getCssVar(`palette-${color}-300`),
          '--variant-outlinedHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-outlinedActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
          '--variant-outlinedDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          '--variant-outlinedDisabledBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-softColor': getCssVar(`palette-${color}-600`),
          '--variant-softBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          '--variant-softHoverColor': getCssVar(`palette-${color}-700`),
          '--variant-softHoverBg': getCssVar(`palette-${color}-200`),
          '--variant-softActiveBg': getCssVar(`palette-${color}-300`),
          '--variant-softDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          '--variant-softDisabledBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          '--variant-solidColor': getCssVar('palette-common-white'),
          '--variant-solidBg': getCssVar(`palette-${color}-600`),
          '--variant-solidHoverColor': getCssVar('palette-common-white'),
          '--variant-solidHoverBg': getCssVar(`palette-${color}-500`),
          '--variant-solidActiveBg': getCssVar(`palette-${color}-500`),
          '--variant-solidDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          '--variant-solidDisabledBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`
        }
      };
    }
  });
  return result;
};
exports.createSoftInversion = createSoftInversion;
const createSolidInversion = (theme, addDefaultValues) => {
  const getCssVarDefault = (0, _system.unstable_createGetCssVar)(theme.cssVarPrefix);
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  const result = {};
  const getCssVar = addDefaultValues ? cssVar => {
    const tokens = cssVar.split('-');
    const color = tokens[1];
    const value = tokens[2];
    return getCssVarDefault(cssVar, theme.palette[color][value]);
  } : getCssVarDefault;
  Object.entries(theme.palette).forEach(entry => {
    const [color, colorPalette] = entry;
    if (isVariantPalette(colorPalette)) {
      if (color === 'warning') {
        result.warning = {
          '--Badge-ringColor': getCssVar(`palette-${color}-solidBg`),
          [prefixVar('--shadowChannel')]: getCssVar(`palette-${color}-darkChannel`),
          [prefixVar('--palette-focusVisible')]: getCssVar(`palette-${color}-700`),
          [prefixVar('--palette-background-body')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.16)`,
          [prefixVar('--palette-background-surface')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.1)`,
          [prefixVar('--palette-background-popup')]: getCssVar(`palette-${color}-100`),
          [prefixVar('--palette-background-level1')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.2)`,
          [prefixVar('--palette-background-level2')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.36)`,
          [prefixVar('--palette-background-level3')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.6)`,
          [prefixVar('--palette-text-primary')]: getCssVar(`palette-${color}-900`),
          [prefixVar('--palette-text-secondary')]: getCssVar(`palette-${color}-700`),
          [prefixVar('--palette-text-tertiary')]: getCssVar(`palette-${color}-500`),
          [prefixVar('--palette-divider')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.2)`,
          '--variant-plainColor': getCssVar(`palette-${color}-700`),
          '--variant-plainHoverColor': getCssVar(`palette-${color}-800`),
          '--variant-plainHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-plainActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          '--variant-plainDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-outlinedColor': getCssVar(`palette-${color}-700`),
          '--variant-outlinedBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.5)`,
          '--variant-outlinedHoverColor': getCssVar(`palette-${color}-800`),
          '--variant-outlinedHoverBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          '--variant-outlinedHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-outlinedActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          '--variant-outlinedDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-outlinedDisabledBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          '--variant-softColor': getCssVar(`palette-${color}-800`),
          '--variant-softHoverColor': getCssVar(`palette-${color}-900`),
          '--variant-softBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          '--variant-softHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.28)`,
          '--variant-softActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-softDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-softDisabledBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          '--variant-solidColor': '#fff',
          '--variant-solidBg': getCssVar(`palette-${color}-600`),
          '--variant-solidHoverColor': '#fff',
          '--variant-solidHoverBg': getCssVar(`palette-${color}-700`),
          '--variant-solidActiveBg': getCssVar(`palette-${color}-800`),
          '--variant-solidDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-solidDisabledBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`
        };
      } else {
        result[color] = {
          colorScheme: 'dark',
          '--Badge-ringColor': getCssVar(`palette-${color}-solidBg`),
          [prefixVar('--shadowChannel')]: getCssVar(`palette-${color}-darkChannel`),
          [prefixVar('--palette-focusVisible')]: getCssVar(`palette-${color}-200`),
          [prefixVar('--palette-background-body')]: 'rgba(0 0 0 / 0.1)',
          [prefixVar('--palette-background-surface')]: 'rgba(0 0 0 / 0.06)',
          [prefixVar('--palette-background-popup')]: getCssVar(`palette-${color}-700`),
          [prefixVar('--palette-background-level1')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.2)`,
          [prefixVar('--palette-background-level2')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.36)`,
          [prefixVar('--palette-background-level3')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.6)`,
          [prefixVar('--palette-text-primary')]: getCssVar(`palette-common-white`),
          [prefixVar('--palette-text-secondary')]: getCssVar(`palette-${color}-100`),
          [prefixVar('--palette-text-tertiary')]: getCssVar(`palette-${color}-200`),
          [prefixVar('--palette-divider')]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
          '--variant-plainColor': getCssVar(`palette-${color}-50`),
          '--variant-plainHoverColor': `#fff`,
          '--variant-plainHoverBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
          '--variant-plainActiveBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
          '--variant-plainDisabledColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          '--variant-outlinedColor': getCssVar(`palette-${color}-50`),
          '--variant-outlinedBorder': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.5)`,
          '--variant-outlinedHoverColor': `#fff`,
          '--variant-outlinedHoverBorder': getCssVar(`palette-${color}-300`),
          '--variant-outlinedHoverBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
          '--variant-outlinedActiveBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
          '--variant-outlinedDisabledColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          '--variant-outlinedDisabledBorder': `rgba(255 255 255 / 0.2)`,
          '--variant-softColor': getCssVar(`palette-common-white`),
          '--variant-softHoverColor': getCssVar(`palette-common-white`),
          '--variant-softBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.24)`,
          '--variant-softHoverBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.36)`,
          '--variant-softActiveBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.16)`,
          '--variant-softDisabledColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          '--variant-softDisabledBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`,
          '--variant-solidColor': getCssVar(`palette-${color}-${color === 'neutral' ? '600' : '500'}`),
          '--variant-solidBg': getCssVar(`palette-common-white`),
          '--variant-solidHoverColor': getCssVar(`palette-${color}-700`),
          '--variant-solidHoverBg': getCssVar(`palette-common-white`),
          '--variant-solidActiveBg': getCssVar(`palette-${color}-200`),
          '--variant-solidDisabledColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          '--variant-solidDisabledBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`
        };
      }
    }
  });
  return result;
};
exports.createSolidInversion = createSolidInversion;

/***/ }),

/***/ 34705:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useSlot;
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var _utils = __webpack_require__(90480);
var _utils2 = __webpack_require__(33580);
var _ColorInversion = __webpack_require__(86098);
const _excluded = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"],
  _excluded2 = ["component", "slots", "slotProps"],
  _excluded3 = ["component"],
  _excluded4 = ["disableColorInversion"];
/**
 * An internal function to create a Joy UI slot.
 *
 * This is an advanced version of Base UI `useSlotProps` because Joy UI allows leaf component to be customized via `component` prop
 * while Base UI does not need to support leaf component customization.
 *
 * @param {string} name: name of the slot
 * @param {object} parameters
 * @returns {[Slot, slotProps]} The slot's React component and the slot's props
 *
 * Note: the returned slot's props
 * - will never contain `component` prop.
 * - might contain `as` prop.
 */
function useSlot(
/**
 * The slot's name. All Joy UI components should have `root` slot.
 *
 * If the name is `root`, the logic behaves differently from other slots,
 * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
 */
name, parameters) {
  const {
      className,
      elementType: initialElementType,
      ownerState,
      externalForwardedProps,
      getSlotOwnerState,
      internalForwardedProps
    } = parameters,
    useSlotPropsParams = (0, _objectWithoutPropertiesLoose2.default)(parameters, _excluded);
  const {
      component: rootComponent,
      slots = {
        [name]: undefined
      },
      slotProps = {
        [name]: undefined
      }
    } = externalForwardedProps,
    other = (0, _objectWithoutPropertiesLoose2.default)(externalForwardedProps, _excluded2);
  const elementType = slots[name] || initialElementType;

  // `slotProps[name]` can be a callback that receives the component's ownerState.
  // `resolvedComponentsProps` is always a plain object.
  const resolvedComponentsProps = (0, _utils2.resolveComponentProps)(slotProps[name], ownerState);
  const _mergeSlotProps = (0, _utils2.mergeSlotProps)((0, _extends2.default)({
      className
    }, useSlotPropsParams, {
      externalForwardedProps: name === 'root' ? other : undefined,
      externalSlotProps: resolvedComponentsProps
    })),
    {
      props: {
        component: slotComponent
      },
      internalRef
    } = _mergeSlotProps,
    mergedProps = (0, _objectWithoutPropertiesLoose2.default)(_mergeSlotProps.props, _excluded3);
  const ref = (0, _utils.unstable_useForkRef)(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, parameters.ref);

  // @ts-ignore internal logic
  const _ref = getSlotOwnerState ? getSlotOwnerState(mergedProps) : {},
    {
      disableColorInversion = false
    } = _ref,
    slotOwnerState = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded4);
  const finalOwnerState = (0, _extends2.default)({}, ownerState, slotOwnerState);
  const {
    getColor
  } = (0, _ColorInversion.useColorInversion)(finalOwnerState.variant);
  if (name === 'root') {
    var _color;
    // for the root slot, color inversion is calculated before the `useSlot` and pass through `ownerState`.
    finalOwnerState.color = (_color = mergedProps.color) != null ? _color : ownerState.color;
  } else if (!disableColorInversion) {
    finalOwnerState.color = getColor(mergedProps.color, finalOwnerState.color);
  }
  const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
  const props = (0, _utils2.appendOwnerState)(elementType, (0, _extends2.default)({}, name === 'root' && !rootComponent && !slots[name] && internalForwardedProps, name !== 'root' && !slots[name] && internalForwardedProps, mergedProps, LeafComponent && {
    as: LeafComponent
  }, {
    ref
  }), finalOwnerState);
  Object.keys(slotOwnerState).forEach(propName => {
    delete props[propName];
  });
  return [elementType, props];
}

/***/ })

};
;