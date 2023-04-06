(() => {
var exports = {};
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 4960:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./blogs.js": [
		9502,
		502
	],
	"./podcasts.js": [
		5555,
		555
	],
	"./profiles.js": [
		902,
		902
	],
	"./slicedposts.js": [
		3497,
		502,
		497
	],
	"./topics.js": [
		7921,
		921
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 4960;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./blog": 5341,
	"./blog.jsx": 5341,
	"./docs": 6506,
	"./docs.jsx": 6506,
	"./initiatives": 8147,
	"./initiatives.jsx": 8147,
	"./people": 4128,
	"./people.jsx": 4128,
	"./podcast": 9968,
	"./podcast.jsx": 9968,
	"./profile": 173,
	"./profile.jsx": 173,
	"./simple": 2850,
	"./simple.jsx": 2850,
	"./unstyled": 8849,
	"./unstyled.jsx": 8849
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9618;

/***/ }),

/***/ 2815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ CustomLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function CustomLink({ href , ...rest }) {
    const isInternalLink = href && href.startsWith("/");
    const isAnchorLink = href && href.startsWith("#");
    if (isInternalLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            ...rest
        });
    }
    if (isAnchorLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            ...rest
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        ...rest
    });
}


/***/ }),

/***/ 9503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ MdxPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9907);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2815);
/* harmony import */ var _Pre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97);
/* harmony import */ var _Mermaid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Mermaid__WEBPACK_IMPORTED_MODULE_6__]);
_Mermaid__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const components = {
    Head: (next_head__WEBPACK_IMPORTED_MODULE_2___default()),
    a: _Link__WEBPACK_IMPORTED_MODULE_4__/* .CustomLink */ .x,
    pre: _Pre__WEBPACK_IMPORTED_MODULE_5__/* .Pre */ .S,
    mermaid: _Mermaid__WEBPACK_IMPORTED_MODULE_6__/* .Mermaid */ .G,
    wrapper: ({ layout , ...rest })=>{
        const Layout = __webpack_require__(9618)(`./${layout}`).default;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
            ...rest
        });
    }
};
function MdxPage({ mdxComponent , frontMatter , ...rest }) {
    var ref, ref1;
    const Component = mdxComponent;
    // Handle SEO Image urls in frontmatter
    const websiteUrl = _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.authorUrl.replace */ .J.authorUrl.replace(/\/+$/, "");
    const frontMatterImage = typeof (frontMatter === null || frontMatter === void 0 ? void 0 : frontMatter.image) === "string" && frontMatter.image;
    const seoImageUrl = frontMatterImage && frontMatterImage.startsWith("http") ? frontMatterImage : websiteUrl + frontMatterImage;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                title: frontMatter.title,
                openGraph: {
                    title: frontMatter.title,
                    description: frontMatter.description,
                    images: frontMatter.image ? [
                        {
                            url: seoImageUrl,
                            width: 1200,
                            height: 627,
                            alt: frontMatter.title
                        }
                    ] : (_config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig */ .J === null || _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig */ .J === void 0 ? void 0 : (ref = _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.nextSeo */ .J.nextSeo) === null || ref === void 0 ? void 0 : (ref1 = ref.openGraph) === null || ref1 === void 0 ? void 0 : ref1.images) || []
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                layout: frontMatter.layout,
                components: components,
                frontMatter: frontMatter,
                ...rest
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ Mermaid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([mermaid__WEBPACK_IMPORTED_MODULE_1__]);
mermaid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function Mermaid(props) {
    const { chart  } = props;
    mermaid__WEBPACK_IMPORTED_MODULE_1__["default"].initialize({
        fontFamily: "inherit",
        flowchart: {
            nodeSpacing: 100
        }
    });
    return chart ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mermaid",
        children: chart
    }) : null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Pre)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Pre({ children  }) {
    const textInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onEnter = ()=>{
        setHovered(true);
    };
    const onExit = ()=>{
        setHovered(false);
        setCopied(false);
    };
    const onCopy = ()=>{
        setCopied(true);
        navigator.clipboard.writeText(textInput.current.textContent);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: textInput,
        onMouseEnter: onEnter,
        onMouseLeave: onExit,
        className: "relative",
        children: [
            hovered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Copy code",
                type: "button",
                className: `absolute right-2 top-2 h-6 w-6 rounded border bg-gray-700 p-1 ease-in-out duration-100 ${copied ? "border-green-400 focus:border-green-400 focus:outline-none" : "border-slate-300"}`,
                onClick: onCopy,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    "aria-hidden": "true",
                    viewBox: "-2 -2 20 20",
                    fill: "currentColor",
                    className: copied ? "text-green-400" : "text-slate-300",
                    children: copied ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 5341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./lib/formatDate.js
var formatDate = __webpack_require__(3203);
;// CONCATENATED MODULE: ./components/Avatar.jsx

function Avatar({ name , img , href  }) {
    const Component = href ? "a" : "div";
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        href: href,
        className: "group block flex-shrink-0 mt-2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center space-x-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "inline-block h-9 w-9 rounded-full",
                        src: img,
                        alt: name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ml-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm font-medium text-primary dark:text-primary-dark",
                        children: name
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./layouts/blog.jsx
/* eslint import/no-default-export: off */ 



function BlogLayout({ children , frontMatter  }) {
    const { title , created , image , authorsDetails , categories , tags  } = frontMatter;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/blog",
                className: "flex flex-col items-center w-fit mx-auto space-x-2 pt-6 text-gray-500 hover:text-gray-900 hover:underline",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        className: "w-6 h-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "return to the blog list"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                className: "docs prose prose-headings:font-headings dark:prose-invert prose-a:break-words mx-auto max-w-2xl px-6 pt-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                        className: "w-full mx-auto space-y-4 text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex space-x-4 justify-center border-b border-t border-secondary",
                                children: categories ? categories.map((category, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "py-4 text-xs font-semibold tracking-wider uppercase no-underline hover:underline",
                                        children: [
                                            "#",
                                            category
                                        ]
                                    }, i)) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "py-4 text-xs font-semibold tracking-wider uppercase no-underline hover:underline",
                                    children: "#uncategorized"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-4 flex-col items-center",
                                children: [
                                    title && /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "mb-0 text-4xl font-bold leading-tight md:text-5xl",
                                        children: title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-center text-sm dark:text-gray-400 space-x-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center space-x-1",
                                                children: authorsDetails.map(({ name , avatar , isDraft , url_path  })=>/*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                                        name: name,
                                                        img: avatar,
                                                        href: url_path && !isDraft ? `/${url_path}` : undefined
                                                    }, url_path))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center space-x-1 mt-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: "1.5",
                                                        stroke: "currentColor",
                                                        className: "w-5 h-5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                        dateTime: created,
                                                        children: (0,formatDate/* formatDate */.p)(created)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            image && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: image,
                                alt: title,
                                className: "w-full h-auto m-0 drop-shadow-md"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex w-full flex-wrap items-center space-x-4 py-6 border-b border-theme-yellow text-sm capitalize",
                        children: tags && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                "tags:\xa0\xa0",
                                tags.map((tag, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "no-underline hover:underline italic",
                                        children: [
                                            "#",
                                            tag
                                        ]
                                    }, i))
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DocsLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_formatDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3203);
/* eslint import/no-default-export: off */ 

function DocsLayout({ children , frontMatter  }) {
    const { title , created  } = frontMatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "docs prose text-primary dark:text-primary-dark dark:prose-invert prose-headings:font-headings prose-a:break-words mx-auto p-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-6",
                    children: [
                        created && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-zinc-400 dark:text-zinc-500",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                dateTime: created,
                                children: (0,_lib_formatDate_js__WEBPACK_IMPORTED_MODULE_1__/* .formatDate */ .p)(created)
                            })
                        }),
                        title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: title
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 8147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InitiativeLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentlayer_generated_Person_index_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1095);
/* harmony import */ var _lib_formatDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3203);
/* eslint import/no-default-export: off */ 



