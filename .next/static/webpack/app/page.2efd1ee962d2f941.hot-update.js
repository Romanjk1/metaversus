"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./sections/Explore.jsx":
/*!******************************!*\
  !*** ./sections/Explore.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"(app-pages-browser)/./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"(app-pages-browser)/./utils/motion.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ \"(app-pages-browser)/./components/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"(app-pages-browser)/./constants/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Explore = ()=>{\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"world-2\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].paddings),\n        id: \"explore\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].innerWidth, \" mx-auto flex flex-col\")\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\sections\\\\Explore.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\sections\\\\Explore.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Explore, \"MDFJNx0YorMygFBLrfgiis3mUN0=\");\n_c = Explore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Explore);\nvar _c;\n$RefreshReg$(_c, \"Explore\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NlY3Rpb25zL0V4cGxvcmUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dDO0FBQ007QUFDUjtBQUM0QjtBQUNRO0FBQ3RCO0FBRTVDLE1BQU1TLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3JDLHFCQUNFLDhEQUFDWTtRQUFRQyxXQUFXLEdBQW1CLE9BQWhCWCwrQ0FBTUEsQ0FBQ1ksUUFBUTtRQUFJQyxJQUFHO2tCQUMzQyw0RUFBQ2QsaURBQU1BLENBQUNlLEdBQUc7WUFDVEMsVUFBVWIsMkRBQWdCQTtZQUMxQmMsU0FBUTtZQUNSQyxhQUFZO1lBQ1pDLFVBQVU7Z0JBQUVDLE1BQU07Z0JBQU9DLFFBQVE7WUFBSztZQUN0Q1QsV0FBVyxHQUFxQixPQUFsQlgsK0NBQU1BLENBQUNxQixVQUFVLEVBQUM7Ozs7Ozs7Ozs7O0FBSXhDO0dBYk1kO0tBQUFBO0FBZU4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvRXhwbG9yZS5qc3g/NzBiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnXG5pbXBvcnQgeyBmYWRlSW4sIHN0YWdnZXJDb250YWluZXIgfSBmcm9tICcuLi91dGlscy9tb3Rpb24nXG5pbXBvcnQgeyBFeHBsb3JlQ2FyZCwgVGl0bGVUZXh0LCBUeXBpbmdUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cydcbmltcG9ydCB7IGV4cGxvcmVXb3JsZHMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmNvbnN0IEV4cGxvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgnd29ybGQtMicpXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMucGFkZGluZ3N9YH0gaWQ9XCJleHBsb3JlXCI+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICB2YXJpYW50cz17c3RhZ2dlckNvbnRhaW5lcn1cbiAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IGZhbHNlLCBhbW91bnQ6IDAuMjUgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW5uZXJXaWR0aH0gbXgtYXV0byBmbGV4IGZsZXgtY29sYH1cbiAgICAgID48L21vdGlvbi5kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm1vdGlvbiIsInN0eWxlcyIsImZhZGVJbiIsInN0YWdnZXJDb250YWluZXIiLCJFeHBsb3JlQ2FyZCIsIlRpdGxlVGV4dCIsIlR5cGluZ1RleHQiLCJleHBsb3JlV29ybGRzIiwiRXhwbG9yZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWRkaW5ncyIsImlkIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJpbm5lcldpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./sections/Explore.jsx\n"));

/***/ })

});