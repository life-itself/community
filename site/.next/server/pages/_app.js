(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ BaseLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const BaseLink = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref)=>{
    const { href , children , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        ref: ref,
        ...rest,
        children: children
    });
});
BaseLink.displayName = "BaseLink";



/***/ }),

/***/ 6770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_siteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9907);
/* harmony import */ var _custom_NewsletterForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1868);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7945);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Nav__WEBPACK_IMPORTED_MODULE_6__]);
_Nav__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function useTableOfContents(tableOfContents) {
    var ref;
    const [currentSection, setCurrentSection] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((ref = tableOfContents[0]) === null || ref === void 0 ? void 0 : ref.id);
    const getHeadings = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((toc)=>{
        return toc.flatMap((node)=>[
                node.id,
                ...node.children.map((child)=>child.id)
            ]).map((id)=>{
            const el = document.getElementById(id);
            if (!el) return null;
            const style = window.getComputedStyle(el);
            const scrollMt = parseFloat(style.scrollMarginTop);
            const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
            return {
                id,
                top
            };
        }).filter((el)=>!!el);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (tableOfContents.length === 0) return;
        const headings = getHeadings(tableOfContents);
        function onScroll() {
            const top = window.scrollY + 4.5;
            let current = headings[0].id;
            headings.forEach((heading)=>{
                if (top >= heading.top) {
                    current = heading.id;
                }
                return current;
            });
            setCurrentSection(current);
        }
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        onScroll();
        return ()=>{
            window.removeEventListener("scroll", onScroll, {
                passive: true
            });
        };
    }, [
        getHeadings,
        tableOfContents
    ]);
    return currentSection;
}
function Layout({ children , tableOfContents  }) {
    const { editLink , toc , type: pageType , _raw  } = children.props;
    /* if editLink is not set in page frontmatter, link bool value will depend on siteConfig.editLinkShow */ const editUrl = `${_config_siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.repoRoot */ .J.repoRoot}${_config_siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.repoEditPath */ .J.repoEditPath}${_raw === null || _raw === void 0 ? void 0 : _raw.sourceFilePath}`;
    const currentSection = useTableOfContents(tableOfContents);
    function isActive(section) {
        if (section.id === currentSection) {
            return true;
        }
        if (!section.children) {
            return false;
        }
        return section.children.findIndex(isActive) > -1;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/assets/site/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-h-screen bg-background dark:bg-background-dark",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Nav__WEBPACK_IMPORTED_MODULE_6__/* .Nav */ .J, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative mx-auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                            className: "flex-auto",
                            children: [
                                children,
                                (editLink ?? _config_siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.editLinkShow */ .J.editLinkShow) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-10 prose dark:prose-invert p-6 mx-auto",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "flex no-underline font-semibold justify-center",
                                        href: editUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [
                                            "Edit this page",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mx-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-6 w-6",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    pageType !== "Podcast" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_NewsletterForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                        className: "bg-background dark:bg-background-dark prose dark:prose-invert max-w-none flex flex-col items-center justify-center w-full h-auto pt-10 pb-20",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex w-full flex-wrap justify-center",
                                children: _config_siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.navLinks.map */ .J.navLinks.map((item)=>!Object.prototype.hasOwnProperty.call(item, "subItems") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: item.href,
                                        className: "inline-flex items-center mx-4 px-1 pt-1 font-regular hover:text-slate-300 no-underline",
                                        "aria-current": item.current ? "page" : undefined,
                                        children: item.name
                                    }, item.href))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "flex items-center justify-center",
                                children: [
                                    "Created by",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: _config_siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.authorUrl */ .J.authorUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center no-underline",
                                        children: [
                                            _config_siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.authorLogo */ .J.authorLogo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: _config_siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.authorLogo */ .J.authorLogo,
                                                alt: _config_siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.author */ .J.author,
                                                className: "my-0 h-6 block"
                                            }),
                                            _config_siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.author */ .J.author
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "flex items-center justify-center",
                                children: [
                                    "Made with",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "https://flowershow.app/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center no-underline",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://flowershow.app/assets/images/logo.svg",
                                                alt: "Flowershow",
                                                className: "my-0 h-6 block"
                                            }),
                                            "Flowershow"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            tableOfContents.length > 0 && (toc ?? _config_siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.tableOfContents */ .J.tableOfContents) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden xl:fixed xl:right-0 xl:top-[4.5rem] xl:block xl:w-1/5 xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6 xl:mb-16",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    "aria-labelledby": "on-this-page-title",
                    className: "w-56",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-display text-md font-medium text-slate-900 dark:text-white",
                            children: "On this page"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                            className: "mt-4 space-y-3 text-sm",
                            children: tableOfContents.map((section)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: `#${section.id}`,
                                                className: isActive(section) ? "text-sky-500" : "font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300",
                                                children: section.title
                                            })
                                        }),
                                        section.children && section.children.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                            className: "mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400",
                                            children: section.children.map((subSection)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: `#${subSection.id}`,
                                                        className: isActive(subSection) ? "text-sky-500" : "hover:text-slate-600 dark:hover:text-slate-300",
                                                        children: subSection.title
                                                    })
                                                }, subSection.id))
                                        })
                                    ]
                                }, section.id))
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ MobileNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_siteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9907);
/* harmony import */ var _BaseLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5027);
/* harmony import */ var _search_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1026);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var ref;