function InitiativeLayout({ children , frontMatter  }) {
    const { title , image , description , homepage , status , team , alumni , created  } = frontMatter;
    const homepageUrl = (homepage === null || homepage === void 0 ? void 0 : homepage.startsWith("http")) ? homepage : `https://lifeitself.org/initiatives${homepage}`;
    const contributors = _contentlayer_generated_Person_index_json__WEBPACK_IMPORTED_MODULE_2__.filter((person)=>team.concat(alumni).includes(person.id));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative mx-auto max-w-2xl lg:max-w-5xl px-4 sm:px-16 lg:px-20 mt-16 sm:mt-20",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-20",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "lg:col-span-2 lg:max-w-xl",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-4xl font-bold font-headings tracking-tight text-primary sm:text-5xl",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-6 text-base text-primary",
                            children: description
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:row-start-2 lg:col-start-2 sm:max-w-sm",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: title,
                        src: image,
                        width: "800",
                        height: "800",
                        className: "aspect-square shadow-sm rounded-2xl bg-zinc-100 object-cover border",
                        loading: "lazy"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "lg:row-start-2 lg:col-start-1",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-xs sm:max-w-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-2xl font-bold font-headings text-primary",
                                    children: "Information"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                    className: "mt-2 px-1 divide-y divide-gray-200 border-b border-t border-gray-200",
                                    children: [
                                        homepage && homepageUrl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between gap-x-2 py-3 text-sm font-medium",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-gray-500",
                                                    children: "Homepage"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "sm:whitespace-nowrap flex text-primary w-min overflow-x-auto",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: homepageUrl,
                                                        className: "underline hover:text-indigo-600",
                                                        children: homepageUrl
                                                    })
                                                })
                                            ]
                                        }),
                                        created && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between py-3 text-sm font-medium",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-gray-500",
                                                    children: "Created on"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "whitespace-nowrap text-primary",
                                                    children: (0,_lib_formatDate_js__WEBPACK_IMPORTED_MODULE_3__/* .formatDate */ .p)(created)
                                                })
                                            ]
                                        }),
                                        status && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-between py-3 text-sm font-medium",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-gray-500",
                                                    children: "Status"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "whitespace-nowrap text-primary text-xs capitalize px-2.5 py-1 ring-1 ring-inset ring-gray-300 rounded-full",
                                                    children: status
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-xs lg:max-w-none mt-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "font-bold font-headings text-2xl text-primary",
                                    children: "Contributors"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    role: "list",
                                    className: "mt-2 divide-y divide-gray-200 border-b border-t border-gray-200",
                                    children: contributors === null || contributors === void 0 ? void 0 : contributors.map((person)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "group relative flex items-center py-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute w-full h-full z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: person.url_path,
                                                    className: "flex items-center px-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "absolute w-full h-full z-20"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: person.avatar,
                                                            alt: "",
                                                            className: "z-10 h-8 w-8 rounded-full"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "z-10 ml-4 text-sm font-medium text-primary",
                                                            children: person.name
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, person._id))
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "docs prose prose-headings:font-headings prose-headings:w-fit prose-a:break-words lg:col-span-2",
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 4128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PeopleLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./.contentlayer/generated/Blog/_index.json
var _index = __webpack_require__(6711);
// EXTERNAL MODULE: ./lib/formatDate.js
var formatDate = __webpack_require__(3203);
;// CONCATENATED MODULE: ./content/components/AuthorPosts.jsx




const BLOGS_LOAD_COUNT = 6;
function AuthorPosts({ id , name  }) {
    const [postsCount, setPostsCount] = (0,external_react_.useState)(BLOGS_LOAD_COUNT);
    const handleLoadMore = ()=>{
        setPostsCount((prevCount)=>prevCount + BLOGS_LOAD_COUNT);
    };
    const authorPosts = _index.filter((post)=>post.authors.includes(id)).sort((a, b)=>new Date(b.created) - new Date(a.created));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    children: [
                        "Posts by ",
                        name
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "list-none p-0 grid md:grid-cols-2 gap-4",
                children: authorPosts && authorPosts.slice(0, postsCount).map((post)=>{
                    var ref;
                    /*#__PURE__*/ return (0,jsx_runtime_.jsxs)("li", {
                        className: "flex flex-col overflow-hidden rounded-lg shadow-lg p-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-shrink-0 m-0",
                                children: post.image ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "h-48 w-full object-cover m-0",
                                    src: post.image,
                                    alt: ""
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "flex h-48 w-full bg-gray-200"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-1 flex-col justify-between bg-white p-6 m-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs font-medium text-primary space-x-2",
                                                children: (ref = post.categories) === null || ref === void 0 ? void 0 : ref.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "hover:underline",
                                                        children: category.charAt(0).toUpperCase() + category.slice(1)
                                                    }, category))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `/${post.url_path}`,
                                                className: "mt-2 block no-underline",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-lg font-semibold font-headings text-primary underline",
                                                        children: post.title
                                                    }),
                                                    post.description && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "mt-3 text-base text-gray-500 line-clamp-3",
                                                        children: post.description
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-6 flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex space-x-1 text-sm text-gray-500",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                children: (0,formatDate/* formatDate */.p)(post.created)
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }, post._id);
                })
            }),
            (authorPosts === null || authorPosts === void 0 ? void 0 : authorPosts.length) > postsCount && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex pt-4 w-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: handleLoadMore,
                    type: "button",
                    className: "inline-flex items-center justify-center rounded bg-secondary mx-auto px-2.5 py-1.5 text-sm font-medium text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2",
                    children: "Show more"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./layouts/people.jsx


