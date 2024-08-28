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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const loginPopupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const categoryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [receitas, setReceitas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchReceitas() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/receitas\");\n                console.log(response.data); // Adicione este log para verificar os dados no console\n                setReceitas(response.data);\n            } catch (error) {\n                console.error(\"Erro ao buscar receitas:\", error);\n            }\n        }\n        fetchReceitas();\n    }, []);\n    const openPopup = (event)=>{\n        event.preventDefault();\n        if (loginPopupRef.current) {\n            loginPopupRef.current.style.display = \"block\";\n        }\n    };\n    const closePopup = ()=>{\n        if (loginPopupRef.current) {\n            loginPopupRef.current.style.display = \"none\";\n        }\n    };\n    const filterGallery = ()=>{\n        if (categoryRef.current) {\n            const selectedCategory = categoryRef.current.value;\n            const figures = document.querySelectorAll(\".gallery-row figure\");\n            figures.forEach((figure)=>{\n                if (selectedCategory === \"all\" || figure.classList.contains(selectedCategory)) {\n                    figure.style.display = \"block\";\n                } else {\n                    figure.style.display = \"none\";\n                }\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainmenu),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().carrossel),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center\",\n                            children: \"Projeto Culin\\xe1ria\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().dots),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"active\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    id: \"gallery\",\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().gallery),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Galeria\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().filter),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"category\",\n                                        children: \"Filtrar por categoria:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        id: \"category\",\n                                        ref: categoryRef,\n                                        onChange: filterGallery,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"all\",\n                                                children: \"Todos\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"massas\",\n                                                children: \"Massas\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"caldos\",\n                                                children: \"Caldos\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"sobremesas\",\n                                                children: \"Sobremesas\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().gallery_row),\n                                children: receitas.map((receita)=>{\n                                    // Processa o nome da receita para gerar o nome do arquivo da imagem\n                                    const imagemSrc = \"/images/\".concat(receita.nome.toLowerCase().replace(/\\s+/g, \"-\"), \".jpg\");\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().receita),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: imagemSrc,\n                                                alt: receita.nome\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                                                children: receita.nome\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                href: \"/entidades/receita/\".concat(receita.id),\n                                                children: \"Ver Receita\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, receita.id, true, {\n                                        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\MatheusT\\\\UFSJ\\\\7\\xba semestre\\\\TecWeb\\\\projetoTecWeb\\\\EntregaFinal\\\\projeto_culinaria-main\\\\projeto_culinaria\\\\app\\\\page.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"8yXAobxD3orDgeINhdNUuyuFz/E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQzFCO0FBQ2E7QUFDVjtBQUVkLFNBQVNNOztJQUN0QixNQUFNQyxnQkFBZ0JQLDZDQUFNQSxDQUFpQjtJQUM3QyxNQUFNUSxjQUFjUiw2Q0FBTUEsQ0FBb0I7SUFDOUMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVU7WUFDYixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVQsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQztnQkFDakNDLFFBQVFDLEdBQUcsQ0FBQ0gsU0FBU0ksSUFBSSxHQUFHLHVEQUF1RDtnQkFDbkZOLFlBQVlFLFNBQVNJLElBQUk7WUFDM0IsRUFBRSxPQUFPQyxPQUFPO2dCQUNkSCxRQUFRRyxLQUFLLENBQUMsNEJBQTRCQTtZQUM1QztRQUNGO1FBRUFOO0lBQ0YsR0FBRyxFQUFFO0lBR0wsTUFBTU8sWUFBWSxDQUFDQztRQUNqQkEsTUFBTUMsY0FBYztRQUNwQixJQUFJYixjQUFjYyxPQUFPLEVBQUU7WUFDekJkLGNBQWNjLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUc7UUFDeEM7SUFDRjtJQUVBLE1BQU1DLGFBQWE7UUFDakIsSUFBSWpCLGNBQWNjLE9BQU8sRUFBRTtZQUN6QmQsY0FBY2MsT0FBTyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRztRQUN4QztJQUNGO0lBRUEsTUFBTUUsZ0JBQWdCO1FBQ3BCLElBQUlqQixZQUFZYSxPQUFPLEVBQUU7WUFDdkIsTUFBTUssbUJBQW1CbEIsWUFBWWEsT0FBTyxDQUFDTSxLQUFLO1lBQ2xELE1BQU1DLFVBQVVDLFNBQVNDLGdCQUFnQixDQUFDO1lBRTFDRixRQUFRRyxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ2YsSUFDRU4scUJBQXFCLFNBQ3JCTSxPQUFPQyxTQUFTLENBQUNDLFFBQVEsQ0FBQ1IsbUJBQzFCO29CQUNDTSxPQUF1QlYsS0FBSyxDQUFDQyxPQUFPLEdBQUc7Z0JBQzFDLE9BQU87b0JBQ0pTLE9BQXVCVixLQUFLLENBQUNDLE9BQU8sR0FBRztnQkFDMUM7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ1k7WUFBSUMsV0FBV2hDLGtFQUFlOzs4QkFDN0IsOERBQUNrQztvQkFBUUYsV0FBV2hDLG1FQUFnQjs7c0NBQ2xDLDhEQUFDb0M7NEJBQUdKLFdBQVU7c0NBQWM7Ozs7OztzQ0FFNUIsOERBQUNEOzRCQUFJQyxXQUFXaEMsOERBQVc7OzhDQUN6Qiw4REFBQ3NDO29DQUFPTixXQUFVOzs7Ozs7OENBQ2xCLDhEQUFDTTs7Ozs7OENBQ0QsOERBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJTCw4REFBQ0o7b0JBQVFLLElBQUc7b0JBQVVQLFdBQVdoQyxpRUFBYzs4QkFDN0MsNEVBQUMrQjt3QkFBSUMsV0FBV2hDLG1FQUFnQjs7MENBQzlCLDhEQUFDMEM7MENBQUc7Ozs7OzswQ0FFSiw4REFBQ1g7Z0NBQUlDLFdBQVdoQyxnRUFBYTs7a0RBQzNCLDhEQUFDNEM7d0NBQU1DLFNBQVE7a0RBQVc7Ozs7OztrREFDMUIsOERBQUNDO3dDQUFPUCxJQUFHO3dDQUFXUSxLQUFLM0M7d0NBQWE0QyxVQUFVM0I7OzBEQUNoRCw4REFBQzRCO2dEQUFPMUIsT0FBTTswREFBTTs7Ozs7OzBEQUNwQiw4REFBQzBCO2dEQUFPMUIsT0FBTTswREFBUzs7Ozs7OzBEQUN2Qiw4REFBQzBCO2dEQUFPMUIsT0FBTTswREFBUzs7Ozs7OzBEQUN2Qiw4REFBQzBCO2dEQUFPMUIsT0FBTTswREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUkvQiw4REFBQ1E7Z0NBQUlDLFdBQVdoQyxxRUFBa0I7MENBQ2pDSyxTQUFTOEMsR0FBRyxDQUFDLENBQUNDO29DQUNiLG9FQUFvRTtvQ0FDcEUsTUFBTUMsWUFBWSxXQUEyRCxPQUFoREQsUUFBUUUsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxRQUFRLE1BQUs7b0NBQzdFLHFCQUNFLDhEQUFDNUI7d0NBQXdCSSxXQUFXaEMsaUVBQWM7OzBEQUNoRCw4REFBQ3lEO2dEQUFJQyxLQUFLTDtnREFBV00sS0FBS1AsUUFBUUUsSUFBSTs7Ozs7OzBEQUN0Qyw4REFBQ007MERBQVlSLFFBQVFFLElBQUk7Ozs7OzswREFDekIsOERBQUNyRCxpREFBSUE7Z0RBQUM0RCxNQUFNLHNCQUFpQyxPQUFYVCxRQUFRYixFQUFFOzBEQUFJOzs7Ozs7O3VDQUhyQ2EsUUFBUWIsRUFBRTs7Ozs7Z0NBTTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWjtHQWhHd0JyQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBsb2dpblBvcHVwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBjYXRlZ29yeVJlZiA9IHVzZVJlZjxIVE1MU2VsZWN0RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW3JlY2VpdGFzLCBzZXRSZWNlaXRhc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFJlY2VpdGFzKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3JlY2VpdGFzXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpOyAvLyBBZGljaW9uZSBlc3RlIGxvZyBwYXJhIHZlcmlmaWNhciBvcyBkYWRvcyBubyBjb25zb2xlXHJcbiAgICAgICAgc2V0UmVjZWl0YXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYnVzY2FyIHJlY2VpdGFzOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFJlY2VpdGFzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3Qgb3BlblBvcHVwID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChsb2dpblBvcHVwUmVmLmN1cnJlbnQpIHtcclxuICAgICAgbG9naW5Qb3B1cFJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHtcclxuICAgIGlmIChsb2dpblBvcHVwUmVmLmN1cnJlbnQpIHtcclxuICAgICAgbG9naW5Qb3B1cFJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmaWx0ZXJHYWxsZXJ5ID0gKCkgPT4ge1xyXG4gICAgaWYgKGNhdGVnb3J5UmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgIGNvbnN0IGZpZ3VyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnktcm93IGZpZ3VyZVwiKTtcclxuXHJcbiAgICAgIGZpZ3VyZXMuZm9yRWFjaCgoZmlndXJlKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCJhbGxcIiB8fFxyXG4gICAgICAgICAgZmlndXJlLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RlZENhdGVnb3J5KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgKGZpZ3VyZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgKGZpZ3VyZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbm1lbnV9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhcnJvc3NlbH0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Qcm9qZXRvIEN1bGluw6FyaWE8L2gxPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG90c30+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aXZlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24+PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZ2FsbGVyeVwiIGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDI+R2FsZXJpYTwvaDI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVwiPkZpbHRyYXIgcG9yIGNhdGVnb3JpYTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJjYXRlZ29yeVwiIHJlZj17Y2F0ZWdvcnlSZWZ9IG9uQ2hhbmdlPXtmaWx0ZXJHYWxsZXJ5fT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5Ub2Rvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hc3Nhc1wiPk1hc3Nhczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhbGRvc1wiPkNhbGRvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNvYnJlbWVzYXNcIj5Tb2JyZW1lc2FzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5X3Jvd30+XHJcbiAgICAgICAgICAgIHtyZWNlaXRhcy5tYXAoKHJlY2VpdGEpID0+IHtcclxuICAgICAgICAgICAgICAvLyBQcm9jZXNzYSBvIG5vbWUgZGEgcmVjZWl0YSBwYXJhIGdlcmFyIG8gbm9tZSBkbyBhcnF1aXZvIGRhIGltYWdlbVxyXG4gICAgICAgICAgICAgIGNvbnN0IGltYWdlbVNyYyA9IGAvaW1hZ2VzLyR7cmVjZWl0YS5ub21lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpfS5qcGdgO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGtleT17cmVjZWl0YS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMucmVjZWl0YX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZW1TcmN9IGFsdD17cmVjZWl0YS5ub21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj57cmVjZWl0YS5ub21lfTwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9lbnRpZGFkZXMvcmVjZWl0YS8ke3JlY2VpdGEuaWR9YH0+VmVyIFJlY2VpdGE8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJzdHlsZXMiLCJMaW5rIiwiSG9tZSIsImxvZ2luUG9wdXBSZWYiLCJjYXRlZ29yeVJlZiIsInJlY2VpdGFzIiwic2V0UmVjZWl0YXMiLCJmZXRjaFJlY2VpdGFzIiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwib3BlblBvcHVwIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJjbG9zZVBvcHVwIiwiZmlsdGVyR2FsbGVyeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJ2YWx1ZSIsImZpZ3VyZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZmlndXJlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWlubWVudSIsInNlY3Rpb24iLCJjYXJyb3NzZWwiLCJoMSIsImRvdHMiLCJidXR0b24iLCJpZCIsImdhbGxlcnkiLCJjb250YWluZXIiLCJoMiIsImZpbHRlciIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsInJlZiIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiZ2FsbGVyeV9yb3ciLCJtYXAiLCJyZWNlaXRhIiwiaW1hZ2VtU3JjIiwibm9tZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImltZyIsInNyYyIsImFsdCIsImZpZ2NhcHRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});