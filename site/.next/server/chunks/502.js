"use strict";
exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 9502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBlogs)
/* harmony export */ });
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4427);
/* harmony import */ var _config_siteConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9907);
/* harmony import */ var _lib_parseMarkdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1239);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__]);
contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function getBlogs(slicedPosts = 30) {
    const authors = contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__/* .allDocuments.filter */ .cx.filter((doc)=>doc.type === "Person");
    const blogs = contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__/* .allBlogs.filter */ .R6.filter((post)=>!post.isDraft).map((post)=>({
            ...post,
            description: post.description ?? (0,_lib_parseMarkdown__WEBPACK_IMPORTED_MODULE_2__/* .parseMarkdown */ .e)(post.body.raw),
            authors: authors.filter((author)=>post.authors.includes(author["id"])) ?? [
                _config_siteConfig__WEBPACK_IMPORTED_MODULE_1__/* .siteConfig.author */ .J.author
            ]
        })).sort((a, b)=>new Date(b.created) - new Date(a.created));
    return blogs.slice(0, slicedPosts);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ parseMarkdown)
/* harmony export */ });
// custom function to get only paragraphs from raw markdown (eg. page.body.raw)
// used in place of page's description if not present.
function parseMarkdown(markdownText) {
    // Replace bold text
    markdownText = markdownText.replace(/\*\*(.*?)\*\*/g, "$1");
    // Replace italic text
    markdownText = markdownText.replace(/\*(.*?)\*/g, "$1");
    // remove headings
    markdownText = markdownText.replace(/#+\s+(.*?)\n/g, "");
    // remove unordered lists
    markdownText = markdownText.replace(/\n- (.*)/g, "");
    // remove ordered lists
    markdownText = markdownText.replace(/\n\d+\.(.*)/g, "");
    // Replace links
    markdownText = markdownText.replace(/\[(.*?)\]\((.*?)\)/g, "$1");
    // Remove youtube links
    markdownText = markdownText.replace(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gm, "");
    // remove images
    markdownText = markdownText.replace(/!\[(.*?)\]\((.*?)\)/g, "");
    // Remove HTML elements
    markdownText = markdownText.replace(/<[^>]*>/g, "");
    return markdownText;
}


/***/ })

};
;