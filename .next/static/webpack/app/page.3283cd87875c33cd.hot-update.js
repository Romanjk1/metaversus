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

/***/ "(app-pages-browser)/./components/ExploreCard.jsx":
/*!************************************!*\
  !*** ./components/ExploreCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"(app-pages-browser)/./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"(app-pages-browser)/./utils/motion.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { id, imgUrl, title, index, active, handleClick } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-[2]\", \" flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer\"),\n        onClick: ()=>handleClick(id),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: title,\n                className: \"absolute w-full h-full object-cover rounded-[24px]\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\ExploreCard.jsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\ExploreCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/headset.svg\",\n                            alt: \"headset\",\n                            className: \"w-1/2 h-1/2 object-contain\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\ExploreCard.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\ExploreCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-[16px] leading-[20.16px] text-white uppercase\",\n                        children: \"Enter The Metaverse\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\ExploreCard.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\ExploreCard.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\ExploreCard.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mcee\\\\Desktop\\\\metaverses\\\\components\\\\ExploreCard.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRXhwbG9yZUNhcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNzQztBQUVSO0FBQ1U7QUFFeEMsTUFBTUcsY0FBYztRQUFDLEVBQUVDLEVBQUUsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxXQUFXLEVBQUU7V0FDcEUsOERBQUNULGlEQUFNQSxDQUFDVSxHQUFHO1FBQ1RDLFVBQVVULHFEQUFNQSxDQUFDLFNBQVMsVUFBVUssUUFBUSxLQUFLO1FBQ2pESyxXQUFXLFlBRVYsT0FEQ0osV0FBV0osS0FBSyw0QkFBNEIsMEJBQzdDO1FBQ0RTLFNBQVMsSUFBTUosWUFBWUw7OzBCQUUzQiw4REFBQ1U7Z0JBQ0NDLEtBQUtWO2dCQUNMVyxLQUFLVjtnQkFDTE0sV0FBVTs7Ozs7O1lBRVhKLFdBQVdKLG1CQUNWLDhEQUFDYTtnQkFBR0wsV0FBVTswQkFDWE47Ozs7OzBDQUdILDhEQUFDSTtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNGO3dCQUNDRSxXQUFXLEdBQXFCLE9BQWxCWCwrQ0FBTUEsQ0FBQ2lCLFVBQVUsRUFBQztrQ0FFaEMsNEVBQUNKOzRCQUNDQyxLQUFJOzRCQUNKQyxLQUFJOzRCQUNKSixXQUFVOzs7Ozs7Ozs7OztrQ0FHZCw4REFBQ087d0JBQUVQLFdBQVU7a0NBQWlFOzs7Ozs7a0NBRzlFLDhEQUFDUTt3QkFBR1IsV0FBVTtrQ0FDWE47Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlHO0tBcENSSDtBQXVDTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeD8yM2NjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnXG5pbXBvcnQgeyBmYWRlSW4gfSBmcm9tICcuLi91dGlscy9tb3Rpb24nXG5cbmNvbnN0IEV4cGxvcmVDYXJkID0gKHsgaWQsIGltZ1VybCwgdGl0bGUsIGluZGV4LCBhY3RpdmUsIGhhbmRsZUNsaWNrIH0pID0+IChcbiAgPG1vdGlvbi5kaXZcbiAgICB2YXJpYW50cz17ZmFkZUluKCdyaWdodCcsICdzcHJpbmcnLCBpbmRleCAqIDAuNSwgMC43NSl9XG4gICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHtcbiAgICAgIGFjdGl2ZSA9PT0gaWQgPyAnbGc6ZmxleC1bMy41XSBmbGV4LVsxMF0nIDogJ2xnOmZsZXgtWzAuNV0gZmxleC1bMl0nXG4gICAgfSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4tdy1bMTcwcHhdIGgtWzcwMHB4XSB0cmFuc2l0aW9uLVtmbGV4XSBkdXJhdGlvbi1bMC43c10gZWFzZS1vdXQtZmxleCBjdXJzb3ItcG9pbnRlcmB9XG4gICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaWQpfVxuICA+XG4gICAgPGltZ1xuICAgICAgc3JjPXtpbWdVcmx9XG4gICAgICBhbHQ9e3RpdGxlfVxuICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC1bMjRweF1cIlxuICAgIC8+XG4gICAge2FjdGl2ZSAhPT0gaWQgPyAoXG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBzbTp0ZXh0LVsyNnB4XSB0ZXh0LVsxOHB4XSB0ZXh0LXdoaXRlIGFic29sdXRlIHotMCBsZzpib3R0b20tMjAgbGc6cm90YXRlLVstOTBkZWddIGxnOm9yaWdpbi1bMCwwXVwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2gzPlxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHAtOCBmbGV4IGp1c3RpZnktc3RhcnQgdy1mdWxsIGZsZXgtY29sIGJnLVtyZ2JhKDAsMCwwLDAuNSldIHJvdW5kZWQtYi1bMjRweF1cIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmZsZXhDZW50ZXJ9IHctWzYwcHhdIGgtWzYwcHhdIHJvdW5kZWQtWzI0cHhdIGdsYXNzbW9ycGhpc20gbWItWzE2cHhdYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9oZWFkc2V0LnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJoZWFkc2V0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8yIGgtMS8yIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1bMTZweF0gbGVhZGluZy1bMjAuMTZweF0gdGV4dC13aGl0ZSB1cHBlcmNhc2VcIj5cbiAgICAgICAgICBFbnRlciBUaGUgTWV0YXZlcnNlXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LVsyNHB4XSBmb250LXNlbWlib2xkIHNtOnRleHQtWzMycHhdIHRleHQtWzI0cHhdIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8L21vdGlvbi5kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVDYXJkXG4iXSwibmFtZXMiOlsibW90aW9uIiwic3R5bGVzIiwiZmFkZUluIiwiRXhwbG9yZUNhcmQiLCJpZCIsImltZ1VybCIsInRpdGxlIiwiaW5kZXgiLCJhY3RpdmUiLCJoYW5kbGVDbGljayIsImRpdiIsInZhcmlhbnRzIiwiY2xhc3NOYW1lIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsImgzIiwiZmxleENlbnRlciIsInAiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ExploreCard.jsx\n"));

/***/ })

});