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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Features */ \"(app-pages-browser)/./src/components/Features.tsx\");\n/* harmony import */ var _components_Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Portfolio/Portfolio */ \"(app-pages-browser)/./src/components/Portfolio/Portfolio.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { status, data } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://localhost:3000/api/test\");\n            console.log(\"data:\" + response.data);\n        };\n        fetchData();\n    }, [\n        status\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-start p-24 gap-10 \",\n        children: [\n            status === \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex min-w-[50%] xl:p-16 md:p-10 p-8 bg-slate-900 rounded-xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/portsz/projects/portsz/finapp/retire-me/src/app/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/portsz/projects/portsz/finapp/retire-me/src/app/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Features__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    sessionData: data\n                }, void 0, false, {\n                    fileName: \"/home/portsz/projects/portsz/finapp/retire-me/src/app/page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/portsz/projects/portsz/finapp/retire-me/src/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/portsz/projects/portsz/finapp/retire-me/src/app/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JR9+svjweTRpmA5cMEwf4Jsf82k=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFDWTtBQUVaO0FBQ1g7QUFDUjtBQUVYLFNBQVNLOztJQUN0QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdMLDJEQUFVQTtJQUVuQ0MsZ0RBQVNBLENBQUM7UUFFUixNQUFNSyxZQUFZO1lBQ2hCLE1BQU1DLFdBQVcsTUFBTUwsNkNBQUtBLENBQUNNLEdBQUcsQ0FBQztZQUNqQ0MsUUFBUUMsR0FBRyxDQUFDLFVBQVFILFNBQVNGLElBQUk7UUFDbkM7UUFFQUM7SUFDRixHQUFHO1FBQUNGO0tBQU87SUFFWCxxQkFDRSw4REFBQ087UUFBS0MsV0FBVTs7WUFDYlIsV0FBVyxpQ0FDViw4REFBQ1M7Z0JBQVFELFdBQVU7MEJBQ2pCLDRFQUFDYix1RUFBU0E7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNjOzBCQUNDLDRFQUFDZiw0REFBUUE7b0JBQUNnQixhQUFhVDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0I7R0F6QndCRjs7UUFDR0gsdURBQVVBOzs7S0FEYkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IEZlYXR1cmVzIGZyb20gXCJAL2NvbXBvbmVudHMvRmVhdHVyZXNcIjtcclxuaW1wb3J0IFBvcnRmb2xpbyBmcm9tIFwiQC9jb21wb25lbnRzL1BvcnRmb2xpby9Qb3J0Zm9saW9cIjtcclxuaW1wb3J0IHsgdGVzdFR1cnNvIH0gZnJvbSBcIkAvc2VydmljZXMvYXBpL3VzZXIvdGVzdC10dXJzb1wiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2xvY2FsaG9zdDozMDAwL2FwaS90ZXN0XCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGE6XCIrcmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtzdGF0dXNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgcC0yNCBnYXAtMTAgXCI+XHJcbiAgICAgIHtzdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiICYmIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IG1pbi13LVs1MCVdIHhsOnAtMTYgbWQ6cC0xMCBwLTggYmctc2xhdGUtOTAwIHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgIDxQb3J0Zm9saW8gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICl9XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxGZWF0dXJlcyBzZXNzaW9uRGF0YT17ZGF0YX0vPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmVhdHVyZXMiLCJQb3J0Zm9saW8iLCJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJIb21lIiwic3RhdHVzIiwiZGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwic2Vzc2lvbkRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});