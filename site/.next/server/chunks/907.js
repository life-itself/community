"use strict";
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 9907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ siteConfig)
});

;// CONCATENATED MODULE: ./content/config.js
const userConfig = {
    title: "Life Itself",
    description: "We’re committed to practical action for a radically wiser, weller world. We create hubs, start businesses, do research and engage in activism to pioneer a wiser culture.",
    author: "Life Itself",
    // Google analytics key e.g. G-XXXX
    analytics: "G-5YH3R887BV",
    navbarTitle: {
        logo: "/assets/site/life-itself-logo.svg",
        text: "Life Itself"
    },
    navLinks: [
        {
            href: "/about",
            name: "About"
        },
        {
            href: "/people",
            name: "People"
        },
        {
            href: "/upcoming-residencies-gatherings",
            name: "Residencies"
        },
        {
            href: "/initiatives",
            name: "Initiatives"
        },
        {
            href: "/ecosystem",
            name: "Ecosystem"
        },
        {
            href: "/blog",
            name: "Blog"
        },
        {
            href: "/podcast",
            name: "Podcast"
        },
        {
            href: "/contact",
            name: "Contact"
        }
    ],
    socialLinks: {
        twitter: "https://twitter.com/forlifeitself",
        instagram: "https://www.instagram.com/forlifeitself/",
        whatsapp: "https://chat.whatsapp.com/JNJCTZugNQn1fq89xbHtfA"
    },
    theme: {
        default: ""
    },
    search: {
        provider: "kbar"
    }
};
/* harmony default export */ const config = (userConfig);

;// CONCATENATED MODULE: ./config/siteConfig.js

const defaultConfig = {
    title: "Flowershow",
    description: "",
    repoRoot: "",
    repoEditPath: "",
    editLinkShow: false,
    author: "",
    authorLogo: "",
    authorUrl: "",
    // Google analytics key e.g. G-XXXX
    analytics: "",
    // content source directory for markdown files
    // DO NOT CHANGE THIS VALUE
    // if you have your notes in another (external) directory,
    // /content dir should be a symlink to that directory
    content: "content",
    avatarPlaceholder: "/_flowershow/avatarplaceholder.png",
    contentExclude: [],
    contentInclude: [],
    blogDir: "blog",
    peopleDir: "people",
    // Theme
    theme: {
        default: "dark",
        toggleIcon: "/_flowershow/theme-button.svg"
    },
    navLinks: []
};
const siteConfig = {
    ...defaultConfig,
    ...config,
    // prevent theme object overrides for
    // values not provided in userConfig
    theme: {
        ...defaultConfig.theme,
        ...config === null || config === void 0 ? void 0 : config.theme
    }
};


/***/ })

};
;