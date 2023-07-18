exports.id = 542;
exports.ids = [542];
exports.modules = {

/***/ 23527:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68262, 23))

/***/ }),

/***/ 36896:
/***/ (() => {



/***/ }),

/***/ 40983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ colors)
/* harmony export */ });
const colors = {
    lightBlack: "rgb(33 33 33)",
    gold: "#efbc0d",
    silver: "#ededed"
};



/***/ }),

/***/ 73856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LoggedHeader: () => (/* binding */ LoggedHeader),
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(64085);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ArrowForward.js
var ArrowForward = __webpack_require__(58163);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AccountBalanceWallet.js
var AccountBalanceWallet = __webpack_require__(3537);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/publicComponents/customStyles.tsx
var customStyles = __webpack_require__(40983);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./src/publicComponents/vegas888logo.png
/* harmony default export */ const vegas888logo = ({"src":"/_next/static/media/vegas888logo.7f5aee53.png","height":2322,"width":3600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAM1BMVEVMaXHkNjbPpE3cjUHWqUeecz/oMzfjNjbmNTboNTXROjrgTTzOnUjhSDrSf0eXkFLgiT03wsVlAAAAEXRSTlMAZDuzbQx3blEZPdBUr4gluhW1BsMAAAAJcEhZcwAAuIwAALiMAcz2uy8AAAAuSURBVHicFcEJEgAREAPADHMkWPz/tVu6YSXiEa1oFJT5zawB1O7XTwDR3FfgBxRHAPFoCE5eAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(40248);
;// CONCATENATED MODULE: ./src/publicComponents/header.tsx
/* __next_internal_client_entry_do_not_use__ default,LoggedHeader auto */ 










const LoggedHeader = ()=>{
    const [user, setUser] = react_default().useState();
    react_default().useEffect(()=>{
        const fetch = async ()=>{
            try {
                const response = await axios/* default */.Z.post("http://127.0.0.1:8888" + "/api/bettor/tokenValue", null, {
                    withCredentials: true,
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
                const userResponse = response.data.user;
                if (response === undefined) {
                // document.location.href = '/login'
                } else {
                    setUser(userResponse);
                }
            } catch (err) {
            // document.location.href = '/login'
            }
        };
        fetch();
    }, []);
    const [anchorEl, setAnchorEl] = (0,react_.useState)(null);
    const handleAvatarClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleAvatarClose = ()=>{
        setAnchorEl(null);
    };
    const handleLogout = async ()=>{
        setAnchorEl(null);
        try {
            const response = await axios/* default */.Z.post("http://127.0.0.1:8888" + "/api/bettor/logout", null, {
                withCredentials: true,
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });
            if (response) {
                document.location.href = "/login";
            }
        } catch (err) {}
    };
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
        container: true,
        flexDirection: "row",
        alignItems: "center",
        columns: 12,
        pr: "6%",
        pl: "6%",
        pt: "1%",
        pb: "1%",
        mb: "3%",
        sx: {
            backgroundColor: "rgb(40, 42, 48)",
            borderBottom: "solid 2px " + customStyles/* colors */.O.gold
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                xs: 12,
                sm: 4,
                md: true,
                lg: true,
                xl: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    alt: "Logo",
                    src: vegas888logo,
                    quality: 100,
                    width: 120,
                    height: 60,
                    onClick: ()=>router.push("/dashboard"),
                    style: {
                        maxHeight: 60,
                        maxWidth: 120,
                        width: "auto",
                        height: "auto",
                        minWidth: 100,
                        minHeight: 40,
                        cursor: "pointer"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                xs: 12,
                sm: 8,
                md: true,
                lg: true,
                xl: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                    container: true,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.ButtonGroup, {
                            size: "small",
                            "aria-label": "small button group",
                            sx: {
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(node.Card, {
                                    sx: {
                                        maxHeight: "30px",
                                        padding: "0rem 1rem"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                        variant: "caption",
                                        fontWeight: 800,
                                        children: "₱0.00"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                                    size: "medium",
                                    variant: "contained",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(AccountBalanceWallet/* default */.Z, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Avatar, {
                            onClick: handleAvatarClick,
                            sx: {
                                cursor: "pointer",
                                margin: "0em 1em 0em 1em"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                            variant: "body1",
                            style: {
                                color: "white",
                                display: "flex",
                                alignItems: "center"
                            },
                            children: user?.player_name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Popper, {
                            open: Boolean(anchorEl),
                            anchorEl: anchorEl,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(node.Paper, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Menu, {
                                    anchorEl: anchorEl,
                                    open: Boolean(anchorEl),
                                    onClose: handleAvatarClose,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                            onClick: handleAvatarClose,
                                            children: "View Profile"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                            onClick: handleAvatarClose,
                                            children: "Transaction History"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(node.MenuItem, {
                                            onClick: handleLogout,
                                            children: "Logout"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
function Header() {
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
        container: true,
        flexDirection: "row",
        alignItems: "center",
        columns: 12,
        pr: 10,
        pl: 10,
        pt: 3,
        pb: 3,
        mb: 6,
        sx: {
            backgroundColor: "rgb(40, 42, 48)",
            borderBottom: "solid 2px " + customStyles/* colors */.O.gold
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                sm: true,
                md: true,
                lg: true,
                xl: true,
                xs: 12,
                children: "\xa0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                sm: true,
                md: true,
                lg: true,
                xl: true,
                xs: 12,
                textAlign: "center",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    alt: "Logo",
                    src: vegas888logo,
                    quality: 100,
                    width: 180,
                    height: 100
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                sm: true,
                md: true,
                lg: true,
                xl: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                    container: true,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Button, {
                            onClick: ()=>router.push("/register"),
                            sx: {
                                padding: "1em 2em",
                                fontWeight: 700,
                                color: customStyles/* colors */.O.lightBlack,
                                backgroundColor: customStyles/* colors */.O.gold,
                                border: "2px solid" + customStyles/* colors */.O.silver,
                                "&:hover": {
                                    backgroundColor: customStyles/* colors */.O.gold + "99"
                                }
                            },
                            children: [
                                "SIGN UP ",
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowForward/* default */.Z, {}),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            onClick: ()=>router.push("/login"),
                            variant: "text",
                            sx: {
                                paddingLeft: 6,
                                paddingRight: 6,
                                border: 0,
                                color: customStyles/* colors */.O.silver,
                                fontWeight: 700
                            },
                            children: "LOGIN"
                        })
                    ]
                })
            })
        ]
    });
}



/***/ }),

/***/ 55183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88857);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_1__);


const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_1___default().className),
            style: {
                backgroundImage: "url(" + "/vegas888ph_frontend" + "/playgame-bg3.jpg) ",
                height: "100vh",
                margin: 0
            },
            children: children
        })
    });
}


/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ })

};
;