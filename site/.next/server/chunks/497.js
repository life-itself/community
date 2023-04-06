"use strict";
exports.id = 497;
exports.ids = [497];
exports.modules = {

/***/ 3497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSlicedPosts)
/* harmony export */ });
/* harmony import */ var _blogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9502);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_blogs__WEBPACK_IMPORTED_MODULE_0__]);
_blogs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getSlicedPosts() {
    const posts = await (0,_blogs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    return posts.slice(0, 9);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;