/* eslint import/no-default-export: off */ function PeopleLayout({ children , frontMatter  }) {
    const { name , avatar , id  } = frontMatter;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: "prose text-primary dark:text-primary-dark dark:prose-invert prose-headings:font-headings prose-a:break-words w-full mx-auto p-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center space-x-6",
                    children: [
                        avatar && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-48",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "rounded-full object-cover shadow-lg",
                                src: avatar,
                                alt: name
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col",
                            children: name && name.split(" ").map((n)=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "even:text-primary odd:text-secondary even:text-5xl odd:text-6xl m-0",
                                    children: n
                                }, n))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ jsx_runtime_.jsx(AuthorPosts, {
                id: id,
                name: name
            })
        ]
    });
}


/***/ }),

/***/ 9968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PodcastLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./content/components/player/AudioProvider.jsx


const AudioPlayerContext = /*#__PURE__*/ (0,external_react_.createContext)();
const reducers = {
    SET_META (state, action) {
        return {
            ...state,
            meta: action.payload
        };
    },
    PLAY (state, _action) {
        return {
            ...state,
            playing: true
        };
    },
    PAUSE (state, _action) {
        return {
            ...state,
            playing: false
        };
    },
    TOGGLE_MUTE (state, _action) {
        return {
            ...state,
            muted: !state.muted
        };
    },
    SET_CURRENT_TIME (state, action) {
        return {
            ...state,
            currentTime: action.payload
        };
    },
    SET_DURATION (state, action) {
        return {
            ...state,
            duration: action.payload
        };
    }
};
function audioReducer(state, action) {
    return reducers[action.type](state, action);
}
function AudioProvider({ children  }) {
    let [state, dispatch] = (0,external_react_.useReducer)(audioReducer, {
        playing: false,
        muted: false,
        duration: 0,
        currentTime: 0,
        meta: null
    });
    let playerRef = (0,external_react_.useRef)(null);
    let actions = (0,external_react_.useMemo)(()=>{
        return {
            play (data) {
                if (data) {
                    dispatch({
                        type: "SET_META",
                        payload: data
                    });
                    if (playerRef.current.currentSrc !== data.audio.src) {
                        let playbackRate = playerRef.current.playbackRate;
                        playerRef.current.src = data.audio.src;
                        playerRef.current.load();
                        playerRef.current.pause();
                        playerRef.current.playbackRate = playbackRate;
                    // playerRef.currentTime = 0
                    }
                }
                playerRef.current.play();
            },
            pause () {
                playerRef.current.pause();
            },
            toggle (data) {
                this.isPlaying(data) ? actions.pause() : actions.play(data);
            },
            seekBy (amount) {
                playerRef.current.currentTime += amount;
            },
            seek (time) {
                playerRef.current.currentTime = time;
            },
            playbackRate (rate) {
                playerRef.current.playbackRate = rate;
            },
            toggleMute () {
                dispatch({
                    type: "TOGGLE_MUTE"
                });
            },
            isPlaying (data) {
                return data ? state.playing && playerRef.current.currentSrc === data.audio.src : state.playing;
            }
        };
    }, [
        state.playing
    ]);
    let api = (0,external_react_.useMemo)(()=>({
            ...state,
            ...actions
        }), [
        state,
        actions
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AudioPlayerContext.Provider, {
                value: api,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                ref: playerRef,
                onPlay: ()=>dispatch({
                        type: "PLAY"
                    }),
                onPause: ()=>dispatch({
                        type: "PAUSE"
                    }),
                onTimeUpdate: (event)=>{
                    dispatch({
                        type: "SET_CURRENT_TIME",
                        payload: Math.floor(event.target.currentTime)
                    });
                },
                onDurationChange: (event)=>{
                    dispatch({
                        type: "SET_DURATION",
                        payload: Math.floor(event.target.duration)
                    });
                },
                muted: state.muted
            })
        ]
    });
}
function useAudioPlayer(data) {
    let player = (0,external_react_.useContext)(AudioPlayerContext);
    return (0,external_react_.useMemo)(()=>{
        return {
            ...player,
            play () {
                player.play(data);
            },
            toggle () {
                player.toggle(data);
            },
            get playing () {
                return player === null || player === void 0 ? void 0 : player.isPlaying(data);
            }
        };
    }, [
        player,
        data
    ]);
}

;// CONCATENATED MODULE: ./content/components/player/PlayButton.jsx


function PauseIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 22 28",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.5 0C0.671573 0 0 0.671572 0 1.5V26.5C0 27.3284 0.671573 28 1.5 28H4.5C5.32843 28 6 27.3284 6 26.5V1.5C6 0.671573 5.32843 0 4.5 0H1.5ZM17.5 0C16.6716 0 16 0.671572 16 1.5V26.5C16 27.3284 16.6716 28 17.5 28H20.5C21.3284 28 22 27.3284 22 26.5V1.5C22 0.671573 21.3284 0 20.5 0H17.5Z"
        })
    });
}
function PlayIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 36 36",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"
        })
    });
}
function PlayButton({ player , playerData , size ="large"  }) {
    let p = playerData ? useAudioPlayer(playerData) : player;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: `group relative flex flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-slate-700
            ${size === "large" && "h-18 w-18 focus:ring focus:ring-offset-4"}
            ${size === "medium" && "h-14 w-14 focus:ring-2 focus:ring-offset-2"}
            ${size === "small" && "h-10 w-10 focus:ring-2 focus:ring-offset-2"}
        `,
        onClick: p.toggle,
        "aria-label": p.playing ? "Pause" : "Play",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute -inset-3 md:hidden"
            }),
            p.playing ? /*#__PURE__*/ jsx_runtime_.jsx(PauseIcon, {
                className: `fill-white group-active:fill-white/80
              ${size === "large" && "h-7 w-7"}
              ${size === "medium" && "h-5 w-5"}
              ${size === "small" && "h-4 w-4"}
            `
            }) : /*#__PURE__*/ jsx_runtime_.jsx(PlayIcon, {
                className: `fill-white group-active:fill-white/80
              ${size === "large" && "h-9 w-9"}
              ${size === "medium" && "h-7 w-7"}
              ${size === "small" && "h-5 w-5"}
            `
            })
        ]
    });
}

