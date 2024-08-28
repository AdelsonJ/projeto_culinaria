"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/template",{

/***/ "(app-pages-browser)/./app/template.tsx":
/*!**************************!*\
  !*** ./app/template.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Template; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Template(param) {\n    let { children, openPopup } = param;\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        setIsLoggedIn(!!token); // Converte o token em um booleano, true se existe, false se não\n    }, []);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"token\");\n        setIsLoggedIn(false);\n        window.location.href = \"/\"; // Redireciona para a página inicial após logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().container_header),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                            src: \"/images/chefe.png\",\n                            alt: \"Logo Chefe\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().container_header_2),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this),\n                                    isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    href: \"/entidades/ingrediente\",\n                                                    children: \"Ingrediente\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    href: \"/entidades/receita\",\n                                                    children: \"Receitas\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    href: \"/entidades/tags\",\n                                                    children: \"Tags\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: handleLogout,\n                                            children: \"Deslogar\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 19\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/ui/login\",\n                                            onClick: openPopup,\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().centro),\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Copyright \\xa9 Adelson Junior e Matheus Tavares. Projeto Culinaria\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\template.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Template, \"fKLMlyFH2GMrhNeUDpp+0z1yiCo=\");\n_c = Template;\nvar _c;\n$RefreshReg$(_c, \"Template\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZW1wbGF0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ2U7QUFDTDtBQUV4QixTQUFTSSxTQUFTLEtBTWhDO1FBTmdDLEVBQy9CQyxRQUFRLEVBQ1JDLFNBQVMsRUFJVixHQU5nQzs7SUFPL0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUNuQ0gsY0FBYyxDQUFDLENBQUNDLFFBQVEsZ0VBQWdFO0lBQzFGLEdBQUcsRUFBRTtJQUVMLE1BQU1HLGVBQWU7UUFDbkJGLGFBQWFHLFVBQVUsQ0FBQztRQUN4QkwsY0FBYztRQUNkTSxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxLQUFLLGdEQUFnRDtJQUM5RTtJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFXZiw4REFBVzs7MEJBQzFCLDhEQUFDZ0I7Z0JBQU9ELFdBQVdmLDhEQUFXOzBCQUM1Qiw0RUFBQ2tCO29CQUFJSCxXQUFXZiwwRUFBdUI7O3NDQUNyQyw4REFBQ29COzRCQUFJTCxXQUFXZiw4REFBVzs0QkFBRXNCLEtBQUk7NEJBQW9CQyxLQUFJOzs7Ozs7c0NBQ3pELDhEQUFDTDs0QkFBSUgsV0FBV2YsNEVBQXlCO3NDQUN2Qyw0RUFBQ3lCOztrREFDQyw4REFBQ0M7a0RBQUcsNEVBQUM3QixpREFBSUE7NENBQUNnQixNQUFLO3NEQUFJOzs7Ozs7Ozs7OztvQ0FDbEJULDRCQUNDOzswREFDRSw4REFBQ3NCOzBEQUFHLDRFQUFDN0IsaURBQUlBO29EQUFDZ0IsTUFBSzs4REFBeUI7Ozs7Ozs7Ozs7OzBEQUN4Qyw4REFBQ2E7MERBQUcsNEVBQUM3QixpREFBSUE7b0RBQUNnQixNQUFLOzhEQUFxQjs7Ozs7Ozs7Ozs7MERBQ3BDLDhEQUFDYTswREFBRyw0RUFBQzdCLGlEQUFJQTtvREFBQ2dCLE1BQUs7OERBQWtCOzs7Ozs7Ozs7Ozs7O2tEQUdyQyw4REFBQ2E7a0RBQ0V0QiwyQkFDQyw4REFBQ3VCOzRDQUFFQyxTQUFTbkI7c0RBQWM7Ozs7O2lFQUUxQiw4REFBQ2tCOzRDQUFFZCxNQUFLOzRDQUFZZSxTQUFTekI7c0RBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRcEQsOERBQUNlO2dCQUFJSCxXQUFXZixnRUFBYTswQkFDMUJFOzs7Ozs7MEJBR0gsOERBQUM0QjtnQkFBT2YsV0FBV2YsOERBQVc7MEJBQzVCLDRFQUFDa0I7b0JBQUlILFdBQVdmLG1FQUFnQjs4QkFDOUIsNEVBQUNnQztrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBMUR3Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90ZW1wbGF0ZS50c3g/Mjk4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZW1wbGF0ZSh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgb3BlblBvcHVwXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlLFxyXG4gIG9wZW5Qb3B1cDogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZFxyXG59KSB7XHJcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgc2V0SXNMb2dnZWRJbighIXRva2VuKTsgLy8gQ29udmVydGUgbyB0b2tlbiBlbSB1bSBib29sZWFubywgdHJ1ZSBzZSBleGlzdGUsIGZhbHNlIHNlIG7Do29cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7IC8vIFJlZGlyZWNpb25hIHBhcmEgYSBww6FnaW5hIGluaWNpYWwgYXDDs3MgbG9nb3V0XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX2hlYWRlcn0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvY2hlZmUucG5nXCIgYWx0PVwiTG9nbyBDaGVmZVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9oZWFkZXJfMn0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZW50aWRhZGVzL2luZ3JlZGllbnRlXCI+SW5ncmVkaWVudGU8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZW50aWRhZGVzL3JlY2VpdGFcIj5SZWNlaXRhczwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9lbnRpZGFkZXMvdGFnc1wiPlRhZ3M8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+RGVzbG9nYXI8L2E+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3VpL2xvZ2luXCIgb25DbGljaz17b3BlblBvcHVwfT5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudHJvfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8cD5Db3B5cmlnaHQgwqkgQWRlbHNvbiBKdW5pb3IgZSBNYXRoZXVzIFRhdmFyZXMuIFByb2pldG8gQ3VsaW5hcmlhPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJUZW1wbGF0ZSIsImNoaWxkcmVuIiwib3BlblBvcHVwIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImhlYWRlciIsImRhcmsiLCJkaXYiLCJjb250YWluZXJfaGVhZGVyIiwiaW1nIiwibG9nbyIsInNyYyIsImFsdCIsImNvbnRhaW5lcl9oZWFkZXJfMiIsInVsIiwibGkiLCJhIiwib25DbGljayIsImNlbnRybyIsImZvb3RlciIsImNvbnRhaW5lciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/template.tsx\n"));

/***/ })

});