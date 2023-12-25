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

/***/ "(app-pages-browser)/./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"(app-pages-browser)/./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"(app-pages-browser)/./utils/motion.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst Navbar = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.nav, {\n        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__.navVariants,\n        initial: \"hidden\",\n        whileInView: \"show\",\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].xPaddings, \" py-8 relative\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute w-[50%] inset-0 gradient-01\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto flex justify-between gap-8\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/search.svg\",\n                        alt: \"search\",\n                        className: \"w-[24px] h-[24px] object-contain\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-extrabold text-[24px] leading-[30px] text-white\",\n                        children: \"METAVERSUS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\Navbar.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\Navbar.jsx\",\n            lineNumber: 14,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\Navbar.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFc0M7QUFDUjtBQUNlO0FBRTdDLE1BQU1HLFNBQVMsa0JBQ2IsOERBQUNILGlEQUFNQSxDQUFDSSxHQUFHO1FBQ1RDLFVBQVVILHNEQUFXQTtRQUNyQkksU0FBUTtRQUNSQyxhQUFZO1FBQ1pDLFdBQVcsR0FBb0IsT0FBakJQLCtDQUFNQSxDQUFDUSxTQUFTLEVBQUM7a0JBRS9CLDRFQUFDQztZQUFJRixXQUFVO3NCQUNiLDRFQUFDRTtnQkFDQ0YsV0FBVyxHQUFxQixPQUFsQlAsK0NBQU1BLENBQUNVLFVBQVUsRUFBQzs7a0NBRWhDLDhEQUFDQzt3QkFDQ0MsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSk4sV0FBVTs7Ozs7O2tDQUVaLDhEQUFDTzt3QkFBR1AsV0FBVTtrQ0FBdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FoQnZFTDtBQXdCTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qc3g/M2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJ1xuaW1wb3J0IHsgbmF2VmFyaWFudHMgfSBmcm9tICcuLi91dGlscy9tb3Rpb24nXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgPG1vdGlvbi5uYXZcbiAgICB2YXJpYW50cz17bmF2VmFyaWFudHN9XG4gICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy54UGFkZGluZ3N9IHB5LTggcmVsYXRpdmVgfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LVs1MCVdIGluc2V0LTAgZ3JhZGllbnQtMDFcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW5uZXJXaWR0aH0gbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAtOGB9XG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvc2VhcmNoLnN2Z1wiXG4gICAgICAgICAgYWx0PVwic2VhcmNoXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyNHB4XSBoLVsyNHB4XSBvYmplY3QtY29udGFpblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LVsyNHB4XSBsZWFkaW5nLVszMHB4XSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgTUVUQVZFUlNVU1xuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbW90aW9uLm5hdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iXSwibmFtZXMiOlsibW90aW9uIiwic3R5bGVzIiwibmF2VmFyaWFudHMiLCJOYXZiYXIiLCJuYXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsImNsYXNzTmFtZSIsInhQYWRkaW5ncyIsImRpdiIsImlubmVyV2lkdGgiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navbar.jsx\n"));

/***/ })

});