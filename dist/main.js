/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
  console.log('app, checking working');
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



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "redux");

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



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "redux");

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6a9c349616dc7691ef60a320703cb77a.PNG");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("framer-motion");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-helmet");;

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-html-parser");;

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-loadable");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "react-tippy":
/*!******************************!*\
  !*** external "react-tippy" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-tippy");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-toastify");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");;

/***/ }),

/***/ "reload":
/*!*************************!*\
  !*** external "reload" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("reload");;

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/


var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _App = _interopRequireDefault(__webpack_require__(/*! ./src/App */ "./src/App.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./src/store */ "./src/store.js"));

var _reload = _interopRequireDefault(__webpack_require__(/*! reload */ "reload"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

var _serializeJavascript = _interopRequireDefault(__webpack_require__(/*! serialize-javascript */ "serialize-javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = __webpack_require__(/*! path */ "path");

const PORT = process.env.PORT || 3000;

var index = _fs.default.readFileSync('build/index.html').toString(); // const parts = html.split('<!-- not rendered -->');


const app = (0, _express.default)();
const dev = "development" === 'development';

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
if (dev) (0, _reload.default)(app);
app.use(async (req, res) => {
  var finalHtml;
  var articles;

  if (req.url === '/blog') {
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

  const html = (0, _server.renderToString)(reactMarkup);
  finalHtml = index.replace('<div id="root"></div>', `<div id="root">${html}</div>`).replace('//script', `window._INITIAL_DATA_ = ${(0, _serializeJavascript.default)(articles)}`); // console.log(finalHtml);
  // console.log('working');

  res.send(finalHtml);
  res.end();
});
app.listen(PORT, () => console.log(`listening on ${PORT}`));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy9hcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvc3BlY2lhbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3RvYXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvdG9waWMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3VpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0FkZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaWNvbnMvQ2hldnJvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0Nyb3NzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9EZWxldGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0xvY2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL1JlYWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BYm91dC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BdXRoLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQmxvZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9MZWFybi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9VcHNlcnRBcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVXBzZXJ0Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydFRvcGljLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVXBzZXJ0VmlkZW8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9Qcml2YXRlUm91dGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9TZW8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9oZWxwZXJzL3NldEF1dGhUb2tlbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9oZWxwZXJzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvQnV0dG9ucy9Vc2VyQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvQnV0dG9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvRm9vdGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9OYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9OYXZiYXIvU2lnbmVkSW5MaW5rcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL1NpZ25lZE91dExpbmtzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvcHJlbG9hZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy9zcGVjaWFsaXR5LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL3RvcGljLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL3VpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL3ZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Fib3V0L0Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvYWJvdXQvUXVlc3Rpb25zLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Jsb2cvQWxsLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Jsb2cvRmVhdHVyZWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvYmxvZy9MYXRlc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvZWRpdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2hvbWUvSGVyby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ob21lL0hlcm9DYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9sZWFybi9BcnRpY2xlTmFtZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvbGVhcm4vQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9sZWFybi9WaWRlb05hbWVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL3ByZXZpZXcvQXJ0aWNsZVByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvcHJldmlldy9Ub3BpY3NPdmVydmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9wcmV2aWV3L1ZpZGVvUHJldmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaW1nL2NnVHJhbnNwYXJlbnQuUE5HIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaHRtbC1wYXJzZXJcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWxvYWRhYmxlXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtdGlwcHlcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVsb2FkXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaXNDbGllbnQiLCJsb2NhbFN0b3JhZ2UiLCJ0b2tlbiIsIkFwcCIsImFydGljbGVzIiwic3RvcmUiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwiQWJvdXQiLCJMZWFybiIsInByb3BzIiwiUHJldmlldyIsIkFydGljbGUiLCJjbGVhckFydGljbGUiLCJpZCIsInR5cGUiLCJnZXRBcnRpY2xlIiwicmVzIiwiZGF0YSIsInBheWxvYWQiLCJlcnJvciIsImdldEFsbEFydGljbGVzIiwic3RhdHVzIiwiYWRkQXJ0aWNsZSIsImVkaXRBcnRpY2xlIiwic3BlY2lhbGl0eU5hbWUiLCJyZXMyIiwiZGVsZXRlQXJ0aWNsZSIsImFydGljbGVJZCIsInRvcGljSWQiLCJsb2FkVXNlciIsInVzZXJJZCIsImdldEl0ZW0iLCJVU0VSX0xPQURFRCIsInVzZXIiLCJlcnIiLCJBVVRIX0VSUk9SIiwicmVmcmVzaFVzZXIiLCJyZWdpc3RlciIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJSRUdJU1RFUl9GQUlMIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJsb2dvdXQiLCJjbGVhciIsInNlbmRSZXNldEVtYWlsIiwiY29uZmlnIiwibWVzc2FnZXNBcnJheSIsIm1lc3NhZ2VzIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJtc2ciLCJTRU5EX1JFU0VUX0VNQUlMIiwiZXJyb3JzIiwicmVzcG9uc2UiLCJTRU5EX1JFU0VUX0VNQUlMX0ZBSUwiLCJnZXRTcGVjaWFsaXRpZXMiLCJjbGVhclNwZWNpYWxpdHkiLCJnZXRTcGVjaWFsaXR5Iiwic3BlY2lhbGl0eSIsImFkZFNwZWNpYWxpdHkiLCJlZGl0U3BlY2lhbGl0eSIsImRlbGV0ZVNwZWNpYWxpdHkiLCJzdWNjZXNzVG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImVycm9yVG9hc3QiLCJnZXRUb3BpY3MiLCJhZGRUb3BpYyIsImVkaXRUb3BpYyIsInVubG9ja1RvcGljIiwiZGVsZXRlVG9waWMiLCJTRVRfQUxFUlQiLCJSRU1PVkVfQUxFUlQiLCJMT0dPVVQiLCJzZXRPcGVuVG9waWNzIiwib3BlblRvcGljc0FycmF5IiwiZ2V0U3RhdGUiLCJ1aSIsIm9wZW5Ub3BpY3MiLCJpbmNsdWRlcyIsInB1c2giLCJzcGxpY2UiLCJpbmRleE9mIiwic2V0RGlzcGxheU1vZGUiLCJkaXNwbGF5TW9kZSIsInNldEl0ZW0iLCJnZXRWaWRlbyIsImFkZFZpZGVvIiwicmVzVG9waWMiLCJlZGl0VmlkZW8iLCJkZWxldGVWaWRlbyIsInZpZGVvSWQiLCJzZWxlY3RWaWRlbyIsInZpZGVvIiwiQWRkIiwic2l6ZSIsImNvbG9yIiwiQ2hldnJvbnNVcCIsIkNoZXZyb25zTGVmdCIsIkNyb3NzIiwiRGVsZXRlIiwiTG9jayIsImhhbmRsZXIiLCJVbmxvY2siLCJSZWFkIiwiVXBkYXRlIiwib3BhY2l0eSIsInRleHRBbGlnbiIsIm5hbWUiLCJtYXRjaCIsInBhcmFtcyIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwiZ2V0QXJ0aWNsZUVmZmVjdCIsInJlcGxhY2UiLCJnb1RvVG9wIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImh0bWwiLCJjb250ZW50IiwicGFkZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiYXV0aCIsIkF1dGgiLCJzZXREYXRhIiwiZGluVGV4dCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcmV2IiwidGFyZ2V0IiwidmFsdWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFnZSIsImNvZGVSZWZmZXJlZCIsIkJsb2ciLCJzZXJ2ZXJBcnRpY2xlcyIsInN0b3JlQXJ0aWNsZXMiLCJpc0FkbWluIiwic2V0QXJ0aWNsZXMiLCJsZW5ndGgiLCJmb250RmFtaWx5IiwiaG9tZUNvbnRlbnQiLCJjbG9zZSIsInNldENsb3NlIiwiZGlzcGxheSIsImhlaWdodCIsImZvbnRTaXplIiwiVXBzZXJ0QXJ0aWNsZSIsInNwZWNpYWxpdGllcyIsInByZXZBcnRpY2xlIiwic2V0Y29udGVudCIsInNldG5hbWUiLCJrZXl3b3JkcyIsInNldEFydGljbGVLZXl3b3JkcyIsImZlYXR1cmVkIiwic2V0ZmVhdHVyZWQiLCJ0aHVtYm5haWxVcmwiLCJzZXR0aHVtYm5haWxVcmwiLCJzY3JvbGxUbyIsImVsZW1lbnQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJiZWhhdmlvciIsImxlZnQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJlZGl0IiwiaGFuZGxlRWRpdG9yIiwiaGFuZGxlRWRpdCIsIl9pZCIsIk5hbWUiLCJoYW5kbGVBZGQiLCJzZWxlY3RlZEFydGljbGUiLCJVcHNlcnRDYXJkIiwic2V0U3RhdGUiLCJmZXRjaERhdGEiLCJpbWFnZVVybCIsImhhbmRsZUNoYW5nZSIsIlVwc2VydFRvcGljIiwibG9jYXRpb24iLCJsb2NrZWQiLCJpc0xvY2tlZCIsInNwZWNpYWxpdHlJZCIsIlVwc2VydFZpZGVvIiwicHJldlZpZGVvIiwic2V0TmFtZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ1cmwiLCJzZXRVcmwiLCJzZWxlY3RlZFZpZGVvIiwiUHJpdmF0ZVJvdXRlIiwiY29tcG9uZW50IiwiQ29tcG9uZW50IiwiaXNBdXRoZW50aWNhdGVkIiwicmVzdCIsIlNlbyIsInRpdGxlIiwibGFuZyIsIm1ldGEiLCJyaWNocmVzdWx0IiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwicHJvcGVydHkiLCJjb25jYXQiLCJyZWwiLCJocmVmIiwiaW5uZXJIVE1MIiwic2VydmljZVBvc3QiLCJwYXRoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInBvc3QiLCJTRVJWSUNFX1VSTCIsInRoZW4iLCJjYXRjaCIsInNlcnZpY2VHZXQiLCJnZXQiLCJzZXRBdXRoVG9rZW4iLCJkZWZhdWx0cyIsImNvbW1vbiIsIlRvb2x0aXBXcmFwcGVyIiwiY2hpbGRyZW4iLCJBZG1pbkJ1dHRvbnMiLCJBZG1pbkJ1dHRvbnNXcmFwcGVyIiwicGF0aG5hbWUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwib3V0bGluZSIsIklubmVyRGl2IiwiZGFyayIsImJnIiwiYmFja2dyb3VuZENvbG9yIiwiQnV0dG9uIiwiaXNCdXR0b24iLCJMb2NrQnV0dG9uIiwiRm9vdGVyU29jaWFsTWVkaWEiLCJGb290ZXIiLCJzZXRFbWFpbCIsInNldE1lc3NhZ2UiLCJzZXRGb290ZXJNZXNzYWdlIiwiTmF2YmFyIiwibmF2YmFyRXhwYW5kZWQiLCJzZXRuYXZiYXJFeHBhbmRlZCIsInN3aXRjaGVkIiwic2V0c3dpdGNoZWQiLCJtb2RlIiwicmVtb3ZlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiTG9nbyIsIndpZHRoIiwicG9pbnRzIiwiU2lnbmVkSW5MaW5rcyIsIlNpZ25lZE91dExpbmtzIiwiUHJlbG9hZGVyIiwiaW5pdGlhbFN0YXRlIiwiYXJ0aWNsZVJlZHVjZXIiLCJhY3Rpb24iLCJ0b3BpY3MiLCJsb2FkaW5nIiwiYXV0aFJlZHVjZXIiLCJyb2xlIiwicmVtb3ZlSXRlbSIsInRvcGljIiwic3BlY2lhbGl0eVJlZHVjZXIiLCJ0b3BpY1JlZHVjZXIiLCJ1aVJlZHVjZXIiLCJ2aWRlb1JlZHVjZXIiLCJQcm9maWxlQ2FyZCIsImJpbyIsInBvcnRmb2xpb1VybCIsImluc3RhVXJsIiwidHdpdHRlclVybCIsImdpdGh1YlVybCIsIkFib3V0VXMiLCJvbnNjcm9sbCIsIm15RnVuY3Rpb24iLCJzY3JvbGxZIiwiUXVlc3Rpb25zIiwiQWxsIiwibWFwIiwiQXJ0aWNsZUlkIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiRmVhdHVyZWQiLCJMYXRlc3QiLCJIZXJvIiwiSGVyb0NhcmRzIiwiaGVyb0JsdWUiLCJoZXJvT3JhbmdlIiwiaGVyb0dyZWVuIiwic2Nyb2xsRnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQXJ0aWNsZU5hbWVzIiwiaGFuZGxlRGVsZXRlIiwiQXJ0aWNsZU5hbWUiLCJjb25maXJtIiwicHJvbXB0IiwicG9zIiwiQ2FyZCIsIml0ZW0iLCJhbHQiLCJWaWRlb05hbWVzIiwiVmlkZW9OYW1lIiwiQXJ0aWNsZVByZXZpZXciLCJTZWxlY3RlZEFydGljbGUiLCJSZWFkTW9yZVVybCIsImhhbmRsZVVubG9jayIsIlRvcGljc092ZXJ2aWV3Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJzcGxpdCIsImpvaW4iLCJ1bkxvY2tlZFRvcGljcyIsInZpZGVvcyIsIkFjdGlvbkJ1dHRvbnMiLCJWaWRlb1ByZXZpZXciLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJyb290UmVkdWNlciIsInJlcXVpcmUiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsImluZGV4IiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJ0b1N0cmluZyIsImFwcCIsImRldiIsImZldGNoQXJ0aWNsZXMiLCJ1c2UiLCJleHByZXNzIiwic3RhdGljIiwicmVxIiwiZmluYWxIdG1sIiwicmVhY3RNYXJrdXAiLCJzZW5kIiwiZW5kIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsMEJBQVlDLFlBQVksQ0FBQ0MsS0FBN0IsRUFBb0M7QUFDbkMsa0NBQWFELFlBQVksQ0FBQ0MsS0FBMUI7QUFDQTs7QUFFRCxNQUFNQyxHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDN0Isd0JBQVUsTUFBTTtBQUNmQyxtQkFBTUMsUUFBTixDQUFlLHFCQUFm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O0FBV0gsQ0FiRDs7ZUFlZTBMLE07Ozs7Ozs7Ozs7O0FDbkJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFD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QUo7QUFDQSxNQUFJbFcsUUFBSjs7QUFDQSxNQUFJaVcsR0FBRyxDQUFDeEosR0FBSixLQUFZLE9BQWhCLEVBQXlCO0FBQ3hCek0sWUFBUSxHQUFHLE1BQU02VixhQUFhLEVBQTlCO0FBQ0E7O0FBQ0QsUUFBTU0sV0FBVyxnQkFDaEIsNkJBQUMsY0FBRCxDQUFPLFVBQVAscUJBQ0MsNkJBQUMsb0JBQUQ7QUFBVSxTQUFLLEVBQUVsVztBQUFqQixrQkFDQyw2QkFBQyw0QkFBRDtBQUFjLFlBQVEsRUFBRWdXLEdBQUcsQ0FBQ3hKLEdBQTVCO0FBQWlDLFdBQU8sRUFBRTtBQUExQyxrQkFDQyw2QkFBQyxZQUFEO0FBQUssWUFBUSxFQUFFek07QUFBZixJQURELENBREQsQ0FERCxDQUREOztBQVNBLFFBQU02SCxJQUFJLEdBQUcsNEJBQWVzTyxXQUFmLENBQWI7QUFFQUQsV0FBUyxHQUFHWCxLQUFLLENBQ2Y5TixPQURVLENBQ0YsdUJBREUsRUFDd0Isa0JBQWlCSSxJQUFLLFFBRDlDLEVBRVZKLE9BRlUsQ0FFRixVQUZFLEVBRVcsMkJBQTBCLGtDQUFVekgsUUFBVixDQUFvQixFQUZ6RCxDQUFaLENBakIyQixDQXFCM0I7QUFDQTs7QUFDQWUsS0FBRyxDQUFDcVYsSUFBSixDQUFTRixTQUFUO0FBQ0FuVixLQUFHLENBQUNzVixHQUFKO0FBQ0EsQ0F6QkQ7QUEyQkFWLEdBQUcsQ0FBQ1csTUFBSixDQUFXbEIsSUFBWCxFQUFpQixNQUFNalYsT0FBTyxDQUFDQyxHQUFSLENBQWEsZ0JBQWVnVixJQUFLLEVBQWpDLENBQXZCLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcclxuXHJcbmltcG9ydCB7IGxvYWRVc2VyIH0gZnJvbSAnLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBzZXRBdXRoVG9rZW4sIGlzQ2xpZW50IH0gZnJvbSAnLi9oZWxwZXJzL3NldEF1dGhUb2tlbic7XHJcblxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IFByZWxvYWRlciBhcyBMb2FkZXIgfSBmcm9tICcuL2xheW91dC9wcmVsb2FkZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbGF5b3V0L05hdmJhci9OYXZiYXInO1xyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aWNsZSc7XHJcbmltcG9ydCBVcHNlcnRDYXJkIGZyb20gJy4vY29tcG9uZW50cy9VcHNlcnRDYXJkJztcclxuaW1wb3J0IFVwc2VydEFydGljbGUgZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydEFydGljbGUnO1xyXG5pbXBvcnQgQXV0aCBmcm9tICcuL2NvbXBvbmVudHMvQXV0aCc7XHJcbmltcG9ydCBVcHNlcnRUb3BpYyBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0VG9waWMnO1xyXG5pbXBvcnQgVXBzZXJ0VmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydFZpZGVvJztcclxuaW1wb3J0IEJsb2cgZnJvbSAnLi9jb21wb25lbnRzL0Jsb2cnO1xyXG4vLyBpbXBvcnQgUHJpdmF0ZVJvdXRlIGZyb20gJy4vaGVscGVycy9Qcml2YXRlUm91dGUnO1xyXG5pbXBvcnQgTGVhcm4gZnJvbSAnLi9jb21wb25lbnRzL0xlYXJuJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vY29tcG9uZW50cy9BYm91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1ByZXZpZXcnO1xyXG5cclxuaWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS50b2tlbikge1xyXG5cdHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2UudG9rZW4pO1xyXG59XHJcblxyXG5jb25zdCBBcHAgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHN0b3JlLmRpc3BhdGNoKGxvYWRVc2VyKCkpO1xyXG5cdH0sIFtdKTtcclxuXHRjb25zb2xlLmxvZygnYXBwLCBjaGVja2luZyB3b3JraW5nJyk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxyXG5cdFx0XHQ8TmF2YmFyIC8+XHJcblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XHJcblx0XHRcdFx0PFN3aXRjaD5cclxuXHRcdFx0XHRcdDxSZWRpcmVjdCBleGFjdCBmcm9tPScvJyB0bz0naG9tZScgLz47XHJcblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nL2hvbWUnIGNvbXBvbmVudD17SG9tZX0gLz5cclxuXHRcdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPScvYWJvdXQnIGNvbXBvbmVudD17QWJvdXR9IC8+XHJcblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nL2xlYXJuJyBjb21wb25lbnQ9e0xlYXJufSAvPlxyXG5cdFx0XHRcdFx0PFJvdXRlXHJcblx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiA8QXV0aCB7Li4ucHJvcHN9IHR5cGU9eydzaWdudXAnfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nL3NpZ251cCdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Um91dGVcclxuXHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IDxVcHNlcnRUb3BpYyBlZGl0PXtmYWxzZX0gey4uLnByb3BzfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nLzpzcGVjaWFsaXR5TmFtZS90b3BpYy9hZGQnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFJvdXRlXHJcblx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiA8VXBzZXJ0VG9waWMgZWRpdD17dHJ1ZX0gey4uLnByb3BzfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nLzpzcGVjaWFsaXR5TmFtZS90b3BpYy9lZGl0Lzp0b3BpY0lkJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPEF1dGggey4uLnByb3BzfSB0eXBlPXsnc2lnbnVwJ30gLz59XHJcblx0XHRcdFx0XHRcdGV4YWN0XHJcblx0XHRcdFx0XHRcdHBhdGg9Jy9zaWdudXAvOnJlZmVyQ29kZSdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Um91dGVcclxuXHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IDxBdXRoIHsuLi5wcm9wc30gdHlwZT17J2xvZ2luJ30gLz59XHJcblx0XHRcdFx0XHRcdGV4YWN0XHJcblx0XHRcdFx0XHRcdHBhdGg9Jy9sb2dpbidcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nL2xlYXJuLzpzcGVjaWFsaXR5TmFtZScgY29tcG9uZW50PXtQcmV2aWV3fSAvPlxyXG5cdFx0XHRcdFx0PFJvdXRlXHJcblx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiA8VXBzZXJ0QXJ0aWNsZSB7Li4ucHJvcHN9IGVkaXQ9e2ZhbHNlfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nL2FydGljbGUvYWRkJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydEFydGljbGUgey4uLnByb3BzfSBlZGl0PXt0cnVlfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nL2FydGljbGUvdXBkYXRlJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydFZpZGVvIHsuLi5wcm9wc30gZWRpdD17ZmFsc2V9IC8+fVxyXG5cdFx0XHRcdFx0XHRleGFjdFxyXG5cdFx0XHRcdFx0XHRwYXRoPScvdmlkZW8vYWRkLzp0b3BpY0lkJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydFZpZGVvIHsuLi5wcm9wc30gZWRpdD17dHJ1ZX0gLz59XHJcblx0XHRcdFx0XHRcdGV4YWN0XHJcblx0XHRcdFx0XHRcdHBhdGg9Jy92aWRlby91cGRhdGUvOnZpZGVvSWQnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy9ibG9nL3JlYWQvOm5hbWUnIGNvbXBvbmVudD17QXJ0aWNsZX0gLz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydENhcmQgey4uLnByb3BzfSBlZGl0PXtmYWxzZX0gLz59XHJcblx0XHRcdFx0XHRcdGV4YWN0XHJcblx0XHRcdFx0XHRcdHBhdGg9Jy9BZGRDYXJkJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydENhcmQgey4uLnByb3BzfSBlZGl0PXt0cnVlfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nL3VwZGF0ZXNwZWNpYWxpdHkvOnNwZWNpYWxpdHlOYW1lJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPEJsb2cgc2VydmVyQXJ0aWNsZXM9e2FydGljbGVzfSB7Li4ucHJvcHN9IC8+fVxyXG5cdFx0XHRcdFx0XHRleGFjdFxyXG5cdFx0XHRcdFx0XHRwYXRoPScvYmxvZydcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Td2l0Y2g+XHJcblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxyXG5cdFx0XHQ8VG9hc3RDb250YWluZXIgLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xyXG5leHBvcnQgY29uc3QgY2xlYXJBcnRpY2xlID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiAnQ0xFQVJfQVJUSUNMRScsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZSA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hcnRpY2xlL2dldC8ke2lkfWApO1xyXG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgc3VjY2Vzc1RvYXN0KHJlcylcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0dFVF9BUlRJQ0xFJyxcclxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZXJyb3JUb2FzdChlcnJvcilcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0dFVF9BUlRJQ0xFX0VSUk9SJyxcclxuICAgICAgcGF5bG9hZDoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsQXJ0aWNsZXMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL2FydGljbGUvYWxsYCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKVxyXG4gICAgc3VjY2Vzc1RvYXN0KHJlcylcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0dFVF9BTExfQVJUSUNMRVMnLFxyXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBlcnJvclRvYXN0KGVycm9yKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnR0VUX0FMTF9BUlRJQ0xFU19FUlJPUicsXHJcbiAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZEFydGljbGUgPSAoZGF0YSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL2FydGljbGUvYWRkYCwgZGF0YSwge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdBRERfQVJUSUNMRScsXHJcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxyXG4gICAgLy8gY29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlczIuZGF0YSk7XHJcblxyXG4gICAgLy8gZGlzcGF0Y2goe1xyXG4gICAgLy8gICB0eXBlOiAnR0VUX1RPUElDUycsXHJcbiAgICAvLyAgIHBheWxvYWQ6IHJlczIuZGF0YSxcclxuICAgIC8vIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBlcnJvclRvYXN0KGVycm9yKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQUREX0FSVElDTEVfRVJST1InLFxyXG4gICAgICBwYXlsb2FkOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0QXJ0aWNsZSA9IChkYXRhLCBpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL2FydGljbGUvdXBkYXRlLyR7aWR9YCwgZGF0YSwge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdFRElUX0FSVElDTEUnLFxyXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuICAgIGNvbnNvbGUubG9nKHJlczIuZGF0YSk7XHJcblxyXG4gICAgc3VjY2Vzc1RvYXN0KHJlcylcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuICAgICAgcGF5bG9hZDogcmVzMi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGVycm9yVG9hc3QoZXJyb3IpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdFRElUX0FSVElDTEVfRVJST1InLFxyXG4gICAgICBwYXlsb2FkOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVBcnRpY2xlID0gKGFydGljbGVJZCwgdG9waWNJZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChcclxuICBkaXNwYXRjaFxyXG4pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXHJcbiAgICAgIGBhcGkvYXJ0aWNsZS9kZWxldGUvJHthcnRpY2xlSWR9LyR7dG9waWNJZH1gLFxyXG4gICAgICB7fSxcclxuICAgICAge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdERUxFVEVfQVJUSUNMRScsXHJcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG4gICAgY29uc29sZS5sb2cocmVzMi5kYXRhKTtcclxuXHJcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG4gICAgICBwYXlsb2FkOiByZXMyLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZXJyb3JUb2FzdChlcnJvcilcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0RFTEVURV9BUlRJQ0xFX0VSUk9SJyxcclxuICAgICAgcGF5bG9hZDoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7XHJcblx0UkVHSVNURVJfU1VDQ0VTUyxcclxuXHRSRUdJU1RFUl9GQUlMLFxyXG5cdExPR0lOX1NVQ0NFU1MsXHJcblx0TE9HSU5fRkFJTCxcclxuXHRVU0VSX0xPQURFRCxcclxuXHRBVVRIX0VSUk9SLFxyXG5cdFNFTkRfUkVTRVRfRU1BSUwsXHJcblx0U0VORF9SRVNFVF9FTUFJTF9GQUlMLFxyXG59IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QsIHNldEF1dGhUb2tlbiwgaXNDbGllbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XHJcblxyXG4vLyBMb2FkIFVzZXIgOiBFdmVyeSB0aW1lIHdlIGxvZ2dlZCBpbiBvciByZWdpc3RlciBvciByZWZyZXNoIHRoZSBwYWdlIGl0cyBnb25uYSBsb2FkLlxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRVc2VyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0ZGlzcGF0Y2goe1xyXG5cdFx0dHlwZTogJ1NFVF9BVVRIX0xPQURFUicsXHJcblx0fSk7XHJcblx0aWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS50b2tlbikge1xyXG5cdFx0c2V0QXV0aFRva2VuKGxvY2FsU3RvcmFnZS50b2tlbik7XHJcblx0fVxyXG5cclxuXHRpZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnVzZXJJZCkge1xyXG5cdFx0Y29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hdXRoL3VzZXIvJHt1c2VySWR9YCk7XHJcblx0XHRcdC8vIGRpc3BsYXlUb2FzdFxyXG5cdFx0XHRzdWNjZXNzVG9hc3QocmVzKTtcclxuXHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBVU0VSX0xPQURFRCxcclxuXHRcdFx0XHRwYXlsb2FkOiByZXMuZGF0YS51c2VyLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHQvLyBkaXNwbGF5IHRvYXN0XHJcblx0XHRcdGVycm9yVG9hc3QoZXJyKTtcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IEFVVEhfRVJST1IsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWZyZXNoVXNlciA9ICh1c2VyKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRkaXNwYXRjaCh7XHJcblx0XHR0eXBlOiAnU0VUX0FVVEhfTE9BREVSJyxcclxuXHR9KTtcclxuXHRpZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnRva2VuKSB7XHJcblx0XHRzZXRBdXRoVG9rZW4obG9jYWxTdG9yYWdlLnRva2VuKTtcclxuXHR9XHJcblxyXG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudXNlcklkKSB7XHJcblx0XHRjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Ly8gY29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL2F1dGgvdXNlci8ke3VzZXJJZH1gKTtcclxuXHRcdFx0YXdhaXQgc2VydmljZUdldChgYXBpL2F1dGgvdXNlci8ke3VzZXJJZH1gKTtcclxuXHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBVU0VSX0xPQURFRCxcclxuXHRcdFx0XHRwYXlsb2FkOiB1c2VyLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogQVVUSF9FUlJPUixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gKGRhdGEpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGRpc3BhdGNoKHtcclxuXHRcdHR5cGU6ICdTRVRfQVVUSF9MT0FERVInLFxyXG5cdH0pO1xyXG5cdGNvbnN0IGhlYWRlcnMgPSB7XHJcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCdhcGkvYXV0aC9zaWdudXAnLCBib2R5LCBoZWFkZXJzKTtcclxuXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IHJlcy5zdGF0dXMgPT09IDEgPyBSRUdJU1RFUl9TVUNDRVNTIDogUkVHSVNURVJfRkFJTCxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0ZGlzcGF0Y2gobG9hZFVzZXIoKSk7XHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHQvLyBjb25zdCBlcnJvcnMgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnM7XHJcblx0XHRlcnJvclRvYXN0KGVycik7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IFJFR0lTVEVSX0ZBSUwsXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPVxyXG5cdCh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PlxyXG5cdGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnU0VUX0FVVEhfTE9BREVSJyxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgaGVhZGVycyA9IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCdhcGkvYXV0aC9sb2dpbicsIGJvZHksIGhlYWRlcnMpO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiByZXMuc3RhdHVzID09PSAxID8gTE9HSU5fU1VDQ0VTUyA6IExPR0lOX0ZBSUwsXHJcblx0XHRcdFx0cGF5bG9hZDogeyB1c2VySWQ6IHJlcy5kYXRhPy51c2VyPy51c2VySWQsIHRva2VuOiByZXMuZGF0YT8udG9rZW4gfSxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRkaXNwYXRjaChsb2FkVXNlcigpKTtcclxuXHRcdFx0c3VjY2Vzc1RvYXN0KHJlcyk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0ZXJyb3JUb2FzdChlcnIpO1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogTE9HSU5fRkFJTCxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuXHRpZiAoaXNDbGllbnQpIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG5cdGRpc3BhdGNoKHtcclxuXHRcdHR5cGU6ICdMT0dPVVQnLFxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRSZXNldEVtYWlsID1cclxuXHQoeyBlbWFpbCB9KSA9PlxyXG5cdGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdFx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCB9KTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdCgnL2FwaS9mb3Jnb3RwYXNzd29yZCcsIGJvZHksIGNvbmZpZyk7XHJcblxyXG5cdFx0XHRjb25zdCBtZXNzYWdlc0FycmF5ID0gcmVzLmRhdGEubWVzc2FnZXM7XHJcblx0XHRcdC8vIGJyYW5kIGFkZGVkIG1lc3NhZ2UgYWxlcnRcclxuXHRcdFx0bWVzc2FnZXNBcnJheS5mb3JFYWNoKChtZXNzYWdlKSA9PiBkaXNwYXRjaCgobWVzc2FnZS5tc2csICdkYW5nZXInKSkpO1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogU0VORF9SRVNFVF9FTUFJTCxcclxuXHRcdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0Y29uc3QgZXJyb3JzID0gZXJyICYmIGVyci5yZXNwb25zZS5kYXRhLmVycm9ycztcclxuXHRcdFx0aWYgKGVycm9ycykge1xyXG5cdFx0XHR9XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBTRU5EX1JFU0VUX0VNQUlMX0ZBSUwsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vYXJ0aWNsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXV0aCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3BlY2lhbGl0eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdG9waWMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi91aSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmlkZW8nO1xyXG4iLCJpbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTcGVjaWFsaXRpZXMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldCgnYXBpL3NwZWNpYWxpdHkvYWxsJyk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFU19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyU3BlY2lhbGl0eSA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGRpc3BhdGNoKHtcclxuXHRcdHR5cGU6ICdDTEVBUl9TUEVDSUFMSVRZJyxcclxuXHRcdHBheWxvYWQ6IHt9LFxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNwZWNpYWxpdHkgPSAoc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvc3BlY2lhbGl0eS9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRZJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEuc3BlY2lhbGl0eSxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRZX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU3BlY2lhbGl0eSA9IChkYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdCgnYXBpL3NwZWNpYWxpdHkvYWRkJywgZGF0YSwge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdBRERfU1BFQ0lBTElUSVknLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoJ2FwaS9zcGVjaWFsaXR5L2FsbCcpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9TUEVDSUFMSVRZX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFNwZWNpYWxpdHkgPSAoZGF0YSwgaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3NwZWNpYWxpdHkvdXBkYXRlLyR7aWR9YCwgZGF0YSwge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fSk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdFRElUX1NQRUNJQUxJVElZJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KCdhcGkvc3BlY2lhbGl0eS9hbGwnKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRJRVMnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdFRElUX1NQRUNJQUxJVFlfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVTcGVjaWFsaXR5ID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXHJcblx0XHRcdGBhcGkvc3BlY2lhbGl0eS9kZWxldGUvJHtpZH1gLFxyXG5cdFx0XHR7fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdERUxFVEVfU1BFQ0lBTElUSVknLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoJ2FwaS9zcGVjaWFsaXR5L2FsbCcpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0RFTEVURV9TUEVDSUFMSVRZX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzVG9hc3QgPSAocmVzKSA9PiB7XHJcbiAgICByZXMuc3RhdHVzID09IDEgPyB0b2FzdC5zdWNjZXNzKHJlcy5tZXNzYWdlLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICB9KSA6IHRvYXN0LmVycm9yKHJlcy5tZXNzYWdlLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9yVG9hc3QgPSAoZXJyKSA9PiB7XHJcbiAgICB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9waWNzID0gKHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDU19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvcGljID0gKGRhdGEsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRjb25zb2xlLmxvZyhzcGVjaWFsaXR5TmFtZSk7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS90b3BpYy9hZGRgLCBkYXRhLCB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdBRERfVE9QSUMnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0Ly8gcmVmcmVzaCB0b3BpY3NcclxuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdBRERfVE9QSUNfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0VG9waWMgPSAoZGF0YSwgaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS90b3BpYy91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0VESVRfVE9QSUMnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdFRElUX1RPUElDX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5sb2NrVG9waWMgPSAodG9waWNJZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKHNwZWNpYWxpdHlOYW1lKTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXHJcblx0XHRcdGBhcGkvdG9waWMvdW5sb2NrLyR7dG9waWNJZH1gLFxyXG5cdFx0XHR7fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnVVNFUkxPQURFRCcsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLnVzZXIsXHJcblx0XHR9KTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ1VOTE9DS19UT1BJQycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ1VOTE9DS19UT1BJQ19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRvcGljID0gKGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coeyBpZCwgc3BlY2lhbGl0eU5hbWUgfSk7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxyXG5cdFx0XHRgYXBpL3RvcGljL2RlbGV0ZS8ke2lkfWAsXHJcblx0XHRcdHt9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdERUxFVEVfVE9QSUMnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0RFTEVURV9UT1BJQ19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgU0VUX0FMRVJUID0gJ1NFVF9BTEVSVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQUxFUlQgPSAnUkVNT1ZFX0FMRVJUJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTID0gJ0xPR0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTCA9ICdMT0dJTl9GQUlMJztcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1NVQ0NFU1MgPSAnUkVHSVNURVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GQUlMID0gJ1JFR0lTVEVSX0ZBSUwnO1xyXG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9FTUFJTCA9ICdTRU5EX1JFU0VUX0VNQUlMJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfUkVTRVRfRU1BSUxfRkFJTCA9ICdTRU5EX1JFU0VUX0VNQUlMX0ZBSUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdMT0dPVVQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVTRVJfTE9BREVEID0gJ1VTRVJMT0FERUQnO1xyXG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUiA9ICdBVVRIX0VSUk9SJztcclxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRPcGVuVG9waWNzID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRjb25zb2xlLmxvZyhpZCk7XHJcblx0Y29uc3Qgb3BlblRvcGljc0FycmF5ID0gc3RvcmUuZ2V0U3RhdGUoKS51aS5vcGVuVG9waWNzO1xyXG5cdGlmICghb3BlblRvcGljc0FycmF5LmluY2x1ZGVzKGlkKSkge1xyXG5cdFx0b3BlblRvcGljc0FycmF5LnB1c2goaWQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRvcGVuVG9waWNzQXJyYXkuc3BsaWNlKG9wZW5Ub3BpY3NBcnJheS5pbmRleE9mKGlkKSwgMSk7XHJcblx0fVxyXG5cclxuXHRkaXNwYXRjaCh7XHJcblx0XHR0eXBlOiAnU0VUX09QRU5fVE9QSUNTJyxcclxuXHRcdHBheWxvYWQ6IG9wZW5Ub3BpY3NBcnJheSxcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXREaXNwbGF5TW9kZSA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGNvbnN0IGRpc3BsYXlNb2RlID1cclxuXHRcdHN0b3JlLmdldFN0YXRlKCkudWkuZGlzcGxheU1vZGUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XHJcblx0aWYgKGlzQ2xpZW50KSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9kZScsIGRpc3BsYXlNb2RlKTtcclxuXHJcblx0ZGlzcGF0Y2goe1xyXG5cdFx0dHlwZTogJ1NFVF9ESVNQTEFZX01PREUnLFxyXG5cdFx0cGF5bG9hZDogZGlzcGxheU1vZGUsXHJcblx0fSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VmlkZW8gPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdmlkZW8vZ2V0LyR7aWR9YCk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1ZJREVPJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9WSURFT19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFZpZGVvID0gKGRhdGEsIGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblxyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS92aWRlby9hZGQvJHtpZH1gLCBkYXRhLCB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdBRERfVklERU8nLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IHJlc1RvcGljID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzVG9waWMpO1xyXG5cclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXNUb3BpYy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX1ZJREVPX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFZpZGVvID0gKGRhdGEsIGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvdmlkZW8vdXBkYXRlLyR7aWR9YCwgZGF0YSwge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdFRElUX1ZJREVPJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblxyXG5cdFx0Y29uc3QgcmVzVG9waWMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2cocmVzVG9waWMuZGF0YSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlc1RvcGljLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0VESVRfVklERU9fRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVWaWRlbyA9XHJcblx0KHZpZGVvSWQsIHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxyXG5cdFx0XHRcdGBhcGkvdmlkZW8vZGVsZXRlLyR7dmlkZW9JZH0vJHt0b3BpY0lkfWAsXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6ICdERUxFVEVfVklERU8nLFxyXG5cdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzMi5kYXRhKTtcclxuXHRcdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6ICdERUxFVEVfVklERU9fRVJST1InLFxyXG5cdFx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFZpZGVvID0gKHZpZGVvKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnU0VMRUNUX1ZJREVPJyxcclxuXHRcdFx0cGF5bG9hZDogdmlkZW8sXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnU0VMRUNUX1ZJREVPX0VSUk9SJyxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IEFkZCA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxyXG5cdDxzdmdcclxuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdHdpZHRoPXtzaXplfVxyXG5cdFx0aGVpZ2h0PXtzaXplfVxyXG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xyXG5cdFx0ZmlsbD0nbm9uZSdcclxuXHRcdHN0cm9rZT17Y29sb3J9XHJcblx0XHRzdHJva2VXaWR0aD0nMy41J1xyXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xyXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxyXG5cdFx0PGxpbmUgeDE9JzEyJyB5MT0nNScgeDI9JzEyJyB5Mj0nMTknPjwvbGluZT5cclxuXHRcdDxsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJz48L2xpbmU+XHJcblx0PC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hldnJvbnNVcCA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxyXG5cdDxzdmdcclxuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdHdpZHRoPXtzaXplfVxyXG5cdFx0aGVpZ2h0PXtzaXplfVxyXG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xyXG5cdFx0ZmlsbD0nbm9uZSdcclxuXHRcdHN0cm9rZT17Y29sb3J9XHJcblx0XHRzdHJva2VXaWR0aD0nMy41J1xyXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xyXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxyXG5cdFx0PHBhdGggZD0nTTE3IDExbC01LTUtNSA1TTE3IDE4bC01LTUtNSA1JyAvPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoZXZyb25zTGVmdCA9ICh7IHNpemUgPSA1MSwgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxyXG5cdDxzdmdcclxuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdHdpZHRoPXtzaXplfVxyXG5cdFx0aGVpZ2h0PXtzaXplfVxyXG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xyXG5cdFx0ZmlsbD0nbm9uZSdcclxuXHRcdHN0cm9rZT17Y29sb3J9XHJcblx0XHRzdHJva2VXaWR0aD0nMi41J1xyXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xyXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxyXG5cdFx0PHBhdGggZD0nTTExIDE3bC01LTUgNS01TTE4IDE3bC01LTUgNS01JyAvPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgQ3Jvc3MgPSAoeyBzaXplID0gMzIsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcclxuXHQ8c3ZnXHJcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHR3aWR0aD17c2l6ZX1cclxuXHRcdGhlaWdodD17c2l6ZX1cclxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuXHRcdGZpbGw9J25vbmUnXHJcblx0XHRzdHJva2U9e2NvbG9yfVxyXG5cdFx0c3Ryb2tlV2lkdGg9JzEuNSdcclxuXHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcclxuXHRcdHN0cm9rZUxpbmVqb2luPSdhcmNzJz5cclxuXHRcdDxsaW5lIHgxPScxOCcgeTE9JzYnIHgyPSc2JyB5Mj0nMTgnPjwvbGluZT5cclxuXHRcdDxsaW5lIHgxPSc2JyB5MT0nNicgeDI9JzE4JyB5Mj0nMTgnPjwvbGluZT5cclxuXHQ8L3N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IERlbGV0ZSA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgd2lkdGg9e3NpemV9XHJcbiAgICBoZWlnaHQ9e3NpemV9XHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHN0cm9rZT17Y29sb3J9XHJcbiAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cImFyY3NcIlxyXG4gID5cclxuICAgIDxwb2x5bGluZSBwb2ludHM9XCIzIDYgNSA2IDIxIDZcIj48L3BvbHlsaW5lPlxyXG4gICAgPHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiPjwvcGF0aD5cclxuICAgIDxsaW5lIHgxPVwiMTBcIiB5MT1cIjExXCIgeDI9XCIxMFwiIHkyPVwiMTdcIj48L2xpbmU+XHJcbiAgICA8bGluZSB4MT1cIjE0XCIgeTE9XCIxMVwiIHgyPVwiMTRcIiB5Mj1cIjE3XCI+PC9saW5lPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2sgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyNEQzE0M0MnLCBoYW5kbGVyIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PHN2Z1xyXG5cdFx0XHRvbkNsaWNrPXtoYW5kbGVyfVxyXG5cdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHRcdHdpZHRoPSc0MydcclxuXHRcdFx0aGVpZ2h0PSc0MydcclxuXHRcdFx0dmlld0JveD0nMCAwIDI0IDI0J1xyXG5cdFx0XHRmaWxsPSdub25lJ1xyXG5cdFx0XHRzdHJva2U9e2NvbG9yfVxyXG5cdFx0XHRzdHJva2Utd2lkdGg9JzInXHJcblx0XHRcdHN0cm9rZS1saW5lY2FwPSdyb3VuZCdcclxuXHRcdFx0c3Ryb2tlLWxpbmVqb2luPSdyb3VuZCc+XHJcblx0XHRcdDxyZWN0IHg9JzMnIHk9JzExJyB3aWR0aD0nMTgnIGhlaWdodD0nMTEnIHJ4PScyJyByeT0nMic+PC9yZWN0PlxyXG5cdFx0XHQ8cGF0aCBkPSdNNyAxMVY3YTUgNSAwIDAgMSAxMCAwdjQnPjwvcGF0aD5cclxuXHRcdDwvc3ZnPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVW5sb2NrID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDBGRjAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9JzQzJ1xyXG5cdFx0aGVpZ2h0PSc0MydcclxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuXHRcdGZpbGw9J25vbmUnXHJcblx0XHRzdHJva2U9e2NvbG9yfVxyXG5cdFx0c3Ryb2tlLXdpZHRoPScyJ1xyXG5cdFx0c3Ryb2tlLWxpbmVjYXA9J3JvdW5kJ1xyXG5cdFx0c3Ryb2tlLWxpbmVqb2luPSdyb3VuZCc+XHJcblx0XHQ8cmVjdCB4PSczJyB5PScxMScgd2lkdGg9JzE4JyBoZWlnaHQ9JzExJyByeD0nMicgcnk9JzInPjwvcmVjdD5cclxuXHRcdDxwYXRoIGQ9J003IDExVjdhNSA1IDAgMCAxIDkuOS0xJz48L3BhdGg+XHJcblx0PC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVhZCA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxyXG5cdDxzdmdcclxuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdHdpZHRoPXtzaXplfVxyXG5cdFx0aGVpZ2h0PXtzaXplfVxyXG5cdFx0dmlld0JveD0nMCAwIDI0IDI0Jz5cclxuXHRcdDxwYXRoIGQ9J00xMiA0LjcwNmMtMi45MzgtMS44My03LjQxNi0yLjU2Ni0xMi0yLjcwNnYxNy43MTRjMy45MzcuMTIgNy43OTUuNjgxIDEwLjY2NyAxLjk5NS44NDYuMzg4IDEuODE3LjM4OCAyLjY2NyAwIDIuODcyLTEuMzE0IDYuNzI5LTEuODc1IDEwLjY2Ni0xLjk5NXYtMTcuNzE0Yy00LjU4NC4xNC05LjA2Mi44NzYtMTIgMi43MDZ6bS0xMCAxMy4xMDR2LTEzLjcwNGM1LjE1Ny4zODkgNy41MjcgMS40NjMgOSAyLjMzNHYxMy4xNjhjLTEuNTI1LS41NDYtNC43MTYtMS41MDQtOS0xLjc5OHptMjAgMGMtNC4yODMuMjkzLTcuNDc1IDEuMjUyLTkgMS43OTl2LTEzLjE3MWMxLjQ1My0uODYxIDMuODMtMS45NDIgOS0yLjMzMnYxMy43MDR6bS0yLTEwLjIxNGMtMi4wODYuMzEyLTQuNDUxIDEuMDIzLTYgMS42NzJ2LTEuMDY0YzEuNjY4LS42MjIgMy44ODEtMS4zMTUgNi0xLjYyNnYxLjAxOHptMCAzLjA1NWMtMi4xMTkuMzExLTQuMzMyIDEuMDA0LTYgMS42MjZ2MS4wNjRjMS41NDktLjY0OSAzLjkxNC0xLjM2MSA2LTEuNjczdi0xLjAxN3ptMC0yLjAzMWMtMi4xMTkuMzExLTQuMzMyIDEuMDA0LTYgMS42MjZ2MS4wNjRjMS41NDktLjY0OSAzLjkxNC0xLjM2MSA2LTEuNjczdi0xLjAxN3ptMCA2LjA5M2MtMi4xMTkuMzExLTQuMzMyIDEuMDA0LTYgMS42MjZ2MS4wNjRjMS41NDktLjY0OSAzLjkxNC0xLjM2MSA2LTEuNjczdi0xLjAxN3ptMC0yLjAzMWMtMi4xMTkuMzExLTQuMzMyIDEuMDA0LTYgMS42MjZ2MS4wNjRjMS41NDktLjY0OSAzLjkxNC0xLjM2MSA2LTEuNjczdi0xLjAxN3ptLTE2LTYuMTA0YzIuMTE5LjMxMSA0LjMzMiAxLjAwNCA2IDEuNjI2djEuMDY0Yy0xLjU0OS0uNjQ5LTMuOTE0LTEuMzYxLTYtMS42NzJ2LTEuMDE4em0wIDUuMDljMi4wODYuMzEyIDQuNDUxIDEuMDIzIDYgMS42NzN2LTEuMDY0Yy0xLjY2OC0uNjIyLTMuODgxLTEuMzE1LTYtMS42MjZ2MS4wMTd6bTAtMi4wMzFjMi4wODYuMzEyIDQuNDUxIDEuMDIzIDYgMS42NzN2LTEuMDY0Yy0xLjY2OC0uNjIyLTMuODgxLTEuMzE2LTYtMS42MjZ2MS4wMTd6bTAgNi4wOTNjMi4wODYuMzEyIDQuNDUxIDEuMDIzIDYgMS42NzN2LTEuMDY0Yy0xLjY2OC0uNjIyLTMuODgxLTEuMzE1LTYtMS42MjZ2MS4wMTd6bTAtMi4wMzFjMi4wODYuMzEyIDQuNDUxIDEuMDIzIDYgMS42NzN2LTEuMDY0Yy0xLjY2OC0uNjIyLTMuODgxLTEuMzE1LTYtMS42MjZ2MS4wMTd6JyAvPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZSA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxyXG5cdDxzdmdcclxuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdHdpZHRoPXtzaXplfVxyXG5cdFx0aGVpZ2h0PXtzaXplfVxyXG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xyXG5cdFx0ZmlsbD0nbm9uZSdcclxuXHRcdHN0cm9rZT17Y29sb3J9XHJcblx0XHRzdHJva2VXaWR0aD0nMidcclxuXHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcclxuXHRcdHN0cm9rZUxpbmVqb2luPSdhcmNzJz5cclxuXHRcdDxwYXRoIGQ9J00yMCAxNC42NlYyMGEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY2YTIgMiAwIDAgMSAyLTJoNS4zNCc+PC9wYXRoPlxyXG5cdFx0PHBvbHlnb24gcG9pbnRzPScxOCAyIDIyIDYgMTIgMTYgOCAxNiA4IDEyIDE4IDInPjwvcG9seWdvbj5cclxuXHQ8L3N2Zz5cclxuKTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9BZGQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0RlbGV0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVXBkYXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9DaGV2cm9ucyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVhZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9jayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ3Jvc3MnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmltcG9ydCB7IFNlbyB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuaW1wb3J0IFF1ZXN0aW9ucyBmcm9tICcuLi9zZWN0aW9ucy9hYm91dC9RdWVzdGlvbnMnO1xyXG5pbXBvcnQgQWJvdXRVcyBmcm9tICcuLi9zZWN0aW9ucy9hYm91dC9BYm91dFVzJztcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0JztcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgPlxyXG4gICAgICA8U2VvIHRpdGxlPVwiQWJvdXRcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXBhZ2Ugc2Nyb2xsZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ci13YXZlIHRvcC1zbGlkZVwiPlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+SGVsbG8gdGhlcmUsPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGluZy1hYm91dFwiPlxyXG4gICAgICAgICAgICBXZSBjcmVhdGVkIDxzcGFuIGNsYXNzTmFtZT1cImxvZ28gdGV4dC1kYXJrXCI+Q29kZXJzIEdhbGE8L3NwYW4+IHRvXHJcbiAgICAgICAgICAgIHByb3ZpZGUgWW91IFF1YWxpdHkgcmVzb3VyY2VzIHRvIGxlYXJuIEZyb21cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD1cInNjcm9sbCBpY29uXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2dpZmltYWdlLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS9zY3JvbGwtZ2lmLTEwLmdpZlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsLWljb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFF1ZXN0aW9ucyAvPlxyXG4gICAgICAgIDxBYm91dFVzIC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcclxuXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2xheW91dCc7XHJcblxyXG5pbXBvcnQgeyBnZXRTcGVjaWFsaXR5IH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNlcnZpY2VQb3N0LCBzY3JvbGxUbyB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBDaGV2cm9uc1VwIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zJztcclxuXHJcbi8vIGNvbnN0IFNoYXJlQXJ0aWNsZSA9ICh7IE5pZCwgdXJsIH0sIHByb3BzKSA9PiB7XHJcblxyXG5cclxuLy8gXHRmdW5jdGlvbiBhY3Rpb25Ub2dnbGUoKSB7XHJcbi8vIFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRyZXR1cm4gKFxyXG4vLyBcdFx0PD5cclxuLy8gXHRcdFx0PGRpdiBjbGFzcz0nYWN0aW9uJyBvbkNsaWNrPXthY3Rpb25Ub2dnbGV9PlxyXG4vLyBcdFx0XHRcdDxzcGFuPlxyXG4vLyBcdFx0XHRcdFx0PGltZ1xyXG4vLyBcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzI1cHgnIH19XHJcbi8vIFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xOTE5OS9zaGFyZS5zdmcnXHJcbi8vIFx0XHRcdFx0XHRcdGFsdD0nJ1xyXG4vLyBcdFx0XHRcdFx0Lz5cclxuLy8gXHRcdFx0XHQ8L3NwYW4+XHJcbi8vIFx0XHRcdFx0PHVsPlxyXG4vLyBcdFx0XHRcdFx0PGxpPlxyXG4vLyBcdFx0XHRcdFx0XHQ8YVxyXG4vLyBcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nd2hhdHNhcHAtaWNvbidcclxuLy8gXHRcdFx0XHRcdFx0XHRyZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbi8vIFx0XHRcdFx0XHRcdFx0aHJlZj17YGh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9SGV5IGxvb2sgaSBqdXN0IGZvdW5kIG91dCB0aGlzIEFtYXppbmcgYXJ0aWNsZSBvbiBcIiR7TmlkfVwiLENoZWNrIGl0IG91dCA6ICR7dXJsfWB9XHJcbi8vIFx0XHRcdFx0XHRcdFx0dGFyZ2V0PSdfYmxhbmsnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdFNoYXJlIG9uXHJcbi8vIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG4vLyBcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyNXB4JywgbWFyZ2luTGVmdDogJzIwcHgnIH19XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMzAzMTUwL3doYXRzYXBwLXN5bWJvbC1sb2dvLnN2ZydcclxuLy8gXHRcdFx0XHRcdFx0XHRcdGFsdD17J3NoYXJlICcgKyBOaWQgKyAnIG9uIFdoYXRzYXBwJ31cclxuLy8gXHRcdFx0XHRcdFx0XHQvPlxyXG4vLyBcdFx0XHRcdFx0XHQ8L2E+XHJcbi8vIFx0XHRcdFx0XHQ8L2xpPlxyXG5cclxuLy8gXHRcdFx0XHRcdDxsaT5cclxuLy8gXHRcdFx0XHRcdFx0PGFcclxuLy8gXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21haWwtaWNvbidcclxuLy8gXHRcdFx0XHRcdFx0XHRocmVmPXtgbWFpbHRvOj9TdWJqZWN0PSR7J0FydGljbGUgb24gJyArIE5pZFxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0fSZCb2R5PUhleSBsb29rIGkganVzdCBmb3VuZCBvdXQgdGhpcyBBbWF6aW5nIGFydGljbGUgb24gXCIke05pZH1cIixDaGVjayBpdCBvdXQgOiAke3VybH1gfVxyXG4vLyBcdFx0XHRcdFx0XHRcdHRhcmdldD0nX3RvcCdcclxuLy8gXHRcdFx0XHRcdFx0XHRyZWw9J25vZm9sbG93Jz5cclxuLy8gXHRcdFx0XHRcdFx0XHRTaGFyZSBvblxyXG4vLyBcdFx0XHRcdFx0XHRcdDxpbWdcclxuLy8gXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMjVweCcsIG1hcmdpbkxlZnQ6ICcyMHB4JyB9fVxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdzaGFyZS1pbWFnZSdcclxuLy8gXHRcdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMDMxNjEvZ21haWwtaWNvbi1sb2dvLnN2ZydcclxuLy8gXHRcdFx0XHRcdFx0XHRcdGFsdD17J3NoYXJlICcgKyBOaWQgKyAnIG9uIEdtYWlsJ31cclxuLy8gXHRcdFx0XHRcdFx0XHQvPlxyXG4vLyBcdFx0XHRcdFx0XHQ8L2E+XHJcbi8vIFx0XHRcdFx0XHQ8L2xpPlxyXG4vLyBcdFx0XHRcdDwvdWw+XHJcbi8vIFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0PC8+XHJcbi8vIFx0KTtcclxuLy8gfTtcclxuXHJcbmNvbnN0IEFydGljbGUgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCB7IG5hbWUgfSA9IHByb3BzLm1hdGNoLnBhcmFtcztcclxuXHRjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cclxuXHJcblxyXG5cdGNvbnN0IGdldEFydGljbGUgPSBhc3luYyAobmFtZSkgPT4ge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXHJcblx0XHRcdGBhcGkvYXJ0aWNsZS9nZXRgLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdHJldHVybiByZXMuZGF0YS5hcnRpY2xlO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldEFydGljbGVFZmZlY3QgPSB1c2VDYWxsYmFjayhcclxuXHRcdGFzeW5jICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYXJ0aWNsZSA9IGF3YWl0IGdldEFydGljbGUobmFtZS5yZXBsYWNlKC8tL2csICcgJykpO1xyXG5cdFx0XHRzZXRBcnRpY2xlKGFydGljbGUpO1xyXG5cdFx0fSxcclxuXHRcdFtuYW1lXSxcclxuXHQpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRBcnRpY2xlRWZmZWN0KClcclxuXHR9LCBbZ2V0QXJ0aWNsZUVmZmVjdF0pO1xyXG5cclxuXHRjb25zb2xlLmxvZyhhcnRpY2xlKVxyXG5cdGNvbnN0IGdvVG9Ub3AgPSAoKSA9PiB7XHJcblx0XHRzY3JvbGxUbyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2JykpO1xyXG5cdH07XHJcblxyXG5cclxuXHRjb25zdCBodG1sID0gYXJ0aWNsZSAmJiBhcnRpY2xlLmNvbnRlbnQ7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0ZWQtYXJ0aWNsZSc+XHJcblxyXG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPSdmdWxsLXZpZXctYXJ0aWNsZSBwLTInPlxyXG5cdFx0XHRcdFx0PENvbCBzbT17Mn0+ey8qIEFkZHMgSGVyZSAqL308L0NvbD5cclxuXHJcblx0XHRcdFx0XHQ8Q29sIGlkPSd0b3AnIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHgnIH19IHNtPXs4fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3FsLXNub3cnPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmdWxsLWFydGljbGUgcWwtZWRpdG9yJz5cclxuXHRcdFx0XHRcdFx0XHRcdHtSZWFjdEh0bWxQYXJzZXIoaHRtbCl9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9wLWljb24nPlxyXG5cdFx0XHRcdFx0XHRcdDxDaGV2cm9uc1VwIHNpemU9JzUwJyBjb2xvcj0nI2RjMTQzYycgb25DbGljaz17Z29Ub1RvcH0gLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHJcblx0XHRcdFx0XHQ8Q29sIHNtPXsyfT57LyogQWRkcyBIZXJlICovfTwvQ29sPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxGb290ZXIgLz5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0YXV0aDogc3RhdGUuYXV0aFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFNwZWNpYWxpdHkgfSkoQXJ0aWNsZSk7XHJcblxyXG5cclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gY29uc3QgQXJ0aWNsZSA9IChwcm9wcykgPT4ge1xyXG4vLyBcdGNvbnN0IG5hbWUgPSBwcm9wcy5tYXRjaC5wYXJhbXMubmFtZVxyXG4vLyBcdGNvbnNvbGUubG9nKG5hbWUucmVwbGFjZSgvLS9nLCAnICcpKVxyXG4vLyBcdHJldHVybiAoXHJcbi8vIFx0XHQ8ZGl2PlxyXG4vLyBcdFx0XHQ8ZGl2PlxyXG4vLyBcdFx0XHRcdGxvcmVtMTAwXHJcbi8vIFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0PC9kaXY+XHJcbi8vIFx0KTtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QsIE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyLCBsb2dpbiB9IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHsgU2VvIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IEF1dGggPSAoeyBsb2dpbiwgcmVnaXN0ZXIsIHRva2VuLCB0eXBlIH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGlmICh0b2tlbikgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9sZWFyblwiIC8+O1xyXG4gIGNvbnN0IGRpblRleHQgPSBcIjxDb2RlcnMgR2FsYS8+XCI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJzaWdudXBcIikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb24gaDFcIikuY2xhc3NMaXN0LmFkZChcImNoYW5nZWRcIik7XHJcblxyXG4gICAgICByZWdpc3RlcihkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uIGgxXCIpLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2VkXCIpO1xyXG4gICAgICBsb2dpbihkYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWNvbnRhaW5lclwiPlxyXG4gICAgICA8U2VvIHRpdGxlPVwiTG9nSW5cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZGluVGFnXCI+e2RpblRleHR9PC9oNj5cclxuICAgICAgICAgICAge3R5cGUgPT09IFwic2lnbnVwXCIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMT5TaWduIFVwPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPkhleSwgV2VsY29tZSB0byBDb2RlcnNHYWxhICEhPC9wPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+SGV5IHRoZXJlLCBXZWxjb21lIEJhY2sgISE8L3A+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlID09PSBcInNpZ251cFwiID8gXCJmbGV4XCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gXCJzaWdudXBcIiA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFnZVwiPkFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2U6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29kZVJlZmVycmVkXCI+UmVmZXIgQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvZGVSZWZlcnJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUEIxOEZDNjlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVSZWZmZXJlZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAge3R5cGUgPT09IFwic2lnbnVwXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW1lbWJlck1lXCI+SGF2ZSBhbiBhY2NvdW50PzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlbWVtYmVyTWVcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3NpZ251cFwiPlNpZ25VcDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbmluXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICB0b2tlbjogc3RhdGUuYXV0aC50b2tlbixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBsb2dpbiwgcmVnaXN0ZXIgfSkoQXV0aCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZ2V0QWxsQXJ0aWNsZXMgfSBmcm9tIFwiLi4vYWN0aW9ucy9hcnRpY2xlXCI7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBGZWF0dXJlZCBmcm9tICcuLi9zZWN0aW9ucy9ibG9nL0ZlYXR1cmVkJ1xyXG5pbXBvcnQgTGF0ZXN0IGZyb20gJy4uL3NlY3Rpb25zL2Jsb2cvTGF0ZXN0J1xyXG5pbXBvcnQgQWxsIGZyb20gJy4uL3NlY3Rpb25zL2Jsb2cvQWxsJ1xyXG5cclxuXHJcblxyXG5jb25zdCBCbG9nID0gKHsgZ2V0QWxsQXJ0aWNsZXMsIHNlcnZlckFydGljbGVzLCBzdG9yZUFydGljbGVzLCBpc0FkbWluIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlKHNlcnZlckFydGljbGVzKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZXJ2ZXJBcnRpY2xlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZ2V0QWxsQXJ0aWNsZXMoKVxyXG4gICAgICAgICAgICBzZXRBcnRpY2xlcyhzdG9yZUFydGljbGVzKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthcnRpY2xlcywgZ2V0QWxsQXJ0aWNsZXNdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZfX3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdl9fdG9wX19saW5rXCI+PC9hPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAge2lzQWRtaW4gJiYgPE5hdkxpbmsgdG89XCIvYXJ0aWNsZS9hZGRcIiByZWw9XCJub2ZvbGxvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIGJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBBcnRpY2xlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9OYXZMaW5rPn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiRG9zaXNcIiB9fSBjbGFzc05hbWU9XCJ0aXRsZV9faDFcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgQ29kZXJzR2FsYSA8c3Bhbj5CbG9nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlX19zdWJcIj5Tb3JyeSA6KDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWRfX2NvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhdGVzdCBhcnRpY2xlPXthcnRpY2xlcyAmJiBhcnRpY2xlc1swXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZF9fY29sX190aXRsZVwiPkZlYXR1cmVkIEFydGljbGVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkIGFydGljbGVzPXthcnRpY2xlc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOZXdzbGV0dGVyRm9ybSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJncmlkX19jb2xfX3RpdGxlXCI+QWxzbyBSZWFkLi4uPC9oMz5cclxuICAgICAgICAgICAgICAgIDxBbGwgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBzdG9yZUFydGljbGVzOiBzdGF0ZS5hcnRpY2xlLmFydGljbGVzLFxyXG4gICAgaXNBZG1pbjogc3RhdGUuYXV0aC5pc0FkbWluLFxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRBbGxBcnRpY2xlcyB9KShCbG9nKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHsgU2VvIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCBIZXJvIGZyb20gJy4uL3NlY3Rpb25zL2hvbWUvSGVybyc7XHJcbmltcG9ydCBIZXJvQ2FyZHMgZnJvbSAnLi4vc2VjdGlvbnMvaG9tZS9IZXJvQ2FyZHMnO1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4uL2xheW91dC9wcmVsb2FkZXInO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHR2YXIgaG9tZUNvbnRlbnQgPSAnYWRzZic7XHJcblx0cmV0dXJuIChcclxuXHRcdDxtb3Rpb24uZGl2XHJcblx0XHRcdGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG5cdFx0XHRhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuXHRcdFx0ZXhpdD17eyBvcGFjaXR5OiAwIH19PlxyXG5cdFx0XHQ8U2VvIHRpdGxlPSdIb21lJyBtZXRhPXtbeyBuYW1lOiAncm9ib3RzJywgY29udGVudDogJ2luZGV4IGZvbGxvdycgfV19IC8+XHJcblx0XHRcdDxkaXYgaWQ9J215RGl2Jz5cclxuXHRcdFx0XHR7aG9tZUNvbnRlbnQgPyAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naG9tZS1jb250YWluZXInPlxyXG5cdFx0XHRcdFx0XHQ8SGVybyAvPlxyXG5cdFx0XHRcdFx0XHQ8SGVyb0NhcmRzIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PFByZWxvYWRlciAvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9tb3Rpb24uZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHsgU2VvIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2xheW91dC8nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9zZWN0aW9ucy9sZWFybi9DYXJkJztcclxuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xyXG5cclxuY29uc3QgTGVhcm4gPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxtb3Rpb24uZGl2XHJcblx0XHRcdGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxyXG5cdFx0XHRhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuXHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwIH19PlxyXG5cdFx0XHQ8U2VvIHRpdGxlPSdMZWFybicgbWV0YT17W3sgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6ICdpbmRleCBmb2xsb3cnIH1dfSAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGxlYXJuLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0PEFkbWluQnV0dG9ucyB0eXBlPSdBZGQnIHVybD0nL2FkZGNhcmQnIGRhdGE9e3sgbmFtZTogJ0NvdXJzZXMnIH19IC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG5cdFx0XHRcdFx0PENhcmQgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxGb290ZXIgLz5cclxuXHRcdDwvbW90aW9uLmRpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhcm47XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb24sIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2xheW91dCc7XHJcbmltcG9ydCB7IFNlbyB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBDaGV2cm9uc1VwLCBDcm9zcyB9IGZyb20gJy4uL2Fzc2V0cy9pY29ucyc7XHJcbmltcG9ydCB7IGdldFNwZWNpYWxpdHksIGNsZWFyQXJ0aWNsZSwgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCBWaWRlb1ByZXZpZXcgZnJvbSAnLi4vc2VjdGlvbnMvcHJldmlldy9WaWRlb1ByZXZpZXcnO1xyXG5pbXBvcnQgVG9waWNzT3ZlcnZpZXcgZnJvbSAnLi4vc2VjdGlvbnMvcHJldmlldy9Ub3BpY3NPdmVydmlldyc7XHJcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcclxuXHJcbmNvbnN0IFByZXZpZXcgPSAoe1xyXG5cdG1hdGNoLFxyXG5cdHNlbGVjdFZpZGVvLFxyXG5cdGNsZWFyQXJ0aWNsZSxcclxuXHRnZXRTcGVjaWFsaXR5LFxyXG5cdHNwZWNpYWxpdHksXHJcbn0pID0+IHtcclxuXHRjb25zdCBbY2xvc2UsIHNldENsb3NlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdGNvbnN0IHsgc3BlY2lhbGl0eU5hbWUgfSA9IG1hdGNoLnBhcmFtc1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y2xlYXJBcnRpY2xlKCk7XHJcblx0XHRnZXRTcGVjaWFsaXR5KHNwZWNpYWxpdHlOYW1lKTtcclxuXHR9LCBbY2xlYXJBcnRpY2xlLCBnZXRTcGVjaWFsaXR5LCBzcGVjaWFsaXR5TmFtZV0pO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZWxlY3RWaWRlbyhzcGVjaWFsaXR5KTtcclxuXHR9LCBbc3BlY2lhbGl0eSwgc2VsZWN0VmlkZW9dKTtcclxuXHJcblx0cmV0dXJuIHNwZWNpYWxpdHkgPyAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9waWNzLW92ci1jb250Jz5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nb3ZlcmxheSdcclxuXHRcdFx0XHRzdHlsZT17eyBkaXNwbGF5OiBjbG9zZSA/ICdub25lJyA6ICdibG9jaycgfX1cclxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRDbG9zZSghY2xvc2UpfT48L2Rpdj5cclxuXHRcdFx0PFNlb1xyXG5cdFx0XHRcdHRpdGxlPSdTZWxlY3QgQXJ0aWNsZSdcclxuXHRcdFx0XHRtZXRhPXtbeyBuYW1lOiAncm9ib3RzJywgY29udGVudDogJ2luZGV4IGZvbGxvdycgfV19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzcGVjaWFsaXR5LWNvbnRhaW5lcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NwZWNpYWxpdHktaGVhZGluZyc+XHJcblx0XHRcdFx0XHQ8aDI+e3NwZWNpYWxpdHkubmFtZX08L2gyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHQ8Q29sXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndG9waWMtb3ZyLWNvbnRhaW5lcidcclxuXHRcdFx0XHRcdFx0bGc9ezR9XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IGhlaWdodDogY2xvc2UgPyAnMjV2aCcgOiAnNTB2aCcgfX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0b3BpY3Mtb3ZlcnZpZXcnPlxyXG5cdFx0XHRcdFx0XHRcdDxoMyBzdHlsZT17eyBmb250U2l6ZTogJzFyZW0nIH19IGNsYXNzTmFtZT0nb3ZlcnZpZXcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+VG9waWNzIE92ZXJ2aWV3IDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nQWRkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvJHtzcGVjaWFsaXR5Lm5hbWV9L3RvcGljL2FkZC9gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXt7IG5hbWU6ICdUb3BpY3MnIH19XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nsb3NlLXRvZ2dsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHR7Y2xvc2UgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldENsb3NlKCFjbG9zZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDaGV2cm9uc1VwIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldENsb3NlKCFjbG9zZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDcm9zcyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PEFjY29yZGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8VG9waWNzT3ZlcnZpZXcgc3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHkubmFtZX0gLz5cclxuXHRcdFx0XHRcdFx0PC9BY2NvcmRpb24+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgbD17OH0+XHJcblx0XHRcdFx0XHRcdDxWaWRlb1ByZXZpZXcgc3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHkubmFtZX0gLz5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KSA6IG51bGw7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0c3BlY2lhbGl0eTogc3RhdGUuc3BlY2lhbGl0eS5zcGVjaWFsaXR5LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcblx0Z2V0U3BlY2lhbGl0eSxcclxuXHRjbGVhckFydGljbGUsXHJcblx0c2VsZWN0VmlkZW8sXHJcbn0pKFByZXZpZXcpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL3NlY3Rpb25zL2VkaXRvcic7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9sYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgYWRkQXJ0aWNsZSwgZWRpdEFydGljbGUsIGdldEFydGljbGUgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgQ2hldnJvbnNVcCB9IGZyb20gJy4uL2Fzc2V0cy9pY29ucyc7XHJcblxyXG5jb25zdCBVcHNlcnRBcnRpY2xlID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgeyBhZGRBcnRpY2xlLCBzcGVjaWFsaXRpZXMsIGVkaXRBcnRpY2xlLCBnZXRBcnRpY2xlLCBwcmV2QXJ0aWNsZSB9ID1cclxuXHRcdHByb3BzO1xyXG5cdGNvbnN0IFtjb250ZW50LCBzZXRjb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbbmFtZSwgc2V0bmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2tleXdvcmRzLCBzZXRBcnRpY2xlS2V5d29yZHNdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtmZWF0dXJlZCwgc2V0ZmVhdHVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFt0aHVtYm5haWxVcmwsIHNldHRodW1ibmFpbFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Ly8gY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdC8vIGNvbnN0IHRvcGljSWQgPSBcIkVSUk9SX05BX0RJWU9cIjtcclxuXHRmdW5jdGlvbiBzY3JvbGxUbyhlbGVtZW50KSB7XHJcblx0XHRpc0NsaWVudCAmJlxyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsKHtcclxuXHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXHJcblx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHR0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Y29uc3QgZ29Ub1RvcCA9ICgpID0+IHtcclxuXHRcdHNjcm9sbFRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc29sZS5sb2cocHJvcHMubWF0Y2gucGFyYW1zLmFydGljbGVJZCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAocHJvcHMuZWRpdCkge1xyXG5cdFx0XHRnZXRBcnRpY2xlKHByb3BzLm1hdGNoLnBhcmFtcy5hcnRpY2xlSWQpO1xyXG5cdFx0fVxyXG5cdH0sIFtwcm9wcywgZ2V0QXJ0aWNsZV0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVFZGl0b3IgPSAoaHRtbCkgPT4ge1xyXG5cdFx0c2V0Y29udGVudChodG1sKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVFZGl0ID0gYXN5bmMgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnNvbGUubG9nKG5hbWUpO1xyXG5cdFx0Y29uc29sZS5sb2coa2V5d29yZHMpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0bmFtZTogbmFtZSA9PT0gJycgPyBwcmV2QXJ0aWNsZS5uYW1lIDogbmFtZSxcclxuXHRcdFx0a2V5d29yZHM6IGtleXdvcmRzID09PSAnJyA/IHByZXZBcnRpY2xlLmtleXdvcmRzIDoga2V5d29yZHMsXHJcblx0XHRcdGNvbnRlbnQ6IGNvbnRlbnQgPT09ICcnID8gcHJldkFydGljbGUuY29udGVudCA6IGNvbnRlbnQsXHJcblx0XHR9O1xyXG5cdFx0ZWRpdEFydGljbGUoZGF0YSwgcHJldkFydGljbGUuX2lkLCBzcGVjaWFsaXRpZXMuc3BlY2lhbGl0eS5OYW1lKTtcclxuXHRcdHRvYXN0KCdBcnRpY2xlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQWRkID0gYXN5bmMgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHsgY29udGVudCwgbmFtZSwga2V5d29yZHMgfSk7XHJcblx0XHRhZGRBcnRpY2xlKHsgY29udGVudCwgbmFtZSwga2V5d29yZHMsIGZlYXR1cmVkLCB0aHVtYm5haWxVcmwgfSk7XHJcblx0XHR0b2FzdCgnQXJ0aWNsZSBhZGRlZCBzdWNjZXNzZnVsbHknKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJvdyBjbGFzc05hbWU9J2Z1bGwtdmlldy1hcnRpY2xlIHAtMic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaGFyZS1pY29ucyc+PC9kaXY+XHJcblxyXG5cdFx0XHQ8Q29sIHNtPXsxfT48L0NvbD5cclxuXHJcblx0XHRcdDxDb2wgaWQ9J3RvcCcgc209ezEwfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPScnIGlkPScnPlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9wcy5lZGl0XHJcblx0XHRcdFx0XHRcdFx0XHQ/IGBVcGRhdGUgQXJ0aWNsZSAtICR7cHJldkFydGljbGUgJiYgcHJldkFydGljbGUubmFtZX1gXHJcblx0XHRcdFx0XHRcdFx0XHQ6ICdBZGQgYSBBcnRpY2xlJ31cclxuXHRcdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuXHRcdFx0XHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQXJ0aWNsZSBOYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gcHJldkFydGljbGUgJiYgcHJldkFydGljbGUubmFtZSA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0bmFtZShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3RodW1ibmFpbFVybCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0FydGljbGUgVGh1bWJuYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gcHJldkFydGljbGUgJiYgcHJldkFydGljbGUudGh1bWJuYWlsVXJsIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXR0aHVtYm5haWxVcmwoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0na2V5d29yZHMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdBcnRpY2xlIERlc2NyaXB0aW9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gcHJldkFydGljbGUgJiYgcHJldkFydGljbGUua2V5d29yZHMgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEFydGljbGVLZXl3b3JkcyhlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nZmVhdHVyZWQnPklzRmVhdHVyZWQgJm5ic3A7IDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gcHJldkFydGljbGUgJiYgcHJldkFydGljbGUuZmVhdHVyZWQgOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0ZmVhdHVyZWQoIWZlYXR1cmVkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdmZWF0dXJlZCdcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Byb3BzLmVkaXQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJldkFydGljbGUgJiYgcHJldkFydGljbGUuY29udGVudCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFZGl0b3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRWRpdG9yPXtoYW5kbGVFZGl0b3J9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17cHJldkFydGljbGUgJiYgcHJldkFydGljbGUuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGxcclxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RWRpdG9yIGhhbmRsZUVkaXRvcj17aGFuZGxlRWRpdG9yfSBkZWZhdWx0VmFsdWU9JycgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhZGQtYXJ0aWNsZS1idXR0b24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcj17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBoYW5kbGVFZGl0KGUpIDogaGFuZGxlQWRkKGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwcm9wcy5lZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RvcC1pY29uJz5cclxuXHRcdFx0XHRcdDxDaGV2cm9uc1VwIHNpemU9JzUwJyBjb2xvcj0nI2RjMTQzYycgb25DbGljaz17Z29Ub1RvcH0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Db2w+XHJcblxyXG5cdFx0XHQ8Q29sIHNtPXsxfT48L0NvbD5cclxuXHRcdDwvUm93PlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0c3BlY2lhbGl0aWVzOiBzdGF0ZS5zcGVjaWFsaXR5LFxyXG5cdHByZXZBcnRpY2xlOiBzdGF0ZS5hcnRpY2xlLnNlbGVjdGVkQXJ0aWNsZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG5cdGFkZEFydGljbGUsXHJcblx0ZWRpdEFydGljbGUsXHJcblx0Z2V0QXJ0aWNsZSxcclxufSkoVXBzZXJ0QXJ0aWNsZSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBzZXJ2aWNlR2V0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IGFkZFNwZWNpYWxpdHksIGVkaXRTcGVjaWFsaXR5IH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vc2VjdGlvbnMvZWRpdG9yJztcclxuXHJcbmNvbnN0IFVwc2VydENhcmQgPSAoeyBhZGRTcGVjaWFsaXR5LCBlZGl0U3BlY2lhbGl0eSwgZWRpdCwgbWF0Y2ggfSkgPT4ge1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHRcdFx0aWYgKGVkaXQpIHtcclxuXHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KFxyXG5cdFx0XHRcdFx0YGFwaS9zcGVjaWFsaXR5L2dldC8ke21hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZX1gXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdGNvbnN0IHsgbmFtZSwgaW1hZ2VVcmwsIGNvbnRlbnQsIF9pZCB9ID0gcmVzLmRhdGEuc3BlY2lhbGl0eTtcclxuXHRcdFx0XHRzZXREYXRhKHsgbmFtZSwgaW1hZ2VVcmwsIGNvbnRlbnQsIF9pZCB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGZldGNoRGF0YSgpO1xyXG5cdH0sIFtlZGl0LCBtYXRjaC5wYXJhbXMuc3BlY2lhbGl0eU5hbWVdKTtcclxuXHRjb25zb2xlLmxvZyhlZGl0LCBkYXRhKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdHNldFN0YXRlKHtcclxuXHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRWRpdG9yID0gKGh0bWwpID0+IHtcclxuXHRcdHNldFN0YXRlKHtcclxuXHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdGNvbnRlbnQ6IGh0bWwsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0aWYgKGVkaXQpIGVkaXRTcGVjaWFsaXR5KHN0YXRlLCBkYXRhLl9pZCk7XHJcblx0XHRlbHNlIGFkZFNwZWNpYWxpdHkoc3RhdGUpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG10LTQnPlxyXG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J210LTUnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRpZD0nbmFtZSdcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1NwZWNpYWxpdHkgTmFtZSdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZWRpdCA/IGRhdGEgJiYgZGF0YS5uYW1lIDogJyd9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0aWQ9J2ltYWdlVXJsJ1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nSW1hZ2UgVVJMJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtlZGl0ID8gZGF0YSAmJiBkYXRhLmltYWdlVXJsIDogJyd9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHR7IWVkaXQgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdJbWFnZSBhbHQgdGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncWwtc25vdyc+XHJcblx0XHRcdFx0XHRcdHtlZGl0ID8gKFxyXG5cdFx0XHRcdFx0XHRcdGRhdGEgJiYgZGF0YS5jb250ZW50ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEVkaXRvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2RhdGEgJiYgZGF0YS5jb250ZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3FsLWVkaXRvcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRWRpdG9yPXtoYW5kbGVFZGl0b3J9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsXHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PEVkaXRvclxyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdxbC1lZGl0b3InXHJcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0b3I9e2hhbmRsZUVkaXRvcn1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FkZC1hcnRpY2xlLWJ1dHRvbic+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gaGFuZGxlcj17aGFuZGxlU3VibWl0fSBpc0J1dHRvbj17dHJ1ZX0gdHlwZT0nc3VibWl0Jz5cclxuXHRcdFx0XHRcdFx0XHR7ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9XHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgYWRkU3BlY2lhbGl0eSwgZWRpdFNwZWNpYWxpdHkgfSkoVXBzZXJ0Q2FyZCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIExvY2tCdXR0b24gfSBmcm9tICcuLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhZGRUb3BpYywgZWRpdFRvcGljIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuY29uc3QgVXBzZXJ0VG9waWMgPSAoe1xyXG5cdHNwZWNpYWxpdHksXHJcblx0bWF0Y2gsXHJcblx0YWRkVG9waWMsXHJcblx0ZWRpdFRvcGljLFxyXG5cdGxvY2F0aW9uLFxyXG5cdGVkaXQsXHJcbn0pID0+IHtcclxuXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7IGxvY2tlZDogZmFsc2UgfSk7XHJcblx0Y29uc29sZS5sb2cobG9jYXRpb24pO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXREYXRhKHtcclxuXHRcdFx0bG9ja2VkOiBsb2NhdGlvbi5wcm9wcyAmJiBsb2NhdGlvbi5wcm9wcy5pc0xvY2tlZCxcclxuXHRcdFx0bmFtZTogbG9jYXRpb24ucHJvcHMgJiYgbG9jYXRpb24ucHJvcHMubmFtZSxcclxuXHRcdH0pO1xyXG5cdH0sIFtsb2NhdGlvbi5wcm9wc10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0aWYgKCFlZGl0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdHsgLi4uZGF0YSwgc3BlY2lhbGl0eUlkOiBzcGVjaWFsaXR5Ll9pZCB9LFxyXG5cdFx0XHRcdG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRhZGRUb3BpYyhcclxuXHRcdFx0XHR7IC4uLmRhdGEsIHNwZWNpYWxpdHlJZDogc3BlY2lhbGl0eS5faWQgfSxcclxuXHRcdFx0XHRtYXRjaC5wYXJhbXMuc3BlY2lhbGl0eU5hbWVcclxuXHRcdFx0KTtcclxuXHRcdFx0dG9hc3QoJ1RvcGljIEFkZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWRpdFRvcGljKGRhdGEsIG1hdGNoLnBhcmFtcy50b3BpY0lkLCBtYXRjaC5wYXJhbXMuc3BlY2lhbGl0eU5hbWUpO1xyXG5cdFx0XHR0b2FzdCgnVXBkYXRlZCcpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBzZXJ0LWNvbnRhaW5lcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtdG9waWMtZm9ybSc+XHJcblx0XHRcdFx0PGgzPntlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ30gVG9waWM8L2gzPlxyXG5cdFx0XHRcdDxmb3JtPlxyXG5cdFx0XHRcdFx0eycgJ31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWlucHV0Jz5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtsb2NhdGlvbi5wcm9wcyAmJiBsb2NhdGlvbi5wcm9wcy5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0RGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgbmFtZTogZS50YXJnZXQudmFsdWUgfSkpO1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tYnV0dG9uJz5cclxuXHRcdFx0XHRcdFx0PExvY2tCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRpc0xvY2tlZD17ZGF0YS5sb2NrZWR9XHJcblx0XHRcdFx0XHRcdFx0aGFuZGxlcj17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0RGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgbG9ja2VkOiAhcHJldi5sb2NrZWQgfSkpO1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxCdXR0b24gaXNCdXR0b249e3RydWV9IGhhbmRsZXI9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0XHRcdHtlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ31cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdHNwZWNpYWxpdHk6IHN0YXRlLnNwZWNpYWxpdHkuc3BlY2lhbGl0eSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBhZGRUb3BpYywgZWRpdFRvcGljIH0pKFVwc2VydFRvcGljKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBhZGRWaWRlbywgZWRpdFZpZGVvLCBnZXRWaWRlbyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgVXBzZXJ0VmlkZW8gPSAoe1xyXG5cdGVkaXQsXHJcblx0bWF0Y2gsXHJcblx0YWRkVmlkZW8sXHJcblx0ZWRpdFZpZGVvLFxyXG5cdGdldFZpZGVvLFxyXG5cdHNwZWNpYWxpdGllcyxcclxuXHRwcmV2VmlkZW8sXHJcbn0pID0+IHtcclxuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShwcmV2VmlkZW8gPyBwcmV2VmlkZW8ubmFtZSA6ICcnKTtcclxuXHRjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFxyXG5cdFx0cHJldlZpZGVvID8gcHJldlZpZGVvLmRlc2NyaXB0aW9uIDogJydcclxuXHQpO1xyXG5cdGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShwcmV2VmlkZW8gPyBwcmV2VmlkZW8udXJsIDogJycpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVBZGQgPSBhc3luYyAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0YXdhaXQgYWRkVmlkZW8oXHJcblx0XHRcdHsgbmFtZSwgZGVzY3JpcHRpb24sIHVybCB9LFxyXG5cdFx0XHRtYXRjaC5wYXJhbXMudG9waWNJZCxcclxuXHRcdFx0c3BlY2lhbGl0aWVzLnNwZWNpYWxpdHkubmFtZVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVFZGl0ID0gYXN5bmMgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGF3YWl0IGVkaXRWaWRlbyhcclxuXHRcdFx0eyBuYW1lLCBkZXNjcmlwdGlvbiwgdXJsIH0sXHJcblx0XHRcdHByZXZWaWRlby5faWQsXHJcblx0XHRcdHNwZWNpYWxpdGllcy5zcGVjaWFsaXR5Lm5hbWVcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Vwc2VydC12aWRlby1mb3JtJz5cclxuXHRcdFx0XHQ8aDM+e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQgJ31WaWRlbzwvaDM+XHJcblx0XHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5Vcmw8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt1cmx9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRVcmwoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc0J1dHRvbj17dHJ1ZX1cclxuXHRcdFx0XHRcdGhhbmRsZXI9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGVkaXQgPyBoYW5kbGVFZGl0KGUpIDogaGFuZGxlQWRkKGUpO1xyXG5cdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHR7ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRzcGVjaWFsaXRpZXM6IHN0YXRlLnNwZWNpYWxpdHksXHJcblx0cHJldlZpZGVvOiBzdGF0ZS52aWRlby5zZWxlY3RlZFZpZGVvLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcblx0YWRkVmlkZW8sXHJcblx0ZWRpdFZpZGVvLFxyXG5cdGdldFZpZGVvLFxyXG59KShVcHNlcnRWaWRlbyk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7XHJcbiAgY29tcG9uZW50OiBDb21wb25lbnQsXHJcbiAgYXV0aDogeyBpc0F1dGhlbnRpY2F0ZWQgfSxcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdXRlXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgICByZW5kZXI9eyhwcm9wcykgPT5cclxuICAgICAgICAhaXNBdXRoZW50aWNhdGVkID8gPFJlZGlyZWN0IHRvPVwiL2xvZ2luXCIgLz4gOiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGF1dGg6IHN0YXRlLmF1dGgsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByaXZhdGVSb3V0ZSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VvID0gKHtcclxuXHRkZXNjcmlwdGlvbixcclxuXHR0aXRsZSA9ICcgJyxcclxuXHRsYW5nID0gJ2VuJyxcclxuXHRtZXRhID0gW10sXHJcblx0cmljaHJlc3VsdCxcclxufSkgPT4ge1xyXG5cdC8vIGNvbnN0IHsgZmF2aWNvbiB9ID0gJyc7XHJcblxyXG5cdGNvbnN0IG1ldGFUaXRsZSA9IGBDb2RlcnNHYWxhIHwgJHt0aXRsZX1gO1xyXG5cdGNvbnN0IG1ldGFEZXNjcmlwdGlvbiA9XHJcblx0XHRcIkNvZGVyc0dhbGEncyBvbmx5IHB1cnBvc2UgaXMgdG8gcHJvdmlkZSBjb2Rpbmcga25vd2xlZGdlLCBzdWNoIGFzIFdlYiBkZXZlbG9wbWVudCB0aGF0IGluY2x1ZGVzIEhUTUwgQ1NTIEpTIE5vZGUgUmVhY3QgTW9uZ29EYiwgTWFjaGluZSBMZWFybmluZywgRGF0YSBTdHJ1Y3R1cmVzIGFuZCBBbGdvcml0aG1cIiB8fFxyXG5cdFx0ZGVzY3JpcHRpb247XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVsbWV0XHJcblx0XHRcdHRpdGxlPXttZXRhVGl0bGV9XHJcblx0XHRcdGh0bWxBdHRyaWJ1dGVzPXt7IGxhbmcgfX1cclxuXHRcdFx0bWV0YT17W1xyXG5cdFx0XHRcdHsgbmFtZTogYGRlc2NyaXB0aW9uYCwgY29udGVudDogbWV0YURlc2NyaXB0aW9uIH0sXHJcblx0XHRcdFx0eyBwcm9wZXJ0eTogYG9nOnRpdGxlYCwgY29udGVudDogbWV0YVRpdGxlIH0sXHJcblx0XHRcdFx0eyBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCwgY29udGVudDogbWV0YURlc2NyaXB0aW9uIH0sXHJcblx0XHRcdFx0eyBwcm9wZXJ0eTogYG9nOnR5cGVgLCBjb250ZW50OiBgd2Vic2l0ZWAgfSxcclxuXHRcdFx0XHR7IG5hbWU6IGB0d2l0dGVyOmNhcmRgLCBjb250ZW50OiBgc3VtbWFyeWAgfSxcclxuXHRcdFx0XHR7IG5hbWU6IGB0d2l0dGVyOnRpdGxlYCwgY29udGVudDogbWV0YVRpdGxlIH0sXHJcblx0XHRcdFx0eyBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsIGNvbnRlbnQ6IG1ldGFEZXNjcmlwdGlvbiB9LFxyXG5cdFx0XHRdLmNvbmNhdChtZXRhKX1cclxuXHRcdFx0bGluaz17W3sgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9wbmcnLCBocmVmOiAnZmF2aWNvbicgfV19XHJcblx0XHRcdHNjcmlwdD17W1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcclxuXHRcdFx0XHRcdGlubmVySFRNTDogSlNPTi5zdHJpbmdpZnkocmljaHJlc3VsdCksXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XX1cclxuXHRcdC8+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgU0VSVklDRV9VUkwgfSBmcm9tICcuLyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZVBvc3QgPSBhc3luYyAocGF0aCwgcGF5bG9hZCwgaGVhZGVycyA9IG51bGwpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYCR7U0VSVklDRV9VUkx9LyR7cGF0aH1gLCBwYXlsb2FkLCB7XHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VHZXQgPSBhc3luYyAocGF0aCwgcGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke1NFUlZJQ0VfVVJMfS8ke3BhdGh9YCwgcGF5bG9hZClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgU0VSVklDRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Qcml2YXRlUm91dGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Nlbyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2V0QXV0aFRva2VuJztcclxuZXhwb3J0ICogZnJvbSAnLi9hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEF1dGhUb2tlbiA9ICh0b2tlbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICBpZiAodG9rZW4pIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgSldUICR7dG9rZW59YDtcclxuICB9IGVsc2Uge1xyXG4gICAgZGVsZXRlIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ107XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgc2Nyb2xsVG8gPSAoZWxlbWVudCkgPT4ge1xyXG5cdGlzQ2xpZW50ICYmXHJcblx0XHR3aW5kb3cuc2Nyb2xsKHtcclxuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxyXG5cdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxyXG5cdFx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNDbGllbnQgPVxyXG5cdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCA/IHRydWUgOiBmYWxzZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LXRpcHB5JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZWxldGUsIFVwZGF0ZSwgQWRkIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcclxuXHJcbmNvbnN0IFRvb2x0aXBXcmFwcGVyID0gKHsgdGl0bGUsIHBvc2l0aW9uLCBjaGlsZHJlbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxUb29sdGlwIHRpdGxlPXt0aXRsZX0gcG9zaXRpb249e3Bvc2l0aW9ufSB0cmlnZ2VyPSdtb3VzZWVudGVyJz5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9Ub29sdGlwPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBBZG1pbkJ1dHRvbnMgPSAoeyB0eXBlLCB1cmwsIGhhbmRsZXIsIGlzQWRtaW4sIGRhdGEgPSB7fSB9KSA9PlxyXG5cdGlzQWRtaW4gPyAoXHJcblx0XHQ8VG9vbHRpcFdyYXBwZXIgdGl0bGU9e2Ake3R5cGV9IFwiJHtkYXRhLm5hbWV9XCJgfSBwb3NpdGlvbj17J3RvcCd9PlxyXG5cdFx0XHQ8QWRtaW5CdXR0b25zV3JhcHBlclxyXG5cdFx0XHRcdHR5cGU9e3R5cGV9XHJcblx0XHRcdFx0dXJsPXt1cmx9XHJcblx0XHRcdFx0aGFuZGxlcj17aGFuZGxlcn1cclxuXHRcdFx0XHRkYXRhPXtkYXRhfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9Ub29sdGlwV3JhcHBlcj5cclxuXHQpIDpcclxuXHRcdDxBZG1pbkJ1dHRvbnNXcmFwcGVyXHJcblx0XHRcdHR5cGU9e1wiTm9uZVwifVxyXG5cdFx0XHR1cmw9e3VybH1cclxuXHRcdFx0aGFuZGxlcj17aGFuZGxlcn1cclxuXHRcdFx0ZGF0YT17ZGF0YX1cclxuXHRcdC8+XHJcblx0O1xyXG5cclxuY29uc3QgQWRtaW5CdXR0b25zV3JhcHBlciA9ICh7IHR5cGUsIHVybCwgaGFuZGxlciwgZGF0YSB9KSA9PiB7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlICdBZGQnOlxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxMaW5rIHRvPXt1cmx9PlxyXG5cdFx0XHRcdFx0PEFkZCBzaXplPScyMCcgY29sb3I9JyMwMDAnIC8+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdGNhc2UgJ0VkaXQnOlxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHR0bz17e1xyXG5cdFx0XHRcdFx0XHRwYXRobmFtZTogdXJsLFxyXG5cdFx0XHRcdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU6IGRhdGEubmFtZSxcclxuXHRcdFx0XHRcdFx0XHRpc0xvY2tlZDogZGF0YS5sb2NrZWQsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdDxVcGRhdGUgc2l6ZT0nMjAnIGNvbG9yPScjMDAwJyAvPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0KTtcclxuXHJcblx0XHRjYXNlICdEZWxldGUnOlxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6IFwibm9uZVwiLCBib3JkZXI6IFwibm9uZVwiLCBvdXRsaW5lOiBcIm5vbmVcIiB9fVxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRoYW5kbGVyKGRhdGEpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZWRpdC10b3BpYy1tb2RhbC10b2dnbGUnPlxyXG5cdFx0XHRcdFx0PERlbGV0ZSBzaXplPScyMCcgY29sb3I9J2NyaW1zb24nIC8+XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIDxidXR0b24gaHJlZj1cIiNcIlxyXG5cdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6IFwibm9uZVwiLCBib3JkZXI6IFwibm9uZVwiLCBvdXRsaW5lOiBcIm5vbmVcIiwgfX1cclxuXHRcdFx0XHRjbGFzc05hbWU9J2VkaXQtdG9waWMtbW9kYWwtdG9nZ2xlJz5cclxuXHRcdFx0XHQ8RGVsZXRlIHNpemU9JzAnIGNvbG9yPScnIC8+XHJcblx0XHRcdDwvYnV0dG9uPjtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0aXNBZG1pbjogc3RhdGUuYXV0aC5pc0FkbWluLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShBZG1pbkJ1dHRvbnMpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IExvY2ssIFJlYWQsIFVubG9jayB9IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucyc7XHJcblxyXG5jb25zdCBJbm5lckRpdiA9ICh7IGhhbmRsZXIsIGNoaWxkcmVuLCBkYXJrLCBiZyB9KSA9PlxyXG5cdGNoaWxkcmVuID8gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2BidXR0b24gJHtkYXJrICYmICdkYXJrJ31gfVxyXG5cdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGAke2JnICYmICdiZyd9YCB9fVxyXG5cdFx0XHRvbkNsaWNrPXtoYW5kbGVyID8gaGFuZGxlciA6IChlKSA9PiBjb25zb2xlLmxvZyhlLCBoYW5kbGVyKX0+XHJcblx0XHRcdDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XHJcblx0XHRcdDxzdmc+XHJcblx0XHRcdFx0PHBvbHlsaW5lXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J28xJ1xyXG5cdFx0XHRcdFx0cG9pbnRzPScwIDAsIDE1MCAwLCAxNTAgNTUsIDAgNTUsIDAgMCc+PC9wb2x5bGluZT5cclxuXHRcdFx0XHQ8cG9seWxpbmVcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nbzInXHJcblx0XHRcdFx0XHRwb2ludHM9JzAgMCwgMTUwIDAsIDE1MCA1NSwgMCA1NSwgMCAwJz48L3BvbHlsaW5lPlxyXG5cdFx0XHQ8L3N2Zz5cclxuXHRcdDwvZGl2PlxyXG5cdCkgOiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7JyAgICd9XHJcblx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdDxSZWFkIHNpemU9ezE5fSAvPlxyXG5cdFx0XHQ8L3NwYW4+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCB1cmwsIGRhcmssIGJnLCBpc0J1dHRvbiwgaGFuZGxlciB9KSA9PiB7XHJcblx0cmV0dXJuIHR5cGVvZiBpc0J1dHRvbiA9PSAndW5kZWZpbmVkJyA/IChcclxuXHRcdDxMaW5rIHRvPXt1cmwgJiYgdXJsfT5cclxuXHRcdFx0PElubmVyRGl2IGRhcms9e2Rhcmt9IGJnPXtiZ30+XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L0lubmVyRGl2PlxyXG5cdFx0PC9MaW5rPlxyXG5cdCkgOiAoXHJcblx0XHQ8SW5uZXJEaXYgZGFyaz17ZGFya30gYmc9e2JnfSBoYW5kbGVyPXtoYW5kbGVyfT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9Jbm5lckRpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2tCdXR0b24gPSAoeyBpc0xvY2tlZCwgaGFuZGxlciB9KSA9PiB7XHJcblx0cmV0dXJuIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZXJ9Pntpc0xvY2tlZCA/IDxMb2NrIC8+IDogPFVubG9jayAvPn08L3NwYW4+O1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL0FkbWluQnV0dG9ucyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVXNlckJ1dHRvbnMnO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGb290ZXJTb2NpYWxNZWRpYSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWFcIj5cclxuICAgICAgPGEgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiaHR0cHM6Ly9nbWFpbC5jb21cIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzMwMzE2MS9nbWFpbC1pY29uLWxvZ28uc3ZnXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE4MzYwOC90d2l0dGVyLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2JpaGFuaS5wcml5YVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xMTExOTkvaW5zdGFncmFtLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8yMTc3NTMvZ2l0aHViLnN2Z1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJnaXRodWJcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEZvb3Rlck1lc3NhZ2UoKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHNldEZvb3Rlck1lc3NhZ2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldE1lc3NhZ2UoJ0VudGVyIFlvdXIgRW1haWwgaGVyZSB0byBzdWJzY3JpYmUgZm9yIE5ld3NsZXR0ZXInKSB9XHJcbiAgICAsIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udFwiPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWNvbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+Q29kZXJzIEdhbGE8L3NwYW4+XHJcbiAgICAgICAgICAgIDxGb290ZXJTb2NpYWxNZWRpYSAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyaWdodHMtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICZjb3B5OyAyMDIwIENvZGVycyBHYWxhICwgQWxsIFJpZ2h0cyBSZXNlcnZlZFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY29sXCI+XHJcbiAgICAgICAgICAgIDxoMT5PdXIgTmV3c2xldHRlcjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiIGZvcm0gbmV3c2xldHRlci1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0YlwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG5cIiAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiwgQ29sLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXREaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdWknO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xyXG5cclxuLy8gPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09XHJcbmltcG9ydCBTaWduZWRPdXRMaW5rcyBmcm9tICcuL1NpZ25lZE91dExpbmtzJztcclxuaW1wb3J0IFNpZ25lZEluTGlua3MgZnJvbSAnLi9TaWduZWRJbkxpbmtzJztcclxuLy8gPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09XHJcblxyXG4vLyBsb2dvIGltcG9ydHNcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9jZ1RyYW5zcGFyZW50LlBORyc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBhdXRoLCB1aSwgc2V0RGlzcGxheU1vZGUgfSkgPT4ge1xyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRjb25zdCBbbmF2YmFyRXhwYW5kZWQsIHNldG5hdmJhckV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbc3dpdGNoZWQsIHNldHN3aXRjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKHVpLmRpc3BsYXlNb2RlKTtcclxuXHRcdGNvbnNvbGUubG9nKHVpLmRpc3BsYXlNb2RlKTtcclxuXHRcdGlmICh1aS5kaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XHJcblx0XHRcdHNldHN3aXRjaGVkKHRydWUpO1xyXG5cdFx0fVxyXG5cdH0sIFtzZXRzd2l0Y2hlZCwgdWkuZGlzcGxheU1vZGVdKTtcclxuXHJcblx0Ly8gR2V0dGluZyB0aGUgY3VycmVudCBtb2RlIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5cdGlmIChpc0NsaWVudCkge1xyXG5cdFx0bGV0IG1vZGUgPSAnbGlnaHQnO1xyXG5cclxuXHRcdG1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpO1xyXG5cclxuXHRcdGlmIChtb2RlID09PSAnZGFyaycpIHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL1xyXG5cclxuXHQvLyBjb25zdCBsaW5rcyA9IDxTaWduZWRPdXRMaW5rcyAvPjtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSduYXZpZ2F0aW9uLXdyYXAgYmctbGlnaHQgc3RhcnQtaGVhZGVyIHN0YXJ0LXN0eWxlJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0PEFjY29yZGlvblxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjcgPyBudWxsIDogJ2Ryb3Bkb3duLWFjY29yZGlvbid9PlxyXG5cdFx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdFx0PENvbD5cclxuXHRcdFx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbmF2YmFyLWxpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPScvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogaXNDbGllbnQgJiYgd2luZG93LmlubmVySGVpZ2h0ID49IDc2NyA/ICcycmVtJyA6ICcxLjJyZW0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbG9nbydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e0xvZ299XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PScnXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdzd2l0Y2gnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXREaXNwbGF5TW9kZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldHN3aXRjaGVkKCFzd2l0Y2hlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHN3aXRjaCBmbG9hdC1yaWdodCAke3N3aXRjaGVkID8gJ3N3aXRjaGVkJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dWkuZGlzcGxheU1vZGUgPT09ICdkYXJrJyA/ICcjMTExJyA6ICcjZjFmMWYxJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjaXJjbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbW9kZS1pY29uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dWkuZGlzcGxheU1vZGUgPT09ICdkYXJrJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMzE1OC9tb29uLnN2ZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzgzNzI2L3N1bi5zdmcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9JydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BvaW50cy1ib3ggJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3BvaW50cy10ZXh0Jz4gUG9pbnRzIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiQ0cgUG9pbnRzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPSdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvNzE1LzcxNTcwOS5zdmcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncG9pbnRzLWltZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPiB7YXV0aC51c2VyICYmIGF1dGgudXNlci5wb2ludHN9IDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2lnbmVkLWxpbmtzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2F1dGguaXNBdXRoZW50aWNhdGVkICYmIGF1dGguaXNBdXRoZW50aWNhdGVkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2lnbmVkSW5MaW5rcyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTaWduZWRPdXRMaW5rcyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PEFjY29yZGlvbi5Ub2dnbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtYnRuJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0bmF2YmFyRXhwYW5kZWQoIW5hdmJhckV4cGFuZGVkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YXM9e0J1dHRvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nbGluaydcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRLZXk9JzUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PScjbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9e25hdmJhckV4cGFuZGVkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J1RvZ2dsZSBuYXZpZ2F0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J25hdmJhci10b2dnbGVyLWljb24nPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9BY2NvcmRpb24uVG9nZ2xlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFjY29yZGlvbi5Db2xsYXBzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9JyAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudEtleT0nNSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2F1dGgudXNlciAmJiBhdXRoLnVzZXIudXNlcklkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNpZ25lZEluTGlua3MgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNpZ25lZE91dExpbmtzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuXHRcdFx0XHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHQ8L0FjY29yZGlvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4vLyAgIGF1dGg6IHN0YXRlLmF1dGgsXHJcbi8vIH0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGF1dGg6IHN0YXRlLmF1dGgsXHJcblx0XHR1aTogc3RhdGUudWksXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IHNldERpc3BsYXlNb2RlIH0pKE5hdmJhcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IFNpZ25lZEluTGlua3MgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9J25hdmJhci1uYXYgbWwtYXV0byBweS00IHB5LW1kLTAnPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTQnPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmsgdG89Jy9ob21lJyBjbGFzc05hbWU9J25hdi1saW5rJz5cclxuXHRcdFx0XHRcdFx0SG9tZVxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNCc+XHJcblx0XHRcdFx0XHQ8TmF2TGluayB0bz0nL2Fib3V0JyBjbGFzc05hbWU9J25hdi1saW5rJz5cclxuXHRcdFx0XHRcdFx0QWJvdXRcclxuXHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTQnPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmtcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbGluayAnXHJcblx0XHRcdFx0XHRcdHRvPScvbGVhcm4nXHJcblx0XHRcdFx0XHRcdHJvbGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnPlxyXG5cdFx0XHRcdFx0XHRMZWFyblxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPjwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+XHJcblxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTQnPlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRocmVmPScvJ1xyXG5cdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG5cdFx0XHRcdFx0XHRMb2dPdXRcclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25lZEluTGlua3M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IFNpZ25lZE91dExpbmtzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvIHB5LTQgcHktbWQtMFwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00XCI+XHJcbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9ob21lXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTRcIj5cclxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00XCI+XHJcbiAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICB0bz1cIi9sZWFyblwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMZWFyblxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+PC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxyXG4gICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgdG89XCIvbG9naW5cIlxyXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+PC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduZWRPdXRMaW5rcztcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9CdXR0b25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9Gb290ZXInO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZWxvYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItc2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1ib3hcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXIxXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlcjJcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyM1wiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyIiwiY29uc3QgaW5pdGlhbFN0YXRlID0geyBhcnRpY2xlczogW10gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFydGljbGVSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuXHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlICdBRERfQVJUSUNMRSc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dG9waWNzOiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ0dFVF9BUlRJQ0xFJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWxlY3RlZEFydGljbGU6IHBheWxvYWQuYXJ0aWNsZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ0dFVF9BTExfQVJUSUNMRVMnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFydGljbGVzOiBwYXlsb2FkLmFydGljbGVzLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnQ0xFQVJfQVJUSUNMRSc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2VsZWN0ZWRBcnRpY2xlOiB7fSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlICdBRERfQVJUSUNMRV9FUlJPUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdExPR0lOX1NVQ0NFU1MsXHJcblx0TE9HSU5fRkFJTCxcclxuXHRSRUdJU1RFUl9TVUNDRVNTLFxyXG5cdFJFR0lTVEVSX0ZBSUwsXHJcblx0VVNFUl9MT0FERUQsXHJcblx0QVVUSF9FUlJPUixcclxuXHRMT0dPVVQsXHJcblx0U0VORF9SRVNFVF9FTUFJTCxcclxufSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHR0b2tlbjogaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyksXHJcblx0aXNBdXRoZW50aWNhdGVkOiBudWxsLFxyXG5cdGxvYWRpbmc6IGZhbHNlLFxyXG5cdHVzZXI6IG51bGwsXHJcblx0aXNBZG1pbjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuXHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlIFVTRVJfTE9BREVEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHVzZXI6IHBheWxvYWQsXHJcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiB0cnVlLFxyXG5cdFx0XHRcdGlzQWRtaW46IHBheWxvYWQucm9sZSA9PT0gMCA/IGZhbHNlIDogdHJ1ZSxcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgUkVHSVNURVJfU1VDQ0VTUzpcclxuXHRcdGNhc2UgTE9HSU5fU1VDQ0VTUzpcclxuXHRcdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcGF5bG9hZC50b2tlbik7XHJcblx0XHRcdGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBwYXlsb2FkLnVzZXJJZCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi5wYXlsb2FkLFxyXG5cdFx0XHRcdGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgUkVHSVNURVJfRkFJTDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgTE9HSU5fRkFJTDpcclxuXHRcdGNhc2UgQVVUSF9FUlJPUjpcclxuXHRcdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcblx0XHRcdGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySWQnKTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0b2tlbjogbnVsbCxcclxuXHRcdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHVzZXJJZDogbnVsbCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgTE9HT1VUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRva2VuOiBudWxsLFxyXG5cdFx0XHRcdGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFNFTkRfUkVTRVRfRU1BSUw6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4ucGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlICdTRVRfQVVUSF9MT0FERVInOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0IHNwZWNpYWxpdHkgZnJvbSAnLi9zcGVjaWFsaXR5JztcclxuaW1wb3J0IHRvcGljIGZyb20gJy4vdG9waWMnO1xyXG5pbXBvcnQgYXJ0aWNsZSBmcm9tICcuL2FydGljbGUnO1xyXG5pbXBvcnQgdWkgZnJvbSAnLi91aSc7XHJcbmltcG9ydCB2aWRlbyBmcm9tICcuL3ZpZGVvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0YXV0aCxcclxuXHRzcGVjaWFsaXR5LFxyXG5cdHRvcGljLFxyXG5cdGFydGljbGUsXHJcblx0dWksXHJcblx0dmlkZW8sXHJcbn0pO1xyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0c3BlY2lhbGl0aWVzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwZWNpYWxpdHlSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuXHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUSUVTJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzcGVjaWFsaXRpZXM6IHBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUWSc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3BlY2lhbGl0eTogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ0NMRUFSX1NQRUNJQUxJVFknOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNwZWNpYWxpdHk6IHt9LFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnR0VUX1NQRUNJQUxJVElFU19FUlJPUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSAnR0VUX1NQRUNJQUxJVFlfRVJST1InOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHRvcGljczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b3BpY1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ0dFVF9UT1BJQ1MnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRvcGljczogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlICdHRVRfVE9QSUNTX0VSUk9SJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRvcGVuVG9waWNzOiBbXSxcclxuXHRkaXNwbGF5TW9kZTpcclxuXHRcdGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RlJylcclxuXHRcdFx0PyBpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpXHJcblx0XHRcdDogJ2xpZ2h0JyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVpUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0Y29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlICdTRVRfT1BFTl9UT1BJQ1MnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG9wZW5Ub3BpY3M6IHBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdTRVRfRElTUExBWV9NT0RFJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkaXNwbGF5TW9kZTogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzZWxlY3RlZFZpZGVvOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuXHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlICdBRERfVklERU8nOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRvcGljczogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlICdHRVRfVklERU8nOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlbGVjdGVkVmlkZW86IHBheWxvYWQudmlkZW8sXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdTRUxFQ1RfVklERU8nOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlbGVjdGVkVmlkZW86IHBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdDTEVBUl9WSURFTyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2VsZWN0ZWRWaWRlbzoge30sXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSAnQUREX1ZJREVPX0VSUk9SJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBQcm9maWxlQ2FyZCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwicHJvZmlsZS1jYXJkXCI+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxoMT57ZGF0YS5uYW1lfTwvaDE+XHJcbiAgICAgICAgPGgyPkhlbGxvITwvaDI+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYmlvXCI+XHJcbiAgICAgICAgPHA+e2RhdGEuYmlvfTwvcD5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsLWljb25zIGxpc3QtdW5zdHlsZWQgbGlzdC1pbmxpbmVcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2RhdGEucG9ydGZvbGlvVXJsfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTg4OTkwL2Jyb3dzZXItd2Vic2l0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17ZGF0YS5pbnN0YVVybH0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzExMTE5OS9pbnN0YWdyYW0uc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2RhdGEudHdpdHRlclVybH0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE4MzYwOC90d2l0dGVyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtkYXRhLmdpdGh1YlVybH0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzIxNzc1My9naXRodWIuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdpdGh1YlwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FzaWRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBYm91dFVzID0gKCkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG15RnVuY3Rpb24oKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTU1MCkge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlLWNhcmRcIilcclxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS1jYXJkLWFuaW1cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdXMtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICBBYm91dCA8c3Bhbj5Vczwvc3Bhbj5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11cy10ZXh0XCI+XHJcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdW9kIGRvbG9yXHJcbiAgICAgICAgICBkb2xvcmUgb2RpdCwgbmVxdWUgaXRhcXVlIGl1cmUgcXVhcyBtb2xsaXRpYSBuaWhpbCBjdW1xdWUgcmVtIGhhcnVtXHJcbiAgICAgICAgICBjb25zZXF1dW50dXIgY29uc2VjdGV0dXIuIEF1dGVtIGZ1Z2l0LCBkb2xvcmlidXMgc2ludCBlbmltIGVycm9yIHNlcXVpXHJcbiAgICAgICAgICBxdW8gcmVtIG1pbmltYSBtYWduaSBleGNlcHR1cmkgZXhwZWRpdGEgbW9sbGl0aWEgcmVjdXNhbmRhZSBoYXJ1bVxyXG4gICAgICAgICAgYWxpYXMgcmVwZWxsZW5kdXMsIHNpdCB2b2x1cHRhdGUgZmFjaWxpcyBzaW1pbGlxdWUgYXQgaW4gYXNwZXJpb3Jlc1xyXG4gICAgICAgICAgc3VudCBpbmFtIHNhZXBlIHF1aS4gTmlzaSBtaW5pbWEgaXBzYSBpbGxvIHRlbXBvcmUgcXVvZCBlbmltIGV1bVxyXG4gICAgICAgICAgcXVpZGVtP1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNhcmRzXCI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgbGc9ezZ9PlxyXG4gICAgICAgICAgICA8UHJvZmlsZUNhcmRcclxuICAgICAgICAgICAgICBkYXRhPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlByaXlhXCIsXHJcbiAgICAgICAgICAgICAgICBwb3J0Zm9saW9Vcmw6IFwiaHR0cHM6Ly9rbm93LXByaXlhLWJpaGFuaS52ZXJjZWwuYXBwXCIsXHJcbiAgICAgICAgICAgICAgICBpbnN0YVVybDogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2JpaGFuaS5wcml5YVwiLFxyXG4gICAgICAgICAgICAgICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vUHJpeWFCaWhhbmlcIixcclxuICAgICAgICAgICAgICAgIHR3aXR0ZXJVcmw6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9wX2JpaGFuaVwiLFxyXG4gICAgICAgICAgICAgICAgYmlvOlxyXG4gICAgICAgICAgICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdW50IHRlbXBvcmEgZXZlbmlldCBxdWFlIG5lcXVlIGhpYyBkb2xvcmlidXMgdm9sdXB0YXRpYnVzIGluY2lkdW50IHF1aWEgZmFjaWxpcyBibGFuZGl0aWlzLlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIGxnPXs2fT5cclxuICAgICAgICAgICAgPFByb2ZpbGVDYXJkXHJcbiAgICAgICAgICAgICAgZGF0YT17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJLYXJ0aWtcIixcclxuICAgICAgICAgICAgICAgIHBvcnRmb2xpb1VybDogXCJodHRwczovL2dvb2dsZS5jb21cIixcclxuICAgICAgICAgICAgICAgIGluc3RhVXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYmloYW5pLnByaXlhXCIsXHJcbiAgICAgICAgICAgICAgICBnaXRodWJVcmw6IFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9rYXJ0aWsxOGdcIixcclxuICAgICAgICAgICAgICAgIHR3aXR0ZXJVcmw6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9Ha2FhcnRpa1wiLFxyXG4gICAgICAgICAgICAgICAgYmlvOlxyXG4gICAgICAgICAgICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdW50IHRlbXBvcmEgZXZlbmlldCBxdWFlIG5lcXVlIGhpYyBkb2xvcmlidXMgdm9sdXB0YXRpYnVzIGluY2lkdW50IHF1aWEgZmFjaWxpcyBibGFuZGl0aWlzLlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRVcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUXVlc3Rpb25zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9ucy1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzLXMtMVwiPlxyXG4gICAgICAgIDxoMj5cclxuICAgICAgICAgIEFib3V0IDxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5Db2RlcnMgR2FsYTwvc3Bhbj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtZGluXCI+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgV2hhdCBpcyA8c3BhbiBjbGFzc05hbWU9XCJcIj5Db2RlcnMgR2FsYTwvc3Bhbj4/XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWkgZG9sb3IgZXhwbGljYWJvIG9wdGlvXHJcbiAgICAgICAgICBmdWdpYXQgcXVvIG51bXF1YW0hIE1vbGxpdGlhLCBmYWNpbGlzIGFwZXJpYW0gbmloaWwgdm9sdXB0YXRlXHJcbiAgICAgICAgICBjb25zZXF1dW50dXIgZG9sb3JlLCBoaWMgYWIgdG90YW0gYmxhbmRpdGlpcyBsb3JlbTMwIGFjY3VzYW50aXVtLFxyXG4gICAgICAgICAgbWFnbmFtIG9kaXQgZXVtP1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2h5LWRpblwiPlxyXG4gICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICBXaHkgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Q29kZXJzIEdhbGE8L3NwYW4+P1xyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICAgIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pIGRvbG9yIGV4cGxpY2FibyBvcHRpb1xyXG4gICAgICAgICAgZnVnaWF0IHF1byBudW1xdWFtISBNb2xsaXRpYSwgZmFjaWxpcyBhcGVyaWFtIG5paGlsIHZvbHVwdGF0ZVxyXG4gICAgICAgICAgY29uc2VxdXVudHVyIGRvbG9yZSwgaGljIGFiIHRvdGFtIGJsYW5kaXRpaXMgYWNjdXNhbnRpdW0sIG1hZ25hbSBvZGl0XHJcbiAgICAgICAgICBldW0/XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0LWRpblwiPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIFdoYXQgaXMgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Q29kZXJzIEdhbGE8L3NwYW4+P1xyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICAgIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pIGRvbG9yIGV4cGxpY2FibyBvcHRpb1xyXG4gICAgICAgICAgZnVnaWF0IHF1byBudW1xdWFtISBNb2xsaXRpYSwgZmFjaWxpcyBhcGVyaWFtIG5paGlsIHZvbHVwdGF0ZVxyXG4gICAgICAgICAgY29uc2VxdXVudHVyIGRvbG9yZSwgaGljIGFiIHRvdGFtIGJsYW5kaXRpaXMgbG9yZW0zMCBhY2N1c2FudGl1bSxcclxuICAgICAgICAgIG1hZ25hbSBvZGl0IGV1bT9cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25zO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IEFsbCA9ICh7IGFydGljbGVzIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyaWRfX2NvbC0zXCI+XHJcbiAgICAgICAgICAgIHthcnRpY2xlcyAmJlxyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgQXJ0aWNsZUlkID0gYXJ0aWNsZSAmJiBhcnRpY2xlLl9pZDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW0tbWRcIiBrZXk9e0FydGljbGVJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9ibG9nL3JlYWQvJHthcnRpY2xlICYmIGFydGljbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgXCItXCIpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthcnRpY2xlLnRodW1ibmFpbFVybCA/IGFydGljbGUudGh1bWJuYWlsVXJsIDogXCJodHRwczovL2NvZGVyc2dhbGEuY29tL3N0YXRpYy9tZWRpYS9jZ1RyYW5zcGFyZW50LjZhOWMzNDk2LlBOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkX19pdGVtX19pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9fY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZSAmJiBtb21lbnQoYXJ0aWNsZS5jcmVhdGVkQXQpLmZvcm1hdChcIkREIE1NIFlZWVlcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJncmlkX19pdGVtX190aXRsZVwiPnthcnRpY2xlICYmIGFydGljbGUubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2F1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IENvZGVyc0dhbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IEZlYXR1cmVkID0gKHsgYXJ0aWNsZXMgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHR7YXJ0aWNsZXMgJiZcclxuXHRcdFx0XHRhcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcclxuXHRcdFx0XHRcdGlmIChhcnRpY2xlICYmIGFydGljbGUuZmVhdHVyZWQgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYXJ0aWNsZSk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IEFydGljbGVJZCA9IGFydGljbGUgJiYgYXJ0aWNsZS5faWQ7XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWRfX2l0ZW0tc20nIGtleT17YXJ0aWNsZSAmJiBhcnRpY2xlLmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvPXtgL2Jsb2cvcmVhZC8ke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFydGljbGUgJiYgYXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCAnLScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2dyaWRfX2l0ZW1fX2NhdGVnb3J5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHthcnRpY2xlICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vbWVudChhcnRpY2xlLmNyZWF0ZWRBdCkuZm9ybWF0KCdERCBNTSBZWVlZJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2dyaWRfX2l0ZW1fX3RpdGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHthcnRpY2xlICYmIGFydGljbGUubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZ3JpZF9faXRlbV9fYXV0aG9yJz5CeSBDb2RlcnNHYWxhPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcnRpY2xlLnRodW1ibmFpbFVybFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gYXJ0aWNsZS50aHVtYm5haWxVcmxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdodHRwczovL2NvZGVyc2dhbGEuY29tL3N0YXRpYy9tZWRpYS9jZ1RyYW5zcGFyZW50LjZhOWMzNDk2LlBORydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZ3JpZF9faXRlbV9faW1nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PScnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHR9KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgTGF0ZXN0ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhcnRpY2xlICYmIGFydGljbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgXCItXCIpKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW0tbGdcIj5gXHJcbiAgICAgICAgICAgIHthcnRpY2xlICYmIDxOYXZMaW5rIHRvPXtgL2Jsb2cvcmVhZC8ke2FydGljbGUgJiYgYXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIi1cIil9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17YXJ0aWNsZS50aHVtYm5haWxVcmwgPyBhcnRpY2xlLnRodW1ibmFpbFVybCA6IFwiaHR0cHM6Ly9jb2RlcnNnYWxhLmNvbS9zdGF0aWMvbWVkaWEvY2dUcmFuc3BhcmVudC42YTljMzQ5Ni5QTkdcIn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkX19pdGVtX19pbWdcIiBjbGFzc05hbWU9XCJncmlkX19pdGVtX19pbWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9fY2F0ZWdvcnlcIj4ge2FydGljbGUgJiYgbW9tZW50KGFydGljbGUuY3JlYXRlZEF0KS5mb3JtYXQoXCJERCBNTSBZWVlZXCIpfTwvcD5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJncmlkX19pdGVtX190aXRsZVwiPnthcnRpY2xlLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2F1dGhvclwiPkJ5IENvZGVyc0dhbGE8L3A+XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF0ZXN0O1xyXG4iLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnO1xyXG4vLyBpbXBvcnQgUmVhY3RRdWlsbCwgeyBRdWlsbCB9IGZyb20gJ3JlYWN0LXF1aWxsJztcclxuLy8gbGV0IEJsb2NrRW1iZWQgPSBRdWlsbC5pbXBvcnQoJ2Jsb3RzL2Jsb2NrL2VtYmVkJyk7XHJcbi8vIGxldCBJbmxpbmUgPSBRdWlsbC5pbXBvcnQoJ2Jsb3RzL2lubGluZScpO1xyXG4vLyBobGpzLmNvbmZpZ3VyZSh7XHJcbi8vICAgbGFuZ3VhZ2VzOiBbJ2phdmFzY3JpcHQnLCAncHl0aG9uJywgJ2h0bWwnLCAnY3NzJ10sXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgQ3VzdG9tQnV0dG9uID0gKCkgPT4gKFxyXG4vLyAgIDxpbWdcclxuLy8gICAgIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcgfX1cclxuLy8gICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvNzc1ODQvaW1hZ2Uuc3ZnXCJcclxuLy8gICAgIGFsdD1cIlwiXHJcbi8vICAgLz5cclxuLy8gKTtcclxuXHJcbi8vIC8vIGNvbnN0IENvZGVMaW5lID0gKCkgPT4gKFxyXG4vLyAvLyAgIDxpbWdcclxuLy8gLy8gICAgIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcgfX1cclxuLy8gLy8gICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMjk0MTQ1L2NvZGUuc3ZnXCJcclxuLy8gLy8gICAgIGFsdD1cIlwiXHJcbi8vIC8vICAgLz5cclxuLy8gLy8gKTtcclxuXHJcbi8vIGNvbnN0IFNpemUgPSBRdWlsbC5pbXBvcnQoJ2Zvcm1hdHMvc2l6ZScpO1xyXG4vLyBTaXplLndoaXRlbGlzdCA9IFtcclxuLy8gICAnMScsXHJcbi8vICAgJzInLFxyXG4vLyAgICc0JyxcclxuLy8gICAnNicsXHJcbi8vICAgJzgnLFxyXG4vLyAgICcxMCcsXHJcbi8vICAgJzEyJyxcclxuLy8gICAnMTQnLFxyXG4vLyAgICcxNicsXHJcbi8vICAgJzIwJyxcclxuLy8gICAnMjQnLFxyXG4vLyAgICcyNicsXHJcbi8vICAgJzMwJyxcclxuLy8gXTtcclxuLy8gUXVpbGwucmVnaXN0ZXIoU2l6ZSwgdHJ1ZSk7XHJcblxyXG4vLyBjbGFzcyBpbmxpbmVDb2RlQmxvdCBleHRlbmRzIElubGluZSB7IH1cclxuLy8gaW5saW5lQ29kZUJsb3QuYmxvdE5hbWUgPSAnaW5saW5lQ29kZSc7XHJcbi8vIGlubGluZUNvZGVCbG90LnRhZ05hbWUgPSAnY29kZSc7XHJcblxyXG4vLyBjbGFzcyBJbWFnZUJsb3QgZXh0ZW5kcyBCbG9ja0VtYmVkIHtcclxuLy8gICBzdGF0aWMgY3JlYXRlKHZhbHVlKSB7XHJcbi8vICAgICBsZXQgbm9kZSA9IHN1cGVyLmNyZWF0ZSgpO1xyXG4vLyAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHZhbHVlLmFsdCk7XHJcbi8vICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgdmFsdWUudXJsKTtcclxuLy8gICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIHZhbHVlLmNsYXNzKTtcclxuLy8gICAgIHJldHVybiBub2RlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgc3RhdGljIHZhbHVlKG5vZGUpIHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIGFsdDogbm9kZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpLFxyXG4vLyAgICAgICB1cmw6IG5vZGUuZ2V0QXR0cmlidXRlKCdzcmMnKSxcclxuLy8gICAgICAgY2xhc3M6IG5vZGUuZ2V0QXR0cmlidXRlKCdjbGFzcycpLFxyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gSW1hZ2VCbG90LmJsb3ROYW1lID0gJ2ltYWdlJztcclxuLy8gSW1hZ2VCbG90LnRhZ05hbWUgPSAnaW1nJztcclxuLy8gUXVpbGwucmVnaXN0ZXIoSW1hZ2VCbG90KTtcclxuLy8gUXVpbGwucmVnaXN0ZXIoaW5saW5lQ29kZUJsb3QpO1xyXG5cclxuLy8gY29uc3QgaW5zZXJ0SW1hZ2UgPSAoKSA9PiB7XHJcbi8vICAgbGV0IHVybCA9IHByb21wdCgnRW50ZXIgbGluayBVUkwnKTtcclxuLy8gICBsZXQgYWx0ID0gcHJvbXB0KCdFbnRlciBsaW5rIGFsdCcpO1xyXG4vLyAgIGxldCBjbGFzID0gcHJvbXB0KCdFbnRlciBjbGFzcyBOYW1lJyk7XHJcbi8vICAgbGV0IHJhbmdlID0gdGhpcy5xdWlsbC5nZXRTZWxlY3Rpb24odHJ1ZSk7XHJcbi8vICAgY29uc29sZS5sb2coUXVpbGwuc291cmNlcyk7XHJcbi8vICAgdGhpcy5xdWlsbC5pbnNlcnRUZXh0KHJhbmdlLmluZGV4LCAnXFxuJywgUXVpbGwuc291cmNlcy5VU0VSKTtcclxuLy8gICB0aGlzLnF1aWxsLmluc2VydEVtYmVkKFxyXG4vLyAgICAgcmFuZ2UuaW5kZXggKyAxLFxyXG4vLyAgICAgJ2ltYWdlJyxcclxuLy8gICAgIHtcclxuLy8gICAgICAgYWx0OiBhbHQsXHJcbi8vICAgICAgIHVybDogdXJsLFxyXG4vLyAgICAgICBjbGFzczogY2xhcyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBRdWlsbC5zb3VyY2VzLlVTRVJcclxuLy8gICApO1xyXG4vLyAgIHRoaXMucXVpbGwuc2V0U2VsZWN0aW9uKHJhbmdlLmluZGV4ICsgMiwgUXVpbGwuc291cmNlcy5TSUxFTlQpO1xyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgaW5zZXJ0SW5saW5lQ29kZSA9IChlKSA9PiB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHRoaXMucXVpbGwpO1xyXG4vLyAgIC8vIHRoaXMucXVpbGwuZm9ybWF0KFwiaW5saW5lQ29kZVwiLCB0cnVlKTtcclxuLy8gICBjb25zb2xlLmxvZygnaW5saW5lIGNvZGUgaW5zJyk7XHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBDdXN0b21Ub29sYmFyID0gKCkgPT4gKFxyXG4vLyAgIDxkaXYgaWQ9XCJ0b29sYmFyXCI+XHJcbi8vICAgICA8c2VsZWN0XHJcbi8vICAgICAgIGNsYXNzTmFtZT1cInFsLWhlYWRlclwiXHJcbi8vICAgICAgIGRlZmF1bHRWYWx1ZT17Jyd9XHJcbi8vICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZS5wZXJzaXN0KCl9XHJcbi8vICAgICA+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XHJcbi8vICAgICA8L3NlbGVjdD5cclxuXHJcbi8vICAgICA8c2VsZWN0IGNsYXNzPVwicWwtZm9udFwiPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VyaWZcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiBzZWxlY3RlZD48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vbm9zcGFjZVwiPjwvb3B0aW9uPlxyXG4vLyAgICAgPC9zZWxlY3Q+XHJcblxyXG4vLyAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJxbC1zaXplXCI+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiMlwiPlxyXG4vLyAgICAgICAgIDJcclxuLy8gICAgICAgPC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjY8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj44PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMlwiPjEyPC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNFwiPjI0PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNlwiPjI2PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMFwiPjMwPC9vcHRpb24+XHJcbi8vICAgICA8L3NlbGVjdD5cclxuXHJcbi8vICAgICA8c2VsZWN0IGNsYXNzPVwicWwtYWxpZ25cIj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbnRlclwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlnaHRcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cImp1c3RpZnlcIj48L29wdGlvbj5cclxuLy8gICAgIDwvc2VsZWN0PlxyXG5cclxuLy8gICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtYmFja2dyb3VuZFwiPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVkXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJncmVlblwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzRGNjlGOFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwib3JhbmdlXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2aW9sZXRcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIiNkMGQxZDJcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiBzZWxlY3RlZD48L29wdGlvbj5cclxuLy8gICAgIDwvc2VsZWN0PlxyXG5cclxuLy8gICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtY29sb3JcIj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIiNEQTBGNDdcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIiM0RENFMURcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIiM0RjY5RjhcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9yYW5nZVwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzk5MzNmZlwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiI2QwZDFkMlwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxyXG4vLyAgICAgPC9zZWxlY3Q+XHJcblxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1ib2xkXCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWl0YWxpY1wiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC11bmRlcmxpbmVcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtc3RyaWtlXCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWJsb2NrcXVvdGVcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtZGlyZWN0aW9uXCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWxpbmtcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaW1hZ2VcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtdmlkZW9cIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gdmFsdWU9XCJvcmRlcmVkXCIgY2xhc3NOYW1lPVwicWwtbGlzdFwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiB2YWx1ZT1cImJ1bGxldFwiIGNsYXNzTmFtZT1cInFsLWxpc3RcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gdmFsdWU9XCItMVwiIGNsYXNzTmFtZT1cInFsLWluZGVudFwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiB2YWx1ZT1cIisxXCIgY2xhc3NOYW1lPVwicWwtaW5kZW50XCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWNvZGUtYmxvY2tcIj48L2J1dHRvbj5cclxuXHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWluc2VydEltYWdlXCI+XHJcbi8vICAgICAgIDxDdXN0b21CdXR0b24gLz5cclxuLy8gICAgIDwvYnV0dG9uPlxyXG4vLyAgIDwvZGl2PlxyXG4vLyApO1xyXG5cclxuLy8gLypcclxuLy8gICogRWRpdG9yIGNvbXBvbmVudCB3aXRoIGN1c3RvbSB0b29sYmFyIGFuZCBjb250ZW50IGNvbnRhaW5lcnNcclxuLy8gICovXHJcblxyXG4vLyBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbi8vICAgICBzdXBlcihwcm9wcyk7XHJcbi8vICAgICB0aGlzLnN0YXRlID0geyBlZGl0b3JIdG1sOiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSB9O1xyXG4vLyAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgaGFuZGxlQ2hhbmdlKGh0bWwpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0b3JIdG1sOiBodG1sIH0pO1xyXG4vLyAgICAgdGhpcy5wcm9wcy5oYW5kbGVFZGl0b3IoaHRtbCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVkaXRvckh0bWwpO1xyXG5cclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKTtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1lZGl0b3JcIj5cclxuLy8gICAgICAgICA8Q3VzdG9tVG9vbGJhciAvPlxyXG4vLyAgICAgICAgIDxSZWFjdFF1aWxsXHJcbi8vICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICBtb2R1bGVzPXtFZGl0b3IubW9kdWxlc31cclxuLy8gICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVkaXRvckh0bWwgfHwgJyd9XHJcbi8vICAgICAgICAgLz5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gRWRpdG9yLm1vZHVsZXMgPSB7XHJcbi8vICAgc3ludGF4OiB7XHJcbi8vICAgICBoaWdobGlnaHQ6ICh0ZXh0KSA9PiBobGpzLmhpZ2hsaWdodEF1dG8odGV4dCkudmFsdWUsXHJcbi8vICAgfSxcclxuLy8gICB0b29sYmFyOiB7XHJcbi8vICAgICBjb250YWluZXI6ICcjdG9vbGJhcicsXHJcblxyXG4vLyAgICAgaGFuZGxlcnM6IHtcclxuLy8gICAgICAgaW5zZXJ0SW1hZ2U6IGluc2VydEltYWdlLFxyXG4vLyAgICAgICBpbnNlcnRJbmxpbmVDb2RlOiBpbnNlcnRJbmxpbmVDb2RlLFxyXG4vLyAgICAgfSxcclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gRWRpdG9yLmZvcm1hdHMgPSBbXHJcbi8vICAgJ2hlYWRlcicsXHJcbi8vICAgJ2ZvbnQnLFxyXG4vLyAgICdzaXplJyxcclxuLy8gICAnYm9sZCcsXHJcbi8vICAgJ2l0YWxpYycsXHJcbi8vICAgJ3VuZGVybGluZScsXHJcbi8vICAgJ3N0cmlrZScsXHJcbi8vICAgJ2Jsb2NrcXVvdGUnLFxyXG4vLyAgICdsaXN0JyxcclxuLy8gICAnYnVsbGV0JyxcclxuLy8gICAnaW5kZW50JyxcclxuLy8gICAnbGluaycsXHJcbi8vICAgJ2ltYWdlJyxcclxuLy8gICAnY29sb3InLFxyXG4vLyAgICdjb2RlLWJsb2NrJyxcclxuLy8gXTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IEhlcm8gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2x1bmExLmNvLzU3ZDliNi5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1pbWFnZSAtdHdvIC1mbG9hdGluZ0RlbGF5XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbHVuYTEuY28vMjA3MGVlLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWltYWdlIC10aHJlZSAtZmxvYXRpbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9sdW5hMS5jby9mZGE4NjAucG5nXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taW1hZ2UgLWZvdXIgLWZsb2F0aW5nRGVsYXlcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWhlYWRlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWxhYmVsXCI+VGhpcyBpcy4uLjwvcD5cclxuXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWhlYWRsaW5lIFwiPkNvZGVycyBHYWxhPC9oMT5cclxuXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8tZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgQ29kZXJzIEdhbGEgaXMgYSBmcmVlIHRvIHVzZSBwbGF0Zm9ybSwgd2hpY2ggd2lsbCBoZWxwIGFuZCBndWlkZVxyXG4gICAgICAgICAgICB5b3UsIG5vdCBvbmx5IHRvIGxlYXJuIHdlYiBkZXZlbG9wbWVudCBidXQgYmVjb21lIGEgZnJlZS1sYW5jZXIgbGlrZVxyXG4gICAgICAgICAgICB1cy4gU28gY2xpY2sgb24gcGxheSBhbmQgZW1iYXJrIGEgbmV3IGpvdXJuZXkgd2l0aCB1cy5cclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9sZWFyblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXBsYXkgLWNvcmFsIC1zbWFsbCAtcHVsc2VcIj48L2Rpdj5cclxuICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgSGVyb0NhcmRzID0gKCkgPT4ge1xyXG5cdC8vIHJlZnMgZm9yIHRoZSB0aHJlZSBzZWN0aW9uXHJcblx0Y29uc3QgaGVyb0JsdWUgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBoZXJvT3JhbmdlID0gdXNlUmVmKCk7XHJcblx0Y29uc3QgaGVyb0dyZWVuID0gdXNlUmVmKCk7XHJcblxyXG5cdGNvbnN0IHNjcm9sbEZ1bmN0aW9uID0gKCkgPT4ge1xyXG5cdFx0aXNDbGllbnQgJiZcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuXHRcdFx0XHR2YXIgc2Nyb2xsID0gd2luZG93LnNjcm9sbFk7XHJcblx0XHRcdFx0aWYgKHNjcm9sbCA8IDE1MCkge1xyXG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcclxuXHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xyXG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzY3JvbGwgPiAxNTAgJiYgc2Nyb2xsIDwgNDUwKSB7XHJcblx0XHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ29uZScpO1xyXG5cdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XHJcblx0XHRcdFx0XHRoZXJvR3JlZW4uY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0d28nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHNjcm9sbCA+IDQ1MCAmJiBzY3JvbGwgPCA2NTApIHtcclxuXHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3R3bycpO1xyXG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcclxuXHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gNjUwKSB7XHJcblx0XHRcdFx0XHRoZXJvR3JlZW4uY3VycmVudC5jbGFzc0xpc3QuYWRkKCd0d28nKTtcclxuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XHJcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndGhyZWUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwKSB7XHJcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEZ1bmN0aW9uKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGlzQ2xpZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gNjAwKSB7XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndHdvJyk7XHJcblx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3RocmVlJyk7XHJcblx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdvbmUnKTtcclxuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29uZScpO1xyXG5cdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRoZXJvR3JlZW4uY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0d28nKTtcclxuXHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xyXG5cdFx0XHRcdFx0XHR9LCA4NTApO1xyXG5cdFx0XHRcdFx0fSwgNzUwKTtcclxuXHRcdFx0XHR9LCA2NTApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGlzQ2xpZW50ICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxGdW5jdGlvbik7XHJcblx0XHR9O1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0naGVybyc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdoZXJvLWJveC1jb250YWluZXInPlxyXG5cdFx0XHRcdDxMaW5rIHRvPScvYWJvdXQnIGNsYXNzTmFtZT0naGVyby1ib3gnPlxyXG5cdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0cmVmPXtoZXJvQmx1ZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoZXJvLWJveF9fY2lyY2xlIGhlcm8tYm94X19jaXJjbGUtLWJsdWUnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2hlcm8tYm94X190aXRsZSc+V2hhdCBpcyBDb2RlcnNHYWxhPzwvaDI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hlcm8tYm94X19ib2R5Jz5cclxuXHRcdFx0XHRcdFx0Q29kZXJzR2FsYSBpcyBhIGZyZWUgdG8gdXNlIHBsYXRmb3JtIGZvciBhbGwgdGhvc2UgcGVvcGxlIHdobyBhcmVcclxuXHRcdFx0XHRcdFx0dW53aWxsaW5nIHRvIHBheSBoaWdoIHJhbnNvbSB0byB0aGVzZSBjcm9va2VkIGNvYWNoaW5nIGNlbnRlcnMgZm9yXHJcblx0XHRcdFx0XHRcdGxlYXJuaW5nIHdlYiBEZXZlbG9wbWVudC4gV2Ugd29uJ3QgYmUgc3Bvb24gZmVlZGluZyB5b3UgYnV0IHdlIHdpbGxcclxuXHRcdFx0XHRcdFx0Z3VpZGUgeW91LiBBbnl3YXksIGlmIHlvdSBhcmUgZWFnZXIgdG8gbGVhcm4geW91IHdpbGwgZmluZCBhIHdheS5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PExpbmsgdG89Jy9hYm91dC8jYWJvdXR1cycgY2xhc3NOYW1lPSdoZXJvLWJveCc+XHJcblx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRyZWY9e2hlcm9HcmVlbn1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoZXJvLWJveF9fY2lyY2xlIGhlcm8tYm94X19jaXJjbGUtLWdyZWVuJz48L3NwYW4+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdoZXJvLWJveF9fdGl0bGUnPldobyBhcmUgd2U/PC9oMj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0naGVyby1ib3hfX2JvZHknPlxyXG5cdFx0XHRcdFx0XHRXZSBzdGFydGVkIHdlYiBkZXZlbG9wbWVudCBvbiBvdXIgb3duLCB3aXRoIG5vIGRpcmVjdGlvbiBhbmQgbm9cclxuXHRcdFx0XHRcdFx0Y29hY2hpbmcuIEFsbCB3ZSBoYWQgd2FzIGRldGVybWluYXRpb24gYW5kIGludGVybmV0LiBXZSBjb25zaWRlclxyXG5cdFx0XHRcdFx0XHRvdXJzZWx2ZXMgbHVja3kgdG8gYmUgYWJsZSB0byBwcm92aWRlIHRoZSBzdXBwb3J0IHRoYXQgaGFkIGJlZW5cclxuXHRcdFx0XHRcdFx0cHJvdmlkZWQgdG8gdXMuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxMaW5rIHRvPScvbGVhcm4nIGNsYXNzTmFtZT0naGVyby1ib3gnPlxyXG5cdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0cmVmPXtoZXJvT3JhbmdlfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tb3JhbmdlJz48L3NwYW4+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdoZXJvLWJveF9fdGl0bGUnPlN0YXJ0IExlYXJuaW5nIC4uPC9oMj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0naGVyby1ib3hfX2JvZHknPlxyXG5cdFx0XHRcdFx0XHRSaWdodCBub3cgd2UgaGF2ZSB0aGUgYXJ0aWNsZXMgb24gZnJvbnQtZW5kLWRldmVsb3BtZW50LiBXZSBhcmVcclxuXHRcdFx0XHRcdFx0d29ya2luZyB0aXJlbGVzc2x5IHRvIGNvdmVyIGJhY2tlbmQuIFdlIHdpbGwgaGF2ZSB0aGUgYXJ0aWNsZXMgYWlyZWRcclxuXHRcdFx0XHRcdFx0b24gYmFja2VuZCBiZWZvcmUgc2VwdGVtYmVyLiBUaGUgY291cnNlIHdpbGwgY292ZXIgRnJvbnQtZW5kLCBBUEksXHJcblx0XHRcdFx0XHRcdE5vZGVqcy1leHByZXNzLCBNb25nb0RiLCBNeVNRTCwgSG9zdGluZywgUmVhY3QsIEZpcmViYXNlLi4uIGFuZCBhXHJcblx0XHRcdFx0XHRcdGxvdCBtb3JlIHByb2plY3RzLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9DYXJkcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LXRpcHB5JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2Nyb2xsVG8sIGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2xheW91dCc7XHJcbmltcG9ydCB7IGRlbGV0ZUFydGljbGUsIHNlbGVjdFZpZGVvIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcclxuXHJcbmNvbnN0IEFydGljbGVOYW1lcyA9ICh7XHJcblx0c2VsZWN0VmlkZW8sXHJcblx0YXJ0aWNsZSxcclxuXHRkZWxldGVBcnRpY2xlLFxyXG5cdHRvcGljLFxyXG5cdHNwZWNpYWxpdHlOYW1lLFxyXG59KSA9PiB7XHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnN0IHsgQXJ0aWNsZU5hbWUsIF9pZCB9ID0gZGF0YTtcclxuXHRcdGNvbnN0IGNvbmZpcm0gPVxyXG5cdFx0XHRpc0NsaWVudCAmJlxyXG5cdFx0XHR3aW5kb3cucHJvbXB0KGBZb3Ugc3VyZSB3YW50IHRvIGRlbGV0ZSBcIiR7QXJ0aWNsZU5hbWV9XCIgPyBZIG9yIE4gYCk7XHJcblx0XHRpZiAoY29uZmlybSA9PT0gJ1knKSB7XHJcblx0XHRcdGRlbGV0ZUFydGljbGUoX2lkLCB0b3BpYy5faWQsIHNwZWNpYWxpdHlOYW1lKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3JvdyByZWFkLWljb24nPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIHJlYWQgY29sLTEwJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naXRlbSc+XHJcblx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhhcnRpY2xlKTtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyhhcnRpY2xlKTtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBwb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPD0gNTAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxUbyhwb3MpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkaXNwbGF5LWFydGljbGUnPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdhcnRpY2xlLW5hbWUgbS0wJz5cclxuXHRcdFx0XHRcdFx0XHR7YXJ0aWNsZS5BcnRpY2xlTmFtZX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYXJ0aWNsZS1hY3Rpb24taWNvbnMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdFZGl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvYXJ0aWNsZS91cGRhdGUvJHthcnRpY2xlLl9pZH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXthcnRpY2xlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nRGVsZXRlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXtoYW5kbGVEZWxldGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2FydGljbGV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb3B0aW9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17YFJlYWQgXCIke2FydGljbGUuQXJ0aWNsZU5hbWV9XCJgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0cmlnZ2VyPSdtb3VzZWVudGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzQnV0dG9uPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdFZpZGVvKGFydGljbGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgcG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPD0gNTAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNjcm9sbFRvKHBvcyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cGRhdGUtZGVsZXRlIGZsb2F0LXJpZ2h0Jz48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGRlbGV0ZUFydGljbGUsIHNlbGVjdFZpZGVvIH0pKEFydGljbGVOYW1lcyk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2xheW91dCc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcclxuaW1wb3J0IHsgZ2V0U3BlY2lhbGl0aWVzLCBkZWxldGVTcGVjaWFsaXR5IH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgZ2V0U3BlY2lhbGl0aWVzLCBzcGVjaWFsaXRpZXMsIGRlbGV0ZVNwZWNpYWxpdHkgfSkgPT4ge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoc3BlY2lhbGl0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRnZXRTcGVjaWFsaXRpZXMoKTtcclxuXHRcdH1cclxuXHR9LCBbc3BlY2lhbGl0aWVzLmxlbmd0aCwgZ2V0U3BlY2lhbGl0aWVzXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpdGVtKSA9PiB7XHJcblx0XHQvLyBHb3QgdG8gaGVscGVyLCBjaGVja1xyXG5cdFx0Y29uc3QgY29uZmlybSA9XHJcblx0XHRcdGlzQ2xpZW50ICYmXHJcblx0XHRcdHdpbmRvdy5wcm9tcHQoXHJcblx0XHRcdFx0YFlvdSBzdXJlIHdhbnQgdG8gZGVsZXRlIFwiJHtpdGVtLk5hbWV9XCIgPyBZIG9yIE4gKERlbGV0aW5nIGEgc3BlY2lhbGl0eSB3aWxsIGxlYWQgdG8gZGVsZXRpb24gb2YgYWxsIHRvcGljcyBhbmQgYXJ0aWNsZXMgaW5zaWRlIGl0KSBgXHJcblx0XHRcdCk7XHJcblx0XHRpZiAoY29uZmlybSA9PT0gJ1knKSB7XHJcblx0XHRcdGRlbGV0ZVNwZWNpYWxpdHkoaXRlbS5faWQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGVhcm4tY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBwdC00Jz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdHtzcGVjaWFsaXRpZXMgJiZcclxuXHRcdFx0XHRcdFx0c3BlY2lhbGl0aWVzLm1hcCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aXRlbS5faWR9IGNsYXNzTmFtZT0nY29sLWxnLTYnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ltZ0J4Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbWFnZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpdGVtLmltYWdlVXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e2l0ZW0uYWx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPD0gNjAwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICcxNTBweCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29udGVudEJ4Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj4ge2l0ZW0ubmFtZX08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdFZGl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw9eycvdXBkYXRlc3BlY2lhbGl0eS8nICsgaXRlbS5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXtpdGVtfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nRGVsZXRlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlKGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXtpdGVtfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdXJsPXsnL2xlYXJuLycgKyBpdGVtLm5hbWV9PlN0YXJ0IE5vdzwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0c3BlY2lhbGl0aWVzOiBzdGF0ZS5zcGVjaWFsaXR5LnNwZWNpYWxpdGllcyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG5cdGdldFNwZWNpYWxpdGllcyxcclxuXHRkZWxldGVTcGVjaWFsaXR5LFxyXG59KShDYXJkKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LXRpcHB5JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgZGVsZXRlVmlkZW8sIHNlbGVjdFZpZGVvIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcclxuXHJcbmNvbnN0IFZpZGVvTmFtZXMgPSAoe1xyXG5cdHNlbGVjdFZpZGVvLFxyXG5cdHZpZGVvLFxyXG5cdGRlbGV0ZVZpZGVvLFxyXG5cdHRvcGljLFxyXG5cdHNwZWNpYWxpdHlOYW1lLFxyXG59KSA9PiB7XHJcblx0Y29uc29sZS5sb2codmlkZW8pO1xyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IChkYXRhKSA9PiB7XHJcblx0XHRjb25zdCB7IFZpZGVvTmFtZSwgX2lkIH0gPSBkYXRhO1xyXG5cdFx0Y29uc3QgY29uZmlybSA9XHJcblx0XHRcdGlzQ2xpZW50ICYmXHJcblx0XHRcdHdpbmRvdy5wcm9tcHQoYFlvdSBzdXJlIHdhbnQgdG8gZGVsZXRlIFwiJHtWaWRlb05hbWV9XCIgPyBZIG9yIE4gYCk7XHJcblx0XHRpZiAoY29uZmlybSA9PT0gJ1knKSB7XHJcblx0XHRcdGRlbGV0ZVZpZGVvKF9pZCwgdG9waWMuX2lkLCBzcGVjaWFsaXR5TmFtZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgcmVhZC1pY29uJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlYWQgY29sLTEwJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naXRlbSc+XHJcblx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyh2aWRlbyk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZGlzcGxheS1hcnRpY2xlJz5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nYXJ0aWNsZS1uYW1lIG0tMCc+XHJcblx0XHRcdFx0XHRcdFx0e3ZpZGVvLm5hbWV9eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2FydGljbGUtYWN0aW9uLWljb25zJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nRWRpdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsPXtgL3ZpZGVvL3VwZGF0ZS8ke3ZpZGVvLl9pZH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXt2aWRlb31cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcj17aGFuZGxlRGVsZXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXt2aWRlb31cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvcHRpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtgUmVhZCBcIiR7dmlkZW8ubmFtZX1cImB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRyaWdnZXI9J21vdXNlZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcj17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0VmlkZW8odmlkZW8pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBkYXRlLWRlbGV0ZSBmbG9hdC1yaWdodCc+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBkZWxldGVWaWRlbywgc2VsZWN0VmlkZW8gfSkoVmlkZW9OYW1lcyk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tICdyZWFjdC1odG1sLXBhcnNlcic7XHJcbmltcG9ydCB7IHVubG9ja1RvcGljIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy90b3BpYyc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBBcnRpY2xlUHJldmlldyA9ICh7IFNlbGVjdGVkQXJ0aWNsZSwgc3BlY2lhbGl0eU5hbWUsIHVubG9ja1RvcGljIH0pID0+IHtcclxuXHRjb25zdCBSZWFkTW9yZVVybCA9XHJcblx0XHRTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLm5hbWVcclxuXHRcdFx0PyBgLyR7c3BlY2lhbGl0eU5hbWV9L3JlYWQvJHtTZWxlY3RlZEFydGljbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgJy0nKX1gXHJcblx0XHRcdDogYC8ke3NwZWNpYWxpdHlOYW1lfS9yZWFkL2JlZm9yZS1zdGFydGluZ2A7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVVubG9jayA9IGFzeW5jICh0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4ge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdW5sb2NrVG9waWModG9waWNJZCwgc3BlY2lhbGl0eU5hbWUpO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHR9O1xyXG5cdGNvbnNvbGUubG9nKFNlbGVjdGVkQXJ0aWNsZSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRhaW5lcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMgY2FyZC1oZWFkZXInPlxyXG5cdFx0XHRcdFx0XHR7U2VsZWN0ZWRBcnRpY2xlICYmIFNlbGVjdGVkQXJ0aWNsZS5uYW1lXHJcblx0XHRcdFx0XHRcdFx0PyBTZWxlY3RlZEFydGljbGUubmFtZVxyXG5cdFx0XHRcdFx0XHRcdDogJ1JlYWQgVGhpcyBCZWZvcmUgWW91IFN0YXJ0Li4uJ31cclxuXHRcdFx0XHRcdFx0ey8qIDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZmxvYXQtcmlnaHQnPjwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdxbC1zbm93Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQtbm8tYm9keSBxbC1lZGl0b3InPlxyXG5cdFx0XHRcdFx0XHRcdHtTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLmxvY2tlZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRvIHZpZXcgdGhpcyBhcnRpY2xlIHBsZWFzZSB1bmxvY2sgaXQgdXNpbmcgcG9pbnRzeycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVVubG9jayhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2VsZWN0ZWRBcnRpY2xlICYmIFNlbGVjdGVkQXJ0aWNsZS50b3BpY0lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRVbmxvY2tcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRSZWFjdEh0bWxQYXJzZXIoU2VsZWN0ZWRBcnRpY2xlICYmIFNlbGVjdGVkQXJ0aWNsZS5jb250ZW50KVxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpc0NsaWVudCAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAnMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHR0bz17UmVhZE1vcmVVcmx9PlxyXG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdsaW5rJz5cclxuXHRcdFx0XHRcdFx0XHR7U2VsZWN0ZWRBcnRpY2xlICYmIFNlbGVjdGVkQXJ0aWNsZS5sb2NrZWRcclxuXHRcdFx0XHRcdFx0XHRcdD8gJ1VubG9jaydcclxuXHRcdFx0XHRcdFx0XHRcdDogJ1JlYWQgTW9yZS4uLi4uJ31cclxuXHRcdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IHVubG9ja1RvcGljIH0pKEFydGljbGVQcmV2aWV3KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IEFjY29yZGlvbiwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgZ2V0VG9waWNzLCBkZWxldGVUb3BpYyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgQXJ0aWNsZU5hbWVzIGZyb20gJy4uL2xlYXJuL0FydGljbGVOYW1lcyc7XHJcbmltcG9ydCBWaWRlb05hbWVzIGZyb20gJy4uL2xlYXJuL1ZpZGVvTmFtZXMnO1xyXG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uLy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XHJcbmltcG9ydCB7IExvY2sgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgVG9waWNzT3ZlcnZpZXcgPSAoe1xyXG5cdGdldFRvcGljcyxcclxuXHRzcGVjaWFsaXR5TmFtZSxcclxuXHR0b3BpY3MsXHJcblx0ZGVsZXRlVG9waWMsXHJcblx0dXNlcixcclxufSkgPT4ge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRUb3BpY3Moc3BlY2lhbGl0eU5hbWUpO1xyXG5cdH0sIFtnZXRUb3BpY3MsIHNwZWNpYWxpdHlOYW1lXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9ICh0b3BpYykgPT4ge1xyXG5cdFx0Y29uc3QgY29uZmlybSA9XHJcblx0XHRcdGlzQ2xpZW50ICYmXHJcblx0XHRcdHdpbmRvdy5wcm9tcHQoXHJcblx0XHRcdFx0YFlvdSBzdXJlIHdhbnQgdG8gZGVsZXRlIFwiJHt0b3BpYy5uYW1lfVwiID8gWSBvciBOIChEZWxldGluZyBhIHRvcGljIHdpbGwgbGVhZCB0byBkZWxldGlvbiBvZiBhbGwgYXJ0aWNsZXMgaW5zaWRlIGl0KSBgXHJcblx0XHRcdCk7XHJcblx0XHRpZiAoY29uZmlybSA9PT0gJ1knKSB7XHJcblx0XHRcdGRlbGV0ZVRvcGljKHRvcGljLl9pZCwgc3BlY2lhbGl0eU5hbWUpO1xyXG5cdFx0XHR0b2FzdCgnRGVsZXRlZCBzcGVjaWFsaXR5IHN1Y2Vzc2Z1bGx5Jyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGUoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgaWQ9J3NwZWNpYWxpdGllcycgY2xhc3NOYW1lPSdUb3BpYy1uYW1lcyAnPlxyXG5cdFx0XHR7dG9waWNzLmxlbmd0aCA+IDAgJiZcclxuXHRcdFx0XHR0b3BpY3MubWFwKCh0b3BpYykgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e3RvcGljLl9pZH0+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwLTAgc3BlY2lhbGl0eS10b3BpYy1jb250YWluZXIgbS0xJ1xyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXt0b3BpYy5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nZmxvYXQtbGVmdCB0b3BpY05hbWUnPnt0b3BpYy5uYW1lfTwvaDQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PEFjdGlvbkJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWNjb3JkaW9uS2V5PXt0b3BpYy5uYW1lLnNwbGl0KC9cXHMvKS5qb2luKCcnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZD17c2V0U2VsZWN0ZWRJZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRJZD17c2VsZWN0ZWRJZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHlOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVzZXI9e3VzZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdHt0b3BpYy5sb2NrZWQgJiZcclxuXHRcdFx0XHRcdFx0XHRcdCF1c2VyLnVuTG9ja2VkVG9waWNzLmluY2x1ZGVzKHRvcGljLl9pZCkgPyBudWxsIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QWNjb3JkaW9uLkNvbGxhcHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRLZXk9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dG9waWMudmlkZW9zLmxlbmd0aCA+IDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0b3BpYy52aWRlb3MubWFwKCh2aWRlbykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFZpZGVvTmFtZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmlkZW89e3ZpZGVvfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwZWNpYWxpdHlOYW1lPXtzcGVjaWFsaXR5TmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiB0b3BpYy5hcnRpY2xlcyAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRvcGljLmFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFydGljbGVOYW1lc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcGljPXt0b3BpY31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcnRpY2xlPXthcnRpY2xlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwZWNpYWxpdHlOYW1lPXtzcGVjaWFsaXR5TmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdHRvcGljczogc3RhdGUudG9waWMudG9waWNzLFxyXG5cdHVzZXI6IHN0YXRlLmF1dGgudXNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRUb3BpY3MsIGRlbGV0ZVRvcGljIH0pKFxyXG5cdFRvcGljc092ZXJ2aWV3XHJcbik7XHJcblxyXG5jb25zdCBBY3Rpb25CdXR0b25zID0gKHtcclxuXHRoYW5kbGVEZWxldGUsXHJcblx0dG9waWMsXHJcblx0c3BlY2lhbGl0eU5hbWUsXHJcblx0c2VsZWN0ZWRJZCxcclxuXHRzZXRTZWxlY3RlZElkLFxyXG5cdHVzZXIsXHJcbn0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2FjdGlvbi1idXR0b25zJz5cclxuXHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdHR5cGU9J0VkaXQnXHJcblx0XHRcdFx0ZGF0YT17dG9waWN9XHJcblx0XHRcdFx0dXJsPXtgLyR7c3BlY2lhbGl0eU5hbWV9L3RvcGljL2VkaXQvJHt0b3BpYy5faWR9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEFkbWluQnV0dG9ucyB0eXBlPSdEZWxldGUnIGhhbmRsZXI9e2hhbmRsZURlbGV0ZX0gZGF0YT17dG9waWN9IC8+XHJcblx0XHRcdDxBZG1pbkJ1dHRvbnMgdHlwZT0nQWRkJyBkYXRhPXt0b3BpY30gdXJsPXtgL3ZpZGVvL2FkZC8ke3RvcGljLl9pZH1gfSAvPlxyXG5cdFx0XHR7dG9waWMubG9ja2VkICYmICF1c2VyLnVuTG9ja2VkVG9waWNzLmluY2x1ZGVzKHRvcGljLl9pZCkgPyAoXHJcblx0XHRcdFx0PExvY2sgLz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8QWNjb3JkaW9uLlRvZ2dsZVxyXG5cdFx0XHRcdFx0YXM9e0J1dHRvbn1cclxuXHRcdFx0XHRcdHZhcmlhbnQ9J2xpbmsnXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2Zsb2F0LXJpZ2h0IGFycm93LWRvd24nXHJcblx0XHRcdFx0XHRldmVudEtleT17dG9waWMubmFtZS5zcGxpdCgvXFxzLykuam9pbignJyl9IC8vIHRvIHJlbW92ZSBzcGFjZXNcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHNlbGVjdGVkSWQgPT09IHRvcGljLl9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkSWQoJycpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkSWQodG9waWMuX2lkKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHQ8c3ZnXHJcblx0XHRcdFx0XHRcdGlkPXt0b3BpYy5uYW1lLnNwbGl0KC9cXHMvKS5qb2luKCcnKX1cclxuXHRcdFx0XHRcdFx0dmlld0JveD0nMCAwIDMyIDMyJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uIGljb24tY2hldnJvbi1ib3R0b20gYXJ0aWNsZS1kd24gYXJ0aWNsZS10b2dnbGUgZmEtYW5nbGUtZG93biAke1xyXG5cdFx0XHRcdFx0XHRcdHRvcGljLl9pZCA9PT0gc2VsZWN0ZWRJZCA/ICdyb3RhdGUnIDogJydcclxuXHRcdFx0XHRcdFx0fWB9PlxyXG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnonIC8+XHJcblx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHQ8L0FjY29yZGlvbi5Ub2dnbGU+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQXJ0aWNsZVByZXZpZXcgZnJvbSAnLi9BcnRpY2xlUHJldmlldyc7XHJcblxyXG5jb25zdCBWaWRlb1ByZXZpZXcgPSAoeyB2aWRlbyB9KSA9PiB7XHJcblx0Y29uc29sZS5sb2codmlkZW8pO1xyXG5cdHJldHVybiB2aWRlbyAmJiAhdmlkZW8uY29udGVudCA/IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlby1jb250YWluZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndmlkZW8nPlxyXG5cdFx0XHRcdDxpZnJhbWVcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0naWZyYW1lJ1xyXG5cdFx0XHRcdFx0c3JjPXt2aWRlby51cmx9XHJcblx0XHRcdFx0XHR0aXRsZT0nWW91VHViZSB2aWRlbyBwbGF5ZXInXHJcblx0XHRcdFx0XHRmcmFtZUJvcmRlcj0nMCdcclxuXHRcdFx0XHRcdGFsbG93PSdhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlJ1xyXG5cdFx0XHRcdFx0YWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2luZm8nPlxyXG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dmlkZW8ubmFtZX08L2gzPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkZXNjJz57dmlkZW8uZGVzY3JpcHRpb259PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpbmtlZC1hcnRpY2xlcyc+XHJcblx0XHRcdFx0XHQ8aDQ+QXJ0aWNsZXMgUmVsYXRlZCB0byB0aGUgdG9waWM8L2g0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCkgOiAoXHJcblx0XHQ8QXJ0aWNsZVByZXZpZXcgU2VsZWN0ZWRBcnRpY2xlPXt2aWRlb30gLz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdHZpZGVvOiBzdGF0ZS52aWRlby5zZWxlY3RlZFZpZGVvLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShWaWRlb1ByZXZpZXcpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICByb290UmVkdWNlcixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZhOWMzNDk2MTZkYzc2OTFlZjYwYTMyMDcwM2NiNzdhLlBOR1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWh0bWwtcGFyc2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkYWJsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRpcHB5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbG9hZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL3NyYy9BcHAnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zcmMvc3RvcmUnO1xyXG5pbXBvcnQgcmVsb2FkIGZyb20gJ3JlbG9hZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xyXG5cclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcblxyXG52YXIgaW5kZXggPSBmcy5yZWFkRmlsZVN5bmMoJ2J1aWxkL2luZGV4Lmh0bWwnKS50b1N0cmluZygpO1xyXG5cclxuLy8gY29uc3QgcGFydHMgPSBodG1sLnNwbGl0KCc8IS0tIG5vdCByZW5kZXJlZCAtLT4nKTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcblxyXG5jb25zdCBmZXRjaEFydGljbGVzID0gYXN5bmMgKCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zb2xlLmxvZygnZmV0Y2ggYXJ0aWNsZXMgcnVubmluZycpO1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2FydGljbGUvYWxsJyk7XHJcblx0XHRjb25zdCBhcnRpY2xlcyA9IHJlcy5kYXRhLmRhdGEuYXJ0aWNsZXM7XHJcblx0XHRyZXR1cm4gYXJ0aWNsZXM7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG5cdH1cclxufTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ2J1aWxkJykpO1xyXG5cclxuaWYgKGRldikgcmVsb2FkKGFwcCk7XHJcblxyXG5hcHAudXNlKGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cdHZhciBmaW5hbEh0bWw7XHJcblx0dmFyIGFydGljbGVzO1xyXG5cdGlmIChyZXEudXJsID09PSAnL2Jsb2cnKSB7XHJcblx0XHRhcnRpY2xlcyA9IGF3YWl0IGZldGNoQXJ0aWNsZXMoKTtcclxuXHR9XHJcblx0Y29uc3QgcmVhY3RNYXJrdXAgPSAoXHJcblx0XHQ8UmVhY3QuU3RyaWN0TW9kZT5cclxuXHRcdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcblx0XHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17e319PlxyXG5cdFx0XHRcdFx0PEFwcCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XHJcblx0XHRcdFx0PC9TdGF0aWNSb3V0ZXI+XHJcblx0XHRcdDwvUHJvdmlkZXI+XHJcblx0XHQ8L1JlYWN0LlN0cmljdE1vZGU+XHJcblx0KTtcclxuXHRjb25zdCBodG1sID0gcmVuZGVyVG9TdHJpbmcocmVhY3RNYXJrdXApO1xyXG5cclxuXHRmaW5hbEh0bWwgPSBpbmRleFxyXG5cdFx0LnJlcGxhY2UoJzxkaXYgaWQ9XCJyb290XCI+PC9kaXY+JywgYDxkaXYgaWQ9XCJyb290XCI+JHtodG1sfTwvZGl2PmApXHJcblx0XHQucmVwbGFjZSgnLy9zY3JpcHQnLCBgd2luZG93Ll9JTklUSUFMX0RBVEFfID0gJHtzZXJpYWxpemUoYXJ0aWNsZXMpfWApO1xyXG5cclxuXHQvLyBjb25zb2xlLmxvZyhmaW5hbEh0bWwpO1xyXG5cdC8vIGNvbnNvbGUubG9nKCd3b3JraW5nJyk7XHJcblx0cmVzLnNlbmQoZmluYWxIdG1sKTtcclxuXHRyZXMuZW5kKCk7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uICR7UE9SVH1gKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=