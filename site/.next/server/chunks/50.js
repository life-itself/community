"use strict";
exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 8653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "KBarSearchProvider": () => (/* binding */ KBarSearchProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "kbar"
var external_kbar_ = __webpack_require__(3437);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/search/KBarPortal.jsx




const formatDate = (date, locale = "en-US")=>{
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const now = new Date(date).toLocaleDateString(locale, options);
    return now;
};
const nameFromUrl = (url)=>{
    const name = url.split("/").slice(-1)[0].replace("-", " ");
    return name.charAt(0).toUpperCase() + name.slice(1);
};
function Portal({ searchDocumentsPath  }) {
    const [searchActions, setSearchActions] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const mapPosts = (posts)=>{
            const actions = [];
            for (const post of posts){
                // excluding home path as this is defined in starting actions
                post.url_path && actions.push({
                    id: post.url_path,
                    name: post.title ?? nameFromUrl(post.url_path),
                    keywords: post.description ?? "",
                    section: post.sourceDir ?? "Page",
                    subtitle: post.date && formatDate(post.date, "en-US"),
                    perform: ()=>router_default().push(`/${post.url_path}`)
                });
            }
            return actions;
        };
        async function fetchData() {
            const res = await fetch(searchDocumentsPath);
            const json = await res.json();
            const actions = mapPosts(json);
            setSearchActions(actions);
        }
        fetchData();
    }, [
        searchDocumentsPath
    ]);
    (0,external_kbar_.useRegisterActions)(searchActions, [
        searchActions
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_kbar_.KBarPortal, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_kbar_.KBarPositioner, {
            className: "bg-gray-300/50 p-4 backdrop-blur backdrop-filter dark:bg-black/50",
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_kbar_.KBarAnimator, {
                className: "w-full max-w-xl",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center space-x-4 p-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "block w-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "text-gray-400 dark:text-gray-300",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_kbar_.KBarSearch, {
                                    className: "h-8 w-full bg-transparent text-slate-600 placeholder-slate-400 focus:outline-none dark:text-slate-200 dark:placeholder-slate-500"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "inline-block whitespace-nowrap rounded border border-slate-400/70 px-1.5 align-middle font-medium leading-4 tracking-wide text-slate-500 [font-size:10px] dark:border-slate-600 dark:text-slate-400",
                                    children: "ESC"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RenderResults, {})
                    ]
                })
            })
        })
    });
}
function RenderItem(props) {
    const { item , active  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: typeof item === "string" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "pt-3",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-primary-600 block border-t border-gray-100 px-4 pt-6 pb-2 text-xs font-semibold uppercase dark:border-gray-800",
                children: item
            })
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `block cursor-pointer px-4 py-2 text-gray-600 dark:text-gray-200 ${active ? "bg-primary-600" : "bg-transparent"}`,
            children: [
                (item === null || item === void 0 ? void 0 : item.subtitle) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${active ? "text-gray-200" : "text-gray-400 dark:text-gray-500"} text-xs`,
                    children: item.subtitle
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: item === null || item === void 0 ? void 0 : item.name
                })
            ]
        })
    });
}
function RenderResults() {
    const { results  } = (0,external_kbar_.useMatches)();
    if (results.length) {
        return /*#__PURE__*/ jsx_runtime_.jsx(external_kbar_.KBarResults, {
            items: results,
            onRender: RenderItem
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600",
        children: "No results for your search..."
    });
}

;// CONCATENATED MODULE: ./components/search/KBarModal.jsx



function KBarModal({ searchDocumentsPath , startingActions , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_kbar_.KBarProvider, {
        actions: startingActions,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Portal, {
                searchDocumentsPath: searchDocumentsPath
            }),
            children
        ]
    });
}

;// CONCATENATED MODULE: ./components/search/KBar.jsx



function KBarSearchProvider({ kbarConfig , children  }) {
    const defaultActions = kbarConfig === null || kbarConfig === void 0 ? void 0 : kbarConfig.defaultActions;
    const searchDocumentsPath = "search.json";
    let startingActions = [
        {
            id: "homepage",
            name: "Homepage",
            keywords: "",
            section: "Home",
            perform: ()=>router_default().push("/")
        }
    ];
    if (defaultActions && Array.isArray(defaultActions)) startingActions = [
        ...startingActions,
        ...defaultActions
    ];
    return KBarModal ? /*#__PURE__*/ jsx_runtime_.jsx(KBarModal, {
        startingActions: startingActions,
        searchDocumentsPath: searchDocumentsPath,
        children: children
    }) : children;
}


/***/ })

};
;