const Search = (0,_search_index_jsx__WEBPACK_IMPORTED_MODULE_7__/* .SearchContext */ .ci)((ref = _config_siteConfig__WEBPACK_IMPORTED_MODULE_5__/* .siteConfig.search */ .J.search) === null || ref === void 0 ? void 0 : ref.provider);
function MenuIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "round",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M4 7h16M4 12h16M4 17h16"
        })
    });
}
function CloseIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "round",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M5 5l14 14M19 5l-14 14"
        })
    });
}
function MobileNavigation({ navigation  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!isOpen) return;
        function onRouteChange() {
            setIsOpen(false);
        }
        router.events.on("routeChangeComplete", onRouteChange);
        router.events.on("routeChangeError", onRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", onRouteChange);
            router.events.off("routeChangeError", onRouteChange);
        };
    }, [
        router,
        isOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: ()=>setIsOpen(true),
                className: "relative",
                "aria-label": "Open navigation",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIcon, {
                    className: "h-6 w-6 stroke-slate-500"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
                open: isOpen,
                onClose: setIsOpen,
                className: "fixed inset-0 z-50 flex items-start overflow-y-auto bg-background-dark/50 pr-10 backdrop-blur lg:hidden",
                "aria-label": "Navigation",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Panel, {
                    className: "relative min-h-full w-full max-w-xs bg-background px-4 pt-5 pb-12 dark:bg-background-dark sm:px-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center mb-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setIsOpen(false),
                                    "aria-label": "Close navigation",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                                        className: "h-6 w-6 stroke-slate-500"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    className: "ml-6",
                                    "aria-label": "Home page",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-extrabold text-primary dark:text-primary-dark text-2xl ml-6",
                                        children: _config_siteConfig__WEBPACK_IMPORTED_MODULE_5__/* .siteConfig.author */ .J.author
                                    })
                                })
                            ]
                        }),
                        Search && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Search, {
                            children: ({ query  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_search_index_jsx__WEBPACK_IMPORTED_MODULE_7__/* .SearchField */ .Um, {
                                    mobile: true,
                                    onOpen: query.toggle
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200",
                            children: navigation.map((link)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                                    as: "div",
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, {
                                            children: Object.prototype.hasOwnProperty.call(link, "href") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: link.href,
                                                    className: `
                  block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300`,
                                                    children: link.name
                                                })
                                            }, link.href) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300 dark:hover:fill-slate-300 fill-slate-500 hover:fill-slate-600",
                                                    children: [
                                                        link.name,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            width: "20",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M7 10l5 5 5-5z"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, link.name)
                                        }),
                                        Object.prototype.hasOwnProperty.call("subItems") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                            as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                                            enter: "transition ease-out duration-200",
                                            enterFrom: "transform opacity-0 scale-5",
                                            enterTo: "transform opacity-100 scale-100",
                                            leave: "transition ease-in duration-75",
                                            leaveFrom: "transform opacity-100 scale-100",
                                            leaveTo: "transform opacity-0 scale-5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Items, {
                                                className: "flex flex-col ml-3",
                                                children: link.subItems.map((subItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseLink__WEBPACK_IMPORTED_MODULE_6__/* .BaseLink */ .f, {
                                                            href: subItem.href,
                                                            className: "text-slate-500 inline-flex items-center mt-2 px-1 pt-1 text-sm font-medium hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
                                                            children: subItem.name
                                                        })
                                                    }, subItem.name))
                                            })
                                        })
                                    ]
                                }, link.name))
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9907);
/* harmony import */ var _MobileNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8397);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1472);
/* harmony import */ var _ThemeSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8481);
/* harmony import */ var _search_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1026);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MobileNavigation__WEBPACK_IMPORTED_MODULE_4__, _NavItem__WEBPACK_IMPORTED_MODULE_5__]);
([_MobileNavigation__WEBPACK_IMPORTED_MODULE_4__, _NavItem__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
var ref;








const Search = (0,_search_index_jsx__WEBPACK_IMPORTED_MODULE_7__/* .SearchContext */ .ci)((ref = _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.search */ .J.search) === null || ref === void 0 ? void 0 : ref.provider);
function GitHubIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        })
    });
}
function DiscordIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
        })
    });
}
function InstagramIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Instagram"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
            })
        ]
    });
}
function TwitterIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Twitter"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            })
        ]
    });
}
function WhatsappIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm font-medium bg-secondary shadow-sm py-2 px-3 rounded hidden md:inline-block",
                children: "Join the conversation"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                role: "img",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                className: `${props.className} md:hidden`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "WhatsApp"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    })
                ]
            })
        ]
    });
}
const icons = {
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    whatsapp: WhatsappIcon
};
function NavbarTitle() {
    var ref, ref1, ref2, ref3;
    const chunk = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            ((ref = _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.navbarTitle */ .J.navbarTitle) === null || ref === void 0 ? void 0 : ref.logo) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.navbarTitle.logo */ .J.navbarTitle.logo,
                alt: _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.navbarTitle.text */ .J.navbarTitle.text,
                className: "w-9 h-9 mr-1 fill-white"
            }),
            (ref1 = _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.navbarTitle */ .J.navbarTitle) === null || ref1 === void 0 ? void 0 : ref1.text,
            ((ref2 = _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.navbarTitle */ .J.navbarTitle) === null || ref2 === void 0 ? void 0 : ref2.version) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-2 rounded-full border border-slate-500 py-1 px-3 text-xs text-slate-500",
                children: (ref3 = _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.navbarTitle */ .J.navbarTitle) === null || ref3 === void 0 ? void 0 : ref3.version
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        "aria-label": "Home page",
        className: "flex items-center font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white",
        children: [
            _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.navbarTitle */ .J.navbarTitle && chunk,
            !_config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.navbarTitle */ .J.navbarTitle && _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.title */ .J.title
        ]
    });
}
function Nav() {
    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [modifierKey, setModifierKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ");
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        function onScroll() {
            setIsScrolled(window.scrollY > 0);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", onScroll, {
                passive: true
            });
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `
        sticky top-0 z-50 flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8 max-w-full
        ${isScrolled ? "bg-background/75 dark:bg-background-dark/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:dark:bg-background-dark/75" : "bg-background dark:bg-background-dark"}
      `,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mr-2 sm:mr-4 flex lg:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileNavigation__WEBPACK_IMPORTED_MODULE_4__/* .MobileNavigation */ .$, {
                    navigation: _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.navLinks */ .J.navLinks
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-none items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavbarTitle, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden lg:flex ml-8 mr-6 sm:mr-8 md:mr-0",
                        children: _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.navLinks.map */ .J.navLinks.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavItem__WEBPACK_IMPORTED_MODULE_5__/* .NavItem */ .L, {
                                item: item
                            }, item.name))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex items-center basis-auto justify-end gap-4 xl:gap-5 md:shrink w-full",
                children: [
                    Search && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Search, {
                        children: ({ query  })=>{
                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_search_index_jsx__WEBPACK_IMPORTED_MODULE_7__/* .SearchField */ .Um, {
                                modifierKey: modifierKey,
                                onOpen: query === null || query === void 0 ? void 0 : query.toggle
                            });
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeSelector__WEBPACK_IMPORTED_MODULE_6__/* .ThemeSelector */ .Y, {}),
                    _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.github */ .J.github && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.github */ .J.github,
                        className: "group",
                        "aria-label": "GitHub",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GitHubIcon, {
                            className: "h-6 w-6 dark:fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
                        })
                    }),
                    _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.discord */ .J.discord && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.discord */ .J.discord,
                        className: "group",
                        "aria-label": "Discord",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DiscordIcon, {
                            className: "h-8 w-8 dark:fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
                        })
                    }),
                    _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.socialLinks */ .J.socialLinks && Object.entries(_config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.socialLinks */ .J.socialLinks).map(([key, value])=>{
                        const SocialIcon = icons[key];
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: value,
                            className: "group",
                            "aria-label": key,
                            target: "_blank",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialIcon, {
                                className: "h-5 w-5 md:h-6 md:w-6 dark:fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
                            })
                        }, key);
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ NavItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BaseLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5027);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function NavItem({ item  }) {
    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const [showDropdown, setshowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const timeoutDuration = 200;
    let timeoutId;
    const openDropdown = ()=>{
        clearTimeout(timeoutId);
        setshowDropdown(true);
    };
    const closeDropdown = ()=>{
        timeoutId = setTimeout(()=>setshowDropdown(false), timeoutDuration);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
        as: "div",
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, {
                onClick: ()=>setshowDropdown(!showDropdown),
                onMouseEnter: openDropdown,
                onMouseLeave: closeDropdown,
                children: Object.prototype.hasOwnProperty.call(item, "href") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: item.href,
                    className: "text-slate-500 inline-flex items-center mr-2 px-1 pt-1 text-sm font-medium hover:text-slate-600",
                    children: item.name
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-slate-500 inline-flex items-center mr-2 px-1 pt-1 text-sm font-medium hover:text-slate-600 fill-slate-500 hover:fill-slate-600",
                    children: item.name
                })
            }),
            Object.prototype.hasOwnProperty.call(item, "subItems") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                show: showDropdown,
                enter: "transition ease-out duration-200",
                enterFrom: "transform opacity-0 scale-5",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Items, {
                    className: "absolute top-5 flex flex-col dark:bg-slate-900/95 backdrop-blur",
                    ref: dropdownRef,
                    onMouseEnter: openDropdown,
                    onMouseLeave: closeDropdown,
                    children: item.subItems.map((subItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                            onClick: ()=>setshowDropdown(false),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseLink__WEBPACK_IMPORTED_MODULE_4__/* .BaseLink */ .f, {
                                href: subItem.href,
                                className: "text-slate-500 inline-flex items-center mt-2 px-1 pt-1 text-sm font-medium hover:text-slate-600",
                                children: subItem.name
                            })
                        }, subItem.name))
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ThemeSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9907);




