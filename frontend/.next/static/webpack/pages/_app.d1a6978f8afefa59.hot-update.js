"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_post_postContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/post/postContext */ \"./context/post/postContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n// import React, { useEffect } from \"react\";\n// import { Link } from \"react-router-dom\";\n// import { useNavigate } from \"react-router-dom\";\n// import \"./Styling/Navbar.css\";\n// import notebook from \"./Styling/Images/notebook.png\";\n\n\n\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    _s();\n    // let location = useLocation();\n    // let navigate = useNavigate();\n    // // useEffect(() => {\n    // //   console.log(location.pathname);\n    // // }, [location]);\n    // const handleLogout = () => {\n    //   localStorage.removeItem(\"token\");\n    //   navigate(\"/login\");\n    // };\n    var con = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_post_postContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    var fetchPost = contextP.fetchPost;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchPost();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().bannerContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().banner),\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Socialley\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpitgupta/group3-project-socialley/frontend/components/Navbar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/arpitgupta/group3-project-socialley/frontend/components/Navbar.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/arpitgupta/group3-project-socialley/frontend/components/Navbar.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arpitgupta/group3-project-socialley/frontend/components/Navbar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arpitgupta/group3-project-socialley/frontend/components/Navbar.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arpitgupta/group3-project-socialley/frontend/components/Navbar.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/arpitgupta/group3-project-socialley/frontend/components/Navbar.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/arpitgupta/group3-project-socialley/frontend/components/Navbar.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arpitgupta/group3-project-socialley/frontend/components/Navbar.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navbar, \"fsbgYFTkbOmL282uGmFiOXuObM0=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLQTs7QUFMQSw0Q0FBNEM7QUFDNUMsMkNBQTJDO0FBQzNDLGtEQUFrRDtBQUNsRCxpQ0FBaUM7QUFDakMsd0RBQXdEO0FBQ1I7QUFDTTtBQUNSOztBQUV2QyxJQUFNSSxNQUFNLEdBQUcsV0FBTTs7SUFDMUIsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUVoQyx1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLHFCQUFxQjtJQUVyQiwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixLQUFLO0lBRUwsSUFBTUMsR0FBRyxHQUFHSCxpREFBVSxDQUFDRCxpRUFBVyxDQUFDO0lBQ25DLElBQU0sU0FBVSxHQUFJTSxRQUFRLENBQXJCRCxTQUFTO0lBRWxCSCxnREFBUyxDQUFDLFdBQU07UUFDaEJHLFNBQVMsRUFBRSxDQUFDO0tBRVgsRUFBRSxFQUFFLENBQUM7SUFHSixxQkFDRSw4REFBQ0UsUUFBTTtRQUFDQyxTQUFTLEVBQUVULHVFQUFXOzswQkFDNUIsOERBQUNXLEtBQUc7Z0JBQUNGLFNBQVMsRUFBRVQsa0ZBQXNCOzBCQUN0Qyw0RUFBQ1csS0FBRztvQkFBQ0YsU0FBUyxFQUFFVCx5RUFBYTs7d0JBQzFCLEdBQUc7c0NBQ0osOERBQUNjLElBQUU7c0NBQUMsV0FBUzs7Ozs7aUNBQUs7Ozs7Ozt5QkFDZDs7Ozs7cUJBRUE7MEJBQ04sOERBQUNDLEtBQUc7Z0JBQUNOLFNBQVMsRUFBRVQseUVBQWE7MEJBQzNCLDRFQUFDVyxLQUFHOzhCQUNGLDRFQUFDTSxJQUFFO3dCQUFDUixTQUFTLEVBQUVULDBFQUFjOzswQ0FDM0IsOERBQUNtQixJQUFFOzBDQUFDLE1BQUk7Ozs7O3FDQUFLOzBDQUViLDhEQUFDQSxJQUFFOzBDQUFDLE9BQUs7Ozs7O3FDQUFLOzs7Ozs7NkJBQ1g7Ozs7O3lCQUNEOzs7OztxQkFDRjs7Ozs7O2FBd0JDLENBQ1Q7Q0FDSCxDQUFDO0dBakVXZixNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUFtRW5CLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4PzNhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBpbXBvcnQgXCIuL1N0eWxpbmcvTmF2YmFyLmNzc1wiO1xuLy8gaW1wb3J0IG5vdGVib29rIGZyb20gXCIuL1N0eWxpbmcvSW1hZ2VzL25vdGVib29rLnBuZ1wiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzXCJcbmltcG9ydCBwb3N0Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wb3N0L3Bvc3RDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgLy8gbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgLy8gbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICAvLyAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAvLyAgIGNvbnNvbGUubG9nKGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgLy8gLy8gfSwgW2xvY2F0aW9uXSk7XG5cbiAgLy8gY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAvLyAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gIC8vICAgbmF2aWdhdGUoXCIvbG9naW5cIik7XG4gIC8vIH07XG5cbiAgY29uc3QgY29uID0gdXNlQ29udGV4dChwb3N0Q29udGV4dCk7XG4gIGNvbnN0IHtmZXRjaFBvc3R9ID0gY29udGV4dFA7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG5mZXRjaFBvc3QoKTtcbiAgXG59LCBbXSlcblxuICBcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17U3R5bGVzLmhlYWR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5iYW5uZXJDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5iYW5uZXJ9PlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDxoMT5Tb2NpYWxsZXk8L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e1N0eWxlcy5uYXZiYXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1N0eWxlcy5uYXZsaW5rfT5cbiAgICAgICAgICAgIDxsaT5Ib21lPC9saT5cblxuICAgICAgICAgICAgPGxpPkFib3V0PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJuYXZCdG5cIj5cbiAgICAgICAgeyFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPkxvZyBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCI1cHggNjdweFwiIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgLy8gICA8L2Rpdj4gKi99XG4gICAgICB7LyogLy8gKX0gKi99XG4gICAgICB7LyogPC9kaXY+ICovfVxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIlN0eWxlcyIsInBvc3RDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIk5hdmJhciIsImNvbiIsImZldGNoUG9zdCIsImNvbnRleHRQIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaGVhZCIsImRpdiIsImJhbm5lckNvbnRhaW5lciIsImJhbm5lciIsImgxIiwibmF2IiwibmF2YmFyIiwidWwiLCJuYXZsaW5rIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ })

});