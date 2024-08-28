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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _ui_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui.module.css */ \"(app-pages-browser)/./app/ui/ui.module.css\");\n/* harmony import */ var _ui_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [senha, setSenha] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleLogin = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/login\", {\n                email,\n                senha\n            });\n            if (response.data.success) {\n                localStorage.setItem(\"token\", response.data.token);\n                alert(\"Usu\\xe1rio ou e-mail j\\xe1 se encontra em nosso banco de dados.\");\n                window.location.href = \"/\";\n            } else {\n                setErrorMessage(\"Credenciais inv\\xe1lidas. Por favor, tente novamente.\");\n            }\n        } catch (error) {\n            console.error(\"Erro ao fazer login:\", error);\n            setErrorMessage(\"Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginLogo),\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleLogin,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"userEmail\",\n                                    children: \"E-mail\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n                                    id: \"userEmail\",\n                                    type: \"email\",\n                                    placeholder: \"E-mail\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"userPassword\",\n                                    children: \"Senha\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n                                    id: \"userPassword\",\n                                    type: \"password\",\n                                    placeholder: \"Senha\",\n                                    value: senha,\n                                    onChange: (e)=>setSenha(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().errorMessage),\n                            children: errorMessage\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 28\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().submitBtn),\n                            children: \"Entrar\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().signupLink),\n                    children: [\n                        \"N\\xe3o possui um usu\\xe1rio? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/ui/Cadastro\",\n                            children: \"Cadastre-se agora\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 34\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\login\\\\page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"N1oIH7KXUArUcNmHz9HCsQFxNJw=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDZDtBQUNZO0FBRXZCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpELE1BQU1VLGNBQWMsT0FBT0M7UUFDekJBLE1BQU1DLGNBQWM7UUFFcEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVosNkNBQUtBLENBQUNhLElBQUksQ0FBQywrQkFBK0I7Z0JBQy9EVjtnQkFDQUU7WUFDRjtZQUVBLElBQUlPLFNBQVNFLElBQUksQ0FBQ0MsT0FBTyxFQUFFO2dCQUN6QkMsYUFBYUMsT0FBTyxDQUFDLFNBQVNMLFNBQVNFLElBQUksQ0FBQ0ksS0FBSztnQkFDakRDLE1BQU07Z0JBQ05DLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO1lBQ3pCLE9BQU87Z0JBQ0xkLGdCQUFnQjtZQUNsQjtRQUNGLEVBQUUsT0FBT2UsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN0Q2YsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVd6QixpRUFBZ0I7a0JBQzlCLDRFQUFDd0I7WUFBSUMsV0FBV3pCLDREQUFXOzs4QkFDekIsOERBQUM0QjtvQkFBR0gsV0FBV3pCLGlFQUFnQjs4QkFBRTs7Ozs7OzhCQUNqQyw4REFBQzhCO29CQUFLQyxVQUFVdkI7O3NDQUNkLDhEQUFDZ0I7NEJBQUlDLFdBQVd6QixpRUFBZ0I7OzhDQUM5Qiw4REFBQ2lDO29DQUFNQyxTQUFROzhDQUFZOzs7Ozs7OENBQzNCLDhEQUFDQztvQ0FDQ1YsV0FBV3pCLG1FQUFrQjtvQ0FDN0JxQyxJQUFHO29DQUNIQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPdEM7b0NBQ1B1QyxVQUFVLENBQUNDLElBQU12QyxTQUFTdUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUN4Q0ksUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDcEI7NEJBQUlDLFdBQVd6QixpRUFBZ0I7OzhDQUM5Qiw4REFBQ2lDO29DQUFNQyxTQUFROzhDQUFlOzs7Ozs7OENBQzlCLDhEQUFDQztvQ0FDQ1YsV0FBV3pCLG1FQUFrQjtvQ0FDN0JxQyxJQUFHO29DQUNIQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPcEM7b0NBQ1BxQyxVQUFVLENBQUNDLElBQU1yQyxTQUFTcUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUN4Q0ksUUFBUTs7Ozs7Ozs7Ozs7O3dCQUdYdEMsOEJBQWdCLDhEQUFDdUM7NEJBQUVwQixXQUFXekIsb0VBQW1CO3NDQUFHTTs7Ozs7O3NDQUNyRCw4REFBQ3dDOzRCQUFPUixNQUFLOzRCQUFTYixXQUFXekIsaUVBQWdCO3NDQUFFOzs7Ozs7Ozs7Ozs7OEJBRXJELDhEQUFDNkM7b0JBQUVwQixXQUFXekIsa0VBQWlCOzt3QkFBRTtzQ0FDUiw4REFBQ2lEOzRCQUFFNUIsTUFBSztzQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEQ7R0FqRXdCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2xvZ2luL3BhZ2UudHN4PzJhZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3VpLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlbmhhLCBzZXRTZW5oYV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9sb2dpblwiLCB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgc2VuaGEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS50b2tlbik7XHJcbiAgICAgICAgYWxlcnQoXCJVc3XDoXJpbyBvdSBlLW1haWwgasOhIHNlIGVuY29udHJhIGVtIG5vc3NvIGJhbmNvIGRlIGRhZG9zLlwiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIkNyZWRlbmNpYWlzIGludsOhbGlkYXMuIFBvciBmYXZvciwgdGVudGUgbm92YW1lbnRlLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gZmF6ZXIgbG9naW46XCIsIGVycm9yKTtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiT2NvcnJldSB1bSBlcnJvIGFvIHRlbnRhciBmYXplciBsb2dpbi4gUG9yIGZhdm9yLCB0ZW50ZSBub3ZhbWVudGUuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luTG9nb30+TG9naW48L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlckVtYWlsXCI+RS1tYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VyRW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlclBhc3N3b3JkXCI+U2VuaGE8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICBpZD1cInVzZXJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VuaGF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZW5oYShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PntlcnJvck1lc3NhZ2V9PC9wPn1cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdEJ0bn0+RW50cmFyPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNpZ251cExpbmt9PlxyXG4gICAgICAgICAgTsOjbyBwb3NzdWkgdW0gdXN1w6FyaW8/IDxhIGhyZWY9XCIvdWkvQ2FkYXN0cm9cIj5DYWRhc3RyZS1zZSBhZ29yYTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwic3R5bGVzIiwiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwic2VuaGEiLCJzZXRTZW5oYSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZUxvZ2luIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJzdWNjZXNzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJjYXJkIiwiaDEiLCJsb2dpbkxvZ28iLCJmb3JtIiwib25TdWJtaXQiLCJmb3JtR3JvdXAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImZvcm1Db250cm9sIiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwicCIsImJ1dHRvbiIsInN1Ym1pdEJ0biIsInNpZ251cExpbmsiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/login/page.tsx\n"));

/***/ })

});