function ThemeSelector() {
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>setMounted(true), []);
    /** Avoid Hydration Mismatch
   *  https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
   */ if (!mounted) return null;
    if (!_config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.theme["default"] */ .J.theme["default"]) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: `
        min-w-fit transition duration-500
        ${theme === "dark" ? "grayscale opacity-70" : ""}
      `,
        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: _config_siteConfig__WEBPACK_IMPORTED_MODULE_3__/* .siteConfig.theme.toggleIcon */ .J.theme.toggleIcon,
            alt: "toggle theme",
            width: 24,
            height: 24,
            className: "max-w-24 max-h-24"
        })
    });
}


/***/ }),

/***/ 1026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ci": () => (/* binding */ SearchContext),
  "Um": () => (/* reexport */ SearchField),
  "X$": () => (/* binding */ SearchProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/search/SearchField.jsx

function SearchIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 20 20",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"
        })
    });
}
function SearchField(props) {
    const { modifierKey , onOpen , mobile  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: `
      group flex h-6 w-6 items-center justify-center 
      ${mobile ? "sm:hidden justify-start min-w-full flex-none rounded-lg px-4 py-5 my-6 text-sm ring-1 ring-slate-200 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5" : "hidden sm:flex sm:justify-start md:h-auto md:w-auto xl:w-full max-w-[380px] shrink xl:rounded-lg xl:py-2.5 xl:pl-4 xl:pr-3.5 md:text-sm xl:ring-1 xl:ring-slate-200 xl:hover:ring-slate-300 dark:xl:bg-slate-800/75 dark:xl:ring-inset dark:xl:ring-white/5 dark:xl:hover:bg-slate-700/40 dark:xl:hover:ring-slate-500"}
    `,
        onClick: onOpen,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon, {
                className: "h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `
        text-slate-500 dark:text-slate-400
        ${mobile ? "w-full not-sr-only text-left ml-2" : "hidden xl:block sr-only md:not-sr-only md:ml-2"}
      `,
                children: "Search ..."
            }),
            modifierKey && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("kbd", {
                className: `
          ${mobile ? "hidden" : "ml-auto font-medium text-slate-400 dark:text-slate-500 hidden xl:block"}
        `,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                        className: "font-sans",
                        children: modifierKey
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                        className: "font-sans",
                        children: "K"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/search/index.jsx


const AlgoliaSearchProvider = dynamic_default()(()=>{
    return __webpack_require__.e(/* import() */ 653).then(__webpack_require__.bind(__webpack_require__, 653)).then((mod)=>mod.AlgoliaSearchProvider);
}, {
    loadableGenerated: {
        modules: [
            "../components/search/index.jsx -> " + "./Algolia"
        ]
    },
    ssr: false
});
const AlgoliaSearchContext = dynamic_default()(()=>{
    return __webpack_require__.e(/* import() */ 653).then(__webpack_require__.bind(__webpack_require__, 653)).then((mod)=>mod.AlgoliaSearchContext.Consumer);
}, {
    loadableGenerated: {
        modules: [
            "../components/search/index.jsx -> " + "./Algolia"
        ]
    },
    ssr: false
});
const KBarSearchProvider = dynamic_default()(()=>{
    return __webpack_require__.e(/* import() */ 50).then(__webpack_require__.bind(__webpack_require__, 8653)).then((mod)=>mod.KBarSearchProvider);
}, {
    loadableGenerated: {
        modules: [
            "../components/search/index.jsx -> " + "./KBar"
        ]
    },
    ssr: false
});
const KBarContext = dynamic_default()(async ()=>{
    return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 3437, 23)).then((mod)=>mod.KBarContext.Consumer);
}, {
    loadableGenerated: {
        modules: [
            "../components/search/index.jsx -> " + "kbar"
        ]
    },
    ssr: false
});
function SearchProvider({ searchConfig , children  }) {
    switch(searchConfig === null || searchConfig === void 0 ? void 0 : searchConfig.provider){
        case "algolia":
            return /*#__PURE__*/ jsx_runtime_.jsx(AlgoliaSearchProvider, {
                algoliaConfig: searchConfig.algoliaConfig,
                children: children
            });
        case "kbar":
            return /*#__PURE__*/ jsx_runtime_.jsx(KBarSearchProvider, {
                kbarConfig: searchConfig.kbarConfig,
                children: children
            });
        default:
            return children;
    }
}
function SearchContext(provider) {
    switch(provider){
        case "algolia":
            return AlgoliaSearchContext;
        case "kbar":
            return KBarContext;
        default:
    }
}



/***/ }),

/***/ 1868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NewsletterForm)
});

// UNUSED EXPORTS: socialIcons

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/script.js"
const script_js_namespaceObject = require("next/script.js");
var script_js_default = /*#__PURE__*/__webpack_require__.n(script_js_namespaceObject);
;// CONCATENATED MODULE: ./content/components/NewsletterForm.jsx


function NewsletterForm() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mx-auto max-w-7xl py-12 px-6 lg:pt-16 lg:px-8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "rounded-3xl bg-secondary py-10 px-6 sm:px-12 lg:flex lg:items-center lg:px-20 lg:py-16",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "lg:w-0 lg:flex-1 xl:mr-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-3xl lg:text-4xl font-bold tracking-tight text-primary text-center sm:text-left font-headings",
                            children: "Stay Connected"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mt-4 max-w-3xl text-md lg:text-lg text-primary",
                            children: "We're actively contributing to a wiser, weller world. If you believe a better world is possible, our activities will interest you. Join our newsletter to be regularly updated with what's happening at Life Itself."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "mt-8 text-md text-primary flex flex-col md:flex-row items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "md:mr-4",
                                    children: "And check out our socials:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "flex space-x-4 mt-4 md:mt-0",
                                    children: socialIcons.map((el)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: el.href,
                                            target: "_blank",
                                            className: "font-medium text-primary underline",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                role: "img",
                                                viewBox: "0 0 24 24",
                                                width: 18,
                                                height: 18,
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: el.svgPath
                                            })
                                        }, el.title))
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://sibforms.com/forms/end-form/build/sib-styles.css"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sib-form sm:!w-full sm:!max-w-md !mt-12 lg:!mt-0 lg:!ml-16 !p-0 lg:flex-1",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "sib-form-container",
                        className: "sib-form-container !font-sans",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "sib-container",
                                className: "sib-container--large sib-container--vertical !p-0 !bg-transparent",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    id: "sib-form",
                                    method: "POST",
                                    action: "https://1ebb0834.sibforms.com/serve/MUIEAHv8u1djsSIFAN7v4df8mi9xwfEWx_Lb1IsVhMTHmyWKns1oCWFTrJDN_8hj5kudlUMKTIbltfsV_UlYPq9FlNqAc0jVlyZCzmfHwI7ZrgYp2zVD4WcsCS1C76szNm16870ol677kE0fuRYr4L-v6bdsC7JvdpPMVRjMyfxYy93APXfDhXwqrXCVg_CTiCG6zQZTgK2om-L6",
                                    "data-type": "subscription",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "sib-input sib-form-block !p-0",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form__entry entry_block",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "form__label-row ",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "entry__field !rounded-md",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    className: "input w-full !rounded-md !border-white !px-5 !py-1 !placeholder-gray-500 !focus:outline-none !focus:ring-2 focus:!ring-white focus:!ring-offset-2 focus:!ring-offset-secondary",
                                                                    type: "text",
                                                                    id: "EMAIL",
                                                                    name: "EMAIL",
                                                                    autoComplete: "off",
                                                                    placeholder: "Enter your email",
                                                                    "data-required": "true",
                                                                    required: ""
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "entry__error entry__error--primary font-sm text-left text-[#661d1d]"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "sib-form-block !p-0 lg:!px-8",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "sib-form-block__button sib-form-block__button-with-loader !flex w-full items-center justify-center !rounded-md border border-transparent bg-primary disabled:bg-primary/80 !px-5 !py-3 !text-base !font-medium !text-white focus:!outline-none focus:!ring-2 focus:!ring-white focus:!ring-offset-2 focus:!ring-offset-primary !my-2 lg:!my-8",
                                                    form: "sib-form",
                                                    type: "submit",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            className: "icon clickable__icon progress-indicator__icon sib-hide-loader-icon",
                                                            viewBox: "0 0 512 512",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                                                            })
                                                        }),
                                                        "Subscribe"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "email_address_check",
                                            defaultValue: "",
                                            className: "input--hidden"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "hidden",
                                            name: "locale",
                                            defaultValue: "en"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "error-message",
                                className: "sib-form-message-panel text-sm text-[#661d1d] bg-[#ffeded] border border-[#ff4949]",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sib-form-message-panel__text sib-form-message-panel__text--center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            viewBox: "0 0 512 512",
                                            className: "sib-icon sib-notification__icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sib-form-message-panel__inner-text",
                                            children: "Your subscription could not be saved. Please try again."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "success-message",
                                className: "sib-form-message-panel text-sm text-[#085229] bg-[#e7faf0] border border-[#13ce66]",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sib-form-message-panel__text sib-form-message-panel__text--center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            viewBox: "0 0 512 512",
                                            className: "sib-icon sib-notification__icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sib-form-message-panel__inner-text",
                                            children: "Your subscription has been successful."
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_js_default()), {
                    dangerouslySetInnerHTML: {
                        __html: `
            window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
            window.LOCALE = 'en';
            window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

            window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

            window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

            window.translation = {
              common: {
                selectedList: '{quantity} list selected',
                selectedLists: '{quantity} lists selected'
              }
            };

            var AUTOHIDE = Boolean(0);
          `
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_js_default()), {
                    src: "https://sibforms.com/forms/end-form/build/main.js"
                })
            ]
        })
    });
}
const socialIcons = [
    {
        title: "Twitter",
        href: "https://twitter.com/forlifeitself",
        svgPath: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        })
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/forlifeitself/",
        svgPath: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
        })
    },
    {
        title: "Whatsapp",
        href: "https://chat.whatsapp.com/JNJCTZugNQn1fq89xbHtfA",
        svgPath: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        })
    },
    {
        title: "Youtube",
        href: "https://www.youtube.com/@bylifeitself",
        svgPath: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        })
    },
    {
        title: "Github",
        href: "https://github.com/life-itself",
        svgPath: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        })
    }
];


/***/ }),

/***/ 2957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ pageview)
/* harmony export */ });
/* unused harmony export event */
/* harmony import */ var _config_siteConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9907);

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    window.gtag("config", _config_siteConfig__WEBPACK_IMPORTED_MODULE_0__/* .siteConfig.analytics */ .J.analytics, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action , category , label , value  })=>{
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value
    });
};


/***/ }),

/***/ 3675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(600);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6770);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1026);
/* harmony import */ var _config_siteConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9907);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2957);
/* harmony import */ var _styles_docsearch_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1844);
/* harmony import */ var _styles_docsearch_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_docsearch_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9605);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_prism_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5913);
/* harmony import */ var _styles_prism_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_prism_css__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_7__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint import/no-default-export: off */ 













// ToC: get the html nodelist for headings
function collectHeadings(nodes) {
    const sections = [];
    Array.from(nodes).forEach((node)=>{
        const { id , innerText: title , tagName: level  } = node;
        if (!(id && title)) {
            return;
        }
        if (level === "H3") {
            const parentSection = sections[sections.length - 1];
            if (parentSection) parentSection.children.push({
                id,
                title
            });
        } else if (level === "H2") {
            sections.push({
                id,
                title,
                children: []
            });
        }
        sections.push(...collectHeadings(node.children ?? []));
    });
    return sections;
}
function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (_config_siteConfig__WEBPACK_IMPORTED_MODULE_9__/* .siteConfig.analytics */ .J.analytics) {
            const handleRouteChange = (url)=>{
                _lib_gtag__WEBPACK_IMPORTED_MODULE_10__/* .pageview */ .L(url);
            };
            router.events.on("routeChangeComplete", handleRouteChange);
            return ()=>{
                router.events.off("routeChangeComplete", handleRouteChange);
            };
        }
    }, [
        router.events
    ]);
    const [tableOfContents, setTableOfContents] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const headingNodes = document.querySelectorAll("h2,h3");
        const toc = collectHeadings(headingNodes);
        setTableOfContents(toc ?? []);
    }, [
        router.asPath
    ]); // update table of contents on route change with next/link
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        disableTransitionOnChange: true,
        attribute: "class",
        defaultTheme: _config_siteConfig__WEBPACK_IMPORTED_MODULE_9__/* .siteConfig.theme["default"] */ .J.theme["default"],
        forcedTheme: _config_siteConfig__WEBPACK_IMPORTED_MODULE_9__/* .siteConfig.theme["default"] */ .J.theme["default"] ? null : "light",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.DefaultSeo, {
                defaultTitle: _config_siteConfig__WEBPACK_IMPORTED_MODULE_9__/* .siteConfig.title */ .J.title,
                ..._config_siteConfig__WEBPACK_IMPORTED_MODULE_9__/* .siteConfig.nextSeo */ .J.nextSeo
            }),
            _config_siteConfig__WEBPACK_IMPORTED_MODULE_9__/* .siteConfig.analytics */ .J.analytics && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                strategy: "afterInteractive",
                src: `https://www.googletagmanager.com/gtag/js?id=${_config_siteConfig__WEBPACK_IMPORTED_MODULE_9__/* .siteConfig.analytics */ .J.analytics}`
            }),
            _config_siteConfig__WEBPACK_IMPORTED_MODULE_9__/* .siteConfig.analytics */ .J.analytics && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                id: "gtag-init",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${_config_siteConfig__WEBPACK_IMPORTED_MODULE_9__/* .siteConfig.analytics */ .J.analytics}', {
                page_path: window.location.pathname,
              });
            `
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search__WEBPACK_IMPORTED_MODULE_8__/* .SearchProvider */ .X$, {
                searchConfig: _config_siteConfig__WEBPACK_IMPORTED_MODULE_9__/* .siteConfig.search */ .J.search,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__/* .Layout */ .A, {
                    title: pageProps.title,
                    tableOfContents: tableOfContents,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1844:
/***/ (() => {



/***/ }),

/***/ 9605:
/***/ (() => {



/***/ }),

/***/ 5913:
/***/ (() => {



/***/ }),

/***/ 8781:
/***/ ((module) => {

"use strict";
module.exports = require("@docsearch/react");

/***/ }),

/***/ 3437:
/***/ ((module) => {

"use strict";
module.exports = require("kbar");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,529,907], () => (__webpack_exec__(3675)));
module.exports = __webpack_exports__;

})();