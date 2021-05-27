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

var _auth = __webpack_require__(/*! ./actions/auth */ "./src/actions/auth.js");

var _setAuthToken = __webpack_require__(/*! ./helpers/setAuthToken */ "./src/helpers/setAuthToken.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ "./src/store.js"));

var _Routes = _interopRequireDefault(__webpack_require__(/*! ./Routes */ "./src/Routes.js"));

var _Navbar = _interopRequireDefault(__webpack_require__(/*! ./layout/Navbar/Navbar */ "./src/layout/Navbar/Navbar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

if (_setAuthToken.isClient && localStorage.token) {
  (0, _setAuthToken.setAuthToken)(localStorage.token);
}

const App = () => {
  (0, _react.useEffect)(() => {
    _store.default.dispatch((0, _auth.loadUser)());
  }, []);
  console.log('app, checking working');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: "/home"
  })), _Routes.default.map(({
    path,
    component,
    render
  }) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    key: path,
    path: path,
    exact: true,
    component: component,
    render: render
  })))), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, null));
};

var _default = App;
exports.default = _default;

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Home = _interopRequireDefault(__webpack_require__(/*! ./components/Home */ "./src/components/Home.js"));

var _About = _interopRequireDefault(__webpack_require__(/*! ./components/About */ "./src/components/About.js"));

var _Learn = _interopRequireDefault(__webpack_require__(/*! ./components/Learn */ "./src/components/Learn.js"));

var _Article = _interopRequireDefault(__webpack_require__(/*! ./components/Article */ "./src/components/Article.js"));

var _Preview = _interopRequireDefault(__webpack_require__(/*! ./components/Preview */ "./src/components/Preview.js"));

var _Blog = _interopRequireDefault(__webpack_require__(/*! ./components/Blog */ "./src/components/Blog.js"));

var _Auth = _interopRequireDefault(__webpack_require__(/*! ./components/Auth */ "./src/components/Auth.js"));

var _UpsertCard = _interopRequireDefault(__webpack_require__(/*! ./components/UpsertCard */ "./src/components/UpsertCard.js"));

var _UpsertTopic = _interopRequireDefault(__webpack_require__(/*! ./components/UpsertTopic */ "./src/components/UpsertTopic.js"));

var _UpsertArticle = _interopRequireDefault(__webpack_require__(/*! ./components/UpsertArticle */ "./src/components/UpsertArticle.js"));

var _UpsertVideo = _interopRequireDefault(__webpack_require__(/*! ./components/UpsertVideo */ "./src/components/UpsertVideo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import PrivateRoute from './helpers/PrivateRoute';
const routes = [{
  path: '/home',
  component: _Home.default
}, {
  path: '/about',
  component: _About.default
}, {
  path: '/learn',
  component: _Learn.default
}, {
  path: '/blog/read/:name',
  component: _Article.default
}, {
  path: '/learn/:specialityName',
  component: _Preview.default
}, _objectSpread({
  path: '/blog'
}, _Blog.default), {
  path: '/signup',
  render: props => /*#__PURE__*/_react.default.createElement(_Auth.default, _extends({}, props, {
    type: 'signup'
  }))
}, {
  path: '/signup/:referCode',
  render: props => /*#__PURE__*/_react.default.createElement(_Auth.default, _extends({}, props, {
    type: 'signup'
  }))
}, {
  path: '/login',
  render: props => /*#__PURE__*/_react.default.createElement(_Auth.default, _extends({}, props, {
    type: 'login'
  }))
}, {
  path: '/AddCard',
  render: props => /*#__PURE__*/_react.default.createElement(_UpsertCard.default, _extends({
    edit: false
  }, props))
}, {
  path: '/updatespeciality/:specialityName',
  render: props => /*#__PURE__*/_react.default.createElement(_UpsertCard.default, _extends({
    edit: true
  }, props))
}, {
  path: '/:specialityName/topic/add',
  render: props => /*#__PURE__*/_react.default.createElement(_UpsertTopic.default, _extends({
    edit: false
  }, props))
}, {
  path: '/:specialityName/topic/edit/:topicId',
  render: props => /*#__PURE__*/_react.default.createElement(_UpsertTopic.default, _extends({
    edit: true
  }, props))
}, {
  path: '/article/add',
  render: props => /*#__PURE__*/_react.default.createElement(_UpsertArticle.default, _extends({
    edit: false
  }, props))
}, {
  path: '/article/update',
  render: props => /*#__PURE__*/_react.default.createElement(_UpsertArticle.default, _extends({
    edit: true
  }, props))
}, {
  path: '/video/add/:topicId',
  render: props => /*#__PURE__*/_react.default.createElement(_UpsertVideo.default, _extends({
    edit: false
  }, props))
}, {
  path: '/video/update/:videoId',
  render: props => /*#__PURE__*/_react.default.createElement(_UpsertVideo.default, _extends({
    edit: true
  }, props))
}];
var _default = routes;
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
  articles,
  isAdmin
}) => {
  (0, _react.useEffect)(() => {
    if (articles.length === 0) {
      getAllArticles();
    }
  }, [getAllArticles]);
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
      fontFamily: 'Dosis'
    },
    className: "title__h1"
  }, ' ', "CodersGala ", /*#__PURE__*/_react.default.createElement("span", null, "Blog")), /*#__PURE__*/_react.default.createElement("p", {
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
  articles: state.article.articles,
  isAdmin: state.auth.isAdmin
});

const loadData = store => {
  return store.dispatch((0, _article.getAllArticles)());
};

var _default = {
  component: (0, _reactRedux.connect)(mapStateToProps, {
    getAllArticles: _article.getAllArticles
  })(Blog),
  loadData
};
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

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

var _reload = _interopRequireDefault(__webpack_require__(/*! reload */ "reload"));

var _serializeJavascript = _interopRequireDefault(__webpack_require__(/*! serialize-javascript */ "serialize-javascript"));

var _App = _interopRequireDefault(__webpack_require__(/*! ./src/App */ "./src/App.js"));

