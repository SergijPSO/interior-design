module.exports = [
(()=>{"use strict";return[
"[project]/client/components/ArrowedCarousel.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$responsive$2d$carousel__$5b$external$5d$__$28$react$2d$responsive$2d$carousel$2c$__cjs$2c$__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$responsive$2d$carousel$29$__ = __turbopack_context__.i("[externals]/react-responsive-carousel [external] (react-responsive-carousel, cjs, [project]/client/node_modules/react-responsive-carousel)");
;
;
;
const ArrowedCarousel = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "app__arrowed-carousel__wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$responsive$2d$carousel__$5b$external$5d$__$28$react$2d$responsive$2d$carousel$2c$__cjs$2c$__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$responsive$2d$carousel$29$__["Carousel"], {
            className: `${props.class}`,
            showStatus: props.status,
            showArrows: props.arrows,
            showIndicators: props.bullets,
            renderIndicator: (clickHandler, isSelected, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                    onClick: clickHandler,
                    className: `ind ${isSelected ? "active" : ""}`,
                    role: "button"
                }, index, false, {
                    fileName: "[project]/client/components/ArrowedCarousel.jsx",
                    lineNumber: 14,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            },
            children: props.children
        }, void 0, false, {
            fileName: "[project]/client/components/ArrowedCarousel.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/client/components/ArrowedCarousel.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ArrowedCarousel;
}),
"[project]/client/components/GalleryTabs.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@headlessui/react/dist/components/tabs/tabs.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$responsive$2d$carousel__$5b$external$5d$__$28$react$2d$responsive$2d$carousel$2c$__cjs$2c$__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$responsive$2d$carousel$29$__ = __turbopack_context__.i("[externals]/react-responsive-carousel [external] (react-responsive-carousel, cjs, [project]/client/node_modules/react-responsive-carousel)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$ArrowedCarousel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/components/ArrowedCarousel.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useScreenWidth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/hooks/useScreenWidth.js [ssr] (ecmascript)");
;
;
;
;
;
const GalleryTabs = ({ project })=>{
    const screenWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useScreenWidth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    if (project !== undefined && project !== null && !project?.id) {
        return [];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tab"].Group, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tab"].List, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "app__collection-tabs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tab"], {
                            className: "app__collection-tabs__item",
                            children: "Візуалізація"
                        }, void 0, false, {
                            fileName: "[project]/client/components/GalleryTabs.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tab"], {
                            className: "app__collection-tabs__item",
                            children: "Реалізація"
                        }, void 0, false, {
                            fileName: "[project]/client/components/GalleryTabs.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/components/GalleryTabs.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/client/components/GalleryTabs.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "app__collection-tabs__content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tab"].Panels, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tab"].Panel, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$responsive$2d$carousel__$5b$external$5d$__$28$react$2d$responsive$2d$carousel$2c$__cjs$2c$__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$responsive$2d$carousel$29$__["Carousel"], {
                                className: "app__arrowed-carousel app__arrowed-carousel--dark app__collection-tabs__visualisation",
                                showArrows: screenWidth >= 1024,
                                showStatus: false,
                                showThumbs: screenWidth >= 1024,
                                thumbWidth: 114,
                                showIndicators: screenWidth <= 1024,
                                dynamicHeight: true,
                                renderIndicator: (clickHandler, isSelected, index)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        onClick: clickHandler,
                                        className: `ind ${isSelected ? "active" : ""}`,
                                        role: "button"
                                    }, index, false, {
                                        fileName: "[project]/client/components/GalleryTabs.jsx",
                                        lineNumber: 35,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                },
                                children: project?.visualisation?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "app__collection-tabs__visualisation-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            alt: "slide image",
                                            className: "app__collection-tabs__visualisation-image",
                                            src: item
                                        }, void 0, false, {
                                            fileName: "[project]/client/components/GalleryTabs.jsx",
                                            lineNumber: 50,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, index, false, {
                                        fileName: "[project]/client/components/GalleryTabs.jsx",
                                        lineNumber: 46,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/client/components/GalleryTabs.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/client/components/GalleryTabs.jsx",
                            lineNumber: 24,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tab"].Panel, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$responsive$2d$carousel__$5b$external$5d$__$28$react$2d$responsive$2d$carousel$2c$__cjs$2c$__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$responsive$2d$carousel$29$__["Carousel"], {
                                className: "app__arrowed-carousel app__arrowed-carousel--dark app__collection-tabs__realization",
                                showArrows: screenWidth >= 1024,
                                showStatus: false,
                                showThumbs: screenWidth >= 1024,
                                thumbWidth: 114,
                                showIndicators: screenWidth <= 1024,
                                dynamicHeight: true,
                                renderIndicator: (clickHandler, isSelected, index)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        onClick: clickHandler,
                                        className: `ind ${isSelected ? "active" : ""}`,
                                        role: "button"
                                    }, index, false, {
                                        fileName: "[project]/client/components/GalleryTabs.jsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                },
                                children: project?.realization?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "app__collection-tabs__realization-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            alt: "slide image",
                                            className: "app__collection-tabs__realization-image",
                                            src: item
                                        }, void 0, false, {
                                            fileName: "[project]/client/components/GalleryTabs.jsx",
                                            lineNumber: 87,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, index, false, {
                                        fileName: "[project]/client/components/GalleryTabs.jsx",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/client/components/GalleryTabs.jsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/client/components/GalleryTabs.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/components/GalleryTabs.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/client/components/GalleryTabs.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/client/components/GalleryTabs.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = GalleryTabs;
}),
"[project]/client/components/Header.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/link.js [ssr] (ecmascript)");
;
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: "app__header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
            className: "app__navigation",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "app__navigation__logo",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "app__navigation__logo-link",
                        href: "/",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "app__navigation__logo-name",
                                children: "Аріна Козловська"
                            }, void 0, false, {
                                fileName: "[project]/client/components/Header.jsx",
                                lineNumber: 9,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "app__navigation__logo-position",
                                children: `дизайнер інтер'єру`
                            }, void 0, false, {
                                fileName: "[project]/client/components/Header.jsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/components/Header.jsx",
                        lineNumber: 8,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/client/components/Header.jsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                    className: "app__navigation__list",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: "app__navigation__item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "app__navigation__item-link",
                                href: "/",
                                scroll: false,
                                children: "ГОЛОВНА"
                            }, void 0, false, {
                                fileName: "[project]/client/components/Header.jsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/client/components/Header.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: "app__navigation__item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "app__navigation__item-link",
                                href: "/#projects",
                                scroll: false,
                                children: "ПРОЄКТИ"
                            }, void 0, false, {
                                fileName: "[project]/client/components/Header.jsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/client/components/Header.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: "app__navigation__item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "app__navigation__item-link",
                                href: "/#prices",
                                scroll: false,
                                children: "ВАРТІСТЬ"
                            }, void 0, false, {
                                fileName: "[project]/client/components/Header.jsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/client/components/Header.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: "app__navigation__item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "app__navigation__item-link",
                                href: "/#about",
                                scroll: false,
                                children: "ПРО МЕНЕ"
                            }, void 0, false, {
                                fileName: "[project]/client/components/Header.jsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/client/components/Header.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: "app__navigation__item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "app__navigation__item-link",
                                href: "/#contacts",
                                scroll: false,
                                children: "КОНТАКТИ"
                            }, void 0, false, {
                                fileName: "[project]/client/components/Header.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/client/components/Header.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/components/Header.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    className: "app__navigation__phone",
                    href: "tel:+380978159804",
                    children: "097 815 98 04"
                }, void 0, false, {
                    fileName: "[project]/client/components/Header.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/client/components/Header.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/client/components/Header.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/client/components/HeaderMobile.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
const HeaderMobile = ()=>{
    const [isActive, setActive] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const navToggle = ()=>{
        setActive(!isActive);
    };
    const closeNav = ()=>{
        setActive(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "app__mobile",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: "app__mobile-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "app__mobile-header__logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "app__mobile-header__logo-link",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "app__mobile-header__logo-name",
                                    children: "Аріна Козловська"
                                }, void 0, false, {
                                    fileName: "[project]/client/components/HeaderMobile.jsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "app__mobile-header__logo-position",
                                    children: `дизайнер інтер'єру`
                                }, void 0, false, {
                                    fileName: "[project]/client/components/HeaderMobile.jsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/components/HeaderMobile.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/client/components/HeaderMobile.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        onClick: navToggle,
                        className: "app__mobile-header__burger",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "app__mobile-header__burger-item"
                            }, void 0, false, {
                                fileName: "[project]/client/components/HeaderMobile.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "app__mobile-header__burger-item"
                            }, void 0, false, {
                                fileName: "[project]/client/components/HeaderMobile.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "app__mobile-header__burger-item"
                            }, void 0, false, {
                                fileName: "[project]/client/components/HeaderMobile.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/components/HeaderMobile.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/client/components/HeaderMobile.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: isActive ? "app__mobile-navigation--active" : "app__mobile-navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "app__mobile-navigation__item",
                        href: "/",
                        scroll: false,
                        onClick: closeNav,
                        children: "ГОЛОВНА"
                    }, void 0, false, {
                        fileName: "[project]/client/components/HeaderMobile.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "app__mobile-navigation__item",
                        href: "/#projects",
                        scroll: false,
                        onClick: closeNav,
                        children: "ПРОЄКТИ"
                    }, void 0, false, {
                        fileName: "[project]/client/components/HeaderMobile.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "app__mobile-navigation__item",
                        href: "/#prices",
                        scroll: false,
                        onClick: closeNav,
                        children: "ВАРТІСТЬ"
                    }, void 0, false, {
                        fileName: "[project]/client/components/HeaderMobile.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "app__mobile-navigation__item",
                        href: "/#about",
                        scroll: false,
                        onClick: closeNav,
                        children: "ПРО МЕНЕ"
                    }, void 0, false, {
                        fileName: "[project]/client/components/HeaderMobile.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "app__mobile-navigation__item",
                        href: "/#contacts",
                        onClick: closeNav,
                        children: "КОНТАКТИ"
                    }, void 0, false, {
                        fileName: "[project]/client/components/HeaderMobile.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        className: "app__mobile-navigation__item",
                        href: "tel:+380978159804",
                        onClick: closeNav,
                        children: "097 815 98 04"
                    }, void 0, false, {
                        fileName: "[project]/client/components/HeaderMobile.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/client/components/HeaderMobile.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/client/components/HeaderMobile.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HeaderMobile;
}),
"[project]/client/hooks/useScreenWidth.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function useScreenWidth() {
    const [screenWidth, setScreenWidth] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    function updateWidth() {
        setScreenWidth(window.innerWidth);
    }
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    return screenWidth;
}
const __TURBOPACK__default__export__ = useScreenWidth;
}),
"[project]/client/pages/gallery/[id].js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/components/Layout.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/components/Header.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$HeaderMobile$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/components/HeaderMobile.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$GalleryTabs$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/components/GalleryTabs.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$public$2f$data$2f$designs$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/public/data/designs.json.[json].cjs [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
async function getServerSideProps({ params }) {
    const selectedProject = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$public$2f$data$2f$designs$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"].projects.find((p)=>p.id === params.id) || null;
    return {
        props: {
            selectedProject: selectedProject || {}
        }
    };
}
const Gallery = ({ selectedProject })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [screenWidth, setScreenWidth] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    function updateWidth() {
        setScreenWidth(window.innerWidth);
    }
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        pageTitle: "Козловська Аріна Дизайнер інтер`єру",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "app__wrapper",
            children: [
                screenWidth <= 1024 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$HeaderMobile$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/client/pages/gallery/[id].js",
                    lineNumber: 45,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/client/pages/gallery/[id].js",
                    lineNumber: 45,
                    columnNumber: 51
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                    className: "app__collection",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$GalleryTabs$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        project: selectedProject
                    }, void 0, false, {
                        fileName: "[project]/client/pages/gallery/[id].js",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/client/pages/gallery/[id].js",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/client/pages/gallery/[id].js",
            lineNumber: 44,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/client/pages/gallery/[id].js",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Gallery;
}),
]})(),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/client/public/data/designs.json.[json].cjs [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"projects\":[{\"id\":\"0\",\"realization\":[\"/assets/images/designs/project7/realization/1.jpg\",\"/assets/images/designs/project7/realization/2.jpg\",\"/assets/images/designs/project7/realization/3.jpg\",\"/assets/images/designs/project7/realization/4.jpg\",\"/assets/images/designs/project7/realization/6.jpg\",\"/assets/images/designs/project7/realization/7.jpg\",\"/assets/images/designs/project7/realization/8.jpg\",\"/assets/images/designs/project7/realization/9.jpg\",\"/assets/images/designs/project7/realization/10.jpg\",\"/assets/images/designs/project7/realization/11.jpg\",\"/assets/images/designs/project7/realization/12.jpg\",\"/assets/images/designs/project7/realization/13.jpg\",\"/assets/images/designs/project7/realization/14.jpg\",\"/assets/images/designs/project7/realization/15.jpg\",\"/assets/images/designs/project7/realization/16.jpg\",\"/assets/images/designs/project7/realization/17.jpg\",\"/assets/images/designs/project7/realization/18.jpg\",\"/assets/images/designs/project7/realization/19.jpg\"],\"visualisation\":[\"/assets/images/designs/project7/visualisation/1.jpg\",\"/assets/images/designs/project7/visualisation/2.jpg\",\"/assets/images/designs/project7/visualisation/3.jpg\",\"/assets/images/designs/project7/visualisation/4.jpg\",\"/assets/images/designs/project7/visualisation/5.jpg\",\"/assets/images/designs/project7/visualisation/6.jpg\",\"/assets/images/designs/project7/visualisation/7.jpg\",\"/assets/images/designs/project7/visualisation/8.jpg\",\"/assets/images/designs/project7/visualisation/9.jpg\",\"/assets/images/designs/project7/visualisation/10.jpg\",\"/assets/images/designs/project7/visualisation/11.jpg\",\"/assets/images/designs/project7/visualisation/12.jpg\",\"/assets/images/designs/project7/visualisation/13.jpg\",\"/assets/images/designs/project7/visualisation/14.jpg\",\"/assets/images/designs/project7/visualisation/15.jpg\",\"/assets/images/designs/project7/visualisation/16.jpg\",\"/assets/images/designs/project7/visualisation/17.jpg\",\"/assets/images/designs/project7/visualisation/18.jpg\",\"/assets/images/designs/project7/visualisation/19.jpg\"],\"description\":\"Розроблено для LVIV CONCEPT, Квартира, м.Винники\",\"area\":\"57.5 кв.м.\"},{\"id\":\"1\",\"realization\":[\"/assets/images/designs/project8/realization/1.jpg\",\"/assets/images/designs/project8/realization/2.jpg\",\"/assets/images/designs/project8/realization/3.jpg\",\"/assets/images/designs/project8/realization/4.jpg\",\"/assets/images/designs/project8/realization/6.jpg\",\"/assets/images/designs/project8/realization/7.jpg\",\"/assets/images/designs/project8/realization/8.jpg\",\"/assets/images/designs/project8/realization/9.jpg\",\"/assets/images/designs/project8/realization/10.jpg\",\"/assets/images/designs/project8/realization/11.jpg\",\"/assets/images/designs/project8/realization/12.jpg\",\"/assets/images/designs/project8/realization/13.jpg\",\"/assets/images/designs/project8/realization/14.jpg\",\"/assets/images/designs/project8/realization/15.jpg\",\"/assets/images/designs/project8/realization/16.jpg\",\"/assets/images/designs/project8/realization/17.jpg\",\"/assets/images/designs/project8/realization/18.jpg\",\"/assets/images/designs/project8/realization/19.jpg\",\"/assets/images/designs/project8/realization/20.jpg\"],\"visualisation\":[\"/assets/images/designs/project8/visualisation/1.jpg\",\"/assets/images/designs/project8/visualisation/2.jpg\",\"/assets/images/designs/project8/visualisation/3.jpg\",\"/assets/images/designs/project8/visualisation/4.jpg\",\"/assets/images/designs/project8/visualisation/5.jpg\",\"/assets/images/designs/project8/visualisation/6.jpg\",\"/assets/images/designs/project8/visualisation/7.jpg\",\"/assets/images/designs/project8/visualisation/8.jpg\",\"/assets/images/designs/project8/visualisation/9.jpg\",\"/assets/images/designs/project8/visualisation/10.jpg\",\"/assets/images/designs/project8/visualisation/11.jpg\",\"/assets/images/designs/project8/visualisation/12.jpg\",\"/assets/images/designs/project8/visualisation/13.jpg\",\"/assets/images/designs/project8/visualisation/14.jpg\",\"/assets/images/designs/project8/visualisation/15.jpg\",\"/assets/images/designs/project8/visualisation/16.jpg\",\"/assets/images/designs/project8/visualisation/17.jpg\",\"/assets/images/designs/project8/visualisation/18.jpg\",\"/assets/images/designs/project8/visualisation/19.jpg\",\"/assets/images/designs/project8/visualisation/20.jpg\"],\"description\":\"ЖК Варшавський плюс\",\"area\":\"39 кв.м.\"},{\"id\":\"2\",\"realization\":[\"/assets/images/designs/project1/realization/1.jpg\",\"/assets/images/designs/project1/realization/2.jpg\",\"/assets/images/designs/project1/realization/3.jpg\",\"/assets/images/designs/project1/realization/4.jpg\",\"/assets/images/designs/project1/realization/5.jpg\",\"/assets/images/designs/project1/realization/6.jpg\",\"/assets/images/designs/project1/realization/7.jpg\",\"/assets/images/designs/project1/realization/8.jpg\",\"/assets/images/designs/project1/realization/9.jpg\",\"/assets/images/designs/project1/realization/10.jpg\",\"/assets/images/designs/project1/realization/11.jpg\",\"/assets/images/designs/project1/realization/12.jpg\",\"/assets/images/designs/project1/realization/13.jpg\",\"/assets/images/designs/project1/realization/14.jpg\",\"/assets/images/designs/project1/realization/15.jpg\",\"/assets/images/designs/project1/realization/16.jpg\"],\"visualisation\":[\"/assets/images/designs/project1/visualisation/1.jpg\",\"/assets/images/designs/project1/visualisation/2.jpg\",\"/assets/images/designs/project1/visualisation/3.jpg\",\"/assets/images/designs/project1/visualisation/4.jpg\",\"/assets/images/designs/project1/visualisation/5.jpg\",\"/assets/images/designs/project1/visualisation/6.jpg\",\"/assets/images/designs/project1/visualisation/7.jpg\",\"/assets/images/designs/project1/visualisation/8.jpg\",\"/assets/images/designs/project1/visualisation/9.jpg\",\"/assets/images/designs/project1/visualisation/10.jpg\",\"/assets/images/designs/project1/visualisation/11.jpg\",\"/assets/images/designs/project1/visualisation/12.jpg\",\"/assets/images/designs/project1/visualisation/13.jpg\",\"/assets/images/designs/project1/visualisation/14.jpg\",\"/assets/images/designs/project1/visualisation/15.jpg\",\"/assets/images/designs/project1/visualisation/16.jpg\"],\"description\":\"ЖК Варшавський плюс\",\"area\":\"66.3кв.м.\"},{\"id\":\"3\",\"realization\":[\"/assets/images/designs/project2/realization/1.jpg\",\"/assets/images/designs/project2/realization/2.jpg\",\"/assets/images/designs/project2/realization/3.jpg\",\"/assets/images/designs/project2/realization/4.jpg\",\"/assets/images/designs/project2/realization/5.jpg\",\"/assets/images/designs/project2/realization/6.jpg\",\"/assets/images/designs/project2/realization/7.jpg\",\"/assets/images/designs/project2/realization/8.jpg\",\"/assets/images/designs/project2/realization/9.jpg\",\"/assets/images/designs/project2/realization/10.jpg\",\"/assets/images/designs/project2/realization/11.jpg\",\"/assets/images/designs/project2/realization/12.jpg\",\"/assets/images/designs/project2/realization/13.jpg\",\"/assets/images/designs/project2/realization/14.jpg\",\"/assets/images/designs/project2/realization/15.jpg\",\"/assets/images/designs/project2/realization/16.jpg\",\"/assets/images/designs/project2/realization/17.jpg\",\"/assets/images/designs/project2/realization/18.jpg\"],\"visualisation\":[\"/assets/images/designs/project2/visualisation/1.jpg\",\"/assets/images/designs/project2/visualisation/2.jpg\",\"/assets/images/designs/project2/visualisation/3.jpg\",\"/assets/images/designs/project2/visualisation/4.jpg\",\"/assets/images/designs/project2/visualisation/5.jpg\",\"/assets/images/designs/project2/visualisation/6.jpg\",\"/assets/images/designs/project2/visualisation/7.jpg\",\"/assets/images/designs/project2/visualisation/8.jpg\",\"/assets/images/designs/project2/visualisation/9.jpg\",\"/assets/images/designs/project2/visualisation/10.jpg\",\"/assets/images/designs/project2/visualisation/11.jpg\",\"/assets/images/designs/project2/visualisation/12.jpg\",\"/assets/images/designs/project2/visualisation/13.jpg\",\"/assets/images/designs/project2/visualisation/14.jpg\",\"/assets/images/designs/project2/visualisation/15.jpg\",\"/assets/images/designs/project2/visualisation/16.jpg\",\"/assets/images/designs/project2/visualisation/17.jpg\",\"/assets/images/designs/project2/visualisation/18.jpg\"],\"description\":\"Будинок, с.Пасіки-Зубрицькі\",\"area\":\"200 кв.м.\"},{\"id\":\"4\",\"realization\":[\"/assets/images/designs/project3/realization/1.jpg\",\"/assets/images/designs/project3/realization/2.jpg\",\"/assets/images/designs/project3/realization/3.jpg\",\"/assets/images/designs/project3/realization/4.jpg\",\"/assets/images/designs/project3/realization/5.jpg\",\"/assets/images/designs/project3/realization/6.jpg\",\"/assets/images/designs/project3/realization/7.jpg\",\"/assets/images/designs/project3/realization/8.jpg\",\"/assets/images/designs/project3/realization/9.jpg\",\"/assets/images/designs/project3/realization/10.jpg\",\"/assets/images/designs/project3/realization/11.jpg\",\"/assets/images/designs/project3/realization/12.jpg\",\"/assets/images/designs/project3/realization/13.jpg\",\"/assets/images/designs/project3/realization/14.jpg\",\"/assets/images/designs/project3/realization/15.jpg\",\"/assets/images/designs/project3/realization/16.jpg\"],\"visualisation\":[\"/assets/images/designs/project3/visualisation/1.jpg\",\"/assets/images/designs/project3/visualisation/2.jpg\",\"/assets/images/designs/project3/visualisation/3.jpg\",\"/assets/images/designs/project3/visualisation/4.jpg\",\"/assets/images/designs/project3/visualisation/5.jpg\",\"/assets/images/designs/project3/visualisation/6.jpg\",\"/assets/images/designs/project3/visualisation/7.jpg\",\"/assets/images/designs/project3/visualisation/8.jpg\",\"/assets/images/designs/project3/visualisation/9.jpg\",\"/assets/images/designs/project3/visualisation/10.jpg\",\"/assets/images/designs/project3/visualisation/11.jpg\",\"/assets/images/designs/project3/visualisation/12.jpg\",\"/assets/images/designs/project3/visualisation/13.jpg\",\"/assets/images/designs/project3/visualisation/14.jpg\",\"/assets/images/designs/project3/visualisation/15.jpg\",\"/assets/images/designs/project3/visualisation/16.jpg\"],\"description\":\"Будинок, м.Бидгощ\",\"area\":\"57,8 кв.м.\"},{\"id\":\"5\",\"realization\":[\"/assets/images/designs/project4/realization/1.jpg\",\"/assets/images/designs/project4/realization/2.jpg\",\"/assets/images/designs/project4/realization/3.jpg\",\"/assets/images/designs/project4/realization/4.jpg\",\"/assets/images/designs/project4/realization/5.jpg\",\"/assets/images/designs/project4/realization/6.jpg\",\"/assets/images/designs/project4/realization/7.jpg\",\"/assets/images/designs/project4/realization/8.jpg\",\"/assets/images/designs/project4/realization/9.jpg\",\"/assets/images/designs/project4/realization/10.jpg\",\"/assets/images/designs/project4/realization/11.jpg\",\"/assets/images/designs/project4/realization/12.jpg\",\"/assets/images/designs/project4/realization/13.jpg\",\"/assets/images/designs/project4/realization/14.jpg\",\"/assets/images/designs/project4/realization/15.jpg\",\"/assets/images/designs/project4/realization/16.jpg\",\"/assets/images/designs/project4/realization/17.jpg\",\"/assets/images/designs/project4/realization/18.jpg\",\"/assets/images/designs/project4/realization/19.jpg\",\"/assets/images/designs/project4/realization/20.jpg\",\"/assets/images/designs/project4/realization/21.jpg\",\"/assets/images/designs/project4/realization/22.jpg\",\"/assets/images/designs/project4/realization/23.jpg\",\"/assets/images/designs/project4/realization/24.jpg\",\"/assets/images/designs/project4/realization/25.jpg\",\"/assets/images/designs/project4/realization/26.jpg\"],\"visualisation\":[\"/assets/images/designs/project4/visualisation/1.jpg\",\"/assets/images/designs/project4/visualisation/2.jpg\",\"/assets/images/designs/project4/visualisation/3.jpg\",\"/assets/images/designs/project4/visualisation/4.jpg\",\"/assets/images/designs/project4/visualisation/5.jpg\",\"/assets/images/designs/project4/visualisation/6.jpg\",\"/assets/images/designs/project4/visualisation/7.jpg\",\"/assets/images/designs/project4/visualisation/8.jpg\",\"/assets/images/designs/project4/visualisation/9.jpg\",\"/assets/images/designs/project4/visualisation/10.jpg\",\"/assets/images/designs/project4/visualisation/11.jpg\",\"/assets/images/designs/project4/visualisation/12.jpg\",\"/assets/images/designs/project4/visualisation/13.jpg\",\"/assets/images/designs/project4/visualisation/14.jpg\",\"/assets/images/designs/project4/visualisation/15.jpg\",\"/assets/images/designs/project4/visualisation/16.jpg\",\"/assets/images/designs/project4/visualisation/17.jpg\",\"/assets/images/designs/project4/visualisation/18.jpg\",\"/assets/images/designs/project4/visualisation/19.jpg\",\"/assets/images/designs/project4/visualisation/20.jpg\",\"/assets/images/designs/project4/visualisation/21.jpg\",\"/assets/images/designs/project4/visualisation/22.jpg\",\"/assets/images/designs/project4/visualisation/23.jpg\",\"/assets/images/designs/project4/visualisation/24.jpg\",\"/assets/images/designs/project4/visualisation/25.jpg\",\"/assets/images/designs/project4/visualisation/26.jpg\"],\"description\":\"Будинок, м.Почаїв\",\"area\":\"147 кв.м.\"},{\"id\":\"6\",\"realization\":[\"/assets/images/designs/project5/realization/1.jpg\",\"/assets/images/designs/project5/realization/2.jpg\",\"/assets/images/designs/project5/realization/4.jpg\",\"/assets/images/designs/project5/realization/6.jpg\",\"/assets/images/designs/project5/realization/7.jpg\",\"/assets/images/designs/project5/realization/8.jpg\",\"/assets/images/designs/project5/realization/9.jpg\",\"/assets/images/designs/project5/realization/10.jpg\"],\"visualisation\":[\"/assets/images/designs/project5/visualisation/1.jpg\",\"/assets/images/designs/project5/visualisation/2.jpg\",\"/assets/images/designs/project5/visualisation/4.jpg\",\"/assets/images/designs/project5/visualisation/6.jpg\",\"/assets/images/designs/project5/visualisation/7.jpg\",\"/assets/images/designs/project5/visualisation/8.jpg\",\"/assets/images/designs/project5/visualisation/9.jpg\",\"/assets/images/designs/project5/visualisation/10.jpg\"],\"description\":\"Смарт квартира, м.Київ\",\"area\":\"19 кв.м.\"},{\"id\":\"7\",\"realization\":[\"/assets/images/designs/project6/realization/1.jpg\",\"/assets/images/designs/project6/realization/2.jpg\",\"/assets/images/designs/project6/realization/3.jpg\",\"/assets/images/designs/project6/realization/4.jpg\",\"/assets/images/designs/project6/realization/6.jpg\",\"/assets/images/designs/project6/realization/7.jpg\",\"/assets/images/designs/project6/realization/8.jpg\",\"/assets/images/designs/project6/realization/9.jpg\",\"/assets/images/designs/project6/realization/10.jpg\"],\"visualisation\":[\"/assets/images/designs/project6/visualisation/1.jpg\",\"/assets/images/designs/project6/visualisation/2.jpg\",\"/assets/images/designs/project6/visualisation/3.jpg\",\"/assets/images/designs/project6/visualisation/4.jpg\",\"/assets/images/designs/project6/visualisation/5.jpg\",\"/assets/images/designs/project6/visualisation/6.jpg\",\"/assets/images/designs/project6/visualisation/7.jpg\",\"/assets/images/designs/project6/visualisation/8.jpg\",\"/assets/images/designs/project6/visualisation/9.jpg\",\"/assets/images/designs/project6/visualisation/10.jpg\"],\"description\":\"Будинок, кухня-вітальня, м.Ірпінь\",\"area\":\"56 кв.м.\"}]}");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0x4ztqzny1h9u._.js.map