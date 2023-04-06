"use strict";
(() => {
var exports = {};
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 4864:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ All),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4427);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__]);
contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint import/no-default-export: off */ 


function All({ pages  }) {
    const labels = new Set(pages.map((p)=>p.wikiPage.charAt(0)));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
                title: "All pages"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "prose dark:prose-invert p-6 mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "A-Z Index"
                    }),
                    Array.from(labels).map((pageTitle)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ml-2 pt-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: pageTitle
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                    className: "m-0 w-full border-black dark:border-gray-700"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "list-disc flex flex-wrap",
                                    children: pages.map(({ wikiPage , wikiPath  })=>pageTitle === wikiPage.charAt(0) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "pr-8 w-fit",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: wikiPath,
                                                children: wikiPage
                                            })
                                        }, wikiPath))
                                })
                            ]
                        }, pageTitle))
                ]
            })
        ]
    });
}
async function getStaticProps() {
    const pages = contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allPages.map */ .vI.map((page)=>{
        /* eslint no-underscore-dangle: off */ const wikiPath = page._raw.flattenedPath;
        const wikiPage = wikiPath.split("/").pop().replace(/-/g, " ").replace(/^(\w)(.+)/, (match, p1, p2)=>p1.toUpperCase() + p2.toLowerCase());
        return {
            wikiPage,
            wikiPath
        };
    }).filter((page)=>page.wikiPath !== "") // exclude homepage
    .sort((a, b)=>a.wikiPage.localeCompare(b.wikiPage));
    return {
        props: {
            pages
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7008:
/***/ ((module) => {

module.exports = import("contentlayer/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [427], () => (__webpack_exec__(4864)));
module.exports = __webpack_exports__;

})();