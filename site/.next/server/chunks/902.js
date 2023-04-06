"use strict";
exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 902:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProfiles)
/* harmony export */ });
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__]);
contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getProfiles() {
    return contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__/* .allProfiles.filter */ .nk.filter((profile)=>!(profile.curation_status.includes("N") || profile.curation_status.includes("?")));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;