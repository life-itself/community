"use strict";
(() => {
var exports = {};
exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 6270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BlogSlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@splidejs/react-splide"
const react_splide_namespaceObject = require("@splidejs/react-splide");
// EXTERNAL MODULE: ./lib/formatDate.js
var formatDate = __webpack_require__(3203);
;// CONCATENATED MODULE: ./content/components/BlogSlider.jsx



function BlogSlider({ posts  }) {
    const slicedPosts = posts;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative mx-auto max-w-7xl space-y-4 lg:space-y-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-3xl font-bold font-headings tracking-tight text-primary sm:text-4xl",
                        children: "From the blog"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-auto lg:max-w-7xl lg:px-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_splide_namespaceObject.Splide, {
                        "aria-label": "From the blog",
                        tag: "section",
                        hasTrack: false,
                        options: {
                            perPage: 1,
                            rewind: true,
                            gap: "1rem",
                            pagination: false,
                            mediaQuery: "min",
                            breakpoints: {
                                768: {
                                    perPage: 2
                                },
                                1024: {
                                    perPage: 3
                                }
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "splide__arrows flex w-full justify-between items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "splide__arrow splide__arrow--prev",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "lg:w-40 h-10 lg:h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/blog",
                                        className: "text-lg font-bold font-headings tracking-tight text-primary underline",
                                        children: "View all posts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "splide__arrow splide__arrow--next",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "lg:w-40 h-10 lg:h-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_splide_namespaceObject.SplideTrack, {
                                children: slicedPosts === null || slicedPosts === void 0 ? void 0 : slicedPosts.map((post)=>{
                                    var ref, ref1, ref2, ref3, ref4, ref5, ref6;
                                    /*#__PURE__*/ return jsx_runtime_.jsx(react_splide_namespaceObject.SplideSlide, {
                                        className: "p-1",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col overflow-hidden rounded-lg shadow-lg",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "h-48 w-full object-cover object-center",
                                                        src: post.image,
                                                        alt: post.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-1 flex-col justify-between bg-white p-6 space-y-6 divide-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-sm font-medium text-primary/80",
                                                                    children: (ref = post.categories) === null || ref === void 0 ? void 0 : ref.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "capitalize mr-3 hover:underline",
                                                                            children: category
                                                                        }, category))
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: `/${post.url_path}`,
                                                                    className: "mt-2 block space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-lg font-bold font-headings text-primary h-[3.5rem] line-clamp-2 underline",
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
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center pt-4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: (ref1 = post.authors[0]) === null || ref1 === void 0 ? void 0 : ref1.url_path,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "sr-only",
                                                                                children: (ref2 = post.authors[0]) === null || ref2 === void 0 ? void 0 : ref2.name
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                className: "h-10 w-10 rounded-full",
                                                                                src: (ref3 = post.authors[0]) === null || ref3 === void 0 ? void 0 : ref3.avatar,
                                                                                alt: (ref4 = post.authors[0]) === null || ref4 === void 0 ? void 0 : ref4.name
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "ml-3",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-sm font-medium text-gray-900",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: (ref5 = post.authors[0]) === null || ref5 === void 0 ? void 0 : ref5.url_path,
                                                                                className: "hover:underline",
                                                                                children: (ref6 = post.authors[0]) === null || ref6 === void 0 ? void 0 : ref6.name
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "flex space-x-1 text-sm text-gray-500",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                                                children: (0,formatDate/* formatDate */.p)(post.created)
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, post._id);
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Collaborators)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const collabs = [
    {
        title: "Plum Village",
        url: "",
        logo: "assets/site/collaborators/Plum-village-logo.png"
    },
    {
        title: "LSE",
        url: "",
        logo: "assets/site/collaborators/LSE_Logo.png"
    },
    {
        title: "Open Knowledge International",
        url: "",
        logo: "assets/site/collaborators/Open-Knowledge-International-Logo.png"
    },
    {
        title: "Rockefeller Foundation",
        url: "",
        logo: "assets/site/collaborators/Rockefeller-Foundation.png"
    },
    {
        title: "IPPR",
        url: "",
        logo: "assets/site/collaborators/IPPR-Logo_pink.png"
    },
    {
        title: "Untitled",
        url: "",
        logo: "assets/site/collaborators/untitled_logo.png"
    },
    {
        title: "CRI",
        url: "",
        logo: "assets/site/collaborators/CRI-logo.png"
    }
];
function Collaborators() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-3xl font-headings font-bold tracking-tight sm:text-4xl mb-6",
                children: "Collaborators"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid gap-8 grid-cols-2 md:grid-cols-6 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-auto grayscale",
                children: collabs.map((collaborator)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: collaborator.url,
                        className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "h-12",
                            src: collaborator.logo,
                            alt: collaborator.title
                        })
                    }, collaborator.title))
            })
        ]
    });
}


/***/ }),

