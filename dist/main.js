/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactToastify = __webpack_require__(/*! react-toastify */ "react-toastify");

var _framerMotion = __webpack_require__(/*! framer-motion */ "framer-motion");

var _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ "react-loadable"));

var _auth = __webpack_require__(/*! ./actions/auth */ "./src/actions/auth.js");

var _setAuthToken = __webpack_require__(/*! ./helpers/setAuthToken */ "./src/helpers/setAuthToken.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ "./src/store.js"));

var _preloader = __webpack_require__(/*! ./layout/preloader */ "./src/layout/preloader.js");

var _Navbar = _interopRequireDefault(__webpack_require__(/*! ./layout/Navbar/Navbar */ "./src/layout/Navbar/Navbar.js"));

var _Article = _interopRequireDefault(__webpack_require__(/*! ./components/Article */ "./src/components/Article.js"));

var _UpsertCard = _interopRequireDefault(__webpack_require__(/*! ./components/UpsertCard */ "./src/components/UpsertCard.js"));

var _UpsertArticle = _interopRequireDefault(__webpack_require__(/*! ./components/UpsertArticle */ "./src/components/UpsertArticle.js"));

var _Auth = _interopRequireDefault(__webpack_require__(/*! ./components/Auth */ "./src/components/Auth.js"));

var _UpsertTopic = _interopRequireDefault(__webpack_require__(/*! ./components/UpsertTopic */ "./src/components/UpsertTopic.js"));

var _UpsertVideo = _interopRequireDefault(__webpack_require__(/*! ./components/UpsertVideo */ "./src/components/UpsertVideo.js"));

var _Blog = _interopRequireDefault(__webpack_require__(/*! ./components/Blog */ "./src/components/Blog.js"));

var _Learn = _interopRequireDefault(__webpack_require__(/*! ./components/Learn */ "./src/components/Learn.js"));

var _About = _interopRequireDefault(__webpack_require__(/*! ./components/About */ "./src/components/About.js"));

var _Home = _interopRequireDefault(__webpack_require__(/*! ./components/Home */ "./src/components/Home.js"));

var _Preview = _interopRequireDefault(__webpack_require__(/*! ./components/Preview */ "./src/components/Preview.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

if (_setAuthToken.isClient && localStorage.token) {
  (0, _setAuthToken.setAuthToken)(localStorage.token);
}

const App = ({
  articles
}) => {
  (0, _react.useEffect)(() => {
    _store.default.dispatch((0, _auth.loadUser)());
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: "home"
  }), ";", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/home",
    component: _Home.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/about",
    component: _About.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/learn",
    component: _Learn.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_Auth.default, _extends({}, props, {
      type: 'signup'
    })),
    exact: true,
    path: "/signup"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_UpsertTopic.default, _extends({
      edit: false
    }, props)),
    exact: true,
    path: "/:specialityName/topic/add"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_UpsertTopic.default, _extends({
      edit: true
    }, props)),
    exact: true,
    path: "/:specialityName/topic/edit/:topicId"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_Auth.default, _extends({}, props, {
      type: 'signup'
    })),
    exact: true,
    path: "/signup/:referCode"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_Auth.default, _extends({}, props, {
      type: 'login'
    })),
    exact: true,
    path: "/login"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/learn/:specialityName",
    component: _Preview.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_UpsertArticle.default, _extends({}, props, {
      edit: false
    })),
    exact: true,
    path: "/article/add"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_UpsertArticle.default, _extends({}, props, {
      edit: true
    })),
    exact: true,
    path: "/article/update"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_UpsertVideo.default, _extends({}, props, {
      edit: false
    })),
    exact: true,
    path: "/video/add/:topicId"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_UpsertVideo.default, _extends({}, props, {
      edit: true
    })),
    exact: true,
    path: "/video/update/:videoId"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/blog/read/:name",
    component: _Article.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_UpsertCard.default, _extends({}, props, {
      edit: false
    })),
    exact: true,
    path: "/AddCard"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_UpsertCard.default, _extends({}, props, {
      edit: true
    })),
    exact: true,
    path: "/updatespeciality/:specialityName"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: props => /*#__PURE__*/_react.default.createElement(_Blog.default, _extends({
      serverArticles: articles
    }, props)),
    exact: true,
    path: "/blog"
  }))), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, null));
};

var _default = App;
exports.default = _default;

/***/ }),

/***/ "./src/actions/article.js":
/*!********************************!*\
  !*** ./src/actions/article.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.deleteArticle = exports.editArticle = exports.addArticle = exports.getAllArticles = exports.getArticle = exports.clearArticle = void 0;

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _toast = __webpack_require__(/*! ./toast */ "./src/actions/toast.js");

const clearArticle = id => async dispatch => {
  dispatch({
    type: 'CLEAR_ARTICLE'
  });
};

exports.clearArticle = clearArticle;

const getArticle = id => async dispatch => {
  try {
    const res = await (0, _helpers.serviceGet)(`api/article/get/${id}`);
    console.log(res.data);
    (0, _toast.successToast)(res);
    dispatch({
      type: 'GET_ARTICLE',
      payload: res.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'GET_ARTICLE_ERROR',
      payload: {}
    });
  }
};

exports.getArticle = getArticle;

const getAllArticles = () => async dispatch => {
  try {
    const res = await (0, _helpers.serviceGet)(`api/article/all`);
    console.log(res.status);
    (0, _toast.successToast)(res);
    dispatch({
      type: 'GET_ALL_ARTICLES',
      payload: res.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'GET_ALL_ARTICLES_ERROR',
      payload: {}
    });
  }
};

exports.getAllArticles = getAllArticles;

const addArticle = data => async dispatch => {
  try {
    console.log(data);
    const res = await (0, _helpers.servicePost)(`api/article/add`, data, {
      'Content-Type': 'application/json'
    });
    console.log(res.data);
    dispatch({
      type: 'ADD_ARTICLE',
      payload: res.data
    });
    (0, _toast.successToast)(res); // const res2 = await serviceGet(`api/topic/get/${specialityName}`);
    // console.log(res2.data);
    // dispatch({
    //   type: 'GET_TOPICS',
    //   payload: res2.data,
    // });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'ADD_ARTICLE_ERROR',
      payload: {}
    });
  }
};

exports.addArticle = addArticle;

const editArticle = (data, id, specialityName) => async dispatch => {
  try {
    const res = await (0, _helpers.servicePost)(`api/article/update/${id}`, data, {
      'Content-Type': 'application/json'
    });
    console.log(res.data);
    dispatch({
      type: 'EDIT_ARTICLE',
      payload: res.data
    });
    const res2 = await (0, _helpers.serviceGet)(`api/topic/get/${specialityName}`);
    console.log(res2.data);
    (0, _toast.successToast)(res);
    dispatch({
      type: 'GET_TOPICS',
      payload: res2.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'EDIT_ARTICLE_ERROR',
      payload: {}
    });
  }
};

exports.editArticle = editArticle;

const deleteArticle = (articleId, topicId, specialityName) => async dispatch => {
  try {
    const res = await (0, _helpers.servicePost)(`api/article/delete/${articleId}/${topicId}`, {}, {
      'Content-Type': 'application/json'
    });
    console.log(res.data);
    dispatch({
      type: 'DELETE_ARTICLE',
      payload: res.data
    });
    const res2 = await (0, _helpers.serviceGet)(`api/topic/get/${specialityName}`);
    console.log(res2.data);
    (0, _toast.successToast)(res);
    dispatch({
      type: 'GET_TOPICS',
      payload: res2.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'DELETE_ARTICLE_ERROR',
      payload: {}
    });
  }
};

exports.deleteArticle = deleteArticle;

/***/ }),

/***/ "./src/actions/auth.js":
/*!*****************************!*\
  !*** ./src/actions/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sendResetEmail = exports.logout = exports.login = exports.register = exports.refreshUser = exports.loadUser = void 0;

var _types = __webpack_require__(/*! ./types */ "./src/actions/types.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _toast = __webpack_require__(/*! ./toast */ "./src/actions/toast.js");

// Load User : Every time we logged in or register or refresh the page its gonna load.
const loadUser = () => async dispatch => {
  dispatch({
    type: 'SET_AUTH_LOADER'
  });

  if (_helpers.isClient && localStorage.token) {
    (0, _helpers.setAuthToken)(localStorage.token);
  }

  if (_helpers.isClient && localStorage.userId) {
    const userId = localStorage.getItem('userId');

    try {
      const res = await (0, _helpers.serviceGet)(`api/auth/user/${userId}`); // displayToast

      (0, _toast.successToast)(res);
      dispatch({
        type: _types.USER_LOADED,
        payload: res.data.user
      });
    } catch (err) {
      // display toast
      (0, _toast.errorToast)(err);
      dispatch({
        type: _types.AUTH_ERROR
      });
    }
  }
};

exports.loadUser = loadUser;

const refreshUser = user => async dispatch => {
  dispatch({
    type: 'SET_AUTH_LOADER'
  });

  if (_helpers.isClient && localStorage.token) {
    (0, _helpers.setAuthToken)(localStorage.token);
  }

  if (_helpers.isClient && localStorage.userId) {
    const userId = localStorage.getItem('userId');

    try {
      // const res = await serviceGet(`api/auth/user/${userId}`);
      await (0, _helpers.serviceGet)(`api/auth/user/${userId}`);
      dispatch({
        type: _types.USER_LOADED,
        payload: user
      });
    } catch (err) {
      dispatch({
        type: _types.AUTH_ERROR
      });
    }
  }
};

exports.refreshUser = refreshUser;

const register = data => async dispatch => {
  dispatch({
    type: 'SET_AUTH_LOADER'
  });
  const headers = {
    'Content-Type': 'application/json'
  };
  const body = JSON.stringify(data);

  try {
    const res = await (0, _helpers.servicePost)('api/auth/signup', body, headers);
    dispatch({
      type: res.status === 1 ? _types.REGISTER_SUCCESS : _types.REGISTER_FAIL,
      payload: res.data
    });
    (0, _toast.successToast)(res);
    console.log(res);
    dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data.errors;
    (0, _toast.errorToast)(err);
    dispatch({
      type: _types.REGISTER_FAIL
    });
  }
};

exports.register = register;

const login = ({
  email,
  password
}) => async dispatch => {
  dispatch({
    type: 'SET_AUTH_LOADER'
  });
  const headers = {
    'Content-Type': 'application/json'
  };
  const body = JSON.stringify({
    email,
    password
  });

  try {
    var _res$data, _res$data$user, _res$data2;

    const res = await (0, _helpers.servicePost)('api/auth/login', body, headers);
    console.log(res);
    dispatch({
      type: res.status === 1 ? _types.LOGIN_SUCCESS : _types.LOGIN_FAIL,
      payload: {
        userId: (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$user = _res$data.user) === null || _res$data$user === void 0 ? void 0 : _res$data$user.userId,
        token: (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.token
      }
    });
    dispatch(loadUser());
    (0, _toast.successToast)(res);
  } catch (err) {
    console.log(err);
    (0, _toast.errorToast)(err);
    dispatch({
      type: _types.LOGIN_FAIL
    });
  }
};

exports.login = login;

const logout = () => dispatch => {
  if (_helpers.isClient) localStorage.clear();
  dispatch({
    type: 'LOGOUT'
  });
};

exports.logout = logout;

const sendResetEmail = ({
  email
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    email
  });

  try {
    const res = await (0, _helpers.servicePost)('/api/forgotpassword', body, config);
    const messagesArray = res.data.messages; // brand added message alert

    messagesArray.forEach(message => dispatch((message.msg, 'danger')));
    dispatch({
      type: _types.SEND_RESET_EMAIL,
      payload: res.data
    });
  } catch (err) {
    const errors = err && err.response.data.errors;

    if (errors) {}

    dispatch({
      type: _types.SEND_RESET_EMAIL_FAIL
    });
  }
};

exports.sendResetEmail = sendResetEmail;

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _article = __webpack_require__(/*! ./article */ "./src/actions/article.js");

Object.keys(_article).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _article[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _article[key];
    }
  });
});

var _auth = __webpack_require__(/*! ./auth */ "./src/actions/auth.js");

Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _auth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _auth[key];
    }
  });
});

var _speciality = __webpack_require__(/*! ./speciality */ "./src/actions/speciality.js");

Object.keys(_speciality).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _speciality[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _speciality[key];
    }
  });
});

var _topic = __webpack_require__(/*! ./topic */ "./src/actions/topic.js");

Object.keys(_topic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _topic[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _topic[key];
    }
  });
});

var _types = __webpack_require__(/*! ./types */ "./src/actions/types.js");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _ui = __webpack_require__(/*! ./ui */ "./src/actions/ui.js");

Object.keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ui[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ui[key];
    }
  });
});

var _video = __webpack_require__(/*! ./video */ "./src/actions/video.js");

Object.keys(_video).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _video[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _video[key];
    }
  });
});

/***/ }),

/***/ "./src/actions/speciality.js":
/*!***********************************!*\
  !*** ./src/actions/speciality.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.deleteSpeciality = exports.editSpeciality = exports.addSpeciality = exports.getSpeciality = exports.clearSpeciality = exports.getSpecialities = void 0;

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _toast = __webpack_require__(/*! ./toast */ "./src/actions/toast.js");

const getSpecialities = () => async dispatch => {
  try {
    const res = await (0, _helpers.serviceGet)('api/speciality/all');
    console.log(res);
    dispatch({
      type: 'GET_SPECIALITIES',
      payload: res.data
    });
    (0, _toast.successToast)(res);
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'GET_SPECIALITIES_ERROR',
      payload: {}
    });
  }
};

exports.getSpecialities = getSpecialities;

const clearSpeciality = () => async dispatch => {
  dispatch({
    type: 'CLEAR_SPECIALITY',
    payload: {}
  });
};

exports.clearSpeciality = clearSpeciality;

const getSpeciality = specialityName => async dispatch => {
  try {
    const res = await (0, _helpers.serviceGet)(`api/speciality/get/${specialityName}`);
    dispatch({
      type: 'GET_SPECIALITY',
      payload: res.data.speciality
    });
    (0, _toast.successToast)(res);
  } catch (error) {
    (0, _toast.errorToast)(error);
    console.log(error);
    dispatch({
      type: 'GET_SPECIALITY_ERROR',
      payload: {}
    });
  }
};

exports.getSpeciality = getSpeciality;

const addSpeciality = data => async dispatch => {
  try {
    console.log(data);
    const res = await (0, _helpers.servicePost)('api/speciality/add', data, {
      'Content-Type': 'application/json'
    });
    console.log(res.data);
    dispatch({
      type: 'ADD_SPECIALITIY',
      payload: res.data
    });
    const res2 = await (0, _helpers.serviceGet)('api/speciality/all');
    dispatch({
      type: 'GET_SPECIALITIES',
      payload: res2.data
    });
    (0, _toast.successToast)(res);
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'ADD_SPECIALITY_ERROR',
      payload: {}
    });
  }
};

exports.addSpeciality = addSpeciality;

const editSpeciality = (data, id) => async dispatch => {
  try {
    const res = await (0, _helpers.servicePost)(`api/speciality/update/${id}`, data, {
      'Content-Type': 'application/json'
    });
    dispatch({
      type: 'EDIT_SPECIALITIY',
      payload: res.data
    });
    const res2 = await (0, _helpers.serviceGet)('api/speciality/all');
    dispatch({
      type: 'GET_SPECIALITIES',
      payload: res2.data
    });
    (0, _toast.successToast)(res);
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'EDIT_SPECIALITY_ERROR',
      payload: {}
    });
  }
};

exports.editSpeciality = editSpeciality;

const deleteSpeciality = id => async dispatch => {
  try {
    const res = await (0, _helpers.servicePost)(`api/speciality/delete/${id}`, {}, {
      'Content-Type': 'application/json'
    });
    dispatch({
      type: 'DELETE_SPECIALITIY',
      payload: res.data
    });
    const res2 = await (0, _helpers.serviceGet)('api/speciality/all');
    dispatch({
      type: 'GET_SPECIALITIES',
      payload: res2.data
    });
    (0, _toast.successToast)(res);
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'DELETE_SPECIALITY_ERROR',
      payload: {}
    });
  }
};

exports.deleteSpeciality = deleteSpeciality;

/***/ }),

/***/ "./src/actions/toast.js":
/*!******************************!*\
  !*** ./src/actions/toast.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.errorToast = exports.successToast = void 0;

var _reactToastify = __webpack_require__(/*! react-toastify */ "react-toastify");

const successToast = res => {
  res.status == 1 ? _reactToastify.toast.success(res.message, {
    position: "top-right"
  }) : _reactToastify.toast.error(res.message, {
    position: "top-right"
  });
};

exports.successToast = successToast;

const errorToast = err => {
  _reactToastify.toast.error(err.message, {
    position: "top-right"
  });
};

exports.errorToast = errorToast;

/***/ }),

/***/ "./src/actions/topic.js":
/*!******************************!*\
  !*** ./src/actions/topic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.deleteTopic = exports.unlockTopic = exports.editTopic = exports.addTopic = exports.getTopics = void 0;

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _reactToastify = __webpack_require__(/*! react-toastify */ "react-toastify");

var _toast = __webpack_require__(/*! ./toast */ "./src/actions/toast.js");

const getTopics = specialityName => async dispatch => {
  try {
    const res = await (0, _helpers.serviceGet)(`api/topic/get/${specialityName}`);
    console.log(res.data);
    dispatch({
      type: 'GET_TOPICS',
      payload: res.data
    });
    (0, _toast.successToast)(res);
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'GET_TOPICS_ERROR',
      payload: {}
    });
  }
};

exports.getTopics = getTopics;

const addTopic = (data, specialityName) => async dispatch => {
  console.log(specialityName);

  try {
    console.log(data);
    const res = await (0, _helpers.servicePost)(`api/topic/add`, data, {
      'Content-Type': 'application/json'
    });
    (0, _toast.successToast)(res);
    console.log(res.data);
    dispatch({
      type: 'ADD_TOPIC',
      payload: res.data
    }); // refresh topics

    const res2 = await (0, _helpers.serviceGet)(`api/topic/get/${specialityName}`);
    dispatch({
      type: 'GET_TOPICS',
      payload: res2.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'ADD_TOPIC_ERROR',
      payload: {}
    });
  }
};

exports.addTopic = addTopic;

const editTopic = (data, id, specialityName) => async dispatch => {
  try {
    const res = await (0, _helpers.servicePost)(`api/topic/update/${id}`, data, {
      'Content-Type': 'application/json'
    });
    console.log(res.data);
    dispatch({
      type: 'EDIT_TOPIC',
      payload: res.data
    });
    (0, _toast.successToast)(res);
    const res2 = await (0, _helpers.serviceGet)(`api/topic/get/${specialityName}`);
    dispatch({
      type: 'GET_TOPICS',
      payload: res2.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'EDIT_TOPIC_ERROR',
      payload: {}
    });
  }
};

exports.editTopic = editTopic;

const unlockTopic = (topicId, specialityName) => async dispatch => {
  console.log(specialityName);

  try {
    const res = await (0, _helpers.servicePost)(`api/topic/unlock/${topicId}`, {}, {
      'Content-Type': 'application/json'
    });
    (0, _toast.successToast)(res);
    dispatch({
      type: 'USERLOADED',
      payload: res.data.user
    });
    dispatch({
      type: 'UNLOCK_TOPIC',
      payload: res.data
    });
    const res2 = await (0, _helpers.serviceGet)(`api/topic/get/${specialityName}`);
    dispatch({
      type: 'GET_TOPICS',
      payload: res2.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'UNLOCK_TOPIC_ERROR',
      payload: {}
    });
  }
};

exports.unlockTopic = unlockTopic;

const deleteTopic = (id, specialityName) => async dispatch => {
  console.log({
    id,
    specialityName
  });

  try {
    const res = await (0, _helpers.servicePost)(`api/topic/delete/${id}`, {}, {
      'Content-Type': 'application/json'
    });
    console.log(res.data);
    (0, _toast.successToast)(res);
    dispatch({
      type: 'DELETE_TOPIC',
      payload: res.data
    });
    const res2 = await (0, _helpers.serviceGet)(`api/topic/get/${specialityName}`);
    dispatch({
      type: 'GET_TOPICS',
      payload: res2.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'DELETE_TOPIC_ERROR',
      payload: {}
    });
  }
};

exports.deleteTopic = deleteTopic;

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AUTH_ERROR = exports.USER_LOADED = exports.LOGOUT = exports.SEND_RESET_EMAIL_FAIL = exports.SEND_RESET_EMAIL = exports.REGISTER_FAIL = exports.REGISTER_SUCCESS = exports.LOGIN_FAIL = exports.LOGIN_SUCCESS = exports.REMOVE_ALERT = exports.SET_ALERT = void 0;
const SET_ALERT = 'SET_ALERT';
exports.SET_ALERT = SET_ALERT;
const REMOVE_ALERT = 'REMOVE_ALERT';
exports.REMOVE_ALERT = REMOVE_ALERT;
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
const LOGIN_FAIL = 'LOGIN_FAIL';
exports.LOGIN_FAIL = LOGIN_FAIL;
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
exports.REGISTER_SUCCESS = REGISTER_SUCCESS;
const REGISTER_FAIL = 'REGISTER_FAIL';
exports.REGISTER_FAIL = REGISTER_FAIL;
const SEND_RESET_EMAIL = 'SEND_RESET_EMAIL';
exports.SEND_RESET_EMAIL = SEND_RESET_EMAIL;
const SEND_RESET_EMAIL_FAIL = 'SEND_RESET_EMAIL_FAIL';
exports.SEND_RESET_EMAIL_FAIL = SEND_RESET_EMAIL_FAIL;
const LOGOUT = 'LOGOUT';
exports.LOGOUT = LOGOUT;
const USER_LOADED = 'USERLOADED';
exports.USER_LOADED = USER_LOADED;
const AUTH_ERROR = 'AUTH_ERROR';
exports.AUTH_ERROR = AUTH_ERROR;

/***/ }),

/***/ "./src/actions/ui.js":
/*!***************************!*\
  !*** ./src/actions/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setDisplayMode = exports.setOpenTopics = void 0;

var _store = _interopRequireDefault(__webpack_require__(/*! ../store */ "./src/store.js"));

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const setOpenTopics = id => async dispatch => {
  console.log(id);

  const openTopicsArray = _store.default.getState().ui.openTopics;

  if (!openTopicsArray.includes(id)) {
    openTopicsArray.push(id);
  } else {
    openTopicsArray.splice(openTopicsArray.indexOf(id), 1);
  }

  dispatch({
    type: 'SET_OPEN_TOPICS',
    payload: openTopicsArray
  });
};

exports.setOpenTopics = setOpenTopics;

const setDisplayMode = () => async dispatch => {
  const displayMode = _store.default.getState().ui.displayMode === 'dark' ? 'light' : 'dark';
  if (_helpers.isClient) localStorage.setItem('mode', displayMode);
  dispatch({
    type: 'SET_DISPLAY_MODE',
    payload: displayMode
  });
};

exports.setDisplayMode = setDisplayMode;

/***/ }),

/***/ "./src/actions/video.js":
/*!******************************!*\
  !*** ./src/actions/video.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.selectVideo = exports.deleteVideo = exports.editVideo = exports.addVideo = exports.getVideo = void 0;

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _toast = __webpack_require__(/*! ./toast */ "./src/actions/toast.js");

const getVideo = id => async dispatch => {
  try {
    const res = await (0, _helpers.serviceGet)(`api/video/get/${id}`);
    (0, _toast.successToast)(res);
    dispatch({
      type: 'GET_VIDEO',
      payload: res.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'ADD_VIDEO_ERROR',
      payload: {}
    });
  }
};

exports.getVideo = getVideo;

const addVideo = (data, id, specialityName) => async dispatch => {
  try {
    const res = await (0, _helpers.servicePost)(`api/video/add/${id}`, data, {
      'Content-Type': 'application/json'
    });
    (0, _toast.successToast)(res);
    dispatch({
      type: 'ADD_VIDEO',
      payload: res.data
    });
    const resTopic = await (0, _helpers.serviceGet)(`api/topic/get/${specialityName}`);
    console.log(resTopic);
    dispatch({
      type: 'GET_TOPICS',
      payload: resTopic.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'ADD_VIDEO_ERROR',
      payload: {}
    });
  }
};

exports.addVideo = addVideo;

const editVideo = (data, id, specialityName) => async dispatch => {
  try {
    const res = await (0, _helpers.servicePost)(`api/video/update/${id}`, data, {
      'Content-Type': 'application/json'
    });
    console.log(res.data);
    dispatch({
      type: 'EDIT_VIDEO',
      payload: res.data
    });
    (0, _toast.successToast)(res);
    const resTopic = await (0, _helpers.serviceGet)(`api/topic/get/${specialityName}`);
    console.log(resTopic.data);
    dispatch({
      type: 'GET_TOPICS',
      payload: resTopic.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'EDIT_VIDEO_ERROR',
      payload: {}
    });
  }
};

exports.editVideo = editVideo;

const deleteVideo = (videoId, topicId, specialityName) => async dispatch => {
  try {
    const res = await (0, _helpers.servicePost)(`api/video/delete/${videoId}/${topicId}`, {}, {
      'Content-Type': 'application/json'
    });
    console.log(res.data);
    dispatch({
      type: 'DELETE_VIDEO',
      payload: res.data
    });
    const res2 = await (0, _helpers.serviceGet)(`api/topic/get/${specialityName}`);
    console.log(res2.data);
    (0, _toast.successToast)(res);
    dispatch({
      type: 'GET_TOPICS',
      payload: res2.data
    });
  } catch (error) {
    (0, _toast.errorToast)(error);
    dispatch({
      type: 'DELETE_VIDEO_ERROR',
      payload: {}
    });
  }
};

exports.deleteVideo = deleteVideo;

const selectVideo = video => dispatch => {
  try {
    dispatch({
      type: 'SELECT_VIDEO',
      payload: video
    });
  } catch (error) {
    dispatch({
      type: 'SELECT_VIDEO_ERROR'
    });
  }
};

exports.selectVideo = selectVideo;

/***/ }),

/***/ "./src/assets/icons/Add.js":
/*!*********************************!*\
  !*** ./src/assets/icons/Add.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Add = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Add = ({
  size = 33,
  color = '#000000'
}) => /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "3.5",
  strokeLinecap: "square",
  strokeLinejoin: "arcs"
}, /*#__PURE__*/_react.default.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/_react.default.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));

exports.Add = Add;

/***/ }),

/***/ "./src/assets/icons/Chevrons.js":
/*!**************************************!*\
  !*** ./src/assets/icons/Chevrons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChevronsLeft = exports.ChevronsUp = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ChevronsUp = ({
  size = 33,
  color = '#000000'
}) => /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "3.5",
  strokeLinecap: "square",
  strokeLinejoin: "arcs"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M17 11l-5-5-5 5M17 18l-5-5-5 5"
}));

exports.ChevronsUp = ChevronsUp;

const ChevronsLeft = ({
  size = 51,
  color = '#000000'
}) => /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2.5",
  strokeLinecap: "square",
  strokeLinejoin: "arcs"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M11 17l-5-5 5-5M18 17l-5-5 5-5"
}));

exports.ChevronsLeft = ChevronsLeft;

/***/ }),

/***/ "./src/assets/icons/Cross.js":
/*!***********************************!*\
  !*** ./src/assets/icons/Cross.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Cross = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Cross = ({
  size = 32,
  color = '#000000'
}) => /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "1.5",
  strokeLinecap: "square",
  strokeLinejoin: "arcs"
}, /*#__PURE__*/_react.default.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/_react.default.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));

exports.Cross = Cross;

/***/ }),

/***/ "./src/assets/icons/Delete.js":
/*!************************************!*\
  !*** ./src/assets/icons/Delete.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Delete = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Delete = ({
  size = 33,
  color = '#000000'
}) => /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "square",
  strokeLinejoin: "arcs"
}, /*#__PURE__*/_react.default.createElement("polyline", {
  points: "3 6 5 6 21 6"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}), /*#__PURE__*/_react.default.createElement("line", {
  x1: "10",
  y1: "11",
  x2: "10",
  y2: "17"
}), /*#__PURE__*/_react.default.createElement("line", {
  x1: "14",
  y1: "11",
  x2: "14",
  y2: "17"
}));

exports.Delete = Delete;

/***/ }),

/***/ "./src/assets/icons/Lock.js":
/*!**********************************!*\
  !*** ./src/assets/icons/Lock.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Unlock = exports.Lock = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Lock = ({
  size = 33,
  color = '#DC143C',
  handler
}) => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    onClick: handler,
    xmlns: "http://www.w3.org/2000/svg",
    width: "43",
    height: "43",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }));
};

exports.Lock = Lock;

const Unlock = ({
  size = 33,
  color = '#00FF00'
}) => /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "43",
  height: "43",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, /*#__PURE__*/_react.default.createElement("rect", {
  x: "3",
  y: "11",
  width: "18",
  height: "11",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M7 11V7a5 5 0 0 1 9.9-1"
}));

exports.Unlock = Unlock;

/***/ }),

/***/ "./src/assets/icons/Read.js":
/*!**********************************!*\
  !*** ./src/assets/icons/Read.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Read = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Read = ({
  size = 33,
  color = '#000000'
}) => /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M12 4.706c-2.938-1.83-7.416-2.566-12-2.706v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.876-12 2.706zm-10 13.104v-13.704c5.157.389 7.527 1.463 9 2.334v13.168c-1.525-.546-4.716-1.504-9-1.798zm20 0c-4.283.293-7.475 1.252-9 1.799v-13.171c1.453-.861 3.83-1.942 9-2.332v13.704zm-2-10.214c-2.086.312-4.451 1.023-6 1.672v-1.064c1.668-.622 3.881-1.315 6-1.626v1.018zm0 3.055c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0 6.093c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm-16-6.104c2.119.311 4.332 1.004 6 1.626v1.064c-1.549-.649-3.914-1.361-6-1.672v-1.018zm0 5.09c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.316-6-1.626v1.017zm0 6.093c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017z"
}));

exports.Read = Read;

/***/ }),

/***/ "./src/assets/icons/Update.js":
/*!************************************!*\
  !*** ./src/assets/icons/Update.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Update = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Update = ({
  size = 33,
  color = '#000000'
}) => /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "square",
  strokeLinejoin: "arcs"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"
}), /*#__PURE__*/_react.default.createElement("polygon", {
  points: "18 2 22 6 12 16 8 16 8 12 18 2"
}));

exports.Update = Update;

/***/ }),

/***/ "./src/assets/icons/index.js":
/*!***********************************!*\
  !*** ./src/assets/icons/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Add = __webpack_require__(/*! ./Add */ "./src/assets/icons/Add.js");

Object.keys(_Add).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Add[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Add[key];
    }
  });
});

var _Delete = __webpack_require__(/*! ./Delete */ "./src/assets/icons/Delete.js");

Object.keys(_Delete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Delete[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Delete[key];
    }
  });
});

var _Update = __webpack_require__(/*! ./Update */ "./src/assets/icons/Update.js");

Object.keys(_Update).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Update[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Update[key];
    }
  });
});

var _Chevrons = __webpack_require__(/*! ./Chevrons */ "./src/assets/icons/Chevrons.js");

Object.keys(_Chevrons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Chevrons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Chevrons[key];
    }
  });
});

var _Read = __webpack_require__(/*! ./Read */ "./src/assets/icons/Read.js");

Object.keys(_Read).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Read[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Read[key];
    }
  });
});

var _Lock = __webpack_require__(/*! ./Lock */ "./src/assets/icons/Lock.js");

Object.keys(_Lock).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Lock[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Lock[key];
    }
  });
});

var _Cross = __webpack_require__(/*! ./Cross */ "./src/assets/icons/Cross.js");

Object.keys(_Cross).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Cross[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Cross[key];
    }
  });
});

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _framerMotion = __webpack_require__(/*! framer-motion */ "framer-motion");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _Questions = _interopRequireDefault(__webpack_require__(/*! ../sections/about/Questions */ "./src/sections/about/Questions.js"));

var _AboutUs = _interopRequireDefault(__webpack_require__(/*! ../sections/about/AboutUs */ "./src/sections/about/AboutUs.js"));

var _layout = __webpack_require__(/*! ../layout */ "./src/layout/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const About = () => {
  return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_helpers.Seo, {
    title: "About"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-page scroller"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ovr-wave top-slide"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      textAlign: 'center'
    }
  }, "Hello there,"), /*#__PURE__*/_react.default.createElement("div", {
    className: "subheading-about"
  }, "We created ", /*#__PURE__*/_react.default.createElement("span", {
    className: "logo text-dark"
  }, "Coders Gala"), " to provide You Quality resources to learn From"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "scroll icon",
    src: "https://gifimage.net/wp-content/uploads/2018/05/scroll-gif-10.gif",
    className: "scroll-icon"
  }))), /*#__PURE__*/_react.default.createElement(_Questions.default, null), /*#__PURE__*/_react.default.createElement(_AboutUs.default, null), /*#__PURE__*/_react.default.createElement(_layout.Footer, null)));
};

var _default = About;
exports.default = _default;

/***/ }),

/***/ "./src/components/Article.js":
/*!***********************************!*\
  !*** ./src/components/Article.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactHtmlParser = _interopRequireDefault(__webpack_require__(/*! react-html-parser */ "react-html-parser"));

var _layout = __webpack_require__(/*! ../layout */ "./src/layout/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _icons = __webpack_require__(/*! ../assets/icons */ "./src/assets/icons/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// const ShareArticle = ({ Nid, url }, props) => {
// 	function actionToggle() {
// 		document.querySelector('.action').classList.toggle('active');
// 	}
// 	return (
// 		<>
// 			<div class='action' onClick={actionToggle}>
// 				<span>
// 					<img
// 						style={{ width: '25px' }}
// 						src='https://www.svgrepo.com/show/19199/share.svg'
// 						alt=''
// 					/>
// 				</span>
// 				<ul>
// 					<li>
// 						<a
// 							className='whatsapp-icon'
// 							rel='noopener noreferrer'
// 							href={`https://api.whatsapp.com/send?text=Hey look i just found out this Amazing article on "${Nid}",Check it out : ${url}`}
// 							target='_blank'>
// 							Share on
// 							<img
// 								style={{ width: '25px', marginLeft: '20px' }}
// 								src='https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg'
// 								alt={'share ' + Nid + ' on Whatsapp'}
// 							/>
// 						</a>
// 					</li>
// 					<li>
// 						<a
// 							className='mail-icon'
// 							href={`mailto:?Subject=${'Article on ' + Nid
// 								}&Body=Hey look i just found out this Amazing article on "${Nid}",Check it out : ${url}`}
// 							target='_top'
// 							rel='nofollow'>
// 							Share on
// 							<img
// 								style={{ width: '25px', marginLeft: '20px' }}
// 								className='share-image'
// 								src='https://www.svgrepo.com/show/303161/gmail-icon-logo.svg'
// 								alt={'share ' + Nid + ' on Gmail'}
// 							/>
// 						</a>
// 					</li>
// 				</ul>
// 			</div>
// 		</>
// 	);
// };
const Article = props => {
  const {
    name
  } = props.match.params;
  const [article, setArticle] = (0, _react.useState)({});

  const getArticle = async name => {
    const res = await (0, _helpers.servicePost)(`api/article/get`, {
      name
    }, {
      'Content-Type': 'application/json'
    });
    return res.data.article;
  };

  const getArticleEffect = (0, _react.useCallback)(async () => {
    const article = await getArticle(name.replace(/-/g, ' '));
    setArticle(article);
  }, [name]);
  (0, _react.useEffect)(() => {
    getArticleEffect();
  }, [getArticleEffect]);
  console.log(article);

  const goToTop = () => {
    (0, _helpers.scrollTo)(document.getElementById('nav'));
  };

  const html = article && article.content;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "selected-article"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "full-view-article p-2"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: 2
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    id: "top",
    style: {
      padding: '0px'
    },
    sm: 8
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-snow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "full-article ql-editor"
  }, (0, _reactHtmlParser.default)(html))), /*#__PURE__*/_react.default.createElement("div", {
    className: "top-icon"
  }, /*#__PURE__*/_react.default.createElement(_icons.ChevronsUp, {
    size: "50",
    color: "#dc143c",
    onClick: goToTop
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: 2
  }))), /*#__PURE__*/_react.default.createElement(_layout.Footer, null));
};

const mapStateToProps = state => ({
  auth: state.auth
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  getSpeciality: _actions.getSpeciality
})(Article); // import React from 'react'
// const Article = (props) => {
// 	const name = props.match.params.name
// 	console.log(name.replace(/-/g, ' '))
// 	return (
// 		<div>
// 			<div>
// 				lorem100
// 			</div>
// 		</div>
// 	);
// }
// export default Article;


exports.default = _default;

/***/ }),

/***/ "./src/components/Auth.js":
/*!********************************!*\
  !*** ./src/components/Auth.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _auth = __webpack_require__(/*! ../actions/auth */ "./src/actions/auth.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Auth = ({
  login,
  register,
  token,
  type
}) => {
  const [data, setData] = (0, _react.useState)({});
  if (token) return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: "/learn"
  });
  const dinText = "<Coders Gala/>";

  const handleSubmit = e => {
    e.preventDefault();

    if (type === "signup") {
      document.querySelector(".section h1").classList.add("changed");
      register(data);
    } else {
      e.preventDefault();
      document.querySelector(".section h1").classList.add("changed");
      login(data);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "auth-container"
  }, /*#__PURE__*/_react.default.createElement(_helpers.Seo, {
    title: "LogIn"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "dinTag"
  }, dinText), type === "signup" ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, "Sign Up"), /*#__PURE__*/_react.default.createElement("p", null, "Hey, Welcome to CodersGala !!")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, "Login"), /*#__PURE__*/_react.default.createElement("p", null, "Hey there, Welcome Back !!")), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: type === "signup" ? "flex" : ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: e => {
      setData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        email: e.target.value
      }));
    },
    type: "email",
    className: "form-control",
    required: true,
    placeholder: "First Name"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    required: true,
    onChange: e => {
      setData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        password: e.target.value
      }));
    },
    type: "password",
    className: "form-control",
    placeholder: "Last Name"
  }))), type === "signup" ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "firstName"
  }, "First Name"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: e => {
      setData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        firstName: e.target.value
      }));
    },
    type: "text",
    id: "lastName",
    className: "form-control",
    required: true,
    placeholder: "First Name"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "lastName"
  }, "Last Name"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: e => {
      setData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        lastName: e.target.value
      }));
    },
    type: "text",
    id: "lastName",
    className: "form-control",
    required: true,
    placeholder: "Last Name"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "age"
  }, "Age"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: e => {
      setData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        age: e.target.value
      }));
    },
    type: "number",
    id: "age",
    className: "form-control",
    required: true,
    placeholder: "Age"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "codeReferred"
  }, "Refer Code"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "codeReferred",
    placeholder: "PB18FC69",
    defaultValue: "",
    className: "form-control",
    onChange: e => {
      setData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        codeReffered: e.target.value
      }));
    }
  })))) : null, type === "signup" ? /*#__PURE__*/_react.default.createElement("div", {
    className: "form-options"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "rememberMe"
  }, "Have an account?")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/login"
  }, "Login")) : /*#__PURE__*/_react.default.createElement("div", {
    className: "form-options"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "rememberMe"
  }, "Forgot Password?")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/signup"
  }, "SignUp")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    className: "btn btn-signin",
    value: "Submit"
  })))))));
};

const mapStateToProps = state => ({
  token: state.auth.token
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  login: _auth.login,
  register: _auth.register
})(Auth);

exports.default = _default;

/***/ }),

/***/ "./src/components/Blog.js":
/*!********************************!*\
  !*** ./src/components/Blog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _article = __webpack_require__(/*! ../actions/article */ "./src/actions/article.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _Featured = _interopRequireDefault(__webpack_require__(/*! ../sections/blog/Featured */ "./src/sections/blog/Featured.js"));

var _Latest = _interopRequireDefault(__webpack_require__(/*! ../sections/blog/Latest */ "./src/sections/blog/Latest.js"));

var _All = _interopRequireDefault(__webpack_require__(/*! ../sections/blog/All */ "./src/sections/blog/All.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Blog = ({
  getAllArticles,
  serverArticles,
  storeArticles,
  isAdmin
}) => {
  const [articles, setArticles] = (0, _react.useState)(serverArticles);
  (0, _react.useEffect)(() => {
    if (serverArticles.length === 0) {
      getAllArticles();
      setArticles(storeArticles);
    }
  }, [articles, getAllArticles]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "blog-container"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "nav__top"
  }, /*#__PURE__*/_react.default.createElement("a", {
    rel: "nofollow",
    href: "#",
    className: "nav__top__link"
  })), isAdmin && /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/article/add",
    rel: "nofollow"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    size: "lg",
    block: true
  }, "Add Article")), /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      fontFamily: "Dosis"
    },
    className: "title__h1"
  }, " ", "CodersGala ", /*#__PURE__*/_react.default.createElement("span", null, "Blog")), /*#__PURE__*/_react.default.createElement("p", {
    className: "title__sub"
  }, "Sorry :(")), /*#__PURE__*/_react.default.createElement("article", {
    className: "grid"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "grid__col-2"
  }, /*#__PURE__*/_react.default.createElement(_Latest.default, {
    article: articles && articles[0]
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "grid__col__title"
  }, "Featured Articles"), /*#__PURE__*/_react.default.createElement(_Featured.default, {
    articles: articles
  }))), /*#__PURE__*/_react.default.createElement("h3", {
    className: "grid__col__title"
  }, "Also Read..."), /*#__PURE__*/_react.default.createElement(_All.default, {
    articles: articles
  })));
};

const mapStateToProps = state => ({
  storeArticles: state.article.articles,
  isAdmin: state.auth.isAdmin
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  getAllArticles: _article.getAllArticles
})(Blog);

exports.default = _default;

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _framerMotion = __webpack_require__(/*! framer-motion */ "framer-motion");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _Hero = _interopRequireDefault(__webpack_require__(/*! ../sections/home/Hero */ "./src/sections/home/Hero.js"));

var _HeroCards = _interopRequireDefault(__webpack_require__(/*! ../sections/home/HeroCards */ "./src/sections/home/HeroCards.js"));

var _preloader = _interopRequireDefault(__webpack_require__(/*! ../layout/preloader */ "./src/layout/preloader.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Home = () => {
  var homeContent = 'adsf';
  return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_helpers.Seo, {
    title: "Home",
    meta: [{
      name: 'robots',
      content: 'index follow'
    }]
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "myDiv"
  }, homeContent ? /*#__PURE__*/_react.default.createElement("div", {
    className: "home-container"
  }, /*#__PURE__*/_react.default.createElement(_Hero.default, null), /*#__PURE__*/_react.default.createElement(_HeroCards.default, null)) : /*#__PURE__*/_react.default.createElement(_preloader.default, null)));
};

var _default = Home;
exports.default = _default;

/***/ }),

/***/ "./src/components/Learn.js":
/*!*********************************!*\
  !*** ./src/components/Learn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _framerMotion = __webpack_require__(/*! framer-motion */ "framer-motion");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _layout = __webpack_require__(/*! ../layout/ */ "./src/layout/index.js");

var _Card = _interopRequireDefault(__webpack_require__(/*! ../sections/learn/Card */ "./src/sections/learn/Card.js"));

var _AdminButtons = _interopRequireDefault(__webpack_require__(/*! ../layout/Buttons/AdminButtons */ "./src/layout/Buttons/AdminButtons.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Learn = () => {
  return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    exit: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    initial: {
      opacity: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_helpers.Seo, {
    title: "Learn",
    meta: [{
      name: 'robots',
      content: 'index follow'
    }]
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "container learn-container"
  }, /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
    type: "Add",
    url: "/addcard",
    data: {
      name: 'Courses'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement(_Card.default, null))), /*#__PURE__*/_react.default.createElement(_layout.Footer, null));
};

var _default = Learn;
exports.default = _default;

/***/ }),

/***/ "./src/components/Preview.js":
/*!***********************************!*\
  !*** ./src/components/Preview.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _layout = __webpack_require__(/*! ../layout */ "./src/layout/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _icons = __webpack_require__(/*! ../assets/icons */ "./src/assets/icons/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

var _VideoPreview = _interopRequireDefault(__webpack_require__(/*! ../sections/preview/VideoPreview */ "./src/sections/preview/VideoPreview.js"));

var _TopicsOverview = _interopRequireDefault(__webpack_require__(/*! ../sections/preview/TopicsOverview */ "./src/sections/preview/TopicsOverview.js"));

var _AdminButtons = _interopRequireDefault(__webpack_require__(/*! ../layout/Buttons/AdminButtons */ "./src/layout/Buttons/AdminButtons.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Preview = ({
  match,
  selectVideo,
  clearArticle,
  getSpeciality,
  speciality
}) => {
  const [close, setClose] = (0, _react.useState)(true);
  const {
    specialityName
  } = match.params;
  (0, _react.useEffect)(() => {
    clearArticle();
    getSpeciality(specialityName);
  }, [clearArticle, getSpeciality, specialityName]);
  (0, _react.useEffect)(() => {
    selectVideo(speciality);
  }, [speciality, selectVideo]);
  return speciality ? /*#__PURE__*/_react.default.createElement("div", {
    className: "topics-ovr-cont"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay",
    style: {
      display: close ? 'none' : 'block'
    },
    onClick: () => setClose(!close)
  }), /*#__PURE__*/_react.default.createElement(_helpers.Seo, {
    title: "Select Article",
    meta: [{
      name: 'robots',
      content: 'index follow'
    }]
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "speciality-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "speciality-heading"
  }, /*#__PURE__*/_react.default.createElement("h2", null, speciality.name)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    className: "topic-ovr-container",
    lg: 4,
    style: {
      height: close ? '25vh' : '50vh'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "topics-overview"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    style: {
      fontSize: '1rem'
    },
    className: "overview"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Topics Overview "), /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
    type: "Add",
    url: `/${speciality.name}/topic/add/`,
    data: {
      name: 'Topics'
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "close-toggle"
  }, close ? /*#__PURE__*/_react.default.createElement("span", {
    onClick: () => setClose(!close)
  }, /*#__PURE__*/_react.default.createElement(_icons.ChevronsUp, null)) : /*#__PURE__*/_react.default.createElement("span", {
    onClick: () => setClose(!close)
  }, /*#__PURE__*/_react.default.createElement(_icons.Cross, null)))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_TopicsOverview.default, {
    specialityName: speciality.name
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    l: 8
  }, /*#__PURE__*/_react.default.createElement(_VideoPreview.default, {
    specialityName: speciality.name
  })))), /*#__PURE__*/_react.default.createElement(_layout.Footer, null)) : null;
};

const mapStateToProps = state => ({
  speciality: state.speciality.speciality
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  getSpeciality: _actions.getSpeciality,
  clearArticle: _actions.clearArticle,
  selectVideo: _actions.selectVideo
})(Preview);

exports.default = _default;

/***/ }),

/***/ "./src/components/UpsertArticle.js":
/*!*****************************************!*\
  !*** ./src/components/UpsertArticle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _editor = _interopRequireDefault(__webpack_require__(/*! ../sections/editor */ "./src/sections/editor.js"));

var _reactToastify = __webpack_require__(/*! react-toastify */ "react-toastify");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _layout = __webpack_require__(/*! ../layout */ "./src/layout/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _icons = __webpack_require__(/*! ../assets/icons */ "./src/assets/icons/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const UpsertArticle = props => {
  const {
    addArticle,
    specialities,
    editArticle,
    getArticle,
    prevArticle
  } = props;
  const [content, setcontent] = (0, _react.useState)('');
  const [name, setname] = (0, _react.useState)('');
  const [keywords, setArticleKeywords] = (0, _react.useState)('');
  const [featured, setfeatured] = (0, _react.useState)(false);
  const [thumbnailUrl, setthumbnailUrl] = (0, _react.useState)(''); // const [Loading, setLoading] = useState(false);
  // const topicId = "ERROR_NA_DIYO";

  function scrollTo(element) {
    _helpers.isClient && window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }

  const goToTop = () => {
    scrollTo(document.getElementById('nav'));
  };

  console.log(props.match.params.articleId);
  (0, _react.useEffect)(() => {
    if (props.edit) {
      getArticle(props.match.params.articleId);
    }
  }, [props, getArticle]);

  const handleEditor = html => {
    setcontent(html);
  };

  const handleEdit = async e => {
    e.preventDefault();
    console.log(name);
    console.log(keywords);
    const data = {
      name: name === '' ? prevArticle.name : name,
      keywords: keywords === '' ? prevArticle.keywords : keywords,
      content: content === '' ? prevArticle.content : content
    };
    editArticle(data, prevArticle._id, specialities.speciality.Name);
    (0, _reactToastify.toast)('Article updated successfully');
  };

  const handleAdd = async e => {
    e.preventDefault(); // console.log({ content, name, keywords });

    addArticle({
      content,
      name,
      keywords,
      featured,
      thumbnailUrl
    });
    (0, _reactToastify.toast)('Article added successfully');
  };

  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "full-view-article p-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "share-icons"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: 1
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    id: "top",
    sm: 10
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "",
    id: ""
  }, props.edit ? `Update Article - ${prevArticle && prevArticle.name}` : 'Add a Article')), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "name",
    placeholder: "Article Name",
    className: "form-control",
    defaultValue: props.edit ? prevArticle && prevArticle.name : '',
    onChange: e => {
      setname(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "thumbnailUrl",
    placeholder: "Article Thumbnail",
    className: "form-control",
    defaultValue: props.edit ? prevArticle && prevArticle.thumbnailUrl : '',
    onChange: e => {
      setthumbnailUrl(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "keywords",
    placeholder: "Article Description",
    className: "form-control",
    defaultValue: props.edit ? prevArticle && prevArticle.keywords : '',
    onChange: e => {
      setArticleKeywords(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "featured"
  }, "IsFeatured \xA0 "), /*#__PURE__*/_react.default.createElement("input", {
    defaultValue: props.edit ? prevArticle && prevArticle.featured : false,
    onChange: () => {
      setfeatured(!featured);
    },
    type: "checkbox",
    id: "featured"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.edit ? prevArticle && prevArticle.content ? /*#__PURE__*/_react.default.createElement(_editor.default, {
    handleEditor: handleEditor,
    defaultValue: prevArticle && prevArticle.content
  }) : null : /*#__PURE__*/_react.default.createElement(_editor.default, {
    handleEditor: handleEditor,
    defaultValue: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "add-article-button"
  }, /*#__PURE__*/_react.default.createElement(_layout.Button, {
    isButton: true,
    handler: e => {
      props.edit ? handleEdit(e) : handleAdd(e);
    }
  }, props.edit ? 'Update' : 'Add')))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "top-icon"
  }, /*#__PURE__*/_react.default.createElement(_icons.ChevronsUp, {
    size: "50",
    color: "#dc143c",
    onClick: goToTop
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: 1
  }));
};

const mapStateToProps = state => ({
  specialities: state.speciality,
  prevArticle: state.article.selectedArticle
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  addArticle: _actions.addArticle,
  editArticle: _actions.editArticle,
  getArticle: _actions.getArticle
})(UpsertArticle);

exports.default = _default;

/***/ }),

/***/ "./src/components/UpsertCard.js":
/*!**************************************!*\
  !*** ./src/components/UpsertCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _layout = __webpack_require__(/*! ../layout */ "./src/layout/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

var _editor = _interopRequireDefault(__webpack_require__(/*! ../sections/editor */ "./src/sections/editor.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UpsertCard = ({
  addSpeciality,
  editSpeciality,
  edit,
  match
}) => {
  const [state, setState] = (0, _react.useState)({});
  const [data, setData] = (0, _react.useState)({});
  (0, _react.useEffect)(() => {
    const fetchData = async () => {
      if (edit) {
        const res = await (0, _helpers.serviceGet)(`api/speciality/get/${match.params.specialityName}`);
        console.log(res);
        const {
          name,
          imageUrl,
          content,
          _id
        } = res.data.speciality;
        setData({
          name,
          imageUrl,
          content,
          _id
        });
      }
    };

    fetchData();
  }, [edit, match.params.specialityName]);
  console.log(edit, data);

  const handleChange = e => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [e.target.id]: e.target.value
    }));
  };

  const handleEditor = html => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      content: html
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (edit) editSpeciality(state, data._id);else addSpeciality(state);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container mt-4"
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "mt-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "name",
    required: true,
    placeholder: "Speciality Name",
    className: "form-control",
    defaultValue: edit ? data && data.name : '',
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    required: true,
    type: "text",
    id: "imageUrl",
    onChange: handleChange,
    placeholder: "Image URL",
    className: "form-control",
    defaultValue: edit ? data && data.imageUrl : ''
  }), /*#__PURE__*/_react.default.createElement("br", null), !edit && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    required: true,
    type: "text",
    id: "alt",
    onChange: handleChange,
    placeholder: "Image alt text",
    className: "form-control"
  }), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-snow"
  }, edit ? data && data.content ? /*#__PURE__*/_react.default.createElement(_editor.default, {
    required: true,
    defaultValue: data && data.content,
    className: "ql-editor",
    handleEditor: handleEditor
  }) : null : /*#__PURE__*/_react.default.createElement(_editor.default, {
    required: true,
    defaultValue: "",
    className: "ql-editor",
    handleEditor: handleEditor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "add-article-button"
  }, /*#__PURE__*/_react.default.createElement(_layout.Button, {
    handler: handleSubmit,
    isButton: true,
    type: "submit"
  }, edit ? 'Update' : 'Add')))));
};

var _default = (0, _reactRedux.connect)(null, {
  addSpeciality: _actions.addSpeciality,
  editSpeciality: _actions.editSpeciality
})(UpsertCard);

exports.default = _default;

/***/ }),

/***/ "./src/components/UpsertTopic.js":
/*!***************************************!*\
  !*** ./src/components/UpsertTopic.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _layout = __webpack_require__(/*! ../layout */ "./src/layout/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _actions = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

var _reactToastify = __webpack_require__(/*! react-toastify */ "react-toastify");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UpsertTopic = ({
  speciality,
  match,
  addTopic,
  editTopic,
  location,
  edit
}) => {
  const [data, setData] = (0, _react.useState)({
    locked: false
  });
  console.log(location);
  (0, _react.useEffect)(() => {
    setData({
      locked: location.props && location.props.isLocked,
      name: location.props && location.props.name
    });
  }, [location.props]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!edit) {
      console.log(_objectSpread(_objectSpread({}, data), {}, {
        specialityId: speciality._id
      }), match.params.specialityName);
      addTopic(_objectSpread(_objectSpread({}, data), {}, {
        specialityId: speciality._id
      }), match.params.specialityName);
      (0, _reactToastify.toast)('Topic Added successfully');
    } else {
      editTopic(data, match.params.topicId, match.params.specialityName);
      (0, _reactToastify.toast)('Updated');
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "upsert-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "upsert-topic-form"
  }, /*#__PURE__*/_react.default.createElement("h3", null, edit ? 'Update' : 'Add', " Topic"), /*#__PURE__*/_react.default.createElement("form", null, ' ', /*#__PURE__*/_react.default.createElement("div", {
    className: "form-input"
  }, /*#__PURE__*/_react.default.createElement("input", {
    defaultValue: location.props && location.props.name,
    onChange: e => {
      setData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        name: e.target.value
      }));
    },
    type: "text"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-button"
  }, /*#__PURE__*/_react.default.createElement(_layout.LockButton, {
    isLocked: data.locked,
    handler: () => {
      setData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        locked: !prev.locked
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_layout.Button, {
    isButton: true,
    handler: handleSubmit
  }, edit ? 'Update' : 'Add'))));
};

const mapStateToProps = state => ({
  speciality: state.speciality.speciality
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  addTopic: _actions.addTopic,
  editTopic: _actions.editTopic
})(UpsertTopic);

exports.default = _default;

/***/ }),

/***/ "./src/components/UpsertVideo.js":
/*!***************************************!*\
  !*** ./src/components/UpsertVideo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _layout = __webpack_require__(/*! ../layout */ "./src/layout/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const UpsertVideo = ({
  edit,
  match,
  addVideo,
  editVideo,
  getVideo,
  specialities,
  prevVideo
}) => {
  const [name, setName] = (0, _react.useState)(prevVideo ? prevVideo.name : '');
  const [description, setDescription] = (0, _react.useState)(prevVideo ? prevVideo.description : '');
  const [url, setUrl] = (0, _react.useState)(prevVideo ? prevVideo.url : '');

  const handleAdd = async e => {
    e.preventDefault();
    await addVideo({
      name,
      description,
      url
    }, match.params.topicId, specialities.speciality.name);
  };

  const handleEdit = async e => {
    e.preventDefault();
    await editVideo({
      name,
      description,
      url
    }, prevVideo._id, specialities.speciality.name);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "upsert-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "upsert-video-form"
  }, /*#__PURE__*/_react.default.createElement("h3", null, edit ? 'Update' : 'Add ', "Video"), /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Url"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: url,
    onChange: e => setUrl(e.target.value)
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Description"), /*#__PURE__*/_react.default.createElement("textarea", {
    value: description,
    onChange: e => setDescription(e.target.value)
  }))), /*#__PURE__*/_react.default.createElement(_layout.Button, {
    isButton: true,
    handler: e => {
      edit ? handleEdit(e) : handleAdd(e);
    }
  }, edit ? 'Update' : 'Add')));
};

const mapStateToProps = state => ({
  specialities: state.speciality,
  prevVideo: state.video.selectedVideo
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  addVideo: _actions.addVideo,
  editVideo: _actions.editVideo,
  getVideo: _actions.getVideo
})(UpsertVideo);

exports.default = _default;

/***/ }),

/***/ "./src/helpers/PrivateRoute.js":
/*!*************************************!*\
  !*** ./src/helpers/PrivateRoute.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const PrivateRoute = _ref => {
  let {
    component: Component,
    auth: {
      isAuthenticated
    }
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["component", "auth"]);

  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: props => !isAuthenticated ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
      to: "/login"
    }) : /*#__PURE__*/_react.default.createElement(Component, props)
  }));
};

const mapStateToProps = state => ({
  auth: state.auth
});

var _default = (0, _reactRedux.connect)(mapStateToProps)(PrivateRoute);

exports.default = _default;

/***/ }),

/***/ "./src/helpers/Seo.js":
/*!****************************!*\
  !*** ./src/helpers/Seo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Seo = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Seo = ({
  description,
  title = ' ',
  lang = 'en',
  meta = [],
  richresult
}) => {
  // const { favicon } = '';
  const metaTitle = `CodersGala | ${title}`;
  const metaDescription = "CodersGala's only purpose is to provide coding knowledge, such as Web development that includes HTML CSS JS Node React MongoDb, Machine Learning, Data Structures and Algorithm" || 0;
  return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, {
    title: metaTitle,
    htmlAttributes: {
      lang
    },
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: metaTitle
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:title`,
      content: metaTitle
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta),
    link: [{
      rel: 'icon',
      type: 'image/png',
      href: 'favicon'
    }],
    script: [{
      type: 'application/ld+json',
      innerHTML: JSON.stringify(richresult)
    }]
  });
};

exports.Seo = Seo;

/***/ }),

/***/ "./src/helpers/api.js":
/*!****************************!*\
  !*** ./src/helpers/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.serviceGet = exports.servicePost = void 0;

var _ = __webpack_require__(/*! ./ */ "./src/helpers/index.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const servicePost = async (path, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    _axios.default.post(`${_.SERVICE_URL}/${path}`, payload, {
      headers: headers
    }).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};

exports.servicePost = servicePost;

const serviceGet = async (path, payload) => {
  return new Promise((resolve, reject) => {
    _axios.default.get(`${_.SERVICE_URL}/${path}`, payload).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};

exports.serviceGet = serviceGet;

/***/ }),

/***/ "./src/helpers/constants.js":
/*!**********************************!*\
  !*** ./src/helpers/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SERVICE_URL = void 0;
const SERVICE_URL = 'http://localhost:3001';
exports.SERVICE_URL = SERVICE_URL;

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _PrivateRoute = __webpack_require__(/*! ./PrivateRoute */ "./src/helpers/PrivateRoute.js");

Object.keys(_PrivateRoute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PrivateRoute[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PrivateRoute[key];
    }
  });
});

var _Seo = __webpack_require__(/*! ./Seo */ "./src/helpers/Seo.js");

Object.keys(_Seo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Seo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Seo[key];
    }
  });
});

var _setAuthToken = __webpack_require__(/*! ./setAuthToken */ "./src/helpers/setAuthToken.js");

Object.keys(_setAuthToken).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setAuthToken[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setAuthToken[key];
    }
  });
});

var _api = __webpack_require__(/*! ./api */ "./src/helpers/api.js");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _api[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _constants = __webpack_require__(/*! ./constants */ "./src/helpers/constants.js");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _utils = __webpack_require__(/*! ./utils */ "./src/helpers/utils.js");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});

/***/ }),

/***/ "./src/helpers/setAuthToken.js":
/*!*************************************!*\
  !*** ./src/helpers/setAuthToken.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setAuthToken = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const setAuthToken = token => {
  console.log(token);

  if (token) {
    _axios.default.defaults.headers.common['Authorization'] = `JWT ${token}`;
  } else {
    delete _axios.default.defaults.headers.common['Authorization'];
  }
};

exports.setAuthToken = setAuthToken;

/***/ }),

/***/ "./src/helpers/utils.js":
/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isClient = exports.scrollTo = void 0;

const scrollTo = element => {
  isClient && window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
};

exports.scrollTo = scrollTo;
const isClient = typeof window !== 'undefined' && window.document ? true : false;
exports.isClient = isClient;

/***/ }),

/***/ "./src/layout/Buttons/AdminButtons.js":
/*!********************************************!*\
  !*** ./src/layout/Buttons/AdminButtons.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactTippy = __webpack_require__(/*! react-tippy */ "react-tippy");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _icons = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TooltipWrapper = ({
  title,
  position,
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactTippy.Tooltip, {
    title: title,
    position: position,
    trigger: "mouseenter"
  }, children);
};

const AdminButtons = ({
  type,
  url,
  handler,
  isAdmin,
  data = {}
}) => isAdmin ? /*#__PURE__*/_react.default.createElement(TooltipWrapper, {
  title: `${type} "${data.name}"`,
  position: 'top'
}, /*#__PURE__*/_react.default.createElement(AdminButtonsWrapper, {
  type: type,
  url: url,
  handler: handler,
  data: data
})) : /*#__PURE__*/_react.default.createElement(AdminButtonsWrapper, {
  type: "None",
  url: url,
  handler: handler,
  data: data
});

const AdminButtonsWrapper = ({
  type,
  url,
  handler,
  data
}) => {
  switch (type) {
    case 'Add':
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        to: url
      }, /*#__PURE__*/_react.default.createElement(_icons.Add, {
        size: "20",
        color: "#000"
      }));

    case 'Edit':
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        to: {
          pathname: url,
          props: {
            name: data.name,
            isLocked: data.locked
          }
        }
      }, /*#__PURE__*/_react.default.createElement(_icons.Update, {
        size: "20",
        color: "#000"
      }));

    case 'Delete':
      return /*#__PURE__*/_react.default.createElement("button", {
        style: {
          background: "none",
          border: "none",
          outline: "none"
        },
        onClick: () => {
          handler(data);
        },
        className: "edit-topic-modal-toggle"
      }, /*#__PURE__*/_react.default.createElement(_icons.Delete, {
        size: "20",
        color: "crimson"
      }));

    default:
      return /*#__PURE__*/_react.default.createElement("button", {
        href: "#",
        style: {
          background: "none",
          border: "none",
          outline: "none"
        },
        className: "edit-topic-modal-toggle"
      }, /*#__PURE__*/_react.default.createElement(_icons.Delete, {
        size: "0",
        color: ""
      }));
  }
};

const mapStateToProps = state => ({
  isAdmin: state.auth.isAdmin
});

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(AdminButtons);

exports.default = _default;

/***/ }),

/***/ "./src/layout/Buttons/UserButtons.js":
/*!*******************************************!*\
  !*** ./src/layout/Buttons/UserButtons.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LockButton = exports.Button = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _icons = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InnerDiv = ({
  handler,
  children,
  dark,
  bg
}) => children ? /*#__PURE__*/_react.default.createElement("div", {
  className: `button ${dark && 'dark'}`,
  style: {
    backgroundColor: `${bg && 'bg'}`
  },
  onClick: handler ? handler : e => console.log(e, handler)
}, /*#__PURE__*/_react.default.createElement("span", null, children), /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("polyline", {
  className: "o1",
  points: "0 0, 150 0, 150 55, 0 55, 0 0"
}), /*#__PURE__*/_react.default.createElement("polyline", {
  className: "o2",
  points: "0 0, 150 0, 150 55, 0 55, 0 0"
}))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, '   ', /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_icons.Read, {
  size: 19
})));

const Button = ({
  children,
  url,
  dark,
  bg,
  isButton,
  handler
}) => {
  return typeof isButton == 'undefined' ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: url && url
  }, /*#__PURE__*/_react.default.createElement(InnerDiv, {
    dark: dark,
    bg: bg
  }, children)) : /*#__PURE__*/_react.default.createElement(InnerDiv, {
    dark: dark,
    bg: bg,
    handler: handler
  }, children);
};

exports.Button = Button;

const LockButton = ({
  isLocked,
  handler
}) => {
  return /*#__PURE__*/_react.default.createElement("span", {
    onClick: handler
  }, isLocked ? /*#__PURE__*/_react.default.createElement(_icons.Lock, null) : /*#__PURE__*/_react.default.createElement(_icons.Unlock, null));
};

exports.LockButton = LockButton;

/***/ }),

/***/ "./src/layout/Buttons/index.js":
/*!*************************************!*\
  !*** ./src/layout/Buttons/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _AdminButtons = __webpack_require__(/*! ./AdminButtons */ "./src/layout/Buttons/AdminButtons.js");

Object.keys(_AdminButtons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AdminButtons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AdminButtons[key];
    }
  });
});

var _UserButtons = __webpack_require__(/*! ./UserButtons */ "./src/layout/Buttons/UserButtons.js");

Object.keys(_UserButtons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UserButtons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UserButtons[key];
    }
  });
});

/***/ }),

/***/ "./src/layout/Footer.js":
/*!******************************!*\
  !*** ./src/layout/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Footer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FooterSocialMedia = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "social-media"
  }, /*#__PURE__*/_react.default.createElement("a", {
    rel: "nofollow",
    href: "https://gmail.com"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.svgrepo.com/show/303161/gmail-icon-logo.svg",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("a", {
    rel: "nofollow",
    href: "https://twitter.com"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.svgrepo.com/show/183608/twitter.svg",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("a", {
    rel: "nofollow",
    href: "https://instagram.com/bihani.priya"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.svgrepo.com/show/111199/instagram.svg",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("a", {
    rel: "nofollow",
    href: "https://github.com"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.svgrepo.com/show/217753/github.svg",
    className: "github",
    alt: ""
  })));
};

const Footer = () => {
  const [email, setEmail] = (0, _react.useState)('');
  const [message, setMessage] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    setFooterMessage();
  });
  const setFooterMessage = (0, _react.useCallback)(() => {
    setMessage('Enter Your Email here to subscribe for Newsletter');
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-cont"
  }, /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left-col"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "logo"
  }, "Coders Gala"), /*#__PURE__*/_react.default.createElement(FooterSocialMedia, null), /*#__PURE__*/_react.default.createElement("p", {
    className: "rights-text"
  }, "\xA9 2020 Coders Gala , All Rights Reserved")), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-col"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Our Newsletter"), /*#__PURE__*/_react.default.createElement("div", {
    className: "border"
  }), /*#__PURE__*/_react.default.createElement("p", null, message), /*#__PURE__*/_react.default.createElement("form", {
    className: " form newsletter-form"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
    },
    name: "Email",
    className: "txtb",
    placeholder: "Enter Your Email"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    value: "submit",
    className: "btn"
  }))))));
};

exports.Footer = Footer;

/***/ }),

/***/ "./src/layout/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./src/layout/Navbar/Navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _ui = __webpack_require__(/*! ../../actions/ui */ "./src/actions/ui.js");

var _helpers = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

var _SignedOutLinks = _interopRequireDefault(__webpack_require__(/*! ./SignedOutLinks */ "./src/layout/Navbar/SignedOutLinks.js"));

var _SignedInLinks = _interopRequireDefault(__webpack_require__(/*! ./SignedInLinks */ "./src/layout/Navbar/SignedInLinks.js"));

var _cgTransparent = _interopRequireDefault(__webpack_require__(/*! ../../assets/img/cgTransparent.PNG */ "./src/assets/img/cgTransparent.PNG"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// logo imports
const Navbar = ({
  auth,
  ui,
  setDisplayMode
}) => {
  // -------------------------------------------------
  const [navbarExpanded, setnavbarExpanded] = (0, _react.useState)(false);
  const [switched, setswitched] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    document.querySelector('body').classList.add(ui.displayMode);
    console.log(ui.displayMode);

    if (ui.displayMode === 'dark') {
      setswitched(true);
    }
  }, [setswitched, ui.displayMode]); // Getting the current mode from local storage

  if (_helpers.isClient) {
    let mode = 'light';
    mode = localStorage.getItem('mode');

    if (mode === 'dark') {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  } //
  // const links = <SignedOutLinks />;


  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navigation-wrap bg-light start-header start-style"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, {
    className: _helpers.isClient && window.innerWidth >= 767 ? null : 'dropdown-accordion'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand-md navbar-light"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      fontSize: _helpers.isClient && window.innerHeight >= 767 ? '2rem' : '1.2rem'
    },
    className: "nav-logo",
    src: _cgTransparent.default,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    id: "switch",
    onClick: () => {
      setDisplayMode();
      setswitched(!switched);
    },
    className: `switch float-right ${switched ? 'switched' : ''}`
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: ui.displayMode === 'dark' ? '#111' : '#f1f1f1'
    },
    id: "circle"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "mode-icon",
    style: {
      width: '20px'
    },
    src: ui.displayMode === 'dark' ? 'https://www.svgrepo.com/show/3158/moon.svg' : 'https://www.svgrepo.com/show/83726/sun.svg',
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "points-box "
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "points-text"
  }, " Points "), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "CG Points",
    src: "https://image.flaticon.com/icons/svg/715/715709.svg",
    className: "points-img"
  })), /*#__PURE__*/_react.default.createElement("span", null, " ", auth.user && auth.user.points, " "))), /*#__PURE__*/_react.default.createElement("div", {
    className: "signed-links"
  }, auth.isAuthenticated && auth.isAuthenticated ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SignedInLinks.default, null)) : /*#__PURE__*/_react.default.createElement(_SignedOutLinks.default, null)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
    className: "nav-btn",
    onClick: () => {
      setnavbarExpanded(!navbarExpanded);
    },
    as: _reactBootstrap.Button,
    variant: "link",
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "navbar-toggler",
    type: "button",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": navbarExpanded,
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    className: " ",
    id: "navbarSupportedContent",
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement("div", null, auth.user && auth.user.userId ? /*#__PURE__*/_react.default.createElement(_SignedInLinks.default, null) : /*#__PURE__*/_react.default.createElement(_SignedOutLinks.default, null)))))))));
}; // const mapStateToProps = (state) => ({
//   auth: state.auth,
// });


const mapStateToProps = state => {
  return {
    auth: state.auth,
    ui: state.ui
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  setDisplayMode: _ui.setDisplayMode
})(Navbar);

exports.default = _default;

/***/ }),

/***/ "./src/layout/Navbar/SignedInLinks.js":
/*!********************************************!*\
  !*** ./src/layout/Navbar/SignedInLinks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _helpers = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SignedInLinks = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav ml-auto py-4 py-md-0"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/home",
    className: "nav-link"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/about",
    className: "nav-link"
  }, "About")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link ",
    to: "/learn",
    role: "button",
    "aria-expanded": "false"
  }, "Learn"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu"
  })), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: () => {
      localStorage.clear();
    },
    href: "/",
    type: "button",
    className: "nav-link"
  }, "LogOut"))));
};

var _default = SignedInLinks;
exports.default = _default;

/***/ }),

/***/ "./src/layout/Navbar/SignedOutLinks.js":
/*!*********************************************!*\
  !*** ./src/layout/Navbar/SignedOutLinks.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SignedOutLinks = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav ml-auto py-4 py-md-0"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/home",
    className: "nav-link"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/about",
    className: "nav-link"
  }, "About")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link ",
    to: "/learn",
    role: "button",
    "aria-expanded": "false"
  }, "Learn"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu"
  })), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item pl-4 pl-md-0 ml-0 ml-md-4"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link ",
    to: "/login",
    role: "button",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Login"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu"
  }))));
};

var _default = SignedOutLinks;
exports.default = _default;

/***/ }),

/***/ "./src/layout/index.js":
/*!*****************************!*\
  !*** ./src/layout/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Buttons = __webpack_require__(/*! ./Buttons */ "./src/layout/Buttons/index.js");

Object.keys(_Buttons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Buttons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Buttons[key];
    }
  });
});

var _Footer = __webpack_require__(/*! ./Footer */ "./src/layout/Footer.js");

Object.keys(_Footer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Footer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Footer[key];
    }
  });
});

/***/ }),

/***/ "./src/layout/preloader.js":
/*!*********************************!*\
  !*** ./src/layout/preloader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.Preloader = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Preloader = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loader-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "loader-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "loader1"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "loader2"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "loader3"
  })));
};

exports.Preloader = Preloader;
var _default = Preloader;
exports.default = _default;

/***/ }),

/***/ "./src/reducers/article.js":
/*!*********************************!*\
  !*** ./src/reducers/article.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = articleReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  articles: []
};

function articleReducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case 'ADD_ARTICLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        topics: payload
      });

    case 'GET_ARTICLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedArticle: payload.article
      });

    case 'GET_ALL_ARTICLES':
      return _objectSpread(_objectSpread({}, state), {}, {
        articles: payload.articles
      });

    case 'CLEAR_ARTICLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedArticle: {}
      });

    case 'ADD_ARTICLE_ERROR':
      return _objectSpread({}, state);

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/auth.js":
/*!******************************!*\
  !*** ./src/reducers/auth.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = authReducer;

var _types = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  token: _helpers.isClient && localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  user: null,
  isAdmin: null
};

function authReducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _types.USER_LOADED:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: payload,
        isAuthenticated: true,
        isAdmin: payload.role === 0 ? false : true,
        loading: false
      });

    case _types.REGISTER_SUCCESS:
    case _types.LOGIN_SUCCESS:
      _helpers.isClient && localStorage.setItem('token', payload.token);
      _helpers.isClient && localStorage.setItem('userId', payload.userId);
      console.log(payload);
      return _objectSpread(_objectSpread(_objectSpread({}, state), payload), {}, {
        isAuthenticated: true,
        loading: false
      });

    case _types.REGISTER_FAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false
      });

    case _types.LOGIN_FAIL:
    case _types.AUTH_ERROR:
      _helpers.isClient && localStorage.removeItem('token');
      _helpers.isClient && localStorage.removeItem('userId');
      return _objectSpread(_objectSpread({}, state), {}, {
        token: null,
        isAuthenticated: false,
        loading: false,
        userId: null
      });

    case _types.LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: null,
        isAuthenticated: false,
        loading: false
      });

    case _types.SEND_RESET_EMAIL:
      return _objectSpread(_objectSpread({}, state), payload);

    case 'SET_AUTH_LOADER':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "../../../node_modules/redux/es/redux.js");

var _auth = _interopRequireDefault(__webpack_require__(/*! ./auth */ "./src/reducers/auth.js"));

var _speciality = _interopRequireDefault(__webpack_require__(/*! ./speciality */ "./src/reducers/speciality.js"));

var _topic = _interopRequireDefault(__webpack_require__(/*! ./topic */ "./src/reducers/topic.js"));

var _article = _interopRequireDefault(__webpack_require__(/*! ./article */ "./src/reducers/article.js"));

var _ui = _interopRequireDefault(__webpack_require__(/*! ./ui */ "./src/reducers/ui.js"));

var _video = _interopRequireDefault(__webpack_require__(/*! ./video */ "./src/reducers/video.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  auth: _auth.default,
  speciality: _speciality.default,
  topic: _topic.default,
  article: _article.default,
  ui: _ui.default,
  video: _video.default
});

exports.default = _default;

/***/ }),

/***/ "./src/reducers/speciality.js":
/*!************************************!*\
  !*** ./src/reducers/speciality.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = specialityReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  specialities: []
};

function specialityReducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case 'GET_SPECIALITIES':
      return _objectSpread(_objectSpread({}, state), {}, {
        specialities: payload
      });

    case 'GET_SPECIALITY':
      return _objectSpread(_objectSpread({}, state), {}, {
        speciality: payload
      });

    case 'CLEAR_SPECIALITY':
      return _objectSpread(_objectSpread({}, state), {}, {
        speciality: {}
      });

    case 'GET_SPECIALITIES_ERROR':
      return _objectSpread({}, state);

    case 'GET_SPECIALITY_ERROR':
      return _objectSpread({}, state);

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/topic.js":
/*!*******************************!*\
  !*** ./src/reducers/topic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = topicReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  topics: []
};

function topicReducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case 'GET_TOPICS':
      return _objectSpread(_objectSpread({}, state), {}, {
        topics: payload
      });

    case 'GET_TOPICS_ERROR':
      return _objectSpread({}, state);

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/ui.js":
/*!****************************!*\
  !*** ./src/reducers/ui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = uiReducer;

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  openTopics: [],
  displayMode: _helpers.isClient && localStorage.getItem('mode') ? _helpers.isClient && localStorage.getItem('mode') : 'light'
};

function uiReducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case 'SET_OPEN_TOPICS':
      return _objectSpread(_objectSpread({}, state), {}, {
        openTopics: payload
      });

    case 'SET_DISPLAY_MODE':
      return _objectSpread(_objectSpread({}, state), {}, {
        displayMode: payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/video.js":
/*!*******************************!*\
  !*** ./src/reducers/video.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = videoReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  selectedVideo: null
};

function videoReducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case 'ADD_VIDEO':
      return _objectSpread(_objectSpread({}, state), {}, {
        topics: payload
      });

    case 'GET_VIDEO':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedVideo: payload.video
      });

    case 'SELECT_VIDEO':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedVideo: payload
      });

    case 'CLEAR_VIDEO':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedVideo: {}
      });

    case 'ADD_VIDEO_ERROR':
      return _objectSpread({}, state);

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/sections/about/AboutUs.js":
/*!***************************************!*\
  !*** ./src/sections/about/AboutUs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ProfileCard = ({
  data
}) => {
  return /*#__PURE__*/_react.default.createElement("aside", {
    className: "profile-card"
  }, /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h1", null, data.name), /*#__PURE__*/_react.default.createElement("h2", null, "Hello!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "profile-bio"
  }, /*#__PURE__*/_react.default.createElement("p", null, data.bio), /*#__PURE__*/_react.default.createElement("ul", {
    className: "social-icons list-unstyled list-inline"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    target: "__blank",
    href: data.portfolioUrl
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px"
    },
    src: "https://www.svgrepo.com/show/188990/browser-website.svg",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    target: "__blank",
    href: data.instaUrl
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px"
    },
    src: "https://www.svgrepo.com/show/111199/instagram.svg",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    target: "__blank",
    href: data.twitterUrl
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px"
    },
    src: "https://www.svgrepo.com/show/183608/twitter.svg",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    target: "__blank",
    href: data.githubUrl
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "25px"
    },
    src: "https://www.svgrepo.com/show/217753/github.svg",
    className: "github",
    alt: ""
  }))))));
};

const AboutUs = () => {
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      if (window.scrollY > 1550) {
        document.querySelector(".profile-card").classList.add("profile-card-anim");
      }
    }
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-container"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-heading"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "About ", /*#__PURE__*/_react.default.createElement("span", null, "Us"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-text"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor dolore odit, neque itaque iure quas mollitia nihil cumque rem harum consequuntur consectetur. Autem fugit, doloribus sint enim error sequi quo rem minima magni excepturi expedita mollitia recusandae harum alias repellendus, sit voluptate facilis similique at in asperiores sunt inam saepe qui. Nisi minima ipsa illo tempore quod enim eum quidem?")), /*#__PURE__*/_react.default.createElement("div", {
    className: "profile-cards"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    lg: 6
  }, /*#__PURE__*/_react.default.createElement(ProfileCard, {
    data: {
      name: "Priya",
      portfolioUrl: "https://know-priya-bihani.vercel.app",
      instaUrl: "https://www.instagram.com/bihani.priya",
      githubUrl: "https://www.github.com/PriyaBihani",
      twitterUrl: "https://twitter.com/p_bihani",
      bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora eveniet quae neque hic doloribus voluptatibus incidunt quia facilis blanditiis."
    }
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    lg: 6
  }, /*#__PURE__*/_react.default.createElement(ProfileCard, {
    data: {
      name: "Kartik",
      portfolioUrl: "https://google.com",
      instaUrl: "https://www.instagram.com/bihani.priya",
      githubUrl: "https://www.github.com/kartik18g",
      twitterUrl: "https://twitter.com/Gkaartik",
      bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora eveniet quae neque hic doloribus voluptatibus incidunt quia facilis blanditiis."
    }
  })))));
};

var _default = AboutUs;
exports.default = _default;

/***/ }),

/***/ "./src/sections/about/Questions.js":
/*!*****************************************!*\
  !*** ./src/sections/about/Questions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Questions = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "questions-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "s-s-1"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "About ", /*#__PURE__*/_react.default.createElement("span", {
    className: "logo"
  }, "Coders Gala"))), /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "what-din"
  }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("h4", null, "What is ", /*#__PURE__*/_react.default.createElement("span", {
    className: ""
  }, "Coders Gala"), "?"), "sit amet consectetur adipisicing elit. Animi dolor explicabo optio fugiat quo numquam! Mollitia, facilis aperiam nihil voluptate consequuntur dolore, hic ab totam blanditiis lorem30 accusantium, magnam odit eum?"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "why-din"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Why ", /*#__PURE__*/_react.default.createElement("span", {
    className: ""
  }, "Coders Gala"), "?"), "sit amet consectetur adipisicing elit. Animi dolor explicabo optio fugiat quo numquam! Mollitia, facilis aperiam nihil voluptate consequuntur dolore, hic ab totam blanditiis accusantium, magnam odit eum?"), /*#__PURE__*/_react.default.createElement("div", {
    className: "what-din"
  }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("h4", null, "What is ", /*#__PURE__*/_react.default.createElement("span", {
    className: ""
  }, "Coders Gala"), "?"), "sit amet consectetur adipisicing elit. Animi dolor explicabo optio fugiat quo numquam! Mollitia, facilis aperiam nihil voluptate consequuntur dolore, hic ab totam blanditiis lorem30 accusantium, magnam odit eum?"), /*#__PURE__*/_react.default.createElement("br", null)));
};

var _default = Questions;
exports.default = _default;

/***/ }),

/***/ "./src/sections/blog/All.js":
/*!**********************************!*\
  !*** ./src/sections/blog/All.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const All = ({
  articles
}) => {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "grid__col-3"
  }, articles && articles.map(article => {
    const ArticleId = article && article._id;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "grid__item-md",
      key: ArticleId
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
      to: `/blog/read/${article && article.name.replace(/\s/g, "-")}`
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "",
      src: article.thumbnailUrl ? article.thumbnailUrl : "https://codersgala.com/static/media/cgTransparent.6a9c3496.PNG",
      className: "grid__item__img"
    }), /*#__PURE__*/_react.default.createElement("p", {
      className: "grid__item__category"
    }, " ", article && (0, _moment.default)(article.createdAt).format("DD MM YYYY")), /*#__PURE__*/_react.default.createElement("h4", {
      className: "grid__item__title"
    }, article && article.name), /*#__PURE__*/_react.default.createElement("p", {
      className: "grid__item__author"
    }, " ", "By CodersGala")));
  }));
};

var _default = All;
exports.default = _default;

/***/ }),

/***/ "./src/sections/blog/Featured.js":
/*!***************************************!*\
  !*** ./src/sections/blog/Featured.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Featured = ({
  articles
}) => {
  return /*#__PURE__*/_react.default.createElement("div", null, articles && articles.map(article => {
    if (article && article.featured === true) {
      console.log(article);
      const ArticleId = article && article._id;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "grid__item-sm",
        key: article && article.id
      }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
        to: `/blog/read/${article && article.name.replace(/\s/g, '-')}`
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
        className: "grid__item__category"
      }, article && (0, _moment.default)(article.createdAt).format('DD MM YYYY')), /*#__PURE__*/_react.default.createElement("h4", {
        className: "grid__item__title"
      }, article && article.name), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
        className: "grid__item__author"
      }, "By CodersGala")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
        src: article.thumbnailUrl ? article.thumbnailUrl : 'https://codersgala.com/static/media/cgTransparent.6a9c3496.PNG',
        className: "grid__item__img",
        alt: ""
      }))));
    }

    return null;
  }));
};

var _default = Featured;
exports.default = _default;

/***/ }),

/***/ "./src/sections/blog/Latest.js":
/*!*************************************!*\
  !*** ./src/sections/blog/Latest.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Latest = ({
  article
}) => {
  console.log(article && article.name.replace(/\s/g, "-"));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "grid__item-lg"
  }, "`", article && /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: `/blog/read/${article && article.name.replace(/\s/g, "-")}`
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: article.thumbnailUrl ? article.thumbnailUrl : "https://codersgala.com/static/media/cgTransparent.6a9c3496.PNG",
    className: "grid__item__img",
    className: "grid__item__img"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "grid__item__category"
  }, " ", article && (0, _moment.default)(article.createdAt).format("DD MM YYYY")), /*#__PURE__*/_react.default.createElement("h4", {
    className: "grid__item__title"
  }, article.name), /*#__PURE__*/_react.default.createElement("p", {
    className: "grid__item__author"
  }, "By CodersGala")));
};

var _default = Latest;
exports.default = _default;

/***/ }),

/***/ "./src/sections/editor.js":
/*!********************************!*\
  !*** ./src/sections/editor.js ***!
  \********************************/
/***/ (() => {

"use strict";
// import React from 'react';
// import hljs from 'highlight.js';
// import ReactQuill, { Quill } from 'react-quill';
// let BlockEmbed = Quill.import('blots/block/embed');
// let Inline = Quill.import('blots/inline');
// hljs.configure({
//   languages: ['javascript', 'python', 'html', 'css'],
// });
// const CustomButton = () => (
//   <img
//     style={{ width: '20px' }}
//     src="https://www.svgrepo.com/show/77584/image.svg"
//     alt=""
//   />
// );
// // const CodeLine = () => (
// //   <img
// //     style={{ width: '20px' }}
// //     src="https://www.svgrepo.com/show/294145/code.svg"
// //     alt=""
// //   />
// // );
// const Size = Quill.import('formats/size');
// Size.whitelist = [
//   '1',
//   '2',
//   '4',
//   '6',
//   '8',
//   '10',
//   '12',
//   '14',
//   '16',
//   '20',
//   '24',
//   '26',
//   '30',
// ];
// Quill.register(Size, true);
// class inlineCodeBlot extends Inline { }
// inlineCodeBlot.blotName = 'inlineCode';
// inlineCodeBlot.tagName = 'code';
// class ImageBlot extends BlockEmbed {
//   static create(value) {
//     let node = super.create();
//     node.setAttribute('alt', value.alt);
//     node.setAttribute('src', value.url);
//     node.setAttribute('class', value.class);
//     return node;
//   }
//   static value(node) {
//     return {
//       alt: node.getAttribute('alt'),
//       url: node.getAttribute('src'),
//       class: node.getAttribute('class'),
//     };
//   }
// }
// ImageBlot.blotName = 'image';
// ImageBlot.tagName = 'img';
// Quill.register(ImageBlot);
// Quill.register(inlineCodeBlot);
// const insertImage = () => {
//   let url = prompt('Enter link URL');
//   let alt = prompt('Enter link alt');
//   let clas = prompt('Enter class Name');
//   let range = this.quill.getSelection(true);
//   console.log(Quill.sources);
//   this.quill.insertText(range.index, '\n', Quill.sources.USER);
//   this.quill.insertEmbed(
//     range.index + 1,
//     'image',
//     {
//       alt: alt,
//       url: url,
//       class: clas,
//     },
//     Quill.sources.USER
//   );
//   this.quill.setSelection(range.index + 2, Quill.sources.SILENT);
// };
// const insertInlineCode = (e) => {
//   e.preventDefault();
//   // console.log(this.quill);
//   // this.quill.format("inlineCode", true);
//   console.log('inline code ins');
// };
// const CustomToolbar = () => (
//   <div id="toolbar">
//     <select
//       className="ql-header"
//       defaultValue={''}
//       onChange={(e) => e.persist()}
//     >
//       <option value="1"></option>
//       <option value="2"></option>
//       <option value="3"></option>
//       <option value="4"></option>
//       <option value="5"></option>
//       <option value="6"></option>
//       <option selected></option>
//     </select>
//     <select class="ql-font">
//       <option value="serif"></option>
//       <option selected></option>
//       <option value="monospace"></option>
//     </select>
//     <select className="ql-size">
//       <option value="1">1</option>
//       <option selected value="2">
//         2
//       </option>
//       <option value="4">4</option>
//       <option value="6">6</option>
//       <option value="8">8</option>
//       <option value="10">10</option>
//       <option value="12">12</option>
//       <option value="14">14</option>
//       <option value="16">16</option>
//       <option value="20">20</option>
//       <option value="24">24</option>
//       <option value="26">26</option>
//       <option value="30">30</option>
//     </select>
//     <select class="ql-align">
//       <option value="center"></option>
//       <option selected></option>
//       <option value="right"></option>
//       <option value="justify"></option>
//     </select>
//     <select className="ql-background">
//       <option value="red"></option>
//       <option value="green"></option>
//       <option value="#4F69F8"></option>
//       <option value="orange"></option>
//       <option value="violet"></option>
//       <option value="#d0d1d2"></option>
//       <option selected></option>
//     </select>
//     <select className="ql-color">
//       <option value="#DA0F47"></option>
//       <option value="#4DCE1D"></option>
//       <option value="#4F69F8"></option>
//       <option value="orange"></option>
//       <option value="#9933ff"></option>
//       <option value="#d0d1d2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-bold"></button>
//     <button className="ql-italic"></button>
//     <button className="ql-underline"></button>
//     <button className="ql-strike"></button>
//     <button className="ql-blockquote"></button>
//     <button className="ql-direction"></button>
//     <button className="ql-link"></button>
//     <button className="ql-image"></button>
//     <button className="ql-video"></button>
//     <button value="ordered" className="ql-list"></button>
//     <button value="bullet" className="ql-list"></button>
//     <button value="-1" className="ql-indent"></button>
//     <button value="+1" className="ql-indent"></button>
//     <button className="ql-code-block"></button>
//     <button className="ql-insertImage">
//       <CustomButton />
//     </button>
//   </div>
// );
// /*
//  * Editor component with custom toolbar and content containers
//  */
// class Editor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { editorHtml: this.props.defaultValue };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(html) {
//     this.setState({ editorHtml: html });
//     this.props.handleEditor(html);
//   }
//   render() {
//     // console.log(this.state.editorHtml);
//     // console.log(this.props.defaultValue);
//     return (
//       <div className="text-editor">
//         <CustomToolbar />
//         <ReactQuill
//           onChange={this.handleChange}
//           modules={Editor.modules}
//           value={this.state.editorHtml || ''}
//         />
//       </div>
//     );
//   }
// }
// Editor.modules = {
//   syntax: {
//     highlight: (text) => hljs.highlightAuto(text).value,
//   },
//   toolbar: {
//     container: '#toolbar',
//     handlers: {
//       insertImage: insertImage,
//       insertInlineCode: insertInlineCode,
//     },
//   },
// };
// Editor.formats = [
//   'header',
//   'font',
//   'size',
//   'bold',
//   'italic',
//   'underline',
//   'strike',
//   'blockquote',
//   'list',
//   'bullet',
//   'indent',
//   'link',
//   'image',
//   'color',
//   'code-block',
// ];
// export default Editor;


/***/ }),

/***/ "./src/sections/home/Hero.js":
/*!***********************************!*\
  !*** ./src/sections/home/Hero.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Hero = () => {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "floatingHero"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "floatingHero-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://luna1.co/57d9b6.png",
    alt: "",
    className: "floatingHero-image -two -floatingDelay"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "https://luna1.co/2070ee.png",
    alt: "",
    className: "floatingHero-image -three -floating"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "https://luna1.co/fda860.png",
    alt: "",
    className: "floatingHero-image -four -floatingDelay"
  }), /*#__PURE__*/_react.default.createElement("header", {
    className: "floatingHero-header"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "floatingHero-label"
  }, "This is..."), /*#__PURE__*/_react.default.createElement("h1", {
    className: "floatingHero-headline "
  }, "Coders Gala"), /*#__PURE__*/_react.default.createElement("p", {
    className: "floatingHero-description"
  }, "Coders Gala is a free to use platform, which will help and guide you, not only to learn web development but become a free-lancer like us. So click on play and embark a new journey with us."), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/learn"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "video-play -coral -small -pulse"
  })))));
};

var _default = Hero;
exports.default = _default;

/***/ }),

/***/ "./src/sections/home/HeroCards.js":
/*!****************************************!*\
  !*** ./src/sections/home/HeroCards.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _helpers = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const HeroCards = () => {
  // refs for the three section
  const heroBlue = (0, _react.useRef)();
  const heroOrange = (0, _react.useRef)();
  const heroGreen = (0, _react.useRef)();

  const scrollFunction = () => {
    _helpers.isClient && window.addEventListener('scroll', () => {
      var scroll = window.scrollY;

      if (scroll < 150) {
        heroBlue.current.classList.remove('one');
        heroOrange.current.classList.remove('three');
        heroGreen.current.classList.remove('two');
      }

      if (scroll > 150 && scroll < 450) {
        heroBlue.current.classList.add('one');
        heroOrange.current.classList.remove('three');
        heroGreen.current.classList.remove('two');
      }

      if (scroll > 450 && scroll < 650) {
        heroGreen.current.classList.add('two');
        heroBlue.current.classList.remove('one');
        heroOrange.current.classList.remove('three');
      }

      if (scroll > 650) {
        heroGreen.current.classList.add('two');
        heroBlue.current.classList.remove('one');
        heroOrange.current.classList.add('three');
      }
    });
  };

  (0, _react.useEffect)(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 600) {
        window.addEventListener('scroll', scrollFunction);
      }
    }

    if (_helpers.isClient && window.innerWidth > 600) {
      document.addEventListener('DOMContentLoaded', () => {
        heroGreen.current.classList.add('two');
        heroOrange.current.classList.add('three');
        heroBlue.current.classList.add('one');
        window.setTimeout(() => {
          heroBlue.current.classList.remove('one');
          window.setTimeout(() => {
            heroGreen.current.classList.remove('two');
            window.setTimeout(() => {
              heroOrange.current.classList.remove('three');
            }, 850);
          }, 750);
        }, 650);
      });
    }

    return () => {
      _helpers.isClient && window.removeEventListener('scroll', scrollFunction);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-box-container"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/about",
    className: "hero-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: heroBlue,
    className: "hero-box__circle hero-box__circle--blue"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "hero-box__title"
  }, "What is CodersGala?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-box__body"
  }, "CodersGala is a free to use platform for all those people who are unwilling to pay high ransom to these crooked coaching centers for learning web Development. We won't be spoon feeding you but we will guide you. Anyway, if you are eager to learn you will find a way.")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/about/#aboutus",
    className: "hero-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: heroGreen,
    className: "hero-box__circle hero-box__circle--green"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "hero-box__title"
  }, "Who are we?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-box__body"
  }, "We started web development on our own, with no direction and no coaching. All we had was determination and internet. We consider ourselves lucky to be able to provide the support that had been provided to us.")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/learn",
    className: "hero-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: heroOrange,
    className: "hero-box__circle hero-box__circle--orange"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "hero-box__title"
  }, "Start Learning .."), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-box__body"
  }, "Right now we have the articles on front-end-development. We are working tirelessly to cover backend. We will have the articles aired on backend before september. The course will cover Front-end, API, Nodejs-express, MongoDb, MySQL, Hosting, React, Firebase... and a lot more projects."))));
};

var _default = HeroCards;
exports.default = _default;

/***/ }),

/***/ "./src/sections/learn/ArticleNames.js":
/*!********************************************!*\
  !*** ./src/sections/learn/ArticleNames.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactTippy = __webpack_require__(/*! react-tippy */ "react-tippy");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _helpers = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

var _layout = __webpack_require__(/*! ../../layout */ "./src/layout/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _AdminButtons = _interopRequireDefault(__webpack_require__(/*! ../../layout/Buttons/AdminButtons */ "./src/layout/Buttons/AdminButtons.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ArticleNames = ({
  selectVideo,
  article,
  deleteArticle,
  topic,
  specialityName
}) => {
  const handleDelete = data => {
    const {
      ArticleName,
      _id
    } = data;
    const confirm = _helpers.isClient && window.prompt(`You sure want to delete "${ArticleName}" ? Y or N `);

    if (confirm === 'Y') {
      deleteArticle(_id, topic._id, specialityName);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row read-icon"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: " read col-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    type: "button",
    onClick: () => {
      console.log(article);
      selectVideo(article);
      const pos = document.querySelector('.card-container');

      if (_helpers.isClient && window.innerWidth <= 500) {
        (0, _helpers.scrollTo)(pos);
      }
    },
    className: "display-article"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "article-name m-0"
  }, article.ArticleName, ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "article-action-icons"
  }, /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
    type: "Edit",
    url: `/article/update/${article._id}`,
    data: article
  }), /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
    type: "Delete",
    handler: handleDelete,
    data: article
  }), /*#__PURE__*/_react.default.createElement(_reactTippy.Tooltip // options
  , {
    title: `Read "${article.ArticleName}"`,
    position: "top",
    trigger: "mouseenter"
  }, /*#__PURE__*/_react.default.createElement(_layout.Button, {
    isButton: true,
    handler: () => {
      selectVideo(article);
      const pos = document.querySelector('.card-container');

      if (_helpers.isClient && window.innerWidth <= 500) {
        (0, _helpers.scrollTo)(pos);
      }
    }
  }))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "update-delete float-right"
  })));
};

var _default = (0, _reactRedux.connect)(null, {
  deleteArticle: _actions.deleteArticle,
  selectVideo: _actions.selectVideo
})(ArticleNames);

exports.default = _default;

/***/ }),

/***/ "./src/sections/learn/Card.js":
/*!************************************!*\
  !*** ./src/sections/learn/Card.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _layout = __webpack_require__(/*! ../../layout */ "./src/layout/index.js");

var _helpers = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

var _AdminButtons = _interopRequireDefault(__webpack_require__(/*! ../../layout/Buttons/AdminButtons */ "./src/layout/Buttons/AdminButtons.js"));

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Card = ({
  getSpecialities,
  specialities,
  deleteSpeciality
}) => {
  (0, _react.useEffect)(() => {
    if (specialities.length === 0) {
      getSpecialities();
    }
  }, [specialities.length, getSpecialities]);

  const handleDelete = item => {
    // Got to helper, check
    const confirm = _helpers.isClient && window.prompt(`You sure want to delete "${item.Name}" ? Y or N (Deleting a speciality will lead to deletion of all topics and articles inside it) `);

    if (confirm === 'Y') {
      deleteSpeciality(item._id);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "learn-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container pt-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, specialities && specialities.map(item => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item._id,
      className: "col-lg-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "imgBx"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "image",
      src: item.imageUrl,
      alt: item.alt
    })), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: _helpers.isClient && window.innerWidth <= 600 ? '150px' : 'auto'
      },
      className: "contentBx"
    }, /*#__PURE__*/_react.default.createElement("h2", null, " ", item.name), /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
      type: "Edit",
      url: '/updatespeciality/' + item.name,
      data: item
    }), /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
      type: "Delete",
      handler: () => {
        handleDelete(item);
      },
      data: item
    }), /*#__PURE__*/_react.default.createElement(_layout.Button, {
      url: '/learn/' + item.name
    }, "Start Now"))));
  }))));
};

const mapStateToProps = state => ({
  specialities: state.speciality.specialities
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  getSpecialities: _actions.getSpecialities,
  deleteSpeciality: _actions.deleteSpeciality
})(Card);

exports.default = _default;

/***/ }),

/***/ "./src/sections/learn/VideoNames.js":
/*!******************************************!*\
  !*** ./src/sections/learn/VideoNames.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactTippy = __webpack_require__(/*! react-tippy */ "react-tippy");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _layout = __webpack_require__(/*! ../../layout */ "./src/layout/index.js");

var _helpers = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _AdminButtons = _interopRequireDefault(__webpack_require__(/*! ../../layout/Buttons/AdminButtons */ "./src/layout/Buttons/AdminButtons.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VideoNames = ({
  selectVideo,
  video,
  deleteVideo,
  topic,
  specialityName
}) => {
  console.log(video);

  const handleDelete = data => {
    const {
      VideoName,
      _id
    } = data;
    const confirm = _helpers.isClient && window.prompt(`You sure want to delete "${VideoName}" ? Y or N `);

    if (confirm === 'Y') {
      deleteVideo(_id, topic._id, specialityName);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row read-icon"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "read col-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    type: "button",
    onClick: () => {
      selectVideo(video);
    },
    className: "display-article"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "article-name m-0"
  }, video.name, ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "article-action-icons"
  }, /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
    type: "Edit",
    url: `/video/update/${video._id}`,
    data: video
  }), /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
    type: "Delete",
    handler: handleDelete,
    data: video
  }), /*#__PURE__*/_react.default.createElement(_reactTippy.Tooltip // options
  , {
    title: `Read "${video.name}"`,
    position: "top",
    trigger: "mouseenter"
  }, /*#__PURE__*/_react.default.createElement(_layout.Button, {
    isButton: true,
    handler: () => {
      selectVideo(video);
    }
  }))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "update-delete float-right"
  })));
};

var _default = (0, _reactRedux.connect)(null, {
  deleteVideo: _actions.deleteVideo,
  selectVideo: _actions.selectVideo
})(VideoNames);

exports.default = _default;

/***/ }),

/***/ "./src/sections/preview/ArticlePreview.js":
/*!************************************************!*\
  !*** ./src/sections/preview/ArticlePreview.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactHtmlParser = _interopRequireDefault(__webpack_require__(/*! react-html-parser */ "react-html-parser"));

var _topic = __webpack_require__(/*! ../../actions/topic */ "./src/actions/topic.js");

var _helpers = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ArticlePreview = ({
  SelectedArticle,
  specialityName,
  unlockTopic
}) => {
  const ReadMoreUrl = SelectedArticle && SelectedArticle.name ? `/${specialityName}/read/${SelectedArticle.name.replace(/\s/g, '-')}` : `/${specialityName}/read/before-starting`;

  const handleUnlock = async (topicId, specialityName) => {
    const res = await unlockTopic(topicId, specialityName);
    console.log(res);
  };

  console.log(SelectedArticle);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
    className: "material-icons card-header"
  }, SelectedArticle && SelectedArticle.name ? SelectedArticle.name : 'Read This Before You Start...'), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-snow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-no-body ql-editor"
  }, SelectedArticle && SelectedArticle.locked ? /*#__PURE__*/_react.default.createElement("div", null, "To view this article please unlock it using points", ' ', /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      handleUnlock(SelectedArticle && SelectedArticle.topicId, specialityName);
    }
  }, "Unlock"), ' ') : (0, _reactHtmlParser.default)(SelectedArticle && SelectedArticle.content)))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    onClick: () => {
      _helpers.isClient && window.scroll({
        behavior: 'smooth',
        left: 0,
        top: '0px'
      });
    },
    to: ReadMoreUrl
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "link"
  }, SelectedArticle && SelectedArticle.locked ? 'Unlock' : 'Read More.....')))));
};

var _default = (0, _reactRedux.connect)(null, {
  unlockTopic: _topic.unlockTopic
})(ArticlePreview);

exports.default = _default;

/***/ }),

/***/ "./src/sections/preview/TopicsOverview.js":
/*!************************************************!*\
  !*** ./src/sections/preview/TopicsOverview.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactToastify = __webpack_require__(/*! react-toastify */ "react-toastify");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _ArticleNames = _interopRequireDefault(__webpack_require__(/*! ../learn/ArticleNames */ "./src/sections/learn/ArticleNames.js"));

var _VideoNames = _interopRequireDefault(__webpack_require__(/*! ../learn/VideoNames */ "./src/sections/learn/VideoNames.js"));

var _AdminButtons = _interopRequireDefault(__webpack_require__(/*! ../../layout/Buttons/AdminButtons */ "./src/layout/Buttons/AdminButtons.js"));

var _icons = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");

var _helpers = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TopicsOverview = ({
  getTopics,
  specialityName,
  topics,
  deleteTopic,
  user
}) => {
  (0, _react.useEffect)(() => {
    getTopics(specialityName);
  }, [getTopics, specialityName]);

  const handleDelete = topic => {
    const confirm = _helpers.isClient && window.prompt(`You sure want to delete "${topic.name}" ? Y or N (Deleting a topic will lead to deletion of all articles inside it) `);

    if (confirm === 'Y') {
      deleteTopic(topic._id, specialityName);
      (0, _reactToastify.toast)('Deleted speciality sucessfully');
    }
  };

  const [selectedId, setSelectedId] = (0, _react.useState)();
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "specialities",
    className: "Topic-names "
  }, topics.length > 0 && topics.map(topic => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: topic._id
    }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
      className: "p-0 speciality-topic-container m-1",
      key: topic._id
    }, /*#__PURE__*/_react.default.createElement("h4", {
      className: "float-left topicName"
    }, topic.name), /*#__PURE__*/_react.default.createElement(ActionButtons, {
      accordionKey: topic.name.split(/\s/).join(''),
      setSelectedId: setSelectedId,
      selectedId: selectedId,
      specialityName: specialityName,
      topic: topic,
      user: user,
      handleDelete: handleDelete
    }), /*#__PURE__*/_react.default.createElement("hr", null), topic.locked && !user.unLockedTopics.includes(topic._id) ? null : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
      eventKey: topic.name.split(/\s/).join('')
    }, /*#__PURE__*/_react.default.createElement("ol", null, topic.videos.length > 0 ? topic.videos.map(video => {
      return /*#__PURE__*/_react.default.createElement(_VideoNames.default, {
        topic: topic,
        video: video,
        specialityName: specialityName
      });
    }) : topic.articles && topic.articles.map(article => {
      return /*#__PURE__*/_react.default.createElement(_ArticleNames.default, {
        topic: topic,
        article: article,
        specialityName: specialityName
      });
    })))));
  }));
};

const mapStateToProps = state => ({
  topics: state.topic.topics,
  user: state.auth.user
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  getTopics: _actions.getTopics,
  deleteTopic: _actions.deleteTopic
})(TopicsOverview);

exports.default = _default;

const ActionButtons = ({
  handleDelete,
  topic,
  specialityName,
  selectedId,
  setSelectedId,
  user
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "action-buttons"
  }, /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
    type: "Edit",
    data: topic,
    url: `/${specialityName}/topic/edit/${topic._id}`
  }), /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
    type: "Delete",
    handler: handleDelete,
    data: topic
  }), /*#__PURE__*/_react.default.createElement(_AdminButtons.default, {
    type: "Add",
    data: topic,
    url: `/video/add/${topic._id}`
  }), topic.locked && !user.unLockedTopics.includes(topic._id) ? /*#__PURE__*/_react.default.createElement(_icons.Lock, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
    as: _reactBootstrap.Button,
    variant: "link",
    className: "float-right arrow-down",
    eventKey: topic.name.split(/\s/).join('') // to remove spaces
    ,
    onClick: () => {
      if (selectedId === topic._id) {
        setSelectedId('');
      } else {
        setSelectedId(topic._id);
      }
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    id: topic.name.split(/\s/).join(''),
    viewBox: "0 0 32 32",
    className: `icon icon-chevron-bottom article-dwn article-toggle fa-angle-down ${topic._id === selectedId ? 'rotate' : ''}`
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"
  }))));
};

/***/ }),

/***/ "./src/sections/preview/VideoPreview.js":
/*!**********************************************!*\
  !*** ./src/sections/preview/VideoPreview.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _ArticlePreview = _interopRequireDefault(__webpack_require__(/*! ./ArticlePreview */ "./src/sections/preview/ArticlePreview.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VideoPreview = ({
  video
}) => {
  console.log(video);
  return video && !video.content ? /*#__PURE__*/_react.default.createElement("div", {
    className: "video-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "video"
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    className: "iframe",
    src: video.url,
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "title"
  }, video.name), /*#__PURE__*/_react.default.createElement("div", {
    className: "desc"
  }, video.description), /*#__PURE__*/_react.default.createElement("div", {
    className: "linked-articles"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Articles Related to the topic")))) : /*#__PURE__*/_react.default.createElement(_ArticlePreview.default, {
    SelectedArticle: video
  });
};

const mapStateToProps = state => ({
  video: state.video.selectedVideo
});

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(VideoPreview);

exports.default = _default;

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "../../../node_modules/redux/es/redux.js");

var _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

var _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ "redux-thunk"));

var _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ "./src/reducers/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialState = {};
const middleware = [_reduxThunk.default];
const store = (0, _redux.createStore)(_reducers.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(...middleware)));
var _default = store;
exports.default = _default;

/***/ }),

/***/ "./src/assets/img/cgTransparent.PNG":
/*!******************************************!*\
  !*** ./src/assets/img/cgTransparent.PNG ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6a9c349616dc7691ef60a320703cb77a.PNG");

/***/ }),

/***/ "../../../node_modules/express/index.js":
/*!**********************************************!*\
  !*** ../../../node_modules/express/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



module.exports = __webpack_require__(/*! ./lib/express */ "../../../node_modules/express/lib/express.js");


/***/ }),

/***/ "../../../node_modules/express/lib/application.js":
/*!********************************************************!*\
  !*** ../../../node_modules/express/lib/application.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var finalhandler = __webpack_require__(/*! finalhandler */ "finalhandler");
var Router = __webpack_require__(/*! ./router */ "../../../node_modules/express/lib/router/index.js");
var methods = __webpack_require__(/*! methods */ "methods");
var middleware = __webpack_require__(/*! ./middleware/init */ "../../../node_modules/express/lib/middleware/init.js");
var query = __webpack_require__(/*! ./middleware/query */ "../../../node_modules/express/lib/middleware/query.js");
var debug = __webpack_require__(/*! debug */ "debug")('express:application');
var View = __webpack_require__(/*! ./view */ "../../../node_modules/express/lib/view.js");
var http = __webpack_require__(/*! http */ "http");
var compileETag = __webpack_require__(/*! ./utils */ "../../../node_modules/express/lib/utils.js").compileETag;
var compileQueryParser = __webpack_require__(/*! ./utils */ "../../../node_modules/express/lib/utils.js").compileQueryParser;
var compileTrust = __webpack_require__(/*! ./utils */ "../../../node_modules/express/lib/utils.js").compileTrust;
var deprecate = __webpack_require__(/*! depd */ "depd")('express');
var flatten = __webpack_require__(/*! array-flatten */ "array-flatten");
var merge = __webpack_require__(/*! utils-merge */ "utils-merge");
var resolve = __webpack_require__(/*! path */ "path").resolve;
var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "setprototypeof")
var slice = Array.prototype.slice;

/**
 * Application prototype.
 */

var app = exports = module.exports = {};

/**
 * Variable for trust proxy inheritance back-compat
 * @private
 */

var trustProxyDefaultSymbol = '@@symbol:trust_proxy_default';

/**
 * Initialize the server.
 *
 *   - setup default configuration
 *   - setup default middleware
 *   - setup route reflection methods
 *
 * @private
 */

app.init = function init() {
  this.cache = {};
  this.engines = {};
  this.settings = {};

  this.defaultConfiguration();
};

/**
 * Initialize application configuration.
 * @private
 */

app.defaultConfiguration = function defaultConfiguration() {
  var env = "development" || 0;

  // default settings
  this.enable('x-powered-by');
  this.set('etag', 'weak');
  this.set('env', env);
  this.set('query parser', 'extended');
  this.set('subdomain offset', 2);
  this.set('trust proxy', false);

  // trust proxy inherit back-compat
  Object.defineProperty(this.settings, trustProxyDefaultSymbol, {
    configurable: true,
    value: true
  });

  debug('booting in %s mode', env);

  this.on('mount', function onmount(parent) {
    // inherit trust proxy
    if (this.settings[trustProxyDefaultSymbol] === true
      && typeof parent.settings['trust proxy fn'] === 'function') {
      delete this.settings['trust proxy'];
      delete this.settings['trust proxy fn'];
    }

    // inherit protos
    setPrototypeOf(this.request, parent.request)
    setPrototypeOf(this.response, parent.response)
    setPrototypeOf(this.engines, parent.engines)
    setPrototypeOf(this.settings, parent.settings)
  });

  // setup locals
  this.locals = Object.create(null);

  // top-most app is mounted at /
  this.mountpath = '/';

  // default locals
  this.locals.settings = this.settings;

  // default configuration
  this.set('view', View);
  this.set('views', resolve('views'));
  this.set('jsonp callback name', 'callback');

  if (env === 'production') {
    this.enable('view cache');
  }

  Object.defineProperty(this, 'router', {
    get: function() {
      throw new Error('\'app.router\' is deprecated!\nPlease see the 3.x to 4.x migration guide for details on how to update your app.');
    }
  });
};

/**
 * lazily adds the base router if it has not yet been added.
 *
 * We cannot add the base router in the defaultConfiguration because
 * it reads app settings which might be set after that has run.
 *
 * @private
 */
app.lazyrouter = function lazyrouter() {
  if (!this._router) {
    this._router = new Router({
      caseSensitive: this.enabled('case sensitive routing'),
      strict: this.enabled('strict routing')
    });

    this._router.use(query(this.get('query parser fn')));
    this._router.use(middleware.init(this));
  }
};

/**
 * Dispatch a req, res pair into the application. Starts pipeline processing.
 *
 * If no callback is provided, then default error handlers will respond
 * in the event of an error bubbling through the stack.
 *
 * @private
 */

app.handle = function handle(req, res, callback) {
  var router = this._router;

  // final handler
  var done = callback || finalhandler(req, res, {
    env: this.get('env'),
    onerror: logerror.bind(this)
  });

  // no routes
  if (!router) {
    debug('no routes defined on app');
    done();
    return;
  }

  router.handle(req, res, done);
};

/**
 * Proxy `Router#use()` to add middleware to the app router.
 * See Router#use() documentation for details.
 *
 * If the _fn_ parameter is an express app, then it will be
 * mounted at the _route_ specified.
 *
 * @public
 */

app.use = function use(fn) {
  var offset = 0;
  var path = '/';

  // default path to '/'
  // disambiguate app.use([fn])
  if (typeof fn !== 'function') {
    var arg = fn;

    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0];
    }

    // first arg is the path
    if (typeof arg !== 'function') {
      offset = 1;
      path = fn;
    }
  }

  var fns = flatten(slice.call(arguments, offset));

  if (fns.length === 0) {
    throw new TypeError('app.use() requires a middleware function')
  }

  // setup router
  this.lazyrouter();
  var router = this._router;

  fns.forEach(function (fn) {
    // non-express app
    if (!fn || !fn.handle || !fn.set) {
      return router.use(path, fn);
    }

    debug('.use app under %s', path);
    fn.mountpath = path;
    fn.parent = this;

    // restore .app property on req and res
    router.use(path, function mounted_app(req, res, next) {
      var orig = req.app;
      fn.handle(req, res, function (err) {
        setPrototypeOf(req, orig.request)
        setPrototypeOf(res, orig.response)
        next(err);
      });
    });

    // mounted an app
    fn.emit('mount', this);
  }, this);

  return this;
};

/**
 * Proxy to the app `Router#route()`
 * Returns a new `Route` instance for the _path_.
 *
 * Routes are isolated middleware stacks for specific paths.
 * See the Route api docs for details.
 *
 * @public
 */

app.route = function route(path) {
  this.lazyrouter();
  return this._router.route(path);
};

/**
 * Register the given template engine callback `fn`
 * as `ext`.
 *
 * By default will `require()` the engine based on the
 * file extension. For example if you try to render
 * a "foo.ejs" file Express will invoke the following internally:
 *
 *     app.engine('ejs', require('ejs').__express);
 *
 * For engines that do not provide `.__express` out of the box,
 * or if you wish to "map" a different extension to the template engine
 * you may use this method. For example mapping the EJS template engine to
 * ".html" files:
 *
 *     app.engine('html', require('ejs').renderFile);
 *
 * In this case EJS provides a `.renderFile()` method with
 * the same signature that Express expects: `(path, options, callback)`,
 * though note that it aliases this method as `ejs.__express` internally
 * so if you're using ".ejs" extensions you dont need to do anything.
 *
 * Some template engines do not follow this convention, the
 * [Consolidate.js](https://github.com/tj/consolidate.js)
 * library was created to map all of node's popular template
 * engines to follow this convention, thus allowing them to
 * work seamlessly within Express.
 *
 * @param {String} ext
 * @param {Function} fn
 * @return {app} for chaining
 * @public
 */

app.engine = function engine(ext, fn) {
  if (typeof fn !== 'function') {
    throw new Error('callback function required');
  }

  // get file extension
  var extension = ext[0] !== '.'
    ? '.' + ext
    : ext;

  // store engine
  this.engines[extension] = fn;

  return this;
};

/**
 * Proxy to `Router#param()` with one added api feature. The _name_ parameter
 * can be an array of names.
 *
 * See the Router#param() docs for more details.
 *
 * @param {String|Array} name
 * @param {Function} fn
 * @return {app} for chaining
 * @public
 */

app.param = function param(name, fn) {
  this.lazyrouter();

  if (Array.isArray(name)) {
    for (var i = 0; i < name.length; i++) {
      this.param(name[i], fn);
    }

    return this;
  }

  this._router.param(name, fn);

  return this;
};

/**
 * Assign `setting` to `val`, or return `setting`'s value.
 *
 *    app.set('foo', 'bar');
 *    app.set('foo');
 *    // => "bar"
 *
 * Mounted servers inherit their parent server's settings.
 *
 * @param {String} setting
 * @param {*} [val]
 * @return {Server} for chaining
 * @public
 */

app.set = function set(setting, val) {
  if (arguments.length === 1) {
    // app.get(setting)
    return this.settings[setting];
  }

  debug('set "%s" to %o', setting, val);

  // set value
  this.settings[setting] = val;

  // trigger matched settings
  switch (setting) {
    case 'etag':
      this.set('etag fn', compileETag(val));
      break;
    case 'query parser':
      this.set('query parser fn', compileQueryParser(val));
      break;
    case 'trust proxy':
      this.set('trust proxy fn', compileTrust(val));

      // trust proxy inherit back-compat
      Object.defineProperty(this.settings, trustProxyDefaultSymbol, {
        configurable: true,
        value: false
      });

      break;
  }

  return this;
};

/**
 * Return the app's absolute pathname
 * based on the parent(s) that have
 * mounted it.
 *
 * For example if the application was
 * mounted as "/admin", which itself
 * was mounted as "/blog" then the
 * return value would be "/blog/admin".
 *
 * @return {String}
 * @private
 */

app.path = function path() {
  return this.parent
    ? this.parent.path() + this.mountpath
    : '';
};

/**
 * Check if `setting` is enabled (truthy).
 *
 *    app.enabled('foo')
 *    // => false
 *
 *    app.enable('foo')
 *    app.enabled('foo')
 *    // => true
 *
 * @param {String} setting
 * @return {Boolean}
 * @public
 */

app.enabled = function enabled(setting) {
  return Boolean(this.set(setting));
};

/**
 * Check if `setting` is disabled.
 *
 *    app.disabled('foo')
 *    // => true
 *
 *    app.enable('foo')
 *    app.disabled('foo')
 *    // => false
 *
 * @param {String} setting
 * @return {Boolean}
 * @public
 */

app.disabled = function disabled(setting) {
  return !this.set(setting);
};

/**
 * Enable `setting`.
 *
 * @param {String} setting
 * @return {app} for chaining
 * @public
 */

app.enable = function enable(setting) {
  return this.set(setting, true);
};

/**
 * Disable `setting`.
 *
 * @param {String} setting
 * @return {app} for chaining
 * @public
 */

app.disable = function disable(setting) {
  return this.set(setting, false);
};

/**
 * Delegate `.VERB(...)` calls to `router.VERB(...)`.
 */

methods.forEach(function(method){
  app[method] = function(path){
    if (method === 'get' && arguments.length === 1) {
      // app.get(setting)
      return this.set(path);
    }

    this.lazyrouter();

    var route = this._router.route(path);
    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});

/**
 * Special-cased "all" method, applying the given route `path`,
 * middleware, and callback to _every_ HTTP method.
 *
 * @param {String} path
 * @param {Function} ...
 * @return {app} for chaining
 * @public
 */

app.all = function all(path) {
  this.lazyrouter();

  var route = this._router.route(path);
  var args = slice.call(arguments, 1);

  for (var i = 0; i < methods.length; i++) {
    route[methods[i]].apply(route, args);
  }

  return this;
};

// del -> delete alias

app.del = deprecate.function(app.delete, 'app.del: Use app.delete instead');

/**
 * Render the given view `name` name with `options`
 * and a callback accepting an error and the
 * rendered template string.
 *
 * Example:
 *
 *    app.render('email', { name: 'Tobi' }, function(err, html){
 *      // ...
 *    })
 *
 * @param {String} name
 * @param {Object|Function} options or fn
 * @param {Function} callback
 * @public
 */

app.render = function render(name, options, callback) {
  var cache = this.cache;
  var done = callback;
  var engines = this.engines;
  var opts = options;
  var renderOptions = {};
  var view;

  // support callback function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  // merge app.locals
  merge(renderOptions, this.locals);

  // merge options._locals
  if (opts._locals) {
    merge(renderOptions, opts._locals);
  }

  // merge options
  merge(renderOptions, opts);

  // set .cache unless explicitly provided
  if (renderOptions.cache == null) {
    renderOptions.cache = this.enabled('view cache');
  }

  // primed cache
  if (renderOptions.cache) {
    view = cache[name];
  }

  // view
  if (!view) {
    var View = this.get('view');

    view = new View(name, {
      defaultEngine: this.get('view engine'),
      root: this.get('views'),
      engines: engines
    });

    if (!view.path) {
      var dirs = Array.isArray(view.root) && view.root.length > 1
        ? 'directories "' + view.root.slice(0, -1).join('", "') + '" or "' + view.root[view.root.length - 1] + '"'
        : 'directory "' + view.root + '"'
      var err = new Error('Failed to lookup view "' + name + '" in views ' + dirs);
      err.view = view;
      return done(err);
    }

    // prime the cache
    if (renderOptions.cache) {
      cache[name] = view;
    }
  }

  // render
  tryRender(view, renderOptions, done);
};

/**
 * Listen for connections.
 *
 * A node `http.Server` is returned, with this
 * application (which is a `Function`) as its
 * callback. If you wish to create both an HTTP
 * and HTTPS server you may do so with the "http"
 * and "https" modules as shown here:
 *
 *    var http = require('http')
 *      , https = require('https')
 *      , express = require('express')
 *      , app = express();
 *
 *    http.createServer(app).listen(80);
 *    https.createServer({ ... }, app).listen(443);
 *
 * @return {http.Server}
 * @public
 */

app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

/**
 * Log error using console.error.
 *
 * @param {Error} err
 * @private
 */

function logerror(err) {
  /* istanbul ignore next */
  if (this.get('env') !== 'test') console.error(err.stack || err.toString());
}

/**
 * Try rendering a view.
 * @private
 */

function tryRender(view, options, callback) {
  try {
    view.render(options, callback);
  } catch (err) {
    callback(err);
  }
}


/***/ }),

/***/ "../../../node_modules/express/lib/express.js":
/*!****************************************************!*\
  !*** ../../../node_modules/express/lib/express.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 */

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser")
var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
var mixin = __webpack_require__(/*! merge-descriptors */ "merge-descriptors");
var proto = __webpack_require__(/*! ./application */ "../../../node_modules/express/lib/application.js");
var Route = __webpack_require__(/*! ./router/route */ "../../../node_modules/express/lib/router/route.js");
var Router = __webpack_require__(/*! ./router */ "../../../node_modules/express/lib/router/index.js");
var req = __webpack_require__(/*! ./request */ "../../../node_modules/express/lib/request.js");
var res = __webpack_require__(/*! ./response */ "../../../node_modules/express/lib/response.js");

/**
 * Expose `createApplication()`.
 */

exports = module.exports = createApplication;

/**
 * Create an express application.
 *
 * @return {Function}
 * @api public
 */

function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next);
  };

  mixin(app, EventEmitter.prototype, false);
  mixin(app, proto, false);

  // expose the prototype that will get set on requests
  app.request = Object.create(req, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })

  // expose the prototype that will get set on responses
  app.response = Object.create(res, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })

  app.init();
  return app;
}

/**
 * Expose the prototypes.
 */

exports.application = proto;
exports.request = req;
exports.response = res;

/**
 * Expose constructors.
 */

exports.Route = Route;
exports.Router = Router;

/**
 * Expose middleware
 */

exports.json = bodyParser.json
exports.query = __webpack_require__(/*! ./middleware/query */ "../../../node_modules/express/lib/middleware/query.js");
exports.raw = bodyParser.raw
exports.static = __webpack_require__(/*! serve-static */ "serve-static");
exports.text = bodyParser.text
exports.urlencoded = bodyParser.urlencoded

/**
 * Replace removed middleware with an appropriate error message.
 */

var removedMiddlewares = [
  'bodyParser',
  'compress',
  'cookieSession',
  'session',
  'logger',
  'cookieParser',
  'favicon',
  'responseTime',
  'errorHandler',
  'timeout',
  'methodOverride',
  'vhost',
  'csrf',
  'directory',
  'limit',
  'multipart',
  'staticCache'
]

removedMiddlewares.forEach(function (name) {
  Object.defineProperty(exports, name, {
    get: function () {
      throw new Error('Most middleware (like ' + name + ') is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.');
    },
    configurable: true
  });
});


/***/ }),

/***/ "../../../node_modules/express/lib/middleware/init.js":
/*!************************************************************!*\
  !*** ../../../node_modules/express/lib/middleware/init.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "setprototypeof")

/**
 * Initialization middleware, exposing the
 * request and response to each other, as well
 * as defaulting the X-Powered-By header field.
 *
 * @param {Function} app
 * @return {Function}
 * @api private
 */

exports.init = function(app){
  return function expressInit(req, res, next){
    if (app.enabled('x-powered-by')) res.setHeader('X-Powered-By', 'Express');
    req.res = res;
    res.req = req;
    req.next = next;

    setPrototypeOf(req, app.request)
    setPrototypeOf(res, app.response)

    res.locals = res.locals || Object.create(null);

    next();
  };
};



/***/ }),

/***/ "../../../node_modules/express/lib/middleware/query.js":
/*!*************************************************************!*\
  !*** ../../../node_modules/express/lib/middleware/query.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 */

var merge = __webpack_require__(/*! utils-merge */ "utils-merge")
var parseUrl = __webpack_require__(/*! parseurl */ "parseurl");
var qs = __webpack_require__(/*! qs */ "qs");

/**
 * @param {Object} options
 * @return {Function}
 * @api public
 */

module.exports = function query(options) {
  var opts = merge({}, options)
  var queryparse = qs.parse;

  if (typeof options === 'function') {
    queryparse = options;
    opts = undefined;
  }

  if (opts !== undefined && opts.allowPrototypes === undefined) {
    // back-compat for qs module
    opts.allowPrototypes = true;
  }

  return function query(req, res, next){
    if (!req.query) {
      var val = parseUrl(req).query;
      req.query = queryparse(val, opts);
    }

    next();
  };
};


/***/ }),

/***/ "../../../node_modules/express/lib/request.js":
/*!****************************************************!*\
  !*** ../../../node_modules/express/lib/request.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var accepts = __webpack_require__(/*! accepts */ "accepts");
var deprecate = __webpack_require__(/*! depd */ "depd")('express');
var isIP = __webpack_require__(/*! net */ "net").isIP;
var typeis = __webpack_require__(/*! type-is */ "type-is");
var http = __webpack_require__(/*! http */ "http");
var fresh = __webpack_require__(/*! fresh */ "fresh");
var parseRange = __webpack_require__(/*! range-parser */ "range-parser");
var parse = __webpack_require__(/*! parseurl */ "parseurl");
var proxyaddr = __webpack_require__(/*! proxy-addr */ "proxy-addr");

/**
 * Request prototype.
 * @public
 */

var req = Object.create(http.IncomingMessage.prototype)

/**
 * Module exports.
 * @public
 */

module.exports = req

/**
 * Return request header.
 *
 * The `Referrer` header field is special-cased,
 * both `Referrer` and `Referer` are interchangeable.
 *
 * Examples:
 *
 *     req.get('Content-Type');
 *     // => "text/plain"
 *
 *     req.get('content-type');
 *     // => "text/plain"
 *
 *     req.get('Something');
 *     // => undefined
 *
 * Aliased as `req.header()`.
 *
 * @param {String} name
 * @return {String}
 * @public
 */

req.get =
req.header = function header(name) {
  if (!name) {
    throw new TypeError('name argument is required to req.get');
  }

  if (typeof name !== 'string') {
    throw new TypeError('name must be a string to req.get');
  }

  var lc = name.toLowerCase();

  switch (lc) {
    case 'referer':
    case 'referrer':
      return this.headers.referrer
        || this.headers.referer;
    default:
      return this.headers[lc];
  }
};

/**
 * To do: update docs.
 *
 * Check if the given `type(s)` is acceptable, returning
 * the best match when true, otherwise `undefined`, in which
 * case you should respond with 406 "Not Acceptable".
 *
 * The `type` value may be a single MIME type string
 * such as "application/json", an extension name
 * such as "json", a comma-delimited list such as "json, html, text/plain",
 * an argument list such as `"json", "html", "text/plain"`,
 * or an array `["json", "html", "text/plain"]`. When a list
 * or array is given, the _best_ match, if any is returned.
 *
 * Examples:
 *
 *     // Accept: text/html
 *     req.accepts('html');
 *     // => "html"
 *
 *     // Accept: text/*, application/json
 *     req.accepts('html');
 *     // => "html"
 *     req.accepts('text/html');
 *     // => "text/html"
 *     req.accepts('json, text');
 *     // => "json"
 *     req.accepts('application/json');
 *     // => "application/json"
 *
 *     // Accept: text/*, application/json
 *     req.accepts('image/png');
 *     req.accepts('png');
 *     // => undefined
 *
 *     // Accept: text/*;q=.5, application/json
 *     req.accepts(['html', 'json']);
 *     req.accepts('html', 'json');
 *     req.accepts('html, json');
 *     // => "json"
 *
 * @param {String|Array} type(s)
 * @return {String|Array|Boolean}
 * @public
 */

req.accepts = function(){
  var accept = accepts(this);
  return accept.types.apply(accept, arguments);
};

/**
 * Check if the given `encoding`s are accepted.
 *
 * @param {String} ...encoding
 * @return {String|Array}
 * @public
 */

req.acceptsEncodings = function(){
  var accept = accepts(this);
  return accept.encodings.apply(accept, arguments);
};

req.acceptsEncoding = deprecate.function(req.acceptsEncodings,
  'req.acceptsEncoding: Use acceptsEncodings instead');

/**
 * Check if the given `charset`s are acceptable,
 * otherwise you should respond with 406 "Not Acceptable".
 *
 * @param {String} ...charset
 * @return {String|Array}
 * @public
 */

req.acceptsCharsets = function(){
  var accept = accepts(this);
  return accept.charsets.apply(accept, arguments);
};

req.acceptsCharset = deprecate.function(req.acceptsCharsets,
  'req.acceptsCharset: Use acceptsCharsets instead');

/**
 * Check if the given `lang`s are acceptable,
 * otherwise you should respond with 406 "Not Acceptable".
 *
 * @param {String} ...lang
 * @return {String|Array}
 * @public
 */

req.acceptsLanguages = function(){
  var accept = accepts(this);
  return accept.languages.apply(accept, arguments);
};

req.acceptsLanguage = deprecate.function(req.acceptsLanguages,
  'req.acceptsLanguage: Use acceptsLanguages instead');

/**
 * Parse Range header field, capping to the given `size`.
 *
 * Unspecified ranges such as "0-" require knowledge of your resource length. In
 * the case of a byte range this is of course the total number of bytes. If the
 * Range header field is not given `undefined` is returned, `-1` when unsatisfiable,
 * and `-2` when syntactically invalid.
 *
 * When ranges are returned, the array has a "type" property which is the type of
 * range that is required (most commonly, "bytes"). Each array element is an object
 * with a "start" and "end" property for the portion of the range.
 *
 * The "combine" option can be set to `true` and overlapping & adjacent ranges
 * will be combined into a single range.
 *
 * NOTE: remember that ranges are inclusive, so for example "Range: users=0-3"
 * should respond with 4 users when available, not 3.
 *
 * @param {number} size
 * @param {object} [options]
 * @param {boolean} [options.combine=false]
 * @return {number|array}
 * @public
 */

req.range = function range(size, options) {
  var range = this.get('Range');
  if (!range) return;
  return parseRange(size, range, options);
};

/**
 * Return the value of param `name` when present or `defaultValue`.
 *
 *  - Checks route placeholders, ex: _/user/:id_
 *  - Checks body params, ex: id=12, {"id":12}
 *  - Checks query string params, ex: ?id=12
 *
 * To utilize request bodies, `req.body`
 * should be an object. This can be done by using
 * the `bodyParser()` middleware.
 *
 * @param {String} name
 * @param {Mixed} [defaultValue]
 * @return {String}
 * @public
 */

req.param = function param(name, defaultValue) {
  var params = this.params || {};
  var body = this.body || {};
  var query = this.query || {};

  var args = arguments.length === 1
    ? 'name'
    : 'name, default';
  deprecate('req.param(' + args + '): Use req.params, req.body, or req.query instead');

  if (null != params[name] && params.hasOwnProperty(name)) return params[name];
  if (null != body[name]) return body[name];
  if (null != query[name]) return query[name];

  return defaultValue;
};

/**
 * Check if the incoming request contains the "Content-Type"
 * header field, and it contains the give mime `type`.
 *
 * Examples:
 *
 *      // With Content-Type: text/html; charset=utf-8
 *      req.is('html');
 *      req.is('text/html');
 *      req.is('text/*');
 *      // => true
 *
 *      // When Content-Type is application/json
 *      req.is('json');
 *      req.is('application/json');
 *      req.is('application/*');
 *      // => true
 *
 *      req.is('html');
 *      // => false
 *
 * @param {String|Array} types...
 * @return {String|false|null}
 * @public
 */

req.is = function is(types) {
  var arr = types;

  // support flattened arguments
  if (!Array.isArray(types)) {
    arr = new Array(arguments.length);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arguments[i];
    }
  }

  return typeis(this, arr);
};

/**
 * Return the protocol string "http" or "https"
 * when requested with TLS. When the "trust proxy"
 * setting trusts the socket address, the
 * "X-Forwarded-Proto" header field will be trusted
 * and used if present.
 *
 * If you're running behind a reverse proxy that
 * supplies https for you this may be enabled.
 *
 * @return {String}
 * @public
 */

defineGetter(req, 'protocol', function protocol(){
  var proto = this.connection.encrypted
    ? 'https'
    : 'http';
  var trust = this.app.get('trust proxy fn');

  if (!trust(this.connection.remoteAddress, 0)) {
    return proto;
  }

  // Note: X-Forwarded-Proto is normally only ever a
  //       single value, but this is to be safe.
  var header = this.get('X-Forwarded-Proto') || proto
  var index = header.indexOf(',')

  return index !== -1
    ? header.substring(0, index).trim()
    : header.trim()
});

/**
 * Short-hand for:
 *
 *    req.protocol === 'https'
 *
 * @return {Boolean}
 * @public
 */

defineGetter(req, 'secure', function secure(){
  return this.protocol === 'https';
});

/**
 * Return the remote address from the trusted proxy.
 *
 * The is the remote address on the socket unless
 * "trust proxy" is set.
 *
 * @return {String}
 * @public
 */

defineGetter(req, 'ip', function ip(){
  var trust = this.app.get('trust proxy fn');
  return proxyaddr(this, trust);
});

/**
 * When "trust proxy" is set, trusted proxy addresses + client.
 *
 * For example if the value were "client, proxy1, proxy2"
 * you would receive the array `["client", "proxy1", "proxy2"]`
 * where "proxy2" is the furthest down-stream and "proxy1" and
 * "proxy2" were trusted.
 *
 * @return {Array}
 * @public
 */

defineGetter(req, 'ips', function ips() {
  var trust = this.app.get('trust proxy fn');
  var addrs = proxyaddr.all(this, trust);

  // reverse the order (to farthest -> closest)
  // and remove socket address
  addrs.reverse().pop()

  return addrs
});

/**
 * Return subdomains as an array.
 *
 * Subdomains are the dot-separated parts of the host before the main domain of
 * the app. By default, the domain of the app is assumed to be the last two
 * parts of the host. This can be changed by setting "subdomain offset".
 *
 * For example, if the domain is "tobi.ferrets.example.com":
 * If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
 * If "subdomain offset" is 3, req.subdomains is `["tobi"]`.
 *
 * @return {Array}
 * @public
 */

defineGetter(req, 'subdomains', function subdomains() {
  var hostname = this.hostname;

  if (!hostname) return [];

  var offset = this.app.get('subdomain offset');
  var subdomains = !isIP(hostname)
    ? hostname.split('.').reverse()
    : [hostname];

  return subdomains.slice(offset);
});

/**
 * Short-hand for `url.parse(req.url).pathname`.
 *
 * @return {String}
 * @public
 */

defineGetter(req, 'path', function path() {
  return parse(this).pathname;
});

/**
 * Parse the "Host" header field to a hostname.
 *
 * When the "trust proxy" setting trusts the socket
 * address, the "X-Forwarded-Host" header field will
 * be trusted.
 *
 * @return {String}
 * @public
 */

defineGetter(req, 'hostname', function hostname(){
  var trust = this.app.get('trust proxy fn');
  var host = this.get('X-Forwarded-Host');

  if (!host || !trust(this.connection.remoteAddress, 0)) {
    host = this.get('Host');
  } else if (host.indexOf(',') !== -1) {
    // Note: X-Forwarded-Host is normally only ever a
    //       single value, but this is to be safe.
    host = host.substring(0, host.indexOf(',')).trimRight()
  }

  if (!host) return;

  // IPv6 literal support
  var offset = host[0] === '['
    ? host.indexOf(']') + 1
    : 0;
  var index = host.indexOf(':', offset);

  return index !== -1
    ? host.substring(0, index)
    : host;
});

// TODO: change req.host to return host in next major

defineGetter(req, 'host', deprecate.function(function host(){
  return this.hostname;
}, 'req.host: Use req.hostname instead'));

/**
 * Check if the request is fresh, aka
 * Last-Modified and/or the ETag
 * still match.
 *
 * @return {Boolean}
 * @public
 */

defineGetter(req, 'fresh', function(){
  var method = this.method;
  var res = this.res
  var status = res.statusCode

  // GET or HEAD for weak freshness validation only
  if ('GET' !== method && 'HEAD' !== method) return false;

  // 2xx or 304 as per rfc2616 14.26
  if ((status >= 200 && status < 300) || 304 === status) {
    return fresh(this.headers, {
      'etag': res.get('ETag'),
      'last-modified': res.get('Last-Modified')
    })
  }

  return false;
});

/**
 * Check if the request is stale, aka
 * "Last-Modified" and / or the "ETag" for the
 * resource has changed.
 *
 * @return {Boolean}
 * @public
 */

defineGetter(req, 'stale', function stale(){
  return !this.fresh;
});

/**
 * Check if the request was an _XMLHttpRequest_.
 *
 * @return {Boolean}
 * @public
 */

defineGetter(req, 'xhr', function xhr(){
  var val = this.get('X-Requested-With') || '';
  return val.toLowerCase() === 'xmlhttprequest';
});

/**
 * Helper function for creating a getter on an object.
 *
 * @param {Object} obj
 * @param {String} name
 * @param {Function} getter
 * @private
 */
function defineGetter(obj, name, getter) {
  Object.defineProperty(obj, name, {
    configurable: true,
    enumerable: true,
    get: getter
  });
}


/***/ }),

/***/ "../../../node_modules/express/lib/response.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/express/lib/response.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var Buffer = __webpack_require__(/*! safe-buffer */ "safe-buffer").Buffer
var contentDisposition = __webpack_require__(/*! content-disposition */ "content-disposition");
var deprecate = __webpack_require__(/*! depd */ "depd")('express');
var encodeUrl = __webpack_require__(/*! encodeurl */ "encodeurl");
var escapeHtml = __webpack_require__(/*! escape-html */ "escape-html");
var http = __webpack_require__(/*! http */ "http");
var isAbsolute = __webpack_require__(/*! ./utils */ "../../../node_modules/express/lib/utils.js").isAbsolute;
var onFinished = __webpack_require__(/*! on-finished */ "on-finished");
var path = __webpack_require__(/*! path */ "path");
var statuses = __webpack_require__(/*! statuses */ "statuses")
var merge = __webpack_require__(/*! utils-merge */ "utils-merge");
var sign = __webpack_require__(/*! cookie-signature */ "cookie-signature").sign;
var normalizeType = __webpack_require__(/*! ./utils */ "../../../node_modules/express/lib/utils.js").normalizeType;
var normalizeTypes = __webpack_require__(/*! ./utils */ "../../../node_modules/express/lib/utils.js").normalizeTypes;
var setCharset = __webpack_require__(/*! ./utils */ "../../../node_modules/express/lib/utils.js").setCharset;
var cookie = __webpack_require__(/*! cookie */ "cookie");
var send = __webpack_require__(/*! send */ "send");
var extname = path.extname;
var mime = send.mime;
var resolve = path.resolve;
var vary = __webpack_require__(/*! vary */ "vary");

/**
 * Response prototype.
 * @public
 */

var res = Object.create(http.ServerResponse.prototype)

/**
 * Module exports.
 * @public
 */

module.exports = res

/**
 * Module variables.
 * @private
 */

var charsetRegExp = /;\s*charset\s*=/;

/**
 * Set status `code`.
 *
 * @param {Number} code
 * @return {ServerResponse}
 * @public
 */

res.status = function status(code) {
  this.statusCode = code;
  return this;
};

/**
 * Set Link header field with the given `links`.
 *
 * Examples:
 *
 *    res.links({
 *      next: 'http://api.example.com/users?page=2',
 *      last: 'http://api.example.com/users?page=5'
 *    });
 *
 * @param {Object} links
 * @return {ServerResponse}
 * @public
 */

res.links = function(links){
  var link = this.get('Link') || '';
  if (link) link += ', ';
  return this.set('Link', link + Object.keys(links).map(function(rel){
    return '<' + links[rel] + '>; rel="' + rel + '"';
  }).join(', '));
};

/**
 * Send a response.
 *
 * Examples:
 *
 *     res.send(Buffer.from('wahoo'));
 *     res.send({ some: 'json' });
 *     res.send('<p>some html</p>');
 *
 * @param {string|number|boolean|object|Buffer} body
 * @public
 */

res.send = function send(body) {
  var chunk = body;
  var encoding;
  var req = this.req;
  var type;

  // settings
  var app = this.app;

  // allow status / body
  if (arguments.length === 2) {
    // res.send(body, status) backwards compat
    if (typeof arguments[0] !== 'number' && typeof arguments[1] === 'number') {
      deprecate('res.send(body, status): Use res.status(status).send(body) instead');
      this.statusCode = arguments[1];
    } else {
      deprecate('res.send(status, body): Use res.status(status).send(body) instead');
      this.statusCode = arguments[0];
      chunk = arguments[1];
    }
  }

  // disambiguate res.send(status) and res.send(status, num)
  if (typeof chunk === 'number' && arguments.length === 1) {
    // res.send(status) will set status message as text string
    if (!this.get('Content-Type')) {
      this.type('txt');
    }

    deprecate('res.send(status): Use res.sendStatus(status) instead');
    this.statusCode = chunk;
    chunk = statuses[chunk]
  }

  switch (typeof chunk) {
    // string defaulting to html
    case 'string':
      if (!this.get('Content-Type')) {
        this.type('html');
      }
      break;
    case 'boolean':
    case 'number':
    case 'object':
      if (chunk === null) {
        chunk = '';
      } else if (Buffer.isBuffer(chunk)) {
        if (!this.get('Content-Type')) {
          this.type('bin');
        }
      } else {
        return this.json(chunk);
      }
      break;
  }

  // write strings in utf-8
  if (typeof chunk === 'string') {
    encoding = 'utf8';
    type = this.get('Content-Type');

    // reflect this in content-type
    if (typeof type === 'string') {
      this.set('Content-Type', setCharset(type, 'utf-8'));
    }
  }

  // determine if ETag should be generated
  var etagFn = app.get('etag fn')
  var generateETag = !this.get('ETag') && typeof etagFn === 'function'

  // populate Content-Length
  var len
  if (chunk !== undefined) {
    if (Buffer.isBuffer(chunk)) {
      // get length of Buffer
      len = chunk.length
    } else if (!generateETag && chunk.length < 1000) {
      // just calculate length when no ETag + small chunk
      len = Buffer.byteLength(chunk, encoding)
    } else {
      // convert chunk to Buffer and calculate
      chunk = Buffer.from(chunk, encoding)
      encoding = undefined;
      len = chunk.length
    }

    this.set('Content-Length', len);
  }

  // populate ETag
  var etag;
  if (generateETag && len !== undefined) {
    if ((etag = etagFn(chunk, encoding))) {
      this.set('ETag', etag);
    }
  }

  // freshness
  if (req.fresh) this.statusCode = 304;

  // strip irrelevant headers
  if (204 === this.statusCode || 304 === this.statusCode) {
    this.removeHeader('Content-Type');
    this.removeHeader('Content-Length');
    this.removeHeader('Transfer-Encoding');
    chunk = '';
  }

  if (req.method === 'HEAD') {
    // skip body for HEAD
    this.end();
  } else {
    // respond
    this.end(chunk, encoding);
  }

  return this;
};

/**
 * Send JSON response.
 *
 * Examples:
 *
 *     res.json(null);
 *     res.json({ user: 'tj' });
 *
 * @param {string|number|boolean|object} obj
 * @public
 */

res.json = function json(obj) {
  var val = obj;

  // allow status / body
  if (arguments.length === 2) {
    // res.json(body, status) backwards compat
    if (typeof arguments[1] === 'number') {
      deprecate('res.json(obj, status): Use res.status(status).json(obj) instead');
      this.statusCode = arguments[1];
    } else {
      deprecate('res.json(status, obj): Use res.status(status).json(obj) instead');
      this.statusCode = arguments[0];
      val = arguments[1];
    }
  }

  // settings
  var app = this.app;
  var escape = app.get('json escape')
  var replacer = app.get('json replacer');
  var spaces = app.get('json spaces');
  var body = stringify(val, replacer, spaces, escape)

  // content-type
  if (!this.get('Content-Type')) {
    this.set('Content-Type', 'application/json');
  }

  return this.send(body);
};

/**
 * Send JSON response with JSONP callback support.
 *
 * Examples:
 *
 *     res.jsonp(null);
 *     res.jsonp({ user: 'tj' });
 *
 * @param {string|number|boolean|object} obj
 * @public
 */

res.jsonp = function jsonp(obj) {
  var val = obj;

  // allow status / body
  if (arguments.length === 2) {
    // res.json(body, status) backwards compat
    if (typeof arguments[1] === 'number') {
      deprecate('res.jsonp(obj, status): Use res.status(status).json(obj) instead');
      this.statusCode = arguments[1];
    } else {
      deprecate('res.jsonp(status, obj): Use res.status(status).jsonp(obj) instead');
      this.statusCode = arguments[0];
      val = arguments[1];
    }
  }

  // settings
  var app = this.app;
  var escape = app.get('json escape')
  var replacer = app.get('json replacer');
  var spaces = app.get('json spaces');
  var body = stringify(val, replacer, spaces, escape)
  var callback = this.req.query[app.get('jsonp callback name')];

  // content-type
  if (!this.get('Content-Type')) {
    this.set('X-Content-Type-Options', 'nosniff');
    this.set('Content-Type', 'application/json');
  }

  // fixup callback
  if (Array.isArray(callback)) {
    callback = callback[0];
  }

  // jsonp
  if (typeof callback === 'string' && callback.length !== 0) {
    this.set('X-Content-Type-Options', 'nosniff');
    this.set('Content-Type', 'text/javascript');

    // restrict callback charset
    callback = callback.replace(/[^\[\]\w$.]/g, '');

    // replace chars not allowed in JavaScript that are in JSON
    body = body
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');

    // the /**/ is a specific security mitigation for "Rosetta Flash JSONP abuse"
    // the typeof check is just to reduce client error noise
    body = '/**/ typeof ' + callback + ' === \'function\' && ' + callback + '(' + body + ');';
  }

  return this.send(body);
};

/**
 * Send given HTTP status code.
 *
 * Sets the response status to `statusCode` and the body of the
 * response to the standard description from node's http.STATUS_CODES
 * or the statusCode number if no description.
 *
 * Examples:
 *
 *     res.sendStatus(200);
 *
 * @param {number} statusCode
 * @public
 */

res.sendStatus = function sendStatus(statusCode) {
  var body = statuses[statusCode] || String(statusCode)

  this.statusCode = statusCode;
  this.type('txt');

  return this.send(body);
};

/**
 * Transfer the file at the given `path`.
 *
 * Automatically sets the _Content-Type_ response header field.
 * The callback `callback(err)` is invoked when the transfer is complete
 * or when an error occurs. Be sure to check `res.sentHeader`
 * if you wish to attempt responding, as the header and some data
 * may have already been transferred.
 *
 * Options:
 *
 *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
 *   - `root`     root directory for relative filenames
 *   - `headers`  object of headers to serve with file
 *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
 *
 * Other options are passed along to `send`.
 *
 * Examples:
 *
 *  The following example illustrates how `res.sendFile()` may
 *  be used as an alternative for the `static()` middleware for
 *  dynamic situations. The code backing `res.sendFile()` is actually
 *  the same code, so HTTP cache support etc is identical.
 *
 *     app.get('/user/:uid/photos/:file', function(req, res){
 *       var uid = req.params.uid
 *         , file = req.params.file;
 *
 *       req.user.mayViewFilesFrom(uid, function(yes){
 *         if (yes) {
 *           res.sendFile('/uploads/' + uid + '/' + file);
 *         } else {
 *           res.send(403, 'Sorry! you cant see that.');
 *         }
 *       });
 *     });
 *
 * @public
 */

res.sendFile = function sendFile(path, options, callback) {
  var done = callback;
  var req = this.req;
  var res = this;
  var next = req.next;
  var opts = options || {};

  if (!path) {
    throw new TypeError('path argument is required to res.sendFile');
  }

  if (typeof path !== 'string') {
    throw new TypeError('path must be a string to res.sendFile')
  }

  // support function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  if (!opts.root && !isAbsolute(path)) {
    throw new TypeError('path must be absolute or specify root to res.sendFile');
  }

  // create file stream
  var pathname = encodeURI(path);
  var file = send(req, pathname, opts);

  // transfer
  sendfile(res, file, opts, function (err) {
    if (done) return done(err);
    if (err && err.code === 'EISDIR') return next();

    // next() all but write errors
    if (err && err.code !== 'ECONNABORTED' && err.syscall !== 'write') {
      next(err);
    }
  });
};

/**
 * Transfer the file at the given `path`.
 *
 * Automatically sets the _Content-Type_ response header field.
 * The callback `callback(err)` is invoked when the transfer is complete
 * or when an error occurs. Be sure to check `res.sentHeader`
 * if you wish to attempt responding, as the header and some data
 * may have already been transferred.
 *
 * Options:
 *
 *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
 *   - `root`     root directory for relative filenames
 *   - `headers`  object of headers to serve with file
 *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
 *
 * Other options are passed along to `send`.
 *
 * Examples:
 *
 *  The following example illustrates how `res.sendfile()` may
 *  be used as an alternative for the `static()` middleware for
 *  dynamic situations. The code backing `res.sendfile()` is actually
 *  the same code, so HTTP cache support etc is identical.
 *
 *     app.get('/user/:uid/photos/:file', function(req, res){
 *       var uid = req.params.uid
 *         , file = req.params.file;
 *
 *       req.user.mayViewFilesFrom(uid, function(yes){
 *         if (yes) {
 *           res.sendfile('/uploads/' + uid + '/' + file);
 *         } else {
 *           res.send(403, 'Sorry! you cant see that.');
 *         }
 *       });
 *     });
 *
 * @public
 */

res.sendfile = function (path, options, callback) {
  var done = callback;
  var req = this.req;
  var res = this;
  var next = req.next;
  var opts = options || {};

  // support function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  // create file stream
  var file = send(req, path, opts);

  // transfer
  sendfile(res, file, opts, function (err) {
    if (done) return done(err);
    if (err && err.code === 'EISDIR') return next();

    // next() all but write errors
    if (err && err.code !== 'ECONNABORTED' && err.syscall !== 'write') {
      next(err);
    }
  });
};

res.sendfile = deprecate.function(res.sendfile,
  'res.sendfile: Use res.sendFile instead');

/**
 * Transfer the file at the given `path` as an attachment.
 *
 * Optionally providing an alternate attachment `filename`,
 * and optional callback `callback(err)`. The callback is invoked
 * when the data transfer is complete, or when an error has
 * ocurred. Be sure to check `res.headersSent` if you plan to respond.
 *
 * Optionally providing an `options` object to use with `res.sendFile()`.
 * This function will set the `Content-Disposition` header, overriding
 * any `Content-Disposition` header passed as header options in order
 * to set the attachment and filename.
 *
 * This method uses `res.sendFile()`.
 *
 * @public
 */

res.download = function download (path, filename, options, callback) {
  var done = callback;
  var name = filename;
  var opts = options || null

  // support function as second or third arg
  if (typeof filename === 'function') {
    done = filename;
    name = null;
    opts = null
  } else if (typeof options === 'function') {
    done = options
    opts = null
  }

  // set Content-Disposition when file is sent
  var headers = {
    'Content-Disposition': contentDisposition(name || path)
  };

  // merge user-provided headers
  if (opts && opts.headers) {
    var keys = Object.keys(opts.headers)
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      if (key.toLowerCase() !== 'content-disposition') {
        headers[key] = opts.headers[key]
      }
    }
  }

  // merge user-provided options
  opts = Object.create(opts)
  opts.headers = headers

  // Resolve the full path for sendFile
  var fullPath = resolve(path);

  // send file
  return this.sendFile(fullPath, opts, done)
};

/**
 * Set _Content-Type_ response header with `type` through `mime.lookup()`
 * when it does not contain "/", or set the Content-Type to `type` otherwise.
 *
 * Examples:
 *
 *     res.type('.html');
 *     res.type('html');
 *     res.type('json');
 *     res.type('application/json');
 *     res.type('png');
 *
 * @param {String} type
 * @return {ServerResponse} for chaining
 * @public
 */

res.contentType =
res.type = function contentType(type) {
  var ct = type.indexOf('/') === -1
    ? mime.lookup(type)
    : type;

  return this.set('Content-Type', ct);
};

/**
 * Respond to the Acceptable formats using an `obj`
 * of mime-type callbacks.
 *
 * This method uses `req.accepted`, an array of
 * acceptable types ordered by their quality values.
 * When "Accept" is not present the _first_ callback
 * is invoked, otherwise the first match is used. When
 * no match is performed the server responds with
 * 406 "Not Acceptable".
 *
 * Content-Type is set for you, however if you choose
 * you may alter this within the callback using `res.type()`
 * or `res.set('Content-Type', ...)`.
 *
 *    res.format({
 *      'text/plain': function(){
 *        res.send('hey');
 *      },
 *
 *      'text/html': function(){
 *        res.send('<p>hey</p>');
 *      },
 *
 *      'appliation/json': function(){
 *        res.send({ message: 'hey' });
 *      }
 *    });
 *
 * In addition to canonicalized MIME types you may
 * also use extnames mapped to these types:
 *
 *    res.format({
 *      text: function(){
 *        res.send('hey');
 *      },
 *
 *      html: function(){
 *        res.send('<p>hey</p>');
 *      },
 *
 *      json: function(){
 *        res.send({ message: 'hey' });
 *      }
 *    });
 *
 * By default Express passes an `Error`
 * with a `.status` of 406 to `next(err)`
 * if a match is not made. If you provide
 * a `.default` callback it will be invoked
 * instead.
 *
 * @param {Object} obj
 * @return {ServerResponse} for chaining
 * @public
 */

res.format = function(obj){
  var req = this.req;
  var next = req.next;

  var fn = obj.default;
  if (fn) delete obj.default;
  var keys = Object.keys(obj);

  var key = keys.length > 0
    ? req.accepts(keys)
    : false;

  this.vary("Accept");

  if (key) {
    this.set('Content-Type', normalizeType(key).value);
    obj[key](req, this, next);
  } else if (fn) {
    fn();
  } else {
    var err = new Error('Not Acceptable');
    err.status = err.statusCode = 406;
    err.types = normalizeTypes(keys).map(function(o){ return o.value });
    next(err);
  }

  return this;
};

/**
 * Set _Content-Disposition_ header to _attachment_ with optional `filename`.
 *
 * @param {String} filename
 * @return {ServerResponse}
 * @public
 */

res.attachment = function attachment(filename) {
  if (filename) {
    this.type(extname(filename));
  }

  this.set('Content-Disposition', contentDisposition(filename));

  return this;
};

/**
 * Append additional header `field` with value `val`.
 *
 * Example:
 *
 *    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
 *    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
 *    res.append('Warning', '199 Miscellaneous warning');
 *
 * @param {String} field
 * @param {String|Array} val
 * @return {ServerResponse} for chaining
 * @public
 */

res.append = function append(field, val) {
  var prev = this.get(field);
  var value = val;

  if (prev) {
    // concat the new and prev vals
    value = Array.isArray(prev) ? prev.concat(val)
      : Array.isArray(val) ? [prev].concat(val)
      : [prev, val];
  }

  return this.set(field, value);
};

/**
 * Set header `field` to `val`, or pass
 * an object of header fields.
 *
 * Examples:
 *
 *    res.set('Foo', ['bar', 'baz']);
 *    res.set('Accept', 'application/json');
 *    res.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
 *
 * Aliased as `res.header()`.
 *
 * @param {String|Object} field
 * @param {String|Array} val
 * @return {ServerResponse} for chaining
 * @public
 */

res.set =
res.header = function header(field, val) {
  if (arguments.length === 2) {
    var value = Array.isArray(val)
      ? val.map(String)
      : String(val);

    // add charset to content-type
    if (field.toLowerCase() === 'content-type') {
      if (Array.isArray(value)) {
        throw new TypeError('Content-Type cannot be set to an Array');
      }
      if (!charsetRegExp.test(value)) {
        var charset = mime.charsets.lookup(value.split(';')[0]);
        if (charset) value += '; charset=' + charset.toLowerCase();
      }
    }

    this.setHeader(field, value);
  } else {
    for (var key in field) {
      this.set(key, field[key]);
    }
  }
  return this;
};

/**
 * Get value for header `field`.
 *
 * @param {String} field
 * @return {String}
 * @public
 */

res.get = function(field){
  return this.getHeader(field);
};

/**
 * Clear cookie `name`.
 *
 * @param {String} name
 * @param {Object} [options]
 * @return {ServerResponse} for chaining
 * @public
 */

res.clearCookie = function clearCookie(name, options) {
  var opts = merge({ expires: new Date(1), path: '/' }, options);

  return this.cookie(name, '', opts);
};

/**
 * Set cookie `name` to `value`, with the given `options`.
 *
 * Options:
 *
 *    - `maxAge`   max-age in milliseconds, converted to `expires`
 *    - `signed`   sign the cookie
 *    - `path`     defaults to "/"
 *
 * Examples:
 *
 *    // "Remember Me" for 15 minutes
 *    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
 *
 *    // same as above
 *    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
 *
 * @param {String} name
 * @param {String|Object} value
 * @param {Object} [options]
 * @return {ServerResponse} for chaining
 * @public
 */

res.cookie = function (name, value, options) {
  var opts = merge({}, options);
  var secret = this.req.secret;
  var signed = opts.signed;

  if (signed && !secret) {
    throw new Error('cookieParser("secret") required for signed cookies');
  }

  var val = typeof value === 'object'
    ? 'j:' + JSON.stringify(value)
    : String(value);

  if (signed) {
    val = 's:' + sign(val, secret);
  }

  if ('maxAge' in opts) {
    opts.expires = new Date(Date.now() + opts.maxAge);
    opts.maxAge /= 1000;
  }

  if (opts.path == null) {
    opts.path = '/';
  }

  this.append('Set-Cookie', cookie.serialize(name, String(val), opts));

  return this;
};

/**
 * Set the location header to `url`.
 *
 * The given `url` can also be "back", which redirects
 * to the _Referrer_ or _Referer_ headers or "/".
 *
 * Examples:
 *
 *    res.location('/foo/bar').;
 *    res.location('http://example.com');
 *    res.location('../login');
 *
 * @param {String} url
 * @return {ServerResponse} for chaining
 * @public
 */

res.location = function location(url) {
  var loc = url;

  // "back" is an alias for the referrer
  if (url === 'back') {
    loc = this.req.get('Referrer') || '/';
  }

  // set location
  return this.set('Location', encodeUrl(loc));
};

/**
 * Redirect to the given `url` with optional response `status`
 * defaulting to 302.
 *
 * The resulting `url` is determined by `res.location()`, so
 * it will play nicely with mounted apps, relative paths,
 * `"back"` etc.
 *
 * Examples:
 *
 *    res.redirect('/foo/bar');
 *    res.redirect('http://example.com');
 *    res.redirect(301, 'http://example.com');
 *    res.redirect('../login'); // /blog/post/1 -> /blog/login
 *
 * @public
 */

res.redirect = function redirect(url) {
  var address = url;
  var body;
  var status = 302;

  // allow status / url
  if (arguments.length === 2) {
    if (typeof arguments[0] === 'number') {
      status = arguments[0];
      address = arguments[1];
    } else {
      deprecate('res.redirect(url, status): Use res.redirect(status, url) instead');
      status = arguments[1];
    }
  }

  // Set location header
  address = this.location(address).get('Location');

  // Support text/{plain,html} by default
  this.format({
    text: function(){
      body = statuses[status] + '. Redirecting to ' + address
    },

    html: function(){
      var u = escapeHtml(address);
      body = '<p>' + statuses[status] + '. Redirecting to <a href="' + u + '">' + u + '</a></p>'
    },

    default: function(){
      body = '';
    }
  });

  // Respond
  this.statusCode = status;
  this.set('Content-Length', Buffer.byteLength(body));

  if (this.req.method === 'HEAD') {
    this.end();
  } else {
    this.end(body);
  }
};

/**
 * Add `field` to Vary. If already present in the Vary set, then
 * this call is simply ignored.
 *
 * @param {Array|String} field
 * @return {ServerResponse} for chaining
 * @public
 */

res.vary = function(field){
  // checks for back-compat
  if (!field || (Array.isArray(field) && !field.length)) {
    deprecate('res.vary(): Provide a field name');
    return this;
  }

  vary(this, field);

  return this;
};

/**
 * Render `view` with the given `options` and optional callback `fn`.
 * When a callback function is given a response will _not_ be made
 * automatically, otherwise a response of _200_ and _text/html_ is given.
 *
 * Options:
 *
 *  - `cache`     boolean hinting to the engine it should cache
 *  - `filename`  filename of the view being rendered
 *
 * @public
 */

res.render = function render(view, options, callback) {
  var app = this.req.app;
  var done = callback;
  var opts = options || {};
  var req = this.req;
  var self = this;

  // support callback function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  // merge res.locals
  opts._locals = self.locals;

  // default callback to respond
  done = done || function (err, str) {
    if (err) return req.next(err);
    self.send(str);
  };

  // render
  app.render(view, opts, done);
};

// pipe the send file stream
function sendfile(res, file, options, callback) {
  var done = false;
  var streaming;

  // request aborted
  function onaborted() {
    if (done) return;
    done = true;

    var err = new Error('Request aborted');
    err.code = 'ECONNABORTED';
    callback(err);
  }

  // directory
  function ondirectory() {
    if (done) return;
    done = true;

    var err = new Error('EISDIR, read');
    err.code = 'EISDIR';
    callback(err);
  }

  // errors
  function onerror(err) {
    if (done) return;
    done = true;
    callback(err);
  }

  // ended
  function onend() {
    if (done) return;
    done = true;
    callback();
  }

  // file
  function onfile() {
    streaming = false;
  }

  // finished
  function onfinish(err) {
    if (err && err.code === 'ECONNRESET') return onaborted();
    if (err) return onerror(err);
    if (done) return;

    setImmediate(function () {
      if (streaming !== false && !done) {
        onaborted();
        return;
      }

      if (done) return;
      done = true;
      callback();
    });
  }

  // streaming
  function onstream() {
    streaming = true;
  }

  file.on('directory', ondirectory);
  file.on('end', onend);
  file.on('error', onerror);
  file.on('file', onfile);
  file.on('stream', onstream);
  onFinished(res, onfinish);

  if (options.headers) {
    // set headers on successful transfer
    file.on('headers', function headers(res) {
      var obj = options.headers;
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        res.setHeader(k, obj[k]);
      }
    });
  }

  // pipe
  file.pipe(res);
}

/**
 * Stringify JSON, like JSON.stringify, but v8 optimized, with the
 * ability to escape characters that can trigger HTML sniffing.
 *
 * @param {*} value
 * @param {function} replaces
 * @param {number} spaces
 * @param {boolean} escape
 * @returns {string}
 * @private
 */

function stringify (value, replacer, spaces, escape) {
  // v8 checks arguments.length for optimizing simple call
  // https://bugs.chromium.org/p/v8/issues/detail?id=4730
  var json = replacer || spaces
    ? JSON.stringify(value, replacer, spaces)
    : JSON.stringify(value);

  if (escape) {
    json = json.replace(/[<>&]/g, function (c) {
      switch (c.charCodeAt(0)) {
        case 0x3c:
          return '\\u003c'
        case 0x3e:
          return '\\u003e'
        case 0x26:
          return '\\u0026'
        /* istanbul ignore next: unreachable default */
        default:
          return c
      }
    })
  }

  return json
}


/***/ }),

/***/ "../../../node_modules/express/lib/router/index.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/express/lib/router/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var Route = __webpack_require__(/*! ./route */ "../../../node_modules/express/lib/router/route.js");
var Layer = __webpack_require__(/*! ./layer */ "../../../node_modules/express/lib/router/layer.js");
var methods = __webpack_require__(/*! methods */ "methods");
var mixin = __webpack_require__(/*! utils-merge */ "utils-merge");
var debug = __webpack_require__(/*! debug */ "debug")('express:router');
var deprecate = __webpack_require__(/*! depd */ "depd")('express');
var flatten = __webpack_require__(/*! array-flatten */ "array-flatten");
var parseUrl = __webpack_require__(/*! parseurl */ "parseurl");
var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "setprototypeof")

/**
 * Module variables.
 * @private
 */

var objectRegExp = /^\[object (\S+)\]$/;
var slice = Array.prototype.slice;
var toString = Object.prototype.toString;

/**
 * Initialize a new `Router` with the given `options`.
 *
 * @param {Object} [options]
 * @return {Router} which is an callable function
 * @public
 */

var proto = module.exports = function(options) {
  var opts = options || {};

  function router(req, res, next) {
    router.handle(req, res, next);
  }

  // mixin Router class functions
  setPrototypeOf(router, proto)

  router.params = {};
  router._params = [];
  router.caseSensitive = opts.caseSensitive;
  router.mergeParams = opts.mergeParams;
  router.strict = opts.strict;
  router.stack = [];

  return router;
};

/**
 * Map the given param placeholder `name`(s) to the given callback.
 *
 * Parameter mapping is used to provide pre-conditions to routes
 * which use normalized placeholders. For example a _:user_id_ parameter
 * could automatically load a user's information from the database without
 * any additional code,
 *
 * The callback uses the same signature as middleware, the only difference
 * being that the value of the placeholder is passed, in this case the _id_
 * of the user. Once the `next()` function is invoked, just like middleware
 * it will continue on to execute the route, or subsequent parameter functions.
 *
 * Just like in middleware, you must either respond to the request or call next
 * to avoid stalling the request.
 *
 *  app.param('user_id', function(req, res, next, id){
 *    User.find(id, function(err, user){
 *      if (err) {
 *        return next(err);
 *      } else if (!user) {
 *        return next(new Error('failed to load user'));
 *      }
 *      req.user = user;
 *      next();
 *    });
 *  });
 *
 * @param {String} name
 * @param {Function} fn
 * @return {app} for chaining
 * @public
 */

proto.param = function param(name, fn) {
  // param logic
  if (typeof name === 'function') {
    deprecate('router.param(fn): Refactor to use path params');
    this._params.push(name);
    return;
  }

  // apply param functions
  var params = this._params;
  var len = params.length;
  var ret;

  if (name[0] === ':') {
    deprecate('router.param(' + JSON.stringify(name) + ', fn): Use router.param(' + JSON.stringify(name.substr(1)) + ', fn) instead');
    name = name.substr(1);
  }

  for (var i = 0; i < len; ++i) {
    if (ret = params[i](name, fn)) {
      fn = ret;
    }
  }

  // ensure we end up with a
  // middleware function
  if ('function' !== typeof fn) {
    throw new Error('invalid param() call for ' + name + ', got ' + fn);
  }

  (this.params[name] = this.params[name] || []).push(fn);
  return this;
};

/**
 * Dispatch a req, res into the router.
 * @private
 */

proto.handle = function handle(req, res, out) {
  var self = this;

  debug('dispatching %s %s', req.method, req.url);

  var idx = 0;
  var protohost = getProtohost(req.url) || ''
  var removed = '';
  var slashAdded = false;
  var paramcalled = {};

  // store options for OPTIONS request
  // only used if OPTIONS request
  var options = [];

  // middleware and routes
  var stack = self.stack;

  // manage inter-router variables
  var parentParams = req.params;
  var parentUrl = req.baseUrl || '';
  var done = restore(out, req, 'baseUrl', 'next', 'params');

  // setup next layer
  req.next = next;

  // for options requests, respond with a default if nothing else responds
  if (req.method === 'OPTIONS') {
    done = wrap(done, function(old, err) {
      if (err || options.length === 0) return old(err);
      sendOptionsResponse(res, options, old);
    });
  }

  // setup basic req values
  req.baseUrl = parentUrl;
  req.originalUrl = req.originalUrl || req.url;

  next();

  function next(err) {
    var layerError = err === 'route'
      ? null
      : err;

    // remove added slash
    if (slashAdded) {
      req.url = req.url.substr(1);
      slashAdded = false;
    }

    // restore altered req.url
    if (removed.length !== 0) {
      req.baseUrl = parentUrl;
      req.url = protohost + removed + req.url.substr(protohost.length);
      removed = '';
    }

    // signal to exit router
    if (layerError === 'router') {
      setImmediate(done, null)
      return
    }

    // no more matching layers
    if (idx >= stack.length) {
      setImmediate(done, layerError);
      return;
    }

    // get pathname of request
    var path = getPathname(req);

    if (path == null) {
      return done(layerError);
    }

    // find next matching layer
    var layer;
    var match;
    var route;

    while (match !== true && idx < stack.length) {
      layer = stack[idx++];
      match = matchLayer(layer, path);
      route = layer.route;

      if (typeof match !== 'boolean') {
        // hold on to layerError
        layerError = layerError || match;
      }

      if (match !== true) {
        continue;
      }

      if (!route) {
        // process non-route handlers normally
        continue;
      }

      if (layerError) {
        // routes do not match with a pending error
        match = false;
        continue;
      }

      var method = req.method;
      var has_method = route._handles_method(method);

      // build up automatic options response
      if (!has_method && method === 'OPTIONS') {
        appendMethods(options, route._options());
      }

      // don't even bother matching route
      if (!has_method && method !== 'HEAD') {
        match = false;
        continue;
      }
    }

    // no match
    if (match !== true) {
      return done(layerError);
    }

    // store route for dispatch on change
    if (route) {
      req.route = route;
    }

    // Capture one-time layer values
    req.params = self.mergeParams
      ? mergeParams(layer.params, parentParams)
      : layer.params;
    var layerPath = layer.path;

    // this should be done for the layer
    self.process_params(layer, paramcalled, req, res, function (err) {
      if (err) {
        return next(layerError || err);
      }

      if (route) {
        return layer.handle_request(req, res, next);
      }

      trim_prefix(layer, layerError, layerPath, path);
    });
  }

  function trim_prefix(layer, layerError, layerPath, path) {
    if (layerPath.length !== 0) {
      // Validate path breaks on a path separator
      var c = path[layerPath.length]
      if (c && c !== '/' && c !== '.') return next(layerError)

      // Trim off the part of the url that matches the route
      // middleware (.use stuff) needs to have the path stripped
      debug('trim prefix (%s) from url %s', layerPath, req.url);
      removed = layerPath;
      req.url = protohost + req.url.substr(protohost.length + removed.length);

      // Ensure leading slash
      if (!protohost && req.url[0] !== '/') {
        req.url = '/' + req.url;
        slashAdded = true;
      }

      // Setup base URL (no trailing slash)
      req.baseUrl = parentUrl + (removed[removed.length - 1] === '/'
        ? removed.substring(0, removed.length - 1)
        : removed);
    }

    debug('%s %s : %s', layer.name, layerPath, req.originalUrl);

    if (layerError) {
      layer.handle_error(layerError, req, res, next);
    } else {
      layer.handle_request(req, res, next);
    }
  }
};

/**
 * Process any parameters for the layer.
 * @private
 */

proto.process_params = function process_params(layer, called, req, res, done) {
  var params = this.params;

  // captured parameters from the layer, keys and values
  var keys = layer.keys;

  // fast track
  if (!keys || keys.length === 0) {
    return done();
  }

  var i = 0;
  var name;
  var paramIndex = 0;
  var key;
  var paramVal;
  var paramCallbacks;
  var paramCalled;

  // process params in order
  // param callbacks can be async
  function param(err) {
    if (err) {
      return done(err);
    }

    if (i >= keys.length ) {
      return done();
    }

    paramIndex = 0;
    key = keys[i++];
    name = key.name;
    paramVal = req.params[name];
    paramCallbacks = params[name];
    paramCalled = called[name];

    if (paramVal === undefined || !paramCallbacks) {
      return param();
    }

    // param previously called with same value or error occurred
    if (paramCalled && (paramCalled.match === paramVal
      || (paramCalled.error && paramCalled.error !== 'route'))) {
      // restore value
      req.params[name] = paramCalled.value;

      // next param
      return param(paramCalled.error);
    }

    called[name] = paramCalled = {
      error: null,
      match: paramVal,
      value: paramVal
    };

    paramCallback();
  }

  // single param callbacks
  function paramCallback(err) {
    var fn = paramCallbacks[paramIndex++];

    // store updated value
    paramCalled.value = req.params[key.name];

    if (err) {
      // store error
      paramCalled.error = err;
      param(err);
      return;
    }

    if (!fn) return param();

    try {
      fn(req, res, paramCallback, paramVal, key.name);
    } catch (e) {
      paramCallback(e);
    }
  }

  param();
};

/**
 * Use the given middleware function, with optional path, defaulting to "/".
 *
 * Use (like `.all`) will run for any http METHOD, but it will not add
 * handlers for those methods so OPTIONS requests will not consider `.use`
 * functions even if they could respond.
 *
 * The other difference is that _route_ path is stripped and not visible
 * to the handler function. The main effect of this feature is that mounted
 * handlers can operate without any code changes regardless of the "prefix"
 * pathname.
 *
 * @public
 */

proto.use = function use(fn) {
  var offset = 0;
  var path = '/';

  // default path to '/'
  // disambiguate router.use([fn])
  if (typeof fn !== 'function') {
    var arg = fn;

    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0];
    }

    // first arg is the path
    if (typeof arg !== 'function') {
      offset = 1;
      path = fn;
    }
  }

  var callbacks = flatten(slice.call(arguments, offset));

  if (callbacks.length === 0) {
    throw new TypeError('Router.use() requires a middleware function')
  }

  for (var i = 0; i < callbacks.length; i++) {
    var fn = callbacks[i];

    if (typeof fn !== 'function') {
      throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))
    }

    // add the middleware
    debug('use %o %s', path, fn.name || '<anonymous>')

    var layer = new Layer(path, {
      sensitive: this.caseSensitive,
      strict: false,
      end: false
    }, fn);

    layer.route = undefined;

    this.stack.push(layer);
  }

  return this;
};

/**
 * Create a new Route for the given path.
 *
 * Each route contains a separate middleware stack and VERB handlers.
 *
 * See the Route api documentation for details on adding handlers
 * and middleware to routes.
 *
 * @param {String} path
 * @return {Route}
 * @public
 */

proto.route = function route(path) {
  var route = new Route(path);

  var layer = new Layer(path, {
    sensitive: this.caseSensitive,
    strict: this.strict,
    end: true
  }, route.dispatch.bind(route));

  layer.route = route;

  this.stack.push(layer);
  return route;
};

// create Router#VERB functions
methods.concat('all').forEach(function(method){
  proto[method] = function(path){
    var route = this.route(path)
    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});

// append methods to a list of methods
function appendMethods(list, addition) {
  for (var i = 0; i < addition.length; i++) {
    var method = addition[i];
    if (list.indexOf(method) === -1) {
      list.push(method);
    }
  }
}

// get pathname of request
function getPathname(req) {
  try {
    return parseUrl(req).pathname;
  } catch (err) {
    return undefined;
  }
}

// Get get protocol + host for a URL
function getProtohost(url) {
  if (typeof url !== 'string' || url.length === 0 || url[0] === '/') {
    return undefined
  }

  var searchIndex = url.indexOf('?')
  var pathLength = searchIndex !== -1
    ? searchIndex
    : url.length
  var fqdnIndex = url.substr(0, pathLength).indexOf('://')

  return fqdnIndex !== -1
    ? url.substr(0, url.indexOf('/', 3 + fqdnIndex))
    : undefined
}

// get type for error message
function gettype(obj) {
  var type = typeof obj;

  if (type !== 'object') {
    return type;
  }

  // inspect [[Class]] for objects
  return toString.call(obj)
    .replace(objectRegExp, '$1');
}

/**
 * Match path to a layer.
 *
 * @param {Layer} layer
 * @param {string} path
 * @private
 */

function matchLayer(layer, path) {
  try {
    return layer.match(path);
  } catch (err) {
    return err;
  }
}

// merge params with parent params
function mergeParams(params, parent) {
  if (typeof parent !== 'object' || !parent) {
    return params;
  }

  // make copy of parent for base
  var obj = mixin({}, parent);

  // simple non-numeric merging
  if (!(0 in params) || !(0 in parent)) {
    return mixin(obj, params);
  }

  var i = 0;
  var o = 0;

  // determine numeric gaps
  while (i in params) {
    i++;
  }

  while (o in parent) {
    o++;
  }

  // offset numeric indices in params before merge
  for (i--; i >= 0; i--) {
    params[i + o] = params[i];

    // create holes for the merge when necessary
    if (i < o) {
      delete params[i];
    }
  }

  return mixin(obj, params);
}

// restore obj props after function
function restore(fn, obj) {
  var props = new Array(arguments.length - 2);
  var vals = new Array(arguments.length - 2);

  for (var i = 0; i < props.length; i++) {
    props[i] = arguments[i + 2];
    vals[i] = obj[props[i]];
  }

  return function () {
    // restore vals
    for (var i = 0; i < props.length; i++) {
      obj[props[i]] = vals[i];
    }

    return fn.apply(this, arguments);
  };
}

// send an OPTIONS response
function sendOptionsResponse(res, options, next) {
  try {
    var body = options.join(',');
    res.set('Allow', body);
    res.send(body);
  } catch (err) {
    next(err);
  }
}

// wrap a function
function wrap(old, fn) {
  return function proxy() {
    var args = new Array(arguments.length + 1);

    args[0] = old;
    for (var i = 0, len = arguments.length; i < len; i++) {
      args[i + 1] = arguments[i];
    }

    fn.apply(this, args);
  };
}


/***/ }),

/***/ "../../../node_modules/express/lib/router/layer.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/express/lib/router/layer.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var pathRegexp = __webpack_require__(/*! path-to-regexp */ "path-to-regexp");
var debug = __webpack_require__(/*! debug */ "debug")('express:router:layer');

/**
 * Module variables.
 * @private
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Module exports.
 * @public
 */

module.exports = Layer;

function Layer(path, options, fn) {
  if (!(this instanceof Layer)) {
    return new Layer(path, options, fn);
  }

  debug('new %o', path)
  var opts = options || {};

  this.handle = fn;
  this.name = fn.name || '<anonymous>';
  this.params = undefined;
  this.path = undefined;
  this.regexp = pathRegexp(path, this.keys = [], opts);

  // set fast path flags
  this.regexp.fast_star = path === '*'
  this.regexp.fast_slash = path === '/' && opts.end === false
}

/**
 * Handle the error for the layer.
 *
 * @param {Error} error
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 * @api private
 */

Layer.prototype.handle_error = function handle_error(error, req, res, next) {
  var fn = this.handle;

  if (fn.length !== 4) {
    // not a standard error handler
    return next(error);
  }

  try {
    fn(error, req, res, next);
  } catch (err) {
    next(err);
  }
};

/**
 * Handle the request for the layer.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 * @api private
 */

Layer.prototype.handle_request = function handle(req, res, next) {
  var fn = this.handle;

  if (fn.length > 3) {
    // not a standard request handler
    return next();
  }

  try {
    fn(req, res, next);
  } catch (err) {
    next(err);
  }
};

/**
 * Check if this route matches `path`, if so
 * populate `.params`.
 *
 * @param {String} path
 * @return {Boolean}
 * @api private
 */

Layer.prototype.match = function match(path) {
  var match

  if (path != null) {
    // fast path non-ending match for / (any path matches)
    if (this.regexp.fast_slash) {
      this.params = {}
      this.path = ''
      return true
    }

    // fast path for * (everything matched in a param)
    if (this.regexp.fast_star) {
      this.params = {'0': decode_param(path)}
      this.path = path
      return true
    }

    // match the path
    match = this.regexp.exec(path)
  }

  if (!match) {
    this.params = undefined;
    this.path = undefined;
    return false;
  }

  // store values
  this.params = {};
  this.path = match[0]

  var keys = this.keys;
  var params = this.params;

  for (var i = 1; i < match.length; i++) {
    var key = keys[i - 1];
    var prop = key.name;
    var val = decode_param(match[i])

    if (val !== undefined || !(hasOwnProperty.call(params, prop))) {
      params[prop] = val;
    }
  }

  return true;
};

/**
 * Decode param value.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function decode_param(val) {
  if (typeof val !== 'string' || val.length === 0) {
    return val;
  }

  try {
    return decodeURIComponent(val);
  } catch (err) {
    if (err instanceof URIError) {
      err.message = 'Failed to decode param \'' + val + '\'';
      err.status = err.statusCode = 400;
    }

    throw err;
  }
}


/***/ }),

/***/ "../../../node_modules/express/lib/router/route.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/express/lib/router/route.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var debug = __webpack_require__(/*! debug */ "debug")('express:router:route');
var flatten = __webpack_require__(/*! array-flatten */ "array-flatten");
var Layer = __webpack_require__(/*! ./layer */ "../../../node_modules/express/lib/router/layer.js");
var methods = __webpack_require__(/*! methods */ "methods");

/**
 * Module variables.
 * @private
 */

var slice = Array.prototype.slice;
var toString = Object.prototype.toString;

/**
 * Module exports.
 * @public
 */

module.exports = Route;

/**
 * Initialize `Route` with the given `path`,
 *
 * @param {String} path
 * @public
 */

function Route(path) {
  this.path = path;
  this.stack = [];

  debug('new %o', path)

  // route handlers for various http methods
  this.methods = {};
}

/**
 * Determine if the route handles a given method.
 * @private
 */

Route.prototype._handles_method = function _handles_method(method) {
  if (this.methods._all) {
    return true;
  }

  var name = method.toLowerCase();

  if (name === 'head' && !this.methods['head']) {
    name = 'get';
  }

  return Boolean(this.methods[name]);
};

/**
 * @return {Array} supported HTTP methods
 * @private
 */

Route.prototype._options = function _options() {
  var methods = Object.keys(this.methods);

  // append automatic head
  if (this.methods.get && !this.methods.head) {
    methods.push('head');
  }

  for (var i = 0; i < methods.length; i++) {
    // make upper case
    methods[i] = methods[i].toUpperCase();
  }

  return methods;
};

/**
 * dispatch req, res into this route
 * @private
 */

Route.prototype.dispatch = function dispatch(req, res, done) {
  var idx = 0;
  var stack = this.stack;
  if (stack.length === 0) {
    return done();
  }

  var method = req.method.toLowerCase();
  if (method === 'head' && !this.methods['head']) {
    method = 'get';
  }

  req.route = this;

  next();

  function next(err) {
    // signal to exit route
    if (err && err === 'route') {
      return done();
    }

    // signal to exit router
    if (err && err === 'router') {
      return done(err)
    }

    var layer = stack[idx++];
    if (!layer) {
      return done(err);
    }

    if (layer.method && layer.method !== method) {
      return next(err);
    }

    if (err) {
      layer.handle_error(err, req, res, next);
    } else {
      layer.handle_request(req, res, next);
    }
  }
};

/**
 * Add a handler for all HTTP verbs to this route.
 *
 * Behaves just like middleware and can respond or call `next`
 * to continue processing.
 *
 * You can use multiple `.all` call to add multiple handlers.
 *
 *   function check_something(req, res, next){
 *     next();
 *   };
 *
 *   function validate_user(req, res, next){
 *     next();
 *   };
 *
 *   route
 *   .all(validate_user)
 *   .all(check_something)
 *   .get(function(req, res, next){
 *     res.send('hello world');
 *   });
 *
 * @param {function} handler
 * @return {Route} for chaining
 * @api public
 */

Route.prototype.all = function all() {
  var handles = flatten(slice.call(arguments));

  for (var i = 0; i < handles.length; i++) {
    var handle = handles[i];

    if (typeof handle !== 'function') {
      var type = toString.call(handle);
      var msg = 'Route.all() requires a callback function but got a ' + type
      throw new TypeError(msg);
    }

    var layer = Layer('/', {}, handle);
    layer.method = undefined;

    this.methods._all = true;
    this.stack.push(layer);
  }

  return this;
};

methods.forEach(function(method){
  Route.prototype[method] = function(){
    var handles = flatten(slice.call(arguments));

    for (var i = 0; i < handles.length; i++) {
      var handle = handles[i];

      if (typeof handle !== 'function') {
        var type = toString.call(handle);
        var msg = 'Route.' + method + '() requires a callback function but got a ' + type
        throw new Error(msg);
      }

      debug('%s %o', method, this.path)

      var layer = Layer('/', {}, handle);
      layer.method = method;

      this.methods[method] = true;
      this.stack.push(layer);
    }

    return this;
  };
});


/***/ }),

/***/ "../../../node_modules/express/lib/utils.js":
/*!**************************************************!*\
  !*** ../../../node_modules/express/lib/utils.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @api private
 */

var Buffer = __webpack_require__(/*! safe-buffer */ "safe-buffer").Buffer
var contentDisposition = __webpack_require__(/*! content-disposition */ "content-disposition");
var contentType = __webpack_require__(/*! content-type */ "content-type");
var deprecate = __webpack_require__(/*! depd */ "depd")('express');
var flatten = __webpack_require__(/*! array-flatten */ "array-flatten");
var mime = __webpack_require__(/*! send */ "send").mime;
var etag = __webpack_require__(/*! etag */ "etag");
var proxyaddr = __webpack_require__(/*! proxy-addr */ "proxy-addr");
var qs = __webpack_require__(/*! qs */ "qs");
var querystring = __webpack_require__(/*! querystring */ "querystring");

/**
 * Return strong ETag for `body`.
 *
 * @param {String|Buffer} body
 * @param {String} [encoding]
 * @return {String}
 * @api private
 */

exports.etag = createETagGenerator({ weak: false })

/**
 * Return weak ETag for `body`.
 *
 * @param {String|Buffer} body
 * @param {String} [encoding]
 * @return {String}
 * @api private
 */

exports.wetag = createETagGenerator({ weak: true })

/**
 * Check if `path` looks absolute.
 *
 * @param {String} path
 * @return {Boolean}
 * @api private
 */

exports.isAbsolute = function(path){
  if ('/' === path[0]) return true;
  if (':' === path[1] && ('\\' === path[2] || '/' === path[2])) return true; // Windows device path
  if ('\\\\' === path.substring(0, 2)) return true; // Microsoft Azure absolute path
};

/**
 * Flatten the given `arr`.
 *
 * @param {Array} arr
 * @return {Array}
 * @api private
 */

exports.flatten = deprecate.function(flatten,
  'utils.flatten: use array-flatten npm module instead');

/**
 * Normalize the given `type`, for example "html" becomes "text/html".
 *
 * @param {String} type
 * @return {Object}
 * @api private
 */

exports.normalizeType = function(type){
  return ~type.indexOf('/')
    ? acceptParams(type)
    : { value: mime.lookup(type), params: {} };
};

/**
 * Normalize `types`, for example "html" becomes "text/html".
 *
 * @param {Array} types
 * @return {Array}
 * @api private
 */

exports.normalizeTypes = function(types){
  var ret = [];

  for (var i = 0; i < types.length; ++i) {
    ret.push(exports.normalizeType(types[i]));
  }

  return ret;
};

/**
 * Generate Content-Disposition header appropriate for the filename.
 * non-ascii filenames are urlencoded and a filename* parameter is added
 *
 * @param {String} filename
 * @return {String}
 * @api private
 */

exports.contentDisposition = deprecate.function(contentDisposition,
  'utils.contentDisposition: use content-disposition npm module instead');

/**
 * Parse accept params `str` returning an
 * object with `.value`, `.quality` and `.params`.
 * also includes `.originalIndex` for stable sorting
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function acceptParams(str, index) {
  var parts = str.split(/ *; */);
  var ret = { value: parts[0], quality: 1, params: {}, originalIndex: index };

  for (var i = 1; i < parts.length; ++i) {
    var pms = parts[i].split(/ *= */);
    if ('q' === pms[0]) {
      ret.quality = parseFloat(pms[1]);
    } else {
      ret.params[pms[0]] = pms[1];
    }
  }

  return ret;
}

/**
 * Compile "etag" value to function.
 *
 * @param  {Boolean|String|Function} val
 * @return {Function}
 * @api private
 */

exports.compileETag = function(val) {
  var fn;

  if (typeof val === 'function') {
    return val;
  }

  switch (val) {
    case true:
      fn = exports.wetag;
      break;
    case false:
      break;
    case 'strong':
      fn = exports.etag;
      break;
    case 'weak':
      fn = exports.wetag;
      break;
    default:
      throw new TypeError('unknown value for etag function: ' + val);
  }

  return fn;
}

/**
 * Compile "query parser" value to function.
 *
 * @param  {String|Function} val
 * @return {Function}
 * @api private
 */

exports.compileQueryParser = function compileQueryParser(val) {
  var fn;

  if (typeof val === 'function') {
    return val;
  }

  switch (val) {
    case true:
      fn = querystring.parse;
      break;
    case false:
      fn = newObject;
      break;
    case 'extended':
      fn = parseExtendedQueryString;
      break;
    case 'simple':
      fn = querystring.parse;
      break;
    default:
      throw new TypeError('unknown value for query parser function: ' + val);
  }

  return fn;
}

/**
 * Compile "proxy trust" value to function.
 *
 * @param  {Boolean|String|Number|Array|Function} val
 * @return {Function}
 * @api private
 */

exports.compileTrust = function(val) {
  if (typeof val === 'function') return val;

  if (val === true) {
    // Support plain true/false
    return function(){ return true };
  }

  if (typeof val === 'number') {
    // Support trusting hop count
    return function(a, i){ return i < val };
  }

  if (typeof val === 'string') {
    // Support comma-separated values
    val = val.split(/ *, */);
  }

  return proxyaddr.compile(val || []);
}

/**
 * Set the charset in a given Content-Type string.
 *
 * @param {String} type
 * @param {String} charset
 * @return {String}
 * @api private
 */

exports.setCharset = function setCharset(type, charset) {
  if (!type || !charset) {
    return type;
  }

  // parse type
  var parsed = contentType.parse(type);

  // set charset
  parsed.parameters.charset = charset;

  // format type
  return contentType.format(parsed);
};

/**
 * Create an ETag generator function, generating ETags with
 * the given options.
 *
 * @param {object} options
 * @return {function}
 * @private
 */

function createETagGenerator (options) {
  return function generateETag (body, encoding) {
    var buf = !Buffer.isBuffer(body)
      ? Buffer.from(body, encoding)
      : body

    return etag(buf, options)
  }
}

/**
 * Parse an extended query string with qs.
 *
 * @return {Object}
 * @private
 */

function parseExtendedQueryString(str) {
  return qs.parse(str, {
    allowPrototypes: true
  });
}

/**
 * Return new empty object.
 *
 * @return {Object}
 * @api private
 */

function newObject() {
  return {};
}


/***/ }),

/***/ "../../../node_modules/express/lib/view.js":
/*!*************************************************!*\
  !*** ../../../node_modules/express/lib/view.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var debug = __webpack_require__(/*! debug */ "debug")('express:view');
var path = __webpack_require__(/*! path */ "path");
var fs = __webpack_require__(/*! fs */ "fs");

/**
 * Module variables.
 * @private
 */

var dirname = path.dirname;
var basename = path.basename;
var extname = path.extname;
var join = path.join;
var resolve = path.resolve;

/**
 * Module exports.
 * @public
 */

module.exports = View;

/**
 * Initialize a new `View` with the given `name`.
 *
 * Options:
 *
 *   - `defaultEngine` the default template engine name
 *   - `engines` template engine require() cache
 *   - `root` root path for view lookup
 *
 * @param {string} name
 * @param {object} options
 * @public
 */

function View(name, options) {
  var opts = options || {};

  this.defaultEngine = opts.defaultEngine;
  this.ext = extname(name);
  this.name = name;
  this.root = opts.root;

  if (!this.ext && !this.defaultEngine) {
    throw new Error('No default engine was specified and no extension was provided.');
  }

  var fileName = name;

  if (!this.ext) {
    // get extension from default engine name
    this.ext = this.defaultEngine[0] !== '.'
      ? '.' + this.defaultEngine
      : this.defaultEngine;

    fileName += this.ext;
  }

  if (!opts.engines[this.ext]) {
    // load engine
    var mod = this.ext.substr(1)
    debug('require "%s"', mod)

    // default engine export
    var fn = __webpack_require__("../../../node_modules/express/lib sync recursive")(mod).__express

    if (typeof fn !== 'function') {
      throw new Error('Module "' + mod + '" does not provide a view engine.')
    }

    opts.engines[this.ext] = fn
  }

  // store loaded engine
  this.engine = opts.engines[this.ext];

  // lookup path
  this.path = this.lookup(fileName);
}

/**
 * Lookup view by the given `name`
 *
 * @param {string} name
 * @private
 */

View.prototype.lookup = function lookup(name) {
  var path;
  var roots = [].concat(this.root);

  debug('lookup "%s"', name);

  for (var i = 0; i < roots.length && !path; i++) {
    var root = roots[i];

    // resolve the path
    var loc = resolve(root, name);
    var dir = dirname(loc);
    var file = basename(loc);

    // resolve the file
    path = this.resolve(dir, file);
  }

  return path;
};

/**
 * Render with the given options.
 *
 * @param {object} options
 * @param {function} callback
 * @private
 */

View.prototype.render = function render(options, callback) {
  debug('render "%s"', this.path);
  this.engine(this.path, options, callback);
};

/**
 * Resolve the file within the given directory.
 *
 * @param {string} dir
 * @param {string} file
 * @private
 */

View.prototype.resolve = function resolve(dir, file) {
  var ext = this.ext;

  // <path>.<ext>
  var path = join(dir, file);
  var stat = tryStat(path);

  if (stat && stat.isFile()) {
    return path;
  }

  // <path>/index.<ext>
  path = join(dir, basename(file, ext), 'index' + ext);
  stat = tryStat(path);

  if (stat && stat.isFile()) {
    return path;
  }
};

/**
 * Return a stat, maybe.
 *
 * @param {string} path
 * @return {fs.Stats}
 * @private
 */

function tryStat(path) {
  debug('stat "%s"', path);

  try {
    return fs.statSync(path);
  } catch (e) {
    return undefined;
  }
}


/***/ }),

/***/ "../../../node_modules/express/lib sync recursive":
/*!***********************************************!*\
  !*** ../../../node_modules/express/lib/ sync ***!
  \***********************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../../node_modules/express/lib sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../../../node_modules/redux/es/redux.js":
/*!***********************************************!*\
  !*** ../../../node_modules/redux/es/redux.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": () => (/* binding */ ActionTypes),
/* harmony export */   "applyMiddleware": () => (/* binding */ applyMiddleware),
/* harmony export */   "bindActionCreators": () => (/* binding */ bindActionCreators),
/* harmony export */   "combineReducers": () => (/* binding */ combineReducers),
/* harmony export */   "compose": () => (/* binding */ compose),
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "../../../node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__.default] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__.default] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "../../../node_modules/symbol-observable/es/index.js":
/*!***********************************************************!*\
  !*** ../../../node_modules/symbol-observable/es/index.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "../../../node_modules/symbol-observable/es/ponyfill.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = (0,_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__.default)(root);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (result);


/***/ }),

/***/ "../../../node_modules/symbol-observable/es/ponyfill.js":
/*!**************************************************************!*\
  !*** ../../../node_modules/symbol-observable/es/ponyfill.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ symbolObservablePonyfill)
/* harmony export */ });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "accepts":
/*!**************************!*\
  !*** external "accepts" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("accepts");;

/***/ }),

/***/ "array-flatten":
/*!********************************!*\
  !*** external "array-flatten" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("array-flatten");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "bootstrap/dist/js/bootstrap.js":
/*!*************************************************!*\
  !*** external "bootstrap/dist/js/bootstrap.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.js");;

/***/ }),

/***/ "content-disposition":
/*!**************************************!*\
  !*** external "content-disposition" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("content-disposition");;

/***/ }),

/***/ "content-type":
/*!*******************************!*\
  !*** external "content-type" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("content-type");;

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie");;

/***/ }),

/***/ "cookie-signature":
/*!***********************************!*\
  !*** external "cookie-signature" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-signature");;

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("debug");;

/***/ }),

/***/ "depd":
/*!***********************!*\
  !*** external "depd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("depd");;

/***/ }),

/***/ "encodeurl":
/*!****************************!*\
  !*** external "encodeurl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("encodeurl");;

/***/ }),

/***/ "escape-html":
/*!******************************!*\
  !*** external "escape-html" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("escape-html");;

/***/ }),

/***/ "etag":
/*!***********************!*\
  !*** external "etag" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("etag");;

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ "finalhandler":
/*!*******************************!*\
  !*** external "finalhandler" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("finalhandler");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "fresh":
/*!************************!*\
  !*** external "fresh" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("fresh");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "merge-descriptors":
/*!************************************!*\
  !*** external "merge-descriptors" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("merge-descriptors");;

/***/ }),

/***/ "methods":
/*!**************************!*\
  !*** external "methods" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("methods");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");;

/***/ }),

/***/ "on-finished":
/*!******************************!*\
  !*** external "on-finished" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("on-finished");;

/***/ }),

/***/ "parseurl":
/*!***************************!*\
  !*** external "parseurl" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("parseurl");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "path-to-regexp":
/*!*********************************!*\
  !*** external "path-to-regexp" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("path-to-regexp");;

/***/ }),

/***/ "proxy-addr":
/*!*****************************!*\
  !*** external "proxy-addr" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("proxy-addr");;

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ "range-parser":
/*!*******************************!*\
  !*** external "range-parser" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("range-parser");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-html-parser");;

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-loadable");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "react-tippy":
/*!******************************!*\
  !*** external "react-tippy" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-tippy");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");;

/***/ }),

/***/ "safe-buffer":
/*!******************************!*\
  !*** external "safe-buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("safe-buffer");;

/***/ }),

/***/ "send":
/*!***********************!*\
  !*** external "send" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("send");;

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("serialize-javascript");;

/***/ }),

/***/ "serve-static":
/*!*******************************!*\
  !*** external "serve-static" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("serve-static");;

/***/ }),

/***/ "setprototypeof":
/*!*********************************!*\
  !*** external "setprototypeof" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("setprototypeof");;

/***/ }),

/***/ "statuses":
/*!***************************!*\
  !*** external "statuses" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("statuses");;

/***/ }),

/***/ "type-is":
/*!**************************!*\
  !*** external "type-is" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("type-is");;

/***/ }),

/***/ "utils-merge":
/*!******************************!*\
  !*** external "utils-merge" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("utils-merge");;

/***/ }),

/***/ "vary":
/*!***********************!*\
  !*** external "vary" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("vary");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/


var _express = _interopRequireDefault(__webpack_require__(/*! express */ "../../../node_modules/express/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireWildcard(__webpack_require__(/*! react-dom/server */ "react-dom/server"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _App = _interopRequireDefault(__webpack_require__(/*! ./src/App */ "./src/App.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./src/store */ "./src/store.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

var _serializeJavascript = _interopRequireDefault(__webpack_require__(/*! serialize-javascript */ "serialize-javascript"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = __webpack_require__(/*! path */ "path");

const PORT = process.env.PORT || 3000;

var index = _fs.default.readFileSync('build/index.html').toString(); // const parts = html.split('<!-- not rendered -->');


const app = (0, _express.default)();

const fetchArticles = async () => {
  try {
    console.log('fetch articles running');
    const res = await _axios.default.get('http://localhost:3001/api/article/all');
    const articles = res.data.data.articles;
    return articles;
  } catch (error) {
    console.log(error.message);
  }
};

app.use(_express.default.static('build'));
app.use(async (req, res) => {
  var finalHtml;
  var articles;

  if (req.url === "/blog") {
    articles = await fetchArticles();
  }

  const reactMarkup = /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _store.default
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: {}
  }, /*#__PURE__*/_react.default.createElement(_App.default, {
    articles: articles
  }))));

  const html = _server.default.renderToString(reactMarkup);

  finalHtml = index.replace('<div id="root"></div>', `<div id="root">${html}</div>`).replace('//script', `window._INITIAL_DATA_ = ${(0, _serializeJavascript.default)(articles)}`); // 		.replace(
  // 			'//script',
  // 			`window._INITIAL_DATA_ = 
  // ${serialize(articlesArray)}`
  // );

  res.send(finalHtml);
  res.end();
});
console.log(`listening on ${PORT}`);
app.listen(PORT);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy9hcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvc3BlY2lhbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3RvYXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvdG9waWMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3VpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0FkZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaWNvbnMvQ2hldnJvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0Nyb3NzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9EZWxldGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0xvY2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL1JlYWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BYm91dC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BdXRoLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQmxvZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9MZWFybi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9VcHNlcnRBcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVXBzZXJ0Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydFRvcGljLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVXBzZXJ0VmlkZW8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9Qcml2YXRlUm91dGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9TZW8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9oZWxwZXJzL3NldEF1dGhUb2tlbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9oZWxwZXJzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvQnV0dG9ucy9Vc2VyQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvQnV0dG9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvRm9vdGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9OYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9OYXZiYXIvU2lnbmVkSW5MaW5rcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL1NpZ25lZE91dExpbmtzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvcHJlbG9hZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy9zcGVjaWFsaXR5LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL3RvcGljLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL3VpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL3ZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Fib3V0L0Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvYWJvdXQvUXVlc3Rpb25zLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Jsb2cvQWxsLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Jsb2cvRmVhdHVyZWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvYmxvZy9MYXRlc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvZWRpdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2hvbWUvSGVyby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ob21lL0hlcm9DYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9sZWFybi9BcnRpY2xlTmFtZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvbGVhcm4vQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9sZWFybi9WaWRlb05hbWVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL3ByZXZpZXcvQXJ0aWNsZVByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvcHJldmlldy9Ub3BpY3NPdmVydmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9wcmV2aWV3L1ZpZGVvUHJldmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaW1nL2NnVHJhbnNwYXJlbnQuUE5HIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4uL25vZGVfbW9kdWxlcy9leHByZXNzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4uL25vZGVfbW9kdWxlcy9leHByZXNzL2xpYi9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uLi9ub2RlX21vZHVsZXMvZXhwcmVzcy9saWIvZXhwcmVzcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uLi9ub2RlX21vZHVsZXMvZXhwcmVzcy9saWIvbWlkZGxld2FyZS9pbml0LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4uL25vZGVfbW9kdWxlcy9leHByZXNzL2xpYi9taWRkbGV3YXJlL3F1ZXJ5LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4uL25vZGVfbW9kdWxlcy9leHByZXNzL2xpYi9yZXF1ZXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4uL25vZGVfbW9kdWxlcy9leHByZXNzL2xpYi9yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uLi9ub2RlX21vZHVsZXMvZXhwcmVzcy9saWIvcm91dGVyL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4uL25vZGVfbW9kdWxlcy9leHByZXNzL2xpYi9yb3V0ZXIvbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi4vbm9kZV9tb2R1bGVzL2V4cHJlc3MvbGliL3JvdXRlci9yb3V0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uLi9ub2RlX21vZHVsZXMvZXhwcmVzcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi4vbm9kZV9tb2R1bGVzL2V4cHJlc3MvbGliL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cHJlc3MvbGlifHN5bmMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL3JlZHV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJhY2NlcHRzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJhcnJheS1mbGF0dGVuXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiY29udGVudC1kaXNwb3NpdGlvblwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiY29udGVudC10eXBlXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImNvb2tpZS1zaWduYXR1cmVcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImRlYnVnXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJkZXBkXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJlbmNvZGV1cmxcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImVzY2FwZS1odG1sXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJldGFnXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImZpbmFsaGFuZGxlclwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiZnJlc2hcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJtZXJnZS1kZXNjcmlwdG9yc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwibWV0aG9kc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJuZXRcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcIm9uLWZpbmlzaGVkXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJwYXJzZXVybFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicGF0aC10by1yZWdleHBcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInByb3h5LWFkZHJcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInFzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmFuZ2UtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWh0bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1sb2FkYWJsZVwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXRpcHB5XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwic2FmZS1idWZmZXJcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInNlbmRcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJzZXJ2ZS1zdGF0aWNcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInNldHByb3RvdHlwZW9mXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJzdGF0dXNlc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwidHlwZS1pc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwidXRpbHMtbWVyZ2VcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInZhcnlcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaXNDbGllbnQiLCJsb2NhbFN0b3JhZ2UiLCJ0b2tlbiIsIkFwcCIsImFydGljbGVzIiwic3RvcmUiLCJkaXNwYXRjaCIsIkhvbWUiLCJBYm91dCIsIkxlYXJuIiwicHJvcHMiLCJQcmV2aWV3IiwiQXJ0aWNsZSIsImNsZWFyQXJ0aWNsZSIsImlkIiwidHlwZSIsImdldEFydGljbGUiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInBheWxvYWQiLCJlcnJvciIsImdldEFsbEFydGljbGVzIiwic3RhdHVzIiwiYWRkQXJ0aWNsZSIsImVkaXRBcnRpY2xlIiwic3BlY2lhbGl0eU5hbWUiLCJyZXMyIiwiZGVsZXRlQXJ0aWNsZSIsImFydGljbGVJZCIsInRvcGljSWQiLCJsb2FkVXNlciIsInVzZXJJZCIsImdldEl0ZW0iLCJVU0VSX0xPQURFRCIsInVzZXIiLCJlcnIiLCJBVVRIX0VSUk9SIiwicmVmcmVzaFVzZXIiLCJyZWdpc3RlciIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJSRUdJU1RFUl9GQUlMIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJsb2dvdXQiLCJjbGVhciIsInNlbmRSZXNldEVtYWlsIiwiY29uZmlnIiwibWVzc2FnZXNBcnJheSIsIm1lc3NhZ2VzIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJtc2ciLCJTRU5EX1JFU0VUX0VNQUlMIiwiZXJyb3JzIiwicmVzcG9uc2UiLCJTRU5EX1JFU0VUX0VNQUlMX0ZBSUwiLCJnZXRTcGVjaWFsaXRpZXMiLCJjbGVhclNwZWNpYWxpdHkiLCJnZXRTcGVjaWFsaXR5Iiwic3BlY2lhbGl0eSIsImFkZFNwZWNpYWxpdHkiLCJlZGl0U3BlY2lhbGl0eSIsImRlbGV0ZVNwZWNpYWxpdHkiLCJzdWNjZXNzVG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImVycm9yVG9hc3QiLCJnZXRUb3BpY3MiLCJhZGRUb3BpYyIsImVkaXRUb3BpYyIsInVubG9ja1RvcGljIiwiZGVsZXRlVG9waWMiLCJTRVRfQUxFUlQiLCJSRU1PVkVfQUxFUlQiLCJMT0dPVVQiLCJzZXRPcGVuVG9waWNzIiwib3BlblRvcGljc0FycmF5IiwiZ2V0U3RhdGUiLCJ1aSIsIm9wZW5Ub3BpY3MiLCJpbmNsdWRlcyIsInB1c2giLCJzcGxpY2UiLCJpbmRleE9mIiwic2V0RGlzcGxheU1vZGUiLCJkaXNwbGF5TW9kZSIsInNldEl0ZW0iLCJnZXRWaWRlbyIsImFkZFZpZGVvIiwicmVzVG9waWMiLCJlZGl0VmlkZW8iLCJkZWxldGVWaWRlbyIsInZpZGVvSWQiLCJzZWxlY3RWaWRlbyIsInZpZGVvIiwiQWRkIiwic2l6ZSIsImNvbG9yIiwiQ2hldnJvbnNVcCIsIkNoZXZyb25zTGVmdCIsIkNyb3NzIiwiRGVsZXRlIiwiTG9jayIsImhhbmRsZXIiLCJVbmxvY2siLCJSZWFkIiwiVXBkYXRlIiwib3BhY2l0eSIsInRleHRBbGlnbiIsIm5hbWUiLCJtYXRjaCIsInBhcmFtcyIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwiZ2V0QXJ0aWNsZUVmZmVjdCIsInJlcGxhY2UiLCJnb1RvVG9wIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImh0bWwiLCJjb250ZW50IiwicGFkZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiYXV0aCIsIkF1dGgiLCJzZXREYXRhIiwiZGluVGV4dCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcmV2IiwidGFyZ2V0IiwidmFsdWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFnZSIsImNvZGVSZWZmZXJlZCIsIkJsb2ciLCJzZXJ2ZXJBcnRpY2xlcyIsInN0b3JlQXJ0aWNsZXMiLCJpc0FkbWluIiwic2V0QXJ0aWNsZXMiLCJsZW5ndGgiLCJmb250RmFtaWx5IiwiaG9tZUNvbnRlbnQiLCJjbG9zZSIsInNldENsb3NlIiwiZGlzcGxheSIsImhlaWdodCIsImZvbnRTaXplIiwiVXBzZXJ0QXJ0aWNsZSIsInNwZWNpYWxpdGllcyIsInByZXZBcnRpY2xlIiwic2V0Y29udGVudCIsInNldG5hbWUiLCJrZXl3b3JkcyIsInNldEFydGljbGVLZXl3b3JkcyIsImZlYXR1cmVkIiwic2V0ZmVhdHVyZWQiLCJ0aHVtYm5haWxVcmwiLCJzZXR0aHVtYm5haWxVcmwiLCJzY3JvbGxUbyIsImVsZW1lbnQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJiZWhhdmlvciIsImxlZnQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJlZGl0IiwiaGFuZGxlRWRpdG9yIiwiaGFuZGxlRWRpdCIsIl9pZCIsIk5hbWUiLCJoYW5kbGVBZGQiLCJzZWxlY3RlZEFydGljbGUiLCJVcHNlcnRDYXJkIiwic2V0U3RhdGUiLCJmZXRjaERhdGEiLCJpbWFnZVVybCIsImhhbmRsZUNoYW5nZSIsIlVwc2VydFRvcGljIiwibG9jYXRpb24iLCJsb2NrZWQiLCJpc0xvY2tlZCIsInNwZWNpYWxpdHlJZCIsIlVwc2VydFZpZGVvIiwicHJldlZpZGVvIiwic2V0TmFtZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ1cmwiLCJzZXRVcmwiLCJzZWxlY3RlZFZpZGVvIiwiUHJpdmF0ZVJvdXRlIiwiY29tcG9uZW50IiwiQ29tcG9uZW50IiwiaXNBdXRoZW50aWNhdGVkIiwicmVzdCIsIlNlbyIsInRpdGxlIiwibGFuZyIsIm1ldGEiLCJyaWNocmVzdWx0IiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwicHJvcGVydHkiLCJjb25jYXQiLCJyZWwiLCJocmVmIiwiaW5uZXJIVE1MIiwic2VydmljZVBvc3QiLCJwYXRoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInBvc3QiLCJTRVJWSUNFX1VSTCIsInRoZW4iLCJjYXRjaCIsInNlcnZpY2VHZXQiLCJnZXQiLCJzZXRBdXRoVG9rZW4iLCJkZWZhdWx0cyIsImNvbW1vbiIsIlRvb2x0aXBXcmFwcGVyIiwiY2hpbGRyZW4iLCJBZG1pbkJ1dHRvbnMiLCJBZG1pbkJ1dHRvbnNXcmFwcGVyIiwicGF0aG5hbWUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwib3V0bGluZSIsIklubmVyRGl2IiwiZGFyayIsImJnIiwiYmFja2dyb3VuZENvbG9yIiwiQnV0dG9uIiwiaXNCdXR0b24iLCJMb2NrQnV0dG9uIiwiRm9vdGVyU29jaWFsTWVkaWEiLCJGb290ZXIiLCJzZXRFbWFpbCIsInNldE1lc3NhZ2UiLCJzZXRGb290ZXJNZXNzYWdlIiwiTmF2YmFyIiwibmF2YmFyRXhwYW5kZWQiLCJzZXRuYXZiYXJFeHBhbmRlZCIsInN3aXRjaGVkIiwic2V0c3dpdGNoZWQiLCJtb2RlIiwicmVtb3ZlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiTG9nbyIsIndpZHRoIiwicG9pbnRzIiwiU2lnbmVkSW5MaW5rcyIsIlNpZ25lZE91dExpbmtzIiwiUHJlbG9hZGVyIiwiaW5pdGlhbFN0YXRlIiwiYXJ0aWNsZVJlZHVjZXIiLCJhY3Rpb24iLCJ0b3BpY3MiLCJsb2FkaW5nIiwiYXV0aFJlZHVjZXIiLCJyb2xlIiwicmVtb3ZlSXRlbSIsInRvcGljIiwic3BlY2lhbGl0eVJlZHVjZXIiLCJ0b3BpY1JlZHVjZXIiLCJ1aVJlZHVjZXIiLCJ2aWRlb1JlZHVjZXIiLCJQcm9maWxlQ2FyZCIsImJpbyIsInBvcnRmb2xpb1VybCIsImluc3RhVXJsIiwidHdpdHRlclVybCIsImdpdGh1YlVybCIsIkFib3V0VXMiLCJvbnNjcm9sbCIsIm15RnVuY3Rpb24iLCJzY3JvbGxZIiwiUXVlc3Rpb25zIiwiQWxsIiwibWFwIiwiQXJ0aWNsZUlkIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiRmVhdHVyZWQiLCJMYXRlc3QiLCJIZXJvIiwiSGVyb0NhcmRzIiwiaGVyb0JsdWUiLCJoZXJvT3JhbmdlIiwiaGVyb0dyZWVuIiwic2Nyb2xsRnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQXJ0aWNsZU5hbWVzIiwiaGFuZGxlRGVsZXRlIiwiQXJ0aWNsZU5hbWUiLCJjb25maXJtIiwicHJvbXB0IiwicG9zIiwiQ2FyZCIsIml0ZW0iLCJhbHQiLCJWaWRlb05hbWVzIiwiVmlkZW9OYW1lIiwiQXJ0aWNsZVByZXZpZXciLCJTZWxlY3RlZEFydGljbGUiLCJSZWFkTW9yZVVybCIsImhhbmRsZVVubG9jayIsIlRvcGljc092ZXJ2aWV3Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJzcGxpdCIsImpvaW4iLCJ1bkxvY2tlZFRvcGljcyIsInZpZGVvcyIsIkFjdGlvbkJ1dHRvbnMiLCJWaWRlb1ByZXZpZXciLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJyb290UmVkdWNlciIsInJlcXVpcmUiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsImluZGV4IiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJ0b1N0cmluZyIsImFwcCIsImZldGNoQXJ0aWNsZXMiLCJ1c2UiLCJleHByZXNzIiwic3RhdGljIiwicmVxIiwiZmluYWxIdG1sIiwicmVhY3RNYXJrdXAiLCJSZWFjdERPTVNlcnZlciIsInJlbmRlclRvU3RyaW5nIiwic2VuZCIsImVuZCIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQUlBLDBCQUFZQyxZQUFZLENBQUNDLEtBQTdCLEVBQW9DO0FBQ25DLGtDQUFhRCxZQUFZLENBQUNDLEtBQTFCO0FBQ0E7O0FBRUQsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQzdCLHdCQUFVLE1BQU07QUFDZkMsbUJBQU1DLFFBQU4sQ0FBZSxxQkFBZjtBQUNBLEdBRkQsRUFFRyxFQUZIO0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyw2QkFBQyxlQUFELE9BREQsZUFFQyw2QkFBQyw2QkFBRCxxQkFDQyw2QkFBQyxzQkFBRCxxQkFDQyw2QkFBQyx3QkFBRDtBQUFVLFNBQUssTUFBZjtBQUFnQixRQUFJLEVBQUMsR0FBckI7QUFBeUIsTUFBRSxFQUFDO0FBQTVCLElBREQsb0JBRUMsNkJBQUMscUJBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUMsT0FBbEI7QUFBMEIsYUFBUyxFQUFFQztBQUFyQyxJQUZELGVBR0MsNkJBQUMscUJBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUMsUUFBbEI7QUFBMkIsYUFBUyxFQUFFQztBQUF0QyxJQUhELGVBSUMsNkJBQUMscUJBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUMsUUFBbEI7QUFBMkIsYUFBUyxFQUFFQztBQUF0QyxJQUpELGVBS0MsNkJBQUMscUJBQUQ7QUFDQyxVQUFNLEVBQUdDLEtBQUQsaUJBQVcsNkJBQUMsYUFBRCxlQUFVQSxLQUFWO0FBQWlCLFVBQUksRUFBRTtBQUF2QixPQURwQjtBQUVDLFNBQUssTUFGTjtBQUdDLFFBQUksRUFBQztBQUhOLElBTEQsZUFVQyw2QkFBQyxxQkFBRDtBQUNDLFVBQU0sRUFBR0EsS0FBRCxpQkFBVyw2QkFBQyxvQkFBRDtBQUFhLFVBQUksRUFBRTtBQUFuQixPQUE4QkEsS0FBOUIsRUFEcEI7QUFFQyxTQUFLLE1BRk47QUFHQyxRQUFJLEVBQUM7QUFITixJQVZELGVBZUMsNkJBQUMscUJBQUQ7QUFDQyxVQUFNLEVBQUdBLEtBQUQsaUJBQVcsNkJBQUMsb0JBQUQ7QUFBYSxVQUFJLEVBQUU7QUFBbkIsT0FBNkJBLEtBQTdCLEVBRHBCO0FBRUMsU0FBSyxNQUZOO0FBR0MsUUFBSSxFQUFDO0FBSE4sSUFmRCxlQW9CQyw2QkFBQyxxQkFBRDtBQUNDLFVBQU0sRUFBR0EsS0FBRCxpQkFBVyw2QkFBQyxhQUFELGVBQVVBLEtBQVY7QUFBaUIsVUFBSSxFQUFFO0FBQXZCLE9BRHBCO0FBRUMsU0FBSyxNQUZOO0FBR0MsUUFBSSxFQUFDO0FBSE4sSUFwQkQsZUF5QkMsNkJBQUMscUJBQUQ7QUFDQyxVQUFNLEVBQUdBLEtBQUQsaUJBQVcsNkJBQUMsYUFBRCxlQUFVQSxLQUFWO0FBQWlCLFVBQUksRUFBRTtBQUF2QixPQURwQjtBQUVDLFNBQUssTUFGTjtBQUdDLFFBQUksRUFBQztBQUhOLElBekJELGVBOEJDLDZCQUFDLHFCQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDLHdCQUFsQjtBQUEyQyxhQUFTLEVBQUVDO0FBQXRELElBOUJELGVBK0JDLDZCQUFDLHFCQUFEO0FBQ0MsVUFBTSxFQUFHRCxLQUFELGlCQUFXLDZCQUFDLHNCQUFELGVBQW1CQSxLQUFuQjtBQUEwQixVQUFJLEVBQUU7QUFBaEMsT0FEcEI7QUFFQyxTQUFLLE1BRk47QUFHQyxRQUFJLEVBQUM7QUFITixJQS9CRCxlQW9DQyw2QkFBQyxxQkFBRDtBQUNDLFVBQU0sRUFBR0EsS0FBRCxpQkFBVyw2QkFBQyxzQkFBRCxlQUFtQkEsS0FBbkI7QUFBMEIsVUFBSSxFQUFFO0FBQWhDLE9BRHBCO0FBRUMsU0FBSyxNQUZOO0FBR0MsUUFBSSxFQUFDO0FBSE4sSUFwQ0QsZUF5Q0MsNkJBQUMscUJBQUQ7QUFDQyxVQUFNLEVBQUdBLEtBQUQsaUJBQVcsNkJBQUMsb0JBQUQsZUFBaUJBLEtBQWpCO0FBQXdCLFVBQUksRUFBRTtBQUE5QixPQURwQjtBQUVDLFNBQUssTUFGTjtBQUdDLFFBQUksRUFBQztBQUhOLElBekNELGVBOENDLDZCQUFDLHFCQUFEO0FBQ0MsVUFBTSxFQUFHQSxLQUFELGlCQUFXLDZCQUFDLG9CQUFELGVBQWlCQSxLQUFqQjtBQUF3QixVQUFJLEVBQUU7QUFBOUIsT0FEcEI7QUFFQyxTQUFLLE1BRk47QUFHQyxRQUFJLEVBQUM7QUFITixJQTlDRCxlQW1EQyw2QkFBQyxxQkFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBQyxrQkFBbEI7QUFBcUMsYUFBUyxFQUFFRTtBQUFoRCxJQW5ERCxlQW9EQyw2QkFBQyxxQkFBRDtBQUNDLFVBQU0sRUFBR0YsS0FBRCxpQkFBVyw2QkFBQyxtQkFBRCxlQUFnQkEsS0FBaEI7QUFBdUIsVUFBSSxFQUFFO0FBQTdCLE9BRHBCO0FBRUMsU0FBSyxNQUZOO0FBR0MsUUFBSSxFQUFDO0FBSE4sSUFwREQsZUF5REMsNkJBQUMscUJBQUQ7QUFDQyxVQUFNLEVBQUdBLEtBQUQsaUJBQVcsNkJBQUMsbUJBQUQsZUFBZ0JBLEtBQWhCO0FBQXVCLFVBQUksRUFBRTtBQUE3QixPQURwQjtBQUVDLFNBQUssTUFGTjtBQUdDLFFBQUksRUFBQztBQUhOLElBekRELGVBOERDLDZCQUFDLHFCQUFEO0FBQ0MsVUFBTSxFQUFHQSxLQUFELGlCQUFXLDZCQUFDLGFBQUQ7QUFBTSxvQkFBYyxFQUFFTjtBQUF0QixPQUFvQ00sS0FBcEMsRUFEcEI7QUFFQyxTQUFLLE1BRk47QUFHQyxRQUFJLEVBQUM7QUFITixJQTlERCxDQURELENBRkQsZUF3RUMsNkJBQUMsNkJBQUQsT0F4RUQsQ0FERDtBQTRFQSxDQWpGRDs7ZUFtRmVQLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSGY7O0FBQ0E7O0FBQ08sTUFBTVUsWUFBWSxHQUFJQyxFQUFELElBQVEsTUFBT1IsUUFBUCxJQUFvQjtBQUN0REEsVUFBUSxDQUFDO0FBQ1BTLFFBQUksRUFBRTtBQURDLEdBQUQsQ0FBUjtBQUdELENBSk07Ozs7QUFNQSxNQUFNQyxVQUFVLEdBQUlGLEVBQUQsSUFBUSxNQUFPUixRQUFQLElBQW9CO0FBQ3BELE1BQUk7QUFDRixVQUFNVyxHQUFHLEdBQUcsTUFBTSx5QkFBWSxtQkFBa0JILEVBQUcsRUFBakMsQ0FBbEI7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQSw2QkFBYUgsR0FBYjtBQUNBWCxZQUFRLENBQUM7QUFDUFMsVUFBSSxFQUFFLGFBREM7QUFFUE0sYUFBTyxFQUFFSixHQUFHLENBQUNHO0FBRk4sS0FBRCxDQUFSO0FBSUQsR0FSRCxDQVFFLE9BQU9FLEtBQVAsRUFBYztBQUNkLDJCQUFXQSxLQUFYO0FBQ0FoQixZQUFRLENBQUM7QUFDUFMsVUFBSSxFQUFFLG1CQURDO0FBRVBNLGFBQU8sRUFBRTtBQUZGLEtBQUQsQ0FBUjtBQUlEO0FBQ0YsQ0FoQk07Ozs7QUFrQkEsTUFBTUUsY0FBYyxHQUFHLE1BQU0sTUFBT2pCLFFBQVAsSUFBb0I7QUFDdEQsTUFBSTtBQUNGLFVBQU1XLEdBQUcsR0FBRyxNQUFNLHlCQUFZLGlCQUFaLENBQWxCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNPLE1BQWhCO0FBQ0EsNkJBQWFQLEdBQWI7QUFDQVgsWUFBUSxDQUFDO0FBQ1BTLFVBQUksRUFBRSxrQkFEQztBQUVQTSxhQUFPLEVBQUVKLEdBQUcsQ0FBQ0c7QUFGTixLQUFELENBQVI7QUFJRCxHQVJELENBUUUsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsMkJBQVdBLEtBQVg7QUFDQWhCLFlBQVEsQ0FBQztBQUNQUyxVQUFJLEVBQUUsd0JBREM7QUFFUE0sYUFBTyxFQUFFO0FBRkYsS0FBRCxDQUFSO0FBSUQ7QUFDRixDQWhCTTs7OztBQWtCQSxNQUFNSSxVQUFVLEdBQUlMLElBQUQsSUFBVSxNQUFPZCxRQUFQLElBQW9CO0FBQ3RELE1BQUk7QUFDRlksV0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVo7QUFDQSxVQUFNSCxHQUFHLEdBQUcsTUFBTSwwQkFBYSxpQkFBYixFQUErQkcsSUFBL0IsRUFBcUM7QUFDckQsc0JBQWdCO0FBRHFDLEtBQXJDLENBQWxCO0FBR0FGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0FkLFlBQVEsQ0FBQztBQUNQUyxVQUFJLEVBQUUsYUFEQztBQUVQTSxhQUFPLEVBQUVKLEdBQUcsQ0FBQ0c7QUFGTixLQUFELENBQVI7QUFJQSw2QkFBYUgsR0FBYixFQVZFLENBV0Y7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FsQkQsQ0FrQkUsT0FBT0ssS0FBUCxFQUFjO0FBQ2QsMkJBQVdBLEtBQVg7QUFDQWhCLFlBQVEsQ0FBQztBQUNQUyxVQUFJLEVBQUUsbUJBREM7QUFFUE0sYUFBTyxFQUFFO0FBRkYsS0FBRCxDQUFSO0FBSUQ7QUFDRixDQTFCTTs7OztBQTRCQSxNQUFNSyxXQUFXLEdBQUcsQ0FBQ04sSUFBRCxFQUFPTixFQUFQLEVBQVdhLGNBQVgsS0FBOEIsTUFBT3JCLFFBQVAsSUFBb0I7QUFDM0UsTUFBSTtBQUNGLFVBQU1XLEdBQUcsR0FBRyxNQUFNLDBCQUFhLHNCQUFxQkgsRUFBRyxFQUFyQyxFQUF3Q00sSUFBeEMsRUFBOEM7QUFDOUQsc0JBQWdCO0FBRDhDLEtBQTlDLENBQWxCO0FBR0FGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0FkLFlBQVEsQ0FBQztBQUNQUyxVQUFJLEVBQUUsY0FEQztBQUVQTSxhQUFPLEVBQUVKLEdBQUcsQ0FBQ0c7QUFGTixLQUFELENBQVI7QUFJQSxVQUFNUSxJQUFJLEdBQUcsTUFBTSx5QkFBWSxpQkFBZ0JELGNBQWUsRUFBM0MsQ0FBbkI7QUFDQVQsV0FBTyxDQUFDQyxHQUFSLENBQVlTLElBQUksQ0FBQ1IsSUFBakI7QUFFQSw2QkFBYUgsR0FBYjtBQUVBWCxZQUFRLENBQUM7QUFDUFMsVUFBSSxFQUFFLFlBREM7QUFFUE0sYUFBTyxFQUFFTyxJQUFJLENBQUNSO0FBRlAsS0FBRCxDQUFSO0FBSUQsR0FsQkQsQ0FrQkUsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsMkJBQVdBLEtBQVg7QUFDQWhCLFlBQVEsQ0FBQztBQUNQUyxVQUFJLEVBQUUsb0JBREM7QUFFUE0sYUFBTyxFQUFFO0FBRkYsS0FBRCxDQUFSO0FBSUQ7QUFDRixDQTFCTTs7OztBQTRCQSxNQUFNUSxhQUFhLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEVBQXFCSixjQUFyQixLQUF3QyxNQUNuRXJCLFFBRG1FLElBRWhFO0FBQ0gsTUFBSTtBQUNGLFVBQU1XLEdBQUcsR0FBRyxNQUFNLDBCQUNmLHNCQUFxQmEsU0FBVSxJQUFHQyxPQUFRLEVBRDNCLEVBRWhCLEVBRmdCLEVBR2hCO0FBQ0Usc0JBQWdCO0FBRGxCLEtBSGdCLENBQWxCO0FBT0FiLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0FkLFlBQVEsQ0FBQztBQUNQUyxVQUFJLEVBQUUsZ0JBREM7QUFFUE0sYUFBTyxFQUFFSixHQUFHLENBQUNHO0FBRk4sS0FBRCxDQUFSO0FBSUEsVUFBTVEsSUFBSSxHQUFHLE1BQU0seUJBQVksaUJBQWdCRCxjQUFlLEVBQTNDLENBQW5CO0FBQ0FULFdBQU8sQ0FBQ0MsR0FBUixDQUFZUyxJQUFJLENBQUNSLElBQWpCO0FBRUEsNkJBQWFILEdBQWI7QUFFQVgsWUFBUSxDQUFDO0FBQ1BTLFVBQUksRUFBRSxZQURDO0FBRVBNLGFBQU8sRUFBRU8sSUFBSSxDQUFDUjtBQUZQLEtBQUQsQ0FBUjtBQUlELEdBdEJELENBc0JFLE9BQU9FLEtBQVAsRUFBYztBQUNkLDJCQUFXQSxLQUFYO0FBQ0FoQixZQUFRLENBQUM7QUFDUFMsVUFBSSxFQUFFLHNCQURDO0FBRVBNLGFBQU8sRUFBRTtBQUZGLEtBQUQsQ0FBUjtBQUlEO0FBQ0YsQ0FoQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdQOztBQVdBOztBQUNBOztBQUVBO0FBRU8sTUFBTVcsUUFBUSxHQUFHLE1BQU0sTUFBTzFCLFFBQVAsSUFBb0I7QUFDakRBLFVBQVEsQ0FBQztBQUNSUyxRQUFJLEVBQUU7QUFERSxHQUFELENBQVI7O0FBR0EsTUFBSWYscUJBQVlDLFlBQVksQ0FBQ0MsS0FBN0IsRUFBb0M7QUFDbkMsK0JBQWFELFlBQVksQ0FBQ0MsS0FBMUI7QUFDQTs7QUFFRCxNQUFJRixxQkFBWUMsWUFBWSxDQUFDZ0MsTUFBN0IsRUFBcUM7QUFDcEMsVUFBTUEsTUFBTSxHQUFHaEMsWUFBWSxDQUFDaUMsT0FBYixDQUFxQixRQUFyQixDQUFmOztBQUVBLFFBQUk7QUFDSCxZQUFNakIsR0FBRyxHQUFHLE1BQU0seUJBQVksaUJBQWdCZ0IsTUFBTyxFQUFuQyxDQUFsQixDQURHLENBRUg7O0FBQ0EsK0JBQWFoQixHQUFiO0FBRUFYLGNBQVEsQ0FBQztBQUNSUyxZQUFJLEVBQUVvQixrQkFERTtBQUVSZCxlQUFPLEVBQUVKLEdBQUcsQ0FBQ0csSUFBSixDQUFTZ0I7QUFGVixPQUFELENBQVI7QUFJQSxLQVRELENBU0UsT0FBT0MsR0FBUCxFQUFZO0FBQ2I7QUFDQSw2QkFBV0EsR0FBWDtBQUNBL0IsY0FBUSxDQUFDO0FBQ1JTLFlBQUksRUFBRXVCO0FBREUsT0FBRCxDQUFSO0FBR0E7QUFDRDtBQUNELENBNUJNOzs7O0FBOEJBLE1BQU1DLFdBQVcsR0FBSUgsSUFBRCxJQUFVLE1BQU85QixRQUFQLElBQW9CO0FBQ3hEQSxVQUFRLENBQUM7QUFDUlMsUUFBSSxFQUFFO0FBREUsR0FBRCxDQUFSOztBQUdBLE1BQUlmLHFCQUFZQyxZQUFZLENBQUNDLEtBQTdCLEVBQW9DO0FBQ25DLCtCQUFhRCxZQUFZLENBQUNDLEtBQTFCO0FBQ0E7O0FBRUQsTUFBSUYscUJBQVlDLFlBQVksQ0FBQ2dDLE1BQTdCLEVBQXFDO0FBQ3BDLFVBQU1BLE1BQU0sR0FBR2hDLFlBQVksQ0FBQ2lDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBZjs7QUFFQSxRQUFJO0FBQ0g7QUFDQSxZQUFNLHlCQUFZLGlCQUFnQkQsTUFBTyxFQUFuQyxDQUFOO0FBRUEzQixjQUFRLENBQUM7QUFDUlMsWUFBSSxFQUFFb0Isa0JBREU7QUFFUmQsZUFBTyxFQUFFZTtBQUZELE9BQUQsQ0FBUjtBQUlBLEtBUkQsQ0FRRSxPQUFPQyxHQUFQLEVBQVk7QUFDYi9CLGNBQVEsQ0FBQztBQUNSUyxZQUFJLEVBQUV1QjtBQURFLE9BQUQsQ0FBUjtBQUdBO0FBQ0Q7QUFDRCxDQXpCTTs7OztBQTJCQSxNQUFNRSxRQUFRLEdBQUlwQixJQUFELElBQVUsTUFBT2QsUUFBUCxJQUFvQjtBQUNyREEsVUFBUSxDQUFDO0FBQ1JTLFFBQUksRUFBRTtBQURFLEdBQUQsQ0FBUjtBQUdBLFFBQU0wQixPQUFPLEdBQUc7QUFDZixvQkFBZ0I7QUFERCxHQUFoQjtBQUlBLFFBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWV4QixJQUFmLENBQWI7O0FBRUEsTUFBSTtBQUNILFVBQU1ILEdBQUcsR0FBRyxNQUFNLDBCQUFZLGlCQUFaLEVBQStCeUIsSUFBL0IsRUFBcUNELE9BQXJDLENBQWxCO0FBRUFuQyxZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFRSxHQUFHLENBQUNPLE1BQUosS0FBZSxDQUFmLEdBQW1CcUIsdUJBQW5CLEdBQXNDQyxvQkFEcEM7QUFFUnpCLGFBQU8sRUFBRUosR0FBRyxDQUFDRztBQUZMLEtBQUQsQ0FBUjtBQUtBLDZCQUFhSCxHQUFiO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FYLFlBQVEsQ0FBQzBCLFFBQVEsRUFBVCxDQUFSO0FBQ0EsR0FaRCxDQVlFLE9BQU9LLEdBQVAsRUFBWTtBQUNiO0FBQ0EsMkJBQVdBLEdBQVg7QUFDQS9CLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUrQjtBQURFLEtBQUQsQ0FBUjtBQUdBO0FBQ0QsQ0E3Qk07Ozs7QUErQkEsTUFBTUMsS0FBSyxHQUNqQixDQUFDO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUFELEtBQ0EsTUFBTzNDLFFBQVAsSUFBb0I7QUFDbkJBLFVBQVEsQ0FBQztBQUNSUyxRQUFJLEVBQUU7QUFERSxHQUFELENBQVI7QUFHQSxRQUFNMEIsT0FBTyxHQUFHO0FBQ2Ysb0JBQWdCO0FBREQsR0FBaEI7QUFJQSxRQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVJLFNBQUY7QUFBU0M7QUFBVCxHQUFmLENBQWI7O0FBRUEsTUFBSTtBQUFBOztBQUNILFVBQU1oQyxHQUFHLEdBQUcsTUFBTSwwQkFBWSxnQkFBWixFQUE4QnlCLElBQTlCLEVBQW9DRCxPQUFwQyxDQUFsQjtBQUVBdkIsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFFQVgsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRUUsR0FBRyxDQUFDTyxNQUFKLEtBQWUsQ0FBZixHQUFtQjBCLG9CQUFuQixHQUFtQ0MsaUJBRGpDO0FBRVI5QixhQUFPLEVBQUU7QUFBRVksY0FBTSxlQUFFaEIsR0FBRyxDQUFDRyxJQUFOLGdFQUFFLFVBQVVnQixJQUFaLG1EQUFFLGVBQWdCSCxNQUExQjtBQUFrQy9CLGFBQUssZ0JBQUVlLEdBQUcsQ0FBQ0csSUFBTiwrQ0FBRSxXQUFVbEI7QUFBbkQ7QUFGRCxLQUFELENBQVI7QUFLQUksWUFBUSxDQUFDMEIsUUFBUSxFQUFULENBQVI7QUFDQSw2QkFBYWYsR0FBYjtBQUNBLEdBWkQsQ0FZRSxPQUFPb0IsR0FBUCxFQUFZO0FBQ2JuQixXQUFPLENBQUNDLEdBQVIsQ0FBWWtCLEdBQVo7QUFDQSwyQkFBV0EsR0FBWDtBQUNBL0IsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRW9DO0FBREUsS0FBRCxDQUFSO0FBR0E7QUFDRCxDQS9CSzs7OztBQWlDQSxNQUFNQyxNQUFNLEdBQUcsTUFBTzlDLFFBQUQsSUFBYztBQUN6QyxNQUFJTixpQkFBSixFQUFjQyxZQUFZLENBQUNvRCxLQUFiO0FBQ2QvQyxVQUFRLENBQUM7QUFDUlMsUUFBSSxFQUFFO0FBREUsR0FBRCxDQUFSO0FBR0EsQ0FMTTs7OztBQU9BLE1BQU11QyxjQUFjLEdBQzFCLENBQUM7QUFBRU47QUFBRixDQUFELEtBQ0EsTUFBTzFDLFFBQVAsSUFBb0I7QUFDbkIsUUFBTWlELE1BQU0sR0FBRztBQUNkZCxXQUFPLEVBQUU7QUFDUixzQkFBZ0I7QUFEUjtBQURLLEdBQWY7QUFLQSxRQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVJO0FBQUYsR0FBZixDQUFiOztBQUVBLE1BQUk7QUFDSCxVQUFNL0IsR0FBRyxHQUFHLE1BQU0sMEJBQVkscUJBQVosRUFBbUN5QixJQUFuQyxFQUF5Q2EsTUFBekMsQ0FBbEI7QUFFQSxVQUFNQyxhQUFhLEdBQUd2QyxHQUFHLENBQUNHLElBQUosQ0FBU3FDLFFBQS9CLENBSEcsQ0FJSDs7QUFDQUQsaUJBQWEsQ0FBQ0UsT0FBZCxDQUF1QkMsT0FBRCxJQUFhckQsUUFBUSxFQUFFcUQsT0FBTyxDQUFDQyxHQUFSLEVBQWEsUUFBZixFQUEzQztBQUNBdEQsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRThDLHVCQURFO0FBRVJ4QyxhQUFPLEVBQUVKLEdBQUcsQ0FBQ0c7QUFGTCxLQUFELENBQVI7QUFJQSxHQVZELENBVUUsT0FBT2lCLEdBQVAsRUFBWTtBQUNiLFVBQU15QixNQUFNLEdBQUd6QixHQUFHLElBQUlBLEdBQUcsQ0FBQzBCLFFBQUosQ0FBYTNDLElBQWIsQ0FBa0IwQyxNQUF4Qzs7QUFDQSxRQUFJQSxNQUFKLEVBQVksQ0FDWDs7QUFDRHhELFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUVpRDtBQURFLEtBQUQsQ0FBUjtBQUdBO0FBQ0QsQ0E1Qks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBQ0E7O0FBRU8sTUFBTUMsZUFBZSxHQUFHLE1BQU0sTUFBTzNELFFBQVAsSUFBb0I7QUFDeEQsTUFBSTtBQUNILFVBQU1XLEdBQUcsR0FBRyxNQUFNLHlCQUFXLG9CQUFYLENBQWxCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FYLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsa0JBREU7QUFFUk0sYUFBTyxFQUFFSixHQUFHLENBQUNHO0FBRkwsS0FBRCxDQUFSO0FBSUEsNkJBQWFILEdBQWI7QUFDQSxHQVJELENBUUUsT0FBT0ssS0FBUCxFQUFjO0FBQ2YsMkJBQVdBLEtBQVg7QUFDQWhCLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsd0JBREU7QUFFUk0sYUFBTyxFQUFFO0FBRkQsS0FBRCxDQUFSO0FBSUE7QUFDRCxDQWhCTTs7OztBQWtCQSxNQUFNNkMsZUFBZSxHQUFHLE1BQU0sTUFBTzVELFFBQVAsSUFBb0I7QUFDeERBLFVBQVEsQ0FBQztBQUNSUyxRQUFJLEVBQUUsa0JBREU7QUFFUk0sV0FBTyxFQUFFO0FBRkQsR0FBRCxDQUFSO0FBSUEsQ0FMTTs7OztBQU9BLE1BQU04QyxhQUFhLEdBQUl4QyxjQUFELElBQW9CLE1BQU9yQixRQUFQLElBQW9CO0FBQ3BFLE1BQUk7QUFDSCxVQUFNVyxHQUFHLEdBQUcsTUFBTSx5QkFBWSxzQkFBcUJVLGNBQWUsRUFBaEQsQ0FBbEI7QUFDQXJCLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsZ0JBREU7QUFFUk0sYUFBTyxFQUFFSixHQUFHLENBQUNHLElBQUosQ0FBU2dEO0FBRlYsS0FBRCxDQUFSO0FBSUEsNkJBQWFuRCxHQUFiO0FBQ0EsR0FQRCxDQU9FLE9BQU9LLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBQ0FKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRyxLQUFaO0FBQ0FoQixZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLHNCQURFO0FBRVJNLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0FoQk07Ozs7QUFrQkEsTUFBTWdELGFBQWEsR0FBSWpELElBQUQsSUFBVSxNQUFPZCxRQUFQLElBQW9CO0FBQzFELE1BQUk7QUFDSFksV0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVo7QUFDQSxVQUFNSCxHQUFHLEdBQUcsTUFBTSwwQkFBWSxvQkFBWixFQUFrQ0csSUFBbEMsRUFBd0M7QUFDekQsc0JBQWdCO0FBRHlDLEtBQXhDLENBQWxCO0FBR0FGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0FkLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsaUJBREU7QUFFUk0sYUFBTyxFQUFFSixHQUFHLENBQUNHO0FBRkwsS0FBRCxDQUFSO0FBSUEsVUFBTVEsSUFBSSxHQUFHLE1BQU0seUJBQVcsb0JBQVgsQ0FBbkI7QUFDQXRCLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsa0JBREU7QUFFUk0sYUFBTyxFQUFFTyxJQUFJLENBQUNSO0FBRk4sS0FBRCxDQUFSO0FBSUEsNkJBQWFILEdBQWI7QUFDQSxHQWhCRCxDQWdCRSxPQUFPSyxLQUFQLEVBQWM7QUFDZiwyQkFBV0EsS0FBWDtBQUNBaEIsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSxzQkFERTtBQUVSTSxhQUFPLEVBQUU7QUFGRCxLQUFELENBQVI7QUFJQTtBQUNELENBeEJNOzs7O0FBMEJBLE1BQU1pRCxjQUFjLEdBQUcsQ0FBQ2xELElBQUQsRUFBT04sRUFBUCxLQUFjLE1BQU9SLFFBQVAsSUFBb0I7QUFDL0QsTUFBSTtBQUNILFVBQU1XLEdBQUcsR0FBRyxNQUFNLDBCQUFhLHlCQUF3QkgsRUFBRyxFQUF4QyxFQUEyQ00sSUFBM0MsRUFBaUQ7QUFDbEUsc0JBQWdCO0FBRGtELEtBQWpELENBQWxCO0FBR0FkLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsa0JBREU7QUFFUk0sYUFBTyxFQUFFSixHQUFHLENBQUNHO0FBRkwsS0FBRCxDQUFSO0FBSUEsVUFBTVEsSUFBSSxHQUFHLE1BQU0seUJBQVcsb0JBQVgsQ0FBbkI7QUFDQXRCLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsa0JBREU7QUFFUk0sYUFBTyxFQUFFTyxJQUFJLENBQUNSO0FBRk4sS0FBRCxDQUFSO0FBSUEsNkJBQWFILEdBQWI7QUFDQSxHQWRELENBY0UsT0FBT0ssS0FBUCxFQUFjO0FBQ2YsMkJBQVdBLEtBQVg7QUFDQWhCLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsdUJBREU7QUFFUk0sYUFBTyxFQUFFO0FBRkQsS0FBRCxDQUFSO0FBSUE7QUFDRCxDQXRCTTs7OztBQXdCQSxNQUFNa0QsZ0JBQWdCLEdBQUl6RCxFQUFELElBQVEsTUFBT1IsUUFBUCxJQUFvQjtBQUMzRCxNQUFJO0FBQ0gsVUFBTVcsR0FBRyxHQUFHLE1BQU0sMEJBQ2hCLHlCQUF3QkgsRUFBRyxFQURYLEVBRWpCLEVBRmlCLEVBR2pCO0FBQ0Msc0JBQWdCO0FBRGpCLEtBSGlCLENBQWxCO0FBT0FSLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsb0JBREU7QUFFUk0sYUFBTyxFQUFFSixHQUFHLENBQUNHO0FBRkwsS0FBRCxDQUFSO0FBSUEsVUFBTVEsSUFBSSxHQUFHLE1BQU0seUJBQVcsb0JBQVgsQ0FBbkI7QUFDQXRCLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsa0JBREU7QUFFUk0sYUFBTyxFQUFFTyxJQUFJLENBQUNSO0FBRk4sS0FBRCxDQUFSO0FBSUEsNkJBQWFILEdBQWI7QUFDQSxHQWxCRCxDQWtCRSxPQUFPSyxLQUFQLEVBQWM7QUFDZiwyQkFBV0EsS0FBWDtBQUNBaEIsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSx5QkFERTtBQUVSTSxhQUFPLEVBQUU7QUFGRCxLQUFELENBQVI7QUFJQTtBQUNELENBMUJNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHUDs7QUFHTyxNQUFNbUQsWUFBWSxHQUFJdkQsR0FBRCxJQUFTO0FBQ2pDQSxLQUFHLENBQUNPLE1BQUosSUFBYyxDQUFkLEdBQWtCaUQscUJBQU1DLE9BQU4sQ0FBY3pELEdBQUcsQ0FBQzBDLE9BQWxCLEVBQTJCO0FBQ3pDZ0IsWUFBUSxFQUFFO0FBRCtCLEdBQTNCLENBQWxCLEdBRUtGLHFCQUFNbkQsS0FBTixDQUFZTCxHQUFHLENBQUMwQyxPQUFoQixFQUF5QjtBQUMxQmdCLFlBQVEsRUFBRTtBQURnQixHQUF6QixDQUZMO0FBS0gsQ0FOTTs7OztBQVFBLE1BQU1DLFVBQVUsR0FBSXZDLEdBQUQsSUFBUztBQUMvQm9DLHVCQUFNbkQsS0FBTixDQUFZZSxHQUFHLENBQUNzQixPQUFoQixFQUF5QjtBQUNyQmdCLFlBQVEsRUFBRTtBQURXLEdBQXpCO0FBR0gsQ0FKTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYUDs7QUFDQTs7QUFDQTs7QUFFTyxNQUFNRSxTQUFTLEdBQUlsRCxjQUFELElBQW9CLE1BQU9yQixRQUFQLElBQW9CO0FBQ2hFLE1BQUk7QUFDSCxVQUFNVyxHQUFHLEdBQUcsTUFBTSx5QkFBWSxpQkFBZ0JVLGNBQWUsRUFBM0MsQ0FBbEI7QUFDQVQsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQWQsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSxZQURFO0FBRVJNLGFBQU8sRUFBRUosR0FBRyxDQUFDRztBQUZMLEtBQUQsQ0FBUjtBQUlBLDZCQUFhSCxHQUFiO0FBQ0EsR0FSRCxDQVFFLE9BQU9LLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBQ0FoQixZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLGtCQURFO0FBRVJNLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0FoQk07Ozs7QUFrQkEsTUFBTXlELFFBQVEsR0FBRyxDQUFDMUQsSUFBRCxFQUFPTyxjQUFQLEtBQTBCLE1BQU9yQixRQUFQLElBQW9CO0FBQ3JFWSxTQUFPLENBQUNDLEdBQVIsQ0FBWVEsY0FBWjs7QUFDQSxNQUFJO0FBQ0hULFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaO0FBQ0EsVUFBTUgsR0FBRyxHQUFHLE1BQU0sMEJBQWEsZUFBYixFQUE2QkcsSUFBN0IsRUFBbUM7QUFDcEQsc0JBQWdCO0FBRG9DLEtBQW5DLENBQWxCO0FBR0EsNkJBQWFILEdBQWI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQWQsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSxXQURFO0FBRVJNLGFBQU8sRUFBRUosR0FBRyxDQUFDRztBQUZMLEtBQUQsQ0FBUixDQVBHLENBV0g7O0FBQ0EsVUFBTVEsSUFBSSxHQUFHLE1BQU0seUJBQVksaUJBQWdCRCxjQUFlLEVBQTNDLENBQW5CO0FBQ0FyQixZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLFlBREU7QUFFUk0sYUFBTyxFQUFFTyxJQUFJLENBQUNSO0FBRk4sS0FBRCxDQUFSO0FBSUEsR0FqQkQsQ0FpQkUsT0FBT0UsS0FBUCxFQUFjO0FBQ2YsMkJBQVdBLEtBQVg7QUFDQWhCLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsaUJBREU7QUFFUk0sYUFBTyxFQUFFO0FBRkQsS0FBRCxDQUFSO0FBSUE7QUFDRCxDQTFCTTs7OztBQTRCQSxNQUFNMEQsU0FBUyxHQUFHLENBQUMzRCxJQUFELEVBQU9OLEVBQVAsRUFBV2EsY0FBWCxLQUE4QixNQUFPckIsUUFBUCxJQUFvQjtBQUMxRSxNQUFJO0FBQ0gsVUFBTVcsR0FBRyxHQUFHLE1BQU0sMEJBQWEsb0JBQW1CSCxFQUFHLEVBQW5DLEVBQXNDTSxJQUF0QyxFQUE0QztBQUM3RCxzQkFBZ0I7QUFENkMsS0FBNUMsQ0FBbEI7QUFHQUYsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQWQsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSxZQURFO0FBRVJNLGFBQU8sRUFBRUosR0FBRyxDQUFDRztBQUZMLEtBQUQsQ0FBUjtBQUlBLDZCQUFhSCxHQUFiO0FBQ0EsVUFBTVcsSUFBSSxHQUFHLE1BQU0seUJBQVksaUJBQWdCRCxjQUFlLEVBQTNDLENBQW5CO0FBQ0FyQixZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLFlBREU7QUFFUk0sYUFBTyxFQUFFTyxJQUFJLENBQUNSO0FBRk4sS0FBRCxDQUFSO0FBSUEsR0FmRCxDQWVFLE9BQU9FLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBQ0FoQixZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLGtCQURFO0FBRVJNLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0F2Qk07Ozs7QUF5QkEsTUFBTTJELFdBQVcsR0FBRyxDQUFDakQsT0FBRCxFQUFVSixjQUFWLEtBQTZCLE1BQU9yQixRQUFQLElBQW9CO0FBQzNFWSxTQUFPLENBQUNDLEdBQVIsQ0FBWVEsY0FBWjs7QUFDQSxNQUFJO0FBQ0gsVUFBTVYsR0FBRyxHQUFHLE1BQU0sMEJBQ2hCLG9CQUFtQmMsT0FBUSxFQURYLEVBRWpCLEVBRmlCLEVBR2pCO0FBQ0Msc0JBQWdCO0FBRGpCLEtBSGlCLENBQWxCO0FBT0EsNkJBQWFkLEdBQWI7QUFDQVgsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSxZQURFO0FBRVJNLGFBQU8sRUFBRUosR0FBRyxDQUFDRyxJQUFKLENBQVNnQjtBQUZWLEtBQUQsQ0FBUjtBQUlBOUIsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSxjQURFO0FBRVJNLGFBQU8sRUFBRUosR0FBRyxDQUFDRztBQUZMLEtBQUQsQ0FBUjtBQUlBLFVBQU1RLElBQUksR0FBRyxNQUFNLHlCQUFZLGlCQUFnQkQsY0FBZSxFQUEzQyxDQUFuQjtBQUNBckIsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSxZQURFO0FBRVJNLGFBQU8sRUFBRU8sSUFBSSxDQUFDUjtBQUZOLEtBQUQsQ0FBUjtBQUlBLEdBdEJELENBc0JFLE9BQU9FLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBRUFoQixZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLG9CQURFO0FBRVJNLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0FoQ007Ozs7QUFrQ0EsTUFBTTRELFdBQVcsR0FBRyxDQUFDbkUsRUFBRCxFQUFLYSxjQUFMLEtBQXdCLE1BQU9yQixRQUFQLElBQW9CO0FBQ3RFWSxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFTCxNQUFGO0FBQU1hO0FBQU4sR0FBWjs7QUFDQSxNQUFJO0FBQ0gsVUFBTVYsR0FBRyxHQUFHLE1BQU0sMEJBQ2hCLG9CQUFtQkgsRUFBRyxFQUROLEVBRWpCLEVBRmlCLEVBR2pCO0FBQ0Msc0JBQWdCO0FBRGpCLEtBSGlCLENBQWxCO0FBT0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0EsNkJBQWFILEdBQWI7QUFDQVgsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSxjQURFO0FBRVJNLGFBQU8sRUFBRUosR0FBRyxDQUFDRztBQUZMLEtBQUQsQ0FBUjtBQUlBLFVBQU1RLElBQUksR0FBRyxNQUFNLHlCQUFZLGlCQUFnQkQsY0FBZSxFQUEzQyxDQUFuQjtBQUNBckIsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSxZQURFO0FBRVJNLGFBQU8sRUFBRU8sSUFBSSxDQUFDUjtBQUZOLEtBQUQsQ0FBUjtBQUlBLEdBbkJELENBbUJFLE9BQU9FLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBQ0FoQixZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLG9CQURFO0FBRVJNLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0E1Qk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0EsTUFBTTZELFNBQVMsR0FBRyxXQUFsQjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7O0FBRUEsTUFBTWpDLGFBQWEsR0FBRyxlQUF0Qjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsWUFBbkI7O0FBQ0EsTUFBTU4sZ0JBQWdCLEdBQUcsa0JBQXpCOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0Qjs7QUFDQSxNQUFNZSxnQkFBZ0IsR0FBRyxrQkFBekI7O0FBQ0EsTUFBTUcscUJBQXFCLEdBQUcsdUJBQTlCOztBQUVBLE1BQU1vQixNQUFNLEdBQUcsUUFBZjs7QUFFQSxNQUFNakQsV0FBVyxHQUFHLFlBQXBCOztBQUNBLE1BQU1HLFVBQVUsR0FBRyxZQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JQOztBQUNBOzs7O0FBRU8sTUFBTStDLGFBQWEsR0FBSXZFLEVBQUQsSUFBUSxNQUFPUixRQUFQLElBQW9CO0FBQ3hEWSxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsRUFBWjs7QUFDQSxRQUFNd0UsZUFBZSxHQUFHakYsZUFBTWtGLFFBQU4sR0FBaUJDLEVBQWpCLENBQW9CQyxVQUE1Qzs7QUFDQSxNQUFJLENBQUNILGVBQWUsQ0FBQ0ksUUFBaEIsQ0FBeUI1RSxFQUF6QixDQUFMLEVBQW1DO0FBQ2xDd0UsbUJBQWUsQ0FBQ0ssSUFBaEIsQ0FBcUI3RSxFQUFyQjtBQUNBLEdBRkQsTUFFTztBQUNOd0UsbUJBQWUsQ0FBQ00sTUFBaEIsQ0FBdUJOLGVBQWUsQ0FBQ08sT0FBaEIsQ0FBd0IvRSxFQUF4QixDQUF2QixFQUFvRCxDQUFwRDtBQUNBOztBQUVEUixVQUFRLENBQUM7QUFDUlMsUUFBSSxFQUFFLGlCQURFO0FBRVJNLFdBQU8sRUFBRWlFO0FBRkQsR0FBRCxDQUFSO0FBSUEsQ0FiTTs7OztBQWVBLE1BQU1RLGNBQWMsR0FBRyxNQUFNLE1BQU94RixRQUFQLElBQW9CO0FBQ3ZELFFBQU15RixXQUFXLEdBQ2hCMUYsZUFBTWtGLFFBQU4sR0FBaUJDLEVBQWpCLENBQW9CTyxXQUFwQixLQUFvQyxNQUFwQyxHQUE2QyxPQUE3QyxHQUF1RCxNQUR4RDtBQUVBLE1BQUkvRixpQkFBSixFQUFjQyxZQUFZLENBQUMrRixPQUFiLENBQXFCLE1BQXJCLEVBQTZCRCxXQUE3QjtBQUVkekYsVUFBUSxDQUFDO0FBQ1JTLFFBQUksRUFBRSxrQkFERTtBQUVSTSxXQUFPLEVBQUUwRTtBQUZELEdBQUQsQ0FBUjtBQUlBLENBVE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJQOztBQUNBOztBQUlPLE1BQU1FLFFBQVEsR0FBSW5GLEVBQUQsSUFBUSxNQUFPUixRQUFQLElBQW9CO0FBQ25ELE1BQUk7QUFDSCxVQUFNVyxHQUFHLEdBQUcsTUFBTSx5QkFBWSxpQkFBZ0JILEVBQUcsRUFBL0IsQ0FBbEI7QUFDQSw2QkFBYUcsR0FBYjtBQUNBWCxZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLFdBREU7QUFFUk0sYUFBTyxFQUFFSixHQUFHLENBQUNHO0FBRkwsS0FBRCxDQUFSO0FBSUEsR0FQRCxDQU9FLE9BQU9FLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBQ0FoQixZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLGlCQURFO0FBRVJNLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0FmTTs7OztBQWlCQSxNQUFNNkUsUUFBUSxHQUFHLENBQUM5RSxJQUFELEVBQU9OLEVBQVAsRUFBV2EsY0FBWCxLQUE4QixNQUFPckIsUUFBUCxJQUFvQjtBQUd6RSxNQUFJO0FBQ0gsVUFBTVcsR0FBRyxHQUFHLE1BQU0sMEJBQWEsaUJBQWdCSCxFQUFHLEVBQWhDLEVBQW1DTSxJQUFuQyxFQUF5QztBQUMxRCxzQkFBZ0I7QUFEMEMsS0FBekMsQ0FBbEI7QUFHQSw2QkFBYUgsR0FBYjtBQUNBWCxZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLFdBREU7QUFFUk0sYUFBTyxFQUFFSixHQUFHLENBQUNHO0FBRkwsS0FBRCxDQUFSO0FBS0EsVUFBTStFLFFBQVEsR0FBRyxNQUFNLHlCQUFZLGlCQUFnQnhFLGNBQWUsRUFBM0MsQ0FBdkI7QUFDQVQsV0FBTyxDQUFDQyxHQUFSLENBQVlnRixRQUFaO0FBRUE3RixZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLFlBREU7QUFFUk0sYUFBTyxFQUFFOEUsUUFBUSxDQUFDL0U7QUFGVixLQUFELENBQVI7QUFJQSxHQWpCRCxDQWlCRSxPQUFPRSxLQUFQLEVBQWM7QUFFZiwyQkFBV0EsS0FBWDtBQUNBaEIsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRSxpQkFERTtBQUVSTSxhQUFPLEVBQUU7QUFGRCxLQUFELENBQVI7QUFJQTtBQUNELENBNUJNOzs7O0FBOEJBLE1BQU0rRSxTQUFTLEdBQUcsQ0FBQ2hGLElBQUQsRUFBT04sRUFBUCxFQUFXYSxjQUFYLEtBQThCLE1BQU9yQixRQUFQLElBQW9CO0FBQzFFLE1BQUk7QUFDSCxVQUFNVyxHQUFHLEdBQUcsTUFBTSwwQkFBYSxvQkFBbUJILEVBQUcsRUFBbkMsRUFBc0NNLElBQXRDLEVBQTRDO0FBQzdELHNCQUFnQjtBQUQ2QyxLQUE1QyxDQUFsQjtBQUdBRixXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFoQjtBQUNBZCxZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLFlBREU7QUFFUk0sYUFBTyxFQUFFSixHQUFHLENBQUNHO0FBRkwsS0FBRCxDQUFSO0FBSUEsNkJBQWFILEdBQWI7QUFFQSxVQUFNa0YsUUFBUSxHQUFHLE1BQU0seUJBQVksaUJBQWdCeEUsY0FBZSxFQUEzQyxDQUF2QjtBQUVBVCxXQUFPLENBQUNDLEdBQVIsQ0FBWWdGLFFBQVEsQ0FBQy9FLElBQXJCO0FBRUFkLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsWUFERTtBQUVSTSxhQUFPLEVBQUU4RSxRQUFRLENBQUMvRTtBQUZWLEtBQUQsQ0FBUjtBQUlBLEdBbkJELENBbUJFLE9BQU9FLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBQ0FoQixZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLGtCQURFO0FBRVJNLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0EzQk07Ozs7QUE2QkEsTUFBTWdGLFdBQVcsR0FDdkIsQ0FBQ0MsT0FBRCxFQUFVdkUsT0FBVixFQUFtQkosY0FBbkIsS0FBc0MsTUFBT3JCLFFBQVAsSUFBb0I7QUFDekQsTUFBSTtBQUNILFVBQU1XLEdBQUcsR0FBRyxNQUFNLDBCQUNoQixvQkFBbUJxRixPQUFRLElBQUd2RSxPQUFRLEVBRHRCLEVBRWpCLEVBRmlCLEVBR2pCO0FBQ0Msc0JBQWdCO0FBRGpCLEtBSGlCLENBQWxCO0FBT0FiLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0FkLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsY0FERTtBQUVSTSxhQUFPLEVBQUVKLEdBQUcsQ0FBQ0c7QUFGTCxLQUFELENBQVI7QUFJQSxVQUFNUSxJQUFJLEdBQUcsTUFBTSx5QkFBWSxpQkFBZ0JELGNBQWUsRUFBM0MsQ0FBbkI7QUFDQVQsV0FBTyxDQUFDQyxHQUFSLENBQVlTLElBQUksQ0FBQ1IsSUFBakI7QUFDQSw2QkFBYUgsR0FBYjtBQUNBWCxZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLFlBREU7QUFFUk0sYUFBTyxFQUFFTyxJQUFJLENBQUNSO0FBRk4sS0FBRCxDQUFSO0FBSUEsR0FwQkQsQ0FvQkUsT0FBT0UsS0FBUCxFQUFjO0FBQ2YsMkJBQVdBLEtBQVg7QUFDQWhCLFlBQVEsQ0FBQztBQUNSUyxVQUFJLEVBQUUsb0JBREU7QUFFUk0sYUFBTyxFQUFFO0FBRkQsS0FBRCxDQUFSO0FBSUE7QUFDRCxDQTdCSzs7OztBQStCQSxNQUFNa0YsV0FBVyxHQUFJQyxLQUFELElBQVlsRyxRQUFELElBQWM7QUFDbkQsTUFBSTtBQUNIQSxZQUFRLENBQUM7QUFDUlMsVUFBSSxFQUFFLGNBREU7QUFFUk0sYUFBTyxFQUFFbUY7QUFGRCxLQUFELENBQVI7QUFJQSxHQUxELENBS0UsT0FBT2xGLEtBQVAsRUFBYztBQUNmaEIsWUFBUSxDQUFDO0FBQ1JTLFVBQUksRUFBRTtBQURFLEtBQUQsQ0FBUjtBQUdBO0FBQ0QsQ0FYTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSFA7Ozs7QUFDTyxNQUFNMEYsR0FBRyxHQUFHLENBQUM7QUFBRUMsTUFBSSxHQUFHLEVBQVQ7QUFBYUMsT0FBSyxHQUFHO0FBQXJCLENBQUQsa0JBQ2xCO0FBQ0MsT0FBSyxFQUFDLDRCQURQO0FBRUMsT0FBSyxFQUFFRCxJQUZSO0FBR0MsUUFBTSxFQUFFQSxJQUhUO0FBSUMsU0FBTyxFQUFDLFdBSlQ7QUFLQyxNQUFJLEVBQUMsTUFMTjtBQU1DLFFBQU0sRUFBRUMsS0FOVDtBQU9DLGFBQVcsRUFBQyxLQVBiO0FBUUMsZUFBYSxFQUFDLFFBUmY7QUFTQyxnQkFBYyxFQUFDO0FBVGhCLGdCQVVDO0FBQU0sSUFBRSxFQUFDLElBQVQ7QUFBYyxJQUFFLEVBQUMsR0FBakI7QUFBcUIsSUFBRSxFQUFDLElBQXhCO0FBQTZCLElBQUUsRUFBQztBQUFoQyxFQVZELGVBV0M7QUFBTSxJQUFFLEVBQUMsR0FBVDtBQUFhLElBQUUsRUFBQyxJQUFoQjtBQUFxQixJQUFFLEVBQUMsSUFBeEI7QUFBNkIsSUFBRSxFQUFDO0FBQWhDLEVBWEQsQ0FETTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUDs7OztBQUVPLE1BQU1DLFVBQVUsR0FBRyxDQUFDO0FBQUVGLE1BQUksR0FBRyxFQUFUO0FBQWFDLE9BQUssR0FBRztBQUFyQixDQUFELGtCQUN6QjtBQUNDLE9BQUssRUFBQyw0QkFEUDtBQUVDLE9BQUssRUFBRUQsSUFGUjtBQUdDLFFBQU0sRUFBRUEsSUFIVDtBQUlDLFNBQU8sRUFBQyxXQUpUO0FBS0MsTUFBSSxFQUFDLE1BTE47QUFNQyxRQUFNLEVBQUVDLEtBTlQ7QUFPQyxhQUFXLEVBQUMsS0FQYjtBQVFDLGVBQWEsRUFBQyxRQVJmO0FBU0MsZ0JBQWMsRUFBQztBQVRoQixnQkFVQztBQUFNLEdBQUMsRUFBQztBQUFSLEVBVkQsQ0FETTs7OztBQWVBLE1BQU1FLFlBQVksR0FBRyxDQUFDO0FBQUVILE1BQUksR0FBRyxFQUFUO0FBQWFDLE9BQUssR0FBRztBQUFyQixDQUFELGtCQUMzQjtBQUNDLE9BQUssRUFBQyw0QkFEUDtBQUVDLE9BQUssRUFBRUQsSUFGUjtBQUdDLFFBQU0sRUFBRUEsSUFIVDtBQUlDLFNBQU8sRUFBQyxXQUpUO0FBS0MsTUFBSSxFQUFDLE1BTE47QUFNQyxRQUFNLEVBQUVDLEtBTlQ7QUFPQyxhQUFXLEVBQUMsS0FQYjtBQVFDLGVBQWEsRUFBQyxRQVJmO0FBU0MsZ0JBQWMsRUFBQztBQVRoQixnQkFVQztBQUFNLEdBQUMsRUFBQztBQUFSLEVBVkQsQ0FETTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlA7Ozs7QUFDTyxNQUFNRyxLQUFLLEdBQUcsQ0FBQztBQUFFSixNQUFJLEdBQUcsRUFBVDtBQUFhQyxPQUFLLEdBQUc7QUFBckIsQ0FBRCxrQkFDcEI7QUFDQyxPQUFLLEVBQUMsNEJBRFA7QUFFQyxPQUFLLEVBQUVELElBRlI7QUFHQyxRQUFNLEVBQUVBLElBSFQ7QUFJQyxTQUFPLEVBQUMsV0FKVDtBQUtDLE1BQUksRUFBQyxNQUxOO0FBTUMsUUFBTSxFQUFFQyxLQU5UO0FBT0MsYUFBVyxFQUFDLEtBUGI7QUFRQyxlQUFhLEVBQUMsUUFSZjtBQVNDLGdCQUFjLEVBQUM7QUFUaEIsZ0JBVUM7QUFBTSxJQUFFLEVBQUMsSUFBVDtBQUFjLElBQUUsRUFBQyxHQUFqQjtBQUFxQixJQUFFLEVBQUMsR0FBeEI7QUFBNEIsSUFBRSxFQUFDO0FBQS9CLEVBVkQsZUFXQztBQUFNLElBQUUsRUFBQyxHQUFUO0FBQWEsSUFBRSxFQUFDLEdBQWhCO0FBQW9CLElBQUUsRUFBQyxJQUF2QjtBQUE0QixJQUFFLEVBQUM7QUFBL0IsRUFYRCxDQURNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RQOzs7O0FBQ08sTUFBTUksTUFBTSxHQUFHLENBQUM7QUFBRUwsTUFBSSxHQUFHLEVBQVQ7QUFBYUMsT0FBSyxHQUFHO0FBQXJCLENBQUQsa0JBQ3BCO0FBQ0UsT0FBSyxFQUFDLDRCQURSO0FBRUUsT0FBSyxFQUFFRCxJQUZUO0FBR0UsUUFBTSxFQUFFQSxJQUhWO0FBSUUsU0FBTyxFQUFDLFdBSlY7QUFLRSxNQUFJLEVBQUMsTUFMUDtBQU1FLFFBQU0sRUFBRUMsS0FOVjtBQU9FLGFBQVcsRUFBQyxHQVBkO0FBUUUsZUFBYSxFQUFDLFFBUmhCO0FBU0UsZ0JBQWMsRUFBQztBQVRqQixnQkFXRTtBQUFVLFFBQU0sRUFBQztBQUFqQixFQVhGLGVBWUU7QUFBTSxHQUFDLEVBQUM7QUFBUixFQVpGLGVBYUU7QUFBTSxJQUFFLEVBQUMsSUFBVDtBQUFjLElBQUUsRUFBQyxJQUFqQjtBQUFzQixJQUFFLEVBQUMsSUFBekI7QUFBOEIsSUFBRSxFQUFDO0FBQWpDLEVBYkYsZUFjRTtBQUFNLElBQUUsRUFBQyxJQUFUO0FBQWMsSUFBRSxFQUFDLElBQWpCO0FBQXNCLElBQUUsRUFBQyxJQUF6QjtBQUE4QixJQUFFLEVBQUM7QUFBakMsRUFkRixDQURLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RQOzs7O0FBRU8sTUFBTUssSUFBSSxHQUFHLENBQUM7QUFBRU4sTUFBSSxHQUFHLEVBQVQ7QUFBYUMsT0FBSyxHQUFHLFNBQXJCO0FBQWdDTTtBQUFoQyxDQUFELEtBQStDO0FBQ2xFLHNCQUNDO0FBQ0MsV0FBTyxFQUFFQSxPQURWO0FBRUMsU0FBSyxFQUFDLDRCQUZQO0FBR0MsU0FBSyxFQUFDLElBSFA7QUFJQyxVQUFNLEVBQUMsSUFKUjtBQUtDLFdBQU8sRUFBQyxXQUxUO0FBTUMsUUFBSSxFQUFDLE1BTk47QUFPQyxVQUFNLEVBQUVOLEtBUFQ7QUFRQyxvQkFBYSxHQVJkO0FBU0Msc0JBQWUsT0FUaEI7QUFVQyx1QkFBZ0I7QUFWakIsa0JBV0M7QUFBTSxLQUFDLEVBQUMsR0FBUjtBQUFZLEtBQUMsRUFBQyxJQUFkO0FBQW1CLFNBQUssRUFBQyxJQUF6QjtBQUE4QixVQUFNLEVBQUMsSUFBckM7QUFBMEMsTUFBRSxFQUFDLEdBQTdDO0FBQWlELE1BQUUsRUFBQztBQUFwRCxJQVhELGVBWUM7QUFBTSxLQUFDLEVBQUM7QUFBUixJQVpELENBREQ7QUFnQkEsQ0FqQk07Ozs7QUFtQkEsTUFBTU8sTUFBTSxHQUFHLENBQUM7QUFBRVIsTUFBSSxHQUFHLEVBQVQ7QUFBYUMsT0FBSyxHQUFHO0FBQXJCLENBQUQsa0JBQ3JCO0FBQ0MsT0FBSyxFQUFDLDRCQURQO0FBRUMsT0FBSyxFQUFDLElBRlA7QUFHQyxRQUFNLEVBQUMsSUFIUjtBQUlDLFNBQU8sRUFBQyxXQUpUO0FBS0MsTUFBSSxFQUFDLE1BTE47QUFNQyxRQUFNLEVBQUVBLEtBTlQ7QUFPQyxrQkFBYSxHQVBkO0FBUUMsb0JBQWUsT0FSaEI7QUFTQyxxQkFBZ0I7QUFUakIsZ0JBVUM7QUFBTSxHQUFDLEVBQUMsR0FBUjtBQUFZLEdBQUMsRUFBQyxJQUFkO0FBQW1CLE9BQUssRUFBQyxJQUF6QjtBQUE4QixRQUFNLEVBQUMsSUFBckM7QUFBMEMsSUFBRSxFQUFDLEdBQTdDO0FBQWlELElBQUUsRUFBQztBQUFwRCxFQVZELGVBV0M7QUFBTSxHQUFDLEVBQUM7QUFBUixFQVhELENBRE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJQOzs7O0FBRU8sTUFBTVEsSUFBSSxHQUFHLENBQUM7QUFBRVQsTUFBSSxHQUFHLEVBQVQ7QUFBYUMsT0FBSyxHQUFHO0FBQXJCLENBQUQsa0JBQ25CO0FBQ0MsT0FBSyxFQUFDLDRCQURQO0FBRUMsT0FBSyxFQUFFRCxJQUZSO0FBR0MsUUFBTSxFQUFFQSxJQUhUO0FBSUMsU0FBTyxFQUFDO0FBSlQsZ0JBS0M7QUFBTSxHQUFDLEVBQUM7QUFBUixFQUxELENBRE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7QUFFTyxNQUFNVSxNQUFNLEdBQUcsQ0FBQztBQUFFVixNQUFJLEdBQUcsRUFBVDtBQUFhQyxPQUFLLEdBQUc7QUFBckIsQ0FBRCxrQkFDckI7QUFDQyxPQUFLLEVBQUMsNEJBRFA7QUFFQyxPQUFLLEVBQUVELElBRlI7QUFHQyxRQUFNLEVBQUVBLElBSFQ7QUFJQyxTQUFPLEVBQUMsV0FKVDtBQUtDLE1BQUksRUFBQyxNQUxOO0FBTUMsUUFBTSxFQUFFQyxLQU5UO0FBT0MsYUFBVyxFQUFDLEdBUGI7QUFRQyxlQUFhLEVBQUMsUUFSZjtBQVNDLGdCQUFjLEVBQUM7QUFUaEIsZ0JBVUM7QUFBTSxHQUFDLEVBQUM7QUFBUixFQVZELGVBV0M7QUFBUyxRQUFNLEVBQUM7QUFBaEIsRUFYRCxDQURNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNbkcsS0FBSyxHQUFHLE1BQU07QUFDbEIsc0JBQ0UsNkJBQUMsb0JBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBTyxFQUFFO0FBQUU2RyxhQUFPLEVBQUU7QUFBWCxLQURYO0FBRUUsV0FBTyxFQUFFO0FBQUVBLGFBQU8sRUFBRTtBQUFYLEtBRlg7QUFHRSxRQUFJLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVg7QUFIUixrQkFLRSw2QkFBQyxZQUFEO0FBQUssU0FBSyxFQUFDO0FBQVgsSUFMRixlQU1FO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYjtBQUFYLG9CQURGLGVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixpQ0FDYTtBQUFNLGFBQVMsRUFBQztBQUFoQixtQkFEYixvREFGRixlQU1FLHVEQUNFO0FBQ0UsT0FBRyxFQUFDLGFBRE47QUFFRSxPQUFHLEVBQUMsbUVBRk47QUFHRSxhQUFTLEVBQUM7QUFIWixJQURGLENBTkYsQ0FERixlQWVFLDZCQUFDLGtCQUFELE9BZkYsZUFnQkUsNkJBQUMsZ0JBQUQsT0FoQkYsZUFpQkUsNkJBQUMsY0FBRCxPQWpCRixDQU5GLENBREY7QUE0QkQsQ0E3QkQ7O2VBK0JlOUcsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUksT0FBTyxHQUFJRixLQUFELElBQVc7QUFDMUIsUUFBTTtBQUFFNkc7QUFBRixNQUFXN0csS0FBSyxDQUFDOEcsS0FBTixDQUFZQyxNQUE3QjtBQUNBLFFBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCLHFCQUFTLEVBQVQsQ0FBOUI7O0FBS0EsUUFBTTNHLFVBQVUsR0FBRyxNQUFPdUcsSUFBUCxJQUFnQjtBQUNsQyxVQUFNdEcsR0FBRyxHQUFHLE1BQU0sMEJBQ2hCLGlCQURnQixFQUVqQjtBQUNDc0c7QUFERCxLQUZpQixFQUtqQjtBQUNDLHNCQUFnQjtBQURqQixLQUxpQixDQUFsQjtBQVNBLFdBQU90RyxHQUFHLENBQUNHLElBQUosQ0FBU3NHLE9BQWhCO0FBQ0EsR0FYRDs7QUFhQSxRQUFNRSxnQkFBZ0IsR0FBRyx3QkFDeEIsWUFBWTtBQUNYLFVBQU1GLE9BQU8sR0FBRyxNQUFNMUcsVUFBVSxDQUFDdUcsSUFBSSxDQUFDTSxPQUFMLENBQWEsSUFBYixFQUFtQixHQUFuQixDQUFELENBQWhDO0FBQ0FGLGNBQVUsQ0FBQ0QsT0FBRCxDQUFWO0FBQ0EsR0FKdUIsRUFLeEIsQ0FBQ0gsSUFBRCxDQUx3QixDQUF6QjtBQVFBLHdCQUFVLE1BQU07QUFDZkssb0JBQWdCO0FBQ2hCLEdBRkQsRUFFRyxDQUFDQSxnQkFBRCxDQUZIO0FBSUExRyxTQUFPLENBQUNDLEdBQVIsQ0FBWXVHLE9BQVo7O0FBQ0EsUUFBTUksT0FBTyxHQUFHLE1BQU07QUFDckIsMkJBQVNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFUO0FBQ0EsR0FGRDs7QUFLQSxRQUFNQyxJQUFJLEdBQUdQLE9BQU8sSUFBSUEsT0FBTyxDQUFDUSxPQUFoQztBQUVBLHNCQUNDLHlFQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBRUMsNkJBQUMsbUJBQUQ7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyw2QkFBQyxtQkFBRDtBQUFLLE1BQUUsRUFBRTtBQUFULElBREQsZUFHQyw2QkFBQyxtQkFBRDtBQUFLLE1BQUUsRUFBQyxLQUFSO0FBQWMsU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQXlDLE1BQUUsRUFBRTtBQUE3QyxrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSw4QkFBZ0JGLElBQWhCLENBREYsQ0FERCxDQURELGVBTUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyw2QkFBQyxpQkFBRDtBQUFZLFFBQUksRUFBQyxJQUFqQjtBQUFzQixTQUFLLEVBQUMsU0FBNUI7QUFBc0MsV0FBTyxFQUFFSDtBQUEvQyxJQURELENBTkQsQ0FIRCxlQWNDLDZCQUFDLG1CQUFEO0FBQUssTUFBRSxFQUFFO0FBQVQsSUFkRCxDQUZELENBREQsZUFxQkMsNkJBQUMsY0FBRCxPQXJCRCxDQUREO0FBeUJBLENBakVEOztBQW1FQSxNQUFNTSxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNuQ0MsTUFBSSxFQUFFRCxLQUFLLENBQUNDO0FBRHVCLENBQVosQ0FBeEI7O2VBSWUseUJBQVFGLGVBQVIsRUFBeUI7QUFBRWpFLGVBQWEsRUFBYkE7QUFBRixDQUF6QixFQUE0Q3ZELE9BQTVDLEMsRUFHZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxNQUFNMkgsSUFBSSxHQUFHLENBQUM7QUFBRXhGLE9BQUY7QUFBU1AsVUFBVDtBQUFtQnRDLE9BQW5CO0FBQTBCYTtBQUExQixDQUFELEtBQXNDO0FBQ2pELFFBQU0sQ0FBQ0ssSUFBRCxFQUFPb0gsT0FBUCxJQUFrQixxQkFBUyxFQUFULENBQXhCO0FBRUEsTUFBSXRJLEtBQUosRUFBVyxvQkFBTyw2QkFBQyx3QkFBRDtBQUFVLE1BQUUsRUFBQztBQUFiLElBQVA7QUFDWCxRQUFNdUksT0FBTyxHQUFHLGdCQUFoQjs7QUFFQSxRQUFNQyxZQUFZLEdBQUlDLENBQUQsSUFBTztBQUMxQkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUk3SCxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQmdILGNBQVEsQ0FBQ2MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ0MsU0FBdEMsQ0FBZ0RDLEdBQWhELENBQW9ELFNBQXBEO0FBRUF2RyxjQUFRLENBQUNwQixJQUFELENBQVI7QUFDRCxLQUpELE1BSU87QUFDTHVILE9BQUMsQ0FBQ0MsY0FBRjtBQUNBYixjQUFRLENBQUNjLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NDLFNBQXRDLENBQWdEQyxHQUFoRCxDQUFvRCxTQUFwRDtBQUNBaEcsV0FBSyxDQUFDM0IsSUFBRCxDQUFMO0FBQ0Q7QUFDRixHQVhEOztBQWFBLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsNkJBQUMsWUFBRDtBQUFLLFNBQUssRUFBQztBQUFYLElBREYsZUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQXdCcUgsT0FBeEIsQ0FERixFQUVHMUgsSUFBSSxLQUFLLFFBQVQsZ0JBQ0MseUVBQ0UsbURBREYsZUFFRSx3RUFGRixDQURELGdCQU1DLHlFQUNFLGlEQURGLGVBRUUscUVBRkYsQ0FSSixlQWFFO0FBQU0sWUFBUSxFQUFFMkg7QUFBaEIsa0JBQ0U7QUFBSyxhQUFTLEVBQUUzSCxJQUFJLEtBQUssUUFBVCxHQUFvQixNQUFwQixHQUE2QjtBQUE3QyxrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsYUFERixlQUVFO0FBQ0UsWUFBUSxFQUFHNEgsQ0FBRCxJQUFPO0FBQ2ZILGFBQU8sQ0FBRVEsSUFBRCxvQ0FBZ0JBLElBQWhCO0FBQXNCaEcsYUFBSyxFQUFFMkYsQ0FBQyxDQUFDTSxNQUFGLENBQVNDO0FBQXRDLFFBQUQsQ0FBUDtBQUNELEtBSEg7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLGFBQVMsRUFBQyxjQUxaO0FBTUUsWUFBUSxNQU5WO0FBT0UsZUFBVyxFQUFDO0FBUGQsSUFGRixDQURGLGVBYUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFPLFdBQU8sRUFBQztBQUFmLGdCQURGLGVBRUU7QUFDRSxZQUFRLE1BRFY7QUFFRSxZQUFRLEVBQUdQLENBQUQsSUFBTztBQUNmSCxhQUFPLENBQUVRLElBQUQsb0NBQ0hBLElBREc7QUFFTi9GLGdCQUFRLEVBQUUwRixDQUFDLENBQUNNLE1BQUYsQ0FBU0M7QUFGYixRQUFELENBQVA7QUFJRCxLQVBIO0FBUUUsUUFBSSxFQUFDLFVBUlA7QUFTRSxhQUFTLEVBQUMsY0FUWjtBQVVFLGVBQVcsRUFBQztBQVZkLElBRkYsQ0FiRixDQURGLEVBOEJHbkksSUFBSSxLQUFLLFFBQVQsZ0JBQ0MsNERBQ0csR0FESCxlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFPLFdBQU8sRUFBQztBQUFmLGtCQURGLGVBRUU7QUFDRSxZQUFRLEVBQUc0SCxDQUFELElBQU87QUFDZkgsYUFBTyxDQUFFUSxJQUFELG9DQUNIQSxJQURHO0FBRU5HLGlCQUFTLEVBQUVSLENBQUMsQ0FBQ00sTUFBRixDQUFTQztBQUZkLFFBQUQsQ0FBUDtBQUlELEtBTkg7QUFPRSxRQUFJLEVBQUMsTUFQUDtBQVFFLE1BQUUsRUFBQyxVQVJMO0FBU0UsYUFBUyxFQUFDLGNBVFo7QUFVRSxZQUFRLE1BVlY7QUFXRSxlQUFXLEVBQUM7QUFYZCxJQUZGLENBREYsZUFpQkU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFPLFdBQU8sRUFBQztBQUFmLGlCQURGLGVBRUU7QUFDRSxZQUFRLEVBQUdQLENBQUQsSUFBTztBQUNmSCxhQUFPLENBQUVRLElBQUQsb0NBQ0hBLElBREc7QUFFTkksZ0JBQVEsRUFBRVQsQ0FBQyxDQUFDTSxNQUFGLENBQVNDO0FBRmIsUUFBRCxDQUFQO0FBSUQsS0FOSDtBQU9FLFFBQUksRUFBQyxNQVBQO0FBUUUsTUFBRSxFQUFDLFVBUkw7QUFTRSxhQUFTLEVBQUMsY0FUWjtBQVVFLFlBQVEsTUFWVjtBQVdFLGVBQVcsRUFBQztBQVhkLElBRkYsQ0FqQkYsQ0FGRixlQW9DRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBTyxXQUFPLEVBQUM7QUFBZixXQURGLGVBRUU7QUFDRSxZQUFRLEVBQUdQLENBQUQsSUFBTztBQUNmSCxhQUFPLENBQUVRLElBQUQsb0NBQ0hBLElBREc7QUFFTkssV0FBRyxFQUFFVixDQUFDLENBQUNNLE1BQUYsQ0FBU0M7QUFGUixRQUFELENBQVA7QUFJRCxLQU5IO0FBT0UsUUFBSSxFQUFDLFFBUFA7QUFRRSxNQUFFLEVBQUMsS0FSTDtBQVNFLGFBQVMsRUFBQyxjQVRaO0FBVUUsWUFBUSxNQVZWO0FBV0UsZUFBVyxFQUFDO0FBWGQsSUFGRixDQURGLGVBaUJFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBTyxXQUFPLEVBQUM7QUFBZixrQkFERixlQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxNQUFFLEVBQUMsY0FGTDtBQUdFLGVBQVcsRUFBQyxVQUhkO0FBSUUsZ0JBQVksRUFBQyxFQUpmO0FBS0UsYUFBUyxFQUFDLGNBTFo7QUFNRSxZQUFRLEVBQUdQLENBQUQsSUFBTztBQUNmSCxhQUFPLENBQUVRLElBQUQsb0NBQ0hBLElBREc7QUFFTk0sb0JBQVksRUFBRVgsQ0FBQyxDQUFDTSxNQUFGLENBQVNDO0FBRmpCLFFBQUQsQ0FBUDtBQUlEO0FBWEgsSUFGRixDQWpCRixDQXBDRixDQURELEdBd0VHLElBdEdOLEVBd0dHbkksSUFBSSxLQUFLLFFBQVQsZ0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsd0JBREYsQ0FERixlQUlFLDZCQUFDLHVCQUFEO0FBQVMsTUFBRSxFQUFDO0FBQVosYUFKRixDQURELGdCQVFDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFPLFdBQU8sRUFBQztBQUFmLHdCQURGLENBREYsZUFJRSw2QkFBQyx1QkFBRDtBQUFTLE1BQUUsRUFBQztBQUFaLGNBSkYsQ0FoSEosZUF1SEU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFDLGdCQUZaO0FBR0UsU0FBSyxFQUFDO0FBSFIsSUFERixDQXZIRixDQWJGLENBREYsQ0FERixDQUZGLENBREY7QUFzSkQsQ0F6S0Q7O0FBMktBLE1BQU1xSCxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ25JLE9BQUssRUFBRW1JLEtBQUssQ0FBQ0MsSUFBTixDQUFXcEk7QUFEZ0IsQ0FBWixDQUF4Qjs7ZUFJZSx5QkFBUWtJLGVBQVIsRUFBeUI7QUFBRXJGLE9BQUssRUFBTEEsV0FBRjtBQUFTUCxVQUFRLEVBQVJBO0FBQVQsQ0FBekIsRUFBOEMrRixJQUE5QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFJQSxNQUFNZ0IsSUFBSSxHQUFHLENBQUM7QUFBRWhJLGdCQUFGO0FBQWtCaUksZ0JBQWxCO0FBQWtDQyxlQUFsQztBQUFpREM7QUFBakQsQ0FBRCxLQUFnRTtBQUV6RSxRQUFNLENBQUN0SixRQUFELEVBQVd1SixXQUFYLElBQTBCLHFCQUFTSCxjQUFULENBQWhDO0FBR0Esd0JBQVUsTUFBTTtBQUNaLFFBQUlBLGNBQWMsQ0FBQ0ksTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUM3QnJJLG9CQUFjO0FBQ2RvSSxpQkFBVyxDQUFDRixhQUFELENBQVg7QUFDSDtBQUNKLEdBTEQsRUFLRyxDQUFDckosUUFBRCxFQUFXbUIsY0FBWCxDQUxIO0FBT0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUcsT0FBRyxFQUFDLFVBQVA7QUFBa0IsUUFBSSxFQUFDLEdBQXZCO0FBQTJCLGFBQVMsRUFBQztBQUFyQyxJQURKLENBRkosRUFLS21JLE9BQU8saUJBQUksNkJBQUMsdUJBQUQ7QUFBUyxNQUFFLEVBQUMsY0FBWjtBQUEyQixPQUFHLEVBQUM7QUFBL0Isa0JBQ1IsNkJBQUMsc0JBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsUUFBSSxFQUFDLElBQS9CO0FBQW9DLFNBQUs7QUFBekMsbUJBRFEsQ0FMaEIsZUFVSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUksU0FBSyxFQUFFO0FBQUVHLGdCQUFVLEVBQUU7QUFBZCxLQUFYO0FBQW9DLGFBQVMsRUFBQztBQUE5QyxLQUNLLEdBREwsOEJBRWUsa0RBRmYsQ0FESixlQUtJO0FBQUcsYUFBUyxFQUFDO0FBQWIsZ0JBTEosQ0FWSixlQWlCSTtBQUFTLGFBQVMsRUFBQztBQUFuQixrQkFDSTtBQUFTLGFBQVMsRUFBQztBQUFuQixrQkFDSSw2QkFBQyxlQUFEO0FBQVEsV0FBTyxFQUFFekosUUFBUSxJQUFJQSxRQUFRLENBQUMsQ0FBRDtBQUFyQyxJQURKLGVBRUksdURBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCx5QkFESixlQUVJLDZCQUFDLGlCQUFEO0FBQVUsWUFBUSxFQUFFQTtBQUFwQixJQUZKLENBRkosQ0FESixlQVNJO0FBQUksYUFBUyxFQUFDO0FBQWQsb0JBVEosZUFVSSw2QkFBQyxZQUFEO0FBQUssWUFBUSxFQUFFQTtBQUFmLElBVkosQ0FqQkosQ0FESjtBQWdDSCxDQTVDRDs7QUE4Q0EsTUFBTWdJLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2hDb0IsZUFBYSxFQUFFcEIsS0FBSyxDQUFDWCxPQUFOLENBQWN0SCxRQURHO0FBRWhDc0osU0FBTyxFQUFFckIsS0FBSyxDQUFDQyxJQUFOLENBQVdvQjtBQUZZLENBQVosQ0FBeEI7O2VBTWUseUJBQVF0QixlQUFSLEVBQXlCO0FBQUU3RyxnQkFBYyxFQUFkQTtBQUFGLENBQXpCLEVBQTZDZ0ksSUFBN0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRGY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNaEosSUFBSSxHQUFHLE1BQU07QUFDbEIsTUFBSXVKLFdBQVcsR0FBRyxNQUFsQjtBQUNBLHNCQUNDLDZCQUFDLG9CQUFELENBQVEsR0FBUjtBQUNDLFdBQU8sRUFBRTtBQUFFekMsYUFBTyxFQUFFO0FBQVgsS0FEVjtBQUVDLFdBQU8sRUFBRTtBQUFFQSxhQUFPLEVBQUU7QUFBWCxLQUZWO0FBR0MsUUFBSSxFQUFFO0FBQUVBLGFBQU8sRUFBRTtBQUFYO0FBSFAsa0JBSUMsNkJBQUMsWUFBRDtBQUFLLFNBQUssRUFBQyxNQUFYO0FBQWtCLFFBQUksRUFBRSxDQUFDO0FBQUVFLFVBQUksRUFBRSxRQUFSO0FBQWtCVyxhQUFPLEVBQUU7QUFBM0IsS0FBRDtBQUF4QixJQUpELGVBS0M7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNFNEIsV0FBVyxnQkFDWDtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLGFBQUQsT0FERCxlQUVDLDZCQUFDLGtCQUFELE9BRkQsQ0FEVyxnQkFNWCw2QkFBQyxrQkFBRCxPQVBGLENBTEQsQ0FERDtBQWtCQSxDQXBCRDs7ZUFzQmV2SixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JmOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUUsS0FBSyxHQUFHLE1BQU07QUFDbkIsc0JBQ0MsNkJBQUMsb0JBQUQsQ0FBUSxHQUFSO0FBQ0MsUUFBSSxFQUFFO0FBQUU0RyxhQUFPLEVBQUU7QUFBWCxLQURQO0FBRUMsV0FBTyxFQUFFO0FBQUVBLGFBQU8sRUFBRTtBQUFYLEtBRlY7QUFHQyxXQUFPLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVg7QUFIVixrQkFJQyw2QkFBQyxZQUFEO0FBQUssU0FBSyxFQUFDLE9BQVg7QUFBbUIsUUFBSSxFQUFFLENBQUM7QUFBRUUsVUFBSSxFQUFFLFFBQVI7QUFBa0JXLGFBQU8sRUFBRTtBQUEzQixLQUFEO0FBQXpCLElBSkQsZUFLQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLHFCQUFEO0FBQWMsUUFBSSxFQUFDLEtBQW5CO0FBQXlCLE9BQUcsRUFBQyxVQUE3QjtBQUF3QyxRQUFJLEVBQUU7QUFBRVgsVUFBSSxFQUFFO0FBQVI7QUFBOUMsSUFERCxlQUVDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsNkJBQUMsYUFBRCxPQURELENBRkQsQ0FMRCxlQVdDLDZCQUFDLGNBQUQsT0FYRCxDQUREO0FBZUEsQ0FoQkQ7O2VBa0JlOUcsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNRSxPQUFPLEdBQUcsQ0FBQztBQUNoQjZHLE9BRGdCO0FBRWhCakIsYUFGZ0I7QUFHaEIxRixjQUhnQjtBQUloQnNELGVBSmdCO0FBS2hCQztBQUxnQixDQUFELEtBTVY7QUFDTCxRQUFNLENBQUMyRixLQUFELEVBQVFDLFFBQVIsSUFBb0IscUJBQVMsSUFBVCxDQUExQjtBQUNBLFFBQU07QUFBRXJJO0FBQUYsTUFBcUI2RixLQUFLLENBQUNDLE1BQWpDO0FBRUEsd0JBQVUsTUFBTTtBQUNmNUcsZ0JBQVk7QUFDWnNELGlCQUFhLENBQUN4QyxjQUFELENBQWI7QUFDQSxHQUhELEVBR0csQ0FBQ2QsWUFBRCxFQUFlc0QsYUFBZixFQUE4QnhDLGNBQTlCLENBSEg7QUFJQSx3QkFBVSxNQUFNO0FBQ2Y0RSxlQUFXLENBQUNuQyxVQUFELENBQVg7QUFDQSxHQUZELEVBRUcsQ0FBQ0EsVUFBRCxFQUFhbUMsV0FBYixDQUZIO0FBSUEsU0FBT25DLFVBQVUsZ0JBQ2hCO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFDQyxhQUFTLEVBQUMsU0FEWDtBQUVDLFNBQUssRUFBRTtBQUFFNkYsYUFBTyxFQUFFRixLQUFLLEdBQUcsTUFBSCxHQUFZO0FBQTVCLEtBRlI7QUFHQyxXQUFPLEVBQUUsTUFBTUMsUUFBUSxDQUFDLENBQUNELEtBQUY7QUFIeEIsSUFERCxlQUtDLDZCQUFDLFlBQUQ7QUFDQyxTQUFLLEVBQUMsZ0JBRFA7QUFFQyxRQUFJLEVBQUUsQ0FBQztBQUFFeEMsVUFBSSxFQUFFLFFBQVI7QUFBa0JXLGFBQU8sRUFBRTtBQUEzQixLQUFEO0FBRlAsSUFMRCxlQVNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyx5Q0FBSzlELFVBQVUsQ0FBQ21ELElBQWhCLENBREQsQ0FERCxlQUlDLDZCQUFDLG1CQUFELHFCQUNDLDZCQUFDLG1CQUFEO0FBQ0MsYUFBUyxFQUFDLHFCQURYO0FBRUMsTUFBRSxFQUFFLENBRkw7QUFHQyxTQUFLLEVBQUU7QUFBRTJDLFlBQU0sRUFBRUgsS0FBSyxHQUFHLE1BQUgsR0FBWTtBQUEzQjtBQUhSLGtCQUlDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxTQUFLLEVBQUU7QUFBRUksY0FBUSxFQUFFO0FBQVosS0FBWDtBQUFpQyxhQUFTLEVBQUM7QUFBM0Msa0JBQ0MsOERBREQsZUFFQyw2QkFBQyxxQkFBRDtBQUNDLFFBQUksRUFBQyxLQUROO0FBRUMsT0FBRyxFQUFHLElBQUcvRixVQUFVLENBQUNtRCxJQUFLLGFBRjFCO0FBR0MsUUFBSSxFQUFFO0FBQUVBLFVBQUksRUFBRTtBQUFSO0FBSFAsSUFGRCxDQURELGVBU0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFd0MsS0FBSyxnQkFDTDtBQUFNLFdBQU8sRUFBRSxNQUFNQyxRQUFRLENBQUMsQ0FBQ0QsS0FBRjtBQUE3QixrQkFDQyw2QkFBQyxpQkFBRCxPQURELENBREssZ0JBS0w7QUFBTSxXQUFPLEVBQUUsTUFBTUMsUUFBUSxDQUFDLENBQUNELEtBQUY7QUFBN0Isa0JBQ0MsNkJBQUMsWUFBRCxPQURELENBTkYsQ0FURCxDQUpELGVBeUJDLDZCQUFDLHlCQUFELHFCQUNDLDZCQUFDLHVCQUFEO0FBQWdCLGtCQUFjLEVBQUUzRixVQUFVLENBQUNtRDtBQUEzQyxJQURELENBekJELENBREQsZUE4QkMsNkJBQUMsbUJBQUQ7QUFBSyxLQUFDLEVBQUU7QUFBUixrQkFDQyw2QkFBQyxxQkFBRDtBQUFjLGtCQUFjLEVBQUVuRCxVQUFVLENBQUNtRDtBQUF6QyxJQURELENBOUJELENBSkQsQ0FURCxlQWdEQyw2QkFBQyxjQUFELE9BaERELENBRGdCLEdBbURiLElBbkRKO0FBb0RBLENBdEVEOztBQXdFQSxNQUFNYSxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNuQ2pFLFlBQVUsRUFBRWlFLEtBQUssQ0FBQ2pFLFVBQU4sQ0FBaUJBO0FBRE0sQ0FBWixDQUF4Qjs7ZUFJZSx5QkFBUWdFLGVBQVIsRUFBeUI7QUFDdkNqRSxlQUFhLEVBQWJBLHNCQUR1QztBQUV2Q3RELGNBQVksRUFBWkEscUJBRnVDO0FBR3ZDMEYsYUFBVyxFQUFYQTtBQUh1QyxDQUF6QixFQUlaNUYsT0FKWSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNeUosYUFBYSxHQUFJMUosS0FBRCxJQUFXO0FBQ2hDLFFBQU07QUFBRWUsY0FBRjtBQUFjNEksZ0JBQWQ7QUFBNEIzSSxlQUE1QjtBQUF5Q1YsY0FBekM7QUFBcURzSjtBQUFyRCxNQUNMNUosS0FERDtBQUVBLFFBQU0sQ0FBQ3dILE9BQUQsRUFBVXFDLFVBQVYsSUFBd0IscUJBQVMsRUFBVCxDQUE5QjtBQUNBLFFBQU0sQ0FBQ2hELElBQUQsRUFBT2lELE9BQVAsSUFBa0IscUJBQVMsRUFBVCxDQUF4QjtBQUNBLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxrQkFBWCxJQUFpQyxxQkFBUyxFQUFULENBQXZDO0FBQ0EsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEIscUJBQVMsS0FBVCxDQUFoQztBQUNBLFFBQU0sQ0FBQ0MsWUFBRCxFQUFlQyxlQUFmLElBQWtDLHFCQUFTLEVBQVQsQ0FBeEMsQ0FQZ0MsQ0FRaEM7QUFDQTs7QUFDQSxXQUFTQyxRQUFULENBQWtCQyxPQUFsQixFQUEyQjtBQUMxQmhMLHlCQUNDaUwsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDYkMsY0FBUSxFQUFFLFFBREc7QUFFYkMsVUFBSSxFQUFFLENBRk87QUFHYkMsU0FBRyxFQUFFTCxPQUFPLENBQUNNO0FBSEEsS0FBZCxDQUREO0FBTUE7O0FBQ0QsUUFBTXhELE9BQU8sR0FBRyxNQUFNO0FBQ3JCaUQsWUFBUSxDQUFDaEQsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQUQsQ0FBUjtBQUNBLEdBRkQ7O0FBSUE5RyxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsS0FBSyxDQUFDOEcsS0FBTixDQUFZQyxNQUFaLENBQW1CM0YsU0FBL0I7QUFFQSx3QkFBVSxNQUFNO0FBQ2YsUUFBSXBCLEtBQUssQ0FBQzZLLElBQVYsRUFBZ0I7QUFDZnZLLGdCQUFVLENBQUNOLEtBQUssQ0FBQzhHLEtBQU4sQ0FBWUMsTUFBWixDQUFtQjNGLFNBQXBCLENBQVY7QUFDQTtBQUNELEdBSkQsRUFJRyxDQUFDcEIsS0FBRCxFQUFRTSxVQUFSLENBSkg7O0FBTUEsUUFBTXdLLFlBQVksR0FBSXZELElBQUQsSUFBVTtBQUM5QnNDLGNBQVUsQ0FBQ3RDLElBQUQsQ0FBVjtBQUNBLEdBRkQ7O0FBSUEsUUFBTXdELFVBQVUsR0FBRyxNQUFPOUMsQ0FBUCxJQUFhO0FBQy9CQSxLQUFDLENBQUNDLGNBQUY7QUFDQTFILFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0csSUFBWjtBQUNBckcsV0FBTyxDQUFDQyxHQUFSLENBQVlzSixRQUFaO0FBQ0EsVUFBTXJKLElBQUksR0FBRztBQUNabUcsVUFBSSxFQUFFQSxJQUFJLEtBQUssRUFBVCxHQUFjK0MsV0FBVyxDQUFDL0MsSUFBMUIsR0FBaUNBLElBRDNCO0FBRVprRCxjQUFRLEVBQUVBLFFBQVEsS0FBSyxFQUFiLEdBQWtCSCxXQUFXLENBQUNHLFFBQTlCLEdBQXlDQSxRQUZ2QztBQUdadkMsYUFBTyxFQUFFQSxPQUFPLEtBQUssRUFBWixHQUFpQm9DLFdBQVcsQ0FBQ3BDLE9BQTdCLEdBQXVDQTtBQUhwQyxLQUFiO0FBS0F4RyxlQUFXLENBQUNOLElBQUQsRUFBT2tKLFdBQVcsQ0FBQ29CLEdBQW5CLEVBQXdCckIsWUFBWSxDQUFDakcsVUFBYixDQUF3QnVILElBQWhELENBQVg7QUFDQSw4QkFBTSw4QkFBTjtBQUNBLEdBWEQ7O0FBYUEsUUFBTUMsU0FBUyxHQUFHLE1BQU9qRCxDQUFQLElBQWE7QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRixHQUQ4QixDQUU5Qjs7QUFDQW5ILGNBQVUsQ0FBQztBQUFFeUcsYUFBRjtBQUFXWCxVQUFYO0FBQWlCa0QsY0FBakI7QUFBMkJFLGNBQTNCO0FBQXFDRTtBQUFyQyxLQUFELENBQVY7QUFDQSw4QkFBTSw0QkFBTjtBQUNBLEdBTEQ7O0FBT0Esc0JBQ0MsNkJBQUMsbUJBQUQ7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLElBREQsZUFHQyw2QkFBQyxtQkFBRDtBQUFLLE1BQUUsRUFBRTtBQUFULElBSEQsZUFLQyw2QkFBQyxtQkFBRDtBQUFLLE1BQUUsRUFBQyxLQUFSO0FBQWMsTUFBRSxFQUFFO0FBQWxCLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQyxFQUFkO0FBQWlCLE1BQUUsRUFBQztBQUFwQixLQUNFbkssS0FBSyxDQUFDNkssSUFBTixHQUNHLG9CQUFtQmpCLFdBQVcsSUFBSUEsV0FBVyxDQUFDL0MsSUFBSyxFQUR0RCxHQUVFLGVBSEosQ0FERCxDQURELGVBU0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyx3REFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQ0MsUUFBSSxFQUFDLE1BRE47QUFFQyxNQUFFLEVBQUMsTUFGSjtBQUdDLGVBQVcsRUFBQyxjQUhiO0FBSUMsYUFBUyxFQUFDLGNBSlg7QUFLQyxnQkFBWSxFQUNYN0csS0FBSyxDQUFDNkssSUFBTixHQUFhakIsV0FBVyxJQUFJQSxXQUFXLENBQUMvQyxJQUF4QyxHQUErQyxFQU5qRDtBQVFDLFlBQVEsRUFBR29CLENBQUQsSUFBTztBQUNoQjZCLGFBQU8sQ0FBQzdCLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDQTtBQVZGLElBREQsZUFhQyx3Q0FiRCxlQWNDO0FBQ0MsUUFBSSxFQUFDLE1BRE47QUFFQyxNQUFFLEVBQUMsY0FGSjtBQUdDLGVBQVcsRUFBQyxtQkFIYjtBQUlDLGFBQVMsRUFBQyxjQUpYO0FBS0MsZ0JBQVksRUFDWHhJLEtBQUssQ0FBQzZLLElBQU4sR0FBYWpCLFdBQVcsSUFBSUEsV0FBVyxDQUFDTyxZQUF4QyxHQUF1RCxFQU56RDtBQVFDLFlBQVEsRUFBR2xDLENBQUQsSUFBTztBQUNoQm1DLHFCQUFlLENBQUNuQyxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0E7QUFWRixJQWRELGVBMEJDLHdDQTFCRCxlQTRCQztBQUNDLFFBQUksRUFBQyxNQUROO0FBRUMsTUFBRSxFQUFDLFVBRko7QUFHQyxlQUFXLEVBQUMscUJBSGI7QUFJQyxhQUFTLEVBQUMsY0FKWDtBQUtDLGdCQUFZLEVBQ1h4SSxLQUFLLENBQUM2SyxJQUFOLEdBQWFqQixXQUFXLElBQUlBLFdBQVcsQ0FBQ0csUUFBeEMsR0FBbUQsRUFOckQ7QUFRQyxZQUFRLEVBQUc5QixDQUFELElBQU87QUFDaEIrQix3QkFBa0IsQ0FBQy9CLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQ0E7QUFWRixJQTVCRCxlQXdDQyx3Q0F4Q0QsZUF5Q0M7QUFBTyxXQUFPLEVBQUM7QUFBZix3QkF6Q0QsZUEwQ0M7QUFDQyxnQkFBWSxFQUNYeEksS0FBSyxDQUFDNkssSUFBTixHQUFhakIsV0FBVyxJQUFJQSxXQUFXLENBQUNLLFFBQXhDLEdBQW1ELEtBRnJEO0FBSUMsWUFBUSxFQUFFLE1BQU07QUFDZkMsaUJBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDQSxLQU5GO0FBT0MsUUFBSSxFQUFDLFVBUE47QUFRQyxNQUFFLEVBQUM7QUFSSixJQTFDRCxlQXFEQyx3Q0FyREQsZUF1REMsNERBQ0VqSyxLQUFLLENBQUM2SyxJQUFOLEdBQ0FqQixXQUFXLElBQUlBLFdBQVcsQ0FBQ3BDLE9BQTNCLGdCQUNDLDZCQUFDLGVBQUQ7QUFDQyxnQkFBWSxFQUFFc0QsWUFEZjtBQUVDLGdCQUFZLEVBQUVsQixXQUFXLElBQUlBLFdBQVcsQ0FBQ3BDO0FBRjFDLElBREQsR0FLSSxJQU5KLGdCQVFBLDZCQUFDLGVBQUQ7QUFBUSxnQkFBWSxFQUFFc0QsWUFBdEI7QUFBb0MsZ0JBQVksRUFBQztBQUFqRCxJQVRGLENBdkRELGVBb0VDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsNkJBQUMsY0FBRDtBQUNDLFlBQVEsRUFBRSxJQURYO0FBRUMsV0FBTyxFQUFHN0MsQ0FBRCxJQUFPO0FBQ2ZqSSxXQUFLLENBQUM2SyxJQUFOLEdBQWFFLFVBQVUsQ0FBQzlDLENBQUQsQ0FBdkIsR0FBNkJpRCxTQUFTLENBQUNqRCxDQUFELENBQXRDO0FBQ0E7QUFKRixLQUtFakksS0FBSyxDQUFDNkssSUFBTixHQUFhLFFBQWIsR0FBd0IsS0FMMUIsQ0FERCxDQXBFRCxDQURELENBREQsQ0FURCxDQURELGVBNkZDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsNkJBQUMsaUJBQUQ7QUFBWSxRQUFJLEVBQUMsSUFBakI7QUFBc0IsU0FBSyxFQUFDLFNBQTVCO0FBQXNDLFdBQU8sRUFBRXpEO0FBQS9DLElBREQsQ0E3RkQsQ0FMRCxlQXVHQyw2QkFBQyxtQkFBRDtBQUFLLE1BQUUsRUFBRTtBQUFULElBdkdELENBREQ7QUEyR0EsQ0FqS0Q7O0FBbUtBLE1BQU1NLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ25DZ0MsY0FBWSxFQUFFaEMsS0FBSyxDQUFDakUsVUFEZTtBQUVuQ2tHLGFBQVcsRUFBRWpDLEtBQUssQ0FBQ1gsT0FBTixDQUFjbUU7QUFGUSxDQUFaLENBQXhCOztlQUtlLHlCQUFRekQsZUFBUixFQUF5QjtBQUN2QzNHLFlBQVUsRUFBVkEsbUJBRHVDO0FBRXZDQyxhQUFXLEVBQVhBLG9CQUZ1QztBQUd2Q1YsWUFBVSxFQUFWQTtBQUh1QyxDQUF6QixFQUlab0osYUFKWSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25MZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNMEIsVUFBVSxHQUFHLENBQUM7QUFBRXpILGVBQUY7QUFBaUJDLGdCQUFqQjtBQUFpQ2lILE1BQWpDO0FBQXVDL0Q7QUFBdkMsQ0FBRCxLQUFvRDtBQUN0RSxRQUFNLENBQUNhLEtBQUQsRUFBUTBELFFBQVIsSUFBb0IscUJBQVMsRUFBVCxDQUExQjtBQUNBLFFBQU0sQ0FBQzNLLElBQUQsRUFBT29ILE9BQVAsSUFBa0IscUJBQVMsRUFBVCxDQUF4QjtBQUVBLHdCQUFVLE1BQU07QUFDZixVQUFNd0QsU0FBUyxHQUFHLFlBQVk7QUFDN0IsVUFBSVQsSUFBSixFQUFVO0FBQ1QsY0FBTXRLLEdBQUcsR0FBRyxNQUFNLHlCQUNoQixzQkFBcUJ1RyxLQUFLLENBQUNDLE1BQU4sQ0FBYTlGLGNBQWUsRUFEakMsQ0FBbEI7QUFHQVQsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxjQUFNO0FBQUVzRyxjQUFGO0FBQVEwRSxrQkFBUjtBQUFrQi9ELGlCQUFsQjtBQUEyQndEO0FBQTNCLFlBQW1DekssR0FBRyxDQUFDRyxJQUFKLENBQVNnRCxVQUFsRDtBQUNBb0UsZUFBTyxDQUFDO0FBQUVqQixjQUFGO0FBQVEwRSxrQkFBUjtBQUFrQi9ELGlCQUFsQjtBQUEyQndEO0FBQTNCLFNBQUQsQ0FBUDtBQUNBO0FBQ0QsS0FURDs7QUFVQU0sYUFBUztBQUNULEdBWkQsRUFZRyxDQUFDVCxJQUFELEVBQU8vRCxLQUFLLENBQUNDLE1BQU4sQ0FBYTlGLGNBQXBCLENBWkg7QUFhQVQsU0FBTyxDQUFDQyxHQUFSLENBQVlvSyxJQUFaLEVBQWtCbkssSUFBbEI7O0FBRUEsUUFBTThLLFlBQVksR0FBSXZELENBQUQsSUFBTztBQUMzQm9ELFlBQVEsaUNBQ0oxRCxLQURJO0FBRVAsT0FBQ00sQ0FBQyxDQUFDTSxNQUFGLENBQVNuSSxFQUFWLEdBQWU2SCxDQUFDLENBQUNNLE1BQUYsQ0FBU0M7QUFGakIsT0FBUjtBQUlBLEdBTEQ7O0FBT0EsUUFBTXNDLFlBQVksR0FBSXZELElBQUQsSUFBVTtBQUM5QjhELFlBQVEsaUNBQ0oxRCxLQURJO0FBRVBILGFBQU8sRUFBRUQ7QUFGRixPQUFSO0FBSUEsR0FMRDs7QUFPQSxRQUFNUyxZQUFZLEdBQUcsTUFBT0MsQ0FBUCxJQUFhO0FBQ2pDQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJMkMsSUFBSixFQUFVakgsY0FBYyxDQUFDK0QsS0FBRCxFQUFRakgsSUFBSSxDQUFDc0ssR0FBYixDQUFkLENBQVYsS0FDS3JILGFBQWEsQ0FBQ2dFLEtBQUQsQ0FBYjtBQUNMLEdBSkQ7O0FBTUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFNLGFBQVMsRUFBQztBQUFoQixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQ0MsUUFBSSxFQUFDLE1BRE47QUFFQyxNQUFFLEVBQUMsTUFGSjtBQUdDLFlBQVEsTUFIVDtBQUlDLGVBQVcsRUFBQyxpQkFKYjtBQUtDLGFBQVMsRUFBQyxjQUxYO0FBTUMsZ0JBQVksRUFBRWtELElBQUksR0FBR25LLElBQUksSUFBSUEsSUFBSSxDQUFDbUcsSUFBaEIsR0FBdUIsRUFOMUM7QUFPQyxZQUFRLEVBQUUyRTtBQVBYLElBREQsZUFVQyx3Q0FWRCxlQVdDO0FBQ0MsWUFBUSxNQURUO0FBRUMsUUFBSSxFQUFDLE1BRk47QUFHQyxNQUFFLEVBQUMsVUFISjtBQUlDLFlBQVEsRUFBRUEsWUFKWDtBQUtDLGVBQVcsRUFBQyxXQUxiO0FBTUMsYUFBUyxFQUFDLGNBTlg7QUFPQyxnQkFBWSxFQUFFWCxJQUFJLEdBQUduSyxJQUFJLElBQUlBLElBQUksQ0FBQzZLLFFBQWhCLEdBQTJCO0FBUDlDLElBWEQsZUFvQkMsd0NBcEJELEVBcUJFLENBQUNWLElBQUQsaUJBQ0EseUVBQ0M7QUFDQyxZQUFRLE1BRFQ7QUFFQyxRQUFJLEVBQUMsTUFGTjtBQUdDLE1BQUUsRUFBQyxLQUhKO0FBSUMsWUFBUSxFQUFFVyxZQUpYO0FBS0MsZUFBVyxFQUFDLGdCQUxiO0FBTUMsYUFBUyxFQUFDO0FBTlgsSUFERCxlQVNDLHdDQVRELENBdEJGLGVBbUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRVgsSUFBSSxHQUNKbkssSUFBSSxJQUFJQSxJQUFJLENBQUM4RyxPQUFiLGdCQUNDLDZCQUFDLGVBQUQ7QUFDQyxZQUFRLE1BRFQ7QUFFQyxnQkFBWSxFQUFFOUcsSUFBSSxJQUFJQSxJQUFJLENBQUM4RyxPQUY1QjtBQUdDLGFBQVMsRUFBQyxXQUhYO0FBSUMsZ0JBQVksRUFBRXNEO0FBSmYsSUFERCxHQU9JLElBUkEsZ0JBVUosNkJBQUMsZUFBRDtBQUNDLFlBQVEsTUFEVDtBQUVDLGdCQUFZLEVBQUMsRUFGZDtBQUdDLGFBQVMsRUFBQyxXQUhYO0FBSUMsZ0JBQVksRUFBRUE7QUFKZixJQVhGLENBbkNELGVBdURDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsNkJBQUMsY0FBRDtBQUFRLFdBQU8sRUFBRTlDLFlBQWpCO0FBQStCLFlBQVEsRUFBRSxJQUF6QztBQUErQyxRQUFJLEVBQUM7QUFBcEQsS0FDRTZDLElBQUksR0FBRyxRQUFILEdBQWMsS0FEcEIsQ0FERCxDQXZERCxDQURELENBREQsQ0FERDtBQW1FQSxDQTFHRDs7ZUE0R2UseUJBQVEsSUFBUixFQUFjO0FBQUVsSCxlQUFhLEVBQWJBLHNCQUFGO0FBQWlCQyxnQkFBYyxFQUFkQTtBQUFqQixDQUFkLEVBQWlEd0gsVUFBakQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSGY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1LLFdBQVcsR0FBRyxDQUFDO0FBQ3BCL0gsWUFEb0I7QUFFcEJvRCxPQUZvQjtBQUdwQjFDLFVBSG9CO0FBSXBCQyxXQUpvQjtBQUtwQnFILFVBTG9CO0FBTXBCYjtBQU5vQixDQUFELEtBT2Q7QUFDTCxRQUFNLENBQUNuSyxJQUFELEVBQU9vSCxPQUFQLElBQWtCLHFCQUFTO0FBQUU2RCxVQUFNLEVBQUU7QUFBVixHQUFULENBQXhCO0FBQ0FuTCxTQUFPLENBQUNDLEdBQVIsQ0FBWWlMLFFBQVo7QUFDQSx3QkFBVSxNQUFNO0FBQ2Y1RCxXQUFPLENBQUM7QUFDUDZELFlBQU0sRUFBRUQsUUFBUSxDQUFDMUwsS0FBVCxJQUFrQjBMLFFBQVEsQ0FBQzFMLEtBQVQsQ0FBZTRMLFFBRGxDO0FBRVAvRSxVQUFJLEVBQUU2RSxRQUFRLENBQUMxTCxLQUFULElBQWtCMEwsUUFBUSxDQUFDMUwsS0FBVCxDQUFlNkc7QUFGaEMsS0FBRCxDQUFQO0FBSUEsR0FMRCxFQUtHLENBQUM2RSxRQUFRLENBQUMxTCxLQUFWLENBTEg7O0FBT0EsUUFBTWdJLFlBQVksR0FBRyxNQUFPQyxDQUFQLElBQWE7QUFDakNBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJLENBQUMyQyxJQUFMLEVBQVc7QUFDVnJLLGFBQU8sQ0FBQ0MsR0FBUixpQ0FDTUMsSUFETjtBQUNZbUwsb0JBQVksRUFBRW5JLFVBQVUsQ0FBQ3NIO0FBRHJDLFVBRUNsRSxLQUFLLENBQUNDLE1BQU4sQ0FBYTlGLGNBRmQ7QUFJQW1ELGNBQVEsaUNBQ0YxRCxJQURFO0FBQ0ltTCxvQkFBWSxFQUFFbkksVUFBVSxDQUFDc0g7QUFEN0IsVUFFUGxFLEtBQUssQ0FBQ0MsTUFBTixDQUFhOUYsY0FGTixDQUFSO0FBSUEsZ0NBQU0sMEJBQU47QUFDQSxLQVZELE1BVU87QUFDTm9ELGVBQVMsQ0FBQzNELElBQUQsRUFBT29HLEtBQUssQ0FBQ0MsTUFBTixDQUFhMUYsT0FBcEIsRUFBNkJ5RixLQUFLLENBQUNDLE1BQU4sQ0FBYTlGLGNBQTFDLENBQVQ7QUFDQSxnQ0FBTSxTQUFOO0FBQ0E7QUFDRCxHQWhCRDs7QUFrQkEsc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLHlDQUFLNEosSUFBSSxHQUFHLFFBQUgsR0FBYyxLQUF2QixXQURELGVBRUMsMkNBQ0UsR0FERixlQUVDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFDQyxnQkFBWSxFQUFFYSxRQUFRLENBQUMxTCxLQUFULElBQWtCMEwsUUFBUSxDQUFDMUwsS0FBVCxDQUFlNkcsSUFEaEQ7QUFFQyxZQUFRLEVBQUdvQixDQUFELElBQU87QUFDaEJILGFBQU8sQ0FBRVEsSUFBRCxvQ0FBZ0JBLElBQWhCO0FBQXNCekIsWUFBSSxFQUFFb0IsQ0FBQyxDQUFDTSxNQUFGLENBQVNDO0FBQXJDLFFBQUQsQ0FBUDtBQUNBLEtBSkY7QUFLQyxRQUFJLEVBQUM7QUFMTixJQURELENBRkQsZUFXQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLGtCQUFEO0FBQ0MsWUFBUSxFQUFFOUgsSUFBSSxDQUFDaUwsTUFEaEI7QUFFQyxXQUFPLEVBQUUsTUFBTTtBQUNkN0QsYUFBTyxDQUFFUSxJQUFELG9DQUFnQkEsSUFBaEI7QUFBc0JxRCxjQUFNLEVBQUUsQ0FBQ3JELElBQUksQ0FBQ3FEO0FBQXBDLFFBQUQsQ0FBUDtBQUNBO0FBSkYsSUFERCxDQVhELGVBbUJDLDZCQUFDLGNBQUQ7QUFBUSxZQUFRLEVBQUUsSUFBbEI7QUFBd0IsV0FBTyxFQUFFM0Q7QUFBakMsS0FDRTZDLElBQUksR0FBRyxRQUFILEdBQWMsS0FEcEIsQ0FuQkQsQ0FGRCxDQURELENBREQ7QUE4QkEsQ0FqRUQ7O0FBbUVBLE1BQU1uRCxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNuQ2pFLFlBQVUsRUFBRWlFLEtBQUssQ0FBQ2pFLFVBQU4sQ0FBaUJBO0FBRE0sQ0FBWixDQUF4Qjs7ZUFJZSx5QkFBUWdFLGVBQVIsRUFBeUI7QUFBRXRELFVBQVEsRUFBUkEsaUJBQUY7QUFBWUMsV0FBUyxFQUFUQTtBQUFaLENBQXpCLEVBQWtEb0gsV0FBbEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RWY7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1LLFdBQVcsR0FBRyxDQUFDO0FBQ3BCakIsTUFEb0I7QUFFcEIvRCxPQUZvQjtBQUdwQnRCLFVBSG9CO0FBSXBCRSxXQUpvQjtBQUtwQkgsVUFMb0I7QUFNcEJvRSxjQU5vQjtBQU9wQm9DO0FBUG9CLENBQUQsS0FRZDtBQUNMLFFBQU0sQ0FBQ2xGLElBQUQsRUFBT21GLE9BQVAsSUFBa0IscUJBQVNELFNBQVMsR0FBR0EsU0FBUyxDQUFDbEYsSUFBYixHQUFvQixFQUF0QyxDQUF4QjtBQUNBLFFBQU0sQ0FBQ29GLFdBQUQsRUFBY0MsY0FBZCxJQUFnQyxxQkFDckNILFNBQVMsR0FBR0EsU0FBUyxDQUFDRSxXQUFiLEdBQTJCLEVBREMsQ0FBdEM7QUFHQSxRQUFNLENBQUNFLEdBQUQsRUFBTUMsTUFBTixJQUFnQixxQkFBU0wsU0FBUyxHQUFHQSxTQUFTLENBQUNJLEdBQWIsR0FBbUIsRUFBckMsQ0FBdEI7O0FBRUEsUUFBTWpCLFNBQVMsR0FBRyxNQUFPakQsQ0FBUCxJQUFhO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNMUMsUUFBUSxDQUNiO0FBQUVxQixVQUFGO0FBQVFvRixpQkFBUjtBQUFxQkU7QUFBckIsS0FEYSxFQUVickYsS0FBSyxDQUFDQyxNQUFOLENBQWExRixPQUZBLEVBR2JzSSxZQUFZLENBQUNqRyxVQUFiLENBQXdCbUQsSUFIWCxDQUFkO0FBS0EsR0FQRDs7QUFTQSxRQUFNa0UsVUFBVSxHQUFHLE1BQU85QyxDQUFQLElBQWE7QUFDL0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU14QyxTQUFTLENBQ2Q7QUFBRW1CLFVBQUY7QUFBUW9GLGlCQUFSO0FBQXFCRTtBQUFyQixLQURjLEVBRWRKLFNBQVMsQ0FBQ2YsR0FGSSxFQUdkckIsWUFBWSxDQUFDakcsVUFBYixDQUF3Qm1ELElBSFYsQ0FBZjtBQUtBLEdBUEQ7O0FBU0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLHlDQUFLZ0UsSUFBSSxHQUFHLFFBQUgsR0FBYyxNQUF2QixVQURELGVBRUMsd0RBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxtREFERCxlQUVDO0FBQ0MsUUFBSSxFQUFDLE1BRE47QUFFQyxTQUFLLEVBQUVoRSxJQUZSO0FBR0MsWUFBUSxFQUFHb0IsQ0FBRCxJQUFPK0QsT0FBTyxDQUFDL0QsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVY7QUFIekIsSUFGRCxDQURELGVBU0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxrREFERCxlQUVDO0FBQ0MsUUFBSSxFQUFDLE1BRE47QUFFQyxTQUFLLEVBQUUyRCxHQUZSO0FBR0MsWUFBUSxFQUFHbEUsQ0FBRCxJQUFPbUUsTUFBTSxDQUFDbkUsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVY7QUFIeEIsSUFGRCxDQVRELGVBaUJDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsMERBREQsZUFFQztBQUNDLFNBQUssRUFBRXlELFdBRFI7QUFFQyxZQUFRLEVBQUdoRSxDQUFELElBQU9pRSxjQUFjLENBQUNqRSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVjtBQUZoQyxJQUZELENBakJELENBRkQsZUEyQkMsNkJBQUMsY0FBRDtBQUNDLFlBQVEsRUFBRSxJQURYO0FBRUMsV0FBTyxFQUFHUCxDQUFELElBQU87QUFDZjRDLFVBQUksR0FBR0UsVUFBVSxDQUFDOUMsQ0FBRCxDQUFiLEdBQW1CaUQsU0FBUyxDQUFDakQsQ0FBRCxDQUFoQztBQUNBO0FBSkYsS0FLRTRDLElBQUksR0FBRyxRQUFILEdBQWMsS0FMcEIsQ0EzQkQsQ0FERCxDQUREO0FBdUNBLENBeEVEOztBQTBFQSxNQUFNbkQsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbkNnQyxjQUFZLEVBQUVoQyxLQUFLLENBQUNqRSxVQURlO0FBRW5DcUksV0FBUyxFQUFFcEUsS0FBSyxDQUFDN0IsS0FBTixDQUFZdUc7QUFGWSxDQUFaLENBQXhCOztlQUtlLHlCQUFRM0UsZUFBUixFQUF5QjtBQUN2Q2xDLFVBQVEsRUFBUkEsaUJBRHVDO0FBRXZDRSxXQUFTLEVBQVRBLGtCQUZ1QztBQUd2Q0gsVUFBUSxFQUFSQTtBQUh1QyxDQUF6QixFQUladUcsV0FKWSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGZjs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLE1BQU1RLFlBQVksR0FBRyxRQUlmO0FBQUEsTUFKZ0I7QUFDcEJDLGFBQVMsRUFBRUMsU0FEUztBQUVwQjVFLFFBQUksRUFBRTtBQUFFNkU7QUFBRjtBQUZjLEdBSWhCO0FBQUEsTUFEREMsSUFDQzs7QUFDSixzQkFDRSw2QkFBQyxxQkFBRCxlQUNNQSxJQUROO0FBRUUsVUFBTSxFQUFHMU0sS0FBRCxJQUNOLENBQUN5TSxlQUFELGdCQUFtQiw2QkFBQyx3QkFBRDtBQUFVLFFBQUUsRUFBQztBQUFiLE1BQW5CLGdCQUE4Qyw2QkFBQyxTQUFELEVBQWV6TSxLQUFmO0FBSGxELEtBREY7QUFRRCxDQWJEOztBQWVBLE1BQU0wSCxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ0MsTUFBSSxFQUFFRCxLQUFLLENBQUNDO0FBRHNCLENBQVosQ0FBeEI7O2VBSWUseUJBQVFGLGVBQVIsRUFBeUI0RSxZQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZjs7QUFDQTs7OztBQUVPLE1BQU1LLEdBQUcsR0FBRyxDQUFDO0FBQ25CVixhQURtQjtBQUVuQlcsT0FBSyxHQUFHLEdBRlc7QUFHbkJDLE1BQUksR0FBRyxJQUhZO0FBSW5CQyxNQUFJLEdBQUcsRUFKWTtBQUtuQkM7QUFMbUIsQ0FBRCxLQU1iO0FBQ0w7QUFFQSxRQUFNQyxTQUFTLEdBQUksZ0JBQWVKLEtBQU0sRUFBeEM7QUFDQSxRQUFNSyxlQUFlLEdBQ3BCLHFMQUNBaEIsQ0FGRDtBQUlBLHNCQUNDLDZCQUFDLG1CQUFEO0FBQ0MsU0FBSyxFQUFFZSxTQURSO0FBRUMsa0JBQWMsRUFBRTtBQUFFSDtBQUFGLEtBRmpCO0FBR0MsUUFBSSxFQUFFLENBQ0w7QUFBRWhHLFVBQUksRUFBRyxhQUFUO0FBQXVCVyxhQUFPLEVBQUV5RjtBQUFoQyxLQURLLEVBRUw7QUFBRUMsY0FBUSxFQUFHLFVBQWI7QUFBd0IxRixhQUFPLEVBQUV3RjtBQUFqQyxLQUZLLEVBR0w7QUFBRUUsY0FBUSxFQUFHLGdCQUFiO0FBQThCMUYsYUFBTyxFQUFFeUY7QUFBdkMsS0FISyxFQUlMO0FBQUVDLGNBQVEsRUFBRyxTQUFiO0FBQXVCMUYsYUFBTyxFQUFHO0FBQWpDLEtBSkssRUFLTDtBQUFFWCxVQUFJLEVBQUcsY0FBVDtBQUF3QlcsYUFBTyxFQUFHO0FBQWxDLEtBTEssRUFNTDtBQUFFWCxVQUFJLEVBQUcsZUFBVDtBQUF5QlcsYUFBTyxFQUFFd0Y7QUFBbEMsS0FOSyxFQU9MO0FBQUVuRyxVQUFJLEVBQUcscUJBQVQ7QUFBK0JXLGFBQU8sRUFBRXlGO0FBQXhDLEtBUEssRUFRSkUsTUFSSSxDQVFHTCxJQVJILENBSFA7QUFZQyxRQUFJLEVBQUUsQ0FBQztBQUFFTSxTQUFHLEVBQUUsTUFBUDtBQUFlL00sVUFBSSxFQUFFLFdBQXJCO0FBQWtDZ04sVUFBSSxFQUFFO0FBQXhDLEtBQUQsQ0FaUDtBQWFDLFVBQU0sRUFBRSxDQUNQO0FBQ0NoTixVQUFJLEVBQUUscUJBRFA7QUFFQ2lOLGVBQVMsRUFBRXJMLElBQUksQ0FBQ0MsU0FBTCxDQUFlNkssVUFBZjtBQUZaLEtBRE87QUFiVCxJQUREO0FBc0JBLENBcENNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUNBOzs7O0FBRU8sTUFBTVEsV0FBVyxHQUFHLE9BQU9DLElBQVAsRUFBYTdNLE9BQWIsRUFBc0JvQixPQUFPLEdBQUcsSUFBaEMsS0FBeUM7QUFDbEUsU0FBTyxJQUFJMEwsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN0Q0MsbUJBQ0dDLElBREgsQ0FDUyxHQUFFQyxhQUFZLElBQUdOLElBQUssRUFEL0IsRUFDa0M3TSxPQURsQyxFQUMyQztBQUN2Q29CLGFBQU8sRUFBRUE7QUFEOEIsS0FEM0MsRUFJR2dNLElBSkgsQ0FJUSxVQUFVMUssUUFBVixFQUFvQjtBQUN4QnFLLGFBQU8sQ0FBQ3JLLFFBQVEsQ0FBQzNDLElBQVYsQ0FBUDtBQUNELEtBTkgsRUFPR3NOLEtBUEgsQ0FPUyxVQUFVcE4sS0FBVixFQUFpQjtBQUN0QitNLFlBQU0sQ0FBQy9NLEtBQUQsQ0FBTjtBQUNELEtBVEg7QUFVRCxHQVhNLENBQVA7QUFZRCxDQWJNOzs7O0FBZUEsTUFBTXFOLFVBQVUsR0FBRyxPQUFPVCxJQUFQLEVBQWE3TSxPQUFiLEtBQXlCO0FBQ2pELFNBQU8sSUFBSThNLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDdENDLG1CQUNHTSxHQURILENBQ1EsR0FBRUosYUFBWSxJQUFHTixJQUFLLEVBRDlCLEVBQ2lDN00sT0FEakMsRUFFR29OLElBRkgsQ0FFUSxVQUFVMUssUUFBVixFQUFvQjtBQUN4QnFLLGFBQU8sQ0FBQ3JLLFFBQVEsQ0FBQzNDLElBQVYsQ0FBUDtBQUNELEtBSkgsRUFLR3NOLEtBTEgsQ0FLUyxVQUFVcE4sS0FBVixFQUFpQjtBQUN0QitNLFlBQU0sQ0FBQy9NLEtBQUQsQ0FBTjtBQUNELEtBUEg7QUFRRCxHQVRNLENBQVA7QUFVRCxDQVhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLE1BQU1rTixXQUFXLEdBQUcsdUJBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7OztBQUVPLE1BQU1LLFlBQVksR0FBSTNPLEtBQUQsSUFBVztBQUNyQ2dCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZakIsS0FBWjs7QUFDQSxNQUFJQSxLQUFKLEVBQVc7QUFDVG9PLG1CQUFNUSxRQUFOLENBQWVyTSxPQUFmLENBQXVCc00sTUFBdkIsQ0FBOEIsZUFBOUIsSUFBa0QsT0FBTTdPLEtBQU0sRUFBOUQ7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPb08sZUFBTVEsUUFBTixDQUFlck0sT0FBZixDQUF1QnNNLE1BQXZCLENBQThCLGVBQTlCLENBQVA7QUFDRDtBQUNGLENBUE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsTUFBTWhFLFFBQVEsR0FBSUMsT0FBRCxJQUFhO0FBQ3BDaEwsVUFBUSxJQUNQaUwsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDYkMsWUFBUSxFQUFFLFFBREc7QUFFYkMsUUFBSSxFQUFFLENBRk87QUFHYkMsT0FBRyxFQUFFTCxPQUFPLENBQUNNO0FBSEEsR0FBZCxDQUREO0FBTUEsQ0FQTTs7O0FBU0EsTUFBTXRMLFFBQVEsR0FDcEIsT0FBT2lMLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQU0sQ0FBQ2xELFFBQXhDLEdBQW1ELElBQW5ELEdBQTBELEtBRHBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFA7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNaUgsY0FBYyxHQUFHLENBQUM7QUFBRTFCLE9BQUY7QUFBUzNJLFVBQVQ7QUFBbUJzSztBQUFuQixDQUFELEtBQW1DO0FBQ3pELHNCQUNDLDZCQUFDLG1CQUFEO0FBQVMsU0FBSyxFQUFFM0IsS0FBaEI7QUFBdUIsWUFBUSxFQUFFM0ksUUFBakM7QUFBMkMsV0FBTyxFQUFDO0FBQW5ELEtBQ0VzSyxRQURGLENBREQ7QUFLQSxDQU5EOztBQVFBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVuTyxNQUFGO0FBQVE4TCxLQUFSO0FBQWE1RixTQUFiO0FBQXNCeUMsU0FBdEI7QUFBK0J0SSxNQUFJLEdBQUc7QUFBdEMsQ0FBRCxLQUNwQnNJLE9BQU8sZ0JBQ04sNkJBQUMsY0FBRDtBQUFnQixPQUFLLEVBQUcsR0FBRTNJLElBQUssS0FBSUssSUFBSSxDQUFDbUcsSUFBSyxHQUE3QztBQUFpRCxVQUFRLEVBQUU7QUFBM0QsZ0JBQ0MsNkJBQUMsbUJBQUQ7QUFDQyxNQUFJLEVBQUV4RyxJQURQO0FBRUMsS0FBRyxFQUFFOEwsR0FGTjtBQUdDLFNBQU8sRUFBRTVGLE9BSFY7QUFJQyxNQUFJLEVBQUU3RjtBQUpQLEVBREQsQ0FETSxnQkFVTiw2QkFBQyxtQkFBRDtBQUNDLE1BQUksRUFBRSxNQURQO0FBRUMsS0FBRyxFQUFFeUwsR0FGTjtBQUdDLFNBQU8sRUFBRTVGLE9BSFY7QUFJQyxNQUFJLEVBQUU3RjtBQUpQLEVBWEY7O0FBbUJBLE1BQU0rTixtQkFBbUIsR0FBRyxDQUFDO0FBQUVwTyxNQUFGO0FBQVE4TCxLQUFSO0FBQWE1RixTQUFiO0FBQXNCN0Y7QUFBdEIsQ0FBRCxLQUFrQztBQUM3RCxVQUFRTCxJQUFSO0FBQ0MsU0FBSyxLQUFMO0FBQ0MsMEJBQ0MsNkJBQUMsb0JBQUQ7QUFBTSxVQUFFLEVBQUU4TDtBQUFWLHNCQUNDLDZCQUFDLFVBQUQ7QUFBSyxZQUFJLEVBQUMsSUFBVjtBQUFlLGFBQUssRUFBQztBQUFyQixRQURELENBREQ7O0FBTUQsU0FBSyxNQUFMO0FBQ0MsMEJBQ0MsNkJBQUMsb0JBQUQ7QUFDQyxVQUFFLEVBQUU7QUFDSHVDLGtCQUFRLEVBQUV2QyxHQURQO0FBRUhuTSxlQUFLLEVBQUU7QUFDTjZHLGdCQUFJLEVBQUVuRyxJQUFJLENBQUNtRyxJQURMO0FBRU4rRSxvQkFBUSxFQUFFbEwsSUFBSSxDQUFDaUw7QUFGVDtBQUZKO0FBREwsc0JBUUMsNkJBQUMsYUFBRDtBQUFRLFlBQUksRUFBQyxJQUFiO0FBQWtCLGFBQUssRUFBQztBQUF4QixRQVJELENBREQ7O0FBYUQsU0FBSyxRQUFMO0FBQ0MsMEJBQ0M7QUFDQyxhQUFLLEVBQUU7QUFBRWdELG9CQUFVLEVBQUUsTUFBZDtBQUFzQkMsZ0JBQU0sRUFBRSxNQUE5QjtBQUFzQ0MsaUJBQU8sRUFBRTtBQUEvQyxTQURSO0FBRUMsZUFBTyxFQUFFLE1BQU07QUFDZHRJLGlCQUFPLENBQUM3RixJQUFELENBQVA7QUFDQSxTQUpGO0FBS0MsaUJBQVMsRUFBQztBQUxYLHNCQU1DLDZCQUFDLGFBQUQ7QUFBUSxZQUFJLEVBQUMsSUFBYjtBQUFrQixhQUFLLEVBQUM7QUFBeEIsUUFORCxDQUREOztBQVdEO0FBQ0MsMEJBQU87QUFBUSxZQUFJLEVBQUMsR0FBYjtBQUNOLGFBQUssRUFBRTtBQUFFaU8sb0JBQVUsRUFBRSxNQUFkO0FBQXNCQyxnQkFBTSxFQUFFLE1BQTlCO0FBQXNDQyxpQkFBTyxFQUFFO0FBQS9DLFNBREQ7QUFFTixpQkFBUyxFQUFDO0FBRkosc0JBR04sNkJBQUMsYUFBRDtBQUFRLFlBQUksRUFBQyxHQUFiO0FBQWlCLGFBQUssRUFBQztBQUF2QixRQUhNLENBQVA7QUFuQ0Y7QUF5Q0EsQ0ExQ0Q7O0FBNENBLE1BQU1uSCxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNuQ3FCLFNBQU8sRUFBRXJCLEtBQUssQ0FBQ0MsSUFBTixDQUFXb0I7QUFEZSxDQUFaLENBQXhCOztlQUllLHlCQUFRdEIsZUFBUixFQUF5QixJQUF6QixFQUErQjhHLFlBQS9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZmOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTU0sUUFBUSxHQUFHLENBQUM7QUFBRXZJLFNBQUY7QUFBV2dJLFVBQVg7QUFBcUJRLE1BQXJCO0FBQTJCQztBQUEzQixDQUFELEtBQ2hCVCxRQUFRLGdCQUNQO0FBQ0MsV0FBUyxFQUFHLFVBQVNRLElBQUksSUFBSSxNQUFPLEVBRHJDO0FBRUMsT0FBSyxFQUFFO0FBQUVFLG1CQUFlLEVBQUcsR0FBRUQsRUFBRSxJQUFJLElBQUs7QUFBakMsR0FGUjtBQUdDLFNBQU8sRUFBRXpJLE9BQU8sR0FBR0EsT0FBSCxHQUFjMEIsQ0FBRCxJQUFPekgsT0FBTyxDQUFDQyxHQUFSLENBQVl3SCxDQUFaLEVBQWUxQixPQUFmO0FBSHJDLGdCQUlDLDJDQUFPZ0ksUUFBUCxDQUpELGVBS0MsdURBQ0M7QUFDQyxXQUFTLEVBQUMsSUFEWDtBQUVDLFFBQU0sRUFBQztBQUZSLEVBREQsZUFJQztBQUNDLFdBQVMsRUFBQyxJQURYO0FBRUMsUUFBTSxFQUFDO0FBRlIsRUFKRCxDQUxELENBRE8sZ0JBZ0JQLDREQUNFLEtBREYsZUFFQyx3REFDQyw2QkFBQyxXQUFEO0FBQU0sTUFBSSxFQUFFO0FBQVosRUFERCxDQUZELENBakJGOztBQXlCTyxNQUFNVyxNQUFNLEdBQUcsQ0FBQztBQUFFWCxVQUFGO0FBQVlwQyxLQUFaO0FBQWlCNEMsTUFBakI7QUFBdUJDLElBQXZCO0FBQTJCRyxVQUEzQjtBQUFxQzVJO0FBQXJDLENBQUQsS0FBb0Q7QUFDekUsU0FBTyxPQUFPNEksUUFBUCxJQUFtQixXQUFuQixnQkFDTiw2QkFBQyxvQkFBRDtBQUFNLE1BQUUsRUFBRWhELEdBQUcsSUFBSUE7QUFBakIsa0JBQ0MsNkJBQUMsUUFBRDtBQUFVLFFBQUksRUFBRTRDLElBQWhCO0FBQXNCLE1BQUUsRUFBRUM7QUFBMUIsS0FDRVQsUUFERixDQURELENBRE0sZ0JBT04sNkJBQUMsUUFBRDtBQUFVLFFBQUksRUFBRVEsSUFBaEI7QUFBc0IsTUFBRSxFQUFFQyxFQUExQjtBQUE4QixXQUFPLEVBQUV6STtBQUF2QyxLQUNFZ0ksUUFERixDQVBEO0FBV0EsQ0FaTTs7OztBQWNBLE1BQU1hLFVBQVUsR0FBRyxDQUFDO0FBQUV4RCxVQUFGO0FBQVlyRjtBQUFaLENBQUQsS0FBMkI7QUFDcEQsc0JBQU87QUFBTSxXQUFPLEVBQUVBO0FBQWYsS0FBeUJxRixRQUFRLGdCQUFHLDZCQUFDLFdBQUQsT0FBSCxnQkFBYyw2QkFBQyxhQUFELE9BQS9DLENBQVA7QUFDQSxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7Ozs7QUFFQSxNQUFNeUQsaUJBQWlCLEdBQUcsTUFBTTtBQUM5QixzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUcsT0FBRyxFQUFDLFVBQVA7QUFBa0IsUUFBSSxFQUFDO0FBQXZCLGtCQUNFO0FBQ0UsT0FBRyxFQUFDLHlEQUROO0FBRUUsT0FBRyxFQUFDO0FBRk4sSUFERixDQURGLGVBT0U7QUFBRyxPQUFHLEVBQUMsVUFBUDtBQUFrQixRQUFJLEVBQUM7QUFBdkIsa0JBQ0U7QUFBSyxPQUFHLEVBQUMsaURBQVQ7QUFBMkQsT0FBRyxFQUFDO0FBQS9ELElBREYsQ0FQRixlQVVFO0FBQUcsT0FBRyxFQUFDLFVBQVA7QUFBa0IsUUFBSSxFQUFDO0FBQXZCLGtCQUNFO0FBQUssT0FBRyxFQUFDLG1EQUFUO0FBQTZELE9BQUcsRUFBQztBQUFqRSxJQURGLENBVkYsZUFhRTtBQUFHLE9BQUcsRUFBQyxVQUFQO0FBQWtCLFFBQUksRUFBQztBQUF2QixrQkFDRTtBQUNFLE9BQUcsRUFBQyxnREFETjtBQUVFLGFBQVMsRUFBQyxRQUZaO0FBR0UsT0FBRyxFQUFDO0FBSE4sSUFERixDQWJGLENBREY7QUF1QkQsQ0F4QkQ7O0FBMEJPLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQzFCLFFBQU0sQ0FBQ2hOLEtBQUQsRUFBUWlOLFFBQVIsSUFBb0IscUJBQVMsRUFBVCxDQUExQjtBQUNBLFFBQU0sQ0FBQ3RNLE9BQUQsRUFBVXVNLFVBQVYsSUFBd0IscUJBQVMsRUFBVCxDQUE5QjtBQUVBLHdCQUFVLE1BQU07QUFDZEMsb0JBQWdCO0FBQ2pCLEdBRkQ7QUFJQSxRQUFNQSxnQkFBZ0IsR0FBRyx3QkFBWSxNQUFNO0FBQUVELGNBQVUsQ0FBQyxtREFBRCxDQUFWO0FBQWlFLEdBQXJGLEVBQ3JCLEVBRHFCLENBQXpCO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwwREFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsbUJBREYsZUFFRSw2QkFBQyxpQkFBRCxPQUZGLGVBR0U7QUFBRyxhQUFTLEVBQUM7QUFBYixtREFIRixDQURGLGVBUUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwwREFERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFGRixlQUdFLHdDQUFJdk0sT0FBSixDQUhGLGVBSUU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsa0JBQ0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFNBQUssRUFBRVgsS0FGVDtBQUdFLFlBQVEsRUFBRzJGLENBQUQsSUFBTztBQUNmc0gsY0FBUSxDQUFDdEgsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEtBTEg7QUFNRSxRQUFJLEVBQUMsT0FOUDtBQU9FLGFBQVMsRUFBQyxNQVBaO0FBUUUsZUFBVyxFQUFDO0FBUmQsSUFERixlQVlFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFFBQTNCO0FBQW9DLGFBQVMsRUFBQztBQUE5QyxJQVpGLENBSkYsQ0FSRixDQURGLENBREYsQ0FERjtBQWtDRCxDQTdDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QlA7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBSUE7Ozs7Ozs7O0FBTkE7QUFHQTtBQUVBO0FBR0EsTUFBTWtILE1BQU0sR0FBRyxDQUFDO0FBQUU5SCxNQUFGO0FBQVE5QyxJQUFSO0FBQVlNO0FBQVosQ0FBRCxLQUFrQztBQUNoRDtBQUNBLFFBQU0sQ0FBQ3VLLGNBQUQsRUFBaUJDLGlCQUFqQixJQUFzQyxxQkFBUyxLQUFULENBQTVDO0FBQ0EsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEIscUJBQVMsS0FBVCxDQUFoQztBQUVBLHdCQUFVLE1BQU07QUFDZnpJLFlBQVEsQ0FBQ2MsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNDLEdBQXpDLENBQTZDdkQsRUFBRSxDQUFDTyxXQUFoRDtBQUNBN0UsV0FBTyxDQUFDQyxHQUFSLENBQVlxRSxFQUFFLENBQUNPLFdBQWY7O0FBQ0EsUUFBSVAsRUFBRSxDQUFDTyxXQUFILEtBQW1CLE1BQXZCLEVBQStCO0FBQzlCeUssaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQTtBQUNELEdBTkQsRUFNRyxDQUFDQSxXQUFELEVBQWNoTCxFQUFFLENBQUNPLFdBQWpCLENBTkgsRUFMZ0QsQ0FhaEQ7O0FBQ0EsTUFBSS9GLGlCQUFKLEVBQWM7QUFDYixRQUFJeVEsSUFBSSxHQUFHLE9BQVg7QUFFQUEsUUFBSSxHQUFHeFEsWUFBWSxDQUFDaUMsT0FBYixDQUFxQixNQUFyQixDQUFQOztBQUVBLFFBQUl1TyxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNwQjFJLGNBQVEsQ0FBQ2MsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNDLEdBQXpDLENBQTZDLE1BQTdDO0FBQ0EsS0FGRCxNQUVPO0FBQ05oQixjQUFRLENBQUNjLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFNBQS9CLENBQXlDNEgsTUFBekMsQ0FBZ0QsTUFBaEQ7QUFDQTtBQUNELEdBeEIrQyxDQTBCaEQ7QUFFQTs7O0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLHlCQUFEO0FBQ0MsYUFBUyxFQUFFMVEscUJBQVlpTCxNQUFNLENBQUMwRixVQUFQLElBQXFCLEdBQWpDLEdBQXVDLElBQXZDLEdBQThDO0FBRDFELGtCQUVDLDZCQUFDLG1CQUFELHFCQUNDLDZCQUFDLG1CQUFELHFCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsNkJBQUMsb0JBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxrQkFDQztBQUNDLFNBQUssRUFBRTtBQUNOeEcsY0FBUSxFQUFFbksscUJBQVlpTCxNQUFNLENBQUMyRixXQUFQLElBQXNCLEdBQWxDLEdBQXdDLE1BQXhDLEdBQWlEO0FBRHJELEtBRFI7QUFJQyxhQUFTLEVBQUMsVUFKWDtBQUtDLE9BQUcsRUFBRUMsc0JBTE47QUFNQyxPQUFHLEVBQUM7QUFOTCxJQURELENBREQsZUFXQztBQUNDLE1BQUUsRUFBQyxRQURKO0FBRUMsV0FBTyxFQUFFLE1BQU07QUFDZC9LLG9CQUFjO0FBQ2QwSyxpQkFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNBLEtBTEY7QUFNQyxhQUFTLEVBQUcsc0JBQXFCQSxRQUFRLEdBQUcsVUFBSCxHQUFnQixFQUN2RDtBQVBILGtCQVFDO0FBQ0MsU0FBSyxFQUFFO0FBQ05aLHFCQUFlLEVBQ2RuSyxFQUFFLENBQUNPLFdBQUgsS0FBbUIsTUFBbkIsR0FBNEIsTUFBNUIsR0FBcUM7QUFGaEMsS0FEUjtBQUtDLE1BQUUsRUFBQztBQUxKLGtCQU1DO0FBQ0MsYUFBUyxFQUFDLFdBRFg7QUFFQyxTQUFLLEVBQUU7QUFBRStLLFdBQUssRUFBRTtBQUFULEtBRlI7QUFHQyxPQUFHLEVBQ0Z0TCxFQUFFLENBQUNPLFdBQUgsS0FBbUIsTUFBbkIsR0FDRyw0Q0FESCxHQUVHLDRDQU5MO0FBUUMsT0FBRyxFQUFDO0FBUkwsSUFORCxDQVJELENBWEQsZUFxQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyx1REFDQztBQUFNLGFBQVMsRUFBQztBQUFoQixnQkFERCxlQUVDLHdEQUNDO0FBQ0MsT0FBRyxFQUFDLFdBREw7QUFFQyxPQUFHLEVBQUMscURBRkw7QUFHQyxhQUFTLEVBQUM7QUFIWCxJQURELENBRkQsZUFTQyxnREFBUXVDLElBQUksQ0FBQ2xHLElBQUwsSUFBYWtHLElBQUksQ0FBQ2xHLElBQUwsQ0FBVTJPLE1BQS9CLE1BVEQsQ0FERCxDQXJDRCxlQW1EQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0V6SSxJQUFJLENBQUM2RSxlQUFMLElBQXdCN0UsSUFBSSxDQUFDNkUsZUFBN0IsZ0JBQ0EseUVBQ0MsNkJBQUMsc0JBQUQsT0FERCxDQURBLGdCQUtBLDZCQUFDLHVCQUFELE9BTkYsQ0FuREQsZUE2REMsNkJBQUMseUJBQUQsQ0FBVyxNQUFYO0FBQ0MsYUFBUyxFQUFDLFNBRFg7QUFFQyxXQUFPLEVBQUUsTUFBTTtBQUNkbUQsdUJBQWlCLENBQUMsQ0FBQ0QsY0FBRixDQUFqQjtBQUNBLEtBSkY7QUFLQyxNQUFFLEVBQUVULHNCQUxMO0FBTUMsV0FBTyxFQUFDLE1BTlQ7QUFPQyxZQUFRLEVBQUM7QUFQVixrQkFRQztBQUNDLGFBQVMsRUFBQyxnQkFEWDtBQUVDLFFBQUksRUFBQyxRQUZOO0FBR0MsbUJBQVkseUJBSGI7QUFJQyxxQkFBYyx3QkFKZjtBQUtDLHFCQUFlUyxjQUxoQjtBQU1DLGtCQUFXO0FBTlosa0JBT0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsSUFQRCxDQVJELENBN0RELGVBK0VDLDZCQUFDLHlCQUFELENBQVcsUUFBWDtBQUNDLGFBQVMsRUFBQyxHQURYO0FBRUMsTUFBRSxFQUFDLHdCQUZKO0FBR0MsWUFBUSxFQUFDO0FBSFYsa0JBSUMsMENBQ0UvSCxJQUFJLENBQUNsRyxJQUFMLElBQWFrRyxJQUFJLENBQUNsRyxJQUFMLENBQVVILE1BQXZCLGdCQUNBLDZCQUFDLHNCQUFELE9BREEsZ0JBR0EsNkJBQUMsdUJBQUQsT0FKRixDQUpELENBL0VELENBREQsQ0FERCxDQUZELENBREQsQ0FERCxDQUREO0FBeUdBLENBdklELEMsQ0F5SUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNbUcsZUFBZSxHQUFJQyxLQUFELElBQVc7QUFDbEMsU0FBTztBQUNOQyxRQUFJLEVBQUVELEtBQUssQ0FBQ0MsSUFETjtBQUVOOUMsTUFBRSxFQUFFNkMsS0FBSyxDQUFDN0M7QUFGSixHQUFQO0FBSUEsQ0FMRDs7ZUFPZSx5QkFBUTRDLGVBQVIsRUFBeUI7QUFBRXRDLGdCQUFjLEVBQWRBO0FBQUYsQ0FBekIsRUFBNkNzSyxNQUE3QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25LZjs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1ZLGFBQWEsR0FBRyxNQUFNO0FBQzNCLHNCQUNDLHVEQUNDO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDQyw2QkFBQyx1QkFBRDtBQUFTLE1BQUUsRUFBQyxPQUFaO0FBQW9CLGFBQVMsRUFBQztBQUE5QixZQURELENBREQsZUFNQztBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNDLDZCQUFDLHVCQUFEO0FBQVMsTUFBRSxFQUFDLFFBQVo7QUFBcUIsYUFBUyxFQUFDO0FBQS9CLGFBREQsQ0FORCxlQVdDO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0MsNkJBQUMsdUJBQUQ7QUFDQyxhQUFTLEVBQUMsV0FEWDtBQUVDLE1BQUUsRUFBQyxRQUZKO0FBR0MsUUFBSSxFQUFDLFFBSE47QUFJQyxxQkFBYztBQUpmLGFBREQsZUFRQztBQUFLLGFBQVMsRUFBQztBQUFmLElBUkQsQ0FYRCxlQXNCQztBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNDO0FBQ0MsV0FBTyxFQUFFLE1BQU07QUFDZC9RLGtCQUFZLENBQUNvRCxLQUFiO0FBQ0EsS0FIRjtBQUlDLFFBQUksRUFBQyxHQUpOO0FBS0MsUUFBSSxFQUFDLFFBTE47QUFNQyxhQUFTLEVBQUM7QUFOWCxjQURELENBdEJELENBREQsQ0FERDtBQXNDQSxDQXZDRDs7ZUF5Q2UyTixhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NmOztBQUNBOzs7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDM0Isc0JBQ0UsdURBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDRTtBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNFLDZCQUFDLHVCQUFEO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBb0IsYUFBUyxFQUFDO0FBQTlCLFlBREYsQ0FERixlQU1FO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0UsNkJBQUMsdUJBQUQ7QUFBUyxNQUFFLEVBQUMsUUFBWjtBQUFxQixhQUFTLEVBQUM7QUFBL0IsYUFERixDQU5GLGVBV0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDRSw2QkFBQyx1QkFBRDtBQUNFLGFBQVMsRUFBQyxXQURaO0FBRUUsTUFBRSxFQUFDLFFBRkw7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLHFCQUFjO0FBSmhCLGFBREYsZUFTRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBVEYsQ0FYRixlQXNCRTtBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNFLDZCQUFDLHVCQUFEO0FBQ0UsYUFBUyxFQUFDLFdBRFo7QUFFRSxNQUFFLEVBQUMsUUFGTDtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUscUJBQWMsTUFKaEI7QUFLRSxxQkFBYztBQUxoQixhQURGLGVBVUU7QUFBSyxhQUFTLEVBQUM7QUFBZixJQVZGLENBdEJGLENBREYsQ0FERjtBQXVDRCxDQXhDRDs7ZUEwQ2VBLGM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7OztBQUVPLE1BQU1DLFNBQVMsR0FBRyxNQUFNO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFNLGFBQVMsRUFBQztBQUFoQixJQURGLGVBRUU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsSUFGRixlQUdFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLElBSEYsQ0FERixDQURGO0FBU0QsQ0FWTTs7O2VBWVFBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkZixNQUFNQyxZQUFZLEdBQUc7QUFBRS9RLFVBQVEsRUFBRTtBQUFaLENBQXJCOztBQUVlLFNBQVNnUixjQUFULENBQXdCL0ksS0FBSyxHQUFHOEksWUFBaEMsRUFBOENFLE1BQTlDLEVBQXNEO0FBQ3BFLFFBQU07QUFBRXRRLFFBQUY7QUFBUU07QUFBUixNQUFvQmdRLE1BQTFCOztBQUVBLFVBQVF0USxJQUFSO0FBQ0MsU0FBSyxhQUFMO0FBQ0MsNkNBQ0lzSCxLQURKO0FBRUNpSixjQUFNLEVBQUVqUTtBQUZUOztBQUtELFNBQUssYUFBTDtBQUNDLDZDQUNJZ0gsS0FESjtBQUVDd0QsdUJBQWUsRUFBRXhLLE9BQU8sQ0FBQ3FHO0FBRjFCOztBQUlELFNBQUssa0JBQUw7QUFDQyw2Q0FDSVcsS0FESjtBQUVDakksZ0JBQVEsRUFBRWlCLE9BQU8sQ0FBQ2pCO0FBRm5COztBQUlELFNBQUssZUFBTDtBQUNDLDZDQUNJaUksS0FESjtBQUVDd0QsdUJBQWUsRUFBRTtBQUZsQjs7QUFLRCxTQUFLLG1CQUFMO0FBQ0MsK0JBQ0l4RCxLQURKOztBQUlEO0FBQ0MsYUFBT0EsS0FBUDtBQTdCRjtBQStCQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7O0FBVUE7Ozs7Ozs7O0FBRUEsTUFBTThJLFlBQVksR0FBRztBQUNwQmpSLE9BQUssRUFBRUYscUJBQVlDLFlBQVksQ0FBQ2lDLE9BQWIsQ0FBcUIsT0FBckIsQ0FEQztBQUVwQmlMLGlCQUFlLEVBQUUsSUFGRztBQUdwQm9FLFNBQU8sRUFBRSxLQUhXO0FBSXBCblAsTUFBSSxFQUFFLElBSmM7QUFLcEJzSCxTQUFPLEVBQUU7QUFMVyxDQUFyQjs7QUFRZSxTQUFTOEgsV0FBVCxDQUFxQm5KLEtBQUssR0FBRzhJLFlBQTdCLEVBQTJDRSxNQUEzQyxFQUFtRDtBQUNqRSxRQUFNO0FBQUV0USxRQUFGO0FBQVFNO0FBQVIsTUFBb0JnUSxNQUExQjs7QUFFQSxVQUFRdFEsSUFBUjtBQUNDLFNBQUtvQixrQkFBTDtBQUNDLDZDQUNJa0csS0FESjtBQUVDakcsWUFBSSxFQUFFZixPQUZQO0FBR0M4TCx1QkFBZSxFQUFFLElBSGxCO0FBSUN6RCxlQUFPLEVBQUVySSxPQUFPLENBQUNvUSxJQUFSLEtBQWlCLENBQWpCLEdBQXFCLEtBQXJCLEdBQTZCLElBSnZDO0FBS0NGLGVBQU8sRUFBRTtBQUxWOztBQU9ELFNBQUsxTyx1QkFBTDtBQUNBLFNBQUtLLG9CQUFMO0FBQ0NsRCwyQkFBWUMsWUFBWSxDQUFDK0YsT0FBYixDQUFxQixPQUFyQixFQUE4QjNFLE9BQU8sQ0FBQ25CLEtBQXRDLENBQVo7QUFDQUYsMkJBQVlDLFlBQVksQ0FBQytGLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0IzRSxPQUFPLENBQUNZLE1BQXZDLENBQVo7QUFDQWYsYUFBTyxDQUFDQyxHQUFSLENBQVlFLE9BQVo7QUFFQSwyREFDSWdILEtBREosR0FFSWhILE9BRko7QUFHQzhMLHVCQUFlLEVBQUUsSUFIbEI7QUFJQ29FLGVBQU8sRUFBRTtBQUpWOztBQU1ELFNBQUt6TyxvQkFBTDtBQUNDLDZDQUNJdUYsS0FESjtBQUVDa0osZUFBTyxFQUFFO0FBRlY7O0FBSUQsU0FBS3BPLGlCQUFMO0FBQ0EsU0FBS2IsaUJBQUw7QUFDQ3RDLDJCQUFZQyxZQUFZLENBQUN5UixVQUFiLENBQXdCLE9BQXhCLENBQVo7QUFDQTFSLDJCQUFZQyxZQUFZLENBQUN5UixVQUFiLENBQXdCLFFBQXhCLENBQVo7QUFDQSw2Q0FDSXJKLEtBREo7QUFFQ25JLGFBQUssRUFBRSxJQUZSO0FBR0NpTix1QkFBZSxFQUFFLEtBSGxCO0FBSUNvRSxlQUFPLEVBQUUsS0FKVjtBQUtDdFAsY0FBTSxFQUFFO0FBTFQ7O0FBT0QsU0FBS21ELGFBQUw7QUFDQyw2Q0FDSWlELEtBREo7QUFFQ25JLGFBQUssRUFBRSxJQUZSO0FBR0NpTix1QkFBZSxFQUFFLEtBSGxCO0FBSUNvRSxlQUFPLEVBQUU7QUFKVjs7QUFNRCxTQUFLMU4sdUJBQUw7QUFDQyw2Q0FDSXdFLEtBREosR0FFSWhILE9BRko7O0FBS0QsU0FBSyxpQkFBTDtBQUNDLDZDQUNJZ0gsS0FESjtBQUVDa0osZUFBTyxFQUFFO0FBRlY7O0FBSUQ7QUFDQyxhQUFPbEosS0FBUDtBQXhERjtBQTBEQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZSw0QkFBZ0I7QUFDOUJDLE1BQUksRUFBSkEsYUFEOEI7QUFFOUJsRSxZQUFVLEVBQVZBLG1CQUY4QjtBQUc5QnVOLE9BQUssRUFBTEEsY0FIOEI7QUFJOUJqSyxTQUFPLEVBQVBBLGdCQUo4QjtBQUs5QmxDLElBQUUsRUFBRkEsV0FMOEI7QUFNOUJnQixPQUFLLEVBQUxBO0FBTjhCLENBQWhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmYsTUFBTTJLLFlBQVksR0FBRztBQUNwQjlHLGNBQVksRUFBRTtBQURNLENBQXJCOztBQUllLFNBQVN1SCxpQkFBVCxDQUEyQnZKLEtBQUssR0FBRzhJLFlBQW5DLEVBQWlERSxNQUFqRCxFQUF5RDtBQUN2RSxRQUFNO0FBQUV0USxRQUFGO0FBQVFNO0FBQVIsTUFBb0JnUSxNQUExQjs7QUFFQSxVQUFRdFEsSUFBUjtBQUNDLFNBQUssa0JBQUw7QUFDQyw2Q0FDSXNILEtBREo7QUFFQ2dDLG9CQUFZLEVBQUVoSjtBQUZmOztBQUlELFNBQUssZ0JBQUw7QUFDQyw2Q0FDSWdILEtBREo7QUFFQ2pFLGtCQUFVLEVBQUUvQztBQUZiOztBQUlELFNBQUssa0JBQUw7QUFDQyw2Q0FDSWdILEtBREo7QUFFQ2pFLGtCQUFVLEVBQUU7QUFGYjs7QUFJRCxTQUFLLHdCQUFMO0FBQ0MsK0JBQ0lpRSxLQURKOztBQUlELFNBQUssc0JBQUw7QUFDQywrQkFDSUEsS0FESjs7QUFJRDtBQUNDLGFBQU9BLEtBQVA7QUEzQkY7QUE2QkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENELE1BQU04SSxZQUFZLEdBQUc7QUFDcEJHLFFBQU0sRUFBRTtBQURZLENBQXJCOztBQUllLFNBQVNPLFlBQVQsQ0FBc0J4SixLQUFLLEdBQUc4SSxZQUE5QixFQUE0Q0UsTUFBNUMsRUFBb0Q7QUFDbEUsUUFBTTtBQUFFdFEsUUFBRjtBQUFRTTtBQUFSLE1BQW9CZ1EsTUFBMUI7O0FBRUEsVUFBUXRRLElBQVI7QUFDQyxTQUFLLFlBQUw7QUFDQyw2Q0FDSXNILEtBREo7QUFFQ2lKLGNBQU0sRUFBRWpRO0FBRlQ7O0FBS0QsU0FBSyxrQkFBTDtBQUNDLCtCQUNJZ0gsS0FESjs7QUFJRDtBQUNDLGFBQU9BLEtBQVA7QUFiRjtBQWVBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRDs7Ozs7Ozs7QUFDQSxNQUFNOEksWUFBWSxHQUFHO0FBQ3BCMUwsWUFBVSxFQUFFLEVBRFE7QUFFcEJNLGFBQVcsRUFDVi9GLHFCQUFZQyxZQUFZLENBQUNpQyxPQUFiLENBQXFCLE1BQXJCLENBQVosR0FDR2xDLHFCQUFZQyxZQUFZLENBQUNpQyxPQUFiLENBQXFCLE1BQXJCLENBRGYsR0FFRztBQUxnQixDQUFyQjs7QUFRZSxTQUFTNFAsU0FBVCxDQUFtQnpKLEtBQUssR0FBRzhJLFlBQTNCLEVBQXlDRSxNQUF6QyxFQUFpRDtBQUMvRCxRQUFNO0FBQUV0USxRQUFGO0FBQVFNO0FBQVIsTUFBb0JnUSxNQUExQjs7QUFDQSxVQUFRdFEsSUFBUjtBQUNDLFNBQUssaUJBQUw7QUFDQyw2Q0FDSXNILEtBREo7QUFFQzVDLGtCQUFVLEVBQUVwRTtBQUZiOztBQUlELFNBQUssa0JBQUw7QUFDQyw2Q0FDSWdILEtBREo7QUFFQ3RDLG1CQUFXLEVBQUUxRTtBQUZkOztBQUtEO0FBQ0MsYUFBT2dILEtBQVA7QUFiRjtBQWVBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCRCxNQUFNOEksWUFBWSxHQUFHO0FBQ3BCcEUsZUFBYSxFQUFFO0FBREssQ0FBckI7O0FBSWUsU0FBU2dGLFlBQVQsQ0FBc0IxSixLQUFLLEdBQUc4SSxZQUE5QixFQUE0Q0UsTUFBNUMsRUFBb0Q7QUFDbEUsUUFBTTtBQUFFdFEsUUFBRjtBQUFRTTtBQUFSLE1BQW9CZ1EsTUFBMUI7O0FBRUEsVUFBUXRRLElBQVI7QUFDQyxTQUFLLFdBQUw7QUFDQyw2Q0FDSXNILEtBREo7QUFFQ2lKLGNBQU0sRUFBRWpRO0FBRlQ7O0FBS0QsU0FBSyxXQUFMO0FBQ0MsNkNBQ0lnSCxLQURKO0FBRUMwRSxxQkFBYSxFQUFFMUwsT0FBTyxDQUFDbUY7QUFGeEI7O0FBSUQsU0FBSyxjQUFMO0FBQ0MsNkNBQ0k2QixLQURKO0FBRUMwRSxxQkFBYSxFQUFFMUw7QUFGaEI7O0FBSUQsU0FBSyxhQUFMO0FBQ0MsNkNBQ0lnSCxLQURKO0FBRUMwRSxxQkFBYSxFQUFFO0FBRmhCOztBQUtELFNBQUssaUJBQUw7QUFDQywrQkFDSTFFLEtBREo7O0FBSUQ7QUFDQyxhQUFPQSxLQUFQO0FBN0JGO0FBK0JBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRDs7QUFDQTs7OztBQUVBLE1BQU0ySixXQUFXLEdBQUcsQ0FBQztBQUFFNVE7QUFBRixDQUFELEtBQWM7QUFDaEMsc0JBQ0U7QUFBTyxhQUFTLEVBQUM7QUFBakIsa0JBQ0UsMERBQ0U7QUFBSyxPQUFHLEVBQUMsRUFBVDtBQUFZLE9BQUcsRUFBQztBQUFoQixJQURGLGVBRUUseUNBQUtBLElBQUksQ0FBQ21HLElBQVYsQ0FGRixlQUdFLGtEQUhGLENBREYsZUFNRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLHdDQUFJbkcsSUFBSSxDQUFDNlEsR0FBVCxDQURGLGVBRUU7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDRSxzREFDRTtBQUFHLFVBQU0sRUFBQyxTQUFWO0FBQW9CLFFBQUksRUFBRTdRLElBQUksQ0FBQzhRO0FBQS9CLGtCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVwQixXQUFLLEVBQUU7QUFBVCxLQURUO0FBRUUsT0FBRyxFQUFDLHlEQUZOO0FBR0UsT0FBRyxFQUFDO0FBSE4sSUFERixDQURGLENBREYsZUFVRSxzREFDRTtBQUFHLFVBQU0sRUFBQyxTQUFWO0FBQW9CLFFBQUksRUFBRTFQLElBQUksQ0FBQytRO0FBQS9CLGtCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVyQixXQUFLLEVBQUU7QUFBVCxLQURUO0FBRUUsT0FBRyxFQUFDLG1EQUZOO0FBR0UsT0FBRyxFQUFDO0FBSE4sSUFERixDQURGLENBVkYsZUFtQkUsc0RBQ0U7QUFBRyxVQUFNLEVBQUMsU0FBVjtBQUFvQixRQUFJLEVBQUUxUCxJQUFJLENBQUNnUjtBQUEvQixrQkFDRTtBQUNFLFNBQUssRUFBRTtBQUFFdEIsV0FBSyxFQUFFO0FBQVQsS0FEVDtBQUVFLE9BQUcsRUFBQyxpREFGTjtBQUdFLE9BQUcsRUFBQztBQUhOLElBREYsQ0FERixDQW5CRixlQTRCRSxzREFDRTtBQUFHLFVBQU0sRUFBQyxTQUFWO0FBQW9CLFFBQUksRUFBRTFQLElBQUksQ0FBQ2lSO0FBQS9CLGtCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUV2QixXQUFLLEVBQUU7QUFBVCxLQURUO0FBRUUsT0FBRyxFQUFDLGdEQUZOO0FBR0UsYUFBUyxFQUFDLFFBSFo7QUFJRSxPQUFHLEVBQUM7QUFKTixJQURGLENBREYsQ0E1QkYsQ0FGRixDQU5GLENBREY7QUFtREQsQ0FwREQ7O0FBc0RBLE1BQU13QixPQUFPLEdBQUcsTUFBTTtBQUNwQixNQUFJLE9BQU9ySCxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDQSxVQUFNLENBQUNzSCxRQUFQLEdBQWtCLFlBQVk7QUFDNUJDLGdCQUFVO0FBQ1gsS0FGRDs7QUFJQSxhQUFTQSxVQUFULEdBQXNCO0FBQ3BCLFVBQUl2SCxNQUFNLENBQUN3SCxPQUFQLEdBQWlCLElBQXJCLEVBQTJCO0FBQ3pCMUssZ0JBQVEsQ0FDTGMsYUFESCxDQUNpQixlQURqQixFQUVHQyxTQUZILENBRWFDLEdBRmIsQ0FFaUIsbUJBRmpCO0FBR0Q7QUFDRjtBQUNGOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsdURBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSxnRUFDUSxnREFEUixDQURGLENBREYsZUFNRTtBQUFLLGFBQVMsRUFBQztBQUFmLHFhQU5GLENBREYsZUFpQkU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSw2QkFBQyxtQkFBRCxxQkFDRSw2QkFBQyxtQkFBRDtBQUFLLE1BQUUsRUFBRTtBQUFULGtCQUNFLDZCQUFDLFdBQUQ7QUFDRSxRQUFJLEVBQUU7QUFDSnhCLFVBQUksRUFBRSxPQURGO0FBRUoySyxrQkFBWSxFQUFFLHNDQUZWO0FBR0pDLGNBQVEsRUFBRSx3Q0FITjtBQUlKRSxlQUFTLEVBQUUsb0NBSlA7QUFLSkQsZ0JBQVUsRUFBRSw4QkFMUjtBQU1KSCxTQUFHLEVBQ0Q7QUFQRTtBQURSLElBREYsQ0FERixlQWVFLDZCQUFDLG1CQUFEO0FBQUssTUFBRSxFQUFFO0FBQVQsa0JBQ0UsNkJBQUMsV0FBRDtBQUNFLFFBQUksRUFBRTtBQUNKMUssVUFBSSxFQUFFLFFBREY7QUFFSjJLLGtCQUFZLEVBQUUsb0JBRlY7QUFHSkMsY0FBUSxFQUFFLHdDQUhOO0FBSUpFLGVBQVMsRUFBRSxrQ0FKUDtBQUtKRCxnQkFBVSxFQUFFLDhCQUxSO0FBTUpILFNBQUcsRUFDRDtBQVBFO0FBRFIsSUFERixDQWZGLENBREYsQ0FqQkYsQ0FERjtBQW1ERCxDQWxFRDs7ZUFvRWVLLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SGY7Ozs7QUFFQSxNQUFNSSxTQUFTLEdBQUcsTUFBTTtBQUN0QixzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsZ0VBQ1E7QUFBTSxhQUFTLEVBQUM7QUFBaEIsbUJBRFIsQ0FERixDQURGLGVBTUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLHdDQURGLGVBRUUsa0VBQ1U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsbUJBRFYsTUFGRix3TkFERixlQVdFLHdDQVhGLGVBWUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSw4REFDTTtBQUFNLGFBQVMsRUFBQztBQUFoQixtQkFETixNQURGLGdOQVpGLGVBcUJFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0Usd0NBREYsZUFFRSxrRUFDVTtBQUFNLGFBQVMsRUFBQztBQUFoQixtQkFEVixNQUZGLHdOQXJCRixlQStCRSx3Q0EvQkYsQ0FORixDQURGO0FBMENELENBM0NEOztlQTZDZUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZjs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1DLEdBQUcsR0FBRyxDQUFDO0FBQUV2UztBQUFGLENBQUQsS0FBa0I7QUFFMUIsc0JBQ0k7QUFBUyxhQUFTLEVBQUM7QUFBbkIsS0FDS0EsUUFBUSxJQUNMQSxRQUFRLENBQUN3UyxHQUFULENBQWNsTCxPQUFELElBQWE7QUFDdEIsVUFBTW1MLFNBQVMsR0FBR25MLE9BQU8sSUFBSUEsT0FBTyxDQUFDZ0UsR0FBckM7QUFDQSx3QkFDSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQStCLFNBQUcsRUFBRW1IO0FBQXBDLG9CQUNJLDZCQUFDLHVCQUFEO0FBQVMsUUFBRSxFQUFHLGNBQWFuTCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0gsSUFBUixDQUFhTSxPQUFiLENBQXFCLEtBQXJCLEVBQTRCLEdBQTVCLENBQWlDO0FBQXZFLG9CQUNJO0FBQ0ksU0FBRyxFQUFDLEVBRFI7QUFFSSxTQUFHLEVBQUVILE9BQU8sQ0FBQ21ELFlBQVIsR0FBdUJuRCxPQUFPLENBQUNtRCxZQUEvQixHQUE4QyxnRUFGdkQ7QUFHSSxlQUFTLEVBQUM7QUFIZCxNQURKLGVBTUk7QUFBRyxlQUFTLEVBQUM7QUFBYixPQUNLLEdBREwsRUFFS25ELE9BQU8sSUFBSSxxQkFBT0EsT0FBTyxDQUFDb0wsU0FBZixFQUEwQkMsTUFBMUIsQ0FBaUMsWUFBakMsQ0FGaEIsQ0FOSixlQVVJO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBbUNyTCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0gsSUFBdEQsQ0FWSixlQVdJO0FBQUcsZUFBUyxFQUFDO0FBQWIsT0FDSyxHQURMLGtCQVhKLENBREosQ0FESjtBQW9CSCxHQXRCRCxDQUZSLENBREo7QUE0QkgsQ0E5QkQ7O2VBZ0Nlb0wsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDZjs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1LLFFBQVEsR0FBRyxDQUFDO0FBQUU1UztBQUFGLENBQUQsS0FBa0I7QUFDbEMsc0JBQ0MsMENBQ0VBLFFBQVEsSUFDUkEsUUFBUSxDQUFDd1MsR0FBVCxDQUFjbEwsT0FBRCxJQUFhO0FBQ3pCLFFBQUlBLE9BQU8sSUFBSUEsT0FBTyxDQUFDaUQsUUFBUixLQUFxQixJQUFwQyxFQUEwQztBQUN6Q3pKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZdUcsT0FBWjtBQUNBLFlBQU1tTCxTQUFTLEdBQUduTCxPQUFPLElBQUlBLE9BQU8sQ0FBQ2dFLEdBQXJDO0FBQ0EsMEJBQ0M7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBK0IsV0FBRyxFQUFFaEUsT0FBTyxJQUFJQSxPQUFPLENBQUM1RztBQUF2RCxzQkFDQyw2QkFBQyx1QkFBRDtBQUNDLFVBQUUsRUFBRyxjQUNKNEcsT0FBTyxJQUFJQSxPQUFPLENBQUNILElBQVIsQ0FBYU0sT0FBYixDQUFxQixLQUFyQixFQUE0QixHQUE1QixDQUNYO0FBSEYsc0JBSUMsdURBQ0M7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FDRUgsT0FBTyxJQUNQLHFCQUFPQSxPQUFPLENBQUNvTCxTQUFmLEVBQTBCQyxNQUExQixDQUFpQyxZQUFqQyxDQUZGLENBREQsZUFLQztBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNFckwsT0FBTyxJQUFJQSxPQUFPLENBQUNILElBRHJCLENBTEQsZUFRQyx3Q0FSRCxlQVNDLHdDQVRELGVBVUM7QUFBRyxpQkFBUyxFQUFDO0FBQWIseUJBVkQsQ0FKRCxlQWdCQyx1REFDQztBQUNDLFdBQUcsRUFDRkcsT0FBTyxDQUFDbUQsWUFBUixHQUNHbkQsT0FBTyxDQUFDbUQsWUFEWCxHQUVHLGdFQUpMO0FBTUMsaUJBQVMsRUFBQyxpQkFOWDtBQU9DLFdBQUcsRUFBQztBQVBMLFFBREQsQ0FoQkQsQ0FERCxDQUREO0FBZ0NBOztBQUNELFdBQU8sSUFBUDtBQUNBLEdBdENELENBRkYsQ0FERDtBQTRDQSxDQTdDRDs7ZUErQ2VtSSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRmOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBRXZMO0FBQUYsQ0FBRCxLQUFpQjtBQUM1QnhHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZdUcsT0FBTyxJQUFJQSxPQUFPLENBQUNILElBQVIsQ0FBYU0sT0FBYixDQUFxQixLQUFyQixFQUE0QixHQUE1QixDQUF2QjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsVUFDS0gsT0FBTyxpQkFBSSw2QkFBQyx1QkFBRDtBQUFTLE1BQUUsRUFBRyxjQUFhQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0gsSUFBUixDQUFhTSxPQUFiLENBQXFCLEtBQXJCLEVBQTRCLEdBQTVCLENBQWlDO0FBQXZFLGtCQUNSO0FBQUssT0FBRyxFQUFDLEVBQVQ7QUFBWSxPQUFHLEVBQUVILE9BQU8sQ0FBQ21ELFlBQVIsR0FBdUJuRCxPQUFPLENBQUNtRCxZQUEvQixHQUE4QyxnRUFBL0Q7QUFDSSxhQUFTLEVBQUMsaUJBRGQ7QUFDZ0MsYUFBUyxFQUFDO0FBRDFDLElBRFEsZUFHUjtBQUFHLGFBQVMsRUFBQztBQUFiLFVBQXNDbkQsT0FBTyxJQUFJLHFCQUFPQSxPQUFPLENBQUNvTCxTQUFmLEVBQTBCQyxNQUExQixDQUFpQyxZQUFqQyxDQUFqRCxDQUhRLGVBSVI7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUFtQ3JMLE9BQU8sQ0FBQ0gsSUFBM0MsQ0FKUSxlQUtSO0FBQUcsYUFBUyxFQUFDO0FBQWIscUJBTFEsQ0FEaEIsQ0FESjtBQVdILENBYkQ7O2VBZWUwTCxNOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxhQUFvQixJQUFJLENBQWE7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsWUFBWSxJQUFJO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEIsWUFBWSxJQUFJO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLElBQUk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksSUFBSTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsWUFBWSxJQUFJO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxnQkFBZ0I7QUFDM0IsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbm9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsZ0NBQWE7QUFDdEMsbUJBQW1CLHdEQUE4QjtBQUNqRCxZQUFZLG1CQUFPLENBQUMsNENBQW1CO0FBQ3ZDLFlBQVksbUJBQU8sQ0FBQyx1RUFBZTtBQUNuQyxZQUFZLG1CQUFPLENBQUMseUVBQWdCO0FBQ3BDLGFBQWEsbUJBQU8sQ0FBQyxtRUFBVTtBQUMvQixVQUFVLG1CQUFPLENBQUMsK0RBQVc7QUFDN0IsVUFBVSxtQkFBTyxDQUFDLGlFQUFZOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFVBQVU7QUFDVixHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLHNIQUE2QztBQUM3QyxXQUFXO0FBQ1gsd0VBQXdDO0FBQ3hDLFlBQVk7QUFDWixrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUNuSEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1CQUFPLENBQUMsc0NBQWdCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsZ0NBQWE7QUFDakMsZUFBZSxtQkFBTyxDQUFDLDBCQUFVO0FBQ2pDLFNBQVMsbUJBQU8sQ0FBQyxjQUFJOztBQUVyQjtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx3QkFBUztBQUMvQixnQkFBZ0IsbUJBQU8sQ0FBQyxrQkFBTTtBQUM5QixXQUFXLDBDQUFtQjtBQUM5QixhQUFhLG1CQUFPLENBQUMsd0JBQVM7QUFDOUIsV0FBVyxtQkFBTyxDQUFDLGtCQUFNO0FBQ3pCLFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixpQkFBaUIsbUJBQU8sQ0FBQyxrQ0FBYztBQUN2QyxZQUFZLG1CQUFPLENBQUMsMEJBQVU7QUFDOUIsZ0JBQWdCLG1CQUFPLENBQUMsOEJBQVk7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsTUFBTTtBQUNqQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFH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QTZCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRGQUE0RjtBQUM1Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksZUFBZTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscURBQXFELGlCQUFpQjtBQUN0RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGFBQWE7QUFDeEIsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRDQUE0QztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxhQUFhO0FBQ3hCLFlBQVksZUFBZTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLGVBQWU7QUFDM0I7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixrQ0FBa0M7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHlEQUF5RDtBQUM5RjtBQUNBO0FBQ0EscUNBQXFDLGlDQUFpQztBQUN0RTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksZUFBZTtBQUMzQjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksZUFBZTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFlBQVksZUFBZTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDcm5DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsa0VBQVM7QUFDN0IsWUFBWSxtQkFBTyxDQUFDLGtFQUFTO0FBQzdCLGNBQWMsbUJBQU8sQ0FBQyx3QkFBUztBQUMvQixZQUFZLG1CQUFPLENBQUMsZ0NBQWE7QUFDakMsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLGtCQUFNO0FBQzlCLGNBQWMsbUJBQU8sQ0FBQyxvQ0FBZTtBQUNyQyxlQUFlLG1CQUFPLENBQUMsMEJBQVU7QUFDakMscUJBQXFCLG1CQUFPLENBQUMsc0NBQWdCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFlBQVksSUFBSTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFD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LDJDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0EsRTs7Ozs7V0NWQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLE1BQU02TixJQUFJLEdBQUdxSCxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUVBLE1BQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosSUFBb0IsSUFBakM7O0FBRUEsSUFBSUcsS0FBSyxHQUFHQyxZQUFHQyxZQUFILENBQWdCLGtCQUFoQixFQUFvQ0MsUUFBcEMsRUFBWixDLENBRUE7OztBQUVBLE1BQU1DLEdBQUcsR0FBRyx1QkFBWjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsWUFBWTtBQUNqQyxNQUFJO0FBQ0g5VSxXQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBLFVBQU1GLEdBQUcsR0FBRyxNQUFNcU4sZUFBTU0sR0FBTixDQUFVLHVDQUFWLENBQWxCO0FBQ0EsVUFBTXhPLFFBQVEsR0FBR2EsR0FBRyxDQUFDRyxJQUFKLENBQVNBLElBQVQsQ0FBY2hCLFFBQS9CO0FBQ0EsV0FBT0EsUUFBUDtBQUNBLEdBTEQsQ0FLRSxPQUFPa0IsS0FBUCxFQUFjO0FBQ2ZKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRyxLQUFLLENBQUNxQyxPQUFsQjtBQUNBO0FBQ0QsQ0FURDs7QUFXQW9TLEdBQUcsQ0FBQ0UsR0FBSixDQUFRQyxpQkFBUUMsTUFBUixDQUFlLE9BQWYsQ0FBUjtBQUNBSixHQUFHLENBQUNFLEdBQUosQ0FBUSxPQUFPRyxHQUFQLEVBQVluVixHQUFaLEtBQW9CO0FBSTNCLE1BQUlvVixTQUFKO0FBQ0EsTUFBSWpXLFFBQUo7O0FBQ0EsTUFBSWdXLEdBQUcsQ0FBQ3ZKLEdBQUosS0FBWSxPQUFoQixFQUF5QjtBQUN4QnpNLFlBQVEsR0FBRyxNQUFNNFYsYUFBYSxFQUE5QjtBQUNBOztBQUNELFFBQU1NLFdBQVcsZ0JBQ2hCLDZCQUFDLGNBQUQsQ0FBTyxVQUFQLHFCQUNDLDZCQUFDLG9CQUFEO0FBQVUsU0FBSyxFQUFFalc7QUFBakIsa0JBQ0MsNkJBQUMsNEJBQUQ7QUFBYyxZQUFRLEVBQUUrVixHQUFHLENBQUN2SixHQUE1QjtBQUFpQyxXQUFPLEVBQUU7QUFBMUMsa0JBQ0MsNkJBQUMsWUFBRDtBQUFLLFlBQVEsRUFBRXpNO0FBQWYsSUFERCxDQURELENBREQsQ0FERDs7QUFTQSxRQUFNNkgsSUFBSSxHQUFHc08sZ0JBQWVDLGNBQWYsQ0FBOEJGLFdBQTlCLENBQWI7O0FBR0FELFdBQVMsR0FBR1YsS0FBSyxDQUNmOU4sT0FEVSxDQUNGLHVCQURFLEVBQ3dCLGtCQUFpQkksSUFBSyxRQUQ5QyxFQUVWSixPQUZVLENBR1YsVUFIVSxFQUlULDJCQUEwQixrQ0FBVXpILFFBQVYsQ0FBb0IsRUFKckMsQ0FBWixDQXJCMkIsQ0E0QjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FhLEtBQUcsQ0FBQ3dWLElBQUosQ0FBU0osU0FBVDtBQUNBcFYsS0FBRyxDQUFDeVYsR0FBSjtBQUNBLENBbkNEO0FBdUNBeFYsT0FBTyxDQUFDQyxHQUFSLENBQWEsZ0JBQWVxVSxJQUFLLEVBQWpDO0FBQ0FPLEdBQUcsQ0FBQ1ksTUFBSixDQUFXbkIsSUFBWCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuXG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gJy4vYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IHNldEF1dGhUb2tlbiwgaXNDbGllbnQgfSBmcm9tICcuL2hlbHBlcnMvc2V0QXV0aFRva2VuJztcblxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuanMnO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyBQcmVsb2FkZXIgYXMgTG9hZGVyIH0gZnJvbSAnLi9sYXlvdXQvcHJlbG9hZGVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9sYXlvdXQvTmF2YmFyL05hdmJhcic7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aWNsZSc7XG5pbXBvcnQgVXBzZXJ0Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0Q2FyZCc7XG5pbXBvcnQgVXBzZXJ0QXJ0aWNsZSBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0QXJ0aWNsZSc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL2NvbXBvbmVudHMvQXV0aCc7XG5pbXBvcnQgVXBzZXJ0VG9waWMgZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydFRvcGljJztcbmltcG9ydCBVcHNlcnRWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0VmlkZW8nO1xuaW1wb3J0IEJsb2cgZnJvbSAnLi9jb21wb25lbnRzL0Jsb2cnO1xuLy8gaW1wb3J0IFByaXZhdGVSb3V0ZSBmcm9tICcuL2hlbHBlcnMvUHJpdmF0ZVJvdXRlJztcbmltcG9ydCBMZWFybiBmcm9tICcuL2NvbXBvbmVudHMvTGVhcm4nXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnXG5pbXBvcnQgUHJldmlldyBmcm9tICcuL2NvbXBvbmVudHMvUHJldmlldydcblxuaWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS50b2tlbikge1xuXHRzZXRBdXRoVG9rZW4obG9jYWxTdG9yYWdlLnRva2VuKTtcbn1cblxuY29uc3QgQXBwID0gKHsgYXJ0aWNsZXMgfSkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHN0b3JlLmRpc3BhdGNoKGxvYWRVc2VyKCkpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cblx0XHRcdDxOYXZiYXIgLz5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdDxTd2l0Y2g+XG5cdFx0XHRcdFx0PFJlZGlyZWN0IGV4YWN0IGZyb209Jy8nIHRvPSdob21lJyAvPjtcblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nL2hvbWUnIGNvbXBvbmVudD17SG9tZX0gLz5cblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nL2Fib3V0JyBjb21wb25lbnQ9e0Fib3V0fSAvPlxuXHRcdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPScvbGVhcm4nIGNvbXBvbmVudD17TGVhcm59IC8+XG5cdFx0XHRcdFx0PFJvdXRlXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPEF1dGggey4uLnByb3BzfSB0eXBlPXsnc2lnbnVwJ30gLz59XG5cdFx0XHRcdFx0XHRleGFjdFxuXHRcdFx0XHRcdFx0cGF0aD0nL3NpZ251cCdcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSb3V0ZVxuXHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IDxVcHNlcnRUb3BpYyBlZGl0PXtmYWxzZX0gey4uLnByb3BzfSAvPn1cblx0XHRcdFx0XHRcdGV4YWN0XG5cdFx0XHRcdFx0XHRwYXRoPScvOnNwZWNpYWxpdHlOYW1lL3RvcGljL2FkZCdcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSb3V0ZVxuXHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IDxVcHNlcnRUb3BpYyBlZGl0PXt0cnVlfSB7Li4ucHJvcHN9IC8+fVxuXHRcdFx0XHRcdFx0ZXhhY3Rcblx0XHRcdFx0XHRcdHBhdGg9Jy86c3BlY2lhbGl0eU5hbWUvdG9waWMvZWRpdC86dG9waWNJZCdcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSb3V0ZVxuXHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IDxBdXRoIHsuLi5wcm9wc30gdHlwZT17J3NpZ251cCd9IC8+fVxuXHRcdFx0XHRcdFx0ZXhhY3Rcblx0XHRcdFx0XHRcdHBhdGg9Jy9zaWdudXAvOnJlZmVyQ29kZSdcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSb3V0ZVxuXHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IDxBdXRoIHsuLi5wcm9wc30gdHlwZT17J2xvZ2luJ30gLz59XG5cdFx0XHRcdFx0XHRleGFjdFxuXHRcdFx0XHRcdFx0cGF0aD0nL2xvZ2luJ1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy9sZWFybi86c3BlY2lhbGl0eU5hbWUnIGNvbXBvbmVudD17UHJldmlld30gLz5cblx0XHRcdFx0XHQ8Um91dGVcblx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiA8VXBzZXJ0QXJ0aWNsZSB7Li4ucHJvcHN9IGVkaXQ9e2ZhbHNlfSAvPn1cblx0XHRcdFx0XHRcdGV4YWN0XG5cdFx0XHRcdFx0XHRwYXRoPScvYXJ0aWNsZS9hZGQnXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Um91dGVcblx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiA8VXBzZXJ0QXJ0aWNsZSB7Li4ucHJvcHN9IGVkaXQ9e3RydWV9IC8+fVxuXHRcdFx0XHRcdFx0ZXhhY3Rcblx0XHRcdFx0XHRcdHBhdGg9Jy9hcnRpY2xlL3VwZGF0ZSdcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSb3V0ZVxuXHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IDxVcHNlcnRWaWRlbyB7Li4ucHJvcHN9IGVkaXQ9e2ZhbHNlfSAvPn1cblx0XHRcdFx0XHRcdGV4YWN0XG5cdFx0XHRcdFx0XHRwYXRoPScvdmlkZW8vYWRkLzp0b3BpY0lkJ1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJvdXRlXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydFZpZGVvIHsuLi5wcm9wc30gZWRpdD17dHJ1ZX0gLz59XG5cdFx0XHRcdFx0XHRleGFjdFxuXHRcdFx0XHRcdFx0cGF0aD0nL3ZpZGVvL3VwZGF0ZS86dmlkZW9JZCdcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPScvYmxvZy9yZWFkLzpuYW1lJyBjb21wb25lbnQ9e0FydGljbGV9IC8+XG5cdFx0XHRcdFx0PFJvdXRlXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydENhcmQgey4uLnByb3BzfSBlZGl0PXtmYWxzZX0gLz59XG5cdFx0XHRcdFx0XHRleGFjdFxuXHRcdFx0XHRcdFx0cGF0aD0nL0FkZENhcmQnXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Um91dGVcblx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiA8VXBzZXJ0Q2FyZCB7Li4ucHJvcHN9IGVkaXQ9e3RydWV9IC8+fVxuXHRcdFx0XHRcdFx0ZXhhY3Rcblx0XHRcdFx0XHRcdHBhdGg9Jy91cGRhdGVzcGVjaWFsaXR5LzpzcGVjaWFsaXR5TmFtZSdcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSb3V0ZVxuXHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IDxCbG9nIHNlcnZlckFydGljbGVzPXthcnRpY2xlc30gey4uLnByb3BzfSAvPn1cblx0XHRcdFx0XHRcdGV4YWN0XG5cdFx0XHRcdFx0XHRwYXRoPScvYmxvZydcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PFRvYXN0Q29udGFpbmVyIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XG5leHBvcnQgY29uc3QgY2xlYXJBcnRpY2xlID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdDTEVBUl9BUlRJQ0xFJyxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZSA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL2FydGljbGUvZ2V0LyR7aWR9YCk7XG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0dFVF9BUlRJQ0xFJyxcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9yVG9hc3QoZXJyb3IpXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0dFVF9BUlRJQ0xFX0VSUk9SJyxcbiAgICAgIHBheWxvYWQ6IHt9LFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQXJ0aWNsZXMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXJ0aWNsZS9hbGxgKTtcbiAgICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKVxuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0dFVF9BTExfQVJUSUNMRVMnLFxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZXJyb3JUb2FzdChlcnJvcilcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnR0VUX0FMTF9BUlRJQ0xFU19FUlJPUicsXG4gICAgICBwYXlsb2FkOiB7fSxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFkZEFydGljbGUgPSAoZGF0YSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL2FydGljbGUvYWRkYCwgZGF0YSwge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0FERF9BUlRJQ0xFJyxcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxuICAgIH0pO1xuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXG4gICAgLy8gY29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXMyLmRhdGEpO1xuXG4gICAgLy8gZGlzcGF0Y2goe1xuICAgIC8vICAgdHlwZTogJ0dFVF9UT1BJQ1MnLFxuICAgIC8vICAgcGF5bG9hZDogcmVzMi5kYXRhLFxuICAgIC8vIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9yVG9hc3QoZXJyb3IpXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0FERF9BUlRJQ0xFX0VSUk9SJyxcbiAgICAgIHBheWxvYWQ6IHt9LFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdEFydGljbGUgPSAoZGF0YSwgaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL2FydGljbGUvdXBkYXRlLyR7aWR9YCwgZGF0YSwge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0VESVRfQVJUSUNMRScsXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcbiAgICB9KTtcbiAgICBjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuICAgIGNvbnNvbGUubG9nKHJlczIuZGF0YSk7XG5cbiAgICBzdWNjZXNzVG9hc3QocmVzKVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0dFVF9UT1BJQ1MnLFxuICAgICAgcGF5bG9hZDogcmVzMi5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9yVG9hc3QoZXJyb3IpXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0VESVRfQVJUSUNMRV9FUlJPUicsXG4gICAgICBwYXlsb2FkOiB7fSxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFydGljbGUgPSAoYXJ0aWNsZUlkLCB0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKFxuICBkaXNwYXRjaFxuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXG4gICAgICBgYXBpL2FydGljbGUvZGVsZXRlLyR7YXJ0aWNsZUlkfS8ke3RvcGljSWR9YCxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdERUxFVEVfQVJUSUNMRScsXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcbiAgICB9KTtcbiAgICBjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuICAgIGNvbnNvbGUubG9nKHJlczIuZGF0YSk7XG5cbiAgICBzdWNjZXNzVG9hc3QocmVzKVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0dFVF9UT1BJQ1MnLFxuICAgICAgcGF5bG9hZDogcmVzMi5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9yVG9hc3QoZXJyb3IpXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0RFTEVURV9BUlRJQ0xFX0VSUk9SJyxcbiAgICAgIHBheWxvYWQ6IHt9LFxuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHtcblx0UkVHSVNURVJfU1VDQ0VTUyxcblx0UkVHSVNURVJfRkFJTCxcblx0TE9HSU5fU1VDQ0VTUyxcblx0TE9HSU5fRkFJTCxcblx0VVNFUl9MT0FERUQsXG5cdEFVVEhfRVJST1IsXG5cdFNFTkRfUkVTRVRfRU1BSUwsXG5cdFNFTkRfUkVTRVRfRU1BSUxfRkFJTCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0LCBzZXRBdXRoVG9rZW4sIGlzQ2xpZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcblxuLy8gTG9hZCBVc2VyIDogRXZlcnkgdGltZSB3ZSBsb2dnZWQgaW4gb3IgcmVnaXN0ZXIgb3IgcmVmcmVzaCB0aGUgcGFnZSBpdHMgZ29ubmEgbG9hZC5cblxuZXhwb3J0IGNvbnN0IGxvYWRVc2VyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiAnU0VUX0FVVEhfTE9BREVSJyxcblx0fSk7XG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudG9rZW4pIHtcblx0XHRzZXRBdXRoVG9rZW4obG9jYWxTdG9yYWdlLnRva2VuKTtcblx0fVxuXG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudXNlcklkKSB7XG5cdFx0Y29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hdXRoL3VzZXIvJHt1c2VySWR9YCk7XG5cdFx0XHQvLyBkaXNwbGF5VG9hc3Rcblx0XHRcdHN1Y2Nlc3NUb2FzdChyZXMpO1xuXG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6IFVTRVJfTE9BREVELFxuXHRcdFx0XHRwYXlsb2FkOiByZXMuZGF0YS51c2VyLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHQvLyBkaXNwbGF5IHRvYXN0XG5cdFx0XHRlcnJvclRvYXN0KGVycik7XG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6IEFVVEhfRVJST1IsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWZyZXNoVXNlciA9ICh1c2VyKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0ZGlzcGF0Y2goe1xuXHRcdHR5cGU6ICdTRVRfQVVUSF9MT0FERVInLFxuXHR9KTtcblx0aWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS50b2tlbikge1xuXHRcdHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2UudG9rZW4pO1xuXHR9XG5cblx0aWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS51c2VySWQpIHtcblx0XHRjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly8gY29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL2F1dGgvdXNlci8ke3VzZXJJZH1gKTtcblx0XHRcdGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hdXRoL3VzZXIvJHt1c2VySWR9YCk7XG5cblx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogVVNFUl9MT0FERUQsXG5cdFx0XHRcdHBheWxvYWQ6IHVzZXIsXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogQVVUSF9FUlJPUixcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gKGRhdGEpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRkaXNwYXRjaCh7XG5cdFx0dHlwZTogJ1NFVF9BVVRIX0xPQURFUicsXG5cdH0pO1xuXHRjb25zdCBoZWFkZXJzID0ge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdH07XG5cblx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJ2FwaS9hdXRoL3NpZ251cCcsIGJvZHksIGhlYWRlcnMpO1xuXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogcmVzLnN0YXR1cyA9PT0gMSA/IFJFR0lTVEVSX1NVQ0NFU1MgOiBSRUdJU1RFUl9GQUlMLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cblx0XHRzdWNjZXNzVG9hc3QocmVzKTtcblxuXHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0ZGlzcGF0Y2gobG9hZFVzZXIoKSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIGNvbnN0IGVycm9ycyA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9ycztcblx0XHRlcnJvclRvYXN0KGVycik7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogUkVHSVNURVJfRkFJTCxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID1cblx0KHsgZW1haWwsIHBhc3N3b3JkIH0pID0+XG5cdGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdTRVRfQVVUSF9MT0FERVInLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH07XG5cblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJ2FwaS9hdXRoL2xvZ2luJywgYm9keSwgaGVhZGVycyk7XG5cblx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cblx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogcmVzLnN0YXR1cyA9PT0gMSA/IExPR0lOX1NVQ0NFU1MgOiBMT0dJTl9GQUlMLFxuXHRcdFx0XHRwYXlsb2FkOiB7IHVzZXJJZDogcmVzLmRhdGE/LnVzZXI/LnVzZXJJZCwgdG9rZW46IHJlcy5kYXRhPy50b2tlbiB9LFxuXHRcdFx0fSk7XG5cblx0XHRcdGRpc3BhdGNoKGxvYWRVc2VyKCkpO1xuXHRcdFx0c3VjY2Vzc1RvYXN0KHJlcyk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0ZXJyb3JUb2FzdChlcnIpO1xuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiBMT0dJTl9GQUlMLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdGlmIChpc0NsaWVudCkgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiAnTE9HT1VUJyxcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFJlc2V0RW1haWwgPVxuXHQoeyBlbWFpbCB9KSA9PlxuXHRhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCBjb25maWcgPSB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgZW1haWwgfSk7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJy9hcGkvZm9yZ290cGFzc3dvcmQnLCBib2R5LCBjb25maWcpO1xuXG5cdFx0XHRjb25zdCBtZXNzYWdlc0FycmF5ID0gcmVzLmRhdGEubWVzc2FnZXM7XG5cdFx0XHQvLyBicmFuZCBhZGRlZCBtZXNzYWdlIGFsZXJ0XG5cdFx0XHRtZXNzYWdlc0FycmF5LmZvckVhY2goKG1lc3NhZ2UpID0+IGRpc3BhdGNoKChtZXNzYWdlLm1zZywgJ2RhbmdlcicpKSk7XG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6IFNFTkRfUkVTRVRfRU1BSUwsXG5cdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zdCBlcnJvcnMgPSBlcnIgJiYgZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuXHRcdFx0aWYgKGVycm9ycykge1xuXHRcdFx0fVxuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiBTRU5EX1JFU0VUX0VNQUlMX0ZBSUwsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG4iLCJleHBvcnQgKiBmcm9tICcuL2FydGljbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoJztcbmV4cG9ydCAqIGZyb20gJy4vc3BlY2lhbGl0eSc7XG5leHBvcnQgKiBmcm9tICcuL3RvcGljJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi91aSc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZGVvJztcbiIsImltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcblxuZXhwb3J0IGNvbnN0IGdldFNwZWNpYWxpdGllcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoJ2FwaS9zcGVjaWFsaXR5L2FsbCcpO1xuXHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRJRVMnLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJTcGVjaWFsaXR5ID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiAnQ0xFQVJfU1BFQ0lBTElUWScsXG5cdFx0cGF5bG9hZDoge30sXG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNwZWNpYWxpdHkgPSAoc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9zcGVjaWFsaXR5L2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUWScsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YS5zcGVjaWFsaXR5LFxuXHRcdH0pO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRZX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkU3BlY2lhbGl0eSA9IChkYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdCgnYXBpL3NwZWNpYWxpdHkvYWRkJywgZGF0YSwge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0FERF9TUEVDSUFMSVRJWScsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldCgnYXBpL3NwZWNpYWxpdHkvYWxsJyk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRJRVMnLFxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxuXHRcdH0pO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnQUREX1NQRUNJQUxJVFlfRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0U3BlY2lhbGl0eSA9IChkYXRhLCBpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS9zcGVjaWFsaXR5L3VwZGF0ZS8ke2lkfWAsIGRhdGEsIHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0VESVRfU1BFQ0lBTElUSVknLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoJ2FwaS9zcGVjaWFsaXR5L2FsbCcpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcblx0XHR9KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0VESVRfU1BFQ0lBTElUWV9FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNwZWNpYWxpdHkgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxuXHRcdFx0YGFwaS9zcGVjaWFsaXR5L2RlbGV0ZS8ke2lkfWAsXG5cdFx0XHR7fSxcblx0XHRcdHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdH1cblx0XHQpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdERUxFVEVfU1BFQ0lBTElUSVknLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoJ2FwaS9zcGVjaWFsaXR5L2FsbCcpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcblx0XHR9KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0RFTEVURV9TUEVDSUFMSVRZX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuIiwiaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cblxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NUb2FzdCA9IChyZXMpID0+IHtcbiAgICByZXMuc3RhdHVzID09IDEgPyB0b2FzdC5zdWNjZXNzKHJlcy5tZXNzYWdlLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgIH0pIDogdG9hc3QuZXJyb3IocmVzLm1lc3NhZ2UsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBlcnJvclRvYXN0ID0gKGVycikgPT4ge1xuICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgIH0pO1xufSIsImltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xuXG5leHBvcnQgY29uc3QgZ2V0VG9waWNzID0gKHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDU19FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRvcGljID0gKGRhdGEsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0Y29uc29sZS5sb2coc3BlY2lhbGl0eU5hbWUpO1xuXHR0cnkge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvdG9waWMvYWRkYCwgZGF0YSwge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnQUREX1RPUElDJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHRcdC8vIHJlZnJlc2ggdG9waWNzXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnQUREX1RPUElDX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFRvcGljID0gKGRhdGEsIGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS90b3BpYy91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnRURJVF9UT1BJQycsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0VESVRfVE9QSUNfRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCB1bmxvY2tUb3BpYyA9ICh0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnNvbGUubG9nKHNwZWNpYWxpdHlOYW1lKTtcblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcblx0XHRcdGBhcGkvdG9waWMvdW5sb2NrLyR7dG9waWNJZH1gLFxuXHRcdFx0e30sXG5cdFx0XHR7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdVU0VSTE9BREVEJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLnVzZXIsXG5cdFx0fSk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ1VOTE9DS19UT1BJQycsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ1VOTE9DS19UT1BJQ19FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRvcGljID0gKGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnNvbGUubG9nKHsgaWQsIHNwZWNpYWxpdHlOYW1lIH0pO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxuXHRcdFx0YGFwaS90b3BpYy9kZWxldGUvJHtpZH1gLFxuXHRcdFx0e30sXG5cdFx0XHR7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnREVMRVRFX1RPUElDJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0RFTEVURV9UT1BJQ19FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcbiIsImV4cG9ydCBjb25zdCBTRVRfQUxFUlQgPSAnU0VUX0FMRVJUJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfQUxFUlQgPSAnUkVNT1ZFX0FMRVJUJztcblxuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSAnTE9HSU5fU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTCA9ICdMT0dJTl9GQUlMJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9TVUNDRVNTID0gJ1JFR0lTVEVSX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZBSUwgPSAnUkVHSVNURVJfRkFJTCc7XG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9FTUFJTCA9ICdTRU5EX1JFU0VUX0VNQUlMJztcbmV4cG9ydCBjb25zdCBTRU5EX1JFU0VUX0VNQUlMX0ZBSUwgPSAnU0VORF9SRVNFVF9FTUFJTF9GQUlMJztcblxuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdMT0dPVVQnO1xuXG5leHBvcnQgY29uc3QgVVNFUl9MT0FERUQgPSAnVVNFUkxPQURFRCc7XG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUiA9ICdBVVRIX0VSUk9SJztcbiIsImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgY29uc3Qgc2V0T3BlblRvcGljcyA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnNvbGUubG9nKGlkKTtcblx0Y29uc3Qgb3BlblRvcGljc0FycmF5ID0gc3RvcmUuZ2V0U3RhdGUoKS51aS5vcGVuVG9waWNzO1xuXHRpZiAoIW9wZW5Ub3BpY3NBcnJheS5pbmNsdWRlcyhpZCkpIHtcblx0XHRvcGVuVG9waWNzQXJyYXkucHVzaChpZCk7XG5cdH0gZWxzZSB7XG5cdFx0b3BlblRvcGljc0FycmF5LnNwbGljZShvcGVuVG9waWNzQXJyYXkuaW5kZXhPZihpZCksIDEpO1xuXHR9XG5cblx0ZGlzcGF0Y2goe1xuXHRcdHR5cGU6ICdTRVRfT1BFTl9UT1BJQ1MnLFxuXHRcdHBheWxvYWQ6IG9wZW5Ub3BpY3NBcnJheSxcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0RGlzcGxheU1vZGUgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0Y29uc3QgZGlzcGxheU1vZGUgPVxuXHRcdHN0b3JlLmdldFN0YXRlKCkudWkuZGlzcGxheU1vZGUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XG5cdGlmIChpc0NsaWVudCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vZGUnLCBkaXNwbGF5TW9kZSk7XG5cblx0ZGlzcGF0Y2goe1xuXHRcdHR5cGU6ICdTRVRfRElTUExBWV9NT0RFJyxcblx0XHRwYXlsb2FkOiBkaXNwbGF5TW9kZSxcblx0fSk7XG59O1xuIiwiaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xuXG5cblxuZXhwb3J0IGNvbnN0IGdldFZpZGVvID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdmlkZW8vZ2V0LyR7aWR9YCk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1ZJREVPJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0FERF9WSURFT19FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGFkZFZpZGVvID0gKGRhdGEsIGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvdmlkZW8vYWRkLyR7aWR9YCwgZGF0YSwge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdBRERfVklERU8nLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cblx0XHRjb25zdCByZXNUb3BpYyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcblx0XHRjb25zb2xlLmxvZyhyZXNUb3BpYyk7XG5cblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXG5cdFx0XHRwYXlsb2FkOiByZXNUb3BpYy5kYXRhLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnQUREX1ZJREVPX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFZpZGVvID0gKGRhdGEsIGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS92aWRlby91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnRURJVF9WSURFTycsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXG5cdFx0Y29uc3QgcmVzVG9waWMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG5cblx0XHRjb25zb2xlLmxvZyhyZXNUb3BpYy5kYXRhKTtcblxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcblx0XHRcdHBheWxvYWQ6IHJlc1RvcGljLmRhdGEsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnRURJVF9WSURFT19FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVZpZGVvID1cblx0KHZpZGVvSWQsIHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXG5cdFx0XHRcdGBhcGkvdmlkZW8vZGVsZXRlLyR7dmlkZW9JZH0vJHt0b3BpY0lkfWAsXG5cdFx0XHRcdHt9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogJ0RFTEVURV9WSURFTycsXG5cdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzMi5kYXRhKTtcblx0XHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcblx0XHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6ICdERUxFVEVfVklERU9fRVJST1InLFxuXHRcdFx0XHRwYXlsb2FkOiB7fSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFZpZGVvID0gKHZpZGVvKSA9PiAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnU0VMRUNUX1ZJREVPJyxcblx0XHRcdHBheWxvYWQ6IHZpZGVvLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdTRUxFQ1RfVklERU9fRVJST1InLFxuXHRcdH0pO1xuXHR9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBBZGQgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcblx0PHN2Z1xuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0XHR3aWR0aD17c2l6ZX1cblx0XHRoZWlnaHQ9e3NpemV9XG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xuXHRcdGZpbGw9J25vbmUnXG5cdFx0c3Ryb2tlPXtjb2xvcn1cblx0XHRzdHJva2VXaWR0aD0nMy41J1xuXHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XG5cdFx0PGxpbmUgeDE9JzEyJyB5MT0nNScgeDI9JzEyJyB5Mj0nMTknPjwvbGluZT5cblx0XHQ8bGluZSB4MT0nNScgeTE9JzEyJyB4Mj0nMTknIHkyPScxMic+PC9saW5lPlxuXHQ8L3N2Zz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQ2hldnJvbnNVcCA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxuXHQ8c3ZnXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdHdpZHRoPXtzaXplfVxuXHRcdGhlaWdodD17c2l6ZX1cblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXG5cdFx0ZmlsbD0nbm9uZSdcblx0XHRzdHJva2U9e2NvbG9yfVxuXHRcdHN0cm9rZVdpZHRoPSczLjUnXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xuXHRcdHN0cm9rZUxpbmVqb2luPSdhcmNzJz5cblx0XHQ8cGF0aCBkPSdNMTcgMTFsLTUtNS01IDVNMTcgMThsLTUtNS01IDUnIC8+XG5cdDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IENoZXZyb25zTGVmdCA9ICh7IHNpemUgPSA1MSwgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxuXHQ8c3ZnXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdHdpZHRoPXtzaXplfVxuXHRcdGhlaWdodD17c2l6ZX1cblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXG5cdFx0ZmlsbD0nbm9uZSdcblx0XHRzdHJva2U9e2NvbG9yfVxuXHRcdHN0cm9rZVdpZHRoPScyLjUnXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xuXHRcdHN0cm9rZUxpbmVqb2luPSdhcmNzJz5cblx0XHQ8cGF0aCBkPSdNMTEgMTdsLTUtNSA1LTVNMTggMTdsLTUtNSA1LTUnIC8+XG5cdDwvc3ZnPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQ3Jvc3MgPSAoeyBzaXplID0gMzIsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcblx0PHN2Z1xuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0XHR3aWR0aD17c2l6ZX1cblx0XHRoZWlnaHQ9e3NpemV9XG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xuXHRcdGZpbGw9J25vbmUnXG5cdFx0c3Ryb2tlPXtjb2xvcn1cblx0XHRzdHJva2VXaWR0aD0nMS41J1xuXHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XG5cdFx0PGxpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCc+PC9saW5lPlxuXHRcdDxsaW5lIHgxPSc2JyB5MT0nNicgeDI9JzE4JyB5Mj0nMTgnPjwvbGluZT5cblx0PC9zdmc+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBEZWxldGUgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHdpZHRoPXtzaXplfVxuICAgIGhlaWdodD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgc3Ryb2tlPXtjb2xvcn1cbiAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgIHN0cm9rZUxpbmVjYXA9XCJzcXVhcmVcIlxuICAgIHN0cm9rZUxpbmVqb2luPVwiYXJjc1wiXG4gID5cbiAgICA8cG9seWxpbmUgcG9pbnRzPVwiMyA2IDUgNiAyMSA2XCI+PC9wb2x5bGluZT5cbiAgICA8cGF0aCBkPVwiTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXCI+PC9wYXRoPlxuICAgIDxsaW5lIHgxPVwiMTBcIiB5MT1cIjExXCIgeDI9XCIxMFwiIHkyPVwiMTdcIj48L2xpbmU+XG4gICAgPGxpbmUgeDE9XCIxNFwiIHkxPVwiMTFcIiB4Mj1cIjE0XCIgeTI9XCIxN1wiPjwvbGluZT5cbiAgPC9zdmc+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IExvY2sgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyNEQzE0M0MnLCBoYW5kbGVyIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c3ZnXG5cdFx0XHRvbkNsaWNrPXtoYW5kbGVyfVxuXHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdFx0d2lkdGg9JzQzJ1xuXHRcdFx0aGVpZ2h0PSc0Mydcblx0XHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcblx0XHRcdGZpbGw9J25vbmUnXG5cdFx0XHRzdHJva2U9e2NvbG9yfVxuXHRcdFx0c3Ryb2tlLXdpZHRoPScyJ1xuXHRcdFx0c3Ryb2tlLWxpbmVjYXA9J3JvdW5kJ1xuXHRcdFx0c3Ryb2tlLWxpbmVqb2luPSdyb3VuZCc+XG5cdFx0XHQ8cmVjdCB4PSczJyB5PScxMScgd2lkdGg9JzE4JyBoZWlnaHQ9JzExJyByeD0nMicgcnk9JzInPjwvcmVjdD5cblx0XHRcdDxwYXRoIGQ9J003IDExVjdhNSA1IDAgMCAxIDEwIDB2NCc+PC9wYXRoPlxuXHRcdDwvc3ZnPlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IFVubG9jayA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwRkYwMCcgfSkgPT4gKFxuXHQ8c3ZnXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdHdpZHRoPSc0Mydcblx0XHRoZWlnaHQ9JzQzJ1xuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcblx0XHRmaWxsPSdub25lJ1xuXHRcdHN0cm9rZT17Y29sb3J9XG5cdFx0c3Ryb2tlLXdpZHRoPScyJ1xuXHRcdHN0cm9rZS1saW5lY2FwPSdyb3VuZCdcblx0XHRzdHJva2UtbGluZWpvaW49J3JvdW5kJz5cblx0XHQ8cmVjdCB4PSczJyB5PScxMScgd2lkdGg9JzE4JyBoZWlnaHQ9JzExJyByeD0nMicgcnk9JzInPjwvcmVjdD5cblx0XHQ8cGF0aCBkPSdNNyAxMVY3YTUgNSAwIDAgMSA5LjktMSc+PC9wYXRoPlxuXHQ8L3N2Zz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgUmVhZCA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxuXHQ8c3ZnXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdHdpZHRoPXtzaXplfVxuXHRcdGhlaWdodD17c2l6ZX1cblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnPlxuXHRcdDxwYXRoIGQ9J00xMiA0LjcwNmMtMi45MzgtMS44My03LjQxNi0yLjU2Ni0xMi0yLjcwNnYxNy43MTRjMy45MzcuMTIgNy43OTUuNjgxIDEwLjY2NyAxLjk5NS44NDYuMzg4IDEuODE3LjM4OCAyLjY2NyAwIDIuODcyLTEuMzE0IDYuNzI5LTEuODc1IDEwLjY2Ni0xLjk5NXYtMTcuNzE0Yy00LjU4NC4xNC05LjA2Mi44NzYtMTIgMi43MDZ6bS0xMCAxMy4xMDR2LTEzLjcwNGM1LjE1Ny4zODkgNy41MjcgMS40NjMgOSAyLjMzNHYxMy4xNjhjLTEuNTI1LS41NDYtNC43MTYtMS41MDQtOS0xLjc5OHptMjAgMGMtNC4yODMuMjkzLTcuNDc1IDEuMjUyLTkgMS43OTl2LTEzLjE3MWMxLjQ1My0uODYxIDMuODMtMS45NDIgOS0yLjMzMnYxMy43MDR6bS0yLTEwLjIxNGMtMi4wODYuMzEyLTQuNDUxIDEuMDIzLTYgMS42NzJ2LTEuMDY0YzEuNjY4LS42MjIgMy44ODEtMS4zMTUgNi0xLjYyNnYxLjAxOHptMCAzLjA1NWMtMi4xMTkuMzExLTQuMzMyIDEuMDA0LTYgMS42MjZ2MS4wNjRjMS41NDktLjY0OSAzLjkxNC0xLjM2MSA2LTEuNjczdi0xLjAxN3ptMC0yLjAzMWMtMi4xMTkuMzExLTQuMzMyIDEuMDA0LTYgMS42MjZ2MS4wNjRjMS41NDktLjY0OSAzLjkxNC0xLjM2MSA2LTEuNjczdi0xLjAxN3ptMCA2LjA5M2MtMi4xMTkuMzExLTQuMzMyIDEuMDA0LTYgMS42MjZ2MS4wNjRjMS41NDktLjY0OSAzLjkxNC0xLjM2MSA2LTEuNjczdi0xLjAxN3ptMC0yLjAzMWMtMi4xMTkuMzExLTQuMzMyIDEuMDA0LTYgMS42MjZ2MS4wNjRjMS41NDktLjY0OSAzLjkxNC0xLjM2MSA2LTEuNjczdi0xLjAxN3ptLTE2LTYuMTA0YzIuMTE5LjMxMSA0LjMzMiAxLjAwNCA2IDEuNjI2djEuMDY0Yy0xLjU0OS0uNjQ5LTMuOTE0LTEuMzYxLTYtMS42NzJ2LTEuMDE4em0wIDUuMDljMi4wODYuMzEyIDQuNDUxIDEuMDIzIDYgMS42NzN2LTEuMDY0Yy0xLjY2OC0uNjIyLTMuODgxLTEuMzE1LTYtMS42MjZ2MS4wMTd6bTAtMi4wMzFjMi4wODYuMzEyIDQuNDUxIDEuMDIzIDYgMS42NzN2LTEuMDY0Yy0xLjY2OC0uNjIyLTMuODgxLTEuMzE2LTYtMS42MjZ2MS4wMTd6bTAgNi4wOTNjMi4wODYuMzEyIDQuNDUxIDEuMDIzIDYgMS42NzN2LTEuMDY0Yy0xLjY2OC0uNjIyLTMuODgxLTEuMzE1LTYtMS42MjZ2MS4wMTd6bTAtMi4wMzFjMi4wODYuMzEyIDQuNDUxIDEuMDIzIDYgMS42NzN2LTEuMDY0Yy0xLjY2OC0uNjIyLTMuODgxLTEuMzE1LTYtMS42MjZ2MS4wMTd6JyAvPlxuXHQ8L3N2Zz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgVXBkYXRlID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXG5cdDxzdmdcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0d2lkdGg9e3NpemV9XG5cdFx0aGVpZ2h0PXtzaXplfVxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcblx0XHRmaWxsPSdub25lJ1xuXHRcdHN0cm9rZT17Y29sb3J9XG5cdFx0c3Ryb2tlV2lkdGg9JzInXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xuXHRcdHN0cm9rZUxpbmVqb2luPSdhcmNzJz5cblx0XHQ8cGF0aCBkPSdNMjAgMTQuNjZWMjBhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDUuMzQnPjwvcGF0aD5cblx0XHQ8cG9seWdvbiBwb2ludHM9JzE4IDIgMjIgNiAxMiAxNiA4IDE2IDggMTIgMTggMic+PC9wb2x5Z29uPlxuXHQ8L3N2Zz5cbik7XG4iLCJleHBvcnQgKiBmcm9tICcuL0FkZCc7XG5leHBvcnQgKiBmcm9tICcuL0RlbGV0ZSc7XG5leHBvcnQgKiBmcm9tICcuL1VwZGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL0NoZXZyb25zJztcbmV4cG9ydCAqIGZyb20gJy4vUmVhZCc7XG5leHBvcnQgKiBmcm9tICcuL0xvY2snO1xuZXhwb3J0ICogZnJvbSAnLi9Dcm9zcyc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCB7IFNlbyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQgUXVlc3Rpb25zIGZyb20gJy4uL3NlY3Rpb25zL2Fib3V0L1F1ZXN0aW9ucyc7XG5pbXBvcnQgQWJvdXRVcyBmcm9tICcuLi9zZWN0aW9ucy9hYm91dC9BYm91dFVzJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2xheW91dCc7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgPlxuICAgICAgPFNlbyB0aXRsZT1cIkFib3V0XCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFnZSBzY3JvbGxlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ci13YXZlIHRvcC1zbGlkZVwiPlxuICAgICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkhlbGxvIHRoZXJlLDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nLWFib3V0XCI+XG4gICAgICAgICAgICBXZSBjcmVhdGVkIDxzcGFuIGNsYXNzTmFtZT1cImxvZ28gdGV4dC1kYXJrXCI+Q29kZXJzIEdhbGE8L3NwYW4+IHRvXG4gICAgICAgICAgICBwcm92aWRlIFlvdSBRdWFsaXR5IHJlc291cmNlcyB0byBsZWFybiBGcm9tXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwic2Nyb2xsIGljb25cIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2dpZmltYWdlLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS9zY3JvbGwtZ2lmLTEwLmdpZlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbC1pY29uXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UXVlc3Rpb25zIC8+XG4gICAgICAgIDxBYm91dFVzIC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIgZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInO1xuXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9sYXlvdXQnO1xuXG5pbXBvcnQgeyBnZXRTcGVjaWFsaXR5IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXJ2aWNlUG9zdCwgc2Nyb2xsVG8gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IENoZXZyb25zVXAgfSBmcm9tICcuLi9hc3NldHMvaWNvbnMnO1xuXG4vLyBjb25zdCBTaGFyZUFydGljbGUgPSAoeyBOaWQsIHVybCB9LCBwcm9wcykgPT4ge1xuXG5cbi8vIFx0ZnVuY3Rpb24gYWN0aW9uVG9nZ2xlKCkge1xuLy8gXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiAoXG4vLyBcdFx0PD5cbi8vIFx0XHRcdDxkaXYgY2xhc3M9J2FjdGlvbicgb25DbGljaz17YWN0aW9uVG9nZ2xlfT5cbi8vIFx0XHRcdFx0PHNwYW4+XG4vLyBcdFx0XHRcdFx0PGltZ1xuLy8gXHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyNXB4JyB9fVxuLy8gXHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE5MTk5L3NoYXJlLnN2Zydcbi8vIFx0XHRcdFx0XHRcdGFsdD0nJ1xuLy8gXHRcdFx0XHRcdC8+XG4vLyBcdFx0XHRcdDwvc3Bhbj5cbi8vIFx0XHRcdFx0PHVsPlxuLy8gXHRcdFx0XHRcdDxsaT5cbi8vIFx0XHRcdFx0XHRcdDxhXG4vLyBcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nd2hhdHNhcHAtaWNvbidcbi8vIFx0XHRcdFx0XHRcdFx0cmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xuLy8gXHRcdFx0XHRcdFx0XHRocmVmPXtgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/dGV4dD1IZXkgbG9vayBpIGp1c3QgZm91bmQgb3V0IHRoaXMgQW1hemluZyBhcnRpY2xlIG9uIFwiJHtOaWR9XCIsQ2hlY2sgaXQgb3V0IDogJHt1cmx9YH1cbi8vIFx0XHRcdFx0XHRcdFx0dGFyZ2V0PSdfYmxhbmsnPlxuLy8gXHRcdFx0XHRcdFx0XHRTaGFyZSBvblxuLy8gXHRcdFx0XHRcdFx0XHQ8aW1nXG4vLyBcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyNXB4JywgbWFyZ2luTGVmdDogJzIwcHgnIH19XG4vLyBcdFx0XHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzMwMzE1MC93aGF0c2FwcC1zeW1ib2wtbG9nby5zdmcnXG4vLyBcdFx0XHRcdFx0XHRcdFx0YWx0PXsnc2hhcmUgJyArIE5pZCArICcgb24gV2hhdHNhcHAnfVxuLy8gXHRcdFx0XHRcdFx0XHQvPlxuLy8gXHRcdFx0XHRcdFx0PC9hPlxuLy8gXHRcdFx0XHRcdDwvbGk+XG5cbi8vIFx0XHRcdFx0XHQ8bGk+XG4vLyBcdFx0XHRcdFx0XHQ8YVxuLy8gXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21haWwtaWNvbidcbi8vIFx0XHRcdFx0XHRcdFx0aHJlZj17YG1haWx0bzo/U3ViamVjdD0keydBcnRpY2xlIG9uICcgKyBOaWRcbi8vIFx0XHRcdFx0XHRcdFx0XHR9JkJvZHk9SGV5IGxvb2sgaSBqdXN0IGZvdW5kIG91dCB0aGlzIEFtYXppbmcgYXJ0aWNsZSBvbiBcIiR7TmlkfVwiLENoZWNrIGl0IG91dCA6ICR7dXJsfWB9XG4vLyBcdFx0XHRcdFx0XHRcdHRhcmdldD0nX3RvcCdcbi8vIFx0XHRcdFx0XHRcdFx0cmVsPSdub2ZvbGxvdyc+XG4vLyBcdFx0XHRcdFx0XHRcdFNoYXJlIG9uXG4vLyBcdFx0XHRcdFx0XHRcdDxpbWdcbi8vIFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzI1cHgnLCBtYXJnaW5MZWZ0OiAnMjBweCcgfX1cbi8vIFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3NoYXJlLWltYWdlJ1xuLy8gXHRcdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMDMxNjEvZ21haWwtaWNvbi1sb2dvLnN2Zydcbi8vIFx0XHRcdFx0XHRcdFx0XHRhbHQ9eydzaGFyZSAnICsgTmlkICsgJyBvbiBHbWFpbCd9XG4vLyBcdFx0XHRcdFx0XHRcdC8+XG4vLyBcdFx0XHRcdFx0XHQ8L2E+XG4vLyBcdFx0XHRcdFx0PC9saT5cbi8vIFx0XHRcdFx0PC91bD5cbi8vIFx0XHRcdDwvZGl2PlxuLy8gXHRcdDwvPlxuLy8gXHQpO1xuLy8gfTtcblxuY29uc3QgQXJ0aWNsZSA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IG5hbWUgfSA9IHByb3BzLm1hdGNoLnBhcmFtcztcblx0Y29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUoe30pO1xuXG5cblxuXG5cdGNvbnN0IGdldEFydGljbGUgPSBhc3luYyAobmFtZSkgPT4ge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxuXHRcdFx0YGFwaS9hcnRpY2xlL2dldGAsXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gcmVzLmRhdGEuYXJ0aWNsZTtcblx0fTtcblxuXHRjb25zdCBnZXRBcnRpY2xlRWZmZWN0ID0gdXNlQ2FsbGJhY2soXG5cdFx0YXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgYXJ0aWNsZSA9IGF3YWl0IGdldEFydGljbGUobmFtZS5yZXBsYWNlKC8tL2csICcgJykpO1xuXHRcdFx0c2V0QXJ0aWNsZShhcnRpY2xlKTtcblx0XHR9LFxuXHRcdFtuYW1lXSxcblx0KVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Z2V0QXJ0aWNsZUVmZmVjdCgpXG5cdH0sIFtnZXRBcnRpY2xlRWZmZWN0XSk7XG5cblx0Y29uc29sZS5sb2coYXJ0aWNsZSlcblx0Y29uc3QgZ29Ub1RvcCA9ICgpID0+IHtcblx0XHRzY3JvbGxUbyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2JykpO1xuXHR9O1xuXG5cblx0Y29uc3QgaHRtbCA9IGFydGljbGUgJiYgYXJ0aWNsZS5jb250ZW50O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RlZC1hcnRpY2xlJz5cblxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT0nZnVsbC12aWV3LWFydGljbGUgcC0yJz5cblx0XHRcdFx0XHQ8Q29sIHNtPXsyfT57LyogQWRkcyBIZXJlICovfTwvQ29sPlxuXG5cdFx0XHRcdFx0PENvbCBpZD0ndG9wJyBzdHlsZT17eyBwYWRkaW5nOiAnMHB4JyB9fSBzbT17OH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncWwtc25vdyc+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmdWxsLWFydGljbGUgcWwtZWRpdG9yJz5cblx0XHRcdFx0XHRcdFx0XHR7UmVhY3RIdG1sUGFyc2VyKGh0bWwpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RvcC1pY29uJz5cblx0XHRcdFx0XHRcdFx0PENoZXZyb25zVXAgc2l6ZT0nNTAnIGNvbG9yPScjZGMxNDNjJyBvbkNsaWNrPXtnb1RvVG9wfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9Db2w+XG5cblx0XHRcdFx0XHQ8Q29sIHNtPXsyfT57LyogQWRkcyBIZXJlICovfTwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG5cdGF1dGg6IHN0YXRlLmF1dGhcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRTcGVjaWFsaXR5IH0pKEFydGljbGUpO1xuXG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy8gY29uc3QgQXJ0aWNsZSA9IChwcm9wcykgPT4ge1xuLy8gXHRjb25zdCBuYW1lID0gcHJvcHMubWF0Y2gucGFyYW1zLm5hbWVcbi8vIFx0Y29uc29sZS5sb2cobmFtZS5yZXBsYWNlKC8tL2csICcgJykpXG4vLyBcdHJldHVybiAoXG4vLyBcdFx0PGRpdj5cbi8vIFx0XHRcdDxkaXY+XG4vLyBcdFx0XHRcdGxvcmVtMTAwXG4vLyBcdFx0XHQ8L2Rpdj5cbi8vIFx0XHQ8L2Rpdj5cbi8vIFx0KTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlZGlyZWN0LCBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHJlZ2lzdGVyLCBsb2dpbiB9IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhcIjtcbmltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XG5cbmNvbnN0IEF1dGggPSAoeyBsb2dpbiwgcmVnaXN0ZXIsIHRva2VuLCB0eXBlIH0pID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIGlmICh0b2tlbikgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9sZWFyblwiIC8+O1xuICBjb25zdCBkaW5UZXh0ID0gXCI8Q29kZXJzIEdhbGEvPlwiO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0eXBlID09PSBcInNpZ251cFwiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb24gaDFcIikuY2xhc3NMaXN0LmFkZChcImNoYW5nZWRcIik7XG5cbiAgICAgIHJlZ2lzdGVyKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb24gaDFcIikuY2xhc3NMaXN0LmFkZChcImNoYW5nZWRcIik7XG4gICAgICBsb2dpbihkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCI+XG4gICAgICA8U2VvIHRpdGxlPVwiTG9nSW5cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImRpblRhZ1wiPntkaW5UZXh0fTwvaDY+XG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJzaWdudXBcIiA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDE+U2lnbiBVcDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+SGV5LCBXZWxjb21lIHRvIENvZGVyc0dhbGEgISE8L3A+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgICAgICAgICAgIDxwPkhleSB0aGVyZSwgV2VsY29tZSBCYWNrICEhPC9wPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGUgPT09IFwic2lnbnVwXCIgPyBcImZsZXhcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3R5cGUgPT09IFwic2lnbnVwXCIgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VcIj5BZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2U6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2RlUmVmZXJyZWRcIj5SZWZlciBDb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29kZVJlZmVycmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUEIxOEZDNjlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVSZWZmZXJlZDogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAge3R5cGUgPT09IFwic2lnbnVwXCIgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW1lbWJlck1lXCI+SGF2ZSBhbiBhY2NvdW50PzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW1lbWJlck1lXCI+Rm9yZ290IFBhc3N3b3JkPzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3NpZ251cFwiPlNpZ25VcDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbmluXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdG9rZW46IHN0YXRlLmF1dGgudG9rZW4sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgbG9naW4sIHJlZ2lzdGVyIH0pKEF1dGgpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldEFsbEFydGljbGVzIH0gZnJvbSBcIi4uL2FjdGlvbnMvYXJ0aWNsZVwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgRmVhdHVyZWQgZnJvbSAnLi4vc2VjdGlvbnMvYmxvZy9GZWF0dXJlZCdcbmltcG9ydCBMYXRlc3QgZnJvbSAnLi4vc2VjdGlvbnMvYmxvZy9MYXRlc3QnXG5pbXBvcnQgQWxsIGZyb20gJy4uL3NlY3Rpb25zL2Jsb2cvQWxsJ1xuXG5cblxuY29uc3QgQmxvZyA9ICh7IGdldEFsbEFydGljbGVzLCBzZXJ2ZXJBcnRpY2xlcywgc3RvcmVBcnRpY2xlcywgaXNBZG1pbiB9KSA9PiB7XG5cbiAgICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlKHNlcnZlckFydGljbGVzKVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2VydmVyQXJ0aWNsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBnZXRBbGxBcnRpY2xlcygpXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhzdG9yZUFydGljbGVzKVxuICAgICAgICB9XG4gICAgfSwgW2FydGljbGVzLCBnZXRBbGxBcnRpY2xlc10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2X190b3BcIj5cbiAgICAgICAgICAgICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2X190b3BfX2xpbmtcIj48L2E+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIHtpc0FkbWluICYmIDxOYXZMaW5rIHRvPVwiL2FydGljbGUvYWRkXCIgcmVsPVwibm9mb2xsb3dcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgYmxvY2s+XG4gICAgICAgICAgICAgICAgICAgIEFkZCBBcnRpY2xlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L05hdkxpbms+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcIkRvc2lzXCIgfX0gY2xhc3NOYW1lPVwidGl0bGVfX2gxXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgQ29kZXJzR2FsYSA8c3Bhbj5CbG9nPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVfX3N1YlwiPlNvcnJ5IDooPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZF9fY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhdGVzdCBhcnRpY2xlPXthcnRpY2xlcyAmJiBhcnRpY2xlc1swXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJncmlkX19jb2xfX3RpdGxlXCI+RmVhdHVyZWQgQXJ0aWNsZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkIGFydGljbGVzPXthcnRpY2xlc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmV3c2xldHRlckZvcm0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZF9fY29sX190aXRsZVwiPkFsc28gUmVhZC4uLjwvaDM+XG4gICAgICAgICAgICAgICAgPEFsbCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBzdG9yZUFydGljbGVzOiBzdGF0ZS5hcnRpY2xlLmFydGljbGVzLFxuICAgIGlzQWRtaW46IHN0YXRlLmF1dGguaXNBZG1pbixcblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldEFsbEFydGljbGVzIH0pKEJsb2cpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFNlbyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vc2VjdGlvbnMvaG9tZS9IZXJvJztcbmltcG9ydCBIZXJvQ2FyZHMgZnJvbSAnLi4vc2VjdGlvbnMvaG9tZS9IZXJvQ2FyZHMnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuLi9sYXlvdXQvcHJlbG9hZGVyJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblx0dmFyIGhvbWVDb250ZW50ID0gJ2Fkc2YnO1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cblx0XHRcdGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuXHRcdFx0ZXhpdD17eyBvcGFjaXR5OiAwIH19PlxuXHRcdFx0PFNlbyB0aXRsZT0nSG9tZScgbWV0YT17W3sgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6ICdpbmRleCBmb2xsb3cnIH1dfSAvPlxuXHRcdFx0PGRpdiBpZD0nbXlEaXYnPlxuXHRcdFx0XHR7aG9tZUNvbnRlbnQgPyAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2hvbWUtY29udGFpbmVyJz5cblx0XHRcdFx0XHRcdDxIZXJvIC8+XG5cdFx0XHRcdFx0XHQ8SGVyb0NhcmRzIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PFByZWxvYWRlciAvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFNlbyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0Lyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9zZWN0aW9ucy9sZWFybi9DYXJkJztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcblxuY29uc3QgTGVhcm4gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuXHRcdFx0YW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG5cdFx0XHRpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0+XG5cdFx0XHQ8U2VvIHRpdGxlPSdMZWFybicgbWV0YT17W3sgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6ICdpbmRleCBmb2xsb3cnIH1dfSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBsZWFybi1jb250YWluZXInPlxuXHRcdFx0XHQ8QWRtaW5CdXR0b25zIHR5cGU9J0FkZCcgdXJsPScvYWRkY2FyZCcgZGF0YT17eyBuYW1lOiAnQ291cnNlcycgfX0gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuXHRcdFx0XHRcdDxDYXJkIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVhcm47XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBY2NvcmRpb24sIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCB7IFNlbyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ2hldnJvbnNVcCwgQ3Jvc3MgfSBmcm9tICcuLi9hc3NldHMvaWNvbnMnO1xuaW1wb3J0IHsgZ2V0U3BlY2lhbGl0eSwgY2xlYXJBcnRpY2xlLCBzZWxlY3RWaWRlbyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5pbXBvcnQgVmlkZW9QcmV2aWV3IGZyb20gJy4uL3NlY3Rpb25zL3ByZXZpZXcvVmlkZW9QcmV2aWV3JztcbmltcG9ydCBUb3BpY3NPdmVydmlldyBmcm9tICcuLi9zZWN0aW9ucy9wcmV2aWV3L1RvcGljc092ZXJ2aWV3JztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcblxuY29uc3QgUHJldmlldyA9ICh7XG5cdG1hdGNoLFxuXHRzZWxlY3RWaWRlbyxcblx0Y2xlYXJBcnRpY2xlLFxuXHRnZXRTcGVjaWFsaXR5LFxuXHRzcGVjaWFsaXR5LFxufSkgPT4ge1xuXHRjb25zdCBbY2xvc2UsIHNldENsb3NlXSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCB7IHNwZWNpYWxpdHlOYW1lIH0gPSBtYXRjaC5wYXJhbXNcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNsZWFyQXJ0aWNsZSgpO1xuXHRcdGdldFNwZWNpYWxpdHkoc3BlY2lhbGl0eU5hbWUpO1xuXHR9LCBbY2xlYXJBcnRpY2xlLCBnZXRTcGVjaWFsaXR5LCBzcGVjaWFsaXR5TmFtZV0pO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNlbGVjdFZpZGVvKHNwZWNpYWxpdHkpO1xuXHR9LCBbc3BlY2lhbGl0eSwgc2VsZWN0VmlkZW9dKTtcblxuXHRyZXR1cm4gc3BlY2lhbGl0eSA/IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9waWNzLW92ci1jb250Jz5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPSdvdmVybGF5J1xuXHRcdFx0XHRzdHlsZT17eyBkaXNwbGF5OiBjbG9zZSA/ICdub25lJyA6ICdibG9jaycgfX1cblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0Q2xvc2UoIWNsb3NlKX0+PC9kaXY+XG5cdFx0XHQ8U2VvXG5cdFx0XHRcdHRpdGxlPSdTZWxlY3QgQXJ0aWNsZSdcblx0XHRcdFx0bWV0YT17W3sgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6ICdpbmRleCBmb2xsb3cnIH1dfVxuXHRcdFx0Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzcGVjaWFsaXR5LWNvbnRhaW5lcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzcGVjaWFsaXR5LWhlYWRpbmcnPlxuXHRcdFx0XHRcdDxoMj57c3BlY2lhbGl0eS5uYW1lfTwvaDI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Um93PlxuXHRcdFx0XHRcdDxDb2xcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndG9waWMtb3ZyLWNvbnRhaW5lcidcblx0XHRcdFx0XHRcdGxnPXs0fVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiBjbG9zZSA/ICcyNXZoJyA6ICc1MHZoJyB9fT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0b3BpY3Mtb3ZlcnZpZXcnPlxuXHRcdFx0XHRcdFx0XHQ8aDMgc3R5bGU9e3sgZm9udFNpemU6ICcxcmVtJyB9fSBjbGFzc05hbWU9J292ZXJ2aWV3Jz5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Ub3BpY3MgT3ZlcnZpZXcgPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0FkZCdcblx0XHRcdFx0XHRcdFx0XHRcdHVybD17YC8ke3NwZWNpYWxpdHkubmFtZX0vdG9waWMvYWRkL2B9XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXt7IG5hbWU6ICdUb3BpY3MnIH19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nsb3NlLXRvZ2dsZSc+XG5cdFx0XHRcdFx0XHRcdFx0e2Nsb3NlID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gb25DbGljaz17KCkgPT4gc2V0Q2xvc2UoIWNsb3NlKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDaGV2cm9uc1VwIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldENsb3NlKCFjbG9zZSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q3Jvc3MgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PEFjY29yZGlvbj5cblx0XHRcdFx0XHRcdFx0PFRvcGljc092ZXJ2aWV3IHNwZWNpYWxpdHlOYW1lPXtzcGVjaWFsaXR5Lm5hbWV9IC8+XG5cdFx0XHRcdFx0XHQ8L0FjY29yZGlvbj5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIGw9ezh9PlxuXHRcdFx0XHRcdFx0PFZpZGVvUHJldmlldyBzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eS5uYW1lfSAvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvZGl2PlxuXHQpIDogbnVsbDtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcblx0c3BlY2lhbGl0eTogc3RhdGUuc3BlY2lhbGl0eS5zcGVjaWFsaXR5LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG5cdGdldFNwZWNpYWxpdHksXG5cdGNsZWFyQXJ0aWNsZSxcblx0c2VsZWN0VmlkZW8sXG59KShQcmV2aWV3KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9zZWN0aW9ucy9lZGl0b3InO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vbGF5b3V0JztcblxuaW1wb3J0IHsgYWRkQXJ0aWNsZSwgZWRpdEFydGljbGUsIGdldEFydGljbGUgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBDaGV2cm9uc1VwIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zJztcblxuY29uc3QgVXBzZXJ0QXJ0aWNsZSA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGFkZEFydGljbGUsIHNwZWNpYWxpdGllcywgZWRpdEFydGljbGUsIGdldEFydGljbGUsIHByZXZBcnRpY2xlIH0gPVxuXHRcdHByb3BzO1xuXHRjb25zdCBbY29udGVudCwgc2V0Y29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtuYW1lLCBzZXRuYW1lXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2tleXdvcmRzLCBzZXRBcnRpY2xlS2V5d29yZHNdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbZmVhdHVyZWQsIHNldGZlYXR1cmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3RodW1ibmFpbFVybCwgc2V0dGh1bWJuYWlsVXJsXSA9IHVzZVN0YXRlKCcnKTtcblx0Ly8gY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHQvLyBjb25zdCB0b3BpY0lkID0gXCJFUlJPUl9OQV9ESVlPXCI7XG5cdGZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQpIHtcblx0XHRpc0NsaWVudCAmJlxuXHRcdFx0d2luZG93LnNjcm9sbCh7XG5cdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0dG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcblx0XHRcdH0pO1xuXHR9XG5cdGNvbnN0IGdvVG9Ub3AgPSAoKSA9PiB7XG5cdFx0c2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpKTtcblx0fTtcblxuXHRjb25zb2xlLmxvZyhwcm9wcy5tYXRjaC5wYXJhbXMuYXJ0aWNsZUlkKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChwcm9wcy5lZGl0KSB7XG5cdFx0XHRnZXRBcnRpY2xlKHByb3BzLm1hdGNoLnBhcmFtcy5hcnRpY2xlSWQpO1xuXHRcdH1cblx0fSwgW3Byb3BzLCBnZXRBcnRpY2xlXSk7XG5cblx0Y29uc3QgaGFuZGxlRWRpdG9yID0gKGh0bWwpID0+IHtcblx0XHRzZXRjb250ZW50KGh0bWwpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSBhc3luYyAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zb2xlLmxvZyhuYW1lKTtcblx0XHRjb25zb2xlLmxvZyhrZXl3b3Jkcyk7XG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdG5hbWU6IG5hbWUgPT09ICcnID8gcHJldkFydGljbGUubmFtZSA6IG5hbWUsXG5cdFx0XHRrZXl3b3Jkczoga2V5d29yZHMgPT09ICcnID8gcHJldkFydGljbGUua2V5d29yZHMgOiBrZXl3b3Jkcyxcblx0XHRcdGNvbnRlbnQ6IGNvbnRlbnQgPT09ICcnID8gcHJldkFydGljbGUuY29udGVudCA6IGNvbnRlbnQsXG5cdFx0fTtcblx0XHRlZGl0QXJ0aWNsZShkYXRhLCBwcmV2QXJ0aWNsZS5faWQsIHNwZWNpYWxpdGllcy5zcGVjaWFsaXR5Lk5hbWUpO1xuXHRcdHRvYXN0KCdBcnRpY2xlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQWRkID0gYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly8gY29uc29sZS5sb2coeyBjb250ZW50LCBuYW1lLCBrZXl3b3JkcyB9KTtcblx0XHRhZGRBcnRpY2xlKHsgY29udGVudCwgbmFtZSwga2V5d29yZHMsIGZlYXR1cmVkLCB0aHVtYm5haWxVcmwgfSk7XG5cdFx0dG9hc3QoJ0FydGljbGUgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Um93IGNsYXNzTmFtZT0nZnVsbC12aWV3LWFydGljbGUgcC0yJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaGFyZS1pY29ucyc+PC9kaXY+XG5cblx0XHRcdDxDb2wgc209ezF9PjwvQ29sPlxuXG5cdFx0XHQ8Q29sIGlkPSd0b3AnIHNtPXsxMH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nJyBpZD0nJz5cblx0XHRcdFx0XHRcdFx0e3Byb3BzLmVkaXRcblx0XHRcdFx0XHRcdFx0XHQ/IGBVcGRhdGUgQXJ0aWNsZSAtICR7cHJldkFydGljbGUgJiYgcHJldkFydGljbGUubmFtZX1gXG5cdFx0XHRcdFx0XHRcdFx0OiAnQWRkIGEgQXJ0aWNsZSd9XG5cdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuXHRcdFx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nbmFtZSdcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdBcnRpY2xlIE5hbWUnXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5uYW1lIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRuYW1lKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0ndGh1bWJuYWlsVXJsJ1xuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0FydGljbGUgVGh1bWJuYWlsJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gcHJldkFydGljbGUgJiYgcHJldkFydGljbGUudGh1bWJuYWlsVXJsIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXR0aHVtYm5haWxVcmwoZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2tleXdvcmRzJ1xuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0FydGljbGUgRGVzY3JpcHRpb24nXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5rZXl3b3JkcyA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXJ0aWNsZUtleXdvcmRzKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nZmVhdHVyZWQnPklzRmVhdHVyZWQgJm5ic3A7IDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gcHJldkFydGljbGUgJiYgcHJldkFydGljbGUuZmVhdHVyZWQgOiBmYWxzZVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0ZmVhdHVyZWQoIWZlYXR1cmVkKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjaGVja2JveCdcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdmZWF0dXJlZCdcblx0XHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Byb3BzLmVkaXQgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLmNvbnRlbnQgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEVkaXRvclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRWRpdG9yPXtoYW5kbGVFZGl0b3J9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e3ByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLmNvbnRlbnR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGxcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxFZGl0b3IgaGFuZGxlRWRpdG9yPXtoYW5kbGVFZGl0b3J9IGRlZmF1bHRWYWx1ZT0nJyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhZGQtYXJ0aWNsZS1idXR0b24nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0J1dHRvbj17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcj17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gaGFuZGxlRWRpdChlKSA6IGhhbmRsZUFkZChlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwcm9wcy5lZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ31cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0b3AtaWNvbic+XG5cdFx0XHRcdFx0PENoZXZyb25zVXAgc2l6ZT0nNTAnIGNvbG9yPScjZGMxNDNjJyBvbkNsaWNrPXtnb1RvVG9wfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvQ29sPlxuXG5cdFx0XHQ8Q29sIHNtPXsxfT48L0NvbD5cblx0XHQ8L1Jvdz5cblx0KTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcblx0c3BlY2lhbGl0aWVzOiBzdGF0ZS5zcGVjaWFsaXR5LFxuXHRwcmV2QXJ0aWNsZTogc3RhdGUuYXJ0aWNsZS5zZWxlY3RlZEFydGljbGUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcblx0YWRkQXJ0aWNsZSxcblx0ZWRpdEFydGljbGUsXG5cdGdldEFydGljbGUsXG59KShVcHNlcnRBcnRpY2xlKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBzZXJ2aWNlR2V0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBhZGRTcGVjaWFsaXR5LCBlZGl0U3BlY2lhbGl0eSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9zZWN0aW9ucy9lZGl0b3InO1xuXG5jb25zdCBVcHNlcnRDYXJkID0gKHsgYWRkU3BlY2lhbGl0eSwgZWRpdFNwZWNpYWxpdHksIGVkaXQsIG1hdGNoIH0pID0+IHtcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcblx0XHRcdGlmIChlZGl0KSB7XG5cdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoXG5cdFx0XHRcdFx0YGFwaS9zcGVjaWFsaXR5L2dldC8ke21hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZX1gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdGNvbnN0IHsgbmFtZSwgaW1hZ2VVcmwsIGNvbnRlbnQsIF9pZCB9ID0gcmVzLmRhdGEuc3BlY2lhbGl0eTtcblx0XHRcdFx0c2V0RGF0YSh7IG5hbWUsIGltYWdlVXJsLCBjb250ZW50LCBfaWQgfSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRmZXRjaERhdGEoKTtcblx0fSwgW2VkaXQsIG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZV0pO1xuXHRjb25zb2xlLmxvZyhlZGl0LCBkYXRhKTtcblxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuXHRcdHNldFN0YXRlKHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0W2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlRWRpdG9yID0gKGh0bWwpID0+IHtcblx0XHRzZXRTdGF0ZSh7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGNvbnRlbnQ6IGh0bWwsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKGVkaXQpIGVkaXRTcGVjaWFsaXR5KHN0YXRlLCBkYXRhLl9pZCk7XG5cdFx0ZWxzZSBhZGRTcGVjaWFsaXR5KHN0YXRlKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbXQtNCc+XG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J210LTUnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0aWQ9J25hbWUnXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1NwZWNpYWxpdHkgTmFtZSdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtlZGl0ID8gZGF0YSAmJiBkYXRhLm5hbWUgOiAnJ31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0aWQ9J2ltYWdlVXJsJ1xuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdJbWFnZSBVUkwnXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZWRpdCA/IGRhdGEgJiYgZGF0YS5pbWFnZVVybCA6ICcnfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0eyFlZGl0ICYmIChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdFx0XHRcdFx0XHRpZD0nYWx0J1xuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0ltYWdlIGFsdCB0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncWwtc25vdyc+XG5cdFx0XHRcdFx0XHR7ZWRpdCA/IChcblx0XHRcdFx0XHRcdFx0ZGF0YSAmJiBkYXRhLmNvbnRlbnQgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PEVkaXRvclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZGF0YSAmJiBkYXRhLmNvbnRlbnR9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3FsLWVkaXRvcidcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXRvcj17aGFuZGxlRWRpdG9yfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsXG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8RWRpdG9yXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9Jydcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3FsLWVkaXRvcidcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0b3I9e2hhbmRsZUVkaXRvcn1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWRkLWFydGljbGUtYnV0dG9uJz5cblx0XHRcdFx0XHRcdDxCdXR0b24gaGFuZGxlcj17aGFuZGxlU3VibWl0fSBpc0J1dHRvbj17dHJ1ZX0gdHlwZT0nc3VibWl0Jz5cblx0XHRcdFx0XHRcdFx0e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGFkZFNwZWNpYWxpdHksIGVkaXRTcGVjaWFsaXR5IH0pKFVwc2VydENhcmQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIExvY2tCdXR0b24gfSBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGFkZFRvcGljLCBlZGl0VG9waWMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5jb25zdCBVcHNlcnRUb3BpYyA9ICh7XG5cdHNwZWNpYWxpdHksXG5cdG1hdGNoLFxuXHRhZGRUb3BpYyxcblx0ZWRpdFRvcGljLFxuXHRsb2NhdGlvbixcblx0ZWRpdCxcbn0pID0+IHtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyBsb2NrZWQ6IGZhbHNlIH0pO1xuXHRjb25zb2xlLmxvZyhsb2NhdGlvbik7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0RGF0YSh7XG5cdFx0XHRsb2NrZWQ6IGxvY2F0aW9uLnByb3BzICYmIGxvY2F0aW9uLnByb3BzLmlzTG9ja2VkLFxuXHRcdFx0bmFtZTogbG9jYXRpb24ucHJvcHMgJiYgbG9jYXRpb24ucHJvcHMubmFtZSxcblx0XHR9KTtcblx0fSwgW2xvY2F0aW9uLnByb3BzXSk7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKCFlZGl0KSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0eyAuLi5kYXRhLCBzcGVjaWFsaXR5SWQ6IHNwZWNpYWxpdHkuX2lkIH0sXG5cdFx0XHRcdG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZVxuXHRcdFx0KTtcblx0XHRcdGFkZFRvcGljKFxuXHRcdFx0XHR7IC4uLmRhdGEsIHNwZWNpYWxpdHlJZDogc3BlY2lhbGl0eS5faWQgfSxcblx0XHRcdFx0bWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lXG5cdFx0XHQpO1xuXHRcdFx0dG9hc3QoJ1RvcGljIEFkZGVkIHN1Y2Nlc3NmdWxseScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlZGl0VG9waWMoZGF0YSwgbWF0Y2gucGFyYW1zLnRvcGljSWQsIG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZSk7XG5cdFx0XHR0b2FzdCgnVXBkYXRlZCcpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtY29udGFpbmVyJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtdG9waWMtZm9ybSc+XG5cdFx0XHRcdDxoMz57ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9IFRvcGljPC9oMz5cblx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1pbnB1dCc+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtsb2NhdGlvbi5wcm9wcyAmJiBsb2NhdGlvbi5wcm9wcy5uYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXREYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWJ1dHRvbic+XG5cdFx0XHRcdFx0XHQ8TG9ja0J1dHRvblxuXHRcdFx0XHRcdFx0XHRpc0xvY2tlZD17ZGF0YS5sb2NrZWR9XG5cdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXREYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2NrZWQ6ICFwcmV2LmxvY2tlZCB9KSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxCdXR0b24gaXNCdXR0b249e3RydWV9IGhhbmRsZXI9e2hhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0XHR7ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHRzcGVjaWFsaXR5OiBzdGF0ZS5zcGVjaWFsaXR5LnNwZWNpYWxpdHksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgYWRkVG9waWMsIGVkaXRUb3BpYyB9KShVcHNlcnRUb3BpYyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCB7IGFkZFZpZGVvLCBlZGl0VmlkZW8sIGdldFZpZGVvIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNvbnN0IFVwc2VydFZpZGVvID0gKHtcblx0ZWRpdCxcblx0bWF0Y2gsXG5cdGFkZFZpZGVvLFxuXHRlZGl0VmlkZW8sXG5cdGdldFZpZGVvLFxuXHRzcGVjaWFsaXRpZXMsXG5cdHByZXZWaWRlbyxcbn0pID0+IHtcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUocHJldlZpZGVvID8gcHJldlZpZGVvLm5hbWUgOiAnJyk7XG5cdGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXG5cdFx0cHJldlZpZGVvID8gcHJldlZpZGVvLmRlc2NyaXB0aW9uIDogJydcblx0KTtcblx0Y29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKHByZXZWaWRlbyA/IHByZXZWaWRlby51cmwgOiAnJyk7XG5cblx0Y29uc3QgaGFuZGxlQWRkID0gYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0YXdhaXQgYWRkVmlkZW8oXG5cdFx0XHR7IG5hbWUsIGRlc2NyaXB0aW9uLCB1cmwgfSxcblx0XHRcdG1hdGNoLnBhcmFtcy50b3BpY0lkLFxuXHRcdFx0c3BlY2lhbGl0aWVzLnNwZWNpYWxpdHkubmFtZVxuXHRcdCk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlRWRpdCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGF3YWl0IGVkaXRWaWRlbyhcblx0XHRcdHsgbmFtZSwgZGVzY3JpcHRpb24sIHVybCB9LFxuXHRcdFx0cHJldlZpZGVvLl9pZCxcblx0XHRcdHNwZWNpYWxpdGllcy5zcGVjaWFsaXR5Lm5hbWVcblx0XHQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J3Vwc2VydC1jb250YWluZXInPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Vwc2VydC12aWRlby1mb3JtJz5cblx0XHRcdFx0PGgzPntlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkICd9VmlkZW88L2gzPlxuXHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdFx0XHRcdFx0dmFsdWU9e25hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblx0XHRcdFx0XHRcdDxsYWJlbD5Vcmw8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt1cmx9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuXHRcdFx0XHRcdFx0PGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cblx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XG5cdFx0XHRcdFx0aGFuZGxlcj17KGUpID0+IHtcblx0XHRcdFx0XHRcdGVkaXQgPyBoYW5kbGVFZGl0KGUpIDogaGFuZGxlQWRkKGUpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdHtlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ31cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcblx0c3BlY2lhbGl0aWVzOiBzdGF0ZS5zcGVjaWFsaXR5LFxuXHRwcmV2VmlkZW86IHN0YXRlLnZpZGVvLnNlbGVjdGVkVmlkZW8sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcblx0YWRkVmlkZW8sXG5cdGVkaXRWaWRlbyxcblx0Z2V0VmlkZW8sXG59KShVcHNlcnRWaWRlbyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICBhdXRoOiB7IGlzQXV0aGVudGljYXRlZCB9LFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlXG4gICAgICB7Li4ucmVzdH1cbiAgICAgIHJlbmRlcj17KHByb3BzKSA9PlxuICAgICAgICAhaXNBdXRoZW50aWNhdGVkID8gPFJlZGlyZWN0IHRvPVwiL2xvZ2luXCIgLz4gOiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIH1cbiAgICAvPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBhdXRoOiBzdGF0ZS5hdXRoLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcml2YXRlUm91dGUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmV4cG9ydCBjb25zdCBTZW8gPSAoe1xuXHRkZXNjcmlwdGlvbixcblx0dGl0bGUgPSAnICcsXG5cdGxhbmcgPSAnZW4nLFxuXHRtZXRhID0gW10sXG5cdHJpY2hyZXN1bHQsXG59KSA9PiB7XG5cdC8vIGNvbnN0IHsgZmF2aWNvbiB9ID0gJyc7XG5cblx0Y29uc3QgbWV0YVRpdGxlID0gYENvZGVyc0dhbGEgfCAke3RpdGxlfWA7XG5cdGNvbnN0IG1ldGFEZXNjcmlwdGlvbiA9XG5cdFx0XCJDb2RlcnNHYWxhJ3Mgb25seSBwdXJwb3NlIGlzIHRvIHByb3ZpZGUgY29kaW5nIGtub3dsZWRnZSwgc3VjaCBhcyBXZWIgZGV2ZWxvcG1lbnQgdGhhdCBpbmNsdWRlcyBIVE1MIENTUyBKUyBOb2RlIFJlYWN0IE1vbmdvRGIsIE1hY2hpbmUgTGVhcm5pbmcsIERhdGEgU3RydWN0dXJlcyBhbmQgQWxnb3JpdGhtXCIgfHxcblx0XHRkZXNjcmlwdGlvbjtcblxuXHRyZXR1cm4gKFxuXHRcdDxIZWxtZXRcblx0XHRcdHRpdGxlPXttZXRhVGl0bGV9XG5cdFx0XHRodG1sQXR0cmlidXRlcz17eyBsYW5nIH19XG5cdFx0XHRtZXRhPXtbXG5cdFx0XHRcdHsgbmFtZTogYGRlc2NyaXB0aW9uYCwgY29udGVudDogbWV0YURlc2NyaXB0aW9uIH0sXG5cdFx0XHRcdHsgcHJvcGVydHk6IGBvZzp0aXRsZWAsIGNvbnRlbnQ6IG1ldGFUaXRsZSB9LFxuXHRcdFx0XHR7IHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLCBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24gfSxcblx0XHRcdFx0eyBwcm9wZXJ0eTogYG9nOnR5cGVgLCBjb250ZW50OiBgd2Vic2l0ZWAgfSxcblx0XHRcdFx0eyBuYW1lOiBgdHdpdHRlcjpjYXJkYCwgY29udGVudDogYHN1bW1hcnlgIH0sXG5cdFx0XHRcdHsgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLCBjb250ZW50OiBtZXRhVGl0bGUgfSxcblx0XHRcdFx0eyBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsIGNvbnRlbnQ6IG1ldGFEZXNjcmlwdGlvbiB9LFxuXHRcdFx0XS5jb25jYXQobWV0YSl9XG5cdFx0XHRsaW5rPXtbeyByZWw6ICdpY29uJywgdHlwZTogJ2ltYWdlL3BuZycsIGhyZWY6ICdmYXZpY29uJyB9XX1cblx0XHRcdHNjcmlwdD17W1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dHlwZTogJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxuXHRcdFx0XHRcdGlubmVySFRNTDogSlNPTi5zdHJpbmdpZnkocmljaHJlc3VsdCksXG5cdFx0XHRcdH0sXG5cdFx0XHRdfVxuXHRcdC8+XG5cdCk7XG59O1xuIiwiaW1wb3J0IHsgU0VSVklDRV9VUkwgfSBmcm9tICcuLyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgc2VydmljZVBvc3QgPSBhc3luYyAocGF0aCwgcGF5bG9hZCwgaGVhZGVycyA9IG51bGwpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYCR7U0VSVklDRV9VUkx9LyR7cGF0aH1gLCBwYXlsb2FkLCB7XG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlcnZpY2VHZXQgPSBhc3luYyAocGF0aCwgcGF5bG9hZCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGAke1NFUlZJQ0VfVVJMfS8ke3BhdGh9YCwgcGF5bG9hZClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgU0VSVklDRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcbiIsImV4cG9ydCAqIGZyb20gJy4vUHJpdmF0ZVJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vU2VvJztcbmV4cG9ydCAqIGZyb20gJy4vc2V0QXV0aFRva2VuJztcbmV4cG9ydCAqIGZyb20gJy4vYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IHNldEF1dGhUb2tlbiA9ICh0b2tlbikgPT4ge1xuICBjb25zb2xlLmxvZyh0b2tlbik7XG4gIGlmICh0b2tlbikge1xuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgSldUICR7dG9rZW59YDtcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXTtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBzY3JvbGxUbyA9IChlbGVtZW50KSA9PiB7XG5cdGlzQ2xpZW50ICYmXG5cdFx0d2luZG93LnNjcm9sbCh7XG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0dG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcblx0XHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0NsaWVudCA9XG5cdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCA/IHRydWUgOiBmYWxzZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtdGlwcHknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IERlbGV0ZSwgVXBkYXRlLCBBZGQgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xuXG5jb25zdCBUb29sdGlwV3JhcHBlciA9ICh7IHRpdGxlLCBwb3NpdGlvbiwgY2hpbGRyZW4gfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxUb29sdGlwIHRpdGxlPXt0aXRsZX0gcG9zaXRpb249e3Bvc2l0aW9ufSB0cmlnZ2VyPSdtb3VzZWVudGVyJz5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L1Rvb2x0aXA+XG5cdCk7XG59O1xuXG5jb25zdCBBZG1pbkJ1dHRvbnMgPSAoeyB0eXBlLCB1cmwsIGhhbmRsZXIsIGlzQWRtaW4sIGRhdGEgPSB7fSB9KSA9PlxuXHRpc0FkbWluID8gKFxuXHRcdDxUb29sdGlwV3JhcHBlciB0aXRsZT17YCR7dHlwZX0gXCIke2RhdGEubmFtZX1cImB9IHBvc2l0aW9uPXsndG9wJ30+XG5cdFx0XHQ8QWRtaW5CdXR0b25zV3JhcHBlclxuXHRcdFx0XHR0eXBlPXt0eXBlfVxuXHRcdFx0XHR1cmw9e3VybH1cblx0XHRcdFx0aGFuZGxlcj17aGFuZGxlcn1cblx0XHRcdFx0ZGF0YT17ZGF0YX1cblx0XHRcdC8+XG5cdFx0PC9Ub29sdGlwV3JhcHBlcj5cblx0KSA6XG5cdFx0PEFkbWluQnV0dG9uc1dyYXBwZXJcblx0XHRcdHR5cGU9e1wiTm9uZVwifVxuXHRcdFx0dXJsPXt1cmx9XG5cdFx0XHRoYW5kbGVyPXtoYW5kbGVyfVxuXHRcdFx0ZGF0YT17ZGF0YX1cblx0XHQvPlxuXHQ7XG5cbmNvbnN0IEFkbWluQnV0dG9uc1dyYXBwZXIgPSAoeyB0eXBlLCB1cmwsIGhhbmRsZXIsIGRhdGEgfSkgPT4ge1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdBZGQnOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PExpbmsgdG89e3VybH0+XG5cdFx0XHRcdFx0PEFkZCBzaXplPScyMCcgY29sb3I9JyMwMDAnIC8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdCk7XG5cblx0XHRjYXNlICdFZGl0Jzpcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0dG89e3tcblx0XHRcdFx0XHRcdHBhdGhuYW1lOiB1cmwsXG5cdFx0XHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUsXG5cdFx0XHRcdFx0XHRcdGlzTG9ja2VkOiBkYXRhLmxvY2tlZCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PFVwZGF0ZSBzaXplPScyMCcgY29sb3I9JyMwMDAnIC8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdCk7XG5cblx0XHRjYXNlICdEZWxldGUnOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6IFwibm9uZVwiLCBib3JkZXI6IFwibm9uZVwiLCBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZXIoZGF0YSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXQtdG9waWMtbW9kYWwtdG9nZ2xlJz5cblx0XHRcdFx0XHQ8RGVsZXRlIHNpemU9JzIwJyBjb2xvcj0nY3JpbXNvbicgLz5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQpO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiA8YnV0dG9uIGhyZWY9XCIjXCJcblx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIsIG91dGxpbmU6IFwibm9uZVwiLCB9fVxuXHRcdFx0XHRjbGFzc05hbWU9J2VkaXQtdG9waWMtbW9kYWwtdG9nZ2xlJz5cblx0XHRcdFx0PERlbGV0ZSBzaXplPScwJyBjb2xvcj0nJyAvPlxuXHRcdFx0PC9idXR0b24+O1xuXHR9XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG5cdGlzQWRtaW46IHN0YXRlLmF1dGguaXNBZG1pbixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoQWRtaW5CdXR0b25zKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBMb2NrLCBSZWFkLCBVbmxvY2sgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xuXG5jb25zdCBJbm5lckRpdiA9ICh7IGhhbmRsZXIsIGNoaWxkcmVuLCBkYXJrLCBiZyB9KSA9PlxuXHRjaGlsZHJlbiA/IChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2BidXR0b24gJHtkYXJrICYmICdkYXJrJ31gfVxuXHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgJHtiZyAmJiAnYmcnfWAgfX1cblx0XHRcdG9uQ2xpY2s9e2hhbmRsZXIgPyBoYW5kbGVyIDogKGUpID0+IGNvbnNvbGUubG9nKGUsIGhhbmRsZXIpfT5cblx0XHRcdDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cdFx0XHQ8c3ZnPlxuXHRcdFx0XHQ8cG9seWxpbmVcblx0XHRcdFx0XHRjbGFzc05hbWU9J28xJ1xuXHRcdFx0XHRcdHBvaW50cz0nMCAwLCAxNTAgMCwgMTUwIDU1LCAwIDU1LCAwIDAnPjwvcG9seWxpbmU+XG5cdFx0XHRcdDxwb2x5bGluZVxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nbzInXG5cdFx0XHRcdFx0cG9pbnRzPScwIDAsIDE1MCAwLCAxNTAgNTUsIDAgNTUsIDAgMCc+PC9wb2x5bGluZT5cblx0XHRcdDwvc3ZnPlxuXHRcdDwvZGl2PlxuXHQpIDogKFxuXHRcdDw+XG5cdFx0XHR7JyAgICd9XG5cdFx0XHQ8c3Bhbj5cblx0XHRcdFx0PFJlYWQgc2l6ZT17MTl9IC8+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC8+XG5cdCk7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgdXJsLCBkYXJrLCBiZywgaXNCdXR0b24sIGhhbmRsZXIgfSkgPT4ge1xuXHRyZXR1cm4gdHlwZW9mIGlzQnV0dG9uID09ICd1bmRlZmluZWQnID8gKFxuXHRcdDxMaW5rIHRvPXt1cmwgJiYgdXJsfT5cblx0XHRcdDxJbm5lckRpdiBkYXJrPXtkYXJrfSBiZz17Ymd9PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L0lubmVyRGl2PlxuXHRcdDwvTGluaz5cblx0KSA6IChcblx0XHQ8SW5uZXJEaXYgZGFyaz17ZGFya30gYmc9e2JnfSBoYW5kbGVyPXtoYW5kbGVyfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0lubmVyRGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IExvY2tCdXR0b24gPSAoeyBpc0xvY2tlZCwgaGFuZGxlciB9KSA9PiB7XG5cdHJldHVybiA8c3BhbiBvbkNsaWNrPXtoYW5kbGVyfT57aXNMb2NrZWQgPyA8TG9jayAvPiA6IDxVbmxvY2sgLz59PC9zcGFuPjtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL0FkbWluQnV0dG9ucyc7XG5leHBvcnQgKiBmcm9tICcuL1VzZXJCdXR0b25zJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9vdGVyU29jaWFsTWVkaWEgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWFcIj5cbiAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vZ21haWwuY29tXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzMwMzE2MS9nbWFpbC1pY29uLWxvZ28uc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgPC9hPlxuICAgICAgPGEgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTgzNjA4L3R3aXR0ZXIuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9iaWhhbmkucHJpeWFcIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzExMTE5OS9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8yMTc3NTMvZ2l0aHViLnN2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Rm9vdGVyTWVzc2FnZSgpXG4gIH0pXG5cbiAgY29uc3Qgc2V0Rm9vdGVyTWVzc2FnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TWVzc2FnZSgnRW50ZXIgWW91ciBFbWFpbCBoZXJlIHRvIHN1YnNjcmliZSBmb3IgTmV3c2xldHRlcicpIH1cbiAgICAsIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udFwiPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWNvbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPkNvZGVycyBHYWxhPC9zcGFuPlxuICAgICAgICAgICAgPEZvb3RlclNvY2lhbE1lZGlhIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyaWdodHMtdGV4dFwiPlxuICAgICAgICAgICAgICAmY29weTsgMjAyMCBDb2RlcnMgR2FsYSAsIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNvbFwiPlxuICAgICAgICAgICAgPGgxPk91ciBOZXdzbGV0dGVyPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCIgZm9ybSBuZXdzbGV0dGVyLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0blwiIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiwgQ29sLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNldERpc3BsYXlNb2RlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91aSc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG4vLyA9LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT1cbmltcG9ydCBTaWduZWRPdXRMaW5rcyBmcm9tICcuL1NpZ25lZE91dExpbmtzJztcbmltcG9ydCBTaWduZWRJbkxpbmtzIGZyb20gJy4vU2lnbmVkSW5MaW5rcyc7XG4vLyA9LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT1cblxuLy8gbG9nbyBpbXBvcnRzXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2NnVHJhbnNwYXJlbnQuUE5HJztcblxuY29uc3QgTmF2YmFyID0gKHsgYXV0aCwgdWksIHNldERpc3BsYXlNb2RlIH0pID0+IHtcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRjb25zdCBbbmF2YmFyRXhwYW5kZWQsIHNldG5hdmJhckV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3N3aXRjaGVkLCBzZXRzd2l0Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCh1aS5kaXNwbGF5TW9kZSk7XG5cdFx0Y29uc29sZS5sb2codWkuZGlzcGxheU1vZGUpO1xuXHRcdGlmICh1aS5kaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG5cdFx0XHRzZXRzd2l0Y2hlZCh0cnVlKTtcblx0XHR9XG5cdH0sIFtzZXRzd2l0Y2hlZCwgdWkuZGlzcGxheU1vZGVdKTtcblxuXHQvLyBHZXR0aW5nIHRoZSBjdXJyZW50IG1vZGUgZnJvbSBsb2NhbCBzdG9yYWdlXG5cdGlmIChpc0NsaWVudCkge1xuXHRcdGxldCBtb2RlID0gJ2xpZ2h0JztcblxuXHRcdG1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpO1xuXG5cdFx0aWYgKG1vZGUgPT09ICdkYXJrJykge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcblx0XHR9XG5cdH1cblxuXHQvL1xuXG5cdC8vIGNvbnN0IGxpbmtzID0gPFNpZ25lZE91dExpbmtzIC8+O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J25hdmlnYXRpb24td3JhcCBiZy1saWdodCBzdGFydC1oZWFkZXIgc3RhcnQtc3R5bGUnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG5cdFx0XHRcdDxBY2NvcmRpb25cblx0XHRcdFx0XHRjbGFzc05hbWU9e2lzQ2xpZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDc2NyA/IG51bGwgOiAnZHJvcGRvd24tYWNjb3JkaW9uJ30+XG5cdFx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHQnPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPScvJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogaXNDbGllbnQgJiYgd2luZG93LmlubmVySGVpZ2h0ID49IDc2NyA/ICcycmVtJyA6ICcxLjJyZW0nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1sb2dvJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e0xvZ299XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3N3aXRjaCdcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RGlzcGxheU1vZGUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0c3dpdGNoZWQoIXN3aXRjaGVkKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bzd2l0Y2ggZmxvYXQtcmlnaHQgJHtzd2l0Y2hlZCA/ICdzd2l0Y2hlZCcgOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dWkuZGlzcGxheU1vZGUgPT09ICdkYXJrJyA/ICcjMTExJyA6ICcjZjFmMWYxJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2NpcmNsZSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21vZGUtaWNvbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzIwcHgnIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVpLmRpc3BsYXlNb2RlID09PSAnZGFyaydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMTU4L21vb24uc3ZnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzgzNzI2L3N1bi5zdmcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BvaW50cy1ib3ggJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncG9pbnRzLXRleHQnPiBQb2ludHMgPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJDRyBQb2ludHNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPSdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvNzE1LzcxNTcwOS5zdmcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BvaW50cy1pbWcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj4ge2F1dGgudXNlciAmJiBhdXRoLnVzZXIucG9pbnRzfSA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaWduZWQtbGlua3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2F1dGguaXNBdXRoZW50aWNhdGVkICYmIGF1dGguaXNBdXRoZW50aWNhdGVkID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTaWduZWRJbkxpbmtzIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFNpZ25lZE91dExpbmtzIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0PEFjY29yZGlvbi5Ub2dnbGVcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2LWJ0bidcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0bmF2YmFyRXhwYW5kZWQoIW5hdmJhckV4cGFuZGVkKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRhcz17QnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nbGluaydcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50S2V5PSc1Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZXInXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNuYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXtuYXZiYXJFeHBhbmRlZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nVG9nZ2xlIG5hdmlnYXRpb24nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J25hdmJhci10b2dnbGVyLWljb24nPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Ub2dnbGU+XG5cdFx0XHRcdFx0XHRcdFx0PEFjY29yZGlvbi5Db2xsYXBzZVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPScgJ1xuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnXG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudEtleT0nNSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7YXV0aC51c2VyICYmIGF1dGgudXNlci51c2VySWQgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNpZ25lZEluTGlua3MgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2lnbmVkT3V0TGlua3MgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuXHRcdFx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHQ8L0FjY29yZGlvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuLy8gICBhdXRoOiBzdGF0ZS5hdXRoLFxuLy8gfSk7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGF1dGg6IHN0YXRlLmF1dGgsXG5cdFx0dWk6IHN0YXRlLnVpLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgc2V0RGlzcGxheU1vZGUgfSkoTmF2YmFyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBTaWduZWRJbkxpbmtzID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8dWwgY2xhc3NOYW1lPSduYXZiYXItbmF2IG1sLWF1dG8gcHktNCBweS1tZC0wJz5cblx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNCc+XG5cdFx0XHRcdFx0PE5hdkxpbmsgdG89Jy9ob21lJyBjbGFzc05hbWU9J25hdi1saW5rJz5cblx0XHRcdFx0XHRcdEhvbWVcblx0XHRcdFx0XHQ8L05hdkxpbms+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTQnPlxuXHRcdFx0XHRcdDxOYXZMaW5rIHRvPScvYWJvdXQnIGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxuXHRcdFx0XHRcdFx0QWJvdXRcblx0XHRcdFx0XHQ8L05hdkxpbms+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTQnPlxuXHRcdFx0XHRcdDxOYXZMaW5rXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1saW5rICdcblx0XHRcdFx0XHRcdHRvPScvbGVhcm4nXG5cdFx0XHRcdFx0XHRyb2xlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSdmYWxzZSc+XG5cdFx0XHRcdFx0XHRMZWFyblxuXHRcdFx0XHRcdDwvTmF2TGluaz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+PC9kaXY+XG5cdFx0XHRcdDwvbGk+XG5cblx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNCc+XG5cdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0aHJlZj0nLydcblx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxuXHRcdFx0XHRcdFx0TG9nT3V0XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25lZEluTGlua3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBTaWduZWRPdXRMaW5rcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0byBweS00IHB5LW1kLTBcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTRcIj5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9ob21lXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00XCI+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00XCI+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiXG4gICAgICAgICAgICB0bz1cIi9sZWFyblwiXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGVhcm5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+PC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00XCI+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiXG4gICAgICAgICAgICB0bz1cIi9sb2dpblwiXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+PC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmVkT3V0TGlua3M7XG4iLCJleHBvcnQgKiBmcm9tICcuL0J1dHRvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9Gb290ZXInO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFByZWxvYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1ib3hcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyMVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyMlwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyM1wiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyIiwiY29uc3QgaW5pdGlhbFN0YXRlID0geyBhcnRpY2xlczogW10gfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJ0aWNsZVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblxuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdBRERfQVJUSUNMRSc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dG9waWNzOiBwYXlsb2FkLFxuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ0dFVF9BUlRJQ0xFJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZWxlY3RlZEFydGljbGU6IHBheWxvYWQuYXJ0aWNsZSxcblx0XHRcdH07XG5cdFx0Y2FzZSAnR0VUX0FMTF9BUlRJQ0xFUyc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0YXJ0aWNsZXM6IHBheWxvYWQuYXJ0aWNsZXMsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0NMRUFSX0FSVElDTEUnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNlbGVjdGVkQXJ0aWNsZToge30sXG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnQUREX0FSVElDTEVfRVJST1InOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0TE9HSU5fU1VDQ0VTUyxcblx0TE9HSU5fRkFJTCxcblx0UkVHSVNURVJfU1VDQ0VTUyxcblx0UkVHSVNURVJfRkFJTCxcblx0VVNFUl9MT0FERUQsXG5cdEFVVEhfRVJST1IsXG5cdExPR09VVCxcblx0U0VORF9SRVNFVF9FTUFJTCxcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHRva2VuOiBpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcblx0aXNBdXRoZW50aWNhdGVkOiBudWxsLFxuXHRsb2FkaW5nOiBmYWxzZSxcblx0dXNlcjogbnVsbCxcblx0aXNBZG1pbjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcblx0Y29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XG5cblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSBVU0VSX0xPQURFRDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1c2VyOiBwYXlsb2FkLFxuXHRcdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG5cdFx0XHRcdGlzQWRtaW46IHBheWxvYWQucm9sZSA9PT0gMCA/IGZhbHNlIDogdHJ1ZSxcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHR9O1xuXHRcdGNhc2UgUkVHSVNURVJfU1VDQ0VTUzpcblx0XHRjYXNlIExPR0lOX1NVQ0NFU1M6XG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBwYXlsb2FkLnRva2VuKTtcblx0XHRcdGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBwYXlsb2FkLnVzZXJJZCk7XG5cdFx0XHRjb25zb2xlLmxvZyhwYXlsb2FkKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdC4uLnBheWxvYWQsXG5cdFx0XHRcdGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHR9O1xuXHRcdGNhc2UgUkVHSVNURVJfRkFJTDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdH07XG5cdFx0Y2FzZSBMT0dJTl9GQUlMOlxuXHRcdGNhc2UgQVVUSF9FUlJPUjpcblx0XHRcdGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuXHRcdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJZCcpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRva2VuOiBudWxsLFxuXHRcdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0dXNlcklkOiBudWxsLFxuXHRcdFx0fTtcblx0XHRjYXNlIExPR09VVDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0b2tlbjogbnVsbCxcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHR9O1xuXHRcdGNhc2UgU0VORF9SRVNFVF9FTUFJTDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHQuLi5wYXlsb2FkLFxuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ1NFVF9BVVRIX0xPQURFUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJztcbmltcG9ydCBzcGVjaWFsaXR5IGZyb20gJy4vc3BlY2lhbGl0eSc7XG5pbXBvcnQgdG9waWMgZnJvbSAnLi90b3BpYyc7XG5pbXBvcnQgYXJ0aWNsZSBmcm9tICcuL2FydGljbGUnO1xuaW1wb3J0IHVpIGZyb20gJy4vdWknO1xuaW1wb3J0IHZpZGVvIGZyb20gJy4vdmlkZW8nO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuXHRhdXRoLFxuXHRzcGVjaWFsaXR5LFxuXHR0b3BpYyxcblx0YXJ0aWNsZSxcblx0dWksXG5cdHZpZGVvLFxufSk7XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHNwZWNpYWxpdGllczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGVjaWFsaXR5UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuXG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgJ0dFVF9TUEVDSUFMSVRJRVMnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNwZWNpYWxpdGllczogcGF5bG9hZCxcblx0XHRcdH07XG5cdFx0Y2FzZSAnR0VUX1NQRUNJQUxJVFknOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNwZWNpYWxpdHk6IHBheWxvYWQsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0NMRUFSX1NQRUNJQUxJVFknOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNwZWNpYWxpdHk6IHt9LFxuXHRcdFx0fTtcblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUSUVTX0VSUk9SJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ0dFVF9TUEVDSUFMSVRZX0VSUk9SJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0dG9waWNzOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvcGljUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuXG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgJ0dFVF9UT1BJQ1MnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRvcGljczogcGF5bG9hZCxcblx0XHRcdH07XG5cblx0XHRjYXNlICdHRVRfVE9QSUNTX0VSUk9SJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbiIsImltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdG9wZW5Ub3BpY3M6IFtdLFxuXHRkaXNwbGF5TW9kZTpcblx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpXG5cdFx0XHQ/IGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RlJylcblx0XHRcdDogJ2xpZ2h0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVpUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdTRVRfT1BFTl9UT1BJQ1MnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG9wZW5Ub3BpY3M6IHBheWxvYWQsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9ESVNQTEFZX01PREUnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGRpc3BsYXlNb2RlOiBwYXlsb2FkLFxuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0c2VsZWN0ZWRWaWRlbzogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuXG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgJ0FERF9WSURFTyc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dG9waWNzOiBwYXlsb2FkLFxuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ0dFVF9WSURFTyc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VsZWN0ZWRWaWRlbzogcGF5bG9hZC52aWRlbyxcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VMRUNUX1ZJREVPJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZWxlY3RlZFZpZGVvOiBwYXlsb2FkLFxuXHRcdFx0fTtcblx0XHRjYXNlICdDTEVBUl9WSURFTyc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VsZWN0ZWRWaWRlbzoge30sXG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnQUREX1ZJREVPX0VSUk9SJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBQcm9maWxlQ2FyZCA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJwcm9maWxlLWNhcmRcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPGgxPntkYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgPGgyPkhlbGxvITwvaDI+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1iaW9cIj5cbiAgICAgICAgPHA+e2RhdGEuYmlvfTwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucyBsaXN0LXVuc3R5bGVkIGxpc3QtaW5saW5lXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2RhdGEucG9ydGZvbGlvVXJsfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1cHhcIiB9fVxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTg4OTkwL2Jyb3dzZXItd2Vic2l0ZS5zdmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17ZGF0YS5pbnN0YVVybH0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzExMTE5OS9pbnN0YWdyYW0uc3ZnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2RhdGEudHdpdHRlclVybH0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE4MzYwOC90d2l0dGVyLnN2Z1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtkYXRhLmdpdGh1YlVybH0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzIxNzc1My9naXRodWIuc3ZnXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICk7XG59O1xuXG5jb25zdCBBYm91dFVzID0gKCkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG15RnVuY3Rpb24oKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE1NTApIHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlLWNhcmRcIilcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtY2FyZC1hbmltXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11cy1jb250YWluZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdXMtaGVhZGluZ1wiPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEFib3V0IDxzcGFuPlVzPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzLXRleHRcIj5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdW9kIGRvbG9yXG4gICAgICAgICAgZG9sb3JlIG9kaXQsIG5lcXVlIGl0YXF1ZSBpdXJlIHF1YXMgbW9sbGl0aWEgbmloaWwgY3VtcXVlIHJlbSBoYXJ1bVxuICAgICAgICAgIGNvbnNlcXV1bnR1ciBjb25zZWN0ZXR1ci4gQXV0ZW0gZnVnaXQsIGRvbG9yaWJ1cyBzaW50IGVuaW0gZXJyb3Igc2VxdWlcbiAgICAgICAgICBxdW8gcmVtIG1pbmltYSBtYWduaSBleGNlcHR1cmkgZXhwZWRpdGEgbW9sbGl0aWEgcmVjdXNhbmRhZSBoYXJ1bVxuICAgICAgICAgIGFsaWFzIHJlcGVsbGVuZHVzLCBzaXQgdm9sdXB0YXRlIGZhY2lsaXMgc2ltaWxpcXVlIGF0IGluIGFzcGVyaW9yZXNcbiAgICAgICAgICBzdW50IGluYW0gc2FlcGUgcXVpLiBOaXNpIG1pbmltYSBpcHNhIGlsbG8gdGVtcG9yZSBxdW9kIGVuaW0gZXVtXG4gICAgICAgICAgcXVpZGVtP1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNhcmRzXCI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBsZz17Nn0+XG4gICAgICAgICAgICA8UHJvZmlsZUNhcmRcbiAgICAgICAgICAgICAgZGF0YT17e1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiUHJpeWFcIixcbiAgICAgICAgICAgICAgICBwb3J0Zm9saW9Vcmw6IFwiaHR0cHM6Ly9rbm93LXByaXlhLWJpaGFuaS52ZXJjZWwuYXBwXCIsXG4gICAgICAgICAgICAgICAgaW5zdGFVcmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9iaWhhbmkucHJpeWFcIixcbiAgICAgICAgICAgICAgICBnaXRodWJVcmw6IFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9Qcml5YUJpaGFuaVwiLFxuICAgICAgICAgICAgICAgIHR3aXR0ZXJVcmw6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9wX2JpaGFuaVwiLFxuICAgICAgICAgICAgICAgIGJpbzpcbiAgICAgICAgICAgICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdGVtcG9yYSBldmVuaWV0IHF1YWUgbmVxdWUgaGljIGRvbG9yaWJ1cyB2b2x1cHRhdGlidXMgaW5jaWR1bnQgcXVpYSBmYWNpbGlzIGJsYW5kaXRpaXMuXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgPENvbCBsZz17Nn0+XG4gICAgICAgICAgICA8UHJvZmlsZUNhcmRcbiAgICAgICAgICAgICAgZGF0YT17e1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiS2FydGlrXCIsXG4gICAgICAgICAgICAgICAgcG9ydGZvbGlvVXJsOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxuICAgICAgICAgICAgICAgIGluc3RhVXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYmloYW5pLnByaXlhXCIsXG4gICAgICAgICAgICAgICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20va2FydGlrMThnXCIsXG4gICAgICAgICAgICAgICAgdHdpdHRlclVybDogXCJodHRwczovL3R3aXR0ZXIuY29tL0drYWFydGlrXCIsXG4gICAgICAgICAgICAgICAgYmlvOlxuICAgICAgICAgICAgICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VudCB0ZW1wb3JhIGV2ZW5pZXQgcXVhZSBuZXF1ZSBoaWMgZG9sb3JpYnVzIHZvbHVwdGF0aWJ1cyBpbmNpZHVudCBxdWlhIGZhY2lsaXMgYmxhbmRpdGlpcy5cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBRdWVzdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbnMtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInMtcy0xXCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICBBYm91dCA8c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+Q29kZXJzIEdhbGE8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC1kaW5cIj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICBXaGF0IGlzIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkNvZGVycyBHYWxhPC9zcGFuPj9cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pIGRvbG9yIGV4cGxpY2FibyBvcHRpb1xuICAgICAgICAgIGZ1Z2lhdCBxdW8gbnVtcXVhbSEgTW9sbGl0aWEsIGZhY2lsaXMgYXBlcmlhbSBuaWhpbCB2b2x1cHRhdGVcbiAgICAgICAgICBjb25zZXF1dW50dXIgZG9sb3JlLCBoaWMgYWIgdG90YW0gYmxhbmRpdGlpcyBsb3JlbTMwIGFjY3VzYW50aXVtLFxuICAgICAgICAgIG1hZ25hbSBvZGl0IGV1bT9cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoeS1kaW5cIj5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICBXaHkgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Q29kZXJzIEdhbGE8L3NwYW4+P1xuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWkgZG9sb3IgZXhwbGljYWJvIG9wdGlvXG4gICAgICAgICAgZnVnaWF0IHF1byBudW1xdWFtISBNb2xsaXRpYSwgZmFjaWxpcyBhcGVyaWFtIG5paGlsIHZvbHVwdGF0ZVxuICAgICAgICAgIGNvbnNlcXV1bnR1ciBkb2xvcmUsIGhpYyBhYiB0b3RhbSBibGFuZGl0aWlzIGFjY3VzYW50aXVtLCBtYWduYW0gb2RpdFxuICAgICAgICAgIGV1bT9cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC1kaW5cIj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICBXaGF0IGlzIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkNvZGVycyBHYWxhPC9zcGFuPj9cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pIGRvbG9yIGV4cGxpY2FibyBvcHRpb1xuICAgICAgICAgIGZ1Z2lhdCBxdW8gbnVtcXVhbSEgTW9sbGl0aWEsIGZhY2lsaXMgYXBlcmlhbSBuaWhpbCB2b2x1cHRhdGVcbiAgICAgICAgICBjb25zZXF1dW50dXIgZG9sb3JlLCBoaWMgYWIgdG90YW0gYmxhbmRpdGlpcyBsb3JlbTMwIGFjY3VzYW50aXVtLFxuICAgICAgICAgIG1hZ25hbSBvZGl0IGV1bT9cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBBbGwgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkX19jb2wtM1wiPlxuICAgICAgICAgICAge2FydGljbGVzICYmXG4gICAgICAgICAgICAgICAgYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEFydGljbGVJZCA9IGFydGljbGUgJiYgYXJ0aWNsZS5faWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW0tbWRcIiBrZXk9e0FydGljbGVJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvYmxvZy9yZWFkLyR7YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiLVwiKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS50aHVtYm5haWxVcmwgPyBhcnRpY2xlLnRodW1ibmFpbFVybCA6IFwiaHR0cHM6Ly9jb2RlcnNnYWxhLmNvbS9zdGF0aWMvbWVkaWEvY2dUcmFuc3BhcmVudC42YTljMzQ5Ni5QTkdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2ltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2NhdGVnb3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZSAmJiBtb21lbnQoYXJ0aWNsZS5jcmVhdGVkQXQpLmZvcm1hdChcIkREIE1NIFlZWVlcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX3RpdGxlXCI+e2FydGljbGUgJiYgYXJ0aWNsZS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2F1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnkgQ29kZXJzR2FsYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgRmVhdHVyZWQgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHthcnRpY2xlcyAmJlxuXHRcdFx0XHRhcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcblx0XHRcdFx0XHRpZiAoYXJ0aWNsZSAmJiBhcnRpY2xlLmZlYXR1cmVkID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhhcnRpY2xlKTtcblx0XHRcdFx0XHRcdGNvbnN0IEFydGljbGVJZCA9IGFydGljbGUgJiYgYXJ0aWNsZS5faWQ7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZF9faXRlbS1zbScga2V5PXthcnRpY2xlICYmIGFydGljbGUuaWR9PlxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHR0bz17YC9ibG9nL3JlYWQvJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csICctJylcblx0XHRcdFx0XHRcdFx0XHRcdH1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZ3JpZF9faXRlbV9fY2F0ZWdvcnknPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHthcnRpY2xlICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb21lbnQoYXJ0aWNsZS5jcmVhdGVkQXQpLmZvcm1hdCgnREQgTU0gWVlZWScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2dyaWRfX2l0ZW1fX3RpdGxlJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdncmlkX19pdGVtX19hdXRob3InPkJ5IENvZGVyc0dhbGE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJ0aWNsZS50aHVtYm5haWxVcmxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBhcnRpY2xlLnRodW1ibmFpbFVybFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdodHRwczovL2NvZGVyc2dhbGEuY29tL3N0YXRpYy9tZWRpYS9jZ1RyYW5zcGFyZW50LjZhOWMzNDk2LlBORydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdncmlkX19pdGVtX19pbWcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PScnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgTGF0ZXN0ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coYXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiLVwiKSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW0tbGdcIj5gXG4gICAgICAgICAgICB7YXJ0aWNsZSAmJiA8TmF2TGluayB0bz17YC9ibG9nL3JlYWQvJHthcnRpY2xlICYmIGFydGljbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgXCItXCIpfWB9PlxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXthcnRpY2xlLnRodW1ibmFpbFVybCA/IGFydGljbGUudGh1bWJuYWlsVXJsIDogXCJodHRwczovL2NvZGVyc2dhbGEuY29tL3N0YXRpYy9tZWRpYS9jZ1RyYW5zcGFyZW50LjZhOWMzNDk2LlBOR1wifVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkX19pdGVtX19pbWdcIiBjbGFzc05hbWU9XCJncmlkX19pdGVtX19pbWdcIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2NhdGVnb3J5XCI+IHthcnRpY2xlICYmIG1vbWVudChhcnRpY2xlLmNyZWF0ZWRBdCkuZm9ybWF0KFwiREQgTU0gWVlZWVwiKX08L3A+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX3RpdGxlXCI+e2FydGljbGUubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2F1dGhvclwiPkJ5IENvZGVyc0dhbGE8L3A+XG4gICAgICAgICAgICA8L05hdkxpbms+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF0ZXN0O1xuIiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcyc7XG4vLyBpbXBvcnQgUmVhY3RRdWlsbCwgeyBRdWlsbCB9IGZyb20gJ3JlYWN0LXF1aWxsJztcbi8vIGxldCBCbG9ja0VtYmVkID0gUXVpbGwuaW1wb3J0KCdibG90cy9ibG9jay9lbWJlZCcpO1xuLy8gbGV0IElubGluZSA9IFF1aWxsLmltcG9ydCgnYmxvdHMvaW5saW5lJyk7XG4vLyBobGpzLmNvbmZpZ3VyZSh7XG4vLyAgIGxhbmd1YWdlczogWydqYXZhc2NyaXB0JywgJ3B5dGhvbicsICdodG1sJywgJ2NzcyddLFxuLy8gfSk7XG5cbi8vIGNvbnN0IEN1c3RvbUJ1dHRvbiA9ICgpID0+IChcbi8vICAgPGltZ1xuLy8gICAgIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcgfX1cbi8vICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93Lzc3NTg0L2ltYWdlLnN2Z1wiXG4vLyAgICAgYWx0PVwiXCJcbi8vICAgLz5cbi8vICk7XG5cbi8vIC8vIGNvbnN0IENvZGVMaW5lID0gKCkgPT4gKFxuLy8gLy8gICA8aW1nXG4vLyAvLyAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fVxuLy8gLy8gICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMjk0MTQ1L2NvZGUuc3ZnXCJcbi8vIC8vICAgICBhbHQ9XCJcIlxuLy8gLy8gICAvPlxuLy8gLy8gKTtcblxuLy8gY29uc3QgU2l6ZSA9IFF1aWxsLmltcG9ydCgnZm9ybWF0cy9zaXplJyk7XG4vLyBTaXplLndoaXRlbGlzdCA9IFtcbi8vICAgJzEnLFxuLy8gICAnMicsXG4vLyAgICc0Jyxcbi8vICAgJzYnLFxuLy8gICAnOCcsXG4vLyAgICcxMCcsXG4vLyAgICcxMicsXG4vLyAgICcxNCcsXG4vLyAgICcxNicsXG4vLyAgICcyMCcsXG4vLyAgICcyNCcsXG4vLyAgICcyNicsXG4vLyAgICczMCcsXG4vLyBdO1xuLy8gUXVpbGwucmVnaXN0ZXIoU2l6ZSwgdHJ1ZSk7XG5cbi8vIGNsYXNzIGlubGluZUNvZGVCbG90IGV4dGVuZHMgSW5saW5lIHsgfVxuLy8gaW5saW5lQ29kZUJsb3QuYmxvdE5hbWUgPSAnaW5saW5lQ29kZSc7XG4vLyBpbmxpbmVDb2RlQmxvdC50YWdOYW1lID0gJ2NvZGUnO1xuXG4vLyBjbGFzcyBJbWFnZUJsb3QgZXh0ZW5kcyBCbG9ja0VtYmVkIHtcbi8vICAgc3RhdGljIGNyZWF0ZSh2YWx1ZSkge1xuLy8gICAgIGxldCBub2RlID0gc3VwZXIuY3JlYXRlKCk7XG4vLyAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHZhbHVlLmFsdCk7XG4vLyAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZhbHVlLnVybCk7XG4vLyAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdmFsdWUuY2xhc3MpO1xuLy8gICAgIHJldHVybiBub2RlO1xuLy8gICB9XG5cbi8vICAgc3RhdGljIHZhbHVlKG5vZGUpIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgYWx0OiBub2RlLmdldEF0dHJpYnV0ZSgnYWx0JyksXG4vLyAgICAgICB1cmw6IG5vZGUuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbi8vICAgICAgIGNsYXNzOiBub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSxcbi8vICAgICB9O1xuLy8gICB9XG4vLyB9XG4vLyBJbWFnZUJsb3QuYmxvdE5hbWUgPSAnaW1hZ2UnO1xuLy8gSW1hZ2VCbG90LnRhZ05hbWUgPSAnaW1nJztcbi8vIFF1aWxsLnJlZ2lzdGVyKEltYWdlQmxvdCk7XG4vLyBRdWlsbC5yZWdpc3RlcihpbmxpbmVDb2RlQmxvdCk7XG5cbi8vIGNvbnN0IGluc2VydEltYWdlID0gKCkgPT4ge1xuLy8gICBsZXQgdXJsID0gcHJvbXB0KCdFbnRlciBsaW5rIFVSTCcpO1xuLy8gICBsZXQgYWx0ID0gcHJvbXB0KCdFbnRlciBsaW5rIGFsdCcpO1xuLy8gICBsZXQgY2xhcyA9IHByb21wdCgnRW50ZXIgY2xhc3MgTmFtZScpO1xuLy8gICBsZXQgcmFuZ2UgPSB0aGlzLnF1aWxsLmdldFNlbGVjdGlvbih0cnVlKTtcbi8vICAgY29uc29sZS5sb2coUXVpbGwuc291cmNlcyk7XG4vLyAgIHRoaXMucXVpbGwuaW5zZXJ0VGV4dChyYW5nZS5pbmRleCwgJ1xcbicsIFF1aWxsLnNvdXJjZXMuVVNFUik7XG4vLyAgIHRoaXMucXVpbGwuaW5zZXJ0RW1iZWQoXG4vLyAgICAgcmFuZ2UuaW5kZXggKyAxLFxuLy8gICAgICdpbWFnZScsXG4vLyAgICAge1xuLy8gICAgICAgYWx0OiBhbHQsXG4vLyAgICAgICB1cmw6IHVybCxcbi8vICAgICAgIGNsYXNzOiBjbGFzLFxuLy8gICAgIH0sXG4vLyAgICAgUXVpbGwuc291cmNlcy5VU0VSXG4vLyAgICk7XG4vLyAgIHRoaXMucXVpbGwuc2V0U2VsZWN0aW9uKHJhbmdlLmluZGV4ICsgMiwgUXVpbGwuc291cmNlcy5TSUxFTlQpO1xuLy8gfTtcblxuLy8gY29uc3QgaW5zZXJ0SW5saW5lQ29kZSA9IChlKSA9PiB7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgLy8gY29uc29sZS5sb2codGhpcy5xdWlsbCk7XG4vLyAgIC8vIHRoaXMucXVpbGwuZm9ybWF0KFwiaW5saW5lQ29kZVwiLCB0cnVlKTtcbi8vICAgY29uc29sZS5sb2coJ2lubGluZSBjb2RlIGlucycpO1xuLy8gfTtcblxuLy8gY29uc3QgQ3VzdG9tVG9vbGJhciA9ICgpID0+IChcbi8vICAgPGRpdiBpZD1cInRvb2xiYXJcIj5cbi8vICAgICA8c2VsZWN0XG4vLyAgICAgICBjbGFzc05hbWU9XCJxbC1oZWFkZXJcIlxuLy8gICAgICAgZGVmYXVsdFZhbHVlPXsnJ31cbi8vICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZS5wZXJzaXN0KCl9XG4vLyAgICAgPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj48L29wdGlvbj5cbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+PC9vcHRpb24+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj48L29wdGlvbj5cbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+PC9vcHRpb24+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiBzZWxlY3RlZD48L29wdGlvbj5cbi8vICAgICA8L3NlbGVjdD5cblxuLy8gICAgIDxzZWxlY3QgY2xhc3M9XCJxbC1mb250XCI+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VyaWZcIj48L29wdGlvbj5cbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwibW9ub3NwYWNlXCI+PC9vcHRpb24+XG4vLyAgICAgPC9zZWxlY3Q+XG5cbi8vICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLXNpemVcIj5cbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIjJcIj5cbi8vICAgICAgICAgMlxuLy8gICAgICAgPC9vcHRpb24+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj5cbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTZcIj4xNjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj5cbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNFwiPjI0PC9vcHRpb24+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjZcIj4yNjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwXCI+MzA8L29wdGlvbj5cbi8vICAgICA8L3NlbGVjdD5cblxuLy8gICAgIDxzZWxlY3QgY2xhc3M9XCJxbC1hbGlnblwiPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbnRlclwiPjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiBzZWxlY3RlZD48L29wdGlvbj5cbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWdodFwiPjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cImp1c3RpZnlcIj48L29wdGlvbj5cbi8vICAgICA8L3NlbGVjdD5cblxuLy8gICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtYmFja2dyb3VuZFwiPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlZFwiPjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cImdyZWVuXCI+PC9vcHRpb24+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzRGNjlGOFwiPjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9yYW5nZVwiPjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cInZpb2xldFwiPjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIiNkMGQxZDJcIj48L29wdGlvbj5cbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XG4vLyAgICAgPC9zZWxlY3Q+XG5cbi8vICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLWNvbG9yXCI+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiI0RBMEY0N1wiPjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIiM0RENFMURcIj48L29wdGlvbj5cbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjNEY2OUY4XCI+PC9vcHRpb24+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwib3JhbmdlXCI+PC9vcHRpb24+XG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzk5MzNmZlwiPjwvb3B0aW9uPlxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIiNkMGQxZDJcIj48L29wdGlvbj5cbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XG4vLyAgICAgPC9zZWxlY3Q+XG5cbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWJvbGRcIj48L2J1dHRvbj5cbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWl0YWxpY1wiPjwvYnV0dG9uPlxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtdW5kZXJsaW5lXCI+PC9idXR0b24+XG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1zdHJpa2VcIj48L2J1dHRvbj5cbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWJsb2NrcXVvdGVcIj48L2J1dHRvbj5cbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWRpcmVjdGlvblwiPjwvYnV0dG9uPlxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtbGlua1wiPjwvYnV0dG9uPlxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaW1hZ2VcIj48L2J1dHRvbj5cbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLXZpZGVvXCI+PC9idXR0b24+XG4vLyAgICAgPGJ1dHRvbiB2YWx1ZT1cIm9yZGVyZWRcIiBjbGFzc05hbWU9XCJxbC1saXN0XCI+PC9idXR0b24+XG4vLyAgICAgPGJ1dHRvbiB2YWx1ZT1cImJ1bGxldFwiIGNsYXNzTmFtZT1cInFsLWxpc3RcIj48L2J1dHRvbj5cbi8vICAgICA8YnV0dG9uIHZhbHVlPVwiLTFcIiBjbGFzc05hbWU9XCJxbC1pbmRlbnRcIj48L2J1dHRvbj5cbi8vICAgICA8YnV0dG9uIHZhbHVlPVwiKzFcIiBjbGFzc05hbWU9XCJxbC1pbmRlbnRcIj48L2J1dHRvbj5cbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWNvZGUtYmxvY2tcIj48L2J1dHRvbj5cblxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaW5zZXJ0SW1hZ2VcIj5cbi8vICAgICAgIDxDdXN0b21CdXR0b24gLz5cbi8vICAgICA8L2J1dHRvbj5cbi8vICAgPC9kaXY+XG4vLyApO1xuXG4vLyAvKlxuLy8gICogRWRpdG9yIGNvbXBvbmVudCB3aXRoIGN1c3RvbSB0b29sYmFyIGFuZCBjb250ZW50IGNvbnRhaW5lcnNcbi8vICAqL1xuXG4vLyBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICB0aGlzLnN0YXRlID0geyBlZGl0b3JIdG1sOiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSB9O1xuLy8gICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbi8vICAgfVxuXG4vLyAgIGhhbmRsZUNoYW5nZShodG1sKSB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRvckh0bWw6IGh0bWwgfSk7XG4vLyAgICAgdGhpcy5wcm9wcy5oYW5kbGVFZGl0b3IoaHRtbCk7XG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5lZGl0b3JIdG1sKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKTtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVkaXRvclwiPlxuLy8gICAgICAgICA8Q3VzdG9tVG9vbGJhciAvPlxuLy8gICAgICAgICA8UmVhY3RRdWlsbFxuLy8gICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbi8vICAgICAgICAgICBtb2R1bGVzPXtFZGl0b3IubW9kdWxlc31cbi8vICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lZGl0b3JIdG1sIHx8ICcnfVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBFZGl0b3IubW9kdWxlcyA9IHtcbi8vICAgc3ludGF4OiB7XG4vLyAgICAgaGlnaGxpZ2h0OiAodGV4dCkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKHRleHQpLnZhbHVlLFxuLy8gICB9LFxuLy8gICB0b29sYmFyOiB7XG4vLyAgICAgY29udGFpbmVyOiAnI3Rvb2xiYXInLFxuXG4vLyAgICAgaGFuZGxlcnM6IHtcbi8vICAgICAgIGluc2VydEltYWdlOiBpbnNlcnRJbWFnZSxcbi8vICAgICAgIGluc2VydElubGluZUNvZGU6IGluc2VydElubGluZUNvZGUsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vIH07XG5cbi8vIEVkaXRvci5mb3JtYXRzID0gW1xuLy8gICAnaGVhZGVyJyxcbi8vICAgJ2ZvbnQnLFxuLy8gICAnc2l6ZScsXG4vLyAgICdib2xkJyxcbi8vICAgJ2l0YWxpYycsXG4vLyAgICd1bmRlcmxpbmUnLFxuLy8gICAnc3RyaWtlJyxcbi8vICAgJ2Jsb2NrcXVvdGUnLFxuLy8gICAnbGlzdCcsXG4vLyAgICdidWxsZXQnLFxuLy8gICAnaW5kZW50Jyxcbi8vICAgJ2xpbmsnLFxuLy8gICAnaW1hZ2UnLFxuLy8gICAnY29sb3InLFxuLy8gICAnY29kZS1ibG9jaycsXG4vLyBdO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgSGVybyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9sdW5hMS5jby81N2Q5YjYucG5nXCJcbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1pbWFnZSAtdHdvIC1mbG9hdGluZ0RlbGF5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbHVuYTEuY28vMjA3MGVlLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taW1hZ2UgLXRocmVlIC1mbG9hdGluZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJodHRwczovL2x1bmExLmNvL2ZkYTg2MC5wbmdcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWltYWdlIC1mb3VyIC1mbG9hdGluZ0RlbGF5XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1oZWFkZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8tbGFiZWxcIj5UaGlzIGlzLi4uPC9wPlxuXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1oZWFkbGluZSBcIj5Db2RlcnMgR2FsYTwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIENvZGVycyBHYWxhIGlzIGEgZnJlZSB0byB1c2UgcGxhdGZvcm0sIHdoaWNoIHdpbGwgaGVscCBhbmQgZ3VpZGVcbiAgICAgICAgICAgIHlvdSwgbm90IG9ubHkgdG8gbGVhcm4gd2ViIGRldmVsb3BtZW50IGJ1dCBiZWNvbWUgYSBmcmVlLWxhbmNlciBsaWtlXG4gICAgICAgICAgICB1cy4gU28gY2xpY2sgb24gcGxheSBhbmQgZW1iYXJrIGEgbmV3IGpvdXJuZXkgd2l0aCB1cy5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9sZWFyblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5IC1jb3JhbCAtc21hbGwgLXB1bHNlXCI+PC9kaXY+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBIZXJvQ2FyZHMgPSAoKSA9PiB7XG5cdC8vIHJlZnMgZm9yIHRoZSB0aHJlZSBzZWN0aW9uXG5cdGNvbnN0IGhlcm9CbHVlID0gdXNlUmVmKCk7XG5cdGNvbnN0IGhlcm9PcmFuZ2UgPSB1c2VSZWYoKTtcblx0Y29uc3QgaGVyb0dyZWVuID0gdXNlUmVmKCk7XG5cblx0Y29uc3Qgc2Nyb2xsRnVuY3Rpb24gPSAoKSA9PiB7XG5cdFx0aXNDbGllbnQgJiZcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRcdHZhciBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdFx0aWYgKHNjcm9sbCA8IDE1MCkge1xuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XG5cdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHNjcm9sbCA+IDE1MCAmJiBzY3JvbGwgPCA0NTApIHtcblx0XHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ29uZScpO1xuXHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xuXHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3R3bycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzY3JvbGwgPiA0NTAgJiYgc2Nyb2xsIDwgNjUwKSB7XG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndHdvJyk7XG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhyZWUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gNjUwKSB7XG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndHdvJyk7XG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndGhyZWUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuY3Rpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiA2MDApIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3R3bycpO1xuXHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndGhyZWUnKTtcblx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdvbmUnKTtcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XG5cdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJyk7XG5cdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xuXHRcdFx0XHRcdFx0fSwgODUwKTtcblx0XHRcdFx0XHR9LCA3NTApO1xuXHRcdFx0XHR9LCA2NTApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRpc0NsaWVudCAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuY3Rpb24pO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0naGVybyc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naGVyby1ib3gtY29udGFpbmVyJz5cblx0XHRcdFx0PExpbmsgdG89Jy9hYm91dCcgY2xhc3NOYW1lPSdoZXJvLWJveCc+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHJlZj17aGVyb0JsdWV9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tYmx1ZSc+PC9zcGFuPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2hlcm8tYm94X190aXRsZSc+V2hhdCBpcyBDb2RlcnNHYWxhPzwvaDI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoZXJvLWJveF9fYm9keSc+XG5cdFx0XHRcdFx0XHRDb2RlcnNHYWxhIGlzIGEgZnJlZSB0byB1c2UgcGxhdGZvcm0gZm9yIGFsbCB0aG9zZSBwZW9wbGUgd2hvIGFyZVxuXHRcdFx0XHRcdFx0dW53aWxsaW5nIHRvIHBheSBoaWdoIHJhbnNvbSB0byB0aGVzZSBjcm9va2VkIGNvYWNoaW5nIGNlbnRlcnMgZm9yXG5cdFx0XHRcdFx0XHRsZWFybmluZyB3ZWIgRGV2ZWxvcG1lbnQuIFdlIHdvbid0IGJlIHNwb29uIGZlZWRpbmcgeW91IGJ1dCB3ZSB3aWxsXG5cdFx0XHRcdFx0XHRndWlkZSB5b3UuIEFueXdheSwgaWYgeW91IGFyZSBlYWdlciB0byBsZWFybiB5b3Ugd2lsbCBmaW5kIGEgd2F5LlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8TGluayB0bz0nL2Fib3V0LyNhYm91dHVzJyBjbGFzc05hbWU9J2hlcm8tYm94Jz5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0cmVmPXtoZXJvR3JlZW59XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tZ3JlZW4nPjwvc3Bhbj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdoZXJvLWJveF9fdGl0bGUnPldobyBhcmUgd2U/PC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hlcm8tYm94X19ib2R5Jz5cblx0XHRcdFx0XHRcdFdlIHN0YXJ0ZWQgd2ViIGRldmVsb3BtZW50IG9uIG91ciBvd24sIHdpdGggbm8gZGlyZWN0aW9uIGFuZCBub1xuXHRcdFx0XHRcdFx0Y29hY2hpbmcuIEFsbCB3ZSBoYWQgd2FzIGRldGVybWluYXRpb24gYW5kIGludGVybmV0LiBXZSBjb25zaWRlclxuXHRcdFx0XHRcdFx0b3Vyc2VsdmVzIGx1Y2t5IHRvIGJlIGFibGUgdG8gcHJvdmlkZSB0aGUgc3VwcG9ydCB0aGF0IGhhZCBiZWVuXG5cdFx0XHRcdFx0XHRwcm92aWRlZCB0byB1cy5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89Jy9sZWFybicgY2xhc3NOYW1lPSdoZXJvLWJveCc+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHJlZj17aGVyb09yYW5nZX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGVyby1ib3hfX2NpcmNsZSBoZXJvLWJveF9fY2lyY2xlLS1vcmFuZ2UnPjwvc3Bhbj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdoZXJvLWJveF9fdGl0bGUnPlN0YXJ0IExlYXJuaW5nIC4uPC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hlcm8tYm94X19ib2R5Jz5cblx0XHRcdFx0XHRcdFJpZ2h0IG5vdyB3ZSBoYXZlIHRoZSBhcnRpY2xlcyBvbiBmcm9udC1lbmQtZGV2ZWxvcG1lbnQuIFdlIGFyZVxuXHRcdFx0XHRcdFx0d29ya2luZyB0aXJlbGVzc2x5IHRvIGNvdmVyIGJhY2tlbmQuIFdlIHdpbGwgaGF2ZSB0aGUgYXJ0aWNsZXMgYWlyZWRcblx0XHRcdFx0XHRcdG9uIGJhY2tlbmQgYmVmb3JlIHNlcHRlbWJlci4gVGhlIGNvdXJzZSB3aWxsIGNvdmVyIEZyb250LWVuZCwgQVBJLFxuXHRcdFx0XHRcdFx0Tm9kZWpzLWV4cHJlc3MsIE1vbmdvRGIsIE15U1FMLCBIb3N0aW5nLCBSZWFjdCwgRmlyZWJhc2UuLi4gYW5kIGFcblx0XHRcdFx0XHRcdGxvdCBtb3JlIHByb2plY3RzLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb0NhcmRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2Nyb2xsVG8sIGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9sYXlvdXQnO1xuaW1wb3J0IHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcblxuY29uc3QgQXJ0aWNsZU5hbWVzID0gKHtcblx0c2VsZWN0VmlkZW8sXG5cdGFydGljbGUsXG5cdGRlbGV0ZUFydGljbGUsXG5cdHRvcGljLFxuXHRzcGVjaWFsaXR5TmFtZSxcbn0pID0+IHtcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKGRhdGEpID0+IHtcblx0XHRjb25zdCB7IEFydGljbGVOYW1lLCBfaWQgfSA9IGRhdGE7XG5cdFx0Y29uc3QgY29uZmlybSA9XG5cdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0d2luZG93LnByb21wdChgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke0FydGljbGVOYW1lfVwiID8gWSBvciBOIGApO1xuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcblx0XHRcdGRlbGV0ZUFydGljbGUoX2lkLCB0b3BpYy5faWQsIHNwZWNpYWxpdHlOYW1lKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IHJlYWQtaWNvbic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIHJlYWQgY29sLTEwJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2l0ZW0nPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGFydGljbGUpO1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyhhcnRpY2xlKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxUbyhwb3MpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkaXNwbGF5LWFydGljbGUnPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nYXJ0aWNsZS1uYW1lIG0tMCc+XG5cdFx0XHRcdFx0XHRcdHthcnRpY2xlLkFydGljbGVOYW1lfXsnICd9XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYXJ0aWNsZS1hY3Rpb24taWNvbnMnPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvYXJ0aWNsZS91cGRhdGUvJHthcnRpY2xlLl9pZH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17YXJ0aWNsZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9e2hhbmRsZURlbGV0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2FydGljbGV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb3B0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e2BSZWFkIFwiJHthcnRpY2xlLkFydGljbGVOYW1lfVwiYH1cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHRcdFx0XHR0cmlnZ2VyPSdtb3VzZWVudGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyhhcnRpY2xlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBwb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPD0gNTAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzY3JvbGxUbyhwb3MpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cGRhdGUtZGVsZXRlIGZsb2F0LXJpZ2h0Jz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGRlbGV0ZUFydGljbGUsIHNlbGVjdFZpZGVvIH0pKEFydGljbGVOYW1lcyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2xheW91dCc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi8uLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xuaW1wb3J0IHsgZ2V0U3BlY2lhbGl0aWVzLCBkZWxldGVTcGVjaWFsaXR5IH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5cbmNvbnN0IENhcmQgPSAoeyBnZXRTcGVjaWFsaXRpZXMsIHNwZWNpYWxpdGllcywgZGVsZXRlU3BlY2lhbGl0eSB9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHNwZWNpYWxpdGllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdGdldFNwZWNpYWxpdGllcygpO1xuXHRcdH1cblx0fSwgW3NwZWNpYWxpdGllcy5sZW5ndGgsIGdldFNwZWNpYWxpdGllc10pO1xuXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpdGVtKSA9PiB7XG5cdFx0Ly8gR290IHRvIGhlbHBlciwgY2hlY2tcblx0XHRjb25zdCBjb25maXJtID1cblx0XHRcdGlzQ2xpZW50ICYmXG5cdFx0XHR3aW5kb3cucHJvbXB0KFxuXHRcdFx0XHRgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke2l0ZW0uTmFtZX1cIiA/IFkgb3IgTiAoRGVsZXRpbmcgYSBzcGVjaWFsaXR5IHdpbGwgbGVhZCB0byBkZWxldGlvbiBvZiBhbGwgdG9waWNzIGFuZCBhcnRpY2xlcyBpbnNpZGUgaXQpIGBcblx0XHRcdCk7XG5cdFx0aWYgKGNvbmZpcm0gPT09ICdZJykge1xuXHRcdFx0ZGVsZXRlU3BlY2lhbGl0eShpdGVtLl9pZCk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2xlYXJuLWNvbnRhaW5lcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB0LTQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cblx0XHRcdFx0XHR7c3BlY2lhbGl0aWVzICYmXG5cdFx0XHRcdFx0XHRzcGVjaWFsaXRpZXMubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0uX2lkfSBjbGFzc05hbWU9J2NvbC1sZy02Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ltZ0J4Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltYWdlJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpdGVtLmltYWdlVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtpdGVtLmFsdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzQ2xpZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJzE1MHB4J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ2F1dG8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb250ZW50QngnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj4ge2l0ZW0ubmFtZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw9eycvdXBkYXRlc3BlY2lhbGl0eS8nICsgaXRlbS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17aXRlbX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2l0ZW19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHVybD17Jy9sZWFybi8nICsgaXRlbS5uYW1lfT5TdGFydCBOb3c8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHRzcGVjaWFsaXRpZXM6IHN0YXRlLnNwZWNpYWxpdHkuc3BlY2lhbGl0aWVzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG5cdGdldFNwZWNpYWxpdGllcyxcblx0ZGVsZXRlU3BlY2lhbGl0eSxcbn0pKENhcmQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vbGF5b3V0JztcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBkZWxldGVWaWRlbywgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcblxuY29uc3QgVmlkZW9OYW1lcyA9ICh7XG5cdHNlbGVjdFZpZGVvLFxuXHR2aWRlbyxcblx0ZGVsZXRlVmlkZW8sXG5cdHRvcGljLFxuXHRzcGVjaWFsaXR5TmFtZSxcbn0pID0+IHtcblx0Y29uc29sZS5sb2codmlkZW8pO1xuXHRjb25zdCBoYW5kbGVEZWxldGUgPSAoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IHsgVmlkZW9OYW1lLCBfaWQgfSA9IGRhdGE7XG5cdFx0Y29uc3QgY29uZmlybSA9XG5cdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0d2luZG93LnByb21wdChgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke1ZpZGVvTmFtZX1cIiA/IFkgb3IgTiBgKTtcblx0XHRpZiAoY29uZmlybSA9PT0gJ1knKSB7XG5cdFx0XHRkZWxldGVWaWRlbyhfaWQsIHRvcGljLl9pZCwgc3BlY2lhbGl0eU5hbWUpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgcmVhZC1pY29uJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWFkIGNvbC0xMCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyh2aWRlbyk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkaXNwbGF5LWFydGljbGUnPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nYXJ0aWNsZS1uYW1lIG0tMCc+XG5cdFx0XHRcdFx0XHRcdHt2aWRlby5uYW1lfXsnICd9XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYXJ0aWNsZS1hY3Rpb24taWNvbnMnPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvdmlkZW8vdXBkYXRlLyR7dmlkZW8uX2lkfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXt2aWRlb31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9e2hhbmRsZURlbGV0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e3ZpZGVvfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXBcblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9wdGlvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtgUmVhZCBcIiR7dmlkZW8ubmFtZX1cImB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlcj0nbW91c2VlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzQnV0dG9uPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0VmlkZW8odmlkZW8pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3VwZGF0ZS1kZWxldGUgZmxvYXQtcmlnaHQnPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgZGVsZXRlVmlkZW8sIHNlbGVjdFZpZGVvIH0pKFZpZGVvTmFtZXMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcbmltcG9ydCB7IHVubG9ja1RvcGljIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy90b3BpYyc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBBcnRpY2xlUHJldmlldyA9ICh7IFNlbGVjdGVkQXJ0aWNsZSwgc3BlY2lhbGl0eU5hbWUsIHVubG9ja1RvcGljIH0pID0+IHtcblx0Y29uc3QgUmVhZE1vcmVVcmwgPVxuXHRcdFNlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubmFtZVxuXHRcdFx0PyBgLyR7c3BlY2lhbGl0eU5hbWV9L3JlYWQvJHtTZWxlY3RlZEFydGljbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgJy0nKX1gXG5cdFx0XHQ6IGAvJHtzcGVjaWFsaXR5TmFtZX0vcmVhZC9iZWZvcmUtc3RhcnRpbmdgO1xuXG5cdGNvbnN0IGhhbmRsZVVubG9jayA9IGFzeW5jICh0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4ge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHVubG9ja1RvcGljKHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKTtcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHR9O1xuXHRjb25zb2xlLmxvZyhTZWxlY3RlZEFydGljbGUpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRhaW5lcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMgY2FyZC1oZWFkZXInPlxuXHRcdFx0XHRcdFx0e1NlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubmFtZVxuXHRcdFx0XHRcdFx0XHQ/IFNlbGVjdGVkQXJ0aWNsZS5uYW1lXG5cdFx0XHRcdFx0XHRcdDogJ1JlYWQgVGhpcyBCZWZvcmUgWW91IFN0YXJ0Li4uJ31cblx0XHRcdFx0XHRcdHsvKiA8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmbG9hdC1yaWdodCc+PC9oMz5cblx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdxbC1zbm93Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLW5vLWJvZHkgcWwtZWRpdG9yJz5cblx0XHRcdFx0XHRcdFx0e1NlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubG9ja2VkID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRUbyB2aWV3IHRoaXMgYXJ0aWNsZSBwbGVhc2UgdW5sb2NrIGl0IHVzaW5nIHBvaW50c3snICd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVVbmxvY2soXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLnRvcGljSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRVbmxvY2tcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0UmVhY3RIdG1sUGFyc2VyKFNlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUuY29udGVudClcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGwoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogJzBweCcsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dG89e1JlYWRNb3JlVXJsfT5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2xpbmsnPlxuXHRcdFx0XHRcdFx0XHR7U2VsZWN0ZWRBcnRpY2xlICYmIFNlbGVjdGVkQXJ0aWNsZS5sb2NrZWRcblx0XHRcdFx0XHRcdFx0XHQ/ICdVbmxvY2snXG5cdFx0XHRcdFx0XHRcdFx0OiAnUmVhZCBNb3JlLi4uLi4nfVxuXHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgdW5sb2NrVG9waWMgfSkoQXJ0aWNsZVByZXZpZXcpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBnZXRUb3BpY3MsIGRlbGV0ZVRvcGljIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgQXJ0aWNsZU5hbWVzIGZyb20gJy4uL2xlYXJuL0FydGljbGVOYW1lcyc7XG5pbXBvcnQgVmlkZW9OYW1lcyBmcm9tICcuLi9sZWFybi9WaWRlb05hbWVzJztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcbmltcG9ydCB7IExvY2sgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuY29uc3QgVG9waWNzT3ZlcnZpZXcgPSAoe1xuXHRnZXRUb3BpY3MsXG5cdHNwZWNpYWxpdHlOYW1lLFxuXHR0b3BpY3MsXG5cdGRlbGV0ZVRvcGljLFxuXHR1c2VyLFxufSkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdldFRvcGljcyhzcGVjaWFsaXR5TmFtZSk7XG5cdH0sIFtnZXRUb3BpY3MsIHNwZWNpYWxpdHlOYW1lXSk7XG5cblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKHRvcGljKSA9PiB7XG5cdFx0Y29uc3QgY29uZmlybSA9XG5cdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0d2luZG93LnByb21wdChcblx0XHRcdFx0YFlvdSBzdXJlIHdhbnQgdG8gZGVsZXRlIFwiJHt0b3BpYy5uYW1lfVwiID8gWSBvciBOIChEZWxldGluZyBhIHRvcGljIHdpbGwgbGVhZCB0byBkZWxldGlvbiBvZiBhbGwgYXJ0aWNsZXMgaW5zaWRlIGl0KSBgXG5cdFx0XHQpO1xuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcblx0XHRcdGRlbGV0ZVRvcGljKHRvcGljLl9pZCwgc3BlY2lhbGl0eU5hbWUpO1xuXHRcdFx0dG9hc3QoJ0RlbGV0ZWQgc3BlY2lhbGl0eSBzdWNlc3NmdWxseScpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD0nc3BlY2lhbGl0aWVzJyBjbGFzc05hbWU9J1RvcGljLW5hbWVzICc+XG5cdFx0XHR7dG9waWNzLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0dG9waWNzLm1hcCgodG9waWMpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e3RvcGljLl9pZH0+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwLTAgc3BlY2lhbGl0eS10b3BpYy1jb250YWluZXIgbS0xJ1xuXHRcdFx0XHRcdFx0XHRcdGtleT17dG9waWMuX2lkfT5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdmbG9hdC1sZWZ0IHRvcGljTmFtZSc+e3RvcGljLm5hbWV9PC9oND5cblxuXHRcdFx0XHRcdFx0XHRcdDxBY3Rpb25CdXR0b25zXG5cdFx0XHRcdFx0XHRcdFx0XHRhY2NvcmRpb25LZXk9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfVxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZD17c2V0U2VsZWN0ZWRJZH1cblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkSWQ9e3NlbGVjdGVkSWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eU5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XG5cdFx0XHRcdFx0XHRcdFx0XHR1c2VyPXt1c2VyfVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdFx0XHRcdHt0b3BpYy5sb2NrZWQgJiZcblx0XHRcdFx0XHRcdFx0XHQhdXNlci51bkxvY2tlZFRvcGljcy5pbmNsdWRlcyh0b3BpYy5faWQpID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uQ29sbGFwc2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRLZXk9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0b3BpYy52aWRlb3MubGVuZ3RoID4gMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0b3BpYy52aWRlb3MubWFwKCh2aWRlbykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VmlkZW9OYW1lc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZGVvPXt2aWRlb31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHlOYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiB0b3BpYy5hcnRpY2xlcyAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0b3BpYy5hcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFydGljbGVOYW1lc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFydGljbGU9e2FydGljbGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwZWNpYWxpdHlOYW1lPXtzcGVjaWFsaXR5TmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb2w+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Db2xsYXBzZT5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHR0b3BpY3M6IHN0YXRlLnRvcGljLnRvcGljcyxcblx0dXNlcjogc3RhdGUuYXV0aC51c2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFRvcGljcywgZGVsZXRlVG9waWMgfSkoXG5cdFRvcGljc092ZXJ2aWV3XG4pO1xuXG5jb25zdCBBY3Rpb25CdXR0b25zID0gKHtcblx0aGFuZGxlRGVsZXRlLFxuXHR0b3BpYyxcblx0c3BlY2lhbGl0eU5hbWUsXG5cdHNlbGVjdGVkSWQsXG5cdHNldFNlbGVjdGVkSWQsXG5cdHVzZXIsXG59KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2FjdGlvbi1idXR0b25zJz5cblx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0dHlwZT0nRWRpdCdcblx0XHRcdFx0ZGF0YT17dG9waWN9XG5cdFx0XHRcdHVybD17YC8ke3NwZWNpYWxpdHlOYW1lfS90b3BpYy9lZGl0LyR7dG9waWMuX2lkfWB9XG5cdFx0XHQvPlxuXHRcdFx0PEFkbWluQnV0dG9ucyB0eXBlPSdEZWxldGUnIGhhbmRsZXI9e2hhbmRsZURlbGV0ZX0gZGF0YT17dG9waWN9IC8+XG5cdFx0XHQ8QWRtaW5CdXR0b25zIHR5cGU9J0FkZCcgZGF0YT17dG9waWN9IHVybD17YC92aWRlby9hZGQvJHt0b3BpYy5faWR9YH0gLz5cblx0XHRcdHt0b3BpYy5sb2NrZWQgJiYgIXVzZXIudW5Mb2NrZWRUb3BpY3MuaW5jbHVkZXModG9waWMuX2lkKSA/IChcblx0XHRcdFx0PExvY2sgLz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxBY2NvcmRpb24uVG9nZ2xlXG5cdFx0XHRcdFx0YXM9e0J1dHRvbn1cblx0XHRcdFx0XHR2YXJpYW50PSdsaW5rJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxvYXQtcmlnaHQgYXJyb3ctZG93bidcblx0XHRcdFx0XHRldmVudEtleT17dG9waWMubmFtZS5zcGxpdCgvXFxzLykuam9pbignJyl9IC8vIHRvIHJlbW92ZSBzcGFjZXNcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoc2VsZWN0ZWRJZCA9PT0gdG9waWMuX2lkKSB7XG5cdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkSWQoJycpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZCh0b3BpYy5faWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdGlkPXt0b3BpYy5uYW1lLnNwbGl0KC9cXHMvKS5qb2luKCcnKX1cblx0XHRcdFx0XHRcdHZpZXdCb3g9JzAgMCAzMiAzMidcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24gaWNvbi1jaGV2cm9uLWJvdHRvbSBhcnRpY2xlLWR3biBhcnRpY2xlLXRvZ2dsZSBmYS1hbmdsZS1kb3duICR7XG5cdFx0XHRcdFx0XHRcdHRvcGljLl9pZCA9PT0gc2VsZWN0ZWRJZCA/ICdyb3RhdGUnIDogJydcblx0XHRcdFx0XHRcdH1gfT5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xNi4wMDMgMTguNjI2bDcuMDgxLTcuMDgxTDI1IDEzLjQ2bC04Ljk5NyA4Ljk5OC05LjAwMy05IDEuOTE3LTEuOTE2eicgLz5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PC9BY2NvcmRpb24uVG9nZ2xlPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcnRpY2xlUHJldmlldyBmcm9tICcuL0FydGljbGVQcmV2aWV3JztcblxuY29uc3QgVmlkZW9QcmV2aWV3ID0gKHsgdmlkZW8gfSkgPT4ge1xuXHRjb25zb2xlLmxvZyh2aWRlbyk7XG5cdHJldHVybiB2aWRlbyAmJiAhdmlkZW8uY29udGVudCA/IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndmlkZW8tY29udGFpbmVyJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlbyc+XG5cdFx0XHRcdDxpZnJhbWVcblx0XHRcdFx0XHRjbGFzc05hbWU9J2lmcmFtZSdcblx0XHRcdFx0XHRzcmM9e3ZpZGVvLnVybH1cblx0XHRcdFx0XHR0aXRsZT0nWW91VHViZSB2aWRlbyBwbGF5ZXInXG5cdFx0XHRcdFx0ZnJhbWVCb3JkZXI9JzAnXG5cdFx0XHRcdFx0YWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUnXG5cdFx0XHRcdFx0YWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dmlkZW8ubmFtZX08L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVzYyc+e3ZpZGVvLmRlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlua2VkLWFydGljbGVzJz5cblx0XHRcdFx0XHQ8aDQ+QXJ0aWNsZXMgUmVsYXRlZCB0byB0aGUgdG9waWM8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpIDogKFxuXHRcdDxBcnRpY2xlUHJldmlldyBTZWxlY3RlZEFydGljbGU9e3ZpZGVvfSAvPlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHR2aWRlbzogc3RhdGUudmlkZW8uc2VsZWN0ZWRWaWRlbyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlkZW9QcmV2aWV3KTtcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByb290UmVkdWNlcixcbiAgaW5pdGlhbFN0YXRlLFxuICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZhOWMzNDk2MTZkYzc2OTFlZjYwYTMyMDcwM2NiNzdhLlBOR1wiOyIsIi8qIVxuICogZXhwcmVzc1xuICogQ29weXJpZ2h0KGMpIDIwMDktMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTMgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9leHByZXNzJyk7XG4iLCIvKiFcbiAqIGV4cHJlc3NcbiAqIENvcHlyaWdodChjKSAyMDA5LTIwMTMgVEogSG9sb3dheWNodWtcbiAqIENvcHlyaWdodChjKSAyMDEzIFJvbWFuIFNodHlsbWFuXG4gKiBDb3B5cmlnaHQoYykgMjAxNC0yMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGZpbmFsaGFuZGxlciA9IHJlcXVpcmUoJ2ZpbmFsaGFuZGxlcicpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyJyk7XG52YXIgbWV0aG9kcyA9IHJlcXVpcmUoJ21ldGhvZHMnKTtcbnZhciBtaWRkbGV3YXJlID0gcmVxdWlyZSgnLi9taWRkbGV3YXJlL2luaXQnKTtcbnZhciBxdWVyeSA9IHJlcXVpcmUoJy4vbWlkZGxld2FyZS9xdWVyeScpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZXhwcmVzczphcHBsaWNhdGlvbicpO1xudmFyIFZpZXcgPSByZXF1aXJlKCcuL3ZpZXcnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xudmFyIGNvbXBpbGVFVGFnID0gcmVxdWlyZSgnLi91dGlscycpLmNvbXBpbGVFVGFnO1xudmFyIGNvbXBpbGVRdWVyeVBhcnNlciA9IHJlcXVpcmUoJy4vdXRpbHMnKS5jb21waWxlUXVlcnlQYXJzZXI7XG52YXIgY29tcGlsZVRydXN0ID0gcmVxdWlyZSgnLi91dGlscycpLmNvbXBpbGVUcnVzdDtcbnZhciBkZXByZWNhdGUgPSByZXF1aXJlKCdkZXBkJykoJ2V4cHJlc3MnKTtcbnZhciBmbGF0dGVuID0gcmVxdWlyZSgnYXJyYXktZmxhdHRlbicpO1xudmFyIG1lcmdlID0gcmVxdWlyZSgndXRpbHMtbWVyZ2UnKTtcbnZhciByZXNvbHZlID0gcmVxdWlyZSgncGF0aCcpLnJlc29sdmU7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdzZXRwcm90b3R5cGVvZicpXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbi8qKlxuICogQXBwbGljYXRpb24gcHJvdG90eXBlLlxuICovXG5cbnZhciBhcHAgPSBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLyoqXG4gKiBWYXJpYWJsZSBmb3IgdHJ1c3QgcHJveHkgaW5oZXJpdGFuY2UgYmFjay1jb21wYXRcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIHRydXN0UHJveHlEZWZhdWx0U3ltYm9sID0gJ0BAc3ltYm9sOnRydXN0X3Byb3h5X2RlZmF1bHQnO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHNlcnZlci5cbiAqXG4gKiAgIC0gc2V0dXAgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gKiAgIC0gc2V0dXAgZGVmYXVsdCBtaWRkbGV3YXJlXG4gKiAgIC0gc2V0dXAgcm91dGUgcmVmbGVjdGlvbiBtZXRob2RzXG4gKlxuICogQHByaXZhdGVcbiAqL1xuXG5hcHAuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHRoaXMuY2FjaGUgPSB7fTtcbiAgdGhpcy5lbmdpbmVzID0ge307XG4gIHRoaXMuc2V0dGluZ3MgPSB7fTtcblxuICB0aGlzLmRlZmF1bHRDb25maWd1cmF0aW9uKCk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cblxuYXBwLmRlZmF1bHRDb25maWd1cmF0aW9uID0gZnVuY3Rpb24gZGVmYXVsdENvbmZpZ3VyYXRpb24oKSB7XG4gIHZhciBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuXG4gIC8vIGRlZmF1bHQgc2V0dGluZ3NcbiAgdGhpcy5lbmFibGUoJ3gtcG93ZXJlZC1ieScpO1xuICB0aGlzLnNldCgnZXRhZycsICd3ZWFrJyk7XG4gIHRoaXMuc2V0KCdlbnYnLCBlbnYpO1xuICB0aGlzLnNldCgncXVlcnkgcGFyc2VyJywgJ2V4dGVuZGVkJyk7XG4gIHRoaXMuc2V0KCdzdWJkb21haW4gb2Zmc2V0JywgMik7XG4gIHRoaXMuc2V0KCd0cnVzdCBwcm94eScsIGZhbHNlKTtcblxuICAvLyB0cnVzdCBwcm94eSBpbmhlcml0IGJhY2stY29tcGF0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnNldHRpbmdzLCB0cnVzdFByb3h5RGVmYXVsdFN5bWJvbCwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICBkZWJ1ZygnYm9vdGluZyBpbiAlcyBtb2RlJywgZW52KTtcblxuICB0aGlzLm9uKCdtb3VudCcsIGZ1bmN0aW9uIG9ubW91bnQocGFyZW50KSB7XG4gICAgLy8gaW5oZXJpdCB0cnVzdCBwcm94eVxuICAgIGlmICh0aGlzLnNldHRpbmdzW3RydXN0UHJveHlEZWZhdWx0U3ltYm9sXSA9PT0gdHJ1ZVxuICAgICAgJiYgdHlwZW9mIHBhcmVudC5zZXR0aW5nc1sndHJ1c3QgcHJveHkgZm4nXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGVsZXRlIHRoaXMuc2V0dGluZ3NbJ3RydXN0IHByb3h5J107XG4gICAgICBkZWxldGUgdGhpcy5zZXR0aW5nc1sndHJ1c3QgcHJveHkgZm4nXTtcbiAgICB9XG5cbiAgICAvLyBpbmhlcml0IHByb3Rvc1xuICAgIHNldFByb3RvdHlwZU9mKHRoaXMucmVxdWVzdCwgcGFyZW50LnJlcXVlc3QpXG4gICAgc2V0UHJvdG90eXBlT2YodGhpcy5yZXNwb25zZSwgcGFyZW50LnJlc3BvbnNlKVxuICAgIHNldFByb3RvdHlwZU9mKHRoaXMuZW5naW5lcywgcGFyZW50LmVuZ2luZXMpXG4gICAgc2V0UHJvdG90eXBlT2YodGhpcy5zZXR0aW5ncywgcGFyZW50LnNldHRpbmdzKVxuICB9KTtcblxuICAvLyBzZXR1cCBsb2NhbHNcbiAgdGhpcy5sb2NhbHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vIHRvcC1tb3N0IGFwcCBpcyBtb3VudGVkIGF0IC9cbiAgdGhpcy5tb3VudHBhdGggPSAnLyc7XG5cbiAgLy8gZGVmYXVsdCBsb2NhbHNcbiAgdGhpcy5sb2NhbHMuc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzO1xuXG4gIC8vIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICB0aGlzLnNldCgndmlldycsIFZpZXcpO1xuICB0aGlzLnNldCgndmlld3MnLCByZXNvbHZlKCd2aWV3cycpKTtcbiAgdGhpcy5zZXQoJ2pzb25wIGNhbGxiYWNrIG5hbWUnLCAnY2FsbGJhY2snKTtcblxuICBpZiAoZW52ID09PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aGlzLmVuYWJsZSgndmlldyBjYWNoZScpO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyb3V0ZXInLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXFwnYXBwLnJvdXRlclxcJyBpcyBkZXByZWNhdGVkIVxcblBsZWFzZSBzZWUgdGhlIDMueCB0byA0LnggbWlncmF0aW9uIGd1aWRlIGZvciBkZXRhaWxzIG9uIGhvdyB0byB1cGRhdGUgeW91ciBhcHAuJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogbGF6aWx5IGFkZHMgdGhlIGJhc2Ugcm91dGVyIGlmIGl0IGhhcyBub3QgeWV0IGJlZW4gYWRkZWQuXG4gKlxuICogV2UgY2Fubm90IGFkZCB0aGUgYmFzZSByb3V0ZXIgaW4gdGhlIGRlZmF1bHRDb25maWd1cmF0aW9uIGJlY2F1c2VcbiAqIGl0IHJlYWRzIGFwcCBzZXR0aW5ncyB3aGljaCBtaWdodCBiZSBzZXQgYWZ0ZXIgdGhhdCBoYXMgcnVuLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmFwcC5sYXp5cm91dGVyID0gZnVuY3Rpb24gbGF6eXJvdXRlcigpIHtcbiAgaWYgKCF0aGlzLl9yb3V0ZXIpIHtcbiAgICB0aGlzLl9yb3V0ZXIgPSBuZXcgUm91dGVyKHtcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHRoaXMuZW5hYmxlZCgnY2FzZSBzZW5zaXRpdmUgcm91dGluZycpLFxuICAgICAgc3RyaWN0OiB0aGlzLmVuYWJsZWQoJ3N0cmljdCByb3V0aW5nJylcbiAgICB9KTtcblxuICAgIHRoaXMuX3JvdXRlci51c2UocXVlcnkodGhpcy5nZXQoJ3F1ZXJ5IHBhcnNlciBmbicpKSk7XG4gICAgdGhpcy5fcm91dGVyLnVzZShtaWRkbGV3YXJlLmluaXQodGhpcykpO1xuICB9XG59O1xuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxLCByZXMgcGFpciBpbnRvIHRoZSBhcHBsaWNhdGlvbi4gU3RhcnRzIHBpcGVsaW5lIHByb2Nlc3NpbmcuXG4gKlxuICogSWYgbm8gY2FsbGJhY2sgaXMgcHJvdmlkZWQsIHRoZW4gZGVmYXVsdCBlcnJvciBoYW5kbGVycyB3aWxsIHJlc3BvbmRcbiAqIGluIHRoZSBldmVudCBvZiBhbiBlcnJvciBidWJibGluZyB0aHJvdWdoIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmFwcC5oYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMsIGNhbGxiYWNrKSB7XG4gIHZhciByb3V0ZXIgPSB0aGlzLl9yb3V0ZXI7XG5cbiAgLy8gZmluYWwgaGFuZGxlclxuICB2YXIgZG9uZSA9IGNhbGxiYWNrIHx8IGZpbmFsaGFuZGxlcihyZXEsIHJlcywge1xuICAgIGVudjogdGhpcy5nZXQoJ2VudicpLFxuICAgIG9uZXJyb3I6IGxvZ2Vycm9yLmJpbmQodGhpcylcbiAgfSk7XG5cbiAgLy8gbm8gcm91dGVzXG4gIGlmICghcm91dGVyKSB7XG4gICAgZGVidWcoJ25vIHJvdXRlcyBkZWZpbmVkIG9uIGFwcCcpO1xuICAgIGRvbmUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICByb3V0ZXIuaGFuZGxlKHJlcSwgcmVzLCBkb25lKTtcbn07XG5cbi8qKlxuICogUHJveHkgYFJvdXRlciN1c2UoKWAgdG8gYWRkIG1pZGRsZXdhcmUgdG8gdGhlIGFwcCByb3V0ZXIuXG4gKiBTZWUgUm91dGVyI3VzZSgpIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMuXG4gKlxuICogSWYgdGhlIF9mbl8gcGFyYW1ldGVyIGlzIGFuIGV4cHJlc3MgYXBwLCB0aGVuIGl0IHdpbGwgYmVcbiAqIG1vdW50ZWQgYXQgdGhlIF9yb3V0ZV8gc3BlY2lmaWVkLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuXG5hcHAudXNlID0gZnVuY3Rpb24gdXNlKGZuKSB7XG4gIHZhciBvZmZzZXQgPSAwO1xuICB2YXIgcGF0aCA9ICcvJztcblxuICAvLyBkZWZhdWx0IHBhdGggdG8gJy8nXG4gIC8vIGRpc2FtYmlndWF0ZSBhcHAudXNlKFtmbl0pXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgYXJnID0gZm47XG5cbiAgICB3aGlsZSAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGggIT09IDApIHtcbiAgICAgIGFyZyA9IGFyZ1swXTtcbiAgICB9XG5cbiAgICAvLyBmaXJzdCBhcmcgaXMgdGhlIHBhdGhcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0ID0gMTtcbiAgICAgIHBhdGggPSBmbjtcbiAgICB9XG4gIH1cblxuICB2YXIgZm5zID0gZmxhdHRlbihzbGljZS5jYWxsKGFyZ3VtZW50cywgb2Zmc2V0KSk7XG5cbiAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcHAudXNlKCkgcmVxdWlyZXMgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uJylcbiAgfVxuXG4gIC8vIHNldHVwIHJvdXRlclxuICB0aGlzLmxhenlyb3V0ZXIoKTtcbiAgdmFyIHJvdXRlciA9IHRoaXMuX3JvdXRlcjtcblxuICBmbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAvLyBub24tZXhwcmVzcyBhcHBcbiAgICBpZiAoIWZuIHx8ICFmbi5oYW5kbGUgfHwgIWZuLnNldCkge1xuICAgICAgcmV0dXJuIHJvdXRlci51c2UocGF0aCwgZm4pO1xuICAgIH1cblxuICAgIGRlYnVnKCcudXNlIGFwcCB1bmRlciAlcycsIHBhdGgpO1xuICAgIGZuLm1vdW50cGF0aCA9IHBhdGg7XG4gICAgZm4ucGFyZW50ID0gdGhpcztcblxuICAgIC8vIHJlc3RvcmUgLmFwcCBwcm9wZXJ0eSBvbiByZXEgYW5kIHJlc1xuICAgIHJvdXRlci51c2UocGF0aCwgZnVuY3Rpb24gbW91bnRlZF9hcHAocmVxLCByZXMsIG5leHQpIHtcbiAgICAgIHZhciBvcmlnID0gcmVxLmFwcDtcbiAgICAgIGZuLmhhbmRsZShyZXEsIHJlcywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBzZXRQcm90b3R5cGVPZihyZXEsIG9yaWcucmVxdWVzdClcbiAgICAgICAgc2V0UHJvdG90eXBlT2YocmVzLCBvcmlnLnJlc3BvbnNlKVxuICAgICAgICBuZXh0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIG1vdW50ZWQgYW4gYXBwXG4gICAgZm4uZW1pdCgnbW91bnQnLCB0aGlzKTtcbiAgfSwgdGhpcyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFByb3h5IHRvIHRoZSBhcHAgYFJvdXRlciNyb3V0ZSgpYFxuICogUmV0dXJucyBhIG5ldyBgUm91dGVgIGluc3RhbmNlIGZvciB0aGUgX3BhdGhfLlxuICpcbiAqIFJvdXRlcyBhcmUgaXNvbGF0ZWQgbWlkZGxld2FyZSBzdGFja3MgZm9yIHNwZWNpZmljIHBhdGhzLlxuICogU2VlIHRoZSBSb3V0ZSBhcGkgZG9jcyBmb3IgZGV0YWlscy5cbiAqXG4gKiBAcHVibGljXG4gKi9cblxuYXBwLnJvdXRlID0gZnVuY3Rpb24gcm91dGUocGF0aCkge1xuICB0aGlzLmxhenlyb3V0ZXIoKTtcbiAgcmV0dXJuIHRoaXMuX3JvdXRlci5yb3V0ZShwYXRoKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGdpdmVuIHRlbXBsYXRlIGVuZ2luZSBjYWxsYmFjayBgZm5gXG4gKiBhcyBgZXh0YC5cbiAqXG4gKiBCeSBkZWZhdWx0IHdpbGwgYHJlcXVpcmUoKWAgdGhlIGVuZ2luZSBiYXNlZCBvbiB0aGVcbiAqIGZpbGUgZXh0ZW5zaW9uLiBGb3IgZXhhbXBsZSBpZiB5b3UgdHJ5IHRvIHJlbmRlclxuICogYSBcImZvby5lanNcIiBmaWxlIEV4cHJlc3Mgd2lsbCBpbnZva2UgdGhlIGZvbGxvd2luZyBpbnRlcm5hbGx5OlxuICpcbiAqICAgICBhcHAuZW5naW5lKCdlanMnLCByZXF1aXJlKCdlanMnKS5fX2V4cHJlc3MpO1xuICpcbiAqIEZvciBlbmdpbmVzIHRoYXQgZG8gbm90IHByb3ZpZGUgYC5fX2V4cHJlc3NgIG91dCBvZiB0aGUgYm94LFxuICogb3IgaWYgeW91IHdpc2ggdG8gXCJtYXBcIiBhIGRpZmZlcmVudCBleHRlbnNpb24gdG8gdGhlIHRlbXBsYXRlIGVuZ2luZVxuICogeW91IG1heSB1c2UgdGhpcyBtZXRob2QuIEZvciBleGFtcGxlIG1hcHBpbmcgdGhlIEVKUyB0ZW1wbGF0ZSBlbmdpbmUgdG9cbiAqIFwiLmh0bWxcIiBmaWxlczpcbiAqXG4gKiAgICAgYXBwLmVuZ2luZSgnaHRtbCcsIHJlcXVpcmUoJ2VqcycpLnJlbmRlckZpbGUpO1xuICpcbiAqIEluIHRoaXMgY2FzZSBFSlMgcHJvdmlkZXMgYSBgLnJlbmRlckZpbGUoKWAgbWV0aG9kIHdpdGhcbiAqIHRoZSBzYW1lIHNpZ25hdHVyZSB0aGF0IEV4cHJlc3MgZXhwZWN0czogYChwYXRoLCBvcHRpb25zLCBjYWxsYmFjaylgLFxuICogdGhvdWdoIG5vdGUgdGhhdCBpdCBhbGlhc2VzIHRoaXMgbWV0aG9kIGFzIGBlanMuX19leHByZXNzYCBpbnRlcm5hbGx5XG4gKiBzbyBpZiB5b3UncmUgdXNpbmcgXCIuZWpzXCIgZXh0ZW5zaW9ucyB5b3UgZG9udCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICpcbiAqIFNvbWUgdGVtcGxhdGUgZW5naW5lcyBkbyBub3QgZm9sbG93IHRoaXMgY29udmVudGlvbiwgdGhlXG4gKiBbQ29uc29saWRhdGUuanNdKGh0dHBzOi8vZ2l0aHViLmNvbS90ai9jb25zb2xpZGF0ZS5qcylcbiAqIGxpYnJhcnkgd2FzIGNyZWF0ZWQgdG8gbWFwIGFsbCBvZiBub2RlJ3MgcG9wdWxhciB0ZW1wbGF0ZVxuICogZW5naW5lcyB0byBmb2xsb3cgdGhpcyBjb252ZW50aW9uLCB0aHVzIGFsbG93aW5nIHRoZW0gdG9cbiAqIHdvcmsgc2VhbWxlc3NseSB3aXRoaW4gRXhwcmVzcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXh0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7YXBwfSBmb3IgY2hhaW5pbmdcbiAqIEBwdWJsaWNcbiAqL1xuXG5hcHAuZW5naW5lID0gZnVuY3Rpb24gZW5naW5lKGV4dCwgZm4pIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgZnVuY3Rpb24gcmVxdWlyZWQnKTtcbiAgfVxuXG4gIC8vIGdldCBmaWxlIGV4dGVuc2lvblxuICB2YXIgZXh0ZW5zaW9uID0gZXh0WzBdICE9PSAnLidcbiAgICA/ICcuJyArIGV4dFxuICAgIDogZXh0O1xuXG4gIC8vIHN0b3JlIGVuZ2luZVxuICB0aGlzLmVuZ2luZXNbZXh0ZW5zaW9uXSA9IGZuO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBQcm94eSB0byBgUm91dGVyI3BhcmFtKClgIHdpdGggb25lIGFkZGVkIGFwaSBmZWF0dXJlLiBUaGUgX25hbWVfIHBhcmFtZXRlclxuICogY2FuIGJlIGFuIGFycmF5IG9mIG5hbWVzLlxuICpcbiAqIFNlZSB0aGUgUm91dGVyI3BhcmFtKCkgZG9jcyBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7YXBwfSBmb3IgY2hhaW5pbmdcbiAqIEBwdWJsaWNcbiAqL1xuXG5hcHAucGFyYW0gPSBmdW5jdGlvbiBwYXJhbShuYW1lLCBmbikge1xuICB0aGlzLmxhenlyb3V0ZXIoKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wYXJhbShuYW1lW2ldLCBmbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGlzLl9yb3V0ZXIucGFyYW0obmFtZSwgZm4pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBc3NpZ24gYHNldHRpbmdgIHRvIGB2YWxgLCBvciByZXR1cm4gYHNldHRpbmdgJ3MgdmFsdWUuXG4gKlxuICogICAgYXBwLnNldCgnZm9vJywgJ2JhcicpO1xuICogICAgYXBwLnNldCgnZm9vJyk7XG4gKiAgICAvLyA9PiBcImJhclwiXG4gKlxuICogTW91bnRlZCBzZXJ2ZXJzIGluaGVyaXQgdGhlaXIgcGFyZW50IHNlcnZlcidzIHNldHRpbmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZXR0aW5nXG4gKiBAcGFyYW0geyp9IFt2YWxdXG4gKiBAcmV0dXJuIHtTZXJ2ZXJ9IGZvciBjaGFpbmluZ1xuICogQHB1YmxpY1xuICovXG5cbmFwcC5zZXQgPSBmdW5jdGlvbiBzZXQoc2V0dGluZywgdmFsKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gYXBwLmdldChzZXR0aW5nKVxuICAgIHJldHVybiB0aGlzLnNldHRpbmdzW3NldHRpbmddO1xuICB9XG5cbiAgZGVidWcoJ3NldCBcIiVzXCIgdG8gJW8nLCBzZXR0aW5nLCB2YWwpO1xuXG4gIC8vIHNldCB2YWx1ZVxuICB0aGlzLnNldHRpbmdzW3NldHRpbmddID0gdmFsO1xuXG4gIC8vIHRyaWdnZXIgbWF0Y2hlZCBzZXR0aW5nc1xuICBzd2l0Y2ggKHNldHRpbmcpIHtcbiAgICBjYXNlICdldGFnJzpcbiAgICAgIHRoaXMuc2V0KCdldGFnIGZuJywgY29tcGlsZUVUYWcodmFsKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdxdWVyeSBwYXJzZXInOlxuICAgICAgdGhpcy5zZXQoJ3F1ZXJ5IHBhcnNlciBmbicsIGNvbXBpbGVRdWVyeVBhcnNlcih2YWwpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RydXN0IHByb3h5JzpcbiAgICAgIHRoaXMuc2V0KCd0cnVzdCBwcm94eSBmbicsIGNvbXBpbGVUcnVzdCh2YWwpKTtcblxuICAgICAgLy8gdHJ1c3QgcHJveHkgaW5oZXJpdCBiYWNrLWNvbXBhdFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuc2V0dGluZ3MsIHRydXN0UHJveHlEZWZhdWx0U3ltYm9sLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBhcHAncyBhYnNvbHV0ZSBwYXRobmFtZVxuICogYmFzZWQgb24gdGhlIHBhcmVudChzKSB0aGF0IGhhdmVcbiAqIG1vdW50ZWQgaXQuXG4gKlxuICogRm9yIGV4YW1wbGUgaWYgdGhlIGFwcGxpY2F0aW9uIHdhc1xuICogbW91bnRlZCBhcyBcIi9hZG1pblwiLCB3aGljaCBpdHNlbGZcbiAqIHdhcyBtb3VudGVkIGFzIFwiL2Jsb2dcIiB0aGVuIHRoZVxuICogcmV0dXJuIHZhbHVlIHdvdWxkIGJlIFwiL2Jsb2cvYWRtaW5cIi5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmFwcC5wYXRoID0gZnVuY3Rpb24gcGF0aCgpIHtcbiAgcmV0dXJuIHRoaXMucGFyZW50XG4gICAgPyB0aGlzLnBhcmVudC5wYXRoKCkgKyB0aGlzLm1vdW50cGF0aFxuICAgIDogJyc7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGBzZXR0aW5nYCBpcyBlbmFibGVkICh0cnV0aHkpLlxuICpcbiAqICAgIGFwcC5lbmFibGVkKCdmb28nKVxuICogICAgLy8gPT4gZmFsc2VcbiAqXG4gKiAgICBhcHAuZW5hYmxlKCdmb28nKVxuICogICAgYXBwLmVuYWJsZWQoJ2ZvbycpXG4gKiAgICAvLyA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNldHRpbmdcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHVibGljXG4gKi9cblxuYXBwLmVuYWJsZWQgPSBmdW5jdGlvbiBlbmFibGVkKHNldHRpbmcpIHtcbiAgcmV0dXJuIEJvb2xlYW4odGhpcy5zZXQoc2V0dGluZykpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBgc2V0dGluZ2AgaXMgZGlzYWJsZWQuXG4gKlxuICogICAgYXBwLmRpc2FibGVkKCdmb28nKVxuICogICAgLy8gPT4gdHJ1ZVxuICpcbiAqICAgIGFwcC5lbmFibGUoJ2ZvbycpXG4gKiAgICBhcHAuZGlzYWJsZWQoJ2ZvbycpXG4gKiAgICAvLyA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZXR0aW5nXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHB1YmxpY1xuICovXG5cbmFwcC5kaXNhYmxlZCA9IGZ1bmN0aW9uIGRpc2FibGVkKHNldHRpbmcpIHtcbiAgcmV0dXJuICF0aGlzLnNldChzZXR0aW5nKTtcbn07XG5cbi8qKlxuICogRW5hYmxlIGBzZXR0aW5nYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2V0dGluZ1xuICogQHJldHVybiB7YXBwfSBmb3IgY2hhaW5pbmdcbiAqIEBwdWJsaWNcbiAqL1xuXG5hcHAuZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKHNldHRpbmcpIHtcbiAgcmV0dXJuIHRoaXMuc2V0KHNldHRpbmcsIHRydWUpO1xufTtcblxuLyoqXG4gKiBEaXNhYmxlIGBzZXR0aW5nYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2V0dGluZ1xuICogQHJldHVybiB7YXBwfSBmb3IgY2hhaW5pbmdcbiAqIEBwdWJsaWNcbiAqL1xuXG5hcHAuZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoc2V0dGluZykge1xuICByZXR1cm4gdGhpcy5zZXQoc2V0dGluZywgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBEZWxlZ2F0ZSBgLlZFUkIoLi4uKWAgY2FsbHMgdG8gYHJvdXRlci5WRVJCKC4uLilgLlxuICovXG5cbm1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2Qpe1xuICBhcHBbbWV0aG9kXSA9IGZ1bmN0aW9uKHBhdGgpe1xuICAgIGlmIChtZXRob2QgPT09ICdnZXQnICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIGFwcC5nZXQoc2V0dGluZylcbiAgICAgIHJldHVybiB0aGlzLnNldChwYXRoKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhenlyb3V0ZXIoKTtcblxuICAgIHZhciByb3V0ZSA9IHRoaXMuX3JvdXRlci5yb3V0ZShwYXRoKTtcbiAgICByb3V0ZVttZXRob2RdLmFwcGx5KHJvdXRlLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufSk7XG5cbi8qKlxuICogU3BlY2lhbC1jYXNlZCBcImFsbFwiIG1ldGhvZCwgYXBwbHlpbmcgdGhlIGdpdmVuIHJvdXRlIGBwYXRoYCxcbiAqIG1pZGRsZXdhcmUsIGFuZCBjYWxsYmFjayB0byBfZXZlcnlfIEhUVFAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSAuLi5cbiAqIEByZXR1cm4ge2FwcH0gZm9yIGNoYWluaW5nXG4gKiBAcHVibGljXG4gKi9cblxuYXBwLmFsbCA9IGZ1bmN0aW9uIGFsbChwYXRoKSB7XG4gIHRoaXMubGF6eXJvdXRlcigpO1xuXG4gIHZhciByb3V0ZSA9IHRoaXMuX3JvdXRlci5yb3V0ZShwYXRoKTtcbiAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgcm91dGVbbWV0aG9kc1tpXV0uYXBwbHkocm91dGUsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBkZWwgLT4gZGVsZXRlIGFsaWFzXG5cbmFwcC5kZWwgPSBkZXByZWNhdGUuZnVuY3Rpb24oYXBwLmRlbGV0ZSwgJ2FwcC5kZWw6IFVzZSBhcHAuZGVsZXRlIGluc3RlYWQnKTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIHZpZXcgYG5hbWVgIG5hbWUgd2l0aCBgb3B0aW9uc2BcbiAqIGFuZCBhIGNhbGxiYWNrIGFjY2VwdGluZyBhbiBlcnJvciBhbmQgdGhlXG4gKiByZW5kZXJlZCB0ZW1wbGF0ZSBzdHJpbmcuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICBhcHAucmVuZGVyKCdlbWFpbCcsIHsgbmFtZTogJ1RvYmknIH0sIGZ1bmN0aW9uKGVyciwgaHRtbCl7XG4gKiAgICAgIC8vIC4uLlxuICogICAgfSlcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IG9wdGlvbnMgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcHVibGljXG4gKi9cblxuYXBwLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihuYW1lLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuICB2YXIgZG9uZSA9IGNhbGxiYWNrO1xuICB2YXIgZW5naW5lcyA9IHRoaXMuZW5naW5lcztcbiAgdmFyIG9wdHMgPSBvcHRpb25zO1xuICB2YXIgcmVuZGVyT3B0aW9ucyA9IHt9O1xuICB2YXIgdmlldztcblxuICAvLyBzdXBwb3J0IGNhbGxiYWNrIGZ1bmN0aW9uIGFzIHNlY29uZCBhcmdcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZG9uZSA9IG9wdGlvbnM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG5cbiAgLy8gbWVyZ2UgYXBwLmxvY2Fsc1xuICBtZXJnZShyZW5kZXJPcHRpb25zLCB0aGlzLmxvY2Fscyk7XG5cbiAgLy8gbWVyZ2Ugb3B0aW9ucy5fbG9jYWxzXG4gIGlmIChvcHRzLl9sb2NhbHMpIHtcbiAgICBtZXJnZShyZW5kZXJPcHRpb25zLCBvcHRzLl9sb2NhbHMpO1xuICB9XG5cbiAgLy8gbWVyZ2Ugb3B0aW9uc1xuICBtZXJnZShyZW5kZXJPcHRpb25zLCBvcHRzKTtcblxuICAvLyBzZXQgLmNhY2hlIHVubGVzcyBleHBsaWNpdGx5IHByb3ZpZGVkXG4gIGlmIChyZW5kZXJPcHRpb25zLmNhY2hlID09IG51bGwpIHtcbiAgICByZW5kZXJPcHRpb25zLmNhY2hlID0gdGhpcy5lbmFibGVkKCd2aWV3IGNhY2hlJyk7XG4gIH1cblxuICAvLyBwcmltZWQgY2FjaGVcbiAgaWYgKHJlbmRlck9wdGlvbnMuY2FjaGUpIHtcbiAgICB2aWV3ID0gY2FjaGVbbmFtZV07XG4gIH1cblxuICAvLyB2aWV3XG4gIGlmICghdmlldykge1xuICAgIHZhciBWaWV3ID0gdGhpcy5nZXQoJ3ZpZXcnKTtcblxuICAgIHZpZXcgPSBuZXcgVmlldyhuYW1lLCB7XG4gICAgICBkZWZhdWx0RW5naW5lOiB0aGlzLmdldCgndmlldyBlbmdpbmUnKSxcbiAgICAgIHJvb3Q6IHRoaXMuZ2V0KCd2aWV3cycpLFxuICAgICAgZW5naW5lczogZW5naW5lc1xuICAgIH0pO1xuXG4gICAgaWYgKCF2aWV3LnBhdGgpIHtcbiAgICAgIHZhciBkaXJzID0gQXJyYXkuaXNBcnJheSh2aWV3LnJvb3QpICYmIHZpZXcucm9vdC5sZW5ndGggPiAxXG4gICAgICAgID8gJ2RpcmVjdG9yaWVzIFwiJyArIHZpZXcucm9vdC5zbGljZSgwLCAtMSkuam9pbignXCIsIFwiJykgKyAnXCIgb3IgXCInICsgdmlldy5yb290W3ZpZXcucm9vdC5sZW5ndGggLSAxXSArICdcIidcbiAgICAgICAgOiAnZGlyZWN0b3J5IFwiJyArIHZpZXcucm9vdCArICdcIidcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb29rdXAgdmlldyBcIicgKyBuYW1lICsgJ1wiIGluIHZpZXdzICcgKyBkaXJzKTtcbiAgICAgIGVyci52aWV3ID0gdmlldztcbiAgICAgIHJldHVybiBkb25lKGVycik7XG4gICAgfVxuXG4gICAgLy8gcHJpbWUgdGhlIGNhY2hlXG4gICAgaWYgKHJlbmRlck9wdGlvbnMuY2FjaGUpIHtcbiAgICAgIGNhY2hlW25hbWVdID0gdmlldztcbiAgICB9XG4gIH1cblxuICAvLyByZW5kZXJcbiAgdHJ5UmVuZGVyKHZpZXcsIHJlbmRlck9wdGlvbnMsIGRvbmUpO1xufTtcblxuLyoqXG4gKiBMaXN0ZW4gZm9yIGNvbm5lY3Rpb25zLlxuICpcbiAqIEEgbm9kZSBgaHR0cC5TZXJ2ZXJgIGlzIHJldHVybmVkLCB3aXRoIHRoaXNcbiAqIGFwcGxpY2F0aW9uICh3aGljaCBpcyBhIGBGdW5jdGlvbmApIGFzIGl0c1xuICogY2FsbGJhY2suIElmIHlvdSB3aXNoIHRvIGNyZWF0ZSBib3RoIGFuIEhUVFBcbiAqIGFuZCBIVFRQUyBzZXJ2ZXIgeW91IG1heSBkbyBzbyB3aXRoIHRoZSBcImh0dHBcIlxuICogYW5kIFwiaHR0cHNcIiBtb2R1bGVzIGFzIHNob3duIGhlcmU6XG4gKlxuICogICAgdmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJylcbiAqICAgICAgLCBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJylcbiAqICAgICAgLCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXG4gKiAgICAgICwgYXBwID0gZXhwcmVzcygpO1xuICpcbiAqICAgIGh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKDgwKTtcbiAqICAgIGh0dHBzLmNyZWF0ZVNlcnZlcih7IC4uLiB9LCBhcHApLmxpc3Rlbig0NDMpO1xuICpcbiAqIEByZXR1cm4ge2h0dHAuU2VydmVyfVxuICogQHB1YmxpY1xuICovXG5cbmFwcC5saXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gIHZhciBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcih0aGlzKTtcbiAgcmV0dXJuIHNlcnZlci5saXN0ZW4uYXBwbHkoc2VydmVyLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBMb2cgZXJyb3IgdXNpbmcgY29uc29sZS5lcnJvci5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9nZXJyb3IoZXJyKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICh0aGlzLmdldCgnZW52JykgIT09ICd0ZXN0JykgY29uc29sZS5lcnJvcihlcnIuc3RhY2sgfHwgZXJyLnRvU3RyaW5nKCkpO1xufVxuXG4vKipcbiAqIFRyeSByZW5kZXJpbmcgYSB2aWV3LlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0cnlSZW5kZXIodmlldywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICB2aWV3LnJlbmRlcihvcHRpb25zLCBjYWxsYmFjayk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNhbGxiYWNrKGVycik7XG4gIH1cbn1cbiIsIi8qIVxuICogZXhwcmVzc1xuICogQ29weXJpZ2h0KGMpIDIwMDktMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTMgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKVxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbnZhciBtaXhpbiA9IHJlcXVpcmUoJ21lcmdlLWRlc2NyaXB0b3JzJyk7XG52YXIgcHJvdG8gPSByZXF1aXJlKCcuL2FwcGxpY2F0aW9uJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL3JvdXRlci9yb3V0ZScpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyJyk7XG52YXIgcmVxID0gcmVxdWlyZSgnLi9yZXF1ZXN0Jyk7XG52YXIgcmVzID0gcmVxdWlyZSgnLi9yZXNwb25zZScpO1xuXG4vKipcbiAqIEV4cG9zZSBgY3JlYXRlQXBwbGljYXRpb24oKWAuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXBwbGljYXRpb247XG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4cHJlc3MgYXBwbGljYXRpb24uXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUFwcGxpY2F0aW9uKCkge1xuICB2YXIgYXBwID0gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICBhcHAuaGFuZGxlKHJlcSwgcmVzLCBuZXh0KTtcbiAgfTtcblxuICBtaXhpbihhcHAsIEV2ZW50RW1pdHRlci5wcm90b3R5cGUsIGZhbHNlKTtcbiAgbWl4aW4oYXBwLCBwcm90bywgZmFsc2UpO1xuXG4gIC8vIGV4cG9zZSB0aGUgcHJvdG90eXBlIHRoYXQgd2lsbCBnZXQgc2V0IG9uIHJlcXVlc3RzXG4gIGFwcC5yZXF1ZXN0ID0gT2JqZWN0LmNyZWF0ZShyZXEsIHtcbiAgICBhcHA6IHsgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IGFwcCB9XG4gIH0pXG5cbiAgLy8gZXhwb3NlIHRoZSBwcm90b3R5cGUgdGhhdCB3aWxsIGdldCBzZXQgb24gcmVzcG9uc2VzXG4gIGFwcC5yZXNwb25zZSA9IE9iamVjdC5jcmVhdGUocmVzLCB7XG4gICAgYXBwOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiBhcHAgfVxuICB9KVxuXG4gIGFwcC5pbml0KCk7XG4gIHJldHVybiBhcHA7XG59XG5cbi8qKlxuICogRXhwb3NlIHRoZSBwcm90b3R5cGVzLlxuICovXG5cbmV4cG9ydHMuYXBwbGljYXRpb24gPSBwcm90bztcbmV4cG9ydHMucmVxdWVzdCA9IHJlcTtcbmV4cG9ydHMucmVzcG9uc2UgPSByZXM7XG5cbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycy5cbiAqL1xuXG5leHBvcnRzLlJvdXRlID0gUm91dGU7XG5leHBvcnRzLlJvdXRlciA9IFJvdXRlcjtcblxuLyoqXG4gKiBFeHBvc2UgbWlkZGxld2FyZVxuICovXG5cbmV4cG9ydHMuanNvbiA9IGJvZHlQYXJzZXIuanNvblxuZXhwb3J0cy5xdWVyeSA9IHJlcXVpcmUoJy4vbWlkZGxld2FyZS9xdWVyeScpO1xuZXhwb3J0cy5yYXcgPSBib2R5UGFyc2VyLnJhd1xuZXhwb3J0cy5zdGF0aWMgPSByZXF1aXJlKCdzZXJ2ZS1zdGF0aWMnKTtcbmV4cG9ydHMudGV4dCA9IGJvZHlQYXJzZXIudGV4dFxuZXhwb3J0cy51cmxlbmNvZGVkID0gYm9keVBhcnNlci51cmxlbmNvZGVkXG5cbi8qKlxuICogUmVwbGFjZSByZW1vdmVkIG1pZGRsZXdhcmUgd2l0aCBhbiBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlLlxuICovXG5cbnZhciByZW1vdmVkTWlkZGxld2FyZXMgPSBbXG4gICdib2R5UGFyc2VyJyxcbiAgJ2NvbXByZXNzJyxcbiAgJ2Nvb2tpZVNlc3Npb24nLFxuICAnc2Vzc2lvbicsXG4gICdsb2dnZXInLFxuICAnY29va2llUGFyc2VyJyxcbiAgJ2Zhdmljb24nLFxuICAncmVzcG9uc2VUaW1lJyxcbiAgJ2Vycm9ySGFuZGxlcicsXG4gICd0aW1lb3V0JyxcbiAgJ21ldGhvZE92ZXJyaWRlJyxcbiAgJ3Zob3N0JyxcbiAgJ2NzcmYnLFxuICAnZGlyZWN0b3J5JyxcbiAgJ2xpbWl0JyxcbiAgJ211bHRpcGFydCcsXG4gICdzdGF0aWNDYWNoZSdcbl1cblxucmVtb3ZlZE1pZGRsZXdhcmVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTW9zdCBtaWRkbGV3YXJlIChsaWtlICcgKyBuYW1lICsgJykgaXMgbm8gbG9uZ2VyIGJ1bmRsZWQgd2l0aCBFeHByZXNzIGFuZCBtdXN0IGJlIGluc3RhbGxlZCBzZXBhcmF0ZWx5LiBQbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zZW5jaGFsYWJzL2Nvbm5lY3QjbWlkZGxld2FyZS4nKTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn0pO1xuIiwiLyohXG4gKiBleHByZXNzXG4gKiBDb3B5cmlnaHQoYykgMjAwOS0yMDEzIFRKIEhvbG93YXljaHVrXG4gKiBDb3B5cmlnaHQoYykgMjAxMyBSb21hbiBTaHR5bG1hblxuICogQ29weXJpZ2h0KGMpIDIwMTQtMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ3NldHByb3RvdHlwZW9mJylcblxuLyoqXG4gKiBJbml0aWFsaXphdGlvbiBtaWRkbGV3YXJlLCBleHBvc2luZyB0aGVcbiAqIHJlcXVlc3QgYW5kIHJlc3BvbnNlIHRvIGVhY2ggb3RoZXIsIGFzIHdlbGxcbiAqIGFzIGRlZmF1bHRpbmcgdGhlIFgtUG93ZXJlZC1CeSBoZWFkZXIgZmllbGQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXBwXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uKGFwcCl7XG4gIHJldHVybiBmdW5jdGlvbiBleHByZXNzSW5pdChyZXEsIHJlcywgbmV4dCl7XG4gICAgaWYgKGFwcC5lbmFibGVkKCd4LXBvd2VyZWQtYnknKSkgcmVzLnNldEhlYWRlcignWC1Qb3dlcmVkLUJ5JywgJ0V4cHJlc3MnKTtcbiAgICByZXEucmVzID0gcmVzO1xuICAgIHJlcy5yZXEgPSByZXE7XG4gICAgcmVxLm5leHQgPSBuZXh0O1xuXG4gICAgc2V0UHJvdG90eXBlT2YocmVxLCBhcHAucmVxdWVzdClcbiAgICBzZXRQcm90b3R5cGVPZihyZXMsIGFwcC5yZXNwb25zZSlcblxuICAgIHJlcy5sb2NhbHMgPSByZXMubG9jYWxzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICBuZXh0KCk7XG4gIH07XG59O1xuXG4iLCIvKiFcbiAqIGV4cHJlc3NcbiAqIENvcHlyaWdodChjKSAyMDA5LTIwMTMgVEogSG9sb3dheWNodWtcbiAqIENvcHlyaWdodChjKSAyMDEzIFJvbWFuIFNodHlsbWFuXG4gKiBDb3B5cmlnaHQoYykgMjAxNC0yMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgbWVyZ2UgPSByZXF1aXJlKCd1dGlscy1tZXJnZScpXG52YXIgcGFyc2VVcmwgPSByZXF1aXJlKCdwYXJzZXVybCcpO1xudmFyIHFzID0gcmVxdWlyZSgncXMnKTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcXVlcnkob3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG1lcmdlKHt9LCBvcHRpb25zKVxuICB2YXIgcXVlcnlwYXJzZSA9IHFzLnBhcnNlO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHF1ZXJ5cGFyc2UgPSBvcHRpb25zO1xuICAgIG9wdHMgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAob3B0cyAhPT0gdW5kZWZpbmVkICYmIG9wdHMuYWxsb3dQcm90b3R5cGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBiYWNrLWNvbXBhdCBmb3IgcXMgbW9kdWxlXG4gICAgb3B0cy5hbGxvd1Byb3RvdHlwZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHF1ZXJ5KHJlcSwgcmVzLCBuZXh0KXtcbiAgICBpZiAoIXJlcS5xdWVyeSkge1xuICAgICAgdmFyIHZhbCA9IHBhcnNlVXJsKHJlcSkucXVlcnk7XG4gICAgICByZXEucXVlcnkgPSBxdWVyeXBhcnNlKHZhbCwgb3B0cyk7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xuICB9O1xufTtcbiIsIi8qIVxuICogZXhwcmVzc1xuICogQ29weXJpZ2h0KGMpIDIwMDktMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTMgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgYWNjZXB0cyA9IHJlcXVpcmUoJ2FjY2VwdHMnKTtcbnZhciBkZXByZWNhdGUgPSByZXF1aXJlKCdkZXBkJykoJ2V4cHJlc3MnKTtcbnZhciBpc0lQID0gcmVxdWlyZSgnbmV0JykuaXNJUDtcbnZhciB0eXBlaXMgPSByZXF1aXJlKCd0eXBlLWlzJyk7XG52YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbnZhciBmcmVzaCA9IHJlcXVpcmUoJ2ZyZXNoJyk7XG52YXIgcGFyc2VSYW5nZSA9IHJlcXVpcmUoJ3JhbmdlLXBhcnNlcicpO1xudmFyIHBhcnNlID0gcmVxdWlyZSgncGFyc2V1cmwnKTtcbnZhciBwcm94eWFkZHIgPSByZXF1aXJlKCdwcm94eS1hZGRyJyk7XG5cbi8qKlxuICogUmVxdWVzdCBwcm90b3R5cGUuXG4gKiBAcHVibGljXG4gKi9cblxudmFyIHJlcSA9IE9iamVjdC5jcmVhdGUoaHR0cC5JbmNvbWluZ01lc3NhZ2UucHJvdG90eXBlKVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxXG5cbi8qKlxuICogUmV0dXJuIHJlcXVlc3QgaGVhZGVyLlxuICpcbiAqIFRoZSBgUmVmZXJyZXJgIGhlYWRlciBmaWVsZCBpcyBzcGVjaWFsLWNhc2VkLFxuICogYm90aCBgUmVmZXJyZXJgIGFuZCBgUmVmZXJlcmAgYXJlIGludGVyY2hhbmdlYWJsZS5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgcmVxLmdldCgnQ29udGVudC1UeXBlJyk7XG4gKiAgICAgLy8gPT4gXCJ0ZXh0L3BsYWluXCJcbiAqXG4gKiAgICAgcmVxLmdldCgnY29udGVudC10eXBlJyk7XG4gKiAgICAgLy8gPT4gXCJ0ZXh0L3BsYWluXCJcbiAqXG4gKiAgICAgcmVxLmdldCgnU29tZXRoaW5nJyk7XG4gKiAgICAgLy8gPT4gdW5kZWZpbmVkXG4gKlxuICogQWxpYXNlZCBhcyBgcmVxLmhlYWRlcigpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7U3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbnJlcS5nZXQgPVxucmVxLmhlYWRlciA9IGZ1bmN0aW9uIGhlYWRlcihuYW1lKSB7XG4gIGlmICghbmFtZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25hbWUgYXJndW1lbnQgaXMgcmVxdWlyZWQgdG8gcmVxLmdldCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25hbWUgbXVzdCBiZSBhIHN0cmluZyB0byByZXEuZ2V0Jyk7XG4gIH1cblxuICB2YXIgbGMgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgc3dpdGNoIChsYykge1xuICAgIGNhc2UgJ3JlZmVyZXInOlxuICAgIGNhc2UgJ3JlZmVycmVyJzpcbiAgICAgIHJldHVybiB0aGlzLmhlYWRlcnMucmVmZXJyZXJcbiAgICAgICAgfHwgdGhpcy5oZWFkZXJzLnJlZmVyZXI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0aGlzLmhlYWRlcnNbbGNdO1xuICB9XG59O1xuXG4vKipcbiAqIFRvIGRvOiB1cGRhdGUgZG9jcy5cbiAqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gYHR5cGUocylgIGlzIGFjY2VwdGFibGUsIHJldHVybmluZ1xuICogdGhlIGJlc3QgbWF0Y2ggd2hlbiB0cnVlLCBvdGhlcndpc2UgYHVuZGVmaW5lZGAsIGluIHdoaWNoXG4gKiBjYXNlIHlvdSBzaG91bGQgcmVzcG9uZCB3aXRoIDQwNiBcIk5vdCBBY2NlcHRhYmxlXCIuXG4gKlxuICogVGhlIGB0eXBlYCB2YWx1ZSBtYXkgYmUgYSBzaW5nbGUgTUlNRSB0eXBlIHN0cmluZ1xuICogc3VjaCBhcyBcImFwcGxpY2F0aW9uL2pzb25cIiwgYW4gZXh0ZW5zaW9uIG5hbWVcbiAqIHN1Y2ggYXMgXCJqc29uXCIsIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgc3VjaCBhcyBcImpzb24sIGh0bWwsIHRleHQvcGxhaW5cIixcbiAqIGFuIGFyZ3VtZW50IGxpc3Qgc3VjaCBhcyBgXCJqc29uXCIsIFwiaHRtbFwiLCBcInRleHQvcGxhaW5cImAsXG4gKiBvciBhbiBhcnJheSBgW1wianNvblwiLCBcImh0bWxcIiwgXCJ0ZXh0L3BsYWluXCJdYC4gV2hlbiBhIGxpc3RcbiAqIG9yIGFycmF5IGlzIGdpdmVuLCB0aGUgX2Jlc3RfIG1hdGNoLCBpZiBhbnkgaXMgcmV0dXJuZWQuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgIC8vIEFjY2VwdDogdGV4dC9odG1sXG4gKiAgICAgcmVxLmFjY2VwdHMoJ2h0bWwnKTtcbiAqICAgICAvLyA9PiBcImh0bWxcIlxuICpcbiAqICAgICAvLyBBY2NlcHQ6IHRleHQvKiwgYXBwbGljYXRpb24vanNvblxuICogICAgIHJlcS5hY2NlcHRzKCdodG1sJyk7XG4gKiAgICAgLy8gPT4gXCJodG1sXCJcbiAqICAgICByZXEuYWNjZXB0cygndGV4dC9odG1sJyk7XG4gKiAgICAgLy8gPT4gXCJ0ZXh0L2h0bWxcIlxuICogICAgIHJlcS5hY2NlcHRzKCdqc29uLCB0ZXh0Jyk7XG4gKiAgICAgLy8gPT4gXCJqc29uXCJcbiAqICAgICByZXEuYWNjZXB0cygnYXBwbGljYXRpb24vanNvbicpO1xuICogICAgIC8vID0+IFwiYXBwbGljYXRpb24vanNvblwiXG4gKlxuICogICAgIC8vIEFjY2VwdDogdGV4dC8qLCBhcHBsaWNhdGlvbi9qc29uXG4gKiAgICAgcmVxLmFjY2VwdHMoJ2ltYWdlL3BuZycpO1xuICogICAgIHJlcS5hY2NlcHRzKCdwbmcnKTtcbiAqICAgICAvLyA9PiB1bmRlZmluZWRcbiAqXG4gKiAgICAgLy8gQWNjZXB0OiB0ZXh0Lyo7cT0uNSwgYXBwbGljYXRpb24vanNvblxuICogICAgIHJlcS5hY2NlcHRzKFsnaHRtbCcsICdqc29uJ10pO1xuICogICAgIHJlcS5hY2NlcHRzKCdodG1sJywgJ2pzb24nKTtcbiAqICAgICByZXEuYWNjZXB0cygnaHRtbCwganNvbicpO1xuICogICAgIC8vID0+IFwianNvblwiXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHR5cGUocylcbiAqIEByZXR1cm4ge1N0cmluZ3xBcnJheXxCb29sZWFufVxuICogQHB1YmxpY1xuICovXG5cbnJlcS5hY2NlcHRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGFjY2VwdCA9IGFjY2VwdHModGhpcyk7XG4gIHJldHVybiBhY2NlcHQudHlwZXMuYXBwbHkoYWNjZXB0LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gYGVuY29kaW5nYHMgYXJlIGFjY2VwdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSAuLi5lbmNvZGluZ1xuICogQHJldHVybiB7U3RyaW5nfEFycmF5fVxuICogQHB1YmxpY1xuICovXG5cbnJlcS5hY2NlcHRzRW5jb2RpbmdzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGFjY2VwdCA9IGFjY2VwdHModGhpcyk7XG4gIHJldHVybiBhY2NlcHQuZW5jb2RpbmdzLmFwcGx5KGFjY2VwdCwgYXJndW1lbnRzKTtcbn07XG5cbnJlcS5hY2NlcHRzRW5jb2RpbmcgPSBkZXByZWNhdGUuZnVuY3Rpb24ocmVxLmFjY2VwdHNFbmNvZGluZ3MsXG4gICdyZXEuYWNjZXB0c0VuY29kaW5nOiBVc2UgYWNjZXB0c0VuY29kaW5ncyBpbnN0ZWFkJyk7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGBjaGFyc2V0YHMgYXJlIGFjY2VwdGFibGUsXG4gKiBvdGhlcndpc2UgeW91IHNob3VsZCByZXNwb25kIHdpdGggNDA2IFwiTm90IEFjY2VwdGFibGVcIi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gLi4uY2hhcnNldFxuICogQHJldHVybiB7U3RyaW5nfEFycmF5fVxuICogQHB1YmxpY1xuICovXG5cbnJlcS5hY2NlcHRzQ2hhcnNldHMgPSBmdW5jdGlvbigpe1xuICB2YXIgYWNjZXB0ID0gYWNjZXB0cyh0aGlzKTtcbiAgcmV0dXJuIGFjY2VwdC5jaGFyc2V0cy5hcHBseShhY2NlcHQsIGFyZ3VtZW50cyk7XG59O1xuXG5yZXEuYWNjZXB0c0NoYXJzZXQgPSBkZXByZWNhdGUuZnVuY3Rpb24ocmVxLmFjY2VwdHNDaGFyc2V0cyxcbiAgJ3JlcS5hY2NlcHRzQ2hhcnNldDogVXNlIGFjY2VwdHNDaGFyc2V0cyBpbnN0ZWFkJyk7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGBsYW5nYHMgYXJlIGFjY2VwdGFibGUsXG4gKiBvdGhlcndpc2UgeW91IHNob3VsZCByZXNwb25kIHdpdGggNDA2IFwiTm90IEFjY2VwdGFibGVcIi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gLi4ubGFuZ1xuICogQHJldHVybiB7U3RyaW5nfEFycmF5fVxuICogQHB1YmxpY1xuICovXG5cbnJlcS5hY2NlcHRzTGFuZ3VhZ2VzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGFjY2VwdCA9IGFjY2VwdHModGhpcyk7XG4gIHJldHVybiBhY2NlcHQubGFuZ3VhZ2VzLmFwcGx5KGFjY2VwdCwgYXJndW1lbnRzKTtcbn07XG5cbnJlcS5hY2NlcHRzTGFuZ3VhZ2UgPSBkZXByZWNhdGUuZnVuY3Rpb24ocmVxLmFjY2VwdHNMYW5ndWFnZXMsXG4gICdyZXEuYWNjZXB0c0xhbmd1YWdlOiBVc2UgYWNjZXB0c0xhbmd1YWdlcyBpbnN0ZWFkJyk7XG5cbi8qKlxuICogUGFyc2UgUmFuZ2UgaGVhZGVyIGZpZWxkLCBjYXBwaW5nIHRvIHRoZSBnaXZlbiBgc2l6ZWAuXG4gKlxuICogVW5zcGVjaWZpZWQgcmFuZ2VzIHN1Y2ggYXMgXCIwLVwiIHJlcXVpcmUga25vd2xlZGdlIG9mIHlvdXIgcmVzb3VyY2UgbGVuZ3RoLiBJblxuICogdGhlIGNhc2Ugb2YgYSBieXRlIHJhbmdlIHRoaXMgaXMgb2YgY291cnNlIHRoZSB0b3RhbCBudW1iZXIgb2YgYnl0ZXMuIElmIHRoZVxuICogUmFuZ2UgaGVhZGVyIGZpZWxkIGlzIG5vdCBnaXZlbiBgdW5kZWZpbmVkYCBpcyByZXR1cm5lZCwgYC0xYCB3aGVuIHVuc2F0aXNmaWFibGUsXG4gKiBhbmQgYC0yYCB3aGVuIHN5bnRhY3RpY2FsbHkgaW52YWxpZC5cbiAqXG4gKiBXaGVuIHJhbmdlcyBhcmUgcmV0dXJuZWQsIHRoZSBhcnJheSBoYXMgYSBcInR5cGVcIiBwcm9wZXJ0eSB3aGljaCBpcyB0aGUgdHlwZSBvZlxuICogcmFuZ2UgdGhhdCBpcyByZXF1aXJlZCAobW9zdCBjb21tb25seSwgXCJieXRlc1wiKS4gRWFjaCBhcnJheSBlbGVtZW50IGlzIGFuIG9iamVjdFxuICogd2l0aCBhIFwic3RhcnRcIiBhbmQgXCJlbmRcIiBwcm9wZXJ0eSBmb3IgdGhlIHBvcnRpb24gb2YgdGhlIHJhbmdlLlxuICpcbiAqIFRoZSBcImNvbWJpbmVcIiBvcHRpb24gY2FuIGJlIHNldCB0byBgdHJ1ZWAgYW5kIG92ZXJsYXBwaW5nICYgYWRqYWNlbnQgcmFuZ2VzXG4gKiB3aWxsIGJlIGNvbWJpbmVkIGludG8gYSBzaW5nbGUgcmFuZ2UuXG4gKlxuICogTk9URTogcmVtZW1iZXIgdGhhdCByYW5nZXMgYXJlIGluY2x1c2l2ZSwgc28gZm9yIGV4YW1wbGUgXCJSYW5nZTogdXNlcnM9MC0zXCJcbiAqIHNob3VsZCByZXNwb25kIHdpdGggNCB1c2VycyB3aGVuIGF2YWlsYWJsZSwgbm90IDMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY29tYmluZT1mYWxzZV1cbiAqIEByZXR1cm4ge251bWJlcnxhcnJheX1cbiAqIEBwdWJsaWNcbiAqL1xuXG5yZXEucmFuZ2UgPSBmdW5jdGlvbiByYW5nZShzaXplLCBvcHRpb25zKSB7XG4gIHZhciByYW5nZSA9IHRoaXMuZ2V0KCdSYW5nZScpO1xuICBpZiAoIXJhbmdlKSByZXR1cm47XG4gIHJldHVybiBwYXJzZVJhbmdlKHNpemUsIHJhbmdlLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSB2YWx1ZSBvZiBwYXJhbSBgbmFtZWAgd2hlbiBwcmVzZW50IG9yIGBkZWZhdWx0VmFsdWVgLlxuICpcbiAqICAtIENoZWNrcyByb3V0ZSBwbGFjZWhvbGRlcnMsIGV4OiBfL3VzZXIvOmlkX1xuICogIC0gQ2hlY2tzIGJvZHkgcGFyYW1zLCBleDogaWQ9MTIsIHtcImlkXCI6MTJ9XG4gKiAgLSBDaGVja3MgcXVlcnkgc3RyaW5nIHBhcmFtcywgZXg6ID9pZD0xMlxuICpcbiAqIFRvIHV0aWxpemUgcmVxdWVzdCBib2RpZXMsIGByZXEuYm9keWBcbiAqIHNob3VsZCBiZSBhbiBvYmplY3QuIFRoaXMgY2FuIGJlIGRvbmUgYnkgdXNpbmdcbiAqIHRoZSBgYm9keVBhcnNlcigpYCBtaWRkbGV3YXJlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge01peGVkfSBbZGVmYXVsdFZhbHVlXVxuICogQHJldHVybiB7U3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbnJlcS5wYXJhbSA9IGZ1bmN0aW9uIHBhcmFtKG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcGFyYW1zID0gdGhpcy5wYXJhbXMgfHwge307XG4gIHZhciBib2R5ID0gdGhpcy5ib2R5IHx8IHt9O1xuICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuXG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMVxuICAgID8gJ25hbWUnXG4gICAgOiAnbmFtZSwgZGVmYXVsdCc7XG4gIGRlcHJlY2F0ZSgncmVxLnBhcmFtKCcgKyBhcmdzICsgJyk6IFVzZSByZXEucGFyYW1zLCByZXEuYm9keSwgb3IgcmVxLnF1ZXJ5IGluc3RlYWQnKTtcblxuICBpZiAobnVsbCAhPSBwYXJhbXNbbmFtZV0gJiYgcGFyYW1zLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm4gcGFyYW1zW25hbWVdO1xuICBpZiAobnVsbCAhPSBib2R5W25hbWVdKSByZXR1cm4gYm9keVtuYW1lXTtcbiAgaWYgKG51bGwgIT0gcXVlcnlbbmFtZV0pIHJldHVybiBxdWVyeVtuYW1lXTtcblxuICByZXR1cm4gZGVmYXVsdFZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgaW5jb21pbmcgcmVxdWVzdCBjb250YWlucyB0aGUgXCJDb250ZW50LVR5cGVcIlxuICogaGVhZGVyIGZpZWxkLCBhbmQgaXQgY29udGFpbnMgdGhlIGdpdmUgbWltZSBgdHlwZWAuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAvLyBXaXRoIENvbnRlbnQtVHlwZTogdGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XG4gKiAgICAgIHJlcS5pcygnaHRtbCcpO1xuICogICAgICByZXEuaXMoJ3RleHQvaHRtbCcpO1xuICogICAgICByZXEuaXMoJ3RleHQvKicpO1xuICogICAgICAvLyA9PiB0cnVlXG4gKlxuICogICAgICAvLyBXaGVuIENvbnRlbnQtVHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gKiAgICAgIHJlcS5pcygnanNvbicpO1xuICogICAgICByZXEuaXMoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAqICAgICAgcmVxLmlzKCdhcHBsaWNhdGlvbi8qJyk7XG4gKiAgICAgIC8vID0+IHRydWVcbiAqXG4gKiAgICAgIHJlcS5pcygnaHRtbCcpO1xuICogICAgICAvLyA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSB0eXBlcy4uLlxuICogQHJldHVybiB7U3RyaW5nfGZhbHNlfG51bGx9XG4gKiBAcHVibGljXG4gKi9cblxucmVxLmlzID0gZnVuY3Rpb24gaXModHlwZXMpIHtcbiAgdmFyIGFyciA9IHR5cGVzO1xuXG4gIC8vIHN1cHBvcnQgZmxhdHRlbmVkIGFyZ3VtZW50c1xuICBpZiAoIUFycmF5LmlzQXJyYXkodHlwZXMpKSB7XG4gICAgYXJyID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnJbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVpcyh0aGlzLCBhcnIpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIHByb3RvY29sIHN0cmluZyBcImh0dHBcIiBvciBcImh0dHBzXCJcbiAqIHdoZW4gcmVxdWVzdGVkIHdpdGggVExTLiBXaGVuIHRoZSBcInRydXN0IHByb3h5XCJcbiAqIHNldHRpbmcgdHJ1c3RzIHRoZSBzb2NrZXQgYWRkcmVzcywgdGhlXG4gKiBcIlgtRm9yd2FyZGVkLVByb3RvXCIgaGVhZGVyIGZpZWxkIHdpbGwgYmUgdHJ1c3RlZFxuICogYW5kIHVzZWQgaWYgcHJlc2VudC5cbiAqXG4gKiBJZiB5b3UncmUgcnVubmluZyBiZWhpbmQgYSByZXZlcnNlIHByb3h5IHRoYXRcbiAqIHN1cHBsaWVzIGh0dHBzIGZvciB5b3UgdGhpcyBtYXkgYmUgZW5hYmxlZC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZGVmaW5lR2V0dGVyKHJlcSwgJ3Byb3RvY29sJywgZnVuY3Rpb24gcHJvdG9jb2woKXtcbiAgdmFyIHByb3RvID0gdGhpcy5jb25uZWN0aW9uLmVuY3J5cHRlZFxuICAgID8gJ2h0dHBzJ1xuICAgIDogJ2h0dHAnO1xuICB2YXIgdHJ1c3QgPSB0aGlzLmFwcC5nZXQoJ3RydXN0IHByb3h5IGZuJyk7XG5cbiAgaWYgKCF0cnVzdCh0aGlzLmNvbm5lY3Rpb24ucmVtb3RlQWRkcmVzcywgMCkpIHtcbiAgICByZXR1cm4gcHJvdG87XG4gIH1cblxuICAvLyBOb3RlOiBYLUZvcndhcmRlZC1Qcm90byBpcyBub3JtYWxseSBvbmx5IGV2ZXIgYVxuICAvLyAgICAgICBzaW5nbGUgdmFsdWUsIGJ1dCB0aGlzIGlzIHRvIGJlIHNhZmUuXG4gIHZhciBoZWFkZXIgPSB0aGlzLmdldCgnWC1Gb3J3YXJkZWQtUHJvdG8nKSB8fCBwcm90b1xuICB2YXIgaW5kZXggPSBoZWFkZXIuaW5kZXhPZignLCcpXG5cbiAgcmV0dXJuIGluZGV4ICE9PSAtMVxuICAgID8gaGVhZGVyLnN1YnN0cmluZygwLCBpbmRleCkudHJpbSgpXG4gICAgOiBoZWFkZXIudHJpbSgpXG59KTtcblxuLyoqXG4gKiBTaG9ydC1oYW5kIGZvcjpcbiAqXG4gKiAgICByZXEucHJvdG9jb2wgPT09ICdodHRwcydcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHB1YmxpY1xuICovXG5cbmRlZmluZUdldHRlcihyZXEsICdzZWN1cmUnLCBmdW5jdGlvbiBzZWN1cmUoKXtcbiAgcmV0dXJuIHRoaXMucHJvdG9jb2wgPT09ICdodHRwcyc7XG59KTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIHJlbW90ZSBhZGRyZXNzIGZyb20gdGhlIHRydXN0ZWQgcHJveHkuXG4gKlxuICogVGhlIGlzIHRoZSByZW1vdGUgYWRkcmVzcyBvbiB0aGUgc29ja2V0IHVubGVzc1xuICogXCJ0cnVzdCBwcm94eVwiIGlzIHNldC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZGVmaW5lR2V0dGVyKHJlcSwgJ2lwJywgZnVuY3Rpb24gaXAoKXtcbiAgdmFyIHRydXN0ID0gdGhpcy5hcHAuZ2V0KCd0cnVzdCBwcm94eSBmbicpO1xuICByZXR1cm4gcHJveHlhZGRyKHRoaXMsIHRydXN0KTtcbn0pO1xuXG4vKipcbiAqIFdoZW4gXCJ0cnVzdCBwcm94eVwiIGlzIHNldCwgdHJ1c3RlZCBwcm94eSBhZGRyZXNzZXMgKyBjbGllbnQuXG4gKlxuICogRm9yIGV4YW1wbGUgaWYgdGhlIHZhbHVlIHdlcmUgXCJjbGllbnQsIHByb3h5MSwgcHJveHkyXCJcbiAqIHlvdSB3b3VsZCByZWNlaXZlIHRoZSBhcnJheSBgW1wiY2xpZW50XCIsIFwicHJveHkxXCIsIFwicHJveHkyXCJdYFxuICogd2hlcmUgXCJwcm94eTJcIiBpcyB0aGUgZnVydGhlc3QgZG93bi1zdHJlYW0gYW5kIFwicHJveHkxXCIgYW5kXG4gKiBcInByb3h5MlwiIHdlcmUgdHJ1c3RlZC5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBwdWJsaWNcbiAqL1xuXG5kZWZpbmVHZXR0ZXIocmVxLCAnaXBzJywgZnVuY3Rpb24gaXBzKCkge1xuICB2YXIgdHJ1c3QgPSB0aGlzLmFwcC5nZXQoJ3RydXN0IHByb3h5IGZuJyk7XG4gIHZhciBhZGRycyA9IHByb3h5YWRkci5hbGwodGhpcywgdHJ1c3QpO1xuXG4gIC8vIHJldmVyc2UgdGhlIG9yZGVyICh0byBmYXJ0aGVzdCAtPiBjbG9zZXN0KVxuICAvLyBhbmQgcmVtb3ZlIHNvY2tldCBhZGRyZXNzXG4gIGFkZHJzLnJldmVyc2UoKS5wb3AoKVxuXG4gIHJldHVybiBhZGRyc1xufSk7XG5cbi8qKlxuICogUmV0dXJuIHN1YmRvbWFpbnMgYXMgYW4gYXJyYXkuXG4gKlxuICogU3ViZG9tYWlucyBhcmUgdGhlIGRvdC1zZXBhcmF0ZWQgcGFydHMgb2YgdGhlIGhvc3QgYmVmb3JlIHRoZSBtYWluIGRvbWFpbiBvZlxuICogdGhlIGFwcC4gQnkgZGVmYXVsdCwgdGhlIGRvbWFpbiBvZiB0aGUgYXBwIGlzIGFzc3VtZWQgdG8gYmUgdGhlIGxhc3QgdHdvXG4gKiBwYXJ0cyBvZiB0aGUgaG9zdC4gVGhpcyBjYW4gYmUgY2hhbmdlZCBieSBzZXR0aW5nIFwic3ViZG9tYWluIG9mZnNldFwiLlxuICpcbiAqIEZvciBleGFtcGxlLCBpZiB0aGUgZG9tYWluIGlzIFwidG9iaS5mZXJyZXRzLmV4YW1wbGUuY29tXCI6XG4gKiBJZiBcInN1YmRvbWFpbiBvZmZzZXRcIiBpcyBub3Qgc2V0LCByZXEuc3ViZG9tYWlucyBpcyBgW1wiZmVycmV0c1wiLCBcInRvYmlcIl1gLlxuICogSWYgXCJzdWJkb21haW4gb2Zmc2V0XCIgaXMgMywgcmVxLnN1YmRvbWFpbnMgaXMgYFtcInRvYmlcIl1gLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5cbmRlZmluZUdldHRlcihyZXEsICdzdWJkb21haW5zJywgZnVuY3Rpb24gc3ViZG9tYWlucygpIHtcbiAgdmFyIGhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZTtcblxuICBpZiAoIWhvc3RuYW1lKSByZXR1cm4gW107XG5cbiAgdmFyIG9mZnNldCA9IHRoaXMuYXBwLmdldCgnc3ViZG9tYWluIG9mZnNldCcpO1xuICB2YXIgc3ViZG9tYWlucyA9ICFpc0lQKGhvc3RuYW1lKVxuICAgID8gaG9zdG5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKClcbiAgICA6IFtob3N0bmFtZV07XG5cbiAgcmV0dXJuIHN1YmRvbWFpbnMuc2xpY2Uob2Zmc2V0KTtcbn0pO1xuXG4vKipcbiAqIFNob3J0LWhhbmQgZm9yIGB1cmwucGFyc2UocmVxLnVybCkucGF0aG5hbWVgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5kZWZpbmVHZXR0ZXIocmVxLCAncGF0aCcsIGZ1bmN0aW9uIHBhdGgoKSB7XG4gIHJldHVybiBwYXJzZSh0aGlzKS5wYXRobmFtZTtcbn0pO1xuXG4vKipcbiAqIFBhcnNlIHRoZSBcIkhvc3RcIiBoZWFkZXIgZmllbGQgdG8gYSBob3N0bmFtZS5cbiAqXG4gKiBXaGVuIHRoZSBcInRydXN0IHByb3h5XCIgc2V0dGluZyB0cnVzdHMgdGhlIHNvY2tldFxuICogYWRkcmVzcywgdGhlIFwiWC1Gb3J3YXJkZWQtSG9zdFwiIGhlYWRlciBmaWVsZCB3aWxsXG4gKiBiZSB0cnVzdGVkLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5kZWZpbmVHZXR0ZXIocmVxLCAnaG9zdG5hbWUnLCBmdW5jdGlvbiBob3N0bmFtZSgpe1xuICB2YXIgdHJ1c3QgPSB0aGlzLmFwcC5nZXQoJ3RydXN0IHByb3h5IGZuJyk7XG4gIHZhciBob3N0ID0gdGhpcy5nZXQoJ1gtRm9yd2FyZGVkLUhvc3QnKTtcblxuICBpZiAoIWhvc3QgfHwgIXRydXN0KHRoaXMuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzLCAwKSkge1xuICAgIGhvc3QgPSB0aGlzLmdldCgnSG9zdCcpO1xuICB9IGVsc2UgaWYgKGhvc3QuaW5kZXhPZignLCcpICE9PSAtMSkge1xuICAgIC8vIE5vdGU6IFgtRm9yd2FyZGVkLUhvc3QgaXMgbm9ybWFsbHkgb25seSBldmVyIGFcbiAgICAvLyAgICAgICBzaW5nbGUgdmFsdWUsIGJ1dCB0aGlzIGlzIHRvIGJlIHNhZmUuXG4gICAgaG9zdCA9IGhvc3Quc3Vic3RyaW5nKDAsIGhvc3QuaW5kZXhPZignLCcpKS50cmltUmlnaHQoKVxuICB9XG5cbiAgaWYgKCFob3N0KSByZXR1cm47XG5cbiAgLy8gSVB2NiBsaXRlcmFsIHN1cHBvcnRcbiAgdmFyIG9mZnNldCA9IGhvc3RbMF0gPT09ICdbJ1xuICAgID8gaG9zdC5pbmRleE9mKCddJykgKyAxXG4gICAgOiAwO1xuICB2YXIgaW5kZXggPSBob3N0LmluZGV4T2YoJzonLCBvZmZzZXQpO1xuXG4gIHJldHVybiBpbmRleCAhPT0gLTFcbiAgICA/IGhvc3Quc3Vic3RyaW5nKDAsIGluZGV4KVxuICAgIDogaG9zdDtcbn0pO1xuXG4vLyBUT0RPOiBjaGFuZ2UgcmVxLmhvc3QgdG8gcmV0dXJuIGhvc3QgaW4gbmV4dCBtYWpvclxuXG5kZWZpbmVHZXR0ZXIocmVxLCAnaG9zdCcsIGRlcHJlY2F0ZS5mdW5jdGlvbihmdW5jdGlvbiBob3N0KCl7XG4gIHJldHVybiB0aGlzLmhvc3RuYW1lO1xufSwgJ3JlcS5ob3N0OiBVc2UgcmVxLmhvc3RuYW1lIGluc3RlYWQnKSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHJlcXVlc3QgaXMgZnJlc2gsIGFrYVxuICogTGFzdC1Nb2RpZmllZCBhbmQvb3IgdGhlIEVUYWdcbiAqIHN0aWxsIG1hdGNoLlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHVibGljXG4gKi9cblxuZGVmaW5lR2V0dGVyKHJlcSwgJ2ZyZXNoJywgZnVuY3Rpb24oKXtcbiAgdmFyIG1ldGhvZCA9IHRoaXMubWV0aG9kO1xuICB2YXIgcmVzID0gdGhpcy5yZXNcbiAgdmFyIHN0YXR1cyA9IHJlcy5zdGF0dXNDb2RlXG5cbiAgLy8gR0VUIG9yIEhFQUQgZm9yIHdlYWsgZnJlc2huZXNzIHZhbGlkYXRpb24gb25seVxuICBpZiAoJ0dFVCcgIT09IG1ldGhvZCAmJiAnSEVBRCcgIT09IG1ldGhvZCkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIDJ4eCBvciAzMDQgYXMgcGVyIHJmYzI2MTYgMTQuMjZcbiAgaWYgKChzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCkgfHwgMzA0ID09PSBzdGF0dXMpIHtcbiAgICByZXR1cm4gZnJlc2godGhpcy5oZWFkZXJzLCB7XG4gICAgICAnZXRhZyc6IHJlcy5nZXQoJ0VUYWcnKSxcbiAgICAgICdsYXN0LW1vZGlmaWVkJzogcmVzLmdldCgnTGFzdC1Nb2RpZmllZCcpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0pO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSByZXF1ZXN0IGlzIHN0YWxlLCBha2FcbiAqIFwiTGFzdC1Nb2RpZmllZFwiIGFuZCAvIG9yIHRoZSBcIkVUYWdcIiBmb3IgdGhlXG4gKiByZXNvdXJjZSBoYXMgY2hhbmdlZC5cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHB1YmxpY1xuICovXG5cbmRlZmluZUdldHRlcihyZXEsICdzdGFsZScsIGZ1bmN0aW9uIHN0YWxlKCl7XG4gIHJldHVybiAhdGhpcy5mcmVzaDtcbn0pO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSByZXF1ZXN0IHdhcyBhbiBfWE1MSHR0cFJlcXVlc3RfLlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHVibGljXG4gKi9cblxuZGVmaW5lR2V0dGVyKHJlcSwgJ3hocicsIGZ1bmN0aW9uIHhocigpe1xuICB2YXIgdmFsID0gdGhpcy5nZXQoJ1gtUmVxdWVzdGVkLVdpdGgnKSB8fCAnJztcbiAgcmV0dXJuIHZhbC50b0xvd2VyQ2FzZSgpID09PSAneG1saHR0cHJlcXVlc3QnO1xufSk7XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIGdldHRlciBvbiBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGdldHRlclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVmaW5lR2V0dGVyKG9iaiwgbmFtZSwgZ2V0dGVyKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldHRlclxuICB9KTtcbn1cbiIsIi8qIVxuICogZXhwcmVzc1xuICogQ29weXJpZ2h0KGMpIDIwMDktMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTQtMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxudmFyIGNvbnRlbnREaXNwb3NpdGlvbiA9IHJlcXVpcmUoJ2NvbnRlbnQtZGlzcG9zaXRpb24nKTtcbnZhciBkZXByZWNhdGUgPSByZXF1aXJlKCdkZXBkJykoJ2V4cHJlc3MnKTtcbnZhciBlbmNvZGVVcmwgPSByZXF1aXJlKCdlbmNvZGV1cmwnKTtcbnZhciBlc2NhcGVIdG1sID0gcmVxdWlyZSgnZXNjYXBlLWh0bWwnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xudmFyIGlzQWJzb2x1dGUgPSByZXF1aXJlKCcuL3V0aWxzJykuaXNBYnNvbHV0ZTtcbnZhciBvbkZpbmlzaGVkID0gcmVxdWlyZSgnb24tZmluaXNoZWQnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIHN0YXR1c2VzID0gcmVxdWlyZSgnc3RhdHVzZXMnKVxudmFyIG1lcmdlID0gcmVxdWlyZSgndXRpbHMtbWVyZ2UnKTtcbnZhciBzaWduID0gcmVxdWlyZSgnY29va2llLXNpZ25hdHVyZScpLnNpZ247XG52YXIgbm9ybWFsaXplVHlwZSA9IHJlcXVpcmUoJy4vdXRpbHMnKS5ub3JtYWxpemVUeXBlO1xudmFyIG5vcm1hbGl6ZVR5cGVzID0gcmVxdWlyZSgnLi91dGlscycpLm5vcm1hbGl6ZVR5cGVzO1xudmFyIHNldENoYXJzZXQgPSByZXF1aXJlKCcuL3V0aWxzJykuc2V0Q2hhcnNldDtcbnZhciBjb29raWUgPSByZXF1aXJlKCdjb29raWUnKTtcbnZhciBzZW5kID0gcmVxdWlyZSgnc2VuZCcpO1xudmFyIGV4dG5hbWUgPSBwYXRoLmV4dG5hbWU7XG52YXIgbWltZSA9IHNlbmQubWltZTtcbnZhciByZXNvbHZlID0gcGF0aC5yZXNvbHZlO1xudmFyIHZhcnkgPSByZXF1aXJlKCd2YXJ5Jyk7XG5cbi8qKlxuICogUmVzcG9uc2UgcHJvdG90eXBlLlxuICogQHB1YmxpY1xuICovXG5cbnZhciByZXMgPSBPYmplY3QuY3JlYXRlKGh0dHAuU2VydmVyUmVzcG9uc2UucHJvdG90eXBlKVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVzXG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGNoYXJzZXRSZWdFeHAgPSAvO1xccypjaGFyc2V0XFxzKj0vO1xuXG4vKipcbiAqIFNldCBzdGF0dXMgYGNvZGVgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlXG4gKiBAcmV0dXJuIHtTZXJ2ZXJSZXNwb25zZX1cbiAqIEBwdWJsaWNcbiAqL1xuXG5yZXMuc3RhdHVzID0gZnVuY3Rpb24gc3RhdHVzKGNvZGUpIHtcbiAgdGhpcy5zdGF0dXNDb2RlID0gY29kZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBMaW5rIGhlYWRlciBmaWVsZCB3aXRoIHRoZSBnaXZlbiBgbGlua3NgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgIHJlcy5saW5rcyh7XG4gKiAgICAgIG5leHQ6ICdodHRwOi8vYXBpLmV4YW1wbGUuY29tL3VzZXJzP3BhZ2U9MicsXG4gKiAgICAgIGxhc3Q6ICdodHRwOi8vYXBpLmV4YW1wbGUuY29tL3VzZXJzP3BhZ2U9NSdcbiAqICAgIH0pO1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBsaW5rc1xuICogQHJldHVybiB7U2VydmVyUmVzcG9uc2V9XG4gKiBAcHVibGljXG4gKi9cblxucmVzLmxpbmtzID0gZnVuY3Rpb24obGlua3Mpe1xuICB2YXIgbGluayA9IHRoaXMuZ2V0KCdMaW5rJykgfHwgJyc7XG4gIGlmIChsaW5rKSBsaW5rICs9ICcsICc7XG4gIHJldHVybiB0aGlzLnNldCgnTGluaycsIGxpbmsgKyBPYmplY3Qua2V5cyhsaW5rcykubWFwKGZ1bmN0aW9uKHJlbCl7XG4gICAgcmV0dXJuICc8JyArIGxpbmtzW3JlbF0gKyAnPjsgcmVsPVwiJyArIHJlbCArICdcIic7XG4gIH0pLmpvaW4oJywgJykpO1xufTtcblxuLyoqXG4gKiBTZW5kIGEgcmVzcG9uc2UuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgIHJlcy5zZW5kKEJ1ZmZlci5mcm9tKCd3YWhvbycpKTtcbiAqICAgICByZXMuc2VuZCh7IHNvbWU6ICdqc29uJyB9KTtcbiAqICAgICByZXMuc2VuZCgnPHA+c29tZSBodG1sPC9wPicpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxib29sZWFufG9iamVjdHxCdWZmZXJ9IGJvZHlcbiAqIEBwdWJsaWNcbiAqL1xuXG5yZXMuc2VuZCA9IGZ1bmN0aW9uIHNlbmQoYm9keSkge1xuICB2YXIgY2h1bmsgPSBib2R5O1xuICB2YXIgZW5jb2Rpbmc7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIHR5cGU7XG5cbiAgLy8gc2V0dGluZ3NcbiAgdmFyIGFwcCA9IHRoaXMuYXBwO1xuXG4gIC8vIGFsbG93IHN0YXR1cyAvIGJvZHlcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAvLyByZXMuc2VuZChib2R5LCBzdGF0dXMpIGJhY2t3YXJkcyBjb21wYXRcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ251bWJlcicgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGRlcHJlY2F0ZSgncmVzLnNlbmQoYm9keSwgc3RhdHVzKTogVXNlIHJlcy5zdGF0dXMoc3RhdHVzKS5zZW5kKGJvZHkpIGluc3RlYWQnKTtcbiAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IGFyZ3VtZW50c1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVwcmVjYXRlKCdyZXMuc2VuZChzdGF0dXMsIGJvZHkpOiBVc2UgcmVzLnN0YXR1cyhzdGF0dXMpLnNlbmQoYm9keSkgaW5zdGVhZCcpO1xuICAgICAgdGhpcy5zdGF0dXNDb2RlID0gYXJndW1lbnRzWzBdO1xuICAgICAgY2h1bmsgPSBhcmd1bWVudHNbMV07XG4gICAgfVxuICB9XG5cbiAgLy8gZGlzYW1iaWd1YXRlIHJlcy5zZW5kKHN0YXR1cykgYW5kIHJlcy5zZW5kKHN0YXR1cywgbnVtKVxuICBpZiAodHlwZW9mIGNodW5rID09PSAnbnVtYmVyJyAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gcmVzLnNlbmQoc3RhdHVzKSB3aWxsIHNldCBzdGF0dXMgbWVzc2FnZSBhcyB0ZXh0IHN0cmluZ1xuICAgIGlmICghdGhpcy5nZXQoJ0NvbnRlbnQtVHlwZScpKSB7XG4gICAgICB0aGlzLnR5cGUoJ3R4dCcpO1xuICAgIH1cblxuICAgIGRlcHJlY2F0ZSgncmVzLnNlbmQoc3RhdHVzKTogVXNlIHJlcy5zZW5kU3RhdHVzKHN0YXR1cykgaW5zdGVhZCcpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IGNodW5rO1xuICAgIGNodW5rID0gc3RhdHVzZXNbY2h1bmtdXG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBjaHVuaykge1xuICAgIC8vIHN0cmluZyBkZWZhdWx0aW5nIHRvIGh0bWxcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgaWYgKCF0aGlzLmdldCgnQ29udGVudC1UeXBlJykpIHtcbiAgICAgICAgdGhpcy50eXBlKCdodG1sJyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoY2h1bmsgPT09IG51bGwpIHtcbiAgICAgICAgY2h1bmsgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0KCdDb250ZW50LVR5cGUnKSkge1xuICAgICAgICAgIHRoaXMudHlwZSgnYmluJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmpzb24oY2h1bmspO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxuICAvLyB3cml0ZSBzdHJpbmdzIGluIHV0Zi04XG4gIGlmICh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCc7XG4gICAgdHlwZSA9IHRoaXMuZ2V0KCdDb250ZW50LVR5cGUnKTtcblxuICAgIC8vIHJlZmxlY3QgdGhpcyBpbiBjb250ZW50LXR5cGVcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgc2V0Q2hhcnNldCh0eXBlLCAndXRmLTgnKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIGlmIEVUYWcgc2hvdWxkIGJlIGdlbmVyYXRlZFxuICB2YXIgZXRhZ0ZuID0gYXBwLmdldCgnZXRhZyBmbicpXG4gIHZhciBnZW5lcmF0ZUVUYWcgPSAhdGhpcy5nZXQoJ0VUYWcnKSAmJiB0eXBlb2YgZXRhZ0ZuID09PSAnZnVuY3Rpb24nXG5cbiAgLy8gcG9wdWxhdGUgQ29udGVudC1MZW5ndGhcbiAgdmFyIGxlblxuICBpZiAoY2h1bmsgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoY2h1bmspKSB7XG4gICAgICAvLyBnZXQgbGVuZ3RoIG9mIEJ1ZmZlclxuICAgICAgbGVuID0gY2h1bmsubGVuZ3RoXG4gICAgfSBlbHNlIGlmICghZ2VuZXJhdGVFVGFnICYmIGNodW5rLmxlbmd0aCA8IDEwMDApIHtcbiAgICAgIC8vIGp1c3QgY2FsY3VsYXRlIGxlbmd0aCB3aGVuIG5vIEVUYWcgKyBzbWFsbCBjaHVua1xuICAgICAgbGVuID0gQnVmZmVyLmJ5dGVMZW5ndGgoY2h1bmssIGVuY29kaW5nKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb252ZXJ0IGNodW5rIHRvIEJ1ZmZlciBhbmQgY2FsY3VsYXRlXG4gICAgICBjaHVuayA9IEJ1ZmZlci5mcm9tKGNodW5rLCBlbmNvZGluZylcbiAgICAgIGVuY29kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgbGVuID0gY2h1bmsubGVuZ3RoXG4gICAgfVxuXG4gICAgdGhpcy5zZXQoJ0NvbnRlbnQtTGVuZ3RoJywgbGVuKTtcbiAgfVxuXG4gIC8vIHBvcHVsYXRlIEVUYWdcbiAgdmFyIGV0YWc7XG4gIGlmIChnZW5lcmF0ZUVUYWcgJiYgbGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoKGV0YWcgPSBldGFnRm4oY2h1bmssIGVuY29kaW5nKSkpIHtcbiAgICAgIHRoaXMuc2V0KCdFVGFnJywgZXRhZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnJlc2huZXNzXG4gIGlmIChyZXEuZnJlc2gpIHRoaXMuc3RhdHVzQ29kZSA9IDMwNDtcblxuICAvLyBzdHJpcCBpcnJlbGV2YW50IGhlYWRlcnNcbiAgaWYgKDIwNCA9PT0gdGhpcy5zdGF0dXNDb2RlIHx8IDMwNCA9PT0gdGhpcy5zdGF0dXNDb2RlKSB7XG4gICAgdGhpcy5yZW1vdmVIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIHRoaXMucmVtb3ZlSGVhZGVyKCdDb250ZW50LUxlbmd0aCcpO1xuICAgIHRoaXMucmVtb3ZlSGVhZGVyKCdUcmFuc2Zlci1FbmNvZGluZycpO1xuICAgIGNodW5rID0gJyc7XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0hFQUQnKSB7XG4gICAgLy8gc2tpcCBib2R5IGZvciBIRUFEXG4gICAgdGhpcy5lbmQoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZXNwb25kXG4gICAgdGhpcy5lbmQoY2h1bmssIGVuY29kaW5nKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kIEpTT04gcmVzcG9uc2UuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgIHJlcy5qc29uKG51bGwpO1xuICogICAgIHJlcy5qc29uKHsgdXNlcjogJ3RqJyB9KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8Ym9vbGVhbnxvYmplY3R9IG9ialxuICogQHB1YmxpY1xuICovXG5cbnJlcy5qc29uID0gZnVuY3Rpb24ganNvbihvYmopIHtcbiAgdmFyIHZhbCA9IG9iajtcblxuICAvLyBhbGxvdyBzdGF0dXMgLyBib2R5XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgLy8gcmVzLmpzb24oYm9keSwgc3RhdHVzKSBiYWNrd2FyZHMgY29tcGF0XG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdudW1iZXInKSB7XG4gICAgICBkZXByZWNhdGUoJ3Jlcy5qc29uKG9iaiwgc3RhdHVzKTogVXNlIHJlcy5zdGF0dXMoc3RhdHVzKS5qc29uKG9iaikgaW5zdGVhZCcpO1xuICAgICAgdGhpcy5zdGF0dXNDb2RlID0gYXJndW1lbnRzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXByZWNhdGUoJ3Jlcy5qc29uKHN0YXR1cywgb2JqKTogVXNlIHJlcy5zdGF0dXMoc3RhdHVzKS5qc29uKG9iaikgaW5zdGVhZCcpO1xuICAgICAgdGhpcy5zdGF0dXNDb2RlID0gYXJndW1lbnRzWzBdO1xuICAgICAgdmFsID0gYXJndW1lbnRzWzFdO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldHRpbmdzXG4gIHZhciBhcHAgPSB0aGlzLmFwcDtcbiAgdmFyIGVzY2FwZSA9IGFwcC5nZXQoJ2pzb24gZXNjYXBlJylcbiAgdmFyIHJlcGxhY2VyID0gYXBwLmdldCgnanNvbiByZXBsYWNlcicpO1xuICB2YXIgc3BhY2VzID0gYXBwLmdldCgnanNvbiBzcGFjZXMnKTtcbiAgdmFyIGJvZHkgPSBzdHJpbmdpZnkodmFsLCByZXBsYWNlciwgc3BhY2VzLCBlc2NhcGUpXG5cbiAgLy8gY29udGVudC10eXBlXG4gIGlmICghdGhpcy5nZXQoJ0NvbnRlbnQtVHlwZScpKSB7XG4gICAgdGhpcy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5zZW5kKGJvZHkpO1xufTtcblxuLyoqXG4gKiBTZW5kIEpTT04gcmVzcG9uc2Ugd2l0aCBKU09OUCBjYWxsYmFjayBzdXBwb3J0LlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICByZXMuanNvbnAobnVsbCk7XG4gKiAgICAgcmVzLmpzb25wKHsgdXNlcjogJ3RqJyB9KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8Ym9vbGVhbnxvYmplY3R9IG9ialxuICogQHB1YmxpY1xuICovXG5cbnJlcy5qc29ucCA9IGZ1bmN0aW9uIGpzb25wKG9iaikge1xuICB2YXIgdmFsID0gb2JqO1xuXG4gIC8vIGFsbG93IHN0YXR1cyAvIGJvZHlcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAvLyByZXMuanNvbihib2R5LCBzdGF0dXMpIGJhY2t3YXJkcyBjb21wYXRcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGRlcHJlY2F0ZSgncmVzLmpzb25wKG9iaiwgc3RhdHVzKTogVXNlIHJlcy5zdGF0dXMoc3RhdHVzKS5qc29uKG9iaikgaW5zdGVhZCcpO1xuICAgICAgdGhpcy5zdGF0dXNDb2RlID0gYXJndW1lbnRzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXByZWNhdGUoJ3Jlcy5qc29ucChzdGF0dXMsIG9iaik6IFVzZSByZXMuc3RhdHVzKHN0YXR1cykuanNvbnAob2JqKSBpbnN0ZWFkJyk7XG4gICAgICB0aGlzLnN0YXR1c0NvZGUgPSBhcmd1bWVudHNbMF07XG4gICAgICB2YWwgPSBhcmd1bWVudHNbMV07XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0dGluZ3NcbiAgdmFyIGFwcCA9IHRoaXMuYXBwO1xuICB2YXIgZXNjYXBlID0gYXBwLmdldCgnanNvbiBlc2NhcGUnKVxuICB2YXIgcmVwbGFjZXIgPSBhcHAuZ2V0KCdqc29uIHJlcGxhY2VyJyk7XG4gIHZhciBzcGFjZXMgPSBhcHAuZ2V0KCdqc29uIHNwYWNlcycpO1xuICB2YXIgYm9keSA9IHN0cmluZ2lmeSh2YWwsIHJlcGxhY2VyLCBzcGFjZXMsIGVzY2FwZSlcbiAgdmFyIGNhbGxiYWNrID0gdGhpcy5yZXEucXVlcnlbYXBwLmdldCgnanNvbnAgY2FsbGJhY2sgbmFtZScpXTtcblxuICAvLyBjb250ZW50LXR5cGVcbiAgaWYgKCF0aGlzLmdldCgnQ29udGVudC1UeXBlJykpIHtcbiAgICB0aGlzLnNldCgnWC1Db250ZW50LVR5cGUtT3B0aW9ucycsICdub3NuaWZmJyk7XG4gICAgdGhpcy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIH1cblxuICAvLyBmaXh1cCBjYWxsYmFja1xuICBpZiAoQXJyYXkuaXNBcnJheShjYWxsYmFjaykpIHtcbiAgICBjYWxsYmFjayA9IGNhbGxiYWNrWzBdO1xuICB9XG5cbiAgLy8ganNvbnBcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ3N0cmluZycgJiYgY2FsbGJhY2subGVuZ3RoICE9PSAwKSB7XG4gICAgdGhpcy5zZXQoJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnLCAnbm9zbmlmZicpO1xuICAgIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG5cbiAgICAvLyByZXN0cmljdCBjYWxsYmFjayBjaGFyc2V0XG4gICAgY2FsbGJhY2sgPSBjYWxsYmFjay5yZXBsYWNlKC9bXlxcW1xcXVxcdyQuXS9nLCAnJyk7XG5cbiAgICAvLyByZXBsYWNlIGNoYXJzIG5vdCBhbGxvd2VkIGluIEphdmFTY3JpcHQgdGhhdCBhcmUgaW4gSlNPTlxuICAgIGJvZHkgPSBib2R5XG4gICAgICAucmVwbGFjZSgvXFx1MjAyOC9nLCAnXFxcXHUyMDI4JylcbiAgICAgIC5yZXBsYWNlKC9cXHUyMDI5L2csICdcXFxcdTIwMjknKTtcblxuICAgIC8vIHRoZSAvKiovIGlzIGEgc3BlY2lmaWMgc2VjdXJpdHkgbWl0aWdhdGlvbiBmb3IgXCJSb3NldHRhIEZsYXNoIEpTT05QIGFidXNlXCJcbiAgICAvLyB0aGUgdHlwZW9mIGNoZWNrIGlzIGp1c3QgdG8gcmVkdWNlIGNsaWVudCBlcnJvciBub2lzZVxuICAgIGJvZHkgPSAnLyoqLyB0eXBlb2YgJyArIGNhbGxiYWNrICsgJyA9PT0gXFwnZnVuY3Rpb25cXCcgJiYgJyArIGNhbGxiYWNrICsgJygnICsgYm9keSArICcpOyc7XG4gIH1cblxuICByZXR1cm4gdGhpcy5zZW5kKGJvZHkpO1xufTtcblxuLyoqXG4gKiBTZW5kIGdpdmVuIEhUVFAgc3RhdHVzIGNvZGUuXG4gKlxuICogU2V0cyB0aGUgcmVzcG9uc2Ugc3RhdHVzIHRvIGBzdGF0dXNDb2RlYCBhbmQgdGhlIGJvZHkgb2YgdGhlXG4gKiByZXNwb25zZSB0byB0aGUgc3RhbmRhcmQgZGVzY3JpcHRpb24gZnJvbSBub2RlJ3MgaHR0cC5TVEFUVVNfQ09ERVNcbiAqIG9yIHRoZSBzdGF0dXNDb2RlIG51bWJlciBpZiBubyBkZXNjcmlwdGlvbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzQ29kZVxuICogQHB1YmxpY1xuICovXG5cbnJlcy5zZW5kU3RhdHVzID0gZnVuY3Rpb24gc2VuZFN0YXR1cyhzdGF0dXNDb2RlKSB7XG4gIHZhciBib2R5ID0gc3RhdHVzZXNbc3RhdHVzQ29kZV0gfHwgU3RyaW5nKHN0YXR1c0NvZGUpXG5cbiAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgdGhpcy50eXBlKCd0eHQnKTtcblxuICByZXR1cm4gdGhpcy5zZW5kKGJvZHkpO1xufTtcblxuLyoqXG4gKiBUcmFuc2ZlciB0aGUgZmlsZSBhdCB0aGUgZ2l2ZW4gYHBhdGhgLlxuICpcbiAqIEF1dG9tYXRpY2FsbHkgc2V0cyB0aGUgX0NvbnRlbnQtVHlwZV8gcmVzcG9uc2UgaGVhZGVyIGZpZWxkLlxuICogVGhlIGNhbGxiYWNrIGBjYWxsYmFjayhlcnIpYCBpcyBpbnZva2VkIHdoZW4gdGhlIHRyYW5zZmVyIGlzIGNvbXBsZXRlXG4gKiBvciB3aGVuIGFuIGVycm9yIG9jY3Vycy4gQmUgc3VyZSB0byBjaGVjayBgcmVzLnNlbnRIZWFkZXJgXG4gKiBpZiB5b3Ugd2lzaCB0byBhdHRlbXB0IHJlc3BvbmRpbmcsIGFzIHRoZSBoZWFkZXIgYW5kIHNvbWUgZGF0YVxuICogbWF5IGhhdmUgYWxyZWFkeSBiZWVuIHRyYW5zZmVycmVkLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogICAtIGBtYXhBZ2VgICAgZGVmYXVsdGluZyB0byAwIChjYW4gYmUgc3RyaW5nIGNvbnZlcnRlZCBieSBgbXNgKVxuICogICAtIGByb290YCAgICAgcm9vdCBkaXJlY3RvcnkgZm9yIHJlbGF0aXZlIGZpbGVuYW1lc1xuICogICAtIGBoZWFkZXJzYCAgb2JqZWN0IG9mIGhlYWRlcnMgdG8gc2VydmUgd2l0aCBmaWxlXG4gKiAgIC0gYGRvdGZpbGVzYCBzZXJ2ZSBkb3RmaWxlcywgZGVmYXVsdGluZyB0byBmYWxzZTsgY2FuIGJlIGBcImFsbG93XCJgIHRvIHNlbmQgdGhlbVxuICpcbiAqIE90aGVyIG9wdGlvbnMgYXJlIHBhc3NlZCBhbG9uZyB0byBgc2VuZGAuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBpbGx1c3RyYXRlcyBob3cgYHJlcy5zZW5kRmlsZSgpYCBtYXlcbiAqICBiZSB1c2VkIGFzIGFuIGFsdGVybmF0aXZlIGZvciB0aGUgYHN0YXRpYygpYCBtaWRkbGV3YXJlIGZvclxuICogIGR5bmFtaWMgc2l0dWF0aW9ucy4gVGhlIGNvZGUgYmFja2luZyBgcmVzLnNlbmRGaWxlKClgIGlzIGFjdHVhbGx5XG4gKiAgdGhlIHNhbWUgY29kZSwgc28gSFRUUCBjYWNoZSBzdXBwb3J0IGV0YyBpcyBpZGVudGljYWwuXG4gKlxuICogICAgIGFwcC5nZXQoJy91c2VyLzp1aWQvcGhvdG9zLzpmaWxlJywgZnVuY3Rpb24ocmVxLCByZXMpe1xuICogICAgICAgdmFyIHVpZCA9IHJlcS5wYXJhbXMudWlkXG4gKiAgICAgICAgICwgZmlsZSA9IHJlcS5wYXJhbXMuZmlsZTtcbiAqXG4gKiAgICAgICByZXEudXNlci5tYXlWaWV3RmlsZXNGcm9tKHVpZCwgZnVuY3Rpb24oeWVzKXtcbiAqICAgICAgICAgaWYgKHllcykge1xuICogICAgICAgICAgIHJlcy5zZW5kRmlsZSgnL3VwbG9hZHMvJyArIHVpZCArICcvJyArIGZpbGUpO1xuICogICAgICAgICB9IGVsc2Uge1xuICogICAgICAgICAgIHJlcy5zZW5kKDQwMywgJ1NvcnJ5ISB5b3UgY2FudCBzZWUgdGhhdC4nKTtcbiAqICAgICAgICAgfVxuICogICAgICAgfSk7XG4gKiAgICAgfSk7XG4gKlxuICogQHB1YmxpY1xuICovXG5cbnJlcy5zZW5kRmlsZSA9IGZ1bmN0aW9uIHNlbmRGaWxlKHBhdGgsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBkb25lID0gY2FsbGJhY2s7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIHJlcyA9IHRoaXM7XG4gIHZhciBuZXh0ID0gcmVxLm5leHQ7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIXBhdGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXRoIGFyZ3VtZW50IGlzIHJlcXVpcmVkIHRvIHJlcy5zZW5kRmlsZScpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhdGggbXVzdCBiZSBhIHN0cmluZyB0byByZXMuc2VuZEZpbGUnKVxuICB9XG5cbiAgLy8gc3VwcG9ydCBmdW5jdGlvbiBhcyBzZWNvbmQgYXJnXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRvbmUgPSBvcHRpb25zO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuXG4gIGlmICghb3B0cy5yb290ICYmICFpc0Fic29sdXRlKHBhdGgpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGF0aCBtdXN0IGJlIGFic29sdXRlIG9yIHNwZWNpZnkgcm9vdCB0byByZXMuc2VuZEZpbGUnKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBmaWxlIHN0cmVhbVxuICB2YXIgcGF0aG5hbWUgPSBlbmNvZGVVUkkocGF0aCk7XG4gIHZhciBmaWxlID0gc2VuZChyZXEsIHBhdGhuYW1lLCBvcHRzKTtcblxuICAvLyB0cmFuc2ZlclxuICBzZW5kZmlsZShyZXMsIGZpbGUsIG9wdHMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZG9uZSkgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICBpZiAoZXJyICYmIGVyci5jb2RlID09PSAnRUlTRElSJykgcmV0dXJuIG5leHQoKTtcblxuICAgIC8vIG5leHQoKSBhbGwgYnV0IHdyaXRlIGVycm9yc1xuICAgIGlmIChlcnIgJiYgZXJyLmNvZGUgIT09ICdFQ09OTkFCT1JURUQnICYmIGVyci5zeXNjYWxsICE9PSAnd3JpdGUnKSB7XG4gICAgICBuZXh0KGVycik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVHJhbnNmZXIgdGhlIGZpbGUgYXQgdGhlIGdpdmVuIGBwYXRoYC5cbiAqXG4gKiBBdXRvbWF0aWNhbGx5IHNldHMgdGhlIF9Db250ZW50LVR5cGVfIHJlc3BvbnNlIGhlYWRlciBmaWVsZC5cbiAqIFRoZSBjYWxsYmFjayBgY2FsbGJhY2soZXJyKWAgaXMgaW52b2tlZCB3aGVuIHRoZSB0cmFuc2ZlciBpcyBjb21wbGV0ZVxuICogb3Igd2hlbiBhbiBlcnJvciBvY2N1cnMuIEJlIHN1cmUgdG8gY2hlY2sgYHJlcy5zZW50SGVhZGVyYFxuICogaWYgeW91IHdpc2ggdG8gYXR0ZW1wdCByZXNwb25kaW5nLCBhcyB0aGUgaGVhZGVyIGFuZCBzb21lIGRhdGFcbiAqIG1heSBoYXZlIGFscmVhZHkgYmVlbiB0cmFuc2ZlcnJlZC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAgLSBgbWF4QWdlYCAgIGRlZmF1bHRpbmcgdG8gMCAoY2FuIGJlIHN0cmluZyBjb252ZXJ0ZWQgYnkgYG1zYClcbiAqICAgLSBgcm9vdGAgICAgIHJvb3QgZGlyZWN0b3J5IGZvciByZWxhdGl2ZSBmaWxlbmFtZXNcbiAqICAgLSBgaGVhZGVyc2AgIG9iamVjdCBvZiBoZWFkZXJzIHRvIHNlcnZlIHdpdGggZmlsZVxuICogICAtIGBkb3RmaWxlc2Agc2VydmUgZG90ZmlsZXMsIGRlZmF1bHRpbmcgdG8gZmFsc2U7IGNhbiBiZSBgXCJhbGxvd1wiYCB0byBzZW5kIHRoZW1cbiAqXG4gKiBPdGhlciBvcHRpb25zIGFyZSBwYXNzZWQgYWxvbmcgdG8gYHNlbmRgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBUaGUgZm9sbG93aW5nIGV4YW1wbGUgaWxsdXN0cmF0ZXMgaG93IGByZXMuc2VuZGZpbGUoKWAgbWF5XG4gKiAgYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSBmb3IgdGhlIGBzdGF0aWMoKWAgbWlkZGxld2FyZSBmb3JcbiAqICBkeW5hbWljIHNpdHVhdGlvbnMuIFRoZSBjb2RlIGJhY2tpbmcgYHJlcy5zZW5kZmlsZSgpYCBpcyBhY3R1YWxseVxuICogIHRoZSBzYW1lIGNvZGUsIHNvIEhUVFAgY2FjaGUgc3VwcG9ydCBldGMgaXMgaWRlbnRpY2FsLlxuICpcbiAqICAgICBhcHAuZ2V0KCcvdXNlci86dWlkL3Bob3Rvcy86ZmlsZScsIGZ1bmN0aW9uKHJlcSwgcmVzKXtcbiAqICAgICAgIHZhciB1aWQgPSByZXEucGFyYW1zLnVpZFxuICogICAgICAgICAsIGZpbGUgPSByZXEucGFyYW1zLmZpbGU7XG4gKlxuICogICAgICAgcmVxLnVzZXIubWF5Vmlld0ZpbGVzRnJvbSh1aWQsIGZ1bmN0aW9uKHllcyl7XG4gKiAgICAgICAgIGlmICh5ZXMpIHtcbiAqICAgICAgICAgICByZXMuc2VuZGZpbGUoJy91cGxvYWRzLycgKyB1aWQgKyAnLycgKyBmaWxlKTtcbiAqICAgICAgICAgfSBlbHNlIHtcbiAqICAgICAgICAgICByZXMuc2VuZCg0MDMsICdTb3JyeSEgeW91IGNhbnQgc2VlIHRoYXQuJyk7XG4gKiAgICAgICAgIH1cbiAqICAgICAgIH0pO1xuICogICAgIH0pO1xuICpcbiAqIEBwdWJsaWNcbiAqL1xuXG5yZXMuc2VuZGZpbGUgPSBmdW5jdGlvbiAocGF0aCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGRvbmUgPSBjYWxsYmFjaztcbiAgdmFyIHJlcSA9IHRoaXMucmVxO1xuICB2YXIgcmVzID0gdGhpcztcbiAgdmFyIG5leHQgPSByZXEubmV4dDtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIHN1cHBvcnQgZnVuY3Rpb24gYXMgc2Vjb25kIGFyZ1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBkb25lID0gb3B0aW9ucztcbiAgICBvcHRzID0ge307XG4gIH1cblxuICAvLyBjcmVhdGUgZmlsZSBzdHJlYW1cbiAgdmFyIGZpbGUgPSBzZW5kKHJlcSwgcGF0aCwgb3B0cyk7XG5cbiAgLy8gdHJhbnNmZXJcbiAgc2VuZGZpbGUocmVzLCBmaWxlLCBvcHRzLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGRvbmUpIHJldHVybiBkb25lKGVycik7XG4gICAgaWYgKGVyciAmJiBlcnIuY29kZSA9PT0gJ0VJU0RJUicpIHJldHVybiBuZXh0KCk7XG5cbiAgICAvLyBuZXh0KCkgYWxsIGJ1dCB3cml0ZSBlcnJvcnNcbiAgICBpZiAoZXJyICYmIGVyci5jb2RlICE9PSAnRUNPTk5BQk9SVEVEJyAmJiBlcnIuc3lzY2FsbCAhPT0gJ3dyaXRlJykge1xuICAgICAgbmV4dChlcnIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5yZXMuc2VuZGZpbGUgPSBkZXByZWNhdGUuZnVuY3Rpb24ocmVzLnNlbmRmaWxlLFxuICAncmVzLnNlbmRmaWxlOiBVc2UgcmVzLnNlbmRGaWxlIGluc3RlYWQnKTtcblxuLyoqXG4gKiBUcmFuc2ZlciB0aGUgZmlsZSBhdCB0aGUgZ2l2ZW4gYHBhdGhgIGFzIGFuIGF0dGFjaG1lbnQuXG4gKlxuICogT3B0aW9uYWxseSBwcm92aWRpbmcgYW4gYWx0ZXJuYXRlIGF0dGFjaG1lbnQgYGZpbGVuYW1lYCxcbiAqIGFuZCBvcHRpb25hbCBjYWxsYmFjayBgY2FsbGJhY2soZXJyKWAuIFRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiB3aGVuIHRoZSBkYXRhIHRyYW5zZmVyIGlzIGNvbXBsZXRlLCBvciB3aGVuIGFuIGVycm9yIGhhc1xuICogb2N1cnJlZC4gQmUgc3VyZSB0byBjaGVjayBgcmVzLmhlYWRlcnNTZW50YCBpZiB5b3UgcGxhbiB0byByZXNwb25kLlxuICpcbiAqIE9wdGlvbmFsbHkgcHJvdmlkaW5nIGFuIGBvcHRpb25zYCBvYmplY3QgdG8gdXNlIHdpdGggYHJlcy5zZW5kRmlsZSgpYC5cbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBzZXQgdGhlIGBDb250ZW50LURpc3Bvc2l0aW9uYCBoZWFkZXIsIG92ZXJyaWRpbmdcbiAqIGFueSBgQ29udGVudC1EaXNwb3NpdGlvbmAgaGVhZGVyIHBhc3NlZCBhcyBoZWFkZXIgb3B0aW9ucyBpbiBvcmRlclxuICogdG8gc2V0IHRoZSBhdHRhY2htZW50IGFuZCBmaWxlbmFtZS5cbiAqXG4gKiBUaGlzIG1ldGhvZCB1c2VzIGByZXMuc2VuZEZpbGUoKWAuXG4gKlxuICogQHB1YmxpY1xuICovXG5cbnJlcy5kb3dubG9hZCA9IGZ1bmN0aW9uIGRvd25sb2FkIChwYXRoLCBmaWxlbmFtZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGRvbmUgPSBjYWxsYmFjaztcbiAgdmFyIG5hbWUgPSBmaWxlbmFtZTtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IG51bGxcblxuICAvLyBzdXBwb3J0IGZ1bmN0aW9uIGFzIHNlY29uZCBvciB0aGlyZCBhcmdcbiAgaWYgKHR5cGVvZiBmaWxlbmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRvbmUgPSBmaWxlbmFtZTtcbiAgICBuYW1lID0gbnVsbDtcbiAgICBvcHRzID0gbnVsbFxuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZG9uZSA9IG9wdGlvbnNcbiAgICBvcHRzID0gbnVsbFxuICB9XG5cbiAgLy8gc2V0IENvbnRlbnQtRGlzcG9zaXRpb24gd2hlbiBmaWxlIGlzIHNlbnRcbiAgdmFyIGhlYWRlcnMgPSB7XG4gICAgJ0NvbnRlbnQtRGlzcG9zaXRpb24nOiBjb250ZW50RGlzcG9zaXRpb24obmFtZSB8fCBwYXRoKVxuICB9O1xuXG4gIC8vIG1lcmdlIHVzZXItcHJvdmlkZWQgaGVhZGVyc1xuICBpZiAob3B0cyAmJiBvcHRzLmhlYWRlcnMpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9wdHMuaGVhZGVycylcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldXG4gICAgICBpZiAoa2V5LnRvTG93ZXJDYXNlKCkgIT09ICdjb250ZW50LWRpc3Bvc2l0aW9uJykge1xuICAgICAgICBoZWFkZXJzW2tleV0gPSBvcHRzLmhlYWRlcnNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG1lcmdlIHVzZXItcHJvdmlkZWQgb3B0aW9uc1xuICBvcHRzID0gT2JqZWN0LmNyZWF0ZShvcHRzKVxuICBvcHRzLmhlYWRlcnMgPSBoZWFkZXJzXG5cbiAgLy8gUmVzb2x2ZSB0aGUgZnVsbCBwYXRoIGZvciBzZW5kRmlsZVxuICB2YXIgZnVsbFBhdGggPSByZXNvbHZlKHBhdGgpO1xuXG4gIC8vIHNlbmQgZmlsZVxuICByZXR1cm4gdGhpcy5zZW5kRmlsZShmdWxsUGF0aCwgb3B0cywgZG9uZSlcbn07XG5cbi8qKlxuICogU2V0IF9Db250ZW50LVR5cGVfIHJlc3BvbnNlIGhlYWRlciB3aXRoIGB0eXBlYCB0aHJvdWdoIGBtaW1lLmxvb2t1cCgpYFxuICogd2hlbiBpdCBkb2VzIG5vdCBjb250YWluIFwiL1wiLCBvciBzZXQgdGhlIENvbnRlbnQtVHlwZSB0byBgdHlwZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICByZXMudHlwZSgnLmh0bWwnKTtcbiAqICAgICByZXMudHlwZSgnaHRtbCcpO1xuICogICAgIHJlcy50eXBlKCdqc29uJyk7XG4gKiAgICAgcmVzLnR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAqICAgICByZXMudHlwZSgncG5nJyk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1NlcnZlclJlc3BvbnNlfSBmb3IgY2hhaW5pbmdcbiAqIEBwdWJsaWNcbiAqL1xuXG5yZXMuY29udGVudFR5cGUgPVxucmVzLnR5cGUgPSBmdW5jdGlvbiBjb250ZW50VHlwZSh0eXBlKSB7XG4gIHZhciBjdCA9IHR5cGUuaW5kZXhPZignLycpID09PSAtMVxuICAgID8gbWltZS5sb29rdXAodHlwZSlcbiAgICA6IHR5cGU7XG5cbiAgcmV0dXJuIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCBjdCk7XG59O1xuXG4vKipcbiAqIFJlc3BvbmQgdG8gdGhlIEFjY2VwdGFibGUgZm9ybWF0cyB1c2luZyBhbiBgb2JqYFxuICogb2YgbWltZS10eXBlIGNhbGxiYWNrcy5cbiAqXG4gKiBUaGlzIG1ldGhvZCB1c2VzIGByZXEuYWNjZXB0ZWRgLCBhbiBhcnJheSBvZlxuICogYWNjZXB0YWJsZSB0eXBlcyBvcmRlcmVkIGJ5IHRoZWlyIHF1YWxpdHkgdmFsdWVzLlxuICogV2hlbiBcIkFjY2VwdFwiIGlzIG5vdCBwcmVzZW50IHRoZSBfZmlyc3RfIGNhbGxiYWNrXG4gKiBpcyBpbnZva2VkLCBvdGhlcndpc2UgdGhlIGZpcnN0IG1hdGNoIGlzIHVzZWQuIFdoZW5cbiAqIG5vIG1hdGNoIGlzIHBlcmZvcm1lZCB0aGUgc2VydmVyIHJlc3BvbmRzIHdpdGhcbiAqIDQwNiBcIk5vdCBBY2NlcHRhYmxlXCIuXG4gKlxuICogQ29udGVudC1UeXBlIGlzIHNldCBmb3IgeW91LCBob3dldmVyIGlmIHlvdSBjaG9vc2VcbiAqIHlvdSBtYXkgYWx0ZXIgdGhpcyB3aXRoaW4gdGhlIGNhbGxiYWNrIHVzaW5nIGByZXMudHlwZSgpYFxuICogb3IgYHJlcy5zZXQoJ0NvbnRlbnQtVHlwZScsIC4uLilgLlxuICpcbiAqICAgIHJlcy5mb3JtYXQoe1xuICogICAgICAndGV4dC9wbGFpbic6IGZ1bmN0aW9uKCl7XG4gKiAgICAgICAgcmVzLnNlbmQoJ2hleScpO1xuICogICAgICB9LFxuICpcbiAqICAgICAgJ3RleHQvaHRtbCc6IGZ1bmN0aW9uKCl7XG4gKiAgICAgICAgcmVzLnNlbmQoJzxwPmhleTwvcD4nKTtcbiAqICAgICAgfSxcbiAqXG4gKiAgICAgICdhcHBsaWF0aW9uL2pzb24nOiBmdW5jdGlvbigpe1xuICogICAgICAgIHJlcy5zZW5kKHsgbWVzc2FnZTogJ2hleScgfSk7XG4gKiAgICAgIH1cbiAqICAgIH0pO1xuICpcbiAqIEluIGFkZGl0aW9uIHRvIGNhbm9uaWNhbGl6ZWQgTUlNRSB0eXBlcyB5b3UgbWF5XG4gKiBhbHNvIHVzZSBleHRuYW1lcyBtYXBwZWQgdG8gdGhlc2UgdHlwZXM6XG4gKlxuICogICAgcmVzLmZvcm1hdCh7XG4gKiAgICAgIHRleHQ6IGZ1bmN0aW9uKCl7XG4gKiAgICAgICAgcmVzLnNlbmQoJ2hleScpO1xuICogICAgICB9LFxuICpcbiAqICAgICAgaHRtbDogZnVuY3Rpb24oKXtcbiAqICAgICAgICByZXMuc2VuZCgnPHA+aGV5PC9wPicpO1xuICogICAgICB9LFxuICpcbiAqICAgICAganNvbjogZnVuY3Rpb24oKXtcbiAqICAgICAgICByZXMuc2VuZCh7IG1lc3NhZ2U6ICdoZXknIH0pO1xuICogICAgICB9XG4gKiAgICB9KTtcbiAqXG4gKiBCeSBkZWZhdWx0IEV4cHJlc3MgcGFzc2VzIGFuIGBFcnJvcmBcbiAqIHdpdGggYSBgLnN0YXR1c2Agb2YgNDA2IHRvIGBuZXh0KGVycilgXG4gKiBpZiBhIG1hdGNoIGlzIG5vdCBtYWRlLiBJZiB5b3UgcHJvdmlkZVxuICogYSBgLmRlZmF1bHRgIGNhbGxiYWNrIGl0IHdpbGwgYmUgaW52b2tlZFxuICogaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTZXJ2ZXJSZXNwb25zZX0gZm9yIGNoYWluaW5nXG4gKiBAcHVibGljXG4gKi9cblxucmVzLmZvcm1hdCA9IGZ1bmN0aW9uKG9iail7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG5leHQgPSByZXEubmV4dDtcblxuICB2YXIgZm4gPSBvYmouZGVmYXVsdDtcbiAgaWYgKGZuKSBkZWxldGUgb2JqLmRlZmF1bHQ7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICB2YXIga2V5ID0ga2V5cy5sZW5ndGggPiAwXG4gICAgPyByZXEuYWNjZXB0cyhrZXlzKVxuICAgIDogZmFsc2U7XG5cbiAgdGhpcy52YXJ5KFwiQWNjZXB0XCIpO1xuXG4gIGlmIChrZXkpIHtcbiAgICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgbm9ybWFsaXplVHlwZShrZXkpLnZhbHVlKTtcbiAgICBvYmpba2V5XShyZXEsIHRoaXMsIG5leHQpO1xuICB9IGVsc2UgaWYgKGZuKSB7XG4gICAgZm4oKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdOb3QgQWNjZXB0YWJsZScpO1xuICAgIGVyci5zdGF0dXMgPSBlcnIuc3RhdHVzQ29kZSA9IDQwNjtcbiAgICBlcnIudHlwZXMgPSBub3JtYWxpemVUeXBlcyhrZXlzKS5tYXAoZnVuY3Rpb24obyl7IHJldHVybiBvLnZhbHVlIH0pO1xuICAgIG5leHQoZXJyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgX0NvbnRlbnQtRGlzcG9zaXRpb25fIGhlYWRlciB0byBfYXR0YWNobWVudF8gd2l0aCBvcHRpb25hbCBgZmlsZW5hbWVgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybiB7U2VydmVyUmVzcG9uc2V9XG4gKiBAcHVibGljXG4gKi9cblxucmVzLmF0dGFjaG1lbnQgPSBmdW5jdGlvbiBhdHRhY2htZW50KGZpbGVuYW1lKSB7XG4gIGlmIChmaWxlbmFtZSkge1xuICAgIHRoaXMudHlwZShleHRuYW1lKGZpbGVuYW1lKSk7XG4gIH1cblxuICB0aGlzLnNldCgnQ29udGVudC1EaXNwb3NpdGlvbicsIGNvbnRlbnREaXNwb3NpdGlvbihmaWxlbmFtZSkpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBcHBlbmQgYWRkaXRpb25hbCBoZWFkZXIgYGZpZWxkYCB3aXRoIHZhbHVlIGB2YWxgLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgcmVzLmFwcGVuZCgnTGluaycsIFsnPGh0dHA6Ly9sb2NhbGhvc3QvPicsICc8aHR0cDovL2xvY2FsaG9zdDozMDAwLz4nXSk7XG4gKiAgICByZXMuYXBwZW5kKCdTZXQtQ29va2llJywgJ2Zvbz1iYXI7IFBhdGg9LzsgSHR0cE9ubHknKTtcbiAqICAgIHJlcy5hcHBlbmQoJ1dhcm5pbmcnLCAnMTk5IE1pc2NlbGxhbmVvdXMgd2FybmluZycpO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHZhbFxuICogQHJldHVybiB7U2VydmVyUmVzcG9uc2V9IGZvciBjaGFpbmluZ1xuICogQHB1YmxpY1xuICovXG5cbnJlcy5hcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQoZmllbGQsIHZhbCkge1xuICB2YXIgcHJldiA9IHRoaXMuZ2V0KGZpZWxkKTtcbiAgdmFyIHZhbHVlID0gdmFsO1xuXG4gIGlmIChwcmV2KSB7XG4gICAgLy8gY29uY2F0IHRoZSBuZXcgYW5kIHByZXYgdmFsc1xuICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheShwcmV2KSA/IHByZXYuY29uY2F0KHZhbClcbiAgICAgIDogQXJyYXkuaXNBcnJheSh2YWwpID8gW3ByZXZdLmNvbmNhdCh2YWwpXG4gICAgICA6IFtwcmV2LCB2YWxdO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuc2V0KGZpZWxkLCB2YWx1ZSk7XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgcGFzc1xuICogYW4gb2JqZWN0IG9mIGhlYWRlciBmaWVsZHMuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgcmVzLnNldCgnRm9vJywgWydiYXInLCAnYmF6J10pO1xuICogICAgcmVzLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAqICAgIHJlcy5zZXQoeyBBY2NlcHQ6ICd0ZXh0L3BsYWluJywgJ1gtQVBJLUtleSc6ICd0b2JpJyB9KTtcbiAqXG4gKiBBbGlhc2VkIGFzIGByZXMuaGVhZGVyKClgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSB2YWxcbiAqIEByZXR1cm4ge1NlcnZlclJlc3BvbnNlfSBmb3IgY2hhaW5pbmdcbiAqIEBwdWJsaWNcbiAqL1xuXG5yZXMuc2V0ID1cbnJlcy5oZWFkZXIgPSBmdW5jdGlvbiBoZWFkZXIoZmllbGQsIHZhbCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhciB2YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsKVxuICAgICAgPyB2YWwubWFwKFN0cmluZylcbiAgICAgIDogU3RyaW5nKHZhbCk7XG5cbiAgICAvLyBhZGQgY2hhcnNldCB0byBjb250ZW50LXR5cGVcbiAgICBpZiAoZmllbGQudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb250ZW50LVR5cGUgY2Fubm90IGJlIHNldCB0byBhbiBBcnJheScpO1xuICAgICAgfVxuICAgICAgaWYgKCFjaGFyc2V0UmVnRXhwLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhciBjaGFyc2V0ID0gbWltZS5jaGFyc2V0cy5sb29rdXAodmFsdWUuc3BsaXQoJzsnKVswXSk7XG4gICAgICAgIGlmIChjaGFyc2V0KSB2YWx1ZSArPSAnOyBjaGFyc2V0PScgKyBjaGFyc2V0LnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRIZWFkZXIoZmllbGQsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgdmFsdWUgZm9yIGhlYWRlciBgZmllbGRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbnJlcy5nZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLmdldEhlYWRlcihmaWVsZCk7XG59O1xuXG4vKipcbiAqIENsZWFyIGNvb2tpZSBgbmFtZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1NlcnZlclJlc3BvbnNlfSBmb3IgY2hhaW5pbmdcbiAqIEBwdWJsaWNcbiAqL1xuXG5yZXMuY2xlYXJDb29raWUgPSBmdW5jdGlvbiBjbGVhckNvb2tpZShuYW1lLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gbWVyZ2UoeyBleHBpcmVzOiBuZXcgRGF0ZSgxKSwgcGF0aDogJy8nIH0sIG9wdGlvbnMpO1xuXG4gIHJldHVybiB0aGlzLmNvb2tpZShuYW1lLCAnJywgb3B0cyk7XG59O1xuXG4vKipcbiAqIFNldCBjb29raWUgYG5hbWVgIHRvIGB2YWx1ZWAsIHdpdGggdGhlIGdpdmVuIGBvcHRpb25zYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAgIC0gYG1heEFnZWAgICBtYXgtYWdlIGluIG1pbGxpc2Vjb25kcywgY29udmVydGVkIHRvIGBleHBpcmVzYFxuICogICAgLSBgc2lnbmVkYCAgIHNpZ24gdGhlIGNvb2tpZVxuICogICAgLSBgcGF0aGAgICAgIGRlZmF1bHRzIHRvIFwiL1wiXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgLy8gXCJSZW1lbWJlciBNZVwiIGZvciAxNSBtaW51dGVzXG4gKiAgICByZXMuY29va2llKCdyZW1lbWJlcm1lJywgJzEnLCB7IGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyA5MDAwMDApLCBodHRwT25seTogdHJ1ZSB9KTtcbiAqXG4gKiAgICAvLyBzYW1lIGFzIGFib3ZlXG4gKiAgICByZXMuY29va2llKCdyZW1lbWJlcm1lJywgJzEnLCB7IG1heEFnZTogOTAwMDAwLCBodHRwT25seTogdHJ1ZSB9KVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtTZXJ2ZXJSZXNwb25zZX0gZm9yIGNoYWluaW5nXG4gKiBAcHVibGljXG4gKi9cblxucmVzLmNvb2tpZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG1lcmdlKHt9LCBvcHRpb25zKTtcbiAgdmFyIHNlY3JldCA9IHRoaXMucmVxLnNlY3JldDtcbiAgdmFyIHNpZ25lZCA9IG9wdHMuc2lnbmVkO1xuXG4gIGlmIChzaWduZWQgJiYgIXNlY3JldCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29va2llUGFyc2VyKFwic2VjcmV0XCIpIHJlcXVpcmVkIGZvciBzaWduZWQgY29va2llcycpO1xuICB9XG5cbiAgdmFyIHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgICA/ICdqOicgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICA6IFN0cmluZyh2YWx1ZSk7XG5cbiAgaWYgKHNpZ25lZCkge1xuICAgIHZhbCA9ICdzOicgKyBzaWduKHZhbCwgc2VjcmV0KTtcbiAgfVxuXG4gIGlmICgnbWF4QWdlJyBpbiBvcHRzKSB7XG4gICAgb3B0cy5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIG9wdHMubWF4QWdlKTtcbiAgICBvcHRzLm1heEFnZSAvPSAxMDAwO1xuICB9XG5cbiAgaWYgKG9wdHMucGF0aCA9PSBudWxsKSB7XG4gICAgb3B0cy5wYXRoID0gJy8nO1xuICB9XG5cbiAgdGhpcy5hcHBlbmQoJ1NldC1Db29raWUnLCBjb29raWUuc2VyaWFsaXplKG5hbWUsIFN0cmluZyh2YWwpLCBvcHRzKSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbG9jYXRpb24gaGVhZGVyIHRvIGB1cmxgLlxuICpcbiAqIFRoZSBnaXZlbiBgdXJsYCBjYW4gYWxzbyBiZSBcImJhY2tcIiwgd2hpY2ggcmVkaXJlY3RzXG4gKiB0byB0aGUgX1JlZmVycmVyXyBvciBfUmVmZXJlcl8gaGVhZGVycyBvciBcIi9cIi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICByZXMubG9jYXRpb24oJy9mb28vYmFyJykuO1xuICogICAgcmVzLmxvY2F0aW9uKCdodHRwOi8vZXhhbXBsZS5jb20nKTtcbiAqICAgIHJlcy5sb2NhdGlvbignLi4vbG9naW4nKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcmV0dXJuIHtTZXJ2ZXJSZXNwb25zZX0gZm9yIGNoYWluaW5nXG4gKiBAcHVibGljXG4gKi9cblxucmVzLmxvY2F0aW9uID0gZnVuY3Rpb24gbG9jYXRpb24odXJsKSB7XG4gIHZhciBsb2MgPSB1cmw7XG5cbiAgLy8gXCJiYWNrXCIgaXMgYW4gYWxpYXMgZm9yIHRoZSByZWZlcnJlclxuICBpZiAodXJsID09PSAnYmFjaycpIHtcbiAgICBsb2MgPSB0aGlzLnJlcS5nZXQoJ1JlZmVycmVyJykgfHwgJy8nO1xuICB9XG5cbiAgLy8gc2V0IGxvY2F0aW9uXG4gIHJldHVybiB0aGlzLnNldCgnTG9jYXRpb24nLCBlbmNvZGVVcmwobG9jKSk7XG59O1xuXG4vKipcbiAqIFJlZGlyZWN0IHRvIHRoZSBnaXZlbiBgdXJsYCB3aXRoIG9wdGlvbmFsIHJlc3BvbnNlIGBzdGF0dXNgXG4gKiBkZWZhdWx0aW5nIHRvIDMwMi5cbiAqXG4gKiBUaGUgcmVzdWx0aW5nIGB1cmxgIGlzIGRldGVybWluZWQgYnkgYHJlcy5sb2NhdGlvbigpYCwgc29cbiAqIGl0IHdpbGwgcGxheSBuaWNlbHkgd2l0aCBtb3VudGVkIGFwcHMsIHJlbGF0aXZlIHBhdGhzLFxuICogYFwiYmFja1wiYCBldGMuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgcmVzLnJlZGlyZWN0KCcvZm9vL2JhcicpO1xuICogICAgcmVzLnJlZGlyZWN0KCdodHRwOi8vZXhhbXBsZS5jb20nKTtcbiAqICAgIHJlcy5yZWRpcmVjdCgzMDEsICdodHRwOi8vZXhhbXBsZS5jb20nKTtcbiAqICAgIHJlcy5yZWRpcmVjdCgnLi4vbG9naW4nKTsgLy8gL2Jsb2cvcG9zdC8xIC0+IC9ibG9nL2xvZ2luXG4gKlxuICogQHB1YmxpY1xuICovXG5cbnJlcy5yZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KHVybCkge1xuICB2YXIgYWRkcmVzcyA9IHVybDtcbiAgdmFyIGJvZHk7XG4gIHZhciBzdGF0dXMgPSAzMDI7XG5cbiAgLy8gYWxsb3cgc3RhdHVzIC8gdXJsXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICBzdGF0dXMgPSBhcmd1bWVudHNbMF07XG4gICAgICBhZGRyZXNzID0gYXJndW1lbnRzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXByZWNhdGUoJ3Jlcy5yZWRpcmVjdCh1cmwsIHN0YXR1cyk6IFVzZSByZXMucmVkaXJlY3Qoc3RhdHVzLCB1cmwpIGluc3RlYWQnKTtcbiAgICAgIHN0YXR1cyA9IGFyZ3VtZW50c1sxXTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgbG9jYXRpb24gaGVhZGVyXG4gIGFkZHJlc3MgPSB0aGlzLmxvY2F0aW9uKGFkZHJlc3MpLmdldCgnTG9jYXRpb24nKTtcblxuICAvLyBTdXBwb3J0IHRleHQve3BsYWluLGh0bWx9IGJ5IGRlZmF1bHRcbiAgdGhpcy5mb3JtYXQoe1xuICAgIHRleHQ6IGZ1bmN0aW9uKCl7XG4gICAgICBib2R5ID0gc3RhdHVzZXNbc3RhdHVzXSArICcuIFJlZGlyZWN0aW5nIHRvICcgKyBhZGRyZXNzXG4gICAgfSxcblxuICAgIGh0bWw6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdSA9IGVzY2FwZUh0bWwoYWRkcmVzcyk7XG4gICAgICBib2R5ID0gJzxwPicgKyBzdGF0dXNlc1tzdGF0dXNdICsgJy4gUmVkaXJlY3RpbmcgdG8gPGEgaHJlZj1cIicgKyB1ICsgJ1wiPicgKyB1ICsgJzwvYT48L3A+J1xuICAgIH0sXG5cbiAgICBkZWZhdWx0OiBmdW5jdGlvbigpe1xuICAgICAgYm9keSA9ICcnO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gUmVzcG9uZFxuICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXM7XG4gIHRoaXMuc2V0KCdDb250ZW50LUxlbmd0aCcsIEJ1ZmZlci5ieXRlTGVuZ3RoKGJvZHkpKTtcblxuICBpZiAodGhpcy5yZXEubWV0aG9kID09PSAnSEVBRCcpIHtcbiAgICB0aGlzLmVuZCgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZW5kKGJvZHkpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZCBgZmllbGRgIHRvIFZhcnkuIElmIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgVmFyeSBzZXQsIHRoZW5cbiAqIHRoaXMgY2FsbCBpcyBzaW1wbHkgaWdub3JlZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1NlcnZlclJlc3BvbnNlfSBmb3IgY2hhaW5pbmdcbiAqIEBwdWJsaWNcbiAqL1xuXG5yZXMudmFyeSA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgLy8gY2hlY2tzIGZvciBiYWNrLWNvbXBhdFxuICBpZiAoIWZpZWxkIHx8IChBcnJheS5pc0FycmF5KGZpZWxkKSAmJiAhZmllbGQubGVuZ3RoKSkge1xuICAgIGRlcHJlY2F0ZSgncmVzLnZhcnkoKTogUHJvdmlkZSBhIGZpZWxkIG5hbWUnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhcnkodGhpcywgZmllbGQpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgYHZpZXdgIHdpdGggdGhlIGdpdmVuIGBvcHRpb25zYCBhbmQgb3B0aW9uYWwgY2FsbGJhY2sgYGZuYC5cbiAqIFdoZW4gYSBjYWxsYmFjayBmdW5jdGlvbiBpcyBnaXZlbiBhIHJlc3BvbnNlIHdpbGwgX25vdF8gYmUgbWFkZVxuICogYXV0b21hdGljYWxseSwgb3RoZXJ3aXNlIGEgcmVzcG9uc2Ugb2YgXzIwMF8gYW5kIF90ZXh0L2h0bWxfIGlzIGdpdmVuLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGNhY2hlYCAgICAgYm9vbGVhbiBoaW50aW5nIHRvIHRoZSBlbmdpbmUgaXQgc2hvdWxkIGNhY2hlXG4gKiAgLSBgZmlsZW5hbWVgICBmaWxlbmFtZSBvZiB0aGUgdmlldyBiZWluZyByZW5kZXJlZFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuXG5yZXMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHZpZXcsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBhcHAgPSB0aGlzLnJlcS5hcHA7XG4gIHZhciBkb25lID0gY2FsbGJhY2s7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlcSA9IHRoaXMucmVxO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgLy8gc3VwcG9ydCBjYWxsYmFjayBmdW5jdGlvbiBhcyBzZWNvbmQgYXJnXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRvbmUgPSBvcHRpb25zO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuXG4gIC8vIG1lcmdlIHJlcy5sb2NhbHNcbiAgb3B0cy5fbG9jYWxzID0gc2VsZi5sb2NhbHM7XG5cbiAgLy8gZGVmYXVsdCBjYWxsYmFjayB0byByZXNwb25kXG4gIGRvbmUgPSBkb25lIHx8IGZ1bmN0aW9uIChlcnIsIHN0cikge1xuICAgIGlmIChlcnIpIHJldHVybiByZXEubmV4dChlcnIpO1xuICAgIHNlbGYuc2VuZChzdHIpO1xuICB9O1xuXG4gIC8vIHJlbmRlclxuICBhcHAucmVuZGVyKHZpZXcsIG9wdHMsIGRvbmUpO1xufTtcblxuLy8gcGlwZSB0aGUgc2VuZCBmaWxlIHN0cmVhbVxuZnVuY3Rpb24gc2VuZGZpbGUocmVzLCBmaWxlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgZG9uZSA9IGZhbHNlO1xuICB2YXIgc3RyZWFtaW5nO1xuXG4gIC8vIHJlcXVlc3QgYWJvcnRlZFxuICBmdW5jdGlvbiBvbmFib3J0ZWQoKSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcblxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcpO1xuICAgIGVyci5jb2RlID0gJ0VDT05OQUJPUlRFRCc7XG4gICAgY2FsbGJhY2soZXJyKTtcbiAgfVxuXG4gIC8vIGRpcmVjdG9yeVxuICBmdW5jdGlvbiBvbmRpcmVjdG9yeSgpIHtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIGRvbmUgPSB0cnVlO1xuXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignRUlTRElSLCByZWFkJyk7XG4gICAgZXJyLmNvZGUgPSAnRUlTRElSJztcbiAgICBjYWxsYmFjayhlcnIpO1xuICB9XG5cbiAgLy8gZXJyb3JzXG4gIGZ1bmN0aW9uIG9uZXJyb3IoZXJyKSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICBjYWxsYmFjayhlcnIpO1xuICB9XG5cbiAgLy8gZW5kZWRcbiAgZnVuY3Rpb24gb25lbmQoKSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG5cbiAgLy8gZmlsZVxuICBmdW5jdGlvbiBvbmZpbGUoKSB7XG4gICAgc3RyZWFtaW5nID0gZmFsc2U7XG4gIH1cblxuICAvLyBmaW5pc2hlZFxuICBmdW5jdGlvbiBvbmZpbmlzaChlcnIpIHtcbiAgICBpZiAoZXJyICYmIGVyci5jb2RlID09PSAnRUNPTk5SRVNFVCcpIHJldHVybiBvbmFib3J0ZWQoKTtcbiAgICBpZiAoZXJyKSByZXR1cm4gb25lcnJvcihlcnIpO1xuICAgIGlmIChkb25lKSByZXR1cm47XG5cbiAgICBzZXRJbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHN0cmVhbWluZyAhPT0gZmFsc2UgJiYgIWRvbmUpIHtcbiAgICAgICAgb25hYm9ydGVkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHN0cmVhbWluZ1xuICBmdW5jdGlvbiBvbnN0cmVhbSgpIHtcbiAgICBzdHJlYW1pbmcgPSB0cnVlO1xuICB9XG5cbiAgZmlsZS5vbignZGlyZWN0b3J5Jywgb25kaXJlY3RvcnkpO1xuICBmaWxlLm9uKCdlbmQnLCBvbmVuZCk7XG4gIGZpbGUub24oJ2Vycm9yJywgb25lcnJvcik7XG4gIGZpbGUub24oJ2ZpbGUnLCBvbmZpbGUpO1xuICBmaWxlLm9uKCdzdHJlYW0nLCBvbnN0cmVhbSk7XG4gIG9uRmluaXNoZWQocmVzLCBvbmZpbmlzaCk7XG5cbiAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgIC8vIHNldCBoZWFkZXJzIG9uIHN1Y2Nlc3NmdWwgdHJhbnNmZXJcbiAgICBmaWxlLm9uKCdoZWFkZXJzJywgZnVuY3Rpb24gaGVhZGVycyhyZXMpIHtcbiAgICAgIHZhciBvYmogPSBvcHRpb25zLmhlYWRlcnM7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgayA9IGtleXNbaV07XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoaywgb2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHBpcGVcbiAgZmlsZS5waXBlKHJlcyk7XG59XG5cbi8qKlxuICogU3RyaW5naWZ5IEpTT04sIGxpa2UgSlNPTi5zdHJpbmdpZnksIGJ1dCB2OCBvcHRpbWl6ZWQsIHdpdGggdGhlXG4gKiBhYmlsaXR5IHRvIGVzY2FwZSBjaGFyYWN0ZXJzIHRoYXQgY2FuIHRyaWdnZXIgSFRNTCBzbmlmZmluZy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByZXBsYWNlc1xuICogQHBhcmFtIHtudW1iZXJ9IHNwYWNlc1xuICogQHBhcmFtIHtib29sZWFufSBlc2NhcGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSAodmFsdWUsIHJlcGxhY2VyLCBzcGFjZXMsIGVzY2FwZSkge1xuICAvLyB2OCBjaGVja3MgYXJndW1lbnRzLmxlbmd0aCBmb3Igb3B0aW1pemluZyBzaW1wbGUgY2FsbFxuICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00NzMwXG4gIHZhciBqc29uID0gcmVwbGFjZXIgfHwgc3BhY2VzXG4gICAgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlcylcbiAgICA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblxuICBpZiAoZXNjYXBlKSB7XG4gICAganNvbiA9IGpzb24ucmVwbGFjZSgvWzw+Jl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHN3aXRjaCAoYy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgIGNhc2UgMHgzYzpcbiAgICAgICAgICByZXR1cm4gJ1xcXFx1MDAzYydcbiAgICAgICAgY2FzZSAweDNlOlxuICAgICAgICAgIHJldHVybiAnXFxcXHUwMDNlJ1xuICAgICAgICBjYXNlIDB4MjY6XG4gICAgICAgICAgcmV0dXJuICdcXFxcdTAwMjYnXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiB1bnJlYWNoYWJsZSBkZWZhdWx0ICovXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGpzb25cbn1cbiIsIi8qIVxuICogZXhwcmVzc1xuICogQ29weXJpZ2h0KGMpIDIwMDktMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTMgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgUm91dGUgPSByZXF1aXJlKCcuL3JvdXRlJyk7XG52YXIgTGF5ZXIgPSByZXF1aXJlKCcuL2xheWVyJyk7XG52YXIgbWV0aG9kcyA9IHJlcXVpcmUoJ21ldGhvZHMnKTtcbnZhciBtaXhpbiA9IHJlcXVpcmUoJ3V0aWxzLW1lcmdlJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdleHByZXNzOnJvdXRlcicpO1xudmFyIGRlcHJlY2F0ZSA9IHJlcXVpcmUoJ2RlcGQnKSgnZXhwcmVzcycpO1xudmFyIGZsYXR0ZW4gPSByZXF1aXJlKCdhcnJheS1mbGF0dGVuJyk7XG52YXIgcGFyc2VVcmwgPSByZXF1aXJlKCdwYXJzZXVybCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnc2V0cHJvdG90eXBlb2YnKVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBvYmplY3RSZWdFeHAgPSAvXlxcW29iamVjdCAoXFxTKylcXF0kLztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUm91dGVyYCB3aXRoIHRoZSBnaXZlbiBgb3B0aW9uc2AuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7Um91dGVyfSB3aGljaCBpcyBhbiBjYWxsYWJsZSBmdW5jdGlvblxuICogQHB1YmxpY1xuICovXG5cbnZhciBwcm90byA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG5cbiAgZnVuY3Rpb24gcm91dGVyKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcm91dGVyLmhhbmRsZShyZXEsIHJlcywgbmV4dCk7XG4gIH1cblxuICAvLyBtaXhpbiBSb3V0ZXIgY2xhc3MgZnVuY3Rpb25zXG4gIHNldFByb3RvdHlwZU9mKHJvdXRlciwgcHJvdG8pXG5cbiAgcm91dGVyLnBhcmFtcyA9IHt9O1xuICByb3V0ZXIuX3BhcmFtcyA9IFtdO1xuICByb3V0ZXIuY2FzZVNlbnNpdGl2ZSA9IG9wdHMuY2FzZVNlbnNpdGl2ZTtcbiAgcm91dGVyLm1lcmdlUGFyYW1zID0gb3B0cy5tZXJnZVBhcmFtcztcbiAgcm91dGVyLnN0cmljdCA9IG9wdHMuc3RyaWN0O1xuICByb3V0ZXIuc3RhY2sgPSBbXTtcblxuICByZXR1cm4gcm91dGVyO1xufTtcblxuLyoqXG4gKiBNYXAgdGhlIGdpdmVuIHBhcmFtIHBsYWNlaG9sZGVyIGBuYW1lYChzKSB0byB0aGUgZ2l2ZW4gY2FsbGJhY2suXG4gKlxuICogUGFyYW1ldGVyIG1hcHBpbmcgaXMgdXNlZCB0byBwcm92aWRlIHByZS1jb25kaXRpb25zIHRvIHJvdXRlc1xuICogd2hpY2ggdXNlIG5vcm1hbGl6ZWQgcGxhY2Vob2xkZXJzLiBGb3IgZXhhbXBsZSBhIF86dXNlcl9pZF8gcGFyYW1ldGVyXG4gKiBjb3VsZCBhdXRvbWF0aWNhbGx5IGxvYWQgYSB1c2VyJ3MgaW5mb3JtYXRpb24gZnJvbSB0aGUgZGF0YWJhc2Ugd2l0aG91dFxuICogYW55IGFkZGl0aW9uYWwgY29kZSxcbiAqXG4gKiBUaGUgY2FsbGJhY2sgdXNlcyB0aGUgc2FtZSBzaWduYXR1cmUgYXMgbWlkZGxld2FyZSwgdGhlIG9ubHkgZGlmZmVyZW5jZVxuICogYmVpbmcgdGhhdCB0aGUgdmFsdWUgb2YgdGhlIHBsYWNlaG9sZGVyIGlzIHBhc3NlZCwgaW4gdGhpcyBjYXNlIHRoZSBfaWRfXG4gKiBvZiB0aGUgdXNlci4gT25jZSB0aGUgYG5leHQoKWAgZnVuY3Rpb24gaXMgaW52b2tlZCwganVzdCBsaWtlIG1pZGRsZXdhcmVcbiAqIGl0IHdpbGwgY29udGludWUgb24gdG8gZXhlY3V0ZSB0aGUgcm91dGUsIG9yIHN1YnNlcXVlbnQgcGFyYW1ldGVyIGZ1bmN0aW9ucy5cbiAqXG4gKiBKdXN0IGxpa2UgaW4gbWlkZGxld2FyZSwgeW91IG11c3QgZWl0aGVyIHJlc3BvbmQgdG8gdGhlIHJlcXVlc3Qgb3IgY2FsbCBuZXh0XG4gKiB0byBhdm9pZCBzdGFsbGluZyB0aGUgcmVxdWVzdC5cbiAqXG4gKiAgYXBwLnBhcmFtKCd1c2VyX2lkJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQsIGlkKXtcbiAqICAgIFVzZXIuZmluZChpZCwgZnVuY3Rpb24oZXJyLCB1c2VyKXtcbiAqICAgICAgaWYgKGVycikge1xuICogICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gKiAgICAgIH0gZWxzZSBpZiAoIXVzZXIpIHtcbiAqICAgICAgICByZXR1cm4gbmV4dChuZXcgRXJyb3IoJ2ZhaWxlZCB0byBsb2FkIHVzZXInKSk7XG4gKiAgICAgIH1cbiAqICAgICAgcmVxLnVzZXIgPSB1c2VyO1xuICogICAgICBuZXh0KCk7XG4gKiAgICB9KTtcbiAqICB9KTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge2FwcH0gZm9yIGNoYWluaW5nXG4gKiBAcHVibGljXG4gKi9cblxucHJvdG8ucGFyYW0gPSBmdW5jdGlvbiBwYXJhbShuYW1lLCBmbikge1xuICAvLyBwYXJhbSBsb2dpY1xuICBpZiAodHlwZW9mIG5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBkZXByZWNhdGUoJ3JvdXRlci5wYXJhbShmbik6IFJlZmFjdG9yIHRvIHVzZSBwYXRoIHBhcmFtcycpO1xuICAgIHRoaXMuX3BhcmFtcy5wdXNoKG5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGFwcGx5IHBhcmFtIGZ1bmN0aW9uc1xuICB2YXIgcGFyYW1zID0gdGhpcy5fcGFyYW1zO1xuICB2YXIgbGVuID0gcGFyYW1zLmxlbmd0aDtcbiAgdmFyIHJldDtcblxuICBpZiAobmFtZVswXSA9PT0gJzonKSB7XG4gICAgZGVwcmVjYXRlKCdyb3V0ZXIucGFyYW0oJyArIEpTT04uc3RyaW5naWZ5KG5hbWUpICsgJywgZm4pOiBVc2Ugcm91dGVyLnBhcmFtKCcgKyBKU09OLnN0cmluZ2lmeShuYW1lLnN1YnN0cigxKSkgKyAnLCBmbikgaW5zdGVhZCcpO1xuICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAocmV0ID0gcGFyYW1zW2ldKG5hbWUsIGZuKSkge1xuICAgICAgZm4gPSByZXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5zdXJlIHdlIGVuZCB1cCB3aXRoIGFcbiAgLy8gbWlkZGxld2FyZSBmdW5jdGlvblxuICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGZuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHBhcmFtKCkgY2FsbCBmb3IgJyArIG5hbWUgKyAnLCBnb3QgJyArIGZuKTtcbiAgfVxuXG4gICh0aGlzLnBhcmFtc1tuYW1lXSA9IHRoaXMucGFyYW1zW25hbWVdIHx8IFtdKS5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxLCByZXMgaW50byB0aGUgcm91dGVyLlxuICogQHByaXZhdGVcbiAqL1xuXG5wcm90by5oYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMsIG91dCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgZGVidWcoJ2Rpc3BhdGNoaW5nICVzICVzJywgcmVxLm1ldGhvZCwgcmVxLnVybCk7XG5cbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBwcm90b2hvc3QgPSBnZXRQcm90b2hvc3QocmVxLnVybCkgfHwgJydcbiAgdmFyIHJlbW92ZWQgPSAnJztcbiAgdmFyIHNsYXNoQWRkZWQgPSBmYWxzZTtcbiAgdmFyIHBhcmFtY2FsbGVkID0ge307XG5cbiAgLy8gc3RvcmUgb3B0aW9ucyBmb3IgT1BUSU9OUyByZXF1ZXN0XG4gIC8vIG9ubHkgdXNlZCBpZiBPUFRJT05TIHJlcXVlc3RcbiAgdmFyIG9wdGlvbnMgPSBbXTtcblxuICAvLyBtaWRkbGV3YXJlIGFuZCByb3V0ZXNcbiAgdmFyIHN0YWNrID0gc2VsZi5zdGFjaztcblxuICAvLyBtYW5hZ2UgaW50ZXItcm91dGVyIHZhcmlhYmxlc1xuICB2YXIgcGFyZW50UGFyYW1zID0gcmVxLnBhcmFtcztcbiAgdmFyIHBhcmVudFVybCA9IHJlcS5iYXNlVXJsIHx8ICcnO1xuICB2YXIgZG9uZSA9IHJlc3RvcmUob3V0LCByZXEsICdiYXNlVXJsJywgJ25leHQnLCAncGFyYW1zJyk7XG5cbiAgLy8gc2V0dXAgbmV4dCBsYXllclxuICByZXEubmV4dCA9IG5leHQ7XG5cbiAgLy8gZm9yIG9wdGlvbnMgcmVxdWVzdHMsIHJlc3BvbmQgd2l0aCBhIGRlZmF1bHQgaWYgbm90aGluZyBlbHNlIHJlc3BvbmRzXG4gIGlmIChyZXEubWV0aG9kID09PSAnT1BUSU9OUycpIHtcbiAgICBkb25lID0gd3JhcChkb25lLCBmdW5jdGlvbihvbGQsIGVycikge1xuICAgICAgaWYgKGVyciB8fCBvcHRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG9sZChlcnIpO1xuICAgICAgc2VuZE9wdGlvbnNSZXNwb25zZShyZXMsIG9wdGlvbnMsIG9sZCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBzZXR1cCBiYXNpYyByZXEgdmFsdWVzXG4gIHJlcS5iYXNlVXJsID0gcGFyZW50VXJsO1xuICByZXEub3JpZ2luYWxVcmwgPSByZXEub3JpZ2luYWxVcmwgfHwgcmVxLnVybDtcblxuICBuZXh0KCk7XG5cbiAgZnVuY3Rpb24gbmV4dChlcnIpIHtcbiAgICB2YXIgbGF5ZXJFcnJvciA9IGVyciA9PT0gJ3JvdXRlJ1xuICAgICAgPyBudWxsXG4gICAgICA6IGVycjtcblxuICAgIC8vIHJlbW92ZSBhZGRlZCBzbGFzaFxuICAgIGlmIChzbGFzaEFkZGVkKSB7XG4gICAgICByZXEudXJsID0gcmVxLnVybC5zdWJzdHIoMSk7XG4gICAgICBzbGFzaEFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gcmVzdG9yZSBhbHRlcmVkIHJlcS51cmxcbiAgICBpZiAocmVtb3ZlZC5sZW5ndGggIT09IDApIHtcbiAgICAgIHJlcS5iYXNlVXJsID0gcGFyZW50VXJsO1xuICAgICAgcmVxLnVybCA9IHByb3RvaG9zdCArIHJlbW92ZWQgKyByZXEudXJsLnN1YnN0cihwcm90b2hvc3QubGVuZ3RoKTtcbiAgICAgIHJlbW92ZWQgPSAnJztcbiAgICB9XG5cbiAgICAvLyBzaWduYWwgdG8gZXhpdCByb3V0ZXJcbiAgICBpZiAobGF5ZXJFcnJvciA9PT0gJ3JvdXRlcicpIHtcbiAgICAgIHNldEltbWVkaWF0ZShkb25lLCBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gbm8gbW9yZSBtYXRjaGluZyBsYXllcnNcbiAgICBpZiAoaWR4ID49IHN0YWNrLmxlbmd0aCkge1xuICAgICAgc2V0SW1tZWRpYXRlKGRvbmUsIGxheWVyRXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGdldCBwYXRobmFtZSBvZiByZXF1ZXN0XG4gICAgdmFyIHBhdGggPSBnZXRQYXRobmFtZShyZXEpO1xuXG4gICAgaWYgKHBhdGggPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGRvbmUobGF5ZXJFcnJvcik7XG4gICAgfVxuXG4gICAgLy8gZmluZCBuZXh0IG1hdGNoaW5nIGxheWVyXG4gICAgdmFyIGxheWVyO1xuICAgIHZhciBtYXRjaDtcbiAgICB2YXIgcm91dGU7XG5cbiAgICB3aGlsZSAobWF0Y2ggIT09IHRydWUgJiYgaWR4IDwgc3RhY2subGVuZ3RoKSB7XG4gICAgICBsYXllciA9IHN0YWNrW2lkeCsrXTtcbiAgICAgIG1hdGNoID0gbWF0Y2hMYXllcihsYXllciwgcGF0aCk7XG4gICAgICByb3V0ZSA9IGxheWVyLnJvdXRlO1xuXG4gICAgICBpZiAodHlwZW9mIG1hdGNoICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gaG9sZCBvbiB0byBsYXllckVycm9yXG4gICAgICAgIGxheWVyRXJyb3IgPSBsYXllckVycm9yIHx8IG1hdGNoO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2ggIT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgLy8gcHJvY2VzcyBub24tcm91dGUgaGFuZGxlcnMgbm9ybWFsbHlcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYXllckVycm9yKSB7XG4gICAgICAgIC8vIHJvdXRlcyBkbyBub3QgbWF0Y2ggd2l0aCBhIHBlbmRpbmcgZXJyb3JcbiAgICAgICAgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBtZXRob2QgPSByZXEubWV0aG9kO1xuICAgICAgdmFyIGhhc19tZXRob2QgPSByb3V0ZS5faGFuZGxlc19tZXRob2QobWV0aG9kKTtcblxuICAgICAgLy8gYnVpbGQgdXAgYXV0b21hdGljIG9wdGlvbnMgcmVzcG9uc2VcbiAgICAgIGlmICghaGFzX21ldGhvZCAmJiBtZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgICAgICBhcHBlbmRNZXRob2RzKG9wdGlvbnMsIHJvdXRlLl9vcHRpb25zKCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBkb24ndCBldmVuIGJvdGhlciBtYXRjaGluZyByb3V0ZVxuICAgICAgaWYgKCFoYXNfbWV0aG9kICYmIG1ldGhvZCAhPT0gJ0hFQUQnKSB7XG4gICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5vIG1hdGNoXG4gICAgaWYgKG1hdGNoICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZG9uZShsYXllckVycm9yKTtcbiAgICB9XG5cbiAgICAvLyBzdG9yZSByb3V0ZSBmb3IgZGlzcGF0Y2ggb24gY2hhbmdlXG4gICAgaWYgKHJvdXRlKSB7XG4gICAgICByZXEucm91dGUgPSByb3V0ZTtcbiAgICB9XG5cbiAgICAvLyBDYXB0dXJlIG9uZS10aW1lIGxheWVyIHZhbHVlc1xuICAgIHJlcS5wYXJhbXMgPSBzZWxmLm1lcmdlUGFyYW1zXG4gICAgICA/IG1lcmdlUGFyYW1zKGxheWVyLnBhcmFtcywgcGFyZW50UGFyYW1zKVxuICAgICAgOiBsYXllci5wYXJhbXM7XG4gICAgdmFyIGxheWVyUGF0aCA9IGxheWVyLnBhdGg7XG5cbiAgICAvLyB0aGlzIHNob3VsZCBiZSBkb25lIGZvciB0aGUgbGF5ZXJcbiAgICBzZWxmLnByb2Nlc3NfcGFyYW1zKGxheWVyLCBwYXJhbWNhbGxlZCwgcmVxLCByZXMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG5leHQobGF5ZXJFcnJvciB8fCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGxheWVyLmhhbmRsZV9yZXF1ZXN0KHJlcSwgcmVzLCBuZXh0KTtcbiAgICAgIH1cblxuICAgICAgdHJpbV9wcmVmaXgobGF5ZXIsIGxheWVyRXJyb3IsIGxheWVyUGF0aCwgcGF0aCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmltX3ByZWZpeChsYXllciwgbGF5ZXJFcnJvciwgbGF5ZXJQYXRoLCBwYXRoKSB7XG4gICAgaWYgKGxheWVyUGF0aC5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIFZhbGlkYXRlIHBhdGggYnJlYWtzIG9uIGEgcGF0aCBzZXBhcmF0b3JcbiAgICAgIHZhciBjID0gcGF0aFtsYXllclBhdGgubGVuZ3RoXVxuICAgICAgaWYgKGMgJiYgYyAhPT0gJy8nICYmIGMgIT09ICcuJykgcmV0dXJuIG5leHQobGF5ZXJFcnJvcilcblxuICAgICAgLy8gVHJpbSBvZmYgdGhlIHBhcnQgb2YgdGhlIHVybCB0aGF0IG1hdGNoZXMgdGhlIHJvdXRlXG4gICAgICAvLyBtaWRkbGV3YXJlICgudXNlIHN0dWZmKSBuZWVkcyB0byBoYXZlIHRoZSBwYXRoIHN0cmlwcGVkXG4gICAgICBkZWJ1ZygndHJpbSBwcmVmaXggKCVzKSBmcm9tIHVybCAlcycsIGxheWVyUGF0aCwgcmVxLnVybCk7XG4gICAgICByZW1vdmVkID0gbGF5ZXJQYXRoO1xuICAgICAgcmVxLnVybCA9IHByb3RvaG9zdCArIHJlcS51cmwuc3Vic3RyKHByb3RvaG9zdC5sZW5ndGggKyByZW1vdmVkLmxlbmd0aCk7XG5cbiAgICAgIC8vIEVuc3VyZSBsZWFkaW5nIHNsYXNoXG4gICAgICBpZiAoIXByb3RvaG9zdCAmJiByZXEudXJsWzBdICE9PSAnLycpIHtcbiAgICAgICAgcmVxLnVybCA9ICcvJyArIHJlcS51cmw7XG4gICAgICAgIHNsYXNoQWRkZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCBiYXNlIFVSTCAobm8gdHJhaWxpbmcgc2xhc2gpXG4gICAgICByZXEuYmFzZVVybCA9IHBhcmVudFVybCArIChyZW1vdmVkW3JlbW92ZWQubGVuZ3RoIC0gMV0gPT09ICcvJ1xuICAgICAgICA/IHJlbW92ZWQuc3Vic3RyaW5nKDAsIHJlbW92ZWQubGVuZ3RoIC0gMSlcbiAgICAgICAgOiByZW1vdmVkKTtcbiAgICB9XG5cbiAgICBkZWJ1ZygnJXMgJXMgOiAlcycsIGxheWVyLm5hbWUsIGxheWVyUGF0aCwgcmVxLm9yaWdpbmFsVXJsKTtcblxuICAgIGlmIChsYXllckVycm9yKSB7XG4gICAgICBsYXllci5oYW5kbGVfZXJyb3IobGF5ZXJFcnJvciwgcmVxLCByZXMsIG5leHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllci5oYW5kbGVfcmVxdWVzdChyZXEsIHJlcywgbmV4dCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgYW55IHBhcmFtZXRlcnMgZm9yIHRoZSBsYXllci5cbiAqIEBwcml2YXRlXG4gKi9cblxucHJvdG8ucHJvY2Vzc19wYXJhbXMgPSBmdW5jdGlvbiBwcm9jZXNzX3BhcmFtcyhsYXllciwgY2FsbGVkLCByZXEsIHJlcywgZG9uZSkge1xuICB2YXIgcGFyYW1zID0gdGhpcy5wYXJhbXM7XG5cbiAgLy8gY2FwdHVyZWQgcGFyYW1ldGVycyBmcm9tIHRoZSBsYXllciwga2V5cyBhbmQgdmFsdWVzXG4gIHZhciBrZXlzID0gbGF5ZXIua2V5cztcblxuICAvLyBmYXN0IHRyYWNrXG4gIGlmICgha2V5cyB8fCBrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBkb25lKCk7XG4gIH1cblxuICB2YXIgaSA9IDA7XG4gIHZhciBuYW1lO1xuICB2YXIgcGFyYW1JbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHZhciBwYXJhbVZhbDtcbiAgdmFyIHBhcmFtQ2FsbGJhY2tzO1xuICB2YXIgcGFyYW1DYWxsZWQ7XG5cbiAgLy8gcHJvY2VzcyBwYXJhbXMgaW4gb3JkZXJcbiAgLy8gcGFyYW0gY2FsbGJhY2tzIGNhbiBiZSBhc3luY1xuICBmdW5jdGlvbiBwYXJhbShlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gZG9uZShlcnIpO1xuICAgIH1cblxuICAgIGlmIChpID49IGtleXMubGVuZ3RoICkge1xuICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICB9XG5cbiAgICBwYXJhbUluZGV4ID0gMDtcbiAgICBrZXkgPSBrZXlzW2krK107XG4gICAgbmFtZSA9IGtleS5uYW1lO1xuICAgIHBhcmFtVmFsID0gcmVxLnBhcmFtc1tuYW1lXTtcbiAgICBwYXJhbUNhbGxiYWNrcyA9IHBhcmFtc1tuYW1lXTtcbiAgICBwYXJhbUNhbGxlZCA9IGNhbGxlZFtuYW1lXTtcblxuICAgIGlmIChwYXJhbVZhbCA9PT0gdW5kZWZpbmVkIHx8ICFwYXJhbUNhbGxiYWNrcykge1xuICAgICAgcmV0dXJuIHBhcmFtKCk7XG4gICAgfVxuXG4gICAgLy8gcGFyYW0gcHJldmlvdXNseSBjYWxsZWQgd2l0aCBzYW1lIHZhbHVlIG9yIGVycm9yIG9jY3VycmVkXG4gICAgaWYgKHBhcmFtQ2FsbGVkICYmIChwYXJhbUNhbGxlZC5tYXRjaCA9PT0gcGFyYW1WYWxcbiAgICAgIHx8IChwYXJhbUNhbGxlZC5lcnJvciAmJiBwYXJhbUNhbGxlZC5lcnJvciAhPT0gJ3JvdXRlJykpKSB7XG4gICAgICAvLyByZXN0b3JlIHZhbHVlXG4gICAgICByZXEucGFyYW1zW25hbWVdID0gcGFyYW1DYWxsZWQudmFsdWU7XG5cbiAgICAgIC8vIG5leHQgcGFyYW1cbiAgICAgIHJldHVybiBwYXJhbShwYXJhbUNhbGxlZC5lcnJvcik7XG4gICAgfVxuXG4gICAgY2FsbGVkW25hbWVdID0gcGFyYW1DYWxsZWQgPSB7XG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIG1hdGNoOiBwYXJhbVZhbCxcbiAgICAgIHZhbHVlOiBwYXJhbVZhbFxuICAgIH07XG5cbiAgICBwYXJhbUNhbGxiYWNrKCk7XG4gIH1cblxuICAvLyBzaW5nbGUgcGFyYW0gY2FsbGJhY2tzXG4gIGZ1bmN0aW9uIHBhcmFtQ2FsbGJhY2soZXJyKSB7XG4gICAgdmFyIGZuID0gcGFyYW1DYWxsYmFja3NbcGFyYW1JbmRleCsrXTtcblxuICAgIC8vIHN0b3JlIHVwZGF0ZWQgdmFsdWVcbiAgICBwYXJhbUNhbGxlZC52YWx1ZSA9IHJlcS5wYXJhbXNba2V5Lm5hbWVdO1xuXG4gICAgaWYgKGVycikge1xuICAgICAgLy8gc3RvcmUgZXJyb3JcbiAgICAgIHBhcmFtQ2FsbGVkLmVycm9yID0gZXJyO1xuICAgICAgcGFyYW0oZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWZuKSByZXR1cm4gcGFyYW0oKTtcblxuICAgIHRyeSB7XG4gICAgICBmbihyZXEsIHJlcywgcGFyYW1DYWxsYmFjaywgcGFyYW1WYWwsIGtleS5uYW1lKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBwYXJhbUNhbGxiYWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmFtKCk7XG59O1xuXG4vKipcbiAqIFVzZSB0aGUgZ2l2ZW4gbWlkZGxld2FyZSBmdW5jdGlvbiwgd2l0aCBvcHRpb25hbCBwYXRoLCBkZWZhdWx0aW5nIHRvIFwiL1wiLlxuICpcbiAqIFVzZSAobGlrZSBgLmFsbGApIHdpbGwgcnVuIGZvciBhbnkgaHR0cCBNRVRIT0QsIGJ1dCBpdCB3aWxsIG5vdCBhZGRcbiAqIGhhbmRsZXJzIGZvciB0aG9zZSBtZXRob2RzIHNvIE9QVElPTlMgcmVxdWVzdHMgd2lsbCBub3QgY29uc2lkZXIgYC51c2VgXG4gKiBmdW5jdGlvbnMgZXZlbiBpZiB0aGV5IGNvdWxkIHJlc3BvbmQuXG4gKlxuICogVGhlIG90aGVyIGRpZmZlcmVuY2UgaXMgdGhhdCBfcm91dGVfIHBhdGggaXMgc3RyaXBwZWQgYW5kIG5vdCB2aXNpYmxlXG4gKiB0byB0aGUgaGFuZGxlciBmdW5jdGlvbi4gVGhlIG1haW4gZWZmZWN0IG9mIHRoaXMgZmVhdHVyZSBpcyB0aGF0IG1vdW50ZWRcbiAqIGhhbmRsZXJzIGNhbiBvcGVyYXRlIHdpdGhvdXQgYW55IGNvZGUgY2hhbmdlcyByZWdhcmRsZXNzIG9mIHRoZSBcInByZWZpeFwiXG4gKiBwYXRobmFtZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cblxucHJvdG8udXNlID0gZnVuY3Rpb24gdXNlKGZuKSB7XG4gIHZhciBvZmZzZXQgPSAwO1xuICB2YXIgcGF0aCA9ICcvJztcblxuICAvLyBkZWZhdWx0IHBhdGggdG8gJy8nXG4gIC8vIGRpc2FtYmlndWF0ZSByb3V0ZXIudXNlKFtmbl0pXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgYXJnID0gZm47XG5cbiAgICB3aGlsZSAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGggIT09IDApIHtcbiAgICAgIGFyZyA9IGFyZ1swXTtcbiAgICB9XG5cbiAgICAvLyBmaXJzdCBhcmcgaXMgdGhlIHBhdGhcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0ID0gMTtcbiAgICAgIHBhdGggPSBmbjtcbiAgICB9XG4gIH1cblxuICB2YXIgY2FsbGJhY2tzID0gZmxhdHRlbihzbGljZS5jYWxsKGFyZ3VtZW50cywgb2Zmc2V0KSk7XG5cbiAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSb3V0ZXIudXNlKCkgcmVxdWlyZXMgYSBtaWRkbGV3YXJlIGZ1bmN0aW9uJylcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZuID0gY2FsbGJhY2tzW2ldO1xuXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUm91dGVyLnVzZSgpIHJlcXVpcmVzIGEgbWlkZGxld2FyZSBmdW5jdGlvbiBidXQgZ290IGEgJyArIGdldHR5cGUoZm4pKVxuICAgIH1cblxuICAgIC8vIGFkZCB0aGUgbWlkZGxld2FyZVxuICAgIGRlYnVnKCd1c2UgJW8gJXMnLCBwYXRoLCBmbi5uYW1lIHx8ICc8YW5vbnltb3VzPicpXG5cbiAgICB2YXIgbGF5ZXIgPSBuZXcgTGF5ZXIocGF0aCwge1xuICAgICAgc2Vuc2l0aXZlOiB0aGlzLmNhc2VTZW5zaXRpdmUsXG4gICAgICBzdHJpY3Q6IGZhbHNlLFxuICAgICAgZW5kOiBmYWxzZVxuICAgIH0sIGZuKTtcblxuICAgIGxheWVyLnJvdXRlID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5zdGFjay5wdXNoKGxheWVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgUm91dGUgZm9yIHRoZSBnaXZlbiBwYXRoLlxuICpcbiAqIEVhY2ggcm91dGUgY29udGFpbnMgYSBzZXBhcmF0ZSBtaWRkbGV3YXJlIHN0YWNrIGFuZCBWRVJCIGhhbmRsZXJzLlxuICpcbiAqIFNlZSB0aGUgUm91dGUgYXBpIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMgb24gYWRkaW5nIGhhbmRsZXJzXG4gKiBhbmQgbWlkZGxld2FyZSB0byByb3V0ZXMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEByZXR1cm4ge1JvdXRlfVxuICogQHB1YmxpY1xuICovXG5cbnByb3RvLnJvdXRlID0gZnVuY3Rpb24gcm91dGUocGF0aCkge1xuICB2YXIgcm91dGUgPSBuZXcgUm91dGUocGF0aCk7XG5cbiAgdmFyIGxheWVyID0gbmV3IExheWVyKHBhdGgsIHtcbiAgICBzZW5zaXRpdmU6IHRoaXMuY2FzZVNlbnNpdGl2ZSxcbiAgICBzdHJpY3Q6IHRoaXMuc3RyaWN0LFxuICAgIGVuZDogdHJ1ZVxuICB9LCByb3V0ZS5kaXNwYXRjaC5iaW5kKHJvdXRlKSk7XG5cbiAgbGF5ZXIucm91dGUgPSByb3V0ZTtcblxuICB0aGlzLnN0YWNrLnB1c2gobGF5ZXIpO1xuICByZXR1cm4gcm91dGU7XG59O1xuXG4vLyBjcmVhdGUgUm91dGVyI1ZFUkIgZnVuY3Rpb25zXG5tZXRob2RzLmNvbmNhdCgnYWxsJykuZm9yRWFjaChmdW5jdGlvbihtZXRob2Qpe1xuICBwcm90b1ttZXRob2RdID0gZnVuY3Rpb24ocGF0aCl7XG4gICAgdmFyIHJvdXRlID0gdGhpcy5yb3V0ZShwYXRoKVxuICAgIHJvdXRlW21ldGhvZF0uYXBwbHkocm91dGUsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59KTtcblxuLy8gYXBwZW5kIG1ldGhvZHMgdG8gYSBsaXN0IG9mIG1ldGhvZHNcbmZ1bmN0aW9uIGFwcGVuZE1ldGhvZHMobGlzdCwgYWRkaXRpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhZGRpdGlvbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBtZXRob2QgPSBhZGRpdGlvbltpXTtcbiAgICBpZiAobGlzdC5pbmRleE9mKG1ldGhvZCkgPT09IC0xKSB7XG4gICAgICBsaXN0LnB1c2gobWV0aG9kKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gZ2V0IHBhdGhuYW1lIG9mIHJlcXVlc3RcbmZ1bmN0aW9uIGdldFBhdGhuYW1lKHJlcSkge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVVybChyZXEpLnBhdGhuYW1lO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8vIEdldCBnZXQgcHJvdG9jb2wgKyBob3N0IGZvciBhIFVSTFxuZnVuY3Rpb24gZ2V0UHJvdG9ob3N0KHVybCkge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHwgdXJsLmxlbmd0aCA9PT0gMCB8fCB1cmxbMF0gPT09ICcvJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHVybC5pbmRleE9mKCc/JylcbiAgdmFyIHBhdGhMZW5ndGggPSBzZWFyY2hJbmRleCAhPT0gLTFcbiAgICA/IHNlYXJjaEluZGV4XG4gICAgOiB1cmwubGVuZ3RoXG4gIHZhciBmcWRuSW5kZXggPSB1cmwuc3Vic3RyKDAsIHBhdGhMZW5ndGgpLmluZGV4T2YoJzovLycpXG5cbiAgcmV0dXJuIGZxZG5JbmRleCAhPT0gLTFcbiAgICA/IHVybC5zdWJzdHIoMCwgdXJsLmluZGV4T2YoJy8nLCAzICsgZnFkbkluZGV4KSlcbiAgICA6IHVuZGVmaW5lZFxufVxuXG4vLyBnZXQgdHlwZSBmb3IgZXJyb3IgbWVzc2FnZVxuZnVuY3Rpb24gZ2V0dHlwZShvYmopIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2Ygb2JqO1xuXG4gIGlmICh0eXBlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgLy8gaW5zcGVjdCBbW0NsYXNzXV0gZm9yIG9iamVjdHNcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKVxuICAgIC5yZXBsYWNlKG9iamVjdFJlZ0V4cCwgJyQxJyk7XG59XG5cbi8qKlxuICogTWF0Y2ggcGF0aCB0byBhIGxheWVyLlxuICpcbiAqIEBwYXJhbSB7TGF5ZXJ9IGxheWVyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaExheWVyKGxheWVyLCBwYXRoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGxheWVyLm1hdGNoKHBhdGgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbi8vIG1lcmdlIHBhcmFtcyB3aXRoIHBhcmVudCBwYXJhbXNcbmZ1bmN0aW9uIG1lcmdlUGFyYW1zKHBhcmFtcywgcGFyZW50KSB7XG4gIGlmICh0eXBlb2YgcGFyZW50ICE9PSAnb2JqZWN0JyB8fCAhcGFyZW50KSB7XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIC8vIG1ha2UgY29weSBvZiBwYXJlbnQgZm9yIGJhc2VcbiAgdmFyIG9iaiA9IG1peGluKHt9LCBwYXJlbnQpO1xuXG4gIC8vIHNpbXBsZSBub24tbnVtZXJpYyBtZXJnaW5nXG4gIGlmICghKDAgaW4gcGFyYW1zKSB8fCAhKDAgaW4gcGFyZW50KSkge1xuICAgIHJldHVybiBtaXhpbihvYmosIHBhcmFtcyk7XG4gIH1cblxuICB2YXIgaSA9IDA7XG4gIHZhciBvID0gMDtcblxuICAvLyBkZXRlcm1pbmUgbnVtZXJpYyBnYXBzXG4gIHdoaWxlIChpIGluIHBhcmFtcykge1xuICAgIGkrKztcbiAgfVxuXG4gIHdoaWxlIChvIGluIHBhcmVudCkge1xuICAgIG8rKztcbiAgfVxuXG4gIC8vIG9mZnNldCBudW1lcmljIGluZGljZXMgaW4gcGFyYW1zIGJlZm9yZSBtZXJnZVxuICBmb3IgKGktLTsgaSA+PSAwOyBpLS0pIHtcbiAgICBwYXJhbXNbaSArIG9dID0gcGFyYW1zW2ldO1xuXG4gICAgLy8gY3JlYXRlIGhvbGVzIGZvciB0aGUgbWVyZ2Ugd2hlbiBuZWNlc3NhcnlcbiAgICBpZiAoaSA8IG8pIHtcbiAgICAgIGRlbGV0ZSBwYXJhbXNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1peGluKG9iaiwgcGFyYW1zKTtcbn1cblxuLy8gcmVzdG9yZSBvYmogcHJvcHMgYWZ0ZXIgZnVuY3Rpb25cbmZ1bmN0aW9uIHJlc3RvcmUoZm4sIG9iaikge1xuICB2YXIgcHJvcHMgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDIpO1xuICB2YXIgdmFscyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHByb3BzW2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB2YWxzW2ldID0gb2JqW3Byb3BzW2ldXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gcmVzdG9yZSB2YWxzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqW3Byb3BzW2ldXSA9IHZhbHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8vIHNlbmQgYW4gT1BUSU9OUyByZXNwb25zZVxuZnVuY3Rpb24gc2VuZE9wdGlvbnNSZXNwb25zZShyZXMsIG9wdGlvbnMsIG5leHQpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuam9pbignLCcpO1xuICAgIHJlcy5zZXQoJ0FsbG93JywgYm9keSk7XG4gICAgcmVzLnNlbmQoYm9keSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufVxuXG4vLyB3cmFwIGEgZnVuY3Rpb25cbmZ1bmN0aW9uIHdyYXAob2xkLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gcHJveHkoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCArIDEpO1xuXG4gICAgYXJnc1swXSA9IG9sZDtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgKyAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn1cbiIsIi8qIVxuICogZXhwcmVzc1xuICogQ29weXJpZ2h0KGMpIDIwMDktMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTMgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgcGF0aFJlZ2V4cCA9IHJlcXVpcmUoJ3BhdGgtdG8tcmVnZXhwJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdleHByZXNzOnJvdXRlcjpsYXllcicpO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBMYXllcjtcblxuZnVuY3Rpb24gTGF5ZXIocGF0aCwgb3B0aW9ucywgZm4pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIExheWVyKSkge1xuICAgIHJldHVybiBuZXcgTGF5ZXIocGF0aCwgb3B0aW9ucywgZm4pO1xuICB9XG5cbiAgZGVidWcoJ25ldyAlbycsIHBhdGgpXG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcblxuICB0aGlzLmhhbmRsZSA9IGZuO1xuICB0aGlzLm5hbWUgPSBmbi5uYW1lIHx8ICc8YW5vbnltb3VzPic7XG4gIHRoaXMucGFyYW1zID0gdW5kZWZpbmVkO1xuICB0aGlzLnBhdGggPSB1bmRlZmluZWQ7XG4gIHRoaXMucmVnZXhwID0gcGF0aFJlZ2V4cChwYXRoLCB0aGlzLmtleXMgPSBbXSwgb3B0cyk7XG5cbiAgLy8gc2V0IGZhc3QgcGF0aCBmbGFnc1xuICB0aGlzLnJlZ2V4cC5mYXN0X3N0YXIgPSBwYXRoID09PSAnKidcbiAgdGhpcy5yZWdleHAuZmFzdF9zbGFzaCA9IHBhdGggPT09ICcvJyAmJiBvcHRzLmVuZCA9PT0gZmFsc2Vcbn1cblxuLyoqXG4gKiBIYW5kbGUgdGhlIGVycm9yIGZvciB0aGUgbGF5ZXIuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG5leHRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkxheWVyLnByb3RvdHlwZS5oYW5kbGVfZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVfZXJyb3IoZXJyb3IsIHJlcSwgcmVzLCBuZXh0KSB7XG4gIHZhciBmbiA9IHRoaXMuaGFuZGxlO1xuXG4gIGlmIChmbi5sZW5ndGggIT09IDQpIHtcbiAgICAvLyBub3QgYSBzdGFuZGFyZCBlcnJvciBoYW5kbGVyXG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBmbihlcnJvciwgcmVxLCByZXMsIG5leHQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbi8qKlxuICogSGFuZGxlIHRoZSByZXF1ZXN0IGZvciB0aGUgbGF5ZXIuXG4gKlxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXFcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gbmV4dFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTGF5ZXIucHJvdG90eXBlLmhhbmRsZV9yZXF1ZXN0ID0gZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzLCBuZXh0KSB7XG4gIHZhciBmbiA9IHRoaXMuaGFuZGxlO1xuXG4gIGlmIChmbi5sZW5ndGggPiAzKSB7XG4gICAgLy8gbm90IGEgc3RhbmRhcmQgcmVxdWVzdCBoYW5kbGVyXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgZm4ocmVxLCByZXMsIG5leHQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyByb3V0ZSBtYXRjaGVzIGBwYXRoYCwgaWYgc29cbiAqIHBvcHVsYXRlIGAucGFyYW1zYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkxheWVyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uIG1hdGNoKHBhdGgpIHtcbiAgdmFyIG1hdGNoXG5cbiAgaWYgKHBhdGggIT0gbnVsbCkge1xuICAgIC8vIGZhc3QgcGF0aCBub24tZW5kaW5nIG1hdGNoIGZvciAvIChhbnkgcGF0aCBtYXRjaGVzKVxuICAgIGlmICh0aGlzLnJlZ2V4cC5mYXN0X3NsYXNoKSB7XG4gICAgICB0aGlzLnBhcmFtcyA9IHt9XG4gICAgICB0aGlzLnBhdGggPSAnJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBmYXN0IHBhdGggZm9yICogKGV2ZXJ5dGhpbmcgbWF0Y2hlZCBpbiBhIHBhcmFtKVxuICAgIGlmICh0aGlzLnJlZ2V4cC5mYXN0X3N0YXIpIHtcbiAgICAgIHRoaXMucGFyYW1zID0geycwJzogZGVjb2RlX3BhcmFtKHBhdGgpfVxuICAgICAgdGhpcy5wYXRoID0gcGF0aFxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBtYXRjaCB0aGUgcGF0aFxuICAgIG1hdGNoID0gdGhpcy5yZWdleHAuZXhlYyhwYXRoKVxuICB9XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHRoaXMucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGF0aCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBzdG9yZSB2YWx1ZXNcbiAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgdGhpcy5wYXRoID0gbWF0Y2hbMF1cblxuICB2YXIga2V5cyA9IHRoaXMua2V5cztcbiAgdmFyIHBhcmFtcyA9IHRoaXMucGFyYW1zO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbWF0Y2gubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgdmFyIHByb3AgPSBrZXkubmFtZTtcbiAgICB2YXIgdmFsID0gZGVjb2RlX3BhcmFtKG1hdGNoW2ldKVxuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkIHx8ICEoaGFzT3duUHJvcGVydHkuY2FsbChwYXJhbXMsIHByb3ApKSkge1xuICAgICAgcGFyYW1zW3Byb3BdID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgcGFyYW0gdmFsdWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBkZWNvZGVfcGFyYW0odmFsKSB7XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJyB8fCB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgVVJJRXJyb3IpIHtcbiAgICAgIGVyci5tZXNzYWdlID0gJ0ZhaWxlZCB0byBkZWNvZGUgcGFyYW0gXFwnJyArIHZhbCArICdcXCcnO1xuICAgICAgZXJyLnN0YXR1cyA9IGVyci5zdGF0dXNDb2RlID0gNDAwO1xuICAgIH1cblxuICAgIHRocm93IGVycjtcbiAgfVxufVxuIiwiLyohXG4gKiBleHByZXNzXG4gKiBDb3B5cmlnaHQoYykgMjAwOS0yMDEzIFRKIEhvbG93YXljaHVrXG4gKiBDb3B5cmlnaHQoYykgMjAxMyBSb21hbiBTaHR5bG1hblxuICogQ29weXJpZ2h0KGMpIDIwMTQtMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2V4cHJlc3M6cm91dGVyOnJvdXRlJyk7XG52YXIgZmxhdHRlbiA9IHJlcXVpcmUoJ2FycmF5LWZsYXR0ZW4nKTtcbnZhciBMYXllciA9IHJlcXVpcmUoJy4vbGF5ZXInKTtcbnZhciBtZXRob2RzID0gcmVxdWlyZSgnbWV0aG9kcycpO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGBSb3V0ZWAgd2l0aCB0aGUgZ2l2ZW4gYHBhdGhgLFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUm91dGUocGF0aCkge1xuICB0aGlzLnBhdGggPSBwYXRoO1xuICB0aGlzLnN0YWNrID0gW107XG5cbiAgZGVidWcoJ25ldyAlbycsIHBhdGgpXG5cbiAgLy8gcm91dGUgaGFuZGxlcnMgZm9yIHZhcmlvdXMgaHR0cCBtZXRob2RzXG4gIHRoaXMubWV0aG9kcyA9IHt9O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgcm91dGUgaGFuZGxlcyBhIGdpdmVuIG1ldGhvZC5cbiAqIEBwcml2YXRlXG4gKi9cblxuUm91dGUucHJvdG90eXBlLl9oYW5kbGVzX21ldGhvZCA9IGZ1bmN0aW9uIF9oYW5kbGVzX21ldGhvZChtZXRob2QpIHtcbiAgaWYgKHRoaXMubWV0aG9kcy5fYWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgbmFtZSA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChuYW1lID09PSAnaGVhZCcgJiYgIXRoaXMubWV0aG9kc1snaGVhZCddKSB7XG4gICAgbmFtZSA9ICdnZXQnO1xuICB9XG5cbiAgcmV0dXJuIEJvb2xlYW4odGhpcy5tZXRob2RzW25hbWVdKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7QXJyYXl9IHN1cHBvcnRlZCBIVFRQIG1ldGhvZHNcbiAqIEBwcml2YXRlXG4gKi9cblxuUm91dGUucHJvdG90eXBlLl9vcHRpb25zID0gZnVuY3Rpb24gX29wdGlvbnMoKSB7XG4gIHZhciBtZXRob2RzID0gT2JqZWN0LmtleXModGhpcy5tZXRob2RzKTtcblxuICAvLyBhcHBlbmQgYXV0b21hdGljIGhlYWRcbiAgaWYgKHRoaXMubWV0aG9kcy5nZXQgJiYgIXRoaXMubWV0aG9kcy5oZWFkKSB7XG4gICAgbWV0aG9kcy5wdXNoKCdoZWFkJyk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBtYWtlIHVwcGVyIGNhc2VcbiAgICBtZXRob2RzW2ldID0gbWV0aG9kc1tpXS50b1VwcGVyQ2FzZSgpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG4vKipcbiAqIGRpc3BhdGNoIHJlcSwgcmVzIGludG8gdGhpcyByb3V0ZVxuICogQHByaXZhdGVcbiAqL1xuXG5Sb3V0ZS5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaChyZXEsIHJlcywgZG9uZSkge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIHN0YWNrID0gdGhpcy5zdGFjaztcbiAgaWYgKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBkb25lKCk7XG4gIH1cblxuICB2YXIgbWV0aG9kID0gcmVxLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICBpZiAobWV0aG9kID09PSAnaGVhZCcgJiYgIXRoaXMubWV0aG9kc1snaGVhZCddKSB7XG4gICAgbWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICByZXEucm91dGUgPSB0aGlzO1xuXG4gIG5leHQoKTtcblxuICBmdW5jdGlvbiBuZXh0KGVycikge1xuICAgIC8vIHNpZ25hbCB0byBleGl0IHJvdXRlXG4gICAgaWYgKGVyciAmJiBlcnIgPT09ICdyb3V0ZScpIHtcbiAgICAgIHJldHVybiBkb25lKCk7XG4gICAgfVxuXG4gICAgLy8gc2lnbmFsIHRvIGV4aXQgcm91dGVyXG4gICAgaWYgKGVyciAmJiBlcnIgPT09ICdyb3V0ZXInKSB7XG4gICAgICByZXR1cm4gZG9uZShlcnIpXG4gICAgfVxuXG4gICAgdmFyIGxheWVyID0gc3RhY2tbaWR4KytdO1xuICAgIGlmICghbGF5ZXIpIHtcbiAgICAgIHJldHVybiBkb25lKGVycik7XG4gICAgfVxuXG4gICAgaWYgKGxheWVyLm1ldGhvZCAmJiBsYXllci5tZXRob2QgIT09IG1ldGhvZCkge1xuICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyKSB7XG4gICAgICBsYXllci5oYW5kbGVfZXJyb3IoZXJyLCByZXEsIHJlcywgbmV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyLmhhbmRsZV9yZXF1ZXN0KHJlcSwgcmVzLCBuZXh0KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQWRkIGEgaGFuZGxlciBmb3IgYWxsIEhUVFAgdmVyYnMgdG8gdGhpcyByb3V0ZS5cbiAqXG4gKiBCZWhhdmVzIGp1c3QgbGlrZSBtaWRkbGV3YXJlIGFuZCBjYW4gcmVzcG9uZCBvciBjYWxsIGBuZXh0YFxuICogdG8gY29udGludWUgcHJvY2Vzc2luZy5cbiAqXG4gKiBZb3UgY2FuIHVzZSBtdWx0aXBsZSBgLmFsbGAgY2FsbCB0byBhZGQgbXVsdGlwbGUgaGFuZGxlcnMuXG4gKlxuICogICBmdW5jdGlvbiBjaGVja19zb21ldGhpbmcocmVxLCByZXMsIG5leHQpe1xuICogICAgIG5leHQoKTtcbiAqICAgfTtcbiAqXG4gKiAgIGZ1bmN0aW9uIHZhbGlkYXRlX3VzZXIocmVxLCByZXMsIG5leHQpe1xuICogICAgIG5leHQoKTtcbiAqICAgfTtcbiAqXG4gKiAgIHJvdXRlXG4gKiAgIC5hbGwodmFsaWRhdGVfdXNlcilcbiAqICAgLmFsbChjaGVja19zb21ldGhpbmcpXG4gKiAgIC5nZXQoZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpe1xuICogICAgIHJlcy5zZW5kKCdoZWxsbyB3b3JsZCcpO1xuICogICB9KTtcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKiBAcmV0dXJuIHtSb3V0ZX0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJvdXRlLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiBhbGwoKSB7XG4gIHZhciBoYW5kbGVzID0gZmxhdHRlbihzbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBoYW5kbGUgPSBoYW5kbGVzW2ldO1xuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0eXBlID0gdG9TdHJpbmcuY2FsbChoYW5kbGUpO1xuICAgICAgdmFyIG1zZyA9ICdSb3V0ZS5hbGwoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIGJ1dCBnb3QgYSAnICsgdHlwZVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtc2cpO1xuICAgIH1cblxuICAgIHZhciBsYXllciA9IExheWVyKCcvJywge30sIGhhbmRsZSk7XG4gICAgbGF5ZXIubWV0aG9kID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5tZXRob2RzLl9hbGwgPSB0cnVlO1xuICAgIHRoaXMuc3RhY2sucHVzaChsYXllcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbm1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2Qpe1xuICBSb3V0ZS5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXMgPSBmbGF0dGVuKHNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBoYW5kbGUgPSBoYW5kbGVzW2ldO1xuXG4gICAgICBpZiAodHlwZW9mIGhhbmRsZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgdHlwZSA9IHRvU3RyaW5nLmNhbGwoaGFuZGxlKTtcbiAgICAgICAgdmFyIG1zZyA9ICdSb3V0ZS4nICsgbWV0aG9kICsgJygpIHJlcXVpcmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gYnV0IGdvdCBhICcgKyB0eXBlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfVxuXG4gICAgICBkZWJ1ZygnJXMgJW8nLCBtZXRob2QsIHRoaXMucGF0aClcblxuICAgICAgdmFyIGxheWVyID0gTGF5ZXIoJy8nLCB7fSwgaGFuZGxlKTtcbiAgICAgIGxheWVyLm1ldGhvZCA9IG1ldGhvZDtcblxuICAgICAgdGhpcy5tZXRob2RzW21ldGhvZF0gPSB0cnVlO1xuICAgICAgdGhpcy5zdGFjay5wdXNoKGxheWVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn0pO1xuIiwiLyohXG4gKiBleHByZXNzXG4gKiBDb3B5cmlnaHQoYykgMjAwOS0yMDEzIFRKIEhvbG93YXljaHVrXG4gKiBDb3B5cmlnaHQoYykgMjAxNC0yMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxudmFyIGNvbnRlbnREaXNwb3NpdGlvbiA9IHJlcXVpcmUoJ2NvbnRlbnQtZGlzcG9zaXRpb24nKTtcbnZhciBjb250ZW50VHlwZSA9IHJlcXVpcmUoJ2NvbnRlbnQtdHlwZScpO1xudmFyIGRlcHJlY2F0ZSA9IHJlcXVpcmUoJ2RlcGQnKSgnZXhwcmVzcycpO1xudmFyIGZsYXR0ZW4gPSByZXF1aXJlKCdhcnJheS1mbGF0dGVuJyk7XG52YXIgbWltZSA9IHJlcXVpcmUoJ3NlbmQnKS5taW1lO1xudmFyIGV0YWcgPSByZXF1aXJlKCdldGFnJyk7XG52YXIgcHJveHlhZGRyID0gcmVxdWlyZSgncHJveHktYWRkcicpO1xudmFyIHFzID0gcmVxdWlyZSgncXMnKTtcbnZhciBxdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG5cbi8qKlxuICogUmV0dXJuIHN0cm9uZyBFVGFnIGZvciBgYm9keWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8QnVmZmVyfSBib2R5XG4gKiBAcGFyYW0ge1N0cmluZ30gW2VuY29kaW5nXVxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5ldGFnID0gY3JlYXRlRVRhZ0dlbmVyYXRvcih7IHdlYWs6IGZhbHNlIH0pXG5cbi8qKlxuICogUmV0dXJuIHdlYWsgRVRhZyBmb3IgYGJvZHlgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEJ1ZmZlcn0gYm9keVxuICogQHBhcmFtIHtTdHJpbmd9IFtlbmNvZGluZ11cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMud2V0YWcgPSBjcmVhdGVFVGFnR2VuZXJhdG9yKHsgd2VhazogdHJ1ZSB9KVxuXG4vKipcbiAqIENoZWNrIGlmIGBwYXRoYCBsb29rcyBhYnNvbHV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpe1xuICBpZiAoJy8nID09PSBwYXRoWzBdKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKCc6JyA9PT0gcGF0aFsxXSAmJiAoJ1xcXFwnID09PSBwYXRoWzJdIHx8ICcvJyA9PT0gcGF0aFsyXSkpIHJldHVybiB0cnVlOyAvLyBXaW5kb3dzIGRldmljZSBwYXRoXG4gIGlmICgnXFxcXFxcXFwnID09PSBwYXRoLnN1YnN0cmluZygwLCAyKSkgcmV0dXJuIHRydWU7IC8vIE1pY3Jvc29mdCBBenVyZSBhYnNvbHV0ZSBwYXRoXG59O1xuXG4vKipcbiAqIEZsYXR0ZW4gdGhlIGdpdmVuIGBhcnJgLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmZsYXR0ZW4gPSBkZXByZWNhdGUuZnVuY3Rpb24oZmxhdHRlbixcbiAgJ3V0aWxzLmZsYXR0ZW46IHVzZSBhcnJheS1mbGF0dGVuIG5wbSBtb2R1bGUgaW5zdGVhZCcpO1xuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gYHR5cGVgLCBmb3IgZXhhbXBsZSBcImh0bWxcIiBiZWNvbWVzIFwidGV4dC9odG1sXCIuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubm9ybWFsaXplVHlwZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICByZXR1cm4gfnR5cGUuaW5kZXhPZignLycpXG4gICAgPyBhY2NlcHRQYXJhbXModHlwZSlcbiAgICA6IHsgdmFsdWU6IG1pbWUubG9va3VwKHR5cGUpLCBwYXJhbXM6IHt9IH07XG59O1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBgdHlwZXNgLCBmb3IgZXhhbXBsZSBcImh0bWxcIiBiZWNvbWVzIFwidGV4dC9odG1sXCIuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdHlwZXNcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5ub3JtYWxpemVUeXBlcyA9IGZ1bmN0aW9uKHR5cGVzKXtcbiAgdmFyIHJldCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyArK2kpIHtcbiAgICByZXQucHVzaChleHBvcnRzLm5vcm1hbGl6ZVR5cGUodHlwZXNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIENvbnRlbnQtRGlzcG9zaXRpb24gaGVhZGVyIGFwcHJvcHJpYXRlIGZvciB0aGUgZmlsZW5hbWUuXG4gKiBub24tYXNjaWkgZmlsZW5hbWVzIGFyZSB1cmxlbmNvZGVkIGFuZCBhIGZpbGVuYW1lKiBwYXJhbWV0ZXIgaXMgYWRkZWRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuY29udGVudERpc3Bvc2l0aW9uID0gZGVwcmVjYXRlLmZ1bmN0aW9uKGNvbnRlbnREaXNwb3NpdGlvbixcbiAgJ3V0aWxzLmNvbnRlbnREaXNwb3NpdGlvbjogdXNlIGNvbnRlbnQtZGlzcG9zaXRpb24gbnBtIG1vZHVsZSBpbnN0ZWFkJyk7XG5cbi8qKlxuICogUGFyc2UgYWNjZXB0IHBhcmFtcyBgc3RyYCByZXR1cm5pbmcgYW5cbiAqIG9iamVjdCB3aXRoIGAudmFsdWVgLCBgLnF1YWxpdHlgIGFuZCBgLnBhcmFtc2AuXG4gKiBhbHNvIGluY2x1ZGVzIGAub3JpZ2luYWxJbmRleGAgZm9yIHN0YWJsZSBzb3J0aW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gYWNjZXB0UGFyYW1zKHN0ciwgaW5kZXgpIHtcbiAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KC8gKjsgKi8pO1xuICB2YXIgcmV0ID0geyB2YWx1ZTogcGFydHNbMF0sIHF1YWxpdHk6IDEsIHBhcmFtczoge30sIG9yaWdpbmFsSW5kZXg6IGluZGV4IH07XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBwbXMgPSBwYXJ0c1tpXS5zcGxpdCgvICo9ICovKTtcbiAgICBpZiAoJ3EnID09PSBwbXNbMF0pIHtcbiAgICAgIHJldC5xdWFsaXR5ID0gcGFyc2VGbG9hdChwbXNbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQucGFyYW1zW3Btc1swXV0gPSBwbXNbMV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBDb21waWxlIFwiZXRhZ1wiIHZhbHVlIHRvIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAge0Jvb2xlYW58U3RyaW5nfEZ1bmN0aW9ufSB2YWxcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5jb21waWxlRVRhZyA9IGZ1bmN0aW9uKHZhbCkge1xuICB2YXIgZm47XG5cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgc3dpdGNoICh2YWwpIHtcbiAgICBjYXNlIHRydWU6XG4gICAgICBmbiA9IGV4cG9ydHMud2V0YWc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGZhbHNlOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3Ryb25nJzpcbiAgICAgIGZuID0gZXhwb3J0cy5ldGFnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd2Vhayc6XG4gICAgICBmbiA9IGV4cG9ydHMud2V0YWc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5rbm93biB2YWx1ZSBmb3IgZXRhZyBmdW5jdGlvbjogJyArIHZhbCk7XG4gIH1cblxuICByZXR1cm4gZm47XG59XG5cbi8qKlxuICogQ29tcGlsZSBcInF1ZXJ5IHBhcnNlclwiIHZhbHVlIHRvIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ3xGdW5jdGlvbn0gdmFsXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuY29tcGlsZVF1ZXJ5UGFyc2VyID0gZnVuY3Rpb24gY29tcGlsZVF1ZXJ5UGFyc2VyKHZhbCkge1xuICB2YXIgZm47XG5cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgc3dpdGNoICh2YWwpIHtcbiAgICBjYXNlIHRydWU6XG4gICAgICBmbiA9IHF1ZXJ5c3RyaW5nLnBhcnNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBmYWxzZTpcbiAgICAgIGZuID0gbmV3T2JqZWN0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXh0ZW5kZWQnOlxuICAgICAgZm4gPSBwYXJzZUV4dGVuZGVkUXVlcnlTdHJpbmc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzaW1wbGUnOlxuICAgICAgZm4gPSBxdWVyeXN0cmluZy5wYXJzZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmtub3duIHZhbHVlIGZvciBxdWVyeSBwYXJzZXIgZnVuY3Rpb246ICcgKyB2YWwpO1xuICB9XG5cbiAgcmV0dXJuIGZuO1xufVxuXG4vKipcbiAqIENvbXBpbGUgXCJwcm94eSB0cnVzdFwiIHZhbHVlIHRvIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAge0Jvb2xlYW58U3RyaW5nfE51bWJlcnxBcnJheXxGdW5jdGlvbn0gdmFsXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuY29tcGlsZVRydXN0ID0gZnVuY3Rpb24odmFsKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsO1xuXG4gIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAvLyBTdXBwb3J0IHBsYWluIHRydWUvZmFsc2VcbiAgICByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIHRydWUgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIC8vIFN1cHBvcnQgdHJ1c3RpbmcgaG9wIGNvdW50XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGkpeyByZXR1cm4gaSA8IHZhbCB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gU3VwcG9ydCBjb21tYS1zZXBhcmF0ZWQgdmFsdWVzXG4gICAgdmFsID0gdmFsLnNwbGl0KC8gKiwgKi8pO1xuICB9XG5cbiAgcmV0dXJuIHByb3h5YWRkci5jb21waWxlKHZhbCB8fCBbXSk7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjaGFyc2V0IGluIGEgZ2l2ZW4gQ29udGVudC1UeXBlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGNoYXJzZXRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuc2V0Q2hhcnNldCA9IGZ1bmN0aW9uIHNldENoYXJzZXQodHlwZSwgY2hhcnNldCkge1xuICBpZiAoIXR5cGUgfHwgIWNoYXJzZXQpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIC8vIHBhcnNlIHR5cGVcbiAgdmFyIHBhcnNlZCA9IGNvbnRlbnRUeXBlLnBhcnNlKHR5cGUpO1xuXG4gIC8vIHNldCBjaGFyc2V0XG4gIHBhcnNlZC5wYXJhbWV0ZXJzLmNoYXJzZXQgPSBjaGFyc2V0O1xuXG4gIC8vIGZvcm1hdCB0eXBlXG4gIHJldHVybiBjb250ZW50VHlwZS5mb3JtYXQocGFyc2VkKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVUYWcgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBnZW5lcmF0aW5nIEVUYWdzIHdpdGhcbiAqIHRoZSBnaXZlbiBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRVRhZ0dlbmVyYXRvciAob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gZ2VuZXJhdGVFVGFnIChib2R5LCBlbmNvZGluZykge1xuICAgIHZhciBidWYgPSAhQnVmZmVyLmlzQnVmZmVyKGJvZHkpXG4gICAgICA/IEJ1ZmZlci5mcm9tKGJvZHksIGVuY29kaW5nKVxuICAgICAgOiBib2R5XG5cbiAgICByZXR1cm4gZXRhZyhidWYsIG9wdGlvbnMpXG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBleHRlbmRlZCBxdWVyeSBzdHJpbmcgd2l0aCBxcy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlRXh0ZW5kZWRRdWVyeVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHFzLnBhcnNlKHN0ciwge1xuICAgIGFsbG93UHJvdG90eXBlczogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gbmV3IGVtcHR5IG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBuZXdPYmplY3QoKSB7XG4gIHJldHVybiB7fTtcbn1cbiIsIi8qIVxuICogZXhwcmVzc1xuICogQ29weXJpZ2h0KGMpIDIwMDktMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTMgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdleHByZXNzOnZpZXcnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGlybmFtZSA9IHBhdGguZGlybmFtZTtcbnZhciBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWU7XG52YXIgZXh0bmFtZSA9IHBhdGguZXh0bmFtZTtcbnZhciBqb2luID0gcGF0aC5qb2luO1xudmFyIHJlc29sdmUgPSBwYXRoLnJlc29sdmU7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFZpZXdgIHdpdGggdGhlIGdpdmVuIGBuYW1lYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAgLSBgZGVmYXVsdEVuZ2luZWAgdGhlIGRlZmF1bHQgdGVtcGxhdGUgZW5naW5lIG5hbWVcbiAqICAgLSBgZW5naW5lc2AgdGVtcGxhdGUgZW5naW5lIHJlcXVpcmUoKSBjYWNoZVxuICogICAtIGByb290YCByb290IHBhdGggZm9yIHZpZXcgbG9va3VwXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gVmlldyhuYW1lLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcblxuICB0aGlzLmRlZmF1bHRFbmdpbmUgPSBvcHRzLmRlZmF1bHRFbmdpbmU7XG4gIHRoaXMuZXh0ID0gZXh0bmFtZShuYW1lKTtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5yb290ID0gb3B0cy5yb290O1xuXG4gIGlmICghdGhpcy5leHQgJiYgIXRoaXMuZGVmYXVsdEVuZ2luZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZGVmYXVsdCBlbmdpbmUgd2FzIHNwZWNpZmllZCBhbmQgbm8gZXh0ZW5zaW9uIHdhcyBwcm92aWRlZC4nKTtcbiAgfVxuXG4gIHZhciBmaWxlTmFtZSA9IG5hbWU7XG5cbiAgaWYgKCF0aGlzLmV4dCkge1xuICAgIC8vIGdldCBleHRlbnNpb24gZnJvbSBkZWZhdWx0IGVuZ2luZSBuYW1lXG4gICAgdGhpcy5leHQgPSB0aGlzLmRlZmF1bHRFbmdpbmVbMF0gIT09ICcuJ1xuICAgICAgPyAnLicgKyB0aGlzLmRlZmF1bHRFbmdpbmVcbiAgICAgIDogdGhpcy5kZWZhdWx0RW5naW5lO1xuXG4gICAgZmlsZU5hbWUgKz0gdGhpcy5leHQ7XG4gIH1cblxuICBpZiAoIW9wdHMuZW5naW5lc1t0aGlzLmV4dF0pIHtcbiAgICAvLyBsb2FkIGVuZ2luZVxuICAgIHZhciBtb2QgPSB0aGlzLmV4dC5zdWJzdHIoMSlcbiAgICBkZWJ1ZygncmVxdWlyZSBcIiVzXCInLCBtb2QpXG5cbiAgICAvLyBkZWZhdWx0IGVuZ2luZSBleHBvcnRcbiAgICB2YXIgZm4gPSByZXF1aXJlKG1vZCkuX19leHByZXNzXG5cbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSBcIicgKyBtb2QgKyAnXCIgZG9lcyBub3QgcHJvdmlkZSBhIHZpZXcgZW5naW5lLicpXG4gICAgfVxuXG4gICAgb3B0cy5lbmdpbmVzW3RoaXMuZXh0XSA9IGZuXG4gIH1cblxuICAvLyBzdG9yZSBsb2FkZWQgZW5naW5lXG4gIHRoaXMuZW5naW5lID0gb3B0cy5lbmdpbmVzW3RoaXMuZXh0XTtcblxuICAvLyBsb29rdXAgcGF0aFxuICB0aGlzLnBhdGggPSB0aGlzLmxvb2t1cChmaWxlTmFtZSk7XG59XG5cbi8qKlxuICogTG9va3VwIHZpZXcgYnkgdGhlIGdpdmVuIGBuYW1lYFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5cblZpZXcucHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cChuYW1lKSB7XG4gIHZhciBwYXRoO1xuICB2YXIgcm9vdHMgPSBbXS5jb25jYXQodGhpcy5yb290KTtcblxuICBkZWJ1ZygnbG9va3VwIFwiJXNcIicsIG5hbWUpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdHMubGVuZ3RoICYmICFwYXRoOyBpKyspIHtcbiAgICB2YXIgcm9vdCA9IHJvb3RzW2ldO1xuXG4gICAgLy8gcmVzb2x2ZSB0aGUgcGF0aFxuICAgIHZhciBsb2MgPSByZXNvbHZlKHJvb3QsIG5hbWUpO1xuICAgIHZhciBkaXIgPSBkaXJuYW1lKGxvYyk7XG4gICAgdmFyIGZpbGUgPSBiYXNlbmFtZShsb2MpO1xuXG4gICAgLy8gcmVzb2x2ZSB0aGUgZmlsZVxuICAgIHBhdGggPSB0aGlzLnJlc29sdmUoZGlyLCBmaWxlKTtcbiAgfVxuXG4gIHJldHVybiBwYXRoO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwcml2YXRlXG4gKi9cblxuVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGRlYnVnKCdyZW5kZXIgXCIlc1wiJywgdGhpcy5wYXRoKTtcbiAgdGhpcy5lbmdpbmUodGhpcy5wYXRoLCBvcHRpb25zLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIFJlc29sdmUgdGhlIGZpbGUgd2l0aGluIHRoZSBnaXZlbiBkaXJlY3RvcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRpclxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVcbiAqIEBwcml2YXRlXG4gKi9cblxuVmlldy5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUoZGlyLCBmaWxlKSB7XG4gIHZhciBleHQgPSB0aGlzLmV4dDtcblxuICAvLyA8cGF0aD4uPGV4dD5cbiAgdmFyIHBhdGggPSBqb2luKGRpciwgZmlsZSk7XG4gIHZhciBzdGF0ID0gdHJ5U3RhdChwYXRoKTtcblxuICBpZiAoc3RhdCAmJiBzdGF0LmlzRmlsZSgpKSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICAvLyA8cGF0aD4vaW5kZXguPGV4dD5cbiAgcGF0aCA9IGpvaW4oZGlyLCBiYXNlbmFtZShmaWxlLCBleHQpLCAnaW5kZXgnICsgZXh0KTtcbiAgc3RhdCA9IHRyeVN0YXQocGF0aCk7XG5cbiAgaWYgKHN0YXQgJiYgc3RhdC5pc0ZpbGUoKSkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybiBhIHN0YXQsIG1heWJlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJuIHtmcy5TdGF0c31cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHJ5U3RhdChwYXRoKSB7XG4gIGRlYnVnKCdzdGF0IFwiJXNcIicsIHBhdGgpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGZzLnN0YXRTeW5jKHBhdGgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHByZXNzL2xpYiBzeW5jIHJlY3Vyc2l2ZVwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsImltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xufTtcblxudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBcIkBAcmVkdXgvSU5JVFwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFJFUExBQ0U6IFwiQEByZWR1eC9SRVBMQUNFXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUFJPQkVfVU5LTk9XTl9BQ1RJT046IGZ1bmN0aW9uIFBST0JFX1VOS05PV05fQUNUSU9OKCkge1xuICAgIHJldHVybiBcIkBAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05cIiArIHJhbmRvbVN0cmluZygpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gb2JqO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byAnICsgJ2NyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtICcgKyAndG9nZXRoZXIgdG8gYSBzaW5nbGUgZnVuY3Rpb24uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGlzIG1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGN1cnJlbnRMaXN0ZW5lcnMgc28gd2UgY2FuIHVzZVxuICAgKiBuZXh0TGlzdGVuZXJzIGFzIGEgdGVtcG9yYXJ5IGxpc3Qgd2hpbGUgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJldmVudHMgYW55IGJ1Z3MgYXJvdW5kIGNvbnN1bWVycyBjYWxsaW5nXG4gICAqIHN1YnNjcmliZS91bnN1YnNjcmliZSBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuZ2V0U3RhdGUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiAnICsgJ1Bhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBub3RpZmllZCBhZnRlciB0aGUgc3RvcmUgaGFzIGJlZW4gdXBkYXRlZCwgc3Vic2NyaWJlIGZyb20gYSAnICsgJ2NvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgY3VycmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7IC8vIFRoaXMgYWN0aW9uIGhhcyBhIHNpbWlsaWFyIGVmZmVjdCB0byBBY3Rpb25UeXBlcy5JTklULlxuICAgIC8vIEFueSByZWR1Y2VycyB0aGF0IGV4aXN0ZWQgaW4gYm90aCB0aGUgbmV3IGFuZCBvbGQgcm9vdFJlZHVjZXJcbiAgICAvLyB3aWxsIHJlY2VpdmUgdGhlIHByZXZpb3VzIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAgIC8vIHRoZSBuZXcgc3RhdGUgdHJlZSB3aXRoIGFueSByZWxldmFudCBkYXRhIGZyb20gdGhlIG9sZCBvbmUuXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRVBMQUNFXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH0gLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG5cblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICB9KTtcbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG59XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uRGVzY3JpcHRpb24gPSBhY3Rpb25UeXBlICYmIFwiYWN0aW9uIFxcXCJcIiArIFN0cmluZyhhY3Rpb25UeXBlKSArIFwiXFxcIlwiIHx8ICdhbiBhY3Rpb24nO1xuICByZXR1cm4gXCJHaXZlbiBcIiArIGFjdGlvbkRlc2NyaXB0aW9uICsgXCIsIHJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZC4gXCIgKyBcIlRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gXCIgKyBcIklmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gXCJUaGUgXCIgKyBhcmd1bWVudE5hbWUgKyBcIiBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFxcXCJcIiArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgXCJcXFwiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIFwiICsgKFwia2V5czogXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCJcIik7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5SRVBMQUNFKSByZXR1cm47XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gXCJVbmV4cGVjdGVkIFwiICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyBcIiBcIiArIChcIlxcXCJcIiArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiIGZvdW5kIGluIFwiICsgYXJndW1lbnROYW1lICsgXCIuIFwiKSArIFwiRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiArIChcIlxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gXCIgKyBcIklmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBcIiArIFwiZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBcIiArIFwibm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgXCIgKyBcInlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0JFX1VOS05PV05fQUNUSU9OKClcbiAgICB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIFwiICsgKFwiRG9uJ3QgdHJ5IHRvIGhhbmRsZSBcIiArIEFjdGlvblR5cGVzLklOSVQgKyBcIiBvciBvdGhlciBhY3Rpb25zIGluIFxcXCJyZWR1eC8qXFxcIiBcIikgKyBcIm5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIFwiICsgXCJjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBcIiArIFwiaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIFwiICsgXCJhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC5cIik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoXCJObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpOyAvLyBUaGlzIGlzIHVzZWQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHdhcm4gYWJvdXQgdGhlIHNhbWVcbiAgLy8ga2V5cyBtdWx0aXBsZSB0aW1lcy5cblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvcjtcblxuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuXG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cblxuICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhzdGF0ZSkubGVuZ3RoO1xuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGFuIGFjdGlvbiBjcmVhdG9yIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBkaXNwYXRjaCB3cmFwcGVkIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCBcIiArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyBcIi4gXCIgKyBcIkRpZCB5b3Ugd3JpdGUgXFxcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIiBpbnN0ZWFkIG9mIFxcXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIj9cIik7XG4gIH1cblxuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkpO1xuICB9XG5cbiAgaWYgKGVudW1lcmFibGVPbmx5KSBrZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gJyArICdPdGhlciBtaWRkbGV3YXJlIHdvdWxkIG5vdCBiZSBhcHBsaWVkIHRvIHRoaXMgZGlzcGF0Y2guJyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKlxuICogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuICogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuICovXG5cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gIHdhcm5pbmcoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBzZXR0aW5nIG1vZGUgdG8gcHJvZHVjdGlvbiBpbiB3ZWJwYWNrIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmNlcHRzL21vZGUvKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IEFjdGlvblR5cGVzIGFzIF9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXMsIGFwcGx5TWlkZGxld2FyZSwgYmluZEFjdGlvbkNyZWF0b3JzLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH07XG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgcG9ueWZpbGwgZnJvbSAnLi9wb255ZmlsbC5qcyc7XG5cbnZhciByb290O1xuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSBwb255ZmlsbChyb290KTtcbmV4cG9ydCBkZWZhdWx0IHJlc3VsdDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChTeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0U3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY2NlcHRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcnJheS1mbGF0dGVuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudC1kaXNwb3NpdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudC10eXBlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1zaWduYXR1cmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlYnVnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZXBkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbmNvZGV1cmxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVzY2FwZS1odG1sXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpbmFsaGFuZGxlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJlc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZXJnZS1kZXNjcmlwdG9yc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWV0aG9kc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9uLWZpbmlzaGVkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXJzZXVybFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC10by1yZWdleHBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3h5LWFkZHJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmFuZ2UtcGFyc2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWh0bWwtcGFyc2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkYWJsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRpcHB5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2FmZS1idWZmZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbmRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2ZS1zdGF0aWNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNldHByb3RvdHlwZW9mXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdGF0dXNlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZS1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbHMtbWVyZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhcnlcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vc3JjL0FwcCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zcmMvc3RvcmUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG52YXIgaW5kZXggPSBmcy5yZWFkRmlsZVN5bmMoJ2J1aWxkL2luZGV4Lmh0bWwnKS50b1N0cmluZygpO1xuXG4vLyBjb25zdCBwYXJ0cyA9IGh0bWwuc3BsaXQoJzwhLS0gbm90IHJlbmRlcmVkIC0tPicpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmNvbnN0IGZldGNoQXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc29sZS5sb2coJ2ZldGNoIGFydGljbGVzIHJ1bm5pbmcnKVxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9hcnRpY2xlL2FsbCcpXG5cdFx0Y29uc3QgYXJ0aWNsZXMgPSByZXMuZGF0YS5kYXRhLmFydGljbGVzXG5cdFx0cmV0dXJuIGFydGljbGVzXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcblx0fVxufVxuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdidWlsZCcpKTtcbmFwcC51c2UoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cblxuXG5cdHZhciBmaW5hbEh0bWxcblx0dmFyIGFydGljbGVzXG5cdGlmIChyZXEudXJsID09PSBcIi9ibG9nXCIpIHtcblx0XHRhcnRpY2xlcyA9IGF3YWl0IGZldGNoQXJ0aWNsZXMoKVxuXHR9XG5cdGNvbnN0IHJlYWN0TWFya3VwID0gKFxuXHRcdDxSZWFjdC5TdHJpY3RNb2RlPlxuXHRcdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0XHRcdDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e3t9fT5cblx0XHRcdFx0XHQ8QXBwIGFydGljbGVzPXthcnRpY2xlc30gLz5cblx0XHRcdFx0PC9TdGF0aWNSb3V0ZXI+XG5cdFx0XHQ8L1Byb3ZpZGVyPlxuXHRcdDwvUmVhY3QuU3RyaWN0TW9kZT5cblx0KTtcblx0Y29uc3QgaHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKHJlYWN0TWFya3VwKTtcblxuXG5cdGZpbmFsSHRtbCA9IGluZGV4XG5cdFx0LnJlcGxhY2UoJzxkaXYgaWQ9XCJyb290XCI+PC9kaXY+JywgYDxkaXYgaWQ9XCJyb290XCI+JHtodG1sfTwvZGl2PmApXG5cdFx0LnJlcGxhY2UoXG5cdFx0XHQnLy9zY3JpcHQnLFxuXHRcdFx0YHdpbmRvdy5fSU5JVElBTF9EQVRBXyA9ICR7c2VyaWFsaXplKGFydGljbGVzKX1gXG5cdFx0KTtcblxuXHQvLyBcdFx0LnJlcGxhY2UoXG5cdC8vIFx0XHRcdCcvL3NjcmlwdCcsXG5cdC8vIFx0XHRcdGB3aW5kb3cuX0lOSVRJQUxfREFUQV8gPSBcblx0Ly8gJHtzZXJpYWxpemUoYXJ0aWNsZXNBcnJheSl9YFxuXHQvLyApO1xuXHRyZXMuc2VuZChmaW5hbEh0bWwpO1xuXHRyZXMuZW5kKCk7XG59KTtcblxuXG5cbmNvbnNvbGUubG9nKGBsaXN0ZW5pbmcgb24gJHtQT1JUfWApO1xuYXBwLmxpc3RlbihQT1JUKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=