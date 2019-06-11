webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Sphere__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sphere */ "./components/Sphere/index.js");
/* harmony import */ var _components_Detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Detail */ "./components/Detail/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/Kingsley/Projects/quarter/pages/index.js";





function preventWeChatBrowserDefault(e) {
  if (e.cancelable && !e.defaultPrevented) {
    e.preventDefault();
  }
}

function App() {
  // 0为第一页，1为详情页
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      touchStartY = _useState4[0],
      setTouchStartY = _useState4[1];

  var switchState = function switchState(len) {
    if (Math.abs(len) < 30) {
      return;
    }

    if (len >= 30 && page === 1) {
      setPage(0);
    } else if (page === 0) {
      setPage(1);
    }
  };

  var touchStart = function touchStart(e) {
    setTouchStartY(e.touches[0].clientY);
  };

  var touchEnd = function touchEnd(e) {
    var touchEndY = e.changedTouches[0].clientY;
    var len = touchEndY - touchStartY;
    switchState(len);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "App",
    onTouchStart: touchStart,
    onTouchEnd: touchEnd,
    onTouchMove: preventWeChatBrowserDefault,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Sphere__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: page === 0 ? 'large' : 'small',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), page === 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Detail__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u6ED1\u52A8\u67E5\u770B\u60A8\u7684\u9080\u8BF7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/down.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.ecca13a7ca9aa8f5dcad.hot-update.js.map