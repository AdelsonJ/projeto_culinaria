"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/ui/login/page",{

/***/ "(app-pages-browser)/./app/ui/login/page.tsx":
/*!*******************************!*\
  !*** ./app/ui/login/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _ui_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui.module.css */ \"(app-pages-browser)/./app/ui/ui.module.css\");\n/* harmony import */ var _ui_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [senha, setSenha] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleLogin = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/login\", {\n                email,\n                senha\n            });\n            if (response.data.success) {\n                localStorage.setItem(\"token\", response.data.token);\n                // Redirecionar para o dashboard\n                window.location.href = \"/dashboard\";\n            } else {\n                setErrorMessage(\"Credenciais inv\\xe1lidas. Por favor, tente novamente.\");\n            }\n        } catch (error) {\n            console.error(\"Erro ao fazer login:\", error);\n            setErrorMessage(\"Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginLogo),\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleLogin,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"userEmail\",\n                                    children: \"E-mail\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n                                    id: \"userEmail\",\n                                    type: \"email\",\n                                    placeholder: \"E-mail\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"userPassword\",\n                                    children: \"Senha\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n                                    id: \"userPassword\",\n                                    type: \"password\",\n                                    placeholder: \"Senha\",\n                                    value: senha,\n                                    onChange: (e)=>setSenha(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().errorMessage),\n                            children: errorMessage\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 28\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().submitBtn),\n                            children: \"Entrar\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().signupLink),\n                    children: [\n                        \"N\\xe3o possui um usu\\xe1rio? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/ui/Cadastro\",\n                            children: \"Cadastre-se agora\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 34\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"N1oIH7KXUArUcNmHz9HCsQFxNJw=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDZDtBQUNZO0FBRXZCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpELE1BQU1VLGNBQWMsT0FBT0M7UUFDekJBLE1BQU1DLGNBQWM7UUFFcEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVosNkNBQUtBLENBQUNhLElBQUksQ0FBQywrQkFBK0I7Z0JBQy9EVjtnQkFDQUU7WUFDRjtZQUVBLElBQUlPLFNBQVNFLElBQUksQ0FBQ0MsT0FBTyxFQUFFO2dCQUN6QkMsYUFBYUMsT0FBTyxDQUFDLFNBQVNMLFNBQVNFLElBQUksQ0FBQ0ksS0FBSztnQkFDakQsZ0NBQWdDO2dCQUNoQ0MsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7WUFDekIsT0FBTztnQkFDTGIsZ0JBQWdCO1lBQ2xCO1FBQ0YsRUFBRSxPQUFPYyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDZCxnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBV3hCLGlFQUFnQjtrQkFDOUIsNEVBQUN1QjtZQUFJQyxXQUFXeEIsNERBQVc7OzhCQUN6Qiw4REFBQzJCO29CQUFHSCxXQUFXeEIsaUVBQWdCOzhCQUFFOzs7Ozs7OEJBQ2pDLDhEQUFDNkI7b0JBQUtDLFVBQVV0Qjs7c0NBQ2QsOERBQUNlOzRCQUFJQyxXQUFXeEIsaUVBQWdCOzs4Q0FDOUIsOERBQUNnQztvQ0FBTUMsU0FBUTs4Q0FBWTs7Ozs7OzhDQUMzQiw4REFBQ0M7b0NBQ0NWLFdBQVd4QixtRUFBa0I7b0NBQzdCb0MsSUFBRztvQ0FDSEMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBT3JDO29DQUNQc0MsVUFBVSxDQUFDQyxJQUFNdEMsU0FBU3NDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDeENJLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHWiw4REFBQ3BCOzRCQUFJQyxXQUFXeEIsaUVBQWdCOzs4Q0FDOUIsOERBQUNnQztvQ0FBTUMsU0FBUTs4Q0FBZTs7Ozs7OzhDQUM5Qiw4REFBQ0M7b0NBQ0NWLFdBQVd4QixtRUFBa0I7b0NBQzdCb0MsSUFBRztvQ0FDSEMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBT25DO29DQUNQb0MsVUFBVSxDQUFDQyxJQUFNcEMsU0FBU29DLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDeENJLFFBQVE7Ozs7Ozs7Ozs7Ozt3QkFHWHJDLDhCQUFnQiw4REFBQ3NDOzRCQUFFcEIsV0FBV3hCLG9FQUFtQjtzQ0FBR007Ozs7OztzQ0FDckQsOERBQUN1Qzs0QkFBT1IsTUFBSzs0QkFBU2IsV0FBV3hCLGlFQUFnQjtzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQUVyRCw4REFBQzRDO29CQUFFcEIsV0FBV3hCLGtFQUFpQjs7d0JBQUU7c0NBQ1IsOERBQUNnRDs0QkFBRTVCLE1BQUs7c0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hEO0dBakV3Qm5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9sb2dpbi9wYWdlLnRzeD8yYWRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi91aS5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZW5oYSwgc2V0U2VuaGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvbG9naW5cIiwge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHNlbmhhLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG4gICAgICAgIC8vIFJlZGlyZWNpb25hciBwYXJhIG8gZGFzaGJvYXJkXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kYXNoYm9hcmRcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJDcmVkZW5jaWFpcyBpbnbDoWxpZGFzLiBQb3IgZmF2b3IsIHRlbnRlIG5vdmFtZW50ZS5cIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGZhemVyIGxvZ2luOlwiLCBlcnJvcik7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIk9jb3JyZXUgdW0gZXJybyBhbyB0ZW50YXIgZmF6ZXIgbG9naW4uIFBvciBmYXZvciwgdGVudGUgbm92YW1lbnRlLlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkxvZ299PkxvZ2luPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJFbWFpbFwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgIGlkPVwidXNlckVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJQYXNzd29yZFwiPlNlbmhhPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VyUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZW5oYVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbmhhfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VuaGEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57ZXJyb3JNZXNzYWdlfTwvcD59XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdG59PkVudHJhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zaWdudXBMaW5rfT5cclxuICAgICAgICAgIE7Do28gcG9zc3VpIHVtIHVzdcOhcmlvPyA8YSBocmVmPVwiL3VpL0NhZGFzdHJvXCI+Q2FkYXN0cmUtc2UgYWdvcmE8L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInN0eWxlcyIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInNlbmhhIiwic2V0U2VuaGEiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYW5kbGVMb2dpbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwic3VjY2VzcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImNhcmQiLCJoMSIsImxvZ2luTG9nbyIsImZvcm0iLCJvblN1Ym1pdCIsImZvcm1Hcm91cCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiZm9ybUNvbnRyb2wiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJwIiwiYnV0dG9uIiwic3VibWl0QnRuIiwic2lnbnVwTGluayIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/login/page.tsx\n"));

/***/ })

});