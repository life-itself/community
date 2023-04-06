"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 5555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPodcasts)
/* harmony export */ });
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__]);
contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getPodcasts() {
    // everything from podcast folder except index
    return contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__/* .allPodcasts.filter */ .ch.filter((episode)=>episode.url_path !== "podcast").sort((a, b)=>new Date(b.date) - new Date(a.date));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;