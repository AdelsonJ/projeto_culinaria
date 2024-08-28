"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/ui/Cadastro/page",{

/***/ "(app-pages-browser)/./app/ui/Cadastro/page.tsx":
/*!**********************************!*\
  !*** ./app/ui/Cadastro/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cadastro; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _ui_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui.module.css */ \"(app-pages-browser)/./app/ui/ui.module.css\");\n/* harmony import */ var _ui_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Cadastro() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [senha, setSenha] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [dataNasc, setDataNasc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tipo, setTipo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"user\"); // Tipo de usuário, default \"user\"\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const calculateAge = (birthDate)=>{\n        const today = new Date();\n        const birthDateObj = new Date(birthDate);\n        let age = today.getFullYear() - birthDateObj.getFullYear();\n        const monthDifference = today.getMonth() - birthDateObj.getMonth();\n        if (monthDifference < 0 || monthDifference === 0 && today.getDate() < birthDateObj.getDate()) {\n            age--;\n        }\n        return age;\n    };\n    const handleCadastro = async (event)=>{\n        event.preventDefault();\n        const idade = calculateAge(dataNasc);\n        if (idade < 18) {\n            alert(\"Foi identificado que voc\\xea \\xe9 menor de idade, possui apenas \".concat(idade, \" anos. Cempre pe\\xe7a ajuda de um respons\\xe1vel.\"));\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/register\", {\n                email,\n                senha,\n                username,\n                data_nasc: dataNasc,\n                idade,\n                tipo\n            });\n            if (response.status === 201) {\n                setSuccessMessage(\"Usu\\xe1rio registrado com sucesso!\");\n                setErrorMessage(\"\");\n            // Opcional: Redirecionar para a página de login após o cadastro\n            // router.push(\"/login\");\n            } else {\n                setErrorMessage(\"Erro ao registrar usu\\xe1rio. Por favor, tente novamente.\");\n                setSuccessMessage(\"\");\n            }\n        } catch (error) {\n            console.error(\"Erro ao registrar usu\\xe1rio:\", error);\n            setErrorMessage(\"Ocorreu um erro ao tentar registrar. Por favor, tente novamente.\");\n            setSuccessMessage(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginLogo),\n                    children: \"Cadastro\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleCadastro,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"userEmail\",\n                                    children: \"E-mail\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n                                    id: \"userEmail\",\n                                    type: \"email\",\n                                    placeholder: \"E-mail\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"userPassword\",\n                                    children: \"Senha\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n                                    id: \"userPassword\",\n                                    type: \"password\",\n                                    placeholder: \"Senha\",\n                                    value: senha,\n                                    onChange: (e)=>setSenha(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"userName\",\n                                    children: \"Nome de Usu\\xe1rio\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n                                    id: \"userName\",\n                                    type: \"text\",\n                                    placeholder: \"Nome de Usu\\xe1rio\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"userDataNasc\",\n                                    children: \"Data de Nascimento\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n                                    id: \"userDataNasc\",\n                                    type: \"date\",\n                                    value: dataNasc,\n                                    onChange: (e)=>setDataNasc(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this),\n                        errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().errorMessage),\n                            children: errorMessage\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 28\n                        }, this),\n                        successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().successMessage),\n                            children: successMessage\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 30\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().submitBtn),\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_ui_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginLink),\n                    children: [\n                        \"J\\xe1 possui uma conta? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/ui/login\",\n                            children: \"Fa\\xe7a login\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 32\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\ui\\\\Cadastro\\\\page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Cadastro, \"5rPW9ObTUPrMLdI44irnfc3fJJM=\");\n_c = Cadastro;\nvar _c;\n$RefreshReg$(_c, \"Cadastro\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9DYWRhc3Ryby9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDZDtBQUNZO0FBRXZCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDWSxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFDLFNBQVMsa0NBQWtDO0lBQzVFLE1BQU0sQ0FBQ2MsY0FBY0MsZ0JBQWdCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2dCLGdCQUFnQkMsa0JBQWtCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNa0IsZUFBZSxDQUFDQztRQUNwQixNQUFNQyxRQUFRLElBQUlDO1FBQ2xCLE1BQU1DLGVBQWUsSUFBSUQsS0FBS0Y7UUFDOUIsSUFBSUksTUFBTUgsTUFBTUksV0FBVyxLQUFLRixhQUFhRSxXQUFXO1FBQ3hELE1BQU1DLGtCQUFrQkwsTUFBTU0sUUFBUSxLQUFLSixhQUFhSSxRQUFRO1FBRWhFLElBQ0VELGtCQUFrQixLQUNqQkEsb0JBQW9CLEtBQUtMLE1BQU1PLE9BQU8sS0FBS0wsYUFBYUssT0FBTyxJQUNoRTtZQUNBSjtRQUNGO1FBQ0EsT0FBT0E7SUFDVDtJQUVBLE1BQU1LLGlCQUFpQixPQUFPQztRQUM1QkEsTUFBTUMsY0FBYztRQUVwQixNQUFNQyxRQUFRYixhQUFhUjtRQUUzQixJQUFJcUIsUUFBUSxJQUFJO1lBQ2RDLE1BQ0UsbUVBQW1FLE9BQU5ELE9BQU07UUFFdkU7UUFFQSxJQUFJO1lBQ0YsTUFBTUUsV0FBVyxNQUFNaEMsNkNBQUtBLENBQUNpQyxJQUFJLENBQUMsa0NBQWtDO2dCQUNsRTlCO2dCQUNBRTtnQkFDQUU7Z0JBQ0EyQixXQUFXekI7Z0JBQ1hxQjtnQkFDQW5CO1lBQ0Y7WUFFQSxJQUFJcUIsU0FBU0csTUFBTSxLQUFLLEtBQUs7Z0JBQzNCbkIsa0JBQWtCO2dCQUNsQkYsZ0JBQWdCO1lBQ2hCLGdFQUFnRTtZQUNoRSx5QkFBeUI7WUFDM0IsT0FBTztnQkFDTEEsZ0JBQWdCO2dCQUNoQkUsa0JBQWtCO1lBQ3BCO1FBQ0YsRUFBRSxPQUFPb0IsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQThCQTtZQUM1Q3RCLGdCQUFnQjtZQUNoQkUsa0JBQWtCO1FBQ3BCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3NCO1FBQUlDLFdBQVd0QyxpRUFBZ0I7a0JBQzlCLDRFQUFDcUM7WUFBSUMsV0FBV3RDLDREQUFXOzs4QkFDekIsOERBQUN5QztvQkFBR0gsV0FBV3RDLGlFQUFnQjs4QkFBRTs7Ozs7OzhCQUNqQyw4REFBQzJDO29CQUFLQyxVQUFVbEI7O3NDQUNkLDhEQUFDVzs0QkFBSUMsV0FBV3RDLGlFQUFnQjs7OENBQzlCLDhEQUFDOEM7b0NBQU1DLFNBQVE7OENBQVk7Ozs7Ozs4Q0FDM0IsOERBQUNDO29DQUNDVixXQUFXdEMsbUVBQWtCO29DQUM3QmtELElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU9uRDtvQ0FDUG9ELFVBQVUsQ0FBQ0MsSUFBTXBELFNBQVNvRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7b0NBQ3hDSSxRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNwQjs0QkFBSUMsV0FBV3RDLGlFQUFnQjs7OENBQzlCLDhEQUFDOEM7b0NBQU1DLFNBQVE7OENBQWU7Ozs7Ozs4Q0FDOUIsOERBQUNDO29DQUNDVixXQUFXdEMsbUVBQWtCO29DQUM3QmtELElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU9qRDtvQ0FDUGtELFVBQVUsQ0FBQ0MsSUFBTWxELFNBQVNrRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7b0NBQ3hDSSxRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNwQjs0QkFBSUMsV0FBV3RDLGlFQUFnQjs7OENBQzlCLDhEQUFDOEM7b0NBQU1DLFNBQVE7OENBQVc7Ozs7Ozs4Q0FDMUIsOERBQUNDO29DQUNDVixXQUFXdEMsbUVBQWtCO29DQUM3QmtELElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU8vQztvQ0FDUGdELFVBQVUsQ0FBQ0MsSUFBTWhELFlBQVlnRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7b0NBQzNDSSxRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNwQjs0QkFBSUMsV0FBV3RDLGlFQUFnQjs7OENBQzlCLDhEQUFDOEM7b0NBQU1DLFNBQVE7OENBQWU7Ozs7Ozs4Q0FDOUIsOERBQUNDO29DQUNDVixXQUFXdEMsbUVBQWtCO29DQUM3QmtELElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xFLE9BQU83QztvQ0FDUDhDLFVBQVUsQ0FBQ0MsSUFBTTlDLFlBQVk4QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7b0NBQzNDSSxRQUFROzs7Ozs7Ozs7Ozs7d0JBR1g3Qyw4QkFBZ0IsOERBQUM4Qzs0QkFBRXBCLFdBQVd0QyxvRUFBbUI7c0NBQUdZOzs7Ozs7d0JBQ3BERSxnQ0FBa0IsOERBQUM0Qzs0QkFBRXBCLFdBQVd0QyxzRUFBcUI7c0NBQUdjOzs7Ozs7c0NBQ3pELDhEQUFDNkM7NEJBQU9SLE1BQUs7NEJBQVNiLFdBQVd0QyxpRUFBZ0I7c0NBQUU7Ozs7Ozs7Ozs7Ozs4QkFFckQsOERBQUMwRDtvQkFBRXBCLFdBQVd0QyxpRUFBZ0I7O3dCQUFFO3NDQUNULDhEQUFDOEQ7NEJBQUVDLE1BQUs7c0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25EO0dBM0h3QjlEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9DYWRhc3Ryby9wYWdlLnRzeD84MDc5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi91aS5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWRhc3RybygpIHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZW5oYSwgc2V0U2VuaGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGF0YU5hc2MsIHNldERhdGFOYXNjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aXBvLCBzZXRUaXBvXSA9IHVzZVN0YXRlKFwidXNlclwiKTsgLy8gVGlwbyBkZSB1c3XDoXJpbywgZGVmYXVsdCBcInVzZXJcIlxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGVBZ2UgPSAoYmlydGhEYXRlKSA9PiB7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBiaXJ0aERhdGVPYmogPSBuZXcgRGF0ZShiaXJ0aERhdGUpO1xyXG4gICAgbGV0IGFnZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgLSBiaXJ0aERhdGVPYmouZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoRGlmZmVyZW5jZSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGVPYmouZ2V0TW9udGgoKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIG1vbnRoRGlmZmVyZW5jZSA8IDAgfHxcclxuICAgICAgKG1vbnRoRGlmZmVyZW5jZSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGVPYmouZ2V0RGF0ZSgpKVxyXG4gICAgKSB7XHJcbiAgICAgIGFnZS0tO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFnZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYWRhc3RybyA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBpZGFkZSA9IGNhbGN1bGF0ZUFnZShkYXRhTmFzYyk7XHJcblxyXG4gICAgaWYgKGlkYWRlIDwgMTgpIHtcclxuICAgICAgYWxlcnQoXHJcbiAgICAgICAgYEZvaSBpZGVudGlmaWNhZG8gcXVlIHZvY8OqIMOpIG1lbm9yIGRlIGlkYWRlLCBwb3NzdWkgYXBlbmFzICR7aWRhZGV9IGFub3MuIENlbXByZSBwZcOnYSBhanVkYSBkZSB1bSByZXNwb25zw6F2ZWwuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9yZWdpc3RlclwiLCB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgc2VuaGEsXHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgZGF0YV9uYXNjOiBkYXRhTmFzYyxcclxuICAgICAgICBpZGFkZSwgLy8gQSBpZGFkZSDDqSBjYWxjdWxhZGEgcGVsbyBzaXN0ZW1hXHJcbiAgICAgICAgdGlwbyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlVzdcOhcmlvIHJlZ2lzdHJhZG8gY29tIHN1Y2Vzc28hXCIpO1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcclxuICAgICAgICAvLyBPcGNpb25hbDogUmVkaXJlY2lvbmFyIHBhcmEgYSBww6FnaW5hIGRlIGxvZ2luIGFww7NzIG8gY2FkYXN0cm9cclxuICAgICAgICAvLyByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJFcnJvIGFvIHJlZ2lzdHJhciB1c3XDoXJpby4gUG9yIGZhdm9yLCB0ZW50ZSBub3ZhbWVudGUuXCIpO1xyXG4gICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyByZWdpc3RyYXIgdXN1w6FyaW86XCIsIGVycm9yKTtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiT2NvcnJldSB1bSBlcnJvIGFvIHRlbnRhciByZWdpc3RyYXIuIFBvciBmYXZvciwgdGVudGUgbm92YW1lbnRlLlwiKTtcclxuICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Mb2dvfT5DYWRhc3RybzwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUNhZGFzdHJvfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyRW1haWxcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICBpZD1cInVzZXJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyUGFzc3dvcmRcIj5TZW5oYTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250cm9sfVxyXG4gICAgICAgICAgICAgIGlkPVwidXNlclBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuaGFcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZW5oYX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbmhhKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVcIj5Ob21lIGRlIFVzdcOhcmlvPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRyb2x9XHJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkZSBVc3XDoXJpb1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyRGF0YU5hc2NcIj5EYXRhIGRlIE5hc2NpbWVudG88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udHJvbH1cclxuICAgICAgICAgICAgICBpZD1cInVzZXJEYXRhTmFzY1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRhTmFzY31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERhdGFOYXNjKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yTWVzc2FnZX08L3A+fVxyXG4gICAgICAgICAge3N1Y2Nlc3NNZXNzYWdlICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN1Y2Nlc3NNZXNzYWdlfT57c3VjY2Vzc01lc3NhZ2V9PC9wPn1cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdEJ0bn0+Q2FkYXN0cmFyPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luTGlua30+XHJcbiAgICAgICAgICBKw6EgcG9zc3VpIHVtYSBjb250YT8gPGEgaHJlZj1cIi91aS9sb2dpblwiPkZhw6dhIGxvZ2luPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJzdHlsZXMiLCJDYWRhc3RybyIsImVtYWlsIiwic2V0RW1haWwiLCJzZW5oYSIsInNldFNlbmhhIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImRhdGFOYXNjIiwic2V0RGF0YU5hc2MiLCJ0aXBvIiwic2V0VGlwbyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJjYWxjdWxhdGVBZ2UiLCJiaXJ0aERhdGUiLCJ0b2RheSIsIkRhdGUiLCJiaXJ0aERhdGVPYmoiLCJhZ2UiLCJnZXRGdWxsWWVhciIsIm1vbnRoRGlmZmVyZW5jZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImhhbmRsZUNhZGFzdHJvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkYWRlIiwiYWxlcnQiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhX25hc2MiLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJjYXJkIiwiaDEiLCJsb2dpbkxvZ28iLCJmb3JtIiwib25TdWJtaXQiLCJmb3JtR3JvdXAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImZvcm1Db250cm9sIiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwicCIsImJ1dHRvbiIsInN1Ym1pdEJ0biIsImxvZ2luTGluayIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/Cadastro/page.tsx\n"));

/***/ })

});