"use strict";
exports.id = 653;
exports.ids = [653];
exports.modules = {

/***/ 653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlgoliaSearchContext": () => (/* binding */ AlgoliaSearchContext),
/* harmony export */   "AlgoliaSearchProvider": () => (/* binding */ AlgoliaSearchProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docsearch_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8781);
/* harmony import */ var _docsearch_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_docsearch_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);







let DocSearchModal = null;
function Hit({ hit , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: hit.url,
        legacyBehavior: true,
        children: children
    });
}
const AlgoliaSearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_5__.createContext)({});
function AlgoliaSearchProvider({ children , ...props }) {
    const { algoliaConfig  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [initialQuery, setInitialQuery] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(undefined);
    const importDocSearchModalIfNeeded = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (DocSearchModal) {
            return Promise.resolve();
        }
        return Promise.all([
            __webpack_require__.e(/* import() */ 593).then(__webpack_require__.bind(__webpack_require__, 6593))
        ]).then(([{ DocSearchModal: Modal  }])=>{
            // eslint-disable-next-line
            DocSearchModal = Modal;
        });
    }, []);
    const onOpen = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        importDocSearchModalIfNeeded().then(()=>{
            setIsOpen(true);
        });
    }, [
        importDocSearchModalIfNeeded,
        setIsOpen
    ]);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        setIsOpen(false);
    }, [
        setIsOpen
    ]);
    const onInput = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((event)=>{
        importDocSearchModalIfNeeded().then(()=>{
            setIsOpen(true);
            setInitialQuery(event.key);
        });
    }, [
        importDocSearchModalIfNeeded,
        setIsOpen,
        setInitialQuery
    ]);
    const navigator = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)({
        navigate ({ itemUrl  }) {
            // Algolia results could contain URL's from other domains which cannot
            // be served through history and should navigate with window.location
            const isInternalLink = itemUrl.startsWith("/");
            const isAnchorLink = itemUrl.startsWith("#");
            if (!isInternalLink && !isAnchorLink) {
                window.location.href = itemUrl;
            } else {
                router.push(itemUrl);
            }
        }
    }).current;
    const transformItems = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)((items)=>items.map((item)=>{
            // If Algolia contains a external domain, we should navigate without
            // relative URL
            const isInternalLink = item.url.startsWith("/");
            const isAnchorLink = item.url.startsWith("#");
            if (!isInternalLink && !isAnchorLink) {
                return item;
            }
            // We transform the absolute URL into a relative URL.
            const url = new URL(item.url);
            return {
                ...item,
                // url: withBaseUrl(`${url.pathname}${url.hash}`),
                url: `${url.pathname}${url.hash}`
            };
        })).current;
    (0,_docsearch_react__WEBPACK_IMPORTED_MODULE_1__.useDocSearchKeyboardEvents)({
        isOpen,
        onOpen,
        onClose,
        onInput
    });
    const providerValue = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>({
            query: {
                setSearch: setInitialQuery,
                toggle: onOpen
            }
        }), [
        setInitialQuery,
        onOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AlgoliaSearchContext.Provider, {
        value: providerValue,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "preconnect",
                    href: `https://${algoliaConfig.appId}-dsn.algolia.net`,
                    crossOrigin: "anonymous"
                })
            }),
            children,
            isOpen && DocSearchModal && /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_6__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DocSearchModal, {
                onClose: onClose,
                initialScrollY: window.scrollY,
                initialQuery: initialQuery,
                navigator: navigator,
                transformItems: transformItems,
                hitComponent: Hit,
                ...algoliaConfig
            }), document.body)
        ]
    });
}


/***/ })

};
;