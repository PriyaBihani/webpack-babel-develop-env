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

var _auth = __webpack_require__(/*! ./actions/auth */ "./src/actions/auth.js");

var _setAuthToken = __webpack_require__(/*! ./helpers/setAuthToken */ "./src/helpers/setAuthToken.js");

var _clientStore = _interopRequireDefault(__webpack_require__(/*! ./clientStore */ "./src/clientStore.js"));

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
    _clientStore.default.dispatch((0, _auth.loadUser)());
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

"use strict";


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
}, {
  path: '/blog',
  component: _Blog.default
}, {
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
  console.log("loadUser");
  dispatch({
    type: 'SET_AUTH_LOADER'
  });
  console.log(_helpers.isClient);

  if (_helpers.isClient && localStorage.token) {
    (0, _helpers.setAuthToken)(localStorage.token);
  }

  if (_helpers.isClient && localStorage.userId) {
    const userId = localStorage.getItem('userId');

    try {
      const res = await (0, _helpers.serviceGet)(`api/auth/user/${userId}`); // displayToast

      (0, _toast.successToast)(res);
      console.log('this is user', res.data);
      dispatch({
        type: "USER_LOADED",
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

/***/ "./src/clientStore.js":
/*!****************************!*\
  !*** ./src/clientStore.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _All = _interopRequireDefault(__webpack_require__(/*! ../sections/blog/All */ "./src/sections/blog/All.js"));

var _Sidebar = _interopRequireDefault(__webpack_require__(/*! ../sections/blog/Sidebar */ "./src/sections/blog/Sidebar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Blog = ({
  getAllArticles,
  articles,
  isAdmin,
  history
}) => {
  (0, _react.useEffect)(() => {
    if (articles.length === 0) {
      getAllArticles();
    }

    console.log(history);
  }, [articles, getAllArticles]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "main-content",
    class: "blog-page"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "blog-header"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    class: "heading"
  }, "CodersGala ", /*#__PURE__*/_react.default.createElement("span", {
    class: "underline--magical"
  }, "Blog"), " ")), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "col-lg-8 col-md-12 left-box"
  }, /*#__PURE__*/_react.default.createElement(_Featured.default, {
    articles: articles
  })), /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
    history: history,
    articles: articles
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_All.default, {
    articles: articles
  }))));
};

const mapStateToProps = state => ({
  articles: state.article.articles,
  isAdmin: state.auth.isAdmin
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  getAllArticles: _article.getAllArticles
})(Blog); // const Blog = ({ getAllArticles, articles, isAdmin }) => {
//     useEffect(() => {
//         if (articles.length === 0) {
//             getAllArticles()
//         }
//     }, [articles, getAllArticles])
//     console.log(articles)
//     return (
//         <div className="blog-container">
//             <nav className="nav__top">
//                 <a rel="nofollow" href="#" className="nav__top__link"></a>
//             </nav>
//             {isAdmin && <NavLink to="/article/add" rel="nofollow">
//                 <Button variant="primary" size="lg" block>
//                     Add Article
//                 </Button>
//             </NavLink>}
//             <div className="title">
//                 <h1 style={{ fontFamily: "Dosis" }} className="title__h1">
//                     {" "}
//                     CodersGala <span>Blog</span>
//                 </h1>
//                 <p className="title__sub">Sorry :(</p>
//             </div>
//             <article className="grid">
//                 <section className="grid__col-2">
//                     <Latest article={articles && articles[0]} />
//                     <div>
//                         <h3 className="grid__col__title">Featured Articles</h3>
//                         <Featured articles={articles} />
//                         {/* <NewsletterForm /> */}
//                     </div>
//                 </section>
//                 <h3 className="grid__col__title">Also Read...</h3>
//                 <All articles={articles} />
//             </article>
//         </div>
//     );
// }


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
  }, _helpers.isClient && /*#__PURE__*/_react.default.createElement(_editor.default, {
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
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement("nav", {
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

/***/ "./src/sections/article/Like.js":
/*!**************************************!*\
  !*** ./src/sections/article/Like.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _article = __webpack_require__(/*! ../../actions/article */ "./src/actions/article.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Like = ({
  articleId,
  user,
  likeArticle
}) => {
  var liked = user && user.likedArticles.includes(articleId);
  const [animating, setAnimating] = (0, _react.useState)(liked);

  const handleLike = () => {
    var action = animating ? "unlike" : "like";
    likeArticle({
      action,
      articleId,
      userId: user === null || user === void 0 ? void 0 : user.userId
    });
    setAnimating(!animating);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => {
      handleLike();
    },
    class: `heart ${animating ? 'is_animating_forward' : ""}`
  });
};

const mapStateToProps = state => ({
  user: state.auth.user
});

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  likeArticle: _article.likeArticle
})(Like);

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

var _Like = _interopRequireDefault(__webpack_require__(/*! ../article/Like */ "./src/sections/article/Like.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const All = ({
  articles
}) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, articles && articles.map(article => {
    if (!article.featured) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "col-lg-4 col-md-6 mt-4 pt-2"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "blog-post rounded border"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "blog-img d-block overflow-hidden position-relative"
      }, /*#__PURE__*/_react.default.createElement("img", {
        style: {
          width: "350px",
          height: "250px"
        },
        src: article.thumbnailUrl,
        className: "img-fluid rounded-top",
        alt: ""
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "overlay rounded-top bg-dark"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "post-meta"
      }, /*#__PURE__*/_react.default.createElement(_Like.default, {
        articleId: article._id
      }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        to: `/blog/read/${article.name.replace(/\s/g, "-")}`,
        className: "text-light read-more"
      }, "Read More... ", /*#__PURE__*/_react.default.createElement("i", {
        className: "mdi mdi-chevron-right"
      })))), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          background: "#fff"
        },
        className: "content p-3"
      }, /*#__PURE__*/_react.default.createElement("small", {
        className: "text-muted p float-right"
      }, "19th Oct, 19"), /*#__PURE__*/_react.default.createElement("small", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "javascript:void(0)",
        className: "text-primary"
      }, "Software")), /*#__PURE__*/_react.default.createElement("h4", {
        className: "mt-2"
      }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        to: `/blog/read/${article.name.replace(/\s/g, "-")}`,
        className: "text-dark title"
      }, article.name)), /*#__PURE__*/_react.default.createElement("p", {
        className: "text-muted mt-2"
      }, "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space."))));
    }
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

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

var _Like = _interopRequireDefault(__webpack_require__(/*! ../article/Like */ "./src/sections/article/Like.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Featured = ({
  articles
}) => {
  return /*#__PURE__*/_react.default.createElement("div", null, articles && articles.map(article => {
    if (article && article.featured === true) {
      console.log(article);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "card single_post"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "body"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "img-post"
      }, /*#__PURE__*/_react.default.createElement("img", {
        style: {
          width: "800px",
          height: "280px"
        },
        className: "d-block img-fluid",
        src: article.thumbnailUrl,
        alt: ""
      })), /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "blog-details.html"
      }, article.name)), /*#__PURE__*/_react.default.createElement("p", null, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal")), /*#__PURE__*/_react.default.createElement("div", {
        className: "footer"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "actions"
      }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        to: `/blog/read/${article.name.replace(/\s/g, "-")}`,
        className: "btn btn-outline-secondary"
      }, "Continue Reading")), /*#__PURE__*/_react.default.createElement("ul", {
        className: "stats"
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Like.default, {
        articleId: article._id
      })))));
    }

    return null;
  }));
};

var _default = Featured;
exports.default = _default;

/***/ }),

/***/ "./src/sections/blog/Sidebar.js":
/*!**************************************!*\
  !*** ./src/sections/blog/Sidebar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactSearchAutocomplete = __webpack_require__(/*! react-search-autocomplete */ "./node_modules/react-search-autocomplete/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Sidebar = ({
  history,
  articles
}) => {
  // var items = []
  const items = articles;

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    if (results.length > 0) {
      console.log(`Found ${results.length} results for ${string}`);
    } else {
      if (results.length > 0) {
        console.log('No results');
      }
    }
  };

  const handleOnHover = result => {
    // the item hovered
    console.log('hovered');
  };

  const handleOnSelect = item => {
    // the item selected
    // console.log(props)
    history.push(`/blog/read/${item.name.replace(/\s/g, "-")}`);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 col-md-12 right-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "body search"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group m-b-0"
  }, /*#__PURE__*/_react.default.createElement(_reactSearchAutocomplete.ReactSearchAutocomplete, {
    items: items,
    onSearch: handleOnSearch,
    onHover: handleOnHover,
    onSelect: handleOnSelect,
    onFocus: handleOnFocus,
    styling: {
      zIndex: 2,
      width: "100%"
    },
    autoFocus: true
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Categories")), /*#__PURE__*/_react.default.createElement("div", {
    className: "body widget"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-unstyled categories-clouds m-b-0"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0);"
  }, "eCommerce")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0);"
  }, "Microsoft Technologies")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0);"
  }, "Creative UX")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0);"
  }, "Wordpress")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0);"
  }, "Angular JS")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0);"
  }, "Enterprise Mobility")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0);"
  }, "Website Design")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0);"
  }, "HTML5")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0);"
  }, "Infographics")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0);"
  }, "Wordpress Development"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Email Newsletter"), /*#__PURE__*/_react.default.createElement("div", null, "Sign up for our newsletter and we'll update you whenever new content is uploaded"), /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "100%"
    },
    src: "https://mailrelay.com/wp-content/uploads/2016/12/newsletter.jpg",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "body widget newsletter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Enter Email"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-text"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon-paper-plane"
  })))))));
};

var _default = Sidebar;
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
//     languages: ['javascript', 'python', 'html', 'css'],
// });
// const CustomButton = () => (
//     <img
//         style={{ width: '20px' }}
//         src="https://www.svgrepo.com/show/77584/image.svg"
//         alt=""
//     />
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
//     '1',
//     '2',
//     '4',
//     '6',
//     '8',
//     '10',
//     '12',
//     '14',
//     '16',
//     '20',
//     '24',
//     '26',
//     '30',
// ];
// Quill.register(Size, true);
// class inlineCodeBlot extends Inline { }
// inlineCodeBlot.blotName = 'inlineCode';
// inlineCodeBlot.tagName = 'code';
// class ImageBlot extends BlockEmbed {
//     static create(value) {
//         let node = super.create();
//         node.setAttribute('alt', value.alt);
//         node.setAttribute('src', value.url);
//         node.setAttribute('class', value.class);
//         return node;
//     }
//     static value(node) {
//         return {
//             alt: node.getAttribute('alt'),
//             url: node.getAttribute('src'),
//             class: node.getAttribute('class'),
//         };
//     }
// }
// ImageBlot.blotName = 'image';
// ImageBlot.tagName = 'img';
// Quill.register(ImageBlot);
// Quill.register(inlineCodeBlot);
// const insertImage = () => {
//     let url = prompt('Enter link URL');
//     let alt = prompt('Enter link alt');
//     let clas = prompt('Enter class Name');
//     let range = this.quill.getSelection(true);
//     console.log(Quill.sources);
//     this.quill.insertText(range.index, '\n', Quill.sources.USER);
//     this.quill.insertEmbed(
//         range.index + 1,
//         'image',
//         {
//             alt: alt,
//             url: url,
//             class: clas,
//         },
//         Quill.sources.USER
//     );
//     this.quill.setSelection(range.index + 2, Quill.sources.SILENT);
// };
// const insertInlineCode = (e) => {
//     e.preventDefault();
//     // console.log(this.quill);
//     // this.quill.format("inlineCode", true);
//     console.log('inline code ins');
// };
// const CustomToolbar = () => (
//     <div id="toolbar">
//         <select
//             className="ql-header"
//             defaultValue={''}
//             onChange={(e) => e.persist()}
//         >
//             <option value="1"></option>
//             <option value="2"></option>
//             <option value="3"></option>
//             <option value="4"></option>
//             <option value="5"></option>
//             <option value="6"></option>
//             <option selected></option>
//         </select>
//         <select class="ql-font">
//             <option value="serif"></option>
//             <option selected></option>
//             <option value="monospace"></option>
//         </select>
//         <select className="ql-size">
//             <option value="1">1</option>
//             <option selected value="2">
//                 2
//             </option>
//             <option value="4">4</option>
//             <option value="6">6</option>
//             <option value="8">8</option>
//             <option value="10">10</option>
//             <option value="12">12</option>
//             <option value="14">14</option>
//             <option value="16">16</option>
//             <option value="20">20</option>
//             <option value="24">24</option>
//             <option value="26">26</option>
//             <option value="30">30</option>
//         </select>
//         <select class="ql-align">
//             <option value="center"></option>
//             <option selected></option>
//             <option value="right"></option>
//             <option value="justify"></option>
//         </select>
//         <select className="ql-background">
//             <option value="red"></option>
//             <option value="green"></option>
//             <option value="#4F69F8"></option>
//             <option value="orange"></option>
//             <option value="violet"></option>
//             <option value="#d0d1d2"></option>
//             <option selected></option>
//         </select>
//         <select className="ql-color">
//             <option value="#DA0F47"></option>
//             <option value="#4DCE1D"></option>
//             <option value="#4F69F8"></option>
//             <option value="orange"></option>
//             <option value="#9933ff"></option>
//             <option value="#d0d1d2"></option>
//             <option selected></option>
//         </select>
//         <button className="ql-bold"></button>
//         <button className="ql-italic"></button>
//         <button className="ql-underline"></button>
//         <button className="ql-strike"></button>
//         <button className="ql-blockquote"></button>
//         <button className="ql-direction"></button>
//         <button className="ql-link"></button>
//         <button className="ql-image"></button>
//         <button className="ql-video"></button>
//         <button value="ordered" className="ql-list"></button>
//         <button value="bullet" className="ql-list"></button>
//         <button value="-1" className="ql-indent"></button>
//         <button value="+1" className="ql-indent"></button>
//         <button className="ql-code-block"></button>
//         <button className="ql-insertImage">
//             <CustomButton />
//         </button>
//     </div>
// );
// /*
//  * Editor component with custom toolbar and content containers
//  */
// class Editor extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { editorHtml: this.props.defaultValue };
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(html) {
//         this.setState({ editorHtml: html });
//         this.props.handleEditor(html);
//     }
//     render() {
//         // console.log(this.state.editorHtml);
//         // console.log(this.props.defaultValue);
//         return (
//             <div className="text-editor">
//                 <CustomToolbar />
//                 <ReactQuill
//                     onChange={this.handleChange}
//                     modules={Editor.modules}
//                     value={this.state.editorHtml || ''}
//                 />
//             </div>
//         );
//     }
// }
// Editor.modules = {
//     syntax: {
//         highlight: (text) => hljs.highlightAuto(text).value,
//     },
//     toolbar: {
//         container: '#toolbar',
//         handlers: {
//             insertImage: insertImage,
//             insertInlineCode: insertInlineCode,
//         },
//     },
// };
// Editor.formats = [
//     'header',
//     'font',
//     'size',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'indent',
//     'link',
//     'image',
//     'color',
//     'code-block',
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

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

var _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ "redux-thunk"));

var _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ "./src/reducers/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialState = {};
const middleware = [_reduxThunk.default];

var _default = () => {
  const store = (0, _redux.createStore)(_reducers.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(...middleware)));
  return store;
};

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

/***/ "./node_modules/fuse.js/dist/fuse.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Fuse.js v6.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2021 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      totalWeight += obj.weight;

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
  }

  return { path, id, weight, src }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      const norm = 1 / Math.sqrt(numTokens);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({ getFn = Config.getFn } = {}) {
    this.norm = norm(3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      // console.log(key)
      let value = this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          }
        }
        record.$[keyIndex] = subRecords;
      } else if (!isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(keys, docs, { getFn = Config.getFn } = {}) {
  const myIndex = new FuseIndex({ getFn });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(data, { getFn = Config.getFn } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore$1(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE)
    }

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore$1(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      /*eslint indent: [2, 2, {"SwitchCase": 1}]*/
      switch (node.operator) {
        case LogicalOperator.AND: {
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
            } else {
              return []
            }
          }
          return res
        }
        case LogicalOperator.OR: {
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
              break
            }
          }
          return res
        }
      }
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '6.4.6';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fuse);


/***/ }),

/***/ "./node_modules/is-what/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/is-what/dist/index.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getType": () => (/* binding */ getType),
/* harmony export */   "isAnyObject": () => (/* binding */ isAnyObject),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBlob": () => (/* binding */ isBlob),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isEmptyArray": () => (/* binding */ isEmptyArray),
/* harmony export */   "isEmptyObject": () => (/* binding */ isEmptyObject),
/* harmony export */   "isEmptyString": () => (/* binding */ isEmptyString),
/* harmony export */   "isError": () => (/* binding */ isError),
/* harmony export */   "isFile": () => (/* binding */ isFile),
/* harmony export */   "isFullArray": () => (/* binding */ isFullArray),
/* harmony export */   "isFullObject": () => (/* binding */ isFullObject),
/* harmony export */   "isFullString": () => (/* binding */ isFullString),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isMap": () => (/* binding */ isMap),
/* harmony export */   "isNaNValue": () => (/* binding */ isNaNValue),
/* harmony export */   "isNull": () => (/* binding */ isNull),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isObjectLike": () => (/* binding */ isObjectLike),
/* harmony export */   "isOneOf": () => (/* binding */ isOneOf),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isPrimitive": () => (/* binding */ isPrimitive),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isRegExp": () => (/* binding */ isRegExp),
/* harmony export */   "isSet": () => (/* binding */ isSet),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isSymbol": () => (/* binding */ isSymbol),
/* harmony export */   "isType": () => (/* binding */ isType),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "isWeakMap": () => (/* binding */ isWeakMap),
/* harmony export */   "isWeakSet": () => (/* binding */ isWeakSet)
/* harmony export */ });
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is { [K in any]: never }}
 */
function isEmptyObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length === 0;
}
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isFullObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length > 0;
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function (regular or async)
 *
 * @param {*} payload
 * @returns {payload is AnyFunction}
 */
function isFunction(payload) {
    return typeof payload === 'function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {any} payload
 * @returns {payload is any[]}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a an array with at least 1 item
 *
 * @param {*} payload
 * @returns {payload is any[]}
 */
function isFullArray(payload) {
    return isArray(payload) && payload.length > 0;
}
/**
 * Returns whether the payload is a an empty array
 *
 * @param {*} payload
 * @returns {payload is []}
 */
function isEmptyArray(payload) {
    return isArray(payload) && payload.length === 0;
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number (but not NaN)
 *
 * This will return `false` for `NaN`!!
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return getType(payload) === 'Number' && !isNaN(payload);
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map<any, any>}
 */
function isMap(payload) {
    return getType(payload) === 'Map';
}
/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap<any, any>}
 */
function isWeakMap(payload) {
    return getType(payload) === 'WeakMap';
}
/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set<any>}
 */
function isSet(payload) {
    return getType(payload) === 'Set';
}
/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet<any>}
 */
function isWeakSet(payload) {
    return getType(payload) === 'WeakSet';
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return getType(payload) === 'Symbol';
}
/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return getType(payload) === 'Date' && !isNaN(payload);
}
/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
function isBlob(payload) {
    return getType(payload) === 'Blob';
}
/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */
function isFile(payload) {
    return getType(payload) === 'File';
}
/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise<any>}
 */
function isPromise(payload) {
    return getType(payload) === 'Promise';
}
/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */
function isError(payload) {
    return getType(payload) === 'Error';
}
/**
 * Returns whether the payload is literally the value `NaN` (it's `NaN` and also a `number`)
 *
 * @param {*} payload
 * @returns {payload is typeof NaN}
 */
function isNaNValue(payload) {
    return getType(payload) === 'Number' && isNaN(payload);
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
var isNullOrUndefined = isOneOf(isNull, isUndefined);
function isOneOf(a, b, c, d, e) {
    return function (value) {
        return a(value) || b(value) || (!!c && c(value)) || (!!d && d(value)) || (!!e && e(value));
    };
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return getType(payload) === name || Boolean(payload && payload.constructor === type);
}




/***/ }),

/***/ "./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "concatArrays": () => (/* binding */ concatArrays),
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.esm.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!(0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(newComer)) {
        // extend merge rules
        if (extensions && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = __spreadArrays(props_1, symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!(0,is_what__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = __spreadArrays(props, symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

function concatArrays(originVal, newVal) {
    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(originVal) && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(newVal)) {
        // concat logic
        return originVal.concat(newVal);
    }
    return newVal; // always return newVal as fallback!!
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);



/***/ }),

/***/ "./node_modules/react-search-autocomplete/dist/components/ClearIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/components/ClearIcon.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0})),exports.ClearIcon=void 0;var _templateObject,_react=_interopRequireDefault(__webpack_require__(/*! react */ "react")),_propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types")),_styledComponents=_interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var ClearIcon=function(a){var b=a.showClear,c=a.setSearchString,d=a.searchString,e=a.setFocus,f=a.onClear;return b?0>=d.length?null:_react.default.createElement(StyledClearIcon,{className:"clear-icon",onClick:function(){c({target:{value:""}}),e(),f()}},_react.default.createElement("svg",{width:20,height:20,focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},_react.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.58 12 5 17.58 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}))):null};exports.ClearIcon=ClearIcon;var StyledClearIcon=_styledComponents.default.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  margin: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  > svg {\n    fill: ",";\n  }\n"])),function(a){return a.theme.clearIconMargin},function(a){return a.theme.iconColor});ClearIcon.propTypes={searchString:_propTypes.default.string.isRequired,setSearchString:_propTypes.default.func.isRequired,setFocus:_propTypes.default.func,showClear:_propTypes.default.bool,onClear:_propTypes.default.func,onSearch:_propTypes.default.func};

/***/ }),

/***/ "./node_modules/react-search-autocomplete/dist/components/ReactSearchAutocomplete.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/components/ReactSearchAutocomplete.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports, "__esModule", ({value:!0})),exports.default=ReactSearchAutocomplete,exports.MAX_RESULTS=exports.DEFAULT_INPUT_DEBOUNCE=void 0;var _templateObject,_react=_interopRequireWildcard(__webpack_require__(/*! react */ "react")),_propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types")),_fuse=_interopRequireDefault(__webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js")),_config=__webpack_require__(/*! ../config/config */ "./node_modules/react-search-autocomplete/dist/config/config.js"),_Results=_interopRequireDefault(__webpack_require__(/*! ./Results */ "./node_modules/react-search-autocomplete/dist/components/Results.js")),_SearchInput=_interopRequireDefault(__webpack_require__(/*! ./SearchInput */ "./node_modules/react-search-autocomplete/dist/components/SearchInput.js")),_styledComponents=_interopRequireWildcard(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js")),_utils=__webpack_require__(/*! ../utils/utils */ "./node_modules/react-search-autocomplete/dist/utils/utils.js");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){var c=a&&("undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"]);if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var DEFAULT_INPUT_DEBOUNCE=200;exports.DEFAULT_INPUT_DEBOUNCE=200;var MAX_RESULTS=10;exports.MAX_RESULTS=10;function ReactSearchAutocomplete(a){var b=a.items,c=a.fuseOptions,d=a.inputDebounce,e=a.onSearch,f=a.onHover,g=a.onSelect,h=a.onFocus,i=a.onClear,j=a.showIcon,k=a.showClear,l=a.maxResults,m=a.placeholder,n=a.autoFocus,o=a.styling,p=a.resultStringKeyName,q=a.inputSearchString,r=_objectSpread(_objectSpread({},_config.defaultTheme),o),s=_objectSpread(_objectSpread({},_config.defaultFuseOptions),c),t=new _fuse.default(b,s);t.setCollection(b);var u=(0,_react.useState)(q),v=_slicedToArray(u,2),w=v[0],x=v[1],y=(0,_react.useState)(),z=_slicedToArray(y,2),A=z[0],B=z[1],C=function(a){var b=[];0<(null===a||void 0===a?void 0:a.length)?(b=E(a),B(b),e(a,b)):B(b)},D=_react.default.useCallback(0<d?(0,_utils.debounce)(function(a){return C(a)},d):function(a){return C(a)},[b]);(0,_react.useEffect)(function(){x(q)},[q]),(0,_react.useEffect)(function(){0<(null===w||void 0===w?void 0:w.length)&&0<(null===A||void 0===A?void 0:A.length)&&B(E(w))},[b]);var E=function(a){return t.search(a,{limit:l}).map(function(a){return _objectSpread({},a.item)}).slice(0,l)};return _react.default.createElement(_styledComponents.ThemeProvider,{theme:r},_react.default.createElement(StyledReactSearchAutocomplete,null,_react.default.createElement("div",{className:"wrapper"},_react.default.createElement(_SearchInput.default,{searchString:w,setSearchString:function(a){var b=a.target,c=b.value;x(c),D(c)},autoFocus:n,onBlur:function(){return B([])},onFocus:h,onClear:i,placeholder:m,showIcon:j,showClear:k}),_react.default.createElement(_Results.default,{results:A,onClick:function(a){B([]),g(a)},onHover:f,setSearchString:x,showIcon:j,maxResults:l,resultStringKeyName:p}))))}ReactSearchAutocomplete.defaultProps={items:[],fuseOptions:_config.defaultFuseOptions,onSearch:function(){},onHover:function(){},onSelect:function(){},onClear:function(){},inputDebounce:200,showIcon:!0,showClear:!0,maxResults:10,placeholder:"",autoFocus:!1,onFocus:function(){},styling:{},resultStringKeyName:"name",inputSearchString:""},ReactSearchAutocomplete.propTypes={items:_propTypes.default.array,fuseOptions:_propTypes.default.object,inputDebounce:_propTypes.default.number,onSearch:_propTypes.default.func,onHover:_propTypes.default.func,onSelect:_propTypes.default.func,onClear:_propTypes.default.func,onFocus:_propTypes.default.func,showIcon:_propTypes.default.bool,showClear:_propTypes.default.bool,maxResults:_propTypes.default.number,placeholder:_propTypes.default.string,autoFocus:_propTypes.default.bool,styling:_propTypes.default.object,resultStringKeyName:_propTypes.default.string,inputSearchString:_propTypes.default.string};var StyledReactSearchAutocomplete=_styledComponents.default.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n\n  height: ",";\n\n  > .wrapper {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    border: ",";\n    border-radius: ",";\n\n    background-color: ",";\n    color: ",";\n\n    font-size: ",";\n    font-family: ",";\n\n    z-index: ",";\n\n    &:hover {\n      box-shadow: ",";\n    }\n    &:active {\n      box-shadow: ",";\n    }\n    &:focus-within {\n      box-shadow: ",";\n    }\n  }\n"])),function(a){return parseInt(a.theme.height)+2+"px"},function(a){return a.theme.border},function(a){return a.theme.borderRadius},function(a){return a.theme.backgroundColor},function(a){return a.theme.color},function(a){return a.theme.fontSize},function(a){return a.theme.fontFamily},function(a){return a.theme.zIndex},function(a){return a.theme.boxShadow},function(a){return a.theme.boxShadow},function(a){return a.theme.boxShadow});

/***/ }),

/***/ "./node_modules/react-search-autocomplete/dist/components/Results.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/components/Results.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0})),exports.default=Results;var _templateObject,_react=_interopRequireDefault(__webpack_require__(/*! react */ "react")),_propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types")),_SearchIcon=__webpack_require__(/*! ./SearchIcon */ "./node_modules/react-search-autocomplete/dist/components/SearchIcon.js"),_styledComponents=_interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function Results(a){var b=a.results,c=a.onClick,d=a.setSearchString,e=a.showIcon,f=a.maxResults,g=a.resultStringKeyName,h=a.onHover,i=function(a){c(a),d(a[g])};return 0>=(null===b||void 0===b?void 0:b.length)?null:_react.default.createElement(StyledResults,null,_react.default.createElement("div",{className:"line"}),_react.default.createElement("ul",null,b.slice(0,f).map(function(a){return _react.default.createElement("li",{onMouseEnter:function(){return h(a)},"data-test":"result",key:"rsa-result-".concat(a.id),onMouseDown:function(){return i(a)},onClick:function(){return i(a)}},_react.default.createElement(_SearchIcon.SearchIcon,{showIcon:e}),_react.default.createElement("div",{className:"ellipsis",title:a[g]},a[g]))})))}Results.defaultProps={results:[],setDisplayString:function(){},resultStringKeyName:"name"},Results.propTypes={results:_propTypes.default.array,onClick:_propTypes.default.func,setSearchString:_propTypes.default.func,showIcon:_propTypes.default.bool,maxResults:_propTypes.default.number,resultStringKeyName:_propTypes.default.string};var StyledResults=_styledComponents.default.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  > div.line {\n    border-top-color: ",";\n    border-top-style: solid;\n    border-top-width: 1px;\n\n    margin-bottom: 0px;\n    margin-left: 14px;\n    margin-right: 20px;\n    margin-top: 0px;\n\n    padding-bottom: 4px;\n  }\n\n  > ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0px 0 16px 0;\n    max-height: ",";\n\n    > li {\n      display: flex;\n      align-items: center;\n      padding: 4px 0 4px 0;\n\n      &:hover {\n        background-color: ",";\n        cursor: default;\n      }\n\n      > div {\n        margin-left: 13px;\n      }\n    }\n  }\n  .ellipsis {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])),function(a){return a.theme.lineColor},function(a){return a.theme.maxHeight},function(a){return a.theme.hoverBackgroundColor});

/***/ }),

/***/ "./node_modules/react-search-autocomplete/dist/components/SearchIcon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/components/SearchIcon.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0})),exports.SearchIcon=void 0;var _templateObject,_react=_interopRequireDefault(__webpack_require__(/*! react */ "react")),_propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types")),_styledComponents=_interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var SearchIcon=function(a){var b=a.showIcon;return b?_react.default.createElement(StyledSearchIcon,{className:"search-icon",width:20,height:20,focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},_react.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})):null};exports.SearchIcon=SearchIcon;var StyledSearchIcon=_styledComponents.default.svg(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  flex-shrink: 0;\n  margin: ",";\n  fill: ",";\n"])),function(a){return a.theme.searchIconMargin},function(a){return a.theme.iconColor});SearchIcon.propTypes={showIcon:_propTypes.default.bool};

/***/ }),

/***/ "./node_modules/react-search-autocomplete/dist/components/SearchInput.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/components/SearchInput.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports, "__esModule", ({value:!0})),exports.default=SearchInput;var _templateObject,_react=_interopRequireWildcard(__webpack_require__(/*! react */ "react")),_propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types")),_SearchIcon=__webpack_require__(/*! ./SearchIcon */ "./node_modules/react-search-autocomplete/dist/components/SearchIcon.js"),_styledComponents=_interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js")),_ClearIcon=__webpack_require__(/*! ./ClearIcon */ "./node_modules/react-search-autocomplete/dist/components/ClearIcon.js");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function SearchInput(a){var b=a.searchString,c=a.setSearchString,d=a.autoFocus,e=a.onBlur,f=a.onFocus,g=a.onClear,h=a.placeholder,i=a.showIcon,j=a.showClear,k=(0,_react.useRef)(),l=!0,m=function(){l&&f()};return _react.default.createElement(StyledSearchInput,null,_react.default.createElement(_SearchIcon.SearchIcon,{showIcon:i}),_react.default.createElement("input",{ref:k,spellCheck:!1,value:b,onChange:c,onBlur:e,onFocus:m,placeholder:h,autoFocus:d}),_react.default.createElement(_ClearIcon.ClearIcon,{showClear:j,setSearchString:c,searchString:b,onClear:g,setFocus:function(){l=!1,k.current.focus(),l=!0}}))}SearchInput.defaultProps={showIcon:!0,showClear:!0},SearchInput.propTypes={searchString:_propTypes.default.string.isRequired,setSearchString:_propTypes.default.func.isRequired,autoFocus:_propTypes.default.bool,onBlur:_propTypes.default.func.isRequired,onFocus:_propTypes.default.func,onClear:_propTypes.default.func,placeholder:_propTypes.default.string,showIcon:_propTypes.default.bool,showClear:_propTypes.default.bool};var StyledSearchInput=_styledComponents.default.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  min-height: ",";\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n\n  > input {\n    width: 100%;\n\n    padding: 0 0 0 13px;\n\n    border: none;\n    outline: none;\n\n    background-color: rgba(0, 0, 0, 0);\n    font-size: inherit;\n    font-family: inherit;\n\n    color: ",";\n\n    ::placeholder {\n      /* Chrome, Firefox, Opera, Safari 10.1+ */\n      color: ",";\n      opacity: 1; /* Firefox */\n    }\n\n    :-ms-input-placeholder {\n      /* Internet Explorer 10-11 */\n      color: ",";\n    }\n\n    ::-ms-input-placeholder {\n      /* Microsoft Edge */\n      color: ",";\n    }\n  }\n"])),function(a){return a.theme.height},function(a){return a.theme.color},function(a){return a.theme.placeholderColor},function(a){return a.theme.placeholderColor},function(a){return a.theme.placeholderColor});

/***/ }),

/***/ "./node_modules/react-search-autocomplete/dist/config/config.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/config/config.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0})),exports.defaultFuseOptions=exports.defaultTheme=void 0;var defaultTheme={height:"44px",border:"1px solid #dfe1e5",borderRadius:"24px",backgroundColor:"white",boxShadow:"rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",hoverBackgroundColor:"#eee",color:"#212121",fontSize:"16px",fontFamily:"Arial",iconColor:"grey",lineColor:"rgb(232, 234, 237)",placeholderColor:"grey",zIndex:0,clearIconMargin:"3px 14px 0 0",searchIconMargin:"0 0 0 16px"};exports.defaultTheme=defaultTheme;var defaultFuseOptions={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["name"]};exports.defaultFuseOptions=defaultFuseOptions;

/***/ }),

/***/ "./node_modules/react-search-autocomplete/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0})),Object.defineProperty(exports, "ReactSearchAutocomplete", ({enumerable:!0,get:function(){return _ReactSearchAutocomplete.default}}));var _ReactSearchAutocomplete=_interopRequireDefault(__webpack_require__(/*! ./components/ReactSearchAutocomplete.js */ "./node_modules/react-search-autocomplete/dist/components/ReactSearchAutocomplete.js"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}

/***/ }),

/***/ "./node_modules/react-search-autocomplete/dist/utils/utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-search-autocomplete/dist/utils/utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0})),exports.debounce=debounce,exports.isCached=void 0;function debounce(a,b,c){var d;return function(){var e=this,f=arguments;c&&!d&&a.apply(e,f),clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b)}}var isCached=function(a){a=a.toLowerCase();var b=JSON.parse(sessionStorage.getItem(a.toLowerCase()));return b?b:[]};exports.isCached=isCached;

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "createGlobalStyle": () => (/* binding */ createGlobalStyle),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "isStyledComponent": () => (/* binding */ isStyledComponent),
/* harmony export */   "keyframes": () => (/* binding */ keyframes),
/* harmony export */   "ServerStyleSheet": () => (/* binding */ ServerStyleSheet),
/* harmony export */   "StyleSheetConsumer": () => (/* binding */ StyleSheetConsumer),
/* harmony export */   "StyleSheetContext": () => (/* binding */ StyleSheetContext),
/* harmony export */   "StyleSheetManager": () => (/* binding */ StyleSheetManager),
/* harmony export */   "ThemeConsumer": () => (/* binding */ ThemeConsumer),
/* harmony export */   "ThemeContext": () => (/* binding */ ThemeContext),
/* harmony export */   "ThemeProvider": () => (/* binding */ ThemeProvider),
/* harmony export */   "withTheme": () => (/* binding */ withTheme),
/* harmony export */   "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS": () => (/* binding */ __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS)
/* harmony export */ });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "stylis/stylis.min");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "@emotion/unitless");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_unitless__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "react-is");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "memoize-one");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stream */ "stream");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/is-prop-valid */ "@emotion/is-prop-valid");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! merge-anything */ "./node_modules/merge-anything/dist/index.esm.js");











// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : 0) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : 0;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new (stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default())({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new (stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default())({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : 0;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;

  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.1" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    // $FlowFixMe
    if (el.isConnected === false) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.1" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return (0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in (_emotion_unitless__WEBPACK_IMPORTED_MODULE_3___default()))) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isElement)(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic =  false && 0;
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : 0);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__.ForwardRef] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = memoize_one__WEBPACK_IMPORTED_MODULE_5___default()(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      ThemeContext.Provider,
      { value: context },
      this.props.children
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    if (IS_BROWSER) {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new (stream__WEBPACK_IMPORTED_MODULE_6___default().Transform)({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = memoize_one__WEBPACK_IMPORTED_MODULE_5___default()(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children) : 0
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default().instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_7___default().instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    appendChild: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired)
  })
} : 0;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ( true && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_8___default()(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');

    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ( true && react__WEBPACK_IMPORTED_MODULE_2___default().isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ( true && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? (0,merge_anything__WEBPACK_IMPORTED_MODULE_9__.default)(target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ( true && react__WEBPACK_IMPORTED_MODULE_2___default().Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ( true && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ( true && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

//# sourceMappingURL=styled-components.esm.js.map


/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/***/ ((module) => {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		0
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "@emotion/is-prop-valid":
/*!*****************************************!*\
  !*** external "@emotion/is-prop-valid" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/is-prop-valid");;

/***/ }),

/***/ "@emotion/unitless":
/*!************************************!*\
  !*** external "@emotion/unitless" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/unitless");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "memoize-one":
/*!******************************!*\
  !*** external "memoize-one" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("memoize-one");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");;

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");;

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

/***/ "reload":
/*!*************************!*\
  !*** external "reload" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("reload");;

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("serialize-javascript");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ "stylis/stylis.min":
/*!************************************!*\
  !*** external "stylis/stylis.min" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("stylis/stylis.min");;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
  console.log(store.getState());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvUm91dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3NwZWNpYWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy90b2FzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3RvcGljLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy91aS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3ZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9BZGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0NoZXZyb25zLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaWNvbnMvRGVsZXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9Mb2NrLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9SZWFkLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NsaWVudFN0b3JlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0Jsb2cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvTGVhcm4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9QcmV2aWV3LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVXBzZXJ0QXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9VcHNlcnRUb3BpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydFZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvUHJpdmF0ZVJvdXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvU2VvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9zZXRBdXRoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0J1dHRvbnMvVXNlckJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0J1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL05hdmJhci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL1NpZ25lZEluTGlua3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L05hdmJhci9TaWduZWRPdXRMaW5rcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy9hcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvc3BlY2lhbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy90b3BpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy91aS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy92aWRlby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9hYm91dC9BYm91dFVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Fib3V0L1F1ZXN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9hcnRpY2xlL0xpa2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvYmxvZy9BbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvYmxvZy9GZWF0dXJlZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ibG9nL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvZWRpdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2hvbWUvSGVyby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ob21lL0hlcm9DYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9sZWFybi9BcnRpY2xlTmFtZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvbGVhcm4vQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9sZWFybi9WaWRlb05hbWVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL3ByZXZpZXcvQXJ0aWNsZVByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvcHJldmlldy9Ub3BpY3NPdmVydmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9wcmV2aWV3L1ZpZGVvUHJldmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaW1nL2NnVHJhbnNwYXJlbnQuUE5HIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmVzbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL25vZGVfbW9kdWxlcy9pcy13aGF0L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL21lcmdlLWFueXRoaW5nL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlYXJjaC1hdXRvY29tcGxldGUvZGlzdC9jb21wb25lbnRzL0NsZWFySWNvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWFyY2gtYXV0b2NvbXBsZXRlL2Rpc3QvY29tcG9uZW50cy9SZWFjdFNlYXJjaEF1dG9jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWFyY2gtYXV0b2NvbXBsZXRlL2Rpc3QvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlYXJjaC1hdXRvY29tcGxldGUvZGlzdC9jb21wb25lbnRzL1NlYXJjaEljb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VhcmNoLWF1dG9jb21wbGV0ZS9kaXN0L2NvbXBvbmVudHMvU2VhcmNoSW5wdXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VhcmNoLWF1dG9jb21wbGV0ZS9kaXN0L2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VhcmNoLWF1dG9jb21wbGV0ZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlYXJjaC1hdXRvY29tcGxldGUvZGlzdC91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9kaXN0L3N0eWxlZC1jb21wb25lbnRzLmVzbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL25vZGVfbW9kdWxlcy9zdHlsaXMtcnVsZS1zaGVldC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcIkBlbW90aW9uL2lzLXByb3AtdmFsaWRcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcIkBlbW90aW9uL3VuaXRsZXNzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcIm1lbW9pemUtb25lXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaHRtbC1wYXJzZXJcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtdGlwcHlcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVsb2FkXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJzdHlsaXMvc3R5bGlzLm1pblwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaXNDbGllbnQiLCJsb2NhbFN0b3JhZ2UiLCJ0b2tlbiIsIkFwcCIsInN0b3JlIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwicm91dGVzIiwibWFwIiwicGF0aCIsImNvbXBvbmVudCIsInJlbmRlciIsIkhvbWUiLCJBYm91dCIsIkxlYXJuIiwiQXJ0aWNsZSIsIlByZXZpZXciLCJCbG9nIiwicHJvcHMiLCJjbGVhckFydGljbGUiLCJpZCIsInR5cGUiLCJnZXRBcnRpY2xlIiwicmVzIiwiZGF0YSIsInBheWxvYWQiLCJlcnJvciIsImdldEFsbEFydGljbGVzIiwic3RhdHVzIiwiYWRkQXJ0aWNsZSIsImVkaXRBcnRpY2xlIiwic3BlY2lhbGl0eU5hbWUiLCJyZXMyIiwiZGVsZXRlQXJ0aWNsZSIsImFydGljbGVJZCIsInRvcGljSWQiLCJsb2FkVXNlciIsInVzZXJJZCIsImdldEl0ZW0iLCJ1c2VyIiwiZXJyIiwiQVVUSF9FUlJPUiIsInJlZnJlc2hVc2VyIiwiVVNFUl9MT0FERUQiLCJyZWdpc3RlciIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJSRUdJU1RFUl9GQUlMIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJsb2dvdXQiLCJjbGVhciIsInNlbmRSZXNldEVtYWlsIiwiY29uZmlnIiwibWVzc2FnZXNBcnJheSIsIm1lc3NhZ2VzIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJtc2ciLCJTRU5EX1JFU0VUX0VNQUlMIiwiZXJyb3JzIiwicmVzcG9uc2UiLCJTRU5EX1JFU0VUX0VNQUlMX0ZBSUwiLCJnZXRTcGVjaWFsaXRpZXMiLCJjbGVhclNwZWNpYWxpdHkiLCJnZXRTcGVjaWFsaXR5Iiwic3BlY2lhbGl0eSIsImFkZFNwZWNpYWxpdHkiLCJlZGl0U3BlY2lhbGl0eSIsImRlbGV0ZVNwZWNpYWxpdHkiLCJzdWNjZXNzVG9hc3QiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImVycm9yVG9hc3QiLCJnZXRUb3BpY3MiLCJhZGRUb3BpYyIsImVkaXRUb3BpYyIsInVubG9ja1RvcGljIiwiZGVsZXRlVG9waWMiLCJTRVRfQUxFUlQiLCJSRU1PVkVfQUxFUlQiLCJMT0dPVVQiLCJzZXRPcGVuVG9waWNzIiwib3BlblRvcGljc0FycmF5IiwiZ2V0U3RhdGUiLCJ1aSIsIm9wZW5Ub3BpY3MiLCJpbmNsdWRlcyIsInB1c2giLCJzcGxpY2UiLCJpbmRleE9mIiwic2V0RGlzcGxheU1vZGUiLCJkaXNwbGF5TW9kZSIsInNldEl0ZW0iLCJnZXRWaWRlbyIsImFkZFZpZGVvIiwicmVzVG9waWMiLCJlZGl0VmlkZW8iLCJkZWxldGVWaWRlbyIsInZpZGVvSWQiLCJzZWxlY3RWaWRlbyIsInZpZGVvIiwiQWRkIiwic2l6ZSIsImNvbG9yIiwiQ2hldnJvbnNVcCIsIkNoZXZyb25zTGVmdCIsIkNyb3NzIiwiRGVsZXRlIiwiTG9jayIsImhhbmRsZXIiLCJVbmxvY2siLCJSZWFkIiwiVXBkYXRlIiwiaW5pdGlhbFN0YXRlIiwibWlkZGxld2FyZSIsInRodW5rIiwicm9vdFJlZHVjZXIiLCJvcGFjaXR5IiwidGV4dEFsaWduIiwibmFtZSIsIm1hdGNoIiwicGFyYW1zIiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJnZXRBcnRpY2xlRWZmZWN0IiwicmVwbGFjZSIsImdvVG9Ub3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaHRtbCIsImNvbnRlbnQiLCJwYWRkaW5nIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhdXRoIiwiQXV0aCIsInNldERhdGEiLCJkaW5UZXh0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInByZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYWdlIiwiY29kZVJlZmZlcmVkIiwiYXJ0aWNsZXMiLCJpc0FkbWluIiwiaGlzdG9yeSIsImxlbmd0aCIsImhvbWVDb250ZW50IiwiY2xvc2UiLCJzZXRDbG9zZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJmb250U2l6ZSIsIlVwc2VydEFydGljbGUiLCJzcGVjaWFsaXRpZXMiLCJwcmV2QXJ0aWNsZSIsInNldGNvbnRlbnQiLCJzZXRuYW1lIiwia2V5d29yZHMiLCJzZXRBcnRpY2xlS2V5d29yZHMiLCJmZWF0dXJlZCIsInNldGZlYXR1cmVkIiwidGh1bWJuYWlsVXJsIiwic2V0dGh1bWJuYWlsVXJsIiwic2Nyb2xsVG8iLCJlbGVtZW50Iiwid2luZG93Iiwic2Nyb2xsIiwiYmVoYXZpb3IiLCJsZWZ0IiwidG9wIiwib2Zmc2V0VG9wIiwiZWRpdCIsImhhbmRsZUVkaXRvciIsImhhbmRsZUVkaXQiLCJfaWQiLCJOYW1lIiwiaGFuZGxlQWRkIiwic2VsZWN0ZWRBcnRpY2xlIiwiVXBzZXJ0Q2FyZCIsInNldFN0YXRlIiwiZmV0Y2hEYXRhIiwiaW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJVcHNlcnRUb3BpYyIsImxvY2F0aW9uIiwibG9ja2VkIiwiaXNMb2NrZWQiLCJzcGVjaWFsaXR5SWQiLCJVcHNlcnRWaWRlbyIsInByZXZWaWRlbyIsInNldE5hbWUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidXJsIiwic2V0VXJsIiwic2VsZWN0ZWRWaWRlbyIsIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJTZW8iLCJ0aXRsZSIsImxhbmciLCJtZXRhIiwicmljaHJlc3VsdCIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsInByb3BlcnR5IiwiY29uY2F0IiwicmVsIiwiaHJlZiIsImlubmVySFRNTCIsInNlcnZpY2VQb3N0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInBvc3QiLCJTRVJWSUNFX1VSTCIsInRoZW4iLCJjYXRjaCIsInNlcnZpY2VHZXQiLCJnZXQiLCJzZXRBdXRoVG9rZW4iLCJkZWZhdWx0cyIsImNvbW1vbiIsIlRvb2x0aXBXcmFwcGVyIiwiY2hpbGRyZW4iLCJBZG1pbkJ1dHRvbnMiLCJBZG1pbkJ1dHRvbnNXcmFwcGVyIiwicGF0aG5hbWUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwib3V0bGluZSIsIklubmVyRGl2IiwiZGFyayIsImJnIiwiYmFja2dyb3VuZENvbG9yIiwiQnV0dG9uIiwiaXNCdXR0b24iLCJMb2NrQnV0dG9uIiwiRm9vdGVyU29jaWFsTWVkaWEiLCJGb290ZXIiLCJzZXRFbWFpbCIsInNldE1lc3NhZ2UiLCJzZXRGb290ZXJNZXNzYWdlIiwiTmF2YmFyIiwibmF2YmFyRXhwYW5kZWQiLCJzZXRuYXZiYXJFeHBhbmRlZCIsInN3aXRjaGVkIiwic2V0c3dpdGNoZWQiLCJtb2RlIiwicmVtb3ZlIiwiaW5uZXJIZWlnaHQiLCJMb2dvIiwid2lkdGgiLCJwb2ludHMiLCJTaWduZWRJbkxpbmtzIiwiU2lnbmVkT3V0TGlua3MiLCJQcmVsb2FkZXIiLCJhcnRpY2xlUmVkdWNlciIsImFjdGlvbiIsInRvcGljcyIsImxvYWRpbmciLCJhdXRoUmVkdWNlciIsInJvbGUiLCJyZW1vdmVJdGVtIiwidG9waWMiLCJzcGVjaWFsaXR5UmVkdWNlciIsInRvcGljUmVkdWNlciIsInVpUmVkdWNlciIsInZpZGVvUmVkdWNlciIsIlByb2ZpbGVDYXJkIiwiYmlvIiwicG9ydGZvbGlvVXJsIiwiaW5zdGFVcmwiLCJ0d2l0dGVyVXJsIiwiZ2l0aHViVXJsIiwiQWJvdXRVcyIsIm9uc2Nyb2xsIiwibXlGdW5jdGlvbiIsInNjcm9sbFkiLCJRdWVzdGlvbnMiLCJMaWtlIiwibGlrZUFydGljbGUiLCJsaWtlZCIsImxpa2VkQXJ0aWNsZXMiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJoYW5kbGVMaWtlIiwiQWxsIiwiRmVhdHVyZWQiLCJTaWRlYmFyIiwiaXRlbXMiLCJoYW5kbGVPblNlYXJjaCIsInN0cmluZyIsInJlc3VsdHMiLCJoYW5kbGVPbkhvdmVyIiwicmVzdWx0IiwiaGFuZGxlT25TZWxlY3QiLCJpdGVtIiwiaGFuZGxlT25Gb2N1cyIsInpJbmRleCIsIkhlcm8iLCJIZXJvQ2FyZHMiLCJoZXJvQmx1ZSIsImhlcm9PcmFuZ2UiLCJoZXJvR3JlZW4iLCJzY3JvbGxGdW5jdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiaW5uZXJXaWR0aCIsInNldFRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQXJ0aWNsZU5hbWVzIiwiaGFuZGxlRGVsZXRlIiwiQXJ0aWNsZU5hbWUiLCJjb25maXJtIiwicHJvbXB0IiwicG9zIiwiQ2FyZCIsImFsdCIsIlZpZGVvTmFtZXMiLCJWaWRlb05hbWUiLCJBcnRpY2xlUHJldmlldyIsIlNlbGVjdGVkQXJ0aWNsZSIsIlJlYWRNb3JlVXJsIiwiaGFuZGxlVW5sb2NrIiwiVG9waWNzT3ZlcnZpZXciLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsInNwbGl0Iiwiam9pbiIsInVuTG9ja2VkVG9waWNzIiwidmlkZW9zIiwiQWN0aW9uQnV0dG9ucyIsIlZpZGVvUHJldmlldyIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiaW5kZXgiLCJmcyIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwiYXBwIiwiZGV2IiwidXNlIiwiZXhwcmVzcyIsInN0YXRpYyIsInJlcSIsImFjdGl2ZVJvdXRlIiwiZmluZCIsInJvdXRlIiwicHJvbWlzZSIsImxvYWREYXRhIiwicmVhY3RNYXJrdXAiLCJmaW5hbEh0bWwiLCJzZW5kIiwiZW5kIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxrQ0FBa0M7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixnQ0FBZ0M7QUFDMUQsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsa0NBQWtDOztBQUU3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsVUFBVTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsVUFBVTtBQUN4RDtBQUNBLGVBQWUsMEJBQTBCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLGdDQUFnQyxjQUFjLEtBQUs7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsbUJBQW1CO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsaUJBQWlCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxNQUFNOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEMsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0Q0FBNEMsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsYUFBYSxLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsa0JBQWtCOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCOztBQUVBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUEsYUFBYSwwQkFBMEI7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9DQUFvQztBQUN6RCxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWUsa0JBQWtCOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLCtCQUErQixVQUFVO0FBQ3pDO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCOztBQUVBO0FBQ0Esc0JBQXNCLGtCQUFrQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBOztBQUVBLGVBQWUsMEJBQTBCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxhQUFhLG1CQUFtQjs7QUFFaEMsYUFBYSwwQkFBMEI7O0FBRXZDO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3J2RHBCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxJQUFJO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixZQUFZLFVBQVU7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0VTNVOztBQUUzRDtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0RBQWE7QUFDdEI7QUFDQSwwQkFBMEIsZ0RBQU87QUFDakM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFRO0FBQzFCLGlCQUFpQixpREFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQU87QUFDakM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUNBQXVDLHNEQUFhO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0IsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLFFBQVEsZ0RBQU8sZUFBZSxnREFBTztBQUNyQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUEsaUVBQWUsS0FBSyxFQUFDO0FBQ1U7Ozs7Ozs7Ozs7OztBQzVIbEIsOENBQTJDLENBQUMsU0FBUyxFQUFDLENBQUMsaUJBQWlCLFFBQVEsa0RBQWtELG1CQUFPLENBQUMsb0JBQU8scUNBQXFDLG1CQUFPLENBQUMsOEJBQVksNENBQTRDLG1CQUFPLENBQUMseUZBQW1CLEdBQUcsbUNBQW1DLDBCQUEwQixXQUFXLHFDQUFxQyxrRUFBa0UsS0FBSyx3QkFBd0IsR0FBRywwQkFBMEIsZ0ZBQWdGLHdFQUF3RSwwQ0FBMEMsR0FBRyxRQUFRLFVBQVUsV0FBVyxxQ0FBcUMsNEZBQTRGLHNDQUFzQywwR0FBMEcsVUFBVSxpQkFBaUIsV0FBVyw2SEFBNkgsZUFBZSxzQkFBc0IsS0FBSyxhQUFhLGdCQUFnQixLQUFLLG1CQUFtQiwrQkFBK0IsYUFBYSx5QkFBeUIsRUFBRSxxQkFBcUIsME87Ozs7Ozs7Ozs7O0FDQTkwQyxvQkFBb0IsMEJBQTBCLHVGQUF1RixnQkFBZ0IsYUFBYSxvR0FBb0csWUFBWSw4Q0FBMkMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxlQUFlLHlCQUF5QixtQkFBbUIsQ0FBQyw4QkFBOEIsUUFBUSxtREFBbUQsbUJBQU8sQ0FBQyxvQkFBTyxxQ0FBcUMsbUJBQU8sQ0FBQyw4QkFBWSxnQ0FBZ0MsbUJBQU8sQ0FBQyx3REFBUyxXQUFXLG1CQUFPLENBQUMsd0ZBQWtCLGtDQUFrQyxtQkFBTyxDQUFDLHNGQUFXLHVDQUF1QyxtQkFBTyxDQUFDLDhGQUFlLDZDQUE2QyxtQkFBTyxDQUFDLHlGQUFtQixVQUFVLG1CQUFPLENBQUMsb0ZBQWdCLEVBQUUsbUNBQW1DLDBCQUEwQixXQUFXLG9DQUFvQywwQ0FBMEMsa0JBQWtCLDJDQUEyQyxTQUFTLEdBQUcsb0NBQW9DLDRCQUE0QixnRUFBZ0UsV0FBVyxpQ0FBaUMsK0JBQStCLFFBQVEsMERBQTBELDZEQUE2RCxrREFBa0QseURBQXlELG1DQUFtQyxxQ0FBcUMsa0VBQWtFLEtBQUssd0JBQXdCLEdBQUcsNkJBQTZCLDRHQUE0Ryw0QkFBNEIsaUtBQWlLLDBDQUEwQyxNQUFNLG9EQUFvRCxvREFBb0QsZ01BQWdNLGdDQUFnQyxvQ0FBb0MsdUJBQXVCLElBQUksY0FBYyxTQUFTLG9DQUFvQywyRUFBMkUsWUFBWSx1QkFBdUIsSUFBSSxnQkFBZ0IsNkRBQTZELE9BQU8sU0FBUyxTQUFTLFFBQVEsSUFBSSxvQ0FBb0MsUUFBUSxjQUFjLFVBQVUsNEJBQTRCLDZCQUE2QixzQkFBc0IscUJBQXFCLGlDQUFpQyxzQ0FBc0MsMkJBQTJCLHVEQUF1RCxxQkFBcUIsU0FBUywwQkFBMEIsY0FBYyxtQkFBbUIsMkJBQTJCLDREQUE0RCwwQkFBMEIseUlBQXlJLGdFQUFnRSxFQUFFLFNBQVMsZ0NBQWdDLHlDQUF5QyxrREFBa0QsV0FBVywrQkFBK0IsOEJBQThCLEtBQUssbUJBQW1CLG1CQUFtQixJQUFJLG9DQUFvQyxnUkFBZ1IsMERBQTBELHlEQUF5RCxtQkFBbUIsMklBQTJJLFNBQVMsbUVBQW1FLGtFQUFrRSxZQUFZLGdCQUFnQixZQUFZLE1BQU0sZ0NBQWdDLEtBQUssc0NBQXNDLDRGQUE0RixNQUFNLGtCQUFrQixtQkFBbUIsUUFBUSxrQkFBa0IsdUJBQXVCLFNBQVMsY0FBYyxxRUFBcUUsUUFBUSxxR0FBcUcsb0JBQW9CLG9EQUFvRCwyQ0FBMkMseUJBQXlCLFVBQVUsK0JBQStCLGFBQWEsMERBQTBELGlEQUFpRCw4QkFBOEIsV0FBVywyRUFBMkUsS0FBSyxzQ0FBc0MscUVBQXFFLHFCQUFxQixzQkFBc0IscUJBQXFCLDBHQUEwRyxXQUFXLGlEQUFpRCxvQ0FBb0MsNGpCQUE0akIsa0pBQWtKLGtCQUFrQixrQkFBa0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLG9CQUFvQix5QkFBeUIsOEJBQThCLGlCQUFpQix1QkFBdUIsdUJBQXVCLHFCQUFxQixpQkFBaUIsd0JBQXdCLE9BQU8sZ0JBQWdCLHdCQUF3QixPQUFPLHNCQUFzQix3QkFBd0IsT0FBTyxLQUFLLG1CQUFtQix1Q0FBdUMsYUFBYSxzQkFBc0IsYUFBYSw0QkFBNEIsYUFBYSwrQkFBK0IsYUFBYSxxQkFBcUIsYUFBYSx3QkFBd0IsYUFBYSwwQkFBMEIsYUFBYSxzQkFBc0IsYUFBYSx5QkFBeUIsYUFBYSx5QkFBeUIsYUFBYSx5QkFBeUIsRTs7Ozs7Ozs7Ozs7QUNBenFPLDhDQUEyQyxDQUFDLFNBQVMsRUFBQyxDQUFDLGVBQWUsU0FBUyxrREFBa0QsbUJBQU8sQ0FBQyxvQkFBTyxxQ0FBcUMsbUJBQU8sQ0FBQyw4QkFBWSxlQUFlLG1CQUFPLENBQUMsNEZBQWMsMkNBQTJDLG1CQUFPLENBQUMseUZBQW1CLEdBQUcsbUNBQW1DLDBCQUEwQixXQUFXLHFDQUFxQyxrRUFBa0UsS0FBSyx3QkFBd0IsR0FBRyxvQkFBb0IsOEhBQThILGNBQWMsMElBQTBJLGlCQUFpQixzRUFBc0UsMENBQTBDLHdCQUF3QixZQUFZLDRFQUE0RSxZQUFZLG9CQUFvQixhQUFhLHNEQUFzRCxXQUFXLHNDQUFzQyxnQ0FBZ0MsUUFBUSxJQUFJLHNCQUFzQix3Q0FBd0MsNEJBQTRCLG9CQUFvQiw4TkFBOE4sMkhBQTJILDRCQUE0Qiw4QkFBOEIsNEJBQTRCLDJCQUEyQix3QkFBd0IseUJBQXlCLHNCQUFzQiw0QkFBNEIsS0FBSyxZQUFZLDRCQUE0QixnQkFBZ0IsNEJBQTRCLHNCQUFzQixjQUFjLHNCQUFzQiw0QkFBNEIsNkJBQTZCLG1CQUFtQixnQ0FBZ0MsMEJBQTBCLFNBQVMsaUJBQWlCLDRCQUE0QixTQUFTLE9BQU8sS0FBSyxlQUFlLDBCQUEwQix1QkFBdUIsOEJBQThCLEtBQUssbUJBQW1CLHlCQUF5QixhQUFhLHlCQUF5QixhQUFhLG9DQUFvQyxFOzs7Ozs7Ozs7OztBQ0F0OEUsOENBQTJDLENBQUMsU0FBUyxFQUFDLENBQUMsa0JBQWtCLFFBQVEsa0RBQWtELG1CQUFPLENBQUMsb0JBQU8scUNBQXFDLG1CQUFPLENBQUMsOEJBQVksNENBQTRDLG1CQUFPLENBQUMseUZBQW1CLEdBQUcsbUNBQW1DLDBCQUEwQixXQUFXLHFDQUFxQyxrRUFBa0UsS0FBSyx3QkFBd0IsR0FBRywyQkFBMkIsaUJBQWlCLHdEQUF3RCxvSEFBb0gsc0NBQXNDLCtPQUErTyxTQUFTLGtCQUFrQixZQUFZLGlJQUFpSSxnQkFBZ0IsY0FBYyxtQkFBbUIsZ0NBQWdDLGFBQWEseUJBQXlCLEVBQUUsc0JBQXNCLGtDOzs7Ozs7Ozs7OztBQ0F4d0Msb0JBQW9CLDBCQUEwQix1RkFBdUYsZ0JBQWdCLGFBQWEsb0dBQW9HLFlBQVksOENBQTJDLENBQUMsU0FBUyxFQUFDLENBQUMsZUFBZSxhQUFhLG1EQUFtRCxtQkFBTyxDQUFDLG9CQUFPLHFDQUFxQyxtQkFBTyxDQUFDLDhCQUFZLGVBQWUsbUJBQU8sQ0FBQyw0RkFBYywyQ0FBMkMsbUJBQU8sQ0FBQyx5RkFBbUIsY0FBYyxtQkFBTyxDQUFDLDBGQUFhLEVBQUUsbUNBQW1DLDBCQUEwQixXQUFXLG9DQUFvQywwQ0FBMEMsa0JBQWtCLDJDQUEyQyxTQUFTLEdBQUcsb0NBQW9DLDRCQUE0QixnRUFBZ0UsV0FBVyxpQ0FBaUMsK0JBQStCLFFBQVEsMERBQTBELDZEQUE2RCxrREFBa0QseURBQXlELG1DQUFtQyxxQ0FBcUMsa0VBQWtFLEtBQUssd0JBQXdCLEdBQUcsd0JBQXdCLDZLQUE2SyxRQUFRLGdIQUFnSCxXQUFXLHdDQUF3QyxvRkFBb0YscURBQXFELDJFQUEyRSw2QkFBNkIsR0FBRywwQkFBMEIseUJBQXlCLHdCQUF3QiwyVkFBMlYsbUlBQW1JLGdCQUFnQixvQkFBb0Isd0JBQXdCLGVBQWUsa0JBQWtCLDRCQUE0QixxQkFBcUIsb0JBQW9CLDJDQUEyQyx5QkFBeUIsMkJBQTJCLG1CQUFtQix1QkFBdUIscUVBQXFFLG1CQUFtQixxQkFBcUIsZ0NBQWdDLHdEQUF3RCxPQUFPLGlDQUFpQywrQ0FBK0MsT0FBTyxLQUFLLG1CQUFtQixzQkFBc0IsYUFBYSxxQkFBcUIsYUFBYSxnQ0FBZ0MsYUFBYSxnQ0FBZ0MsYUFBYSxnQ0FBZ0MsRTs7Ozs7Ozs7Ozs7QUNBaDJHLDhDQUEyQyxDQUFDLFNBQVMsRUFBQyxDQUFDLDBCQUEwQixDQUFDLG9CQUFvQixRQUFRLGtCQUFrQixzV0FBc1csb0JBQW9CLGNBQWMsd0JBQXdCLDJHQUEyRywwQkFBMEIsb0I7Ozs7Ozs7Ozs7O0FDQXJxQiw4Q0FBMkMsQ0FBQyxTQUFTLEVBQUMsQ0FBQywyREFBd0QsQ0FBQyw2QkFBNkIseUNBQXlDLEVBQUMsQ0FBQyxvREFBb0QsbUJBQU8sQ0FBQyxvSUFBeUMsR0FBRyxtQ0FBbUMsMEJBQTBCLFc7Ozs7Ozs7Ozs7O0FDQTdWLDhDQUEyQyxDQUFDLFNBQVMsRUFBQyxDQUFDLGdCQUFnQixVQUFVLGdCQUFnQixRQUFRLHlCQUF5QixNQUFNLGtCQUFrQix1QkFBdUIsNERBQTRELHVCQUF1QixLQUFLLHlCQUF5QixrQkFBa0IsMERBQTBELGVBQWUsZ0JBQWdCLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW5YO0FBQ1c7QUFDbUM7QUFDNUM7QUFDNEI7QUFDbkM7QUFDTjtBQUNPO0FBQ1k7QUFDWjs7QUFFbkM7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFVLEtBQXFDLDBDQUEwQyxDQUFLO0FBQzlGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG9NQUFvTSxhQUFvQjs7QUFFeE47QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFxQztBQUNsRDtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxTQUFTLEVBQUU7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHQUFHLENBQUU7O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0dBQWdHLGFBQWE7QUFDN0c7QUFDQTs7QUFFQSxRQUFRLEtBQXFDLEVBQUUsY0FFMUM7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsNkJBQTZCLG1EQUFtRDtBQUNoRjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWixHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBLHlCQUF5QiwwREFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlCQUFpQiwwREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix3REFBaUI7QUFDeEM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwREFBMEQ7O0FBRTFELGlFQUFpRSxrQkFBa0I7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUM1RSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsMERBQW1CLHFCQUFxQixVQUFVLDJCQUEyQixnQkFBZ0IsRUFBRTtBQUMxRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxXQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QVUsZ0VBQWdFO0FBQ3JJO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWdCO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0RBQXNELHVEQUFLO0FBQzNEO0FBQ0EsR0FBRzs7QUFFSCxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhGQUE4RixhQUFhO0FBQzNHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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LFVBQVAscUJBQ0MsNkJBQUMsb0JBQUQ7QUFBVSxXQUFLLEVBQUVqWDtBQUFqQixvQkFDQyw2QkFBQyw0QkFBRDtBQUFjLGNBQVEsRUFBRTJXLEdBQUcsQ0FBQzVKLEdBQTVCO0FBQWlDLGFBQU8sRUFBRTtBQUExQyxvQkFDQyw2QkFBQyxZQUFELE9BREQsQ0FERCxDQURELENBREQ7O0FBU0EsVUFBTXpFLElBQUksR0FBRyw0QkFBZTJPLFdBQWYsQ0FBYjtBQUNBLFFBQUlDLFNBQVMsR0FBR2hCLEtBQUssQ0FDbkJoTyxPQURjLENBQ04sdUJBRE0sRUFDb0Isa0JBQWlCSSxJQUFLLFFBRDFDLEVBRWRKLE9BRmMsQ0FHZCxVQUhjLEVBSWIsMkJBQTBCLGtDQUFVbEksS0FBSyxDQUFDd0YsUUFBTixFQUFWLEVBQTRCMEMsT0FBNUIsQ0FDMUIsSUFEMEIsRUFFMUIsU0FGMEIsQ0FHekIsRUFQWSxDQUFoQjtBQVNBaEksV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QitXLFNBQXZCO0FBQ0E5VixPQUFHLENBQUMrVixJQUFKLENBQVNELFNBQVQ7QUFDQTlWLE9BQUcsQ0FBQ2dXLEdBQUo7QUFDQSxHQXZCRDtBQXdCQSxDQWxDRDtBQW9DQWQsR0FBRyxDQUFDZSxNQUFKLENBQVd0QixJQUFYLEVBQWlCLE1BQU03VixPQUFPLENBQUNDLEdBQVIsQ0FBYSxnQkFBZTRWLElBQUssRUFBakMsQ0FBdkIsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgUmVkaXJlY3QsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gJy4vYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IHNldEF1dGhUb2tlbiwgaXNDbGllbnQgfSBmcm9tICcuL2hlbHBlcnMvc2V0QXV0aFRva2VuJztcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vY2xpZW50U3RvcmUnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL1JvdXRlcyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbGF5b3V0L05hdmJhci9OYXZiYXInO1xuXG5pZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnRva2VuKSB7XG5cdHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2UudG9rZW4pO1xufVxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c3RvcmUuZGlzcGF0Y2gobG9hZFVzZXIoKSk7XG5cdH0sIFtdKTtcblx0Y29uc29sZS5sb2coJ2FwcCwgY2hlY2tpbmcgd29ya2luZycpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxuXHRcdFx0PE5hdmJhciAvPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nLyc+XG5cdFx0XHRcdFx0XHQ8UmVkaXJlY3QgdG89Jy9ob21lJyAvPlxuXHRcdFx0XHRcdDwvUm91dGU+XG5cdFx0XHRcdFx0e3JvdXRlcy5tYXAoKHsgcGF0aCwgY29tcG9uZW50LCByZW5kZXIgfSkgPT4gKFxuXHRcdFx0XHRcdFx0PFJvdXRlXG5cdFx0XHRcdFx0XHRcdGtleT17cGF0aH1cblx0XHRcdFx0XHRcdFx0cGF0aD17cGF0aH1cblx0XHRcdFx0XHRcdFx0ZXhhY3Rcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50PXtjb21wb25lbnR9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17cmVuZGVyfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxUb2FzdENvbnRhaW5lciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQnO1xuaW1wb3J0IExlYXJuIGZyb20gJy4vY29tcG9uZW50cy9MZWFybic7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aWNsZSc7XG5pbXBvcnQgUHJldmlldyBmcm9tICcuL2NvbXBvbmVudHMvUHJldmlldyc7XG5pbXBvcnQgQmxvZyBmcm9tICcuL2NvbXBvbmVudHMvQmxvZyc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL2NvbXBvbmVudHMvQXV0aCc7XG5pbXBvcnQgVXBzZXJ0Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0Q2FyZCc7XG5pbXBvcnQgVXBzZXJ0VG9waWMgZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydFRvcGljJztcbmltcG9ydCBVcHNlcnRBcnRpY2xlIGZyb20gJy4vY29tcG9uZW50cy9VcHNlcnRBcnRpY2xlJztcbmltcG9ydCBVcHNlcnRWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0VmlkZW8nO1xuLy8gaW1wb3J0IFByaXZhdGVSb3V0ZSBmcm9tICcuL2hlbHBlcnMvUHJpdmF0ZVJvdXRlJztcblxuY29uc3Qgcm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogJy9ob21lJyxcblx0XHRjb21wb25lbnQ6IEhvbWUsXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnL2Fib3V0Jyxcblx0XHRjb21wb25lbnQ6IEFib3V0LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogJy9sZWFybicsXG5cdFx0Y29tcG9uZW50OiBMZWFybixcblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvYmxvZy9yZWFkLzpuYW1lJyxcblx0XHRjb21wb25lbnQ6IEFydGljbGUsXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnL2xlYXJuLzpzcGVjaWFsaXR5TmFtZScsXG5cdFx0Y29tcG9uZW50OiBQcmV2aWV3LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogJy9ibG9nJyxcblx0XHRjb21wb25lbnQ6IEJsb2csXG5cblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvc2lnbnVwJyxcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPEF1dGggey4uLnByb3BzfSB0eXBlPXsnc2lnbnVwJ30gLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnL3NpZ251cC86cmVmZXJDb2RlJyxcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPEF1dGggey4uLnByb3BzfSB0eXBlPXsnc2lnbnVwJ30gLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnL2xvZ2luJyxcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPEF1dGggey4uLnByb3BzfSB0eXBlPXsnbG9naW4nfSAvPixcblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvQWRkQ2FyZCcsXG5cdFx0cmVuZGVyOiAocHJvcHMpID0+IDxVcHNlcnRDYXJkIGVkaXQ9e2ZhbHNlfSB7Li4ucHJvcHN9IC8+LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogJy91cGRhdGVzcGVjaWFsaXR5LzpzcGVjaWFsaXR5TmFtZScsXG5cdFx0cmVuZGVyOiAocHJvcHMpID0+IDxVcHNlcnRDYXJkIGVkaXQ9e3RydWV9IHsuLi5wcm9wc30gLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnLzpzcGVjaWFsaXR5TmFtZS90b3BpYy9hZGQnLFxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0VG9waWMgZWRpdD17ZmFsc2V9IHsuLi5wcm9wc30gLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnLzpzcGVjaWFsaXR5TmFtZS90b3BpYy9lZGl0Lzp0b3BpY0lkJyxcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydFRvcGljIGVkaXQ9e3RydWV9IHsuLi5wcm9wc30gLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnL2FydGljbGUvYWRkJyxcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydEFydGljbGUgZWRpdD17ZmFsc2V9IHsuLi5wcm9wc30gLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnL2FydGljbGUvdXBkYXRlJyxcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydEFydGljbGUgZWRpdD17dHJ1ZX0gey4uLnByb3BzfSAvPixcblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvdmlkZW8vYWRkLzp0b3BpY0lkJyxcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydFZpZGVvIGVkaXQ9e2ZhbHNlfSB7Li4ucHJvcHN9IC8+LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogJy92aWRlby91cGRhdGUvOnZpZGVvSWQnLFxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0VmlkZW8gZWRpdD17dHJ1ZX0gey4uLnByb3BzfSAvPixcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcbmV4cG9ydCBjb25zdCBjbGVhckFydGljbGUgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogJ0NMRUFSX0FSVElDTEUnLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXJ0aWNsZS9nZXQvJHtpZH1gKTtcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgc3VjY2Vzc1RvYXN0KHJlcylcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnR0VUX0FSVElDTEUnLFxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZXJyb3JUb2FzdChlcnJvcilcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnR0VUX0FSVElDTEVfRVJST1InLFxuICAgICAgcGF5bG9hZDoge30sXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxBcnRpY2xlcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hcnRpY2xlL2FsbGApO1xuICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpXG4gICAgc3VjY2Vzc1RvYXN0KHJlcylcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnR0VUX0FMTF9BUlRJQ0xFUycsXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvclRvYXN0KGVycm9yKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdHRVRfQUxMX0FSVElDTEVTX0VSUk9SJyxcbiAgICAgIHBheWxvYWQ6IHt9LFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQXJ0aWNsZSA9IChkYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvYXJ0aWNsZS9hZGRgLCBkYXRhLCB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnQUREX0FSVElDTEUnLFxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXG4gICAgfSk7XG4gICAgc3VjY2Vzc1RvYXN0KHJlcylcbiAgICAvLyBjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlczIuZGF0YSk7XG5cbiAgICAvLyBkaXNwYXRjaCh7XG4gICAgLy8gICB0eXBlOiAnR0VUX1RPUElDUycsXG4gICAgLy8gICBwYXlsb2FkOiByZXMyLmRhdGEsXG4gICAgLy8gfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZXJyb3JUb2FzdChlcnJvcilcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnQUREX0FSVElDTEVfRVJST1InLFxuICAgICAgcGF5bG9hZDoge30sXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0QXJ0aWNsZSA9IChkYXRhLCBpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvYXJ0aWNsZS91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnRURJVF9BUlRJQ0xFJyxcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG4gICAgY29uc29sZS5sb2cocmVzMi5kYXRhKTtcblxuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnR0VUX1RPUElDUycsXG4gICAgICBwYXlsb2FkOiByZXMyLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZXJyb3JUb2FzdChlcnJvcilcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnRURJVF9BUlRJQ0xFX0VSUk9SJyxcbiAgICAgIHBheWxvYWQ6IHt9LFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJ0aWNsZSA9IChhcnRpY2xlSWQsIHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoXG4gIGRpc3BhdGNoXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcbiAgICAgIGBhcGkvYXJ0aWNsZS9kZWxldGUvJHthcnRpY2xlSWR9LyR7dG9waWNJZH1gLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0RFTEVURV9BUlRJQ0xFJyxcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG4gICAgY29uc29sZS5sb2cocmVzMi5kYXRhKTtcblxuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnR0VUX1RPUElDUycsXG4gICAgICBwYXlsb2FkOiByZXMyLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZXJyb3JUb2FzdChlcnJvcilcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnREVMRVRFX0FSVElDTEVfRVJST1InLFxuICAgICAgcGF5bG9hZDoge30sXG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQge1xuXHRSRUdJU1RFUl9TVUNDRVNTLFxuXHRSRUdJU1RFUl9GQUlMLFxuXHRMT0dJTl9TVUNDRVNTLFxuXHRMT0dJTl9GQUlMLFxuXHRVU0VSX0xPQURFRCxcblx0QVVUSF9FUlJPUixcblx0U0VORF9SRVNFVF9FTUFJTCxcblx0U0VORF9SRVNFVF9FTUFJTF9GQUlMLFxufSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QsIHNldEF1dGhUb2tlbiwgaXNDbGllbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xuXG4vLyBMb2FkIFVzZXIgOiBFdmVyeSB0aW1lIHdlIGxvZ2dlZCBpbiBvciByZWdpc3RlciBvciByZWZyZXNoIHRoZSBwYWdlIGl0cyBnb25uYSBsb2FkLlxuXG5leHBvcnQgY29uc3QgbG9hZFVzZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0Y29uc29sZS5sb2coXCJsb2FkVXNlclwiKVxuXHRkaXNwYXRjaCh7XG5cdFx0dHlwZTogJ1NFVF9BVVRIX0xPQURFUicsXG5cdH0pO1xuXG5cdGNvbnNvbGUubG9nKGlzQ2xpZW50KVxuXHRpZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnRva2VuKSB7XG5cdFx0c2V0QXV0aFRva2VuKGxvY2FsU3RvcmFnZS50b2tlbik7XG5cdH1cblxuXG5cblx0aWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS51c2VySWQpIHtcblx0XHRjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL2F1dGgvdXNlci8ke3VzZXJJZH1gKTtcblx0XHRcdC8vIGRpc3BsYXlUb2FzdFxuXHRcdFx0c3VjY2Vzc1RvYXN0KHJlcyk7XG5cdFx0XHRjb25zb2xlLmxvZygndGhpcyBpcyB1c2VyJywgcmVzLmRhdGEpXG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6IFwiVVNFUl9MT0FERURcIixcblx0XHRcdFx0cGF5bG9hZDogcmVzLmRhdGEudXNlcixcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Ly8gZGlzcGxheSB0b2FzdFxuXHRcdFx0ZXJyb3JUb2FzdChlcnIpO1xuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiBBVVRIX0VSUk9SLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgcmVmcmVzaFVzZXIgPSAodXNlcikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiAnU0VUX0FVVEhfTE9BREVSJyxcblx0fSk7XG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudG9rZW4pIHtcblx0XHRzZXRBdXRoVG9rZW4obG9jYWxTdG9yYWdlLnRva2VuKTtcblx0fVxuXG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudXNlcklkKSB7XG5cdFx0Y29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdC8vIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hdXRoL3VzZXIvJHt1c2VySWR9YCk7XG5cdFx0XHRhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXV0aC91c2VyLyR7dXNlcklkfWApO1xuXG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6IFVTRVJfTE9BREVELFxuXHRcdFx0XHRwYXlsb2FkOiB1c2VyLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6IEFVVEhfRVJST1IsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IChkYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0ZGlzcGF0Y2goe1xuXHRcdHR5cGU6ICdTRVRfQVVUSF9MT0FERVInLFxuXHR9KTtcblx0Y29uc3QgaGVhZGVycyA9IHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHR9O1xuXG5cdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCdhcGkvYXV0aC9zaWdudXAnLCBib2R5LCBoZWFkZXJzKTtcblxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IHJlcy5zdGF0dXMgPT09IDEgPyBSRUdJU1RFUl9TVUNDRVNTIDogUkVHSVNURVJfRkFJTCxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcyk7XG5cblx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdGRpc3BhdGNoKGxvYWRVc2VyKCkpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBjb25zdCBlcnJvcnMgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG5cdFx0ZXJyb3JUb2FzdChlcnIpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IFJFR0lTVEVSX0ZBSUwsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9XG5cdCh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PlxuXHRcdGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiAnU0VUX0FVVEhfTE9BREVSJyxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgaGVhZGVycyA9IHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJ2FwaS9hdXRoL2xvZ2luJywgYm9keSwgaGVhZGVycyk7XG5cblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblxuXHRcdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdFx0dHlwZTogcmVzLnN0YXR1cyA9PT0gMSA/IExPR0lOX1NVQ0NFU1MgOiBMT0dJTl9GQUlMLFxuXHRcdFx0XHRcdHBheWxvYWQ6IHsgdXNlcklkOiByZXMuZGF0YT8udXNlcj8udXNlcklkLCB0b2tlbjogcmVzLmRhdGE/LnRva2VuIH0sXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGRpc3BhdGNoKGxvYWRVc2VyKCkpO1xuXHRcdFx0XHRzdWNjZXNzVG9hc3QocmVzKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0XHRlcnJvclRvYXN0KGVycik7XG5cdFx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0XHR0eXBlOiBMT0dJTl9GQUlMLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdGlmIChpc0NsaWVudCkgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiAnTE9HT1VUJyxcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFJlc2V0RW1haWwgPVxuXHQoeyBlbWFpbCB9KSA9PlxuXHRcdGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRcdFx0Y29uc3QgY29uZmlnID0ge1xuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCB9KTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJy9hcGkvZm9yZ290cGFzc3dvcmQnLCBib2R5LCBjb25maWcpO1xuXG5cdFx0XHRcdGNvbnN0IG1lc3NhZ2VzQXJyYXkgPSByZXMuZGF0YS5tZXNzYWdlcztcblx0XHRcdFx0Ly8gYnJhbmQgYWRkZWQgbWVzc2FnZSBhbGVydFxuXHRcdFx0XHRtZXNzYWdlc0FycmF5LmZvckVhY2goKG1lc3NhZ2UpID0+IGRpc3BhdGNoKChtZXNzYWdlLm1zZywgJ2RhbmdlcicpKSk7XG5cdFx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0XHR0eXBlOiBTRU5EX1JFU0VUX0VNQUlMLFxuXHRcdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zdCBlcnJvcnMgPSBlcnIgJiYgZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuXHRcdFx0XHRpZiAoZXJyb3JzKSB7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHRcdHR5cGU6IFNFTkRfUkVTRVRfRU1BSUxfRkFJTCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYXJ0aWNsZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgnO1xuZXhwb3J0ICogZnJvbSAnLi9zcGVjaWFsaXR5JztcbmV4cG9ydCAqIGZyb20gJy4vdG9waWMnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL3VpJztcbmV4cG9ydCAqIGZyb20gJy4vdmlkZW8nO1xuIiwiaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3BlY2lhbGl0aWVzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldCgnYXBpL3NwZWNpYWxpdHkvYWxsJyk7XG5cdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFUycsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRJRVNfRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhclNwZWNpYWxpdHkgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0ZGlzcGF0Y2goe1xuXHRcdHR5cGU6ICdDTEVBUl9TUEVDSUFMSVRZJyxcblx0XHRwYXlsb2FkOiB7fSxcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3BlY2lhbGl0eSA9IChzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL3NwZWNpYWxpdHkvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRZJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLnNwZWNpYWxpdHksXG5cdFx0fSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVFlfRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRTcGVjaWFsaXR5ID0gKGRhdGEpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCdhcGkvc3BlY2lhbGl0eS9hZGQnLCBkYXRhLCB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnQUREX1NQRUNJQUxJVElZJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KCdhcGkvc3BlY2lhbGl0eS9hbGwnKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFUycsXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXG5cdFx0fSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdBRERfU1BFQ0lBTElUWV9FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRTcGVjaWFsaXR5ID0gKGRhdGEsIGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3NwZWNpYWxpdHkvdXBkYXRlLyR7aWR9YCwgZGF0YSwge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9KTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnRURJVF9TUEVDSUFMSVRJWScsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldCgnYXBpL3NwZWNpYWxpdHkvYWxsJyk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRJRVMnLFxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxuXHRcdH0pO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnRURJVF9TUEVDSUFMSVRZX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlU3BlY2lhbGl0eSA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXG5cdFx0XHRgYXBpL3NwZWNpYWxpdHkvZGVsZXRlLyR7aWR9YCxcblx0XHRcdHt9LFxuXHRcdFx0e1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0RFTEVURV9TUEVDSUFMSVRJWScsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldCgnYXBpL3NwZWNpYWxpdHkvYWxsJyk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRJRVMnLFxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxuXHRcdH0pO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnREVMRVRFX1NQRUNJQUxJVFlfRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG4iLCJpbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuXG5leHBvcnQgY29uc3Qgc3VjY2Vzc1RvYXN0ID0gKHJlcykgPT4ge1xuICAgIHJlcy5zdGF0dXMgPT0gMSA/IHRvYXN0LnN1Y2Nlc3MocmVzLm1lc3NhZ2UsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgfSkgOiB0b2FzdC5lcnJvcihyZXMubWVzc2FnZSwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGVycm9yVG9hc3QgPSAoZXJyKSA9PiB7XG4gICAgdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgfSk7XG59IiwiaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XG5cbmV4cG9ydCBjb25zdCBnZXRUb3BpY3MgPSAoc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVG9waWMgPSAoZGF0YSwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRjb25zb2xlLmxvZyhzcGVjaWFsaXR5TmFtZSk7XG5cdHRyeSB7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS90b3BpYy9hZGRgLCBkYXRhLCB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0pO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdBRERfVE9QSUMnLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdFx0Ly8gcmVmcmVzaCB0b3BpY3Ncblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdBRERfVE9QSUNfRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0VG9waWMgPSAoZGF0YSwgaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3RvcGljL3VwZGF0ZS8ke2lkfWAsIGRhdGEsIHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdFRElUX1RPUElDJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnRURJVF9UT1BJQ19FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHVubG9ja1RvcGljID0gKHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0Y29uc29sZS5sb2coc3BlY2lhbGl0eU5hbWUpO1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxuXHRcdFx0YGFwaS90b3BpYy91bmxvY2svJHt0b3BpY0lkfWAsXG5cdFx0XHR7fSxcblx0XHRcdHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdH1cblx0XHQpO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ1VTRVJMT0FERUQnLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEudXNlcixcblx0XHR9KTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnVU5MT0NLX1RPUElDJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnVU5MT0NLX1RPUElDX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVG9waWMgPSAoaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0Y29uc29sZS5sb2coeyBpZCwgc3BlY2lhbGl0eU5hbWUgfSk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXG5cdFx0XHRgYXBpL3RvcGljL2RlbGV0ZS8ke2lkfWAsXG5cdFx0XHR7fSxcblx0XHRcdHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdH1cblx0XHQpO1xuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdERUxFVEVfVE9QSUMnLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnREVMRVRFX1RPUElDX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuIiwiZXhwb3J0IGNvbnN0IFNFVF9BTEVSVCA9ICdTRVRfQUxFUlQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9BTEVSVCA9ICdSRU1PVkVfQUxFUlQnO1xuXG5leHBvcnQgY29uc3QgTE9HSU5fU1VDQ0VTUyA9ICdMT0dJTl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMID0gJ0xPR0lOX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1NVQ0NFU1MgPSAnUkVHSVNURVJfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfRkFJTCA9ICdSRUdJU1RFUl9GQUlMJztcbmV4cG9ydCBjb25zdCBTRU5EX1JFU0VUX0VNQUlMID0gJ1NFTkRfUkVTRVRfRU1BSUwnO1xuZXhwb3J0IGNvbnN0IFNFTkRfUkVTRVRfRU1BSUxfRkFJTCA9ICdTRU5EX1JFU0VUX0VNQUlMX0ZBSUwnO1xuXG5leHBvcnQgY29uc3QgTE9HT1VUID0gJ0xPR09VVCc7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0xPQURFRCA9ICdVU0VSTE9BREVEJztcbmV4cG9ydCBjb25zdCBBVVRIX0VSUk9SID0gJ0FVVEhfRVJST1InO1xuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBjb25zdCBzZXRPcGVuVG9waWNzID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0Y29uc29sZS5sb2coaWQpO1xuXHRjb25zdCBvcGVuVG9waWNzQXJyYXkgPSBzdG9yZS5nZXRTdGF0ZSgpLnVpLm9wZW5Ub3BpY3M7XG5cdGlmICghb3BlblRvcGljc0FycmF5LmluY2x1ZGVzKGlkKSkge1xuXHRcdG9wZW5Ub3BpY3NBcnJheS5wdXNoKGlkKTtcblx0fSBlbHNlIHtcblx0XHRvcGVuVG9waWNzQXJyYXkuc3BsaWNlKG9wZW5Ub3BpY3NBcnJheS5pbmRleE9mKGlkKSwgMSk7XG5cdH1cblxuXHRkaXNwYXRjaCh7XG5cdFx0dHlwZTogJ1NFVF9PUEVOX1RPUElDUycsXG5cdFx0cGF5bG9hZDogb3BlblRvcGljc0FycmF5LFxuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXREaXNwbGF5TW9kZSA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRjb25zdCBkaXNwbGF5TW9kZSA9XG5cdFx0c3RvcmUuZ2V0U3RhdGUoKS51aS5kaXNwbGF5TW9kZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcblx0aWYgKGlzQ2xpZW50KSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9kZScsIGRpc3BsYXlNb2RlKTtcblxuXHRkaXNwYXRjaCh7XG5cdFx0dHlwZTogJ1NFVF9ESVNQTEFZX01PREUnLFxuXHRcdHBheWxvYWQ6IGRpc3BsYXlNb2RlLFxuXHR9KTtcbn07XG4iLCJpbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XG5cblxuXG5leHBvcnQgY29uc3QgZ2V0VmlkZW8gPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS92aWRlby9nZXQvJHtpZH1gKTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfVklERU8nLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnQUREX1ZJREVPX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVmlkZW8gPSAoZGF0YSwgaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS92aWRlby9hZGQvJHtpZH1gLCBkYXRhLCB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0pO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0FERF9WSURFTycsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHJlc1RvcGljID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuXHRcdGNvbnNvbGUubG9nKHJlc1RvcGljKTtcblxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcblx0XHRcdHBheWxvYWQ6IHJlc1RvcGljLmRhdGEsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdBRERfVklERU9fRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0VmlkZW8gPSAoZGF0YSwgaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3ZpZGVvL3VwZGF0ZS8ke2lkfWAsIGRhdGEsIHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdFRElUX1ZJREVPJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cblx0XHRjb25zdCByZXNUb3BpYyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcblxuXHRcdGNvbnNvbGUubG9nKHJlc1RvcGljLmRhdGEpO1xuXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxuXHRcdFx0cGF5bG9hZDogcmVzVG9waWMuZGF0YSxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdFRElUX1ZJREVPX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVmlkZW8gPVxuXHQodmlkZW9JZCwgdG9waWNJZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcblx0XHRcdFx0YGFwaS92aWRlby9kZWxldGUvJHt2aWRlb0lkfS8ke3RvcGljSWR9YCxcblx0XHRcdFx0e30sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiAnREVMRVRFX1ZJREVPJyxcblx0XHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMyLmRhdGEpO1xuXHRcdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxuXHRcdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogJ0RFTEVURV9WSURFT19FUlJPUicsXG5cdFx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0VmlkZW8gPSAodmlkZW8pID0+IChkaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdTRUxFQ1RfVklERU8nLFxuXHRcdFx0cGF5bG9hZDogdmlkZW8sXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ1NFTEVDVF9WSURFT19FUlJPUicsXG5cdFx0fSk7XG5cdH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEFkZCA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxuXHQ8c3ZnXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdHdpZHRoPXtzaXplfVxuXHRcdGhlaWdodD17c2l6ZX1cblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXG5cdFx0ZmlsbD0nbm9uZSdcblx0XHRzdHJva2U9e2NvbG9yfVxuXHRcdHN0cm9rZVdpZHRoPSczLjUnXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xuXHRcdHN0cm9rZUxpbmVqb2luPSdhcmNzJz5cblx0XHQ8bGluZSB4MT0nMTInIHkxPSc1JyB4Mj0nMTInIHkyPScxOSc+PC9saW5lPlxuXHRcdDxsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJz48L2xpbmU+XG5cdDwvc3ZnPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBDaGV2cm9uc1VwID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXG5cdDxzdmdcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0d2lkdGg9e3NpemV9XG5cdFx0aGVpZ2h0PXtzaXplfVxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcblx0XHRmaWxsPSdub25lJ1xuXHRcdHN0cm9rZT17Y29sb3J9XG5cdFx0c3Ryb2tlV2lkdGg9JzMuNSdcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxuXHRcdDxwYXRoIGQ9J00xNyAxMWwtNS01LTUgNU0xNyAxOGwtNS01LTUgNScgLz5cblx0PC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgQ2hldnJvbnNMZWZ0ID0gKHsgc2l6ZSA9IDUxLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXG5cdDxzdmdcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0d2lkdGg9e3NpemV9XG5cdFx0aGVpZ2h0PXtzaXplfVxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcblx0XHRmaWxsPSdub25lJ1xuXHRcdHN0cm9rZT17Y29sb3J9XG5cdFx0c3Ryb2tlV2lkdGg9JzIuNSdcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxuXHRcdDxwYXRoIGQ9J00xMSAxN2wtNS01IDUtNU0xOCAxN2wtNS01IDUtNScgLz5cblx0PC9zdmc+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBDcm9zcyA9ICh7IHNpemUgPSAzMiwgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxuXHQ8c3ZnXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdHdpZHRoPXtzaXplfVxuXHRcdGhlaWdodD17c2l6ZX1cblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXG5cdFx0ZmlsbD0nbm9uZSdcblx0XHRzdHJva2U9e2NvbG9yfVxuXHRcdHN0cm9rZVdpZHRoPScxLjUnXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xuXHRcdHN0cm9rZUxpbmVqb2luPSdhcmNzJz5cblx0XHQ8bGluZSB4MT0nMTgnIHkxPSc2JyB4Mj0nNicgeTI9JzE4Jz48L2xpbmU+XG5cdFx0PGxpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCc+PC9saW5lPlxuXHQ8L3N2Zz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IERlbGV0ZSA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9e3NpemV9XG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICBzdHJva2U9e2NvbG9yfVxuICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXG4gICAgc3Ryb2tlTGluZWpvaW49XCJhcmNzXCJcbiAgPlxuICAgIDxwb2x5bGluZSBwb2ludHM9XCIzIDYgNSA2IDIxIDZcIj48L3BvbHlsaW5lPlxuICAgIDxwYXRoIGQ9XCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcIj48L3BhdGg+XG4gICAgPGxpbmUgeDE9XCIxMFwiIHkxPVwiMTFcIiB4Mj1cIjEwXCIgeTI9XCIxN1wiPjwvbGluZT5cbiAgICA8bGluZSB4MT1cIjE0XCIgeTE9XCIxMVwiIHgyPVwiMTRcIiB5Mj1cIjE3XCI+PC9saW5lPlxuICA8L3N2Zz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgTG9jayA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnI0RDMTQzQycsIGhhbmRsZXIgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzdmdcblx0XHRcdG9uQ2xpY2s9e2hhbmRsZXJ9XG5cdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0XHR3aWR0aD0nNDMnXG5cdFx0XHRoZWlnaHQ9JzQzJ1xuXHRcdFx0dmlld0JveD0nMCAwIDI0IDI0J1xuXHRcdFx0ZmlsbD0nbm9uZSdcblx0XHRcdHN0cm9rZT17Y29sb3J9XG5cdFx0XHRzdHJva2Utd2lkdGg9JzInXG5cdFx0XHRzdHJva2UtbGluZWNhcD0ncm91bmQnXG5cdFx0XHRzdHJva2UtbGluZWpvaW49J3JvdW5kJz5cblx0XHRcdDxyZWN0IHg9JzMnIHk9JzExJyB3aWR0aD0nMTgnIGhlaWdodD0nMTEnIHJ4PScyJyByeT0nMic+PC9yZWN0PlxuXHRcdFx0PHBhdGggZD0nTTcgMTFWN2E1IDUgMCAwIDEgMTAgMHY0Jz48L3BhdGg+XG5cdFx0PC9zdmc+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgVW5sb2NrID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDBGRjAwJyB9KSA9PiAoXG5cdDxzdmdcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0d2lkdGg9JzQzJ1xuXHRcdGhlaWdodD0nNDMnXG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xuXHRcdGZpbGw9J25vbmUnXG5cdFx0c3Ryb2tlPXtjb2xvcn1cblx0XHRzdHJva2Utd2lkdGg9JzInXG5cdFx0c3Ryb2tlLWxpbmVjYXA9J3JvdW5kJ1xuXHRcdHN0cm9rZS1saW5lam9pbj0ncm91bmQnPlxuXHRcdDxyZWN0IHg9JzMnIHk9JzExJyB3aWR0aD0nMTgnIGhlaWdodD0nMTEnIHJ4PScyJyByeT0nMic+PC9yZWN0PlxuXHRcdDxwYXRoIGQ9J003IDExVjdhNSA1IDAgMCAxIDkuOS0xJz48L3BhdGg+XG5cdDwvc3ZnPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBSZWFkID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXG5cdDxzdmdcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0d2lkdGg9e3NpemV9XG5cdFx0aGVpZ2h0PXtzaXplfVxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCc+XG5cdFx0PHBhdGggZD0nTTEyIDQuNzA2Yy0yLjkzOC0xLjgzLTcuNDE2LTIuNTY2LTEyLTIuNzA2djE3LjcxNGMzLjkzNy4xMiA3Ljc5NS42ODEgMTAuNjY3IDEuOTk1Ljg0Ni4zODggMS44MTcuMzg4IDIuNjY3IDAgMi44NzItMS4zMTQgNi43MjktMS44NzUgMTAuNjY2LTEuOTk1di0xNy43MTRjLTQuNTg0LjE0LTkuMDYyLjg3Ni0xMiAyLjcwNnptLTEwIDEzLjEwNHYtMTMuNzA0YzUuMTU3LjM4OSA3LjUyNyAxLjQ2MyA5IDIuMzM0djEzLjE2OGMtMS41MjUtLjU0Ni00LjcxNi0xLjUwNC05LTEuNzk4em0yMCAwYy00LjI4My4yOTMtNy40NzUgMS4yNTItOSAxLjc5OXYtMTMuMTcxYzEuNDUzLS44NjEgMy44My0xLjk0MiA5LTIuMzMydjEzLjcwNHptLTItMTAuMjE0Yy0yLjA4Ni4zMTItNC40NTEgMS4wMjMtNiAxLjY3MnYtMS4wNjRjMS42NjgtLjYyMiAzLjg4MS0xLjMxNSA2LTEuNjI2djEuMDE4em0wIDMuMDU1Yy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0wLTIuMDMxYy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0wIDYuMDkzYy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0wLTIuMDMxYy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0tMTYtNi4xMDRjMi4xMTkuMzExIDQuMzMyIDEuMDA0IDYgMS42MjZ2MS4wNjRjLTEuNTQ5LS42NDktMy45MTQtMS4zNjEtNi0xLjY3MnYtMS4wMTh6bTAgNS4wOWMyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTUtNi0xLjYyNnYxLjAxN3ptMC0yLjAzMWMyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTYtNi0xLjYyNnYxLjAxN3ptMCA2LjA5M2MyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTUtNi0xLjYyNnYxLjAxN3ptMC0yLjAzMWMyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTUtNi0xLjYyNnYxLjAxN3onIC8+XG5cdDwvc3ZnPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBVcGRhdGUgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcblx0PHN2Z1xuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0XHR3aWR0aD17c2l6ZX1cblx0XHRoZWlnaHQ9e3NpemV9XG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xuXHRcdGZpbGw9J25vbmUnXG5cdFx0c3Ryb2tlPXtjb2xvcn1cblx0XHRzdHJva2VXaWR0aD0nMidcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxuXHRcdDxwYXRoIGQ9J00yMCAxNC42NlYyMGEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY2YTIgMiAwIDAgMSAyLTJoNS4zNCc+PC9wYXRoPlxuXHRcdDxwb2x5Z29uIHBvaW50cz0nMTggMiAyMiA2IDEyIDE2IDggMTYgOCAxMiAxOCAyJz48L3BvbHlnb24+XG5cdDwvc3ZnPlxuKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQWRkJztcbmV4cG9ydCAqIGZyb20gJy4vRGVsZXRlJztcbmV4cG9ydCAqIGZyb20gJy4vVXBkYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vQ2hldnJvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9SZWFkJztcbmV4cG9ydCAqIGZyb20gJy4vTG9jayc7XG5leHBvcnQgKiBmcm9tICcuL0Nyb3NzJztcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IFF1ZXN0aW9ucyBmcm9tICcuLi9zZWN0aW9ucy9hYm91dC9RdWVzdGlvbnMnO1xuaW1wb3J0IEFib3V0VXMgZnJvbSAnLi4vc2VjdGlvbnMvYWJvdXQvQWJvdXRVcyc7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9sYXlvdXQnO1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgID5cbiAgICAgIDxTZW8gdGl0bGU9XCJBYm91dFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXBhZ2Ugc2Nyb2xsZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdnItd2F2ZSB0b3Atc2xpZGVcIj5cbiAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5IZWxsbyB0aGVyZSw8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGluZy1hYm91dFwiPlxuICAgICAgICAgICAgV2UgY3JlYXRlZCA8c3BhbiBjbGFzc05hbWU9XCJsb2dvIHRleHQtZGFya1wiPkNvZGVycyBHYWxhPC9zcGFuPiB0b1xuICAgICAgICAgICAgcHJvdmlkZSBZb3UgUXVhbGl0eSByZXNvdXJjZXMgdG8gbGVhcm4gRnJvbVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cInNjcm9sbCBpY29uXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9naWZpbWFnZS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDUvc2Nyb2xsLWdpZi0xMC5naWZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGwtaWNvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFF1ZXN0aW9ucyAvPlxuICAgICAgICA8QWJvdXRVcyAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcblxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0JztcblxuaW1wb3J0IHsgZ2V0U3BlY2lhbGl0eSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2VydmljZVBvc3QsIHNjcm9sbFRvIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBDaGV2cm9uc1VwIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zJztcblxuLy8gY29uc3QgU2hhcmVBcnRpY2xlID0gKHsgTmlkLCB1cmwgfSwgcHJvcHMpID0+IHtcblxuXG4vLyBcdGZ1bmN0aW9uIGFjdGlvblRvZ2dsZSgpIHtcbi8vIFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4gKFxuLy8gXHRcdDw+XG4vLyBcdFx0XHQ8ZGl2IGNsYXNzPSdhY3Rpb24nIG9uQ2xpY2s9e2FjdGlvblRvZ2dsZX0+XG4vLyBcdFx0XHRcdDxzcGFuPlxuLy8gXHRcdFx0XHRcdDxpbWdcbi8vIFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMjVweCcgfX1cbi8vIFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xOTE5OS9zaGFyZS5zdmcnXG4vLyBcdFx0XHRcdFx0XHRhbHQ9Jydcbi8vIFx0XHRcdFx0XHQvPlxuLy8gXHRcdFx0XHQ8L3NwYW4+XG4vLyBcdFx0XHRcdDx1bD5cbi8vIFx0XHRcdFx0XHQ8bGk+XG4vLyBcdFx0XHRcdFx0XHQ8YVxuLy8gXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3doYXRzYXBwLWljb24nXG4vLyBcdFx0XHRcdFx0XHRcdHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbi8vIFx0XHRcdFx0XHRcdFx0aHJlZj17YGh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9SGV5IGxvb2sgaSBqdXN0IGZvdW5kIG91dCB0aGlzIEFtYXppbmcgYXJ0aWNsZSBvbiBcIiR7TmlkfVwiLENoZWNrIGl0IG91dCA6ICR7dXJsfWB9XG4vLyBcdFx0XHRcdFx0XHRcdHRhcmdldD0nX2JsYW5rJz5cbi8vIFx0XHRcdFx0XHRcdFx0U2hhcmUgb25cbi8vIFx0XHRcdFx0XHRcdFx0PGltZ1xuLy8gXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMjVweCcsIG1hcmdpbkxlZnQ6ICcyMHB4JyB9fVxuLy8gXHRcdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMDMxNTAvd2hhdHNhcHAtc3ltYm9sLWxvZ28uc3ZnJ1xuLy8gXHRcdFx0XHRcdFx0XHRcdGFsdD17J3NoYXJlICcgKyBOaWQgKyAnIG9uIFdoYXRzYXBwJ31cbi8vIFx0XHRcdFx0XHRcdFx0Lz5cbi8vIFx0XHRcdFx0XHRcdDwvYT5cbi8vIFx0XHRcdFx0XHQ8L2xpPlxuXG4vLyBcdFx0XHRcdFx0PGxpPlxuLy8gXHRcdFx0XHRcdFx0PGFcbi8vIFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtYWlsLWljb24nXG4vLyBcdFx0XHRcdFx0XHRcdGhyZWY9e2BtYWlsdG86P1N1YmplY3Q9JHsnQXJ0aWNsZSBvbiAnICsgTmlkXG4vLyBcdFx0XHRcdFx0XHRcdFx0fSZCb2R5PUhleSBsb29rIGkganVzdCBmb3VuZCBvdXQgdGhpcyBBbWF6aW5nIGFydGljbGUgb24gXCIke05pZH1cIixDaGVjayBpdCBvdXQgOiAke3VybH1gfVxuLy8gXHRcdFx0XHRcdFx0XHR0YXJnZXQ9J190b3AnXG4vLyBcdFx0XHRcdFx0XHRcdHJlbD0nbm9mb2xsb3cnPlxuLy8gXHRcdFx0XHRcdFx0XHRTaGFyZSBvblxuLy8gXHRcdFx0XHRcdFx0XHQ8aW1nXG4vLyBcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyNXB4JywgbWFyZ2luTGVmdDogJzIwcHgnIH19XG4vLyBcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdzaGFyZS1pbWFnZSdcbi8vIFx0XHRcdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMzAzMTYxL2dtYWlsLWljb24tbG9nby5zdmcnXG4vLyBcdFx0XHRcdFx0XHRcdFx0YWx0PXsnc2hhcmUgJyArIE5pZCArICcgb24gR21haWwnfVxuLy8gXHRcdFx0XHRcdFx0XHQvPlxuLy8gXHRcdFx0XHRcdFx0PC9hPlxuLy8gXHRcdFx0XHRcdDwvbGk+XG4vLyBcdFx0XHRcdDwvdWw+XG4vLyBcdFx0XHQ8L2Rpdj5cbi8vIFx0XHQ8Lz5cbi8vIFx0KTtcbi8vIH07XG5cbmNvbnN0IEFydGljbGUgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBuYW1lIH0gPSBwcm9wcy5tYXRjaC5wYXJhbXM7XG5cdGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKHt9KTtcblxuXG5cblxuXHRjb25zdCBnZXRBcnRpY2xlID0gYXN5bmMgKG5hbWUpID0+IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcblx0XHRcdGBhcGkvYXJ0aWNsZS9nZXRgLFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIHJlcy5kYXRhLmFydGljbGU7XG5cdH07XG5cblx0Y29uc3QgZ2V0QXJ0aWNsZUVmZmVjdCA9IHVzZUNhbGxiYWNrKFxuXHRcdGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IGFydGljbGUgPSBhd2FpdCBnZXRBcnRpY2xlKG5hbWUucmVwbGFjZSgvLS9nLCAnICcpKTtcblx0XHRcdHNldEFydGljbGUoYXJ0aWNsZSk7XG5cdFx0fSxcblx0XHRbbmFtZV0sXG5cdClcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdldEFydGljbGVFZmZlY3QoKVxuXHR9LCBbZ2V0QXJ0aWNsZUVmZmVjdF0pO1xuXG5cdGNvbnNvbGUubG9nKGFydGljbGUpXG5cdGNvbnN0IGdvVG9Ub3AgPSAoKSA9PiB7XG5cdFx0c2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpKTtcblx0fTtcblxuXG5cdGNvbnN0IGh0bWwgPSBhcnRpY2xlICYmIGFydGljbGUuY29udGVudDtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0ZWQtYXJ0aWNsZSc+XG5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9J2Z1bGwtdmlldy1hcnRpY2xlIHAtMic+XG5cdFx0XHRcdFx0PENvbCBzbT17Mn0+ey8qIEFkZHMgSGVyZSAqL308L0NvbD5cblxuXHRcdFx0XHRcdDxDb2wgaWQ9J3RvcCcgc3R5bGU9e3sgcGFkZGluZzogJzBweCcgfX0gc209ezh9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3FsLXNub3cnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZnVsbC1hcnRpY2xlIHFsLWVkaXRvcic+XG5cdFx0XHRcdFx0XHRcdFx0e1JlYWN0SHRtbFBhcnNlcihodG1sKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0b3AtaWNvbic+XG5cdFx0XHRcdFx0XHRcdDxDaGV2cm9uc1VwIHNpemU9JzUwJyBjb2xvcj0nI2RjMTQzYycgb25DbGljaz17Z29Ub1RvcH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvQ29sPlxuXG5cdFx0XHRcdFx0PENvbCBzbT17Mn0+ey8qIEFkZHMgSGVyZSAqL308L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHRhdXRoOiBzdGF0ZS5hdXRoXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0U3BlY2lhbGl0eSB9KShBcnRpY2xlKTtcblxuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vIGNvbnN0IEFydGljbGUgPSAocHJvcHMpID0+IHtcbi8vIFx0Y29uc3QgbmFtZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5uYW1lXG4vLyBcdGNvbnNvbGUubG9nKG5hbWUucmVwbGFjZSgvLS9nLCAnICcpKVxuLy8gXHRyZXR1cm4gKFxuLy8gXHRcdDxkaXY+XG4vLyBcdFx0XHQ8ZGl2PlxuLy8gXHRcdFx0XHRsb3JlbTEwMFxuLy8gXHRcdFx0PC9kaXY+XG4vLyBcdFx0PC9kaXY+XG4vLyBcdCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEFydGljbGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWRpcmVjdCwgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyByZWdpc3RlciwgbG9naW4gfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XG5pbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuXG5jb25zdCBBdXRoID0gKHsgbG9naW4sIHJlZ2lzdGVyLCB0b2tlbiwgdHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICBpZiAodG9rZW4pIHJldHVybiA8UmVkaXJlY3QgdG89XCIvbGVhcm5cIiAvPjtcbiAgY29uc3QgZGluVGV4dCA9IFwiPENvZGVycyBHYWxhLz5cIjtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodHlwZSA9PT0gXCJzaWdudXBcIikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uIGgxXCIpLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2VkXCIpO1xuXG4gICAgICByZWdpc3RlcihkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uIGgxXCIpLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2VkXCIpO1xuICAgICAgbG9naW4oZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWNvbnRhaW5lclwiPlxuICAgICAgPFNlbyB0aXRsZT1cIkxvZ0luXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJkaW5UYWdcIj57ZGluVGV4dH08L2g2PlxuICAgICAgICAgICAge3R5cGUgPT09IFwic2lnbnVwXCIgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgxPlNpZ24gVXA8L2gxPlxuICAgICAgICAgICAgICAgIDxwPkhleSwgV2VsY29tZSB0byBDb2RlcnNHYWxhICEhPC9wPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5IZXkgdGhlcmUsIFdlbGNvbWUgQmFjayAhITwvcD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlID09PSBcInNpZ251cFwiID8gXCJmbGV4XCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHt0eXBlID09PSBcInNpZ251cFwiID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29kZVJlZmVycmVkXCI+UmVmZXIgQ29kZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvZGVSZWZlcnJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBCMThGQzY5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlUmVmZmVyZWQ6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgIHt0eXBlID09PSBcInNpZ251cFwiID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtZW1iZXJNZVwiPkhhdmUgYW4gYWNjb3VudD88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtZW1iZXJNZVwiPkZvcmdvdCBQYXNzd29yZD88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9zaWdudXBcIj5TaWduVXA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ25pblwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvZ2luLCByZWdpc3RlciB9KShBdXRoKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldEFsbEFydGljbGVzIH0gZnJvbSBcIi4uL2FjdGlvbnMvYXJ0aWNsZVwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgRmVhdHVyZWQgZnJvbSAnLi4vc2VjdGlvbnMvYmxvZy9GZWF0dXJlZCdcbmltcG9ydCBBbGwgZnJvbSAnLi4vc2VjdGlvbnMvYmxvZy9BbGwnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9zZWN0aW9ucy9ibG9nL1NpZGViYXInO1xuXG5cblxuY29uc3QgQmxvZyA9ICh7IGdldEFsbEFydGljbGVzLCBhcnRpY2xlcywgaXNBZG1pbiwgaGlzdG9yeSB9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGFydGljbGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Z2V0QWxsQXJ0aWNsZXMoKVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhoaXN0b3J5KVxuXHR9LCBbYXJ0aWNsZXMsIGdldEFsbEFydGljbGVzXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIiBjbGFzcz1cImJsb2ctcGFnZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9nLWhlYWRlclwiPlxuXHRcdFx0XHQ8aDEgY2xhc3M9XCJoZWFkaW5nXCI+Q29kZXJzR2FsYSA8c3BhbiBjbGFzcz1cInVuZGVybGluZS0tbWFnaWNhbFwiPkJsb2c8L3NwYW4+IDwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLW1kLTEyIGxlZnQtYm94XCI+XG5cdFx0XHRcdFx0XHQ8RmVhdHVyZWQgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxTaWRlYmFyIGhpc3Rvcnk9e2hpc3Rvcnl9IGFydGljbGVzPXthcnRpY2xlc30gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0PEFsbCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcblx0YXJ0aWNsZXM6IHN0YXRlLmFydGljbGUuYXJ0aWNsZXMsXG5cdGlzQWRtaW46IHN0YXRlLmF1dGguaXNBZG1pbixcblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldEFsbEFydGljbGVzIH0pKEJsb2cpO1xuXG5cblxuLy8gY29uc3QgQmxvZyA9ICh7IGdldEFsbEFydGljbGVzLCBhcnRpY2xlcywgaXNBZG1pbiB9KSA9PiB7XG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICAgICAgaWYgKGFydGljbGVzLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgZ2V0QWxsQXJ0aWNsZXMoKVxuLy8gICAgICAgICB9XG4vLyAgICAgfSwgW2FydGljbGVzLCBnZXRBbGxBcnRpY2xlc10pXG5cbi8vICAgICBjb25zb2xlLmxvZyhhcnRpY2xlcylcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY29udGFpbmVyXCI+XG5cbi8vICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2X190b3BcIj5cbi8vICAgICAgICAgICAgICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2X190b3BfX2xpbmtcIj48L2E+XG4vLyAgICAgICAgICAgICA8L25hdj5cbi8vICAgICAgICAgICAgIHtpc0FkbWluICYmIDxOYXZMaW5rIHRvPVwiL2FydGljbGUvYWRkXCIgcmVsPVwibm9mb2xsb3dcIj5cbi8vICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgYmxvY2s+XG4vLyAgICAgICAgICAgICAgICAgICAgIEFkZCBBcnRpY2xlXG4vLyAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4vLyAgICAgICAgICAgICA8L05hdkxpbms+fVxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuLy8gICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcIkRvc2lzXCIgfX0gY2xhc3NOYW1lPVwidGl0bGVfX2gxXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbi8vICAgICAgICAgICAgICAgICAgICAgQ29kZXJzR2FsYSA8c3Bhbj5CbG9nPC9zcGFuPlxuLy8gICAgICAgICAgICAgICAgIDwvaDE+XG4vLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVfX3N1YlwiPlNvcnJ5IDooPC9wPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJncmlkXCI+XG4vLyAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZF9fY29sLTJcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPExhdGVzdCBhcnRpY2xlPXthcnRpY2xlcyAmJiBhcnRpY2xlc1swXX0gLz5cbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJncmlkX19jb2xfX3RpdGxlXCI+RmVhdHVyZWQgQXJ0aWNsZXM8L2gzPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkIGFydGljbGVzPXthcnRpY2xlc30gLz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmV3c2xldHRlckZvcm0gLz4gKi99XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbi8vICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZF9fY29sX190aXRsZVwiPkFsc28gUmVhZC4uLjwvaDM+XG4vLyAgICAgICAgICAgICAgICAgPEFsbCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG4vLyAgICAgICAgICAgICA8L2FydGljbGU+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL3NlY3Rpb25zL2hvbWUvSGVybyc7XG5pbXBvcnQgSGVyb0NhcmRzIGZyb20gJy4uL3NlY3Rpb25zL2hvbWUvSGVyb0NhcmRzJztcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi4vbGF5b3V0L3ByZWxvYWRlcic7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cdHZhciBob21lQ29udGVudCA9ICdhZHNmJztcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG5cdFx0XHRhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cblx0XHRcdGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cblx0XHRcdDxTZW8gdGl0bGU9J0hvbWUnIG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX0gLz5cblx0XHRcdDxkaXYgaWQ9J215RGl2Jz5cblx0XHRcdFx0e2hvbWVDb250ZW50ID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHQ8SGVybyAvPlxuXHRcdFx0XHRcdFx0PEhlcm9DYXJkcyAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxQcmVsb2FkZXIgLz5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2xheW91dC8nO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vc2VjdGlvbnMvbGVhcm4vQ2FyZCc7XG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XG5cbmNvbnN0IExlYXJuID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRleGl0PXt7IG9wYWNpdHk6IDAgfX1cblx0XHRcdGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuXHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwIH19PlxuXHRcdFx0PFNlbyB0aXRsZT0nTGVhcm4nIG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX0gLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbGVhcm4tY29udGFpbmVyJz5cblx0XHRcdFx0PEFkbWluQnV0dG9ucyB0eXBlPSdBZGQnIHVybD0nL2FkZGNhcmQnIGRhdGE9e3sgbmFtZTogJ0NvdXJzZXMnIH19IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cblx0XHRcdFx0XHQ8Q2FyZCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlYXJuO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IENoZXZyb25zVXAsIENyb3NzIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zJztcbmltcG9ydCB7IGdldFNwZWNpYWxpdHksIGNsZWFyQXJ0aWNsZSwgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi9hY3Rpb25zJztcblxuaW1wb3J0IFZpZGVvUHJldmlldyBmcm9tICcuLi9zZWN0aW9ucy9wcmV2aWV3L1ZpZGVvUHJldmlldyc7XG5pbXBvcnQgVG9waWNzT3ZlcnZpZXcgZnJvbSAnLi4vc2VjdGlvbnMvcHJldmlldy9Ub3BpY3NPdmVydmlldyc7XG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XG5cbmNvbnN0IFByZXZpZXcgPSAoe1xuXHRtYXRjaCxcblx0c2VsZWN0VmlkZW8sXG5cdGNsZWFyQXJ0aWNsZSxcblx0Z2V0U3BlY2lhbGl0eSxcblx0c3BlY2lhbGl0eSxcbn0pID0+IHtcblx0Y29uc3QgW2Nsb3NlLCBzZXRDbG9zZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgeyBzcGVjaWFsaXR5TmFtZSB9ID0gbWF0Y2gucGFyYW1zXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjbGVhckFydGljbGUoKTtcblx0XHRnZXRTcGVjaWFsaXR5KHNwZWNpYWxpdHlOYW1lKTtcblx0fSwgW2NsZWFyQXJ0aWNsZSwgZ2V0U3BlY2lhbGl0eSwgc3BlY2lhbGl0eU5hbWVdKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZWxlY3RWaWRlbyhzcGVjaWFsaXR5KTtcblx0fSwgW3NwZWNpYWxpdHksIHNlbGVjdFZpZGVvXSk7XG5cblx0cmV0dXJuIHNwZWNpYWxpdHkgPyAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J3RvcGljcy1vdnItY29udCc+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT0nb3ZlcmxheSdcblx0XHRcdFx0c3R5bGU9e3sgZGlzcGxheTogY2xvc2UgPyAnbm9uZScgOiAnYmxvY2snIH19XG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldENsb3NlKCFjbG9zZSl9PjwvZGl2PlxuXHRcdFx0PFNlb1xuXHRcdFx0XHR0aXRsZT0nU2VsZWN0IEFydGljbGUnXG5cdFx0XHRcdG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3BlY2lhbGl0eS1jb250YWluZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3BlY2lhbGl0eS1oZWFkaW5nJz5cblx0XHRcdFx0XHQ8aDI+e3NwZWNpYWxpdHkubmFtZX08L2gyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHQ8Q29sXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RvcGljLW92ci1jb250YWluZXInXG5cdFx0XHRcdFx0XHRsZz17NH1cblx0XHRcdFx0XHRcdHN0eWxlPXt7IGhlaWdodDogY2xvc2UgPyAnMjV2aCcgOiAnNTB2aCcgfX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9waWNzLW92ZXJ2aWV3Jz5cblx0XHRcdFx0XHRcdFx0PGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScgfX0gY2xhc3NOYW1lPSdvdmVydmlldyc+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+VG9waWNzIE92ZXJ2aWV3IDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdBZGQnXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvJHtzcGVjaWFsaXR5Lm5hbWV9L3RvcGljL2FkZC9gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17eyBuYW1lOiAnVG9waWNzJyB9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbG9zZS10b2dnbGUnPlxuXHRcdFx0XHRcdFx0XHRcdHtjbG9zZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldENsb3NlKCFjbG9zZSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2hldnJvbnNVcCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRDbG9zZSghY2xvc2UpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENyb3NzIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxBY2NvcmRpb24+XG5cdFx0XHRcdFx0XHRcdDxUb3BpY3NPdmVydmlldyBzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eS5uYW1lfSAvPlxuXHRcdFx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbCBsPXs4fT5cblx0XHRcdFx0XHRcdDxWaWRlb1ByZXZpZXcgc3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHkubmFtZX0gLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8L2Rpdj5cblx0KSA6IG51bGw7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG5cdHNwZWNpYWxpdHk6IHN0YXRlLnNwZWNpYWxpdHkuc3BlY2lhbGl0eSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xuXHRnZXRTcGVjaWFsaXR5LFxuXHRjbGVhckFydGljbGUsXG5cdHNlbGVjdFZpZGVvLFxufSkoUHJldmlldyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vc2VjdGlvbnMvZWRpdG9yJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XG5cbmltcG9ydCB7IGFkZEFydGljbGUsIGVkaXRBcnRpY2xlLCBnZXRBcnRpY2xlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ2hldnJvbnNVcCB9IGZyb20gJy4uL2Fzc2V0cy9pY29ucyc7XG5cbmNvbnN0IFVwc2VydEFydGljbGUgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBhZGRBcnRpY2xlLCBzcGVjaWFsaXRpZXMsIGVkaXRBcnRpY2xlLCBnZXRBcnRpY2xlLCBwcmV2QXJ0aWNsZSB9ID1cblx0XHRwcm9wcztcblx0Y29uc3QgW2NvbnRlbnQsIHNldGNvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbbmFtZSwgc2V0bmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtrZXl3b3Jkcywgc2V0QXJ0aWNsZUtleXdvcmRzXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2ZlYXR1cmVkLCBzZXRmZWF0dXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFt0aHVtYm5haWxVcmwsIHNldHRodW1ibmFpbFVybF0gPSB1c2VTdGF0ZSgnJyk7XG5cdC8vIGNvbnN0IFtMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Ly8gY29uc3QgdG9waWNJZCA9IFwiRVJST1JfTkFfRElZT1wiO1xuXHRmdW5jdGlvbiBzY3JvbGxUbyhlbGVtZW50KSB7XG5cdFx0aXNDbGllbnQgJiZcblx0XHRcdHdpbmRvdy5zY3JvbGwoe1xuXHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG5cdFx0XHR9KTtcblx0fVxuXHRjb25zdCBnb1RvVG9wID0gKCkgPT4ge1xuXHRcdHNjcm9sbFRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKSk7XG5cdH07XG5cblx0Y29uc29sZS5sb2cocHJvcHMubWF0Y2gucGFyYW1zLmFydGljbGVJZCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAocHJvcHMuZWRpdCkge1xuXHRcdFx0Z2V0QXJ0aWNsZShwcm9wcy5tYXRjaC5wYXJhbXMuYXJ0aWNsZUlkKTtcblx0XHR9XG5cdH0sIFtwcm9wcywgZ2V0QXJ0aWNsZV0pO1xuXG5cdGNvbnN0IGhhbmRsZUVkaXRvciA9IChodG1sKSA9PiB7XG5cdFx0c2V0Y29udGVudChodG1sKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVFZGl0ID0gYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2cobmFtZSk7XG5cdFx0Y29uc29sZS5sb2coa2V5d29yZHMpO1xuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHRuYW1lOiBuYW1lID09PSAnJyA/IHByZXZBcnRpY2xlLm5hbWUgOiBuYW1lLFxuXHRcdFx0a2V5d29yZHM6IGtleXdvcmRzID09PSAnJyA/IHByZXZBcnRpY2xlLmtleXdvcmRzIDoga2V5d29yZHMsXG5cdFx0XHRjb250ZW50OiBjb250ZW50ID09PSAnJyA/IHByZXZBcnRpY2xlLmNvbnRlbnQgOiBjb250ZW50LFxuXHRcdH07XG5cdFx0ZWRpdEFydGljbGUoZGF0YSwgcHJldkFydGljbGUuX2lkLCBzcGVjaWFsaXRpZXMuc3BlY2lhbGl0eS5OYW1lKTtcblx0XHR0b2FzdCgnQXJ0aWNsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseScpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUFkZCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHsgY29udGVudCwgbmFtZSwga2V5d29yZHMgfSk7XG5cdFx0YWRkQXJ0aWNsZSh7IGNvbnRlbnQsIG5hbWUsIGtleXdvcmRzLCBmZWF0dXJlZCwgdGh1bWJuYWlsVXJsIH0pO1xuXHRcdHRvYXN0KCdBcnRpY2xlIGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PFJvdyBjbGFzc05hbWU9J2Z1bGwtdmlldy1hcnRpY2xlIHAtMic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hhcmUtaWNvbnMnPjwvZGl2PlxuXG5cdFx0XHQ8Q29sIHNtPXsxfT48L0NvbD5cblxuXHRcdFx0PENvbCBpZD0ndG9wJyBzbT17MTB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9JycgaWQ9Jyc+XG5cdFx0XHRcdFx0XHRcdHtwcm9wcy5lZGl0XG5cdFx0XHRcdFx0XHRcdFx0PyBgVXBkYXRlIEFydGljbGUgLSAke3ByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLm5hbWV9YFxuXHRcdFx0XHRcdFx0XHRcdDogJ0FkZCBhIEFydGljbGUnfVxuXHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J25hbWUnXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQXJ0aWNsZSBOYW1lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gcHJldkFydGljbGUgJiYgcHJldkFydGljbGUubmFtZSA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0bmFtZShlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3RodW1ibmFpbFVybCdcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdBcnRpY2xlIFRodW1ibmFpbCdcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IHByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLnRodW1ibmFpbFVybCA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0dGh1bWJuYWlsVXJsKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdrZXl3b3Jkcydcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdBcnRpY2xlIERlc2NyaXB0aW9uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gcHJldkFydGljbGUgJiYgcHJldkFydGljbGUua2V5d29yZHMgOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEFydGljbGVLZXl3b3JkcyhlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2ZlYXR1cmVkJz5Jc0ZlYXR1cmVkICZuYnNwOyA8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IHByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLmZlYXR1cmVkIDogZmFsc2Vcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldGZlYXR1cmVkKCFmZWF0dXJlZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nZmVhdHVyZWQnXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdHtwcm9wcy5lZGl0ID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5jb250ZW50ID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFZGl0b3Jcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXRvcj17aGFuZGxlRWRpdG9yfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5jb250ZW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RWRpdG9yIGhhbmRsZUVkaXRvcj17aGFuZGxlRWRpdG9yfSBkZWZhdWx0VmFsdWU9JycgLz5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWRkLWFydGljbGUtYnV0dG9uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IGhhbmRsZUVkaXQoZSkgOiBoYW5kbGVBZGQoZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cHJvcHMuZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9wLWljb24nPlxuXHRcdFx0XHRcdDxDaGV2cm9uc1VwIHNpemU9JzUwJyBjb2xvcj0nI2RjMTQzYycgb25DbGljaz17Z29Ub1RvcH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0NvbD5cblxuXHRcdFx0PENvbCBzbT17MX0+PC9Db2w+XG5cdFx0PC9Sb3c+XG5cdCk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG5cdHNwZWNpYWxpdGllczogc3RhdGUuc3BlY2lhbGl0eSxcblx0cHJldkFydGljbGU6IHN0YXRlLmFydGljbGUuc2VsZWN0ZWRBcnRpY2xlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG5cdGFkZEFydGljbGUsXG5cdGVkaXRBcnRpY2xlLFxuXHRnZXRBcnRpY2xlLFxufSkoVXBzZXJ0QXJ0aWNsZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHsgaXNDbGllbnQsIHNlcnZpY2VHZXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGFkZFNwZWNpYWxpdHksIGVkaXRTcGVjaWFsaXR5IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL3NlY3Rpb25zL2VkaXRvcic7XG5cbmNvbnN0IFVwc2VydENhcmQgPSAoeyBhZGRTcGVjaWFsaXR5LCBlZGl0U3BlY2lhbGl0eSwgZWRpdCwgbWF0Y2ggfSkgPT4ge1xuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKGVkaXQpIHtcblx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChcblx0XHRcdFx0XHRgYXBpL3NwZWNpYWxpdHkvZ2V0LyR7bWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lfWBcblx0XHRcdFx0KTtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0Y29uc3QgeyBuYW1lLCBpbWFnZVVybCwgY29udGVudCwgX2lkIH0gPSByZXMuZGF0YS5zcGVjaWFsaXR5O1xuXHRcdFx0XHRzZXREYXRhKHsgbmFtZSwgaW1hZ2VVcmwsIGNvbnRlbnQsIF9pZCB9KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGZldGNoRGF0YSgpO1xuXHR9LCBbZWRpdCwgbWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lXSk7XG5cdGNvbnNvbGUubG9nKGVkaXQsIGRhdGEpO1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0c2V0U3RhdGUoe1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVFZGl0b3IgPSAoaHRtbCkgPT4ge1xuXHRcdHNldFN0YXRlKHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Y29udGVudDogaHRtbCxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoZWRpdCkgZWRpdFNwZWNpYWxpdHkoc3RhdGUsIGRhdGEuX2lkKTtcblx0XHRlbHNlIGFkZFNwZWNpYWxpdHkoc3RhdGUpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBtdC00Jz5cblx0XHRcdDxmb3JtIGNsYXNzTmFtZT0nbXQtNSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRpZD0nbmFtZSdcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nU3BlY2lhbGl0eSBOYW1lJ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2VkaXQgPyBkYXRhICYmIGRhdGEubmFtZSA6ICcnfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRpZD0naW1hZ2VVcmwnXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0ltYWdlIFVSTCdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtlZGl0ID8gZGF0YSAmJiBkYXRhLmltYWdlVXJsIDogJyd9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHR7IWVkaXQgJiYgKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdGlkPSdhbHQnXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nSW1hZ2UgYWx0IHRleHQnXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdxbC1zbm93Jz5cblxuXHRcdFx0XHRcdFx0e2lzQ2xpZW50ICYmIDxFZGl0b3Jcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncWwtZWRpdG9yJ1xuXHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0b3I9e2hhbmRsZUVkaXRvcn1cblx0XHRcdFx0XHRcdC8+fVxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FkZC1hcnRpY2xlLWJ1dHRvbic+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGhhbmRsZXI9e2hhbmRsZVN1Ym1pdH0gaXNCdXR0b249e3RydWV9IHR5cGU9J3N1Ym1pdCc+XG5cdFx0XHRcdFx0XHRcdHtlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ31cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBhZGRTcGVjaWFsaXR5LCBlZGl0U3BlY2lhbGl0eSB9KShVcHNlcnRDYXJkKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBMb2NrQnV0dG9uIH0gZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRUb3BpYywgZWRpdFRvcGljIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuY29uc3QgVXBzZXJ0VG9waWMgPSAoe1xuXHRzcGVjaWFsaXR5LFxuXHRtYXRjaCxcblx0YWRkVG9waWMsXG5cdGVkaXRUb3BpYyxcblx0bG9jYXRpb24sXG5cdGVkaXQsXG59KSA9PiB7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHsgbG9ja2VkOiBmYWxzZSB9KTtcblx0Y29uc29sZS5sb2cobG9jYXRpb24pO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldERhdGEoe1xuXHRcdFx0bG9ja2VkOiBsb2NhdGlvbi5wcm9wcyAmJiBsb2NhdGlvbi5wcm9wcy5pc0xvY2tlZCxcblx0XHRcdG5hbWU6IGxvY2F0aW9uLnByb3BzICYmIGxvY2F0aW9uLnByb3BzLm5hbWUsXG5cdFx0fSk7XG5cdH0sIFtsb2NhdGlvbi5wcm9wc10pO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICghZWRpdCkge1xuXHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdHsgLi4uZGF0YSwgc3BlY2lhbGl0eUlkOiBzcGVjaWFsaXR5Ll9pZCB9LFxuXHRcdFx0XHRtYXRjaC5wYXJhbXMuc3BlY2lhbGl0eU5hbWVcblx0XHRcdCk7XG5cdFx0XHRhZGRUb3BpYyhcblx0XHRcdFx0eyAuLi5kYXRhLCBzcGVjaWFsaXR5SWQ6IHNwZWNpYWxpdHkuX2lkIH0sXG5cdFx0XHRcdG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZVxuXHRcdFx0KTtcblx0XHRcdHRvYXN0KCdUb3BpYyBBZGRlZCBzdWNjZXNzZnVsbHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWRpdFRvcGljKGRhdGEsIG1hdGNoLnBhcmFtcy50b3BpY0lkLCBtYXRjaC5wYXJhbXMuc3BlY2lhbGl0eU5hbWUpO1xuXHRcdFx0dG9hc3QoJ1VwZGF0ZWQnKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBzZXJ0LWNvbnRhaW5lcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBzZXJ0LXRvcGljLWZvcm0nPlxuXHRcdFx0XHQ8aDM+e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfSBUb3BpYzwvaDM+XG5cdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0taW5wdXQnPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17bG9jYXRpb24ucHJvcHMgJiYgbG9jYXRpb24ucHJvcHMubmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0RGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgbmFtZTogZS50YXJnZXQudmFsdWUgfSkpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1idXR0b24nPlxuXHRcdFx0XHRcdFx0PExvY2tCdXR0b25cblx0XHRcdFx0XHRcdFx0aXNMb2NrZWQ9e2RhdGEubG9ja2VkfVxuXHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0RGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgbG9ja2VkOiAhcHJldi5sb2NrZWQgfSkpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8QnV0dG9uIGlzQnV0dG9uPXt0cnVlfSBoYW5kbGVyPXtoYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdFx0e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcblx0c3BlY2lhbGl0eTogc3RhdGUuc3BlY2lhbGl0eS5zcGVjaWFsaXR5LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGFkZFRvcGljLCBlZGl0VG9waWMgfSkoVXBzZXJ0VG9waWMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBhZGRWaWRlbywgZWRpdFZpZGVvLCBnZXRWaWRlbyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBVcHNlcnRWaWRlbyA9ICh7XG5cdGVkaXQsXG5cdG1hdGNoLFxuXHRhZGRWaWRlbyxcblx0ZWRpdFZpZGVvLFxuXHRnZXRWaWRlbyxcblx0c3BlY2lhbGl0aWVzLFxuXHRwcmV2VmlkZW8sXG59KSA9PiB7XG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKHByZXZWaWRlbyA/IHByZXZWaWRlby5uYW1lIDogJycpO1xuXHRjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFxuXHRcdHByZXZWaWRlbyA/IHByZXZWaWRlby5kZXNjcmlwdGlvbiA6ICcnXG5cdCk7XG5cdGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShwcmV2VmlkZW8gPyBwcmV2VmlkZW8udXJsIDogJycpO1xuXG5cdGNvbnN0IGhhbmRsZUFkZCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGF3YWl0IGFkZFZpZGVvKFxuXHRcdFx0eyBuYW1lLCBkZXNjcmlwdGlvbiwgdXJsIH0sXG5cdFx0XHRtYXRjaC5wYXJhbXMudG9waWNJZCxcblx0XHRcdHNwZWNpYWxpdGllcy5zcGVjaWFsaXR5Lm5hbWVcblx0XHQpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSBhc3luYyAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRhd2FpdCBlZGl0VmlkZW8oXG5cdFx0XHR7IG5hbWUsIGRlc2NyaXB0aW9uLCB1cmwgfSxcblx0XHRcdHByZXZWaWRlby5faWQsXG5cdFx0XHRzcGVjaWFsaXRpZXMuc3BlY2lhbGl0eS5uYW1lXG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtY29udGFpbmVyJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtdmlkZW8tZm9ybSc+XG5cdFx0XHRcdDxoMz57ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCAnfVZpZGVvPC9oMz5cblx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuXHRcdFx0XHRcdFx0PGxhYmVsPk5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+VXJsPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dXJsfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblx0XHRcdFx0XHRcdDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2Rlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzQnV0dG9uPXt0cnVlfVxuXHRcdFx0XHRcdGhhbmRsZXI9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRlZGl0ID8gaGFuZGxlRWRpdChlKSA6IGhhbmRsZUFkZChlKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHR7ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG5cdHNwZWNpYWxpdGllczogc3RhdGUuc3BlY2lhbGl0eSxcblx0cHJldlZpZGVvOiBzdGF0ZS52aWRlby5zZWxlY3RlZFZpZGVvLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG5cdGFkZFZpZGVvLFxuXHRlZGl0VmlkZW8sXG5cdGdldFZpZGVvLFxufSkoVXBzZXJ0VmlkZW8pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBQcml2YXRlUm91dGUgPSAoe1xuICBjb21wb25lbnQ6IENvbXBvbmVudCxcbiAgYXV0aDogeyBpc0F1dGhlbnRpY2F0ZWQgfSxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZVxuICAgICAgey4uLnJlc3R9XG4gICAgICByZW5kZXI9eyhwcm9wcykgPT5cbiAgICAgICAgIWlzQXV0aGVudGljYXRlZCA/IDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+IDogPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgYXV0aDogc3RhdGUuYXV0aCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJpdmF0ZVJvdXRlKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5leHBvcnQgY29uc3QgU2VvID0gKHtcblx0ZGVzY3JpcHRpb24sXG5cdHRpdGxlID0gJyAnLFxuXHRsYW5nID0gJ2VuJyxcblx0bWV0YSA9IFtdLFxuXHRyaWNocmVzdWx0LFxufSkgPT4ge1xuXHQvLyBjb25zdCB7IGZhdmljb24gfSA9ICcnO1xuXG5cdGNvbnN0IG1ldGFUaXRsZSA9IGBDb2RlcnNHYWxhIHwgJHt0aXRsZX1gO1xuXHRjb25zdCBtZXRhRGVzY3JpcHRpb24gPVxuXHRcdFwiQ29kZXJzR2FsYSdzIG9ubHkgcHVycG9zZSBpcyB0byBwcm92aWRlIGNvZGluZyBrbm93bGVkZ2UsIHN1Y2ggYXMgV2ViIGRldmVsb3BtZW50IHRoYXQgaW5jbHVkZXMgSFRNTCBDU1MgSlMgTm9kZSBSZWFjdCBNb25nb0RiLCBNYWNoaW5lIExlYXJuaW5nLCBEYXRhIFN0cnVjdHVyZXMgYW5kIEFsZ29yaXRobVwiIHx8XG5cdFx0ZGVzY3JpcHRpb247XG5cblx0cmV0dXJuIChcblx0XHQ8SGVsbWV0XG5cdFx0XHR0aXRsZT17bWV0YVRpdGxlfVxuXHRcdFx0aHRtbEF0dHJpYnV0ZXM9e3sgbGFuZyB9fVxuXHRcdFx0bWV0YT17W1xuXHRcdFx0XHR7IG5hbWU6IGBkZXNjcmlwdGlvbmAsIGNvbnRlbnQ6IG1ldGFEZXNjcmlwdGlvbiB9LFxuXHRcdFx0XHR7IHByb3BlcnR5OiBgb2c6dGl0bGVgLCBjb250ZW50OiBtZXRhVGl0bGUgfSxcblx0XHRcdFx0eyBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCwgY29udGVudDogbWV0YURlc2NyaXB0aW9uIH0sXG5cdFx0XHRcdHsgcHJvcGVydHk6IGBvZzp0eXBlYCwgY29udGVudDogYHdlYnNpdGVgIH0sXG5cdFx0XHRcdHsgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsIGNvbnRlbnQ6IGBzdW1tYXJ5YCB9LFxuXHRcdFx0XHR7IG5hbWU6IGB0d2l0dGVyOnRpdGxlYCwgY29udGVudDogbWV0YVRpdGxlIH0sXG5cdFx0XHRcdHsgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLCBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24gfSxcblx0XHRcdF0uY29uY2F0KG1ldGEpfVxuXHRcdFx0bGluaz17W3sgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9wbmcnLCBocmVmOiAnZmF2aWNvbicgfV19XG5cdFx0XHRzY3JpcHQ9e1tcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHR5cGU6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcblx0XHRcdFx0XHRpbm5lckhUTUw6IEpTT04uc3RyaW5naWZ5KHJpY2hyZXN1bHQpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XX1cblx0XHQvPlxuXHQpO1xufTtcbiIsImltcG9ydCB7IFNFUlZJQ0VfVVJMIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IHNlcnZpY2VQb3N0ID0gYXN5bmMgKHBhdGgsIHBheWxvYWQsIGhlYWRlcnMgPSBudWxsKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke1NFUlZJQ0VfVVJMfS8ke3BhdGh9YCwgcGF5bG9hZCwge1xuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXJ2aWNlR2V0ID0gYXN5bmMgKHBhdGgsIHBheWxvYWQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgJHtTRVJWSUNFX1VSTH0vJHtwYXRofWAsIHBheWxvYWQpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XG4iLCJleHBvcnQgKiBmcm9tICcuL1ByaXZhdGVSb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL1Nlbyc7XG5leHBvcnQgKiBmcm9tICcuL3NldEF1dGhUb2tlbic7XG5leHBvcnQgKiBmcm9tICcuL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBzZXRBdXRoVG9rZW4gPSAodG9rZW4pID0+IHtcbiAgY29uc29sZS5sb2codG9rZW4pO1xuICBpZiAodG9rZW4pIHtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEpXVCAke3Rva2VufWA7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ107XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3Qgc2Nyb2xsVG8gPSAoZWxlbWVudCkgPT4ge1xuXHRpc0NsaWVudCAmJlxuXHRcdHdpbmRvdy5zY3JvbGwoe1xuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG5cdFx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNDbGllbnQgPVxuXHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPyB0cnVlIDogZmFsc2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LXRpcHB5JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBEZWxldGUsIFVwZGF0ZSwgQWRkIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcblxuY29uc3QgVG9vbHRpcFdyYXBwZXIgPSAoeyB0aXRsZSwgcG9zaXRpb24sIGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VG9vbHRpcCB0aXRsZT17dGl0bGV9IHBvc2l0aW9uPXtwb3NpdGlvbn0gdHJpZ2dlcj0nbW91c2VlbnRlcic+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9Ub29sdGlwPlxuXHQpO1xufTtcblxuY29uc3QgQWRtaW5CdXR0b25zID0gKHsgdHlwZSwgdXJsLCBoYW5kbGVyLCBpc0FkbWluLCBkYXRhID0ge30gfSkgPT5cblx0aXNBZG1pbiA/IChcblx0XHQ8VG9vbHRpcFdyYXBwZXIgdGl0bGU9e2Ake3R5cGV9IFwiJHtkYXRhLm5hbWV9XCJgfSBwb3NpdGlvbj17J3RvcCd9PlxuXHRcdFx0PEFkbWluQnV0dG9uc1dyYXBwZXJcblx0XHRcdFx0dHlwZT17dHlwZX1cblx0XHRcdFx0dXJsPXt1cmx9XG5cdFx0XHRcdGhhbmRsZXI9e2hhbmRsZXJ9XG5cdFx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0XHQvPlxuXHRcdDwvVG9vbHRpcFdyYXBwZXI+XG5cdCkgOlxuXHRcdDxBZG1pbkJ1dHRvbnNXcmFwcGVyXG5cdFx0XHR0eXBlPXtcIk5vbmVcIn1cblx0XHRcdHVybD17dXJsfVxuXHRcdFx0aGFuZGxlcj17aGFuZGxlcn1cblx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0Lz5cblx0O1xuXG5jb25zdCBBZG1pbkJ1dHRvbnNXcmFwcGVyID0gKHsgdHlwZSwgdXJsLCBoYW5kbGVyLCBkYXRhIH0pID0+IHtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSAnQWRkJzpcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxMaW5rIHRvPXt1cmx9PlxuXHRcdFx0XHRcdDxBZGQgc2l6ZT0nMjAnIGNvbG9yPScjMDAwJyAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQpO1xuXG5cdFx0Y2FzZSAnRWRpdCc6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdHRvPXt7XG5cdFx0XHRcdFx0XHRwYXRobmFtZTogdXJsLFxuXHRcdFx0XHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0XHRcdFx0bmFtZTogZGF0YS5uYW1lLFxuXHRcdFx0XHRcdFx0XHRpc0xvY2tlZDogZGF0YS5sb2NrZWQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxVcGRhdGUgc2l6ZT0nMjAnIGNvbG9yPScjMDAwJyAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQpO1xuXG5cdFx0Y2FzZSAnRGVsZXRlJzpcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgb3V0bGluZTogXCJub25lXCIgfX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyKGRhdGEpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0LXRvcGljLW1vZGFsLXRvZ2dsZSc+XG5cdFx0XHRcdFx0PERlbGV0ZSBzaXplPScyMCcgY29sb3I9J2NyaW1zb24nIC8+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0KTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gPGJ1dHRvbiBocmVmPVwiI1wiXG5cdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6IFwibm9uZVwiLCBib3JkZXI6IFwibm9uZVwiLCBvdXRsaW5lOiBcIm5vbmVcIiwgfX1cblx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0LXRvcGljLW1vZGFsLXRvZ2dsZSc+XG5cdFx0XHRcdDxEZWxldGUgc2l6ZT0nMCcgY29sb3I9JycgLz5cblx0XHRcdDwvYnV0dG9uPjtcblx0fVxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHRpc0FkbWluOiBzdGF0ZS5hdXRoLmlzQWRtaW4sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEFkbWluQnV0dG9ucyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgTG9jaywgUmVhZCwgVW5sb2NrIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcblxuY29uc3QgSW5uZXJEaXYgPSAoeyBoYW5kbGVyLCBjaGlsZHJlbiwgZGFyaywgYmcgfSkgPT5cblx0Y2hpbGRyZW4gPyAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uICR7ZGFyayAmJiAnZGFyayd9YH1cblx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCR7YmcgJiYgJ2JnJ31gIH19XG5cdFx0XHRvbkNsaWNrPXtoYW5kbGVyID8gaGFuZGxlciA6IChlKSA9PiBjb25zb2xlLmxvZyhlLCBoYW5kbGVyKX0+XG5cdFx0XHQ8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXHRcdFx0PHN2Zz5cblx0XHRcdFx0PHBvbHlsaW5lXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdvMSdcblx0XHRcdFx0XHRwb2ludHM9JzAgMCwgMTUwIDAsIDE1MCA1NSwgMCA1NSwgMCAwJz48L3BvbHlsaW5lPlxuXHRcdFx0XHQ8cG9seWxpbmVcblx0XHRcdFx0XHRjbGFzc05hbWU9J28yJ1xuXHRcdFx0XHRcdHBvaW50cz0nMCAwLCAxNTAgMCwgMTUwIDU1LCAwIDU1LCAwIDAnPjwvcG9seWxpbmU+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0KSA6IChcblx0XHQ8PlxuXHRcdFx0eycgICAnfVxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdDxSZWFkIHNpemU9ezE5fSAvPlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvPlxuXHQpO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIHVybCwgZGFyaywgYmcsIGlzQnV0dG9uLCBoYW5kbGVyIH0pID0+IHtcblx0cmV0dXJuIHR5cGVvZiBpc0J1dHRvbiA9PSAndW5kZWZpbmVkJyA/IChcblx0XHQ8TGluayB0bz17dXJsICYmIHVybH0+XG5cdFx0XHQ8SW5uZXJEaXYgZGFyaz17ZGFya30gYmc9e2JnfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9Jbm5lckRpdj5cblx0XHQ8L0xpbms+XG5cdCkgOiAoXG5cdFx0PElubmVyRGl2IGRhcms9e2Rhcmt9IGJnPXtiZ30gaGFuZGxlcj17aGFuZGxlcn0+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9Jbm5lckRpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBMb2NrQnV0dG9uID0gKHsgaXNMb2NrZWQsIGhhbmRsZXIgfSkgPT4ge1xuXHRyZXR1cm4gPHNwYW4gb25DbGljaz17aGFuZGxlcn0+e2lzTG9ja2VkID8gPExvY2sgLz4gOiA8VW5sb2NrIC8+fTwvc3Bhbj47XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9BZG1pbkJ1dHRvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9Vc2VyQnV0dG9ucyc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZvb3RlclNvY2lhbE1lZGlhID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhXCI+XG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2dtYWlsLmNvbVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMDMxNjEvZ21haWwtaWNvbi1sb2dvLnN2Z1wiXG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE4MzYwOC90d2l0dGVyLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICA8L2E+XG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vYmloYW5pLnByaXlhXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xMTExOTkvaW5zdGFncmFtLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICA8L2E+XG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb21cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMjE3NzUzL2dpdGh1Yi5zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdpdGh1YlwiXG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvb3Rlck1lc3NhZ2UoKVxuICB9KVxuXG4gIGNvbnN0IHNldEZvb3Rlck1lc3NhZ2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldE1lc3NhZ2UoJ0VudGVyIFlvdXIgRW1haWwgaGVyZSB0byBzdWJzY3JpYmUgZm9yIE5ld3NsZXR0ZXInKSB9XG4gICAgLCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRcIj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1jb2xcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5Db2RlcnMgR2FsYTwvc3Bhbj5cbiAgICAgICAgICAgIDxGb290ZXJTb2NpYWxNZWRpYSAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmlnaHRzLXRleHRcIj5cbiAgICAgICAgICAgICAgJmNvcHk7IDIwMjAgQ29kZXJzIEdhbGEgLCBBbGwgUmlnaHRzIFJlc2VydmVkXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb2xcIj5cbiAgICAgICAgICAgIDxoMT5PdXIgTmV3c2xldHRlcjwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPjwvZGl2PlxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiIGZvcm0gbmV3c2xldHRlci1mb3JtXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRiXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIlxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG5cIiAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENvbCwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXREaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdWknO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuLy8gPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09XG5pbXBvcnQgU2lnbmVkT3V0TGlua3MgZnJvbSAnLi9TaWduZWRPdXRMaW5rcyc7XG5pbXBvcnQgU2lnbmVkSW5MaW5rcyBmcm9tICcuL1NpZ25lZEluTGlua3MnO1xuLy8gPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09XG5cbi8vIGxvZ28gaW1wb3J0c1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9jZ1RyYW5zcGFyZW50LlBORyc7XG5cbmNvbnN0IE5hdmJhciA9ICh7IGF1dGgsIHVpLCBzZXREaXNwbGF5TW9kZSB9KSA9PiB7XG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Y29uc3QgW25hdmJhckV4cGFuZGVkLCBzZXRuYXZiYXJFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzd2l0Y2hlZCwgc2V0c3dpdGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQodWkuZGlzcGxheU1vZGUpO1xuXHRcdGNvbnNvbGUubG9nKHVpLmRpc3BsYXlNb2RlKTtcblx0XHRpZiAodWkuZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuXHRcdFx0c2V0c3dpdGNoZWQodHJ1ZSk7XG5cdFx0fVxuXHR9LCBbc2V0c3dpdGNoZWQsIHVpLmRpc3BsYXlNb2RlXSk7XG5cblx0Ly8gR2V0dGluZyB0aGUgY3VycmVudCBtb2RlIGZyb20gbG9jYWwgc3RvcmFnZVxuXHRpZiAoaXNDbGllbnQpIHtcblx0XHRsZXQgbW9kZSA9ICdsaWdodCc7XG5cblx0XHRtb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKTtcblxuXHRcdGlmIChtb2RlID09PSAnZGFyaycpIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly9cblxuXHQvLyBjb25zdCBsaW5rcyA9IDxTaWduZWRPdXRMaW5rcyAvPjtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSduYXZpZ2F0aW9uLXdyYXAgYmctbGlnaHQgc3RhcnQtaGVhZGVyIHN0YXJ0LXN0eWxlJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuXHRcdFx0XHQ8QWNjb3JkaW9uPlxuXHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbmF2YmFyLWxpZ2h0Jz5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz0nLyc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IGlzQ2xpZW50ICYmIHdpbmRvdy5pbm5lckhlaWdodCA+PSA3NjcgPyAnMnJlbScgOiAnMS4ycmVtJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbG9nbydcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtMb2dvfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9Jydcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdzd2l0Y2gnXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldERpc3BsYXlNb2RlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldHN3aXRjaGVkKCFzd2l0Y2hlZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgc3dpdGNoIGZsb2F0LXJpZ2h0ICR7c3dpdGNoZWQgPyAnc3dpdGNoZWQnIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVpLmRpc3BsYXlNb2RlID09PSAnZGFyaycgPyAnIzExMScgOiAnI2YxZjFmMScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjaXJjbGUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtb2RlLWljb24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1aS5kaXNwbGF5TW9kZSA9PT0gJ2RhcmsnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMzE1OC9tb29uLnN2Zydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy84MzcyNi9zdW4uc3ZnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9Jydcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwb2ludHMtYm94ICc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3BvaW50cy10ZXh0Jz4gUG9pbnRzIDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiQ0cgUG9pbnRzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzcxNS83MTU3MDkuc3ZnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwb2ludHMtaW1nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+IHthdXRoLnVzZXIgJiYgYXV0aC51c2VyLnBvaW50c30gPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2lnbmVkLWxpbmtzJz5cblx0XHRcdFx0XHRcdFx0XHRcdHthdXRoLmlzQXV0aGVudGljYXRlZCAmJiBhdXRoLmlzQXV0aGVudGljYXRlZCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2lnbmVkSW5MaW5rcyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTaWduZWRPdXRMaW5rcyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uVG9nZ2xlXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1idG4nXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldG5hdmJhckV4cGFuZGVkKCFuYXZiYXJFeHBhbmRlZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0YXM9e0J1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2xpbmsnXG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudEtleT0nNSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdmJhci10b2dnbGVyJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PScjbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17bmF2YmFyRXhwYW5kZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J1RvZ2dsZSBuYXZpZ2F0aW9uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlci1pY29uJz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9BY2NvcmRpb24uVG9nZ2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uQ29sbGFwc2Vcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nICdcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRLZXk9JzUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2F1dGgudXNlciAmJiBhdXRoLnVzZXIudXNlcklkID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTaWduZWRJbkxpbmtzIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNpZ25lZE91dExpbmtzIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Db2xsYXBzZT5cblx0XHRcdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbi8vICAgYXV0aDogc3RhdGUuYXV0aCxcbi8vIH0pO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHRhdXRoOiBzdGF0ZS5hdXRoLFxuXHRcdHVpOiBzdGF0ZS51aSxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IHNldERpc3BsYXlNb2RlIH0pKE5hdmJhcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuY29uc3QgU2lnbmVkSW5MaW5rcyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PHVsIGNsYXNzTmFtZT0nbmF2YmFyLW5hdiBtbC1hdXRvIHB5LTQgcHktbWQtMCc+XG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTQnPlxuXHRcdFx0XHRcdDxOYXZMaW5rIHRvPScvaG9tZScgY2xhc3NOYW1lPSduYXYtbGluayc+XG5cdFx0XHRcdFx0XHRIb21lXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00Jz5cblx0XHRcdFx0XHQ8TmF2TGluayB0bz0nL2Fib3V0JyBjbGFzc05hbWU9J25hdi1saW5rJz5cblx0XHRcdFx0XHRcdEFib3V0XG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00Jz5cblx0XHRcdFx0XHQ8TmF2TGlua1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbGluayAnXG5cdFx0XHRcdFx0XHR0bz0nL2xlYXJuJ1xuXHRcdFx0XHRcdFx0cm9sZT0nYnV0dG9uJ1xuXHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnPlxuXHRcdFx0XHRcdFx0TGVhcm5cblx0XHRcdFx0XHQ8L05hdkxpbms+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPjwvZGl2PlxuXHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTQnPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGhyZWY9Jy8nXG5cdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1saW5rJz5cblx0XHRcdFx0XHRcdExvZ091dFxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduZWRJbkxpbmtzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgU2lnbmVkT3V0TGlua3MgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG8gcHktNCBweS1tZC0wXCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00XCI+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvaG9tZVwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBcIlxuICAgICAgICAgICAgdG89XCIvbGVhcm5cIlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIExlYXJuXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPjwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBcIlxuICAgICAgICAgICAgdG89XCIvbG9naW5cIlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPjwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25lZE91dExpbmtzO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9CdXR0b25zJztcbmV4cG9ydCAqIGZyb20gJy4vRm9vdGVyJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItc2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItYm94XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlcjFcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlcjJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlcjNcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlciIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgYXJ0aWNsZXM6IFtdIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFydGljbGVSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcblx0Y29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XG5cblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSAnQUREX0FSVElDTEUnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRvcGljczogcGF5bG9hZCxcblx0XHRcdH07XG5cblx0XHRjYXNlICdHRVRfQVJUSUNMRSc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VsZWN0ZWRBcnRpY2xlOiBwYXlsb2FkLmFydGljbGUsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0dFVF9BTExfQVJUSUNMRVMnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGFydGljbGVzOiBwYXlsb2FkLmFydGljbGVzLFxuXHRcdFx0fTtcblx0XHRjYXNlICdDTEVBUl9BUlRJQ0xFJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZWxlY3RlZEFydGljbGU6IHt9LFxuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ0FERF9BUlRJQ0xFX0VSUk9SJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdExPR0lOX1NVQ0NFU1MsXG5cdExPR0lOX0ZBSUwsXG5cdFJFR0lTVEVSX1NVQ0NFU1MsXG5cdFJFR0lTVEVSX0ZBSUwsXG5cdFVTRVJfTE9BREVELFxuXHRBVVRIX0VSUk9SLFxuXHRMT0dPVVQsXG5cdFNFTkRfUkVTRVRfRU1BSUwsXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHR0b2tlbjogaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyksXG5cdGlzQXV0aGVudGljYXRlZDogbnVsbCxcblx0bG9hZGluZzogZmFsc2UsXG5cdHVzZXI6IG51bGwsXG5cdGlzQWRtaW46IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuXG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgVVNFUl9MT0FERUQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlcjogcGF5bG9hZCxcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuXHRcdFx0XHRpc0FkbWluOiBwYXlsb2FkLnJvbGUgPT09IDAgPyBmYWxzZSA6IHRydWUsXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHRjYXNlIFJFR0lTVEVSX1NVQ0NFU1M6XG5cdFx0Y2FzZSBMT0dJTl9TVUNDRVNTOlxuXHRcdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcGF5bG9hZC50b2tlbik7XG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgcGF5bG9hZC51c2VySWQpO1xuXHRcdFx0Y29uc29sZS5sb2cocGF5bG9hZCk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHQuLi5wYXlsb2FkLFxuXHRcdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHRjYXNlIFJFR0lTVEVSX0ZBSUw6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHR9O1xuXHRcdGNhc2UgTE9HSU5fRkFJTDpcblx0XHRjYXNlIEFVVEhfRVJST1I6XG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcblx0XHRcdGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySWQnKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0b2tlbjogbnVsbCxcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdHVzZXJJZDogbnVsbCxcblx0XHRcdH07XG5cdFx0Y2FzZSBMT0dPVVQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dG9rZW46IG51bGwsXG5cdFx0XHRcdGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHRjYXNlIFNFTkRfUkVTRVRfRU1BSUw6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Li4ucGF5bG9hZCxcblx0XHRcdH07XG5cblx0XHRjYXNlICdTRVRfQVVUSF9MT0FERVInOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgc3BlY2lhbGl0eSBmcm9tICcuL3NwZWNpYWxpdHknO1xuaW1wb3J0IHRvcGljIGZyb20gJy4vdG9waWMnO1xuaW1wb3J0IGFydGljbGUgZnJvbSAnLi9hcnRpY2xlJztcbmltcG9ydCB1aSBmcm9tICcuL3VpJztcbmltcG9ydCB2aWRlbyBmcm9tICcuL3ZpZGVvJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcblx0YXV0aCxcblx0c3BlY2lhbGl0eSxcblx0dG9waWMsXG5cdGFydGljbGUsXG5cdHVpLFxuXHR2aWRlbyxcbn0pO1xuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRzcGVjaWFsaXRpZXM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BlY2lhbGl0eVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblxuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUSUVTJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzcGVjaWFsaXRpZXM6IHBheWxvYWQsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0dFVF9TUEVDSUFMSVRZJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzcGVjaWFsaXR5OiBwYXlsb2FkLFxuXHRcdFx0fTtcblx0XHRjYXNlICdDTEVBUl9TUEVDSUFMSVRZJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzcGVjaWFsaXR5OiB7fSxcblx0XHRcdH07XG5cdFx0Y2FzZSAnR0VUX1NQRUNJQUxJVElFU19FUlJPUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdH07XG5cblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUWV9FUlJPUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHRvcGljczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b3BpY1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblxuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdHRVRfVE9QSUNTJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0b3BpY3M6IHBheWxvYWQsXG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnR0VUX1RPUElDU19FUlJPUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRvcGVuVG9waWNzOiBbXSxcblx0ZGlzcGxheU1vZGU6XG5cdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKVxuXHRcdFx0PyBpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpXG5cdFx0XHQ6ICdsaWdodCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1aVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSAnU0VUX09QRU5fVE9QSUNTJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRvcGVuVG9waWNzOiBwYXlsb2FkLFxuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfRElTUExBWV9NT0RFJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRkaXNwbGF5TW9kZTogcGF5bG9hZCxcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHNlbGVjdGVkVmlkZW86IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblxuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdBRERfVklERU8nOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRvcGljczogcGF5bG9hZCxcblx0XHRcdH07XG5cblx0XHRjYXNlICdHRVRfVklERU8nOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNlbGVjdGVkVmlkZW86IHBheWxvYWQudmlkZW8sXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFTEVDVF9WSURFTyc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VsZWN0ZWRWaWRlbzogcGF5bG9hZCxcblx0XHRcdH07XG5cdFx0Y2FzZSAnQ0xFQVJfVklERU8nOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNlbGVjdGVkVmlkZW86IHt9LFxuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ0FERF9WSURFT19FUlJPUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgUHJvZmlsZUNhcmQgPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwicHJvZmlsZS1jYXJkXCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxoMT57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgIDxoMj5IZWxsbyE8L2gyPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYmlvXCI+XG4gICAgICAgIDxwPntkYXRhLmJpb308L3A+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgbGlzdC11bnN0eWxlZCBsaXN0LWlubGluZVwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtkYXRhLnBvcnRmb2xpb1VybH0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE4ODk5MC9icm93c2VyLXdlYnNpdGUuc3ZnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2RhdGEuaW5zdGFVcmx9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiIH19XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xMTExOTkvaW5zdGFncmFtLnN2Z1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtkYXRhLnR3aXR0ZXJVcmx9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiIH19XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xODM2MDgvdHdpdHRlci5zdmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17ZGF0YS5naXRodWJVcmx9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiIH19XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8yMTc3NTMvZ2l0aHViLnN2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FzaWRlPlxuICApO1xufTtcblxuY29uc3QgQWJvdXRVcyA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBteUZ1bmN0aW9uKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNTUwKSB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZS1jYXJkXCIpXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLWNhcmQtYW5pbVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdXMtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzLWhlYWRpbmdcIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBBYm91dCA8c3Bhbj5Vczwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11cy10ZXh0XCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVvZCBkb2xvclxuICAgICAgICAgIGRvbG9yZSBvZGl0LCBuZXF1ZSBpdGFxdWUgaXVyZSBxdWFzIG1vbGxpdGlhIG5paGlsIGN1bXF1ZSByZW0gaGFydW1cbiAgICAgICAgICBjb25zZXF1dW50dXIgY29uc2VjdGV0dXIuIEF1dGVtIGZ1Z2l0LCBkb2xvcmlidXMgc2ludCBlbmltIGVycm9yIHNlcXVpXG4gICAgICAgICAgcXVvIHJlbSBtaW5pbWEgbWFnbmkgZXhjZXB0dXJpIGV4cGVkaXRhIG1vbGxpdGlhIHJlY3VzYW5kYWUgaGFydW1cbiAgICAgICAgICBhbGlhcyByZXBlbGxlbmR1cywgc2l0IHZvbHVwdGF0ZSBmYWNpbGlzIHNpbWlsaXF1ZSBhdCBpbiBhc3BlcmlvcmVzXG4gICAgICAgICAgc3VudCBpbmFtIHNhZXBlIHF1aS4gTmlzaSBtaW5pbWEgaXBzYSBpbGxvIHRlbXBvcmUgcXVvZCBlbmltIGV1bVxuICAgICAgICAgIHF1aWRlbT9cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jYXJkc1wiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbGc9ezZ9PlxuICAgICAgICAgICAgPFByb2ZpbGVDYXJkXG4gICAgICAgICAgICAgIGRhdGE9e3tcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlByaXlhXCIsXG4gICAgICAgICAgICAgICAgcG9ydGZvbGlvVXJsOiBcImh0dHBzOi8va25vdy1wcml5YS1iaWhhbmkudmVyY2VsLmFwcFwiLFxuICAgICAgICAgICAgICAgIGluc3RhVXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYmloYW5pLnByaXlhXCIsXG4gICAgICAgICAgICAgICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vUHJpeWFCaWhhbmlcIixcbiAgICAgICAgICAgICAgICB0d2l0dGVyVXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vcF9iaWhhbmlcIixcbiAgICAgICAgICAgICAgICBiaW86XG4gICAgICAgICAgICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdW50IHRlbXBvcmEgZXZlbmlldCBxdWFlIG5lcXVlIGhpYyBkb2xvcmlidXMgdm9sdXB0YXRpYnVzIGluY2lkdW50IHF1aWEgZmFjaWxpcyBibGFuZGl0aWlzLlwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDxDb2wgbGc9ezZ9PlxuICAgICAgICAgICAgPFByb2ZpbGVDYXJkXG4gICAgICAgICAgICAgIGRhdGE9e3tcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkthcnRpa1wiLFxuICAgICAgICAgICAgICAgIHBvcnRmb2xpb1VybDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbiAgICAgICAgICAgICAgICBpbnN0YVVybDogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2JpaGFuaS5wcml5YVwiLFxuICAgICAgICAgICAgICAgIGdpdGh1YlVybDogXCJodHRwczovL3d3dy5naXRodWIuY29tL2thcnRpazE4Z1wiLFxuICAgICAgICAgICAgICAgIHR3aXR0ZXJVcmw6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9Ha2FhcnRpa1wiLFxuICAgICAgICAgICAgICAgIGJpbzpcbiAgICAgICAgICAgICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdGVtcG9yYSBldmVuaWV0IHF1YWUgbmVxdWUgaGljIGRvbG9yaWJ1cyB2b2x1cHRhdGlidXMgaW5jaWR1bnQgcXVpYSBmYWNpbGlzIGJsYW5kaXRpaXMuXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRVcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUXVlc3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25zLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzLXMtMVwiPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgQWJvdXQgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPkNvZGVycyBHYWxhPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtZGluXCI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgV2hhdCBpcyA8c3BhbiBjbGFzc05hbWU9XCJcIj5Db2RlcnMgR2FsYTwvc3Bhbj4/XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBkb2xvciBleHBsaWNhYm8gb3B0aW9cbiAgICAgICAgICBmdWdpYXQgcXVvIG51bXF1YW0hIE1vbGxpdGlhLCBmYWNpbGlzIGFwZXJpYW0gbmloaWwgdm9sdXB0YXRlXG4gICAgICAgICAgY29uc2VxdXVudHVyIGRvbG9yZSwgaGljIGFiIHRvdGFtIGJsYW5kaXRpaXMgbG9yZW0zMCBhY2N1c2FudGl1bSxcbiAgICAgICAgICBtYWduYW0gb2RpdCBldW0/XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aHktZGluXCI+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgV2h5IDxzcGFuIGNsYXNzTmFtZT1cIlwiPkNvZGVycyBHYWxhPC9zcGFuPj9cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pIGRvbG9yIGV4cGxpY2FibyBvcHRpb1xuICAgICAgICAgIGZ1Z2lhdCBxdW8gbnVtcXVhbSEgTW9sbGl0aWEsIGZhY2lsaXMgYXBlcmlhbSBuaWhpbCB2b2x1cHRhdGVcbiAgICAgICAgICBjb25zZXF1dW50dXIgZG9sb3JlLCBoaWMgYWIgdG90YW0gYmxhbmRpdGlpcyBhY2N1c2FudGl1bSwgbWFnbmFtIG9kaXRcbiAgICAgICAgICBldW0/XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtZGluXCI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgV2hhdCBpcyA8c3BhbiBjbGFzc05hbWU9XCJcIj5Db2RlcnMgR2FsYTwvc3Bhbj4/XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBkb2xvciBleHBsaWNhYm8gb3B0aW9cbiAgICAgICAgICBmdWdpYXQgcXVvIG51bXF1YW0hIE1vbGxpdGlhLCBmYWNpbGlzIGFwZXJpYW0gbmloaWwgdm9sdXB0YXRlXG4gICAgICAgICAgY29uc2VxdXVudHVyIGRvbG9yZSwgaGljIGFiIHRvdGFtIGJsYW5kaXRpaXMgbG9yZW0zMCBhY2N1c2FudGl1bSxcbiAgICAgICAgICBtYWduYW0gb2RpdCBldW0/XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBsaWtlQXJ0aWNsZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXJ0aWNsZSdcblxuY29uc3QgTGlrZSA9ICh7IGFydGljbGVJZCwgdXNlciwgbGlrZUFydGljbGUgfSkgPT4ge1xuICAgIHZhciBsaWtlZCA9IHVzZXIgJiYgdXNlci5saWtlZEFydGljbGVzLmluY2x1ZGVzKGFydGljbGVJZClcbiAgICBjb25zdCBbYW5pbWF0aW5nLCBzZXRBbmltYXRpbmddID0gdXNlU3RhdGUobGlrZWQpXG5cbiAgICBjb25zdCBoYW5kbGVMaWtlID0gKCkgPT4ge1xuICAgICAgICB2YXIgYWN0aW9uID0gYW5pbWF0aW5nID8gXCJ1bmxpa2VcIiA6IFwibGlrZVwiXG4gICAgICAgIGxpa2VBcnRpY2xlKHsgYWN0aW9uLCBhcnRpY2xlSWQsIHVzZXJJZDogdXNlcj8udXNlcklkIH0pXG4gICAgICAgIHNldEFuaW1hdGluZyghYW5pbWF0aW5nKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4geyBoYW5kbGVMaWtlKCkgfX0gY2xhc3M9e2BoZWFydCAke2FuaW1hdGluZyA/ICdpc19hbmltYXRpbmdfZm9yd2FyZCcgOiBcIlwifWB9PjwvZGl2PlxuICAgICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgdXNlcjogc3RhdGUuYXV0aC51c2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBsaWtlQXJ0aWNsZSB9KShMaWtlKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExpa2UgZnJvbSBcIi4uL2FydGljbGUvTGlrZVwiO1xuXG5jb25zdCBBbGwgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2FydGljbGVzICYmIGFydGljbGVzLm1hcChhcnRpY2xlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWFydGljbGUuZmVhdHVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IG10LTQgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3Qgcm91bmRlZCBib3JkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaW1nIGQtYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1MHB4XCIsIGhlaWdodDogXCIyNTBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUudGh1bWJuYWlsVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtdG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheSByb3VuZGVkLXRvcCBiZy1kYXJrXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1tZXRhXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWtlIGFydGljbGVJZD17YXJ0aWNsZS5faWR9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2Jsb2cvcmVhZC8ke2FydGljbGUubmFtZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9cXHMvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfSBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0IHJlYWQtbW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UmVhZCBNb3JlLi4uIDxpIGNsYXNzTmFtZT1cIm1kaSBtZGktY2hldnJvbi1yaWdodFwiPjwvaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9fSBjbGFzc05hbWU9XCJjb250ZW50IHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBwIGZsb2F0LXJpZ2h0XCI+MTl0aCBPY3QsIDE5PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U29mdHdhcmU8L2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYmxvZy9yZWFkLyR7YXJ0aWNsZS5uYW1lLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL1xccy9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9IGNsYXNzTmFtZT1cInRleHQtZGFyayB0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2FydGljbGUubmFtZX08L1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVyZSBpcyBub3cgYW4gYWJ1bmRhbmNlIG9mIHJlYWRhYmxlIGR1bW15IHRleHRzLiBUaGVzZSBhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFsbHkgdXNlZCB3aGVuIGEgdGV4dCBpcyByZXF1aXJlZCBwdXJlbHkgdG8gZmlsbCBhIHNwYWNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IExpa2UgZnJvbSAnLi4vYXJ0aWNsZS9MaWtlJztcblxuY29uc3QgRmVhdHVyZWQgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHthcnRpY2xlcyAmJlxuXHRcdFx0XHRhcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcblx0XHRcdFx0XHRpZiAoYXJ0aWNsZSAmJiBhcnRpY2xlLmZlYXR1cmVkID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhhcnRpY2xlKTtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaW5nbGVfcG9zdFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWctcG9zdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjgwMHB4XCIsIGhlaWdodDogXCIyODBweFwiIH19IGNsYXNzTmFtZT1cImQtYmxvY2sgaW1nLWZsdWlkXCIgc3JjPXthcnRpY2xlLnRodW1ibmFpbFVybH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiYmxvZy1kZXRhaWxzLmh0bWxcIj57YXJ0aWNsZS5uYW1lfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0SXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LiBUaGUgcG9pbnQgb2YgdXNpbmcgTG9yZW0gSXBzdW0gaXMgdGhhdCBpdCBoYXMgYSBtb3JlLW9yLWxlc3Mgbm9ybWFsXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz17YC9ibG9nL3JlYWQvJHthcnRpY2xlLm5hbWUucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvXFxzL2csXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCItXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1gfSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+Q29udGludWUgUmVhZGluZzwvXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJzdGF0c1wiPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlrZSBhcnRpY2xlSWQ9e2FydGljbGUuX2lkfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUmVhY3RTZWFyY2hBdXRvY29tcGxldGUgfSBmcm9tICdyZWFjdC1zZWFyY2gtYXV0b2NvbXBsZXRlJ1xuXG5jb25zdCBTaWRlYmFyID0gKHsgaGlzdG9yeSwgYXJ0aWNsZXMgfSkgPT4ge1xuICAgIC8vIHZhciBpdGVtcyA9IFtdXG5cbiAgICBjb25zdCBpdGVtcyA9IGFydGljbGVzXG4gICAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSAoc3RyaW5nLCByZXN1bHRzKSA9PiB7XG4gICAgICAgIC8vIG9uU2VhcmNoIHdpbGwgaGF2ZSBhcyB0aGUgZmlyc3QgY2FsbGJhY2sgcGFyYW1ldGVyXG4gICAgICAgIC8vIHRoZSBzdHJpbmcgc2VhcmNoZWQgYW5kIGZvciB0aGUgc2Vjb25kIHRoZSByZXN1bHRzLlxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRm91bmQgJHtyZXN1bHRzLmxlbmd0aH0gcmVzdWx0cyBmb3IgJHtzdHJpbmd9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gcmVzdWx0cycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVPbkhvdmVyID0gKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyB0aGUgaXRlbSBob3ZlcmVkXG4gICAgICAgIGNvbnNvbGUubG9nKCdob3ZlcmVkJylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVPblNlbGVjdCA9IChpdGVtKSA9PiB7XG4gICAgICAgIC8vIHRoZSBpdGVtIHNlbGVjdGVkXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzKVxuICAgICAgICBoaXN0b3J5LnB1c2goYC9ibG9nL3JlYWQvJHtpdGVtLm5hbWUucmVwbGFjZShcbiAgICAgICAgICAgIC9cXHMvZyxcbiAgICAgICAgICAgIFwiLVwiXG4gICAgICAgICl9YClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVPbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRm9jdXNlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtMTIgcmlnaHQtYm94XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHkgc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbS1iLTBcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U2VhcmNoQXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhvdmVyPXtoYW5kbGVPbkhvdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtoYW5kbGVPblNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVPbkZvY3VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxpbmc9e3sgekluZGV4OiAyLCB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+Q2F0ZWdvcmllczwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5IHdpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBjYXRlZ29yaWVzLWNsb3VkcyBtLWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+ZUNvbW1lcmNlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5NaWNyb3NvZnQgVGVjaG5vbG9naWVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPkNyZWF0aXZlIFVYPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5Xb3JkcHJlc3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPkFuZ3VsYXIgSlM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPkVudGVycHJpc2UgTW9iaWxpdHk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPldlYnNpdGUgRGVzaWduPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5IVE1MNTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+SW5mb2dyYXBoaWNzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5Xb3JkcHJlc3MgRGV2ZWxvcG1lbnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIE5ld3NsZXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gdXAgZm9yIG91ciBuZXdzbGV0dGVyIGFuZCB3ZSdsbCB1cGRhdGUgeW91IHdoZW5ldmVyIG5ldyBjb250ZW50IGlzIHVwbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBzcmM9XCJodHRwczovL21haWxyZWxheS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMTIvbmV3c2xldHRlci5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keSB3aWRnZXQgbmV3c2xldHRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48aSBjbGFzc05hbWU9XCJpY29uLXBhcGVyLXBsYW5lXCI+PC9pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnO1xuLy8gaW1wb3J0IFJlYWN0UXVpbGwsIHsgUXVpbGwgfSBmcm9tICdyZWFjdC1xdWlsbCc7XG4vLyBsZXQgQmxvY2tFbWJlZCA9IFF1aWxsLmltcG9ydCgnYmxvdHMvYmxvY2svZW1iZWQnKTtcbi8vIGxldCBJbmxpbmUgPSBRdWlsbC5pbXBvcnQoJ2Jsb3RzL2lubGluZScpO1xuLy8gaGxqcy5jb25maWd1cmUoe1xuLy8gICAgIGxhbmd1YWdlczogWydqYXZhc2NyaXB0JywgJ3B5dGhvbicsICdodG1sJywgJ2NzcyddLFxuLy8gfSk7XG5cbi8vIGNvbnN0IEN1c3RvbUJ1dHRvbiA9ICgpID0+IChcbi8vICAgICA8aW1nXG4vLyAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcgfX1cbi8vICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy83NzU4NC9pbWFnZS5zdmdcIlxuLy8gICAgICAgICBhbHQ9XCJcIlxuLy8gICAgIC8+XG4vLyApO1xuXG4vLyAvLyBjb25zdCBDb2RlTGluZSA9ICgpID0+IChcbi8vIC8vICAgPGltZ1xuLy8gLy8gICAgIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcgfX1cbi8vIC8vICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzI5NDE0NS9jb2RlLnN2Z1wiXG4vLyAvLyAgICAgYWx0PVwiXCJcbi8vIC8vICAgLz5cbi8vIC8vICk7XG5cbi8vIGNvbnN0IFNpemUgPSBRdWlsbC5pbXBvcnQoJ2Zvcm1hdHMvc2l6ZScpO1xuLy8gU2l6ZS53aGl0ZWxpc3QgPSBbXG4vLyAgICAgJzEnLFxuLy8gICAgICcyJyxcbi8vICAgICAnNCcsXG4vLyAgICAgJzYnLFxuLy8gICAgICc4Jyxcbi8vICAgICAnMTAnLFxuLy8gICAgICcxMicsXG4vLyAgICAgJzE0Jyxcbi8vICAgICAnMTYnLFxuLy8gICAgICcyMCcsXG4vLyAgICAgJzI0Jyxcbi8vICAgICAnMjYnLFxuLy8gICAgICczMCcsXG4vLyBdO1xuLy8gUXVpbGwucmVnaXN0ZXIoU2l6ZSwgdHJ1ZSk7XG5cbi8vIGNsYXNzIGlubGluZUNvZGVCbG90IGV4dGVuZHMgSW5saW5lIHsgfVxuLy8gaW5saW5lQ29kZUJsb3QuYmxvdE5hbWUgPSAnaW5saW5lQ29kZSc7XG4vLyBpbmxpbmVDb2RlQmxvdC50YWdOYW1lID0gJ2NvZGUnO1xuXG4vLyBjbGFzcyBJbWFnZUJsb3QgZXh0ZW5kcyBCbG9ja0VtYmVkIHtcbi8vICAgICBzdGF0aWMgY3JlYXRlKHZhbHVlKSB7XG4vLyAgICAgICAgIGxldCBub2RlID0gc3VwZXIuY3JlYXRlKCk7XG4vLyAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhbHQnLCB2YWx1ZS5hbHQpO1xuLy8gICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgdmFsdWUudXJsKTtcbi8vICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdmFsdWUuY2xhc3MpO1xuLy8gICAgICAgICByZXR1cm4gbm9kZTtcbi8vICAgICB9XG5cbi8vICAgICBzdGF0aWMgdmFsdWUobm9kZSkge1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgYWx0OiBub2RlLmdldEF0dHJpYnV0ZSgnYWx0JyksXG4vLyAgICAgICAgICAgICB1cmw6IG5vZGUuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbi8vICAgICAgICAgICAgIGNsYXNzOiBub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSxcbi8vICAgICAgICAgfTtcbi8vICAgICB9XG4vLyB9XG4vLyBJbWFnZUJsb3QuYmxvdE5hbWUgPSAnaW1hZ2UnO1xuLy8gSW1hZ2VCbG90LnRhZ05hbWUgPSAnaW1nJztcbi8vIFF1aWxsLnJlZ2lzdGVyKEltYWdlQmxvdCk7XG4vLyBRdWlsbC5yZWdpc3RlcihpbmxpbmVDb2RlQmxvdCk7XG5cbi8vIGNvbnN0IGluc2VydEltYWdlID0gKCkgPT4ge1xuLy8gICAgIGxldCB1cmwgPSBwcm9tcHQoJ0VudGVyIGxpbmsgVVJMJyk7XG4vLyAgICAgbGV0IGFsdCA9IHByb21wdCgnRW50ZXIgbGluayBhbHQnKTtcbi8vICAgICBsZXQgY2xhcyA9IHByb21wdCgnRW50ZXIgY2xhc3MgTmFtZScpO1xuLy8gICAgIGxldCByYW5nZSA9IHRoaXMucXVpbGwuZ2V0U2VsZWN0aW9uKHRydWUpO1xuLy8gICAgIGNvbnNvbGUubG9nKFF1aWxsLnNvdXJjZXMpO1xuLy8gICAgIHRoaXMucXVpbGwuaW5zZXJ0VGV4dChyYW5nZS5pbmRleCwgJ1xcbicsIFF1aWxsLnNvdXJjZXMuVVNFUik7XG4vLyAgICAgdGhpcy5xdWlsbC5pbnNlcnRFbWJlZChcbi8vICAgICAgICAgcmFuZ2UuaW5kZXggKyAxLFxuLy8gICAgICAgICAnaW1hZ2UnLFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICBhbHQ6IGFsdCxcbi8vICAgICAgICAgICAgIHVybDogdXJsLFxuLy8gICAgICAgICAgICAgY2xhc3M6IGNsYXMsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIFF1aWxsLnNvdXJjZXMuVVNFUlxuLy8gICAgICk7XG4vLyAgICAgdGhpcy5xdWlsbC5zZXRTZWxlY3Rpb24ocmFuZ2UuaW5kZXggKyAyLCBRdWlsbC5zb3VyY2VzLlNJTEVOVCk7XG4vLyB9O1xuXG4vLyBjb25zdCBpbnNlcnRJbmxpbmVDb2RlID0gKGUpID0+IHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5xdWlsbCk7XG4vLyAgICAgLy8gdGhpcy5xdWlsbC5mb3JtYXQoXCJpbmxpbmVDb2RlXCIsIHRydWUpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdpbmxpbmUgY29kZSBpbnMnKTtcbi8vIH07XG5cbi8vIGNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoKSA9PiAoXG4vLyAgICAgPGRpdiBpZD1cInRvb2xiYXJcIj5cbi8vICAgICAgICAgPHNlbGVjdFxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicWwtaGVhZGVyXCJcbi8vICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Jyd9XG4vLyAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGUucGVyc2lzdCgpfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxuLy8gICAgICAgICA8L3NlbGVjdD5cblxuLy8gICAgICAgICA8c2VsZWN0IGNsYXNzPVwicWwtZm9udFwiPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlcmlmXCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vbm9zcGFjZVwiPjwvb3B0aW9uPlxuLy8gICAgICAgICA8L3NlbGVjdD5cblxuLy8gICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLXNpemVcIj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIjJcIj5cbi8vICAgICAgICAgICAgICAgICAyXG4vLyAgICAgICAgICAgICA8L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI0XCI+MjQ8L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNlwiPjI2PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPlxuLy8gICAgICAgICA8L3NlbGVjdD5cblxuLy8gICAgICAgICA8c2VsZWN0IGNsYXNzPVwicWwtYWxpZ25cIj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZW50ZXJcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlnaHRcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqdXN0aWZ5XCI+PC9vcHRpb24+XG4vLyAgICAgICAgIDwvc2VsZWN0PlxuXG4vLyAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtYmFja2dyb3VuZFwiPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlZFwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdyZWVuXCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzRGNjlGOFwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9yYW5nZVwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZpb2xldFwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiNkMGQxZDJcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XG4vLyAgICAgICAgIDwvc2VsZWN0PlxuXG4vLyAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtY29sb3JcIj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjREEwRjQ3XCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzREQ0UxRFwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiM0RjY5RjhcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcmFuZ2VcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjOTkzM2ZmXCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiI2QwZDFkMlwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD48L29wdGlvbj5cbi8vICAgICAgICAgPC9zZWxlY3Q+XG5cbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1ib2xkXCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaXRhbGljXCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtdW5kZXJsaW5lXCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtc3RyaWtlXCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtYmxvY2txdW90ZVwiPjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWRpcmVjdGlvblwiPjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWxpbmtcIj48L2J1dHRvbj5cbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1pbWFnZVwiPjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLXZpZGVvXCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gdmFsdWU9XCJvcmRlcmVkXCIgY2xhc3NOYW1lPVwicWwtbGlzdFwiPjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIHZhbHVlPVwiYnVsbGV0XCIgY2xhc3NOYW1lPVwicWwtbGlzdFwiPjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIHZhbHVlPVwiLTFcIiBjbGFzc05hbWU9XCJxbC1pbmRlbnRcIj48L2J1dHRvbj5cbi8vICAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIisxXCIgY2xhc3NOYW1lPVwicWwtaW5kZW50XCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtY29kZS1ibG9ja1wiPjwvYnV0dG9uPlxuXG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaW5zZXJ0SW1hZ2VcIj5cbi8vICAgICAgICAgICAgIDxDdXN0b21CdXR0b24gLz5cbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgPC9kaXY+XG4vLyApO1xuXG4vLyAvKlxuLy8gICogRWRpdG9yIGNvbXBvbmVudCB3aXRoIGN1c3RvbSB0b29sYmFyIGFuZCBjb250ZW50IGNvbnRhaW5lcnNcbi8vICAqL1xuXG4vLyBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZWRpdG9ySHRtbDogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgfTtcbi8vICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuLy8gICAgIH1cblxuLy8gICAgIGhhbmRsZUNoYW5nZShodG1sKSB7XG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0b3JIdG1sOiBodG1sIH0pO1xuLy8gICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUVkaXRvcihodG1sKTtcbi8vICAgICB9XG5cbi8vICAgICByZW5kZXIoKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZWRpdG9ySHRtbCk7XG5cbi8vICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpO1xuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVkaXRvclwiPlxuLy8gICAgICAgICAgICAgICAgIDxDdXN0b21Ub29sYmFyIC8+XG4vLyAgICAgICAgICAgICAgICAgPFJlYWN0UXVpbGxcbi8vICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuLy8gICAgICAgICAgICAgICAgICAgICBtb2R1bGVzPXtFZGl0b3IubW9kdWxlc31cbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZWRpdG9ySHRtbCB8fCAnJ31cbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBFZGl0b3IubW9kdWxlcyA9IHtcbi8vICAgICBzeW50YXg6IHtcbi8vICAgICAgICAgaGlnaGxpZ2h0OiAodGV4dCkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKHRleHQpLnZhbHVlLFxuLy8gICAgIH0sXG4vLyAgICAgdG9vbGJhcjoge1xuLy8gICAgICAgICBjb250YWluZXI6ICcjdG9vbGJhcicsXG5cbi8vICAgICAgICAgaGFuZGxlcnM6IHtcbi8vICAgICAgICAgICAgIGluc2VydEltYWdlOiBpbnNlcnRJbWFnZSxcbi8vICAgICAgICAgICAgIGluc2VydElubGluZUNvZGU6IGluc2VydElubGluZUNvZGUsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgfSxcbi8vIH07XG5cbi8vIEVkaXRvci5mb3JtYXRzID0gW1xuLy8gICAgICdoZWFkZXInLFxuLy8gICAgICdmb250Jyxcbi8vICAgICAnc2l6ZScsXG4vLyAgICAgJ2JvbGQnLFxuLy8gICAgICdpdGFsaWMnLFxuLy8gICAgICd1bmRlcmxpbmUnLFxuLy8gICAgICdzdHJpa2UnLFxuLy8gICAgICdibG9ja3F1b3RlJyxcbi8vICAgICAnbGlzdCcsXG4vLyAgICAgJ2J1bGxldCcsXG4vLyAgICAgJ2luZGVudCcsXG4vLyAgICAgJ2xpbmsnLFxuLy8gICAgICdpbWFnZScsXG4vLyAgICAgJ2NvbG9yJyxcbi8vICAgICAnY29kZS1ibG9jaycsXG4vLyBdO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgSGVybyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9sdW5hMS5jby81N2Q5YjYucG5nXCJcbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1pbWFnZSAtdHdvIC1mbG9hdGluZ0RlbGF5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbHVuYTEuY28vMjA3MGVlLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taW1hZ2UgLXRocmVlIC1mbG9hdGluZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJodHRwczovL2x1bmExLmNvL2ZkYTg2MC5wbmdcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWltYWdlIC1mb3VyIC1mbG9hdGluZ0RlbGF5XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1oZWFkZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8tbGFiZWxcIj5UaGlzIGlzLi4uPC9wPlxuXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1oZWFkbGluZSBcIj5Db2RlcnMgR2FsYTwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIENvZGVycyBHYWxhIGlzIGEgZnJlZSB0byB1c2UgcGxhdGZvcm0sIHdoaWNoIHdpbGwgaGVscCBhbmQgZ3VpZGVcbiAgICAgICAgICAgIHlvdSwgbm90IG9ubHkgdG8gbGVhcm4gd2ViIGRldmVsb3BtZW50IGJ1dCBiZWNvbWUgYSBmcmVlLWxhbmNlciBsaWtlXG4gICAgICAgICAgICB1cy4gU28gY2xpY2sgb24gcGxheSBhbmQgZW1iYXJrIGEgbmV3IGpvdXJuZXkgd2l0aCB1cy5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9sZWFyblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5IC1jb3JhbCAtc21hbGwgLXB1bHNlXCI+PC9kaXY+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBIZXJvQ2FyZHMgPSAoKSA9PiB7XG5cdC8vIHJlZnMgZm9yIHRoZSB0aHJlZSBzZWN0aW9uXG5cdGNvbnN0IGhlcm9CbHVlID0gdXNlUmVmKCk7XG5cdGNvbnN0IGhlcm9PcmFuZ2UgPSB1c2VSZWYoKTtcblx0Y29uc3QgaGVyb0dyZWVuID0gdXNlUmVmKCk7XG5cblx0Y29uc3Qgc2Nyb2xsRnVuY3Rpb24gPSAoKSA9PiB7XG5cdFx0aXNDbGllbnQgJiZcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRcdHZhciBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdFx0aWYgKHNjcm9sbCA8IDE1MCkge1xuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XG5cdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHNjcm9sbCA+IDE1MCAmJiBzY3JvbGwgPCA0NTApIHtcblx0XHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ29uZScpO1xuXHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xuXHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3R3bycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzY3JvbGwgPiA0NTAgJiYgc2Nyb2xsIDwgNjUwKSB7XG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndHdvJyk7XG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhyZWUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gNjUwKSB7XG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndHdvJyk7XG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndGhyZWUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuY3Rpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiA2MDApIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3R3bycpO1xuXHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndGhyZWUnKTtcblx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdvbmUnKTtcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XG5cdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJyk7XG5cdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xuXHRcdFx0XHRcdFx0fSwgODUwKTtcblx0XHRcdFx0XHR9LCA3NTApO1xuXHRcdFx0XHR9LCA2NTApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRpc0NsaWVudCAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuY3Rpb24pO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0naGVybyc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naGVyby1ib3gtY29udGFpbmVyJz5cblx0XHRcdFx0PExpbmsgdG89Jy9hYm91dCcgY2xhc3NOYW1lPSdoZXJvLWJveCc+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHJlZj17aGVyb0JsdWV9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tYmx1ZSc+PC9zcGFuPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2hlcm8tYm94X190aXRsZSc+V2hhdCBpcyBDb2RlcnNHYWxhPzwvaDI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoZXJvLWJveF9fYm9keSc+XG5cdFx0XHRcdFx0XHRDb2RlcnNHYWxhIGlzIGEgZnJlZSB0byB1c2UgcGxhdGZvcm0gZm9yIGFsbCB0aG9zZSBwZW9wbGUgd2hvIGFyZVxuXHRcdFx0XHRcdFx0dW53aWxsaW5nIHRvIHBheSBoaWdoIHJhbnNvbSB0byB0aGVzZSBjcm9va2VkIGNvYWNoaW5nIGNlbnRlcnMgZm9yXG5cdFx0XHRcdFx0XHRsZWFybmluZyB3ZWIgRGV2ZWxvcG1lbnQuIFdlIHdvbid0IGJlIHNwb29uIGZlZWRpbmcgeW91IGJ1dCB3ZSB3aWxsXG5cdFx0XHRcdFx0XHRndWlkZSB5b3UuIEFueXdheSwgaWYgeW91IGFyZSBlYWdlciB0byBsZWFybiB5b3Ugd2lsbCBmaW5kIGEgd2F5LlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8TGluayB0bz0nL2Fib3V0LyNhYm91dHVzJyBjbGFzc05hbWU9J2hlcm8tYm94Jz5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0cmVmPXtoZXJvR3JlZW59XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tZ3JlZW4nPjwvc3Bhbj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdoZXJvLWJveF9fdGl0bGUnPldobyBhcmUgd2U/PC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hlcm8tYm94X19ib2R5Jz5cblx0XHRcdFx0XHRcdFdlIHN0YXJ0ZWQgd2ViIGRldmVsb3BtZW50IG9uIG91ciBvd24sIHdpdGggbm8gZGlyZWN0aW9uIGFuZCBub1xuXHRcdFx0XHRcdFx0Y29hY2hpbmcuIEFsbCB3ZSBoYWQgd2FzIGRldGVybWluYXRpb24gYW5kIGludGVybmV0LiBXZSBjb25zaWRlclxuXHRcdFx0XHRcdFx0b3Vyc2VsdmVzIGx1Y2t5IHRvIGJlIGFibGUgdG8gcHJvdmlkZSB0aGUgc3VwcG9ydCB0aGF0IGhhZCBiZWVuXG5cdFx0XHRcdFx0XHRwcm92aWRlZCB0byB1cy5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89Jy9sZWFybicgY2xhc3NOYW1lPSdoZXJvLWJveCc+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHJlZj17aGVyb09yYW5nZX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGVyby1ib3hfX2NpcmNsZSBoZXJvLWJveF9fY2lyY2xlLS1vcmFuZ2UnPjwvc3Bhbj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdoZXJvLWJveF9fdGl0bGUnPlN0YXJ0IExlYXJuaW5nIC4uPC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hlcm8tYm94X19ib2R5Jz5cblx0XHRcdFx0XHRcdFJpZ2h0IG5vdyB3ZSBoYXZlIHRoZSBhcnRpY2xlcyBvbiBmcm9udC1lbmQtZGV2ZWxvcG1lbnQuIFdlIGFyZVxuXHRcdFx0XHRcdFx0d29ya2luZyB0aXJlbGVzc2x5IHRvIGNvdmVyIGJhY2tlbmQuIFdlIHdpbGwgaGF2ZSB0aGUgYXJ0aWNsZXMgYWlyZWRcblx0XHRcdFx0XHRcdG9uIGJhY2tlbmQgYmVmb3JlIHNlcHRlbWJlci4gVGhlIGNvdXJzZSB3aWxsIGNvdmVyIEZyb250LWVuZCwgQVBJLFxuXHRcdFx0XHRcdFx0Tm9kZWpzLWV4cHJlc3MsIE1vbmdvRGIsIE15U1FMLCBIb3N0aW5nLCBSZWFjdCwgRmlyZWJhc2UuLi4gYW5kIGFcblx0XHRcdFx0XHRcdGxvdCBtb3JlIHByb2plY3RzLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb0NhcmRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2Nyb2xsVG8sIGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9sYXlvdXQnO1xuaW1wb3J0IHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcblxuY29uc3QgQXJ0aWNsZU5hbWVzID0gKHtcblx0c2VsZWN0VmlkZW8sXG5cdGFydGljbGUsXG5cdGRlbGV0ZUFydGljbGUsXG5cdHRvcGljLFxuXHRzcGVjaWFsaXR5TmFtZSxcbn0pID0+IHtcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKGRhdGEpID0+IHtcblx0XHRjb25zdCB7IEFydGljbGVOYW1lLCBfaWQgfSA9IGRhdGE7XG5cdFx0Y29uc3QgY29uZmlybSA9XG5cdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0d2luZG93LnByb21wdChgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke0FydGljbGVOYW1lfVwiID8gWSBvciBOIGApO1xuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcblx0XHRcdGRlbGV0ZUFydGljbGUoX2lkLCB0b3BpYy5faWQsIHNwZWNpYWxpdHlOYW1lKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IHJlYWQtaWNvbic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIHJlYWQgY29sLTEwJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2l0ZW0nPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGFydGljbGUpO1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyhhcnRpY2xlKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxUbyhwb3MpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkaXNwbGF5LWFydGljbGUnPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nYXJ0aWNsZS1uYW1lIG0tMCc+XG5cdFx0XHRcdFx0XHRcdHthcnRpY2xlLkFydGljbGVOYW1lfXsnICd9XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYXJ0aWNsZS1hY3Rpb24taWNvbnMnPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvYXJ0aWNsZS91cGRhdGUvJHthcnRpY2xlLl9pZH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17YXJ0aWNsZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9e2hhbmRsZURlbGV0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2FydGljbGV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb3B0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e2BSZWFkIFwiJHthcnRpY2xlLkFydGljbGVOYW1lfVwiYH1cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHRcdFx0XHR0cmlnZ2VyPSdtb3VzZWVudGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyhhcnRpY2xlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBwb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPD0gNTAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzY3JvbGxUbyhwb3MpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cGRhdGUtZGVsZXRlIGZsb2F0LXJpZ2h0Jz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGRlbGV0ZUFydGljbGUsIHNlbGVjdFZpZGVvIH0pKEFydGljbGVOYW1lcyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2xheW91dCc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi8uLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xuaW1wb3J0IHsgZ2V0U3BlY2lhbGl0aWVzLCBkZWxldGVTcGVjaWFsaXR5IH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5cbmNvbnN0IENhcmQgPSAoeyBnZXRTcGVjaWFsaXRpZXMsIHNwZWNpYWxpdGllcywgZGVsZXRlU3BlY2lhbGl0eSB9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHNwZWNpYWxpdGllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdGdldFNwZWNpYWxpdGllcygpO1xuXHRcdH1cblx0fSwgW3NwZWNpYWxpdGllcy5sZW5ndGgsIGdldFNwZWNpYWxpdGllc10pO1xuXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpdGVtKSA9PiB7XG5cdFx0Ly8gR290IHRvIGhlbHBlciwgY2hlY2tcblx0XHRjb25zdCBjb25maXJtID1cblx0XHRcdGlzQ2xpZW50ICYmXG5cdFx0XHR3aW5kb3cucHJvbXB0KFxuXHRcdFx0XHRgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke2l0ZW0uTmFtZX1cIiA/IFkgb3IgTiAoRGVsZXRpbmcgYSBzcGVjaWFsaXR5IHdpbGwgbGVhZCB0byBkZWxldGlvbiBvZiBhbGwgdG9waWNzIGFuZCBhcnRpY2xlcyBpbnNpZGUgaXQpIGBcblx0XHRcdCk7XG5cdFx0aWYgKGNvbmZpcm0gPT09ICdZJykge1xuXHRcdFx0ZGVsZXRlU3BlY2lhbGl0eShpdGVtLl9pZCk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2xlYXJuLWNvbnRhaW5lcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB0LTQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cblx0XHRcdFx0XHR7c3BlY2lhbGl0aWVzICYmXG5cdFx0XHRcdFx0XHRzcGVjaWFsaXRpZXMubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0uX2lkfSBjbGFzc05hbWU9J2NvbC1sZy02Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ltZ0J4Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltYWdlJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpdGVtLmltYWdlVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtpdGVtLmFsdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzQ2xpZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJzE1MHB4J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ2F1dG8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb250ZW50QngnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj4ge2l0ZW0ubmFtZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw9eycvdXBkYXRlc3BlY2lhbGl0eS8nICsgaXRlbS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17aXRlbX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2l0ZW19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHVybD17Jy9sZWFybi8nICsgaXRlbS5uYW1lfT5TdGFydCBOb3c8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHRzcGVjaWFsaXRpZXM6IHN0YXRlLnNwZWNpYWxpdHkuc3BlY2lhbGl0aWVzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG5cdGdldFNwZWNpYWxpdGllcyxcblx0ZGVsZXRlU3BlY2lhbGl0eSxcbn0pKENhcmQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vbGF5b3V0JztcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBkZWxldGVWaWRlbywgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcblxuY29uc3QgVmlkZW9OYW1lcyA9ICh7XG5cdHNlbGVjdFZpZGVvLFxuXHR2aWRlbyxcblx0ZGVsZXRlVmlkZW8sXG5cdHRvcGljLFxuXHRzcGVjaWFsaXR5TmFtZSxcbn0pID0+IHtcblx0Y29uc29sZS5sb2codmlkZW8pO1xuXHRjb25zdCBoYW5kbGVEZWxldGUgPSAoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IHsgVmlkZW9OYW1lLCBfaWQgfSA9IGRhdGE7XG5cdFx0Y29uc3QgY29uZmlybSA9XG5cdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0d2luZG93LnByb21wdChgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke1ZpZGVvTmFtZX1cIiA/IFkgb3IgTiBgKTtcblx0XHRpZiAoY29uZmlybSA9PT0gJ1knKSB7XG5cdFx0XHRkZWxldGVWaWRlbyhfaWQsIHRvcGljLl9pZCwgc3BlY2lhbGl0eU5hbWUpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgcmVhZC1pY29uJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWFkIGNvbC0xMCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyh2aWRlbyk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkaXNwbGF5LWFydGljbGUnPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nYXJ0aWNsZS1uYW1lIG0tMCc+XG5cdFx0XHRcdFx0XHRcdHt2aWRlby5uYW1lfXsnICd9XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYXJ0aWNsZS1hY3Rpb24taWNvbnMnPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvdmlkZW8vdXBkYXRlLyR7dmlkZW8uX2lkfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXt2aWRlb31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9e2hhbmRsZURlbGV0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e3ZpZGVvfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXBcblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9wdGlvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtgUmVhZCBcIiR7dmlkZW8ubmFtZX1cImB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlcj0nbW91c2VlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzQnV0dG9uPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0VmlkZW8odmlkZW8pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3VwZGF0ZS1kZWxldGUgZmxvYXQtcmlnaHQnPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgZGVsZXRlVmlkZW8sIHNlbGVjdFZpZGVvIH0pKFZpZGVvTmFtZXMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcbmltcG9ydCB7IHVubG9ja1RvcGljIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy90b3BpYyc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBBcnRpY2xlUHJldmlldyA9ICh7IFNlbGVjdGVkQXJ0aWNsZSwgc3BlY2lhbGl0eU5hbWUsIHVubG9ja1RvcGljIH0pID0+IHtcblx0Y29uc3QgUmVhZE1vcmVVcmwgPVxuXHRcdFNlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubmFtZVxuXHRcdFx0PyBgLyR7c3BlY2lhbGl0eU5hbWV9L3JlYWQvJHtTZWxlY3RlZEFydGljbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgJy0nKX1gXG5cdFx0XHQ6IGAvJHtzcGVjaWFsaXR5TmFtZX0vcmVhZC9iZWZvcmUtc3RhcnRpbmdgO1xuXG5cdGNvbnN0IGhhbmRsZVVubG9jayA9IGFzeW5jICh0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4ge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHVubG9ja1RvcGljKHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKTtcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHR9O1xuXHRjb25zb2xlLmxvZyhTZWxlY3RlZEFydGljbGUpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRhaW5lcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMgY2FyZC1oZWFkZXInPlxuXHRcdFx0XHRcdFx0e1NlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubmFtZVxuXHRcdFx0XHRcdFx0XHQ/IFNlbGVjdGVkQXJ0aWNsZS5uYW1lXG5cdFx0XHRcdFx0XHRcdDogJ1JlYWQgVGhpcyBCZWZvcmUgWW91IFN0YXJ0Li4uJ31cblx0XHRcdFx0XHRcdHsvKiA8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmbG9hdC1yaWdodCc+PC9oMz5cblx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdxbC1zbm93Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLW5vLWJvZHkgcWwtZWRpdG9yJz5cblx0XHRcdFx0XHRcdFx0e1NlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubG9ja2VkID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRUbyB2aWV3IHRoaXMgYXJ0aWNsZSBwbGVhc2UgdW5sb2NrIGl0IHVzaW5nIHBvaW50c3snICd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVVbmxvY2soXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLnRvcGljSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRVbmxvY2tcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0UmVhY3RIdG1sUGFyc2VyKFNlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUuY29udGVudClcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGwoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogJzBweCcsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dG89e1JlYWRNb3JlVXJsfT5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2xpbmsnPlxuXHRcdFx0XHRcdFx0XHR7U2VsZWN0ZWRBcnRpY2xlICYmIFNlbGVjdGVkQXJ0aWNsZS5sb2NrZWRcblx0XHRcdFx0XHRcdFx0XHQ/ICdVbmxvY2snXG5cdFx0XHRcdFx0XHRcdFx0OiAnUmVhZCBNb3JlLi4uLi4nfVxuXHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgdW5sb2NrVG9waWMgfSkoQXJ0aWNsZVByZXZpZXcpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBnZXRUb3BpY3MsIGRlbGV0ZVRvcGljIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgQXJ0aWNsZU5hbWVzIGZyb20gJy4uL2xlYXJuL0FydGljbGVOYW1lcyc7XG5pbXBvcnQgVmlkZW9OYW1lcyBmcm9tICcuLi9sZWFybi9WaWRlb05hbWVzJztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcbmltcG9ydCB7IExvY2sgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuY29uc3QgVG9waWNzT3ZlcnZpZXcgPSAoe1xuXHRnZXRUb3BpY3MsXG5cdHNwZWNpYWxpdHlOYW1lLFxuXHR0b3BpY3MsXG5cdGRlbGV0ZVRvcGljLFxuXHR1c2VyLFxufSkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdldFRvcGljcyhzcGVjaWFsaXR5TmFtZSk7XG5cdH0sIFtnZXRUb3BpY3MsIHNwZWNpYWxpdHlOYW1lXSk7XG5cblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKHRvcGljKSA9PiB7XG5cdFx0Y29uc3QgY29uZmlybSA9XG5cdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0d2luZG93LnByb21wdChcblx0XHRcdFx0YFlvdSBzdXJlIHdhbnQgdG8gZGVsZXRlIFwiJHt0b3BpYy5uYW1lfVwiID8gWSBvciBOIChEZWxldGluZyBhIHRvcGljIHdpbGwgbGVhZCB0byBkZWxldGlvbiBvZiBhbGwgYXJ0aWNsZXMgaW5zaWRlIGl0KSBgXG5cdFx0XHQpO1xuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcblx0XHRcdGRlbGV0ZVRvcGljKHRvcGljLl9pZCwgc3BlY2lhbGl0eU5hbWUpO1xuXHRcdFx0dG9hc3QoJ0RlbGV0ZWQgc3BlY2lhbGl0eSBzdWNlc3NmdWxseScpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD0nc3BlY2lhbGl0aWVzJyBjbGFzc05hbWU9J1RvcGljLW5hbWVzICc+XG5cdFx0XHR7dG9waWNzLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0dG9waWNzLm1hcCgodG9waWMpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e3RvcGljLl9pZH0+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwLTAgc3BlY2lhbGl0eS10b3BpYy1jb250YWluZXIgbS0xJ1xuXHRcdFx0XHRcdFx0XHRcdGtleT17dG9waWMuX2lkfT5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdmbG9hdC1sZWZ0IHRvcGljTmFtZSc+e3RvcGljLm5hbWV9PC9oND5cblxuXHRcdFx0XHRcdFx0XHRcdDxBY3Rpb25CdXR0b25zXG5cdFx0XHRcdFx0XHRcdFx0XHRhY2NvcmRpb25LZXk9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfVxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZD17c2V0U2VsZWN0ZWRJZH1cblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkSWQ9e3NlbGVjdGVkSWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eU5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XG5cdFx0XHRcdFx0XHRcdFx0XHR1c2VyPXt1c2VyfVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdFx0XHRcdHt0b3BpYy5sb2NrZWQgJiZcblx0XHRcdFx0XHRcdFx0XHQhdXNlci51bkxvY2tlZFRvcGljcy5pbmNsdWRlcyh0b3BpYy5faWQpID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uQ29sbGFwc2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRLZXk9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0b3BpYy52aWRlb3MubGVuZ3RoID4gMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0b3BpYy52aWRlb3MubWFwKCh2aWRlbykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VmlkZW9OYW1lc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZGVvPXt2aWRlb31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHlOYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiB0b3BpYy5hcnRpY2xlcyAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0b3BpYy5hcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFydGljbGVOYW1lc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFydGljbGU9e2FydGljbGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwZWNpYWxpdHlOYW1lPXtzcGVjaWFsaXR5TmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb2w+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Db2xsYXBzZT5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHR0b3BpY3M6IHN0YXRlLnRvcGljLnRvcGljcyxcblx0dXNlcjogc3RhdGUuYXV0aC51c2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFRvcGljcywgZGVsZXRlVG9waWMgfSkoXG5cdFRvcGljc092ZXJ2aWV3XG4pO1xuXG5jb25zdCBBY3Rpb25CdXR0b25zID0gKHtcblx0aGFuZGxlRGVsZXRlLFxuXHR0b3BpYyxcblx0c3BlY2lhbGl0eU5hbWUsXG5cdHNlbGVjdGVkSWQsXG5cdHNldFNlbGVjdGVkSWQsXG5cdHVzZXIsXG59KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2FjdGlvbi1idXR0b25zJz5cblx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0dHlwZT0nRWRpdCdcblx0XHRcdFx0ZGF0YT17dG9waWN9XG5cdFx0XHRcdHVybD17YC8ke3NwZWNpYWxpdHlOYW1lfS90b3BpYy9lZGl0LyR7dG9waWMuX2lkfWB9XG5cdFx0XHQvPlxuXHRcdFx0PEFkbWluQnV0dG9ucyB0eXBlPSdEZWxldGUnIGhhbmRsZXI9e2hhbmRsZURlbGV0ZX0gZGF0YT17dG9waWN9IC8+XG5cdFx0XHQ8QWRtaW5CdXR0b25zIHR5cGU9J0FkZCcgZGF0YT17dG9waWN9IHVybD17YC92aWRlby9hZGQvJHt0b3BpYy5faWR9YH0gLz5cblx0XHRcdHt0b3BpYy5sb2NrZWQgJiYgIXVzZXIudW5Mb2NrZWRUb3BpY3MuaW5jbHVkZXModG9waWMuX2lkKSA/IChcblx0XHRcdFx0PExvY2sgLz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxBY2NvcmRpb24uVG9nZ2xlXG5cdFx0XHRcdFx0YXM9e0J1dHRvbn1cblx0XHRcdFx0XHR2YXJpYW50PSdsaW5rJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxvYXQtcmlnaHQgYXJyb3ctZG93bidcblx0XHRcdFx0XHRldmVudEtleT17dG9waWMubmFtZS5zcGxpdCgvXFxzLykuam9pbignJyl9IC8vIHRvIHJlbW92ZSBzcGFjZXNcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoc2VsZWN0ZWRJZCA9PT0gdG9waWMuX2lkKSB7XG5cdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkSWQoJycpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZCh0b3BpYy5faWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdGlkPXt0b3BpYy5uYW1lLnNwbGl0KC9cXHMvKS5qb2luKCcnKX1cblx0XHRcdFx0XHRcdHZpZXdCb3g9JzAgMCAzMiAzMidcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24gaWNvbi1jaGV2cm9uLWJvdHRvbSBhcnRpY2xlLWR3biBhcnRpY2xlLXRvZ2dsZSBmYS1hbmdsZS1kb3duICR7XG5cdFx0XHRcdFx0XHRcdHRvcGljLl9pZCA9PT0gc2VsZWN0ZWRJZCA/ICdyb3RhdGUnIDogJydcblx0XHRcdFx0XHRcdH1gfT5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xNi4wMDMgMTguNjI2bDcuMDgxLTcuMDgxTDI1IDEzLjQ2bC04Ljk5NyA4Ljk5OC05LjAwMy05IDEuOTE3LTEuOTE2eicgLz5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PC9BY2NvcmRpb24uVG9nZ2xlPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcnRpY2xlUHJldmlldyBmcm9tICcuL0FydGljbGVQcmV2aWV3JztcblxuY29uc3QgVmlkZW9QcmV2aWV3ID0gKHsgdmlkZW8gfSkgPT4ge1xuXHRjb25zb2xlLmxvZyh2aWRlbyk7XG5cdHJldHVybiB2aWRlbyAmJiAhdmlkZW8uY29udGVudCA/IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndmlkZW8tY29udGFpbmVyJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlbyc+XG5cdFx0XHRcdDxpZnJhbWVcblx0XHRcdFx0XHRjbGFzc05hbWU9J2lmcmFtZSdcblx0XHRcdFx0XHRzcmM9e3ZpZGVvLnVybH1cblx0XHRcdFx0XHR0aXRsZT0nWW91VHViZSB2aWRlbyBwbGF5ZXInXG5cdFx0XHRcdFx0ZnJhbWVCb3JkZXI9JzAnXG5cdFx0XHRcdFx0YWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUnXG5cdFx0XHRcdFx0YWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dmlkZW8ubmFtZX08L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVzYyc+e3ZpZGVvLmRlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlua2VkLWFydGljbGVzJz5cblx0XHRcdFx0XHQ8aDQ+QXJ0aWNsZXMgUmVsYXRlZCB0byB0aGUgdG9waWM8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpIDogKFxuXHRcdDxBcnRpY2xlUHJldmlldyBTZWxlY3RlZEFydGljbGU9e3ZpZGVvfSAvPlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHR2aWRlbzogc3RhdGUudmlkZW8uc2VsZWN0ZWRWaWRlbyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlkZW9QcmV2aWV3KTtcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbiAgKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2YTljMzQ5NjE2ZGM3NjkxZWY2MGEzMjA3MDNjYjc3YS5QTkdcIjsiLCIvKipcbiAqIEZ1c2UuanMgdjYuNC42IC0gTGlnaHR3ZWlnaHQgZnV6enktc2VhcmNoIChodHRwOi8vZnVzZWpzLmlvKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAyMSBLaXJvIFJpc2sgKGh0dHA6Ly9raXJvLm1lKVxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZC4gQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wXG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cblxuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXlcbiAgICA/IGdldFRhZyh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgICA6IEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbi8vIEFkYXB0ZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9tYXN0ZXIvLmludGVybmFsL2Jhc2VUb1N0cmluZy5qc1xuY29uc3QgSU5GSU5JVFkgPSAxIC8gMDtcbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgbGV0IHJlc3VsdCA9IHZhbHVlICsgJyc7XG4gIHJldHVybiByZXN1bHQgPT0gJzAnICYmIDEgLyB2YWx1ZSA9PSAtSU5GSU5JVFkgPyAnLTAnIDogcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpXG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8vIEFkYXB0ZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9tYXN0ZXIvaXNCb29sZWFuLmpzXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSA9PT0gdHJ1ZSB8fFxuICAgIHZhbHVlID09PSBmYWxzZSB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gJ1tvYmplY3QgQm9vbGVhbl0nKVxuICApXG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8vIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUgIT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzQmxhbmsodmFsdWUpIHtcbiAgcmV0dXJuICF2YWx1ZS50cmltKCkubGVuZ3RoXG59XG5cbi8vIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbi8vIEFkYXB0ZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9tYXN0ZXIvLmludGVybmFsL2dldFRhZy5qc1xuZnVuY3Rpb24gZ2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsXG4gICAgPyB2YWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICdbb2JqZWN0IFVuZGVmaW5lZF0nXG4gICAgICA6ICdbb2JqZWN0IE51bGxdJ1xuICAgIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKVxufVxuXG5jb25zdCBFWFRFTkRFRF9TRUFSQ0hfVU5BVkFJTEFCTEUgPSAnRXh0ZW5kZWQgc2VhcmNoIGlzIG5vdCBhdmFpbGFibGUnO1xuXG5jb25zdCBJTkNPUlJFQ1RfSU5ERVhfVFlQRSA9IFwiSW5jb3JyZWN0ICdpbmRleCcgdHlwZVwiO1xuXG5jb25zdCBMT0dJQ0FMX1NFQVJDSF9JTlZBTElEX1FVRVJZX0ZPUl9LRVkgPSAoa2V5KSA9PlxuICBgSW52YWxpZCB2YWx1ZSBmb3Iga2V5ICR7a2V5fWA7XG5cbmNvbnN0IFBBVFRFUk5fTEVOR1RIX1RPT19MQVJHRSA9IChtYXgpID0+XG4gIGBQYXR0ZXJuIGxlbmd0aCBleGNlZWRzIG1heCBvZiAke21heH0uYDtcblxuY29uc3QgTUlTU0lOR19LRVlfUFJPUEVSVFkgPSAobmFtZSkgPT4gYE1pc3NpbmcgJHtuYW1lfSBwcm9wZXJ0eSBpbiBrZXlgO1xuXG5jb25zdCBJTlZBTElEX0tFWV9XRUlHSFRfVkFMVUUgPSAoa2V5KSA9PlxuICBgUHJvcGVydHkgJ3dlaWdodCcgaW4ga2V5ICcke2tleX0nIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyYDtcblxuY29uc3QgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuY2xhc3MgS2V5U3RvcmUge1xuICBjb25zdHJ1Y3RvcihrZXlzKSB7XG4gICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgIHRoaXMuX2tleU1hcCA9IHt9O1xuXG4gICAgbGV0IHRvdGFsV2VpZ2h0ID0gMDtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgb2JqID0gY3JlYXRlS2V5KGtleSk7XG5cbiAgICAgIHRvdGFsV2VpZ2h0ICs9IG9iai53ZWlnaHQ7XG5cbiAgICAgIHRoaXMuX2tleXMucHVzaChvYmopO1xuICAgICAgdGhpcy5fa2V5TWFwW29iai5pZF0gPSBvYmo7XG5cbiAgICAgIHRvdGFsV2VpZ2h0ICs9IG9iai53ZWlnaHQ7XG4gICAgfSk7XG5cbiAgICAvLyBOb3JtYWxpemUgd2VpZ2h0cyBzbyB0aGF0IHRoZWlyIHN1bSBpcyBlcXVhbCB0byAxXG4gICAgdGhpcy5fa2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGtleS53ZWlnaHQgLz0gdG90YWxXZWlnaHQ7XG4gICAgfSk7XG4gIH1cbiAgZ2V0KGtleUlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleU1hcFtrZXlJZF1cbiAgfVxuICBrZXlzKCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlzXG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9rZXlzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXkpIHtcbiAgbGV0IHBhdGggPSBudWxsO1xuICBsZXQgaWQgPSBudWxsO1xuICBsZXQgc3JjID0gbnVsbDtcbiAgbGV0IHdlaWdodCA9IDE7XG5cbiAgaWYgKGlzU3RyaW5nKGtleSkgfHwgaXNBcnJheShrZXkpKSB7XG4gICAgc3JjID0ga2V5O1xuICAgIHBhdGggPSBjcmVhdGVLZXlQYXRoKGtleSk7XG4gICAgaWQgPSBjcmVhdGVLZXlJZChrZXkpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaGFzT3duLmNhbGwoa2V5LCAnbmFtZScpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19LRVlfUFJPUEVSVFkoJ25hbWUnKSlcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0ga2V5Lm5hbWU7XG4gICAgc3JjID0gbmFtZTtcblxuICAgIGlmIChoYXNPd24uY2FsbChrZXksICd3ZWlnaHQnKSkge1xuICAgICAgd2VpZ2h0ID0ga2V5LndlaWdodDtcblxuICAgICAgaWYgKHdlaWdodCA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX0tFWV9XRUlHSFRfVkFMVUUobmFtZSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcGF0aCA9IGNyZWF0ZUtleVBhdGgobmFtZSk7XG4gICAgaWQgPSBjcmVhdGVLZXlJZChuYW1lKTtcbiAgfVxuXG4gIHJldHVybiB7IHBhdGgsIGlkLCB3ZWlnaHQsIHNyYyB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVBhdGgoa2V5KSB7XG4gIHJldHVybiBpc0FycmF5KGtleSkgPyBrZXkgOiBrZXkuc3BsaXQoJy4nKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlJZChrZXkpIHtcbiAgcmV0dXJuIGlzQXJyYXkoa2V5KSA/IGtleS5qb2luKCcuJykgOiBrZXlcbn1cblxuZnVuY3Rpb24gZ2V0KG9iaiwgcGF0aCkge1xuICBsZXQgbGlzdCA9IFtdO1xuICBsZXQgYXJyID0gZmFsc2U7XG5cbiAgY29uc3QgZGVlcEdldCA9IChvYmosIHBhdGgsIGluZGV4KSA9PiB7XG4gICAgaWYgKCFpc0RlZmluZWQob2JqKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghcGF0aFtpbmRleF0pIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGF0aCBsZWZ0LCB3ZSd2ZSBhcnJpdmVkIGF0IHRoZSBvYmplY3Qgd2UgY2FyZSBhYm91dC5cbiAgICAgIGxpc3QucHVzaChvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQga2V5ID0gcGF0aFtpbmRleF07XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG5cbiAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGxhc3QgdmFsdWUgaW4gdGhlIHBhdGgsIGFuZCBpZiBpdCdzIGEgc3RyaW5nL251bWJlci9ib29sLFxuICAgICAgLy8gYWRkIGl0IHRvIHRoZSBsaXN0XG4gICAgICBpZiAoXG4gICAgICAgIGluZGV4ID09PSBwYXRoLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgKGlzU3RyaW5nKHZhbHVlKSB8fCBpc051bWJlcih2YWx1ZSkgfHwgaXNCb29sZWFuKHZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICBsaXN0LnB1c2godG9TdHJpbmcodmFsdWUpKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgYXJyID0gdHJ1ZTtcbiAgICAgICAgLy8gU2VhcmNoIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgIGRlZXBHZXQodmFsdWVbaV0sIHBhdGgsIGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGF0aC5sZW5ndGgpIHtcbiAgICAgICAgLy8gQW4gb2JqZWN0LiBSZWN1cnNlIGZ1cnRoZXIuXG4gICAgICAgIGRlZXBHZXQodmFsdWUsIHBhdGgsIGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChzaW5jZSBwYXRoIHVzZWQgdG8gYmUgYSBzdHJpbmcpXG4gIGRlZXBHZXQob2JqLCBpc1N0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGgsIDApO1xuXG4gIHJldHVybiBhcnIgPyBsaXN0IDogbGlzdFswXVxufVxuXG5jb25zdCBNYXRjaE9wdGlvbnMgPSB7XG4gIC8vIFdoZXRoZXIgdGhlIG1hdGNoZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSByZXN1bHQgc2V0LiBXaGVuIGB0cnVlYCwgZWFjaCByZWNvcmQgaW4gdGhlIHJlc3VsdFxuICAvLyBzZXQgd2lsbCBpbmNsdWRlIHRoZSBpbmRpY2VzIG9mIHRoZSBtYXRjaGVkIGNoYXJhY3RlcnMuXG4gIC8vIFRoZXNlIGNhbiBjb25zZXF1ZW50bHkgYmUgdXNlZCBmb3IgaGlnaGxpZ2h0aW5nIHB1cnBvc2VzLlxuICBpbmNsdWRlTWF0Y2hlczogZmFsc2UsXG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgbWF0Y2hpbmcgZnVuY3Rpb24gd2lsbCBjb250aW51ZSB0byB0aGUgZW5kIG9mIGEgc2VhcmNoIHBhdHRlcm4gZXZlbiBpZlxuICAvLyBhIHBlcmZlY3QgbWF0Y2ggaGFzIGFscmVhZHkgYmVlbiBsb2NhdGVkIGluIHRoZSBzdHJpbmcuXG4gIGZpbmRBbGxNYXRjaGVzOiBmYWxzZSxcbiAgLy8gTWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgbWF0Y2hlZCBiZWZvcmUgYSByZXN1bHQgaXMgY29uc2lkZXJlZCBhIG1hdGNoXG4gIG1pbk1hdGNoQ2hhckxlbmd0aDogMVxufTtcblxuY29uc3QgQmFzaWNPcHRpb25zID0ge1xuICAvLyBXaGVuIGB0cnVlYCwgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgc2VhcmNoaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IGV2ZW4gaWYgYSBwZXJmZWN0XG4gIC8vIG1hdGNoIGlzIGZvdW5kIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSBzYW1lIGlucHV0LlxuICBpc0Nhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAvLyBXaGVuIHRydWUsIHRoZSBtYXRjaGluZyBmdW5jdGlvbiB3aWxsIGNvbnRpbnVlIHRvIHRoZSBlbmQgb2YgYSBzZWFyY2ggcGF0dGVybiBldmVuIGlmXG4gIGluY2x1ZGVTY29yZTogZmFsc2UsXG4gIC8vIExpc3Qgb2YgcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgc2VhcmNoZWQuIFRoaXMgYWxzbyBzdXBwb3J0cyBuZXN0ZWQgcHJvcGVydGllcy5cbiAga2V5czogW10sXG4gIC8vIFdoZXRoZXIgdG8gc29ydCB0aGUgcmVzdWx0IGxpc3QsIGJ5IHNjb3JlXG4gIHNob3VsZFNvcnQ6IHRydWUsXG4gIC8vIERlZmF1bHQgc29ydCBmdW5jdGlvbjogc29ydCBieSBhc2NlbmRpbmcgc2NvcmUsIGFzY2VuZGluZyBpbmRleFxuICBzb3J0Rm46IChhLCBiKSA9PlxuICAgIGEuc2NvcmUgPT09IGIuc2NvcmUgPyAoYS5pZHggPCBiLmlkeCA/IC0xIDogMSkgOiBhLnNjb3JlIDwgYi5zY29yZSA/IC0xIDogMVxufTtcblxuY29uc3QgRnV6enlPcHRpb25zID0ge1xuICAvLyBBcHByb3hpbWF0ZWx5IHdoZXJlIGluIHRoZSB0ZXh0IGlzIHRoZSBwYXR0ZXJuIGV4cGVjdGVkIHRvIGJlIGZvdW5kP1xuICBsb2NhdGlvbjogMCxcbiAgLy8gQXQgd2hhdCBwb2ludCBkb2VzIHRoZSBtYXRjaCBhbGdvcml0aG0gZ2l2ZSB1cC4gQSB0aHJlc2hvbGQgb2YgJzAuMCcgcmVxdWlyZXMgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIChvZiBib3RoIGxldHRlcnMgYW5kIGxvY2F0aW9uKSwgYSB0aHJlc2hvbGQgb2YgJzEuMCcgd291bGQgbWF0Y2ggYW55dGhpbmcuXG4gIHRocmVzaG9sZDogMC42LFxuICAvLyBEZXRlcm1pbmVzIGhvdyBjbG9zZSB0aGUgbWF0Y2ggbXVzdCBiZSB0byB0aGUgZnV6enkgbG9jYXRpb24gKHNwZWNpZmllZCBhYm92ZSkuXG4gIC8vIEFuIGV4YWN0IGxldHRlciBtYXRjaCB3aGljaCBpcyAnZGlzdGFuY2UnIGNoYXJhY3RlcnMgYXdheSBmcm9tIHRoZSBmdXp6eSBsb2NhdGlvblxuICAvLyB3b3VsZCBzY29yZSBhcyBhIGNvbXBsZXRlIG1pc21hdGNoLiBBIGRpc3RhbmNlIG9mICcwJyByZXF1aXJlcyB0aGUgbWF0Y2ggYmUgYXRcbiAgLy8gdGhlIGV4YWN0IGxvY2F0aW9uIHNwZWNpZmllZCwgYSB0aHJlc2hvbGQgb2YgJzEwMDAnIHdvdWxkIHJlcXVpcmUgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIHRvIGJlIHdpdGhpbiA4MDAgY2hhcmFjdGVycyBvZiB0aGUgZnV6enkgbG9jYXRpb24gdG8gYmUgZm91bmQgdXNpbmcgYSAwLjggdGhyZXNob2xkLlxuICBkaXN0YW5jZTogMTAwXG59O1xuXG5jb25zdCBBZHZhbmNlZE9wdGlvbnMgPSB7XG4gIC8vIFdoZW4gYHRydWVgLCBpdCBlbmFibGVzIHRoZSB1c2Ugb2YgdW5peC1saWtlIHNlYXJjaCBjb21tYW5kc1xuICB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIC8vIFRoZSBnZXQgZnVuY3Rpb24gdG8gdXNlIHdoZW4gZmV0Y2hpbmcgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gVGhlIGRlZmF1bHQgd2lsbCBzZWFyY2ggbmVzdGVkIHBhdGhzICppZSBmb28uYmFyLmJheipcbiAgZ2V0Rm46IGdldCxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHNlYXJjaCB3aWxsIGlnbm9yZSBgbG9jYXRpb25gIGFuZCBgZGlzdGFuY2VgLCBzbyBpdCB3b24ndCBtYXR0ZXJcbiAgLy8gd2hlcmUgaW4gdGhlIHN0cmluZyB0aGUgcGF0dGVybiBhcHBlYXJzLlxuICAvLyBNb3JlIGluZm86IGh0dHBzOi8vZnVzZWpzLmlvL2NvbmNlcHRzL3Njb3JpbmctdGhlb3J5Lmh0bWwjZnV6emluZXNzLXNjb3JlXG4gIGlnbm9yZUxvY2F0aW9uOiBmYWxzZSxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBjYWxjdWxhdGlvbiBmb3IgdGhlIHJlbGV2YW5jZSBzY29yZSAodXNlZCBmb3Igc29ydGluZykgd2lsbFxuICAvLyBpZ25vcmUgdGhlIGZpZWxkLWxlbmd0aCBub3JtLlxuICAvLyBNb3JlIGluZm86IGh0dHBzOi8vZnVzZWpzLmlvL2NvbmNlcHRzL3Njb3JpbmctdGhlb3J5Lmh0bWwjZmllbGQtbGVuZ3RoLW5vcm1cbiAgaWdub3JlRmllbGROb3JtOiBmYWxzZVxufTtcblxudmFyIENvbmZpZyA9IHtcbiAgLi4uQmFzaWNPcHRpb25zLFxuICAuLi5NYXRjaE9wdGlvbnMsXG4gIC4uLkZ1enp5T3B0aW9ucyxcbiAgLi4uQWR2YW5jZWRPcHRpb25zXG59O1xuXG5jb25zdCBTUEFDRSA9IC9bXiBdKy9nO1xuXG4vLyBGaWVsZC1sZW5ndGggbm9ybTogdGhlIHNob3J0ZXIgdGhlIGZpZWxkLCB0aGUgaGlnaGVyIHRoZSB3ZWlnaHQuXG4vLyBTZXQgdG8gMyBkZWNpbWFscyB0byByZWR1Y2UgaW5kZXggc2l6ZS5cbmZ1bmN0aW9uIG5vcm0obWFudGlzc2EgPSAzKSB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBtID0gTWF0aC5wb3coMTAsIG1hbnRpc3NhKTtcblxuICByZXR1cm4ge1xuICAgIGdldCh2YWx1ZSkge1xuICAgICAgY29uc3QgbnVtVG9rZW5zID0gdmFsdWUubWF0Y2goU1BBQ0UpLmxlbmd0aDtcblxuICAgICAgaWYgKGNhY2hlLmhhcyhudW1Ub2tlbnMpKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQobnVtVG9rZW5zKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBub3JtID0gMSAvIE1hdGguc3FydChudW1Ub2tlbnMpO1xuXG4gICAgICAvLyBJbiBwbGFjZSBvZiBgdG9GaXhlZChtYW50aXNzYSlgLCBmb3IgZmFzdGVyIGNvbXB1dGF0aW9uXG4gICAgICBjb25zdCBuID0gcGFyc2VGbG9hdChNYXRoLnJvdW5kKG5vcm0gKiBtKSAvIG0pO1xuXG4gICAgICBjYWNoZS5zZXQobnVtVG9rZW5zLCBuKTtcblxuICAgICAgcmV0dXJuIG5cbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRnVzZUluZGV4IHtcbiAgY29uc3RydWN0b3IoeyBnZXRGbiA9IENvbmZpZy5nZXRGbiB9ID0ge30pIHtcbiAgICB0aGlzLm5vcm0gPSBub3JtKDMpO1xuICAgIHRoaXMuZ2V0Rm4gPSBnZXRGbjtcbiAgICB0aGlzLmlzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRJbmRleFJlY29yZHMoKTtcbiAgfVxuICBzZXRTb3VyY2VzKGRvY3MgPSBbXSkge1xuICAgIHRoaXMuZG9jcyA9IGRvY3M7XG4gIH1cbiAgc2V0SW5kZXhSZWNvcmRzKHJlY29yZHMgPSBbXSkge1xuICAgIHRoaXMucmVjb3JkcyA9IHJlY29yZHM7XG4gIH1cbiAgc2V0S2V5cyhrZXlzID0gW10pIHtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgIHRoaXMuX2tleXNNYXAgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaWR4KSA9PiB7XG4gICAgICB0aGlzLl9rZXlzTWFwW2tleS5pZF0gPSBpZHg7XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlKCkge1xuICAgIGlmICh0aGlzLmlzQ3JlYXRlZCB8fCAhdGhpcy5kb2NzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pc0NyZWF0ZWQgPSB0cnVlO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxTdHJpbmc+XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuZG9jc1swXSkpIHtcbiAgICAgIHRoaXMuZG9jcy5mb3JFYWNoKChkb2MsIGRvY0luZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZFN0cmluZyhkb2MsIGRvY0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICAgIHRoaXMuZG9jcy5mb3JFYWNoKChkb2MsIGRvY0luZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZE9iamVjdChkb2MsIGRvY0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMubm9ybS5jbGVhcigpO1xuICB9XG4gIC8vIEFkZHMgYSBkb2MgdG8gdGhlIGVuZCBvZiB0aGUgaW5kZXhcbiAgYWRkKGRvYykge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuc2l6ZSgpO1xuXG4gICAgaWYgKGlzU3RyaW5nKGRvYykpIHtcbiAgICAgIHRoaXMuX2FkZFN0cmluZyhkb2MsIGlkeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZE9iamVjdChkb2MsIGlkeCk7XG4gICAgfVxuICB9XG4gIC8vIFJlbW92ZXMgdGhlIGRvYyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IG9mIHRoZSBpbmRleFxuICByZW1vdmVBdChpZHgpIHtcbiAgICB0aGlzLnJlY29yZHMuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAvLyBDaGFuZ2UgcmVmIGluZGV4IG9mIGV2ZXJ5IHN1YnNxdWVudCBkb2NcbiAgICBmb3IgKGxldCBpID0gaWR4LCBsZW4gPSB0aGlzLnNpemUoKTsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB0aGlzLnJlY29yZHNbaV0uaSAtPSAxO1xuICAgIH1cbiAgfVxuICBnZXRWYWx1ZUZvckl0ZW1BdEtleUlkKGl0ZW0sIGtleUlkKSB7XG4gICAgcmV0dXJuIGl0ZW1bdGhpcy5fa2V5c01hcFtrZXlJZF1dXG4gIH1cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRzLmxlbmd0aFxuICB9XG4gIF9hZGRTdHJpbmcoZG9jLCBkb2NJbmRleCkge1xuICAgIGlmICghaXNEZWZpbmVkKGRvYykgfHwgaXNCbGFuayhkb2MpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgcmVjb3JkID0ge1xuICAgICAgdjogZG9jLFxuICAgICAgaTogZG9jSW5kZXgsXG4gICAgICBuOiB0aGlzLm5vcm0uZ2V0KGRvYylcbiAgICB9O1xuXG4gICAgdGhpcy5yZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgfVxuICBfYWRkT2JqZWN0KGRvYywgZG9jSW5kZXgpIHtcbiAgICBsZXQgcmVjb3JkID0geyBpOiBkb2NJbmRleCwgJDoge30gfTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICB0aGlzLmtleXMuZm9yRWFjaCgoa2V5LCBrZXlJbmRleCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coa2V5KVxuICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRGbihkb2MsIGtleS5wYXRoKTtcblxuICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbGV0IHN1YlJlY29yZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbeyBuZXN0ZWRBcnJJbmRleDogLTEsIHZhbHVlIH1dO1xuXG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB7IG5lc3RlZEFyckluZGV4LCB2YWx1ZSB9ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgICAgIHY6IHZhbHVlLFxuICAgICAgICAgICAgICBpOiBuZXN0ZWRBcnJJbmRleCxcbiAgICAgICAgICAgICAgbjogdGhpcy5ub3JtLmdldCh2YWx1ZSlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHN1YlJlY29yZHMucHVzaChzdWJSZWNvcmQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGspID0+IHtcbiAgICAgICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICAgICAgbmVzdGVkQXJySW5kZXg6IGssXG4gICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVjb3JkLiRba2V5SW5kZXhdID0gc3ViUmVjb3JkcztcbiAgICAgIH0gZWxzZSBpZiAoIWlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGxldCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgdjogdmFsdWUsXG4gICAgICAgICAgbjogdGhpcy5ub3JtLmdldCh2YWx1ZSlcbiAgICAgICAgfTtcblxuICAgICAgICByZWNvcmQuJFtrZXlJbmRleF0gPSBzdWJSZWNvcmQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5czogdGhpcy5rZXlzLFxuICAgICAgcmVjb3JkczogdGhpcy5yZWNvcmRzXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4KGtleXMsIGRvY3MsIHsgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4gfSA9IHt9KSB7XG4gIGNvbnN0IG15SW5kZXggPSBuZXcgRnVzZUluZGV4KHsgZ2V0Rm4gfSk7XG4gIG15SW5kZXguc2V0S2V5cyhrZXlzLm1hcChjcmVhdGVLZXkpKTtcbiAgbXlJbmRleC5zZXRTb3VyY2VzKGRvY3MpO1xuICBteUluZGV4LmNyZWF0ZSgpO1xuICByZXR1cm4gbXlJbmRleFxufVxuXG5mdW5jdGlvbiBwYXJzZUluZGV4KGRhdGEsIHsgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4gfSA9IHt9KSB7XG4gIGNvbnN0IHsga2V5cywgcmVjb3JkcyB9ID0gZGF0YTtcbiAgY29uc3QgbXlJbmRleCA9IG5ldyBGdXNlSW5kZXgoeyBnZXRGbiB9KTtcbiAgbXlJbmRleC5zZXRLZXlzKGtleXMpO1xuICBteUluZGV4LnNldEluZGV4UmVjb3JkcyhyZWNvcmRzKTtcbiAgcmV0dXJuIG15SW5kZXhcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlKFxuICBwYXR0ZXJuLFxuICB7XG4gICAgZXJyb3JzID0gMCxcbiAgICBjdXJyZW50TG9jYXRpb24gPSAwLFxuICAgIGV4cGVjdGVkTG9jYXRpb24gPSAwLFxuICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gIH0gPSB7fVxuKSB7XG4gIGNvbnN0IGFjY3VyYWN5ID0gZXJyb3JzIC8gcGF0dGVybi5sZW5ndGg7XG5cbiAgaWYgKGlnbm9yZUxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGFjY3VyYWN5XG4gIH1cblxuICBjb25zdCBwcm94aW1pdHkgPSBNYXRoLmFicyhleHBlY3RlZExvY2F0aW9uIC0gY3VycmVudExvY2F0aW9uKTtcblxuICBpZiAoIWRpc3RhbmNlKSB7XG4gICAgLy8gRG9kZ2UgZGl2aWRlIGJ5IHplcm8gZXJyb3IuXG4gICAgcmV0dXJuIHByb3hpbWl0eSA/IDEuMCA6IGFjY3VyYWN5XG4gIH1cblxuICByZXR1cm4gYWNjdXJhY3kgKyBwcm94aW1pdHkgLyBkaXN0YW5jZVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0TWFza1RvSW5kaWNlcyhcbiAgbWF0Y2htYXNrID0gW10sXG4gIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGhcbikge1xuICBsZXQgaW5kaWNlcyA9IFtdO1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgbGV0IGVuZCA9IC0xO1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChsZXQgbGVuID0gbWF0Y2htYXNrLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2htYXNrW2ldO1xuICAgIGlmIChtYXRjaCAmJiBzdGFydCA9PT0gLTEpIHtcbiAgICAgIHN0YXJ0ID0gaTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCAmJiBzdGFydCAhPT0gLTEpIHtcbiAgICAgIGVuZCA9IGkgLSAxO1xuICAgICAgaWYgKGVuZCAtIHN0YXJ0ICsgMSA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoKFtzdGFydCwgZW5kXSk7XG4gICAgICB9XG4gICAgICBzdGFydCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8vIChpLTEgLSBzdGFydCkgKyAxID0+IGkgLSBzdGFydFxuICBpZiAobWF0Y2htYXNrW2kgLSAxXSAmJiBpIC0gc3RhcnQgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgaW5kaWNlcy5wdXNoKFtzdGFydCwgaSAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBpbmRpY2VzXG59XG5cbi8vIE1hY2hpbmUgd29yZCBzaXplXG5jb25zdCBNQVhfQklUUyA9IDMyO1xuXG5mdW5jdGlvbiBzZWFyY2goXG4gIHRleHQsXG4gIHBhdHRlcm4sXG4gIHBhdHRlcm5BbHBoYWJldCxcbiAge1xuICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICB9ID0ge31cbikge1xuICBpZiAocGF0dGVybi5sZW5ndGggPiBNQVhfQklUUykge1xuICAgIHRocm93IG5ldyBFcnJvcihQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UoTUFYX0JJVFMpKVxuICB9XG5cbiAgY29uc3QgcGF0dGVybkxlbiA9IHBhdHRlcm4ubGVuZ3RoO1xuICAvLyBTZXQgc3RhcnRpbmcgbG9jYXRpb24gYXQgYmVnaW5uaW5nIHRleHQgYW5kIGluaXRpYWxpemUgdGhlIGFscGhhYmV0LlxuICBjb25zdCB0ZXh0TGVuID0gdGV4dC5sZW5ndGg7XG4gIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVuIGxvY2F0aW9uID4gdGV4dC5sZW5ndGhcbiAgY29uc3QgZXhwZWN0ZWRMb2NhdGlvbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKGxvY2F0aW9uLCB0ZXh0TGVuKSk7XG4gIC8vIEhpZ2hlc3Qgc2NvcmUgYmV5b25kIHdoaWNoIHdlIGdpdmUgdXAuXG4gIGxldCBjdXJyZW50VGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAvLyBJcyB0aGVyZSBhIG5lYXJieSBleGFjdCBtYXRjaD8gKHNwZWVkdXApXG4gIGxldCBiZXN0TG9jYXRpb24gPSBleHBlY3RlZExvY2F0aW9uO1xuXG4gIC8vIFBlcmZvcm1hbmNlOiBvbmx5IGNvbXB1dGVyIG1hdGNoZXMgd2hlbiB0aGUgbWluTWF0Y2hDaGFyTGVuZ3RoID4gMVxuICAvLyBPUiBpZiBgaW5jbHVkZU1hdGNoZXNgIGlzIHRydWUuXG4gIGNvbnN0IGNvbXB1dGVNYXRjaGVzID0gbWluTWF0Y2hDaGFyTGVuZ3RoID4gMSB8fCBpbmNsdWRlTWF0Y2hlcztcbiAgLy8gQSBtYXNrIG9mIHRoZSBtYXRjaGVzLCB1c2VkIGZvciBidWlsZGluZyB0aGUgaW5kaWNlc1xuICBjb25zdCBtYXRjaE1hc2sgPSBjb21wdXRlTWF0Y2hlcyA/IEFycmF5KHRleHRMZW4pIDogW107XG5cbiAgbGV0IGluZGV4O1xuXG4gIC8vIEdldCBhbGwgZXhhY3QgbWF0Y2hlcywgaGVyZSBmb3Igc3BlZWQgdXBcbiAgd2hpbGUgKChpbmRleCA9IHRleHQuaW5kZXhPZihwYXR0ZXJuLCBiZXN0TG9jYXRpb24pKSA+IC0xKSB7XG4gICAgbGV0IHNjb3JlID0gY29tcHV0ZVNjb3JlKHBhdHRlcm4sIHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogaW5kZXgsXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0pO1xuXG4gICAgY3VycmVudFRocmVzaG9sZCA9IE1hdGgubWluKHNjb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcbiAgICBiZXN0TG9jYXRpb24gPSBpbmRleCArIHBhdHRlcm5MZW47XG5cbiAgICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgcGF0dGVybkxlbikge1xuICAgICAgICBtYXRjaE1hc2tbaW5kZXggKyBpXSA9IDE7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCB0aGUgYmVzdCBsb2NhdGlvblxuICBiZXN0TG9jYXRpb24gPSAtMTtcblxuICBsZXQgbGFzdEJpdEFyciA9IFtdO1xuICBsZXQgZmluYWxTY29yZSA9IDE7XG4gIGxldCBiaW5NYXggPSBwYXR0ZXJuTGVuICsgdGV4dExlbjtcblxuICBjb25zdCBtYXNrID0gMSA8PCAocGF0dGVybkxlbiAtIDEpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybkxlbjsgaSArPSAxKSB7XG4gICAgLy8gU2NhbiBmb3IgdGhlIGJlc3QgbWF0Y2g7IGVhY2ggaXRlcmF0aW9uIGFsbG93cyBmb3Igb25lIG1vcmUgZXJyb3IuXG4gICAgLy8gUnVuIGEgYmluYXJ5IHNlYXJjaCB0byBkZXRlcm1pbmUgaG93IGZhciBmcm9tIHRoZSBtYXRjaCBsb2NhdGlvbiB3ZSBjYW4gc3RyYXlcbiAgICAvLyBhdCB0aGlzIGVycm9yIGxldmVsLlxuICAgIGxldCBiaW5NaW4gPSAwO1xuICAgIGxldCBiaW5NaWQgPSBiaW5NYXg7XG5cbiAgICB3aGlsZSAoYmluTWluIDwgYmluTWlkKSB7XG4gICAgICBjb25zdCBzY29yZSA9IGNvbXB1dGVTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogaSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICBiaW5NaW4gPSBiaW5NaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5NYXggPSBiaW5NaWQ7XG4gICAgICB9XG5cbiAgICAgIGJpbk1pZCA9IE1hdGguZmxvb3IoKGJpbk1heCAtIGJpbk1pbikgLyAyICsgYmluTWluKTtcbiAgICB9XG5cbiAgICAvLyBVc2UgdGhlIHJlc3VsdCBmcm9tIHRoaXMgaXRlcmF0aW9uIGFzIHRoZSBtYXhpbXVtIGZvciB0aGUgbmV4dC5cbiAgICBiaW5NYXggPSBiaW5NaWQ7XG5cbiAgICBsZXQgc3RhcnQgPSBNYXRoLm1heCgxLCBleHBlY3RlZExvY2F0aW9uIC0gYmluTWlkICsgMSk7XG4gICAgbGV0IGZpbmlzaCA9IGZpbmRBbGxNYXRjaGVzXG4gICAgICA/IHRleHRMZW5cbiAgICAgIDogTWF0aC5taW4oZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCwgdGV4dExlbikgKyBwYXR0ZXJuTGVuO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgYml0IGFycmF5XG4gICAgbGV0IGJpdEFyciA9IEFycmF5KGZpbmlzaCArIDIpO1xuXG4gICAgYml0QXJyW2ZpbmlzaCArIDFdID0gKDEgPDwgaSkgLSAxO1xuXG4gICAgZm9yIChsZXQgaiA9IGZpbmlzaDsgaiA+PSBzdGFydDsgaiAtPSAxKSB7XG4gICAgICBsZXQgY3VycmVudExvY2F0aW9uID0gaiAtIDE7XG4gICAgICBsZXQgY2hhck1hdGNoID0gcGF0dGVybkFscGhhYmV0W3RleHQuY2hhckF0KGN1cnJlbnRMb2NhdGlvbildO1xuXG4gICAgICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICAgICAgLy8gU3BlZWQgdXA6IHF1aWNrIGJvb2wgdG8gaW50IGNvbnZlcnNpb24gKGkuZSwgYGNoYXJNYXRjaCA/IDEgOiAwYClcbiAgICAgICAgbWF0Y2hNYXNrW2N1cnJlbnRMb2NhdGlvbl0gPSArISFjaGFyTWF0Y2g7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpcnN0IHBhc3M6IGV4YWN0IG1hdGNoXG4gICAgICBiaXRBcnJbal0gPSAoKGJpdEFycltqICsgMV0gPDwgMSkgfCAxKSAmIGNoYXJNYXRjaDtcblxuICAgICAgLy8gU3Vic2VxdWVudCBwYXNzZXM6IGZ1enp5IG1hdGNoXG4gICAgICBpZiAoaSkge1xuICAgICAgICBiaXRBcnJbal0gfD1cbiAgICAgICAgICAoKGxhc3RCaXRBcnJbaiArIDFdIHwgbGFzdEJpdEFycltqXSkgPDwgMSkgfCAxIHwgbGFzdEJpdEFycltqICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChiaXRBcnJbal0gJiBtYXNrKSB7XG4gICAgICAgIGZpbmFsU2NvcmUgPSBjb21wdXRlU2NvcmUocGF0dGVybiwge1xuICAgICAgICAgIGVycm9yczogaSxcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGlzIG1hdGNoIHdpbGwgYWxtb3N0IGNlcnRhaW5seSBiZSBiZXR0ZXIgdGhhbiBhbnkgZXhpc3RpbmcgbWF0Y2guXG4gICAgICAgIC8vIEJ1dCBjaGVjayBhbnl3YXkuXG4gICAgICAgIGlmIChmaW5hbFNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAvLyBJbmRlZWQgaXQgaXNcbiAgICAgICAgICBjdXJyZW50VGhyZXNob2xkID0gZmluYWxTY29yZTtcbiAgICAgICAgICBiZXN0TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBBbHJlYWR5IHBhc3NlZCBgbG9jYCwgZG93bmhpbGwgZnJvbSBoZXJlIG9uIGluLlxuICAgICAgICAgIGlmIChiZXN0TG9jYXRpb24gPD0gZXhwZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXaGVuIHBhc3NpbmcgYGJlc3RMb2NhdGlvbmAsIGRvbid0IGV4Y2VlZCBvdXIgY3VycmVudCBkaXN0YW5jZSBmcm9tIGBleHBlY3RlZExvY2F0aW9uYC5cbiAgICAgICAgICBzdGFydCA9IE1hdGgubWF4KDEsIDIgKiBleHBlY3RlZExvY2F0aW9uIC0gYmVzdExvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIGhvcGUgZm9yIGEgKGJldHRlcikgbWF0Y2ggYXQgZ3JlYXRlciBlcnJvciBsZXZlbHMuXG4gICAgY29uc3Qgc2NvcmUgPSBjb21wdXRlU2NvcmUocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiBpICsgMSxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG5cbiAgICBpZiAoc2NvcmUgPiBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGxhc3RCaXRBcnIgPSBiaXRBcnI7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgaXNNYXRjaDogYmVzdExvY2F0aW9uID49IDAsXG4gICAgLy8gQ291bnQgZXhhY3QgbWF0Y2hlcyAodGhvc2Ugd2l0aCBhIHNjb3JlIG9mIDApIHRvIGJlIFwiYWxtb3N0XCIgZXhhY3RcbiAgICBzY29yZTogTWF0aC5tYXgoMC4wMDEsIGZpbmFsU2NvcmUpXG4gIH07XG5cbiAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgY29uc3QgaW5kaWNlcyA9IGNvbnZlcnRNYXNrVG9JbmRpY2VzKG1hdGNoTWFzaywgbWluTWF0Y2hDaGFyTGVuZ3RoKTtcbiAgICBpZiAoIWluZGljZXMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQuaXNNYXRjaCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gaW5kaWNlcztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSB7XG4gIGxldCBtYXNrID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBjaGFyID0gcGF0dGVybi5jaGFyQXQoaSk7XG4gICAgbWFza1tjaGFyXSA9IChtYXNrW2NoYXJdIHx8IDApIHwgKDEgPDwgKGxlbiAtIGkgLSAxKSk7XG4gIH1cblxuICByZXR1cm4gbWFza1xufVxuXG5jbGFzcyBCaXRhcFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICAgIH0gPSB7fVxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfTtcblxuICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG5cbiAgICB0aGlzLmNodW5rcyA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLnBhdHRlcm4ubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhZGRDaHVuayA9IChwYXR0ZXJuLCBzdGFydEluZGV4KSA9PiB7XG4gICAgICB0aGlzLmNodW5rcy5wdXNoKHtcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgYWxwaGFiZXQ6IGNyZWF0ZVBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSxcbiAgICAgICAgc3RhcnRJbmRleFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxlbiA9IHRoaXMucGF0dGVybi5sZW5ndGg7XG5cbiAgICBpZiAobGVuID4gTUFYX0JJVFMpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IHJlbWFpbmRlciA9IGxlbiAlIE1BWF9CSVRTO1xuICAgICAgY29uc3QgZW5kID0gbGVuIC0gcmVtYWluZGVyO1xuXG4gICAgICB3aGlsZSAoaSA8IGVuZCkge1xuICAgICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4uc3Vic3RyKGksIE1BWF9CSVRTKSwgaSk7XG4gICAgICAgIGkgKz0gTUFYX0JJVFM7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW1haW5kZXIpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGxlbiAtIE1BWF9CSVRTO1xuICAgICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4uc3Vic3RyKHN0YXJ0SW5kZXgpLCBzdGFydEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLCAwKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hJbih0ZXh0KSB7XG4gICAgY29uc3QgeyBpc0Nhc2VTZW5zaXRpdmUsIGluY2x1ZGVNYXRjaGVzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBFeGFjdCBtYXRjaFxuICAgIGlmICh0aGlzLnBhdHRlcm4gPT09IHRleHQpIHtcbiAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgIHNjb3JlOiAwXG4gICAgICB9O1xuXG4gICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgcmVzdWx0LmluZGljZXMgPSBbWzAsIHRleHQubGVuZ3RoIC0gMV1dO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCB1c2UgQml0YXAgYWxnb3JpdGhtXG4gICAgY29uc3Qge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IGFsbEluZGljZXMgPSBbXTtcbiAgICBsZXQgdG90YWxTY29yZSA9IDA7XG4gICAgbGV0IGhhc01hdGNoZXMgPSBmYWxzZTtcblxuICAgIHRoaXMuY2h1bmtzLmZvckVhY2goKHsgcGF0dGVybiwgYWxwaGFiZXQsIHN0YXJ0SW5kZXggfSkgPT4ge1xuICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoKHRleHQsIHBhdHRlcm4sIGFscGhhYmV0LCB7XG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbiArIHN0YXJ0SW5kZXgsXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIGhhc01hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0b3RhbFNjb3JlICs9IHNjb3JlO1xuXG4gICAgICBpZiAoaXNNYXRjaCAmJiBpbmRpY2VzKSB7XG4gICAgICAgIGFsbEluZGljZXMgPSBbLi4uYWxsSW5kaWNlcywgLi4uaW5kaWNlc107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgaXNNYXRjaDogaGFzTWF0Y2hlcyxcbiAgICAgIHNjb3JlOiBoYXNNYXRjaGVzID8gdG90YWxTY29yZSAvIHRoaXMuY2h1bmtzLmxlbmd0aCA6IDFcbiAgICB9O1xuXG4gICAgaWYgKGhhc01hdGNoZXMgJiYgaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gYWxsSW5kaWNlcztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuY2xhc3MgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gIH1cbiAgc3RhdGljIGlzTXVsdGlNYXRjaChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGdldE1hdGNoKHBhdHRlcm4sIHRoaXMubXVsdGlSZWdleClcbiAgfVxuICBzdGF0aWMgaXNTaW5nbGVNYXRjaChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGdldE1hdGNoKHBhdHRlcm4sIHRoaXMuc2luZ2xlUmVnZXgpXG4gIH1cbiAgc2VhcmNoKC8qdGV4dCovKSB7fVxufVxuXG5mdW5jdGlvbiBnZXRNYXRjaChwYXR0ZXJuLCBleHApIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdHRlcm4ubWF0Y2goZXhwKTtcbiAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogbnVsbFxufVxuXG4vLyBUb2tlbjogJ2ZpbGVcblxuY2xhc3MgRXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdleGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9ePVwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXj0oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0ID09PSB0aGlzLnBhdHRlcm47XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGhpcy5wYXR0ZXJuLmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhZmlyZVxuXG5jbGFzcyBJbnZlcnNlRXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eISguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0ZXh0LmluZGV4T2YodGhpcy5wYXR0ZXJuKTtcbiAgICBjb25zdCBpc01hdGNoID0gaW5kZXggPT09IC0xO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46IF5maWxlXG5cbmNsYXNzIFByZWZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncHJlZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cXF5cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL15cXF4oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LnN0YXJ0c1dpdGgodGhpcy5wYXR0ZXJuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0aGlzLnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46ICFeZmlyZVxuXG5jbGFzcyBJbnZlcnNlUHJlZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLXByZWZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVxcXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcXF4oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5zdGFydHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogLmZpbGUkXG5cbmNsYXNzIFN1ZmZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnc3VmZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cIiguKilcIlxcJCQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14oLiopXFwkJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LmVuZHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbdGV4dC5sZW5ndGggLSB0aGlzLnBhdHRlcm4ubGVuZ3RoLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhLmZpbGUkXG5cbmNsYXNzIEludmVyc2VTdWZmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ludmVyc2Utc3VmZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXCIoLiopXCJcXCQkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eISguKilcXCQkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LmVuZHNXaXRoKHRoaXMucGF0dGVybik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRnV6enlNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICAgIH0gPSB7fVxuICApIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgICB0aGlzLl9iaXRhcFNlYXJjaCA9IG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZnV6enknXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdGFwU2VhcmNoLnNlYXJjaEluKHRleHQpXG4gIH1cbn1cblxuLy8gVG9rZW46ICdmaWxlXG5cbmNsYXNzIEluY2x1ZGVNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbmNsdWRlJ1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14nXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eJyguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgbGV0IGxvY2F0aW9uID0gMDtcbiAgICBsZXQgaW5kZXg7XG5cbiAgICBjb25zdCBpbmRpY2VzID0gW107XG4gICAgY29uc3QgcGF0dGVybkxlbiA9IHRoaXMucGF0dGVybi5sZW5ndGg7XG5cbiAgICAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXNcbiAgICB3aGlsZSAoKGluZGV4ID0gdGV4dC5pbmRleE9mKHRoaXMucGF0dGVybiwgbG9jYXRpb24pKSA+IC0xKSB7XG4gICAgICBsb2NhdGlvbiA9IGluZGV4ICsgcGF0dGVybkxlbjtcbiAgICAgIGluZGljZXMucHVzaChbaW5kZXgsIGxvY2F0aW9uIC0gMV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTWF0Y2ggPSAhIWluZGljZXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlc1xuICAgIH1cbiAgfVxufVxuXG4vLyDinZdPcmRlciBpcyBpbXBvcnRhbnQuIERPIE5PVCBDSEFOR0UuXG5jb25zdCBzZWFyY2hlcnMgPSBbXG4gIEV4YWN0TWF0Y2gsXG4gIEluY2x1ZGVNYXRjaCxcbiAgUHJlZml4RXhhY3RNYXRjaCxcbiAgSW52ZXJzZVByZWZpeEV4YWN0TWF0Y2gsXG4gIEludmVyc2VTdWZmaXhFeGFjdE1hdGNoLFxuICBTdWZmaXhFeGFjdE1hdGNoLFxuICBJbnZlcnNlRXhhY3RNYXRjaCxcbiAgRnV6enlNYXRjaFxuXTtcblxuY29uc3Qgc2VhcmNoZXJzTGVuID0gc2VhcmNoZXJzLmxlbmd0aDtcblxuLy8gUmVnZXggdG8gc3BsaXQgYnkgc3BhY2VzLCBidXQga2VlcCBhbnl0aGluZyBpbiBxdW90ZXMgdG9nZXRoZXJcbmNvbnN0IFNQQUNFX1JFID0gLyArKD89KFteXFxcIl0qXFxcIlteXFxcIl0qXFxcIikqW15cXFwiXSokKS87XG5jb25zdCBPUl9UT0tFTiA9ICd8JztcblxuLy8gUmV0dXJuIGEgMkQgYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHF1ZXJ5LCBmb3Igc2ltcGxlciBwYXJzaW5nLlxuLy8gRXhhbXBsZTpcbi8vIFwiXmNvcmUgZ28kIHwgcmIkIHwgcHkkIHh5JFwiID0+IFtbXCJeY29yZVwiLCBcImdvJFwiXSwgW1wicmIkXCJdLCBbXCJweSRcIiwgXCJ4eSRcIl1dXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5KHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gcGF0dGVybi5zcGxpdChPUl9UT0tFTikubWFwKChpdGVtKSA9PiB7XG4gICAgbGV0IHF1ZXJ5ID0gaXRlbVxuICAgICAgLnRyaW0oKVxuICAgICAgLnNwbGl0KFNQQUNFX1JFKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAmJiAhIWl0ZW0udHJpbSgpKTtcblxuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBxdWVyeUl0ZW0gPSBxdWVyeVtpXTtcblxuICAgICAgLy8gMS4gSGFuZGxlIG11bHRpcGxlIHF1ZXJ5IG1hdGNoIChpLmUsIG9uY2UgdGhhdCBhcmUgcXVvdGVkLCBsaWtlIGBcImhlbGxvIHdvcmxkXCJgKVxuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICB3aGlsZSAoIWZvdW5kICYmICsraWR4IDwgc2VhcmNoZXJzTGVuKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2lkeF07XG4gICAgICAgIGxldCB0b2tlbiA9IHNlYXJjaGVyLmlzTXVsdGlNYXRjaChxdWVyeUl0ZW0pO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3IHNlYXJjaGVyKHRva2VuLCBvcHRpb25zKSk7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBIYW5kbGUgc2luZ2xlIHF1ZXJ5IG1hdGNoZXMgKGkuZSwgb25jZSB0aGF0IGFyZSAqbm90KiBxdW90ZWQpXG4gICAgICBpZHggPSAtMTtcbiAgICAgIHdoaWxlICgrK2lkeCA8IHNlYXJjaGVyc0xlbikge1xuICAgICAgICBjb25zdCBzZWFyY2hlciA9IHNlYXJjaGVyc1tpZHhdO1xuICAgICAgICBsZXQgdG9rZW4gPSBzZWFyY2hlci5pc1NpbmdsZU1hdGNoKHF1ZXJ5SXRlbSk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgc2VhcmNoZXIodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfSlcbn1cblxuLy8gVGhlc2UgZXh0ZW5kZWQgbWF0Y2hlcnMgY2FuIHJldHVybiBhbiBhcnJheSBvZiBtYXRjaGVzLCBhcyBvcHBvc2VkXG4vLyB0byBhIHNpbmdsIG1hdGNoXG5jb25zdCBNdWx0aU1hdGNoU2V0ID0gbmV3IFNldChbRnV6enlNYXRjaC50eXBlLCBJbmNsdWRlTWF0Y2gudHlwZV0pO1xuXG4vKipcbiAqIENvbW1hbmQtbGlrZSBzZWFyY2hpbmdcbiAqID09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBHaXZlbiBtdWx0aXBsZSBzZWFyY2ggdGVybXMgZGVsaW1pdGVkIGJ5IHNwYWNlcy5lLmcuIGBeanNjcmlwdCAucHl0aG9uJCBydWJ5ICFqYXZhYCxcbiAqIHNlYXJjaCBpbiBhIGdpdmVuIHRleHQuXG4gKlxuICogU2VhcmNoIHN5bnRheDpcbiAqXG4gKiB8IFRva2VuICAgICAgIHwgTWF0Y2ggdHlwZSAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBqc2NyaXB0YCAgIHwgZnV6enktbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGZ1enp5IG1hdGNoIGBqc2NyaXB0YCAgICAgICB8XG4gKiB8IGA9c2NoZW1lYCAgIHwgZXhhY3QtbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGFyZSBgc2NoZW1lYCAgICAgICAgICAgICAgICB8XG4gKiB8IGAncHl0aG9uYCAgIHwgaW5jbHVkZS1tYXRjaCAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGluY2x1ZGUgYHB5dGhvbmAgICAgICAgICAgICB8XG4gKiB8IGAhcnVieWAgICAgIHwgaW52ZXJzZS1leGFjdC1tYXRjaCAgICAgICAgfCBJdGVtcyB0aGF0IGRvIG5vdCBpbmNsdWRlIGBydWJ5YCAgICAgICB8XG4gKiB8IGBeamF2YWAgICAgIHwgcHJlZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IHN0YXJ0IHdpdGggYGphdmFgICAgICAgICAgICB8XG4gKiB8IGAhXmVhcmxhbmdgIHwgaW52ZXJzZS1wcmVmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBzdGFydCB3aXRoIGBlYXJsYW5nYCB8XG4gKiB8IGAuanMkYCAgICAgIHwgc3VmZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IGVuZCB3aXRoIGAuanNgICAgICAgICAgICAgICB8XG4gKiB8IGAhLmdvJGAgICAgIHwgaW52ZXJzZS1zdWZmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBlbmQgd2l0aCBgLmdvYCAgICAgICB8XG4gKlxuICogQSBzaW5nbGUgcGlwZSBjaGFyYWN0ZXIgYWN0cyBhcyBhbiBPUiBvcGVyYXRvci4gRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmdcbiAqIHF1ZXJ5IG1hdGNoZXMgZW50cmllcyB0aGF0IHN0YXJ0IHdpdGggYGNvcmVgIGFuZCBlbmQgd2l0aCBlaXRoZXJgZ29gLCBgcmJgLFxuICogb3JgcHlgLlxuICpcbiAqIGBgYFxuICogXmNvcmUgZ28kIHwgcmIkIHwgcHkkXG4gKiBgYGBcbiAqL1xuY2xhc3MgRXh0ZW5kZWRTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvbixcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2VcbiAgICB9ID0ge31cbiAgKSB7XG4gICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIGlnbm9yZUxvY2F0aW9uLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZVxuICAgIH07XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucXVlcnkgPSBwYXJzZVF1ZXJ5KHRoaXMucGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25kaXRpb24oXywgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLnVzZUV4dGVuZGVkU2VhcmNoXG4gIH1cblxuICBzZWFyY2hJbih0ZXh0KSB7XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuXG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICAgIHNjb3JlOiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBpbmNsdWRlTWF0Y2hlcywgaXNDYXNlU2Vuc2l0aXZlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICB0ZXh0ID0gaXNDYXNlU2Vuc2l0aXZlID8gdGV4dCA6IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBudW1NYXRjaGVzID0gMDtcbiAgICBsZXQgYWxsSW5kaWNlcyA9IFtdO1xuICAgIGxldCB0b3RhbFNjb3JlID0gMDtcblxuICAgIC8vIE9Sc1xuICAgIGZvciAobGV0IGkgPSAwLCBxTGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgcUxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzZWFyY2hlcnMgPSBxdWVyeVtpXTtcblxuICAgICAgLy8gUmVzZXQgaW5kaWNlc1xuICAgICAgYWxsSW5kaWNlcy5sZW5ndGggPSAwO1xuICAgICAgbnVtTWF0Y2hlcyA9IDA7XG5cbiAgICAgIC8vIEFORHNcbiAgICAgIGZvciAobGV0IGogPSAwLCBwTGVuID0gc2VhcmNoZXJzLmxlbmd0aDsgaiA8IHBMZW47IGogKz0gMSkge1xuICAgICAgICBjb25zdCBzZWFyY2hlciA9IHNlYXJjaGVyc1tqXTtcbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBpbmRpY2VzLCBzY29yZSB9ID0gc2VhcmNoZXIuc2VhcmNoKHRleHQpO1xuXG4gICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgbnVtTWF0Y2hlcyArPSAxO1xuICAgICAgICAgIHRvdGFsU2NvcmUgKz0gc2NvcmU7XG4gICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gc2VhcmNoZXIuY29uc3RydWN0b3IudHlwZTtcbiAgICAgICAgICAgIGlmIChNdWx0aU1hdGNoU2V0Lmhhcyh0eXBlKSkge1xuICAgICAgICAgICAgICBhbGxJbmRpY2VzID0gWy4uLmFsbEluZGljZXMsIC4uLmluZGljZXNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWxsSW5kaWNlcy5wdXNoKGluZGljZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3RhbFNjb3JlID0gMDtcbiAgICAgICAgICBudW1NYXRjaGVzID0gMDtcbiAgICAgICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPUiBjb25kaXRpb24sIHNvIGlmIFRSVUUsIHJldHVyblxuICAgICAgaWYgKG51bU1hdGNoZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICAgIHNjb3JlOiB0b3RhbFNjb3JlIC8gbnVtTWF0Y2hlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgIHJlc3VsdC5pbmRpY2VzID0gYWxsSW5kaWNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RoaW5nIHdhcyBtYXRjaGVkXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgc2NvcmU6IDFcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVnaXN0ZXJlZFNlYXJjaGVycyA9IFtdO1xuXG5mdW5jdGlvbiByZWdpc3RlciguLi5hcmdzKSB7XG4gIHJlZ2lzdGVyZWRTZWFyY2hlcnMucHVzaCguLi5hcmdzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoZXIocGF0dGVybiwgb3B0aW9ucykge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVnaXN0ZXJlZFNlYXJjaGVycy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBzZWFyY2hlckNsYXNzID0gcmVnaXN0ZXJlZFNlYXJjaGVyc1tpXTtcbiAgICBpZiAoc2VhcmNoZXJDbGFzcy5jb25kaXRpb24ocGF0dGVybiwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBuZXcgc2VhcmNoZXJDbGFzcyhwYXR0ZXJuLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwgb3B0aW9ucylcbn1cblxuY29uc3QgTG9naWNhbE9wZXJhdG9yID0ge1xuICBBTkQ6ICckYW5kJyxcbiAgT1I6ICckb3InXG59O1xuXG5jb25zdCBLZXlUeXBlID0ge1xuICBQQVRIOiAnJHBhdGgnLFxuICBQQVRURVJOOiAnJHZhbCdcbn07XG5cbmNvbnN0IGlzRXhwcmVzc2lvbiA9IChxdWVyeSkgPT5cbiAgISEocXVlcnlbTG9naWNhbE9wZXJhdG9yLkFORF0gfHwgcXVlcnlbTG9naWNhbE9wZXJhdG9yLk9SXSk7XG5cbmNvbnN0IGlzUGF0aCA9IChxdWVyeSkgPT4gISFxdWVyeVtLZXlUeXBlLlBBVEhdO1xuXG5jb25zdCBpc0xlYWYgPSAocXVlcnkpID0+XG4gICFpc0FycmF5KHF1ZXJ5KSAmJiBpc09iamVjdChxdWVyeSkgJiYgIWlzRXhwcmVzc2lvbihxdWVyeSk7XG5cbmNvbnN0IGNvbnZlcnRUb0V4cGxpY2l0ID0gKHF1ZXJ5KSA9PiAoe1xuICBbTG9naWNhbE9wZXJhdG9yLkFORF06IE9iamVjdC5rZXlzKHF1ZXJ5KS5tYXAoKGtleSkgPT4gKHtcbiAgICBba2V5XTogcXVlcnlba2V5XVxuICB9KSlcbn0pO1xuXG4vLyBXaGVuIGBhdXRvYCBpcyBgdHJ1ZWAsIHRoZSBwYXJzZSBmdW5jdGlvbiB3aWxsIGluZmVyIGFuZCBpbml0aWFsaXplIGFuZCBhZGRcbi8vIHRoZSBhcHByb3ByaWF0ZSBgU2VhcmNoZXJgIGluc3RhbmNlXG5mdW5jdGlvbiBwYXJzZShxdWVyeSwgb3B0aW9ucywgeyBhdXRvID0gdHJ1ZSB9ID0ge30pIHtcbiAgY29uc3QgbmV4dCA9IChxdWVyeSkgPT4ge1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuXG4gICAgY29uc3QgaXNRdWVyeVBhdGggPSBpc1BhdGgocXVlcnkpO1xuXG4gICAgaWYgKCFpc1F1ZXJ5UGF0aCAmJiBrZXlzLmxlbmd0aCA+IDEgJiYgIWlzRXhwcmVzc2lvbihxdWVyeSkpIHtcbiAgICAgIHJldHVybiBuZXh0KGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KSlcbiAgICB9XG5cbiAgICBpZiAoaXNMZWFmKHF1ZXJ5KSkge1xuICAgICAgY29uc3Qga2V5ID0gaXNRdWVyeVBhdGggPyBxdWVyeVtLZXlUeXBlLlBBVEhdIDoga2V5c1swXTtcblxuICAgICAgY29uc3QgcGF0dGVybiA9IGlzUXVlcnlQYXRoID8gcXVlcnlbS2V5VHlwZS5QQVRURVJOXSA6IHF1ZXJ5W2tleV07XG5cbiAgICAgIGlmICghaXNTdHJpbmcocGF0dGVybikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKExPR0lDQUxfU0VBUkNIX0lOVkFMSURfUVVFUllfRk9SX0tFWShrZXkpKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGtleUlkOiBjcmVhdGVLZXlJZChrZXkpLFxuICAgICAgICBwYXR0ZXJuXG4gICAgICB9O1xuXG4gICAgICBpZiAoYXV0bykge1xuICAgICAgICBvYmouc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIGxldCBub2RlID0ge1xuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgb3BlcmF0b3I6IGtleXNbMF1cbiAgICB9O1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlba2V5XTtcblxuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2gobmV4dChpdGVtKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVcbiAgfTtcblxuICBpZiAoIWlzRXhwcmVzc2lvbihxdWVyeSkpIHtcbiAgICBxdWVyeSA9IGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KTtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHF1ZXJ5KVxufVxuXG4vLyBQcmFjdGljYWwgc2NvcmluZyBmdW5jdGlvblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlJDEoXG4gIHJlc3VsdHMsXG4gIHsgaWdub3JlRmllbGROb3JtID0gQ29uZmlnLmlnbm9yZUZpZWxkTm9ybSB9XG4pIHtcbiAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICBsZXQgdG90YWxTY29yZSA9IDE7XG5cbiAgICByZXN1bHQubWF0Y2hlcy5mb3JFYWNoKCh7IGtleSwgbm9ybSwgc2NvcmUgfSkgPT4ge1xuICAgICAgY29uc3Qgd2VpZ2h0ID0ga2V5ID8ga2V5LndlaWdodCA6IG51bGw7XG5cbiAgICAgIHRvdGFsU2NvcmUgKj0gTWF0aC5wb3coXG4gICAgICAgIHNjb3JlID09PSAwICYmIHdlaWdodCA/IE51bWJlci5FUFNJTE9OIDogc2NvcmUsXG4gICAgICAgICh3ZWlnaHQgfHwgMSkgKiAoaWdub3JlRmllbGROb3JtID8gMSA6IG5vcm0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0LnNjb3JlID0gdG90YWxTY29yZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdGNoZXMocmVzdWx0LCBkYXRhKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlcztcbiAgZGF0YS5tYXRjaGVzID0gW107XG5cbiAgaWYgKCFpc0RlZmluZWQobWF0Y2hlcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1hdGNoZXMuZm9yRWFjaCgobWF0Y2gpID0+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChtYXRjaC5pbmRpY2VzKSB8fCAhbWF0Y2guaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgaW5kaWNlcywgdmFsdWUgfSA9IG1hdGNoO1xuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGluZGljZXMsXG4gICAgICB2YWx1ZVxuICAgIH07XG5cbiAgICBpZiAobWF0Y2gua2V5KSB7XG4gICAgICBvYmoua2V5ID0gbWF0Y2gua2V5LnNyYztcbiAgICB9XG5cbiAgICBpZiAobWF0Y2guaWR4ID4gLTEpIHtcbiAgICAgIG9iai5yZWZJbmRleCA9IG1hdGNoLmlkeDtcbiAgICB9XG5cbiAgICBkYXRhLm1hdGNoZXMucHVzaChvYmopO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU2NvcmUocmVzdWx0LCBkYXRhKSB7XG4gIGRhdGEuc2NvcmUgPSByZXN1bHQuc2NvcmU7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChcbiAgcmVzdWx0cyxcbiAgZG9jcyxcbiAge1xuICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgIGluY2x1ZGVTY29yZSA9IENvbmZpZy5pbmNsdWRlU2NvcmVcbiAgfSA9IHt9XG4pIHtcbiAgY29uc3QgdHJhbnNmb3JtZXJzID0gW107XG5cbiAgaWYgKGluY2x1ZGVNYXRjaGVzKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1NYXRjaGVzKTtcbiAgaWYgKGluY2x1ZGVTY29yZSkgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtU2NvcmUpO1xuXG4gIHJldHVybiByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBpZHggfSA9IHJlc3VsdDtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpdGVtOiBkb2NzW2lkeF0sXG4gICAgICByZWZJbmRleDogaWR4XG4gICAgfTtcblxuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICB0cmFuc2Zvcm1lcnMuZm9yRWFjaCgodHJhbnNmb3JtZXIpID0+IHtcbiAgICAgICAgdHJhbnNmb3JtZXIocmVzdWx0LCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG4gIH0pXG59XG5cbmNsYXNzIEZ1c2Uge1xuICBjb25zdHJ1Y3Rvcihkb2NzLCBvcHRpb25zID0ge30sIGluZGV4KSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5Db25maWcsIC4uLm9wdGlvbnMgfTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy51c2VFeHRlbmRlZFNlYXJjaCAmJlxuICAgICAgIXRydWVcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFWFRFTkRFRF9TRUFSQ0hfVU5BVkFJTEFCTEUpXG4gICAgfVxuXG4gICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUodGhpcy5vcHRpb25zLmtleXMpO1xuXG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGRvY3MsIGluZGV4KTtcbiAgfVxuXG4gIHNldENvbGxlY3Rpb24oZG9jcywgaW5kZXgpIHtcbiAgICB0aGlzLl9kb2NzID0gZG9jcztcblxuICAgIGlmIChpbmRleCAmJiAhKGluZGV4IGluc3RhbmNlb2YgRnVzZUluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKElOQ09SUkVDVF9JTkRFWF9UWVBFKVxuICAgIH1cblxuICAgIHRoaXMuX215SW5kZXggPVxuICAgICAgaW5kZXggfHxcbiAgICAgIGNyZWF0ZUluZGV4KHRoaXMub3B0aW9ucy5rZXlzLCB0aGlzLl9kb2NzLCB7XG4gICAgICAgIGdldEZuOiB0aGlzLm9wdGlvbnMuZ2V0Rm5cbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkKGRvYykge1xuICAgIGlmICghaXNEZWZpbmVkKGRvYykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2RvY3MucHVzaChkb2MpO1xuICAgIHRoaXMuX215SW5kZXguYWRkKGRvYyk7XG4gIH1cblxuICByZW1vdmUocHJlZGljYXRlID0gKC8qIGRvYywgaWR4ICovKSA9PiBmYWxzZSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9kb2NzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBkb2MgPSB0aGlzLl9kb2NzW2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShkb2MsIGkpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXQoaSk7XG4gICAgICAgIGkgLT0gMTtcbiAgICAgICAgbGVuIC09IDE7XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIHJlbW92ZUF0KGlkeCkge1xuICAgIHRoaXMuX2RvY3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgdGhpcy5fbXlJbmRleC5yZW1vdmVBdChpZHgpO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX215SW5kZXhcbiAgfVxuXG4gIHNlYXJjaChxdWVyeSwgeyBsaW1pdCA9IC0xIH0gPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgaW5jbHVkZVNjb3JlLFxuICAgICAgc2hvdWxkU29ydCxcbiAgICAgIHNvcnRGbixcbiAgICAgIGlnbm9yZUZpZWxkTm9ybVxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgcmVzdWx0cyA9IGlzU3RyaW5nKHF1ZXJ5KVxuICAgICAgPyBpc1N0cmluZyh0aGlzLl9kb2NzWzBdKVxuICAgICAgICA/IHRoaXMuX3NlYXJjaFN0cmluZ0xpc3QocXVlcnkpXG4gICAgICAgIDogdGhpcy5fc2VhcmNoT2JqZWN0TGlzdChxdWVyeSlcbiAgICAgIDogdGhpcy5fc2VhcmNoTG9naWNhbChxdWVyeSk7XG5cbiAgICBjb21wdXRlU2NvcmUkMShyZXN1bHRzLCB7IGlnbm9yZUZpZWxkTm9ybSB9KTtcblxuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICByZXN1bHRzLnNvcnQoc29ydEZuKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIobGltaXQpICYmIGxpbWl0ID4gLTEpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIGxpbWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0KHJlc3VsdHMsIHRoaXMuX2RvY3MsIHtcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgaW5jbHVkZVNjb3JlXG4gICAgfSlcbiAgfVxuXG4gIF9zZWFyY2hTdHJpbmdMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IHN0cmluZyBpbiB0aGUgaW5kZXhcbiAgICByZWNvcmRzLmZvckVhY2goKHsgdjogdGV4dCwgaTogaWR4LCBuOiBub3JtIH0pID0+IHtcbiAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiB0ZXh0LFxuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBtYXRjaGVzOiBbeyBzY29yZSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgX3NlYXJjaExvZ2ljYWwocXVlcnkpIHtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZShxdWVyeSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKG5vZGUsIGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKCFub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHsga2V5SWQsIHNlYXJjaGVyIH0gPSBub2RlO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAga2V5OiB0aGlzLl9rZXlTdG9yZS5nZXQoa2V5SWQpLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLl9teUluZGV4LmdldFZhbHVlRm9ySXRlbUF0S2V5SWQoaXRlbSwga2V5SWQpLFxuICAgICAgICAgIHNlYXJjaGVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICBtYXRjaGVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIC8qZXNsaW50IGluZGVudDogWzIsIDIsIHtcIlN3aXRjaENhc2VcIjogMX1dKi9cbiAgICAgIHN3aXRjaCAobm9kZS5vcGVyYXRvcikge1xuICAgICAgICBjYXNlIExvZ2ljYWxPcGVyYXRvci5BTkQ6IHtcbiAgICAgICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZXZhbHVhdGUoY2hpbGQsIGl0ZW0sIGlkeCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXMucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfVxuICAgICAgICBjYXNlIExvZ2ljYWxPcGVyYXRvci5PUjoge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5vZGUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBldmFsdWF0ZShjaGlsZCwgaXRlbSwgaWR4KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJlcy5wdXNoKC4uLnJlc3VsdCk7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fbXlJbmRleC5yZWNvcmRzO1xuICAgIGNvbnN0IHJlc3VsdE1hcCA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIHJlY29yZHMuZm9yRWFjaCgoeyAkOiBpdGVtLCBpOiBpZHggfSkgPT4ge1xuICAgICAgaWYgKGlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICBsZXQgZXhwUmVzdWx0cyA9IGV2YWx1YXRlKGV4cHJlc3Npb24sIGl0ZW0sIGlkeCk7XG5cbiAgICAgICAgaWYgKGV4cFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gRGVkdXBlIHdoZW4gYWRkaW5nXG4gICAgICAgICAgaWYgKCFyZXN1bHRNYXBbaWR4XSkge1xuICAgICAgICAgICAgcmVzdWx0TWFwW2lkeF0gPSB7IGlkeCwgaXRlbSwgbWF0Y2hlczogW10gfTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHRNYXBbaWR4XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4cFJlc3VsdHMuZm9yRWFjaCgoeyBtYXRjaGVzIH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdE1hcFtpZHhdLm1hdGNoZXMucHVzaCguLi5tYXRjaGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IGtleXMsIHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7ICQ6IGl0ZW0sIGk6IGlkeCB9KSA9PiB7XG4gICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgICAga2V5cy5mb3JFYWNoKChrZXksIGtleUluZGV4KSA9PiB7XG4gICAgICAgIG1hdGNoZXMucHVzaChcbiAgICAgICAgICAuLi50aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogaXRlbVtrZXlJbmRleF0sXG4gICAgICAgICAgICBzZWFyY2hlclxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgbWF0Y2hlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgX2ZpbmRNYXRjaGVzKHsga2V5LCB2YWx1ZSwgc2VhcmNoZXIgfSkge1xuICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoeyB2OiB0ZXh0LCBpOiBpZHgsIG46IG5vcm0gfSkgPT4ge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgc2NvcmUsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgIG5vcm0sXG4gICAgICAgICAgICBpbmRpY2VzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHY6IHRleHQsIG46IG5vcm0gfSA9IHZhbHVlO1xuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNcbiAgfVxufVxuXG5GdXNlLnZlcnNpb24gPSAnNi40LjYnO1xuRnVzZS5jcmVhdGVJbmRleCA9IGNyZWF0ZUluZGV4O1xuRnVzZS5wYXJzZUluZGV4ID0gcGFyc2VJbmRleDtcbkZ1c2UuY29uZmlnID0gQ29uZmlnO1xuXG57XG4gIEZ1c2UucGFyc2VRdWVyeSA9IHBhcnNlO1xufVxuXG57XG4gIHJlZ2lzdGVyKEV4dGVuZGVkU2VhcmNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVzZTtcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBvYmplY3QgdHlwZSBvZiB0aGUgZ2l2ZW4gcGF5bG9hZFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGdldFR5cGUocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwYXlsb2FkKS5zbGljZSg4LCAtMSk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyB1bmRlZmluZWRcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHVuZGVmaW5lZH1cclxuICovXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnVW5kZWZpbmVkJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIG51bGxcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIG51bGx9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc051bGwocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdOdWxsJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3QgKGV4Y2x1ZGluZyBzcGVjaWFsIGNsYXNzZXMgb3Igb2JqZWN0cyB3aXRoIG90aGVyIHByb3RvdHlwZXMpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBQbGFpbk9iamVjdH1cclxuICovXHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QocGF5bG9hZCkge1xyXG4gICAgaWYgKGdldFR5cGUocGF5bG9hZCkgIT09ICdPYmplY3QnKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBwYXlsb2FkLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHBheWxvYWQpID09PSBPYmplY3QucHJvdG90eXBlO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdCAoZXhjbHVkaW5nIHNwZWNpYWwgY2xhc3NlcyBvciBvYmplY3RzIHdpdGggb3RoZXIgcHJvdG90eXBlcylcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIFBsYWluT2JqZWN0fVxyXG4gKi9cclxuZnVuY3Rpb24gaXNPYmplY3QocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QocGF5bG9hZCk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIGFuIGVtcHR5IG9iamVjdCAoZXhjbHVkaW5nIHNwZWNpYWwgY2xhc3NlcyBvciBvYmplY3RzIHdpdGggb3RoZXIgcHJvdG90eXBlcylcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHsgW0sgaW4gYW55XTogbmV2ZXIgfX1cclxuICovXHJcbmZ1bmN0aW9uIGlzRW1wdHlPYmplY3QocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QocGF5bG9hZCkgJiYgT2JqZWN0LmtleXMocGF5bG9hZCkubGVuZ3RoID09PSAwO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBhbiBlbXB0eSBvYmplY3QgKGV4Y2x1ZGluZyBzcGVjaWFsIGNsYXNzZXMgb3Igb2JqZWN0cyB3aXRoIG90aGVyIHByb3RvdHlwZXMpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBQbGFpbk9iamVjdH1cclxuICovXHJcbmZ1bmN0aW9uIGlzRnVsbE9iamVjdChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gaXNQbGFpbk9iamVjdChwYXlsb2FkKSAmJiBPYmplY3Qua2V5cyhwYXlsb2FkKS5sZW5ndGggPiAwO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gYW55IGtpbmQgb2Ygb2JqZWN0IChpbmNsdWRpbmcgc3BlY2lhbCBjbGFzc2VzIG9yIG9iamVjdHMgd2l0aCBkaWZmZXJlbnQgcHJvdG90eXBlcylcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIFBsYWluT2JqZWN0fVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBbnlPYmplY3QocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdPYmplY3QnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gb2JqZWN0IGxpa2UgYSB0eXBlIHBhc3NlZCBpbiA8ID5cclxuICpcclxuICogVXNhZ2U6IGlzT2JqZWN0TGlrZTx7aWQ6IGFueX0+KHBheWxvYWQpIC8vIHdpbGwgbWFrZSBzdXJlIGl0J3MgYW4gb2JqZWN0IGFuZCBoYXMgYW4gYGlkYCBwcm9wLlxyXG4gKlxyXG4gKiBAdGVtcGxhdGUgVCB0aGlzIG11c3QgYmUgcGFzc2VkIGluIDwgPlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgVH1cclxuICovXHJcbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gaXNBbnlPYmplY3QocGF5bG9hZCk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIGZ1bmN0aW9uIChyZWd1bGFyIG9yIGFzeW5jKVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgQW55RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGFycmF5XHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIGFueVtdfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ0FycmF5JztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCAxIGl0ZW1cclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIGFueVtdfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGdWxsQXJyYXkocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGlzQXJyYXkocGF5bG9hZCkgJiYgcGF5bG9hZC5sZW5ndGggPiAwO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBhbiBlbXB0eSBhcnJheVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgW119XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0VtcHR5QXJyYXkocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGlzQXJyYXkocGF5bG9hZCkgJiYgcGF5bG9hZC5sZW5ndGggPT09IDA7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIHN0cmluZ1xyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgc3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNTdHJpbmcocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdTdHJpbmcnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBzdHJpbmcsIEJVVCByZXR1cm5zIGZhbHNlIGZvciAnJ1xyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgc3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGdWxsU3RyaW5nKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhwYXlsb2FkKSAmJiBwYXlsb2FkICE9PSAnJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzICcnXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0VtcHR5U3RyaW5nKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBwYXlsb2FkID09PSAnJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgbnVtYmVyIChidXQgbm90IE5hTilcclxuICpcclxuICogVGhpcyB3aWxsIHJldHVybiBgZmFsc2VgIGZvciBgTmFOYCEhXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc051bWJlcihwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ051bWJlcicgJiYgIWlzTmFOKHBheWxvYWQpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBib29sZWFuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNCb29sZWFuKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnQm9vbGVhbic7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiAoUmVnRXhwKVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgUmVnRXhwfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNSZWdFeHAocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdSZWdFeHAnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBNYXBcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIE1hcDxhbnksIGFueT59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc01hcChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ01hcCc7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIFdlYWtNYXBcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIFdlYWtNYXA8YW55LCBhbnk+fVxyXG4gKi9cclxuZnVuY3Rpb24gaXNXZWFrTWFwKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnV2Vha01hcCc7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIFNldFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgU2V0PGFueT59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1NldChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ1NldCc7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIFdlYWtTZXRcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIFdlYWtTZXQ8YW55Pn1cclxuICovXHJcbmZ1bmN0aW9uIGlzV2Vha1NldChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ1dlYWtTZXQnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBTeW1ib2xcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHN5bWJvbH1cclxuICovXHJcbmZ1bmN0aW9uIGlzU3ltYm9sKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnU3ltYm9sJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgRGF0ZSwgYW5kIHRoYXQgdGhlIGRhdGUgaXMgdmFsaWRcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIERhdGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0RhdGUocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdEYXRlJyAmJiAhaXNOYU4ocGF5bG9hZCk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIEJsb2JcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIEJsb2J9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Jsb2IocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdCbG9iJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgRmlsZVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgRmlsZX1cclxuICovXHJcbmZ1bmN0aW9uIGlzRmlsZShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ0ZpbGUnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBQcm9taXNlXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBQcm9taXNlPGFueT59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1Byb21pc2UocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdQcm9taXNlJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIEVycm9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBFcnJvcn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRXJyb3IocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdFcnJvcic7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBsaXRlcmFsbHkgdGhlIHZhbHVlIGBOYU5gIChpdCdzIGBOYU5gIGFuZCBhbHNvIGEgYG51bWJlcmApXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyB0eXBlb2YgTmFOfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNOYU5WYWx1ZShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ051bWJlcicgJiYgaXNOYU4ocGF5bG9hZCk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIHByaW1pdGl2ZSB0eXBlIChlZy4gQm9vbGVhbiB8IE51bGwgfCBVbmRlZmluZWQgfCBOdW1iZXIgfCBTdHJpbmcgfCBTeW1ib2wpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7KHBheWxvYWQgaXMgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQgfCBudW1iZXIgfCBzdHJpbmcgfCBzeW1ib2wpfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNQcmltaXRpdmUocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIChpc0Jvb2xlYW4ocGF5bG9hZCkgfHxcclxuICAgICAgICBpc051bGwocGF5bG9hZCkgfHxcclxuICAgICAgICBpc1VuZGVmaW5lZChwYXlsb2FkKSB8fFxyXG4gICAgICAgIGlzTnVtYmVyKHBheWxvYWQpIHx8XHJcbiAgICAgICAgaXNTdHJpbmcocGF5bG9hZCkgfHxcclxuICAgICAgICBpc1N5bWJvbChwYXlsb2FkKSk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7KHBheWxvYWQgaXMgbnVsbCB8IHVuZGVmaW5lZCl9XHJcbiAqL1xyXG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSBpc09uZU9mKGlzTnVsbCwgaXNVbmRlZmluZWQpO1xyXG5mdW5jdGlvbiBpc09uZU9mKGEsIGIsIGMsIGQsIGUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gYSh2YWx1ZSkgfHwgYih2YWx1ZSkgfHwgKCEhYyAmJiBjKHZhbHVlKSkgfHwgKCEhZCAmJiBkKHZhbHVlKSkgfHwgKCEhZSAmJiBlKHZhbHVlKSk7XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBEb2VzIGEgZ2VuZXJpYyBjaGVjayB0byBjaGVjayB0aGF0IHRoZSBnaXZlbiBwYXlsb2FkIGlzIG9mIGEgZ2l2ZW4gdHlwZS5cclxuICogSW4gY2FzZXMgbGlrZSBOdW1iZXIsIGl0IHdpbGwgcmV0dXJuIHRydWUgZm9yIE5hTiBhcyBOYU4gaXMgYSBOdW1iZXIgKHRoYW5rcyBqYXZhc2NyaXB0ISk7XHJcbiAqIEl0IHdpbGwsIGhvd2V2ZXIsIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBvYmplY3QgYW5kIG51bGxcclxuICpcclxuICogQHRlbXBsYXRlIFRcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEBwYXJhbSB7VH0gdHlwZVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IFdpbGwgdGhyb3cgdHlwZSBlcnJvciBpZiB0eXBlIGlzIGFuIGludmFsaWQgdHlwZVxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBUfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNUeXBlKHBheWxvYWQsIHR5cGUpIHtcclxuICAgIGlmICghKHR5cGUgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUeXBlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodHlwZSwgJ3Byb3RvdHlwZScpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVHlwZSBpcyBub3QgYSBjbGFzcycpO1xyXG4gICAgfVxyXG4gICAgLy8gQ2xhc3NlcyB1c3VhbGx5IGhhdmUgbmFtZXMgKGFzIGZ1bmN0aW9ucyB1c3VhbGx5IGhhdmUgbmFtZXMpXHJcbiAgICB2YXIgbmFtZSA9IHR5cGUubmFtZTtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSBuYW1lIHx8IEJvb2xlYW4ocGF5bG9hZCAmJiBwYXlsb2FkLmNvbnN0cnVjdG9yID09PSB0eXBlKTtcclxufVxuXG5leHBvcnQgeyBnZXRUeXBlLCBpc0FueU9iamVjdCwgaXNBcnJheSwgaXNCbG9iLCBpc0Jvb2xlYW4sIGlzRGF0ZSwgaXNFbXB0eUFycmF5LCBpc0VtcHR5T2JqZWN0LCBpc0VtcHR5U3RyaW5nLCBpc0Vycm9yLCBpc0ZpbGUsIGlzRnVsbEFycmF5LCBpc0Z1bGxPYmplY3QsIGlzRnVsbFN0cmluZywgaXNGdW5jdGlvbiwgaXNNYXAsIGlzTmFOVmFsdWUsIGlzTnVsbCwgaXNOdWxsT3JVbmRlZmluZWQsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNPYmplY3RMaWtlLCBpc09uZU9mLCBpc1BsYWluT2JqZWN0LCBpc1ByaW1pdGl2ZSwgaXNQcm9taXNlLCBpc1JlZ0V4cCwgaXNTZXQsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNUeXBlLCBpc1VuZGVmaW5lZCwgaXNXZWFrTWFwLCBpc1dlYWtTZXQgfTtcbiIsImltcG9ydCB7IGlzUGxhaW5PYmplY3QsIGlzQXJyYXksIGlzU3ltYm9sIH0gZnJvbSAnaXMtd2hhdCc7XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XG5cbmZ1bmN0aW9uIGFzc2lnblByb3AoY2FycnksIGtleSwgbmV3VmFsLCBvcmlnaW5hbE9iamVjdCkge1xyXG4gICAgdmFyIHByb3BUeXBlID0gb3JpZ2luYWxPYmplY3QucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KVxyXG4gICAgICAgID8gJ2VudW1lcmFibGUnXHJcbiAgICAgICAgOiAnbm9uZW51bWVyYWJsZSc7XHJcbiAgICBpZiAocHJvcFR5cGUgPT09ICdlbnVtZXJhYmxlJylcclxuICAgICAgICBjYXJyeVtrZXldID0gbmV3VmFsO1xyXG4gICAgaWYgKHByb3BUeXBlID09PSAnbm9uZW51bWVyYWJsZScpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FycnksIGtleSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogbmV3VmFsLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1lcmdlUmVjdXJzaXZlbHkob3JpZ2luLCBuZXdDb21lciwgZXh0ZW5zaW9ucykge1xyXG4gICAgLy8gd29yayBkaXJlY3RseSBvbiBuZXdDb21lciBpZiBpdHMgbm90IGFuIG9iamVjdFxyXG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KG5ld0NvbWVyKSkge1xyXG4gICAgICAgIC8vIGV4dGVuZCBtZXJnZSBydWxlc1xyXG4gICAgICAgIGlmIChleHRlbnNpb25zICYmIGlzQXJyYXkoZXh0ZW5zaW9ucykpIHtcclxuICAgICAgICAgICAgZXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChleHRlbmQpIHtcclxuICAgICAgICAgICAgICAgIG5ld0NvbWVyID0gZXh0ZW5kKG9yaWdpbiwgbmV3Q29tZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbWVyO1xyXG4gICAgfVxyXG4gICAgLy8gZGVmaW5lIG5ld09iamVjdCB0byBtZXJnZSBhbGwgdmFsdWVzIHVwb25cclxuICAgIHZhciBuZXdPYmplY3QgPSB7fTtcclxuICAgIGlmIChpc1BsYWluT2JqZWN0KG9yaWdpbikpIHtcclxuICAgICAgICB2YXIgcHJvcHNfMSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9yaWdpbik7XHJcbiAgICAgICAgdmFyIHN5bWJvbHNfMSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob3JpZ2luKTtcclxuICAgICAgICBuZXdPYmplY3QgPSBfX3NwcmVhZEFycmF5cyhwcm9wc18xLCBzeW1ib2xzXzEpLnJlZHVjZShmdW5jdGlvbiAoY2FycnksIGtleSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRWYWwgPSBvcmlnaW5ba2V5XTtcclxuICAgICAgICAgICAgaWYgKCghaXNTeW1ib2woa2V5KSAmJiAhT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobmV3Q29tZXIpLmluY2x1ZGVzKGtleSkpIHx8XHJcbiAgICAgICAgICAgICAgICAoaXNTeW1ib2woa2V5KSAmJiAhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhuZXdDb21lcikuaW5jbHVkZXMoa2V5KSkpIHtcclxuICAgICAgICAgICAgICAgIGFzc2lnblByb3AoY2FycnksIGtleSwgdGFyZ2V0VmFsLCBvcmlnaW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjYXJyeTtcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICB9XHJcbiAgICB2YXIgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuZXdDb21lcik7XHJcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobmV3Q29tZXIpO1xyXG4gICAgdmFyIHJlc3VsdCA9IF9fc3ByZWFkQXJyYXlzKHByb3BzLCBzeW1ib2xzKS5yZWR1Y2UoZnVuY3Rpb24gKGNhcnJ5LCBrZXkpIHtcclxuICAgICAgICAvLyByZS1kZWZpbmUgdGhlIG9yaWdpbiBhbmQgbmV3Q29tZXIgYXMgdGFyZ2V0VmFsIGFuZCBuZXdWYWxcclxuICAgICAgICB2YXIgbmV3VmFsID0gbmV3Q29tZXJba2V5XTtcclxuICAgICAgICB2YXIgdGFyZ2V0VmFsID0gKGlzUGxhaW5PYmplY3Qob3JpZ2luKSlcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICA/IG9yaWdpbltrZXldXHJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIGV4dGVuZCBtZXJnZSBydWxlc1xyXG4gICAgICAgIGlmIChleHRlbnNpb25zICYmIGlzQXJyYXkoZXh0ZW5zaW9ucykpIHtcclxuICAgICAgICAgICAgZXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChleHRlbmQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1ZhbCA9IGV4dGVuZCh0YXJnZXRWYWwsIG5ld1ZhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXaGVuIG5ld1ZhbCBpcyBhbiBvYmplY3QgZG8gdGhlIG1lcmdlIHJlY3Vyc2l2ZWx5XHJcbiAgICAgICAgaWYgKHRhcmdldFZhbCAhPT0gdW5kZWZpbmVkICYmIGlzUGxhaW5PYmplY3QobmV3VmFsKSkge1xyXG4gICAgICAgICAgICBuZXdWYWwgPSBtZXJnZVJlY3Vyc2l2ZWx5KHRhcmdldFZhbCwgbmV3VmFsLCBleHRlbnNpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXNzaWduUHJvcChjYXJyeSwga2V5LCBuZXdWYWwsIG5ld0NvbWVyKTtcclxuICAgICAgICByZXR1cm4gY2Fycnk7XHJcbiAgICB9LCBuZXdPYmplY3QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4vKipcclxuICogTWVyZ2UgYW55dGhpbmcgcmVjdXJzaXZlbHkuXHJcbiAqIE9iamVjdHMgZ2V0IG1lcmdlZCwgc3BlY2lhbCBvYmplY3RzIChjbGFzc2VzIGV0Yy4pIGFyZSByZS1hc3NpZ25lZCBcImFzIGlzXCIuXHJcbiAqIEJhc2ljIHR5cGVzIG92ZXJ3cml0ZSBvYmplY3RzIG9yIG90aGVyIGJhc2ljIHR5cGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0geyhJQ29uZmlnIHwgYW55KX0gb3JpZ2luXHJcbiAqIEBwYXJhbSB7Li4uYW55W119IG5ld0NvbWVyc1xyXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0XHJcbiAqL1xyXG5mdW5jdGlvbiBtZXJnZShvcmlnaW4pIHtcclxuICAgIHZhciBuZXdDb21lcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgbmV3Q29tZXJzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIGV4dGVuc2lvbnMgPSBudWxsO1xyXG4gICAgdmFyIGJhc2UgPSBvcmlnaW47XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChvcmlnaW4pICYmIG9yaWdpbi5leHRlbnNpb25zICYmIE9iamVjdC5rZXlzKG9yaWdpbikubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgYmFzZSA9IHt9O1xyXG4gICAgICAgIGV4dGVuc2lvbnMgPSBvcmlnaW4uZXh0ZW5zaW9ucztcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdDb21lcnMucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIG5ld0NvbWVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlUmVjdXJzaXZlbHkocmVzdWx0LCBuZXdDb21lciwgZXh0ZW5zaW9ucyk7XHJcbiAgICB9LCBiYXNlKTtcclxufVxuXG5mdW5jdGlvbiBjb25jYXRBcnJheXMob3JpZ2luVmFsLCBuZXdWYWwpIHtcclxuICAgIGlmIChpc0FycmF5KG9yaWdpblZhbCkgJiYgaXNBcnJheShuZXdWYWwpKSB7XHJcbiAgICAgICAgLy8gY29uY2F0IGxvZ2ljXHJcbiAgICAgICAgcmV0dXJuIG9yaWdpblZhbC5jb25jYXQobmV3VmFsKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdWYWw7IC8vIGFsd2F5cyByZXR1cm4gbmV3VmFsIGFzIGZhbGxiYWNrISFcclxufVxuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbmV4cG9ydCB7IGNvbmNhdEFycmF5cywgbWVyZ2UgfTtcbiIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuQ2xlYXJJY29uPXZvaWQgMDt2YXIgX3RlbXBsYXRlT2JqZWN0LF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSksX3Byb3BUeXBlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKSxfc3R5bGVkQ29tcG9uZW50cz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhKXtyZXR1cm4gYSYmYS5fX2VzTW9kdWxlP2E6e2RlZmF1bHQ6YX19ZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChhLGIpe3JldHVybiBifHwoYj1hLnNsaWNlKDApKSxPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGEse3Jhdzp7dmFsdWU6T2JqZWN0LmZyZWV6ZShiKX19KSl9dmFyIENsZWFySWNvbj1mdW5jdGlvbihhKXt2YXIgYj1hLnNob3dDbGVhcixjPWEuc2V0U2VhcmNoU3RyaW5nLGQ9YS5zZWFyY2hTdHJpbmcsZT1hLnNldEZvY3VzLGY9YS5vbkNsZWFyO3JldHVybiBiPzA+PWQubGVuZ3RoP251bGw6X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdHlsZWRDbGVhckljb24se2NsYXNzTmFtZTpcImNsZWFyLWljb25cIixvbkNsaWNrOmZ1bmN0aW9uKCl7Yyh7dGFyZ2V0Ont2YWx1ZTpcIlwifX0pLGUoKSxmKCl9fSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOjIwLGhlaWdodDoyMCxmb2N1c2FibGU6XCJmYWxzZVwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIix2aWV3Qm94OlwiMCAwIDI0IDI0XCJ9LF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTggMTIgNSAxNy41OCA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwifSkpKTpudWxsfTtleHBvcnRzLkNsZWFySWNvbj1DbGVhckljb247dmFyIFN0eWxlZENsZWFySWNvbj1fc3R5bGVkQ29tcG9uZW50cy5kZWZhdWx0LmRpdihfdGVtcGxhdGVPYmplY3R8fChfdGVtcGxhdGVPYmplY3Q9X3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIG1hcmdpbjogXCIsXCI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgPiBzdmcge1xcbiAgICBmaWxsOiBcIixcIjtcXG4gIH1cXG5cIl0pKSxmdW5jdGlvbihhKXtyZXR1cm4gYS50aGVtZS5jbGVhckljb25NYXJnaW59LGZ1bmN0aW9uKGEpe3JldHVybiBhLnRoZW1lLmljb25Db2xvcn0pO0NsZWFySWNvbi5wcm9wVHlwZXM9e3NlYXJjaFN0cmluZzpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsc2V0U2VhcmNoU3RyaW5nOl9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsc2V0Rm9jdXM6X3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsc2hvd0NsZWFyOl9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLG9uQ2xlYXI6X3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsb25TZWFyY2g6X3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmN9OyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIF90eXBlb2YoYSl7XCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO3JldHVybiBfdHlwZW9mPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihhKXtyZXR1cm4gdHlwZW9mIGF9OmZ1bmN0aW9uKGEpe3JldHVybiBhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmEuY29uc3RydWN0b3I9PT1TeW1ib2wmJmEhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGF9LF90eXBlb2YoYSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWZhdWx0PVJlYWN0U2VhcmNoQXV0b2NvbXBsZXRlLGV4cG9ydHMuTUFYX1JFU1VMVFM9ZXhwb3J0cy5ERUZBVUxUX0lOUFVUX0RFQk9VTkNFPXZvaWQgMDt2YXIgX3RlbXBsYXRlT2JqZWN0LF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpLF9wcm9wVHlwZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSksX2Z1c2U9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZnVzZS5qc1wiKSksX2NvbmZpZz1yZXF1aXJlKFwiLi4vY29uZmlnL2NvbmZpZ1wiKSxfUmVzdWx0cz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Jlc3VsdHNcIikpLF9TZWFyY2hJbnB1dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NlYXJjaElucHV0XCIpKSxfc3R5bGVkQ29tcG9uZW50cz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIikpLF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHMvdXRpbHNcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhKXtyZXR1cm4gYSYmYS5fX2VzTW9kdWxlP2E6e2RlZmF1bHQ6YX19ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgV2Vha01hcClyZXR1cm4gbnVsbDt2YXIgYT1uZXcgV2Vha01hcDtyZXR1cm4gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGF9LGF9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoYSl7aWYoYSYmYS5fX2VzTW9kdWxlKXJldHVybiBhO2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09X3R5cGVvZihhKSYmXCJmdW5jdGlvblwiIT10eXBlb2YgYSlyZXR1cm57ZGVmYXVsdDphfTt2YXIgYj1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihiJiZiLmhhcyhhKSlyZXR1cm4gYi5nZXQoYSk7dmFyIGM9e30sZD1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBlIGluIGEpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsZSkpe3ZhciBmPWQ/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLGUpOm51bGw7ZiYmKGYuZ2V0fHxmLnNldCk/T2JqZWN0LmRlZmluZVByb3BlcnR5KGMsZSxmKTpjW2VdPWFbZV19cmV0dXJuIGMuZGVmYXVsdD1hLGImJmIuc2V0KGEsYyksY31mdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKGEsYil7cmV0dXJuIGJ8fChiPWEuc2xpY2UoMCkpLE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYSx7cmF3Ont2YWx1ZTpPYmplY3QuZnJlZXplKGIpfX0pKX1mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhLGIpe3JldHVybiBfYXJyYXlXaXRoSG9sZXMoYSl8fF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhLGIpfHxfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYSxiKXx8X25vbkl0ZXJhYmxlUmVzdCgpfWZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfWZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhLGIpe2lmKGEpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhLGIpO3ZhciBjPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09YyYmYS5jb25zdHJ1Y3RvciYmKGM9YS5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09Y3x8XCJTZXRcIj09PWM/QXJyYXkuZnJvbShhKTpcIkFyZ3VtZW50c1wiPT09Y3x8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoYyk/X2FycmF5TGlrZVRvQXJyYXkoYSxiKTp2b2lkIDB9fWZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGEsYil7KG51bGw9PWJ8fGI+YS5sZW5ndGgpJiYoYj1hLmxlbmd0aCk7Zm9yKHZhciBjPTAsZD1BcnJheShiKTtjPGI7YysrKWRbY109YVtjXTtyZXR1cm4gZH1mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYSxiKXt2YXIgYz1hJiYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmYVtTeW1ib2wuaXRlcmF0b3JdfHxhW1wiQEBpdGVyYXRvclwiXSk7aWYobnVsbCE9Yyl7dmFyIGQsZSxmPVtdLGc9ITAsaD0hMTt0cnl7Zm9yKGM9Yy5jYWxsKGEpOyEoZz0oZD1jLm5leHQoKSkuZG9uZSkmJihmLnB1c2goZC52YWx1ZSksIShiJiZmLmxlbmd0aD09PWIpKTtnPSEwKTt9Y2F0Y2goYSl7aD0hMCxlPWF9ZmluYWxseXt0cnl7Z3x8bnVsbD09Y1tcInJldHVyblwiXXx8Y1tcInJldHVyblwiXSgpfWZpbmFsbHl7aWYoaCl0aHJvdyBlfX1yZXR1cm4gZn19ZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGEpe2lmKEFycmF5LmlzQXJyYXkoYSkpcmV0dXJuIGF9ZnVuY3Rpb24gb3duS2V5cyhhLGIpe3ZhciBjPU9iamVjdC5rZXlzKGEpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBkPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoYSk7YiYmKGQ9ZC5maWx0ZXIoZnVuY3Rpb24oYil7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxiKS5lbnVtZXJhYmxlfSkpLGMucHVzaC5hcHBseShjLGQpfXJldHVybiBjfWZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoYSl7Zm9yKHZhciBiLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWI9bnVsbD09YXJndW1lbnRzW2NdP3t9OmFyZ3VtZW50c1tjXSxjJTI/b3duS2V5cyhPYmplY3QoYiksITApLmZvckVhY2goZnVuY3Rpb24oYyl7X2RlZmluZVByb3BlcnR5KGEsYyxiW2NdKX0pOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGEsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYikpOm93bktleXMoT2JqZWN0KGIpKS5mb3JFYWNoKGZ1bmN0aW9uKGMpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGMsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiLGMpKX0pO3JldHVybiBhfWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShhLGIsYyl7cmV0dXJuIGIgaW4gYT9PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHt2YWx1ZTpjLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6YVtiXT1jLGF9dmFyIERFRkFVTFRfSU5QVVRfREVCT1VOQ0U9MjAwO2V4cG9ydHMuREVGQVVMVF9JTlBVVF9ERUJPVU5DRT0yMDA7dmFyIE1BWF9SRVNVTFRTPTEwO2V4cG9ydHMuTUFYX1JFU1VMVFM9MTA7ZnVuY3Rpb24gUmVhY3RTZWFyY2hBdXRvY29tcGxldGUoYSl7dmFyIGI9YS5pdGVtcyxjPWEuZnVzZU9wdGlvbnMsZD1hLmlucHV0RGVib3VuY2UsZT1hLm9uU2VhcmNoLGY9YS5vbkhvdmVyLGc9YS5vblNlbGVjdCxoPWEub25Gb2N1cyxpPWEub25DbGVhcixqPWEuc2hvd0ljb24saz1hLnNob3dDbGVhcixsPWEubWF4UmVzdWx0cyxtPWEucGxhY2Vob2xkZXIsbj1hLmF1dG9Gb2N1cyxvPWEuc3R5bGluZyxwPWEucmVzdWx0U3RyaW5nS2V5TmFtZSxxPWEuaW5wdXRTZWFyY2hTdHJpbmcscj1fb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sX2NvbmZpZy5kZWZhdWx0VGhlbWUpLG8pLHM9X29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LF9jb25maWcuZGVmYXVsdEZ1c2VPcHRpb25zKSxjKSx0PW5ldyBfZnVzZS5kZWZhdWx0KGIscyk7dC5zZXRDb2xsZWN0aW9uKGIpO3ZhciB1PSgwLF9yZWFjdC51c2VTdGF0ZSkocSksdj1fc2xpY2VkVG9BcnJheSh1LDIpLHc9dlswXSx4PXZbMV0seT0oMCxfcmVhY3QudXNlU3RhdGUpKCksej1fc2xpY2VkVG9BcnJheSh5LDIpLEE9elswXSxCPXpbMV0sQz1mdW5jdGlvbihhKXt2YXIgYj1bXTswPChudWxsPT09YXx8dm9pZCAwPT09YT92b2lkIDA6YS5sZW5ndGgpPyhiPUUoYSksQihiKSxlKGEsYikpOkIoYil9LEQ9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soMDxkPygwLF91dGlscy5kZWJvdW5jZSkoZnVuY3Rpb24oYSl7cmV0dXJuIEMoYSl9LGQpOmZ1bmN0aW9uKGEpe3JldHVybiBDKGEpfSxbYl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uKCl7eChxKX0sW3FdKSwoMCxfcmVhY3QudXNlRWZmZWN0KShmdW5jdGlvbigpezA8KG51bGw9PT13fHx2b2lkIDA9PT13P3ZvaWQgMDp3Lmxlbmd0aCkmJjA8KG51bGw9PT1BfHx2b2lkIDA9PT1BP3ZvaWQgMDpBLmxlbmd0aCkmJkIoRSh3KSl9LFtiXSk7dmFyIEU9ZnVuY3Rpb24oYSl7cmV0dXJuIHQuc2VhcmNoKGEse2xpbWl0Omx9KS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIF9vYmplY3RTcHJlYWQoe30sYS5pdGVtKX0pLnNsaWNlKDAsbCl9O3JldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9zdHlsZWRDb21wb25lbnRzLlRoZW1lUHJvdmlkZXIse3RoZW1lOnJ9LF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkUmVhY3RTZWFyY2hBdXRvY29tcGxldGUsbnVsbCxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIndyYXBwZXJcIn0sX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfU2VhcmNoSW5wdXQuZGVmYXVsdCx7c2VhcmNoU3RyaW5nOncsc2V0U2VhcmNoU3RyaW5nOmZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0LGM9Yi52YWx1ZTt4KGMpLEQoYyl9LGF1dG9Gb2N1czpuLG9uQmx1cjpmdW5jdGlvbigpe3JldHVybiBCKFtdKX0sb25Gb2N1czpoLG9uQ2xlYXI6aSxwbGFjZWhvbGRlcjptLHNob3dJY29uOmosc2hvd0NsZWFyOmt9KSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9SZXN1bHRzLmRlZmF1bHQse3Jlc3VsdHM6QSxvbkNsaWNrOmZ1bmN0aW9uKGEpe0IoW10pLGcoYSl9LG9uSG92ZXI6ZixzZXRTZWFyY2hTdHJpbmc6eCxzaG93SWNvbjpqLG1heFJlc3VsdHM6bCxyZXN1bHRTdHJpbmdLZXlOYW1lOnB9KSkpKX1SZWFjdFNlYXJjaEF1dG9jb21wbGV0ZS5kZWZhdWx0UHJvcHM9e2l0ZW1zOltdLGZ1c2VPcHRpb25zOl9jb25maWcuZGVmYXVsdEZ1c2VPcHRpb25zLG9uU2VhcmNoOmZ1bmN0aW9uKCl7fSxvbkhvdmVyOmZ1bmN0aW9uKCl7fSxvblNlbGVjdDpmdW5jdGlvbigpe30sb25DbGVhcjpmdW5jdGlvbigpe30saW5wdXREZWJvdW5jZToyMDAsc2hvd0ljb246ITAsc2hvd0NsZWFyOiEwLG1heFJlc3VsdHM6MTAscGxhY2Vob2xkZXI6XCJcIixhdXRvRm9jdXM6ITEsb25Gb2N1czpmdW5jdGlvbigpe30sc3R5bGluZzp7fSxyZXN1bHRTdHJpbmdLZXlOYW1lOlwibmFtZVwiLGlucHV0U2VhcmNoU3RyaW5nOlwiXCJ9LFJlYWN0U2VhcmNoQXV0b2NvbXBsZXRlLnByb3BUeXBlcz17aXRlbXM6X3Byb3BUeXBlcy5kZWZhdWx0LmFycmF5LGZ1c2VPcHRpb25zOl9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QsaW5wdXREZWJvdW5jZTpfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLG9uU2VhcmNoOl9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLG9uSG92ZXI6X3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsb25TZWxlY3Q6X3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsb25DbGVhcjpfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxvbkZvY3VzOl9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLHNob3dJY29uOl9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLHNob3dDbGVhcjpfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxtYXhSZXN1bHRzOl9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIscGxhY2Vob2xkZXI6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxhdXRvRm9jdXM6X3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsc3R5bGluZzpfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LHJlc3VsdFN0cmluZ0tleU5hbWU6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxpbnB1dFNlYXJjaFN0cmluZzpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTt2YXIgU3R5bGVkUmVhY3RTZWFyY2hBdXRvY29tcGxldGU9X3N0eWxlZENvbXBvbmVudHMuZGVmYXVsdC5kaXYoX3RlbXBsYXRlT2JqZWN0fHwoX3RlbXBsYXRlT2JqZWN0PV90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBoZWlnaHQ6IFwiLFwiO1xcblxcbiAgPiAud3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJvcmRlcjogXCIsXCI7XFxuICAgIGJvcmRlci1yYWRpdXM6IFwiLFwiO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIixcIjtcXG4gICAgY29sb3I6IFwiLFwiO1xcblxcbiAgICBmb250LXNpemU6IFwiLFwiO1xcbiAgICBmb250LWZhbWlseTogXCIsXCI7XFxuXFxuICAgIHotaW5kZXg6IFwiLFwiO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3gtc2hhZG93OiBcIixcIjtcXG4gICAgfVxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYm94LXNoYWRvdzogXCIsXCI7XFxuICAgIH1cXG4gICAgJjpmb2N1cy13aXRoaW4ge1xcbiAgICAgIGJveC1zaGFkb3c6IFwiLFwiO1xcbiAgICB9XFxuICB9XFxuXCJdKSksZnVuY3Rpb24oYSl7cmV0dXJuIHBhcnNlSW50KGEudGhlbWUuaGVpZ2h0KSsyK1wicHhcIn0sZnVuY3Rpb24oYSl7cmV0dXJuIGEudGhlbWUuYm9yZGVyfSxmdW5jdGlvbihhKXtyZXR1cm4gYS50aGVtZS5ib3JkZXJSYWRpdXN9LGZ1bmN0aW9uKGEpe3JldHVybiBhLnRoZW1lLmJhY2tncm91bmRDb2xvcn0sZnVuY3Rpb24oYSl7cmV0dXJuIGEudGhlbWUuY29sb3J9LGZ1bmN0aW9uKGEpe3JldHVybiBhLnRoZW1lLmZvbnRTaXplfSxmdW5jdGlvbihhKXtyZXR1cm4gYS50aGVtZS5mb250RmFtaWx5fSxmdW5jdGlvbihhKXtyZXR1cm4gYS50aGVtZS56SW5kZXh9LGZ1bmN0aW9uKGEpe3JldHVybiBhLnRoZW1lLmJveFNoYWRvd30sZnVuY3Rpb24oYSl7cmV0dXJuIGEudGhlbWUuYm94U2hhZG93fSxmdW5jdGlvbihhKXtyZXR1cm4gYS50aGVtZS5ib3hTaGFkb3d9KTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmRlZmF1bHQ9UmVzdWx0czt2YXIgX3RlbXBsYXRlT2JqZWN0LF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSksX3Byb3BUeXBlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKSxfU2VhcmNoSWNvbj1yZXF1aXJlKFwiLi9TZWFyY2hJY29uXCIpLF9zdHlsZWRDb21wb25lbnRzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGEpe3JldHVybiBhJiZhLl9fZXNNb2R1bGU/YTp7ZGVmYXVsdDphfX1mdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKGEsYil7cmV0dXJuIGJ8fChiPWEuc2xpY2UoMCkpLE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYSx7cmF3Ont2YWx1ZTpPYmplY3QuZnJlZXplKGIpfX0pKX1mdW5jdGlvbiBSZXN1bHRzKGEpe3ZhciBiPWEucmVzdWx0cyxjPWEub25DbGljayxkPWEuc2V0U2VhcmNoU3RyaW5nLGU9YS5zaG93SWNvbixmPWEubWF4UmVzdWx0cyxnPWEucmVzdWx0U3RyaW5nS2V5TmFtZSxoPWEub25Ib3ZlcixpPWZ1bmN0aW9uKGEpe2MoYSksZChhW2ddKX07cmV0dXJuIDA+PShudWxsPT09Ynx8dm9pZCAwPT09Yj92b2lkIDA6Yi5sZW5ndGgpP251bGw6X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdHlsZWRSZXN1bHRzLG51bGwsX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJsaW5lXCJ9KSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIixudWxsLGIuc2xpY2UoMCxmKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtvbk1vdXNlRW50ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gaChhKX0sXCJkYXRhLXRlc3RcIjpcInJlc3VsdFwiLGtleTpcInJzYS1yZXN1bHQtXCIuY29uY2F0KGEuaWQpLG9uTW91c2VEb3duOmZ1bmN0aW9uKCl7cmV0dXJuIGkoYSl9LG9uQ2xpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gaShhKX19LF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1NlYXJjaEljb24uU2VhcmNoSWNvbix7c2hvd0ljb246ZX0pLF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiZWxsaXBzaXNcIix0aXRsZTphW2ddfSxhW2ddKSl9KSkpfVJlc3VsdHMuZGVmYXVsdFByb3BzPXtyZXN1bHRzOltdLHNldERpc3BsYXlTdHJpbmc6ZnVuY3Rpb24oKXt9LHJlc3VsdFN0cmluZ0tleU5hbWU6XCJuYW1lXCJ9LFJlc3VsdHMucHJvcFR5cGVzPXtyZXN1bHRzOl9wcm9wVHlwZXMuZGVmYXVsdC5hcnJheSxvbkNsaWNrOl9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLHNldFNlYXJjaFN0cmluZzpfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxzaG93SWNvbjpfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxtYXhSZXN1bHRzOl9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIscmVzdWx0U3RyaW5nS2V5TmFtZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTt2YXIgU3R5bGVkUmVzdWx0cz1fc3R5bGVkQ29tcG9uZW50cy5kZWZhdWx0LmRpdihfdGVtcGxhdGVPYmplY3R8fChfdGVtcGxhdGVPYmplY3Q9X3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gID4gZGl2LmxpbmUge1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiBcIixcIjtcXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuXFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxuICB9XFxuXFxuICA+IHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDBweCAwIDE2cHggMDtcXG4gICAgbWF4LWhlaWdodDogXCIsXCI7XFxuXFxuICAgID4gbGkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiA0cHggMCA0cHggMDtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiLFwiO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgIH1cXG5cXG4gICAgICA+IGRpdiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIC5lbGxpcHNpcyB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgfVxcblwiXSkpLGZ1bmN0aW9uKGEpe3JldHVybiBhLnRoZW1lLmxpbmVDb2xvcn0sZnVuY3Rpb24oYSl7cmV0dXJuIGEudGhlbWUubWF4SGVpZ2h0fSxmdW5jdGlvbihhKXtyZXR1cm4gYS50aGVtZS5ob3ZlckJhY2tncm91bmRDb2xvcn0pOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuU2VhcmNoSWNvbj12b2lkIDA7dmFyIF90ZW1wbGF0ZU9iamVjdCxfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpLF9wcm9wVHlwZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSksX3N0eWxlZENvbXBvbmVudHM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIikpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntkZWZhdWx0OmF9fWZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoYSxiKXtyZXR1cm4gYnx8KGI9YS5zbGljZSgwKSksT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhhLHtyYXc6e3ZhbHVlOk9iamVjdC5mcmVlemUoYil9fSkpfXZhciBTZWFyY2hJY29uPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc2hvd0ljb247cmV0dXJuIGI/X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdHlsZWRTZWFyY2hJY29uLHtjbGFzc05hbWU6XCJzZWFyY2gtaWNvblwiLHdpZHRoOjIwLGhlaWdodDoyMCxmb2N1c2FibGU6XCJmYWxzZVwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIix2aWV3Qm94OlwiMCAwIDI0IDI0XCJ9LF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIn0pKTpudWxsfTtleHBvcnRzLlNlYXJjaEljb249U2VhcmNoSWNvbjt2YXIgU3R5bGVkU2VhcmNoSWNvbj1fc3R5bGVkQ29tcG9uZW50cy5kZWZhdWx0LnN2ZyhfdGVtcGxhdGVPYmplY3R8fChfdGVtcGxhdGVPYmplY3Q9X3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWFyZ2luOiBcIixcIjtcXG4gIGZpbGw6IFwiLFwiO1xcblwiXSkpLGZ1bmN0aW9uKGEpe3JldHVybiBhLnRoZW1lLnNlYXJjaEljb25NYXJnaW59LGZ1bmN0aW9uKGEpe3JldHVybiBhLnRoZW1lLmljb25Db2xvcn0pO1NlYXJjaEljb24ucHJvcFR5cGVzPXtzaG93SWNvbjpfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbH07IiwiXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gX3R5cGVvZihhKXtcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7cmV0dXJuIF90eXBlb2Y9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGEpe3JldHVybiB0eXBlb2YgYX06ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmYS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmYSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgYX0sX3R5cGVvZihhKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmRlZmF1bHQ9U2VhcmNoSW5wdXQ7dmFyIF90ZW1wbGF0ZU9iamVjdCxfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKSxfcHJvcFR5cGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpLF9TZWFyY2hJY29uPXJlcXVpcmUoXCIuL1NlYXJjaEljb25cIiksX3N0eWxlZENvbXBvbmVudHM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIikpLF9DbGVhckljb249cmVxdWlyZShcIi4vQ2xlYXJJY29uXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntkZWZhdWx0OmF9fWZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIFdlYWtNYXApcmV0dXJuIG51bGw7dmFyIGE9bmV3IFdlYWtNYXA7cmV0dXJuIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBhfSxhfWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKGEpe2lmKGEmJmEuX19lc01vZHVsZSlyZXR1cm4gYTtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PV90eXBlb2YoYSkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGEpcmV0dXJue2RlZmF1bHQ6YX07dmFyIGI9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoYiYmYi5oYXMoYSkpcmV0dXJuIGIuZ2V0KGEpO3ZhciBjPXt9LGQ9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIgZSBpbiBhKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLGUpKXt2YXIgZj1kP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxlKTpudWxsO2YmJihmLmdldHx8Zi5zZXQpP09iamVjdC5kZWZpbmVQcm9wZXJ0eShjLGUsZik6Y1tlXT1hW2VdfXJldHVybiBjLmRlZmF1bHQ9YSxiJiZiLnNldChhLGMpLGN9ZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChhLGIpe3JldHVybiBifHwoYj1hLnNsaWNlKDApKSxPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGEse3Jhdzp7dmFsdWU6T2JqZWN0LmZyZWV6ZShiKX19KSl9ZnVuY3Rpb24gU2VhcmNoSW5wdXQoYSl7dmFyIGI9YS5zZWFyY2hTdHJpbmcsYz1hLnNldFNlYXJjaFN0cmluZyxkPWEuYXV0b0ZvY3VzLGU9YS5vbkJsdXIsZj1hLm9uRm9jdXMsZz1hLm9uQ2xlYXIsaD1hLnBsYWNlaG9sZGVyLGk9YS5zaG93SWNvbixqPWEuc2hvd0NsZWFyLGs9KDAsX3JlYWN0LnVzZVJlZikoKSxsPSEwLG09ZnVuY3Rpb24oKXtsJiZmKCl9O3JldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN0eWxlZFNlYXJjaElucHV0LG51bGwsX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfU2VhcmNoSWNvbi5TZWFyY2hJY29uLHtzaG93SWNvbjppfSksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIse3JlZjprLHNwZWxsQ2hlY2s6ITEsdmFsdWU6YixvbkNoYW5nZTpjLG9uQmx1cjplLG9uRm9jdXM6bSxwbGFjZWhvbGRlcjpoLGF1dG9Gb2N1czpkfSksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ2xlYXJJY29uLkNsZWFySWNvbix7c2hvd0NsZWFyOmosc2V0U2VhcmNoU3RyaW5nOmMsc2VhcmNoU3RyaW5nOmIsb25DbGVhcjpnLHNldEZvY3VzOmZ1bmN0aW9uKCl7bD0hMSxrLmN1cnJlbnQuZm9jdXMoKSxsPSEwfX0pKX1TZWFyY2hJbnB1dC5kZWZhdWx0UHJvcHM9e3Nob3dJY29uOiEwLHNob3dDbGVhcjohMH0sU2VhcmNoSW5wdXQucHJvcFR5cGVzPXtzZWFyY2hTdHJpbmc6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLHNldFNlYXJjaFN0cmluZzpfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLGF1dG9Gb2N1czpfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxvbkJsdXI6X3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxvbkZvY3VzOl9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLG9uQ2xlYXI6X3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMscGxhY2Vob2xkZXI6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxzaG93SWNvbjpfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxzaG93Q2xlYXI6X3Byb3BUeXBlcy5kZWZhdWx0LmJvb2x9O3ZhciBTdHlsZWRTZWFyY2hJbnB1dD1fc3R5bGVkQ29tcG9uZW50cy5kZWZhdWx0LmRpdihfdGVtcGxhdGVPYmplY3R8fChfdGVtcGxhdGVPYmplY3Q9X3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIG1pbi1oZWlnaHQ6IFwiLFwiO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gID4gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgcGFkZGluZzogMCAwIDAgMTNweDtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcblxcbiAgICBjb2xvcjogXCIsXCI7XFxuXFxuICAgIDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcbiAgICAgIGNvbG9yOiBcIixcIjtcXG4gICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxuICAgIH1cXG5cXG4gICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cXG4gICAgICBjb2xvcjogXCIsXCI7XFxuICAgIH1cXG5cXG4gICAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXFxuICAgICAgY29sb3I6IFwiLFwiO1xcbiAgICB9XFxuICB9XFxuXCJdKSksZnVuY3Rpb24oYSl7cmV0dXJuIGEudGhlbWUuaGVpZ2h0fSxmdW5jdGlvbihhKXtyZXR1cm4gYS50aGVtZS5jb2xvcn0sZnVuY3Rpb24oYSl7cmV0dXJuIGEudGhlbWUucGxhY2Vob2xkZXJDb2xvcn0sZnVuY3Rpb24oYSl7cmV0dXJuIGEudGhlbWUucGxhY2Vob2xkZXJDb2xvcn0sZnVuY3Rpb24oYSl7cmV0dXJuIGEudGhlbWUucGxhY2Vob2xkZXJDb2xvcn0pOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVmYXVsdEZ1c2VPcHRpb25zPWV4cG9ydHMuZGVmYXVsdFRoZW1lPXZvaWQgMDt2YXIgZGVmYXVsdFRoZW1lPXtoZWlnaHQ6XCI0NHB4XCIsYm9yZGVyOlwiMXB4IHNvbGlkICNkZmUxZTVcIixib3JkZXJSYWRpdXM6XCIyNHB4XCIsYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIixib3hTaGFkb3c6XCJyZ2JhKDMyLCAzMywgMzYsIDAuMjgpIDBweCAxcHggNnB4IDBweFwiLGhvdmVyQmFja2dyb3VuZENvbG9yOlwiI2VlZVwiLGNvbG9yOlwiIzIxMjEyMVwiLGZvbnRTaXplOlwiMTZweFwiLGZvbnRGYW1pbHk6XCJBcmlhbFwiLGljb25Db2xvcjpcImdyZXlcIixsaW5lQ29sb3I6XCJyZ2IoMjMyLCAyMzQsIDIzNylcIixwbGFjZWhvbGRlckNvbG9yOlwiZ3JleVwiLHpJbmRleDowLGNsZWFySWNvbk1hcmdpbjpcIjNweCAxNHB4IDAgMFwiLHNlYXJjaEljb25NYXJnaW46XCIwIDAgMCAxNnB4XCJ9O2V4cG9ydHMuZGVmYXVsdFRoZW1lPWRlZmF1bHRUaGVtZTt2YXIgZGVmYXVsdEZ1c2VPcHRpb25zPXtzaG91bGRTb3J0OiEwLHRocmVzaG9sZDouNixsb2NhdGlvbjowLGRpc3RhbmNlOjEwMCxtYXhQYXR0ZXJuTGVuZ3RoOjMyLG1pbk1hdGNoQ2hhckxlbmd0aDoxLGtleXM6W1wibmFtZVwiXX07ZXhwb3J0cy5kZWZhdWx0RnVzZU9wdGlvbnM9ZGVmYXVsdEZ1c2VPcHRpb25zOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiUmVhY3RTZWFyY2hBdXRvY29tcGxldGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gX1JlYWN0U2VhcmNoQXV0b2NvbXBsZXRlLmRlZmF1bHR9fSk7dmFyIF9SZWFjdFNlYXJjaEF1dG9jb21wbGV0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvUmVhY3RTZWFyY2hBdXRvY29tcGxldGUuanNcIikpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntkZWZhdWx0OmF9fSIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVib3VuY2U9ZGVib3VuY2UsZXhwb3J0cy5pc0NhY2hlZD12b2lkIDA7ZnVuY3Rpb24gZGVib3VuY2UoYSxiLGMpe3ZhciBkO3JldHVybiBmdW5jdGlvbigpe3ZhciBlPXRoaXMsZj1hcmd1bWVudHM7YyYmIWQmJmEuYXBwbHkoZSxmKSxjbGVhclRpbWVvdXQoZCksZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZD1udWxsLGN8fGEuYXBwbHkoZSxmKX0sYil9fXZhciBpc0NhY2hlZD1mdW5jdGlvbihhKXthPWEudG9Mb3dlckNhc2UoKTt2YXIgYj1KU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYS50b0xvd2VyQ2FzZSgpKSk7cmV0dXJuIGI/YjpbXX07ZXhwb3J0cy5pc0NhY2hlZD1pc0NhY2hlZDsiLCJpbXBvcnQgU3R5bGlzIGZyb20gJ3N0eWxpcy9zdHlsaXMubWluJztcbmltcG9ydCBfaW5zZXJ0UnVsZVBsdWdpbiBmcm9tICdzdHlsaXMtcnVsZS1zaGVldCc7XG5pbXBvcnQgUmVhY3QsIHsgY2xvbmVFbGVtZW50LCBjcmVhdGVDb250ZXh0LCBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdW5pdGxlc3MgZnJvbSAnQGVtb3Rpb24vdW5pdGxlc3MnO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc1ZhbGlkRWxlbWVudFR5cGUsIEZvcndhcmRSZWYgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgc3RyZWFtIGZyb20gJ3N0cmVhbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHZhbGlkQXR0ciBmcm9tICdAZW1vdGlvbi9pcy1wcm9wLXZhbGlkJztcbmltcG9ydCBtZXJnZSBmcm9tICdtZXJnZS1hbnl0aGluZyc7XG5cbi8vIFxuXG52YXIgaW50ZXJsZWF2ZSA9IChmdW5jdGlvbiAoc3RyaW5ncywgaW50ZXJwb2xhdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtzdHJpbmdzWzBdXTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gaW50ZXJwb2xhdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICByZXN1bHQucHVzaChpbnRlcnBvbGF0aW9uc1tpXSwgc3RyaW5nc1tpICsgMV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBvYmplY3RXaXRob3V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbi8vIFxudmFyIGlzUGxhaW5PYmplY3QgPSAoZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoeCkpID09PSAnb2JqZWN0JyAmJiB4LmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59KTtcblxuLy8gXG52YXIgRU1QVFlfQVJSQVkgPSBPYmplY3QuZnJlZXplKFtdKTtcbnZhciBFTVBUWV9PQkpFQ1QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nO1xufVxuXG4vLyBcblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0YXJnZXQpIHtcbiAgcmV0dXJuIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgdGFyZ2V0IDogZmFsc2UpIHx8IHRhcmdldC5kaXNwbGF5TmFtZSB8fCB0YXJnZXQubmFtZSB8fCAnQ29tcG9uZW50Jztcbn1cblxuLy8gXG5mdW5jdGlvbiBpc1N0YXRlbGVzc0Z1bmN0aW9uKHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmICEodGVzdC5wcm90b3R5cGUgJiYgdGVzdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbi8vIFxuZnVuY3Rpb24gaXNTdHlsZWRDb21wb25lbnQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgJiYgdHlwZW9mIHRhcmdldC5zdHlsZWRDb21wb25lbnRJZCA9PT0gJ3N0cmluZyc7XG59XG5cbi8vIFxuXG52YXIgU0NfQVRUUiA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0FUVFIgfHwgcHJvY2Vzcy5lbnYuU0NfQVRUUikgfHwgJ2RhdGEtc3R5bGVkJztcblxudmFyIFNDX1ZFUlNJT05fQVRUUiA9ICdkYXRhLXN0eWxlZC12ZXJzaW9uJztcblxudmFyIFNDX1NUUkVBTV9BVFRSID0gJ2RhdGEtc3R5bGVkLXN0cmVhbWVkJztcblxudmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnSFRNTEVsZW1lbnQnIGluIHdpbmRvdztcblxudmFyIERJU0FCTEVfU1BFRURZID0gdHlwZW9mIFNDX0RJU0FCTEVfU1BFRURZID09PSAnYm9vbGVhbicgJiYgU0NfRElTQUJMRV9TUEVFRFkgfHwgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIChwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkgfHwgcHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkpIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbi8vIFNoYXJlZCBlbXB0eSBleGVjdXRpb24gY29udGV4dCB3aGVuIGdlbmVyYXRpbmcgc3RhdGljIHN0eWxlc1xudmFyIFNUQVRJQ19FWEVDVVRJT05fQ09OVEVYVCA9IHt9O1xuXG4vLyBcblxuXG4vKipcbiAqIFBhcnNlIGVycm9ycy5tZCBhbmQgdHVybiBpdCBpbnRvIGEgc2ltcGxlIGhhc2ggb2YgY29kZTogbWVzc2FnZVxuICovXG52YXIgRVJST1JTID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHtcbiAgXCIxXCI6IFwiQ2Fubm90IGNyZWF0ZSBzdHlsZWQtY29tcG9uZW50IGZvciBjb21wb25lbnQ6ICVzLlxcblxcblwiLFxuICBcIjJcIjogXCJDYW4ndCBjb2xsZWN0IHN0eWxlcyBvbmNlIHlvdSd2ZSBjb25zdW1lZCBhIGBTZXJ2ZXJTdHlsZVNoZWV0YCdzIHN0eWxlcyEgYFNlcnZlclN0eWxlU2hlZXRgIGlzIGEgb25lIG9mZiBpbnN0YW5jZSBmb3IgZWFjaCBzZXJ2ZXItc2lkZSByZW5kZXIgY3ljbGUuXFxuXFxuLSBBcmUgeW91IHRyeWluZyB0byByZXVzZSBpdCBhY3Jvc3MgcmVuZGVycz9cXG4tIEFyZSB5b3UgYWNjaWRlbnRhbGx5IGNhbGxpbmcgY29sbGVjdFN0eWxlcyB0d2ljZT9cXG5cXG5cIixcbiAgXCIzXCI6IFwiU3RyZWFtaW5nIFNTUiBpcyBvbmx5IHN1cHBvcnRlZCBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQ7IFBsZWFzZSBkbyBub3QgdHJ5IHRvIGNhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGJyb3dzZXIuXFxuXFxuXCIsXG4gIFwiNFwiOiBcIlRoZSBgU3R5bGVTaGVldE1hbmFnZXJgIGV4cGVjdHMgYSB2YWxpZCB0YXJnZXQgb3Igc2hlZXQgcHJvcCFcXG5cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgY2xpZW50IGFuZCBpcyB5b3VyIHRhcmdldCBmYWxzeT9cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgc2VydmVyIGFuZCBpcyB0aGUgc2hlZXQgZmFsc3k/XFxuXFxuXCIsXG4gIFwiNVwiOiBcIlRoZSBjbG9uZSBtZXRob2QgY2Fubm90IGJlIHVzZWQgb24gdGhlIGNsaWVudCFcXG5cXG4tIEFyZSB5b3UgcnVubmluZyBpbiBhIGNsaWVudC1saWtlIGVudmlyb25tZW50IG9uIHRoZSBzZXJ2ZXI/XFxuLSBBcmUgeW91IHRyeWluZyB0byBydW4gU1NSIG9uIHRoZSBjbGllbnQ/XFxuXFxuXCIsXG4gIFwiNlwiOiBcIlRyeWluZyB0byBpbnNlcnQgYSBuZXcgc3R5bGUgdGFnLCBidXQgdGhlIGdpdmVuIE5vZGUgaXMgdW5tb3VudGVkIVxcblxcbi0gQXJlIHlvdSB1c2luZyBhIGN1c3RvbSB0YXJnZXQgdGhhdCBpc24ndCBtb3VudGVkP1xcbi0gRG9lcyB5b3VyIGRvY3VtZW50IG5vdCBoYXZlIGEgdmFsaWQgaGVhZCBlbGVtZW50P1xcbi0gSGF2ZSB5b3UgYWNjaWRlbnRhbGx5IHJlbW92ZWQgYSBzdHlsZSB0YWcgbWFudWFsbHk/XFxuXFxuXCIsXG4gIFwiN1wiOiBcIlRoZW1lUHJvdmlkZXI6IFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciBcXFwidGhlbWVcXFwiIHByb3AgZnVuY3Rpb24sIGUuZy5cXG5cXG5gYGBqc1xcbnRoZW1lPXsoKSA9PiAoe30pfVxcbmBgYFxcblxcblwiLFxuICBcIjhcIjogXCJUaGVtZVByb3ZpZGVyOiBQbGVhc2UgbWFrZSB5b3VyIFxcXCJ0aGVtZVxcXCIgcHJvcCBhbiBvYmplY3QuXFxuXFxuXCIsXG4gIFwiOVwiOiBcIk1pc3NpbmcgZG9jdW1lbnQgYDxoZWFkPmBcXG5cXG5cIixcbiAgXCIxMFwiOiBcIkNhbm5vdCBmaW5kIGEgU3R5bGVTaGVldCBpbnN0YW5jZS4gVXN1YWxseSB0aGlzIGhhcHBlbnMgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBzdHlsZWQtY29tcG9uZW50cyBsb2FkZWQgYXQgb25jZS4gQ2hlY2sgb3V0IHRoaXMgaXNzdWUgZm9yIGhvdyB0byB0cm91Ymxlc2hvb3QgYW5kIGZpeCB0aGUgY29tbW9uIGNhc2VzIHdoZXJlIHRoaXMgc2l0dWF0aW9uIGNhbiBoYXBwZW46IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9pc3N1ZXMvMTk0MSNpc3N1ZWNvbW1lbnQtNDE3ODYyMDIxXFxuXFxuXCIsXG4gIFwiMTFcIjogXCJfVGhpcyBlcnJvciB3YXMgcmVwbGFjZWQgd2l0aCBhIGRldi10aW1lIHdhcm5pbmcsIGl0IHdpbGwgYmUgZGVsZXRlZCBmb3IgdjQgZmluYWwuXyBbY3JlYXRlR2xvYmFsU3R5bGVdIHJlY2VpdmVkIGNoaWxkcmVuIHdoaWNoIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBQbGVhc2UgdXNlIHRoZSBjb21wb25lbnQgd2l0aG91dCBwYXNzaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxcblxcblwiLFxuICBcIjEyXCI6IFwiSXQgc2VlbXMgeW91IGFyZSBpbnRlcnBvbGF0aW5nIGEga2V5ZnJhbWUgZGVjbGFyYXRpb24gKCVzKSBpbnRvIGFuIHVudGFnZ2VkIHN0cmluZy4gVGhpcyB3YXMgc3VwcG9ydGVkIGluIHN0eWxlZC1jb21wb25lbnRzIHYzLCBidXQgaXMgbm90IGxvbmdlciBzdXBwb3J0ZWQgaW4gdjQgYXMga2V5ZnJhbWVzIGFyZSBub3cgaW5qZWN0ZWQgb24tZGVtYW5kLiBQbGVhc2Ugd3JhcCB5b3VyIHN0cmluZyBpbiB0aGUgY3NzXFxcXGBcXFxcYCBoZWxwZXIgd2hpY2ggZW5zdXJlcyB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hcGkjY3NzXFxuXFxuXCIsXG4gIFwiMTNcIjogXCIlcyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXFxuXCJcbn0gOiB7fTtcblxuLyoqXG4gKiBzdXBlciBiYXNpYyB2ZXJzaW9uIG9mIHNwcmludGZcbiAqL1xuZnVuY3Rpb24gZm9ybWF0KCkge1xuICB2YXIgYSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIGIgPSBbXTtcblxuICBmb3IgKHZhciBjID0gMSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgYyA8IGxlbjsgYyArPSAxKSB7XG4gICAgYi5wdXNoKGFyZ3VtZW50cy5sZW5ndGggPD0gYyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tjXSk7XG4gIH1cblxuICBiLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICBhID0gYS5yZXBsYWNlKC8lW2Etel0vLCBkKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVycm9yIGZpbGUgb3V0IG9mIGVycm9ycy5tZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGEgc2ltcGxlIHdlYiBsaW5rIHRvIHRoZSBmdWxsIGVycm9yc1xuICogaW4gcHJvZHVjdGlvbiBtb2RlLlxuICovXG5cbnZhciBTdHlsZWRDb21wb25lbnRzRXJyb3IgPSBmdW5jdGlvbiAoX0Vycm9yKSB7XG4gIGluaGVyaXRzKFN0eWxlZENvbXBvbmVudHNFcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBTdHlsZWRDb21wb25lbnRzRXJyb3IoY29kZSkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlZENvbXBvbmVudHNFcnJvcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJwb2xhdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0Vycm9yLmNhbGwodGhpcywgJ0FuIGVycm9yIG9jY3VycmVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3N0eWxlZC1jb21wb25lbnRzL3NyYy91dGlscy9lcnJvcnMubWQjJyArIGNvZGUgKyAnIGZvciBtb3JlIGluZm9ybWF0aW9uLicgKyAoaW50ZXJwb2xhdGlvbnMubGVuZ3RoID4gMCA/ICcgQWRkaXRpb25hbCBhcmd1bWVudHM6ICcgKyBpbnRlcnBvbGF0aW9ucy5qb2luKCcsICcpIDogJycpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0Vycm9yLmNhbGwodGhpcywgZm9ybWF0LmFwcGx5KHVuZGVmaW5lZCwgW0VSUk9SU1tjb2RlXV0uY29uY2F0KGludGVycG9sYXRpb25zKSkudHJpbSgpKSk7XG4gICAgfVxuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcbiAgfVxuXG4gIHJldHVybiBTdHlsZWRDb21wb25lbnRzRXJyb3I7XG59KEVycm9yKTtcblxuLy8gXG52YXIgU0NfQ09NUE9ORU5UX0lEID0gL15bXlxcU1xcbl0qP1xcL1xcKiBzYy1jb21wb25lbnQtaWQ6XFxzKihcXFMrKVxccytcXCpcXC8vZ207XG5cbnZhciBleHRyYWN0Q29tcHMgPSAoZnVuY3Rpb24gKG1heWJlQ1NTKSB7XG4gIHZhciBjc3MgPSAnJyArIChtYXliZUNTUyB8fCAnJyk7IC8vIERlZmluaXRlbHkgYSBzdHJpbmcsIGFuZCBhIGNsb25lXG4gIHZhciBleGlzdGluZ0NvbXBvbmVudHMgPSBbXTtcbiAgY3NzLnJlcGxhY2UoU0NfQ09NUE9ORU5UX0lELCBmdW5jdGlvbiAobWF0Y2gsIGNvbXBvbmVudElkLCBtYXRjaEluZGV4KSB7XG4gICAgZXhpc3RpbmdDb21wb25lbnRzLnB1c2goeyBjb21wb25lbnRJZDogY29tcG9uZW50SWQsIG1hdGNoSW5kZXg6IG1hdGNoSW5kZXggfSk7XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9KTtcbiAgcmV0dXJuIGV4aXN0aW5nQ29tcG9uZW50cy5tYXAoZnVuY3Rpb24gKF9yZWYsIGkpIHtcbiAgICB2YXIgY29tcG9uZW50SWQgPSBfcmVmLmNvbXBvbmVudElkLFxuICAgICAgICBtYXRjaEluZGV4ID0gX3JlZi5tYXRjaEluZGV4O1xuXG4gICAgdmFyIG5leHRDb21wID0gZXhpc3RpbmdDb21wb25lbnRzW2kgKyAxXTtcbiAgICB2YXIgY3NzRnJvbURPTSA9IG5leHRDb21wID8gY3NzLnNsaWNlKG1hdGNoSW5kZXgsIG5leHRDb21wLm1hdGNoSW5kZXgpIDogY3NzLnNsaWNlKG1hdGNoSW5kZXgpO1xuICAgIHJldHVybiB7IGNvbXBvbmVudElkOiBjb21wb25lbnRJZCwgY3NzRnJvbURPTTogY3NzRnJvbURPTSB9O1xuICB9KTtcbn0pO1xuXG4vLyBcblxudmFyIENPTU1FTlRfUkVHRVggPSAvXlxccypcXC9cXC8uKiQvZ207XG5cbi8vIE5PVEU6IFRoaXMgc3R5bGlzIGluc3RhbmNlIGlzIG9ubHkgdXNlZCB0byBzcGxpdCBydWxlcyBmcm9tIFNTUidkIHN0eWxlIHRhZ3NcbnZhciBzdHlsaXNTcGxpdHRlciA9IG5ldyBTdHlsaXMoe1xuICBnbG9iYWw6IGZhbHNlLFxuICBjYXNjYWRlOiB0cnVlLFxuICBrZXlmcmFtZTogZmFsc2UsXG4gIHByZWZpeDogZmFsc2UsXG4gIGNvbXByZXNzOiBmYWxzZSxcbiAgc2VtaWNvbG9uOiB0cnVlXG59KTtcblxudmFyIHN0eWxpcyA9IG5ldyBTdHlsaXMoe1xuICBnbG9iYWw6IGZhbHNlLFxuICBjYXNjYWRlOiB0cnVlLFxuICBrZXlmcmFtZTogZmFsc2UsXG4gIHByZWZpeDogdHJ1ZSxcbiAgY29tcHJlc3M6IGZhbHNlLFxuICBzZW1pY29sb246IGZhbHNlIC8vIE5PVEU6IFRoaXMgbWVhbnMgXCJhdXRvY29tcGxldGUgbWlzc2luZyBzZW1pY29sb25zXCJcbn0pO1xuXG4vLyBXcmFwIGBpbnNlcnRSdWxlUGx1Z2luIHRvIGJ1aWxkIGEgbGlzdCBvZiBydWxlcyxcbi8vIGFuZCB0aGVuIG1ha2Ugb3VyIG93biBwbHVnaW4gdG8gcmV0dXJuIHRoZSBydWxlcy4gVGhpc1xuLy8gbWFrZXMgaXQgZWFzaWVyIHRvIGhvb2sgaW50byB0aGUgZXhpc3RpbmcgU1NSIGFyY2hpdGVjdHVyZVxuXG52YXIgcGFyc2luZ1J1bGVzID0gW107XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxudmFyIHJldHVyblJ1bGVzUGx1Z2luID0gZnVuY3Rpb24gcmV0dXJuUnVsZXNQbHVnaW4oY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gLTIpIHtcbiAgICB2YXIgcGFyc2VkUnVsZXMgPSBwYXJzaW5nUnVsZXM7XG4gICAgcGFyc2luZ1J1bGVzID0gW107XG4gICAgcmV0dXJuIHBhcnNlZFJ1bGVzO1xuICB9XG59O1xuXG52YXIgcGFyc2VSdWxlc1BsdWdpbiA9IF9pbnNlcnRSdWxlUGx1Z2luKGZ1bmN0aW9uIChydWxlKSB7XG4gIHBhcnNpbmdSdWxlcy5wdXNoKHJ1bGUpO1xufSk7XG5cbnZhciBfY29tcG9uZW50SWQgPSB2b2lkIDA7XG52YXIgX3NlbGVjdG9yID0gdm9pZCAwO1xudmFyIF9zZWxlY3RvclJlZ2V4cCA9IHZvaWQgMDtcblxudmFyIHNlbGZSZWZlcmVuY2VSZXBsYWNlciA9IGZ1bmN0aW9uIHNlbGZSZWZlcmVuY2VSZXBsYWNlcihtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgaWYgKFxuICAvLyB0aGUgZmlyc3Qgc2VsZi1yZWYgaXMgYWx3YXlzIHVudG91Y2hlZFxuICBvZmZzZXQgPiAwICYmXG4gIC8vIHRoZXJlIHNob3VsZCBiZSBhdCBsZWFzdCB0d28gc2VsZi1yZWZzIHRvIGRvIGEgcmVwbGFjZW1lbnQgKC5iID4gLmIpXG4gIHN0cmluZy5zbGljZSgwLCBvZmZzZXQpLmluZGV4T2YoX3NlbGVjdG9yKSAhPT0gLTEgJiZcbiAgLy8gbm8gY29uc2VjdXRpdmUgc2VsZiByZWZzICguYi5iKTsgdGhhdCBpcyBhIHByZWNlZGVuY2UgYm9vc3QgYW5kIHRyZWF0ZWQgZGlmZmVyZW50bHlcbiAgc3RyaW5nLnNsaWNlKG9mZnNldCAtIF9zZWxlY3Rvci5sZW5ndGgsIG9mZnNldCkgIT09IF9zZWxlY3Rvcikge1xuICAgIHJldHVybiAnLicgKyBfY29tcG9uZW50SWQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2g7XG59O1xuXG4vKipcbiAqIFdoZW4gd3JpdGluZyBhIHN0eWxlIGxpa2VcbiAqXG4gKiAmICsgJiB7XG4gKiAgIGNvbG9yOiByZWQ7XG4gKiB9XG4gKlxuICogVGhlIHNlY29uZCBhbXBlcnNhbmQgc2hvdWxkIGJlIGEgcmVmZXJlbmNlIHRvIHRoZSBzdGF0aWMgY29tcG9uZW50IGNsYXNzLiBzdHlsaXNcbiAqIGhhcyBubyBrbm93bGVkZ2Ugb2Ygc3RhdGljIGNsYXNzIHNvIHdlIGhhdmUgdG8gaW50ZWxsaWdlbnRseSByZXBsYWNlIHRoZSBiYXNlIHNlbGVjdG9yLlxuICovXG52YXIgc2VsZlJlZmVyZW5jZVJlcGxhY2VtZW50UGx1Z2luID0gZnVuY3Rpb24gc2VsZlJlZmVyZW5jZVJlcGxhY2VtZW50UGx1Z2luKGNvbnRleHQsIF8sIHNlbGVjdG9ycykge1xuICBpZiAoY29udGV4dCA9PT0gMiAmJiBzZWxlY3RvcnMubGVuZ3RoICYmIHNlbGVjdG9yc1swXS5sYXN0SW5kZXhPZihfc2VsZWN0b3IpID4gMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHNlbGVjdG9yc1swXSA9IHNlbGVjdG9yc1swXS5yZXBsYWNlKF9zZWxlY3RvclJlZ2V4cCwgc2VsZlJlZmVyZW5jZVJlcGxhY2VyKTtcbiAgfVxufTtcblxuc3R5bGlzLnVzZShbc2VsZlJlZmVyZW5jZVJlcGxhY2VtZW50UGx1Z2luLCBwYXJzZVJ1bGVzUGx1Z2luLCByZXR1cm5SdWxlc1BsdWdpbl0pO1xuc3R5bGlzU3BsaXR0ZXIudXNlKFtwYXJzZVJ1bGVzUGx1Z2luLCByZXR1cm5SdWxlc1BsdWdpbl0pO1xuXG52YXIgc3BsaXRCeVJ1bGVzID0gZnVuY3Rpb24gc3BsaXRCeVJ1bGVzKGNzcykge1xuICByZXR1cm4gc3R5bGlzU3BsaXR0ZXIoJycsIGNzcyk7XG59O1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlSdWxlcyhydWxlcywgc2VsZWN0b3IsIHByZWZpeCkge1xuICB2YXIgY29tcG9uZW50SWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6ICcmJztcblxuICB2YXIgZmxhdENTUyA9IHJ1bGVzLmpvaW4oJycpLnJlcGxhY2UoQ09NTUVOVF9SRUdFWCwgJycpOyAvLyByZXBsYWNlIEpTIGNvbW1lbnRzXG5cbiAgdmFyIGNzc1N0ciA9IHNlbGVjdG9yICYmIHByZWZpeCA/IHByZWZpeCArICcgJyArIHNlbGVjdG9yICsgJyB7ICcgKyBmbGF0Q1NTICsgJyB9JyA6IGZsYXRDU1M7XG5cbiAgLy8gc3R5bGlzIGhhcyBubyBjb25jZXB0IG9mIHN0YXRlIHRvIGJlIHBhc3NlZCB0byBwbHVnaW5zXG4gIC8vIGJ1dCBzaW5jZSBKUyBpcyBzaW5nbGU9dGhyZWFkZWQsIHdlIGNhbiByZWx5IG9uIHRoYXQgdG8gZW5zdXJlXG4gIC8vIHRoZXNlIHByb3BlcnRpZXMgc3RheSBpbiBzeW5jIHdpdGggdGhlIGN1cnJlbnQgc3R5bGlzIHJ1blxuICBfY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcbiAgX3NlbGVjdG9yID0gc2VsZWN0b3I7XG4gIF9zZWxlY3RvclJlZ2V4cCA9IG5ldyBSZWdFeHAoJ1xcXFwnICsgX3NlbGVjdG9yICsgJ1xcXFxiJywgJ2cnKTtcblxuICByZXR1cm4gc3R5bGlzKHByZWZpeCB8fCAhc2VsZWN0b3IgPyAnJyA6IHNlbGVjdG9yLCBjc3NTdHIpO1xufVxuXG4vLyBcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSwgbm8tdW5kZWYgKi9cblxudmFyIGdldE5vbmNlID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG59KTtcblxuLy8gXG4vKiBUaGVzZSBhcmUgaGVscGVycyBmb3IgdGhlIFN0eWxlVGFncyB0byBrZWVwIHRyYWNrIG9mIHRoZSBpbmplY3RlZFxuICogcnVsZSBuYW1lcyBmb3IgZWFjaCAoY29tcG9uZW50KSBJRCB0aGF0IHRoZXkncmUga2VlcGluZyB0cmFjayBvZi5cbiAqIFRoZXkncmUgY3J1Y2lhbCBmb3IgZGV0ZWN0aW5nIHdoZXRoZXIgYSBuYW1lIGhhcyBhbHJlYWR5IGJlZW5cbiAqIGluamVjdGVkLlxuICogKFRoaXMgZXhjbHVkZXMgcmVoeWRyYXRlZCBuYW1lcykgKi9cblxuLyogYWRkcyBhIG5ldyBJRDpuYW1lIHBhaXJpbmcgdG8gYSBuYW1lcyBkaWN0aW9uYXJ5ICovXG52YXIgYWRkTmFtZUZvcklkID0gZnVuY3Rpb24gYWRkTmFtZUZvcklkKG5hbWVzLCBpZCwgbmFtZSkge1xuICBpZiAobmFtZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHZhciBuYW1lc0ZvcklkID0gbmFtZXNbaWRdIHx8IChuYW1lc1tpZF0gPSBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgICBuYW1lc0ZvcklkW25hbWVdID0gdHJ1ZTtcbiAgfVxufTtcblxuLyogcmVzZXRzIGFuIElEIGVudGlyZWx5IGJ5IG92ZXJ3cml0aW5nIGl0IGluIHRoZSBkaWN0aW9uYXJ5ICovXG52YXIgcmVzZXRJZE5hbWVzID0gZnVuY3Rpb24gcmVzZXRJZE5hbWVzKG5hbWVzLCBpZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgbmFtZXNbaWRdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn07XG5cbi8qIGZhY3RvcnkgZm9yIGEgbmFtZXMgZGljdGlvbmFyeSBjaGVja2luZyB0aGUgZXhpc3RhbmNlIG9mIGFuIElEOm5hbWUgcGFpcmluZyAqL1xudmFyIGhhc05hbWVGb3JJZCA9IGZ1bmN0aW9uIGhhc05hbWVGb3JJZChuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGlkLCBuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWVzW2lkXSAhPT0gdW5kZWZpbmVkICYmIG5hbWVzW2lkXVtuYW1lXTtcbiAgfTtcbn07XG5cbi8qIHN0cmluZ2lmaWVzIG5hbWVzIGZvciB0aGUgaHRtbC9lbGVtZW50IG91dHB1dCAqL1xudmFyIHN0cmluZ2lmeU5hbWVzID0gZnVuY3Rpb24gc3RyaW5naWZ5TmFtZXMobmFtZXMpIHtcbiAgdmFyIHN0ciA9ICcnO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG4gIGZvciAodmFyIGlkIGluIG5hbWVzKSB7XG4gICAgc3RyICs9IE9iamVjdC5rZXlzKG5hbWVzW2lkXSkuam9pbignICcpICsgJyAnO1xuICB9XG4gIHJldHVybiBzdHIudHJpbSgpO1xufTtcblxuLyogY2xvbmVzIHRoZSBuZXN0ZWQgbmFtZXMgZGljdGlvbmFyeSAqL1xudmFyIGNsb25lTmFtZXMgPSBmdW5jdGlvbiBjbG9uZU5hbWVzKG5hbWVzKSB7XG4gIHZhciBjbG9uZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgZm9yICh2YXIgaWQgaW4gbmFtZXMpIHtcbiAgICBjbG9uZVtpZF0gPSBfZXh0ZW5kcyh7fSwgbmFtZXNbaWRdKTtcbiAgfVxuICByZXR1cm4gY2xvbmU7XG59O1xuXG4vLyBcblxuLyogVGhlc2UgYXJlIGhlbHBlcnMgdGhhdCBkZWFsIHdpdGggdGhlIGluc2VydFJ1bGUgKGFrYSBzcGVlZHkpIEFQSVxuICogVGhleSBhcmUgdXNlZCBpbiB0aGUgU3R5bGVUYWdzIGFuZCBzcGVjaWZpY2FsbHkgdGhlIHNwZWVkeSB0YWdcbiAqL1xuXG4vKiByZXRyaWV2ZSBhIHNoZWV0IGZvciBhIGdpdmVuIHN0eWxlIHRhZyAqL1xudmFyIHNoZWV0Rm9yVGFnID0gZnVuY3Rpb24gc2hlZXRGb3JUYWcodGFnKSB7XG4gIC8vICRGbG93Rml4TWVcbiAgaWYgKHRhZy5zaGVldCkgcmV0dXJuIHRhZy5zaGVldDtcblxuICAvKiBGaXJlZm94IHF1aXJrIHJlcXVpcmVzIHVzIHRvIHN0ZXAgdGhyb3VnaCBhbGwgc3R5bGVzaGVldHMgdG8gZmluZCBvbmUgb3duZWQgYnkgdGhlIGdpdmVuIHRhZyAqL1xuICB2YXIgc2l6ZSA9IHRhZy5vd25lckRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpICs9IDEpIHtcbiAgICB2YXIgc2hlZXQgPSB0YWcub3duZXJEb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgaWYgKHNoZWV0Lm93bmVyTm9kZSA9PT0gdGFnKSByZXR1cm4gc2hlZXQ7XG4gIH1cblxuICAvKiB3ZSBzaG91bGQgYWx3YXlzIGJlIGFibGUgdG8gZmluZCBhIHRhZyAqL1xuICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDEwKTtcbn07XG5cbi8qIGluc2VydCBhIHJ1bGUgc2FmZWx5IGFuZCByZXR1cm4gd2hldGhlciBpdCB3YXMgYWN0dWFsbHkgaW5qZWN0ZWQgKi9cbnZhciBzYWZlSW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIHNhZmVJbnNlcnRSdWxlKHNoZWV0LCBjc3NSdWxlLCBpbmRleCkge1xuICAvKiBhYm9ydCBlYXJseSBpZiBjc3NSdWxlIHN0cmluZyBpcyBmYWxzeSAqL1xuICBpZiAoIWNzc1J1bGUpIHJldHVybiBmYWxzZTtcblxuICB2YXIgbWF4SW5kZXggPSBzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG5cbiAgdHJ5IHtcbiAgICAvKiB1c2UgaW5zZXJ0UnVsZSBhbmQgY2FwIHBhc3NlZCBpbmRleCB3aXRoIG1heEluZGV4IChubyBvZiBjc3NSdWxlcykgKi9cbiAgICBzaGVldC5pbnNlcnRSdWxlKGNzc1J1bGUsIGluZGV4IDw9IG1heEluZGV4ID8gaW5kZXggOiBtYXhJbmRleCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8qIGFueSBlcnJvciBpbmRpY2F0ZXMgYW4gaW52YWxpZCBydWxlICovXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKiBkZWxldGVzIGBzaXplYCBydWxlcyBzdGFydGluZyBmcm9tIGByZW1vdmFsSW5kZXhgICovXG52YXIgZGVsZXRlUnVsZXMgPSBmdW5jdGlvbiBkZWxldGVSdWxlcyhzaGVldCwgcmVtb3ZhbEluZGV4LCBzaXplKSB7XG4gIHZhciBsb3dlckJvdW5kID0gcmVtb3ZhbEluZGV4IC0gc2l6ZTtcbiAgZm9yICh2YXIgaSA9IHJlbW92YWxJbmRleDsgaSA+IGxvd2VyQm91bmQ7IGkgLT0gMSkge1xuICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG4gIH1cbn07XG5cbi8vIFxuXG4vKiB0aGlzIG1hcmtlciBzZXBhcmF0ZXMgY29tcG9uZW50IHN0eWxlcyBhbmQgaXMgaW1wb3J0YW50IGZvciByZWh5ZHJhdGlvbiAqL1xudmFyIG1ha2VUZXh0TWFya2VyID0gZnVuY3Rpb24gbWFrZVRleHRNYXJrZXIoaWQpIHtcbiAgcmV0dXJuICdcXG4vKiBzYy1jb21wb25lbnQtaWQ6ICcgKyBpZCArICcgKi9cXG4nO1xufTtcblxuLyogYWRkIHVwIGFsbCBudW1iZXJzIGluIGFycmF5IHVwIHVudGlsIGFuZCBpbmNsdWRpbmcgdGhlIGluZGV4ICovXG52YXIgYWRkVXBVbnRpbEluZGV4ID0gZnVuY3Rpb24gYWRkVXBVbnRpbEluZGV4KHNpemVzLCBpbmRleCkge1xuICB2YXIgdG90YWxVcFRvSW5kZXggPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8PSBpbmRleDsgaSArPSAxKSB7XG4gICAgdG90YWxVcFRvSW5kZXggKz0gc2l6ZXNbaV07XG4gIH1cblxuICByZXR1cm4gdG90YWxVcFRvSW5kZXg7XG59O1xuXG4vKiBjcmVhdGUgYSBuZXcgc3R5bGUgdGFnIGFmdGVyIGxhc3RFbCAqL1xudmFyIG1ha2VTdHlsZVRhZyA9IGZ1bmN0aW9uIG1ha2VTdHlsZVRhZyh0YXJnZXQsIHRhZ0VsLCBpbnNlcnRCZWZvcmUpIHtcbiAgdmFyIHRhcmdldERvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIGlmICh0YXJnZXQpIHRhcmdldERvY3VtZW50ID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQ7ZWxzZSBpZiAodGFnRWwpIHRhcmdldERvY3VtZW50ID0gdGFnRWwub3duZXJEb2N1bWVudDtcblxuICB2YXIgZWwgPSB0YXJnZXREb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBlbC5zZXRBdHRyaWJ1dGUoU0NfQVRUUiwgJycpO1xuICBlbC5zZXRBdHRyaWJ1dGUoU0NfVkVSU0lPTl9BVFRSLCBcIjQuNC4xXCIpO1xuXG4gIHZhciBub25jZSA9IGdldE5vbmNlKCk7XG4gIGlmIChub25jZSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gIH1cblxuICAvKiBXb3JrIGFyb3VuZCBpbnNlcnRSdWxlIHF1aXJrIGluIEVkZ2VIVE1MICovXG4gIGVsLmFwcGVuZENoaWxkKHRhcmdldERvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG5cbiAgaWYgKHRhcmdldCAmJiAhdGFnRWwpIHtcbiAgICAvKiBBcHBlbmQgdG8gdGFyZ2V0IHdoZW4gbm8gcHJldmlvdXMgZWxlbWVudCB3YXMgcGFzc2VkICovXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXRhZ0VsIHx8ICF0YXJnZXQgfHwgIXRhZ0VsLnBhcmVudE5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoNik7XG4gICAgfVxuXG4gICAgLyogSW5zZXJ0IG5ldyBzdHlsZSB0YWcgYWZ0ZXIgdGhlIHByZXZpb3VzIG9uZSAqL1xuICAgIHRhZ0VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCBpbnNlcnRCZWZvcmUgPyB0YWdFbCA6IHRhZ0VsLm5leHRTaWJsaW5nKTtcbiAgfVxuXG4gIHJldHVybiBlbDtcbn07XG5cbi8qIHRha2VzIGEgY3NzIGZhY3RvcnkgZnVuY3Rpb24gYW5kIG91dHB1dHMgYW4gaHRtbCBzdHlsZWQgdGFnIGZhY3RvcnkgKi9cbnZhciB3cmFwQXNIdG1sVGFnID0gZnVuY3Rpb24gd3JhcEFzSHRtbFRhZyhjc3MsIG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYWRkaXRpb25hbEF0dHJzKSB7XG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgICB2YXIgYXR0cnMgPSBbbm9uY2UgJiYgJ25vbmNlPVwiJyArIG5vbmNlICsgJ1wiJywgU0NfQVRUUiArICc9XCInICsgc3RyaW5naWZ5TmFtZXMobmFtZXMpICsgJ1wiJywgU0NfVkVSU0lPTl9BVFRSICsgJz1cIicgKyBcIjQuNC4xXCIgKyAnXCInLCBhZGRpdGlvbmFsQXR0cnNdO1xuXG4gICAgdmFyIGh0bWxBdHRyID0gYXR0cnMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICByZXR1cm4gJzxzdHlsZSAnICsgaHRtbEF0dHIgKyAnPicgKyBjc3MoKSArICc8L3N0eWxlPic7XG4gIH07XG59O1xuXG4vKiB0YWtlcyBhIGNzcyBmYWN0b3J5IGZ1bmN0aW9uIGFuZCBvdXRwdXRzIGFuIGVsZW1lbnQgZmFjdG9yeSAqL1xudmFyIHdyYXBBc0VsZW1lbnQgPSBmdW5jdGlvbiB3cmFwQXNFbGVtZW50KGNzcywgbmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Byb3BzO1xuXG4gICAgdmFyIHByb3BzID0gKF9wcm9wcyA9IHt9LCBfcHJvcHNbU0NfQVRUUl0gPSBzdHJpbmdpZnlOYW1lcyhuYW1lcyksIF9wcm9wc1tTQ19WRVJTSU9OX0FUVFJdID0gXCI0LjQuMVwiLCBfcHJvcHMpO1xuXG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHByb3BzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIF9leHRlbmRzKHt9LCBwcm9wcywgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGNzcygpIH0gfSkpO1xuICB9O1xufTtcblxudmFyIGdldElkc0Zyb21NYXJrZXJzRmFjdG9yeSA9IGZ1bmN0aW9uIGdldElkc0Zyb21NYXJrZXJzRmFjdG9yeShtYXJrZXJzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcmtlcnMpO1xuICB9O1xufTtcblxuLyogc3BlZWR5IHRhZ3MgdXRpbGlzZSBpbnNlcnRSdWxlICovXG52YXIgbWFrZVNwZWVkeVRhZyA9IGZ1bmN0aW9uIG1ha2VTcGVlZHlUYWcoZWwsIGdldEltcG9ydFJ1bGVUYWcpIHtcbiAgdmFyIG5hbWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIG1hcmtlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgc2l6ZXMgPSBbXTtcblxuICB2YXIgZXh0cmFjdEltcG9ydCA9IGdldEltcG9ydFJ1bGVUYWcgIT09IHVuZGVmaW5lZDtcbiAgLyogaW5kaWNhdGVzIHdoZXRoZXIgZ2V0SW1wb3J0UnVsZVRhZyB3YXMgY2FsbGVkICovXG4gIHZhciB1c2VkSW1wb3J0UnVsZVRhZyA9IGZhbHNlO1xuXG4gIHZhciBpbnNlcnRNYXJrZXIgPSBmdW5jdGlvbiBpbnNlcnRNYXJrZXIoaWQpIHtcbiAgICB2YXIgcHJldiA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChwcmV2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIG1hcmtlcnNbaWRdID0gc2l6ZXMubGVuZ3RoO1xuICAgIHNpemVzLnB1c2goMCk7XG4gICAgcmVzZXRJZE5hbWVzKG5hbWVzLCBpZCk7XG5cbiAgICByZXR1cm4gbWFya2Vyc1tpZF07XG4gIH07XG5cbiAgdmFyIGluc2VydFJ1bGVzID0gZnVuY3Rpb24gaW5zZXJ0UnVsZXMoaWQsIGNzc1J1bGVzLCBuYW1lKSB7XG4gICAgdmFyIG1hcmtlciA9IGluc2VydE1hcmtlcihpZCk7XG4gICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcoZWwpO1xuICAgIHZhciBpbnNlcnRJbmRleCA9IGFkZFVwVW50aWxJbmRleChzaXplcywgbWFya2VyKTtcblxuICAgIHZhciBpbmplY3RlZFJ1bGVzID0gMDtcbiAgICB2YXIgaW1wb3J0UnVsZXMgPSBbXTtcbiAgICB2YXIgY3NzUnVsZXNTaXplID0gY3NzUnVsZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjc3NSdWxlc1NpemU7IGkgKz0gMSkge1xuICAgICAgdmFyIGNzc1J1bGUgPSBjc3NSdWxlc1tpXTtcbiAgICAgIHZhciBtYXlIYXZlSW1wb3J0ID0gZXh0cmFjdEltcG9ydDsgLyogQGltcG9ydCBydWxlcyBhcmUgcmVvcmRlcmVkIHRvIGFwcGVhciBmaXJzdCAqL1xuICAgICAgaWYgKG1heUhhdmVJbXBvcnQgJiYgY3NzUnVsZS5pbmRleE9mKCdAaW1wb3J0JykgIT09IC0xKSB7XG4gICAgICAgIGltcG9ydFJ1bGVzLnB1c2goY3NzUnVsZSk7XG4gICAgICB9IGVsc2UgaWYgKHNhZmVJbnNlcnRSdWxlKHNoZWV0LCBjc3NSdWxlLCBpbnNlcnRJbmRleCArIGluamVjdGVkUnVsZXMpKSB7XG4gICAgICAgIG1heUhhdmVJbXBvcnQgPSBmYWxzZTtcbiAgICAgICAgaW5qZWN0ZWRSdWxlcyArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChleHRyYWN0SW1wb3J0ICYmIGltcG9ydFJ1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHVzZWRJbXBvcnRSdWxlVGFnID0gdHJ1ZTtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGdldEltcG9ydFJ1bGVUYWcoKS5pbnNlcnRSdWxlcyhpZCArICctaW1wb3J0JywgaW1wb3J0UnVsZXMpO1xuICAgIH1cblxuICAgIHNpemVzW21hcmtlcl0gKz0gaW5qZWN0ZWRSdWxlczsgLyogYWRkIHVwIG5vIG9mIGluamVjdGVkIHJ1bGVzICovXG4gICAgYWRkTmFtZUZvcklkKG5hbWVzLCBpZCwgbmFtZSk7XG4gIH07XG5cbiAgdmFyIHJlbW92ZVJ1bGVzID0gZnVuY3Rpb24gcmVtb3ZlUnVsZXMoaWQpIHtcbiAgICB2YXIgbWFya2VyID0gbWFya2Vyc1tpZF07XG4gICAgaWYgKG1hcmtlciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGlmIChlbC5pc0Nvbm5lY3RlZCA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIHZhciBzaXplID0gc2l6ZXNbbWFya2VyXTtcbiAgICB2YXIgc2hlZXQgPSBzaGVldEZvclRhZyhlbCk7XG4gICAgdmFyIHJlbW92YWxJbmRleCA9IGFkZFVwVW50aWxJbmRleChzaXplcywgbWFya2VyKSAtIDE7XG4gICAgZGVsZXRlUnVsZXMoc2hlZXQsIHJlbW92YWxJbmRleCwgc2l6ZSk7XG4gICAgc2l6ZXNbbWFya2VyXSA9IDA7XG4gICAgcmVzZXRJZE5hbWVzKG5hbWVzLCBpZCk7XG5cbiAgICBpZiAoZXh0cmFjdEltcG9ydCAmJiB1c2VkSW1wb3J0UnVsZVRhZykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgZ2V0SW1wb3J0UnVsZVRhZygpLnJlbW92ZVJ1bGVzKGlkICsgJy1pbXBvcnQnKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICB2YXIgX3NoZWV0Rm9yVGFnID0gc2hlZXRGb3JUYWcoZWwpLFxuICAgICAgICBjc3NSdWxlcyA9IF9zaGVldEZvclRhZy5jc3NSdWxlcztcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKHZhciBpZCBpbiBtYXJrZXJzKSB7XG4gICAgICBzdHIgKz0gbWFrZVRleHRNYXJrZXIoaWQpO1xuICAgICAgdmFyIG1hcmtlciA9IG1hcmtlcnNbaWRdO1xuICAgICAgdmFyIGVuZCA9IGFkZFVwVW50aWxJbmRleChzaXplcywgbWFya2VyKTtcbiAgICAgIHZhciBzaXplID0gc2l6ZXNbbWFya2VyXTtcbiAgICAgIGZvciAodmFyIGkgPSBlbmQgLSBzaXplOyBpIDwgZW5kOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIHJ1bGUgPSBjc3NSdWxlc1tpXTtcbiAgICAgICAgaWYgKHJ1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0ciArPSBydWxlLmNzc1RleHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcig1KTtcbiAgICB9LFxuXG4gICAgY3NzOiBjc3MsXG4gICAgZ2V0SWRzOiBnZXRJZHNGcm9tTWFya2Vyc0ZhY3RvcnkobWFya2VycyksXG4gICAgaGFzTmFtZUZvcklkOiBoYXNOYW1lRm9ySWQobmFtZXMpLFxuICAgIGluc2VydE1hcmtlcjogaW5zZXJ0TWFya2VyLFxuICAgIGluc2VydFJ1bGVzOiBpbnNlcnRSdWxlcyxcbiAgICByZW1vdmVSdWxlczogcmVtb3ZlUnVsZXMsXG4gICAgc2VhbGVkOiBmYWxzZSxcbiAgICBzdHlsZVRhZzogZWwsXG4gICAgdG9FbGVtZW50OiB3cmFwQXNFbGVtZW50KGNzcywgbmFtZXMpLFxuICAgIHRvSFRNTDogd3JhcEFzSHRtbFRhZyhjc3MsIG5hbWVzKVxuICB9O1xufTtcblxudmFyIG1ha2VUZXh0Tm9kZSA9IGZ1bmN0aW9uIG1ha2VUZXh0Tm9kZSh0YXJnZXREb2N1bWVudCwgaWQpIHtcbiAgcmV0dXJuIHRhcmdldERvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1ha2VUZXh0TWFya2VyKGlkKSk7XG59O1xuXG52YXIgbWFrZUJyb3dzZXJUYWcgPSBmdW5jdGlvbiBtYWtlQnJvd3NlclRhZyhlbCwgZ2V0SW1wb3J0UnVsZVRhZykge1xuICB2YXIgbmFtZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbWFya2VycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgdmFyIGV4dHJhY3RJbXBvcnQgPSBnZXRJbXBvcnRSdWxlVGFnICE9PSB1bmRlZmluZWQ7XG5cbiAgLyogaW5kaWNhdGVzIHdoZXRoZXIgZ2V0SW1wb3J0UnVsZVRhZyB3YXMgY2FsbGVkICovXG4gIHZhciB1c2VkSW1wb3J0UnVsZVRhZyA9IGZhbHNlO1xuXG4gIHZhciBpbnNlcnRNYXJrZXIgPSBmdW5jdGlvbiBpbnNlcnRNYXJrZXIoaWQpIHtcbiAgICB2YXIgcHJldiA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChwcmV2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIG1hcmtlcnNbaWRdID0gbWFrZVRleHROb2RlKGVsLm93bmVyRG9jdW1lbnQsIGlkKTtcbiAgICBlbC5hcHBlbmRDaGlsZChtYXJrZXJzW2lkXSk7XG4gICAgbmFtZXNbaWRdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHJldHVybiBtYXJrZXJzW2lkXTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhpZCwgY3NzUnVsZXMsIG5hbWUpIHtcbiAgICB2YXIgbWFya2VyID0gaW5zZXJ0TWFya2VyKGlkKTtcbiAgICB2YXIgaW1wb3J0UnVsZXMgPSBbXTtcbiAgICB2YXIgY3NzUnVsZXNTaXplID0gY3NzUnVsZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjc3NSdWxlc1NpemU7IGkgKz0gMSkge1xuICAgICAgdmFyIHJ1bGUgPSBjc3NSdWxlc1tpXTtcbiAgICAgIHZhciBtYXlIYXZlSW1wb3J0ID0gZXh0cmFjdEltcG9ydDtcbiAgICAgIGlmIChtYXlIYXZlSW1wb3J0ICYmIHJ1bGUuaW5kZXhPZignQGltcG9ydCcpICE9PSAtMSkge1xuICAgICAgICBpbXBvcnRSdWxlcy5wdXNoKHJ1bGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF5SGF2ZUltcG9ydCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2VwYXJhdG9yID0gaSA9PT0gY3NzUnVsZXNTaXplIC0gMSA/ICcnIDogJyAnO1xuICAgICAgICBtYXJrZXIuYXBwZW5kRGF0YSgnJyArIHJ1bGUgKyBzZXBhcmF0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFkZE5hbWVGb3JJZChuYW1lcywgaWQsIG5hbWUpO1xuXG4gICAgaWYgKGV4dHJhY3RJbXBvcnQgJiYgaW1wb3J0UnVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdXNlZEltcG9ydFJ1bGVUYWcgPSB0cnVlO1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgZ2V0SW1wb3J0UnVsZVRhZygpLmluc2VydFJ1bGVzKGlkICsgJy1pbXBvcnQnLCBpbXBvcnRSdWxlcyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZW1vdmVSdWxlcyA9IGZ1bmN0aW9uIHJlbW92ZVJ1bGVzKGlkKSB7XG4gICAgdmFyIG1hcmtlciA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChtYXJrZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgLyogY3JlYXRlIG5ldyBlbXB0eSB0ZXh0IG5vZGUgYW5kIHJlcGxhY2UgdGhlIGN1cnJlbnQgb25lICovXG4gICAgdmFyIG5ld01hcmtlciA9IG1ha2VUZXh0Tm9kZShlbC5vd25lckRvY3VtZW50LCBpZCk7XG4gICAgZWwucmVwbGFjZUNoaWxkKG5ld01hcmtlciwgbWFya2VyKTtcbiAgICBtYXJrZXJzW2lkXSA9IG5ld01hcmtlcjtcbiAgICByZXNldElkTmFtZXMobmFtZXMsIGlkKTtcblxuICAgIGlmIChleHRyYWN0SW1wb3J0ICYmIHVzZWRJbXBvcnRSdWxlVGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBnZXRJbXBvcnRSdWxlVGFnKCkucmVtb3ZlUnVsZXMoaWQgKyAnLWltcG9ydCcpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIHZhciBzdHIgPSAnJztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKHZhciBpZCBpbiBtYXJrZXJzKSB7XG4gICAgICBzdHIgKz0gbWFya2Vyc1tpZF0uZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcig1KTtcbiAgICB9LFxuXG4gICAgY3NzOiBjc3MsXG4gICAgZ2V0SWRzOiBnZXRJZHNGcm9tTWFya2Vyc0ZhY3RvcnkobWFya2VycyksXG4gICAgaGFzTmFtZUZvcklkOiBoYXNOYW1lRm9ySWQobmFtZXMpLFxuICAgIGluc2VydE1hcmtlcjogaW5zZXJ0TWFya2VyLFxuICAgIGluc2VydFJ1bGVzOiBpbnNlcnRSdWxlcyxcbiAgICByZW1vdmVSdWxlczogcmVtb3ZlUnVsZXMsXG4gICAgc2VhbGVkOiBmYWxzZSxcbiAgICBzdHlsZVRhZzogZWwsXG4gICAgdG9FbGVtZW50OiB3cmFwQXNFbGVtZW50KGNzcywgbmFtZXMpLFxuICAgIHRvSFRNTDogd3JhcEFzSHRtbFRhZyhjc3MsIG5hbWVzKVxuICB9O1xufTtcblxudmFyIG1ha2VTZXJ2ZXJUYWcgPSBmdW5jdGlvbiBtYWtlU2VydmVyVGFnKG5hbWVzQXJnLCBtYXJrZXJzQXJnKSB7XG4gIHZhciBuYW1lcyA9IG5hbWVzQXJnID09PSB1bmRlZmluZWQgPyBPYmplY3QuY3JlYXRlKG51bGwpIDogbmFtZXNBcmc7XG4gIHZhciBtYXJrZXJzID0gbWFya2Vyc0FyZyA9PT0gdW5kZWZpbmVkID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IG1hcmtlcnNBcmc7XG5cbiAgdmFyIGluc2VydE1hcmtlciA9IGZ1bmN0aW9uIGluc2VydE1hcmtlcihpZCkge1xuICAgIHZhciBwcmV2ID0gbWFya2Vyc1tpZF07XG4gICAgaWYgKHByZXYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmtlcnNbaWRdID0gWycnXTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhpZCwgY3NzUnVsZXMsIG5hbWUpIHtcbiAgICB2YXIgbWFya2VyID0gaW5zZXJ0TWFya2VyKGlkKTtcbiAgICBtYXJrZXJbMF0gKz0gY3NzUnVsZXMuam9pbignICcpO1xuICAgIGFkZE5hbWVGb3JJZChuYW1lcywgaWQsIG5hbWUpO1xuICB9O1xuXG4gIHZhciByZW1vdmVSdWxlcyA9IGZ1bmN0aW9uIHJlbW92ZVJ1bGVzKGlkKSB7XG4gICAgdmFyIG1hcmtlciA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChtYXJrZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIG1hcmtlclswXSA9ICcnO1xuICAgIHJlc2V0SWROYW1lcyhuYW1lcywgaWQpO1xuICB9O1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKHZhciBpZCBpbiBtYXJrZXJzKSB7XG4gICAgICB2YXIgY3NzRm9ySWQgPSBtYXJrZXJzW2lkXVswXTtcbiAgICAgIGlmIChjc3NGb3JJZCkge1xuICAgICAgICBzdHIgKz0gbWFrZVRleHRNYXJrZXIoaWQpICsgY3NzRm9ySWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgdmFyIGNsb25lID0gZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgdmFyIG5hbWVzQ2xvbmUgPSBjbG9uZU5hbWVzKG5hbWVzKTtcbiAgICB2YXIgbWFya2Vyc0Nsb25lID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKHZhciBpZCBpbiBtYXJrZXJzKSB7XG4gICAgICBtYXJrZXJzQ2xvbmVbaWRdID0gW21hcmtlcnNbaWRdWzBdXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZVNlcnZlclRhZyhuYW1lc0Nsb25lLCBtYXJrZXJzQ2xvbmUpO1xuICB9O1xuXG4gIHZhciB0YWcgPSB7XG4gICAgY2xvbmU6IGNsb25lLFxuICAgIGNzczogY3NzLFxuICAgIGdldElkczogZ2V0SWRzRnJvbU1hcmtlcnNGYWN0b3J5KG1hcmtlcnMpLFxuICAgIGhhc05hbWVGb3JJZDogaGFzTmFtZUZvcklkKG5hbWVzKSxcbiAgICBpbnNlcnRNYXJrZXI6IGluc2VydE1hcmtlcixcbiAgICBpbnNlcnRSdWxlczogaW5zZXJ0UnVsZXMsXG4gICAgcmVtb3ZlUnVsZXM6IHJlbW92ZVJ1bGVzLFxuICAgIHNlYWxlZDogZmFsc2UsXG4gICAgc3R5bGVUYWc6IG51bGwsXG4gICAgdG9FbGVtZW50OiB3cmFwQXNFbGVtZW50KGNzcywgbmFtZXMpLFxuICAgIHRvSFRNTDogd3JhcEFzSHRtbFRhZyhjc3MsIG5hbWVzKVxuICB9O1xuXG4gIHJldHVybiB0YWc7XG59O1xuXG52YXIgbWFrZVRhZyA9IGZ1bmN0aW9uIG1ha2VUYWcodGFyZ2V0LCB0YWdFbCwgZm9yY2VTZXJ2ZXIsIGluc2VydEJlZm9yZSwgZ2V0SW1wb3J0UnVsZVRhZykge1xuICBpZiAoSVNfQlJPV1NFUiAmJiAhZm9yY2VTZXJ2ZXIpIHtcbiAgICB2YXIgZWwgPSBtYWtlU3R5bGVUYWcodGFyZ2V0LCB0YWdFbCwgaW5zZXJ0QmVmb3JlKTtcblxuICAgIGlmIChESVNBQkxFX1NQRUVEWSkge1xuICAgICAgcmV0dXJuIG1ha2VCcm93c2VyVGFnKGVsLCBnZXRJbXBvcnRSdWxlVGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1ha2VTcGVlZHlUYWcoZWwsIGdldEltcG9ydFJ1bGVUYWcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlU2VydmVyVGFnKCk7XG59O1xuXG52YXIgcmVoeWRyYXRlID0gZnVuY3Rpb24gcmVoeWRyYXRlKHRhZywgZWxzLCBleHRyYWN0ZWQpIHtcbiAgLyogYWRkIGFsbCBleHRyYWN0ZWQgY29tcG9uZW50cyB0byB0aGUgbmV3IHRhZyAqL1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXh0cmFjdGVkLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgdmFyIF9leHRyYWN0ZWQkaSA9IGV4dHJhY3RlZFtpXSxcbiAgICAgICAgY29tcG9uZW50SWQgPSBfZXh0cmFjdGVkJGkuY29tcG9uZW50SWQsXG4gICAgICAgIGNzc0Zyb21ET00gPSBfZXh0cmFjdGVkJGkuY3NzRnJvbURPTTtcblxuICAgIHZhciBjc3NSdWxlcyA9IHNwbGl0QnlSdWxlcyhjc3NGcm9tRE9NKTtcbiAgICB0YWcuaW5zZXJ0UnVsZXMoY29tcG9uZW50SWQsIGNzc1J1bGVzKTtcbiAgfVxuXG4gIC8qIHJlbW92ZSBvbGQgSFRNTFN0eWxlRWxlbWVudHMsIHNpbmNlIHRoZXkgaGF2ZSBiZWVuIHJlaHlkcmF0ZWQgKi9cbiAgZm9yICh2YXIgX2kgPSAwLCBfbGVuID0gZWxzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSArPSAxKSB7XG4gICAgdmFyIGVsID0gZWxzW19pXTtcbiAgICBpZiAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBcblxudmFyIFNQTElUX1JFR0VYID0gL1xccysvO1xuXG4vKiBkZXRlcm1pbmUgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNvbXBvbmVudHMgYmVmb3JlIHRhZ3MgYXJlIHNoYXJkZWQgKi9cbnZhciBNQVhfU0laRSA9IHZvaWQgMDtcbmlmIChJU19CUk9XU0VSKSB7XG4gIC8qIGluIHNwZWVkeSBtb2RlIHdlIGNhbiBrZWVwIGEgbG90IG1vcmUgcnVsZXMgaW4gYSBzaGVldCBiZWZvcmUgYSBzbG93ZG93biBjYW4gYmUgZXhwZWN0ZWQgKi9cbiAgTUFYX1NJWkUgPSBESVNBQkxFX1NQRUVEWSA/IDQwIDogMTAwMDtcbn0gZWxzZSB7XG4gIC8qIGZvciBzZXJ2ZXJzIHdlIGRvIG5vdCBuZWVkIHRvIHNoYXJkIGF0IGFsbCAqL1xuICBNQVhfU0laRSA9IC0xO1xufVxuXG52YXIgc2hlZXRSdW5uaW5nSWQgPSAwO1xudmFyIG1hc3RlciA9IHZvaWQgMDtcblxudmFyIFN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgLyogYSBtYXAgZnJvbSBpZHMgdG8gdGFncyAqL1xuXG4gIC8qIGRlZmVycmVkIHJ1bGVzIGZvciBhIGdpdmVuIGlkICovXG5cbiAgLyogdGhpcyBpcyB1c2VkIGZvciBub3QgcmVpbmplY3RpbmcgcnVsZXMgdmlhIGhhc05hbWVGb3JJZCgpICovXG5cbiAgLyogd2hlbiBydWxlcyBmb3IgYW4gaWQgYXJlIHJlbW92ZWQgdXNpbmcgcmVtb3ZlKCkgd2UgaGF2ZSB0byBpZ25vcmUgcmVoeWRyYXRlZE5hbWVzIGZvciBpdCAqL1xuXG4gIC8qIGEgbGlzdCBvZiB0YWdzIGJlbG9uZ2luZyB0byB0aGlzIFN0eWxlU2hlZXQgKi9cblxuICAvKiBhIHRhZyBmb3IgaW1wb3J0IHJ1bGVzICovXG5cbiAgLyogY3VycmVudCBjYXBhY2l0eSB1bnRpbCBhIG5ldyB0YWcgbXVzdCBiZSBjcmVhdGVkICovXG5cbiAgLyogY2hpbGRyZW4gKGFrYSBjbG9uZXMpIG9mIHRoaXMgU3R5bGVTaGVldCBpbmhlcml0aW5nIGFsbCBhbmQgZnV0dXJlIGluamVjdGlvbnMgKi9cblxuICBmdW5jdGlvbiBTdHlsZVNoZWV0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBJU19CUk9XU0VSID8gZG9jdW1lbnQuaGVhZCA6IG51bGw7XG4gICAgdmFyIGZvcmNlU2VydmVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0KTtcblxuICAgIHRoaXMuZ2V0SW1wb3J0UnVsZVRhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbXBvcnRSdWxlVGFnID0gX3RoaXMuaW1wb3J0UnVsZVRhZztcblxuICAgICAgaWYgKGltcG9ydFJ1bGVUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gaW1wb3J0UnVsZVRhZztcbiAgICAgIH1cblxuICAgICAgdmFyIGZpcnN0VGFnID0gX3RoaXMudGFnc1swXTtcbiAgICAgIHZhciBpbnNlcnRCZWZvcmUgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gX3RoaXMuaW1wb3J0UnVsZVRhZyA9IG1ha2VUYWcoX3RoaXMudGFyZ2V0LCBmaXJzdFRhZyA/IGZpcnN0VGFnLnN0eWxlVGFnIDogbnVsbCwgX3RoaXMuZm9yY2VTZXJ2ZXIsIGluc2VydEJlZm9yZSk7XG4gICAgfTtcblxuICAgIHNoZWV0UnVubmluZ0lkICs9IDE7XG4gICAgdGhpcy5pZCA9IHNoZWV0UnVubmluZ0lkO1xuICAgIHRoaXMuZm9yY2VTZXJ2ZXIgPSBmb3JjZVNlcnZlcjtcbiAgICB0aGlzLnRhcmdldCA9IGZvcmNlU2VydmVyID8gbnVsbCA6IHRhcmdldDtcbiAgICB0aGlzLnRhZ01hcCA9IHt9O1xuICAgIHRoaXMuZGVmZXJyZWQgPSB7fTtcbiAgICB0aGlzLnJlaHlkcmF0ZWROYW1lcyA9IHt9O1xuICAgIHRoaXMuaWdub3JlUmVoeWRyYXRlZE5hbWVzID0ge307XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jYXBhY2l0eSA9IDE7XG4gICAgdGhpcy5jbG9uZXMgPSBbXTtcbiAgfVxuXG4gIC8qIHJlaHlkcmF0ZSBhbGwgU1NSJ2Qgc3R5bGUgdGFncyAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUucmVoeWRyYXRlID0gZnVuY3Rpb24gcmVoeWRyYXRlJCQxKCkge1xuICAgIGlmICghSVNfQlJPV1NFUiB8fCB0aGlzLmZvcmNlU2VydmVyKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBlbHMgPSBbXTtcbiAgICB2YXIgZXh0cmFjdGVkID0gW107XG4gICAgdmFyIGlzU3RyZWFtZWQgPSBmYWxzZTtcblxuICAgIC8qIHJldHJpZXZlIGFsbCBvZiBvdXIgU1NSIHN0eWxlIGVsZW1lbnRzIGZyb20gdGhlIERPTSAqL1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlWycgKyBTQ19BVFRSICsgJ11bJyArIFNDX1ZFUlNJT05fQVRUUiArICc9XCInICsgXCI0LjQuMVwiICsgJ1wiXScpO1xuXG4gICAgdmFyIG5vZGVzU2l6ZSA9IG5vZGVzLmxlbmd0aDtcblxuICAgIC8qIGFib3J0IHJlaHlkcmF0aW9uIGlmIG5vIHByZXZpb3VzIHN0eWxlIHRhZ3Mgd2VyZSBmb3VuZCAqL1xuICAgIGlmICghbm9kZXNTaXplKSByZXR1cm4gdGhpcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXNTaXplOyBpICs9IDEpIHtcbiAgICAgIHZhciBlbCA9IG5vZGVzW2ldO1xuXG4gICAgICAvKiBjaGVjayBpZiBzdHlsZSB0YWcgaXMgYSBzdHJlYW1lZCB0YWcgKi9cbiAgICAgIGlmICghaXNTdHJlYW1lZCkgaXNTdHJlYW1lZCA9ICEhZWwuZ2V0QXR0cmlidXRlKFNDX1NUUkVBTV9BVFRSKTtcblxuICAgICAgLyogcmV0cmlldmUgYWxsIGNvbXBvbmVudCBuYW1lcyAqL1xuICAgICAgdmFyIGVsTmFtZXMgPSAoZWwuZ2V0QXR0cmlidXRlKFNDX0FUVFIpIHx8ICcnKS50cmltKCkuc3BsaXQoU1BMSVRfUkVHRVgpO1xuICAgICAgdmFyIGVsTmFtZXNTaXplID0gZWxOYW1lcy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBqID0gMCwgbmFtZTsgaiA8IGVsTmFtZXNTaXplOyBqICs9IDEpIHtcbiAgICAgICAgbmFtZSA9IGVsTmFtZXNbal07XG4gICAgICAgIC8qIGFkZCByZWh5ZHJhdGVkIG5hbWUgdG8gc2hlZXQgdG8gYXZvaWQgcmUtYWRkaW5nIHN0eWxlcyAqL1xuICAgICAgICB0aGlzLnJlaHlkcmF0ZWROYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIGV4dHJhY3QgYWxsIGNvbXBvbmVudHMgYW5kIHRoZWlyIENTUyAqL1xuICAgICAgZXh0cmFjdGVkLnB1c2guYXBwbHkoZXh0cmFjdGVkLCBleHRyYWN0Q29tcHMoZWwudGV4dENvbnRlbnQpKTtcblxuICAgICAgLyogc3RvcmUgb3JpZ2luYWwgSFRNTFN0eWxlRWxlbWVudCAqL1xuICAgICAgZWxzLnB1c2goZWwpO1xuICAgIH1cblxuICAgIC8qIGFib3J0IHJlaHlkcmF0aW9uIGlmIG5vdGhpbmcgd2FzIGV4dHJhY3RlZCAqL1xuICAgIHZhciBleHRyYWN0ZWRTaXplID0gZXh0cmFjdGVkLmxlbmd0aDtcbiAgICBpZiAoIWV4dHJhY3RlZFNpemUpIHJldHVybiB0aGlzO1xuXG4gICAgLyogY3JlYXRlIGEgdGFnIHRvIGJlIHVzZWQgZm9yIHJlaHlkcmF0aW9uICovXG4gICAgdmFyIHRhZyA9IHRoaXMubWFrZVRhZyhudWxsKTtcblxuICAgIHJlaHlkcmF0ZSh0YWcsIGVscywgZXh0cmFjdGVkKTtcblxuICAgIC8qIHJlc2V0IGNhcGFjaXR5IGFuZCBhZGp1c3QgTUFYX1NJWkUgYnkgdGhlIGluaXRpYWwgc2l6ZSBvZiB0aGUgcmVoeWRyYXRpb24gKi9cbiAgICB0aGlzLmNhcGFjaXR5ID0gTWF0aC5tYXgoMSwgTUFYX1NJWkUgLSBleHRyYWN0ZWRTaXplKTtcbiAgICB0aGlzLnRhZ3MucHVzaCh0YWcpO1xuXG4gICAgLyogcmV0cmlldmUgYWxsIGNvbXBvbmVudCBpZHMgKi9cbiAgICBmb3IgKHZhciBfaiA9IDA7IF9qIDwgZXh0cmFjdGVkU2l6ZTsgX2ogKz0gMSkge1xuICAgICAgdGhpcy50YWdNYXBbZXh0cmFjdGVkW19qXS5jb21wb25lbnRJZF0gPSB0YWc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyogcmV0cmlldmUgYSBcIm1hc3RlclwiIGluc3RhbmNlIG9mIFN0eWxlU2hlZXQgd2hpY2ggaXMgdHlwaWNhbGx5IHVzZWQgd2hlbiBubyBvdGhlciBpcyBhdmFpbGFibGVcbiAgICogVGhlIG1hc3RlciBTdHlsZVNoZWV0IGlzIHRhcmdldGVkIGJ5IGNyZWF0ZUdsb2JhbFN0eWxlLCBrZXlmcmFtZXMsIGFuZCBjb21wb25lbnRzIG91dHNpZGUgb2YgYW55XG4gICAgKiBTdHlsZVNoZWV0TWFuYWdlcidzIGNvbnRleHQgKi9cblxuXG4gIC8qIHJlc2V0IHRoZSBpbnRlcm5hbCBcIm1hc3RlclwiIGluc3RhbmNlICovXG4gIFN0eWxlU2hlZXQucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB2YXIgZm9yY2VTZXJ2ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgbWFzdGVyID0gbmV3IFN0eWxlU2hlZXQodW5kZWZpbmVkLCBmb3JjZVNlcnZlcikucmVoeWRyYXRlKCk7XG4gIH07XG5cbiAgLyogYWRkcyBcImNoaWxkcmVuXCIgdG8gdGhlIFN0eWxlU2hlZXQgdGhhdCBpbmhlcml0IGFsbCBvZiB0aGUgcGFyZW50cycgcnVsZXNcbiAgICogd2hpbGUgdGhlaXIgb3duIHJ1bGVzIGRvIG5vdCBhZmZlY3QgdGhlIHBhcmVudCAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICB2YXIgc2hlZXQgPSBuZXcgU3R5bGVTaGVldCh0aGlzLnRhcmdldCwgdGhpcy5mb3JjZVNlcnZlcik7XG5cbiAgICAvKiBhZGQgdG8gY2xvbmUgYXJyYXkgKi9cbiAgICB0aGlzLmNsb25lcy5wdXNoKHNoZWV0KTtcblxuICAgIC8qIGNsb25lIGFsbCB0YWdzICovXG4gICAgc2hlZXQudGFncyA9IHRoaXMudGFncy5tYXAoZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIGlkcyA9IHRhZy5nZXRJZHMoKTtcbiAgICAgIHZhciBuZXdUYWcgPSB0YWcuY2xvbmUoKTtcblxuICAgICAgLyogcmVjb25zdHJ1Y3QgdGFnTWFwICovXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzaGVldC50YWdNYXBbaWRzW2ldXSA9IG5ld1RhZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1RhZztcbiAgICB9KTtcblxuICAgIC8qIGNsb25lIG90aGVyIG1hcHMgKi9cbiAgICBzaGVldC5yZWh5ZHJhdGVkTmFtZXMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5yZWh5ZHJhdGVkTmFtZXMpO1xuICAgIHNoZWV0LmRlZmVycmVkID0gX2V4dGVuZHMoe30sIHRoaXMuZGVmZXJyZWQpO1xuXG4gICAgcmV0dXJuIHNoZWV0O1xuICB9O1xuXG4gIC8qIGZvcmNlIFN0eWxlU2hlZXQgdG8gY3JlYXRlIGEgbmV3IHRhZyBvbiB0aGUgbmV4dCBpbmplY3Rpb24gKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnNlYWxBbGxUYWdzID0gZnVuY3Rpb24gc2VhbEFsbFRhZ3MoKSB7XG4gICAgdGhpcy5jYXBhY2l0eSA9IDE7XG5cbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHRhZy5zZWFsZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLm1ha2VUYWcgPSBmdW5jdGlvbiBtYWtlVGFnJCQxKHRhZykge1xuICAgIHZhciBsYXN0RWwgPSB0YWcgPyB0YWcuc3R5bGVUYWcgOiBudWxsO1xuICAgIHZhciBpbnNlcnRCZWZvcmUgPSBmYWxzZTtcblxuICAgIHJldHVybiBtYWtlVGFnKHRoaXMudGFyZ2V0LCBsYXN0RWwsIHRoaXMuZm9yY2VTZXJ2ZXIsIGluc2VydEJlZm9yZSwgdGhpcy5nZXRJbXBvcnRSdWxlVGFnKTtcbiAgfTtcblxuICAvKiBnZXQgYSB0YWcgZm9yIGEgZ2l2ZW4gY29tcG9uZW50SWQsIGFzc2lnbiB0aGUgY29tcG9uZW50SWQgdG8gb25lLCBvciBzaGFyZCAqL1xuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5nZXRUYWdGb3JJZCA9IGZ1bmN0aW9uIGdldFRhZ0ZvcklkKGlkKSB7XG4gICAgLyogc2ltcGx5IHJldHVybiBhIHRhZywgd2hlbiB0aGUgY29tcG9uZW50SWQgd2FzIGFscmVhZHkgYXNzaWduZWQgb25lICovXG4gICAgdmFyIHByZXYgPSB0aGlzLnRhZ01hcFtpZF07XG4gICAgaWYgKHByZXYgIT09IHVuZGVmaW5lZCAmJiAhcHJldi5zZWFsZWQpIHtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgLyogc2hhcmQgKGNyZWF0ZSBhIG5ldyB0YWcpIGlmIHRoZSB0YWcgaXMgZXhoYXVzdGVkIChTZWUgTUFYX1NJWkUpICovXG4gICAgdGhpcy5jYXBhY2l0eSAtPSAxO1xuXG4gICAgaWYgKHRoaXMuY2FwYWNpdHkgPT09IDApIHtcbiAgICAgIHRoaXMuY2FwYWNpdHkgPSBNQVhfU0laRTtcbiAgICAgIHRhZyA9IHRoaXMubWFrZVRhZyh0YWcpO1xuICAgICAgdGhpcy50YWdzLnB1c2godGFnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50YWdNYXBbaWRdID0gdGFnO1xuICB9O1xuXG4gIC8qIG1haW5seSBmb3IgY3JlYXRlR2xvYmFsU3R5bGUgdG8gY2hlY2sgZm9yIGl0cyBpZCAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuaGFzSWQgPSBmdW5jdGlvbiBoYXNJZChpZCkge1xuICAgIHJldHVybiB0aGlzLnRhZ01hcFtpZF0gIT09IHVuZGVmaW5lZDtcbiAgfTtcblxuICAvKiBjYWNoaW5nIGxheWVyIGNoZWNraW5nIGlkK25hbWUgdG8gYWxyZWFkeSBoYXZlIGEgY29ycmVzcG9uZGluZyB0YWcgYW5kIGluamVjdGVkIHJ1bGVzICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5oYXNOYW1lRm9ySWQgPSBmdW5jdGlvbiBoYXNOYW1lRm9ySWQoaWQsIG5hbWUpIHtcbiAgICAvKiBleGNlcHRpb24gZm9yIHJlaHlkcmF0ZWQgbmFtZXMgd2hpY2ggYXJlIGNoZWNrZWQgc2VwYXJhdGVseSAqL1xuICAgIGlmICh0aGlzLmlnbm9yZVJlaHlkcmF0ZWROYW1lc1tpZF0gPT09IHVuZGVmaW5lZCAmJiB0aGlzLnJlaHlkcmF0ZWROYW1lc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnTWFwW2lkXTtcbiAgICByZXR1cm4gdGFnICE9PSB1bmRlZmluZWQgJiYgdGFnLmhhc05hbWVGb3JJZChpZCwgbmFtZSk7XG4gIH07XG5cbiAgLyogcmVnaXN0ZXJzIGEgY29tcG9uZW50SWQgYW5kIHJlZ2lzdGVycyBpdCBvbiBpdHMgdGFnICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5kZWZlcnJlZEluamVjdCA9IGZ1bmN0aW9uIGRlZmVycmVkSW5qZWN0KGlkLCBjc3NSdWxlcykge1xuICAgIC8qIGRvbid0IGluamVjdCB3aGVuIHRoZSBpZCBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgKi9cbiAgICBpZiAodGhpcy50YWdNYXBbaWRdICE9PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIHZhciBjbG9uZXMgPSB0aGlzLmNsb25lcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjbG9uZXNbaV0uZGVmZXJyZWRJbmplY3QoaWQsIGNzc1J1bGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmdldFRhZ0ZvcklkKGlkKS5pbnNlcnRNYXJrZXIoaWQpO1xuICAgIHRoaXMuZGVmZXJyZWRbaWRdID0gY3NzUnVsZXM7XG4gIH07XG5cbiAgLyogaW5qZWN0cyBydWxlcyBmb3IgYSBnaXZlbiBpZCB3aXRoIGEgbmFtZSB0aGF0IHdpbGwgbmVlZCB0byBiZSBjYWNoZWQgKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmluamVjdCA9IGZ1bmN0aW9uIGluamVjdChpZCwgY3NzUnVsZXMsIG5hbWUpIHtcbiAgICB2YXIgY2xvbmVzID0gdGhpcy5jbG9uZXM7XG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjbG9uZXNbaV0uaW5qZWN0KGlkLCBjc3NSdWxlcywgbmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMuZ2V0VGFnRm9ySWQoaWQpO1xuXG4gICAgLyogYWRkIGRlZmVycmVkIHJ1bGVzIGZvciBjb21wb25lbnQgKi9cbiAgICBpZiAodGhpcy5kZWZlcnJlZFtpZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQ29tYmluZSBwYXNzZWQgY3NzUnVsZXMgd2l0aCBwcmV2aW91c2x5IGRlZmVycmVkIENTUyBydWxlc1xuICAgICAgLy8gTk9URTogV2UgY2Fubm90IG11dGF0ZSB0aGUgZGVmZXJyZWQgYXJyYXkgaXRzZWxmIGFzIGFsbCBjbG9uZXNcbiAgICAgIC8vIGRvIHRoZSBzYW1lIChzZWUgY2xvbmVzW2ldLmluamVjdClcbiAgICAgIHZhciBydWxlcyA9IHRoaXMuZGVmZXJyZWRbaWRdLmNvbmNhdChjc3NSdWxlcyk7XG4gICAgICB0YWcuaW5zZXJ0UnVsZXMoaWQsIHJ1bGVzLCBuYW1lKTtcblxuICAgICAgdGhpcy5kZWZlcnJlZFtpZF0gPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5pbnNlcnRSdWxlcyhpZCwgY3NzUnVsZXMsIG5hbWUpO1xuICAgIH1cbiAgfTtcblxuICAvKiByZW1vdmVzIGFsbCBydWxlcyBmb3IgYSBnaXZlbiBpZCwgd2hpY2ggZG9lc24ndCByZW1vdmUgaXRzIG1hcmtlciBidXQgcmVzZXRzIGl0ICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoaWQpIHtcbiAgICB2YXIgdGFnID0gdGhpcy50YWdNYXBbaWRdO1xuICAgIGlmICh0YWcgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgdmFyIGNsb25lcyA9IHRoaXMuY2xvbmVzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNsb25lc1tpXS5yZW1vdmUoaWQpO1xuICAgIH1cblxuICAgIC8qIHJlbW92ZSBhbGwgcnVsZXMgZnJvbSB0aGUgdGFnICovXG4gICAgdGFnLnJlbW92ZVJ1bGVzKGlkKTtcblxuICAgIC8qIGlnbm9yZSBwb3NzaWJsZSByZWh5ZHJhdGVkIG5hbWVzICovXG4gICAgdGhpcy5pZ25vcmVSZWh5ZHJhdGVkTmFtZXNbaWRdID0gdHJ1ZTtcblxuICAgIC8qIGRlbGV0ZSBwb3NzaWJsZSBkZWZlcnJlZCBydWxlcyAqL1xuICAgIHRoaXMuZGVmZXJyZWRbaWRdID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uIHRvSFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnRvSFRNTCgpO1xuICAgIH0pLmpvaW4oJycpO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnRvUmVhY3RFbGVtZW50cyA9IGZ1bmN0aW9uIHRvUmVhY3RFbGVtZW50cygpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG5cbiAgICByZXR1cm4gdGhpcy50YWdzLm1hcChmdW5jdGlvbiAodGFnLCBpKSB7XG4gICAgICB2YXIga2V5ID0gJ3NjLScgKyBpZCArICctJyArIGk7XG4gICAgICByZXR1cm4gY2xvbmVFbGVtZW50KHRhZy50b0VsZW1lbnQoKSwgeyBrZXk6IGtleSB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBudWxsLCBbe1xuICAgIGtleTogJ21hc3RlcicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gbWFzdGVyIHx8IChtYXN0ZXIgPSBuZXcgU3R5bGVTaGVldCgpLnJlaHlkcmF0ZSgpKTtcbiAgICB9XG5cbiAgICAvKiBOT1RFOiBUaGlzIGlzIGp1c3QgZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IHdpdGggamVzdC1zdHlsZWQtY29tcG9uZW50cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbnN0YW5jZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gU3R5bGVTaGVldC5tYXN0ZXI7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG4vLyBcblxudmFyIEtleWZyYW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gS2V5ZnJhbWVzKG5hbWUsIHJ1bGVzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEtleWZyYW1lcyk7XG5cbiAgICB0aGlzLmluamVjdCA9IGZ1bmN0aW9uIChzdHlsZVNoZWV0KSB7XG4gICAgICBpZiAoIXN0eWxlU2hlZXQuaGFzTmFtZUZvcklkKF90aGlzLmlkLCBfdGhpcy5uYW1lKSkge1xuICAgICAgICBzdHlsZVNoZWV0LmluamVjdChfdGhpcy5pZCwgX3RoaXMucnVsZXMsIF90aGlzLm5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcigxMiwgU3RyaW5nKF90aGlzLm5hbWUpKTtcbiAgICB9O1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG5cbiAgICB0aGlzLmlkID0gJ3NjLWtleWZyYW1lcy0nICsgbmFtZTtcbiAgfVxuXG4gIEtleWZyYW1lcy5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfTtcblxuICByZXR1cm4gS2V5ZnJhbWVzO1xufSgpO1xuXG4vLyBcblxuLyoqXG4gKiBpbmxpbmVkIHZlcnNpb24gb2ZcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4gKi9cblxudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvKFtBLVpdKS9nO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBDU1MgcHJvcGVydHkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnTW96VHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbW96LXRyYW5zaXRpb25cIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnbXNUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tcy10cmFuc2l0aW9uXCJcbiAqXG4gKiBBcyBNb2Rlcm5penIgc3VnZ2VzdHMgKGh0dHA6Ly9tb2Rlcm5penIuY29tL2RvY3MvI3ByZWZpeGVkKSwgYW4gYG1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBgLW1zLWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQxJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxuLy8gXG5cbi8vIFRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjg3YWFiZGZlMWI3NDYxZTczMzFhYmIzNjAxZDllNmJiMjc1NDRiYy9wYWNrYWdlcy9yZWFjdC1kb20vc3JjL3NoYXJlZC9kYW5nZXJvdXNTdHlsZVZhbHVlLmpzXG5mdW5jdGlvbiBhZGRVbml0SWZOZWVkZWQobmFtZSwgdmFsdWUpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FtaWxhamFjay9lc2xpbnQtcGx1Z2luLWZsb3d0eXBlLWVycm9ycy9pc3N1ZXMvMTMzXG4gIC8vICRGbG93Rml4TWVcbiAgaWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDAgJiYgIShuYW1lIGluIHVuaXRsZXNzKSkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7IC8vIFByZXN1bWVzIGltcGxpY2l0ICdweCcgc3VmZml4IGZvciB1bml0bGVzcyBudW1iZXJzXG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS50cmltKCk7XG59XG5cbi8vIFxuXG4vKipcbiAqIEl0J3MgZmFsc2lzaCBub3QgZmFsc3kgYmVjYXVzZSAwIGlzIGFsbG93ZWQuXG4gKi9cbnZhciBpc0ZhbHNpc2ggPSBmdW5jdGlvbiBpc0ZhbHNpc2goY2h1bmspIHtcbiAgcmV0dXJuIGNodW5rID09PSB1bmRlZmluZWQgfHwgY2h1bmsgPT09IG51bGwgfHwgY2h1bmsgPT09IGZhbHNlIHx8IGNodW5rID09PSAnJztcbn07XG5cbnZhciBvYmpUb0Nzc0FycmF5ID0gZnVuY3Rpb24gb2JqVG9Dc3NBcnJheShvYmosIHByZXZLZXkpIHtcbiAgdmFyIHJ1bGVzID0gW107XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaXNGYWxzaXNoKG9ialtrZXldKSkge1xuICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob2JqW2tleV0pKSB7XG4gICAgICAgIHJ1bGVzLnB1c2guYXBwbHkocnVsZXMsIG9ialRvQ3NzQXJyYXkob2JqW2tleV0sIGtleSkpO1xuXG4gICAgICAgIHJldHVybiBydWxlcztcbiAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihvYmpba2V5XSkpIHtcbiAgICAgICAgcnVsZXMucHVzaChoeXBoZW5hdGVTdHlsZU5hbWUoa2V5KSArICc6Jywgb2JqW2tleV0sICc7Jyk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgICAgfVxuICAgICAgcnVsZXMucHVzaChoeXBoZW5hdGVTdHlsZU5hbWUoa2V5KSArICc6ICcgKyBhZGRVbml0SWZOZWVkZWQoa2V5LCBvYmpba2V5XSkgKyAnOycpO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZXM7XG4gIH0pO1xuXG4gIHJldHVybiBwcmV2S2V5ID8gW3ByZXZLZXkgKyAnIHsnXS5jb25jYXQocnVsZXMsIFsnfSddKSA6IHJ1bGVzO1xufTtcblxuZnVuY3Rpb24gZmxhdHRlbihjaHVuaywgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaHVuaykpIHtcbiAgICB2YXIgcnVsZVNldCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNodW5rLmxlbmd0aCwgcmVzdWx0OyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIHJlc3VsdCA9IGZsYXR0ZW4oY2h1bmtbaV0sIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBjb250aW51ZTtlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHJ1bGVTZXQucHVzaC5hcHBseShydWxlU2V0LCByZXN1bHQpO2Vsc2UgcnVsZVNldC5wdXNoKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cblxuICBpZiAoaXNGYWxzaXNoKGNodW5rKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyogSGFuZGxlIG90aGVyIGNvbXBvbmVudHMgKi9cbiAgaWYgKGlzU3R5bGVkQ29tcG9uZW50KGNodW5rKSkge1xuICAgIHJldHVybiAnLicgKyBjaHVuay5zdHlsZWRDb21wb25lbnRJZDtcbiAgfVxuXG4gIC8qIEVpdGhlciBleGVjdXRlIG9yIGRlZmVyIHRoZSBmdW5jdGlvbiAqL1xuICBpZiAoaXNGdW5jdGlvbihjaHVuaykpIHtcbiAgICBpZiAoaXNTdGF0ZWxlc3NGdW5jdGlvbihjaHVuaykgJiYgZXhlY3V0aW9uQ29udGV4dCkge1xuICAgICAgdmFyIF9yZXN1bHQgPSBjaHVuayhleGVjdXRpb25Db250ZXh0KTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNFbGVtZW50KF9yZXN1bHQpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihnZXRDb21wb25lbnROYW1lKGNodW5rKSArICcgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxhdHRlbihfcmVzdWx0LCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KTtcbiAgICB9IGVsc2UgcmV0dXJuIGNodW5rO1xuICB9XG5cbiAgaWYgKGNodW5rIGluc3RhbmNlb2YgS2V5ZnJhbWVzKSB7XG4gICAgaWYgKHN0eWxlU2hlZXQpIHtcbiAgICAgIGNodW5rLmluamVjdChzdHlsZVNoZWV0KTtcbiAgICAgIHJldHVybiBjaHVuay5nZXROYW1lKCk7XG4gICAgfSBlbHNlIHJldHVybiBjaHVuaztcbiAgfVxuXG4gIC8qIEhhbmRsZSBvYmplY3RzICovXG4gIHJldHVybiBpc1BsYWluT2JqZWN0KGNodW5rKSA/IG9ialRvQ3NzQXJyYXkoY2h1bmspIDogY2h1bmsudG9TdHJpbmcoKTtcbn1cblxuLy8gXG5cbmZ1bmN0aW9uIGNzcyhzdHlsZXMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChpc0Z1bmN0aW9uKHN0eWxlcykgfHwgaXNQbGFpbk9iamVjdChzdHlsZXMpKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiBmbGF0dGVuKGludGVybGVhdmUoRU1QVFlfQVJSQVksIFtzdHlsZXNdLmNvbmNhdChpbnRlcnBvbGF0aW9ucykpKTtcbiAgfVxuXG4gIC8vICRGbG93Rml4TWVcbiAgcmV0dXJuIGZsYXR0ZW4oaW50ZXJsZWF2ZShzdHlsZXMsIGludGVycG9sYXRpb25zKSk7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjb21wb25lbnRDb25zdHJ1Y3RvciwgdGFnKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBFTVBUWV9PQkpFQ1Q7XG5cbiAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodGFnKSkge1xuICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoMSwgU3RyaW5nKHRhZykpO1xuICB9XG5cbiAgLyogVGhpcyBpcyBjYWxsYWJsZSBkaXJlY3RseSBhcyBhIHRlbXBsYXRlIGZ1bmN0aW9uICovXG4gIC8vICRGbG93Rml4TWU6IE5vdCB0eXBlZCB0byBhdm9pZCBkZXN0cnVjdHVyaW5nIGFyZ3VtZW50c1xuICB2YXIgdGVtcGxhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uIHRlbXBsYXRlRnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudENvbnN0cnVjdG9yKHRhZywgb3B0aW9ucywgY3NzLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgLyogSWYgY29uZmlnIG1ldGhvZHMgYXJlIGNhbGxlZCwgd3JhcCB1cCBhIG5ldyB0ZW1wbGF0ZSBmdW5jdGlvbiBhbmQgbWVyZ2Ugb3B0aW9ucyAqL1xuICB0ZW1wbGF0ZUZ1bmN0aW9uLndpdGhDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdFdpdGhPcHRpb25zKGNvbXBvbmVudENvbnN0cnVjdG9yLCB0YWcsIF9leHRlbmRzKHt9LCBvcHRpb25zLCBjb25maWcpKTtcbiAgfTtcblxuICAvKiBNb2RpZnkvaW5qZWN0IG5ldyBwcm9wcyBhdCBydW50aW1lICovXG4gIHRlbXBsYXRlRnVuY3Rpb24uYXR0cnMgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgICByZXR1cm4gY29uc3RydWN0V2l0aE9wdGlvbnMoY29tcG9uZW50Q29uc3RydWN0b3IsIHRhZywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGF0dHJzOiBBcnJheS5wcm90b3R5cGUuY29uY2F0KG9wdGlvbnMuYXR0cnMsIGF0dHJzKS5maWx0ZXIoQm9vbGVhbilcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIHRlbXBsYXRlRnVuY3Rpb247XG59XG5cbi8vIFxuLy8gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanMvYmxvYi9tYXN0ZXIvbXVybXVyaGFzaDJfZ2MuanNcbmZ1bmN0aW9uIG11cm11cmhhc2goYykge1xuICBmb3IgKHZhciBlID0gYy5sZW5ndGggfCAwLCBhID0gZSB8IDAsIGQgPSAwLCBiOyBlID49IDQ7KSB7XG4gICAgYiA9IGMuY2hhckNvZGVBdChkKSAmIDI1NSB8IChjLmNoYXJDb2RlQXQoKytkKSAmIDI1NSkgPDwgOCB8IChjLmNoYXJDb2RlQXQoKytkKSAmIDI1NSkgPDwgMTYgfCAoYy5jaGFyQ29kZUF0KCsrZCkgJiAyNTUpIDw8IDI0LCBiID0gMTU0MDQ4MzQ3NyAqIChiICYgNjU1MzUpICsgKCgxNTQwNDgzNDc3ICogKGIgPj4+IDE2KSAmIDY1NTM1KSA8PCAxNiksIGIgXj0gYiA+Pj4gMjQsIGIgPSAxNTQwNDgzNDc3ICogKGIgJiA2NTUzNSkgKyAoKDE1NDA0ODM0NzcgKiAoYiA+Pj4gMTYpICYgNjU1MzUpIDw8IDE2KSwgYSA9IDE1NDA0ODM0NzcgKiAoYSAmIDY1NTM1KSArICgoMTU0MDQ4MzQ3NyAqIChhID4+PiAxNikgJiA2NTUzNSkgPDwgMTYpIF4gYiwgZSAtPSA0LCArK2Q7XG4gIH1cbiAgc3dpdGNoIChlKSB7XG4gICAgY2FzZSAzOlxuICAgICAgYSBePSAoYy5jaGFyQ29kZUF0KGQgKyAyKSAmIDI1NSkgPDwgMTY7XG4gICAgY2FzZSAyOlxuICAgICAgYSBePSAoYy5jaGFyQ29kZUF0KGQgKyAxKSAmIDI1NSkgPDwgODtcbiAgICBjYXNlIDE6XG4gICAgICBhIF49IGMuY2hhckNvZGVBdChkKSAmIDI1NSwgYSA9IDE1NDA0ODM0NzcgKiAoYSAmIDY1NTM1KSArICgoMTU0MDQ4MzQ3NyAqIChhID4+PiAxNikgJiA2NTUzNSkgPDwgMTYpO1xuICB9XG4gIGEgXj0gYSA+Pj4gMTM7XG4gIGEgPSAxNTQwNDgzNDc3ICogKGEgJiA2NTUzNSkgKyAoKDE1NDA0ODM0NzcgKiAoYSA+Pj4gMTYpICYgNjU1MzUpIDw8IDE2KTtcbiAgcmV0dXJuIChhIF4gYSA+Pj4gMTUpID4+PiAwO1xufVxuXG4vLyBcbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblxuLyogVGhpcyBpcyB0aGUgXCJjYXBhY2l0eVwiIG9mIG91ciBhbHBoYWJldCBpLmUuIDJ4MjYgZm9yIGFsbCBsZXR0ZXJzIHBsdXMgdGhlaXIgY2FwaXRhbGlzZWRcbiAqIGNvdW50ZXJwYXJ0cyAqL1xudmFyIGNoYXJzTGVuZ3RoID0gNTI7XG5cbi8qIHN0YXJ0IGF0IDc1IGZvciAnYScgdW50aWwgJ3onICgyNSkgYW5kIHRoZW4gc3RhcnQgYXQgNjUgZm9yIGNhcGl0YWxpc2VkIGxldHRlcnMgKi9cbnZhciBnZXRBbHBoYWJldGljQ2hhciA9IGZ1bmN0aW9uIGdldEFscGhhYmV0aWNDaGFyKGNvZGUpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSArIChjb2RlID4gMjUgPyAzOSA6IDk3KSk7XG59O1xuXG4vKiBpbnB1dCBhIG51bWJlciwgdXN1YWxseSBhIGhhc2ggYW5kIGNvbnZlcnQgaXQgdG8gYmFzZS01MiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShjb2RlKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciB4ID0gdm9pZCAwO1xuXG4gIC8qIGdldCBhIGNoYXIgYW5kIGRpdmlkZSBieSBhbHBoYWJldC1sZW5ndGggKi9cbiAgZm9yICh4ID0gY29kZTsgeCA+IGNoYXJzTGVuZ3RoOyB4ID0gTWF0aC5mbG9vcih4IC8gY2hhcnNMZW5ndGgpKSB7XG4gICAgbmFtZSA9IGdldEFscGhhYmV0aWNDaGFyKHggJSBjaGFyc0xlbmd0aCkgKyBuYW1lO1xuICB9XG5cbiAgcmV0dXJuIGdldEFscGhhYmV0aWNDaGFyKHggJSBjaGFyc0xlbmd0aCkgKyBuYW1lO1xufVxuXG4vLyBcblxuZnVuY3Rpb24gaGFzRnVuY3Rpb25PYmplY3RLZXkob2JqKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW4sIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaXNGdW5jdGlvbihvYmpba2V5XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNTdGF0aWNSdWxlcyhydWxlcywgYXR0cnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBydWxlID0gcnVsZXNbaV07XG5cbiAgICAvLyByZWN1cnNpdmUgY2FzZVxuICAgIGlmIChBcnJheS5pc0FycmF5KHJ1bGUpICYmICFpc1N0YXRpY1J1bGVzKHJ1bGUsIGF0dHJzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihydWxlKSAmJiAhaXNTdHlsZWRDb21wb25lbnQocnVsZSkpIHtcbiAgICAgIC8vIGZ1bmN0aW9ucyBhcmUgYWxsb3dlZCB0byBiZSBzdGF0aWMgaWYgdGhleSdyZSBqdXN0IGJlaW5nXG4gICAgICAvLyB1c2VkIHRvIGdldCB0aGUgY2xhc3NuYW1lIG9mIGEgbmVzdGVkIHN0eWxlZCBjb21wb25lbnRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXR0cnMuc29tZShmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHgpIHx8IGhhc0Z1bmN0aW9uT2JqZWN0S2V5KHgpO1xuICB9KSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBcblxuLyogY29tYmluZXMgaGFzaFN0ciAobXVybXVyaGFzaCkgYW5kIG5hbWVHZW5lcmF0b3IgZm9yIGNvbnZlbmllbmNlICovXG52YXIgaGFzaGVyID0gZnVuY3Rpb24gaGFzaGVyKHN0cikge1xuICByZXR1cm4gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShtdXJtdXJoYXNoKHN0cikpO1xufTtcblxuLypcbiBDb21wb25lbnRTdHlsZSBpcyBhbGwgdGhlIENTUy1zcGVjaWZpYyBzdHVmZiwgbm90XG4gdGhlIFJlYWN0LXNwZWNpZmljIHN0dWZmLlxuICovXG5cbnZhciBDb21wb25lbnRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50U3R5bGUocnVsZXMsIGF0dHJzLCBjb21wb25lbnRJZCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvbmVudFN0eWxlKTtcblxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmlzU3RhdGljID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiBpc1N0YXRpY1J1bGVzKHJ1bGVzLCBhdHRycyk7XG4gICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuXG4gICAgaWYgKCFTdHlsZVNoZWV0Lm1hc3Rlci5oYXNJZChjb21wb25lbnRJZCkpIHtcbiAgICAgIFN0eWxlU2hlZXQubWFzdGVyLmRlZmVycmVkSW5qZWN0KGNvbXBvbmVudElkLCBbXSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogRmxhdHRlbnMgYSBydWxlIHNldCBpbnRvIHZhbGlkIENTU1xuICAgKiBIYXNoZXMgaXQsIHdyYXBzIHRoZSB3aG9sZSBjaHVuayBpbiBhIC5oYXNoMTIzNCB7fVxuICAgKiBSZXR1cm5zIHRoZSBoYXNoIHRvIGJlIGluamVjdGVkIG9uIHJlbmRlcigpXG4gICAqICovXG5cblxuICBDb21wb25lbnRTdHlsZS5wcm90b3R5cGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMgPSBmdW5jdGlvbiBnZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KSB7XG4gICAgdmFyIGlzU3RhdGljID0gdGhpcy5pc1N0YXRpYyxcbiAgICAgICAgY29tcG9uZW50SWQgPSB0aGlzLmNvbXBvbmVudElkLFxuICAgICAgICBsYXN0Q2xhc3NOYW1lID0gdGhpcy5sYXN0Q2xhc3NOYW1lO1xuXG4gICAgaWYgKElTX0JST1dTRVIgJiYgaXNTdGF0aWMgJiYgdHlwZW9mIGxhc3RDbGFzc05hbWUgPT09ICdzdHJpbmcnICYmIHN0eWxlU2hlZXQuaGFzTmFtZUZvcklkKGNvbXBvbmVudElkLCBsYXN0Q2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIGxhc3RDbGFzc05hbWU7XG4gICAgfVxuXG4gICAgdmFyIGZsYXRDU1MgPSBmbGF0dGVuKHRoaXMucnVsZXMsIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuICAgIHZhciBuYW1lID0gaGFzaGVyKHRoaXMuY29tcG9uZW50SWQgKyBmbGF0Q1NTLmpvaW4oJycpKTtcbiAgICBpZiAoIXN0eWxlU2hlZXQuaGFzTmFtZUZvcklkKGNvbXBvbmVudElkLCBuYW1lKSkge1xuICAgICAgc3R5bGVTaGVldC5pbmplY3QodGhpcy5jb21wb25lbnRJZCwgc3RyaW5naWZ5UnVsZXMoZmxhdENTUywgJy4nICsgbmFtZSwgdW5kZWZpbmVkLCBjb21wb25lbnRJZCksIG5hbWUpO1xuICAgIH1cblxuICAgIHRoaXMubGFzdENsYXNzTmFtZSA9IG5hbWU7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgQ29tcG9uZW50U3R5bGUuZ2VuZXJhdGVOYW1lID0gZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKHN0cikge1xuICAgIHJldHVybiBoYXNoZXIoc3RyKTtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9uZW50U3R5bGU7XG59KCk7XG5cbi8vIFxuXG52YXIgTElNSVQgPSAyMDA7XG5cbnZhciBjcmVhdGVXYXJuVG9vTWFueUNsYXNzZXMgPSAoZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gIHZhciBnZW5lcmF0ZWRDbGFzc2VzID0ge307XG4gIHZhciB3YXJuaW5nU2VlbiA9IGZhbHNlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCF3YXJuaW5nU2Vlbikge1xuICAgICAgZ2VuZXJhdGVkQ2xhc3Nlc1tjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhnZW5lcmF0ZWRDbGFzc2VzKS5sZW5ndGggPj0gTElNSVQpIHtcbiAgICAgICAgLy8gVW5hYmxlIHRvIGZpbmQgbGF0ZXN0UnVsZSBpbiB0ZXN0IGVudmlyb25tZW50LlxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlLCBwcmVmZXItdGVtcGxhdGUgKi9cbiAgICAgICAgY29uc29sZS53YXJuKCdPdmVyICcgKyBMSU1JVCArICcgY2xhc3NlcyB3ZXJlIGdlbmVyYXRlZCBmb3IgY29tcG9uZW50ICcgKyBkaXNwbGF5TmFtZSArICcuIFxcbicgKyAnQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG4nICsgJ0V4YW1wbGU6XFxuJyArICcgIGNvbnN0IENvbXBvbmVudCA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcXG4nICsgJyAgICBzdHlsZToge1xcbicgKyAnICAgICAgYmFja2dyb3VuZDogcHJvcHMuYmFja2dyb3VuZCxcXG4nICsgJyAgICB9LFxcbicgKyAnICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbicgKyAnICA8Q29tcG9uZW50IC8+Jyk7XG4gICAgICAgIHdhcm5pbmdTZWVuID0gdHJ1ZTtcbiAgICAgICAgZ2VuZXJhdGVkQ2xhc3NlcyA9IHt9O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG4vLyBcblxudmFyIGRldGVybWluZVRoZW1lID0gKGZ1bmN0aW9uIChwcm9wcywgZmFsbGJhY2tUaGVtZSkge1xuICB2YXIgZGVmYXVsdFByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBFTVBUWV9PQkpFQ1Q7XG5cbiAgLy8gUHJvcHMgc2hvdWxkIHRha2UgcHJlY2VkZW5jZSBvdmVyIFRoZW1lUHJvdmlkZXIsIHdoaWNoIHNob3VsZCB0YWtlIHByZWNlZGVuY2Ugb3ZlclxuICAvLyBkZWZhdWx0UHJvcHMsIGJ1dCBSZWFjdCBhdXRvbWF0aWNhbGx5IHB1dHMgZGVmYXVsdFByb3BzIG9uIHByb3BzLlxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMsIGZsb3d0eXBlLWVycm9ycy9zaG93LWVycm9ycyAqL1xuICB2YXIgaXNEZWZhdWx0VGhlbWUgPSBkZWZhdWx0UHJvcHMgPyBwcm9wcy50aGVtZSA9PT0gZGVmYXVsdFByb3BzLnRoZW1lIDogZmFsc2U7XG4gIHZhciB0aGVtZSA9IHByb3BzLnRoZW1lICYmICFpc0RlZmF1bHRUaGVtZSA/IHByb3BzLnRoZW1lIDogZmFsbGJhY2tUaGVtZSB8fCBkZWZhdWx0UHJvcHMudGhlbWU7XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICByZXR1cm4gdGhlbWU7XG59KTtcblxuLy8gXG52YXIgZXNjYXBlUmVnZXggPSAvW1tcXF0uIyokPjwrfj18XjooKSxcIidgLV0rL2c7XG52YXIgZGFzaGVzQXRFbmRzID0gLyheLXwtJCkvZztcblxuLyoqXG4gKiBUT0RPOiBFeHBsb3JlIHVzaW5nIENTUy5lc2NhcGUgd2hlbiBpdCBiZWNvbWVzIG1vcmUgYXZhaWxhYmxlXG4gKiBpbiBldmVyZ3JlZW4gYnJvd3NlcnMuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAvLyBSZXBsYWNlIGFsbCBwb3NzaWJsZSBDU1Mgc2VsZWN0b3JzXG4gIC5yZXBsYWNlKGVzY2FwZVJlZ2V4LCAnLScpXG5cbiAgLy8gUmVtb3ZlIGV4dHJhbmVvdXMgaHlwaGVucyBhdCB0aGUgc3RhcnQgYW5kIGVuZFxuICAucmVwbGFjZShkYXNoZXNBdEVuZHMsICcnKTtcbn1cblxuLy8gXG5cbmZ1bmN0aW9uIGlzVGFnKHRhcmdldCkge1xuICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB0YXJnZXQuY2hhckF0KDApID09PSB0YXJnZXQuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgOiB0cnVlKTtcbn1cblxuLy8gXG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGlzcGxheU5hbWUodGFyZ2V0KSB7XG4gIC8vICRGbG93Rml4TWVcbiAgcmV0dXJuIGlzVGFnKHRhcmdldCkgPyAnc3R5bGVkLicgKyB0YXJnZXQgOiAnU3R5bGVkKCcgKyBnZXRDb21wb25lbnROYW1lKHRhcmdldCkgKyAnKSc7XG59XG5cbnZhciBfVFlQRV9TVEFUSUNTO1xuXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG5cbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBUWVBFX1NUQVRJQ1MgPSAoX1RZUEVfU1RBVElDUyA9IHt9LCBfVFlQRV9TVEFUSUNTW0ZvcndhcmRSZWZdID0ge1xuICAkJHR5cGVvZjogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlXG59LCBfVFlQRV9TVEFUSUNTKTtcblxudmFyIGRlZmluZVByb3BlcnR5JDEgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gICAgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAgIF9PYmplY3QkZ2V0T3duUHJvcGVydCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gX09iamVjdCRnZXRPd25Qcm9wZXJ0ID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXTtcbn0gOiBfT2JqZWN0JGdldE93blByb3BlcnQsXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG5cbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcblxuICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBhcnJheVByb3RvdHlwZS5jb25jYXQoZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpLFxuICAgIC8vICRGbG93Rml4TWVcbiAgICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IFRZUEVfU1RBVElDU1t0YXJnZXRDb21wb25lbnQuJCR0eXBlb2ZdIHx8IFJFQUNUX1NUQVRJQ1M7XG5cbiAgICB2YXIgc291cmNlU3RhdGljcyA9IFRZUEVfU1RBVElDU1tzb3VyY2VDb21wb25lbnQuJCR0eXBlb2ZdIHx8IFJFQUNUX1NUQVRJQ1M7XG5cbiAgICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBkZXNjcmlwdG9yID0gdm9pZCAwO1xuICAgIHZhciBrZXkgPSB2b2lkIDA7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAhS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJlxuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkkMSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLyogZmFpbCBzaWxlbnRseSAqL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG4vLyBcbmZ1bmN0aW9uIGlzRGVyaXZlZFJlYWN0Q29tcG9uZW50KGZuKSB7XG4gIHJldHVybiAhIShmbiAmJiBmbi5wcm90b3R5cGUgJiYgZm4ucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG4vLyBcbi8vIEhlbHBlciB0byBjYWxsIGEgZ2l2ZW4gZnVuY3Rpb24sIG9ubHkgb25jZVxudmFyIG9uY2UgPSAoZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgY2IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn0pO1xuXG4vLyBcblxudmFyIFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxudmFyIFRoZW1lQ29uc3VtZXIgPSBUaGVtZUNvbnRleHQuQ29uc3VtZXI7XG5cbi8qKlxuICogUHJvdmlkZSBhIHRoZW1lIHRvIGFuIGVudGlyZSByZWFjdCBjb21wb25lbnQgdHJlZSB2aWEgY29udGV4dFxuICovXG5cbnZhciBUaGVtZVByb3ZpZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgaW5oZXJpdHMoVGhlbWVQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGhlbWVQcm92aWRlcihwcm9wcykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFRoZW1lUHJvdmlkZXIpO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLmdldENvbnRleHQgPSBtZW1vaXplKF90aGlzLmdldENvbnRleHQuYmluZChfdGhpcykpO1xuICAgIF90aGlzLnJlbmRlcklubmVyID0gX3RoaXMucmVuZGVySW5uZXIuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRoZW1lQ29udGV4dC5Db25zdW1lcixcbiAgICAgIG51bGwsXG4gICAgICB0aGlzLnJlbmRlcklubmVyXG4gICAgKTtcbiAgfTtcblxuICBUaGVtZVByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXJJbm5lciA9IGZ1bmN0aW9uIHJlbmRlcklubmVyKG91dGVyVGhlbWUpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCh0aGlzLnByb3BzLnRoZW1lLCBvdXRlclRoZW1lKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgVGhlbWVDb250ZXh0LlByb3ZpZGVyLFxuICAgICAgeyB2YWx1ZTogY29udGV4dCB9LFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdGhlbWUgZnJvbSB0aGUgcHJvcHMsIHN1cHBvcnRpbmcgYm90aCAob3V0ZXJUaGVtZSkgPT4ge31cbiAgICogYXMgd2VsbCBhcyBvYmplY3Qgbm90YXRpb25cbiAgICovXG5cblxuICBUaGVtZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRUaGVtZSA9IGZ1bmN0aW9uIGdldFRoZW1lKHRoZW1lLCBvdXRlclRoZW1lKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhlbWUpKSB7XG4gICAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKG1lcmdlZFRoZW1lID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkobWVyZ2VkVGhlbWUpIHx8ICh0eXBlb2YgbWVyZ2VkVGhlbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1lcmdlZFRoZW1lKSkgIT09ICdvYmplY3QnKSkge1xuICAgICAgICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVyZ2VkVGhlbWU7XG4gICAgfVxuXG4gICAgaWYgKHRoZW1lID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkodGhlbWUpIHx8ICh0eXBlb2YgdGhlbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRoZW1lKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDgpO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9O1xuXG4gIFRoZW1lUHJvdmlkZXIucHJvdG90eXBlLmdldENvbnRleHQgPSBmdW5jdGlvbiBnZXRDb250ZXh0KHRoZW1lLCBvdXRlclRoZW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGhlbWUodGhlbWUsIG91dGVyVGhlbWUpO1xuICB9O1xuXG4gIHJldHVybiBUaGVtZVByb3ZpZGVyO1xufShDb21wb25lbnQpO1xuXG4vLyBcblxudmFyIENMT1NJTkdfVEFHX1IgPSAvXlxccyo8XFwvW2Etel0vaTtcblxudmFyIFNlcnZlclN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlcnZlclN0eWxlU2hlZXQoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmVyU3R5bGVTaGVldCk7XG5cbiAgICAvKiBUaGUgbWFzdGVyIHNoZWV0IG1pZ2h0IGJlIHJlc2V0LCBzbyBrZWVwIGEgcmVmZXJlbmNlIGhlcmUgKi9cbiAgICB0aGlzLm1hc3RlclNoZWV0ID0gU3R5bGVTaGVldC5tYXN0ZXI7XG4gICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMubWFzdGVyU2hlZXQuY2xvbmUoKTtcbiAgICB0aGlzLnNlYWxlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcmsgdGhlIFNlcnZlclN0eWxlU2hlZXQgYXMgYmVpbmcgZnVsbHkgZW1pdHRlZCBhbmQgbWFudWFsbHkgR0MgaXQgZnJvbSB0aGVcbiAgICogU3R5bGVTaGVldCBzaW5nbGV0b24uXG4gICAqL1xuXG5cbiAgU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGUuc2VhbCA9IGZ1bmN0aW9uIHNlYWwoKSB7XG4gICAgaWYgKCF0aGlzLnNlYWxlZCkge1xuICAgICAgLyogUmVtb3ZlIHNlYWxlZCBTdHlsZVNoZWV0cyBmcm9tIHRoZSBtYXN0ZXIgc2hlZXQgKi9cbiAgICAgIHZhciBpbmRleCA9IHRoaXMubWFzdGVyU2hlZXQuY2xvbmVzLmluZGV4T2YodGhpcy5pbnN0YW5jZSk7XG4gICAgICB0aGlzLm1hc3RlclNoZWV0LmNsb25lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5zZWFsZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBTZXJ2ZXJTdHlsZVNoZWV0LnByb3RvdHlwZS5jb2xsZWN0U3R5bGVzID0gZnVuY3Rpb24gY29sbGVjdFN0eWxlcyhjaGlsZHJlbikge1xuICAgIGlmICh0aGlzLnNlYWxlZCkge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcigyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFN0eWxlU2hlZXRNYW5hZ2VyLFxuICAgICAgeyBzaGVldDogdGhpcy5pbnN0YW5jZSB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIFNlcnZlclN0eWxlU2hlZXQucHJvdG90eXBlLmdldFN0eWxlVGFncyA9IGZ1bmN0aW9uIGdldFN0eWxlVGFncygpIHtcbiAgICB0aGlzLnNlYWwoKTtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS50b0hUTUwoKTtcbiAgfTtcblxuICBTZXJ2ZXJTdHlsZVNoZWV0LnByb3RvdHlwZS5nZXRTdHlsZUVsZW1lbnQgPSBmdW5jdGlvbiBnZXRTdHlsZUVsZW1lbnQoKSB7XG4gICAgdGhpcy5zZWFsKCk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UudG9SZWFjdEVsZW1lbnRzKCk7XG4gIH07XG5cbiAgU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGUuaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtID0gZnVuY3Rpb24gaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtKHJlYWRhYmxlU3RyZWFtKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChJU19CUk9XU0VSKSB7XG4gICAgICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDMpO1xuICAgIH1cblxuICAgIC8qIHRoZSB0YWcgaW5kZXgga2VlcHMgdHJhY2sgb2Ygd2hpY2ggdGFncyBoYXZlIGFscmVhZHkgYmVlbiBlbWl0dGVkICovXG4gICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZTtcblxuICAgIHZhciBpbnN0YW5jZVRhZ0luZGV4ID0gMDtcblxuICAgIHZhciBzdHJlYW1BdHRyID0gU0NfU1RSRUFNX0FUVFIgKyAnPVwidHJ1ZVwiJztcblxuICAgIHZhciB0cmFuc2Zvcm1lciA9IG5ldyBzdHJlYW0uVHJhbnNmb3JtKHtcbiAgICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gYXBwZW5kU3R5bGVDaHVua3MoY2h1bmssIC8qIGVuY29kaW5nICovXywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHRhZ3MgPSBpbnN0YW5jZS50YWdzO1xuXG4gICAgICAgIHZhciBodG1sID0gJyc7XG5cbiAgICAgICAgLyogcmV0cmlldmUgaHRtbCBmb3IgZWFjaCBuZXcgc3R5bGUgdGFnICovXG4gICAgICAgIGZvciAoOyBpbnN0YW5jZVRhZ0luZGV4IDwgdGFncy5sZW5ndGg7IGluc3RhbmNlVGFnSW5kZXggKz0gMSkge1xuICAgICAgICAgIHZhciB0YWcgPSB0YWdzW2luc3RhbmNlVGFnSW5kZXhdO1xuICAgICAgICAgIGh0bWwgKz0gdGFnLnRvSFRNTChzdHJlYW1BdHRyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGZvcmNlIG91ciBTdHlsZVNoZWV0cyB0byBlbWl0IGVudGlyZWx5IG5ldyB0YWdzICovXG4gICAgICAgIGluc3RhbmNlLnNlYWxBbGxUYWdzKCk7XG5cbiAgICAgICAgdmFyIHJlbmRlcmVkSHRtbCA9IGNodW5rLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgLyogcHJlcGVuZCBzdHlsZSBodG1sIHRvIGNodW5rLCB1bmxlc3MgdGhlIHN0YXJ0IG9mIHRoZSBjaHVuayBpcyBhIGNsb3NpbmcgdGFnIGluIHdoaWNoIGNhc2UgYXBwZW5kIHJpZ2h0IGFmdGVyIHRoYXQgKi9cbiAgICAgICAgaWYgKENMT1NJTkdfVEFHX1IudGVzdChyZW5kZXJlZEh0bWwpKSB7XG4gICAgICAgICAgdmFyIGVuZE9mQ2xvc2luZ1RhZyA9IHJlbmRlcmVkSHRtbC5pbmRleE9mKCc+Jyk7XG5cbiAgICAgICAgICB0aGlzLnB1c2gocmVuZGVyZWRIdG1sLnNsaWNlKDAsIGVuZE9mQ2xvc2luZ1RhZyArIDEpICsgaHRtbCArIHJlbmRlcmVkSHRtbC5zbGljZShlbmRPZkNsb3NpbmdUYWcgKyAxKSk7XG4gICAgICAgIH0gZWxzZSB0aGlzLnB1c2goaHRtbCArIHJlbmRlcmVkSHRtbCk7XG5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlYWRhYmxlU3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc2VhbCgpO1xuICAgIH0pO1xuXG4gICAgcmVhZGFibGVTdHJlYW0ub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgX3RoaXMuc2VhbCgpO1xuXG4gICAgICAvLyBmb3J3YXJkIHRoZSBlcnJvciB0byB0aGUgdHJhbnNmb3JtIHN0cmVhbVxuICAgICAgdHJhbnNmb3JtZXIuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlYWRhYmxlU3RyZWFtLnBpcGUodHJhbnNmb3JtZXIpO1xuICB9O1xuXG4gIHJldHVybiBTZXJ2ZXJTdHlsZVNoZWV0O1xufSgpO1xuXG4vLyBcblxudmFyIFN0eWxlU2hlZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xudmFyIFN0eWxlU2hlZXRDb25zdW1lciA9IFN0eWxlU2hlZXRDb250ZXh0LkNvbnN1bWVyO1xuXG52YXIgU3R5bGVTaGVldE1hbmFnZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhTdHlsZVNoZWV0TWFuYWdlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3R5bGVTaGVldE1hbmFnZXIocHJvcHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0TWFuYWdlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuZ2V0Q29udGV4dCA9IG1lbW9pemUoX3RoaXMuZ2V0Q29udGV4dCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3R5bGVTaGVldE1hbmFnZXIucHJvdG90eXBlLmdldENvbnRleHQgPSBmdW5jdGlvbiBnZXRDb250ZXh0KHNoZWV0LCB0YXJnZXQpIHtcbiAgICBpZiAoc2hlZXQpIHtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCkge1xuICAgICAgcmV0dXJuIG5ldyBTdHlsZVNoZWV0KHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoNCk7XG4gICAgfVxuICB9O1xuXG4gIFN0eWxlU2hlZXRNYW5hZ2VyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBzaGVldCA9IF9wcm9wcy5zaGVldCxcbiAgICAgICAgdGFyZ2V0ID0gX3Byb3BzLnRhcmdldDtcblxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBTdHlsZVNoZWV0Q29udGV4dC5Qcm92aWRlcixcbiAgICAgIHsgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dChzaGVldCwgdGFyZ2V0KSB9LFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pIDogY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0TWFuYWdlcjtcbn0oQ29tcG9uZW50KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFN0eWxlU2hlZXRNYW5hZ2VyLnByb3BUeXBlcyA9IHtcbiAgc2hlZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5pbnN0YW5jZU9mKFN0eWxlU2hlZXQpLCBQcm9wVHlwZXMuaW5zdGFuY2VPZihTZXJ2ZXJTdHlsZVNoZWV0KV0pLFxuXG4gIHRhcmdldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlbmRDaGlsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9KVxufSA6IHZvaWQgMDtcblxuLy8gXG5cbnZhciBpZGVudGlmaWVycyA9IHt9O1xuXG4vKiBXZSBkZXBlbmQgb24gY29tcG9uZW50cyBoYXZpbmcgdW5pcXVlIElEcyAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVJZChfQ29tcG9uZW50U3R5bGUsIF9kaXNwbGF5TmFtZSwgcGFyZW50Q29tcG9uZW50SWQpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIF9kaXNwbGF5TmFtZSAhPT0gJ3N0cmluZycgPyAnc2MnIDogZXNjYXBlKF9kaXNwbGF5TmFtZSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZW5zdXJlcyB1bmlxdWVuZXNzIGlmIHR3byBjb21wb25lbnRzIGhhcHBlbiB0byBzaGFyZVxuICAgKiB0aGUgc2FtZSBkaXNwbGF5TmFtZS5cbiAgICovXG4gIHZhciBuciA9IChpZGVudGlmaWVyc1tkaXNwbGF5TmFtZV0gfHwgMCkgKyAxO1xuICBpZGVudGlmaWVyc1tkaXNwbGF5TmFtZV0gPSBucjtcblxuICB2YXIgY29tcG9uZW50SWQgPSBkaXNwbGF5TmFtZSArICctJyArIF9Db21wb25lbnRTdHlsZS5nZW5lcmF0ZU5hbWUoZGlzcGxheU5hbWUgKyBucik7XG5cbiAgcmV0dXJuIHBhcmVudENvbXBvbmVudElkID8gcGFyZW50Q29tcG9uZW50SWQgKyAnLScgKyBjb21wb25lbnRJZCA6IGNvbXBvbmVudElkO1xufVxuXG4vLyAkRmxvd0ZpeE1lXG5cbnZhciBTdHlsZWRDb21wb25lbnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhTdHlsZWRDb21wb25lbnQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlZENvbXBvbmVudCgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZWRDb21wb25lbnQpO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuYXR0cnMgPSB7fTtcblxuICAgIF90aGlzLnJlbmRlck91dGVyID0gX3RoaXMucmVuZGVyT3V0ZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMucmVuZGVySW5uZXIgPSBfdGhpcy5yZW5kZXJJbm5lci5iaW5kKF90aGlzKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBfdGhpcy53YXJuSW5uZXJSZWYgPSBvbmNlKGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgXCJpbm5lclJlZlwiIEFQSSBoYXMgYmVlbiByZW1vdmVkIGluIHN0eWxlZC1jb21wb25lbnRzIHY0IGluIGZhdm9yIG9mIFJlYWN0IDE2IHJlZiBmb3J3YXJkaW5nLCB1c2UgXCJyZWZcIiBpbnN0ZWFkIGxpa2UgYSB0eXBpY2FsIGNvbXBvbmVudC4gXCJpbm5lclJlZlwiIHdhcyBkZXRlY3RlZCBvbiBjb21wb25lbnQgXCInICsgZGlzcGxheU5hbWUgKyAnXCIuJylcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy53YXJuQXR0cnNGbk9iamVjdEtleURlcHJlY2F0ZWQgPSBvbmNlKGZ1bmN0aW9uIChrZXksIGRpc3BsYXlOYW1lKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0Z1bmN0aW9ucyBhcyBvYmplY3QtZm9ybSBhdHRycyh7fSkga2V5cyBhcmUgbm93IGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIHN0eWxlZC1jb21wb25lbnRzLiBTd2l0Y2ggdG8gdGhlIG5ldyBhdHRycyhwcm9wcyA9PiAoe30pKSBzeW50YXggaW5zdGVhZCBmb3IgZWFzaWVyIGFuZCBtb3JlIHBvd2VyZnVsIGNvbXBvc2l0aW9uLiBUaGUgYXR0cnMga2V5IGluIHF1ZXN0aW9uIGlzIFwiJyArIGtleSArICdcIiBvbiBjb21wb25lbnQgXCInICsgZGlzcGxheU5hbWUgKyAnXCIuJywgJ1xcbiAnICsgbmV3IEVycm9yKCkuc3RhY2spXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMud2Fybk5vblN0eWxlZENvbXBvbmVudEF0dHJzT2JqZWN0S2V5ID0gb25jZShmdW5jdGlvbiAoa2V5LCBkaXNwbGF5TmFtZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdJdCBsb29rcyBsaWtlIHlvdVxcJ3ZlIHVzZWQgYSBub24gc3R5bGVkLWNvbXBvbmVudCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBcIicgKyBrZXkgKyAnXCIgcHJvcCBpbiBhbiBvYmplY3QtZm9ybSBhdHRycyBjb25zdHJ1Y3RvciBvZiBcIicgKyBkaXNwbGF5TmFtZSArICdcIi5cXG4nICsgJ1lvdSBzaG91bGQgdXNlIHRoZSBuZXcgZnVuY3Rpb24tZm9ybSBhdHRycyBjb25zdHJ1Y3RvciB3aGljaCBhdm9pZHMgdGhpcyBpc3N1ZTogYXR0cnMocHJvcHMgPT4gKHsgeW91clN0dWZmIH0pKVxcbicgKyBcIlRvIGNvbnRpbnVlIHVzaW5nIHRoZSBkZXByZWNhdGVkIG9iamVjdCBzeW50YXgsIHlvdSdsbCBuZWVkIHRvIHdyYXAgeW91ciBjb21wb25lbnQgcHJvcCBpbiBhIGZ1bmN0aW9uIHRvIG1ha2UgaXQgYXZhaWxhYmxlIGluc2lkZSB0aGUgc3R5bGVkIGNvbXBvbmVudCAoeW91J2xsIHN0aWxsIGdldCB0aGUgZGVwcmVjYXRpb24gd2FybmluZyB0aG91Z2guKVxcblwiICsgKCdGb3IgZXhhbXBsZSwgeyAnICsga2V5ICsgJzogKCkgPT4gSW5uZXJDb21wb25lbnQgfSBpbnN0ZWFkIG9mIHsgJyArIGtleSArICc6IElubmVyQ29tcG9uZW50IH0nKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFN0eWxlU2hlZXRDb25zdW1lcixcbiAgICAgIG51bGwsXG4gICAgICB0aGlzLnJlbmRlck91dGVyXG4gICAgKTtcbiAgfTtcblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlck91dGVyID0gZnVuY3Rpb24gcmVuZGVyT3V0ZXIoKSB7XG4gICAgdmFyIHN0eWxlU2hlZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFN0eWxlU2hlZXQubWFzdGVyO1xuXG4gICAgdGhpcy5zdHlsZVNoZWV0ID0gc3R5bGVTaGVldDtcblxuICAgIC8vIE5vIG5lZWQgdG8gc3Vic2NyaWJlIGEgc3RhdGljIGNvbXBvbmVudCB0byB0aGVtZSBjaGFuZ2VzLCBpdCB3b24ndCBjaGFuZ2UgYW55dGhpbmdcbiAgICBpZiAodGhpcy5wcm9wcy5mb3J3YXJkZWRDb21wb25lbnQuY29tcG9uZW50U3R5bGUuaXNTdGF0aWMpIHJldHVybiB0aGlzLnJlbmRlcklubmVyKCk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRoZW1lQ29uc3VtZXIsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5yZW5kZXJJbm5lclxuICAgICk7XG4gIH07XG5cbiAgU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJJbm5lciA9IGZ1bmN0aW9uIHJlbmRlcklubmVyKHRoZW1lKSB7XG4gICAgdmFyIF9wcm9wcyRmb3J3YXJkZWRDb21wbyA9IHRoaXMucHJvcHMuZm9yd2FyZGVkQ29tcG9uZW50LFxuICAgICAgICBjb21wb25lbnRTdHlsZSA9IF9wcm9wcyRmb3J3YXJkZWRDb21wby5jb21wb25lbnRTdHlsZSxcbiAgICAgICAgZGVmYXVsdFByb3BzID0gX3Byb3BzJGZvcndhcmRlZENvbXBvLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgZGlzcGxheU5hbWUgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8uZGlzcGxheU5hbWUsXG4gICAgICAgIGZvbGRlZENvbXBvbmVudElkcyA9IF9wcm9wcyRmb3J3YXJkZWRDb21wby5mb2xkZWRDb21wb25lbnRJZHMsXG4gICAgICAgIHN0eWxlZENvbXBvbmVudElkID0gX3Byb3BzJGZvcndhcmRlZENvbXBvLnN0eWxlZENvbXBvbmVudElkLFxuICAgICAgICB0YXJnZXQgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8udGFyZ2V0O1xuXG5cbiAgICB2YXIgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdm9pZCAwO1xuICAgIGlmIChjb21wb25lbnRTdHlsZS5pc1N0YXRpYykge1xuICAgICAgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdGhpcy5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhFTVBUWV9PQkpFQ1QsIHRoaXMucHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5lcmF0ZWRDbGFzc05hbWUgPSB0aGlzLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGRldGVybWluZVRoZW1lKHRoaXMucHJvcHMsIHRoZW1lLCBkZWZhdWx0UHJvcHMpIHx8IEVNUFRZX09CSkVDVCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRUb0JlQ3JlYXRlZCA9IHRoaXMucHJvcHMuYXMgfHwgdGhpcy5hdHRycy5hcyB8fCB0YXJnZXQ7XG4gICAgdmFyIGlzVGFyZ2V0VGFnID0gaXNUYWcoZWxlbWVudFRvQmVDcmVhdGVkKTtcblxuICAgIHZhciBwcm9wc0ZvckVsZW1lbnQgPSB7fTtcbiAgICB2YXIgY29tcHV0ZWRQcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLmF0dHJzKTtcblxuICAgIHZhciBrZXkgPSB2b2lkIDA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAoa2V5IGluIGNvbXB1dGVkUHJvcHMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGtleSA9PT0gJ2lubmVyUmVmJyAmJiBpc1RhcmdldFRhZykge1xuICAgICAgICB0aGlzLndhcm5Jbm5lclJlZihkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdmb3J3YXJkZWRDb21wb25lbnQnIHx8IGtleSA9PT0gJ2FzJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZm9yd2FyZGVkUmVmJykgcHJvcHNGb3JFbGVtZW50LnJlZiA9IGNvbXB1dGVkUHJvcHNba2V5XTtlbHNlIGlmIChrZXkgPT09ICdmb3J3YXJkZWRBcycpIHByb3BzRm9yRWxlbWVudC5hcyA9IGNvbXB1dGVkUHJvcHNba2V5XTtlbHNlIGlmICghaXNUYXJnZXRUYWcgfHwgdmFsaWRBdHRyKGtleSkpIHtcbiAgICAgICAgLy8gRG9uJ3QgcGFzcyB0aHJvdWdoIG5vbiBIVE1MIHRhZ3MgdGhyb3VnaCB0byBIVE1MIGVsZW1lbnRzXG4gICAgICAgIHByb3BzRm9yRWxlbWVudFtrZXldID0gY29tcHV0ZWRQcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnN0eWxlICYmIHRoaXMuYXR0cnMuc3R5bGUpIHtcbiAgICAgIHByb3BzRm9yRWxlbWVudC5zdHlsZSA9IF9leHRlbmRzKHt9LCB0aGlzLmF0dHJzLnN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKTtcbiAgICB9XG5cbiAgICBwcm9wc0ZvckVsZW1lbnQuY2xhc3NOYW1lID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdChmb2xkZWRDb21wb25lbnRJZHMsIHN0eWxlZENvbXBvbmVudElkLCBnZW5lcmF0ZWRDbGFzc05hbWUgIT09IHN0eWxlZENvbXBvbmVudElkID8gZ2VuZXJhdGVkQ2xhc3NOYW1lIDogbnVsbCwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuYXR0cnMuY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoZWxlbWVudFRvQmVDcmVhdGVkLCBwcm9wc0ZvckVsZW1lbnQpO1xuICB9O1xuXG4gIFN0eWxlZENvbXBvbmVudC5wcm90b3R5cGUuYnVpbGRFeGVjdXRpb25Db250ZXh0ID0gZnVuY3Rpb24gYnVpbGRFeGVjdXRpb25Db250ZXh0KHRoZW1lLCBwcm9wcywgYXR0cnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBjb250ZXh0ID0gX2V4dGVuZHMoe30sIHByb3BzLCB7IHRoZW1lOiB0aGVtZSB9KTtcblxuICAgIGlmICghYXR0cnMubGVuZ3RoKSByZXR1cm4gY29udGV4dDtcblxuICAgIHRoaXMuYXR0cnMgPSB7fTtcblxuICAgIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHJEZWYpIHtcbiAgICAgIHZhciByZXNvbHZlZEF0dHJEZWYgPSBhdHRyRGVmO1xuICAgICAgdmFyIGF0dHJEZWZXYXNGbiA9IGZhbHNlO1xuICAgICAgdmFyIGF0dHIgPSB2b2lkIDA7XG4gICAgICB2YXIga2V5ID0gdm9pZCAwO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihyZXNvbHZlZEF0dHJEZWYpKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgcmVzb2x2ZWRBdHRyRGVmID0gcmVzb2x2ZWRBdHRyRGVmKGNvbnRleHQpO1xuICAgICAgICBhdHRyRGVmV2FzRm4gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBndWFyZC1mb3ItaW4gKi9cbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGZvciAoa2V5IGluIHJlc29sdmVkQXR0ckRlZikge1xuICAgICAgICBhdHRyID0gcmVzb2x2ZWRBdHRyRGVmW2tleV07XG5cbiAgICAgICAgaWYgKCFhdHRyRGVmV2FzRm4pIHtcbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbihhdHRyKSAmJiAhaXNEZXJpdmVkUmVhY3RDb21wb25lbnQoYXR0cikgJiYgIWlzU3R5bGVkQ29tcG9uZW50KGF0dHIpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBfdGhpczIud2FybkF0dHJzRm5PYmplY3RLZXlEZXByZWNhdGVkKGtleSwgcHJvcHMuZm9yd2FyZGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXR0ciA9IGF0dHIoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIFJlYWN0LmlzVmFsaWRFbGVtZW50KGF0dHIpKSB7XG4gICAgICAgICAgICAgIF90aGlzMi53YXJuTm9uU3R5bGVkQ29tcG9uZW50QXR0cnNPYmplY3RLZXkoa2V5LCBwcm9wcy5mb3J3YXJkZWRDb21wb25lbnQuZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMi5hdHRyc1trZXldID0gYXR0cjtcbiAgICAgICAgY29udGV4dFtrZXldID0gYXR0cjtcbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9O1xuXG4gIFN0eWxlZENvbXBvbmVudC5wcm90b3R5cGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMgPSBmdW5jdGlvbiBnZW5lcmF0ZUFuZEluamVjdFN0eWxlcyh0aGVtZSwgcHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJGZvcndhcmRlZENvbXBvMiA9IHByb3BzLmZvcndhcmRlZENvbXBvbmVudCxcbiAgICAgICAgYXR0cnMgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8yLmF0dHJzLFxuICAgICAgICBjb21wb25lbnRTdHlsZSA9IF9wcm9wcyRmb3J3YXJkZWRDb21wbzIuY29tcG9uZW50U3R5bGUsXG4gICAgICAgIHdhcm5Ub29NYW55Q2xhc3NlcyA9IF9wcm9wcyRmb3J3YXJkZWRDb21wbzIud2FyblRvb01hbnlDbGFzc2VzO1xuXG4gICAgLy8gc3RhdGljYWxseSBzdHlsZWQtY29tcG9uZW50cyBkb24ndCBuZWVkIHRvIGJ1aWxkIGFuIGV4ZWN1dGlvbiBjb250ZXh0IG9iamVjdCxcbiAgICAvLyBhbmQgc2hvdWxkbid0IGJlIGluY3JlYXNpbmcgdGhlIG51bWJlciBvZiBjbGFzcyBuYW1lc1xuXG4gICAgaWYgKGNvbXBvbmVudFN0eWxlLmlzU3RhdGljICYmICFhdHRycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjb21wb25lbnRTdHlsZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhFTVBUWV9PQkpFQ1QsIHRoaXMuc3R5bGVTaGVldCk7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZSA9IGNvbXBvbmVudFN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKHRoaXMuYnVpbGRFeGVjdXRpb25Db250ZXh0KHRoZW1lLCBwcm9wcywgYXR0cnMpLCB0aGlzLnN0eWxlU2hlZXQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FyblRvb01hbnlDbGFzc2VzKSB3YXJuVG9vTWFueUNsYXNzZXMoY2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlZENvbXBvbmVudDtcbn0oQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVkQ29tcG9uZW50KHRhcmdldCwgb3B0aW9ucywgcnVsZXMpIHtcbiAgdmFyIGlzVGFyZ2V0U3R5bGVkQ29tcCA9IGlzU3R5bGVkQ29tcG9uZW50KHRhcmdldCk7XG4gIHZhciBpc0NsYXNzID0gIWlzVGFnKHRhcmdldCk7XG5cbiAgdmFyIF9vcHRpb25zJGRpc3BsYXlOYW1lID0gb3B0aW9ucy5kaXNwbGF5TmFtZSxcbiAgICAgIGRpc3BsYXlOYW1lID0gX29wdGlvbnMkZGlzcGxheU5hbWUgPT09IHVuZGVmaW5lZCA/IGdlbmVyYXRlRGlzcGxheU5hbWUodGFyZ2V0KSA6IF9vcHRpb25zJGRpc3BsYXlOYW1lLFxuICAgICAgX29wdGlvbnMkY29tcG9uZW50SWQgPSBvcHRpb25zLmNvbXBvbmVudElkLFxuICAgICAgY29tcG9uZW50SWQgPSBfb3B0aW9ucyRjb21wb25lbnRJZCA9PT0gdW5kZWZpbmVkID8gZ2VuZXJhdGVJZChDb21wb25lbnRTdHlsZSwgb3B0aW9ucy5kaXNwbGF5TmFtZSwgb3B0aW9ucy5wYXJlbnRDb21wb25lbnRJZCkgOiBfb3B0aW9ucyRjb21wb25lbnRJZCxcbiAgICAgIF9vcHRpb25zJFBhcmVudENvbXBvbiA9IG9wdGlvbnMuUGFyZW50Q29tcG9uZW50LFxuICAgICAgUGFyZW50Q29tcG9uZW50ID0gX29wdGlvbnMkUGFyZW50Q29tcG9uID09PSB1bmRlZmluZWQgPyBTdHlsZWRDb21wb25lbnQgOiBfb3B0aW9ucyRQYXJlbnRDb21wb24sXG4gICAgICBfb3B0aW9ucyRhdHRycyA9IG9wdGlvbnMuYXR0cnMsXG4gICAgICBhdHRycyA9IF9vcHRpb25zJGF0dHJzID09PSB1bmRlZmluZWQgPyBFTVBUWV9BUlJBWSA6IF9vcHRpb25zJGF0dHJzO1xuXG5cbiAgdmFyIHN0eWxlZENvbXBvbmVudElkID0gb3B0aW9ucy5kaXNwbGF5TmFtZSAmJiBvcHRpb25zLmNvbXBvbmVudElkID8gZXNjYXBlKG9wdGlvbnMuZGlzcGxheU5hbWUpICsgJy0nICsgb3B0aW9ucy5jb21wb25lbnRJZCA6IG9wdGlvbnMuY29tcG9uZW50SWQgfHwgY29tcG9uZW50SWQ7XG5cbiAgLy8gZm9sZCB0aGUgdW5kZXJseWluZyBTdHlsZWRDb21wb25lbnQgYXR0cnMgdXAgKGltcGxpY2l0IGV4dGVuZClcbiAgdmFyIGZpbmFsQXR0cnMgPVxuICAvLyAkRmxvd0ZpeE1lXG4gIGlzVGFyZ2V0U3R5bGVkQ29tcCAmJiB0YXJnZXQuYXR0cnMgPyBBcnJheS5wcm90b3R5cGUuY29uY2F0KHRhcmdldC5hdHRycywgYXR0cnMpLmZpbHRlcihCb29sZWFuKSA6IGF0dHJzO1xuXG4gIHZhciBjb21wb25lbnRTdHlsZSA9IG5ldyBDb21wb25lbnRTdHlsZShpc1RhcmdldFN0eWxlZENvbXAgPyAvLyBmb2xkIHRoZSB1bmRlcmx5aW5nIFN0eWxlZENvbXBvbmVudCBydWxlcyB1cCAoaW1wbGljaXQgZXh0ZW5kKVxuICAvLyAkRmxvd0ZpeE1lXG4gIHRhcmdldC5jb21wb25lbnRTdHlsZS5ydWxlcy5jb25jYXQocnVsZXMpIDogcnVsZXMsIGZpbmFsQXR0cnMsIHN0eWxlZENvbXBvbmVudElkKTtcblxuICAvKipcbiAgICogZm9yd2FyZFJlZiBjcmVhdGVzIGEgbmV3IGludGVyaW0gY29tcG9uZW50LCB3aGljaCB3ZSdsbCB0YWtlIGFkdmFudGFnZSBvZlxuICAgKiBpbnN0ZWFkIG9mIGV4dGVuZGluZyBQYXJlbnRDb21wb25lbnQgdG8gY3JlYXRlIF9hbm90aGVyXyBpbnRlcmltIGNsYXNzXG4gICAqL1xuICB2YXIgV3JhcHBlZFN0eWxlZENvbXBvbmVudCA9IHZvaWQgMDtcbiAgdmFyIGZvcndhcmRSZWYgPSBmdW5jdGlvbiBmb3J3YXJkUmVmKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQYXJlbnRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywgeyBmb3J3YXJkZWRDb21wb25lbnQ6IFdyYXBwZWRTdHlsZWRDb21wb25lbnQsIGZvcndhcmRlZFJlZjogcmVmIH0pKTtcbiAgfTtcbiAgZm9yd2FyZFJlZi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50ID0gUmVhY3QuZm9yd2FyZFJlZihmb3J3YXJkUmVmKTtcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG4gIC8vICRGbG93Rml4TWVcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5hdHRycyA9IGZpbmFsQXR0cnM7XG4gIC8vICRGbG93Rml4TWVcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5jb21wb25lbnRTdHlsZSA9IGNvbXBvbmVudFN0eWxlO1xuXG4gIC8vICRGbG93Rml4TWVcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5mb2xkZWRDb21wb25lbnRJZHMgPSBpc1RhcmdldFN0eWxlZENvbXAgPyAvLyAkRmxvd0ZpeE1lXG4gIEFycmF5LnByb3RvdHlwZS5jb25jYXQodGFyZ2V0LmZvbGRlZENvbXBvbmVudElkcywgdGFyZ2V0LnN0eWxlZENvbXBvbmVudElkKSA6IEVNUFRZX0FSUkFZO1xuXG4gIC8vICRGbG93Rml4TWVcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5zdHlsZWRDb21wb25lbnRJZCA9IHN0eWxlZENvbXBvbmVudElkO1xuXG4gIC8vIGZvbGQgdGhlIHVuZGVybHlpbmcgU3R5bGVkQ29tcG9uZW50IHRhcmdldCB1cCBzaW5jZSB3ZSBmb2xkZWQgdGhlIHN0eWxlc1xuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQudGFyZ2V0ID0gaXNUYXJnZXRTdHlsZWRDb21wID8gdGFyZ2V0LnRhcmdldCA6IHRhcmdldDtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQud2l0aENvbXBvbmVudCA9IGZ1bmN0aW9uIHdpdGhDb21wb25lbnQodGFnKSB7XG4gICAgdmFyIHByZXZpb3VzQ29tcG9uZW50SWQgPSBvcHRpb25zLmNvbXBvbmVudElkLFxuICAgICAgICBvcHRpb25zVG9Db3B5ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgWydjb21wb25lbnRJZCddKTtcblxuXG4gICAgdmFyIG5ld0NvbXBvbmVudElkID0gcHJldmlvdXNDb21wb25lbnRJZCAmJiBwcmV2aW91c0NvbXBvbmVudElkICsgJy0nICsgKGlzVGFnKHRhZykgPyB0YWcgOiBlc2NhcGUoZ2V0Q29tcG9uZW50TmFtZSh0YWcpKSk7XG5cbiAgICB2YXIgbmV3T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zVG9Db3B5LCB7XG4gICAgICBhdHRyczogZmluYWxBdHRycyxcbiAgICAgIGNvbXBvbmVudElkOiBuZXdDb21wb25lbnRJZCxcbiAgICAgIFBhcmVudENvbXBvbmVudDogUGFyZW50Q29tcG9uZW50XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3JlYXRlU3R5bGVkQ29tcG9uZW50KHRhZywgbmV3T3B0aW9ucywgcnVsZXMpO1xuICB9O1xuXG4gIC8vICRGbG93Rml4TWVcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWRTdHlsZWRDb21wb25lbnQsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEob2JqKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICB0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHMgPSBpc1RhcmdldFN0eWxlZENvbXAgPyBtZXJnZSh0YXJnZXQuZGVmYXVsdFByb3BzLCBvYmopIDogb2JqO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC53YXJuVG9vTWFueUNsYXNzZXMgPSBjcmVhdGVXYXJuVG9vTWFueUNsYXNzZXMoZGlzcGxheU5hbWUpO1xuICB9XG5cbiAgLy8gJEZsb3dGaXhNZVxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnLicgKyBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LnN0eWxlZENvbXBvbmVudElkO1xuICB9O1xuXG4gIGlmIChpc0NsYXNzKSB7XG4gICAgaG9pc3ROb25SZWFjdFN0YXRpY3MoV3JhcHBlZFN0eWxlZENvbXBvbmVudCwgdGFyZ2V0LCB7XG4gICAgICAvLyBhbGwgU0Mtc3BlY2lmaWMgdGhpbmdzIHNob3VsZCBub3QgYmUgaG9pc3RlZFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjb21wb25lbnRTdHlsZTogdHJ1ZSxcbiAgICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgICAgZm9sZGVkQ29tcG9uZW50SWRzOiB0cnVlLFxuICAgICAgc3R5bGVkQ29tcG9uZW50SWQ6IHRydWUsXG4gICAgICB0YXJnZXQ6IHRydWUsXG4gICAgICB3aXRoQ29tcG9uZW50OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gV3JhcHBlZFN0eWxlZENvbXBvbmVudDtcbn1cblxuLy8gXG4vLyBUaGFua3MgdG8gUmVhY3RET01GYWN0b3JpZXMgZm9yIHRoaXMgaGFuZHkgbGlzdCFcblxudmFyIGRvbUVsZW1lbnRzID0gWydhJywgJ2FiYnInLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiYXNlJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VtJywgJ2VtYmVkJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaWZyYW1lJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2tleWdlbicsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbGluaycsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRhJywgJ21ldGVyJywgJ25hdicsICdub3NjcmlwdCcsICdvYmplY3QnLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BhcmFtJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2NyaXB0JywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFuJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0aXRsZScsICd0cicsICd0cmFjaycsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInLFxuXG4vLyBTVkdcbidjaXJjbGUnLCAnY2xpcFBhdGgnLCAnZGVmcycsICdlbGxpcHNlJywgJ2ZvcmVpZ25PYmplY3QnLCAnZycsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50JywgJ21hcmtlcicsICdtYXNrJywgJ3BhdGgnLCAncGF0dGVybicsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3JhZGlhbEdyYWRpZW50JywgJ3JlY3QnLCAnc3RvcCcsICdzdmcnLCAndGV4dCcsICd0c3BhbiddO1xuXG4vLyBcblxudmFyIHN0eWxlZCA9IGZ1bmN0aW9uIHN0eWxlZCh0YWcpIHtcbiAgcmV0dXJuIGNvbnN0cnVjdFdpdGhPcHRpb25zKGNyZWF0ZVN0eWxlZENvbXBvbmVudCwgdGFnKTtcbn07XG5cbi8vIFNob3J0aGFuZHMgZm9yIGFsbCB2YWxpZCBIVE1MIEVsZW1lbnRzXG5kb21FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkb21FbGVtZW50KSB7XG4gIHN0eWxlZFtkb21FbGVtZW50XSA9IHN0eWxlZChkb21FbGVtZW50KTtcbn0pO1xuXG4vLyBcblxudmFyIEdsb2JhbFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHbG9iYWxTdHlsZShydWxlcywgY29tcG9uZW50SWQpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBHbG9iYWxTdHlsZSk7XG5cbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuICAgIHRoaXMuaXNTdGF0aWMgPSBpc1N0YXRpY1J1bGVzKHJ1bGVzLCBFTVBUWV9BUlJBWSk7XG5cbiAgICBpZiAoIVN0eWxlU2hlZXQubWFzdGVyLmhhc0lkKGNvbXBvbmVudElkKSkge1xuICAgICAgU3R5bGVTaGVldC5tYXN0ZXIuZGVmZXJyZWRJbmplY3QoY29tcG9uZW50SWQsIFtdKTtcbiAgICB9XG4gIH1cblxuICBHbG9iYWxTdHlsZS5wcm90b3R5cGUuY3JlYXRlU3R5bGVzID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpIHtcbiAgICB2YXIgZmxhdENTUyA9IGZsYXR0ZW4odGhpcy5ydWxlcywgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCk7XG4gICAgdmFyIGNzcyA9IHN0cmluZ2lmeVJ1bGVzKGZsYXRDU1MsICcnKTtcblxuICAgIHN0eWxlU2hlZXQuaW5qZWN0KHRoaXMuY29tcG9uZW50SWQsIGNzcyk7XG4gIH07XG5cbiAgR2xvYmFsU3R5bGUucHJvdG90eXBlLnJlbW92ZVN0eWxlcyA9IGZ1bmN0aW9uIHJlbW92ZVN0eWxlcyhzdHlsZVNoZWV0KSB7XG4gICAgdmFyIGNvbXBvbmVudElkID0gdGhpcy5jb21wb25lbnRJZDtcblxuICAgIGlmIChzdHlsZVNoZWV0Lmhhc0lkKGNvbXBvbmVudElkKSkge1xuICAgICAgc3R5bGVTaGVldC5yZW1vdmUoY29tcG9uZW50SWQpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUT0RPOiBvdmVyd3JpdGUgaW4tcGxhY2UgaW5zdGVhZCBvZiByZW1vdmUrY3JlYXRlP1xuXG5cbiAgR2xvYmFsU3R5bGUucHJvdG90eXBlLnJlbmRlclN0eWxlcyA9IGZ1bmN0aW9uIHJlbmRlclN0eWxlcyhleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KSB7XG4gICAgdGhpcy5yZW1vdmVTdHlsZXMoc3R5bGVTaGVldCk7XG4gICAgdGhpcy5jcmVhdGVTdHlsZXMoZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCk7XG4gIH07XG5cbiAgcmV0dXJuIEdsb2JhbFN0eWxlO1xufSgpO1xuXG4vLyBcblxuLy8gcGxhY2Ugb3VyIGNhY2hlIGludG8gc2hhcmVkIGNvbnRleHQgc28gaXQnbGwgcGVyc2lzdCBiZXR3ZWVuIEhNUnNcbmlmIChJU19CUk9XU0VSKSB7XG4gIHdpbmRvdy5zY0NHU0hNUkNhY2hlID0ge307XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdsb2JhbFN0eWxlKHN0cmluZ3MpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBydWxlcyA9IGNzcy5hcHBseSh1bmRlZmluZWQsIFtzdHJpbmdzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKTtcbiAgdmFyIGlkID0gJ3NjLWdsb2JhbC0nICsgbXVybXVyaGFzaChKU09OLnN0cmluZ2lmeShydWxlcykpO1xuICB2YXIgc3R5bGUgPSBuZXcgR2xvYmFsU3R5bGUocnVsZXMsIGlkKTtcblxuICB2YXIgR2xvYmFsU3R5bGVDb21wb25lbnQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIGluaGVyaXRzKEdsb2JhbFN0eWxlQ29tcG9uZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEdsb2JhbFN0eWxlQ29tcG9uZW50KHByb3BzKSB7XG4gICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBHbG9iYWxTdHlsZUNvbXBvbmVudCk7XG5cbiAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgIHZhciBfdGhpcyRjb25zdHJ1Y3RvciA9IF90aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGdsb2JhbFN0eWxlID0gX3RoaXMkY29uc3RydWN0b3IuZ2xvYmFsU3R5bGUsXG4gICAgICAgICAgc3R5bGVkQ29tcG9uZW50SWQgPSBfdGhpcyRjb25zdHJ1Y3Rvci5zdHlsZWRDb21wb25lbnRJZDtcblxuXG4gICAgICBpZiAoSVNfQlJPV1NFUikge1xuICAgICAgICB3aW5kb3cuc2NDR1NITVJDYWNoZVtzdHlsZWRDb21wb25lbnRJZF0gPSAod2luZG93LnNjQ0dTSE1SQ2FjaGVbc3R5bGVkQ29tcG9uZW50SWRdIHx8IDApICsgMTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGZpeGVzIEhNUiBjb21wYXRpYmlsaXR5LiBEb24ndCBhc2sgbWUgd2h5LCBidXQgdGhpcyBjb21iaW5hdGlvbiBvZlxuICAgICAgICogY2FjaGluZyB0aGUgY2xvc3VyZSB2YXJpYWJsZXMgdmlhIHN0YXRpY3MgYW5kIHRoZW4gcGVyc2lzdGluZyB0aGUgc3RhdGljcyBpblxuICAgICAgICogc3RhdGUgd29ya3MgYWNyb3NzIEhNUiB3aGVyZSBubyBvdGhlciBjb21iaW5hdGlvbiBkaWQuIMKvXFxfKOODhClfL8KvXG4gICAgICAgKi9cbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBnbG9iYWxTdHlsZTogZ2xvYmFsU3R5bGUsXG4gICAgICAgIHN0eWxlZENvbXBvbmVudElkOiBzdHlsZWRDb21wb25lbnRJZFxuICAgICAgfTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBHbG9iYWxTdHlsZUNvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh3aW5kb3cuc2NDR1NITVJDYWNoZVt0aGlzLnN0YXRlLnN0eWxlZENvbXBvbmVudElkXSkge1xuICAgICAgICB3aW5kb3cuc2NDR1NITVJDYWNoZVt0aGlzLnN0YXRlLnN0eWxlZENvbXBvbmVudElkXSAtPSAxO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBEZXBlbmRpbmcgb24gdGhlIG9yZGVyIFwicmVuZGVyXCIgaXMgY2FsbGVkIHRoaXMgY2FuIGNhdXNlIHRoZSBzdHlsZXMgdG8gYmUgbG9zdFxuICAgICAgICogdW50aWwgdGhlIG5leHQgcmVuZGVyIHBhc3Mgb2YgdGhlIHJlbWFpbmluZyBpbnN0YW5jZSwgd2hpY2ggbWF5XG4gICAgICAgKiBub3QgYmUgaW1tZWRpYXRlLlxuICAgICAgICovXG4gICAgICBpZiAod2luZG93LnNjQ0dTSE1SQ2FjaGVbdGhpcy5zdGF0ZS5zdHlsZWRDb21wb25lbnRJZF0gPT09IDApIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5nbG9iYWxTdHlsZS5yZW1vdmVTdHlsZXModGhpcy5zdHlsZVNoZWV0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgR2xvYmFsU3R5bGVDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBSZWFjdC5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBnbG9iYWwgc3R5bGUgY29tcG9uZW50ICcgKyB0aGlzLnN0YXRlLnN0eWxlZENvbXBvbmVudElkICsgJyB3YXMgZ2l2ZW4gY2hpbGQgSlNYLiBjcmVhdGVHbG9iYWxTdHlsZSBkb2VzIG5vdCByZW5kZXIgY2hpbGRyZW4uJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBTdHlsZVNoZWV0Q29uc3VtZXIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZ1bmN0aW9uIChzdHlsZVNoZWV0KSB7XG4gICAgICAgICAgX3RoaXMyLnN0eWxlU2hlZXQgPSBzdHlsZVNoZWV0IHx8IFN0eWxlU2hlZXQubWFzdGVyO1xuXG4gICAgICAgICAgdmFyIGdsb2JhbFN0eWxlID0gX3RoaXMyLnN0YXRlLmdsb2JhbFN0eWxlO1xuXG5cbiAgICAgICAgICBpZiAoZ2xvYmFsU3R5bGUuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIGdsb2JhbFN0eWxlLnJlbmRlclN0eWxlcyhTVEFUSUNfRVhFQ1VUSU9OX0NPTlRFWFQsIF90aGlzMi5zdHlsZVNoZWV0KTtcblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBUaGVtZUNvbnN1bWVyLFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IF90aGlzMi5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHM7XG5cblxuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0gX2V4dGVuZHMoe30sIF90aGlzMi5wcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoZW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgY29udGV4dC50aGVtZSA9IGRldGVybWluZVRoZW1lKF90aGlzMi5wcm9wcywgdGhlbWUsIGRlZmF1bHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZ2xvYmFsU3R5bGUucmVuZGVyU3R5bGVzKGNvbnRleHQsIF90aGlzMi5zdHlsZVNoZWV0KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEdsb2JhbFN0eWxlQ29tcG9uZW50O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgR2xvYmFsU3R5bGVDb21wb25lbnQuZ2xvYmFsU3R5bGUgPSBzdHlsZTtcbiAgR2xvYmFsU3R5bGVDb21wb25lbnQuc3R5bGVkQ29tcG9uZW50SWQgPSBpZDtcblxuXG4gIHJldHVybiBHbG9iYWxTdHlsZUNvbXBvbmVudDtcbn1cblxuLy8gXG5cbnZhciByZXBsYWNlV2hpdGVzcGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2VXaGl0ZXNwYWNlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcc3xcXFxcbi9nLCAnJyk7XG59O1xuXG5mdW5jdGlvbiBrZXlmcmFtZXMoc3RyaW5ncykge1xuICAvKiBXYXJuaW5nIGlmIHlvdSd2ZSB1c2VkIGtleWZyYW1lcyBvbiBSZWFjdCBOYXRpdmUgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybignYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuJyk7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJwb2xhdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHJ1bGVzID0gY3NzLmFwcGx5KHVuZGVmaW5lZCwgW3N0cmluZ3NdLmNvbmNhdChpbnRlcnBvbGF0aW9ucykpO1xuXG4gIHZhciBuYW1lID0gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShtdXJtdXJoYXNoKHJlcGxhY2VXaGl0ZXNwYWNlKEpTT04uc3RyaW5naWZ5KHJ1bGVzKSkpKTtcblxuICByZXR1cm4gbmV3IEtleWZyYW1lcyhuYW1lLCBzdHJpbmdpZnlSdWxlcyhydWxlcywgbmFtZSwgJ0BrZXlmcmFtZXMnKSk7XG59XG5cbi8vIFxuXG52YXIgd2l0aFRoZW1lID0gKGZ1bmN0aW9uIChDb21wb25lbnQkJDEpIHtcbiAgdmFyIFdpdGhUaGVtZSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRoZW1lQ29uc3VtZXIsXG4gICAgICBudWxsLFxuICAgICAgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IENvbXBvbmVudCQkMS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgdmFyIHRoZW1lUHJvcCA9IGRldGVybWluZVRoZW1lKHByb3BzLCB0aGVtZSwgZGVmYXVsdFByb3BzKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGVtZVByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdbd2l0aFRoZW1lXSBZb3UgYXJlIG5vdCB1c2luZyBhIFRoZW1lUHJvdmlkZXIgbm9yIHBhc3NpbmcgYSB0aGVtZSBwcm9wIG9yIGEgdGhlbWUgaW4gZGVmYXVsdFByb3BzIGluIGNvbXBvbmVudCBjbGFzcyBcIicgKyBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCQkMSkgKyAnXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCQkMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7IHRoZW1lOiB0aGVtZVByb3AsIHJlZjogcmVmIH0pKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcblxuICBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoVGhlbWUsIENvbXBvbmVudCQkMSk7XG5cbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gJ1dpdGhUaGVtZSgnICsgZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQkJDEpICsgJyknO1xuXG4gIHJldHVybiBXaXRoVGhlbWU7XG59KTtcblxuLy8gXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgX19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0hBVU5URURfQllfU1BPT0tZX0dIT1NUUyA9IHtcbiAgU3R5bGVTaGVldDogU3R5bGVTaGVldFxufTtcblxuLy8gXG5cbi8qIFdhcm5pbmcgaWYgeW91J3ZlIGltcG9ydGVkIHRoaXMgZmlsZSBvbiBSZWFjdCBOYXRpdmUgKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgeW91J3ZlIGltcG9ydGVkICdzdHlsZWQtY29tcG9uZW50cycgb24gUmVhY3QgTmF0aXZlLlxcblwiICsgXCJQZXJoYXBzIHlvdSdyZSBsb29raW5nIHRvIGltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJz9cXG5cIiArICdSZWFkIG1vcmUgYWJvdXQgdGhpcyBhdCBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9iYXNpY3MjcmVhY3QtbmF0aXZlJyk7XG59XG5cbi8qIFdhcm5pbmcgaWYgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mIHN0eWxlZC1jb21wb25lbnRzICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IudXNlckFnZW50ID09PSAnc3RyaW5nJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ05vZGUuanMnKSA9PT0gLTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdqc2RvbScpID09PSAtMSkge1xuICB3aW5kb3dbJ19fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fJ10gPSB3aW5kb3dbJ19fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fJ10gfHwgMDtcblxuICBpZiAod2luZG93WydfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfXyddID09PSAxKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFwiICsgJ1RoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIG5vdCByZW5kZXJpbmcgcHJvcGVybHksIGVycm9ycyBoYXBwZW5pbmcgZHVyaW5nIHJlaHlkcmF0aW9uIHByb2Nlc3MgJyArICdhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBhIGdvb2QgcmVhc29uLlxcblxcbicgKyAnU2VlIGh0dHBzOi8vcy1jLnNoLzJCQVh6ZWQgZm9yIG1vcmUgaW5mby4nKTtcbiAgfVxuXG4gIHdpbmRvd1snX19zdHlsZWQtY29tcG9uZW50cy1pbml0X18nXSArPSAxO1xufVxuXG4vL1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQ7XG5leHBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSwgY3NzLCBpc1N0eWxlZENvbXBvbmVudCwga2V5ZnJhbWVzLCBTZXJ2ZXJTdHlsZVNoZWV0LCBTdHlsZVNoZWV0Q29uc3VtZXIsIFN0eWxlU2hlZXRDb250ZXh0LCBTdHlsZVNoZWV0TWFuYWdlciwgVGhlbWVDb25zdW1lciwgVGhlbWVDb250ZXh0LCBUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWUsIF9fRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9IQVVOVEVEX0JZX1NQT09LWV9HSE9TVFMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC1jb21wb25lbnRzLmVzbS5qcy5tYXBcbiIsIihmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyAobW9kdWxlWydleHBvcnRzJ10gPSBmYWN0b3J5KCkpIDpcblx0XHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10gPyBkZWZpbmUoZmFjdG9yeSgpKSA6XG5cdFx0XHQod2luZG93WydzdHlsaXNSdWxlU2hlZXQnXSA9IGZhY3RvcnkoKSlcbn0oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0J1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5zZXJ0UnVsZSkge1xuXHRcdHZhciBkZWxpbWl0ZXIgPSAnLyp8Ki8nXG5cdFx0dmFyIG5lZWRsZSA9IGRlbGltaXRlcisnfSdcblxuXHRcdGZ1bmN0aW9uIHRvU2hlZXQgKGJsb2NrKSB7XG5cdFx0XHRpZiAoYmxvY2spXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aW5zZXJ0UnVsZShibG9jayArICd9Jylcblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHR9XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcnVsZVNoZWV0IChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMsIHBhcmVudHMsIGxpbmUsIGNvbHVtbiwgbGVuZ3RoLCBucywgZGVwdGgsIGF0KSB7XG5cdFx0XHRzd2l0Y2ggKGNvbnRleHQpIHtcblx0XHRcdFx0Ly8gcHJvcGVydHlcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdC8vIEBpbXBvcnRcblx0XHRcdFx0XHRpZiAoZGVwdGggPT09IDAgJiYgY29udGVudC5jaGFyQ29kZUF0KDApID09PSA2NClcblx0XHRcdFx0XHRcdHJldHVybiBpbnNlcnRSdWxlKGNvbnRlbnQrJzsnKSwgJydcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHQvLyBzZWxlY3RvclxuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0aWYgKG5zID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQgKyBkZWxpbWl0ZXJcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHQvLyBhdC1ydWxlXG5cdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRzd2l0Y2ggKG5zKSB7XG5cdFx0XHRcdFx0XHQvLyBAZm9udC1mYWNlLCBAcGFnZVxuXHRcdFx0XHRcdFx0Y2FzZSAxMDI6XG5cdFx0XHRcdFx0XHRjYXNlIDExMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGluc2VydFJ1bGUoc2VsZWN0b3JzWzBdK2NvbnRlbnQpLCAnJ1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQgKyAoYXQgPT09IDAgPyBkZWxpbWl0ZXIgOiAnJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgLTI6XG5cdFx0XHRcdFx0Y29udGVudC5zcGxpdChuZWVkbGUpLmZvckVhY2godG9TaGVldClcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vdW5pdGxlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWVtb2l6ZS1vbmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1odG1sLXBhcnNlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10aXBweVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWxvYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxpcy9zdHlsaXMubWluXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCByZWxvYWQgZnJvbSAncmVsb2FkJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vc3JjL0FwcCc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vc3JjL1JvdXRlcyc7XG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9zcmMvc3RvcmUnO1xuXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG52YXIgaW5kZXggPSBmcy5yZWFkRmlsZVN5bmMoJ2J1aWxkL2luZGV4Lmh0bWwnKS50b1N0cmluZygpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnYnVpbGQnKSk7XG5cbmlmIChkZXYpIHJlbG9hZChhcHApO1xuXG5hcHAudXNlKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKCk7XG5cdGNvbnN0IGFjdGl2ZVJvdXRlID0gcm91dGVzLmZpbmQoKHJvdXRlKSA9PiBtYXRjaFBhdGgocmVxLnVybCwgcm91dGUpKSB8fCB7fTtcblx0Y29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSlcblx0Y29uc29sZS5sb2coYWN0aXZlUm91dGUpO1xuXG5cdGNvbnN0IHByb21pc2UgPSBhY3RpdmVSb3V0ZS5sb2FkRGF0YVxuXHRcdD8gYWN0aXZlUm91dGUubG9hZERhdGEoc3RvcmUpXG5cdFx0OiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRwcm9taXNlLnRoZW4oKGRhdGEpID0+IHtcblx0XHRjb25zdCByZWFjdE1hcmt1cCA9IChcblx0XHRcdDxSZWFjdC5TdHJpY3RNb2RlPlxuXHRcdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdFx0XHQ8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXt7fX0+XG5cdFx0XHRcdFx0XHQ8QXBwIC8+XG5cdFx0XHRcdFx0PC9TdGF0aWNSb3V0ZXI+XG5cdFx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0XHQ8L1JlYWN0LlN0cmljdE1vZGU+XG5cdFx0KTtcblx0XHRjb25zdCBodG1sID0gcmVuZGVyVG9TdHJpbmcocmVhY3RNYXJrdXApO1xuXHRcdGxldCBmaW5hbEh0bWwgPSBpbmRleFxuXHRcdFx0LnJlcGxhY2UoJzxkaXYgaWQ9XCJyb290XCI+PC9kaXY+JywgYDxkaXYgaWQ9XCJyb290XCI+JHtodG1sfTwvZGl2PmApXG5cdFx0XHQucmVwbGFjZShcblx0XHRcdFx0Jy8vc2NyaXB0Jyxcblx0XHRcdFx0YHdpbmRvdy5fSU5JVElBTF9EQVRBXyA9ICR7c2VyaWFsaXplKHN0b3JlLmdldFN0YXRlKCkpLnJlcGxhY2UoXG5cdFx0XHRcdFx0LzwvZyxcblx0XHRcdFx0XHQnXFxcXHUwMDNjJ1xuXHRcdFx0XHQpfWBcblx0XHRcdCk7XG5cdFx0Y29uc29sZS5sb2coJ3dvcmtpbmcnLCBmaW5hbEh0bWwpO1xuXHRcdHJlcy5zZW5kKGZpbmFsSHRtbCk7XG5cdFx0cmVzLmVuZCgpO1xuXHR9KTtcbn0pO1xuXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IGNvbnNvbGUubG9nKGBsaXN0ZW5pbmcgb24gJHtQT1JUfWApKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=