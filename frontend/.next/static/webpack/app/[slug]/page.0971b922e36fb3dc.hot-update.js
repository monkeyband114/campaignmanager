"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[slug]/page",{

/***/ "(app-pages-browser)/./app/[slug]/page.jsx":
/*!*****************************!*\
  !*** ./app/[slug]/page.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStaticPaths: function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dateformat */ \"(app-pages-browser)/./node_modules/dateformat/lib/dateformat.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ getStaticPaths,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Campaign = (param)=>{\n    let { params } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const datafetchme = async ()=>{\n            const response = await fetch(\"\".concat(\"http://127.0.0.1:8000/api\", \"/campaigns/\").concat(params.slug));\n            const datas = await response.json();\n            // console.log('datas:>', datas)\n            setData(datas);\n        };\n        datafetchme();\n    }, []);\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n    };\n    const handleSubscriber = async (e)=>{\n        e.preventDefault();\n        setSubmitting(true);\n        // data posting\n        try {\n            const response = await fetch(\"\".concat(\"http://127.0.0.1:8000/api\", \"/subscriber\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    campaign: data.id\n                })\n            });\n            console.log(\"email:\", email);\n            console.log(data.id);\n            if (response.ok) {\n                router.push(\"/\");\n            }\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setSubmitting(false);\n        }\n        // console.log(`Subscribed with email: ${email}`);\n        setEmail(\"\"); // Clear the email input after submission.\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full p-4 flex flex-col items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded flex flex-col xl:flex-row overflow-hidden w-[80%] shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: \"https://res.cloudinary.com/dteas1mca/\" + data.logo,\n                    width: 150,\n                    height: 150,\n                    alt: data.title,\n                    className: \"w-full rounded-sm\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-6 py-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-bold text-xl mb-2\",\n                                    children: data.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-white text-base\",\n                                    children: data.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-6 py-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubscriber,\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        value: email,\n                                        onChange: handleEmailChange,\n                                        placeholder: \"Enter your email\",\n                                        className: \"rounded-l-lg px-4 py-2 w-2/3 focus:outline-none focus:ring text-black focus:border-blue-300\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        disabled: submitting,\n                                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg\",\n                                        children: \"Subscribe\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n            lineNumber: 67,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MICHEAL VOKE\\\\Desktop\\\\Web Dev\\\\JAVASCRIPT\\\\campaignapp\\\\app\\\\[slug]\\\\page.jsx\",\n        lineNumber: 66,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Campaign, \"jpZK8uX1v7CP1Wg1XqT2mo9IIBk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Campaign;\nasync function getStaticPaths() {\n    const response = await fetch(\"\".concat(\"http://127.0.0.1:8000/api\", \"/campaigns\"));\n    const data = await response.json();\n    const allData = data.map((item)=>item.slug);\n    const paths = allData.map((slug)=>({\n            params: {\n                slug: slug\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Campaign);\nvar _c;\n$RefreshReg$(_c, \"Campaign\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VixPQUFPLE1BQU1RLFNBQVNPLElBQUk7SUFFaEMsTUFBTXNDLFVBQVVyRCxLQUFLc0QsR0FBRyxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLMUMsSUFBSTtJQUUxQyxNQUFNMkMsUUFBUUgsUUFBUUMsR0FBRyxDQUFDekMsQ0FBQUEsT0FBUztZQUFDZCxRQUFRO2dCQUFDYyxNQUFNQTtZQUFJO1FBQUM7SUFFeEQsT0FBTztRQUNMMkM7UUFDQUMsVUFBVTtJQUNaO0FBQ0Y7QUFLQSwrREFBZTNELFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tzbHVnXS9wYWdlLmpzeD8zZGNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGRhdGVGb3JtYXQgZnJvbSAnZGF0ZWZvcm1hdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE51bml0byB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xyXG5cclxuY29uc3QgQ2FtcGFpZ24gPSAoe3BhcmFtc30pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgXHJcbiAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7ICAgXHJcbiAgICBjb25zdCBkYXRhZmV0Y2htZSA9IGFzeW5jICgpID0+e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfS9jYW1wYWlnbnMvJHtwYXJhbXMuc2x1Z31gKVxyXG5cclxuICAgICAgY29uc3QgZGF0YXMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGFzOj4nLCBkYXRhcylcclxuICAgICAgc2V0RGF0YShkYXRhcyk7XHJcbiAgICB9XHJcbiAgICBkYXRhZmV0Y2htZSgpO1xyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIFxyXG5cclxuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3Vic2NyaWJlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTdWJtaXR0aW5nKHRydWUpXHJcbiAgICAvLyBkYXRhIHBvc3RpbmdcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L3N1YnNjcmliZXJgLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIGNhbXBhaWduOiBkYXRhLmlkXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnZW1haWw6JywgZW1haWwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmlkKVxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spe1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIFxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgU3Vic2NyaWJlZCB3aXRoIGVtYWlsOiAke2VtYWlsfWApO1xyXG4gICAgc2V0RW1haWwoJycpOyAvLyBDbGVhciB0aGUgZW1haWwgaW5wdXQgYWZ0ZXIgc3VibWlzc2lvbi5cclxuICB9O1xyXG5cclxuICBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBwLTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIGZsZXggZmxleC1jb2wgeGw6ZmxleC1yb3cgb3ZlcmZsb3ctaGlkZGVuIHctWzgwJV0gc2hhZG93LWxnXCI+XHJcbiAgICAgIDxJbWFnZSBzcmM9e1wiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHRlYXMxbWNhL1wiKyBkYXRhLmxvZ299IHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfSBhbHQ9e2RhdGEudGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXNtXCIgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTJcIj57ZGF0YS50aXRsZX08L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtYmFzZVwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XHJcbiAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgcHgtMyBweS0xIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1yLTJcIj57ZGF0ZUZvcm1hdChuZXcgRGF0ZShkYXRhLmNyZWF0ZWRfYXQpKX08L3NwYW4+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIEVtYWlsIFN1YnNjcmlwdGlvbiBGb3JtICovfVxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3Vic2NyaWJlcn0gY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWwtbGcgcHgtNCBweS0yIHctMi8zIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHRleHQtYmxhY2sgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLXItbGdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3Vic2NyaWJlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L2NhbXBhaWduc2ApXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGFsbERhdGEgPSBkYXRhLm1hcChpdGVtID0+IGl0ZW0uc2x1ZylcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBhbGxEYXRhLm1hcChzbHVnID0+ICh7cGFyYW1zOiB7c2x1Zzogc2x1Z319KSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ247ICAgIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImRhdGVGb3JtYXQiLCJMaW5rIiwiQ2FtcGFpZ24iLCJwYXJhbXMiLCJkYXRhIiwic2V0RGF0YSIsImVtYWlsIiwic2V0RW1haWwiLCJzdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsInJvdXRlciIsImRhdGFmZXRjaG1lIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsInNsdWciLCJkYXRhcyIsImpzb24iLCJoYW5kbGVFbWFpbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1YnNjcmliZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNhbXBhaWduIiwiaWQiLCJjb25zb2xlIiwibG9nIiwib2siLCJwdXNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJsb2dvIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJkaXNhYmxlZCIsImdldFN0YXRpY1BhdGhzIiwiYWxsRGF0YSIsIm1hcCIsIml0ZW0iLCJwYXRocyIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[slug]/page.jsx\n"));

/***/ })

});