/***/ 3203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 4667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4427);
/* harmony import */ var _content_getters_blogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9502);
/* harmony import */ var components_custom_collaborators_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5077);
/* harmony import */ var components_custom_BlogSlider_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6270);
/* harmony import */ var components_custom_InitiativeCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(185);
/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3203);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__, _content_getters_blogs__WEBPACK_IMPORTED_MODULE_2__]);
([contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__, _content_getters_blogs__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const keyWritingsPaths = [
    "blog/2022/02/01/cultivating-an-emerging-paradigm"
];
const keyInitiativesPaths = [];
const keyWritingsData = [
    {
        id: 1,
        title: "Cultivating An Emerging Paradigm",
        href: "/blog/2022/02/01/cultivating-an-emerging-paradigm",
        description: "Humanity and the planet are at a critical point in history similar to major breakdown/breakthrough points of the past, most recently the transition to modernity in the Enlightenment. We risk civilizational collapse and we also have the possibility of a breakthrough. How do we facilitate the latter?",
        imageUrl: "/assets/images/Blog-Feature-Images-7.png",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: {
            title: "Vision",
            href: "#"
        },
        author: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    }
];
const keyInitiativesData = [
    {
        id: 1,
        title: "Cultivating An Emerging Paradigm",
        href: "/blog/2022/02/01/cultivating-an-emerging-paradigm",
        description: "Humanity and the planet are at a critical point in history similar to major breakdown/breakthrough points of the past, most recently the transition to modernity in the Enlightenment. We risk civilizational collapse and we also have the possibility of a breakthrough. How do we facilitate the latter?",
        imageUrl: "/assets/images/Blog-Feature-Images-7.png"
    }
];
function Home({ posts , keyWritings , keyInitiatives  }) {
    console.log(keyInitiatives);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "lg:relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-archivo mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:pt-48 lg:text-left",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "px-4 sm:px-8 lg:w-1/2 xl:pr-16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-2xl font-headings font-bold tracking-tight text-primary xl:text-4xl flex flex-col",
                                    children: "Ever asked yourself ... How can I live a happier life? Create a better society?"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-base md:mt-5 md:max-w-3xl",
                                    children: [
                                        "We’re an open community dedicated to the art of wiser living and social transformation. We favor approaches that prioritize inner development and cultural change in a rigorous, practical way.",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Sign up to our monthly newsletter for latest updates, projects and community news."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-10 sm:mt-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        action: "#",
                                        className: "sm:mx-auto sm:max-w-xl lg:mx-0",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "sm:flex",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "email",
                                                            className: "sr-only",
                                                            children: "Email address"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            id: "email",
                                                            type: "email",
                                                            placeholder: "Enter your email",
                                                            className: "block w-full rounded-md border-0 px-4 py-3 text-base text-primary placeholder-gray-500 ring-1 ring-primary focus:outline-none focus:ring-2 focus:ring-primary"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-3 sm:ml-3 sm:mt-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "submit",
                                                        className: "block w-full rounded-md bg-secondary px-4 py-3 font-medium text-primary shadow focus:outline-none focus:ring-2 focus:ring-primary",
                                                        children: "Sign Up"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "absolute inset-0 mx-auto h-full object-fit",
                            src: "/assets/lifeitself-landingpage.webp",
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_custom_collaborators_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_custom_BlogSlider_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                posts: posts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-white px-6 py-24 sm:py-32 lg:px-8",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto max-w-2xl text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",
                                children: "What We're About"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-6 text-xl leading-8 text-gray-600 space-y-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "In the past four decades, a confirmation and expansion of wisdom traditions by scientific rigor has converged with an ever deepening polycrisis."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "There has never been a more important time to “grow up”, both personally and collectively. A paradigm shift is underway and we all have a part to play."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "The big question is ... how?"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Life itself is a home for people who are dedicated to rigorous enquiry and deliberate action for inner growth and cultural evolution in the service of social transformation -- creating an awakening society and a radically wiser, weller world."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Inspired by integral theory, zen buddhism and other key concepts, we cultivate these ideas and apply them to life itself, through deliberately developmental programs and community building."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/about",
                                            className: "rounded-md bg-white px-3.5 py-2.5 font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                                            children: "Learn More"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-gray-900 py-24 sm:py-32",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative isolate",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mx-auto max-w-7xl sm:px-6 lg:px-8",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm",
                                            src: "https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full flex-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-3xl font-bold tracking-tight text-white sm:text-4xl",
                                                    children: "Join The Community"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mt-6 text-lg leading-8 text-gray-300",
                                                    children: "Our community chat is bustling, come in and say hey! This is a space for you if: - You want to connect with like-minded people interested in creating a wiser, weller world - You want to learn from and meet experts in different fields from psychology, education, technology, metamodern philosophy and more - You want to build your professional network with other professionals We meet online on a bi-monthly basis for deep discussions and communal gathering."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-10 flex",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "https://chat.whatsapp.com/JNJCTZugNQn1fq89xbHtfA",
                                                        className: "text-sm font-semibold leading-6 text-indigo-400",
                                                        children: [
                                                            "Join Here ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                "aria-hidden": "true",
                                                                children: "→"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    viewBox: "0 0 1318 752",
                                    className: "w-[82.375rem] flex-none",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            fill: "url(#ee394704-5802-4a27-9451-3d29bf7415a3)",
                                            fillOpacity: ".25",
                                            d: "m279.655 479.549-211.511-96.46L.638 751.469l279.017-271.92 380.928 173.723c-77.415-137.198-159.845-384.186 129.758-274.555C1152.34 515.756 1226.88 775.51 1299.76 547.101c58.31-182.726-41.07-382.222-98.04-459.13L964.951 386.243 771.295.416 279.655 479.55Z"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                                id: "ee394704-5802-4a27-9451-3d29bf7415a3",
                                                x1: "1452.56",
                                                x2: "-101.59",
                                                y1: "515.446",
                                                y2: "760.592",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                        stopColor: "#4F46E5"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                        offset: 1,
                                                        stopColor: "#80CAFF"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-white py-24 sm:py-32",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mx-auto max-w-2xl text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                                        children: "Key Writings"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-2 text-lg leading-8 text-gray-600",
                                        children: "Read some of our most essential pieces."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3",
                                children: keyWritings === null || keyWritings === void 0 ? void 0 : keyWritings.map((post)=>{
                                    var ref, ref1, ref2, ref3, ref4;
                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                        className: "flex flex-col items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: post.image,
                                                        alt: post.title,
                                                        className: "aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "max-w-xl",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-8 flex items-center gap-x-4 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                                dateTime: post.created,
                                                                className: "text-gray-500",
                                                                children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_6__/* .formatDate */ .p)(post.date ?? post.created)
                                                            }),
                                                            (ref = post.categories) === null || ref === void 0 ? void 0 : ref.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: `/categories/${category}`,
                                                                    className: "relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100",
                                                                    children: category
                                                                }, `${category}-${index}`))
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "group relative",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-gray-600",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: post.url_path,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "absolute inset-0"
                                                                        }),
                                                                        post.title
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "mt-5 line-clamp-3 text-sm leading-6 text-gray-600",
                                                                children: post.description
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "relative mt-8 flex items-center gap-x-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: (ref1 = post.authors[0]) === null || ref1 === void 0 ? void 0 : ref1.avatar,
                                                                alt: "",
                                                                className: "h-10 w-10 rounded-full bg-gray-100"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "text-sm leading-6",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "font-semibold text-gray-900",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            href: (ref2 = post.authors[0]) === null || ref2 === void 0 ? void 0 : ref2.url_path,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "absolute inset-0"
                                                                                }),
                                                                                (ref3 = post.authors[0]) === null || ref3 === void 0 ? void 0 : ref3.name
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-gray-600",
                                                                        children: (ref4 = post.author) === null || ref4 === void 0 ? void 0 : ref4.role
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, post._id);
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-white py-24 sm:py-32",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mx-auto max-w-2xl text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                                        children: "Key Initiatives"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-2 text-lg leading-8 text-gray-600",
                                        children: "Read about of our major initiatives."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                role: "list",
                                className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3",
                                children: keyInitiatives === null || keyInitiatives === void 0 ? void 0 : keyInitiatives.map((initiative)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_custom_InitiativeCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        initiative: initiative
                                    }, initiative._id))
                            })
                        ]
                    })
                })
            })
        ]
    });
}
async function getStaticProps() {
    const posts = await (0,_content_getters_blogs__WEBPACK_IMPORTED_MODULE_2__["default"])(9);
    const keyWritings = await (0,_content_getters_blogs__WEBPACK_IMPORTED_MODULE_2__["default"])(contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allBlogs.length */ .R6.length).filter((post)=>{
        return keyWritingsPaths === null || keyWritingsPaths === void 0 ? void 0 : keyWritingsPaths.includes(post.url_path);
    });
    const keyInitiatives = keyInitiativesPaths.length > 0 ? contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allInitiatives.filter */ .F_.filter((initiative)=>{
        return keyInitiativesPaths === null || keyInitiativesPaths === void 0 ? void 0 : keyInitiativesPaths.includes(initiative.url_path);
    }) : contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allInitiatives.filter */ .F_.filter((initiative)=>!(initiative.url_path === "initiatives")).sort((a, b)=>new Date(b.created) - new Date(a.created)).slice(0, 6);
    /*
  const keyWritingsNew = [
    getBlogPostInfoByPath(...),
    getBlogPostInfoByPath(...),
    getBlogPostInfoByPath(...),
  ]

  const keyInitiatives = [
    getInitiativeBySlug('...')
  ]
  */ return {
        props: {
            posts,
            keyWritings,
            keyInitiatives
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,427,907,502,185], () => (__webpack_exec__(4667)));
module.exports = __webpack_exports__;

})();