var _Routes = _interopRequireDefault(__webpack_require__(/*! ./src/Routes */ "./src/Routes.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./src/store */ "./src/store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 3000;

var index = _fs.default.readFileSync('build/index.html').toString();

const app = (0, _express.default)();
const dev = "development" === 'development';
app.use(_express.default.static('build'));
if (dev) (0, _reload.default)(app);
app.use(async (req, res) => {
  const store = (0, _store.default)();
  const activeRoute = _Routes.default.find(route => (0, _reactRouterDom.matchPath)(req.url, route)) || {};
  console.log(activeRoute);
  const promise = activeRoute.loadData ? activeRoute.loadData(store) : Promise.resolve();
  promise.then(data => {
    const reactMarkup = /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
      location: req.url,
      context: {}
    }, /*#__PURE__*/_react.default.createElement(_App.default, null))));

    const html = (0, _server.renderToString)(reactMarkup);
    let finalHtml = index.replace('<div id="root"></div>', `<div id="root">${html}</div>`).replace('//script', `window._INITIAL_DATA_ = ${(0, _serializeJavascript.default)(store.getState()).replace(/</g, '\\u003c')}`);
    console.log('working', finalHtml);
    res.send(finalHtml);
    res.end();
  });
});
app.listen(PORT, () => console.log(`listening on ${PORT}`));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvUm91dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3NwZWNpYWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy90b2FzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3RvcGljLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy91aS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3ZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9BZGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0NoZXZyb25zLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaWNvbnMvRGVsZXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9Mb2NrLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9SZWFkLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0Jsb2cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvTGVhcm4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9QcmV2aWV3LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVXBzZXJ0QXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9VcHNlcnRUb3BpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydFZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvUHJpdmF0ZVJvdXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvU2VvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9zZXRBdXRoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0J1dHRvbnMvVXNlckJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0J1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL05hdmJhci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL1NpZ25lZEluTGlua3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L05hdmJhci9TaWduZWRPdXRMaW5rcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy9hcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvc3BlY2lhbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy90b3BpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy91aS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy92aWRlby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9hYm91dC9BYm91dFVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Fib3V0L1F1ZXN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ibG9nL0FsbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ibG9nL0ZlYXR1cmVkLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Jsb2cvTGF0ZXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2VkaXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ob21lL0hlcm8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvaG9tZS9IZXJvQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvbGVhcm4vQXJ0aWNsZU5hbWVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2xlYXJuL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvbGVhcm4vVmlkZW9OYW1lcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9wcmV2aWV3L0FydGljbGVQcmV2aWV3LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL3ByZXZpZXcvVG9waWNzT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvcHJldmlldy9WaWRlb1ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ltZy9jZ1RyYW5zcGFyZW50LlBORyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWh0bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtdGlwcHlcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVsb2FkXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaXNDbGllbnQiLCJsb2NhbFN0b3JhZ2UiLCJ0b2tlbiIsIkFwcCIsInN0b3JlIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwicm91dGVzIiwibWFwIiwicGF0aCIsImNvbXBvbmVudCIsInJlbmRlciIsIkhvbWUiLCJBYm91dCIsIkxlYXJuIiwiQXJ0aWNsZSIsIlByZXZpZXciLCJCbG9nIiwicHJvcHMiLCJjbGVhckFydGljbGUiLCJpZCIsInR5cGUiLCJnZXRBcnRpY2xlIiwicmVzIiwiZGF0YSIsInBheWxvYWQiLCJlcnJvciIsImdldEFsbEFydGljbGVzIiwic3RhdHVzIiwiYWRkQXJ0aWNsZSIsImVkaXRBcnRpY2xlIiwic3BlY2lhbGl0eU5hbWUiLCJyZXMyIiwiZGVsZXRlQXJ0aWNsZSIsImFydGljbGVJZCIsInRvcGljSWQiLCJsb2FkVXNlciIsInVzZXJJZCIsImdldEl0ZW0iLCJVU0VSX0xPQURFRCIsInVzZXIiLCJlcnIiLCJBVVRIX0VSUk9SIiwicmVmcmVzaFVzZXIiLCJyZWdpc3RlciIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJSRUdJU1RFUl9GQUlMIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJsb2dvdXQiLCJjbGVhciIsInNlbmRSZXNldEVtYWlsIiwiY29uZmlnIiwibWVzc2FnZXNBcnJheSIsIm1lc3NhZ2VzIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJtc2ciLCJTRU5EX1JFU0VUX0VNQUlMIiwiZXJyb3JzIiwicmVzcG9uc2UiLCJTRU5EX1JFU0VUX0VNQUlMX0ZBSUwiLCJnZXRTcGVjaWFsaXRpZXMiLCJjbGVhclNwZWNpYWxpdHkiLCJnZXRTcGVjaWFsaXR5Iiwic3BlY2lhbGl0eSIsImFkZFNwZWNpYWxpdHkiLCJlZGl0U3BlY2lhbGl0eSIsImRlbGV0ZVNwZWNpYWxpdHkiLCJzdWNjZXNzVG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImVycm9yVG9hc3QiLCJnZXRUb3BpY3MiLCJhZGRUb3BpYyIsImVkaXRUb3BpYyIsInVubG9ja1RvcGljIiwiZGVsZXRlVG9waWMiLCJTRVRfQUxFUlQiLCJSRU1PVkVfQUxFUlQiLCJMT0dPVVQiLCJzZXRPcGVuVG9waWNzIiwib3BlblRvcGljc0FycmF5IiwiZ2V0U3RhdGUiLCJ1aSIsIm9wZW5Ub3BpY3MiLCJpbmNsdWRlcyIsInB1c2giLCJzcGxpY2UiLCJpbmRleE9mIiwic2V0RGlzcGxheU1vZGUiLCJkaXNwbGF5TW9kZSIsInNldEl0ZW0iLCJnZXRWaWRlbyIsImFkZFZpZGVvIiwicmVzVG9waWMiLCJlZGl0VmlkZW8iLCJkZWxldGVWaWRlbyIsInZpZGVvSWQiLCJzZWxlY3RWaWRlbyIsInZpZGVvIiwiQWRkIiwic2l6ZSIsImNvbG9yIiwiQ2hldnJvbnNVcCIsIkNoZXZyb25zTGVmdCIsIkNyb3NzIiwiRGVsZXRlIiwiTG9jayIsImhhbmRsZXIiLCJVbmxvY2siLCJSZWFkIiwiVXBkYXRlIiwib3BhY2l0eSIsInRleHRBbGlnbiIsIm5hbWUiLCJtYXRjaCIsInBhcmFtcyIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwiZ2V0QXJ0aWNsZUVmZmVjdCIsInJlcGxhY2UiLCJnb1RvVG9wIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImh0bWwiLCJjb250ZW50IiwicGFkZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiYXV0aCIsIkF1dGgiLCJzZXREYXRhIiwiZGluVGV4dCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcmV2IiwidGFyZ2V0IiwidmFsdWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFnZSIsImNvZGVSZWZmZXJlZCIsImFydGljbGVzIiwiaXNBZG1pbiIsImxlbmd0aCIsImZvbnRGYW1pbHkiLCJsb2FkRGF0YSIsImhvbWVDb250ZW50IiwiY2xvc2UiLCJzZXRDbG9zZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJmb250U2l6ZSIsIlVwc2VydEFydGljbGUiLCJzcGVjaWFsaXRpZXMiLCJwcmV2QXJ0aWNsZSIsInNldGNvbnRlbnQiLCJzZXRuYW1lIiwia2V5d29yZHMiLCJzZXRBcnRpY2xlS2V5d29yZHMiLCJmZWF0dXJlZCIsInNldGZlYXR1cmVkIiwidGh1bWJuYWlsVXJsIiwic2V0dGh1bWJuYWlsVXJsIiwic2Nyb2xsVG8iLCJlbGVtZW50Iiwid2luZG93Iiwic2Nyb2xsIiwiYmVoYXZpb3IiLCJsZWZ0IiwidG9wIiwib2Zmc2V0VG9wIiwiZWRpdCIsImhhbmRsZUVkaXRvciIsImhhbmRsZUVkaXQiLCJfaWQiLCJOYW1lIiwiaGFuZGxlQWRkIiwic2VsZWN0ZWRBcnRpY2xlIiwiVXBzZXJ0Q2FyZCIsInNldFN0YXRlIiwiZmV0Y2hEYXRhIiwiaW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJVcHNlcnRUb3BpYyIsImxvY2F0aW9uIiwibG9ja2VkIiwiaXNMb2NrZWQiLCJzcGVjaWFsaXR5SWQiLCJVcHNlcnRWaWRlbyIsInByZXZWaWRlbyIsInNldE5hbWUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidXJsIiwic2V0VXJsIiwic2VsZWN0ZWRWaWRlbyIsIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJTZW8iLCJ0aXRsZSIsImxhbmciLCJtZXRhIiwicmljaHJlc3VsdCIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsInByb3BlcnR5IiwiY29uY2F0IiwicmVsIiwiaHJlZiIsImlubmVySFRNTCIsInNlcnZpY2VQb3N0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInBvc3QiLCJTRVJWSUNFX1VSTCIsInRoZW4iLCJjYXRjaCIsInNlcnZpY2VHZXQiLCJnZXQiLCJzZXRBdXRoVG9rZW4iLCJkZWZhdWx0cyIsImNvbW1vbiIsIlRvb2x0aXBXcmFwcGVyIiwiY2hpbGRyZW4iLCJBZG1pbkJ1dHRvbnMiLCJBZG1pbkJ1dHRvbnNXcmFwcGVyIiwicGF0aG5hbWUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwib3V0bGluZSIsIklubmVyRGl2IiwiZGFyayIsImJnIiwiYmFja2dyb3VuZENvbG9yIiwiQnV0dG9uIiwiaXNCdXR0b24iLCJMb2NrQnV0dG9uIiwiRm9vdGVyU29jaWFsTWVkaWEiLCJGb290ZXIiLCJzZXRFbWFpbCIsInNldE1lc3NhZ2UiLCJzZXRGb290ZXJNZXNzYWdlIiwiTmF2YmFyIiwibmF2YmFyRXhwYW5kZWQiLCJzZXRuYXZiYXJFeHBhbmRlZCIsInN3aXRjaGVkIiwic2V0c3dpdGNoZWQiLCJtb2RlIiwicmVtb3ZlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiTG9nbyIsIndpZHRoIiwicG9pbnRzIiwiU2lnbmVkSW5MaW5rcyIsIlNpZ25lZE91dExpbmtzIiwiUHJlbG9hZGVyIiwiaW5pdGlhbFN0YXRlIiwiYXJ0aWNsZVJlZHVjZXIiLCJhY3Rpb24iLCJ0b3BpY3MiLCJsb2FkaW5nIiwiYXV0aFJlZHVjZXIiLCJyb2xlIiwicmVtb3ZlSXRlbSIsInRvcGljIiwic3BlY2lhbGl0eVJlZHVjZXIiLCJ0b3BpY1JlZHVjZXIiLCJ1aVJlZHVjZXIiLCJ2aWRlb1JlZHVjZXIiLCJQcm9maWxlQ2FyZCIsImJpbyIsInBvcnRmb2xpb1VybCIsImluc3RhVXJsIiwidHdpdHRlclVybCIsImdpdGh1YlVybCIsIkFib3V0VXMiLCJvbnNjcm9sbCIsIm15RnVuY3Rpb24iLCJzY3JvbGxZIiwiUXVlc3Rpb25zIiwiQWxsIiwiQXJ0aWNsZUlkIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiRmVhdHVyZWQiLCJMYXRlc3QiLCJIZXJvIiwiSGVyb0NhcmRzIiwiaGVyb0JsdWUiLCJoZXJvT3JhbmdlIiwiaGVyb0dyZWVuIiwic2Nyb2xsRnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQXJ0aWNsZU5hbWVzIiwiaGFuZGxlRGVsZXRlIiwiQXJ0aWNsZU5hbWUiLCJjb25maXJtIiwicHJvbXB0IiwicG9zIiwiQ2FyZCIsIml0ZW0iLCJhbHQiLCJWaWRlb05hbWVzIiwiVmlkZW9OYW1lIiwiQXJ0aWNsZVByZXZpZXciLCJTZWxlY3RlZEFydGljbGUiLCJSZWFkTW9yZVVybCIsImhhbmRsZVVubG9jayIsIlRvcGljc092ZXJ2aWV3Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJzcGxpdCIsImpvaW4iLCJ1bkxvY2tlZFRvcGljcyIsInZpZGVvcyIsIkFjdGlvbkJ1dHRvbnMiLCJWaWRlb1ByZXZpZXciLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJyb290UmVkdWNlciIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiaW5kZXgiLCJmcyIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwiYXBwIiwiZGV2IiwidXNlIiwiZXhwcmVzcyIsInN0YXRpYyIsInJlcSIsImFjdGl2ZVJvdXRlIiwiZmluZCIsInJvdXRlIiwicHJvbWlzZSIsInJlYWN0TWFya3VwIiwiZmluYWxIdG1sIiwic2VuZCIsImVuZCIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJQSwwQkFBWUMsWUFBWSxDQUFDQyxLQUE3QixFQUFvQztBQUNuQyxrQ0FBYUQsWUFBWSxDQUFDQyxLQUExQjtBQUNBOztBQUVELE1BQU1DLEdBQUcsR0FBRyxNQUFNO0FBQ2pCLHdCQUFVLE1BQU07QUFDZkMsbUJBQU1DLFFBQU4sQ0FBZSxxQkFBZjtBQUNBLEdBRkQsRUFFRyxFQUZIO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyw2QkFBQyxlQUFELE9BREQsZUFFQyw2QkFBQyw2QkFBRCxxQkFDQyw2QkFBQyxzQkFBRCxxQkFDQyw2QkFBQyxxQkFBRDtBQUFPLFNBQUss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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QSxRQUFJQyxTQUFTLEdBQUdmLEtBQUssQ0FDbkJ4TixPQURjLENBQ04sdUJBRE0sRUFDb0Isa0JBQWlCSSxJQUFLLFFBRDFDLEVBRWRKLE9BRmMsQ0FHZCxVQUhjLEVBSWIsMkJBQTBCLGtDQUFVOUgsS0FBSyxDQUFDd0YsUUFBTixFQUFWLEVBQTRCc0MsT0FBNUIsQ0FDMUIsSUFEMEIsRUFFMUIsU0FGMEIsQ0FHekIsRUFQWSxDQUFoQjtBQVNBNUgsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QmtXLFNBQXZCO0FBQ0FqVixPQUFHLENBQUNrVixJQUFKLENBQVNELFNBQVQ7QUFDQWpWLE9BQUcsQ0FBQ21WLEdBQUo7QUFDQSxHQXZCRDtBQXdCQSxDQWxDRDtBQW9DQWIsR0FBRyxDQUFDYyxNQUFKLENBQVdyQixJQUFYLEVBQWlCLE1BQU1qVixPQUFPLENBQUNDLEdBQVIsQ0FBYSxnQkFBZWdWLElBQUssRUFBakMsQ0FBdkIsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3dpdGNoLCBSZWRpcmVjdCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuaW1wb3J0IHsgbG9hZFVzZXIgfSBmcm9tICcuL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IHNldEF1dGhUb2tlbiwgaXNDbGllbnQgfSBmcm9tICcuL2hlbHBlcnMvc2V0QXV0aFRva2VuJztcclxuXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL1JvdXRlcyc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9sYXlvdXQvTmF2YmFyL05hdmJhcic7XHJcblxyXG5pZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnRva2VuKSB7XHJcblx0c2V0QXV0aFRva2VuKGxvY2FsU3RvcmFnZS50b2tlbik7XHJcbn1cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c3RvcmUuZGlzcGF0Y2gobG9hZFVzZXIoKSk7XHJcblx0fSwgW10pO1xyXG5cdGNvbnNvbGUubG9nKCdhcHAsIGNoZWNraW5nIHdvcmtpbmcnKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J0FwcCc+XHJcblx0XHRcdDxOYXZiYXIgLz5cclxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cclxuXHRcdFx0XHQ8U3dpdGNoPlxyXG5cdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy8nPlxyXG5cdFx0XHRcdFx0XHQ8UmVkaXJlY3QgdG89Jy9ob21lJyAvPlxyXG5cdFx0XHRcdFx0PC9Sb3V0ZT5cclxuXHRcdFx0XHRcdHtyb3V0ZXMubWFwKCh7IHBhdGgsIGNvbXBvbmVudCwgcmVuZGVyIH0pID0+IChcclxuXHRcdFx0XHRcdFx0PFJvdXRlXHJcblx0XHRcdFx0XHRcdFx0a2V5PXtwYXRofVxyXG5cdFx0XHRcdFx0XHRcdHBhdGg9e3BhdGh9XHJcblx0XHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9e2NvbXBvbmVudH1cclxuXHRcdFx0XHRcdFx0XHRyZW5kZXI9e3JlbmRlcn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvU3dpdGNoPlxyXG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cclxuXHRcdFx0PFRvYXN0Q29udGFpbmVyIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQnO1xyXG5pbXBvcnQgTGVhcm4gZnJvbSAnLi9jb21wb25lbnRzL0xlYXJuJztcclxuaW1wb3J0IEFydGljbGUgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGUnO1xyXG5pbXBvcnQgUHJldmlldyBmcm9tICcuL2NvbXBvbmVudHMvUHJldmlldyc7XHJcbmltcG9ydCBCbG9nIGZyb20gJy4vY29tcG9uZW50cy9CbG9nJztcclxuaW1wb3J0IEF1dGggZnJvbSAnLi9jb21wb25lbnRzL0F1dGgnO1xyXG5pbXBvcnQgVXBzZXJ0Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0Q2FyZCc7XHJcbmltcG9ydCBVcHNlcnRUb3BpYyBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0VG9waWMnO1xyXG5pbXBvcnQgVXBzZXJ0QXJ0aWNsZSBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0QXJ0aWNsZSc7XHJcbmltcG9ydCBVcHNlcnRWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0VmlkZW8nO1xyXG4vLyBpbXBvcnQgUHJpdmF0ZVJvdXRlIGZyb20gJy4vaGVscGVycy9Qcml2YXRlUm91dGUnO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6ICcvaG9tZScsXHJcblx0XHRjb21wb25lbnQ6IEhvbWUsXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2Fib3V0JyxcclxuXHRcdGNvbXBvbmVudDogQWJvdXQsXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2xlYXJuJyxcclxuXHRcdGNvbXBvbmVudDogTGVhcm4sXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2Jsb2cvcmVhZC86bmFtZScsXHJcblx0XHRjb21wb25lbnQ6IEFydGljbGUsXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2xlYXJuLzpzcGVjaWFsaXR5TmFtZScsXHJcblx0XHRjb21wb25lbnQ6IFByZXZpZXcsXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL2Jsb2cnLFxyXG5cdFx0Li4uQmxvZyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvc2lnbnVwJyxcclxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8QXV0aCB7Li4ucHJvcHN9IHR5cGU9eydzaWdudXAnfSAvPixcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvc2lnbnVwLzpyZWZlckNvZGUnLFxyXG5cdFx0cmVuZGVyOiAocHJvcHMpID0+IDxBdXRoIHsuLi5wcm9wc30gdHlwZT17J3NpZ251cCd9IC8+LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9sb2dpbicsXHJcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPEF1dGggey4uLnByb3BzfSB0eXBlPXsnbG9naW4nfSAvPixcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvQWRkQ2FyZCcsXHJcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydENhcmQgZWRpdD17ZmFsc2V9IHsuLi5wcm9wc30gLz4sXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL3VwZGF0ZXNwZWNpYWxpdHkvOnNwZWNpYWxpdHlOYW1lJyxcclxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0Q2FyZCBlZGl0PXt0cnVlfSB7Li4ucHJvcHN9IC8+LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy86c3BlY2lhbGl0eU5hbWUvdG9waWMvYWRkJyxcclxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0VG9waWMgZWRpdD17ZmFsc2V9IHsuLi5wcm9wc30gLz4sXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnLzpzcGVjaWFsaXR5TmFtZS90b3BpYy9lZGl0Lzp0b3BpY0lkJyxcclxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0VG9waWMgZWRpdD17dHJ1ZX0gey4uLnByb3BzfSAvPixcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvYXJ0aWNsZS9hZGQnLFxyXG5cdFx0cmVuZGVyOiAocHJvcHMpID0+IDxVcHNlcnRBcnRpY2xlIGVkaXQ9e2ZhbHNlfSB7Li4ucHJvcHN9IC8+LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJy9hcnRpY2xlL3VwZGF0ZScsXHJcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydEFydGljbGUgZWRpdD17dHJ1ZX0gey4uLnByb3BzfSAvPixcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvdmlkZW8vYWRkLzp0b3BpY0lkJyxcclxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0VmlkZW8gZWRpdD17ZmFsc2V9IHsuLi5wcm9wc30gLz4sXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiAnL3ZpZGVvL3VwZGF0ZS86dmlkZW9JZCcsXHJcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydFZpZGVvIGVkaXQ9e3RydWV9IHsuLi5wcm9wc30gLz4sXHJcblx0fSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XHJcbmV4cG9ydCBjb25zdCBjbGVhckFydGljbGUgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6ICdDTEVBUl9BUlRJQ0xFJyxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL2FydGljbGUvZ2V0LyR7aWR9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnR0VUX0FSVElDTEUnLFxyXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBlcnJvclRvYXN0KGVycm9yKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnR0VUX0FSVElDTEVfRVJST1InLFxyXG4gICAgICBwYXlsb2FkOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxBcnRpY2xlcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXJ0aWNsZS9hbGxgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpXHJcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnR0VUX0FMTF9BUlRJQ0xFUycsXHJcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGVycm9yVG9hc3QoZXJyb3IpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdHRVRfQUxMX0FSVElDTEVTX0VSUk9SJyxcclxuICAgICAgcGF5bG9hZDoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQXJ0aWNsZSA9IChkYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvYXJ0aWNsZS9hZGRgLCBkYXRhLCB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0FERF9BUlRJQ0xFJyxcclxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXHJcbiAgICAvLyBjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzMi5kYXRhKTtcclxuXHJcbiAgICAvLyBkaXNwYXRjaCh7XHJcbiAgICAvLyAgIHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuICAgIC8vICAgcGF5bG9hZDogcmVzMi5kYXRhLFxyXG4gICAgLy8gfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGVycm9yVG9hc3QoZXJyb3IpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdBRERfQVJUSUNMRV9FUlJPUicsXHJcbiAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRBcnRpY2xlID0gKGRhdGEsIGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvYXJ0aWNsZS91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0VESVRfQVJUSUNMRScsXHJcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG4gICAgY29uc29sZS5sb2cocmVzMi5kYXRhKTtcclxuXHJcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG4gICAgICBwYXlsb2FkOiByZXMyLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZXJyb3JUb2FzdChlcnJvcilcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0VESVRfQVJUSUNMRV9FUlJPUicsXHJcbiAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFydGljbGUgPSAoYXJ0aWNsZUlkLCB0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKFxyXG4gIGRpc3BhdGNoXHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcclxuICAgICAgYGFwaS9hcnRpY2xlL2RlbGV0ZS8ke2FydGljbGVJZH0vJHt0b3BpY0lkfWAsXHJcbiAgICAgIHt9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0RFTEVURV9BUlRJQ0xFJyxcclxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMyLmRhdGEpO1xyXG5cclxuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnR0VUX1RPUElDUycsXHJcbiAgICAgIHBheWxvYWQ6IHJlczIuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBlcnJvclRvYXN0KGVycm9yKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnREVMRVRFX0FSVElDTEVfRVJST1InLFxyXG4gICAgICBwYXlsb2FkOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHtcclxuXHRSRUdJU1RFUl9TVUNDRVNTLFxyXG5cdFJFR0lTVEVSX0ZBSUwsXHJcblx0TE9HSU5fU1VDQ0VTUyxcclxuXHRMT0dJTl9GQUlMLFxyXG5cdFVTRVJfTE9BREVELFxyXG5cdEFVVEhfRVJST1IsXHJcblx0U0VORF9SRVNFVF9FTUFJTCxcclxuXHRTRU5EX1JFU0VUX0VNQUlMX0ZBSUwsXHJcbn0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCwgc2V0QXV0aFRva2VuLCBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcclxuXHJcbi8vIExvYWQgVXNlciA6IEV2ZXJ5IHRpbWUgd2UgbG9nZ2VkIGluIG9yIHJlZ2lzdGVyIG9yIHJlZnJlc2ggdGhlIHBhZ2UgaXRzIGdvbm5hIGxvYWQuXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFVzZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRkaXNwYXRjaCh7XHJcblx0XHR0eXBlOiAnU0VUX0FVVEhfTE9BREVSJyxcclxuXHR9KTtcclxuXHRpZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnRva2VuKSB7XHJcblx0XHRzZXRBdXRoVG9rZW4obG9jYWxTdG9yYWdlLnRva2VuKTtcclxuXHR9XHJcblxyXG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudXNlcklkKSB7XHJcblx0XHRjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL2F1dGgvdXNlci8ke3VzZXJJZH1gKTtcclxuXHRcdFx0Ly8gZGlzcGxheVRvYXN0XHJcblx0XHRcdHN1Y2Nlc3NUb2FzdChyZXMpO1xyXG5cclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IFVTRVJfTE9BREVELFxyXG5cdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLnVzZXIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdC8vIGRpc3BsYXkgdG9hc3RcclxuXHRcdFx0ZXJyb3JUb2FzdChlcnIpO1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogQVVUSF9FUlJPUixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZnJlc2hVc2VyID0gKHVzZXIpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGRpc3BhdGNoKHtcclxuXHRcdHR5cGU6ICdTRVRfQVVUSF9MT0FERVInLFxyXG5cdH0pO1xyXG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudG9rZW4pIHtcclxuXHRcdHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2UudG9rZW4pO1xyXG5cdH1cclxuXHJcblx0aWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS51c2VySWQpIHtcclxuXHRcdGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHQvLyBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXV0aC91c2VyLyR7dXNlcklkfWApO1xyXG5cdFx0XHRhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXV0aC91c2VyLyR7dXNlcklkfWApO1xyXG5cclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IFVTRVJfTE9BREVELFxyXG5cdFx0XHRcdHBheWxvYWQ6IHVzZXIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBBVVRIX0VSUk9SLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSAoZGF0YSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0ZGlzcGF0Y2goe1xyXG5cdFx0dHlwZTogJ1NFVF9BVVRIX0xPQURFUicsXHJcblx0fSk7XHJcblx0Y29uc3QgaGVhZGVycyA9IHtcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0fTtcclxuXHJcblx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJ2FwaS9hdXRoL3NpZ251cCcsIGJvZHksIGhlYWRlcnMpO1xyXG5cclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogcmVzLnN0YXR1cyA9PT0gMSA/IFJFR0lTVEVSX1NVQ0NFU1MgOiBSRUdJU1RFUl9GQUlMLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRkaXNwYXRjaChsb2FkVXNlcigpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdC8vIGNvbnN0IGVycm9ycyA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9ycztcclxuXHRcdGVycm9yVG9hc3QoZXJyKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogUkVHSVNURVJfRkFJTCxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9XHJcblx0KHsgZW1haWwsIHBhc3N3b3JkIH0pID0+XHJcblx0YXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdTRVRfQVVUSF9MT0FERVInLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBoZWFkZXJzID0ge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJ2FwaS9hdXRoL2xvZ2luJywgYm9keSwgaGVhZGVycyk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IHJlcy5zdGF0dXMgPT09IDEgPyBMT0dJTl9TVUNDRVNTIDogTE9HSU5fRkFJTCxcclxuXHRcdFx0XHRwYXlsb2FkOiB7IHVzZXJJZDogcmVzLmRhdGE/LnVzZXI/LnVzZXJJZCwgdG9rZW46IHJlcy5kYXRhPy50b2tlbiB9LFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGRpc3BhdGNoKGxvYWRVc2VyKCkpO1xyXG5cdFx0XHRzdWNjZXNzVG9hc3QocmVzKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHRlcnJvclRvYXN0KGVycik7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBMT0dJTl9GQUlMLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG5cdGlmIChpc0NsaWVudCkgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0ZGlzcGF0Y2goe1xyXG5cdFx0dHlwZTogJ0xPR09VVCcsXHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZFJlc2V0RW1haWwgPVxyXG5cdCh7IGVtYWlsIH0pID0+XHJcblx0YXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IGVtYWlsIH0pO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCcvYXBpL2ZvcmdvdHBhc3N3b3JkJywgYm9keSwgY29uZmlnKTtcclxuXHJcblx0XHRcdGNvbnN0IG1lc3NhZ2VzQXJyYXkgPSByZXMuZGF0YS5tZXNzYWdlcztcclxuXHRcdFx0Ly8gYnJhbmQgYWRkZWQgbWVzc2FnZSBhbGVydFxyXG5cdFx0XHRtZXNzYWdlc0FycmF5LmZvckVhY2goKG1lc3NhZ2UpID0+IGRpc3BhdGNoKChtZXNzYWdlLm1zZywgJ2RhbmdlcicpKSk7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBTRU5EX1JFU0VUX0VNQUlMLFxyXG5cdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRjb25zdCBlcnJvcnMgPSBlcnIgJiYgZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xyXG5cdFx0XHRpZiAoZXJyb3JzKSB7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IFNFTkRfUkVTRVRfRU1BSUxfRkFJTCxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9hcnRpY2xlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hdXRoJztcclxuZXhwb3J0ICogZnJvbSAnLi9zcGVjaWFsaXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi90b3BpYyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3VpJztcclxuZXhwb3J0ICogZnJvbSAnLi92aWRlbyc7XHJcbiIsImltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNwZWNpYWxpdGllcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KCdhcGkvc3BlY2lhbGl0eS9hbGwnKTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJTcGVjaWFsaXR5ID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0ZGlzcGF0Y2goe1xyXG5cdFx0dHlwZTogJ0NMRUFSX1NQRUNJQUxJVFknLFxyXG5cdFx0cGF5bG9hZDoge30sXHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3BlY2lhbGl0eSA9IChzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9zcGVjaWFsaXR5L2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVFknLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YS5zcGVjaWFsaXR5LFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVFlfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTcGVjaWFsaXR5ID0gKGRhdGEpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCdhcGkvc3BlY2lhbGl0eS9hZGQnLCBkYXRhLCB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9TUEVDSUFMSVRJWScsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldCgnYXBpL3NwZWNpYWxpdHkvYWxsJyk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX1NQRUNJQUxJVFlfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0U3BlY2lhbGl0eSA9IChkYXRhLCBpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvc3BlY2lhbGl0eS91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9KTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0VESVRfU1BFQ0lBTElUSVknLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoJ2FwaS9zcGVjaWFsaXR5L2FsbCcpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0VESVRfU1BFQ0lBTElUWV9FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNwZWNpYWxpdHkgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcclxuXHRcdFx0YGFwaS9zcGVjaWFsaXR5L2RlbGV0ZS8ke2lkfWAsXHJcblx0XHRcdHt9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0RFTEVURV9TUEVDSUFMSVRJWScsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldCgnYXBpL3NwZWNpYWxpdHkvYWxsJyk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnREVMRVRFX1NQRUNJQUxJVFlfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NUb2FzdCA9IChyZXMpID0+IHtcclxuICAgIHJlcy5zdGF0dXMgPT0gMSA/IHRvYXN0LnN1Y2Nlc3MocmVzLm1lc3NhZ2UsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgIH0pIDogdG9hc3QuZXJyb3IocmVzLm1lc3NhZ2UsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JUb2FzdCA9IChlcnIpID0+IHtcclxuICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb3BpY3MgPSAoc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9waWMgPSAoZGF0YSwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKHNwZWNpYWxpdHlOYW1lKTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3RvcGljL2FkZGAsIGRhdGEsIHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9UT1BJQycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHQvLyByZWZyZXNoIHRvcGljc1xyXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9UT1BJQ19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRUb3BpYyA9IChkYXRhLCBpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3RvcGljL3VwZGF0ZS8ke2lkfWAsIGRhdGEsIHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnRURJVF9UT1BJQycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0VESVRfVE9QSUNfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bmxvY2tUb3BpYyA9ICh0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coc3BlY2lhbGl0eU5hbWUpO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcclxuXHRcdFx0YGFwaS90b3BpYy91bmxvY2svJHt0b3BpY0lkfWAsXHJcblx0XHRcdHt9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdVU0VSTE9BREVEJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEudXNlcixcclxuXHRcdH0pO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnVU5MT0NLX1RPUElDJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnVU5MT0NLX1RPUElDX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVG9waWMgPSAoaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRjb25zb2xlLmxvZyh7IGlkLCBzcGVjaWFsaXR5TmFtZSB9KTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXHJcblx0XHRcdGBhcGkvdG9waWMvZGVsZXRlLyR7aWR9YCxcclxuXHRcdFx0e30sXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0RFTEVURV9UT1BJQycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnREVMRVRFX1RPUElDX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBTRVRfQUxFUlQgPSAnU0VUX0FMRVJUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9BTEVSVCA9ICdSRU1PVkVfQUxFUlQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSAnTE9HSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMID0gJ0xPR0lOX0ZBSUwnO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVJfU1VDQ0VTUyA9ICdSRUdJU1RFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZBSUwgPSAnUkVHSVNURVJfRkFJTCc7XHJcbmV4cG9ydCBjb25zdCBTRU5EX1JFU0VUX0VNQUlMID0gJ1NFTkRfUkVTRVRfRU1BSUwnO1xyXG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9FTUFJTF9GQUlMID0gJ1NFTkRfUkVTRVRfRU1BSUxfRkFJTCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HT1VUID0gJ0xPR09VVCc7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9MT0FERUQgPSAnVVNFUkxPQURFRCc7XHJcbmV4cG9ydCBjb25zdCBBVVRIX0VSUk9SID0gJ0FVVEhfRVJST1InO1xyXG4iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE9wZW5Ub3BpY3MgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGlkKTtcclxuXHRjb25zdCBvcGVuVG9waWNzQXJyYXkgPSBzdG9yZS5nZXRTdGF0ZSgpLnVpLm9wZW5Ub3BpY3M7XHJcblx0aWYgKCFvcGVuVG9waWNzQXJyYXkuaW5jbHVkZXMoaWQpKSB7XHJcblx0XHRvcGVuVG9waWNzQXJyYXkucHVzaChpZCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdG9wZW5Ub3BpY3NBcnJheS5zcGxpY2Uob3BlblRvcGljc0FycmF5LmluZGV4T2YoaWQpLCAxKTtcclxuXHR9XHJcblxyXG5cdGRpc3BhdGNoKHtcclxuXHRcdHR5cGU6ICdTRVRfT1BFTl9UT1BJQ1MnLFxyXG5cdFx0cGF5bG9hZDogb3BlblRvcGljc0FycmF5LFxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldERpc3BsYXlNb2RlID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0Y29uc3QgZGlzcGxheU1vZGUgPVxyXG5cdFx0c3RvcmUuZ2V0U3RhdGUoKS51aS5kaXNwbGF5TW9kZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcclxuXHRpZiAoaXNDbGllbnQpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb2RlJywgZGlzcGxheU1vZGUpO1xyXG5cclxuXHRkaXNwYXRjaCh7XHJcblx0XHR0eXBlOiAnU0VUX0RJU1BMQVlfTU9ERScsXHJcblx0XHRwYXlsb2FkOiBkaXNwbGF5TW9kZSxcclxuXHR9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRWaWRlbyA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS92aWRlby9nZXQvJHtpZH1gKTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVklERU8nLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX1ZJREVPX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVmlkZW8gPSAoZGF0YSwgaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHJcblxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3ZpZGVvL2FkZC8ke2lkfWAsIGRhdGEsIHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9WSURFTycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgcmVzVG9waWMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXNUb3BpYyk7XHJcblxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlc1RvcGljLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdBRERfVklERU9fRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0VmlkZW8gPSAoZGF0YSwgaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS92aWRlby91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0VESVRfVklERU8nLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHJcblx0XHRjb25zdCByZXNUb3BpYyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhyZXNUb3BpYy5kYXRhKTtcclxuXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzVG9waWMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnRURJVF9WSURFT19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVZpZGVvID1cclxuXHQodmlkZW9JZCwgdG9waWNJZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXHJcblx0XHRcdFx0YGFwaS92aWRlby9kZWxldGUvJHt2aWRlb0lkfS8ke3RvcGljSWR9YCxcclxuXHRcdFx0XHR7fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogJ0RFTEVURV9WSURFTycsXHJcblx0XHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMyLmRhdGEpO1xyXG5cdFx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogJ0RFTEVURV9WSURFT19FUlJPUicsXHJcblx0XHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VmlkZW8gPSAodmlkZW8pID0+IChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdTRUxFQ1RfVklERU8nLFxyXG5cdFx0XHRwYXlsb2FkOiB2aWRlbyxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdTRUxFQ1RfVklERU9fRVJST1InLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgQWRkID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdHN0cm9rZVdpZHRoPSczLjUnXHJcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXHJcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XHJcblx0XHQ8bGluZSB4MT0nMTInIHkxPSc1JyB4Mj0nMTInIHkyPScxOSc+PC9saW5lPlxyXG5cdFx0PGxpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInPjwvbGluZT5cclxuXHQ8L3N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDaGV2cm9uc1VwID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdHN0cm9rZVdpZHRoPSczLjUnXHJcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXHJcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XHJcblx0XHQ8cGF0aCBkPSdNMTcgMTFsLTUtNS01IDVNMTcgMThsLTUtNS01IDUnIC8+XHJcblx0PC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hldnJvbnNMZWZ0ID0gKHsgc2l6ZSA9IDUxLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdHN0cm9rZVdpZHRoPScyLjUnXHJcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXHJcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XHJcblx0XHQ8cGF0aCBkPSdNMTEgMTdsLTUtNSA1LTVNMTggMTdsLTUtNSA1LTUnIC8+XHJcblx0PC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBDcm9zcyA9ICh7IHNpemUgPSAzMiwgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxyXG5cdDxzdmdcclxuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdHdpZHRoPXtzaXplfVxyXG5cdFx0aGVpZ2h0PXtzaXplfVxyXG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xyXG5cdFx0ZmlsbD0nbm9uZSdcclxuXHRcdHN0cm9rZT17Y29sb3J9XHJcblx0XHRzdHJva2VXaWR0aD0nMS41J1xyXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xyXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxyXG5cdFx0PGxpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCc+PC9saW5lPlxyXG5cdFx0PGxpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCc+PC9saW5lPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgRGVsZXRlID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB3aWR0aD17c2l6ZX1cclxuICAgIGhlaWdodD17c2l6ZX1cclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgc3Ryb2tlPXtjb2xvcn1cclxuICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwic3F1YXJlXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwiYXJjc1wiXHJcbiAgPlxyXG4gICAgPHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiPjwvcG9seWxpbmU+XHJcbiAgICA8cGF0aCBkPVwiTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXCI+PC9wYXRoPlxyXG4gICAgPGxpbmUgeDE9XCIxMFwiIHkxPVwiMTFcIiB4Mj1cIjEwXCIgeTI9XCIxN1wiPjwvbGluZT5cclxuICAgIDxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIj48L2xpbmU+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgTG9jayA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnI0RDMTQzQycsIGhhbmRsZXIgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8c3ZnXHJcblx0XHRcdG9uQ2xpY2s9e2hhbmRsZXJ9XHJcblx0XHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdFx0d2lkdGg9JzQzJ1xyXG5cdFx0XHRoZWlnaHQ9JzQzJ1xyXG5cdFx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRcdGZpbGw9J25vbmUnXHJcblx0XHRcdHN0cm9rZT17Y29sb3J9XHJcblx0XHRcdHN0cm9rZS13aWR0aD0nMidcclxuXHRcdFx0c3Ryb2tlLWxpbmVjYXA9J3JvdW5kJ1xyXG5cdFx0XHRzdHJva2UtbGluZWpvaW49J3JvdW5kJz5cclxuXHRcdFx0PHJlY3QgeD0nMycgeT0nMTEnIHdpZHRoPScxOCcgaGVpZ2h0PScxMScgcng9JzInIHJ5PScyJz48L3JlY3Q+XHJcblx0XHRcdDxwYXRoIGQ9J003IDExVjdhNSA1IDAgMCAxIDEwIDB2NCc+PC9wYXRoPlxyXG5cdFx0PC9zdmc+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVbmxvY2sgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMEZGMDAnIH0pID0+IChcclxuXHQ8c3ZnXHJcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHR3aWR0aD0nNDMnXHJcblx0XHRoZWlnaHQ9JzQzJ1xyXG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xyXG5cdFx0ZmlsbD0nbm9uZSdcclxuXHRcdHN0cm9rZT17Y29sb3J9XHJcblx0XHRzdHJva2Utd2lkdGg9JzInXHJcblx0XHRzdHJva2UtbGluZWNhcD0ncm91bmQnXHJcblx0XHRzdHJva2UtbGluZWpvaW49J3JvdW5kJz5cclxuXHRcdDxyZWN0IHg9JzMnIHk9JzExJyB3aWR0aD0nMTgnIGhlaWdodD0nMTEnIHJ4PScyJyByeT0nMic+PC9yZWN0PlxyXG5cdFx0PHBhdGggZD0nTTcgMTFWN2E1IDUgMCAwIDEgOS45LTEnPjwvcGF0aD5cclxuXHQ8L3N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBSZWFkID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnPlxyXG5cdFx0PHBhdGggZD0nTTEyIDQuNzA2Yy0yLjkzOC0xLjgzLTcuNDE2LTIuNTY2LTEyLTIuNzA2djE3LjcxNGMzLjkzNy4xMiA3Ljc5NS42ODEgMTAuNjY3IDEuOTk1Ljg0Ni4zODggMS44MTcuMzg4IDIuNjY3IDAgMi44NzItMS4zMTQgNi43MjktMS44NzUgMTAuNjY2LTEuOTk1di0xNy43MTRjLTQuNTg0LjE0LTkuMDYyLjg3Ni0xMiAyLjcwNnptLTEwIDEzLjEwNHYtMTMuNzA0YzUuMTU3LjM4OSA3LjUyNyAxLjQ2MyA5IDIuMzM0djEzLjE2OGMtMS41MjUtLjU0Ni00LjcxNi0xLjUwNC05LTEuNzk4em0yMCAwYy00LjI4My4yOTMtNy40NzUgMS4yNTItOSAxLjc5OXYtMTMuMTcxYzEuNDUzLS44NjEgMy44My0xLjk0MiA5LTIuMzMydjEzLjcwNHptLTItMTAuMjE0Yy0yLjA4Ni4zMTItNC40NTEgMS4wMjMtNiAxLjY3MnYtMS4wNjRjMS42NjgtLjYyMiAzLjg4MS0xLjMxNSA2LTEuNjI2djEuMDE4em0wIDMuMDU1Yy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0wLTIuMDMxYy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0wIDYuMDkzYy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0wLTIuMDMxYy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0tMTYtNi4xMDRjMi4xMTkuMzExIDQuMzMyIDEuMDA0IDYgMS42MjZ2MS4wNjRjLTEuNTQ5LS42NDktMy45MTQtMS4zNjEtNi0xLjY3MnYtMS4wMTh6bTAgNS4wOWMyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTUtNi0xLjYyNnYxLjAxN3ptMC0yLjAzMWMyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTYtNi0xLjYyNnYxLjAxN3ptMCA2LjA5M2MyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTUtNi0xLjYyNnYxLjAxN3ptMC0yLjAzMWMyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTUtNi0xLjYyNnYxLjAxN3onIC8+XHJcblx0PC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdHN0cm9rZVdpZHRoPScyJ1xyXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xyXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxyXG5cdFx0PHBhdGggZD0nTTIwIDE0LjY2VjIwYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmg1LjM0Jz48L3BhdGg+XHJcblx0XHQ8cG9seWdvbiBwb2ludHM9JzE4IDIgMjIgNiAxMiAxNiA4IDE2IDggMTIgMTggMic+PC9wb2x5Z29uPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL0FkZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGVsZXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9VcGRhdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NoZXZyb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9SZWFkJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2NrJztcclxuZXhwb3J0ICogZnJvbSAnLi9Dcm9zcyc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuaW1wb3J0IHsgU2VvIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5pbXBvcnQgUXVlc3Rpb25zIGZyb20gJy4uL3NlY3Rpb25zL2Fib3V0L1F1ZXN0aW9ucyc7XHJcbmltcG9ydCBBYm91dFVzIGZyb20gJy4uL3NlY3Rpb25zL2Fib3V0L0Fib3V0VXMnO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9sYXlvdXQnO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICA+XHJcbiAgICAgIDxTZW8gdGl0bGU9XCJBYm91dFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFnZSBzY3JvbGxlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZyLXdhdmUgdG9wLXNsaWRlXCI+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5IZWxsbyB0aGVyZSw8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nLWFib3V0XCI+XHJcbiAgICAgICAgICAgIFdlIGNyZWF0ZWQgPHNwYW4gY2xhc3NOYW1lPVwibG9nbyB0ZXh0LWRhcmtcIj5Db2RlcnMgR2FsYTwvc3Bhbj4gdG9cclxuICAgICAgICAgICAgcHJvdmlkZSBZb3UgUXVhbGl0eSByZXNvdXJjZXMgdG8gbGVhcm4gRnJvbVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwic2Nyb2xsIGljb25cIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ2lmaW1hZ2UubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA1L3Njcm9sbC1naWYtMTAuZ2lmXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGwtaWNvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UXVlc3Rpb25zIC8+XHJcbiAgICAgICAgPEFib3V0VXMgLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIgZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInO1xyXG5cclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0JztcclxuXHJcbmltcG9ydCB7IGdldFNwZWNpYWxpdHkgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgc2VydmljZVBvc3QsIHNjcm9sbFRvIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IENoZXZyb25zVXAgfSBmcm9tICcuLi9hc3NldHMvaWNvbnMnO1xyXG5cclxuLy8gY29uc3QgU2hhcmVBcnRpY2xlID0gKHsgTmlkLCB1cmwgfSwgcHJvcHMpID0+IHtcclxuXHJcblxyXG4vLyBcdGZ1bmN0aW9uIGFjdGlvblRvZ2dsZSgpIHtcclxuLy8gXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdHJldHVybiAoXHJcbi8vIFx0XHQ8PlxyXG4vLyBcdFx0XHQ8ZGl2IGNsYXNzPSdhY3Rpb24nIG9uQ2xpY2s9e2FjdGlvblRvZ2dsZX0+XHJcbi8vIFx0XHRcdFx0PHNwYW4+XHJcbi8vIFx0XHRcdFx0XHQ8aW1nXHJcbi8vIFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMjVweCcgfX1cclxuLy8gXHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE5MTk5L3NoYXJlLnN2ZydcclxuLy8gXHRcdFx0XHRcdFx0YWx0PScnXHJcbi8vIFx0XHRcdFx0XHQvPlxyXG4vLyBcdFx0XHRcdDwvc3Bhbj5cclxuLy8gXHRcdFx0XHQ8dWw+XHJcbi8vIFx0XHRcdFx0XHQ8bGk+XHJcbi8vIFx0XHRcdFx0XHRcdDxhXHJcbi8vIFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3aGF0c2FwcC1pY29uJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuLy8gXHRcdFx0XHRcdFx0XHRocmVmPXtgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/dGV4dD1IZXkgbG9vayBpIGp1c3QgZm91bmQgb3V0IHRoaXMgQW1hemluZyBhcnRpY2xlIG9uIFwiJHtOaWR9XCIsQ2hlY2sgaXQgb3V0IDogJHt1cmx9YH1cclxuLy8gXHRcdFx0XHRcdFx0XHR0YXJnZXQ9J19ibGFuayc+XHJcbi8vIFx0XHRcdFx0XHRcdFx0U2hhcmUgb25cclxuLy8gXHRcdFx0XHRcdFx0XHQ8aW1nXHJcbi8vIFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzI1cHgnLCBtYXJnaW5MZWZ0OiAnMjBweCcgfX1cclxuLy8gXHRcdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMDMxNTAvd2hhdHNhcHAtc3ltYm9sLWxvZ28uc3ZnJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdFx0YWx0PXsnc2hhcmUgJyArIE5pZCArICcgb24gV2hhdHNhcHAnfVxyXG4vLyBcdFx0XHRcdFx0XHRcdC8+XHJcbi8vIFx0XHRcdFx0XHRcdDwvYT5cclxuLy8gXHRcdFx0XHRcdDwvbGk+XHJcblxyXG4vLyBcdFx0XHRcdFx0PGxpPlxyXG4vLyBcdFx0XHRcdFx0XHQ8YVxyXG4vLyBcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbWFpbC1pY29uJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdGhyZWY9e2BtYWlsdG86P1N1YmplY3Q9JHsnQXJ0aWNsZSBvbiAnICsgTmlkXHJcbi8vIFx0XHRcdFx0XHRcdFx0XHR9JkJvZHk9SGV5IGxvb2sgaSBqdXN0IGZvdW5kIG91dCB0aGlzIEFtYXppbmcgYXJ0aWNsZSBvbiBcIiR7TmlkfVwiLENoZWNrIGl0IG91dCA6ICR7dXJsfWB9XHJcbi8vIFx0XHRcdFx0XHRcdFx0dGFyZ2V0PSdfdG9wJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdHJlbD0nbm9mb2xsb3cnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdFNoYXJlIG9uXHJcbi8vIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG4vLyBcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyNXB4JywgbWFyZ2luTGVmdDogJzIwcHgnIH19XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3NoYXJlLWltYWdlJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzMwMzE2MS9nbWFpbC1pY29uLWxvZ28uc3ZnJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdFx0YWx0PXsnc2hhcmUgJyArIE5pZCArICcgb24gR21haWwnfVxyXG4vLyBcdFx0XHRcdFx0XHRcdC8+XHJcbi8vIFx0XHRcdFx0XHRcdDwvYT5cclxuLy8gXHRcdFx0XHRcdDwvbGk+XHJcbi8vIFx0XHRcdFx0PC91bD5cclxuLy8gXHRcdFx0PC9kaXY+XHJcbi8vIFx0XHQ8Lz5cclxuLy8gXHQpO1xyXG4vLyB9O1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IHsgbmFtZSB9ID0gcHJvcHMubWF0Y2gucGFyYW1zO1xyXG5cdGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcblxyXG5cclxuXHJcblx0Y29uc3QgZ2V0QXJ0aWNsZSA9IGFzeW5jIChuYW1lKSA9PiB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcclxuXHRcdFx0YGFwaS9hcnRpY2xlL2dldGAsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0cmV0dXJuIHJlcy5kYXRhLmFydGljbGU7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0QXJ0aWNsZUVmZmVjdCA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0YXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcnRpY2xlID0gYXdhaXQgZ2V0QXJ0aWNsZShuYW1lLnJlcGxhY2UoLy0vZywgJyAnKSk7XHJcblx0XHRcdHNldEFydGljbGUoYXJ0aWNsZSk7XHJcblx0XHR9LFxyXG5cdFx0W25hbWVdLFxyXG5cdClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldEFydGljbGVFZmZlY3QoKVxyXG5cdH0sIFtnZXRBcnRpY2xlRWZmZWN0XSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGFydGljbGUpXHJcblx0Y29uc3QgZ29Ub1RvcCA9ICgpID0+IHtcclxuXHRcdHNjcm9sbFRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKSk7XHJcblx0fTtcclxuXHJcblxyXG5cdGNvbnN0IGh0bWwgPSBhcnRpY2xlICYmIGFydGljbGUuY29udGVudDtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RlZC1hcnRpY2xlJz5cclxuXHJcblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9J2Z1bGwtdmlldy1hcnRpY2xlIHAtMic+XHJcblx0XHRcdFx0XHQ8Q29sIHNtPXsyfT57LyogQWRkcyBIZXJlICovfTwvQ29sPlxyXG5cclxuXHRcdFx0XHRcdDxDb2wgaWQ9J3RvcCcgc3R5bGU9e3sgcGFkZGluZzogJzBweCcgfX0gc209ezh9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncWwtc25vdyc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Z1bGwtYXJ0aWNsZSBxbC1lZGl0b3InPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1JlYWN0SHRtbFBhcnNlcihodG1sKX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0b3AtaWNvbic+XHJcblx0XHRcdFx0XHRcdFx0PENoZXZyb25zVXAgc2l6ZT0nNTAnIGNvbG9yPScjZGMxNDNjJyBvbkNsaWNrPXtnb1RvVG9wfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cclxuXHRcdFx0XHRcdDxDb2wgc209ezJ9PnsvKiBBZGRzIEhlcmUgKi99PC9Db2w+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRhdXRoOiBzdGF0ZS5hdXRoXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0U3BlY2lhbGl0eSB9KShBcnRpY2xlKTtcclxuXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG4vLyBjb25zdCBBcnRpY2xlID0gKHByb3BzKSA9PiB7XHJcbi8vIFx0Y29uc3QgbmFtZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5uYW1lXHJcbi8vIFx0Y29uc29sZS5sb2cobmFtZS5yZXBsYWNlKC8tL2csICcgJykpXHJcbi8vIFx0cmV0dXJuIChcclxuLy8gXHRcdDxkaXY+XHJcbi8vIFx0XHRcdDxkaXY+XHJcbi8vIFx0XHRcdFx0bG9yZW0xMDBcclxuLy8gXHRcdFx0PC9kaXY+XHJcbi8vIFx0XHQ8L2Rpdj5cclxuLy8gXHQpO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBcnRpY2xlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXIsIGxvZ2luIH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuY29uc3QgQXV0aCA9ICh7IGxvZ2luLCByZWdpc3RlciwgdG9rZW4sIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgaWYgKHRva2VuKSByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL2xlYXJuXCIgLz47XHJcbiAgY29uc3QgZGluVGV4dCA9IFwiPENvZGVycyBHYWxhLz5cIjtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0eXBlID09PSBcInNpZ251cFwiKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbiBoMVwiKS5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlZFwiKTtcclxuXHJcbiAgICAgIHJlZ2lzdGVyKGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb24gaDFcIikuY2xhc3NMaXN0LmFkZChcImNoYW5nZWRcIik7XHJcbiAgICAgIGxvZ2luKGRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCI+XHJcbiAgICAgIDxTZW8gdGl0bGU9XCJMb2dJblwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJkaW5UYWdcIj57ZGluVGV4dH08L2g2PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJzaWdudXBcIiA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgxPlNpZ24gVXA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+SGV5LCBXZWxjb21lIHRvIENvZGVyc0dhbGEgISE8L3A+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5IZXkgdGhlcmUsIFdlbGNvbWUgQmFjayAhITwvcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGUgPT09IFwic2lnbnVwXCIgPyBcImZsZXhcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt0eXBlID09PSBcInNpZ251cFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2RlUmVmZXJyZWRcIj5SZWZlciBDb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29kZVJlZmVycmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQQjE4RkM2OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZVJlZmZlcmVkOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gXCJzaWdudXBcIiA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlbWVtYmVyTWVcIj5IYXZlIGFuIGFjY291bnQ/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtZW1iZXJNZVwiPkZvcmdvdCBQYXNzd29yZD88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvc2lnbnVwXCI+U2lnblVwPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWduaW5cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvZ2luLCByZWdpc3RlciB9KShBdXRoKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGdldEFsbEFydGljbGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9hcnRpY2xlJztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgRmVhdHVyZWQgZnJvbSAnLi4vc2VjdGlvbnMvYmxvZy9GZWF0dXJlZCc7XHJcbmltcG9ydCBMYXRlc3QgZnJvbSAnLi4vc2VjdGlvbnMvYmxvZy9MYXRlc3QnO1xyXG5pbXBvcnQgQWxsIGZyb20gJy4uL3NlY3Rpb25zL2Jsb2cvQWxsJztcclxuXHJcbmNvbnN0IEJsb2cgPSAoeyBnZXRBbGxBcnRpY2xlcywgYXJ0aWNsZXMsIGlzQWRtaW4gfSkgPT4ge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoYXJ0aWNsZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdGdldEFsbEFydGljbGVzKCk7XHJcblx0XHR9XHJcblx0fSwgW2dldEFsbEFydGljbGVzXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jb250YWluZXInPlxyXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT0nbmF2X190b3AnPlxyXG5cdFx0XHRcdDxhIHJlbD0nbm9mb2xsb3cnIGhyZWY9JyMnIGNsYXNzTmFtZT0nbmF2X190b3BfX2xpbmsnPjwvYT5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHRcdHtpc0FkbWluICYmIChcclxuXHRcdFx0XHQ8TmF2TGluayB0bz0nL2FydGljbGUvYWRkJyByZWw9J25vZm9sbG93Jz5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT0nbGcnIGJsb2NrPlxyXG5cdFx0XHRcdFx0XHRBZGQgQXJ0aWNsZVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxyXG5cdFx0XHRcdDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiAnRG9zaXMnIH19IGNsYXNzTmFtZT0ndGl0bGVfX2gxJz5cclxuXHRcdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0XHRDb2RlcnNHYWxhIDxzcGFuPkJsb2c8L3NwYW4+XHJcblx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RpdGxlX19zdWInPlNvcnJ5IDooPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPSdncmlkJz5cclxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2dyaWRfX2NvbC0yJz5cclxuXHRcdFx0XHRcdDxMYXRlc3QgYXJ0aWNsZT17YXJ0aWNsZXMgJiYgYXJ0aWNsZXNbMF19IC8+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdncmlkX19jb2xfX3RpdGxlJz5GZWF0dXJlZCBBcnRpY2xlczwvaDM+XHJcblx0XHRcdFx0XHRcdDxGZWF0dXJlZCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XHJcblx0XHRcdFx0XHRcdHsvKiA8TmV3c2xldHRlckZvcm0gLz4gKi99XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZ3JpZF9fY29sX190aXRsZSc+QWxzbyBSZWFkLi4uPC9oMz5cclxuXHRcdFx0XHQ8QWxsIGFydGljbGVzPXthcnRpY2xlc30gLz5cclxuXHRcdFx0PC9hcnRpY2xlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRhcnRpY2xlczogc3RhdGUuYXJ0aWNsZS5hcnRpY2xlcyxcclxuXHRpc0FkbWluOiBzdGF0ZS5hdXRoLmlzQWRtaW4sXHJcbn0pO1xyXG5cclxuY29uc3QgbG9hZERhdGEgPSAoc3RvcmUpID0+IHtcclxuXHRyZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0QWxsQXJ0aWNsZXMoKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50OiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRBbGxBcnRpY2xlcyB9KShCbG9nKSxcclxuXHRsb2FkRGF0YSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IFNlbyB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9zZWN0aW9ucy9ob21lL0hlcm8nO1xyXG5pbXBvcnQgSGVyb0NhcmRzIGZyb20gJy4uL3NlY3Rpb25zL2hvbWUvSGVyb0NhcmRzJztcclxuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuLi9sYXlvdXQvcHJlbG9hZGVyJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblx0dmFyIGhvbWVDb250ZW50ID0gJ2Fkc2YnO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuXHRcdFx0YW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcblx0XHRcdGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cclxuXHRcdFx0PFNlbyB0aXRsZT0nSG9tZScgbWV0YT17W3sgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6ICdpbmRleCBmb2xsb3cnIH1dfSAvPlxyXG5cdFx0XHQ8ZGl2IGlkPSdteURpdic+XHJcblx0XHRcdFx0e2hvbWVDb250ZW50ID8gKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2hvbWUtY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0PEhlcm8gLz5cclxuXHRcdFx0XHRcdFx0PEhlcm9DYXJkcyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxQcmVsb2FkZXIgLz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbW90aW9uLmRpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IFNlbyB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9sYXlvdXQvJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vc2VjdGlvbnMvbGVhcm4vQ2FyZCc7XHJcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcclxuXHJcbmNvbnN0IExlYXJuID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuXHRcdFx0YW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcblx0XHRcdGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fT5cclxuXHRcdFx0PFNlbyB0aXRsZT0nTGVhcm4nIG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX0gLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBsZWFybi1jb250YWluZXInPlxyXG5cdFx0XHRcdDxBZG1pbkJ1dHRvbnMgdHlwZT0nQWRkJyB1cmw9Jy9hZGRjYXJkJyBkYXRhPXt7IG5hbWU6ICdDb3Vyc2VzJyB9fSAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuXHRcdFx0XHRcdDxDYXJkIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHQ8L21vdGlvbi5kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYXJuO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgQ2hldnJvbnNVcCwgQ3Jvc3MgfSBmcm9tICcuLi9hc3NldHMvaWNvbnMnO1xyXG5pbXBvcnQgeyBnZXRTcGVjaWFsaXR5LCBjbGVhckFydGljbGUsIHNlbGVjdFZpZGVvIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgVmlkZW9QcmV2aWV3IGZyb20gJy4uL3NlY3Rpb25zL3ByZXZpZXcvVmlkZW9QcmV2aWV3JztcclxuaW1wb3J0IFRvcGljc092ZXJ2aWV3IGZyb20gJy4uL3NlY3Rpb25zL3ByZXZpZXcvVG9waWNzT3ZlcnZpZXcnO1xyXG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XHJcblxyXG5jb25zdCBQcmV2aWV3ID0gKHtcclxuXHRtYXRjaCxcclxuXHRzZWxlY3RWaWRlbyxcclxuXHRjbGVhckFydGljbGUsXHJcblx0Z2V0U3BlY2lhbGl0eSxcclxuXHRzcGVjaWFsaXR5LFxyXG59KSA9PiB7XHJcblx0Y29uc3QgW2Nsb3NlLCBzZXRDbG9zZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHRjb25zdCB7IHNwZWNpYWxpdHlOYW1lIH0gPSBtYXRjaC5wYXJhbXNcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNsZWFyQXJ0aWNsZSgpO1xyXG5cdFx0Z2V0U3BlY2lhbGl0eShzcGVjaWFsaXR5TmFtZSk7XHJcblx0fSwgW2NsZWFyQXJ0aWNsZSwgZ2V0U3BlY2lhbGl0eSwgc3BlY2lhbGl0eU5hbWVdKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2VsZWN0VmlkZW8oc3BlY2lhbGl0eSk7XHJcblx0fSwgW3NwZWNpYWxpdHksIHNlbGVjdFZpZGVvXSk7XHJcblxyXG5cdHJldHVybiBzcGVjaWFsaXR5ID8gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3RvcGljcy1vdnItY29udCc+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9J292ZXJsYXknXHJcblx0XHRcdFx0c3R5bGU9e3sgZGlzcGxheTogY2xvc2UgPyAnbm9uZScgOiAnYmxvY2snIH19XHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0Q2xvc2UoIWNsb3NlKX0+PC9kaXY+XHJcblx0XHRcdDxTZW9cclxuXHRcdFx0XHR0aXRsZT0nU2VsZWN0IEFydGljbGUnXHJcblx0XHRcdFx0bWV0YT17W3sgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6ICdpbmRleCBmb2xsb3cnIH1dfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3BlY2lhbGl0eS1jb250YWluZXInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzcGVjaWFsaXR5LWhlYWRpbmcnPlxyXG5cdFx0XHRcdFx0PGgyPntzcGVjaWFsaXR5Lm5hbWV9PC9oMj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0PENvbFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RvcGljLW92ci1jb250YWluZXInXHJcblx0XHRcdFx0XHRcdGxnPXs0fVxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBoZWlnaHQ6IGNsb3NlID8gJzI1dmgnIDogJzUwdmgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9waWNzLW92ZXJ2aWV3Jz5cclxuXHRcdFx0XHRcdFx0XHQ8aDMgc3R5bGU9e3sgZm9udFNpemU6ICcxcmVtJyB9fSBjbGFzc05hbWU9J292ZXJ2aWV3Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlRvcGljcyBPdmVydmlldyA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0FkZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsPXtgLyR7c3BlY2lhbGl0eS5uYW1lfS90b3BpYy9hZGQvYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17eyBuYW1lOiAnVG9waWNzJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbG9zZS10b2dnbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2Nsb3NlID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRDbG9zZSghY2xvc2UpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2hldnJvbnNVcCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRDbG9zZSghY2xvc2UpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q3Jvc3MgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxBY2NvcmRpb24+XHJcblx0XHRcdFx0XHRcdFx0PFRvcGljc092ZXJ2aWV3IHNwZWNpYWxpdHlOYW1lPXtzcGVjaWFsaXR5Lm5hbWV9IC8+XHJcblx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uPlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHQ8Q29sIGw9ezh9PlxyXG5cdFx0XHRcdFx0XHQ8VmlkZW9QcmV2aWV3IHNwZWNpYWxpdHlOYW1lPXtzcGVjaWFsaXR5Lm5hbWV9IC8+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxGb290ZXIgLz5cclxuXHRcdDwvZGl2PlxyXG5cdCkgOiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdHNwZWNpYWxpdHk6IHN0YXRlLnNwZWNpYWxpdHkuc3BlY2lhbGl0eSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG5cdGdldFNwZWNpYWxpdHksXHJcblx0Y2xlYXJBcnRpY2xlLFxyXG5cdHNlbGVjdFZpZGVvLFxyXG59KShQcmV2aWV3KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9zZWN0aW9ucy9lZGl0b3InO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vbGF5b3V0JztcclxuXHJcbmltcG9ydCB7IGFkZEFydGljbGUsIGVkaXRBcnRpY2xlLCBnZXRBcnRpY2xlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IENoZXZyb25zVXAgfSBmcm9tICcuLi9hc3NldHMvaWNvbnMnO1xyXG5cclxuY29uc3QgVXBzZXJ0QXJ0aWNsZSA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IHsgYWRkQXJ0aWNsZSwgc3BlY2lhbGl0aWVzLCBlZGl0QXJ0aWNsZSwgZ2V0QXJ0aWNsZSwgcHJldkFydGljbGUgfSA9XHJcblx0XHRwcm9wcztcclxuXHRjb25zdCBbY29udGVudCwgc2V0Y29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW25hbWUsIHNldG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtrZXl3b3Jkcywgc2V0QXJ0aWNsZUtleXdvcmRzXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbZmVhdHVyZWQsIHNldGZlYXR1cmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbdGh1bWJuYWlsVXJsLCBzZXR0aHVtYm5haWxVcmxdID0gdXNlU3RhdGUoJycpO1xyXG5cdC8vIGNvbnN0IFtMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHQvLyBjb25zdCB0b3BpY0lkID0gXCJFUlJPUl9OQV9ESVlPXCI7XHJcblx0ZnVuY3Rpb24gc2Nyb2xsVG8oZWxlbWVudCkge1xyXG5cdFx0aXNDbGllbnQgJiZcclxuXHRcdFx0d2luZG93LnNjcm9sbCh7XHJcblx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxyXG5cdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0dG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGNvbnN0IGdvVG9Ub3AgPSAoKSA9PiB7XHJcblx0XHRzY3JvbGxUbyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2JykpO1xyXG5cdH07XHJcblxyXG5cdGNvbnNvbGUubG9nKHByb3BzLm1hdGNoLnBhcmFtcy5hcnRpY2xlSWQpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKHByb3BzLmVkaXQpIHtcclxuXHRcdFx0Z2V0QXJ0aWNsZShwcm9wcy5tYXRjaC5wYXJhbXMuYXJ0aWNsZUlkKTtcclxuXHRcdH1cclxuXHR9LCBbcHJvcHMsIGdldEFydGljbGVdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRWRpdG9yID0gKGh0bWwpID0+IHtcclxuXHRcdHNldGNvbnRlbnQoaHRtbCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9IGFzeW5jIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zb2xlLmxvZyhuYW1lKTtcclxuXHRcdGNvbnNvbGUubG9nKGtleXdvcmRzKTtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdG5hbWU6IG5hbWUgPT09ICcnID8gcHJldkFydGljbGUubmFtZSA6IG5hbWUsXHJcblx0XHRcdGtleXdvcmRzOiBrZXl3b3JkcyA9PT0gJycgPyBwcmV2QXJ0aWNsZS5rZXl3b3JkcyA6IGtleXdvcmRzLFxyXG5cdFx0XHRjb250ZW50OiBjb250ZW50ID09PSAnJyA/IHByZXZBcnRpY2xlLmNvbnRlbnQgOiBjb250ZW50LFxyXG5cdFx0fTtcclxuXHRcdGVkaXRBcnRpY2xlKGRhdGEsIHByZXZBcnRpY2xlLl9pZCwgc3BlY2lhbGl0aWVzLnNwZWNpYWxpdHkuTmFtZSk7XHJcblx0XHR0b2FzdCgnQXJ0aWNsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseScpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUFkZCA9IGFzeW5jIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh7IGNvbnRlbnQsIG5hbWUsIGtleXdvcmRzIH0pO1xyXG5cdFx0YWRkQXJ0aWNsZSh7IGNvbnRlbnQsIG5hbWUsIGtleXdvcmRzLCBmZWF0dXJlZCwgdGh1bWJuYWlsVXJsIH0pO1xyXG5cdFx0dG9hc3QoJ0FydGljbGUgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSb3cgY2xhc3NOYW1lPSdmdWxsLXZpZXctYXJ0aWNsZSBwLTInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hhcmUtaWNvbnMnPjwvZGl2PlxyXG5cclxuXHRcdFx0PENvbCBzbT17MX0+PC9Db2w+XHJcblxyXG5cdFx0XHQ8Q29sIGlkPSd0b3AnIHNtPXsxMH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nJyBpZD0nJz5cclxuXHRcdFx0XHRcdFx0XHR7cHJvcHMuZWRpdFxyXG5cdFx0XHRcdFx0XHRcdFx0PyBgVXBkYXRlIEFydGljbGUgLSAke3ByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLm5hbWV9YFxyXG5cdFx0XHRcdFx0XHRcdFx0OiAnQWRkIGEgQXJ0aWNsZSd9XHJcblx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcblx0XHRcdFx0XHRcdDxmb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nbmFtZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0FydGljbGUgTmFtZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IHByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLm5hbWUgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldG5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSd0aHVtYm5haWxVcmwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdBcnRpY2xlIFRodW1ibmFpbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IHByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLnRodW1ibmFpbFVybCA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0dGh1bWJuYWlsVXJsKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2tleXdvcmRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQXJ0aWNsZSBEZXNjcmlwdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IHByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLmtleXdvcmRzIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBcnRpY2xlS2V5d29yZHMoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2ZlYXR1cmVkJz5Jc0ZlYXR1cmVkICZuYnNwOyA8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IHByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLmZlYXR1cmVkIDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldGZlYXR1cmVkKCFmZWF0dXJlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2NoZWNrYm94J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nZmVhdHVyZWQnXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtwcm9wcy5lZGl0ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLmNvbnRlbnQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RWRpdG9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXRvcj17aGFuZGxlRWRpdG9yfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e3ByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLmNvbnRlbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEVkaXRvciBoYW5kbGVFZGl0b3I9e2hhbmRsZUVkaXRvcn0gZGVmYXVsdFZhbHVlPScnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWRkLWFydGljbGUtYnV0dG9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzQnV0dG9uPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gaGFuZGxlRWRpdChlKSA6IGhhbmRsZUFkZChlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cHJvcHMuZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0b3AtaWNvbic+XHJcblx0XHRcdFx0XHQ8Q2hldnJvbnNVcCBzaXplPSc1MCcgY29sb3I9JyNkYzE0M2MnIG9uQ2xpY2s9e2dvVG9Ub3B9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQ29sPlxyXG5cclxuXHRcdFx0PENvbCBzbT17MX0+PC9Db2w+XHJcblx0XHQ8L1Jvdz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdHNwZWNpYWxpdGllczogc3RhdGUuc3BlY2lhbGl0eSxcclxuXHRwcmV2QXJ0aWNsZTogc3RhdGUuYXJ0aWNsZS5zZWxlY3RlZEFydGljbGUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuXHRhZGRBcnRpY2xlLFxyXG5cdGVkaXRBcnRpY2xlLFxyXG5cdGdldEFydGljbGUsXHJcbn0pKFVwc2VydEFydGljbGUpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgc2VydmljZUdldCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBhZGRTcGVjaWFsaXR5LCBlZGl0U3BlY2lhbGl0eSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL3NlY3Rpb25zL2VkaXRvcic7XHJcblxyXG5jb25zdCBVcHNlcnRDYXJkID0gKHsgYWRkU3BlY2lhbGl0eSwgZWRpdFNwZWNpYWxpdHksIGVkaXQsIG1hdGNoIH0pID0+IHtcclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdGlmIChlZGl0KSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChcclxuXHRcdFx0XHRcdGBhcGkvc3BlY2lhbGl0eS9nZXQvJHttYXRjaC5wYXJhbXMuc3BlY2lhbGl0eU5hbWV9YFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRjb25zdCB7IG5hbWUsIGltYWdlVXJsLCBjb250ZW50LCBfaWQgfSA9IHJlcy5kYXRhLnNwZWNpYWxpdHk7XHJcblx0XHRcdFx0c2V0RGF0YSh7IG5hbWUsIGltYWdlVXJsLCBjb250ZW50LCBfaWQgfSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRmZXRjaERhdGEoKTtcclxuXHR9LCBbZWRpdCwgbWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lXSk7XHJcblx0Y29uc29sZS5sb2coZWRpdCwgZGF0YSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRzZXRTdGF0ZSh7XHJcblx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUVkaXRvciA9IChodG1sKSA9PiB7XHJcblx0XHRzZXRTdGF0ZSh7XHJcblx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRjb250ZW50OiBodG1sLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGlmIChlZGl0KSBlZGl0U3BlY2lhbGl0eShzdGF0ZSwgZGF0YS5faWQpO1xyXG5cdFx0ZWxzZSBhZGRTcGVjaWFsaXR5KHN0YXRlKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBtdC00Jz5cclxuXHRcdFx0PGZvcm0gY2xhc3NOYW1lPSdtdC01Jz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0aWQ9J25hbWUnXHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdTcGVjaWFsaXR5IE5hbWUnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2VkaXQgPyBkYXRhICYmIGRhdGEubmFtZSA6ICcnfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdGlkPSdpbWFnZVVybCdcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0ltYWdlIFVSTCdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZWRpdCA/IGRhdGEgJiYgZGF0YS5pbWFnZVVybCA6ICcnfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0eyFlZGl0ICYmIChcclxuXHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9J2FsdCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nSW1hZ2UgYWx0IHRleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3FsLXNub3cnPlxyXG5cdFx0XHRcdFx0XHR7ZWRpdCA/IChcclxuXHRcdFx0XHRcdFx0XHRkYXRhICYmIGRhdGEuY29udGVudCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdDxFZGl0b3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtkYXRhICYmIGRhdGEuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdxbC1lZGl0b3InXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXRvcj17aGFuZGxlRWRpdG9yfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbFxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxFZGl0b3JcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncWwtZWRpdG9yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aGFuZGxlRWRpdG9yPXtoYW5kbGVFZGl0b3J9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhZGQtYXJ0aWNsZS1idXR0b24nPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGhhbmRsZXI9e2hhbmRsZVN1Ym1pdH0gaXNCdXR0b249e3RydWV9IHR5cGU9J3N1Ym1pdCc+XHJcblx0XHRcdFx0XHRcdFx0e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGFkZFNwZWNpYWxpdHksIGVkaXRTcGVjaWFsaXR5IH0pKFVwc2VydENhcmQpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBMb2NrQnV0dG9uIH0gZnJvbSAnLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYWRkVG9waWMsIGVkaXRUb3BpYyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmNvbnN0IFVwc2VydFRvcGljID0gKHtcclxuXHRzcGVjaWFsaXR5LFxyXG5cdG1hdGNoLFxyXG5cdGFkZFRvcGljLFxyXG5cdGVkaXRUb3BpYyxcclxuXHRsb2NhdGlvbixcclxuXHRlZGl0LFxyXG59KSA9PiB7XHJcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyBsb2NrZWQ6IGZhbHNlIH0pO1xyXG5cdGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0RGF0YSh7XHJcblx0XHRcdGxvY2tlZDogbG9jYXRpb24ucHJvcHMgJiYgbG9jYXRpb24ucHJvcHMuaXNMb2NrZWQsXHJcblx0XHRcdG5hbWU6IGxvY2F0aW9uLnByb3BzICYmIGxvY2F0aW9uLnByb3BzLm5hbWUsXHJcblx0XHR9KTtcclxuXHR9LCBbbG9jYXRpb24ucHJvcHNdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGlmICghZWRpdCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHR7IC4uLmRhdGEsIHNwZWNpYWxpdHlJZDogc3BlY2lhbGl0eS5faWQgfSxcclxuXHRcdFx0XHRtYXRjaC5wYXJhbXMuc3BlY2lhbGl0eU5hbWVcclxuXHRcdFx0KTtcclxuXHRcdFx0YWRkVG9waWMoXHJcblx0XHRcdFx0eyAuLi5kYXRhLCBzcGVjaWFsaXR5SWQ6IHNwZWNpYWxpdHkuX2lkIH0sXHJcblx0XHRcdFx0bWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lXHJcblx0XHRcdCk7XHJcblx0XHRcdHRvYXN0KCdUb3BpYyBBZGRlZCBzdWNjZXNzZnVsbHknKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVkaXRUb3BpYyhkYXRhLCBtYXRjaC5wYXJhbXMudG9waWNJZCwgbWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lKTtcclxuXHRcdFx0dG9hc3QoJ1VwZGF0ZWQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3Vwc2VydC1jb250YWluZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBzZXJ0LXRvcGljLWZvcm0nPlxyXG5cdFx0XHRcdDxoMz57ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9IFRvcGljPC9oMz5cclxuXHRcdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1pbnB1dCc+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17bG9jYXRpb24ucHJvcHMgJiYgbG9jYXRpb24ucHJvcHMubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldERhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pKTtcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWJ1dHRvbic+XHJcblx0XHRcdFx0XHRcdDxMb2NrQnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0aXNMb2NrZWQ9e2RhdGEubG9ja2VkfVxyXG5cdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldERhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIGxvY2tlZDogIXByZXYubG9ja2VkIH0pKTtcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGlzQnV0dG9uPXt0cnVlfSBoYW5kbGVyPXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdFx0XHR7ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRzcGVjaWFsaXR5OiBzdGF0ZS5zcGVjaWFsaXR5LnNwZWNpYWxpdHksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgYWRkVG9waWMsIGVkaXRUb3BpYyB9KShVcHNlcnRUb3BpYyk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgYWRkVmlkZW8sIGVkaXRWaWRlbywgZ2V0VmlkZW8gfSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IFVwc2VydFZpZGVvID0gKHtcclxuXHRlZGl0LFxyXG5cdG1hdGNoLFxyXG5cdGFkZFZpZGVvLFxyXG5cdGVkaXRWaWRlbyxcclxuXHRnZXRWaWRlbyxcclxuXHRzcGVjaWFsaXRpZXMsXHJcblx0cHJldlZpZGVvLFxyXG59KSA9PiB7XHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUocHJldlZpZGVvID8gcHJldlZpZGVvLm5hbWUgOiAnJyk7XHJcblx0Y29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcclxuXHRcdHByZXZWaWRlbyA/IHByZXZWaWRlby5kZXNjcmlwdGlvbiA6ICcnXHJcblx0KTtcclxuXHRjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUocHJldlZpZGVvID8gcHJldlZpZGVvLnVybCA6ICcnKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQWRkID0gYXN5bmMgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGF3YWl0IGFkZFZpZGVvKFxyXG5cdFx0XHR7IG5hbWUsIGRlc2NyaXB0aW9uLCB1cmwgfSxcclxuXHRcdFx0bWF0Y2gucGFyYW1zLnRvcGljSWQsXHJcblx0XHRcdHNwZWNpYWxpdGllcy5zcGVjaWFsaXR5Lm5hbWVcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9IGFzeW5jIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRhd2FpdCBlZGl0VmlkZW8oXHJcblx0XHRcdHsgbmFtZSwgZGVzY3JpcHRpb24sIHVybCB9LFxyXG5cdFx0XHRwcmV2VmlkZW8uX2lkLFxyXG5cdFx0XHRzcGVjaWFsaXRpZXMuc3BlY2lhbGl0eS5uYW1lXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBzZXJ0LWNvbnRhaW5lcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtdmlkZW8tZm9ybSc+XHJcblx0XHRcdFx0PGgzPntlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkICd9VmlkZW88L2gzPlxyXG5cdFx0XHRcdDxmb3JtPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+VXJsPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dXJsfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XHJcblx0XHRcdFx0XHRoYW5kbGVyPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRlZGl0ID8gaGFuZGxlRWRpdChlKSA6IGhhbmRsZUFkZChlKTtcclxuXHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0c3BlY2lhbGl0aWVzOiBzdGF0ZS5zcGVjaWFsaXR5LFxyXG5cdHByZXZWaWRlbzogc3RhdGUudmlkZW8uc2VsZWN0ZWRWaWRlbyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG5cdGFkZFZpZGVvLFxyXG5cdGVkaXRWaWRlbyxcclxuXHRnZXRWaWRlbyxcclxufSkoVXBzZXJ0VmlkZW8pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBQcml2YXRlUm91dGUgPSAoe1xyXG4gIGNvbXBvbmVudDogQ29tcG9uZW50LFxyXG4gIGF1dGg6IHsgaXNBdXRoZW50aWNhdGVkIH0sXHJcbiAgLi4ucmVzdFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3V0ZVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgICAgcmVuZGVyPXsocHJvcHMpID0+XHJcbiAgICAgICAgIWlzQXV0aGVudGljYXRlZCA/IDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+IDogPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBhdXRoOiBzdGF0ZS5hdXRoLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcml2YXRlUm91dGUpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbyA9ICh7XHJcblx0ZGVzY3JpcHRpb24sXHJcblx0dGl0bGUgPSAnICcsXHJcblx0bGFuZyA9ICdlbicsXHJcblx0bWV0YSA9IFtdLFxyXG5cdHJpY2hyZXN1bHQsXHJcbn0pID0+IHtcclxuXHQvLyBjb25zdCB7IGZhdmljb24gfSA9ICcnO1xyXG5cclxuXHRjb25zdCBtZXRhVGl0bGUgPSBgQ29kZXJzR2FsYSB8ICR7dGl0bGV9YDtcclxuXHRjb25zdCBtZXRhRGVzY3JpcHRpb24gPVxyXG5cdFx0XCJDb2RlcnNHYWxhJ3Mgb25seSBwdXJwb3NlIGlzIHRvIHByb3ZpZGUgY29kaW5nIGtub3dsZWRnZSwgc3VjaCBhcyBXZWIgZGV2ZWxvcG1lbnQgdGhhdCBpbmNsdWRlcyBIVE1MIENTUyBKUyBOb2RlIFJlYWN0IE1vbmdvRGIsIE1hY2hpbmUgTGVhcm5pbmcsIERhdGEgU3RydWN0dXJlcyBhbmQgQWxnb3JpdGhtXCIgfHxcclxuXHRcdGRlc2NyaXB0aW9uO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlbG1ldFxyXG5cdFx0XHR0aXRsZT17bWV0YVRpdGxlfVxyXG5cdFx0XHRodG1sQXR0cmlidXRlcz17eyBsYW5nIH19XHJcblx0XHRcdG1ldGE9e1tcclxuXHRcdFx0XHR7IG5hbWU6IGBkZXNjcmlwdGlvbmAsIGNvbnRlbnQ6IG1ldGFEZXNjcmlwdGlvbiB9LFxyXG5cdFx0XHRcdHsgcHJvcGVydHk6IGBvZzp0aXRsZWAsIGNvbnRlbnQ6IG1ldGFUaXRsZSB9LFxyXG5cdFx0XHRcdHsgcHJvcGVydHk6IGBvZzpkZXNjcmlwdGlvbmAsIGNvbnRlbnQ6IG1ldGFEZXNjcmlwdGlvbiB9LFxyXG5cdFx0XHRcdHsgcHJvcGVydHk6IGBvZzp0eXBlYCwgY29udGVudDogYHdlYnNpdGVgIH0sXHJcblx0XHRcdFx0eyBuYW1lOiBgdHdpdHRlcjpjYXJkYCwgY29udGVudDogYHN1bW1hcnlgIH0sXHJcblx0XHRcdFx0eyBuYW1lOiBgdHdpdHRlcjp0aXRsZWAsIGNvbnRlbnQ6IG1ldGFUaXRsZSB9LFxyXG5cdFx0XHRcdHsgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLCBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24gfSxcclxuXHRcdFx0XS5jb25jYXQobWV0YSl9XHJcblx0XHRcdGxpbms9e1t7IHJlbDogJ2ljb24nLCB0eXBlOiAnaW1hZ2UvcG5nJywgaHJlZjogJ2Zhdmljb24nIH1dfVxyXG5cdFx0XHRzY3JpcHQ9e1tcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0eXBlOiAnYXBwbGljYXRpb24vbGQranNvbicsXHJcblx0XHRcdFx0XHRpbm5lckhUTUw6IEpTT04uc3RyaW5naWZ5KHJpY2hyZXN1bHQpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF19XHJcblx0XHQvPlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCB7IFNFUlZJQ0VfVVJMIH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VQb3N0ID0gYXN5bmMgKHBhdGgsIHBheWxvYWQsIGhlYWRlcnMgPSBudWxsKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke1NFUlZJQ0VfVVJMfS8ke3BhdGh9YCwgcGF5bG9hZCwge1xyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlR2V0ID0gYXN5bmMgKHBhdGgsIHBheWxvYWQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtTRVJWSUNFX1VSTH0vJHtwYXRofWAsIHBheWxvYWQpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vUHJpdmF0ZVJvdXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TZW8nO1xyXG5leHBvcnQgKiBmcm9tICcuL3NldEF1dGhUb2tlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBdXRoVG9rZW4gPSAodG9rZW4pID0+IHtcclxuICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgaWYgKHRva2VuKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEpXVCAke3Rva2VufWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlbGV0ZSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHNjcm9sbFRvID0gKGVsZW1lbnQpID0+IHtcclxuXHRpc0NsaWVudCAmJlxyXG5cdFx0d2luZG93LnNjcm9sbCh7XHJcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0dG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcclxuXHRcdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzQ2xpZW50ID1cclxuXHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPyB0cnVlIDogZmFsc2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRGVsZXRlLCBVcGRhdGUsIEFkZCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucyc7XHJcblxyXG5jb25zdCBUb29sdGlwV3JhcHBlciA9ICh7IHRpdGxlLCBwb3NpdGlvbiwgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8VG9vbHRpcCB0aXRsZT17dGl0bGV9IHBvc2l0aW9uPXtwb3NpdGlvbn0gdHJpZ2dlcj0nbW91c2VlbnRlcic+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvVG9vbHRpcD5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgQWRtaW5CdXR0b25zID0gKHsgdHlwZSwgdXJsLCBoYW5kbGVyLCBpc0FkbWluLCBkYXRhID0ge30gfSkgPT5cclxuXHRpc0FkbWluID8gKFxyXG5cdFx0PFRvb2x0aXBXcmFwcGVyIHRpdGxlPXtgJHt0eXBlfSBcIiR7ZGF0YS5uYW1lfVwiYH0gcG9zaXRpb249eyd0b3AnfT5cclxuXHRcdFx0PEFkbWluQnV0dG9uc1dyYXBwZXJcclxuXHRcdFx0XHR0eXBlPXt0eXBlfVxyXG5cdFx0XHRcdHVybD17dXJsfVxyXG5cdFx0XHRcdGhhbmRsZXI9e2hhbmRsZXJ9XHJcblx0XHRcdFx0ZGF0YT17ZGF0YX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvVG9vbHRpcFdyYXBwZXI+XHJcblx0KSA6XHJcblx0XHQ8QWRtaW5CdXR0b25zV3JhcHBlclxyXG5cdFx0XHR0eXBlPXtcIk5vbmVcIn1cclxuXHRcdFx0dXJsPXt1cmx9XHJcblx0XHRcdGhhbmRsZXI9e2hhbmRsZXJ9XHJcblx0XHRcdGRhdGE9e2RhdGF9XHJcblx0XHQvPlxyXG5cdDtcclxuXHJcbmNvbnN0IEFkbWluQnV0dG9uc1dyYXBwZXIgPSAoeyB0eXBlLCB1cmwsIGhhbmRsZXIsIGRhdGEgfSkgPT4ge1xyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSAnQWRkJzpcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8TGluayB0bz17dXJsfT5cclxuXHRcdFx0XHRcdDxBZGQgc2l6ZT0nMjAnIGNvbG9yPScjMDAwJyAvPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0KTtcclxuXHJcblx0XHRjYXNlICdFZGl0JzpcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0dG89e3tcclxuXHRcdFx0XHRcdFx0cGF0aG5hbWU6IHVybCxcclxuXHRcdFx0XHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUsXHJcblx0XHRcdFx0XHRcdFx0aXNMb2NrZWQ6IGRhdGEubG9ja2VkLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHQ8VXBkYXRlIHNpemU9JzIwJyBjb2xvcj0nIzAwMCcgLz5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0Y2FzZSAnRGVsZXRlJzpcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgb3V0bGluZTogXCJub25lXCIgfX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0aGFuZGxlcihkYXRhKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXQtdG9waWMtbW9kYWwtdG9nZ2xlJz5cclxuXHRcdFx0XHRcdDxEZWxldGUgc2l6ZT0nMjAnIGNvbG9yPSdjcmltc29uJyAvPlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiA8YnV0dG9uIGhyZWY9XCIjXCJcclxuXHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgb3V0bGluZTogXCJub25lXCIsIH19XHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0LXRvcGljLW1vZGFsLXRvZ2dsZSc+XHJcblx0XHRcdFx0PERlbGV0ZSBzaXplPScwJyBjb2xvcj0nJyAvPlxyXG5cdFx0XHQ8L2J1dHRvbj47XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdGlzQWRtaW46IHN0YXRlLmF1dGguaXNBZG1pbixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoQWRtaW5CdXR0b25zKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBMb2NrLCBSZWFkLCBVbmxvY2sgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xyXG5cclxuY29uc3QgSW5uZXJEaXYgPSAoeyBoYW5kbGVyLCBjaGlsZHJlbiwgZGFyaywgYmcgfSkgPT5cclxuXHRjaGlsZHJlbiA/IChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uICR7ZGFyayAmJiAnZGFyayd9YH1cclxuXHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgJHtiZyAmJiAnYmcnfWAgfX1cclxuXHRcdFx0b25DbGljaz17aGFuZGxlciA/IGhhbmRsZXIgOiAoZSkgPT4gY29uc29sZS5sb2coZSwgaGFuZGxlcil9PlxyXG5cdFx0XHQ8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxyXG5cdFx0XHQ8c3ZnPlxyXG5cdFx0XHRcdDxwb2x5bGluZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdvMSdcclxuXHRcdFx0XHRcdHBvaW50cz0nMCAwLCAxNTAgMCwgMTUwIDU1LCAwIDU1LCAwIDAnPjwvcG9seWxpbmU+XHJcblx0XHRcdFx0PHBvbHlsaW5lXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J28yJ1xyXG5cdFx0XHRcdFx0cG9pbnRzPScwIDAsIDE1MCAwLCAxNTAgNTUsIDAgNTUsIDAgMCc+PC9wb2x5bGluZT5cclxuXHRcdFx0PC9zdmc+XHJcblx0XHQ8L2Rpdj5cclxuXHQpIDogKFxyXG5cdFx0PD5cclxuXHRcdFx0eycgICAnfVxyXG5cdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHQ8UmVhZCBzaXplPXsxOX0gLz5cclxuXHRcdFx0PC9zcGFuPlxyXG5cdFx0PC8+XHJcblx0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgdXJsLCBkYXJrLCBiZywgaXNCdXR0b24sIGhhbmRsZXIgfSkgPT4ge1xyXG5cdHJldHVybiB0eXBlb2YgaXNCdXR0b24gPT0gJ3VuZGVmaW5lZCcgPyAoXHJcblx0XHQ8TGluayB0bz17dXJsICYmIHVybH0+XHJcblx0XHRcdDxJbm5lckRpdiBkYXJrPXtkYXJrfSBiZz17Ymd9PlxyXG5cdFx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0PC9Jbm5lckRpdj5cclxuXHRcdDwvTGluaz5cclxuXHQpIDogKFxyXG5cdFx0PElubmVyRGl2IGRhcms9e2Rhcmt9IGJnPXtiZ30gaGFuZGxlcj17aGFuZGxlcn0+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvSW5uZXJEaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NrQnV0dG9uID0gKHsgaXNMb2NrZWQsIGhhbmRsZXIgfSkgPT4ge1xyXG5cdHJldHVybiA8c3BhbiBvbkNsaWNrPXtoYW5kbGVyfT57aXNMb2NrZWQgPyA8TG9jayAvPiA6IDxVbmxvY2sgLz59PC9zcGFuPjtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9BZG1pbkJ1dHRvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL1VzZXJCdXR0b25zJztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRm9vdGVyU29jaWFsTWVkaWEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhXCI+XHJcbiAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vZ21haWwuY29tXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMDMxNjEvZ21haWwtaWNvbi1sb2dvLnN2Z1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xODM2MDgvdHdpdHRlci5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9iaWhhbmkucHJpeWFcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTExMTk5L2luc3RhZ3JhbS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMjE3NzUzL2dpdGh1Yi5zdmdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ2l0aHViXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRGb290ZXJNZXNzYWdlKClcclxuICB9KVxyXG5cclxuICBjb25zdCBzZXRGb290ZXJNZXNzYWdlID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRNZXNzYWdlKCdFbnRlciBZb3VyIEVtYWlsIGhlcmUgdG8gc3Vic2NyaWJlIGZvciBOZXdzbGV0dGVyJykgfVxyXG4gICAgLCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRcIj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1jb2xcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPkNvZGVycyBHYWxhPC9zcGFuPlxyXG4gICAgICAgICAgICA8Rm9vdGVyU29jaWFsTWVkaWEgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmlnaHRzLXRleHRcIj5cclxuICAgICAgICAgICAgICAmY29weTsgMjAyMCBDb2RlcnMgR2FsYSAsIEFsbCBSaWdodHMgUmVzZXJ2ZWRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNvbFwiPlxyXG4gICAgICAgICAgICA8aDE+T3VyIE5ld3NsZXR0ZXI8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIiBmb3JtIG5ld3NsZXR0ZXItZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGJcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIEVtYWlsXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuXCIgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENvbCwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0RGlzcGxheU1vZGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3VpJztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuXHJcbi8vID0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPVxyXG5pbXBvcnQgU2lnbmVkT3V0TGlua3MgZnJvbSAnLi9TaWduZWRPdXRMaW5rcyc7XHJcbmltcG9ydCBTaWduZWRJbkxpbmtzIGZyb20gJy4vU2lnbmVkSW5MaW5rcyc7XHJcbi8vID0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPVxyXG5cclxuLy8gbG9nbyBpbXBvcnRzXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvY2dUcmFuc3BhcmVudC5QTkcnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHsgYXV0aCwgdWksIHNldERpc3BsYXlNb2RlIH0pID0+IHtcclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Y29uc3QgW25hdmJhckV4cGFuZGVkLCBzZXRuYXZiYXJFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3N3aXRjaGVkLCBzZXRzd2l0Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCh1aS5kaXNwbGF5TW9kZSk7XHJcblx0XHRjb25zb2xlLmxvZyh1aS5kaXNwbGF5TW9kZSk7XHJcblx0XHRpZiAodWkuZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xyXG5cdFx0XHRzZXRzd2l0Y2hlZCh0cnVlKTtcclxuXHRcdH1cclxuXHR9LCBbc2V0c3dpdGNoZWQsIHVpLmRpc3BsYXlNb2RlXSk7XHJcblxyXG5cdC8vIEdldHRpbmcgdGhlIGN1cnJlbnQgbW9kZSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuXHRpZiAoaXNDbGllbnQpIHtcclxuXHRcdGxldCBtb2RlID0gJ2xpZ2h0JztcclxuXHJcblx0XHRtb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKTtcclxuXHJcblx0XHRpZiAobW9kZSA9PT0gJ2RhcmsnKSB7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9cclxuXHJcblx0Ly8gY29uc3QgbGlua3MgPSA8U2lnbmVkT3V0TGlua3MgLz47XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmF2aWdhdGlvbi13cmFwIGJnLWxpZ2h0IHN0YXJ0LWhlYWRlciBzdGFydC1zdHlsZSc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdDxBY2NvcmRpb25cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17aXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPj0gNzY3ID8gbnVsbCA6ICdkcm9wZG93bi1hY2NvcmRpb24nfT5cclxuXHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdDxDb2w+XHJcblx0XHRcdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1saWdodCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz0nLyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IGlzQ2xpZW50ICYmIHdpbmRvdy5pbm5lckhlaWdodCA+PSA3NjcgPyAnMnJlbScgOiAnMS4ycmVtJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2LWxvZ28nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtMb2dvfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nc3dpdGNoJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RGlzcGxheU1vZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRzd2l0Y2hlZCghc3dpdGNoZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bzd2l0Y2ggZmxvYXQtcmlnaHQgJHtzd2l0Y2hlZCA/ICdzd2l0Y2hlZCcgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVpLmRpc3BsYXlNb2RlID09PSAnZGFyaycgPyAnIzExMScgOiAnI2YxZjFmMScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0nY2lyY2xlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21vZGUtaWNvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMjBweCcgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVpLmRpc3BsYXlNb2RlID09PSAnZGFyaydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzMxNTgvbW9vbi5zdmcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy84MzcyNi9zdW4uc3ZnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PScnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwb2ludHMtYm94ICc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwb2ludHMtdGV4dCc+IFBvaW50cyA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIkNHIFBvaW50c1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzcxNS83MTU3MDkuc3ZnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BvaW50cy1pbWcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj4ge2F1dGgudXNlciAmJiBhdXRoLnVzZXIucG9pbnRzfSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpZ25lZC1saW5rcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHthdXRoLmlzQXV0aGVudGljYXRlZCAmJiBhdXRoLmlzQXV0aGVudGljYXRlZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNpZ25lZEluTGlua3MgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2lnbmVkT3V0TGlua3MgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uVG9nZ2xlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2LWJ0bidcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldG5hdmJhckV4cGFuZGVkKCFuYXZiYXJFeHBhbmRlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFzPXtCdXR0b259XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2xpbmsnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50S2V5PSc1Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdmJhci10b2dnbGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRhcmdldD0nI25hdmJhclN1cHBvcnRlZENvbnRlbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXtuYXZiYXJFeHBhbmRlZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdUb2dnbGUgbmF2aWdhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlci1pY29uJz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uQ29sbGFwc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPScgJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRLZXk9JzUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHthdXRoLnVzZXIgJiYgYXV0aC51c2VyLnVzZXJJZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTaWduZWRJbkxpbmtzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTaWduZWRPdXRMaW5rcyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcblx0XHRcdFx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0PC9BY2NvcmRpb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuLy8gICBhdXRoOiBzdGF0ZS5hdXRoLFxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRhdXRoOiBzdGF0ZS5hdXRoLFxyXG5cdFx0dWk6IHN0YXRlLnVpLFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzZXREaXNwbGF5TW9kZSB9KShOYXZiYXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBTaWduZWRJbkxpbmtzID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPSduYXZiYXItbmF2IG1sLWF1dG8gcHktNCBweS1tZC0wJz5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00Jz5cclxuXHRcdFx0XHRcdDxOYXZMaW5rIHRvPScvaG9tZScgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcblx0XHRcdFx0XHRcdEhvbWVcclxuXHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTQnPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmsgdG89Jy9hYm91dCcgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcblx0XHRcdFx0XHRcdEFib3V0XHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00Jz5cclxuXHRcdFx0XHRcdDxOYXZMaW5rXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2LWxpbmsgJ1xyXG5cdFx0XHRcdFx0XHR0bz0nL2xlYXJuJ1xyXG5cdFx0XHRcdFx0XHRyb2xlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJz5cclxuXHRcdFx0XHRcdFx0TGVhcm5cclxuXHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz48L2Rpdj5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00Jz5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0aHJlZj0nLydcclxuXHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1saW5rJz5cclxuXHRcdFx0XHRcdFx0TG9nT3V0XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduZWRJbkxpbmtzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBTaWduZWRPdXRMaW5rcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0byBweS00IHB5LW1kLTBcIj5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxyXG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvaG9tZVwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00XCI+XHJcbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxyXG4gICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgdG89XCIvbGVhcm5cIlxyXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTGVhcm5cclxuICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPjwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTRcIj5cclxuICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgIHRvPVwiL2xvZ2luXCJcclxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPjwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmVkT3V0TGlua3M7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vQnV0dG9ucyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRm9vdGVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVsb2FkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLXNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItYm94XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyMVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXIyXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlcjNcIj48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlciIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgYXJ0aWNsZXM6IFtdIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcnRpY2xlUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0Y29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcblxyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX0FSVElDTEUnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRvcGljczogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlICdHRVRfQVJUSUNMRSc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2VsZWN0ZWRBcnRpY2xlOiBwYXlsb2FkLmFydGljbGUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdHRVRfQUxMX0FSVElDTEVTJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhcnRpY2xlczogcGF5bG9hZC5hcnRpY2xlcyxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ0NMRUFSX0FSVElDTEUnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlbGVjdGVkQXJ0aWNsZToge30sXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSAnQUREX0FSVElDTEVfRVJST1InOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRMT0dJTl9TVUNDRVNTLFxyXG5cdExPR0lOX0ZBSUwsXHJcblx0UkVHSVNURVJfU1VDQ0VTUyxcclxuXHRSRUdJU1RFUl9GQUlMLFxyXG5cdFVTRVJfTE9BREVELFxyXG5cdEFVVEhfRVJST1IsXHJcblx0TE9HT1VULFxyXG5cdFNFTkRfUkVTRVRfRU1BSUwsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0dG9rZW46IGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpLFxyXG5cdGlzQXV0aGVudGljYXRlZDogbnVsbCxcclxuXHRsb2FkaW5nOiBmYWxzZSxcclxuXHR1c2VyOiBudWxsLFxyXG5cdGlzQWRtaW46IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0Y29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcblxyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSBVU0VSX0xPQURFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR1c2VyOiBwYXlsb2FkLFxyXG5cdFx0XHRcdGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcclxuXHRcdFx0XHRpc0FkbWluOiBwYXlsb2FkLnJvbGUgPT09IDAgPyBmYWxzZSA6IHRydWUsXHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFJFR0lTVEVSX1NVQ0NFU1M6XHJcblx0XHRjYXNlIExPR0lOX1NVQ0NFU1M6XHJcblx0XHRcdGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHBheWxvYWQudG9rZW4pO1xyXG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgcGF5bG9hZC51c2VySWQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4ucGF5bG9hZCxcclxuXHRcdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFJFR0lTVEVSX0ZBSUw6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIExPR0lOX0ZBSUw6XHJcblx0XHRjYXNlIEFVVEhfRVJST1I6XHJcblx0XHRcdGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJyk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dG9rZW46IG51bGwsXHJcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHR1c2VySWQ6IG51bGwsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIExPR09VVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0b2tlbjogbnVsbCxcclxuXHRcdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBTRU5EX1JFU0VUX0VNQUlMOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdC4uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSAnU0VUX0FVVEhfTE9BREVSJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aCc7XHJcbmltcG9ydCBzcGVjaWFsaXR5IGZyb20gJy4vc3BlY2lhbGl0eSc7XHJcbmltcG9ydCB0b3BpYyBmcm9tICcuL3RvcGljJztcclxuaW1wb3J0IGFydGljbGUgZnJvbSAnLi9hcnRpY2xlJztcclxuaW1wb3J0IHVpIGZyb20gJy4vdWknO1xyXG5pbXBvcnQgdmlkZW8gZnJvbSAnLi92aWRlbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdGF1dGgsXHJcblx0c3BlY2lhbGl0eSxcclxuXHR0b3BpYyxcclxuXHRhcnRpY2xlLFxyXG5cdHVpLFxyXG5cdHZpZGVvLFxyXG59KTtcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHNwZWNpYWxpdGllczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGVjaWFsaXR5UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0Y29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcblxyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSAnR0VUX1NQRUNJQUxJVElFUyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3BlY2lhbGl0aWVzOiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnR0VUX1NQRUNJQUxJVFknOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNwZWNpYWxpdHk6IHBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdDTEVBUl9TUEVDSUFMSVRZJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzcGVjaWFsaXR5OiB7fSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ0dFVF9TUEVDSUFMSVRJRVNfRVJST1InOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ0dFVF9TUEVDSUFMSVRZX0VSUk9SJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHR0b3BpY3M6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9waWNSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuXHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlICdHRVRfVE9QSUNTJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0b3BpY3M6IHBheWxvYWQsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSAnR0VUX1RPUElDU19FUlJPUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0b3BlblRvcGljczogW10sXHJcblx0ZGlzcGxheU1vZGU6XHJcblx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpXHJcblx0XHRcdD8gaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKVxyXG5cdFx0XHQ6ICdsaWdodCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1aVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSAnU0VUX09QRU5fVE9QSUNTJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRvcGVuVG9waWNzOiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnU0VUX0RJU1BMQVlfTU9ERSc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGlzcGxheU1vZGU6IHBheWxvYWQsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0c2VsZWN0ZWRWaWRlbzogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0Y29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcblxyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREX1ZJREVPJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0b3BpY3M6IHBheWxvYWQsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSAnR0VUX1ZJREVPJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWxlY3RlZFZpZGVvOiBwYXlsb2FkLnZpZGVvLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnU0VMRUNUX1ZJREVPJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWxlY3RlZFZpZGVvOiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnQ0xFQVJfVklERU8nOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlbGVjdGVkVmlkZW86IHt9LFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ0FERF9WSURFT19FUlJPUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuY29uc3QgUHJvZmlsZUNhcmQgPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cInByb2ZpbGUtY2FyZFwiPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxyXG4gICAgICAgIDxoMj5IZWxsbyE8L2gyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJpb1wiPlxyXG4gICAgICAgIDxwPntkYXRhLmJpb308L3A+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucyBsaXN0LXVuc3R5bGVkIGxpc3QtaW5saW5lXCI+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtkYXRhLnBvcnRmb2xpb1VybH0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE4ODk5MC9icm93c2VyLXdlYnNpdGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2RhdGEuaW5zdGFVcmx9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xMTExOTkvaW5zdGFncmFtLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtkYXRhLnR3aXR0ZXJVcmx9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xODM2MDgvdHdpdHRlci5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17ZGF0YS5naXRodWJVcmx9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8yMTc3NTMvZ2l0aHViLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnaXRodWJcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hc2lkZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQWJvdXRVcyA9ICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBteUZ1bmN0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE1NTApIHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZS1jYXJkXCIpXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtY2FyZC1hbmltXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11cy1jb250YWluZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzLWhlYWRpbmdcIj5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgQWJvdXQgPHNwYW4+VXM8L3NwYW4+XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdXMtdGV4dFwiPlxyXG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVvZCBkb2xvclxyXG4gICAgICAgICAgZG9sb3JlIG9kaXQsIG5lcXVlIGl0YXF1ZSBpdXJlIHF1YXMgbW9sbGl0aWEgbmloaWwgY3VtcXVlIHJlbSBoYXJ1bVxyXG4gICAgICAgICAgY29uc2VxdXVudHVyIGNvbnNlY3RldHVyLiBBdXRlbSBmdWdpdCwgZG9sb3JpYnVzIHNpbnQgZW5pbSBlcnJvciBzZXF1aVxyXG4gICAgICAgICAgcXVvIHJlbSBtaW5pbWEgbWFnbmkgZXhjZXB0dXJpIGV4cGVkaXRhIG1vbGxpdGlhIHJlY3VzYW5kYWUgaGFydW1cclxuICAgICAgICAgIGFsaWFzIHJlcGVsbGVuZHVzLCBzaXQgdm9sdXB0YXRlIGZhY2lsaXMgc2ltaWxpcXVlIGF0IGluIGFzcGVyaW9yZXNcclxuICAgICAgICAgIHN1bnQgaW5hbSBzYWVwZSBxdWkuIE5pc2kgbWluaW1hIGlwc2EgaWxsbyB0ZW1wb3JlIHF1b2QgZW5pbSBldW1cclxuICAgICAgICAgIHF1aWRlbT9cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jYXJkc1wiPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIGxnPXs2fT5cclxuICAgICAgICAgICAgPFByb2ZpbGVDYXJkXHJcbiAgICAgICAgICAgICAgZGF0YT17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQcml5YVwiLFxyXG4gICAgICAgICAgICAgICAgcG9ydGZvbGlvVXJsOiBcImh0dHBzOi8va25vdy1wcml5YS1iaWhhbmkudmVyY2VsLmFwcFwiLFxyXG4gICAgICAgICAgICAgICAgaW5zdGFVcmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9iaWhhbmkucHJpeWFcIixcclxuICAgICAgICAgICAgICAgIGdpdGh1YlVybDogXCJodHRwczovL3d3dy5naXRodWIuY29tL1ByaXlhQmloYW5pXCIsXHJcbiAgICAgICAgICAgICAgICB0d2l0dGVyVXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vcF9iaWhhbmlcIixcclxuICAgICAgICAgICAgICAgIGJpbzpcclxuICAgICAgICAgICAgICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VudCB0ZW1wb3JhIGV2ZW5pZXQgcXVhZSBuZXF1ZSBoaWMgZG9sb3JpYnVzIHZvbHVwdGF0aWJ1cyBpbmNpZHVudCBxdWlhIGZhY2lsaXMgYmxhbmRpdGlpcy5cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCBsZz17Nn0+XHJcbiAgICAgICAgICAgIDxQcm9maWxlQ2FyZFxyXG4gICAgICAgICAgICAgIGRhdGE9e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiS2FydGlrXCIsXHJcbiAgICAgICAgICAgICAgICBwb3J0Zm9saW9Vcmw6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBpbnN0YVVybDogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2JpaGFuaS5wcml5YVwiLFxyXG4gICAgICAgICAgICAgICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20va2FydGlrMThnXCIsXHJcbiAgICAgICAgICAgICAgICB0d2l0dGVyVXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vR2thYXJ0aWtcIixcclxuICAgICAgICAgICAgICAgIGJpbzpcclxuICAgICAgICAgICAgICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VudCB0ZW1wb3JhIGV2ZW5pZXQgcXVhZSBuZXF1ZSBoaWMgZG9sb3JpYnVzIHZvbHVwdGF0aWJ1cyBpbmNpZHVudCBxdWlhIGZhY2lsaXMgYmxhbmRpdGlpcy5cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0VXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFF1ZXN0aW9ucyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicy1zLTFcIj5cclxuICAgICAgICA8aDI+XHJcbiAgICAgICAgICBBYm91dCA8c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+Q29kZXJzIEdhbGE8L3NwYW4+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0LWRpblwiPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIFdoYXQgaXMgPHNwYW4gY2xhc3NOYW1lPVwiXCI+Q29kZXJzIEdhbGE8L3NwYW4+P1xyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICAgIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pIGRvbG9yIGV4cGxpY2FibyBvcHRpb1xyXG4gICAgICAgICAgZnVnaWF0IHF1byBudW1xdWFtISBNb2xsaXRpYSwgZmFjaWxpcyBhcGVyaWFtIG5paGlsIHZvbHVwdGF0ZVxyXG4gICAgICAgICAgY29uc2VxdXVudHVyIGRvbG9yZSwgaGljIGFiIHRvdGFtIGJsYW5kaXRpaXMgbG9yZW0zMCBhY2N1c2FudGl1bSxcclxuICAgICAgICAgIG1hZ25hbSBvZGl0IGV1bT9cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoeS1kaW5cIj5cclxuICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgV2h5IDxzcGFuIGNsYXNzTmFtZT1cIlwiPkNvZGVycyBHYWxhPC9zcGFuPj9cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBkb2xvciBleHBsaWNhYm8gb3B0aW9cclxuICAgICAgICAgIGZ1Z2lhdCBxdW8gbnVtcXVhbSEgTW9sbGl0aWEsIGZhY2lsaXMgYXBlcmlhbSBuaWhpbCB2b2x1cHRhdGVcclxuICAgICAgICAgIGNvbnNlcXV1bnR1ciBkb2xvcmUsIGhpYyBhYiB0b3RhbSBibGFuZGl0aWlzIGFjY3VzYW50aXVtLCBtYWduYW0gb2RpdFxyXG4gICAgICAgICAgZXVtP1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC1kaW5cIj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICBXaGF0IGlzIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkNvZGVycyBHYWxhPC9zcGFuPj9cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBkb2xvciBleHBsaWNhYm8gb3B0aW9cclxuICAgICAgICAgIGZ1Z2lhdCBxdW8gbnVtcXVhbSEgTW9sbGl0aWEsIGZhY2lsaXMgYXBlcmlhbSBuaWhpbCB2b2x1cHRhdGVcclxuICAgICAgICAgIGNvbnNlcXV1bnR1ciBkb2xvcmUsIGhpYyBhYiB0b3RhbSBibGFuZGl0aWlzIGxvcmVtMzAgYWNjdXNhbnRpdW0sXHJcbiAgICAgICAgICBtYWduYW0gb2RpdCBldW0/XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9ucztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBBbGwgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkX19jb2wtM1wiPlxyXG4gICAgICAgICAgICB7YXJ0aWNsZXMgJiZcclxuICAgICAgICAgICAgICAgIGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEFydGljbGVJZCA9IGFydGljbGUgJiYgYXJ0aWNsZS5faWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19pdGVtLW1kXCIga2V5PXtBcnRpY2xlSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvYmxvZy9yZWFkLyR7YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiLVwiKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS50aHVtYm5haWxVcmwgPyBhcnRpY2xlLnRodW1ibmFpbFVybCA6IFwiaHR0cHM6Ly9jb2RlcnNnYWxhLmNvbS9zdGF0aWMvbWVkaWEvY2dUcmFuc3BhcmVudC42YTljMzQ5Ni5QTkdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9faW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUgJiYgbW9tZW50KGFydGljbGUuY3JlYXRlZEF0KS5mb3JtYXQoXCJERCBNTSBZWVlZXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9fdGl0bGVcIj57YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmlkX19pdGVtX19hdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeSBDb2RlcnNHYWxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBGZWF0dXJlZCA9ICh7IGFydGljbGVzIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0e2FydGljbGVzICYmXHJcblx0XHRcdFx0YXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoYXJ0aWNsZSAmJiBhcnRpY2xlLmZlYXR1cmVkID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGFydGljbGUpO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBBcnRpY2xlSWQgPSBhcnRpY2xlICYmIGFydGljbGUuX2lkO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkX19pdGVtLXNtJyBrZXk9e2FydGljbGUgJiYgYXJ0aWNsZS5pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0bz17YC9ibG9nL3JlYWQvJHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcnRpY2xlICYmIGFydGljbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgJy0nKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdncmlkX19pdGVtX19jYXRlZ29yeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YXJ0aWNsZSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb21lbnQoYXJ0aWNsZS5jcmVhdGVkQXQpLmZvcm1hdCgnREQgTU0gWVlZWScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdncmlkX19pdGVtX190aXRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2dyaWRfX2l0ZW1fX2F1dGhvcic+QnkgQ29kZXJzR2FsYTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJ0aWNsZS50aHVtYm5haWxVcmxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGFydGljbGUudGh1bWJuYWlsVXJsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnaHR0cHM6Ly9jb2RlcnNnYWxhLmNvbS9zdGF0aWMvbWVkaWEvY2dUcmFuc3BhcmVudC42YTljMzQ5Ni5QTkcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2dyaWRfX2l0ZW1fX2ltZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0fSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IExhdGVzdCA9ICh7IGFydGljbGUgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiLVwiKSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19pdGVtLWxnXCI+YFxyXG4gICAgICAgICAgICB7YXJ0aWNsZSAmJiA8TmF2TGluayB0bz17YC9ibG9nL3JlYWQvJHthcnRpY2xlICYmIGFydGljbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgXCItXCIpfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9e2FydGljbGUudGh1bWJuYWlsVXJsID8gYXJ0aWNsZS50aHVtYm5haWxVcmwgOiBcImh0dHBzOi8vY29kZXJzZ2FsYS5jb20vc3RhdGljL21lZGlhL2NnVHJhbnNwYXJlbnQuNmE5YzM0OTYuUE5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9faW1nXCIgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9faW1nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2NhdGVnb3J5XCI+IHthcnRpY2xlICYmIG1vbWVudChhcnRpY2xlLmNyZWF0ZWRBdCkuZm9ybWF0KFwiREQgTU0gWVlZWVwiKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9fdGl0bGVcIj57YXJ0aWNsZS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmlkX19pdGVtX19hdXRob3JcIj5CeSBDb2RlcnNHYWxhPC9wPlxyXG4gICAgICAgICAgICA8L05hdkxpbms+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhdGVzdDtcclxuIiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJztcclxuLy8gaW1wb3J0IFJlYWN0UXVpbGwsIHsgUXVpbGwgfSBmcm9tICdyZWFjdC1xdWlsbCc7XHJcbi8vIGxldCBCbG9ja0VtYmVkID0gUXVpbGwuaW1wb3J0KCdibG90cy9ibG9jay9lbWJlZCcpO1xyXG4vLyBsZXQgSW5saW5lID0gUXVpbGwuaW1wb3J0KCdibG90cy9pbmxpbmUnKTtcclxuLy8gaGxqcy5jb25maWd1cmUoe1xyXG4vLyAgIGxhbmd1YWdlczogWydqYXZhc2NyaXB0JywgJ3B5dGhvbicsICdodG1sJywgJ2NzcyddLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IEN1c3RvbUJ1dHRvbiA9ICgpID0+IChcclxuLy8gICA8aW1nXHJcbi8vICAgICBzdHlsZT17eyB3aWR0aDogJzIwcHgnIH19XHJcbi8vICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93Lzc3NTg0L2ltYWdlLnN2Z1wiXHJcbi8vICAgICBhbHQ9XCJcIlxyXG4vLyAgIC8+XHJcbi8vICk7XHJcblxyXG4vLyAvLyBjb25zdCBDb2RlTGluZSA9ICgpID0+IChcclxuLy8gLy8gICA8aW1nXHJcbi8vIC8vICAgICBzdHlsZT17eyB3aWR0aDogJzIwcHgnIH19XHJcbi8vIC8vICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzI5NDE0NS9jb2RlLnN2Z1wiXHJcbi8vIC8vICAgICBhbHQ9XCJcIlxyXG4vLyAvLyAgIC8+XHJcbi8vIC8vICk7XHJcblxyXG4vLyBjb25zdCBTaXplID0gUXVpbGwuaW1wb3J0KCdmb3JtYXRzL3NpemUnKTtcclxuLy8gU2l6ZS53aGl0ZWxpc3QgPSBbXHJcbi8vICAgJzEnLFxyXG4vLyAgICcyJyxcclxuLy8gICAnNCcsXHJcbi8vICAgJzYnLFxyXG4vLyAgICc4JyxcclxuLy8gICAnMTAnLFxyXG4vLyAgICcxMicsXHJcbi8vICAgJzE0JyxcclxuLy8gICAnMTYnLFxyXG4vLyAgICcyMCcsXHJcbi8vICAgJzI0JyxcclxuLy8gICAnMjYnLFxyXG4vLyAgICczMCcsXHJcbi8vIF07XHJcbi8vIFF1aWxsLnJlZ2lzdGVyKFNpemUsIHRydWUpO1xyXG5cclxuLy8gY2xhc3MgaW5saW5lQ29kZUJsb3QgZXh0ZW5kcyBJbmxpbmUgeyB9XHJcbi8vIGlubGluZUNvZGVCbG90LmJsb3ROYW1lID0gJ2lubGluZUNvZGUnO1xyXG4vLyBpbmxpbmVDb2RlQmxvdC50YWdOYW1lID0gJ2NvZGUnO1xyXG5cclxuLy8gY2xhc3MgSW1hZ2VCbG90IGV4dGVuZHMgQmxvY2tFbWJlZCB7XHJcbi8vICAgc3RhdGljIGNyZWF0ZSh2YWx1ZSkge1xyXG4vLyAgICAgbGV0IG5vZGUgPSBzdXBlci5jcmVhdGUoKTtcclxuLy8gICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhbHQnLCB2YWx1ZS5hbHQpO1xyXG4vLyAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZhbHVlLnVybCk7XHJcbi8vICAgICBub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB2YWx1ZS5jbGFzcyk7XHJcbi8vICAgICByZXR1cm4gbm9kZTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHN0YXRpYyB2YWx1ZShub2RlKSB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBhbHQ6IG5vZGUuZ2V0QXR0cmlidXRlKCdhbHQnKSxcclxuLy8gICAgICAgdXJsOiBub2RlLmdldEF0dHJpYnV0ZSgnc3JjJyksXHJcbi8vICAgICAgIGNsYXNzOiBub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSxcclxuLy8gICAgIH07XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIEltYWdlQmxvdC5ibG90TmFtZSA9ICdpbWFnZSc7XHJcbi8vIEltYWdlQmxvdC50YWdOYW1lID0gJ2ltZyc7XHJcbi8vIFF1aWxsLnJlZ2lzdGVyKEltYWdlQmxvdCk7XHJcbi8vIFF1aWxsLnJlZ2lzdGVyKGlubGluZUNvZGVCbG90KTtcclxuXHJcbi8vIGNvbnN0IGluc2VydEltYWdlID0gKCkgPT4ge1xyXG4vLyAgIGxldCB1cmwgPSBwcm9tcHQoJ0VudGVyIGxpbmsgVVJMJyk7XHJcbi8vICAgbGV0IGFsdCA9IHByb21wdCgnRW50ZXIgbGluayBhbHQnKTtcclxuLy8gICBsZXQgY2xhcyA9IHByb21wdCgnRW50ZXIgY2xhc3MgTmFtZScpO1xyXG4vLyAgIGxldCByYW5nZSA9IHRoaXMucXVpbGwuZ2V0U2VsZWN0aW9uKHRydWUpO1xyXG4vLyAgIGNvbnNvbGUubG9nKFF1aWxsLnNvdXJjZXMpO1xyXG4vLyAgIHRoaXMucXVpbGwuaW5zZXJ0VGV4dChyYW5nZS5pbmRleCwgJ1xcbicsIFF1aWxsLnNvdXJjZXMuVVNFUik7XHJcbi8vICAgdGhpcy5xdWlsbC5pbnNlcnRFbWJlZChcclxuLy8gICAgIHJhbmdlLmluZGV4ICsgMSxcclxuLy8gICAgICdpbWFnZScsXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGFsdDogYWx0LFxyXG4vLyAgICAgICB1cmw6IHVybCxcclxuLy8gICAgICAgY2xhc3M6IGNsYXMsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgUXVpbGwuc291cmNlcy5VU0VSXHJcbi8vICAgKTtcclxuLy8gICB0aGlzLnF1aWxsLnNldFNlbGVjdGlvbihyYW5nZS5pbmRleCArIDIsIFF1aWxsLnNvdXJjZXMuU0lMRU5UKTtcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IGluc2VydElubGluZUNvZGUgPSAoZSkgPT4ge1xyXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh0aGlzLnF1aWxsKTtcclxuLy8gICAvLyB0aGlzLnF1aWxsLmZvcm1hdChcImlubGluZUNvZGVcIiwgdHJ1ZSk7XHJcbi8vICAgY29uc29sZS5sb2coJ2lubGluZSBjb2RlIGlucycpO1xyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgQ3VzdG9tVG9vbGJhciA9ICgpID0+IChcclxuLy8gICA8ZGl2IGlkPVwidG9vbGJhclwiPlxyXG4vLyAgICAgPHNlbGVjdFxyXG4vLyAgICAgICBjbGFzc05hbWU9XCJxbC1oZWFkZXJcIlxyXG4vLyAgICAgICBkZWZhdWx0VmFsdWU9eycnfVxyXG4vLyAgICAgICBvbkNoYW5nZT17KGUpID0+IGUucGVyc2lzdCgpfVxyXG4vLyAgICAgPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxyXG4vLyAgICAgPC9zZWxlY3Q+XHJcblxyXG4vLyAgICAgPHNlbGVjdCBjbGFzcz1cInFsLWZvbnRcIj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlcmlmXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJtb25vc3BhY2VcIj48L29wdGlvbj5cclxuLy8gICAgIDwvc2VsZWN0PlxyXG5cclxuLy8gICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtc2l6ZVwiPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIjJcIj5cclxuLy8gICAgICAgICAyXHJcbi8vICAgICAgIDwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+ODwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTRcIj4xNDwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTZcIj4xNjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjRcIj4yNDwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjZcIj4yNjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPlxyXG4vLyAgICAgPC9zZWxlY3Q+XHJcblxyXG4vLyAgICAgPHNlbGVjdCBjbGFzcz1cInFsLWFsaWduXCI+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZW50ZXJcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiBzZWxlY3RlZD48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cInJpZ2h0XCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJqdXN0aWZ5XCI+PC9vcHRpb24+XHJcbi8vICAgICA8L3NlbGVjdD5cclxuXHJcbi8vICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLWJhY2tncm91bmRcIj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlZFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ3JlZW5cIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIiM0RjY5RjhcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9yYW5nZVwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwidmlvbGV0XCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjZDBkMWQyXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XHJcbi8vICAgICA8L3NlbGVjdD5cclxuXHJcbi8vICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLWNvbG9yXCI+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjREEwRjQ3XCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjNERDRTFEXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjNEY2OUY4XCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcmFuZ2VcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIiM5OTMzZmZcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIiNkMGQxZDJcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiBzZWxlY3RlZD48L29wdGlvbj5cclxuLy8gICAgIDwvc2VsZWN0PlxyXG5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtYm9sZFwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1pdGFsaWNcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtdW5kZXJsaW5lXCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLXN0cmlrZVwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1ibG9ja3F1b3RlXCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWRpcmVjdGlvblwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1saW5rXCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWltYWdlXCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLXZpZGVvXCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIHZhbHVlPVwib3JkZXJlZFwiIGNsYXNzTmFtZT1cInFsLWxpc3RcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gdmFsdWU9XCJidWxsZXRcIiBjbGFzc05hbWU9XCJxbC1saXN0XCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIHZhbHVlPVwiLTFcIiBjbGFzc05hbWU9XCJxbC1pbmRlbnRcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gdmFsdWU9XCIrMVwiIGNsYXNzTmFtZT1cInFsLWluZGVudFwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1jb2RlLWJsb2NrXCI+PC9idXR0b24+XHJcblxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1pbnNlcnRJbWFnZVwiPlxyXG4vLyAgICAgICA8Q3VzdG9tQnV0dG9uIC8+XHJcbi8vICAgICA8L2J1dHRvbj5cclxuLy8gICA8L2Rpdj5cclxuLy8gKTtcclxuXHJcbi8vIC8qXHJcbi8vICAqIEVkaXRvciBjb21wb25lbnQgd2l0aCBjdXN0b20gdG9vbGJhciBhbmQgY29udGVudCBjb250YWluZXJzXHJcbi8vICAqL1xyXG5cclxuLy8gY2xhc3MgRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4vLyAgICAgc3VwZXIocHJvcHMpO1xyXG4vLyAgICAgdGhpcy5zdGF0ZSA9IHsgZWRpdG9ySHRtbDogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgfTtcclxuLy8gICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGhhbmRsZUNoYW5nZShodG1sKSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgZWRpdG9ySHRtbDogaHRtbCB9KTtcclxuLy8gICAgIHRoaXMucHJvcHMuaGFuZGxlRWRpdG9yKGh0bWwpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmVuZGVyKCkge1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5lZGl0b3JIdG1sKTtcclxuXHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSk7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZWRpdG9yXCI+XHJcbi8vICAgICAgICAgPEN1c3RvbVRvb2xiYXIgLz5cclxuLy8gICAgICAgICA8UmVhY3RRdWlsbFxyXG4vLyAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgbW9kdWxlcz17RWRpdG9yLm1vZHVsZXN9XHJcbi8vICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lZGl0b3JIdG1sIHx8ICcnfVxyXG4vLyAgICAgICAgIC8+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIEVkaXRvci5tb2R1bGVzID0ge1xyXG4vLyAgIHN5bnRheDoge1xyXG4vLyAgICAgaGlnaGxpZ2h0OiAodGV4dCkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKHRleHQpLnZhbHVlLFxyXG4vLyAgIH0sXHJcbi8vICAgdG9vbGJhcjoge1xyXG4vLyAgICAgY29udGFpbmVyOiAnI3Rvb2xiYXInLFxyXG5cclxuLy8gICAgIGhhbmRsZXJzOiB7XHJcbi8vICAgICAgIGluc2VydEltYWdlOiBpbnNlcnRJbWFnZSxcclxuLy8gICAgICAgaW5zZXJ0SW5saW5lQ29kZTogaW5zZXJ0SW5saW5lQ29kZSxcclxuLy8gICAgIH0sXHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIEVkaXRvci5mb3JtYXRzID0gW1xyXG4vLyAgICdoZWFkZXInLFxyXG4vLyAgICdmb250JyxcclxuLy8gICAnc2l6ZScsXHJcbi8vICAgJ2JvbGQnLFxyXG4vLyAgICdpdGFsaWMnLFxyXG4vLyAgICd1bmRlcmxpbmUnLFxyXG4vLyAgICdzdHJpa2UnLFxyXG4vLyAgICdibG9ja3F1b3RlJyxcclxuLy8gICAnbGlzdCcsXHJcbi8vICAgJ2J1bGxldCcsXHJcbi8vICAgJ2luZGVudCcsXHJcbi8vICAgJ2xpbmsnLFxyXG4vLyAgICdpbWFnZScsXHJcbi8vICAgJ2NvbG9yJyxcclxuLy8gICAnY29kZS1ibG9jaycsXHJcbi8vIF07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBFZGl0b3I7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBIZXJvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9sdW5hMS5jby81N2Q5YjYucG5nXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taW1hZ2UgLXR3byAtZmxvYXRpbmdEZWxheVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2x1bmExLmNvLzIwNzBlZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1pbWFnZSAtdGhyZWUgLWZsb2F0aW5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbHVuYTEuY28vZmRhODYwLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWltYWdlIC1mb3VyIC1mbG9hdGluZ0RlbGF5XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1oZWFkZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1sYWJlbFwiPlRoaXMgaXMuLi48L3A+XHJcblxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1oZWFkbGluZSBcIj5Db2RlcnMgR2FsYTwvaDE+XHJcblxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIENvZGVycyBHYWxhIGlzIGEgZnJlZSB0byB1c2UgcGxhdGZvcm0sIHdoaWNoIHdpbGwgaGVscCBhbmQgZ3VpZGVcclxuICAgICAgICAgICAgeW91LCBub3Qgb25seSB0byBsZWFybiB3ZWIgZGV2ZWxvcG1lbnQgYnV0IGJlY29tZSBhIGZyZWUtbGFuY2VyIGxpa2VcclxuICAgICAgICAgICAgdXMuIFNvIGNsaWNrIG9uIHBsYXkgYW5kIGVtYmFyayBhIG5ldyBqb3VybmV5IHdpdGggdXMuXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvbGVhcm5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5IC1jb3JhbCAtc21hbGwgLXB1bHNlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IEhlcm9DYXJkcyA9ICgpID0+IHtcclxuXHQvLyByZWZzIGZvciB0aGUgdGhyZWUgc2VjdGlvblxyXG5cdGNvbnN0IGhlcm9CbHVlID0gdXNlUmVmKCk7XHJcblx0Y29uc3QgaGVyb09yYW5nZSA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IGhlcm9HcmVlbiA9IHVzZVJlZigpO1xyXG5cclxuXHRjb25zdCBzY3JvbGxGdW5jdGlvbiA9ICgpID0+IHtcclxuXHRcdGlzQ2xpZW50ICYmXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcblx0XHRcdFx0dmFyIHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cdFx0XHRcdGlmIChzY3JvbGwgPCAxNTApIHtcclxuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XHJcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhyZWUnKTtcclxuXHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3R3bycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gMTUwICYmIHNjcm9sbCA8IDQ1MCkge1xyXG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdvbmUnKTtcclxuXHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xyXG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzY3JvbGwgPiA0NTAgJiYgc2Nyb2xsIDwgNjUwKSB7XHJcblx0XHRcdFx0XHRoZXJvR3JlZW4uY3VycmVudC5jbGFzc0xpc3QuYWRkKCd0d28nKTtcclxuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XHJcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhyZWUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHNjcm9sbCA+IDY1MCkge1xyXG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndHdvJyk7XHJcblx0XHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29uZScpO1xyXG5cdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3RocmVlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xyXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxGdW5jdGlvbik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3R3bycpO1xyXG5cdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QuYWRkKCd0aHJlZScpO1xyXG5cdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnb25lJyk7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcclxuXHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJyk7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhyZWUnKTtcclxuXHRcdFx0XHRcdFx0fSwgODUwKTtcclxuXHRcdFx0XHRcdH0sIDc1MCk7XHJcblx0XHRcdFx0fSwgNjUwKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRpc0NsaWVudCAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuY3Rpb24pO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2hlcm8nPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naGVyby1ib3gtY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8TGluayB0bz0nL2Fib3V0JyBjbGFzc05hbWU9J2hlcm8tYm94Jz5cclxuXHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdHJlZj17aGVyb0JsdWV9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGVyby1ib3hfX2NpcmNsZSBoZXJvLWJveF9fY2lyY2xlLS1ibHVlJz48L3NwYW4+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdoZXJvLWJveF9fdGl0bGUnPldoYXQgaXMgQ29kZXJzR2FsYT88L2gyPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoZXJvLWJveF9fYm9keSc+XHJcblx0XHRcdFx0XHRcdENvZGVyc0dhbGEgaXMgYSBmcmVlIHRvIHVzZSBwbGF0Zm9ybSBmb3IgYWxsIHRob3NlIHBlb3BsZSB3aG8gYXJlXHJcblx0XHRcdFx0XHRcdHVud2lsbGluZyB0byBwYXkgaGlnaCByYW5zb20gdG8gdGhlc2UgY3Jvb2tlZCBjb2FjaGluZyBjZW50ZXJzIGZvclxyXG5cdFx0XHRcdFx0XHRsZWFybmluZyB3ZWIgRGV2ZWxvcG1lbnQuIFdlIHdvbid0IGJlIHNwb29uIGZlZWRpbmcgeW91IGJ1dCB3ZSB3aWxsXHJcblx0XHRcdFx0XHRcdGd1aWRlIHlvdS4gQW55d2F5LCBpZiB5b3UgYXJlIGVhZ2VyIHRvIGxlYXJuIHlvdSB3aWxsIGZpbmQgYSB3YXkuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxMaW5rIHRvPScvYWJvdXQvI2Fib3V0dXMnIGNsYXNzTmFtZT0naGVyby1ib3gnPlxyXG5cdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0cmVmPXtoZXJvR3JlZW59XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGVyby1ib3hfX2NpcmNsZSBoZXJvLWJveF9fY2lyY2xlLS1ncmVlbic+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0naGVyby1ib3hfX3RpdGxlJz5XaG8gYXJlIHdlPzwvaDI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hlcm8tYm94X19ib2R5Jz5cclxuXHRcdFx0XHRcdFx0V2Ugc3RhcnRlZCB3ZWIgZGV2ZWxvcG1lbnQgb24gb3VyIG93biwgd2l0aCBubyBkaXJlY3Rpb24gYW5kIG5vXHJcblx0XHRcdFx0XHRcdGNvYWNoaW5nLiBBbGwgd2UgaGFkIHdhcyBkZXRlcm1pbmF0aW9uIGFuZCBpbnRlcm5ldC4gV2UgY29uc2lkZXJcclxuXHRcdFx0XHRcdFx0b3Vyc2VsdmVzIGx1Y2t5IHRvIGJlIGFibGUgdG8gcHJvdmlkZSB0aGUgc3VwcG9ydCB0aGF0IGhhZCBiZWVuXHJcblx0XHRcdFx0XHRcdHByb3ZpZGVkIHRvIHVzLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8TGluayB0bz0nL2xlYXJuJyBjbGFzc05hbWU9J2hlcm8tYm94Jz5cclxuXHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdHJlZj17aGVyb09yYW5nZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdoZXJvLWJveF9fY2lyY2xlIGhlcm8tYm94X19jaXJjbGUtLW9yYW5nZSc+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0naGVyby1ib3hfX3RpdGxlJz5TdGFydCBMZWFybmluZyAuLjwvaDI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hlcm8tYm94X19ib2R5Jz5cclxuXHRcdFx0XHRcdFx0UmlnaHQgbm93IHdlIGhhdmUgdGhlIGFydGljbGVzIG9uIGZyb250LWVuZC1kZXZlbG9wbWVudC4gV2UgYXJlXHJcblx0XHRcdFx0XHRcdHdvcmtpbmcgdGlyZWxlc3NseSB0byBjb3ZlciBiYWNrZW5kLiBXZSB3aWxsIGhhdmUgdGhlIGFydGljbGVzIGFpcmVkXHJcblx0XHRcdFx0XHRcdG9uIGJhY2tlbmQgYmVmb3JlIHNlcHRlbWJlci4gVGhlIGNvdXJzZSB3aWxsIGNvdmVyIEZyb250LWVuZCwgQVBJLFxyXG5cdFx0XHRcdFx0XHROb2RlanMtZXhwcmVzcywgTW9uZ29EYiwgTXlTUUwsIEhvc3RpbmcsIFJlYWN0LCBGaXJlYmFzZS4uLiBhbmQgYVxyXG5cdFx0XHRcdFx0XHRsb3QgbW9yZSBwcm9qZWN0cy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ2FyZHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNjcm9sbFRvLCBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBkZWxldGVBcnRpY2xlLCBzZWxlY3RWaWRlbyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uLy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XHJcblxyXG5jb25zdCBBcnRpY2xlTmFtZXMgPSAoe1xyXG5cdHNlbGVjdFZpZGVvLFxyXG5cdGFydGljbGUsXHJcblx0ZGVsZXRlQXJ0aWNsZSxcclxuXHR0b3BpYyxcclxuXHRzcGVjaWFsaXR5TmFtZSxcclxufSkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IChkYXRhKSA9PiB7XHJcblx0XHRjb25zdCB7IEFydGljbGVOYW1lLCBfaWQgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBjb25maXJtID1cclxuXHRcdFx0aXNDbGllbnQgJiZcclxuXHRcdFx0d2luZG93LnByb21wdChgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke0FydGljbGVOYW1lfVwiID8gWSBvciBOIGApO1xyXG5cdFx0aWYgKGNvbmZpcm0gPT09ICdZJykge1xyXG5cdFx0XHRkZWxldGVBcnRpY2xlKF9pZCwgdG9waWMuX2lkLCBzcGVjaWFsaXR5TmFtZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgcmVhZC1pY29uJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9JyByZWFkIGNvbC0xMCc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2l0ZW0nPlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYXJ0aWNsZSk7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0VmlkZW8oYXJ0aWNsZSk7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgcG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGlzQ2xpZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDUwMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsVG8ocG9zKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZGlzcGxheS1hcnRpY2xlJz5cclxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nYXJ0aWNsZS1uYW1lIG0tMCc+XHJcblx0XHRcdFx0XHRcdFx0e2FydGljbGUuQXJ0aWNsZU5hbWV9eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2FydGljbGUtYWN0aW9uLWljb25zJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nRWRpdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsPXtgL2FydGljbGUvdXBkYXRlLyR7YXJ0aWNsZS5faWR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17YXJ0aWNsZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcj17aGFuZGxlRGVsZXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXthcnRpY2xlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUb29sdGlwXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9wdGlvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e2BSZWFkIFwiJHthcnRpY2xlLkFydGljbGVOYW1lfVwiYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlcj0nbW91c2VlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0J1dHRvbj17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyhhcnRpY2xlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHBvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGlzQ2xpZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDUwMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzY3JvbGxUbyhwb3MpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBkYXRlLWRlbGV0ZSBmbG9hdC1yaWdodCc+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBkZWxldGVBcnRpY2xlLCBzZWxlY3RWaWRlbyB9KShBcnRpY2xlTmFtZXMpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uLy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XHJcbmltcG9ydCB7IGdldFNwZWNpYWxpdGllcywgZGVsZXRlU3BlY2lhbGl0eSB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IGdldFNwZWNpYWxpdGllcywgc3BlY2lhbGl0aWVzLCBkZWxldGVTcGVjaWFsaXR5IH0pID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKHNwZWNpYWxpdGllcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0Z2V0U3BlY2lhbGl0aWVzKCk7XHJcblx0XHR9XHJcblx0fSwgW3NwZWNpYWxpdGllcy5sZW5ndGgsIGdldFNwZWNpYWxpdGllc10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSAoaXRlbSkgPT4ge1xyXG5cdFx0Ly8gR290IHRvIGhlbHBlciwgY2hlY2tcclxuXHRcdGNvbnN0IGNvbmZpcm0gPVxyXG5cdFx0XHRpc0NsaWVudCAmJlxyXG5cdFx0XHR3aW5kb3cucHJvbXB0KFxyXG5cdFx0XHRcdGBZb3Ugc3VyZSB3YW50IHRvIGRlbGV0ZSBcIiR7aXRlbS5OYW1lfVwiID8gWSBvciBOIChEZWxldGluZyBhIHNwZWNpYWxpdHkgd2lsbCBsZWFkIHRvIGRlbGV0aW9uIG9mIGFsbCB0b3BpY3MgYW5kIGFydGljbGVzIGluc2lkZSBpdCkgYFxyXG5cdFx0XHQpO1xyXG5cdFx0aWYgKGNvbmZpcm0gPT09ICdZJykge1xyXG5cdFx0XHRkZWxldGVTcGVjaWFsaXR5KGl0ZW0uX2lkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2xlYXJuLWNvbnRhaW5lcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcHQtNCc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHR7c3BlY2lhbGl0aWVzICYmXHJcblx0XHRcdFx0XHRcdHNwZWNpYWxpdGllcy5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0uX2lkfSBjbGFzc05hbWU9J2NvbC1sZy02Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbWdCeCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naW1hZ2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aXRlbS5pbWFnZVVybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtpdGVtLmFsdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzQ2xpZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDYwMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnMTUwcHgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdhdXRvJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbnRlbnRCeCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+IHtpdGVtLm5hbWV9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nRWRpdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsPXsnL3VwZGF0ZXNwZWNpYWxpdHkvJyArIGl0ZW0ubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17aXRlbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcj17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZShpdGVtKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17aXRlbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHVybD17Jy9sZWFybi8nICsgaXRlbS5uYW1lfT5TdGFydCBOb3c8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdHNwZWNpYWxpdGllczogc3RhdGUuc3BlY2lhbGl0eS5zcGVjaWFsaXRpZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuXHRnZXRTcGVjaWFsaXRpZXMsXHJcblx0ZGVsZXRlU3BlY2lhbGl0eSxcclxufSkoQ2FyZCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2xheW91dCc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IGRlbGV0ZVZpZGVvLCBzZWxlY3RWaWRlbyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uLy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XHJcblxyXG5jb25zdCBWaWRlb05hbWVzID0gKHtcclxuXHRzZWxlY3RWaWRlbyxcclxuXHR2aWRlbyxcclxuXHRkZWxldGVWaWRlbyxcclxuXHR0b3BpYyxcclxuXHRzcGVjaWFsaXR5TmFtZSxcclxufSkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKHZpZGVvKTtcclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc3QgeyBWaWRlb05hbWUsIF9pZCB9ID0gZGF0YTtcclxuXHRcdGNvbnN0IGNvbmZpcm0gPVxyXG5cdFx0XHRpc0NsaWVudCAmJlxyXG5cdFx0XHR3aW5kb3cucHJvbXB0KGBZb3Ugc3VyZSB3YW50IHRvIGRlbGV0ZSBcIiR7VmlkZW9OYW1lfVwiID8gWSBvciBOIGApO1xyXG5cdFx0aWYgKGNvbmZpcm0gPT09ICdZJykge1xyXG5cdFx0XHRkZWxldGVWaWRlbyhfaWQsIHRvcGljLl9pZCwgc3BlY2lhbGl0eU5hbWUpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IHJlYWQtaWNvbic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWFkIGNvbC0xMCc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2l0ZW0nPlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0VmlkZW8odmlkZW8pO1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Rpc3BsYXktYXJ0aWNsZSc+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2FydGljbGUtbmFtZSBtLTAnPlxyXG5cdFx0XHRcdFx0XHRcdHt2aWRlby5uYW1lfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdhcnRpY2xlLWFjdGlvbi1pY29ucyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybD17YC92aWRlby91cGRhdGUvJHt2aWRlby5faWR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17dmlkZW99XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdEZWxldGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9e2hhbmRsZURlbGV0ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17dmlkZW99XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb3B0aW9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17YFJlYWQgXCIke3ZpZGVvLm5hbWV9XCJgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0cmlnZ2VyPSdtb3VzZWVudGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzQnV0dG9uPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdFZpZGVvKHZpZGVvKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3VwZGF0ZS1kZWxldGUgZmxvYXQtcmlnaHQnPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgZGVsZXRlVmlkZW8sIHNlbGVjdFZpZGVvIH0pKFZpZGVvTmFtZXMpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIgZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInO1xyXG5pbXBvcnQgeyB1bmxvY2tUb3BpYyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdG9waWMnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgQXJ0aWNsZVByZXZpZXcgPSAoeyBTZWxlY3RlZEFydGljbGUsIHNwZWNpYWxpdHlOYW1lLCB1bmxvY2tUb3BpYyB9KSA9PiB7XHJcblx0Y29uc3QgUmVhZE1vcmVVcmwgPVxyXG5cdFx0U2VsZWN0ZWRBcnRpY2xlICYmIFNlbGVjdGVkQXJ0aWNsZS5uYW1lXHJcblx0XHRcdD8gYC8ke3NwZWNpYWxpdHlOYW1lfS9yZWFkLyR7U2VsZWN0ZWRBcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csICctJyl9YFxyXG5cdFx0XHQ6IGAvJHtzcGVjaWFsaXR5TmFtZX0vcmVhZC9iZWZvcmUtc3RhcnRpbmdgO1xyXG5cclxuXHRjb25zdCBoYW5kbGVVbmxvY2sgPSBhc3luYyAodG9waWNJZCwgc3BlY2lhbGl0eU5hbWUpID0+IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHVubG9ja1RvcGljKHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0fTtcclxuXHRjb25zb2xlLmxvZyhTZWxlY3RlZEFydGljbGUpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZC1jb250YWluZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zIGNhcmQtaGVhZGVyJz5cclxuXHRcdFx0XHRcdFx0e1NlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubmFtZVxyXG5cdFx0XHRcdFx0XHRcdD8gU2VsZWN0ZWRBcnRpY2xlLm5hbWVcclxuXHRcdFx0XHRcdFx0XHQ6ICdSZWFkIFRoaXMgQmVmb3JlIFlvdSBTdGFydC4uLid9XHJcblx0XHRcdFx0XHRcdHsvKiA8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J2Zsb2F0LXJpZ2h0Jz48L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncWwtc25vdyc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLW5vLWJvZHkgcWwtZWRpdG9yJz5cclxuXHRcdFx0XHRcdFx0XHR7U2VsZWN0ZWRBcnRpY2xlICYmIFNlbGVjdGVkQXJ0aWNsZS5sb2NrZWQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUbyB2aWV3IHRoaXMgYXJ0aWNsZSBwbGVhc2UgdW5sb2NrIGl0IHVzaW5nIHBvaW50c3snICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVVbmxvY2soXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUudG9waWNJZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lhbGl0eU5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0VW5sb2NrXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0UmVhY3RIdG1sUGFyc2VyKFNlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUuY29udGVudClcclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aXNDbGllbnQgJiZcclxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogJzBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0dG89e1JlYWRNb3JlVXJsfT5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nbGluayc+XHJcblx0XHRcdFx0XHRcdFx0e1NlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubG9ja2VkXHJcblx0XHRcdFx0XHRcdFx0XHQ/ICdVbmxvY2snXHJcblx0XHRcdFx0XHRcdFx0XHQ6ICdSZWFkIE1vcmUuLi4uLid9XHJcblx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyB1bmxvY2tUb3BpYyB9KShBcnRpY2xlUHJldmlldyk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IGdldFRvcGljcywgZGVsZXRlVG9waWMgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IEFydGljbGVOYW1lcyBmcm9tICcuLi9sZWFybi9BcnRpY2xlTmFtZXMnO1xyXG5pbXBvcnQgVmlkZW9OYW1lcyBmcm9tICcuLi9sZWFybi9WaWRlb05hbWVzJztcclxuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi8uLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBMb2NrIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IFRvcGljc092ZXJ2aWV3ID0gKHtcclxuXHRnZXRUb3BpY3MsXHJcblx0c3BlY2lhbGl0eU5hbWUsXHJcblx0dG9waWNzLFxyXG5cdGRlbGV0ZVRvcGljLFxyXG5cdHVzZXIsXHJcbn0pID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0VG9waWNzKHNwZWNpYWxpdHlOYW1lKTtcclxuXHR9LCBbZ2V0VG9waWNzLCBzcGVjaWFsaXR5TmFtZV0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSAodG9waWMpID0+IHtcclxuXHRcdGNvbnN0IGNvbmZpcm0gPVxyXG5cdFx0XHRpc0NsaWVudCAmJlxyXG5cdFx0XHR3aW5kb3cucHJvbXB0KFxyXG5cdFx0XHRcdGBZb3Ugc3VyZSB3YW50IHRvIGRlbGV0ZSBcIiR7dG9waWMubmFtZX1cIiA/IFkgb3IgTiAoRGVsZXRpbmcgYSB0b3BpYyB3aWxsIGxlYWQgdG8gZGVsZXRpb24gb2YgYWxsIGFydGljbGVzIGluc2lkZSBpdCkgYFxyXG5cdFx0XHQpO1xyXG5cdFx0aWYgKGNvbmZpcm0gPT09ICdZJykge1xyXG5cdFx0XHRkZWxldGVUb3BpYyh0b3BpYy5faWQsIHNwZWNpYWxpdHlOYW1lKTtcclxuXHRcdFx0dG9hc3QoJ0RlbGV0ZWQgc3BlY2lhbGl0eSBzdWNlc3NmdWxseScpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGlkPSdzcGVjaWFsaXRpZXMnIGNsYXNzTmFtZT0nVG9waWMtbmFtZXMgJz5cclxuXHRcdFx0e3RvcGljcy5sZW5ndGggPiAwICYmXHJcblx0XHRcdFx0dG9waWNzLm1hcCgodG9waWMpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxkaXYga2V5PXt0b3BpYy5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncC0wIHNwZWNpYWxpdHktdG9waWMtY29udGFpbmVyIG0tMSdcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17dG9waWMuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2Zsb2F0LWxlZnQgdG9waWNOYW1lJz57dG9waWMubmFtZX08L2g0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxBY3Rpb25CdXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjY29yZGlvbktleT17dG9waWMubmFtZS5zcGxpdCgvXFxzLykuam9pbignJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkSWQ9e3NldFNlbGVjdGVkSWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkSWQ9e3NlbGVjdGVkSWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWNpYWxpdHlOYW1lPXtzcGVjaWFsaXR5TmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dG9waWM9e3RvcGljfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1c2VyPXt1c2VyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVEZWxldGU9e2hhbmRsZURlbGV0ZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHR7dG9waWMubG9ja2VkICYmXHJcblx0XHRcdFx0XHRcdFx0XHQhdXNlci51bkxvY2tlZFRvcGljcy5pbmNsdWRlcyh0b3BpYy5faWQpID8gbnVsbCA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEFjY29yZGlvbi5Db2xsYXBzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50S2V5PXt0b3BpYy5uYW1lLnNwbGl0KC9cXHMvKS5qb2luKCcnKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RvcGljLnZpZGVvcy5sZW5ndGggPiAwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gdG9waWMudmlkZW9zLm1hcCgodmlkZW8pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxWaWRlb05hbWVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9waWM9e3RvcGljfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZGVvPXt2aWRlb31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eU5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogdG9waWMuYXJ0aWNsZXMgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0b3BpYy5hcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBcnRpY2xlTmFtZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJ0aWNsZT17YXJ0aWNsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eU5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHR0b3BpY3M6IHN0YXRlLnRvcGljLnRvcGljcyxcclxuXHR1c2VyOiBzdGF0ZS5hdXRoLnVzZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0VG9waWNzLCBkZWxldGVUb3BpYyB9KShcclxuXHRUb3BpY3NPdmVydmlld1xyXG4pO1xyXG5cclxuY29uc3QgQWN0aW9uQnV0dG9ucyA9ICh7XHJcblx0aGFuZGxlRGVsZXRlLFxyXG5cdHRvcGljLFxyXG5cdHNwZWNpYWxpdHlOYW1lLFxyXG5cdHNlbGVjdGVkSWQsXHJcblx0c2V0U2VsZWN0ZWRJZCxcclxuXHR1c2VyLFxyXG59KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdhY3Rpb24tYnV0dG9ucyc+XHJcblx0XHRcdDxBZG1pbkJ1dHRvbnNcclxuXHRcdFx0XHR0eXBlPSdFZGl0J1xyXG5cdFx0XHRcdGRhdGE9e3RvcGljfVxyXG5cdFx0XHRcdHVybD17YC8ke3NwZWNpYWxpdHlOYW1lfS90b3BpYy9lZGl0LyR7dG9waWMuX2lkfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxBZG1pbkJ1dHRvbnMgdHlwZT0nRGVsZXRlJyBoYW5kbGVyPXtoYW5kbGVEZWxldGV9IGRhdGE9e3RvcGljfSAvPlxyXG5cdFx0XHQ8QWRtaW5CdXR0b25zIHR5cGU9J0FkZCcgZGF0YT17dG9waWN9IHVybD17YC92aWRlby9hZGQvJHt0b3BpYy5faWR9YH0gLz5cclxuXHRcdFx0e3RvcGljLmxvY2tlZCAmJiAhdXNlci51bkxvY2tlZFRvcGljcy5pbmNsdWRlcyh0b3BpYy5faWQpID8gKFxyXG5cdFx0XHRcdDxMb2NrIC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PEFjY29yZGlvbi5Ub2dnbGVcclxuXHRcdFx0XHRcdGFzPXtCdXR0b259XHJcblx0XHRcdFx0XHR2YXJpYW50PSdsaW5rJ1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdmbG9hdC1yaWdodCBhcnJvdy1kb3duJ1xyXG5cdFx0XHRcdFx0ZXZlbnRLZXk9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfSAvLyB0byByZW1vdmUgc3BhY2VzXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChzZWxlY3RlZElkID09PSB0b3BpYy5faWQpIHtcclxuXHRcdFx0XHRcdFx0XHRzZXRTZWxlY3RlZElkKCcnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzZXRTZWxlY3RlZElkKHRvcGljLl9pZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0PHN2Z1xyXG5cdFx0XHRcdFx0XHRpZD17dG9waWMubmFtZS5zcGxpdCgvXFxzLykuam9pbignJyl9XHJcblx0XHRcdFx0XHRcdHZpZXdCb3g9JzAgMCAzMiAzMidcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaWNvbiBpY29uLWNoZXZyb24tYm90dG9tIGFydGljbGUtZHduIGFydGljbGUtdG9nZ2xlIGZhLWFuZ2xlLWRvd24gJHtcclxuXHRcdFx0XHRcdFx0XHR0b3BpYy5faWQgPT09IHNlbGVjdGVkSWQgPyAncm90YXRlJyA6ICcnXHJcblx0XHRcdFx0XHRcdH1gfT5cclxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTE2LjAwMyAxOC42MjZsNy4wODEtNy4wODFMMjUgMTMuNDZsLTguOTk3IDguOTk4LTkuMDAzLTkgMS45MTctMS45MTZ6JyAvPlxyXG5cdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0PC9BY2NvcmRpb24uVG9nZ2xlPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFydGljbGVQcmV2aWV3IGZyb20gJy4vQXJ0aWNsZVByZXZpZXcnO1xyXG5cclxuY29uc3QgVmlkZW9QcmV2aWV3ID0gKHsgdmlkZW8gfSkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKHZpZGVvKTtcclxuXHRyZXR1cm4gdmlkZW8gJiYgIXZpZGVvLmNvbnRlbnQgPyAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndmlkZW8tY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3ZpZGVvJz5cclxuXHRcdFx0XHQ8aWZyYW1lXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2lmcmFtZSdcclxuXHRcdFx0XHRcdHNyYz17dmlkZW8udXJsfVxyXG5cdFx0XHRcdFx0dGl0bGU9J1lvdVR1YmUgdmlkZW8gcGxheWVyJ1xyXG5cdFx0XHRcdFx0ZnJhbWVCb3JkZXI9JzAnXHJcblx0XHRcdFx0XHRhbGxvdz0nYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSdcclxuXHRcdFx0XHRcdGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbmZvJz5cclxuXHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3ZpZGVvLm5hbWV9PC9oMz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVzYyc+e3ZpZGVvLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaW5rZWQtYXJ0aWNsZXMnPlxyXG5cdFx0XHRcdFx0PGg0PkFydGljbGVzIFJlbGF0ZWQgdG8gdGhlIHRvcGljPC9oND5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpIDogKFxyXG5cdFx0PEFydGljbGVQcmV2aWV3IFNlbGVjdGVkQXJ0aWNsZT17dmlkZW99IC8+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHR2aWRlbzogc3RhdGUudmlkZW8uc2VsZWN0ZWRWaWRlbyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlkZW9QcmV2aWV3KTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcblxyXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgcm9vdFJlZHVjZXIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2YTljMzQ5NjE2ZGM3NjkxZWY2MGEzMjA3MDNjYjc3YS5QTkdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1odG1sLXBhcnNlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRpcHB5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbG9hZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcmVsb2FkIGZyb20gJ3JlbG9hZCc7XHJcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL3NyYy9BcHAnO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vc3JjL1JvdXRlcyc7XHJcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL3NyYy9zdG9yZSc7XHJcblxyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5cclxudmFyIGluZGV4ID0gZnMucmVhZEZpbGVTeW5jKCdidWlsZC9pbmRleC5odG1sJykudG9TdHJpbmcoKTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdidWlsZCcpKTtcclxuXHJcbmlmIChkZXYpIHJlbG9hZChhcHApO1xyXG5cclxuYXBwLnVzZShhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKCk7XHJcblx0Y29uc3QgYWN0aXZlUm91dGUgPSByb3V0ZXMuZmluZCgocm91dGUpID0+IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSkpIHx8IHt9O1xyXG5cclxuXHRjb25zb2xlLmxvZyhhY3RpdmVSb3V0ZSk7XHJcblxyXG5cdGNvbnN0IHByb21pc2UgPSBhY3RpdmVSb3V0ZS5sb2FkRGF0YVxyXG5cdFx0PyBhY3RpdmVSb3V0ZS5sb2FkRGF0YShzdG9yZSlcclxuXHRcdDogUHJvbWlzZS5yZXNvbHZlKCk7XHJcblxyXG5cdHByb21pc2UudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc3QgcmVhY3RNYXJrdXAgPSAoXHJcblx0XHRcdDxSZWFjdC5TdHJpY3RNb2RlPlxyXG5cdFx0XHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cdFx0XHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17e319PlxyXG5cdFx0XHRcdFx0XHQ8QXBwIC8+XHJcblx0XHRcdFx0XHQ8L1N0YXRpY1JvdXRlcj5cclxuXHRcdFx0XHQ8L1Byb3ZpZGVyPlxyXG5cdFx0XHQ8L1JlYWN0LlN0cmljdE1vZGU+XHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKHJlYWN0TWFya3VwKTtcclxuXHRcdGxldCBmaW5hbEh0bWwgPSBpbmRleFxyXG5cdFx0XHQucmVwbGFjZSgnPGRpdiBpZD1cInJvb3RcIj48L2Rpdj4nLCBgPGRpdiBpZD1cInJvb3RcIj4ke2h0bWx9PC9kaXY+YClcclxuXHRcdFx0LnJlcGxhY2UoXHJcblx0XHRcdFx0Jy8vc2NyaXB0JyxcclxuXHRcdFx0XHRgd2luZG93Ll9JTklUSUFMX0RBVEFfID0gJHtzZXJpYWxpemUoc3RvcmUuZ2V0U3RhdGUoKSkucmVwbGFjZShcclxuXHRcdFx0XHRcdC88L2csXHJcblx0XHRcdFx0XHQnXFxcXHUwMDNjJ1xyXG5cdFx0XHRcdCl9YFxyXG5cdFx0XHQpO1xyXG5cdFx0Y29uc29sZS5sb2coJ3dvcmtpbmcnLCBmaW5hbEh0bWwpO1xyXG5cdFx0cmVzLnNlbmQoZmluYWxIdG1sKTtcclxuXHRcdHJlcy5lbmQoKTtcclxuXHR9KTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IGNvbnNvbGUubG9nKGBsaXN0ZW5pbmcgb24gJHtQT1JUfWApKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==