;// CONCATENATED MODULE: ./content/components/player/ForwardButton.jsx

function ForwardIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16 5L19 8M19 8L16 11M19 8H10.5C7.46243 8 5 10.4624 5 13.5C5 15.4826 5.85204 17.2202 7 18.188",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M13 15V19",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16 18V16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H17C16.4477 19 16 18.5523 16 18Z",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
}
function ForwardButton({ player , amount =10  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "group relative rounded-full focus:outline-none",
        onClick: ()=>player.seekBy(amount),
        "aria-label": `Fast-forward ${amount} seconds`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute -inset-4 -left-2 md:hidden"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ForwardIcon, {
                className: "h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./content/components/player/MuteButton.jsx

function MuteIcon({ muted , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: muted ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16 10L19 13",
                    fill: "none"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M19 10L16 13",
                    fill: "none"
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M17 7C17 7 19 9 19 12C19 15 17 17 17 17",
                    fill: "none"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5",
                    fill: "none"
                })
            ]
        })
    });
}
function MuteButton({ player  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none",
        onClick: ()=>player.toggleMute(),
        "aria-label": player.muted ? "Unmute" : "Mute",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute -inset-4 md:hidden"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MuteIcon, {
                muted: player.muted,
                className: "h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./content/components/player/PlaybackRateButton.jsx


const playbackRates = [
    {
        value: 1,
        icon: function PlaybackIcon(props) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                ...props,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.75 7.25L5.25 5.77539V11.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M8.75 7.75L11.25 10.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11.25 7.75L8.75 10.25"
                    })
                ]
            });
        }
    },
    {
        value: 1.5,
        icon: function PlaybackIcon(props) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                ...props,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M2.75 7.25L4.25 5.77539V11.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.5 11C7.5 11.2761 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.2761 6.5 11C6.5 10.7239 6.72386 10.5 7 10.5C7.27614 10.5 7.5 10.7239 7.5 11Z",
                        strokeWidth: "1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.25 5.75H9.75V8.25H10.75C11.5784 8.25 12.25 8.92157 12.25 9.75V9.75C12.25 10.5784 11.5784 11.25 10.75 11.25H9.75"
                    })
                ]
            });
        }
    },
    {
        value: 2,
        icon: function PlaybackIcon(props) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                ...props,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.75 8.75L12.25 11.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.25 8.75L9.75 11.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3.75 7.25C3.75 7.25 3.90144 5.75 5.63462 5.75C6.1633 5.75 6.5448 5.95936 6.81973 6.25035C7.67157 7.15197 6.97033 8.47328 6.0238 9.28942L3.75 11.25H7.25"
                    })
                ]
            });
        }
    }
];
function PlaybackRateButton({ player  }) {
    let [playbackRate, setPlaybackRate] = (0,external_react_.useState)(playbackRates[0]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "relative flex h-6 w-6 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
        onClick: ()=>{
            setPlaybackRate((rate)=>{
                let existingIdx = playbackRates.indexOf(rate);
                let idx = (existingIdx + 1) % playbackRates.length;
                let next = playbackRates[idx];
                player.playbackRate(next.value);
                return next;
            });
        },
        "aria-label": "Playback rate",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute -inset-4 md:hidden"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(playbackRate.icon, {
                className: "h-4 w-4"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./content/components/player/RewindButton.jsx

function RewindIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5 15V19"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"
            })
        ]
    });
}
function RewindButton({ player , amount =10  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "group relative rounded-full focus:outline-none",
        onClick: ()=>player.seekBy(-amount),
        "aria-label": `Rewind ${amount} seconds`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute -inset-4 -right-2 md:hidden"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RewindIcon, {
                className: "h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"
            })
        ]
    });
}

;// CONCATENATED MODULE: external "react-aria"
const external_react_aria_namespaceObject = require("react-aria");
;// CONCATENATED MODULE: external "react-stately"
const external_react_stately_namespaceObject = require("react-stately");
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./content/components/player/Slider.jsx





function parseTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    seconds = seconds - hours * 3600 - minutes * 60;
    return [
        hours,
        minutes,
        seconds
    ];
}
function formatTime(seconds, totalSeconds = seconds) {
    let totalWithoutLeadingZeroes = totalSeconds.slice(totalSeconds.findIndex((x)=>x !== 0));
    return seconds.slice(seconds.length - totalWithoutLeadingZeroes.length).map((x)=>x.toString().padStart(2, "0")).join(":");
}
function Thumb(props) {
    let { state , trackRef , focusProps , isFocusVisible , index  } = props;
    let inputRef = (0,external_react_.useRef)(null);
    let { thumbProps , inputProps  } = (0,external_react_aria_namespaceObject.useSliderThumb)({
        index,
        trackRef,
        inputRef
    }, state);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute top-1/2 -translate-x-1/2",
        style: {
            left: `${state.getThumbPercent(index) * 100}%`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            ...thumbProps,
            onMouseDown: (...args)=>{
                var ref;
                thumbProps.onMouseDown(...args);
                (ref = props.onChangeStart) === null || ref === void 0 ? void 0 : ref.call(props);
            },
            onPointerDown: (...args)=>{
                var ref;
                thumbProps.onPointerDown(...args);
                (ref = props.onChangeStart) === null || ref === void 0 ? void 0 : ref.call(props);
            },
            className: external_clsx_default()("h-4 rounded-full", isFocusVisible || state.isThumbDragging(index) ? "w-1.5 bg-slate-900" : "w-1 bg-slate-700"),
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_aria_namespaceObject.VisuallyHidden, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    ref: inputRef,
                    ...(0,external_react_aria_namespaceObject.mergeProps)(inputProps, focusProps)
                })
            })
        })
    });
}
function Slider(props) {
    let trackRef = (0,external_react_.useRef)(null);
    let state = (0,external_react_stately_namespaceObject.useSliderState)(props);
    let { groupProps , trackProps , labelProps , outputProps  } = (0,external_react_aria_namespaceObject.useSlider)(props, state, trackRef);
    let { focusProps , isFocusVisible  } = (0,external_react_aria_namespaceObject.useFocusRing)();
    let currentTime = parseTime(state.getThumbValue(0));
    let totalTime = parseTime(state.getThumbMaxValue(0));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...groupProps,
        className: "absolute inset-x-0 bottom-full flex flex-auto touch-none items-center gap-6 md:relative",
        children: [
            props.label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "sr-only",
                ...labelProps,
                children: props.label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ...trackProps,
                onMouseDown: (...args)=>{
                    var ref;
                    trackProps.onMouseDown(...args);
                    (ref = props.onChangeStart) === null || ref === void 0 ? void 0 : ref.call(props);
                },
                onPointerDown: (...args)=>{
                    var ref;
                    trackProps.onPointerDown(...args);
                    (ref = props.onChangeStart) === null || ref === void 0 ? void 0 : ref.call(props);
                },
                ref: trackRef,
                className: "relative w-full bg-slate-100 md:rounded-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_clsx_default()("h-2 md:rounded-r-md md:rounded-l-xl", isFocusVisible || state.isThumbDragging(0) ? "bg-slate-900" : "bg-slate-700"),
                        style: {
                            width: state.getThumbValue(0) === 0 ? 0 : `calc(${state.getThumbPercent(0) * 100}% - ${isFocusVisible || state.isThumbDragging(0) ? "0.3125rem" : "0.25rem"})`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Thumb, {
                        index: 0,
                        state: state,
                        trackRef: trackRef,
                        onChangeStart: props.onChangeStart,
                        focusProps: focusProps,
                        isFocusVisible: isFocusVisible
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden items-center gap-2 md:flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("output", {
                        ...outputProps,
                        "aria-live": "off",
                        className: external_clsx_default()("hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 md:block", state.getThumbMaxValue(0) === 0 && "opacity-0", isFocusVisible || state.isThumbDragging(0) ? "bg-slate-100 text-slate-900" : "text-slate-500"),
                        children: formatTime(currentTime, totalTime)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-sm leading-6 text-slate-300",
                        "aria-hidden": "true",
                        children: "/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: external_clsx_default()("hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 text-slate-500 md:block", state.getThumbMaxValue(0) === 0 && "opacity-0"),
                        children: formatTime(totalTime)
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./content/components/player/AudioPlayer.jsx










function AudioPlayer_parseTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    seconds = seconds - hours * 3600 - minutes * 60;
    return [
        hours,
        minutes,
        seconds
    ];
}
function formatHumanTime(seconds) {
    let [h, m, s] = AudioPlayer_parseTime(seconds);
    return `${h} hour${h === 1 ? "" : "s"}, ${m} minute${m === 1 ? "" : "s"}, ${s} second${s === 1 ? "" : "s"}`;
}
function AudioPlayer({ audioData  }) {
    let player = useAudioPlayer(audioData);
    let wasPlayingRef = (0,external_react_.useRef)(false);
    let [currentTime, setCurrentTime] = (0,external_react_.useState)(player.currentTime);
    (0,external_react_.useEffect)(()=>{
        setCurrentTime(null);
    }, [
        player.currentTime
    ]);
    if (!player.meta) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center gap-6 bg-white/90 py-4 px-4 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx(PlayButton, {
                    player: player,
                    size: "medium"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: player.meta.link,
                        className: "truncate text-center text-sm font-bold leading-6 md:text-left",
                        title: player.meta.title,
                        legacyBehavior: true,
                        children: player.meta.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between gap-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(MuteButton, {
                                    player: player
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-none items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(RewindButton, {
                                        player: player
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "md:hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PlayButton, {
                                            player: player,
                                            size: "small"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ForwardButton, {
                                        player: player
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Slider, {
                                label: "Current time",
                                maxValue: player.duration,
                                step: 1,
                                value: [
                                    currentTime ?? player.currentTime
                                ],
                                onChange: ([v])=>setCurrentTime(v),
                                onChangeEnd: (value)=>{
                                    player.seek(value);
                                    if (wasPlayingRef.current) {
                                        player.play();
                                    }
                                },
                                numberFormatter: {
                                    format: formatHumanTime
                                },
                                onChangeStart: ()=>{
                                    wasPlayingRef.current = player.playing;
                                    player.pause();
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PlaybackRateButton, {
                                            player: player
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hidden items-center md:flex",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(MuteButton, {
                                            player: player
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./layouts/podcast.jsx






function randomBetween(min, max, seed = 1) {
    return ()=>{
        let rand = Math.sin(seed++) * 10000;
        rand = rand - Math.floor(rand);
        return Math.floor(rand * (max - min + 1) + min);
    };
}
function Waveform(props) {
    // let id = useId()
    const { current: id  } = (0,external_react_.useRef)("id-" + (Math.random().toString(36) + "00000000000000000").slice(2, 7));
    let bars = {
        total: 100,
        width: 2,
        gap: 2,
        minHeight: 40,
        maxHeight: 100
    };
    let barHeights = Array.from({
        length: bars.total
    }, randomBetween(bars.minHeight, bars.maxHeight));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: `${id}-fade`,
                        x1: "0",
                        x2: "0",
                        y1: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "40%",
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "100%",
                                stopColor: "black"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: `${id}-gradient`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0%",
                                stopColor: "#4989E8"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "50%",
                                stopColor: "#6159DA"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "100%",
                                stopColor: "#FF54AD"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                        id: `${id}-mask`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "100%",
                            height: "100%",
                            fill: `url(#${id}-pattern)`
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                        id: `${id}-pattern`,
                        width: bars.total * bars.width + bars.total * bars.gap,
                        height: "100%",
                        patternUnits: "userSpaceOnUse",
                        children: Array.from({
                            length: bars.total
                        }, (_, index)=>/*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                width: bars.width,
                                height: `${barHeights[index]}%`,
                                x: bars.gap * (index + 1) + bars.width * index,
                                fill: `url(#${id}-fade)`
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                width: "100%",
                height: "100%",
                fill: `url(#${id}-gradient)`,
                mask: `url(#${id}-mask)`,
                opacity: "0.25"
            })
        ]
    });
}
function TinyWaveFormIcon({ colors =[] , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 10 10",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z",
                className: colors[0]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z",
                className: colors[1]
            })
        ]
    });
}
function SpotifyIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06"
        })
    });
}
function ApplePodcastIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M27.528 24.8c-.232.592-.768 1.424-1.536 2.016-.44.336-.968.664-1.688.88-.768.232-1.72.304-2.904.304H10.6c-1.184 0-2.128-.08-2.904-.304a4.99 4.99 0 0 1-1.688-.88c-.76-.584-1.304-1.424-1.536-2.016C4.008 23.608 4 22.256 4 21.4V10.6c0-.856.008-2.208.472-3.4.232-.592.768-1.424 1.536-2.016.44-.336.968-.664 1.688-.88C8.472 4.08 9.416 4 10.6 4h10.8c1.184 0 2.128.08 2.904.304a4.99 4.99 0 0 1 1.688.88c.76.584 1.304 1.424 1.536 2.016C28 8.392 28 9.752 28 10.6v10.8c0 .856-.008 2.208-.472 3.4Zm-9.471-6.312a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624-.745 0-1.377.24-1.737.624-.183.2-.287.4-.32.688-.063.558-.024 1.036.04 1.807v.009c.065.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.625.832 1.4.832.776 0 1.273-.392 1.4-.832.08-.272.169-.656.28-1.368.152-1 .273-1.976.337-2.712.072-.776.104-1.256.04-1.816ZM16 16.375c1.088 0 1.968-.88 1.968-1.967 0-1.08-.88-1.968-1.968-1.968s-1.968.88-1.968 1.968.88 1.967 1.968 1.967Zm-.024-9.719c-4.592.016-8.352 3.744-8.416 8.336-.048 3.72 2.328 6.904 5.648 8.072.08.032.16-.04.152-.12a35.046 35.046 0 0 0-.041-.288c-.029-.192-.057-.384-.079-.576a.317.317 0 0 0-.168-.232 7.365 7.365 0 0 1-4.424-6.824c.04-4 3.304-7.256 7.296-7.288 4.088-.032 7.424 3.28 7.424 7.36 0 3.016-1.824 5.608-4.424 6.752a.272.272 0 0 0-.168.232l-.12.864c-.016.088.072.152.152.12a8.448 8.448 0 0 0 5.648-7.968c-.016-4.656-3.816-8.448-8.48-8.44Zm-5.624 8.376c.04-2.992 2.44-5.464 5.432-5.576 3.216-.128 5.88 2.456 5.872 5.64a5.661 5.661 0 0 1-2.472 4.672c-.08.056-.184-.008-.176-.096.016-.344.024-.648.008-.96 0-.104.04-.2.112-.272a4.584 4.584 0 0 0 1.448-3.336 4.574 4.574 0 0 0-4.752-4.568 4.585 4.585 0 0 0-4.392 4.448 4.574 4.574 0 0 0 1.448 3.456c.08.072.12.168.112.272-.016.32-.016.624.008.968 0 .088-.104.144-.176.096a5.65 5.65 0 0 1-2.472-4.744Z"
        })
    });
}
function GooglePodcastIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M1.503 9.678c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zm20.994 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zM6.68 14.587c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.62c0-.83-.67-1.5-1.5-1.5zm0-9.817c-.83 0-1.5.67-1.5 1.5v5.357a1.5 1.5 0 003 0V6.258c0-.83-.67-1.5-1.5-1.5zm10.638 0c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 003 0V6.27c0-.83-.67-1.5-1.5-1.5zM12 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0V1.5c0-.83-.67-1.499-1.5-1.499zm0 19.355c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 103 .01v-1.64c0-.82-.67-1.5-1.5-1.5zm5.319-8.457c-.83 0-1.5.68-1.5 1.5v5.328a1.5 1.5 0 003 0v-5.329c0-.83-.67-1.5-1.5-1.5zM12 6.128c-.83 0-1.5.68-1.5 1.5v8.728a1.5 1.5 0 003 0V7.638c0-.83-.67-1.5-1.5-1.5z"
        })
    });
}
function OvercastIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16 28.8A12.77 12.77 0 0 1 3.2 16 12.77 12.77 0 0 1 16 3.2 12.77 12.77 0 0 1 28.8 16 12.77 12.77 0 0 1 16 28.8Zm0-5.067.96-.96-.96-3.68-.96 3.68.96.96Zm-1.226-.054-.48 1.814 1.12-1.12-.64-.694Zm2.453 0-.64.64 1.12 1.12-.48-1.76Zm.907 3.307L16 24.853l-2.133 2.133c.693.107 1.387.213 2.133.213.747 0 1.44-.053 2.134-.213ZM16 4.799C9.814 4.8 4.8 9.813 4.8 16c0 4.907 3.147 9.067 7.52 10.56l2.4-8.906c-.533-.374-.853-1.014-.853-1.707A2.14 2.14 0 0 1 16 13.813a2.14 2.14 0 0 1 2.134 2.133c0 .693-.32 1.28-.854 1.707l2.4 8.906A11.145 11.145 0 0 0 27.2 16c0-6.186-5.013-11.2-11.2-11.2Zm7.307 16.747c-.267.32-.747.427-1.12.16-.373-.267-.427-.747-.16-1.067 0 0 1.44-1.92 1.44-4.64 0-2.72-1.44-4.64-1.44-4.64-.267-.32-.213-.8.16-1.066.373-.267.853-.16 1.12.16.107.106 1.76 2.293 1.76 5.546 0 3.254-1.653 5.44-1.76 5.547Zm-3.893-2.08c-.32-.32-.267-.907.053-1.227 0 0 .8-.853.8-2.24 0-1.386-.8-2.186-.8-2.24-.32-.32-.32-.853-.053-1.226.32-.374.8-.374 1.12-.054.053.054 1.333 1.387 1.333 3.52 0 2.134-1.28 3.467-1.333 3.52-.32.32-.8.267-1.12-.053Zm-6.827 0c-.32.32-.8.373-1.12.053-.053-.106-1.333-1.386-1.333-3.52 0-2.133 1.28-3.413 1.333-3.52.32-.32.853-.32 1.12.054.32.32.267.906-.053 1.226 0 .054-.8.854-.8 2.24 0 1.387.8 2.24.8 2.24.32.32.373.854.053 1.227Zm-2.773 2.24c-.374.267-.854.16-1.12-.16-.107-.107-1.76-2.293-1.76-5.547 0-3.253 1.653-5.44 1.76-5.546.266-.32.746-.427 1.12-.16.373.266.426.746.16 1.066 0 0-1.44 1.92-1.44 4.64 0 2.72 1.44 4.64 1.44 4.64.266.32.16.8-.16 1.067Z"
        })
    });
}
function RSSIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.5 4h15A4.5 4.5 0 0 1 28 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 4 23.5v-15A4.5 4.5 0 0 1 8.5 4ZM13 22a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-6a9 9 0 0 1 9 9h3A12 12 0 0 0 7 13v3Zm5.74-4.858A15 15 0 0 0 7 10V7a18 18 0 0 1 18 18h-3a15 15 0 0 0-9.26-13.858Z"
        })
    });
}
function AboutSection(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "flex items-center font-mono text-sm font-medium leading-7 text-slate-900",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TinyWaveFormIcon, {
                        colors: [
                            "fill-[#d97706]",
                            "fill-theme-yellow"
                        ],
                        className: "h-2.5 w-2.5 hidden lg:inline-flex"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-2.5 hidden lg:inline-flex",
                        children: "About"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "lg:mt-2 text-base text-center lg:text-left leading-7 text-slate-700",
                children: "Welcome to the Life Itself Podcast, we where sit down to have conversations with thought leaders and seek solutions to our current crises by exploring emerging culture and technology."
            })
        ]
    });
}
const dateFormatter = (date)=>new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
/* eslint import/no-default-export: off */ function PodcastLayout({ children , frontMatter  }) {
    const { title , date , src , audioType , url_path  } = frontMatter;
    let audioPlayerData = {
        title: title,
        audio: {
            src: src,
            type: audioType
        },
        link: url_path
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(AudioProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "border-t border-gray-200",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                    className: "lg:fixed z-10 h-full pb-12 lg:w-1/4 top-16 mt-3 overflow-hidden overflow-y-auto border-r border-gray-200",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:py-12 lg:pt-5 lg:px-8 xl:px-12",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/podcast",
                                className: "relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "w-full",
                                        src: "/assets/site/lifeitself-podcast.jpeg",
                                        alt: "",
                                        sizes: "(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem",
                                        priority: "true"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(AboutSection, {
                                className: `mt-12 ${url_path !== "podcast" && "hidden"} lg:block`
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: "mt-10 lg:mt-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(TinyWaveFormIcon, {
                                                colors: [
                                                    "fill-[#d97706]",
                                                    "fill-secondary"
                                                ],
                                                className: "h-2.5 w-2.5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "ml-2.5",
                                                children: "Listen"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        role: "list",
                                        className: "mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4",
                                        children: [
                                            [
                                                "Spotify",
                                                "https://open.spotify.com/show/4OsgosK2SAZBCs4c6AP6Bb",
                                                SpotifyIcon
                                            ],
                                            [
                                                "Apple Podcast",
                                                "https://podcasts.apple.com/us/podcast/the-life-itself-podcast/id1618247766",
                                                ApplePodcastIcon
                                            ],
                                            [
                                                "Overcast",
                                                "https://overcast.fm/itunes1618247766",
                                                OvercastIcon
                                            ],
                                            [
                                                "Google Podcast",
                                                "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy83OWIzOTkzNC9wb2RjYXN0L3Jzcw",
                                                GooglePodcastIcon
                                            ],
                                            [
                                                "RSS Feed",
                                                "/",
                                                RSSIcon
                                            ]
                                        ].map(([label, href, Icon])=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "flex",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: href,
                                                    className: "group flex items-center",
                                                    "aria-label": label,
                                                    target: "_blank",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                                            className: "h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "hidden lg:ml-3 lg:block",
                                                            children: label
                                                        })
                                                    ]
                                                })
                                            }, label))
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: `lg:relative lg:ml-[25%] mb-10 ${url_path !== "podcast" && "px-4"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Waveform, {
                            className: "absolute left-0 top-0 h-20 w-full"
                        }),
                        url_path !== "podcast" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/podcast",
                            className: "flex flex-col lg:flex-row items-center w-fit mx-auto lg:ml-8 xl:ml-28 space-x-4 pb-16 lg:pb-0 lg:pt-20 text-gray-500 hover:text-gray-900 hover:underline",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "1.5",
                                    stroke: "currentColor",
                                    className: "w-6 h-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-sm",
                                    children: "back to episode list"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                            className: "flex items-start lg:items-center gap-6 mx-auto md:max-w-2xl lg:max-w-4xl px-4 sm:px-6 md:px-4 lg:px-8 lg:pt-16",
                            children: [
                                src && /*#__PURE__*/ jsx_runtime_.jsx(PlayButton, {
                                    playerData: audioPlayerData,
                                    size: "large"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col w-full",
                                    children: [
                                        title && /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: `text-3xl font-headings font-semibold text-gray-900 ${url_path === "podcast" && "text-4xl text-center lg:text-left"}`,
                                            children: url_path === "podcast" ? "Episodes" : title
                                        }),
                                        date && /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                            className: "order-first font-mono text-sm leading-7 text-slate-500",
                                            children: dateFormatter(date)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("article", {
                            className: "mx-auto md:max-w-2xl lg:max-w-4xl pt-8 lg:py-16 px-4 sm:px-6 md:px-4 lg:px-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "prose",
                                children: children
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed inset-x-0 bottom-0 z-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(AudioPlayer, {
                        audioData: audioPlayerData
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Profile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@heroicons/react/solid"
const solid_namespaceObject = require("@heroicons/react/solid");
;// CONCATENATED MODULE: ./layouts/profile.jsx


function Profile({ children , frontMatter  }) {
    const { title , url , locations , people , topic , activity , image  } = frontMatter;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-2xl mx-auto pb-16 pt-10 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "lg:grid lg:grid-cols-2 lg:gap-x-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:max-w-lg lg:self-end text-gray-500",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col mt-6 gap-y-3",
                                children: [
                                    url && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.GlobeAltIcon, {
                                                className: "h-5 w-5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: " ml-2 text-sm",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: url,
                                                    className: "underline",
                                                    children: url
                                                })
                                            })
                                        ]
                                    }),
                                    (locations === null || locations === void 0 ? void 0 : locations.length) > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.LocationMarkerIcon, {
                                                className: "h-5 w-5",
                                                title: "Locations"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: " ml-2 text-sm text-gray-500",
                                                children: locations.map((value, index)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "inline-block mr-2",
                                                        children: value
                                                    }, index);
                                                })
                                            })
                                        ]
                                    }),
                                    (people === null || people === void 0 ? void 0 : people.length) > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.UserCircleIcon, {
                                                className: "h-5 w-5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "ml-2 text-sm text-gray-500 capitalize",
                                                children: people.map((value, index)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "inline-block mr-2",
                                                        children: value + (index === people.length - 1 ? "" : ",")
                                                    }, index);
                                                })
                                            })
                                        ]
                                    }),
                                    (activity === null || activity === void 0 ? void 0 : activity.length) > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.BriefcaseIcon, {
                                                className: "h-5 w-5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "ml-2 text-sm text-gray-500 capitalize",
                                                children: activity.map((value, index)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "inline-block mr-2",
                                                        children: value + (index === activity.length - 1 ? "" : ",")
                                                    }, index);
                                                })
                                            })
                                        ]
                                    }),
                                    (topic === null || topic === void 0 ? void 0 : topic.length) > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.HashtagIcon, {
                                                className: "h-5 w-5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "ml-2 text-sm text-gray-500 capitalize",
                                                children: topic.map((value, index)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "inline-block mr-2",
                                                        children: value + (index === topic.length - 1 ? "" : ",")
                                                    }, index);
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                "aria-labelledby": "information-heading",
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        id: "information-heading",
                                        className: "sr-only",
                                        children: "Organization information"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-6 space-y-6 text-base text-gray-500",
                                        children: children
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-10 lg:mt-0 row-span-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "aspect-w-1 aspect-h-1 rounded-lg overflow-hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: image.cached_new ? image.cached_new : image.url,
                                alt: title,
                                className: "w-full h-full object-center object-cover"
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SimpleLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./components/Container.jsx



const OuterContainer = /*#__PURE__*/ (0,external_react_.forwardRef)(function OuterContainer({ className , children , ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: external_clsx_default()("sm:px-8", className),
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-5xl lg:px-8",
            children: children
        })
    });
});
const InnerContainer = /*#__PURE__*/ (0,external_react_.forwardRef)(function InnerContainer({ className , children , ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: external_clsx_default()("relative px-4 sm:px-8 lg:px-12", className),
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-2xl lg:max-w-5xl",
            children: children
        })
    });
});
const Container = /*#__PURE__*/ (0,external_react_.forwardRef)(function Container({ children , ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(OuterContainer, {
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(InnerContainer, {
            children: children
        })
    });
});
Container.Outer = OuterContainer;
Container.Inner = InnerContainer;

;// CONCATENATED MODULE: ./layouts/simple.jsx
/* eslint import/no-default-export: off */ 

function SimpleLayout({ children , frontMatter  }) {
    const { title , description  } = frontMatter;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        className: "my-16 sm:mt-32",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "max-w-2xl",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-6 text-base text-zinc-600 dark:text-zinc-400",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-16 sm:mt-20",
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 8849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnstyledLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* eslint import/no-default-export: off */ 
function UnstyledLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "unstyled dark:text-white",
        children: children
    });
}


/***/ }),

/***/ 3203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(dateUTC) {
    return new Date(dateUTC).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    });
}


/***/ }),

/***/ 946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getAuthorsDetails)
/* harmony export */ });
/* harmony import */ var _config_siteConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9907);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__]);
contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getAuthorsDetails = (authors)=>{
    let blogAuthors = [];
    if (authors) {
        blogAuthors = authors;
    } else if (_config_siteConfig_js__WEBPACK_IMPORTED_MODULE_0__/* .siteConfig.defaultAuthor */ .J.defaultAuthor) {
        blogAuthors = [
            _config_siteConfig_js__WEBPACK_IMPORTED_MODULE_0__/* .siteConfig.defaultAuthor */ .J.defaultAuthor
        ];
    }
    return blogAuthors.map((author)=>{
        return contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allPeople.find */ .tf.find(({ id , slug , name  })=>id === author || slug === author || name === author) ?? {
            name: author,
            avatar: _config_siteConfig_js__WEBPACK_IMPORTED_MODULE_0__/* .siteConfig.avatarPlaceholder */ .J.avatarPlaceholder
        };
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getPageData)
/* harmony export */ });
async function getPageData(dataProperties) {
    const data = {};
    for (const dataProperty of dataProperties){
        try {
            const dataGetter = (await __webpack_require__(4960)(`./${dataProperty}.js`)).default;
            data[dataProperty] = await dataGetter();
        } catch  {
            console.error(`Getter "${dataProperty}" does not exist in "<your-content-folder>/getters"`);
        }
    }
    return data;
}


/***/ }),

/***/ 3214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4427);
/* harmony import */ var next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8037);
/* harmony import */ var _components_MDX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9503);
/* harmony import */ var _lib_getPageData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1966);
/* harmony import */ var _lib_getAuthorsDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(946);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_2__, _components_MDX__WEBPACK_IMPORTED_MODULE_3__, _lib_getAuthorsDetails__WEBPACK_IMPORTED_MODULE_5__]);
([contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_2__, _components_MDX__WEBPACK_IMPORTED_MODULE_3__, _lib_getAuthorsDetails__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint import/no-default-export: off */ 





function Page({ body , data , ...rest }) {
    const mdxComponent = (0,next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_2__.useMDXComponent)(body.code, data);
    const frontMatter = {
        ...rest
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDX__WEBPACK_IMPORTED_MODULE_3__/* .MdxPage */ .S, {
        mdxComponent: mdxComponent,
        frontMatter: frontMatter
    });
}
async function getStaticProps({ params  }) {
    // params.slug is undefined for root index page
    const urlPath = params.slug ? params.slug.join("/") : "";
    const page = contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allDocuments.find */ .cx.find((p)=>p.url_path === urlPath);
    const data = await (0,_lib_getPageData__WEBPACK_IMPORTED_MODULE_4__/* .getPageData */ .u)(page.data);
    // temporary workaround for passing authors to blog layout
    const authorsDetails = (0,_lib_getAuthorsDetails__WEBPACK_IMPORTED_MODULE_5__/* .getAuthorsDetails */ .V)(page.authors);
    return {
        props: {
            ...page,
            data,
            authorsDetails
        }
    };
}
async function getStaticPaths() {
    const paths = contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allDocuments.filter */ .cx.filter((page)=>{
        return !(page === null || page === void 0 ? void 0 : page.isDraft);
    }).map((page)=>{
        const parts = page.url_path.split("/");
        return {
            params: {
                slug: parts
            }
        };
    });
    return {
        paths,
        fallback: false
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7008:
/***/ ((module) => {

"use strict";
module.exports = import("contentlayer/client");;

/***/ }),

/***/ 1024:
/***/ ((module) => {

"use strict";
module.exports = import("mermaid");;

/***/ }),

/***/ 8037:
/***/ ((module) => {

"use strict";
module.exports = import("next-contentlayer/hooks");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,427,907], () => (__webpack_exec__(3214)));
module.exports = __webpack_exports__;

})();