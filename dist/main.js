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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

if (_setAuthToken.isClient && localStorage.token) {
  (0, _setAuthToken.setAuthToken)(localStorage.token);
}

const App = ({
  route
}) => {
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
    exact,
    component: C,
    render
  }) => {
    /*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, _extends({
      key: path,
      path: path,
      exact: exact
    }, C ? {
      component: {
        C
      }
    } : {
      render: {
        render
      }
    })));
  }))), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, null));
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

var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ "./src/App.js"));

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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import PrivateRoute from './helpers/PrivateRoute';
const routes = [{
  component: _App.default,
  routes: [{
    path: '/home',
    exact: true,
    component: _Home.default
  }, {
    path: '/about',
    exact: true,
    component: _About.default
  }, {
    path: '/learn',
    exact: true,
    component: _Learn.default
  }, {
    path: '/blog/read/:name',
    exact: true,
    component: _Article.default
  }, {
    path: '/learn/:specialityName',
    exact: true,
    component: _Preview.default
  }, {
    path: '/blog',
    exact: true,
    component: _Blog.default
  }, {
    path: '/signup',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_Auth.default, _extends({}, props, {
      type: 'signup'
    }))
  }, {
    path: '/signup/:referCode',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_Auth.default, _extends({}, props, {
      type: 'signup'
    }))
  }, {
    path: '/login',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_Auth.default, _extends({}, props, {
      type: 'login'
    }))
  }, {
    path: '/AddCard',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_UpsertCard.default, _extends({
      edit: false
    }, props))
  }, {
    path: '/updatespeciality/:specialityName',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_UpsertCard.default, _extends({
      edit: true
    }, props))
  }, {
    path: '/:specialityName/topic/add',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_UpsertTopic.default, _extends({
      edit: false
    }, props))
  }, {
    path: '/:specialityName/topic/edit/:topicId',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_UpsertTopic.default, _extends({
      edit: true
    }, props))
  }, {
    path: '/article/add',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_UpsertArticle.default, _extends({
      edit: false
    }, props))
  }, {
    path: '/article/update',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_UpsertArticle.default, _extends({
      edit: true
    }, props))
  }, {
    path: '/video/add/:topicId',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_UpsertVideo.default, _extends({
      edit: false
    }, props))
  }, {
    path: '/video/update/:videoId',
    exact: true,
    render: props => /*#__PURE__*/React.createElement(_UpsertVideo.default, _extends({
      edit: true
    }, props))
  }]
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
  (void 0).loadData = store => {
    return store.dispatch(getAllArticles());
  };

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");;

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");;

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

var _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ "redux-thunk"));

var _serializeJavascript = _interopRequireDefault(__webpack_require__(/*! serialize-javascript */ "serialize-javascript"));

var _redux = __webpack_require__(/*! redux */ "redux");

var _Routes = _interopRequireDefault(__webpack_require__(/*! ./src/Routes */ "./src/Routes.js"));

var _reducers = _interopRequireDefault(__webpack_require__(/*! ./src/reducers */ "./src/reducers/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = __webpack_require__(/*! path */ "path");

const PORT = process.env.PORT || 3000;

var index = _fs.default.readFileSync('build/index.html').toString(); // const parts = html.split('<!-- not rendered -->');


const app = (0, _express.default)();
const dev = "development" === 'development';
const store = (0, _redux.createStore)(_reducers.default, (0, _redux.applyMiddleware)(_reduxThunk.default));
app.use(_express.default.static('build'));
if (dev) (0, _reload.default)(app);
app.use(async (req, res) => {
  const branch = (0, _reactRouterDom.matchPath)(_Routes.default, req.url);
  console.log('branch', branch);
  const promises = branch.map(({
    route
  }) => {
    // console.log(route);
    let component = route.component;
    console.log(component);
    let loadData = component.loadData;
    return loadData instanceof Function ? loadData(store) : Promise.resolve(null);
  });
  Promise.all(promises).then(data => {
    const reactMarkup = /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
      location: req.url,
      context: {}
    }, renderRoutes(_Routes.default))));

    const html = (0, _server.renderToString)(reactMarkup);
    let finalHtml = index.replace('<div id="root"></div>', `<div id="root">${html}</div>`).replace('//script', `window._INITIAL_DATA_ = ${(0, _serializeJavascript.default)(store.getState())}`); // console.log(finalHtml);
    // console.log('working');

    res.send(finalHtml);
    res.end();
  });
});
app.listen(PORT, () => console.log(`listening on ${PORT}`));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvUm91dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3NwZWNpYWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy90b2FzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3RvcGljLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy91aS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3ZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9BZGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0NoZXZyb25zLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaWNvbnMvRGVsZXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9Mb2NrLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9SZWFkLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0Jsb2cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvTGVhcm4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9QcmV2aWV3LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVXBzZXJ0QXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9VcHNlcnRUb3BpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydFZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvUHJpdmF0ZVJvdXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvU2VvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9zZXRBdXRoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0J1dHRvbnMvVXNlckJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0J1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL05hdmJhci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL1NpZ25lZEluTGlua3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L05hdmJhci9TaWduZWRPdXRMaW5rcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy9hcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvc3BlY2lhbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy90b3BpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy91aS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy92aWRlby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9hYm91dC9BYm91dFVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Fib3V0L1F1ZXN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ibG9nL0FsbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ibG9nL0ZlYXR1cmVkLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Jsb2cvTGF0ZXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2VkaXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ob21lL0hlcm8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvaG9tZS9IZXJvQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvbGVhcm4vQXJ0aWNsZU5hbWVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2xlYXJuL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvbGVhcm4vVmlkZW9OYW1lcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9wcmV2aWV3L0FydGljbGVQcmV2aWV3LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL3ByZXZpZXcvVG9waWNzT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvcHJldmlldy9WaWRlb1ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ltZy9jZ1RyYW5zcGFyZW50LlBORyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWh0bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10aXBweVwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWxvYWRcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJpc0NsaWVudCIsImxvY2FsU3RvcmFnZSIsInRva2VuIiwiQXBwIiwicm91dGUiLCJzdG9yZSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsIlJvdXRlcyIsIm1hcCIsInBhdGgiLCJleGFjdCIsImNvbXBvbmVudCIsIkMiLCJyZW5kZXIiLCJyb3V0ZXMiLCJIb21lIiwiQWJvdXQiLCJMZWFybiIsIkFydGljbGUiLCJQcmV2aWV3IiwiQmxvZyIsInByb3BzIiwiY2xlYXJBcnRpY2xlIiwiaWQiLCJ0eXBlIiwiZ2V0QXJ0aWNsZSIsInJlcyIsImRhdGEiLCJwYXlsb2FkIiwiZXJyb3IiLCJnZXRBbGxBcnRpY2xlcyIsInN0YXR1cyIsImFkZEFydGljbGUiLCJlZGl0QXJ0aWNsZSIsInNwZWNpYWxpdHlOYW1lIiwicmVzMiIsImRlbGV0ZUFydGljbGUiLCJhcnRpY2xlSWQiLCJ0b3BpY0lkIiwibG9hZFVzZXIiLCJ1c2VySWQiLCJnZXRJdGVtIiwiVVNFUl9MT0FERUQiLCJ1c2VyIiwiZXJyIiwiQVVUSF9FUlJPUiIsInJlZnJlc2hVc2VyIiwicmVnaXN0ZXIiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJSRUdJU1RFUl9TVUNDRVNTIiwiUkVHSVNURVJfRkFJTCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMIiwibG9nb3V0IiwiY2xlYXIiLCJzZW5kUmVzZXRFbWFpbCIsImNvbmZpZyIsIm1lc3NhZ2VzQXJyYXkiLCJtZXNzYWdlcyIsImZvckVhY2giLCJtZXNzYWdlIiwibXNnIiwiU0VORF9SRVNFVF9FTUFJTCIsImVycm9ycyIsInJlc3BvbnNlIiwiU0VORF9SRVNFVF9FTUFJTF9GQUlMIiwiZ2V0U3BlY2lhbGl0aWVzIiwiY2xlYXJTcGVjaWFsaXR5IiwiZ2V0U3BlY2lhbGl0eSIsInNwZWNpYWxpdHkiLCJhZGRTcGVjaWFsaXR5IiwiZWRpdFNwZWNpYWxpdHkiLCJkZWxldGVTcGVjaWFsaXR5Iiwic3VjY2Vzc1RvYXN0IiwidG9hc3QiLCJzdWNjZXNzIiwicG9zaXRpb24iLCJlcnJvclRvYXN0IiwiZ2V0VG9waWNzIiwiYWRkVG9waWMiLCJlZGl0VG9waWMiLCJ1bmxvY2tUb3BpYyIsImRlbGV0ZVRvcGljIiwiU0VUX0FMRVJUIiwiUkVNT1ZFX0FMRVJUIiwiTE9HT1VUIiwic2V0T3BlblRvcGljcyIsIm9wZW5Ub3BpY3NBcnJheSIsImdldFN0YXRlIiwidWkiLCJvcGVuVG9waWNzIiwiaW5jbHVkZXMiLCJwdXNoIiwic3BsaWNlIiwiaW5kZXhPZiIsInNldERpc3BsYXlNb2RlIiwiZGlzcGxheU1vZGUiLCJzZXRJdGVtIiwiZ2V0VmlkZW8iLCJhZGRWaWRlbyIsInJlc1RvcGljIiwiZWRpdFZpZGVvIiwiZGVsZXRlVmlkZW8iLCJ2aWRlb0lkIiwic2VsZWN0VmlkZW8iLCJ2aWRlbyIsIkFkZCIsInNpemUiLCJjb2xvciIsIkNoZXZyb25zVXAiLCJDaGV2cm9uc0xlZnQiLCJDcm9zcyIsIkRlbGV0ZSIsIkxvY2siLCJoYW5kbGVyIiwiVW5sb2NrIiwiUmVhZCIsIlVwZGF0ZSIsIm9wYWNpdHkiLCJ0ZXh0QWxpZ24iLCJuYW1lIiwibWF0Y2giLCJwYXJhbXMiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsImdldEFydGljbGVFZmZlY3QiLCJyZXBsYWNlIiwiZ29Ub1RvcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJodG1sIiwiY29udGVudCIsInBhZGRpbmciLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImF1dGgiLCJBdXRoIiwic2V0RGF0YSIsImRpblRleHQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicHJldiIsInRhcmdldCIsInZhbHVlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJhZ2UiLCJjb2RlUmVmZmVyZWQiLCJhcnRpY2xlcyIsImlzQWRtaW4iLCJsb2FkRGF0YSIsImxlbmd0aCIsImZvbnRGYW1pbHkiLCJob21lQ29udGVudCIsImNsb3NlIiwic2V0Q2xvc2UiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiZm9udFNpemUiLCJVcHNlcnRBcnRpY2xlIiwic3BlY2lhbGl0aWVzIiwicHJldkFydGljbGUiLCJzZXRjb250ZW50Iiwic2V0bmFtZSIsImtleXdvcmRzIiwic2V0QXJ0aWNsZUtleXdvcmRzIiwiZmVhdHVyZWQiLCJzZXRmZWF0dXJlZCIsInRodW1ibmFpbFVybCIsInNldHRodW1ibmFpbFVybCIsInNjcm9sbFRvIiwiZWxlbWVudCIsIndpbmRvdyIsInNjcm9sbCIsImJlaGF2aW9yIiwibGVmdCIsInRvcCIsIm9mZnNldFRvcCIsImVkaXQiLCJoYW5kbGVFZGl0b3IiLCJoYW5kbGVFZGl0IiwiX2lkIiwiTmFtZSIsImhhbmRsZUFkZCIsInNlbGVjdGVkQXJ0aWNsZSIsIlVwc2VydENhcmQiLCJzZXRTdGF0ZSIsImZldGNoRGF0YSIsImltYWdlVXJsIiwiaGFuZGxlQ2hhbmdlIiwiVXBzZXJ0VG9waWMiLCJsb2NhdGlvbiIsImxvY2tlZCIsImlzTG9ja2VkIiwic3BlY2lhbGl0eUlkIiwiVXBzZXJ0VmlkZW8iLCJwcmV2VmlkZW8iLCJzZXROYW1lIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInVybCIsInNldFVybCIsInNlbGVjdGVkVmlkZW8iLCJQcml2YXRlUm91dGUiLCJDb21wb25lbnQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJyZXN0IiwiU2VvIiwidGl0bGUiLCJsYW5nIiwibWV0YSIsInJpY2hyZXN1bHQiLCJtZXRhVGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJwcm9wZXJ0eSIsImNvbmNhdCIsInJlbCIsImhyZWYiLCJpbm5lckhUTUwiLCJzZXJ2aWNlUG9zdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJwb3N0IiwiU0VSVklDRV9VUkwiLCJ0aGVuIiwiY2F0Y2giLCJzZXJ2aWNlR2V0IiwiZ2V0Iiwic2V0QXV0aFRva2VuIiwiZGVmYXVsdHMiLCJjb21tb24iLCJUb29sdGlwV3JhcHBlciIsImNoaWxkcmVuIiwiQWRtaW5CdXR0b25zIiwiQWRtaW5CdXR0b25zV3JhcHBlciIsInBhdGhuYW1lIiwiYmFja2dyb3VuZCIsImJvcmRlciIsIm91dGxpbmUiLCJJbm5lckRpdiIsImRhcmsiLCJiZyIsImJhY2tncm91bmRDb2xvciIsIkJ1dHRvbiIsImlzQnV0dG9uIiwiTG9ja0J1dHRvbiIsIkZvb3RlclNvY2lhbE1lZGlhIiwiRm9vdGVyIiwic2V0RW1haWwiLCJzZXRNZXNzYWdlIiwic2V0Rm9vdGVyTWVzc2FnZSIsIk5hdmJhciIsIm5hdmJhckV4cGFuZGVkIiwic2V0bmF2YmFyRXhwYW5kZWQiLCJzd2l0Y2hlZCIsInNldHN3aXRjaGVkIiwibW9kZSIsInJlbW92ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIkxvZ28iLCJ3aWR0aCIsInBvaW50cyIsIlNpZ25lZEluTGlua3MiLCJTaWduZWRPdXRMaW5rcyIsIlByZWxvYWRlciIsImluaXRpYWxTdGF0ZSIsImFydGljbGVSZWR1Y2VyIiwiYWN0aW9uIiwidG9waWNzIiwibG9hZGluZyIsImF1dGhSZWR1Y2VyIiwicm9sZSIsInJlbW92ZUl0ZW0iLCJ0b3BpYyIsInNwZWNpYWxpdHlSZWR1Y2VyIiwidG9waWNSZWR1Y2VyIiwidWlSZWR1Y2VyIiwidmlkZW9SZWR1Y2VyIiwiUHJvZmlsZUNhcmQiLCJiaW8iLCJwb3J0Zm9saW9VcmwiLCJpbnN0YVVybCIsInR3aXR0ZXJVcmwiLCJnaXRodWJVcmwiLCJBYm91dFVzIiwib25zY3JvbGwiLCJteUZ1bmN0aW9uIiwic2Nyb2xsWSIsIlF1ZXN0aW9ucyIsIkFsbCIsIkFydGljbGVJZCIsImNyZWF0ZWRBdCIsImZvcm1hdCIsIkZlYXR1cmVkIiwiTGF0ZXN0IiwiSGVybyIsIkhlcm9DYXJkcyIsImhlcm9CbHVlIiwiaGVyb09yYW5nZSIsImhlcm9HcmVlbiIsInNjcm9sbEZ1bmN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkFydGljbGVOYW1lcyIsImhhbmRsZURlbGV0ZSIsIkFydGljbGVOYW1lIiwiY29uZmlybSIsInByb21wdCIsInBvcyIsIkNhcmQiLCJpdGVtIiwiYWx0IiwiVmlkZW9OYW1lcyIsIlZpZGVvTmFtZSIsIkFydGljbGVQcmV2aWV3IiwiU2VsZWN0ZWRBcnRpY2xlIiwiUmVhZE1vcmVVcmwiLCJoYW5kbGVVbmxvY2siLCJUb3BpY3NPdmVydmlldyIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwic3BsaXQiLCJqb2luIiwidW5Mb2NrZWRUb3BpY3MiLCJ2aWRlb3MiLCJBY3Rpb25CdXR0b25zIiwiVmlkZW9QcmV2aWV3IiwibWlkZGxld2FyZSIsInRodW5rIiwicm9vdFJlZHVjZXIiLCJyZXF1aXJlIiwiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJpbmRleCIsImZzIiwicmVhZEZpbGVTeW5jIiwidG9TdHJpbmciLCJhcHAiLCJkZXYiLCJyb290UmVkdWNlcnMiLCJ1c2UiLCJleHByZXNzIiwic3RhdGljIiwicmVxIiwiYnJhbmNoIiwicHJvbWlzZXMiLCJGdW5jdGlvbiIsImFsbCIsInJlYWN0TWFya3VwIiwicmVuZGVyUm91dGVzIiwiZmluYWxIdG1sIiwic2VuZCIsImVuZCIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQUlBLDBCQUFZQyxZQUFZLENBQUNDLEtBQTdCLEVBQW9DO0FBQ25DLGtDQUFhRCxZQUFZLENBQUNDLEtBQTFCO0FBQ0E7O0FBRUQsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDMUIsd0JBQVUsTUFBTTtBQUNmQyxtQkFBTUMsUUFBTixDQUFlLHFCQUFmO0FBQ0EsR0FGRCxFQUVHLEVBRkg7QUFHQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQSxzQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLGVBQUQsT0FERCxlQUVDLDZCQUFDLDZCQUFELHFCQUNDLDZCQUFDLHNCQUFELHFCQUNDLDZCQUFDLHFCQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNDLDZCQUFDLHdCQUFEO0FBQVUsTUFBRSxFQUFDO0FBQWIsSUFERCxDQURELEVBSUVDLGdCQUFPQyxHQUFQLENBQVcsQ0FBQztBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUMsYUFBUyxFQUFFQyxDQUExQjtBQUE2QkM7QUFBN0IsR0FBRCxLQUEyQztBQUN0RDtBQUFBLDZFQUNDLDZCQUFDLHFCQUFEO0FBQ0MsU0FBRyxFQUFFSixJQUROO0FBRUMsVUFBSSxFQUFFQSxJQUZQO0FBR0MsV0FBSyxFQUFFQztBQUhSLE9BSU1FLENBQUMsR0FBRztBQUFFRCxlQUFTLEVBQUU7QUFBRUM7QUFBRjtBQUFiLEtBQUgsR0FBMEI7QUFBRUMsWUFBTSxFQUFFO0FBQUVBO0FBQUY7QUFBVixLQUpqQyxFQUREO0FBUUEsR0FUQSxDQUpGLENBREQsQ0FGRCxlQW1CQyw2QkFBQyw2QkFBRCxPQW5CRCxDQUREO0FBdUJBLENBNUJEOztlQThCZVosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNmOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFDQTtBQUVBLE1BQU1hLE1BQU0sR0FBRyxDQUNkO0FBQ0NILFdBQVMsRUFBRVYsWUFEWjtBQUVDYSxRQUFNLEVBQUUsQ0FDUDtBQUNDTCxRQUFJLEVBQUUsT0FEUDtBQUVDQyxTQUFLLEVBQUUsSUFGUjtBQUdDQyxhQUFTLEVBQUVJO0FBSFosR0FETyxFQU1QO0FBQ0NOLFFBQUksRUFBRSxRQURQO0FBRUNDLFNBQUssRUFBRSxJQUZSO0FBR0NDLGFBQVMsRUFBRUs7QUFIWixHQU5PLEVBV1A7QUFDQ1AsUUFBSSxFQUFFLFFBRFA7QUFFQ0MsU0FBSyxFQUFFLElBRlI7QUFHQ0MsYUFBUyxFQUFFTTtBQUhaLEdBWE8sRUFnQlA7QUFDQ1IsUUFBSSxFQUFFLGtCQURQO0FBRUNDLFNBQUssRUFBRSxJQUZSO0FBR0NDLGFBQVMsRUFBRU87QUFIWixHQWhCTyxFQXFCUDtBQUNDVCxRQUFJLEVBQUUsd0JBRFA7QUFFQ0MsU0FBSyxFQUFFLElBRlI7QUFHQ0MsYUFBUyxFQUFFUTtBQUhaLEdBckJPLEVBMEJQO0FBQ0NWLFFBQUksRUFBRSxPQURQO0FBRUNDLFNBQUssRUFBRSxJQUZSO0FBR0NDLGFBQVMsRUFBRVM7QUFIWixHQTFCTyxFQStCUDtBQUNDWCxRQUFJLEVBQUUsU0FEUDtBQUVDQyxTQUFLLEVBQUUsSUFGUjtBQUdDRyxVQUFNLEVBQUdRLEtBQUQsaUJBQVcsb0JBQUMsYUFBRCxlQUFVQSxLQUFWO0FBQWlCLFVBQUksRUFBRTtBQUF2QjtBQUhwQixHQS9CTyxFQW9DUDtBQUNDWixRQUFJLEVBQUUsb0JBRFA7QUFFQ0MsU0FBSyxFQUFFLElBRlI7QUFHQ0csVUFBTSxFQUFHUSxLQUFELGlCQUFXLG9CQUFDLGFBQUQsZUFBVUEsS0FBVjtBQUFpQixVQUFJLEVBQUU7QUFBdkI7QUFIcEIsR0FwQ08sRUF5Q1A7QUFDQ1osUUFBSSxFQUFFLFFBRFA7QUFFQ0MsU0FBSyxFQUFFLElBRlI7QUFHQ0csVUFBTSxFQUFHUSxLQUFELGlCQUFXLG9CQUFDLGFBQUQsZUFBVUEsS0FBVjtBQUFpQixVQUFJLEVBQUU7QUFBdkI7QUFIcEIsR0F6Q08sRUE4Q1A7QUFDQ1osUUFBSSxFQUFFLFVBRFA7QUFFQ0MsU0FBSyxFQUFFLElBRlI7QUFHQ0csVUFBTSxFQUFHUSxLQUFELGlCQUFXLG9CQUFDLG1CQUFEO0FBQVksVUFBSSxFQUFFO0FBQWxCLE9BQTZCQSxLQUE3QjtBQUhwQixHQTlDTyxFQW1EUDtBQUNDWixRQUFJLEVBQUUsbUNBRFA7QUFFQ0MsU0FBSyxFQUFFLElBRlI7QUFHQ0csVUFBTSxFQUFHUSxLQUFELGlCQUFXLG9CQUFDLG1CQUFEO0FBQVksVUFBSSxFQUFFO0FBQWxCLE9BQTRCQSxLQUE1QjtBQUhwQixHQW5ETyxFQXdEUDtBQUNDWixRQUFJLEVBQUUsNEJBRFA7QUFFQ0MsU0FBSyxFQUFFLElBRlI7QUFHQ0csVUFBTSxFQUFHUSxLQUFELGlCQUFXLG9CQUFDLG9CQUFEO0FBQWEsVUFBSSxFQUFFO0FBQW5CLE9BQThCQSxLQUE5QjtBQUhwQixHQXhETyxFQTZEUDtBQUNDWixRQUFJLEVBQUUsc0NBRFA7QUFFQ0MsU0FBSyxFQUFFLElBRlI7QUFHQ0csVUFBTSxFQUFHUSxLQUFELGlCQUFXLG9CQUFDLG9CQUFEO0FBQWEsVUFBSSxFQUFFO0FBQW5CLE9BQTZCQSxLQUE3QjtBQUhwQixHQTdETyxFQWtFUDtBQUNDWixRQUFJLEVBQUUsY0FEUDtBQUVDQyxTQUFLLEVBQUUsSUFGUjtBQUdDRyxVQUFNLEVBQUdRLEtBQUQsaUJBQVcsb0JBQUMsc0JBQUQ7QUFBZSxVQUFJLEVBQUU7QUFBckIsT0FBZ0NBLEtBQWhDO0FBSHBCLEdBbEVPLEVBdUVQO0FBQ0NaLFFBQUksRUFBRSxpQkFEUDtBQUVDQyxTQUFLLEVBQUUsSUFGUjtBQUdDRyxVQUFNLEVBQUdRLEtBQUQsaUJBQVcsb0JBQUMsc0JBQUQ7QUFBZSxVQUFJLEVBQUU7QUFBckIsT0FBK0JBLEtBQS9CO0FBSHBCLEdBdkVPLEVBNEVQO0FBQ0NaLFFBQUksRUFBRSxxQkFEUDtBQUVDQyxTQUFLLEVBQUUsSUFGUjtBQUdDRyxVQUFNLEVBQUdRLEtBQUQsaUJBQVcsb0JBQUMsb0JBQUQ7QUFBYSxVQUFJLEVBQUU7QUFBbkIsT0FBOEJBLEtBQTlCO0FBSHBCLEdBNUVPLEVBaUZQO0FBQ0NaLFFBQUksRUFBRSx3QkFEUDtBQUVDQyxTQUFLLEVBQUUsSUFGUjtBQUdDRyxVQUFNLEVBQUdRLEtBQUQsaUJBQVcsb0JBQUMsb0JBQUQ7QUFBYSxVQUFJLEVBQUU7QUFBbkIsT0FBNkJBLEtBQTdCO0FBSHBCLEdBakZPO0FBRlQsQ0FEYyxDQUFmO2VBNkZlUCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R2Y7O0FBQ0E7O0FBQ08sTUFBTVEsWUFBWSxHQUFJQyxFQUFELElBQVEsTUFBT25CLFFBQVAsSUFBb0I7QUFDdERBLFVBQVEsQ0FBQztBQUNQb0IsUUFBSSxFQUFFO0FBREMsR0FBRCxDQUFSO0FBR0QsQ0FKTTs7OztBQU1BLE1BQU1DLFVBQVUsR0FBSUYsRUFBRCxJQUFRLE1BQU9uQixRQUFQLElBQW9CO0FBQ3BELE1BQUk7QUFDRixVQUFNc0IsR0FBRyxHQUFHLE1BQU0seUJBQVksbUJBQWtCSCxFQUFHLEVBQWpDLENBQWxCO0FBQ0FsQixXQUFPLENBQUNDLEdBQVIsQ0FBWW9CLEdBQUcsQ0FBQ0MsSUFBaEI7QUFDQSw2QkFBYUQsR0FBYjtBQUNBdEIsWUFBUSxDQUFDO0FBQ1BvQixVQUFJLEVBQUUsYUFEQztBQUVQSSxhQUFPLEVBQUVGLEdBQUcsQ0FBQ0M7QUFGTixLQUFELENBQVI7QUFJRCxHQVJELENBUUUsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsMkJBQVdBLEtBQVg7QUFDQXpCLFlBQVEsQ0FBQztBQUNQb0IsVUFBSSxFQUFFLG1CQURDO0FBRVBJLGFBQU8sRUFBRTtBQUZGLEtBQUQsQ0FBUjtBQUlEO0FBQ0YsQ0FoQk07Ozs7QUFrQkEsTUFBTUUsY0FBYyxHQUFHLE1BQU0sTUFBTzFCLFFBQVAsSUFBb0I7QUFDdEQsTUFBSTtBQUNGLFVBQU1zQixHQUFHLEdBQUcsTUFBTSx5QkFBWSxpQkFBWixDQUFsQjtBQUNBckIsV0FBTyxDQUFDQyxHQUFSLENBQVlvQixHQUFHLENBQUNLLE1BQWhCO0FBQ0EsNkJBQWFMLEdBQWI7QUFDQXRCLFlBQVEsQ0FBQztBQUNQb0IsVUFBSSxFQUFFLGtCQURDO0FBRVBJLGFBQU8sRUFBRUYsR0FBRyxDQUFDQztBQUZOLEtBQUQsQ0FBUjtBQUlELEdBUkQsQ0FRRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCwyQkFBV0EsS0FBWDtBQUNBekIsWUFBUSxDQUFDO0FBQ1BvQixVQUFJLEVBQUUsd0JBREM7QUFFUEksYUFBTyxFQUFFO0FBRkYsS0FBRCxDQUFSO0FBSUQ7QUFDRixDQWhCTTs7OztBQWtCQSxNQUFNSSxVQUFVLEdBQUlMLElBQUQsSUFBVSxNQUFPdkIsUUFBUCxJQUFvQjtBQUN0RCxNQUFJO0FBQ0ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZcUIsSUFBWjtBQUNBLFVBQU1ELEdBQUcsR0FBRyxNQUFNLDBCQUFhLGlCQUFiLEVBQStCQyxJQUEvQixFQUFxQztBQUNyRCxzQkFBZ0I7QUFEcUMsS0FBckMsQ0FBbEI7QUFHQXRCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsR0FBRyxDQUFDQyxJQUFoQjtBQUNBdkIsWUFBUSxDQUFDO0FBQ1BvQixVQUFJLEVBQUUsYUFEQztBQUVQSSxhQUFPLEVBQUVGLEdBQUcsQ0FBQ0M7QUFGTixLQUFELENBQVI7QUFJQSw2QkFBYUQsR0FBYixFQVZFLENBV0Y7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FsQkQsQ0FrQkUsT0FBT0csS0FBUCxFQUFjO0FBQ2QsMkJBQVdBLEtBQVg7QUFDQXpCLFlBQVEsQ0FBQztBQUNQb0IsVUFBSSxFQUFFLG1CQURDO0FBRVBJLGFBQU8sRUFBRTtBQUZGLEtBQUQsQ0FBUjtBQUlEO0FBQ0YsQ0ExQk07Ozs7QUE0QkEsTUFBTUssV0FBVyxHQUFHLENBQUNOLElBQUQsRUFBT0osRUFBUCxFQUFXVyxjQUFYLEtBQThCLE1BQU85QixRQUFQLElBQW9CO0FBQzNFLE1BQUk7QUFDRixVQUFNc0IsR0FBRyxHQUFHLE1BQU0sMEJBQWEsc0JBQXFCSCxFQUFHLEVBQXJDLEVBQXdDSSxJQUF4QyxFQUE4QztBQUM5RCxzQkFBZ0I7QUFEOEMsS0FBOUMsQ0FBbEI7QUFHQXRCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsR0FBRyxDQUFDQyxJQUFoQjtBQUNBdkIsWUFBUSxDQUFDO0FBQ1BvQixVQUFJLEVBQUUsY0FEQztBQUVQSSxhQUFPLEVBQUVGLEdBQUcsQ0FBQ0M7QUFGTixLQUFELENBQVI7QUFJQSxVQUFNUSxJQUFJLEdBQUcsTUFBTSx5QkFBWSxpQkFBZ0JELGNBQWUsRUFBM0MsQ0FBbkI7QUFDQTdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZNkIsSUFBSSxDQUFDUixJQUFqQjtBQUVBLDZCQUFhRCxHQUFiO0FBRUF0QixZQUFRLENBQUM7QUFDUG9CLFVBQUksRUFBRSxZQURDO0FBRVBJLGFBQU8sRUFBRU8sSUFBSSxDQUFDUjtBQUZQLEtBQUQsQ0FBUjtBQUlELEdBbEJELENBa0JFLE9BQU9FLEtBQVAsRUFBYztBQUNkLDJCQUFXQSxLQUFYO0FBQ0F6QixZQUFRLENBQUM7QUFDUG9CLFVBQUksRUFBRSxvQkFEQztBQUVQSSxhQUFPLEVBQUU7QUFGRixLQUFELENBQVI7QUFJRDtBQUNGLENBMUJNOzs7O0FBNEJBLE1BQU1RLGFBQWEsR0FBRyxDQUFDQyxTQUFELEVBQVlDLE9BQVosRUFBcUJKLGNBQXJCLEtBQXdDLE1BQ25FOUIsUUFEbUUsSUFFaEU7QUFDSCxNQUFJO0FBQ0YsVUFBTXNCLEdBQUcsR0FBRyxNQUFNLDBCQUNmLHNCQUFxQlcsU0FBVSxJQUFHQyxPQUFRLEVBRDNCLEVBRWhCLEVBRmdCLEVBR2hCO0FBQ0Usc0JBQWdCO0FBRGxCLEtBSGdCLENBQWxCO0FBT0FqQyxXQUFPLENBQUNDLEdBQVIsQ0FBWW9CLEdBQUcsQ0FBQ0MsSUFBaEI7QUFDQXZCLFlBQVEsQ0FBQztBQUNQb0IsVUFBSSxFQUFFLGdCQURDO0FBRVBJLGFBQU8sRUFBRUYsR0FBRyxDQUFDQztBQUZOLEtBQUQsQ0FBUjtBQUlBLFVBQU1RLElBQUksR0FBRyxNQUFNLHlCQUFZLGlCQUFnQkQsY0FBZSxFQUEzQyxDQUFuQjtBQUNBN0IsV0FBTyxDQUFDQyxHQUFSLENBQVk2QixJQUFJLENBQUNSLElBQWpCO0FBRUEsNkJBQWFELEdBQWI7QUFFQXRCLFlBQVEsQ0FBQztBQUNQb0IsVUFBSSxFQUFFLFlBREM7QUFFUEksYUFBTyxFQUFFTyxJQUFJLENBQUNSO0FBRlAsS0FBRCxDQUFSO0FBSUQsR0F0QkQsQ0FzQkUsT0FBT0UsS0FBUCxFQUFjO0FBQ2QsMkJBQVdBLEtBQVg7QUFDQXpCLFlBQVEsQ0FBQztBQUNQb0IsVUFBSSxFQUFFLHNCQURDO0FBRVBJLGFBQU8sRUFBRTtBQUZGLEtBQUQsQ0FBUjtBQUlEO0FBQ0YsQ0FoQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR1A7O0FBV0E7O0FBQ0E7O0FBRUE7QUFFTyxNQUFNVyxRQUFRLEdBQUcsTUFBTSxNQUFPbkMsUUFBUCxJQUFvQjtBQUNqREEsVUFBUSxDQUFDO0FBQ1JvQixRQUFJLEVBQUU7QUFERSxHQUFELENBQVI7O0FBR0EsTUFBSTFCLHFCQUFZQyxZQUFZLENBQUNDLEtBQTdCLEVBQW9DO0FBQ25DLCtCQUFhRCxZQUFZLENBQUNDLEtBQTFCO0FBQ0E7O0FBRUQsTUFBSUYscUJBQVlDLFlBQVksQ0FBQ3lDLE1BQTdCLEVBQXFDO0FBQ3BDLFVBQU1BLE1BQU0sR0FBR3pDLFlBQVksQ0FBQzBDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBZjs7QUFFQSxRQUFJO0FBQ0gsWUFBTWYsR0FBRyxHQUFHLE1BQU0seUJBQVksaUJBQWdCYyxNQUFPLEVBQW5DLENBQWxCLENBREcsQ0FFSDs7QUFDQSwrQkFBYWQsR0FBYjtBQUVBdEIsY0FBUSxDQUFDO0FBQ1JvQixZQUFJLEVBQUVrQixrQkFERTtBQUVSZCxlQUFPLEVBQUVGLEdBQUcsQ0FBQ0MsSUFBSixDQUFTZ0I7QUFGVixPQUFELENBQVI7QUFJQSxLQVRELENBU0UsT0FBT0MsR0FBUCxFQUFZO0FBQ2I7QUFDQSw2QkFBV0EsR0FBWDtBQUNBeEMsY0FBUSxDQUFDO0FBQ1JvQixZQUFJLEVBQUVxQjtBQURFLE9BQUQsQ0FBUjtBQUdBO0FBQ0Q7QUFDRCxDQTVCTTs7OztBQThCQSxNQUFNQyxXQUFXLEdBQUlILElBQUQsSUFBVSxNQUFPdkMsUUFBUCxJQUFvQjtBQUN4REEsVUFBUSxDQUFDO0FBQ1JvQixRQUFJLEVBQUU7QUFERSxHQUFELENBQVI7O0FBR0EsTUFBSTFCLHFCQUFZQyxZQUFZLENBQUNDLEtBQTdCLEVBQW9DO0FBQ25DLCtCQUFhRCxZQUFZLENBQUNDLEtBQTFCO0FBQ0E7O0FBRUQsTUFBSUYscUJBQVlDLFlBQVksQ0FBQ3lDLE1BQTdCLEVBQXFDO0FBQ3BDLFVBQU1BLE1BQU0sR0FBR3pDLFlBQVksQ0FBQzBDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBZjs7QUFFQSxRQUFJO0FBQ0g7QUFDQSxZQUFNLHlCQUFZLGlCQUFnQkQsTUFBTyxFQUFuQyxDQUFOO0FBRUFwQyxjQUFRLENBQUM7QUFDUm9CLFlBQUksRUFBRWtCLGtCQURFO0FBRVJkLGVBQU8sRUFBRWU7QUFGRCxPQUFELENBQVI7QUFJQSxLQVJELENBUUUsT0FBT0MsR0FBUCxFQUFZO0FBQ2J4QyxjQUFRLENBQUM7QUFDUm9CLFlBQUksRUFBRXFCO0FBREUsT0FBRCxDQUFSO0FBR0E7QUFDRDtBQUNELENBekJNOzs7O0FBMkJBLE1BQU1FLFFBQVEsR0FBSXBCLElBQUQsSUFBVSxNQUFPdkIsUUFBUCxJQUFvQjtBQUNyREEsVUFBUSxDQUFDO0FBQ1JvQixRQUFJLEVBQUU7QUFERSxHQUFELENBQVI7QUFHQSxRQUFNd0IsT0FBTyxHQUFHO0FBQ2Ysb0JBQWdCO0FBREQsR0FBaEI7QUFJQSxRQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFleEIsSUFBZixDQUFiOztBQUVBLE1BQUk7QUFDSCxVQUFNRCxHQUFHLEdBQUcsTUFBTSwwQkFBWSxpQkFBWixFQUErQnVCLElBQS9CLEVBQXFDRCxPQUFyQyxDQUFsQjtBQUVBNUMsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUVFLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLENBQWYsR0FBbUJxQix1QkFBbkIsR0FBc0NDLG9CQURwQztBQUVSekIsYUFBTyxFQUFFRixHQUFHLENBQUNDO0FBRkwsS0FBRCxDQUFSO0FBS0EsNkJBQWFELEdBQWI7QUFFQXJCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsR0FBWjtBQUNBdEIsWUFBUSxDQUFDbUMsUUFBUSxFQUFULENBQVI7QUFDQSxHQVpELENBWUUsT0FBT0ssR0FBUCxFQUFZO0FBQ2I7QUFDQSwyQkFBV0EsR0FBWDtBQUNBeEMsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUU2QjtBQURFLEtBQUQsQ0FBUjtBQUdBO0FBQ0QsQ0E3Qk07Ozs7QUErQkEsTUFBTUMsS0FBSyxHQUNqQixDQUFDO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUFELEtBQ0EsTUFBT3BELFFBQVAsSUFBb0I7QUFDbkJBLFVBQVEsQ0FBQztBQUNSb0IsUUFBSSxFQUFFO0FBREUsR0FBRCxDQUFSO0FBR0EsUUFBTXdCLE9BQU8sR0FBRztBQUNmLG9CQUFnQjtBQURELEdBQWhCO0FBSUEsUUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFSSxTQUFGO0FBQVNDO0FBQVQsR0FBZixDQUFiOztBQUVBLE1BQUk7QUFBQTs7QUFDSCxVQUFNOUIsR0FBRyxHQUFHLE1BQU0sMEJBQVksZ0JBQVosRUFBOEJ1QixJQUE5QixFQUFvQ0QsT0FBcEMsQ0FBbEI7QUFFQTNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsR0FBWjtBQUVBdEIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUVFLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLENBQWYsR0FBbUIwQixvQkFBbkIsR0FBbUNDLGlCQURqQztBQUVSOUIsYUFBTyxFQUFFO0FBQUVZLGNBQU0sZUFBRWQsR0FBRyxDQUFDQyxJQUFOLGdFQUFFLFVBQVVnQixJQUFaLG1EQUFFLGVBQWdCSCxNQUExQjtBQUFrQ3hDLGFBQUssZ0JBQUUwQixHQUFHLENBQUNDLElBQU4sK0NBQUUsV0FBVTNCO0FBQW5EO0FBRkQsS0FBRCxDQUFSO0FBS0FJLFlBQVEsQ0FBQ21DLFFBQVEsRUFBVCxDQUFSO0FBQ0EsNkJBQWFiLEdBQWI7QUFDQSxHQVpELENBWUUsT0FBT2tCLEdBQVAsRUFBWTtBQUNidkMsV0FBTyxDQUFDQyxHQUFSLENBQVlzQyxHQUFaO0FBQ0EsMkJBQVdBLEdBQVg7QUFDQXhDLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFa0M7QUFERSxLQUFELENBQVI7QUFHQTtBQUNELENBL0JLOzs7O0FBaUNBLE1BQU1DLE1BQU0sR0FBRyxNQUFPdkQsUUFBRCxJQUFjO0FBQ3pDLE1BQUlOLGlCQUFKLEVBQWNDLFlBQVksQ0FBQzZELEtBQWI7QUFDZHhELFVBQVEsQ0FBQztBQUNSb0IsUUFBSSxFQUFFO0FBREUsR0FBRCxDQUFSO0FBR0EsQ0FMTTs7OztBQU9BLE1BQU1xQyxjQUFjLEdBQzFCLENBQUM7QUFBRU47QUFBRixDQUFELEtBQ0EsTUFBT25ELFFBQVAsSUFBb0I7QUFDbkIsUUFBTTBELE1BQU0sR0FBRztBQUNkZCxXQUFPLEVBQUU7QUFDUixzQkFBZ0I7QUFEUjtBQURLLEdBQWY7QUFLQSxRQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVJO0FBQUYsR0FBZixDQUFiOztBQUVBLE1BQUk7QUFDSCxVQUFNN0IsR0FBRyxHQUFHLE1BQU0sMEJBQVkscUJBQVosRUFBbUN1QixJQUFuQyxFQUF5Q2EsTUFBekMsQ0FBbEI7QUFFQSxVQUFNQyxhQUFhLEdBQUdyQyxHQUFHLENBQUNDLElBQUosQ0FBU3FDLFFBQS9CLENBSEcsQ0FJSDs7QUFDQUQsaUJBQWEsQ0FBQ0UsT0FBZCxDQUF1QkMsT0FBRCxJQUFhOUQsUUFBUSxFQUFFOEQsT0FBTyxDQUFDQyxHQUFSLEVBQWEsUUFBZixFQUEzQztBQUNBL0QsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUU0Qyx1QkFERTtBQUVSeEMsYUFBTyxFQUFFRixHQUFHLENBQUNDO0FBRkwsS0FBRCxDQUFSO0FBSUEsR0FWRCxDQVVFLE9BQU9pQixHQUFQLEVBQVk7QUFDYixVQUFNeUIsTUFBTSxHQUFHekIsR0FBRyxJQUFJQSxHQUFHLENBQUMwQixRQUFKLENBQWEzQyxJQUFiLENBQWtCMEMsTUFBeEM7O0FBQ0EsUUFBSUEsTUFBSixFQUFZLENBQ1g7O0FBQ0RqRSxZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRStDO0FBREUsS0FBRCxDQUFSO0FBR0E7QUFDRCxDQTVCSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEpQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBQ0E7O0FBRU8sTUFBTUMsZUFBZSxHQUFHLE1BQU0sTUFBT3BFLFFBQVAsSUFBb0I7QUFDeEQsTUFBSTtBQUNILFVBQU1zQixHQUFHLEdBQUcsTUFBTSx5QkFBVyxvQkFBWCxDQUFsQjtBQUNBckIsV0FBTyxDQUFDQyxHQUFSLENBQVlvQixHQUFaO0FBQ0F0QixZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRSxrQkFERTtBQUVSSSxhQUFPLEVBQUVGLEdBQUcsQ0FBQ0M7QUFGTCxLQUFELENBQVI7QUFJQSw2QkFBYUQsR0FBYjtBQUNBLEdBUkQsQ0FRRSxPQUFPRyxLQUFQLEVBQWM7QUFDZiwyQkFBV0EsS0FBWDtBQUNBekIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsd0JBREU7QUFFUkksYUFBTyxFQUFFO0FBRkQsS0FBRCxDQUFSO0FBSUE7QUFDRCxDQWhCTTs7OztBQWtCQSxNQUFNNkMsZUFBZSxHQUFHLE1BQU0sTUFBT3JFLFFBQVAsSUFBb0I7QUFDeERBLFVBQVEsQ0FBQztBQUNSb0IsUUFBSSxFQUFFLGtCQURFO0FBRVJJLFdBQU8sRUFBRTtBQUZELEdBQUQsQ0FBUjtBQUlBLENBTE07Ozs7QUFPQSxNQUFNOEMsYUFBYSxHQUFJeEMsY0FBRCxJQUFvQixNQUFPOUIsUUFBUCxJQUFvQjtBQUNwRSxNQUFJO0FBQ0gsVUFBTXNCLEdBQUcsR0FBRyxNQUFNLHlCQUFZLHNCQUFxQlEsY0FBZSxFQUFoRCxDQUFsQjtBQUNBOUIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsZ0JBREU7QUFFUkksYUFBTyxFQUFFRixHQUFHLENBQUNDLElBQUosQ0FBU2dEO0FBRlYsS0FBRCxDQUFSO0FBSUEsNkJBQWFqRCxHQUFiO0FBQ0EsR0FQRCxDQU9FLE9BQU9HLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBQ0F4QixXQUFPLENBQUNDLEdBQVIsQ0FBWXVCLEtBQVo7QUFDQXpCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLHNCQURFO0FBRVJJLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0FoQk07Ozs7QUFrQkEsTUFBTWdELGFBQWEsR0FBSWpELElBQUQsSUFBVSxNQUFPdkIsUUFBUCxJQUFvQjtBQUMxRCxNQUFJO0FBQ0hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZcUIsSUFBWjtBQUNBLFVBQU1ELEdBQUcsR0FBRyxNQUFNLDBCQUFZLG9CQUFaLEVBQWtDQyxJQUFsQyxFQUF3QztBQUN6RCxzQkFBZ0I7QUFEeUMsS0FBeEMsQ0FBbEI7QUFHQXRCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsR0FBRyxDQUFDQyxJQUFoQjtBQUNBdkIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsaUJBREU7QUFFUkksYUFBTyxFQUFFRixHQUFHLENBQUNDO0FBRkwsS0FBRCxDQUFSO0FBSUEsVUFBTVEsSUFBSSxHQUFHLE1BQU0seUJBQVcsb0JBQVgsQ0FBbkI7QUFDQS9CLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLGtCQURFO0FBRVJJLGFBQU8sRUFBRU8sSUFBSSxDQUFDUjtBQUZOLEtBQUQsQ0FBUjtBQUlBLDZCQUFhRCxHQUFiO0FBQ0EsR0FoQkQsQ0FnQkUsT0FBT0csS0FBUCxFQUFjO0FBQ2YsMkJBQVdBLEtBQVg7QUFDQXpCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLHNCQURFO0FBRVJJLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0F4Qk07Ozs7QUEwQkEsTUFBTWlELGNBQWMsR0FBRyxDQUFDbEQsSUFBRCxFQUFPSixFQUFQLEtBQWMsTUFBT25CLFFBQVAsSUFBb0I7QUFDL0QsTUFBSTtBQUNILFVBQU1zQixHQUFHLEdBQUcsTUFBTSwwQkFBYSx5QkFBd0JILEVBQUcsRUFBeEMsRUFBMkNJLElBQTNDLEVBQWlEO0FBQ2xFLHNCQUFnQjtBQURrRCxLQUFqRCxDQUFsQjtBQUdBdkIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsa0JBREU7QUFFUkksYUFBTyxFQUFFRixHQUFHLENBQUNDO0FBRkwsS0FBRCxDQUFSO0FBSUEsVUFBTVEsSUFBSSxHQUFHLE1BQU0seUJBQVcsb0JBQVgsQ0FBbkI7QUFDQS9CLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLGtCQURFO0FBRVJJLGFBQU8sRUFBRU8sSUFBSSxDQUFDUjtBQUZOLEtBQUQsQ0FBUjtBQUlBLDZCQUFhRCxHQUFiO0FBQ0EsR0FkRCxDQWNFLE9BQU9HLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBQ0F6QixZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRSx1QkFERTtBQUVSSSxhQUFPLEVBQUU7QUFGRCxLQUFELENBQVI7QUFJQTtBQUNELENBdEJNOzs7O0FBd0JBLE1BQU1rRCxnQkFBZ0IsR0FBSXZELEVBQUQsSUFBUSxNQUFPbkIsUUFBUCxJQUFvQjtBQUMzRCxNQUFJO0FBQ0gsVUFBTXNCLEdBQUcsR0FBRyxNQUFNLDBCQUNoQix5QkFBd0JILEVBQUcsRUFEWCxFQUVqQixFQUZpQixFQUdqQjtBQUNDLHNCQUFnQjtBQURqQixLQUhpQixDQUFsQjtBQU9BbkIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsb0JBREU7QUFFUkksYUFBTyxFQUFFRixHQUFHLENBQUNDO0FBRkwsS0FBRCxDQUFSO0FBSUEsVUFBTVEsSUFBSSxHQUFHLE1BQU0seUJBQVcsb0JBQVgsQ0FBbkI7QUFDQS9CLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLGtCQURFO0FBRVJJLGFBQU8sRUFBRU8sSUFBSSxDQUFDUjtBQUZOLEtBQUQsQ0FBUjtBQUlBLDZCQUFhRCxHQUFiO0FBQ0EsR0FsQkQsQ0FrQkUsT0FBT0csS0FBUCxFQUFjO0FBQ2YsMkJBQVdBLEtBQVg7QUFDQXpCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLHlCQURFO0FBRVJJLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0ExQk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR1A7O0FBR08sTUFBTW1ELFlBQVksR0FBSXJELEdBQUQsSUFBUztBQUNqQ0EsS0FBRyxDQUFDSyxNQUFKLElBQWMsQ0FBZCxHQUFrQmlELHFCQUFNQyxPQUFOLENBQWN2RCxHQUFHLENBQUN3QyxPQUFsQixFQUEyQjtBQUN6Q2dCLFlBQVEsRUFBRTtBQUQrQixHQUEzQixDQUFsQixHQUVLRixxQkFBTW5ELEtBQU4sQ0FBWUgsR0FBRyxDQUFDd0MsT0FBaEIsRUFBeUI7QUFDMUJnQixZQUFRLEVBQUU7QUFEZ0IsR0FBekIsQ0FGTDtBQUtILENBTk07Ozs7QUFRQSxNQUFNQyxVQUFVLEdBQUl2QyxHQUFELElBQVM7QUFDL0JvQyx1QkFBTW5ELEtBQU4sQ0FBWWUsR0FBRyxDQUFDc0IsT0FBaEIsRUFBeUI7QUFDckJnQixZQUFRLEVBQUU7QUFEVyxHQUF6QjtBQUdILENBSk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYUDs7QUFDQTs7QUFDQTs7QUFFTyxNQUFNRSxTQUFTLEdBQUlsRCxjQUFELElBQW9CLE1BQU85QixRQUFQLElBQW9CO0FBQ2hFLE1BQUk7QUFDSCxVQUFNc0IsR0FBRyxHQUFHLE1BQU0seUJBQVksaUJBQWdCUSxjQUFlLEVBQTNDLENBQWxCO0FBQ0E3QixXQUFPLENBQUNDLEdBQVIsQ0FBWW9CLEdBQUcsQ0FBQ0MsSUFBaEI7QUFDQXZCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLFlBREU7QUFFUkksYUFBTyxFQUFFRixHQUFHLENBQUNDO0FBRkwsS0FBRCxDQUFSO0FBSUEsNkJBQWFELEdBQWI7QUFDQSxHQVJELENBUUUsT0FBT0csS0FBUCxFQUFjO0FBQ2YsMkJBQVdBLEtBQVg7QUFDQXpCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLGtCQURFO0FBRVJJLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0FoQk07Ozs7QUFrQkEsTUFBTXlELFFBQVEsR0FBRyxDQUFDMUQsSUFBRCxFQUFPTyxjQUFQLEtBQTBCLE1BQU85QixRQUFQLElBQW9CO0FBQ3JFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTRCLGNBQVo7O0FBQ0EsTUFBSTtBQUNIN0IsV0FBTyxDQUFDQyxHQUFSLENBQVlxQixJQUFaO0FBQ0EsVUFBTUQsR0FBRyxHQUFHLE1BQU0sMEJBQWEsZUFBYixFQUE2QkMsSUFBN0IsRUFBbUM7QUFDcEQsc0JBQWdCO0FBRG9DLEtBQW5DLENBQWxCO0FBR0EsNkJBQWFELEdBQWI7QUFDQXJCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsR0FBRyxDQUFDQyxJQUFoQjtBQUNBdkIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsV0FERTtBQUVSSSxhQUFPLEVBQUVGLEdBQUcsQ0FBQ0M7QUFGTCxLQUFELENBQVIsQ0FQRyxDQVdIOztBQUNBLFVBQU1RLElBQUksR0FBRyxNQUFNLHlCQUFZLGlCQUFnQkQsY0FBZSxFQUEzQyxDQUFuQjtBQUNBOUIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsWUFERTtBQUVSSSxhQUFPLEVBQUVPLElBQUksQ0FBQ1I7QUFGTixLQUFELENBQVI7QUFJQSxHQWpCRCxDQWlCRSxPQUFPRSxLQUFQLEVBQWM7QUFDZiwyQkFBV0EsS0FBWDtBQUNBekIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsaUJBREU7QUFFUkksYUFBTyxFQUFFO0FBRkQsS0FBRCxDQUFSO0FBSUE7QUFDRCxDQTFCTTs7OztBQTRCQSxNQUFNMEQsU0FBUyxHQUFHLENBQUMzRCxJQUFELEVBQU9KLEVBQVAsRUFBV1csY0FBWCxLQUE4QixNQUFPOUIsUUFBUCxJQUFvQjtBQUMxRSxNQUFJO0FBQ0gsVUFBTXNCLEdBQUcsR0FBRyxNQUFNLDBCQUFhLG9CQUFtQkgsRUFBRyxFQUFuQyxFQUFzQ0ksSUFBdEMsRUFBNEM7QUFDN0Qsc0JBQWdCO0FBRDZDLEtBQTVDLENBQWxCO0FBR0F0QixXQUFPLENBQUNDLEdBQVIsQ0FBWW9CLEdBQUcsQ0FBQ0MsSUFBaEI7QUFDQXZCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLFlBREU7QUFFUkksYUFBTyxFQUFFRixHQUFHLENBQUNDO0FBRkwsS0FBRCxDQUFSO0FBSUEsNkJBQWFELEdBQWI7QUFDQSxVQUFNUyxJQUFJLEdBQUcsTUFBTSx5QkFBWSxpQkFBZ0JELGNBQWUsRUFBM0MsQ0FBbkI7QUFDQTlCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLFlBREU7QUFFUkksYUFBTyxFQUFFTyxJQUFJLENBQUNSO0FBRk4sS0FBRCxDQUFSO0FBSUEsR0FmRCxDQWVFLE9BQU9FLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBQ0F6QixZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRSxrQkFERTtBQUVSSSxhQUFPLEVBQUU7QUFGRCxLQUFELENBQVI7QUFJQTtBQUNELENBdkJNOzs7O0FBeUJBLE1BQU0yRCxXQUFXLEdBQUcsQ0FBQ2pELE9BQUQsRUFBVUosY0FBVixLQUE2QixNQUFPOUIsUUFBUCxJQUFvQjtBQUMzRUMsU0FBTyxDQUFDQyxHQUFSLENBQVk0QixjQUFaOztBQUNBLE1BQUk7QUFDSCxVQUFNUixHQUFHLEdBQUcsTUFBTSwwQkFDaEIsb0JBQW1CWSxPQUFRLEVBRFgsRUFFakIsRUFGaUIsRUFHakI7QUFDQyxzQkFBZ0I7QUFEakIsS0FIaUIsQ0FBbEI7QUFPQSw2QkFBYVosR0FBYjtBQUNBdEIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsWUFERTtBQUVSSSxhQUFPLEVBQUVGLEdBQUcsQ0FBQ0MsSUFBSixDQUFTZ0I7QUFGVixLQUFELENBQVI7QUFJQXZDLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLGNBREU7QUFFUkksYUFBTyxFQUFFRixHQUFHLENBQUNDO0FBRkwsS0FBRCxDQUFSO0FBSUEsVUFBTVEsSUFBSSxHQUFHLE1BQU0seUJBQVksaUJBQWdCRCxjQUFlLEVBQTNDLENBQW5CO0FBQ0E5QixZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRSxZQURFO0FBRVJJLGFBQU8sRUFBRU8sSUFBSSxDQUFDUjtBQUZOLEtBQUQsQ0FBUjtBQUlBLEdBdEJELENBc0JFLE9BQU9FLEtBQVAsRUFBYztBQUNmLDJCQUFXQSxLQUFYO0FBRUF6QixZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRSxvQkFERTtBQUVSSSxhQUFPLEVBQUU7QUFGRCxLQUFELENBQVI7QUFJQTtBQUNELENBaENNOzs7O0FBa0NBLE1BQU00RCxXQUFXLEdBQUcsQ0FBQ2pFLEVBQUQsRUFBS1csY0FBTCxLQUF3QixNQUFPOUIsUUFBUCxJQUFvQjtBQUN0RUMsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRWlCLE1BQUY7QUFBTVc7QUFBTixHQUFaOztBQUNBLE1BQUk7QUFDSCxVQUFNUixHQUFHLEdBQUcsTUFBTSwwQkFDaEIsb0JBQW1CSCxFQUFHLEVBRE4sRUFFakIsRUFGaUIsRUFHakI7QUFDQyxzQkFBZ0I7QUFEakIsS0FIaUIsQ0FBbEI7QUFPQWxCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsR0FBRyxDQUFDQyxJQUFoQjtBQUNBLDZCQUFhRCxHQUFiO0FBQ0F0QixZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRSxjQURFO0FBRVJJLGFBQU8sRUFBRUYsR0FBRyxDQUFDQztBQUZMLEtBQUQsQ0FBUjtBQUlBLFVBQU1RLElBQUksR0FBRyxNQUFNLHlCQUFZLGlCQUFnQkQsY0FBZSxFQUEzQyxDQUFuQjtBQUNBOUIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsWUFERTtBQUVSSSxhQUFPLEVBQUVPLElBQUksQ0FBQ1I7QUFGTixLQUFELENBQVI7QUFJQSxHQW5CRCxDQW1CRSxPQUFPRSxLQUFQLEVBQWM7QUFDZiwyQkFBV0EsS0FBWDtBQUNBekIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsb0JBREU7QUFFUkksYUFBTyxFQUFFO0FBRkQsS0FBRCxDQUFSO0FBSUE7QUFDRCxDQTVCTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0dBLE1BQU02RCxTQUFTLEdBQUcsV0FBbEI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCOztBQUVBLE1BQU1qQyxhQUFhLEdBQUcsZUFBdEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5COztBQUNBLE1BQU1OLGdCQUFnQixHQUFHLGtCQUF6Qjs7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7O0FBQ0EsTUFBTWUsZ0JBQWdCLEdBQUcsa0JBQXpCOztBQUNBLE1BQU1HLHFCQUFxQixHQUFHLHVCQUE5Qjs7QUFFQSxNQUFNb0IsTUFBTSxHQUFHLFFBQWY7O0FBRUEsTUFBTWpELFdBQVcsR0FBRyxZQUFwQjs7QUFDQSxNQUFNRyxVQUFVLEdBQUcsWUFBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JQOztBQUNBOzs7O0FBRU8sTUFBTStDLGFBQWEsR0FBSXJFLEVBQUQsSUFBUSxNQUFPbkIsUUFBUCxJQUFvQjtBQUN4REMsU0FBTyxDQUFDQyxHQUFSLENBQVlpQixFQUFaOztBQUNBLFFBQU1zRSxlQUFlLEdBQUcxRixlQUFNMkYsUUFBTixHQUFpQkMsRUFBakIsQ0FBb0JDLFVBQTVDOztBQUNBLE1BQUksQ0FBQ0gsZUFBZSxDQUFDSSxRQUFoQixDQUF5QjFFLEVBQXpCLENBQUwsRUFBbUM7QUFDbENzRSxtQkFBZSxDQUFDSyxJQUFoQixDQUFxQjNFLEVBQXJCO0FBQ0EsR0FGRCxNQUVPO0FBQ05zRSxtQkFBZSxDQUFDTSxNQUFoQixDQUF1Qk4sZUFBZSxDQUFDTyxPQUFoQixDQUF3QjdFLEVBQXhCLENBQXZCLEVBQW9ELENBQXBEO0FBQ0E7O0FBRURuQixVQUFRLENBQUM7QUFDUm9CLFFBQUksRUFBRSxpQkFERTtBQUVSSSxXQUFPLEVBQUVpRTtBQUZELEdBQUQsQ0FBUjtBQUlBLENBYk07Ozs7QUFlQSxNQUFNUSxjQUFjLEdBQUcsTUFBTSxNQUFPakcsUUFBUCxJQUFvQjtBQUN2RCxRQUFNa0csV0FBVyxHQUNoQm5HLGVBQU0yRixRQUFOLEdBQWlCQyxFQUFqQixDQUFvQk8sV0FBcEIsS0FBb0MsTUFBcEMsR0FBNkMsT0FBN0MsR0FBdUQsTUFEeEQ7QUFFQSxNQUFJeEcsaUJBQUosRUFBY0MsWUFBWSxDQUFDd0csT0FBYixDQUFxQixNQUFyQixFQUE2QkQsV0FBN0I7QUFFZGxHLFVBQVEsQ0FBQztBQUNSb0IsUUFBSSxFQUFFLGtCQURFO0FBRVJJLFdBQU8sRUFBRTBFO0FBRkQsR0FBRCxDQUFSO0FBSUEsQ0FUTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCUDs7QUFDQTs7QUFJTyxNQUFNRSxRQUFRLEdBQUlqRixFQUFELElBQVEsTUFBT25CLFFBQVAsSUFBb0I7QUFDbkQsTUFBSTtBQUNILFVBQU1zQixHQUFHLEdBQUcsTUFBTSx5QkFBWSxpQkFBZ0JILEVBQUcsRUFBL0IsQ0FBbEI7QUFDQSw2QkFBYUcsR0FBYjtBQUNBdEIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsV0FERTtBQUVSSSxhQUFPLEVBQUVGLEdBQUcsQ0FBQ0M7QUFGTCxLQUFELENBQVI7QUFJQSxHQVBELENBT0UsT0FBT0UsS0FBUCxFQUFjO0FBQ2YsMkJBQVdBLEtBQVg7QUFDQXpCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLGlCQURFO0FBRVJJLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0FmTTs7OztBQWlCQSxNQUFNNkUsUUFBUSxHQUFHLENBQUM5RSxJQUFELEVBQU9KLEVBQVAsRUFBV1csY0FBWCxLQUE4QixNQUFPOUIsUUFBUCxJQUFvQjtBQUd6RSxNQUFJO0FBQ0gsVUFBTXNCLEdBQUcsR0FBRyxNQUFNLDBCQUFhLGlCQUFnQkgsRUFBRyxFQUFoQyxFQUFtQ0ksSUFBbkMsRUFBeUM7QUFDMUQsc0JBQWdCO0FBRDBDLEtBQXpDLENBQWxCO0FBR0EsNkJBQWFELEdBQWI7QUFDQXRCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLFdBREU7QUFFUkksYUFBTyxFQUFFRixHQUFHLENBQUNDO0FBRkwsS0FBRCxDQUFSO0FBS0EsVUFBTStFLFFBQVEsR0FBRyxNQUFNLHlCQUFZLGlCQUFnQnhFLGNBQWUsRUFBM0MsQ0FBdkI7QUFDQTdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0csUUFBWjtBQUVBdEcsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsWUFERTtBQUVSSSxhQUFPLEVBQUU4RSxRQUFRLENBQUMvRTtBQUZWLEtBQUQsQ0FBUjtBQUlBLEdBakJELENBaUJFLE9BQU9FLEtBQVAsRUFBYztBQUVmLDJCQUFXQSxLQUFYO0FBQ0F6QixZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRSxpQkFERTtBQUVSSSxhQUFPLEVBQUU7QUFGRCxLQUFELENBQVI7QUFJQTtBQUNELENBNUJNOzs7O0FBOEJBLE1BQU0rRSxTQUFTLEdBQUcsQ0FBQ2hGLElBQUQsRUFBT0osRUFBUCxFQUFXVyxjQUFYLEtBQThCLE1BQU85QixRQUFQLElBQW9CO0FBQzFFLE1BQUk7QUFDSCxVQUFNc0IsR0FBRyxHQUFHLE1BQU0sMEJBQWEsb0JBQW1CSCxFQUFHLEVBQW5DLEVBQXNDSSxJQUF0QyxFQUE0QztBQUM3RCxzQkFBZ0I7QUFENkMsS0FBNUMsQ0FBbEI7QUFHQXRCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsR0FBRyxDQUFDQyxJQUFoQjtBQUNBdkIsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsWUFERTtBQUVSSSxhQUFPLEVBQUVGLEdBQUcsQ0FBQ0M7QUFGTCxLQUFELENBQVI7QUFJQSw2QkFBYUQsR0FBYjtBQUVBLFVBQU1nRixRQUFRLEdBQUcsTUFBTSx5QkFBWSxpQkFBZ0J4RSxjQUFlLEVBQTNDLENBQXZCO0FBRUE3QixXQUFPLENBQUNDLEdBQVIsQ0FBWW9HLFFBQVEsQ0FBQy9FLElBQXJCO0FBRUF2QixZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRSxZQURFO0FBRVJJLGFBQU8sRUFBRThFLFFBQVEsQ0FBQy9FO0FBRlYsS0FBRCxDQUFSO0FBSUEsR0FuQkQsQ0FtQkUsT0FBT0UsS0FBUCxFQUFjO0FBQ2YsMkJBQVdBLEtBQVg7QUFDQXpCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLGtCQURFO0FBRVJJLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0EzQk07Ozs7QUE2QkEsTUFBTWdGLFdBQVcsR0FDdkIsQ0FBQ0MsT0FBRCxFQUFVdkUsT0FBVixFQUFtQkosY0FBbkIsS0FBc0MsTUFBTzlCLFFBQVAsSUFBb0I7QUFDekQsTUFBSTtBQUNILFVBQU1zQixHQUFHLEdBQUcsTUFBTSwwQkFDaEIsb0JBQW1CbUYsT0FBUSxJQUFHdkUsT0FBUSxFQUR0QixFQUVqQixFQUZpQixFQUdqQjtBQUNDLHNCQUFnQjtBQURqQixLQUhpQixDQUFsQjtBQU9BakMsV0FBTyxDQUFDQyxHQUFSLENBQVlvQixHQUFHLENBQUNDLElBQWhCO0FBQ0F2QixZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRSxjQURFO0FBRVJJLGFBQU8sRUFBRUYsR0FBRyxDQUFDQztBQUZMLEtBQUQsQ0FBUjtBQUlBLFVBQU1RLElBQUksR0FBRyxNQUFNLHlCQUFZLGlCQUFnQkQsY0FBZSxFQUEzQyxDQUFuQjtBQUNBN0IsV0FBTyxDQUFDQyxHQUFSLENBQVk2QixJQUFJLENBQUNSLElBQWpCO0FBQ0EsNkJBQWFELEdBQWI7QUFDQXRCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLFlBREU7QUFFUkksYUFBTyxFQUFFTyxJQUFJLENBQUNSO0FBRk4sS0FBRCxDQUFSO0FBSUEsR0FwQkQsQ0FvQkUsT0FBT0UsS0FBUCxFQUFjO0FBQ2YsMkJBQVdBLEtBQVg7QUFDQXpCLFlBQVEsQ0FBQztBQUNSb0IsVUFBSSxFQUFFLG9CQURFO0FBRVJJLGFBQU8sRUFBRTtBQUZELEtBQUQsQ0FBUjtBQUlBO0FBQ0QsQ0E3Qks7Ozs7QUErQkEsTUFBTWtGLFdBQVcsR0FBSUMsS0FBRCxJQUFZM0csUUFBRCxJQUFjO0FBQ25ELE1BQUk7QUFDSEEsWUFBUSxDQUFDO0FBQ1JvQixVQUFJLEVBQUUsY0FERTtBQUVSSSxhQUFPLEVBQUVtRjtBQUZELEtBQUQsQ0FBUjtBQUlBLEdBTEQsQ0FLRSxPQUFPbEYsS0FBUCxFQUFjO0FBQ2Z6QixZQUFRLENBQUM7QUFDUm9CLFVBQUksRUFBRTtBQURFLEtBQUQsQ0FBUjtBQUdBO0FBQ0QsQ0FYTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIUDs7OztBQUNPLE1BQU13RixHQUFHLEdBQUcsQ0FBQztBQUFFQyxNQUFJLEdBQUcsRUFBVDtBQUFhQyxPQUFLLEdBQUc7QUFBckIsQ0FBRCxrQkFDbEI7QUFDQyxPQUFLLEVBQUMsNEJBRFA7QUFFQyxPQUFLLEVBQUVELElBRlI7QUFHQyxRQUFNLEVBQUVBLElBSFQ7QUFJQyxTQUFPLEVBQUMsV0FKVDtBQUtDLE1BQUksRUFBQyxNQUxOO0FBTUMsUUFBTSxFQUFFQyxLQU5UO0FBT0MsYUFBVyxFQUFDLEtBUGI7QUFRQyxlQUFhLEVBQUMsUUFSZjtBQVNDLGdCQUFjLEVBQUM7QUFUaEIsZ0JBVUM7QUFBTSxJQUFFLEVBQUMsSUFBVDtBQUFjLElBQUUsRUFBQyxHQUFqQjtBQUFxQixJQUFFLEVBQUMsSUFBeEI7QUFBNkIsSUFBRSxFQUFDO0FBQWhDLEVBVkQsZUFXQztBQUFNLElBQUUsRUFBQyxHQUFUO0FBQWEsSUFBRSxFQUFDLElBQWhCO0FBQXFCLElBQUUsRUFBQyxJQUF4QjtBQUE2QixJQUFFLEVBQUM7QUFBaEMsRUFYRCxDQURNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7Ozs7QUFFTyxNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUFFRixNQUFJLEdBQUcsRUFBVDtBQUFhQyxPQUFLLEdBQUc7QUFBckIsQ0FBRCxrQkFDekI7QUFDQyxPQUFLLEVBQUMsNEJBRFA7QUFFQyxPQUFLLEVBQUVELElBRlI7QUFHQyxRQUFNLEVBQUVBLElBSFQ7QUFJQyxTQUFPLEVBQUMsV0FKVDtBQUtDLE1BQUksRUFBQyxNQUxOO0FBTUMsUUFBTSxFQUFFQyxLQU5UO0FBT0MsYUFBVyxFQUFDLEtBUGI7QUFRQyxlQUFhLEVBQUMsUUFSZjtBQVNDLGdCQUFjLEVBQUM7QUFUaEIsZ0JBVUM7QUFBTSxHQUFDLEVBQUM7QUFBUixFQVZELENBRE07Ozs7QUFlQSxNQUFNRSxZQUFZLEdBQUcsQ0FBQztBQUFFSCxNQUFJLEdBQUcsRUFBVDtBQUFhQyxPQUFLLEdBQUc7QUFBckIsQ0FBRCxrQkFDM0I7QUFDQyxPQUFLLEVBQUMsNEJBRFA7QUFFQyxPQUFLLEVBQUVELElBRlI7QUFHQyxRQUFNLEVBQUVBLElBSFQ7QUFJQyxTQUFPLEVBQUMsV0FKVDtBQUtDLE1BQUksRUFBQyxNQUxOO0FBTUMsUUFBTSxFQUFFQyxLQU5UO0FBT0MsYUFBVyxFQUFDLEtBUGI7QUFRQyxlQUFhLEVBQUMsUUFSZjtBQVNDLGdCQUFjLEVBQUM7QUFUaEIsZ0JBVUM7QUFBTSxHQUFDLEVBQUM7QUFBUixFQVZELENBRE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlA7Ozs7QUFDTyxNQUFNRyxLQUFLLEdBQUcsQ0FBQztBQUFFSixNQUFJLEdBQUcsRUFBVDtBQUFhQyxPQUFLLEdBQUc7QUFBckIsQ0FBRCxrQkFDcEI7QUFDQyxPQUFLLEVBQUMsNEJBRFA7QUFFQyxPQUFLLEVBQUVELElBRlI7QUFHQyxRQUFNLEVBQUVBLElBSFQ7QUFJQyxTQUFPLEVBQUMsV0FKVDtBQUtDLE1BQUksRUFBQyxNQUxOO0FBTUMsUUFBTSxFQUFFQyxLQU5UO0FBT0MsYUFBVyxFQUFDLEtBUGI7QUFRQyxlQUFhLEVBQUMsUUFSZjtBQVNDLGdCQUFjLEVBQUM7QUFUaEIsZ0JBVUM7QUFBTSxJQUFFLEVBQUMsSUFBVDtBQUFjLElBQUUsRUFBQyxHQUFqQjtBQUFxQixJQUFFLEVBQUMsR0FBeEI7QUFBNEIsSUFBRSxFQUFDO0FBQS9CLEVBVkQsZUFXQztBQUFNLElBQUUsRUFBQyxHQUFUO0FBQWEsSUFBRSxFQUFDLEdBQWhCO0FBQW9CLElBQUUsRUFBQyxJQUF2QjtBQUE0QixJQUFFLEVBQUM7QUFBL0IsRUFYRCxDQURNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7Ozs7QUFDTyxNQUFNSSxNQUFNLEdBQUcsQ0FBQztBQUFFTCxNQUFJLEdBQUcsRUFBVDtBQUFhQyxPQUFLLEdBQUc7QUFBckIsQ0FBRCxrQkFDcEI7QUFDRSxPQUFLLEVBQUMsNEJBRFI7QUFFRSxPQUFLLEVBQUVELElBRlQ7QUFHRSxRQUFNLEVBQUVBLElBSFY7QUFJRSxTQUFPLEVBQUMsV0FKVjtBQUtFLE1BQUksRUFBQyxNQUxQO0FBTUUsUUFBTSxFQUFFQyxLQU5WO0FBT0UsYUFBVyxFQUFDLEdBUGQ7QUFRRSxlQUFhLEVBQUMsUUFSaEI7QUFTRSxnQkFBYyxFQUFDO0FBVGpCLGdCQVdFO0FBQVUsUUFBTSxFQUFDO0FBQWpCLEVBWEYsZUFZRTtBQUFNLEdBQUMsRUFBQztBQUFSLEVBWkYsZUFhRTtBQUFNLElBQUUsRUFBQyxJQUFUO0FBQWMsSUFBRSxFQUFDLElBQWpCO0FBQXNCLElBQUUsRUFBQyxJQUF6QjtBQUE4QixJQUFFLEVBQUM7QUFBakMsRUFiRixlQWNFO0FBQU0sSUFBRSxFQUFDLElBQVQ7QUFBYyxJQUFFLEVBQUMsSUFBakI7QUFBc0IsSUFBRSxFQUFDLElBQXpCO0FBQThCLElBQUUsRUFBQztBQUFqQyxFQWRGLENBREs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUDs7OztBQUVPLE1BQU1LLElBQUksR0FBRyxDQUFDO0FBQUVOLE1BQUksR0FBRyxFQUFUO0FBQWFDLE9BQUssR0FBRyxTQUFyQjtBQUFnQ007QUFBaEMsQ0FBRCxLQUErQztBQUNsRSxzQkFDQztBQUNDLFdBQU8sRUFBRUEsT0FEVjtBQUVDLFNBQUssRUFBQyw0QkFGUDtBQUdDLFNBQUssRUFBQyxJQUhQO0FBSUMsVUFBTSxFQUFDLElBSlI7QUFLQyxXQUFPLEVBQUMsV0FMVDtBQU1DLFFBQUksRUFBQyxNQU5OO0FBT0MsVUFBTSxFQUFFTixLQVBUO0FBUUMsb0JBQWEsR0FSZDtBQVNDLHNCQUFlLE9BVGhCO0FBVUMsdUJBQWdCO0FBVmpCLGtCQVdDO0FBQU0sS0FBQyxFQUFDLEdBQVI7QUFBWSxLQUFDLEVBQUMsSUFBZDtBQUFtQixTQUFLLEVBQUMsSUFBekI7QUFBOEIsVUFBTSxFQUFDLElBQXJDO0FBQTBDLE1BQUUsRUFBQyxHQUE3QztBQUFpRCxNQUFFLEVBQUM7QUFBcEQsSUFYRCxlQVlDO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFaRCxDQUREO0FBZ0JBLENBakJNOzs7O0FBbUJBLE1BQU1PLE1BQU0sR0FBRyxDQUFDO0FBQUVSLE1BQUksR0FBRyxFQUFUO0FBQWFDLE9BQUssR0FBRztBQUFyQixDQUFELGtCQUNyQjtBQUNDLE9BQUssRUFBQyw0QkFEUDtBQUVDLE9BQUssRUFBQyxJQUZQO0FBR0MsUUFBTSxFQUFDLElBSFI7QUFJQyxTQUFPLEVBQUMsV0FKVDtBQUtDLE1BQUksRUFBQyxNQUxOO0FBTUMsUUFBTSxFQUFFQSxLQU5UO0FBT0Msa0JBQWEsR0FQZDtBQVFDLG9CQUFlLE9BUmhCO0FBU0MscUJBQWdCO0FBVGpCLGdCQVVDO0FBQU0sR0FBQyxFQUFDLEdBQVI7QUFBWSxHQUFDLEVBQUMsSUFBZDtBQUFtQixPQUFLLEVBQUMsSUFBekI7QUFBOEIsUUFBTSxFQUFDLElBQXJDO0FBQTBDLElBQUUsRUFBQyxHQUE3QztBQUFpRCxJQUFFLEVBQUM7QUFBcEQsRUFWRCxlQVdDO0FBQU0sR0FBQyxFQUFDO0FBQVIsRUFYRCxDQURNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJQOzs7O0FBRU8sTUFBTVEsSUFBSSxHQUFHLENBQUM7QUFBRVQsTUFBSSxHQUFHLEVBQVQ7QUFBYUMsT0FBSyxHQUFHO0FBQXJCLENBQUQsa0JBQ25CO0FBQ0MsT0FBSyxFQUFDLDRCQURQO0FBRUMsT0FBSyxFQUFFRCxJQUZSO0FBR0MsUUFBTSxFQUFFQSxJQUhUO0FBSUMsU0FBTyxFQUFDO0FBSlQsZ0JBS0M7QUFBTSxHQUFDLEVBQUM7QUFBUixFQUxELENBRE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDs7OztBQUVPLE1BQU1VLE1BQU0sR0FBRyxDQUFDO0FBQUVWLE1BQUksR0FBRyxFQUFUO0FBQWFDLE9BQUssR0FBRztBQUFyQixDQUFELGtCQUNyQjtBQUNDLE9BQUssRUFBQyw0QkFEUDtBQUVDLE9BQUssRUFBRUQsSUFGUjtBQUdDLFFBQU0sRUFBRUEsSUFIVDtBQUlDLFNBQU8sRUFBQyxXQUpUO0FBS0MsTUFBSSxFQUFDLE1BTE47QUFNQyxRQUFNLEVBQUVDLEtBTlQ7QUFPQyxhQUFXLEVBQUMsR0FQYjtBQVFDLGVBQWEsRUFBQyxRQVJmO0FBU0MsZ0JBQWMsRUFBQztBQVRoQixnQkFVQztBQUFNLEdBQUMsRUFBQztBQUFSLEVBVkQsZUFXQztBQUFTLFFBQU0sRUFBQztBQUFoQixFQVhELENBRE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNbEcsS0FBSyxHQUFHLE1BQU07QUFDbEIsc0JBQ0UsNkJBQUMsb0JBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBTyxFQUFFO0FBQUU0RyxhQUFPLEVBQUU7QUFBWCxLQURYO0FBRUUsV0FBTyxFQUFFO0FBQUVBLGFBQU8sRUFBRTtBQUFYLEtBRlg7QUFHRSxRQUFJLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVg7QUFIUixrQkFLRSw2QkFBQyxZQUFEO0FBQUssU0FBSyxFQUFDO0FBQVgsSUFMRixlQU1FO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYjtBQUFYLG9CQURGLGVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixpQ0FDYTtBQUFNLGFBQVMsRUFBQztBQUFoQixtQkFEYixvREFGRixlQU1FLHVEQUNFO0FBQ0UsT0FBRyxFQUFDLGFBRE47QUFFRSxPQUFHLEVBQUMsbUVBRk47QUFHRSxhQUFTLEVBQUM7QUFIWixJQURGLENBTkYsQ0FERixlQWVFLDZCQUFDLGtCQUFELE9BZkYsZUFnQkUsNkJBQUMsZ0JBQUQsT0FoQkYsZUFpQkUsNkJBQUMsY0FBRCxPQWpCRixDQU5GLENBREY7QUE0QkQsQ0E3QkQ7O2VBK0JlN0csSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENmOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNRSxPQUFPLEdBQUlHLEtBQUQsSUFBVztBQUMxQixRQUFNO0FBQUV5RztBQUFGLE1BQVd6RyxLQUFLLENBQUMwRyxLQUFOLENBQVlDLE1BQTdCO0FBQ0EsUUFBTSxDQUFDQyxPQUFELEVBQVVDLFVBQVYsSUFBd0IscUJBQVMsRUFBVCxDQUE5Qjs7QUFLQSxRQUFNekcsVUFBVSxHQUFHLE1BQU9xRyxJQUFQLElBQWdCO0FBQ2xDLFVBQU1wRyxHQUFHLEdBQUcsTUFBTSwwQkFDaEIsaUJBRGdCLEVBRWpCO0FBQ0NvRztBQURELEtBRmlCLEVBS2pCO0FBQ0Msc0JBQWdCO0FBRGpCLEtBTGlCLENBQWxCO0FBU0EsV0FBT3BHLEdBQUcsQ0FBQ0MsSUFBSixDQUFTc0csT0FBaEI7QUFDQSxHQVhEOztBQWFBLFFBQU1FLGdCQUFnQixHQUFHLHdCQUN4QixZQUFZO0FBQ1gsVUFBTUYsT0FBTyxHQUFHLE1BQU14RyxVQUFVLENBQUNxRyxJQUFJLENBQUNNLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEdBQW5CLENBQUQsQ0FBaEM7QUFDQUYsY0FBVSxDQUFDRCxPQUFELENBQVY7QUFDQSxHQUp1QixFQUt4QixDQUFDSCxJQUFELENBTHdCLENBQXpCO0FBUUEsd0JBQVUsTUFBTTtBQUNmSyxvQkFBZ0I7QUFDaEIsR0FGRCxFQUVHLENBQUNBLGdCQUFELENBRkg7QUFJQTlILFNBQU8sQ0FBQ0MsR0FBUixDQUFZMkgsT0FBWjs7QUFDQSxRQUFNSSxPQUFPLEdBQUcsTUFBTTtBQUNyQiwyQkFBU0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVQ7QUFDQSxHQUZEOztBQUtBLFFBQU1DLElBQUksR0FBR1AsT0FBTyxJQUFJQSxPQUFPLENBQUNRLE9BQWhDO0FBRUEsc0JBQ0MseUVBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFFQyw2QkFBQyxtQkFBRDtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLG1CQUFEO0FBQUssTUFBRSxFQUFFO0FBQVQsSUFERCxlQUdDLDZCQUFDLG1CQUFEO0FBQUssTUFBRSxFQUFDLEtBQVI7QUFBYyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFBeUMsTUFBRSxFQUFFO0FBQTdDLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLDhCQUFnQkYsSUFBaEIsQ0FERixDQURELENBREQsZUFNQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLGlCQUFEO0FBQVksUUFBSSxFQUFDLElBQWpCO0FBQXNCLFNBQUssRUFBQyxTQUE1QjtBQUFzQyxXQUFPLEVBQUVIO0FBQS9DLElBREQsQ0FORCxDQUhELGVBY0MsNkJBQUMsbUJBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBVCxJQWRELENBRkQsQ0FERCxlQXFCQyw2QkFBQyxjQUFELE9BckJELENBREQ7QUF5QkEsQ0FqRUQ7O0FBbUVBLE1BQU1NLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ25DQyxNQUFJLEVBQUVELEtBQUssQ0FBQ0M7QUFEdUIsQ0FBWixDQUF4Qjs7ZUFJZSx5QkFBUUYsZUFBUixFQUF5QjtBQUFFakUsZUFBYSxFQUFiQTtBQUFGLENBQXpCLEVBQTRDeEQsT0FBNUMsQyxFQUdmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFKQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTTRILElBQUksR0FBRyxDQUFDO0FBQUV4RixPQUFGO0FBQVNQLFVBQVQ7QUFBbUIvQyxPQUFuQjtBQUEwQndCO0FBQTFCLENBQUQsS0FBc0M7QUFDakQsUUFBTSxDQUFDRyxJQUFELEVBQU9vSCxPQUFQLElBQWtCLHFCQUFTLEVBQVQsQ0FBeEI7QUFFQSxNQUFJL0ksS0FBSixFQUFXLG9CQUFPLDZCQUFDLHdCQUFEO0FBQVUsTUFBRSxFQUFDO0FBQWIsSUFBUDtBQUNYLFFBQU1nSixPQUFPLEdBQUcsZ0JBQWhCOztBQUVBLFFBQU1DLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7O0FBQ0EsUUFBSTNILElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCOEcsY0FBUSxDQUFDYyxhQUFULENBQXVCLGFBQXZCLEVBQXNDQyxTQUF0QyxDQUFnREMsR0FBaEQsQ0FBb0QsU0FBcEQ7QUFFQXZHLGNBQVEsQ0FBQ3BCLElBQUQsQ0FBUjtBQUNELEtBSkQsTUFJTztBQUNMdUgsT0FBQyxDQUFDQyxjQUFGO0FBQ0FiLGNBQVEsQ0FBQ2MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ0MsU0FBdEMsQ0FBZ0RDLEdBQWhELENBQW9ELFNBQXBEO0FBQ0FoRyxXQUFLLENBQUMzQixJQUFELENBQUw7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSw2QkFBQyxZQUFEO0FBQUssU0FBSyxFQUFDO0FBQVgsSUFERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBd0JxSCxPQUF4QixDQURGLEVBRUd4SCxJQUFJLEtBQUssUUFBVCxnQkFDQyx5RUFDRSxtREFERixlQUVFLHdFQUZGLENBREQsZ0JBTUMseUVBQ0UsaURBREYsZUFFRSxxRUFGRixDQVJKLGVBYUU7QUFBTSxZQUFRLEVBQUV5SDtBQUFoQixrQkFDRTtBQUFLLGFBQVMsRUFBRXpILElBQUksS0FBSyxRQUFULEdBQW9CLE1BQXBCLEdBQTZCO0FBQTdDLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBTyxXQUFPLEVBQUM7QUFBZixhQURGLGVBRUU7QUFDRSxZQUFRLEVBQUcwSCxDQUFELElBQU87QUFDZkgsYUFBTyxDQUFFUSxJQUFELG9DQUFnQkEsSUFBaEI7QUFBc0JoRyxhQUFLLEVBQUUyRixDQUFDLENBQUNNLE1BQUYsQ0FBU0M7QUFBdEMsUUFBRCxDQUFQO0FBQ0QsS0FISDtBQUlFLFFBQUksRUFBQyxPQUpQO0FBS0UsYUFBUyxFQUFDLGNBTFo7QUFNRSxZQUFRLE1BTlY7QUFPRSxlQUFXLEVBQUM7QUFQZCxJQUZGLENBREYsZUFhRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsZ0JBREYsZUFFRTtBQUNFLFlBQVEsTUFEVjtBQUVFLFlBQVEsRUFBR1AsQ0FBRCxJQUFPO0FBQ2ZILGFBQU8sQ0FBRVEsSUFBRCxvQ0FDSEEsSUFERztBQUVOL0YsZ0JBQVEsRUFBRTBGLENBQUMsQ0FBQ00sTUFBRixDQUFTQztBQUZiLFFBQUQsQ0FBUDtBQUlELEtBUEg7QUFRRSxRQUFJLEVBQUMsVUFSUDtBQVNFLGFBQVMsRUFBQyxjQVRaO0FBVUUsZUFBVyxFQUFDO0FBVmQsSUFGRixDQWJGLENBREYsRUE4QkdqSSxJQUFJLEtBQUssUUFBVCxnQkFDQyw0REFDRyxHQURILGVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsa0JBREYsZUFFRTtBQUNFLFlBQVEsRUFBRzBILENBQUQsSUFBTztBQUNmSCxhQUFPLENBQUVRLElBQUQsb0NBQ0hBLElBREc7QUFFTkcsaUJBQVMsRUFBRVIsQ0FBQyxDQUFDTSxNQUFGLENBQVNDO0FBRmQsUUFBRCxDQUFQO0FBSUQsS0FOSDtBQU9FLFFBQUksRUFBQyxNQVBQO0FBUUUsTUFBRSxFQUFDLFVBUkw7QUFTRSxhQUFTLEVBQUMsY0FUWjtBQVVFLFlBQVEsTUFWVjtBQVdFLGVBQVcsRUFBQztBQVhkLElBRkYsQ0FERixlQWlCRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsaUJBREYsZUFFRTtBQUNFLFlBQVEsRUFBR1AsQ0FBRCxJQUFPO0FBQ2ZILGFBQU8sQ0FBRVEsSUFBRCxvQ0FDSEEsSUFERztBQUVOSSxnQkFBUSxFQUFFVCxDQUFDLENBQUNNLE1BQUYsQ0FBU0M7QUFGYixRQUFELENBQVA7QUFJRCxLQU5IO0FBT0UsUUFBSSxFQUFDLE1BUFA7QUFRRSxNQUFFLEVBQUMsVUFSTDtBQVNFLGFBQVMsRUFBQyxjQVRaO0FBVUUsWUFBUSxNQVZWO0FBV0UsZUFBVyxFQUFDO0FBWGQsSUFGRixDQWpCRixDQUZGLGVBb0NFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFPLFdBQU8sRUFBQztBQUFmLFdBREYsZUFFRTtBQUNFLFlBQVEsRUFBR1AsQ0FBRCxJQUFPO0FBQ2ZILGFBQU8sQ0FBRVEsSUFBRCxvQ0FDSEEsSUFERztBQUVOSyxXQUFHLEVBQUVWLENBQUMsQ0FBQ00sTUFBRixDQUFTQztBQUZSLFFBQUQsQ0FBUDtBQUlELEtBTkg7QUFPRSxRQUFJLEVBQUMsUUFQUDtBQVFFLE1BQUUsRUFBQyxLQVJMO0FBU0UsYUFBUyxFQUFDLGNBVFo7QUFVRSxZQUFRLE1BVlY7QUFXRSxlQUFXLEVBQUM7QUFYZCxJQUZGLENBREYsZUFpQkU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFPLFdBQU8sRUFBQztBQUFmLGtCQURGLGVBRUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLE1BQUUsRUFBQyxjQUZMO0FBR0UsZUFBVyxFQUFDLFVBSGQ7QUFJRSxnQkFBWSxFQUFDLEVBSmY7QUFLRSxhQUFTLEVBQUMsY0FMWjtBQU1FLFlBQVEsRUFBR1AsQ0FBRCxJQUFPO0FBQ2ZILGFBQU8sQ0FBRVEsSUFBRCxvQ0FDSEEsSUFERztBQUVOTSxvQkFBWSxFQUFFWCxDQUFDLENBQUNNLE1BQUYsQ0FBU0M7QUFGakIsUUFBRCxDQUFQO0FBSUQ7QUFYSCxJQUZGLENBakJGLENBcENGLENBREQsR0F3RUcsSUF0R04sRUF3R0dqSSxJQUFJLEtBQUssUUFBVCxnQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBTyxXQUFPLEVBQUM7QUFBZix3QkFERixDQURGLGVBSUUsNkJBQUMsdUJBQUQ7QUFBUyxNQUFFLEVBQUM7QUFBWixhQUpGLENBREQsZ0JBUUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsd0JBREYsQ0FERixlQUlFLDZCQUFDLHVCQUFEO0FBQVMsTUFBRSxFQUFDO0FBQVosY0FKRixDQWhISixlQXVIRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUMsZ0JBRlo7QUFHRSxTQUFLLEVBQUM7QUFIUixJQURGLENBdkhGLENBYkYsQ0FERixDQURGLENBRkYsQ0FERjtBQXNKRCxDQXpLRDs7QUEyS0EsTUFBTW1ILGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDNUksT0FBSyxFQUFFNEksS0FBSyxDQUFDQyxJQUFOLENBQVc3STtBQURnQixDQUFaLENBQXhCOztlQUllLHlCQUFRMkksZUFBUixFQUF5QjtBQUFFckYsT0FBSyxFQUFMQSxXQUFGO0FBQVNQLFVBQVEsRUFBUkE7QUFBVCxDQUF6QixFQUE4QytGLElBQTlDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTGY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTTFILElBQUksR0FBRyxDQUFDO0FBQUVVLGdCQUFGO0FBQWtCZ0ksVUFBbEI7QUFBNEJDO0FBQTVCLENBQUQsS0FBMkM7QUFDdkQsV0FBS0MsUUFBTCxHQUFpQjdKLEtBQUQsSUFBVztBQUMxQixXQUFPQSxLQUFLLENBQUNDLFFBQU4sQ0FBZTBCLGNBQWMsRUFBN0IsQ0FBUDtBQUNBLEdBRkQ7O0FBR0Esd0JBQVUsTUFBTTtBQUNmLFFBQUlnSSxRQUFRLENBQUNHLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDMUJuSSxvQkFBYztBQUNkO0FBQ0QsR0FKRCxFQUlHLENBQUNBLGNBQUQsQ0FKSDtBQU1BLHNCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFHLE9BQUcsRUFBQyxVQUFQO0FBQWtCLFFBQUksRUFBQyxHQUF2QjtBQUEyQixhQUFTLEVBQUM7QUFBckMsSUFERCxDQURELEVBSUVpSSxPQUFPLGlCQUNQLDZCQUFDLHVCQUFEO0FBQVMsTUFBRSxFQUFDLGNBQVo7QUFBMkIsT0FBRyxFQUFDO0FBQS9CLGtCQUNDLDZCQUFDLHNCQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFFBQUksRUFBQyxJQUEvQjtBQUFvQyxTQUFLO0FBQXpDLG1CQURELENBTEYsZUFXQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUksU0FBSyxFQUFFO0FBQUVHLGdCQUFVLEVBQUU7QUFBZCxLQUFYO0FBQW9DLGFBQVMsRUFBQztBQUE5QyxLQUNFLEdBREYsOEJBRVksa0RBRlosQ0FERCxlQUtDO0FBQUcsYUFBUyxFQUFDO0FBQWIsZ0JBTEQsQ0FYRCxlQWtCQztBQUFTLGFBQVMsRUFBQztBQUFuQixrQkFDQztBQUFTLGFBQVMsRUFBQztBQUFuQixrQkFDQyw2QkFBQyxlQUFEO0FBQVEsV0FBTyxFQUFFSixRQUFRLElBQUlBLFFBQVEsQ0FBQyxDQUFEO0FBQXJDLElBREQsZUFFQyx1REFDQztBQUFJLGFBQVMsRUFBQztBQUFkLHlCQURELGVBRUMsNkJBQUMsaUJBQUQ7QUFBVSxZQUFRLEVBQUVBO0FBQXBCLElBRkQsQ0FGRCxDQURELGVBU0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxvQkFURCxlQVVDLDZCQUFDLFlBQUQ7QUFBSyxZQUFRLEVBQUVBO0FBQWYsSUFWRCxDQWxCRCxDQUREO0FBaUNBLENBM0NEOztBQTZDQSxNQUFNbkIsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbkNrQixVQUFRLEVBQUVsQixLQUFLLENBQUNYLE9BQU4sQ0FBYzZCLFFBRFc7QUFFbkNDLFNBQU8sRUFBRW5CLEtBQUssQ0FBQ0MsSUFBTixDQUFXa0I7QUFGZSxDQUFaLENBQXhCOztlQUtlLHlCQUFRcEIsZUFBUixFQUF5QjtBQUFFN0csZ0JBQWMsRUFBZEE7QUFBRixDQUF6QixFQUE2Q1YsSUFBN0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1MLElBQUksR0FBRyxNQUFNO0FBQ2xCLE1BQUlvSixXQUFXLEdBQUcsTUFBbEI7QUFDQSxzQkFDQyw2QkFBQyxvQkFBRCxDQUFRLEdBQVI7QUFDQyxXQUFPLEVBQUU7QUFBRXZDLGFBQU8sRUFBRTtBQUFYLEtBRFY7QUFFQyxXQUFPLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FGVjtBQUdDLFFBQUksRUFBRTtBQUFFQSxhQUFPLEVBQUU7QUFBWDtBQUhQLGtCQUlDLDZCQUFDLFlBQUQ7QUFBSyxTQUFLLEVBQUMsTUFBWDtBQUFrQixRQUFJLEVBQUUsQ0FBQztBQUFFRSxVQUFJLEVBQUUsUUFBUjtBQUFrQlcsYUFBTyxFQUFFO0FBQTNCLEtBQUQ7QUFBeEIsSUFKRCxlQUtDO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDRTBCLFdBQVcsZ0JBQ1g7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyw2QkFBQyxhQUFELE9BREQsZUFFQyw2QkFBQyxrQkFBRCxPQUZELENBRFcsZ0JBTVgsNkJBQUMsa0JBQUQsT0FQRixDQUxELENBREQ7QUFrQkEsQ0FwQkQ7O2VBc0JlcEosSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JmOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUUsS0FBSyxHQUFHLE1BQU07QUFDbkIsc0JBQ0MsNkJBQUMsb0JBQUQsQ0FBUSxHQUFSO0FBQ0MsUUFBSSxFQUFFO0FBQUUyRyxhQUFPLEVBQUU7QUFBWCxLQURQO0FBRUMsV0FBTyxFQUFFO0FBQUVBLGFBQU8sRUFBRTtBQUFYLEtBRlY7QUFHQyxXQUFPLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVg7QUFIVixrQkFJQyw2QkFBQyxZQUFEO0FBQUssU0FBSyxFQUFDLE9BQVg7QUFBbUIsUUFBSSxFQUFFLENBQUM7QUFBRUUsVUFBSSxFQUFFLFFBQVI7QUFBa0JXLGFBQU8sRUFBRTtBQUEzQixLQUFEO0FBQXpCLElBSkQsZUFLQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLHFCQUFEO0FBQWMsUUFBSSxFQUFDLEtBQW5CO0FBQXlCLE9BQUcsRUFBQyxVQUE3QjtBQUF3QyxRQUFJLEVBQUU7QUFBRVgsVUFBSSxFQUFFO0FBQVI7QUFBOUMsSUFERCxlQUVDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsNkJBQUMsYUFBRCxPQURELENBRkQsQ0FMRCxlQVdDLDZCQUFDLGNBQUQsT0FYRCxDQUREO0FBZUEsQ0FoQkQ7O2VBa0JlN0csSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLE1BQU1FLE9BQU8sR0FBRyxDQUFDO0FBQ2hCNEcsT0FEZ0I7QUFFaEJqQixhQUZnQjtBQUdoQnhGLGNBSGdCO0FBSWhCb0QsZUFKZ0I7QUFLaEJDO0FBTGdCLENBQUQsS0FNVjtBQUNMLFFBQU0sQ0FBQ3lGLEtBQUQsRUFBUUMsUUFBUixJQUFvQixxQkFBUyxJQUFULENBQTFCO0FBQ0EsUUFBTTtBQUFFbkk7QUFBRixNQUFxQjZGLEtBQUssQ0FBQ0MsTUFBakM7QUFFQSx3QkFBVSxNQUFNO0FBQ2YxRyxnQkFBWTtBQUNab0QsaUJBQWEsQ0FBQ3hDLGNBQUQsQ0FBYjtBQUNBLEdBSEQsRUFHRyxDQUFDWixZQUFELEVBQWVvRCxhQUFmLEVBQThCeEMsY0FBOUIsQ0FISDtBQUlBLHdCQUFVLE1BQU07QUFDZjRFLGVBQVcsQ0FBQ25DLFVBQUQsQ0FBWDtBQUNBLEdBRkQsRUFFRyxDQUFDQSxVQUFELEVBQWFtQyxXQUFiLENBRkg7QUFJQSxTQUFPbkMsVUFBVSxnQkFDaEI7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUNDLGFBQVMsRUFBQyxTQURYO0FBRUMsU0FBSyxFQUFFO0FBQUUyRixhQUFPLEVBQUVGLEtBQUssR0FBRyxNQUFILEdBQVk7QUFBNUIsS0FGUjtBQUdDLFdBQU8sRUFBRSxNQUFNQyxRQUFRLENBQUMsQ0FBQ0QsS0FBRjtBQUh4QixJQURELGVBS0MsNkJBQUMsWUFBRDtBQUNDLFNBQUssRUFBQyxnQkFEUDtBQUVDLFFBQUksRUFBRSxDQUFDO0FBQUV0QyxVQUFJLEVBQUUsUUFBUjtBQUFrQlcsYUFBTyxFQUFFO0FBQTNCLEtBQUQ7QUFGUCxJQUxELGVBU0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLHlDQUFLOUQsVUFBVSxDQUFDbUQsSUFBaEIsQ0FERCxDQURELGVBSUMsNkJBQUMsbUJBQUQscUJBQ0MsNkJBQUMsbUJBQUQ7QUFDQyxhQUFTLEVBQUMscUJBRFg7QUFFQyxNQUFFLEVBQUUsQ0FGTDtBQUdDLFNBQUssRUFBRTtBQUFFeUMsWUFBTSxFQUFFSCxLQUFLLEdBQUcsTUFBSCxHQUFZO0FBQTNCO0FBSFIsa0JBSUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLFNBQUssRUFBRTtBQUFFSSxjQUFRLEVBQUU7QUFBWixLQUFYO0FBQWlDLGFBQVMsRUFBQztBQUEzQyxrQkFDQyw4REFERCxlQUVDLDZCQUFDLHFCQUFEO0FBQ0MsUUFBSSxFQUFDLEtBRE47QUFFQyxPQUFHLEVBQUcsSUFBRzdGLFVBQVUsQ0FBQ21ELElBQUssYUFGMUI7QUFHQyxRQUFJLEVBQUU7QUFBRUEsVUFBSSxFQUFFO0FBQVI7QUFIUCxJQUZELENBREQsZUFTQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0VzQyxLQUFLLGdCQUNMO0FBQU0sV0FBTyxFQUFFLE1BQU1DLFFBQVEsQ0FBQyxDQUFDRCxLQUFGO0FBQTdCLGtCQUNDLDZCQUFDLGlCQUFELE9BREQsQ0FESyxnQkFLTDtBQUFNLFdBQU8sRUFBRSxNQUFNQyxRQUFRLENBQUMsQ0FBQ0QsS0FBRjtBQUE3QixrQkFDQyw2QkFBQyxZQUFELE9BREQsQ0FORixDQVRELENBSkQsZUF5QkMsNkJBQUMseUJBQUQscUJBQ0MsNkJBQUMsdUJBQUQ7QUFBZ0Isa0JBQWMsRUFBRXpGLFVBQVUsQ0FBQ21EO0FBQTNDLElBREQsQ0F6QkQsQ0FERCxlQThCQyw2QkFBQyxtQkFBRDtBQUFLLEtBQUMsRUFBRTtBQUFSLGtCQUNDLDZCQUFDLHFCQUFEO0FBQWMsa0JBQWMsRUFBRW5ELFVBQVUsQ0FBQ21EO0FBQXpDLElBREQsQ0E5QkQsQ0FKRCxDQVRELGVBZ0RDLDZCQUFDLGNBQUQsT0FoREQsQ0FEZ0IsR0FtRGIsSUFuREo7QUFvREEsQ0F0RUQ7O0FBd0VBLE1BQU1hLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ25DakUsWUFBVSxFQUFFaUUsS0FBSyxDQUFDakUsVUFBTixDQUFpQkE7QUFETSxDQUFaLENBQXhCOztlQUllLHlCQUFRZ0UsZUFBUixFQUF5QjtBQUN2Q2pFLGVBQWEsRUFBYkEsc0JBRHVDO0FBRXZDcEQsY0FBWSxFQUFaQSxxQkFGdUM7QUFHdkN3RixhQUFXLEVBQVhBO0FBSHVDLENBQXpCLEVBSVozRixPQUpZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RmY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTXNKLGFBQWEsR0FBSXBKLEtBQUQsSUFBVztBQUNoQyxRQUFNO0FBQUVXLGNBQUY7QUFBYzBJLGdCQUFkO0FBQTRCekksZUFBNUI7QUFBeUNSLGNBQXpDO0FBQXFEa0o7QUFBckQsTUFDTHRKLEtBREQ7QUFFQSxRQUFNLENBQUNvSCxPQUFELEVBQVVtQyxVQUFWLElBQXdCLHFCQUFTLEVBQVQsQ0FBOUI7QUFDQSxRQUFNLENBQUM5QyxJQUFELEVBQU8rQyxPQUFQLElBQWtCLHFCQUFTLEVBQVQsQ0FBeEI7QUFDQSxRQUFNLENBQUNDLFFBQUQsRUFBV0Msa0JBQVgsSUFBaUMscUJBQVMsRUFBVCxDQUF2QztBQUNBLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxXQUFYLElBQTBCLHFCQUFTLEtBQVQsQ0FBaEM7QUFDQSxRQUFNLENBQUNDLFlBQUQsRUFBZUMsZUFBZixJQUFrQyxxQkFBUyxFQUFULENBQXhDLENBUGdDLENBUWhDO0FBQ0E7O0FBQ0EsV0FBU0MsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFDMUJ2TCx5QkFDQ3dMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ2JDLGNBQVEsRUFBRSxRQURHO0FBRWJDLFVBQUksRUFBRSxDQUZPO0FBR2JDLFNBQUcsRUFBRUwsT0FBTyxDQUFDTTtBQUhBLEtBQWQsQ0FERDtBQU1BOztBQUNELFFBQU10RCxPQUFPLEdBQUcsTUFBTTtBQUNyQitDLFlBQVEsQ0FBQzlDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFELENBQVI7QUFDQSxHQUZEOztBQUlBbEksU0FBTyxDQUFDQyxHQUFSLENBQVllLEtBQUssQ0FBQzBHLEtBQU4sQ0FBWUMsTUFBWixDQUFtQjNGLFNBQS9CO0FBRUEsd0JBQVUsTUFBTTtBQUNmLFFBQUloQixLQUFLLENBQUN1SyxJQUFWLEVBQWdCO0FBQ2ZuSyxnQkFBVSxDQUFDSixLQUFLLENBQUMwRyxLQUFOLENBQVlDLE1BQVosQ0FBbUIzRixTQUFwQixDQUFWO0FBQ0E7QUFDRCxHQUpELEVBSUcsQ0FBQ2hCLEtBQUQsRUFBUUksVUFBUixDQUpIOztBQU1BLFFBQU1vSyxZQUFZLEdBQUlyRCxJQUFELElBQVU7QUFDOUJvQyxjQUFVLENBQUNwQyxJQUFELENBQVY7QUFDQSxHQUZEOztBQUlBLFFBQU1zRCxVQUFVLEdBQUcsTUFBTzVDLENBQVAsSUFBYTtBQUMvQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0E5SSxXQUFPLENBQUNDLEdBQVIsQ0FBWXdILElBQVo7QUFDQXpILFdBQU8sQ0FBQ0MsR0FBUixDQUFZd0ssUUFBWjtBQUNBLFVBQU1uSixJQUFJLEdBQUc7QUFDWm1HLFVBQUksRUFBRUEsSUFBSSxLQUFLLEVBQVQsR0FBYzZDLFdBQVcsQ0FBQzdDLElBQTFCLEdBQWlDQSxJQUQzQjtBQUVaZ0QsY0FBUSxFQUFFQSxRQUFRLEtBQUssRUFBYixHQUFrQkgsV0FBVyxDQUFDRyxRQUE5QixHQUF5Q0EsUUFGdkM7QUFHWnJDLGFBQU8sRUFBRUEsT0FBTyxLQUFLLEVBQVosR0FBaUJrQyxXQUFXLENBQUNsQyxPQUE3QixHQUF1Q0E7QUFIcEMsS0FBYjtBQUtBeEcsZUFBVyxDQUFDTixJQUFELEVBQU9nSixXQUFXLENBQUNvQixHQUFuQixFQUF3QnJCLFlBQVksQ0FBQy9GLFVBQWIsQ0FBd0JxSCxJQUFoRCxDQUFYO0FBQ0EsOEJBQU0sOEJBQU47QUFDQSxHQVhEOztBQWFBLFFBQU1DLFNBQVMsR0FBRyxNQUFPL0MsQ0FBUCxJQUFhO0FBQzlCQSxLQUFDLENBQUNDLGNBQUYsR0FEOEIsQ0FFOUI7O0FBQ0FuSCxjQUFVLENBQUM7QUFBRXlHLGFBQUY7QUFBV1gsVUFBWDtBQUFpQmdELGNBQWpCO0FBQTJCRSxjQUEzQjtBQUFxQ0U7QUFBckMsS0FBRCxDQUFWO0FBQ0EsOEJBQU0sNEJBQU47QUFDQSxHQUxEOztBQU9BLHNCQUNDLDZCQUFDLG1CQUFEO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURELGVBR0MsNkJBQUMsbUJBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBVCxJQUhELGVBS0MsNkJBQUMsbUJBQUQ7QUFBSyxNQUFFLEVBQUMsS0FBUjtBQUFjLE1BQUUsRUFBRTtBQUFsQixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxhQUFTLEVBQUMsRUFBZDtBQUFpQixNQUFFLEVBQUM7QUFBcEIsS0FDRTdKLEtBQUssQ0FBQ3VLLElBQU4sR0FDRyxvQkFBbUJqQixXQUFXLElBQUlBLFdBQVcsQ0FBQzdDLElBQUssRUFEdEQsR0FFRSxlQUhKLENBREQsQ0FERCxlQVNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0Msd0RBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUNDLFFBQUksRUFBQyxNQUROO0FBRUMsTUFBRSxFQUFDLE1BRko7QUFHQyxlQUFXLEVBQUMsY0FIYjtBQUlDLGFBQVMsRUFBQyxjQUpYO0FBS0MsZ0JBQVksRUFDWHpHLEtBQUssQ0FBQ3VLLElBQU4sR0FBYWpCLFdBQVcsSUFBSUEsV0FBVyxDQUFDN0MsSUFBeEMsR0FBK0MsRUFOakQ7QUFRQyxZQUFRLEVBQUdvQixDQUFELElBQU87QUFDaEIyQixhQUFPLENBQUMzQixDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0E7QUFWRixJQURELGVBYUMsd0NBYkQsZUFjQztBQUNDLFFBQUksRUFBQyxNQUROO0FBRUMsTUFBRSxFQUFDLGNBRko7QUFHQyxlQUFXLEVBQUMsbUJBSGI7QUFJQyxhQUFTLEVBQUMsY0FKWDtBQUtDLGdCQUFZLEVBQ1hwSSxLQUFLLENBQUN1SyxJQUFOLEdBQWFqQixXQUFXLElBQUlBLFdBQVcsQ0FBQ08sWUFBeEMsR0FBdUQsRUFOekQ7QUFRQyxZQUFRLEVBQUdoQyxDQUFELElBQU87QUFDaEJpQyxxQkFBZSxDQUFDakMsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUNBO0FBVkYsSUFkRCxlQTBCQyx3Q0ExQkQsZUE0QkM7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLE1BQUUsRUFBQyxVQUZKO0FBR0MsZUFBVyxFQUFDLHFCQUhiO0FBSUMsYUFBUyxFQUFDLGNBSlg7QUFLQyxnQkFBWSxFQUNYcEksS0FBSyxDQUFDdUssSUFBTixHQUFhakIsV0FBVyxJQUFJQSxXQUFXLENBQUNHLFFBQXhDLEdBQW1ELEVBTnJEO0FBUUMsWUFBUSxFQUFHNUIsQ0FBRCxJQUFPO0FBQ2hCNkIsd0JBQWtCLENBQUM3QixDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUNBO0FBVkYsSUE1QkQsZUF3Q0Msd0NBeENELGVBeUNDO0FBQU8sV0FBTyxFQUFDO0FBQWYsd0JBekNELGVBMENDO0FBQ0MsZ0JBQVksRUFDWHBJLEtBQUssQ0FBQ3VLLElBQU4sR0FBYWpCLFdBQVcsSUFBSUEsV0FBVyxDQUFDSyxRQUF4QyxHQUFtRCxLQUZyRDtBQUlDLFlBQVEsRUFBRSxNQUFNO0FBQ2ZDLGlCQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0EsS0FORjtBQU9DLFFBQUksRUFBQyxVQVBOO0FBUUMsTUFBRSxFQUFDO0FBUkosSUExQ0QsZUFxREMsd0NBckRELGVBdURDLDREQUNFM0osS0FBSyxDQUFDdUssSUFBTixHQUNBakIsV0FBVyxJQUFJQSxXQUFXLENBQUNsQyxPQUEzQixnQkFDQyw2QkFBQyxlQUFEO0FBQ0MsZ0JBQVksRUFBRW9ELFlBRGY7QUFFQyxnQkFBWSxFQUFFbEIsV0FBVyxJQUFJQSxXQUFXLENBQUNsQztBQUYxQyxJQURELEdBS0ksSUFOSixnQkFRQSw2QkFBQyxlQUFEO0FBQVEsZ0JBQVksRUFBRW9ELFlBQXRCO0FBQW9DLGdCQUFZLEVBQUM7QUFBakQsSUFURixDQXZERCxlQW9FQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLGNBQUQ7QUFDQyxZQUFRLEVBQUUsSUFEWDtBQUVDLFdBQU8sRUFBRzNDLENBQUQsSUFBTztBQUNmN0gsV0FBSyxDQUFDdUssSUFBTixHQUFhRSxVQUFVLENBQUM1QyxDQUFELENBQXZCLEdBQTZCK0MsU0FBUyxDQUFDL0MsQ0FBRCxDQUF0QztBQUNBO0FBSkYsS0FLRTdILEtBQUssQ0FBQ3VLLElBQU4sR0FBYSxRQUFiLEdBQXdCLEtBTDFCLENBREQsQ0FwRUQsQ0FERCxDQURELENBVEQsQ0FERCxlQTZGQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLGlCQUFEO0FBQVksUUFBSSxFQUFDLElBQWpCO0FBQXNCLFNBQUssRUFBQyxTQUE1QjtBQUFzQyxXQUFPLEVBQUV2RDtBQUEvQyxJQURELENBN0ZELENBTEQsZUF1R0MsNkJBQUMsbUJBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBVCxJQXZHRCxDQUREO0FBMkdBLENBaktEOztBQW1LQSxNQUFNTSxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNuQzhCLGNBQVksRUFBRTlCLEtBQUssQ0FBQ2pFLFVBRGU7QUFFbkNnRyxhQUFXLEVBQUUvQixLQUFLLENBQUNYLE9BQU4sQ0FBY2lFO0FBRlEsQ0FBWixDQUF4Qjs7ZUFLZSx5QkFBUXZELGVBQVIsRUFBeUI7QUFDdkMzRyxZQUFVLEVBQVZBLG1CQUR1QztBQUV2Q0MsYUFBVyxFQUFYQSxvQkFGdUM7QUFHdkNSLFlBQVUsRUFBVkE7QUFIdUMsQ0FBekIsRUFJWmdKLGFBSlksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25MZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNMEIsVUFBVSxHQUFHLENBQUM7QUFBRXZILGVBQUY7QUFBaUJDLGdCQUFqQjtBQUFpQytHLE1BQWpDO0FBQXVDN0Q7QUFBdkMsQ0FBRCxLQUFvRDtBQUN0RSxRQUFNLENBQUNhLEtBQUQsRUFBUXdELFFBQVIsSUFBb0IscUJBQVMsRUFBVCxDQUExQjtBQUNBLFFBQU0sQ0FBQ3pLLElBQUQsRUFBT29ILE9BQVAsSUFBa0IscUJBQVMsRUFBVCxDQUF4QjtBQUVBLHdCQUFVLE1BQU07QUFDZixVQUFNc0QsU0FBUyxHQUFHLFlBQVk7QUFDN0IsVUFBSVQsSUFBSixFQUFVO0FBQ1QsY0FBTWxLLEdBQUcsR0FBRyxNQUFNLHlCQUNoQixzQkFBcUJxRyxLQUFLLENBQUNDLE1BQU4sQ0FBYTlGLGNBQWUsRUFEakMsQ0FBbEI7QUFHQTdCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsR0FBWjtBQUNBLGNBQU07QUFBRW9HLGNBQUY7QUFBUXdFLGtCQUFSO0FBQWtCN0QsaUJBQWxCO0FBQTJCc0Q7QUFBM0IsWUFBbUNySyxHQUFHLENBQUNDLElBQUosQ0FBU2dELFVBQWxEO0FBQ0FvRSxlQUFPLENBQUM7QUFBRWpCLGNBQUY7QUFBUXdFLGtCQUFSO0FBQWtCN0QsaUJBQWxCO0FBQTJCc0Q7QUFBM0IsU0FBRCxDQUFQO0FBQ0E7QUFDRCxLQVREOztBQVVBTSxhQUFTO0FBQ1QsR0FaRCxFQVlHLENBQUNULElBQUQsRUFBTzdELEtBQUssQ0FBQ0MsTUFBTixDQUFhOUYsY0FBcEIsQ0FaSDtBQWFBN0IsU0FBTyxDQUFDQyxHQUFSLENBQVlzTCxJQUFaLEVBQWtCakssSUFBbEI7O0FBRUEsUUFBTTRLLFlBQVksR0FBSXJELENBQUQsSUFBTztBQUMzQmtELFlBQVEsaUNBQ0p4RCxLQURJO0FBRVAsT0FBQ00sQ0FBQyxDQUFDTSxNQUFGLENBQVNqSSxFQUFWLEdBQWUySCxDQUFDLENBQUNNLE1BQUYsQ0FBU0M7QUFGakIsT0FBUjtBQUlBLEdBTEQ7O0FBT0EsUUFBTW9DLFlBQVksR0FBSXJELElBQUQsSUFBVTtBQUM5QjRELFlBQVEsaUNBQ0p4RCxLQURJO0FBRVBILGFBQU8sRUFBRUQ7QUFGRixPQUFSO0FBSUEsR0FMRDs7QUFPQSxRQUFNUyxZQUFZLEdBQUcsTUFBT0MsQ0FBUCxJQUFhO0FBQ2pDQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJeUMsSUFBSixFQUFVL0csY0FBYyxDQUFDK0QsS0FBRCxFQUFRakgsSUFBSSxDQUFDb0ssR0FBYixDQUFkLENBQVYsS0FDS25ILGFBQWEsQ0FBQ2dFLEtBQUQsQ0FBYjtBQUNMLEdBSkQ7O0FBTUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFNLGFBQVMsRUFBQztBQUFoQixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQ0MsUUFBSSxFQUFDLE1BRE47QUFFQyxNQUFFLEVBQUMsTUFGSjtBQUdDLFlBQVEsTUFIVDtBQUlDLGVBQVcsRUFBQyxpQkFKYjtBQUtDLGFBQVMsRUFBQyxjQUxYO0FBTUMsZ0JBQVksRUFBRWdELElBQUksR0FBR2pLLElBQUksSUFBSUEsSUFBSSxDQUFDbUcsSUFBaEIsR0FBdUIsRUFOMUM7QUFPQyxZQUFRLEVBQUV5RTtBQVBYLElBREQsZUFVQyx3Q0FWRCxlQVdDO0FBQ0MsWUFBUSxNQURUO0FBRUMsUUFBSSxFQUFDLE1BRk47QUFHQyxNQUFFLEVBQUMsVUFISjtBQUlDLFlBQVEsRUFBRUEsWUFKWDtBQUtDLGVBQVcsRUFBQyxXQUxiO0FBTUMsYUFBUyxFQUFDLGNBTlg7QUFPQyxnQkFBWSxFQUFFWCxJQUFJLEdBQUdqSyxJQUFJLElBQUlBLElBQUksQ0FBQzJLLFFBQWhCLEdBQTJCO0FBUDlDLElBWEQsZUFvQkMsd0NBcEJELEVBcUJFLENBQUNWLElBQUQsaUJBQ0EseUVBQ0M7QUFDQyxZQUFRLE1BRFQ7QUFFQyxRQUFJLEVBQUMsTUFGTjtBQUdDLE1BQUUsRUFBQyxLQUhKO0FBSUMsWUFBUSxFQUFFVyxZQUpYO0FBS0MsZUFBVyxFQUFDLGdCQUxiO0FBTUMsYUFBUyxFQUFDO0FBTlgsSUFERCxlQVNDLHdDQVRELENBdEJGLGVBbUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRVgsSUFBSSxHQUNKakssSUFBSSxJQUFJQSxJQUFJLENBQUM4RyxPQUFiLGdCQUNDLDZCQUFDLGVBQUQ7QUFDQyxZQUFRLE1BRFQ7QUFFQyxnQkFBWSxFQUFFOUcsSUFBSSxJQUFJQSxJQUFJLENBQUM4RyxPQUY1QjtBQUdDLGFBQVMsRUFBQyxXQUhYO0FBSUMsZ0JBQVksRUFBRW9EO0FBSmYsSUFERCxHQU9JLElBUkEsZ0JBVUosNkJBQUMsZUFBRDtBQUNDLFlBQVEsTUFEVDtBQUVDLGdCQUFZLEVBQUMsRUFGZDtBQUdDLGFBQVMsRUFBQyxXQUhYO0FBSUMsZ0JBQVksRUFBRUE7QUFKZixJQVhGLENBbkNELGVBdURDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsNkJBQUMsY0FBRDtBQUFRLFdBQU8sRUFBRTVDLFlBQWpCO0FBQStCLFlBQVEsRUFBRSxJQUF6QztBQUErQyxRQUFJLEVBQUM7QUFBcEQsS0FDRTJDLElBQUksR0FBRyxRQUFILEdBQWMsS0FEcEIsQ0FERCxDQXZERCxDQURELENBREQsQ0FERDtBQW1FQSxDQTFHRDs7ZUE0R2UseUJBQVEsSUFBUixFQUFjO0FBQUVoSCxlQUFhLEVBQWJBLHNCQUFGO0FBQWlCQyxnQkFBYyxFQUFkQTtBQUFqQixDQUFkLEVBQWlEc0gsVUFBakQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUssV0FBVyxHQUFHLENBQUM7QUFDcEI3SCxZQURvQjtBQUVwQm9ELE9BRm9CO0FBR3BCMUMsVUFIb0I7QUFJcEJDLFdBSm9CO0FBS3BCbUgsVUFMb0I7QUFNcEJiO0FBTm9CLENBQUQsS0FPZDtBQUNMLFFBQU0sQ0FBQ2pLLElBQUQsRUFBT29ILE9BQVAsSUFBa0IscUJBQVM7QUFBRTJELFVBQU0sRUFBRTtBQUFWLEdBQVQsQ0FBeEI7QUFDQXJNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbU0sUUFBWjtBQUNBLHdCQUFVLE1BQU07QUFDZjFELFdBQU8sQ0FBQztBQUNQMkQsWUFBTSxFQUFFRCxRQUFRLENBQUNwTCxLQUFULElBQWtCb0wsUUFBUSxDQUFDcEwsS0FBVCxDQUFlc0wsUUFEbEM7QUFFUDdFLFVBQUksRUFBRTJFLFFBQVEsQ0FBQ3BMLEtBQVQsSUFBa0JvTCxRQUFRLENBQUNwTCxLQUFULENBQWV5RztBQUZoQyxLQUFELENBQVA7QUFJQSxHQUxELEVBS0csQ0FBQzJFLFFBQVEsQ0FBQ3BMLEtBQVYsQ0FMSDs7QUFPQSxRQUFNNEgsWUFBWSxHQUFHLE1BQU9DLENBQVAsSUFBYTtBQUNqQ0EsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUksQ0FBQ3lDLElBQUwsRUFBVztBQUNWdkwsYUFBTyxDQUFDQyxHQUFSLGlDQUNNcUIsSUFETjtBQUNZaUwsb0JBQVksRUFBRWpJLFVBQVUsQ0FBQ29IO0FBRHJDLFVBRUNoRSxLQUFLLENBQUNDLE1BQU4sQ0FBYTlGLGNBRmQ7QUFJQW1ELGNBQVEsaUNBQ0YxRCxJQURFO0FBQ0lpTCxvQkFBWSxFQUFFakksVUFBVSxDQUFDb0g7QUFEN0IsVUFFUGhFLEtBQUssQ0FBQ0MsTUFBTixDQUFhOUYsY0FGTixDQUFSO0FBSUEsZ0NBQU0sMEJBQU47QUFDQSxLQVZELE1BVU87QUFDTm9ELGVBQVMsQ0FBQzNELElBQUQsRUFBT29HLEtBQUssQ0FBQ0MsTUFBTixDQUFhMUYsT0FBcEIsRUFBNkJ5RixLQUFLLENBQUNDLE1BQU4sQ0FBYTlGLGNBQTFDLENBQVQ7QUFDQSxnQ0FBTSxTQUFOO0FBQ0E7QUFDRCxHQWhCRDs7QUFrQkEsc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLHlDQUFLMEosSUFBSSxHQUFHLFFBQUgsR0FBYyxLQUF2QixXQURELGVBRUMsMkNBQ0UsR0FERixlQUVDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFDQyxnQkFBWSxFQUFFYSxRQUFRLENBQUNwTCxLQUFULElBQWtCb0wsUUFBUSxDQUFDcEwsS0FBVCxDQUFleUcsSUFEaEQ7QUFFQyxZQUFRLEVBQUdvQixDQUFELElBQU87QUFDaEJILGFBQU8sQ0FBRVEsSUFBRCxvQ0FBZ0JBLElBQWhCO0FBQXNCekIsWUFBSSxFQUFFb0IsQ0FBQyxDQUFDTSxNQUFGLENBQVNDO0FBQXJDLFFBQUQsQ0FBUDtBQUNBLEtBSkY7QUFLQyxRQUFJLEVBQUM7QUFMTixJQURELENBRkQsZUFXQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLGtCQUFEO0FBQ0MsWUFBUSxFQUFFOUgsSUFBSSxDQUFDK0ssTUFEaEI7QUFFQyxXQUFPLEVBQUUsTUFBTTtBQUNkM0QsYUFBTyxDQUFFUSxJQUFELG9DQUFnQkEsSUFBaEI7QUFBc0JtRCxjQUFNLEVBQUUsQ0FBQ25ELElBQUksQ0FBQ21EO0FBQXBDLFFBQUQsQ0FBUDtBQUNBO0FBSkYsSUFERCxDQVhELGVBbUJDLDZCQUFDLGNBQUQ7QUFBUSxZQUFRLEVBQUUsSUFBbEI7QUFBd0IsV0FBTyxFQUFFekQ7QUFBakMsS0FDRTJDLElBQUksR0FBRyxRQUFILEdBQWMsS0FEcEIsQ0FuQkQsQ0FGRCxDQURELENBREQ7QUE4QkEsQ0FqRUQ7O0FBbUVBLE1BQU1qRCxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNuQ2pFLFlBQVUsRUFBRWlFLEtBQUssQ0FBQ2pFLFVBQU4sQ0FBaUJBO0FBRE0sQ0FBWixDQUF4Qjs7ZUFJZSx5QkFBUWdFLGVBQVIsRUFBeUI7QUFBRXRELFVBQVEsRUFBUkEsaUJBQUY7QUFBWUMsV0FBUyxFQUFUQTtBQUFaLENBQXpCLEVBQWtEa0gsV0FBbEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFZjs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTUssV0FBVyxHQUFHLENBQUM7QUFDcEJqQixNQURvQjtBQUVwQjdELE9BRm9CO0FBR3BCdEIsVUFIb0I7QUFJcEJFLFdBSm9CO0FBS3BCSCxVQUxvQjtBQU1wQmtFLGNBTm9CO0FBT3BCb0M7QUFQb0IsQ0FBRCxLQVFkO0FBQ0wsUUFBTSxDQUFDaEYsSUFBRCxFQUFPaUYsT0FBUCxJQUFrQixxQkFBU0QsU0FBUyxHQUFHQSxTQUFTLENBQUNoRixJQUFiLEdBQW9CLEVBQXRDLENBQXhCO0FBQ0EsUUFBTSxDQUFDa0YsV0FBRCxFQUFjQyxjQUFkLElBQWdDLHFCQUNyQ0gsU0FBUyxHQUFHQSxTQUFTLENBQUNFLFdBQWIsR0FBMkIsRUFEQyxDQUF0QztBQUdBLFFBQU0sQ0FBQ0UsR0FBRCxFQUFNQyxNQUFOLElBQWdCLHFCQUFTTCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ0ksR0FBYixHQUFtQixFQUFyQyxDQUF0Qjs7QUFFQSxRQUFNakIsU0FBUyxHQUFHLE1BQU8vQyxDQUFQLElBQWE7QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU0xQyxRQUFRLENBQ2I7QUFBRXFCLFVBQUY7QUFBUWtGLGlCQUFSO0FBQXFCRTtBQUFyQixLQURhLEVBRWJuRixLQUFLLENBQUNDLE1BQU4sQ0FBYTFGLE9BRkEsRUFHYm9JLFlBQVksQ0FBQy9GLFVBQWIsQ0FBd0JtRCxJQUhYLENBQWQ7QUFLQSxHQVBEOztBQVNBLFFBQU1nRSxVQUFVLEdBQUcsTUFBTzVDLENBQVAsSUFBYTtBQUMvQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTXhDLFNBQVMsQ0FDZDtBQUFFbUIsVUFBRjtBQUFRa0YsaUJBQVI7QUFBcUJFO0FBQXJCLEtBRGMsRUFFZEosU0FBUyxDQUFDZixHQUZJLEVBR2RyQixZQUFZLENBQUMvRixVQUFiLENBQXdCbUQsSUFIVixDQUFmO0FBS0EsR0FQRDs7QUFTQSxzQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MseUNBQUs4RCxJQUFJLEdBQUcsUUFBSCxHQUFjLE1BQXZCLFVBREQsZUFFQyx3REFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLG1EQURELGVBRUM7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLFNBQUssRUFBRTlELElBRlI7QUFHQyxZQUFRLEVBQUdvQixDQUFELElBQU82RCxPQUFPLENBQUM3RCxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVjtBQUh6QixJQUZELENBREQsZUFTQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLGtEQURELGVBRUM7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLFNBQUssRUFBRXlELEdBRlI7QUFHQyxZQUFRLEVBQUdoRSxDQUFELElBQU9pRSxNQUFNLENBQUNqRSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVjtBQUh4QixJQUZELENBVEQsZUFpQkM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywwREFERCxlQUVDO0FBQ0MsU0FBSyxFQUFFdUQsV0FEUjtBQUVDLFlBQVEsRUFBRzlELENBQUQsSUFBTytELGNBQWMsQ0FBQy9ELENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWO0FBRmhDLElBRkQsQ0FqQkQsQ0FGRCxlQTJCQyw2QkFBQyxjQUFEO0FBQ0MsWUFBUSxFQUFFLElBRFg7QUFFQyxXQUFPLEVBQUdQLENBQUQsSUFBTztBQUNmMEMsVUFBSSxHQUFHRSxVQUFVLENBQUM1QyxDQUFELENBQWIsR0FBbUIrQyxTQUFTLENBQUMvQyxDQUFELENBQWhDO0FBQ0E7QUFKRixLQUtFMEMsSUFBSSxHQUFHLFFBQUgsR0FBYyxLQUxwQixDQTNCRCxDQURELENBREQ7QUF1Q0EsQ0F4RUQ7O0FBMEVBLE1BQU1qRCxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNuQzhCLGNBQVksRUFBRTlCLEtBQUssQ0FBQ2pFLFVBRGU7QUFFbkNtSSxXQUFTLEVBQUVsRSxLQUFLLENBQUM3QixLQUFOLENBQVlxRztBQUZZLENBQVosQ0FBeEI7O2VBS2UseUJBQVF6RSxlQUFSLEVBQXlCO0FBQ3ZDbEMsVUFBUSxFQUFSQSxpQkFEdUM7QUFFdkNFLFdBQVMsRUFBVEEsa0JBRnVDO0FBR3ZDSCxVQUFRLEVBQVJBO0FBSHVDLENBQXpCLEVBSVpxRyxXQUpZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRmY7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxNQUFNUSxZQUFZLEdBQUcsUUFJZjtBQUFBLE1BSmdCO0FBQ3BCMU0sYUFBUyxFQUFFMk0sU0FEUztBQUVwQnpFLFFBQUksRUFBRTtBQUFFMEU7QUFBRjtBQUZjLEdBSWhCO0FBQUEsTUFEREMsSUFDQzs7QUFDSixzQkFDRSw2QkFBQyxxQkFBRCxlQUNNQSxJQUROO0FBRUUsVUFBTSxFQUFHbk0sS0FBRCxJQUNOLENBQUNrTSxlQUFELGdCQUFtQiw2QkFBQyx3QkFBRDtBQUFVLFFBQUUsRUFBQztBQUFiLE1BQW5CLGdCQUE4Qyw2QkFBQyxTQUFELEVBQWVsTSxLQUFmO0FBSGxELEtBREY7QUFRRCxDQWJEOztBQWVBLE1BQU1zSCxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ0MsTUFBSSxFQUFFRCxLQUFLLENBQUNDO0FBRHNCLENBQVosQ0FBeEI7O2VBSWUseUJBQVFGLGVBQVIsRUFBeUIwRSxZQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJmOztBQUNBOzs7O0FBRU8sTUFBTUksR0FBRyxHQUFHLENBQUM7QUFDbkJULGFBRG1CO0FBRW5CVSxPQUFLLEdBQUcsR0FGVztBQUduQkMsTUFBSSxHQUFHLElBSFk7QUFJbkJDLE1BQUksR0FBRyxFQUpZO0FBS25CQztBQUxtQixDQUFELEtBTWI7QUFDTDtBQUVBLFFBQU1DLFNBQVMsR0FBSSxnQkFBZUosS0FBTSxFQUF4QztBQUNBLFFBQU1LLGVBQWUsR0FDcEIscUxBQ0FmLENBRkQ7QUFJQSxzQkFDQyw2QkFBQyxtQkFBRDtBQUNDLFNBQUssRUFBRWMsU0FEUjtBQUVDLGtCQUFjLEVBQUU7QUFBRUg7QUFBRixLQUZqQjtBQUdDLFFBQUksRUFBRSxDQUNMO0FBQUU3RixVQUFJLEVBQUcsYUFBVDtBQUF1QlcsYUFBTyxFQUFFc0Y7QUFBaEMsS0FESyxFQUVMO0FBQUVDLGNBQVEsRUFBRyxVQUFiO0FBQXdCdkYsYUFBTyxFQUFFcUY7QUFBakMsS0FGSyxFQUdMO0FBQUVFLGNBQVEsRUFBRyxnQkFBYjtBQUE4QnZGLGFBQU8sRUFBRXNGO0FBQXZDLEtBSEssRUFJTDtBQUFFQyxjQUFRLEVBQUcsU0FBYjtBQUF1QnZGLGFBQU8sRUFBRztBQUFqQyxLQUpLLEVBS0w7QUFBRVgsVUFBSSxFQUFHLGNBQVQ7QUFBd0JXLGFBQU8sRUFBRztBQUFsQyxLQUxLLEVBTUw7QUFBRVgsVUFBSSxFQUFHLGVBQVQ7QUFBeUJXLGFBQU8sRUFBRXFGO0FBQWxDLEtBTkssRUFPTDtBQUFFaEcsVUFBSSxFQUFHLHFCQUFUO0FBQStCVyxhQUFPLEVBQUVzRjtBQUF4QyxLQVBLLEVBUUpFLE1BUkksQ0FRR0wsSUFSSCxDQUhQO0FBWUMsUUFBSSxFQUFFLENBQUM7QUFBRU0sU0FBRyxFQUFFLE1BQVA7QUFBZTFNLFVBQUksRUFBRSxXQUFyQjtBQUFrQzJNLFVBQUksRUFBRTtBQUF4QyxLQUFELENBWlA7QUFhQyxVQUFNLEVBQUUsQ0FDUDtBQUNDM00sVUFBSSxFQUFFLHFCQURQO0FBRUM0TSxlQUFTLEVBQUVsTCxJQUFJLENBQUNDLFNBQUwsQ0FBZTBLLFVBQWY7QUFGWixLQURPO0FBYlQsSUFERDtBQXNCQSxDQXBDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUNBOzs7O0FBRU8sTUFBTVEsV0FBVyxHQUFHLE9BQU81TixJQUFQLEVBQWFtQixPQUFiLEVBQXNCb0IsT0FBTyxHQUFHLElBQWhDLEtBQXlDO0FBQ2xFLFNBQU8sSUFBSXNMLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDdENDLG1CQUNHQyxJQURILENBQ1MsR0FBRUMsYUFBWSxJQUFHbE8sSUFBSyxFQUQvQixFQUNrQ21CLE9BRGxDLEVBQzJDO0FBQ3ZDb0IsYUFBTyxFQUFFQTtBQUQ4QixLQUQzQyxFQUlHNEwsSUFKSCxDQUlRLFVBQVV0SyxRQUFWLEVBQW9CO0FBQ3hCaUssYUFBTyxDQUFDakssUUFBUSxDQUFDM0MsSUFBVixDQUFQO0FBQ0QsS0FOSCxFQU9Ha04sS0FQSCxDQU9TLFVBQVVoTixLQUFWLEVBQWlCO0FBQ3RCMk0sWUFBTSxDQUFDM00sS0FBRCxDQUFOO0FBQ0QsS0FUSDtBQVVELEdBWE0sQ0FBUDtBQVlELENBYk07Ozs7QUFlQSxNQUFNaU4sVUFBVSxHQUFHLE9BQU9yTyxJQUFQLEVBQWFtQixPQUFiLEtBQXlCO0FBQ2pELFNBQU8sSUFBSTBNLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDdENDLG1CQUNHTSxHQURILENBQ1EsR0FBRUosYUFBWSxJQUFHbE8sSUFBSyxFQUQ5QixFQUNpQ21CLE9BRGpDLEVBRUdnTixJQUZILENBRVEsVUFBVXRLLFFBQVYsRUFBb0I7QUFDeEJpSyxhQUFPLENBQUNqSyxRQUFRLENBQUMzQyxJQUFWLENBQVA7QUFDRCxLQUpILEVBS0drTixLQUxILENBS1MsVUFBVWhOLEtBQVYsRUFBaUI7QUFDdEIyTSxZQUFNLENBQUMzTSxLQUFELENBQU47QUFDRCxLQVBIO0FBUUQsR0FUTSxDQUFQO0FBVUQsQ0FYTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLE1BQU04TSxXQUFXLEdBQUcsdUJBQXBCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7QUFFTyxNQUFNSyxZQUFZLEdBQUloUCxLQUFELElBQVc7QUFDckNLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaOztBQUNBLE1BQUlBLEtBQUosRUFBVztBQUNUeU8sbUJBQU1RLFFBQU4sQ0FBZWpNLE9BQWYsQ0FBdUJrTSxNQUF2QixDQUE4QixlQUE5QixJQUFrRCxPQUFNbFAsS0FBTSxFQUE5RDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU95TyxlQUFNUSxRQUFOLENBQWVqTSxPQUFmLENBQXVCa00sTUFBdkIsQ0FBOEIsZUFBOUIsQ0FBUDtBQUNEO0FBQ0YsQ0FQTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLE1BQU05RCxRQUFRLEdBQUlDLE9BQUQsSUFBYTtBQUNwQ3ZMLFVBQVEsSUFDUHdMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ2JDLFlBQVEsRUFBRSxRQURHO0FBRWJDLFFBQUksRUFBRSxDQUZPO0FBR2JDLE9BQUcsRUFBRUwsT0FBTyxDQUFDTTtBQUhBLEdBQWQsQ0FERDtBQU1BLENBUE07OztBQVNBLE1BQU03TCxRQUFRLEdBQ3BCLE9BQU93TCxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxNQUFNLENBQUNoRCxRQUF4QyxHQUFtRCxJQUFuRCxHQUEwRCxLQURwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFA7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNNkcsY0FBYyxHQUFHLENBQUM7QUFBRXpCLE9BQUY7QUFBU3hJLFVBQVQ7QUFBbUJrSztBQUFuQixDQUFELEtBQW1DO0FBQ3pELHNCQUNDLDZCQUFDLG1CQUFEO0FBQVMsU0FBSyxFQUFFMUIsS0FBaEI7QUFBdUIsWUFBUSxFQUFFeEksUUFBakM7QUFBMkMsV0FBTyxFQUFDO0FBQW5ELEtBQ0VrSyxRQURGLENBREQ7QUFLQSxDQU5EOztBQVFBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUU3TixNQUFGO0FBQVEwTCxLQUFSO0FBQWExRixTQUFiO0FBQXNCdUMsU0FBdEI7QUFBK0JwSSxNQUFJLEdBQUc7QUFBdEMsQ0FBRCxLQUNwQm9JLE9BQU8sZ0JBQ04sNkJBQUMsY0FBRDtBQUFnQixPQUFLLEVBQUcsR0FBRXZJLElBQUssS0FBSUcsSUFBSSxDQUFDbUcsSUFBSyxHQUE3QztBQUFpRCxVQUFRLEVBQUU7QUFBM0QsZ0JBQ0MsNkJBQUMsbUJBQUQ7QUFDQyxNQUFJLEVBQUV0RyxJQURQO0FBRUMsS0FBRyxFQUFFMEwsR0FGTjtBQUdDLFNBQU8sRUFBRTFGLE9BSFY7QUFJQyxNQUFJLEVBQUU3RjtBQUpQLEVBREQsQ0FETSxnQkFVTiw2QkFBQyxtQkFBRDtBQUNDLE1BQUksRUFBRSxNQURQO0FBRUMsS0FBRyxFQUFFdUwsR0FGTjtBQUdDLFNBQU8sRUFBRTFGLE9BSFY7QUFJQyxNQUFJLEVBQUU3RjtBQUpQLEVBWEY7O0FBbUJBLE1BQU0yTixtQkFBbUIsR0FBRyxDQUFDO0FBQUU5TixNQUFGO0FBQVEwTCxLQUFSO0FBQWExRixTQUFiO0FBQXNCN0Y7QUFBdEIsQ0FBRCxLQUFrQztBQUM3RCxVQUFRSCxJQUFSO0FBQ0MsU0FBSyxLQUFMO0FBQ0MsMEJBQ0MsNkJBQUMsb0JBQUQ7QUFBTSxVQUFFLEVBQUUwTDtBQUFWLHNCQUNDLDZCQUFDLFVBQUQ7QUFBSyxZQUFJLEVBQUMsSUFBVjtBQUFlLGFBQUssRUFBQztBQUFyQixRQURELENBREQ7O0FBTUQsU0FBSyxNQUFMO0FBQ0MsMEJBQ0MsNkJBQUMsb0JBQUQ7QUFDQyxVQUFFLEVBQUU7QUFDSHFDLGtCQUFRLEVBQUVyQyxHQURQO0FBRUg3TCxlQUFLLEVBQUU7QUFDTnlHLGdCQUFJLEVBQUVuRyxJQUFJLENBQUNtRyxJQURMO0FBRU42RSxvQkFBUSxFQUFFaEwsSUFBSSxDQUFDK0s7QUFGVDtBQUZKO0FBREwsc0JBUUMsNkJBQUMsYUFBRDtBQUFRLFlBQUksRUFBQyxJQUFiO0FBQWtCLGFBQUssRUFBQztBQUF4QixRQVJELENBREQ7O0FBYUQsU0FBSyxRQUFMO0FBQ0MsMEJBQ0M7QUFDQyxhQUFLLEVBQUU7QUFBRThDLG9CQUFVLEVBQUUsTUFBZDtBQUFzQkMsZ0JBQU0sRUFBRSxNQUE5QjtBQUFzQ0MsaUJBQU8sRUFBRTtBQUEvQyxTQURSO0FBRUMsZUFBTyxFQUFFLE1BQU07QUFDZGxJLGlCQUFPLENBQUM3RixJQUFELENBQVA7QUFDQSxTQUpGO0FBS0MsaUJBQVMsRUFBQztBQUxYLHNCQU1DLDZCQUFDLGFBQUQ7QUFBUSxZQUFJLEVBQUMsSUFBYjtBQUFrQixhQUFLLEVBQUM7QUFBeEIsUUFORCxDQUREOztBQVdEO0FBQ0MsMEJBQU87QUFBUSxZQUFJLEVBQUMsR0FBYjtBQUNOLGFBQUssRUFBRTtBQUFFNk4sb0JBQVUsRUFBRSxNQUFkO0FBQXNCQyxnQkFBTSxFQUFFLE1BQTlCO0FBQXNDQyxpQkFBTyxFQUFFO0FBQS9DLFNBREQ7QUFFTixpQkFBUyxFQUFDO0FBRkosc0JBR04sNkJBQUMsYUFBRDtBQUFRLFlBQUksRUFBQyxHQUFiO0FBQWlCLGFBQUssRUFBQztBQUF2QixRQUhNLENBQVA7QUFuQ0Y7QUF5Q0EsQ0ExQ0Q7O0FBNENBLE1BQU0vRyxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNuQ21CLFNBQU8sRUFBRW5CLEtBQUssQ0FBQ0MsSUFBTixDQUFXa0I7QUFEZSxDQUFaLENBQXhCOztlQUllLHlCQUFRcEIsZUFBUixFQUF5QixJQUF6QixFQUErQjBHLFlBQS9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRmY7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNTSxRQUFRLEdBQUcsQ0FBQztBQUFFbkksU0FBRjtBQUFXNEgsVUFBWDtBQUFxQlEsTUFBckI7QUFBMkJDO0FBQTNCLENBQUQsS0FDaEJULFFBQVEsZ0JBQ1A7QUFDQyxXQUFTLEVBQUcsVUFBU1EsSUFBSSxJQUFJLE1BQU8sRUFEckM7QUFFQyxPQUFLLEVBQUU7QUFBRUUsbUJBQWUsRUFBRyxHQUFFRCxFQUFFLElBQUksSUFBSztBQUFqQyxHQUZSO0FBR0MsU0FBTyxFQUFFckksT0FBTyxHQUFHQSxPQUFILEdBQWMwQixDQUFELElBQU83SSxPQUFPLENBQUNDLEdBQVIsQ0FBWTRJLENBQVosRUFBZTFCLE9BQWY7QUFIckMsZ0JBSUMsMkNBQU80SCxRQUFQLENBSkQsZUFLQyx1REFDQztBQUNDLFdBQVMsRUFBQyxJQURYO0FBRUMsUUFBTSxFQUFDO0FBRlIsRUFERCxlQUlDO0FBQ0MsV0FBUyxFQUFDLElBRFg7QUFFQyxRQUFNLEVBQUM7QUFGUixFQUpELENBTEQsQ0FETyxnQkFnQlAsNERBQ0UsS0FERixlQUVDLHdEQUNDLDZCQUFDLFdBQUQ7QUFBTSxNQUFJLEVBQUU7QUFBWixFQURELENBRkQsQ0FqQkY7O0FBeUJPLE1BQU1XLE1BQU0sR0FBRyxDQUFDO0FBQUVYLFVBQUY7QUFBWWxDLEtBQVo7QUFBaUIwQyxNQUFqQjtBQUF1QkMsSUFBdkI7QUFBMkJHLFVBQTNCO0FBQXFDeEk7QUFBckMsQ0FBRCxLQUFvRDtBQUN6RSxTQUFPLE9BQU93SSxRQUFQLElBQW1CLFdBQW5CLGdCQUNOLDZCQUFDLG9CQUFEO0FBQU0sTUFBRSxFQUFFOUMsR0FBRyxJQUFJQTtBQUFqQixrQkFDQyw2QkFBQyxRQUFEO0FBQVUsUUFBSSxFQUFFMEMsSUFBaEI7QUFBc0IsTUFBRSxFQUFFQztBQUExQixLQUNFVCxRQURGLENBREQsQ0FETSxnQkFPTiw2QkFBQyxRQUFEO0FBQVUsUUFBSSxFQUFFUSxJQUFoQjtBQUFzQixNQUFFLEVBQUVDLEVBQTFCO0FBQThCLFdBQU8sRUFBRXJJO0FBQXZDLEtBQ0U0SCxRQURGLENBUEQ7QUFXQSxDQVpNOzs7O0FBY0EsTUFBTWEsVUFBVSxHQUFHLENBQUM7QUFBRXRELFVBQUY7QUFBWW5GO0FBQVosQ0FBRCxLQUEyQjtBQUNwRCxzQkFBTztBQUFNLFdBQU8sRUFBRUE7QUFBZixLQUF5Qm1GLFFBQVEsZ0JBQUcsNkJBQUMsV0FBRCxPQUFILGdCQUFjLDZCQUFDLGFBQUQsT0FBL0MsQ0FBUDtBQUNBLENBRk07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7Ozs7QUFFQSxNQUFNdUQsaUJBQWlCLEdBQUcsTUFBTTtBQUM5QixzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUcsT0FBRyxFQUFDLFVBQVA7QUFBa0IsUUFBSSxFQUFDO0FBQXZCLGtCQUNFO0FBQ0UsT0FBRyxFQUFDLHlEQUROO0FBRUUsT0FBRyxFQUFDO0FBRk4sSUFERixDQURGLGVBT0U7QUFBRyxPQUFHLEVBQUMsVUFBUDtBQUFrQixRQUFJLEVBQUM7QUFBdkIsa0JBQ0U7QUFBSyxPQUFHLEVBQUMsaURBQVQ7QUFBMkQsT0FBRyxFQUFDO0FBQS9ELElBREYsQ0FQRixlQVVFO0FBQUcsT0FBRyxFQUFDLFVBQVA7QUFBa0IsUUFBSSxFQUFDO0FBQXZCLGtCQUNFO0FBQUssT0FBRyxFQUFDLG1EQUFUO0FBQTZELE9BQUcsRUFBQztBQUFqRSxJQURGLENBVkYsZUFhRTtBQUFHLE9BQUcsRUFBQyxVQUFQO0FBQWtCLFFBQUksRUFBQztBQUF2QixrQkFDRTtBQUNFLE9BQUcsRUFBQyxnREFETjtBQUVFLGFBQVMsRUFBQyxRQUZaO0FBR0UsT0FBRyxFQUFDO0FBSE4sSUFERixDQWJGLENBREY7QUF1QkQsQ0F4QkQ7O0FBMEJPLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQzFCLFFBQU0sQ0FBQzVNLEtBQUQsRUFBUTZNLFFBQVIsSUFBb0IscUJBQVMsRUFBVCxDQUExQjtBQUNBLFFBQU0sQ0FBQ2xNLE9BQUQsRUFBVW1NLFVBQVYsSUFBd0IscUJBQVMsRUFBVCxDQUE5QjtBQUVBLHdCQUFVLE1BQU07QUFDZEMsb0JBQWdCO0FBQ2pCLEdBRkQ7QUFJQSxRQUFNQSxnQkFBZ0IsR0FBRyx3QkFBWSxNQUFNO0FBQUVELGNBQVUsQ0FBQyxtREFBRCxDQUFWO0FBQWlFLEdBQXJGLEVBQ3JCLEVBRHFCLENBQXpCO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwwREFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsbUJBREYsZUFFRSw2QkFBQyxpQkFBRCxPQUZGLGVBR0U7QUFBRyxhQUFTLEVBQUM7QUFBYixtREFIRixDQURGLGVBUUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwwREFERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFGRixlQUdFLHdDQUFJbk0sT0FBSixDQUhGLGVBSUU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsa0JBQ0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFNBQUssRUFBRVgsS0FGVDtBQUdFLFlBQVEsRUFBRzJGLENBQUQsSUFBTztBQUNma0gsY0FBUSxDQUFDbEgsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEtBTEg7QUFNRSxRQUFJLEVBQUMsT0FOUDtBQU9FLGFBQVMsRUFBQyxNQVBaO0FBUUUsZUFBVyxFQUFDO0FBUmQsSUFERixlQVlFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFFBQTNCO0FBQW9DLGFBQVMsRUFBQztBQUE5QyxJQVpGLENBSkYsQ0FSRixDQURGLENBREYsQ0FERjtBQWtDRCxDQTdDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCUDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFJQTs7Ozs7Ozs7QUFOQTtBQUdBO0FBRUE7QUFHQSxNQUFNOEcsTUFBTSxHQUFHLENBQUM7QUFBRTFILE1BQUY7QUFBUTlDLElBQVI7QUFBWU07QUFBWixDQUFELEtBQWtDO0FBQ2hEO0FBQ0EsUUFBTSxDQUFDbUssY0FBRCxFQUFpQkMsaUJBQWpCLElBQXNDLHFCQUFTLEtBQVQsQ0FBNUM7QUFDQSxRQUFNLENBQUNDLFFBQUQsRUFBV0MsV0FBWCxJQUEwQixxQkFBUyxLQUFULENBQWhDO0FBRUEsd0JBQVUsTUFBTTtBQUNmckksWUFBUSxDQUFDYyxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxTQUEvQixDQUF5Q0MsR0FBekMsQ0FBNkN2RCxFQUFFLENBQUNPLFdBQWhEO0FBQ0FqRyxXQUFPLENBQUNDLEdBQVIsQ0FBWXlGLEVBQUUsQ0FBQ08sV0FBZjs7QUFDQSxRQUFJUCxFQUFFLENBQUNPLFdBQUgsS0FBbUIsTUFBdkIsRUFBK0I7QUFDOUJxSyxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBO0FBQ0QsR0FORCxFQU1HLENBQUNBLFdBQUQsRUFBYzVLLEVBQUUsQ0FBQ08sV0FBakIsQ0FOSCxFQUxnRCxDQWFoRDs7QUFDQSxNQUFJeEcsaUJBQUosRUFBYztBQUNiLFFBQUk4USxJQUFJLEdBQUcsT0FBWDtBQUVBQSxRQUFJLEdBQUc3USxZQUFZLENBQUMwQyxPQUFiLENBQXFCLE1BQXJCLENBQVA7O0FBRUEsUUFBSW1PLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ3BCdEksY0FBUSxDQUFDYyxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxTQUEvQixDQUF5Q0MsR0FBekMsQ0FBNkMsTUFBN0M7QUFDQSxLQUZELE1BRU87QUFDTmhCLGNBQVEsQ0FBQ2MsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUN3SCxNQUF6QyxDQUFnRCxNQUFoRDtBQUNBO0FBQ0QsR0F4QitDLENBMEJoRDtBQUVBOzs7QUFFQSxzQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsNkJBQUMseUJBQUQ7QUFDQyxhQUFTLEVBQUUvUSxxQkFBWXdMLE1BQU0sQ0FBQ3dGLFVBQVAsSUFBcUIsR0FBakMsR0FBdUMsSUFBdkMsR0FBOEM7QUFEMUQsa0JBRUMsNkJBQUMsbUJBQUQscUJBQ0MsNkJBQUMsbUJBQUQscUJBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyw2QkFBQyxvQkFBRDtBQUFNLE1BQUUsRUFBQztBQUFULGtCQUNDO0FBQ0MsU0FBSyxFQUFFO0FBQ050RyxjQUFRLEVBQUUxSyxxQkFBWXdMLE1BQU0sQ0FBQ3lGLFdBQVAsSUFBc0IsR0FBbEMsR0FBd0MsTUFBeEMsR0FBaUQ7QUFEckQsS0FEUjtBQUlDLGFBQVMsRUFBQyxVQUpYO0FBS0MsT0FBRyxFQUFFQyxzQkFMTjtBQU1DLE9BQUcsRUFBQztBQU5MLElBREQsQ0FERCxlQVdDO0FBQ0MsTUFBRSxFQUFDLFFBREo7QUFFQyxXQUFPLEVBQUUsTUFBTTtBQUNkM0ssb0JBQWM7QUFDZHNLLGlCQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0EsS0FMRjtBQU1DLGFBQVMsRUFBRyxzQkFBcUJBLFFBQVEsR0FBRyxVQUFILEdBQWdCLEVBQ3ZEO0FBUEgsa0JBUUM7QUFDQyxTQUFLLEVBQUU7QUFDTloscUJBQWUsRUFDZC9KLEVBQUUsQ0FBQ08sV0FBSCxLQUFtQixNQUFuQixHQUE0QixNQUE1QixHQUFxQztBQUZoQyxLQURSO0FBS0MsTUFBRSxFQUFDO0FBTEosa0JBTUM7QUFDQyxhQUFTLEVBQUMsV0FEWDtBQUVDLFNBQUssRUFBRTtBQUFFMkssV0FBSyxFQUFFO0FBQVQsS0FGUjtBQUdDLE9BQUcsRUFDRmxMLEVBQUUsQ0FBQ08sV0FBSCxLQUFtQixNQUFuQixHQUNHLDRDQURILEdBRUcsNENBTkw7QUFRQyxPQUFHLEVBQUM7QUFSTCxJQU5ELENBUkQsQ0FYRCxlQXFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLHVEQUNDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLGdCQURELGVBRUMsd0RBQ0M7QUFDQyxPQUFHLEVBQUMsV0FETDtBQUVDLE9BQUcsRUFBQyxxREFGTDtBQUdDLGFBQVMsRUFBQztBQUhYLElBREQsQ0FGRCxlQVNDLGdEQUFRdUMsSUFBSSxDQUFDbEcsSUFBTCxJQUFha0csSUFBSSxDQUFDbEcsSUFBTCxDQUFVdU8sTUFBL0IsTUFURCxDQURELENBckNELGVBbURDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRXJJLElBQUksQ0FBQzBFLGVBQUwsSUFBd0IxRSxJQUFJLENBQUMwRSxlQUE3QixnQkFDQSx5RUFDQyw2QkFBQyxzQkFBRCxPQURELENBREEsZ0JBS0EsNkJBQUMsdUJBQUQsT0FORixDQW5ERCxlQTZEQyw2QkFBQyx5QkFBRCxDQUFXLE1BQVg7QUFDQyxhQUFTLEVBQUMsU0FEWDtBQUVDLFdBQU8sRUFBRSxNQUFNO0FBQ2RrRCx1QkFBaUIsQ0FBQyxDQUFDRCxjQUFGLENBQWpCO0FBQ0EsS0FKRjtBQUtDLE1BQUUsRUFBRVQsc0JBTEw7QUFNQyxXQUFPLEVBQUMsTUFOVDtBQU9DLFlBQVEsRUFBQztBQVBWLGtCQVFDO0FBQ0MsYUFBUyxFQUFDLGdCQURYO0FBRUMsUUFBSSxFQUFDLFFBRk47QUFHQyxtQkFBWSx5QkFIYjtBQUlDLHFCQUFjLHdCQUpmO0FBS0MscUJBQWVTLGNBTGhCO0FBTUMsa0JBQVc7QUFOWixrQkFPQztBQUFNLGFBQVMsRUFBQztBQUFoQixJQVBELENBUkQsQ0E3REQsZUErRUMsNkJBQUMseUJBQUQsQ0FBVyxRQUFYO0FBQ0MsYUFBUyxFQUFDLEdBRFg7QUFFQyxNQUFFLEVBQUMsd0JBRko7QUFHQyxZQUFRLEVBQUM7QUFIVixrQkFJQywwQ0FDRTNILElBQUksQ0FBQ2xHLElBQUwsSUFBYWtHLElBQUksQ0FBQ2xHLElBQUwsQ0FBVUgsTUFBdkIsZ0JBQ0EsNkJBQUMsc0JBQUQsT0FEQSxnQkFHQSw2QkFBQyx1QkFBRCxPQUpGLENBSkQsQ0EvRUQsQ0FERCxDQURELENBRkQsQ0FERCxDQURELENBREQ7QUF5R0EsQ0F2SUQsQyxDQXlJQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1tRyxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxTQUFPO0FBQ05DLFFBQUksRUFBRUQsS0FBSyxDQUFDQyxJQUROO0FBRU45QyxNQUFFLEVBQUU2QyxLQUFLLENBQUM3QztBQUZKLEdBQVA7QUFJQSxDQUxEOztlQU9lLHlCQUFRNEMsZUFBUixFQUF5QjtBQUFFdEMsZ0JBQWMsRUFBZEE7QUFBRixDQUF6QixFQUE2Q2tLLE1BQTdDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS2Y7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNWSxhQUFhLEdBQUcsTUFBTTtBQUMzQixzQkFDQyx1REFDQztBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNDO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0MsNkJBQUMsdUJBQUQ7QUFBUyxNQUFFLEVBQUMsT0FBWjtBQUFvQixhQUFTLEVBQUM7QUFBOUIsWUFERCxDQURELGVBTUM7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDQyw2QkFBQyx1QkFBRDtBQUFTLE1BQUUsRUFBQyxRQUFaO0FBQXFCLGFBQVMsRUFBQztBQUEvQixhQURELENBTkQsZUFXQztBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNDLDZCQUFDLHVCQUFEO0FBQ0MsYUFBUyxFQUFDLFdBRFg7QUFFQyxNQUFFLEVBQUMsUUFGSjtBQUdDLFFBQUksRUFBQyxRQUhOO0FBSUMscUJBQWM7QUFKZixhQURELGVBUUM7QUFBSyxhQUFTLEVBQUM7QUFBZixJQVJELENBWEQsZUFzQkM7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDQztBQUNDLFdBQU8sRUFBRSxNQUFNO0FBQ2RwUixrQkFBWSxDQUFDNkQsS0FBYjtBQUNBLEtBSEY7QUFJQyxRQUFJLEVBQUMsR0FKTjtBQUtDLFFBQUksRUFBQyxRQUxOO0FBTUMsYUFBUyxFQUFDO0FBTlgsY0FERCxDQXRCRCxDQURELENBREQ7QUFzQ0EsQ0F2Q0Q7O2VBeUNldU4sYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NmOztBQUNBOzs7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDM0Isc0JBQ0UsdURBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDRTtBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNFLDZCQUFDLHVCQUFEO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBb0IsYUFBUyxFQUFDO0FBQTlCLFlBREYsQ0FERixlQU1FO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0UsNkJBQUMsdUJBQUQ7QUFBUyxNQUFFLEVBQUMsUUFBWjtBQUFxQixhQUFTLEVBQUM7QUFBL0IsYUFERixDQU5GLGVBV0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDRSw2QkFBQyx1QkFBRDtBQUNFLGFBQVMsRUFBQyxXQURaO0FBRUUsTUFBRSxFQUFDLFFBRkw7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLHFCQUFjO0FBSmhCLGFBREYsZUFTRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBVEYsQ0FYRixlQXNCRTtBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNFLDZCQUFDLHVCQUFEO0FBQ0UsYUFBUyxFQUFDLFdBRFo7QUFFRSxNQUFFLEVBQUMsUUFGTDtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUscUJBQWMsTUFKaEI7QUFLRSxxQkFBYztBQUxoQixhQURGLGVBVUU7QUFBSyxhQUFTLEVBQUM7QUFBZixJQVZGLENBdEJGLENBREYsQ0FERjtBQXVDRCxDQXhDRDs7ZUEwQ2VBLGM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NmOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7QUFFTyxNQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsSUFERixlQUVFO0FBQU0sYUFBUyxFQUFDO0FBQWhCLElBRkYsZUFHRTtBQUFNLGFBQVMsRUFBQztBQUFoQixJQUhGLENBREYsQ0FERjtBQVNELENBVk07OztlQVlRQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkZixNQUFNQyxZQUFZLEdBQUc7QUFBRXhILFVBQVEsRUFBRTtBQUFaLENBQXJCOztBQUVlLFNBQVN5SCxjQUFULENBQXdCM0ksS0FBSyxHQUFHMEksWUFBaEMsRUFBOENFLE1BQTlDLEVBQXNEO0FBQ3BFLFFBQU07QUFBRWhRLFFBQUY7QUFBUUk7QUFBUixNQUFvQjRQLE1BQTFCOztBQUVBLFVBQVFoUSxJQUFSO0FBQ0MsU0FBSyxhQUFMO0FBQ0MsNkNBQ0lvSCxLQURKO0FBRUM2SSxjQUFNLEVBQUU3UDtBQUZUOztBQUtELFNBQUssYUFBTDtBQUNDLDZDQUNJZ0gsS0FESjtBQUVDc0QsdUJBQWUsRUFBRXRLLE9BQU8sQ0FBQ3FHO0FBRjFCOztBQUlELFNBQUssa0JBQUw7QUFDQyw2Q0FDSVcsS0FESjtBQUVDa0IsZ0JBQVEsRUFBRWxJLE9BQU8sQ0FBQ2tJO0FBRm5COztBQUlELFNBQUssZUFBTDtBQUNDLDZDQUNJbEIsS0FESjtBQUVDc0QsdUJBQWUsRUFBRTtBQUZsQjs7QUFLRCxTQUFLLG1CQUFMO0FBQ0MsK0JBQ0l0RCxLQURKOztBQUlEO0FBQ0MsYUFBT0EsS0FBUDtBQTdCRjtBQStCQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDRDs7QUFVQTs7Ozs7Ozs7QUFFQSxNQUFNMEksWUFBWSxHQUFHO0FBQ3BCdFIsT0FBSyxFQUFFRixxQkFBWUMsWUFBWSxDQUFDMEMsT0FBYixDQUFxQixPQUFyQixDQURDO0FBRXBCOEssaUJBQWUsRUFBRSxJQUZHO0FBR3BCbUUsU0FBTyxFQUFFLEtBSFc7QUFJcEIvTyxNQUFJLEVBQUUsSUFKYztBQUtwQm9ILFNBQU8sRUFBRTtBQUxXLENBQXJCOztBQVFlLFNBQVM0SCxXQUFULENBQXFCL0ksS0FBSyxHQUFHMEksWUFBN0IsRUFBMkNFLE1BQTNDLEVBQW1EO0FBQ2pFLFFBQU07QUFBRWhRLFFBQUY7QUFBUUk7QUFBUixNQUFvQjRQLE1BQTFCOztBQUVBLFVBQVFoUSxJQUFSO0FBQ0MsU0FBS2tCLGtCQUFMO0FBQ0MsNkNBQ0lrRyxLQURKO0FBRUNqRyxZQUFJLEVBQUVmLE9BRlA7QUFHQzJMLHVCQUFlLEVBQUUsSUFIbEI7QUFJQ3hELGVBQU8sRUFBRW5JLE9BQU8sQ0FBQ2dRLElBQVIsS0FBaUIsQ0FBakIsR0FBcUIsS0FBckIsR0FBNkIsSUFKdkM7QUFLQ0YsZUFBTyxFQUFFO0FBTFY7O0FBT0QsU0FBS3RPLHVCQUFMO0FBQ0EsU0FBS0ssb0JBQUw7QUFDQzNELDJCQUFZQyxZQUFZLENBQUN3RyxPQUFiLENBQXFCLE9BQXJCLEVBQThCM0UsT0FBTyxDQUFDNUIsS0FBdEMsQ0FBWjtBQUNBRiwyQkFBWUMsWUFBWSxDQUFDd0csT0FBYixDQUFxQixRQUFyQixFQUErQjNFLE9BQU8sQ0FBQ1ksTUFBdkMsQ0FBWjtBQUNBbkMsYUFBTyxDQUFDQyxHQUFSLENBQVlzQixPQUFaO0FBRUEsMkRBQ0lnSCxLQURKLEdBRUloSCxPQUZKO0FBR0MyTCx1QkFBZSxFQUFFLElBSGxCO0FBSUNtRSxlQUFPLEVBQUU7QUFKVjs7QUFNRCxTQUFLck8sb0JBQUw7QUFDQyw2Q0FDSXVGLEtBREo7QUFFQzhJLGVBQU8sRUFBRTtBQUZWOztBQUlELFNBQUtoTyxpQkFBTDtBQUNBLFNBQUtiLGlCQUFMO0FBQ0MvQywyQkFBWUMsWUFBWSxDQUFDOFIsVUFBYixDQUF3QixPQUF4QixDQUFaO0FBQ0EvUiwyQkFBWUMsWUFBWSxDQUFDOFIsVUFBYixDQUF3QixRQUF4QixDQUFaO0FBQ0EsNkNBQ0lqSixLQURKO0FBRUM1SSxhQUFLLEVBQUUsSUFGUjtBQUdDdU4sdUJBQWUsRUFBRSxLQUhsQjtBQUlDbUUsZUFBTyxFQUFFLEtBSlY7QUFLQ2xQLGNBQU0sRUFBRTtBQUxUOztBQU9ELFNBQUttRCxhQUFMO0FBQ0MsNkNBQ0lpRCxLQURKO0FBRUM1SSxhQUFLLEVBQUUsSUFGUjtBQUdDdU4sdUJBQWUsRUFBRSxLQUhsQjtBQUlDbUUsZUFBTyxFQUFFO0FBSlY7O0FBTUQsU0FBS3ROLHVCQUFMO0FBQ0MsNkNBQ0l3RSxLQURKLEdBRUloSCxPQUZKOztBQUtELFNBQUssaUJBQUw7QUFDQyw2Q0FDSWdILEtBREo7QUFFQzhJLGVBQU8sRUFBRTtBQUZWOztBQUlEO0FBQ0MsYUFBTzlJLEtBQVA7QUF4REY7QUEwREEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZSw0QkFBZ0I7QUFDOUJDLE1BQUksRUFBSkEsYUFEOEI7QUFFOUJsRSxZQUFVLEVBQVZBLG1CQUY4QjtBQUc5Qm1OLE9BQUssRUFBTEEsY0FIOEI7QUFJOUI3SixTQUFPLEVBQVBBLGdCQUo4QjtBQUs5QmxDLElBQUUsRUFBRkEsV0FMOEI7QUFNOUJnQixPQUFLLEVBQUxBO0FBTjhCLENBQWhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZixNQUFNdUssWUFBWSxHQUFHO0FBQ3BCNUcsY0FBWSxFQUFFO0FBRE0sQ0FBckI7O0FBSWUsU0FBU3FILGlCQUFULENBQTJCbkosS0FBSyxHQUFHMEksWUFBbkMsRUFBaURFLE1BQWpELEVBQXlEO0FBQ3ZFLFFBQU07QUFBRWhRLFFBQUY7QUFBUUk7QUFBUixNQUFvQjRQLE1BQTFCOztBQUVBLFVBQVFoUSxJQUFSO0FBQ0MsU0FBSyxrQkFBTDtBQUNDLDZDQUNJb0gsS0FESjtBQUVDOEIsb0JBQVksRUFBRTlJO0FBRmY7O0FBSUQsU0FBSyxnQkFBTDtBQUNDLDZDQUNJZ0gsS0FESjtBQUVDakUsa0JBQVUsRUFBRS9DO0FBRmI7O0FBSUQsU0FBSyxrQkFBTDtBQUNDLDZDQUNJZ0gsS0FESjtBQUVDakUsa0JBQVUsRUFBRTtBQUZiOztBQUlELFNBQUssd0JBQUw7QUFDQywrQkFDSWlFLEtBREo7O0FBSUQsU0FBSyxzQkFBTDtBQUNDLCtCQUNJQSxLQURKOztBQUlEO0FBQ0MsYUFBT0EsS0FBUDtBQTNCRjtBQTZCQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDRCxNQUFNMEksWUFBWSxHQUFHO0FBQ3BCRyxRQUFNLEVBQUU7QUFEWSxDQUFyQjs7QUFJZSxTQUFTTyxZQUFULENBQXNCcEosS0FBSyxHQUFHMEksWUFBOUIsRUFBNENFLE1BQTVDLEVBQW9EO0FBQ2xFLFFBQU07QUFBRWhRLFFBQUY7QUFBUUk7QUFBUixNQUFvQjRQLE1BQTFCOztBQUVBLFVBQVFoUSxJQUFSO0FBQ0MsU0FBSyxZQUFMO0FBQ0MsNkNBQ0lvSCxLQURKO0FBRUM2SSxjQUFNLEVBQUU3UDtBQUZUOztBQUtELFNBQUssa0JBQUw7QUFDQywrQkFDSWdILEtBREo7O0FBSUQ7QUFDQyxhQUFPQSxLQUFQO0FBYkY7QUFlQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRDs7Ozs7Ozs7QUFDQSxNQUFNMEksWUFBWSxHQUFHO0FBQ3BCdEwsWUFBVSxFQUFFLEVBRFE7QUFFcEJNLGFBQVcsRUFDVnhHLHFCQUFZQyxZQUFZLENBQUMwQyxPQUFiLENBQXFCLE1BQXJCLENBQVosR0FDRzNDLHFCQUFZQyxZQUFZLENBQUMwQyxPQUFiLENBQXFCLE1BQXJCLENBRGYsR0FFRztBQUxnQixDQUFyQjs7QUFRZSxTQUFTd1AsU0FBVCxDQUFtQnJKLEtBQUssR0FBRzBJLFlBQTNCLEVBQXlDRSxNQUF6QyxFQUFpRDtBQUMvRCxRQUFNO0FBQUVoUSxRQUFGO0FBQVFJO0FBQVIsTUFBb0I0UCxNQUExQjs7QUFDQSxVQUFRaFEsSUFBUjtBQUNDLFNBQUssaUJBQUw7QUFDQyw2Q0FDSW9ILEtBREo7QUFFQzVDLGtCQUFVLEVBQUVwRTtBQUZiOztBQUlELFNBQUssa0JBQUw7QUFDQyw2Q0FDSWdILEtBREo7QUFFQ3RDLG1CQUFXLEVBQUUxRTtBQUZkOztBQUtEO0FBQ0MsYUFBT2dILEtBQVA7QUFiRjtBQWVBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJELE1BQU0wSSxZQUFZLEdBQUc7QUFDcEJsRSxlQUFhLEVBQUU7QUFESyxDQUFyQjs7QUFJZSxTQUFTOEUsWUFBVCxDQUFzQnRKLEtBQUssR0FBRzBJLFlBQTlCLEVBQTRDRSxNQUE1QyxFQUFvRDtBQUNsRSxRQUFNO0FBQUVoUSxRQUFGO0FBQVFJO0FBQVIsTUFBb0I0UCxNQUExQjs7QUFFQSxVQUFRaFEsSUFBUjtBQUNDLFNBQUssV0FBTDtBQUNDLDZDQUNJb0gsS0FESjtBQUVDNkksY0FBTSxFQUFFN1A7QUFGVDs7QUFLRCxTQUFLLFdBQUw7QUFDQyw2Q0FDSWdILEtBREo7QUFFQ3dFLHFCQUFhLEVBQUV4TCxPQUFPLENBQUNtRjtBQUZ4Qjs7QUFJRCxTQUFLLGNBQUw7QUFDQyw2Q0FDSTZCLEtBREo7QUFFQ3dFLHFCQUFhLEVBQUV4TDtBQUZoQjs7QUFJRCxTQUFLLGFBQUw7QUFDQyw2Q0FDSWdILEtBREo7QUFFQ3dFLHFCQUFhLEVBQUU7QUFGaEI7O0FBS0QsU0FBSyxpQkFBTDtBQUNDLCtCQUNJeEUsS0FESjs7QUFJRDtBQUNDLGFBQU9BLEtBQVA7QUE3QkY7QUErQkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Q7O0FBQ0E7Ozs7QUFFQSxNQUFNdUosV0FBVyxHQUFHLENBQUM7QUFBRXhRO0FBQUYsQ0FBRCxLQUFjO0FBQ2hDLHNCQUNFO0FBQU8sYUFBUyxFQUFDO0FBQWpCLGtCQUNFLDBEQUNFO0FBQUssT0FBRyxFQUFDLEVBQVQ7QUFBWSxPQUFHLEVBQUM7QUFBaEIsSUFERixlQUVFLHlDQUFLQSxJQUFJLENBQUNtRyxJQUFWLENBRkYsZUFHRSxrREFIRixDQURGLGVBTUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSx3Q0FBSW5HLElBQUksQ0FBQ3lRLEdBQVQsQ0FERixlQUVFO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0Usc0RBQ0U7QUFBRyxVQUFNLEVBQUMsU0FBVjtBQUFvQixRQUFJLEVBQUV6USxJQUFJLENBQUMwUTtBQUEvQixrQkFDRTtBQUNFLFNBQUssRUFBRTtBQUFFcEIsV0FBSyxFQUFFO0FBQVQsS0FEVDtBQUVFLE9BQUcsRUFBQyx5REFGTjtBQUdFLE9BQUcsRUFBQztBQUhOLElBREYsQ0FERixDQURGLGVBVUUsc0RBQ0U7QUFBRyxVQUFNLEVBQUMsU0FBVjtBQUFvQixRQUFJLEVBQUV0UCxJQUFJLENBQUMyUTtBQUEvQixrQkFDRTtBQUNFLFNBQUssRUFBRTtBQUFFckIsV0FBSyxFQUFFO0FBQVQsS0FEVDtBQUVFLE9BQUcsRUFBQyxtREFGTjtBQUdFLE9BQUcsRUFBQztBQUhOLElBREYsQ0FERixDQVZGLGVBbUJFLHNEQUNFO0FBQUcsVUFBTSxFQUFDLFNBQVY7QUFBb0IsUUFBSSxFQUFFdFAsSUFBSSxDQUFDNFE7QUFBL0Isa0JBQ0U7QUFDRSxTQUFLLEVBQUU7QUFBRXRCLFdBQUssRUFBRTtBQUFULEtBRFQ7QUFFRSxPQUFHLEVBQUMsaURBRk47QUFHRSxPQUFHLEVBQUM7QUFITixJQURGLENBREYsQ0FuQkYsZUE0QkUsc0RBQ0U7QUFBRyxVQUFNLEVBQUMsU0FBVjtBQUFvQixRQUFJLEVBQUV0UCxJQUFJLENBQUM2UTtBQUEvQixrQkFDRTtBQUNFLFNBQUssRUFBRTtBQUFFdkIsV0FBSyxFQUFFO0FBQVQsS0FEVDtBQUVFLE9BQUcsRUFBQyxnREFGTjtBQUdFLGFBQVMsRUFBQyxRQUhaO0FBSUUsT0FBRyxFQUFDO0FBSk4sSUFERixDQURGLENBNUJGLENBRkYsQ0FORixDQURGO0FBbURELENBcEREOztBQXNEQSxNQUFNd0IsT0FBTyxHQUFHLE1BQU07QUFDcEIsTUFBSSxPQUFPbkgsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0EsVUFBTSxDQUFDb0gsUUFBUCxHQUFrQixZQUFZO0FBQzVCQyxnQkFBVTtBQUNYLEtBRkQ7O0FBSUEsYUFBU0EsVUFBVCxHQUFzQjtBQUNwQixVQUFJckgsTUFBTSxDQUFDc0gsT0FBUCxHQUFpQixJQUFyQixFQUEyQjtBQUN6QnRLLGdCQUFRLENBQ0xjLGFBREgsQ0FDaUIsZUFEakIsRUFFR0MsU0FGSCxDQUVhQyxHQUZiLENBRWlCLG1CQUZqQjtBQUdEO0FBQ0Y7QUFDRjs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLHVEQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsZ0VBQ1EsZ0RBRFIsQ0FERixDQURGLGVBTUU7QUFBSyxhQUFTLEVBQUM7QUFBZixxYUFORixDQURGLGVBaUJFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsNkJBQUMsbUJBQUQscUJBQ0UsNkJBQUMsbUJBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBVCxrQkFDRSw2QkFBQyxXQUFEO0FBQ0UsUUFBSSxFQUFFO0FBQ0p4QixVQUFJLEVBQUUsT0FERjtBQUVKdUssa0JBQVksRUFBRSxzQ0FGVjtBQUdKQyxjQUFRLEVBQUUsd0NBSE47QUFJSkUsZUFBUyxFQUFFLG9DQUpQO0FBS0pELGdCQUFVLEVBQUUsOEJBTFI7QUFNSkgsU0FBRyxFQUNEO0FBUEU7QUFEUixJQURGLENBREYsZUFlRSw2QkFBQyxtQkFBRDtBQUFLLE1BQUUsRUFBRTtBQUFULGtCQUNFLDZCQUFDLFdBQUQ7QUFDRSxRQUFJLEVBQUU7QUFDSnRLLFVBQUksRUFBRSxRQURGO0FBRUp1SyxrQkFBWSxFQUFFLG9CQUZWO0FBR0pDLGNBQVEsRUFBRSx3Q0FITjtBQUlKRSxlQUFTLEVBQUUsa0NBSlA7QUFLSkQsZ0JBQVUsRUFBRSw4QkFMUjtBQU1KSCxTQUFHLEVBQ0Q7QUFQRTtBQURSLElBREYsQ0FmRixDQURGLENBakJGLENBREY7QUFtREQsQ0FsRUQ7O2VBb0VlSyxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SGY7Ozs7QUFFQSxNQUFNSSxTQUFTLEdBQUcsTUFBTTtBQUN0QixzQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0UsZ0VBQ1E7QUFBTSxhQUFTLEVBQUM7QUFBaEIsbUJBRFIsQ0FERixDQURGLGVBTUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLHdDQURGLGVBRUUsa0VBQ1U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsbUJBRFYsTUFGRix3TkFERixlQVdFLHdDQVhGLGVBWUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSw4REFDTTtBQUFNLGFBQVMsRUFBQztBQUFoQixtQkFETixNQURGLGdOQVpGLGVBcUJFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0Usd0NBREYsZUFFRSxrRUFDVTtBQUFNLGFBQVMsRUFBQztBQUFoQixtQkFEVixNQUZGLHdOQXJCRixlQStCRSx3Q0EvQkYsQ0FORixDQURGO0FBMENELENBM0NEOztlQTZDZUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NmOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBRWhKO0FBQUYsQ0FBRCxLQUFrQjtBQUUxQixzQkFDSTtBQUFTLGFBQVMsRUFBQztBQUFuQixLQUNLQSxRQUFRLElBQ0xBLFFBQVEsQ0FBQ3RKLEdBQVQsQ0FBY3lILE9BQUQsSUFBYTtBQUN0QixVQUFNOEssU0FBUyxHQUFHOUssT0FBTyxJQUFJQSxPQUFPLENBQUM4RCxHQUFyQztBQUNBLHdCQUNJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBK0IsU0FBRyxFQUFFZ0g7QUFBcEMsb0JBQ0ksNkJBQUMsdUJBQUQ7QUFBUyxRQUFFLEVBQUcsY0FBYTlLLE9BQU8sSUFBSUEsT0FBTyxDQUFDSCxJQUFSLENBQWFNLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEIsR0FBNUIsQ0FBaUM7QUFBdkUsb0JBQ0k7QUFDSSxTQUFHLEVBQUMsRUFEUjtBQUVJLFNBQUcsRUFBRUgsT0FBTyxDQUFDaUQsWUFBUixHQUF1QmpELE9BQU8sQ0FBQ2lELFlBQS9CLEdBQThDLGdFQUZ2RDtBQUdJLGVBQVMsRUFBQztBQUhkLE1BREosZUFNSTtBQUFHLGVBQVMsRUFBQztBQUFiLE9BQ0ssR0FETCxFQUVLakQsT0FBTyxJQUFJLHFCQUFPQSxPQUFPLENBQUMrSyxTQUFmLEVBQTBCQyxNQUExQixDQUFpQyxZQUFqQyxDQUZoQixDQU5KLGVBVUk7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUFtQ2hMLE9BQU8sSUFBSUEsT0FBTyxDQUFDSCxJQUF0RCxDQVZKLGVBV0k7QUFBRyxlQUFTLEVBQUM7QUFBYixPQUNLLEdBREwsa0JBWEosQ0FESixDQURKO0FBb0JILEdBdEJELENBRlIsQ0FESjtBQTRCSCxDQTlCRDs7ZUFnQ2VnTCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ2Y7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNSSxRQUFRLEdBQUcsQ0FBQztBQUFFcEo7QUFBRixDQUFELEtBQWtCO0FBQ2xDLHNCQUNDLDBDQUNFQSxRQUFRLElBQ1JBLFFBQVEsQ0FBQ3RKLEdBQVQsQ0FBY3lILE9BQUQsSUFBYTtBQUN6QixRQUFJQSxPQUFPLElBQUlBLE9BQU8sQ0FBQytDLFFBQVIsS0FBcUIsSUFBcEMsRUFBMEM7QUFDekMzSyxhQUFPLENBQUNDLEdBQVIsQ0FBWTJILE9BQVo7QUFDQSxZQUFNOEssU0FBUyxHQUFHOUssT0FBTyxJQUFJQSxPQUFPLENBQUM4RCxHQUFyQztBQUNBLDBCQUNDO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQStCLFdBQUcsRUFBRTlELE9BQU8sSUFBSUEsT0FBTyxDQUFDMUc7QUFBdkQsc0JBQ0MsNkJBQUMsdUJBQUQ7QUFDQyxVQUFFLEVBQUcsY0FDSjBHLE9BQU8sSUFBSUEsT0FBTyxDQUFDSCxJQUFSLENBQWFNLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEIsR0FBNUIsQ0FDWDtBQUhGLHNCQUlDLHVEQUNDO0FBQUcsaUJBQVMsRUFBQztBQUFiLFNBQ0VILE9BQU8sSUFDUCxxQkFBT0EsT0FBTyxDQUFDK0ssU0FBZixFQUEwQkMsTUFBMUIsQ0FBaUMsWUFBakMsQ0FGRixDQURELGVBS0M7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRWhMLE9BQU8sSUFBSUEsT0FBTyxDQUFDSCxJQURyQixDQUxELGVBUUMsd0NBUkQsZUFTQyx3Q0FURCxlQVVDO0FBQUcsaUJBQVMsRUFBQztBQUFiLHlCQVZELENBSkQsZUFnQkMsdURBQ0M7QUFDQyxXQUFHLEVBQ0ZHLE9BQU8sQ0FBQ2lELFlBQVIsR0FDR2pELE9BQU8sQ0FBQ2lELFlBRFgsR0FFRyxnRUFKTDtBQU1DLGlCQUFTLEVBQUMsaUJBTlg7QUFPQyxXQUFHLEVBQUM7QUFQTCxRQURELENBaEJELENBREQsQ0FERDtBQWdDQTs7QUFDRCxXQUFPLElBQVA7QUFDQSxHQXRDRCxDQUZGLENBREQ7QUE0Q0EsQ0E3Q0Q7O2VBK0NlZ0ksUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRmOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBRWxMO0FBQUYsQ0FBRCxLQUFpQjtBQUM1QjVILFNBQU8sQ0FBQ0MsR0FBUixDQUFZMkgsT0FBTyxJQUFJQSxPQUFPLENBQUNILElBQVIsQ0FBYU0sT0FBYixDQUFxQixLQUFyQixFQUE0QixHQUE1QixDQUF2QjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsVUFDS0gsT0FBTyxpQkFBSSw2QkFBQyx1QkFBRDtBQUFTLE1BQUUsRUFBRyxjQUFhQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0gsSUFBUixDQUFhTSxPQUFiLENBQXFCLEtBQXJCLEVBQTRCLEdBQTVCLENBQWlDO0FBQXZFLGtCQUNSO0FBQUssT0FBRyxFQUFDLEVBQVQ7QUFBWSxPQUFHLEVBQUVILE9BQU8sQ0FBQ2lELFlBQVIsR0FBdUJqRCxPQUFPLENBQUNpRCxZQUEvQixHQUE4QyxnRUFBL0Q7QUFDSSxhQUFTLEVBQUMsaUJBRGQ7QUFDZ0MsYUFBUyxFQUFDO0FBRDFDLElBRFEsZUFHUjtBQUFHLGFBQVMsRUFBQztBQUFiLFVBQXNDakQsT0FBTyxJQUFJLHFCQUFPQSxPQUFPLENBQUMrSyxTQUFmLEVBQTBCQyxNQUExQixDQUFpQyxZQUFqQyxDQUFqRCxDQUhRLGVBSVI7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUFtQ2hMLE9BQU8sQ0FBQ0gsSUFBM0MsQ0FKUSxlQUtSO0FBQUcsYUFBUyxFQUFDO0FBQWIscUJBTFEsQ0FEaEIsQ0FESjtBQVdILENBYkQ7O2VBZWVxTCxNOzs7Ozs7Ozs7OztBQ25CZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pQQTs7QUFDQTs7OztBQUVBLE1BQU1DLElBQUksR0FBRyxNQUFNO0FBQ2pCLHNCQUNFO0FBQVMsYUFB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LG9CQUNDLDZCQUFDLDRCQUFEO0FBQWMsY0FBUSxFQUFFb1csR0FBRyxDQUFDckosR0FBNUI7QUFBaUMsYUFBTyxFQUFFO0FBQTFDLE9BQ0UySixZQUFZLENBQUN0VyxlQUFELENBRGQsQ0FERCxDQURELENBREQ7O0FBU0EsVUFBTWlJLElBQUksR0FBRyw0QkFBZW9PLFdBQWYsQ0FBYjtBQUVBLFFBQUlFLFNBQVMsR0FBR2pCLEtBQUssQ0FDbkJ6TixPQURjLENBQ04sdUJBRE0sRUFDb0Isa0JBQWlCSSxJQUFLLFFBRDFDLEVBRWRKLE9BRmMsQ0FHZCxVQUhjLEVBSWIsMkJBQTBCLGtDQUFVakksS0FBSyxDQUFDMkYsUUFBTixFQUFWLENBQTRCLEVBSnpDLENBQWhCLENBWm9DLENBbUJwQztBQUNBOztBQUNBcEUsT0FBRyxDQUFDcVYsSUFBSixDQUFTRCxTQUFUO0FBQ0FwVixPQUFHLENBQUNzVixHQUFKO0FBQ0EsR0F2QkQ7QUF3QkEsQ0FwQ0Q7QUFzQ0FmLEdBQUcsQ0FBQ2dCLE1BQUosQ0FBV3ZCLElBQVgsRUFBaUIsTUFBTXJWLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLGdCQUFlb1YsSUFBSyxFQUFqQyxDQUF2QixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2l0Y2gsIFJlZGlyZWN0LCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gJy4vYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHsgc2V0QXV0aFRva2VuLCBpc0NsaWVudCB9IGZyb20gJy4vaGVscGVycy9zZXRBdXRoVG9rZW4nO1xyXG5cclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vUm91dGVzJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL2xheW91dC9OYXZiYXIvTmF2YmFyJztcclxuXHJcbmlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudG9rZW4pIHtcclxuXHRzZXRBdXRoVG9rZW4obG9jYWxTdG9yYWdlLnRva2VuKTtcclxufVxyXG5cclxuY29uc3QgQXBwID0gKHsgcm91dGUgfSkgPT4ge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzdG9yZS5kaXNwYXRjaChsb2FkVXNlcigpKTtcclxuXHR9LCBbXSk7XHJcblx0Y29uc29sZS5sb2coJ2FwcCwgY2hlY2tpbmcgd29ya2luZycpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cclxuXHRcdFx0PE5hdmJhciAvPlxyXG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxyXG5cdFx0XHRcdDxTd2l0Y2g+XHJcblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nLyc+XHJcblx0XHRcdFx0XHRcdDxSZWRpcmVjdCB0bz0nL2hvbWUnIC8+XHJcblx0XHRcdFx0XHQ8L1JvdXRlPlxyXG5cdFx0XHRcdFx0e1JvdXRlcy5tYXAoKHsgcGF0aCwgZXhhY3QsIGNvbXBvbmVudDogQywgcmVuZGVyIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHQ8Um91dGVcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17cGF0aH1cclxuXHRcdFx0XHRcdFx0XHRcdHBhdGg9e3BhdGh9XHJcblx0XHRcdFx0XHRcdFx0XHRleGFjdD17ZXhhY3R9XHJcblx0XHRcdFx0XHRcdFx0XHR7Li4uKEMgPyB7IGNvbXBvbmVudDogeyBDIH0gfSA6IHsgcmVuZGVyOiB7IHJlbmRlciB9IH0pfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvPjtcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvU3dpdGNoPlxyXG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cclxuXHRcdFx0PFRvYXN0Q29udGFpbmVyIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0JztcclxuaW1wb3J0IExlYXJuIGZyb20gJy4vY29tcG9uZW50cy9MZWFybic7XHJcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlJztcclxuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1ByZXZpZXcnO1xyXG5pbXBvcnQgQmxvZyBmcm9tICcuL2NvbXBvbmVudHMvQmxvZyc7XHJcbmltcG9ydCBBdXRoIGZyb20gJy4vY29tcG9uZW50cy9BdXRoJztcclxuaW1wb3J0IFVwc2VydENhcmQgZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydENhcmQnO1xyXG5pbXBvcnQgVXBzZXJ0VG9waWMgZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydFRvcGljJztcclxuaW1wb3J0IFVwc2VydEFydGljbGUgZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydEFydGljbGUnO1xyXG5pbXBvcnQgVXBzZXJ0VmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydFZpZGVvJztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG4vLyBpbXBvcnQgUHJpdmF0ZVJvdXRlIGZyb20gJy4vaGVscGVycy9Qcml2YXRlUm91dGUnO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG5cdHtcclxuXHRcdGNvbXBvbmVudDogQXBwLFxyXG5cdFx0cm91dGVzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiAnL2hvbWUnLFxyXG5cdFx0XHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogSG9tZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6ICcvYWJvdXQnLFxyXG5cdFx0XHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQWJvdXQsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiAnL2xlYXJuJyxcclxuXHRcdFx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdFx0XHRjb21wb25lbnQ6IExlYXJuLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogJy9ibG9nL3JlYWQvOm5hbWUnLFxyXG5cdFx0XHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQXJ0aWNsZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6ICcvbGVhcm4vOnNwZWNpYWxpdHlOYW1lJyxcclxuXHRcdFx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdFx0XHRjb21wb25lbnQ6IFByZXZpZXcsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiAnL2Jsb2cnLFxyXG5cdFx0XHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQmxvZyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6ICcvc2lnbnVwJyxcclxuXHRcdFx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdFx0XHRyZW5kZXI6IChwcm9wcykgPT4gPEF1dGggey4uLnByb3BzfSB0eXBlPXsnc2lnbnVwJ30gLz4sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiAnL3NpZ251cC86cmVmZXJDb2RlJyxcclxuXHRcdFx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdFx0XHRyZW5kZXI6IChwcm9wcykgPT4gPEF1dGggey4uLnByb3BzfSB0eXBlPXsnc2lnbnVwJ30gLz4sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiAnL2xvZ2luJyxcclxuXHRcdFx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdFx0XHRyZW5kZXI6IChwcm9wcykgPT4gPEF1dGggey4uLnByb3BzfSB0eXBlPXsnbG9naW4nfSAvPixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6ICcvQWRkQ2FyZCcsXHJcblx0XHRcdFx0ZXhhY3Q6IHRydWUsXHJcblx0XHRcdFx0cmVuZGVyOiAocHJvcHMpID0+IDxVcHNlcnRDYXJkIGVkaXQ9e2ZhbHNlfSB7Li4ucHJvcHN9IC8+LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogJy91cGRhdGVzcGVjaWFsaXR5LzpzcGVjaWFsaXR5TmFtZScsXHJcblx0XHRcdFx0ZXhhY3Q6IHRydWUsXHJcblx0XHRcdFx0cmVuZGVyOiAocHJvcHMpID0+IDxVcHNlcnRDYXJkIGVkaXQ9e3RydWV9IHsuLi5wcm9wc30gLz4sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiAnLzpzcGVjaWFsaXR5TmFtZS90b3BpYy9hZGQnLFxyXG5cdFx0XHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0XHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0VG9waWMgZWRpdD17ZmFsc2V9IHsuLi5wcm9wc30gLz4sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiAnLzpzcGVjaWFsaXR5TmFtZS90b3BpYy9lZGl0Lzp0b3BpY0lkJyxcclxuXHRcdFx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdFx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydFRvcGljIGVkaXQ9e3RydWV9IHsuLi5wcm9wc30gLz4sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiAnL2FydGljbGUvYWRkJyxcclxuXHRcdFx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdFx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydEFydGljbGUgZWRpdD17ZmFsc2V9IHsuLi5wcm9wc30gLz4sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiAnL2FydGljbGUvdXBkYXRlJyxcclxuXHRcdFx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdFx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydEFydGljbGUgZWRpdD17dHJ1ZX0gey4uLnByb3BzfSAvPixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6ICcvdmlkZW8vYWRkLzp0b3BpY0lkJyxcclxuXHRcdFx0XHRleGFjdDogdHJ1ZSxcclxuXHRcdFx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydFZpZGVvIGVkaXQ9e2ZhbHNlfSB7Li4ucHJvcHN9IC8+LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogJy92aWRlby91cGRhdGUvOnZpZGVvSWQnLFxyXG5cdFx0XHRcdGV4YWN0OiB0cnVlLFxyXG5cdFx0XHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0VmlkZW8gZWRpdD17dHJ1ZX0gey4uLnByb3BzfSAvPixcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XHJcbmV4cG9ydCBjb25zdCBjbGVhckFydGljbGUgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6ICdDTEVBUl9BUlRJQ0xFJyxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL2FydGljbGUvZ2V0LyR7aWR9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnR0VUX0FSVElDTEUnLFxyXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBlcnJvclRvYXN0KGVycm9yKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnR0VUX0FSVElDTEVfRVJST1InLFxyXG4gICAgICBwYXlsb2FkOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxBcnRpY2xlcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXJ0aWNsZS9hbGxgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpXHJcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnR0VUX0FMTF9BUlRJQ0xFUycsXHJcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGVycm9yVG9hc3QoZXJyb3IpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdHRVRfQUxMX0FSVElDTEVTX0VSUk9SJyxcclxuICAgICAgcGF5bG9hZDoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQXJ0aWNsZSA9IChkYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvYXJ0aWNsZS9hZGRgLCBkYXRhLCB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0FERF9BUlRJQ0xFJyxcclxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXHJcbiAgICAvLyBjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzMi5kYXRhKTtcclxuXHJcbiAgICAvLyBkaXNwYXRjaCh7XHJcbiAgICAvLyAgIHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuICAgIC8vICAgcGF5bG9hZDogcmVzMi5kYXRhLFxyXG4gICAgLy8gfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGVycm9yVG9hc3QoZXJyb3IpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdBRERfQVJUSUNMRV9FUlJPUicsXHJcbiAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRBcnRpY2xlID0gKGRhdGEsIGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvYXJ0aWNsZS91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0VESVRfQVJUSUNMRScsXHJcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG4gICAgY29uc29sZS5sb2cocmVzMi5kYXRhKTtcclxuXHJcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG4gICAgICBwYXlsb2FkOiByZXMyLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZXJyb3JUb2FzdChlcnJvcilcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0VESVRfQVJUSUNMRV9FUlJPUicsXHJcbiAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFydGljbGUgPSAoYXJ0aWNsZUlkLCB0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKFxyXG4gIGRpc3BhdGNoXHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcclxuICAgICAgYGFwaS9hcnRpY2xlL2RlbGV0ZS8ke2FydGljbGVJZH0vJHt0b3BpY0lkfWAsXHJcbiAgICAgIHt9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0RFTEVURV9BUlRJQ0xFJyxcclxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMyLmRhdGEpO1xyXG5cclxuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnR0VUX1RPUElDUycsXHJcbiAgICAgIHBheWxvYWQ6IHJlczIuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBlcnJvclRvYXN0KGVycm9yKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnREVMRVRFX0FSVElDTEVfRVJST1InLFxyXG4gICAgICBwYXlsb2FkOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHtcclxuXHRSRUdJU1RFUl9TVUNDRVNTLFxyXG5cdFJFR0lTVEVSX0ZBSUwsXHJcblx0TE9HSU5fU1VDQ0VTUyxcclxuXHRMT0dJTl9GQUlMLFxyXG5cdFVTRVJfTE9BREVELFxyXG5cdEFVVEhfRVJST1IsXHJcblx0U0VORF9SRVNFVF9FTUFJTCxcclxuXHRTRU5EX1JFU0VUX0VNQUlMX0ZBSUwsXHJcbn0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCwgc2V0QXV0aFRva2VuLCBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcclxuXHJcbi8vIExvYWQgVXNlciA6IEV2ZXJ5IHRpbWUgd2UgbG9nZ2VkIGluIG9yIHJlZ2lzdGVyIG9yIHJlZnJlc2ggdGhlIHBhZ2UgaXRzIGdvbm5hIGxvYWQuXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFVzZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRkaXNwYXRjaCh7XHJcblx0XHR0eXBlOiAnU0VUX0FVVEhfTE9BREVSJyxcclxuXHR9KTtcclxuXHRpZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnRva2VuKSB7XHJcblx0XHRzZXRBdXRoVG9rZW4obG9jYWxTdG9yYWdlLnRva2VuKTtcclxuXHR9XHJcblxyXG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudXNlcklkKSB7XHJcblx0XHRjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL2F1dGgvdXNlci8ke3VzZXJJZH1gKTtcclxuXHRcdFx0Ly8gZGlzcGxheVRvYXN0XHJcblx0XHRcdHN1Y2Nlc3NUb2FzdChyZXMpO1xyXG5cclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IFVTRVJfTE9BREVELFxyXG5cdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLnVzZXIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdC8vIGRpc3BsYXkgdG9hc3RcclxuXHRcdFx0ZXJyb3JUb2FzdChlcnIpO1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogQVVUSF9FUlJPUixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZnJlc2hVc2VyID0gKHVzZXIpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGRpc3BhdGNoKHtcclxuXHRcdHR5cGU6ICdTRVRfQVVUSF9MT0FERVInLFxyXG5cdH0pO1xyXG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudG9rZW4pIHtcclxuXHRcdHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2UudG9rZW4pO1xyXG5cdH1cclxuXHJcblx0aWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS51c2VySWQpIHtcclxuXHRcdGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHQvLyBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXV0aC91c2VyLyR7dXNlcklkfWApO1xyXG5cdFx0XHRhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXV0aC91c2VyLyR7dXNlcklkfWApO1xyXG5cclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IFVTRVJfTE9BREVELFxyXG5cdFx0XHRcdHBheWxvYWQ6IHVzZXIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBBVVRIX0VSUk9SLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSAoZGF0YSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0ZGlzcGF0Y2goe1xyXG5cdFx0dHlwZTogJ1NFVF9BVVRIX0xPQURFUicsXHJcblx0fSk7XHJcblx0Y29uc3QgaGVhZGVycyA9IHtcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0fTtcclxuXHJcblx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJ2FwaS9hdXRoL3NpZ251cCcsIGJvZHksIGhlYWRlcnMpO1xyXG5cclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogcmVzLnN0YXR1cyA9PT0gMSA/IFJFR0lTVEVSX1NVQ0NFU1MgOiBSRUdJU1RFUl9GQUlMLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRkaXNwYXRjaChsb2FkVXNlcigpKTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdC8vIGNvbnN0IGVycm9ycyA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9ycztcclxuXHRcdGVycm9yVG9hc3QoZXJyKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogUkVHSVNURVJfRkFJTCxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9XHJcblx0KHsgZW1haWwsIHBhc3N3b3JkIH0pID0+XHJcblx0YXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdTRVRfQVVUSF9MT0FERVInLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBoZWFkZXJzID0ge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJ2FwaS9hdXRoL2xvZ2luJywgYm9keSwgaGVhZGVycyk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IHJlcy5zdGF0dXMgPT09IDEgPyBMT0dJTl9TVUNDRVNTIDogTE9HSU5fRkFJTCxcclxuXHRcdFx0XHRwYXlsb2FkOiB7IHVzZXJJZDogcmVzLmRhdGE/LnVzZXI/LnVzZXJJZCwgdG9rZW46IHJlcy5kYXRhPy50b2tlbiB9LFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGRpc3BhdGNoKGxvYWRVc2VyKCkpO1xyXG5cdFx0XHRzdWNjZXNzVG9hc3QocmVzKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHRlcnJvclRvYXN0KGVycik7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBMT0dJTl9GQUlMLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG5cdGlmIChpc0NsaWVudCkgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0ZGlzcGF0Y2goe1xyXG5cdFx0dHlwZTogJ0xPR09VVCcsXHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZFJlc2V0RW1haWwgPVxyXG5cdCh7IGVtYWlsIH0pID0+XHJcblx0YXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IGVtYWlsIH0pO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCcvYXBpL2ZvcmdvdHBhc3N3b3JkJywgYm9keSwgY29uZmlnKTtcclxuXHJcblx0XHRcdGNvbnN0IG1lc3NhZ2VzQXJyYXkgPSByZXMuZGF0YS5tZXNzYWdlcztcclxuXHRcdFx0Ly8gYnJhbmQgYWRkZWQgbWVzc2FnZSBhbGVydFxyXG5cdFx0XHRtZXNzYWdlc0FycmF5LmZvckVhY2goKG1lc3NhZ2UpID0+IGRpc3BhdGNoKChtZXNzYWdlLm1zZywgJ2RhbmdlcicpKSk7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBTRU5EX1JFU0VUX0VNQUlMLFxyXG5cdFx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRjb25zdCBlcnJvcnMgPSBlcnIgJiYgZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xyXG5cdFx0XHRpZiAoZXJyb3JzKSB7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IFNFTkRfUkVTRVRfRU1BSUxfRkFJTCxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9hcnRpY2xlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hdXRoJztcclxuZXhwb3J0ICogZnJvbSAnLi9zcGVjaWFsaXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi90b3BpYyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3VpJztcclxuZXhwb3J0ICogZnJvbSAnLi92aWRlbyc7XHJcbiIsImltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNwZWNpYWxpdGllcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KCdhcGkvc3BlY2lhbGl0eS9hbGwnKTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJTcGVjaWFsaXR5ID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0ZGlzcGF0Y2goe1xyXG5cdFx0dHlwZTogJ0NMRUFSX1NQRUNJQUxJVFknLFxyXG5cdFx0cGF5bG9hZDoge30sXHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3BlY2lhbGl0eSA9IChzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9zcGVjaWFsaXR5L2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVFknLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YS5zcGVjaWFsaXR5LFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVFlfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTcGVjaWFsaXR5ID0gKGRhdGEpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCdhcGkvc3BlY2lhbGl0eS9hZGQnLCBkYXRhLCB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9TUEVDSUFMSVRJWScsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldCgnYXBpL3NwZWNpYWxpdHkvYWxsJyk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX1NQRUNJQUxJVFlfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0U3BlY2lhbGl0eSA9IChkYXRhLCBpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvc3BlY2lhbGl0eS91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9KTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0VESVRfU1BFQ0lBTElUSVknLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoJ2FwaS9zcGVjaWFsaXR5L2FsbCcpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0VESVRfU1BFQ0lBTElUWV9FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNwZWNpYWxpdHkgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcclxuXHRcdFx0YGFwaS9zcGVjaWFsaXR5L2RlbGV0ZS8ke2lkfWAsXHJcblx0XHRcdHt9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0RFTEVURV9TUEVDSUFMSVRJWScsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldCgnYXBpL3NwZWNpYWxpdHkvYWxsJyk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnREVMRVRFX1NQRUNJQUxJVFlfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NUb2FzdCA9IChyZXMpID0+IHtcclxuICAgIHJlcy5zdGF0dXMgPT0gMSA/IHRvYXN0LnN1Y2Nlc3MocmVzLm1lc3NhZ2UsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgIH0pIDogdG9hc3QuZXJyb3IocmVzLm1lc3NhZ2UsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JUb2FzdCA9IChlcnIpID0+IHtcclxuICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb3BpY3MgPSAoc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9waWMgPSAoZGF0YSwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKHNwZWNpYWxpdHlOYW1lKTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3RvcGljL2FkZGAsIGRhdGEsIHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9UT1BJQycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHQvLyByZWZyZXNoIHRvcGljc1xyXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9UT1BJQ19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRUb3BpYyA9IChkYXRhLCBpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3RvcGljL3VwZGF0ZS8ke2lkfWAsIGRhdGEsIHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnRURJVF9UT1BJQycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0VESVRfVE9QSUNfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bmxvY2tUb3BpYyA9ICh0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coc3BlY2lhbGl0eU5hbWUpO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcclxuXHRcdFx0YGFwaS90b3BpYy91bmxvY2svJHt0b3BpY0lkfWAsXHJcblx0XHRcdHt9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdVU0VSTE9BREVEJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEudXNlcixcclxuXHRcdH0pO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnVU5MT0NLX1RPUElDJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnVU5MT0NLX1RPUElDX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVG9waWMgPSAoaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRjb25zb2xlLmxvZyh7IGlkLCBzcGVjaWFsaXR5TmFtZSB9KTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXHJcblx0XHRcdGBhcGkvdG9waWMvZGVsZXRlLyR7aWR9YCxcclxuXHRcdFx0e30sXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0RFTEVURV9UT1BJQycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnREVMRVRFX1RPUElDX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBTRVRfQUxFUlQgPSAnU0VUX0FMRVJUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9BTEVSVCA9ICdSRU1PVkVfQUxFUlQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSAnTE9HSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMID0gJ0xPR0lOX0ZBSUwnO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVJfU1VDQ0VTUyA9ICdSRUdJU1RFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZBSUwgPSAnUkVHSVNURVJfRkFJTCc7XHJcbmV4cG9ydCBjb25zdCBTRU5EX1JFU0VUX0VNQUlMID0gJ1NFTkRfUkVTRVRfRU1BSUwnO1xyXG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9FTUFJTF9GQUlMID0gJ1NFTkRfUkVTRVRfRU1BSUxfRkFJTCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HT1VUID0gJ0xPR09VVCc7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9MT0FERUQgPSAnVVNFUkxPQURFRCc7XHJcbmV4cG9ydCBjb25zdCBBVVRIX0VSUk9SID0gJ0FVVEhfRVJST1InO1xyXG4iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE9wZW5Ub3BpY3MgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGlkKTtcclxuXHRjb25zdCBvcGVuVG9waWNzQXJyYXkgPSBzdG9yZS5nZXRTdGF0ZSgpLnVpLm9wZW5Ub3BpY3M7XHJcblx0aWYgKCFvcGVuVG9waWNzQXJyYXkuaW5jbHVkZXMoaWQpKSB7XHJcblx0XHRvcGVuVG9waWNzQXJyYXkucHVzaChpZCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdG9wZW5Ub3BpY3NBcnJheS5zcGxpY2Uob3BlblRvcGljc0FycmF5LmluZGV4T2YoaWQpLCAxKTtcclxuXHR9XHJcblxyXG5cdGRpc3BhdGNoKHtcclxuXHRcdHR5cGU6ICdTRVRfT1BFTl9UT1BJQ1MnLFxyXG5cdFx0cGF5bG9hZDogb3BlblRvcGljc0FycmF5LFxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldERpc3BsYXlNb2RlID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0Y29uc3QgZGlzcGxheU1vZGUgPVxyXG5cdFx0c3RvcmUuZ2V0U3RhdGUoKS51aS5kaXNwbGF5TW9kZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcclxuXHRpZiAoaXNDbGllbnQpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb2RlJywgZGlzcGxheU1vZGUpO1xyXG5cclxuXHRkaXNwYXRjaCh7XHJcblx0XHR0eXBlOiAnU0VUX0RJU1BMQVlfTU9ERScsXHJcblx0XHRwYXlsb2FkOiBkaXNwbGF5TW9kZSxcclxuXHR9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRWaWRlbyA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS92aWRlby9nZXQvJHtpZH1gKTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVklERU8nLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX1ZJREVPX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVmlkZW8gPSAoZGF0YSwgaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHJcblxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3ZpZGVvL2FkZC8ke2lkfWAsIGRhdGEsIHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9WSURFTycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgcmVzVG9waWMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXNUb3BpYyk7XHJcblxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlc1RvcGljLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdBRERfVklERU9fRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0VmlkZW8gPSAoZGF0YSwgaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS92aWRlby91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0VESVRfVklERU8nLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHJcblx0XHRjb25zdCByZXNUb3BpYyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhyZXNUb3BpYy5kYXRhKTtcclxuXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzVG9waWMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnRURJVF9WSURFT19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVZpZGVvID1cclxuXHQodmlkZW9JZCwgdG9waWNJZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXHJcblx0XHRcdFx0YGFwaS92aWRlby9kZWxldGUvJHt2aWRlb0lkfS8ke3RvcGljSWR9YCxcclxuXHRcdFx0XHR7fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogJ0RFTEVURV9WSURFTycsXHJcblx0XHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMyLmRhdGEpO1xyXG5cdFx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogJ0RFTEVURV9WSURFT19FUlJPUicsXHJcblx0XHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VmlkZW8gPSAodmlkZW8pID0+IChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdTRUxFQ1RfVklERU8nLFxyXG5cdFx0XHRwYXlsb2FkOiB2aWRlbyxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdTRUxFQ1RfVklERU9fRVJST1InLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgQWRkID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdHN0cm9rZVdpZHRoPSczLjUnXHJcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXHJcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XHJcblx0XHQ8bGluZSB4MT0nMTInIHkxPSc1JyB4Mj0nMTInIHkyPScxOSc+PC9saW5lPlxyXG5cdFx0PGxpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInPjwvbGluZT5cclxuXHQ8L3N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDaGV2cm9uc1VwID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdHN0cm9rZVdpZHRoPSczLjUnXHJcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXHJcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XHJcblx0XHQ8cGF0aCBkPSdNMTcgMTFsLTUtNS01IDVNMTcgMThsLTUtNS01IDUnIC8+XHJcblx0PC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hldnJvbnNMZWZ0ID0gKHsgc2l6ZSA9IDUxLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdHN0cm9rZVdpZHRoPScyLjUnXHJcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXHJcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XHJcblx0XHQ8cGF0aCBkPSdNMTEgMTdsLTUtNSA1LTVNMTggMTdsLTUtNSA1LTUnIC8+XHJcblx0PC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBDcm9zcyA9ICh7IHNpemUgPSAzMiwgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxyXG5cdDxzdmdcclxuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdHdpZHRoPXtzaXplfVxyXG5cdFx0aGVpZ2h0PXtzaXplfVxyXG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xyXG5cdFx0ZmlsbD0nbm9uZSdcclxuXHRcdHN0cm9rZT17Y29sb3J9XHJcblx0XHRzdHJva2VXaWR0aD0nMS41J1xyXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xyXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxyXG5cdFx0PGxpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCc+PC9saW5lPlxyXG5cdFx0PGxpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCc+PC9saW5lPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgRGVsZXRlID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB3aWR0aD17c2l6ZX1cclxuICAgIGhlaWdodD17c2l6ZX1cclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgc3Ryb2tlPXtjb2xvcn1cclxuICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICBzdHJva2VMaW5lY2FwPVwic3F1YXJlXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwiYXJjc1wiXHJcbiAgPlxyXG4gICAgPHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiPjwvcG9seWxpbmU+XHJcbiAgICA8cGF0aCBkPVwiTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXCI+PC9wYXRoPlxyXG4gICAgPGxpbmUgeDE9XCIxMFwiIHkxPVwiMTFcIiB4Mj1cIjEwXCIgeTI9XCIxN1wiPjwvbGluZT5cclxuICAgIDxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIj48L2xpbmU+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgTG9jayA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnI0RDMTQzQycsIGhhbmRsZXIgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8c3ZnXHJcblx0XHRcdG9uQ2xpY2s9e2hhbmRsZXJ9XHJcblx0XHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdFx0d2lkdGg9JzQzJ1xyXG5cdFx0XHRoZWlnaHQ9JzQzJ1xyXG5cdFx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRcdGZpbGw9J25vbmUnXHJcblx0XHRcdHN0cm9rZT17Y29sb3J9XHJcblx0XHRcdHN0cm9rZS13aWR0aD0nMidcclxuXHRcdFx0c3Ryb2tlLWxpbmVjYXA9J3JvdW5kJ1xyXG5cdFx0XHRzdHJva2UtbGluZWpvaW49J3JvdW5kJz5cclxuXHRcdFx0PHJlY3QgeD0nMycgeT0nMTEnIHdpZHRoPScxOCcgaGVpZ2h0PScxMScgcng9JzInIHJ5PScyJz48L3JlY3Q+XHJcblx0XHRcdDxwYXRoIGQ9J003IDExVjdhNSA1IDAgMCAxIDEwIDB2NCc+PC9wYXRoPlxyXG5cdFx0PC9zdmc+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVbmxvY2sgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMEZGMDAnIH0pID0+IChcclxuXHQ8c3ZnXHJcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHR3aWR0aD0nNDMnXHJcblx0XHRoZWlnaHQ9JzQzJ1xyXG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xyXG5cdFx0ZmlsbD0nbm9uZSdcclxuXHRcdHN0cm9rZT17Y29sb3J9XHJcblx0XHRzdHJva2Utd2lkdGg9JzInXHJcblx0XHRzdHJva2UtbGluZWNhcD0ncm91bmQnXHJcblx0XHRzdHJva2UtbGluZWpvaW49J3JvdW5kJz5cclxuXHRcdDxyZWN0IHg9JzMnIHk9JzExJyB3aWR0aD0nMTgnIGhlaWdodD0nMTEnIHJ4PScyJyByeT0nMic+PC9yZWN0PlxyXG5cdFx0PHBhdGggZD0nTTcgMTFWN2E1IDUgMCAwIDEgOS45LTEnPjwvcGF0aD5cclxuXHQ8L3N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBSZWFkID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnPlxyXG5cdFx0PHBhdGggZD0nTTEyIDQuNzA2Yy0yLjkzOC0xLjgzLTcuNDE2LTIuNTY2LTEyLTIuNzA2djE3LjcxNGMzLjkzNy4xMiA3Ljc5NS42ODEgMTAuNjY3IDEuOTk1Ljg0Ni4zODggMS44MTcuMzg4IDIuNjY3IDAgMi44NzItMS4zMTQgNi43MjktMS44NzUgMTAuNjY2LTEuOTk1di0xNy43MTRjLTQuNTg0LjE0LTkuMDYyLjg3Ni0xMiAyLjcwNnptLTEwIDEzLjEwNHYtMTMuNzA0YzUuMTU3LjM4OSA3LjUyNyAxLjQ2MyA5IDIuMzM0djEzLjE2OGMtMS41MjUtLjU0Ni00LjcxNi0xLjUwNC05LTEuNzk4em0yMCAwYy00LjI4My4yOTMtNy40NzUgMS4yNTItOSAxLjc5OXYtMTMuMTcxYzEuNDUzLS44NjEgMy44My0xLjk0MiA5LTIuMzMydjEzLjcwNHptLTItMTAuMjE0Yy0yLjA4Ni4zMTItNC40NTEgMS4wMjMtNiAxLjY3MnYtMS4wNjRjMS42NjgtLjYyMiAzLjg4MS0xLjMxNSA2LTEuNjI2djEuMDE4em0wIDMuMDU1Yy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0wLTIuMDMxYy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0wIDYuMDkzYy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0wLTIuMDMxYy0yLjExOS4zMTEtNC4zMzIgMS4wMDQtNiAxLjYyNnYxLjA2NGMxLjU0OS0uNjQ5IDMuOTE0LTEuMzYxIDYtMS42NzN2LTEuMDE3em0tMTYtNi4xMDRjMi4xMTkuMzExIDQuMzMyIDEuMDA0IDYgMS42MjZ2MS4wNjRjLTEuNTQ5LS42NDktMy45MTQtMS4zNjEtNi0xLjY3MnYtMS4wMTh6bTAgNS4wOWMyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTUtNi0xLjYyNnYxLjAxN3ptMC0yLjAzMWMyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTYtNi0xLjYyNnYxLjAxN3ptMCA2LjA5M2MyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTUtNi0xLjYyNnYxLjAxN3ptMC0yLjAzMWMyLjA4Ni4zMTIgNC40NTEgMS4wMjMgNiAxLjY3M3YtMS4wNjRjLTEuNjY4LS42MjItMy44ODEtMS4zMTUtNi0xLjYyNnYxLjAxN3onIC8+XHJcblx0PC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdHN0cm9rZVdpZHRoPScyJ1xyXG5cdFx0c3Ryb2tlTGluZWNhcD0nc3F1YXJlJ1xyXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxyXG5cdFx0PHBhdGggZD0nTTIwIDE0LjY2VjIwYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmg1LjM0Jz48L3BhdGg+XHJcblx0XHQ8cG9seWdvbiBwb2ludHM9JzE4IDIgMjIgNiAxMiAxNiA4IDE2IDggMTIgMTggMic+PC9wb2x5Z29uPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL0FkZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGVsZXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9VcGRhdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NoZXZyb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9SZWFkJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2NrJztcclxuZXhwb3J0ICogZnJvbSAnLi9Dcm9zcyc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuaW1wb3J0IHsgU2VvIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5pbXBvcnQgUXVlc3Rpb25zIGZyb20gJy4uL3NlY3Rpb25zL2Fib3V0L1F1ZXN0aW9ucyc7XHJcbmltcG9ydCBBYm91dFVzIGZyb20gJy4uL3NlY3Rpb25zL2Fib3V0L0Fib3V0VXMnO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9sYXlvdXQnO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICA+XHJcbiAgICAgIDxTZW8gdGl0bGU9XCJBYm91dFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFnZSBzY3JvbGxlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZyLXdhdmUgdG9wLXNsaWRlXCI+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5IZWxsbyB0aGVyZSw8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nLWFib3V0XCI+XHJcbiAgICAgICAgICAgIFdlIGNyZWF0ZWQgPHNwYW4gY2xhc3NOYW1lPVwibG9nbyB0ZXh0LWRhcmtcIj5Db2RlcnMgR2FsYTwvc3Bhbj4gdG9cclxuICAgICAgICAgICAgcHJvdmlkZSBZb3UgUXVhbGl0eSByZXNvdXJjZXMgdG8gbGVhcm4gRnJvbVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwic2Nyb2xsIGljb25cIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ2lmaW1hZ2UubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA1L3Njcm9sbC1naWYtMTAuZ2lmXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGwtaWNvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UXVlc3Rpb25zIC8+XHJcbiAgICAgICAgPEFib3V0VXMgLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIgZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInO1xyXG5cclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0JztcclxuXHJcbmltcG9ydCB7IGdldFNwZWNpYWxpdHkgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgc2VydmljZVBvc3QsIHNjcm9sbFRvIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IENoZXZyb25zVXAgfSBmcm9tICcuLi9hc3NldHMvaWNvbnMnO1xyXG5cclxuLy8gY29uc3QgU2hhcmVBcnRpY2xlID0gKHsgTmlkLCB1cmwgfSwgcHJvcHMpID0+IHtcclxuXHJcblxyXG4vLyBcdGZ1bmN0aW9uIGFjdGlvblRvZ2dsZSgpIHtcclxuLy8gXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdHJldHVybiAoXHJcbi8vIFx0XHQ8PlxyXG4vLyBcdFx0XHQ8ZGl2IGNsYXNzPSdhY3Rpb24nIG9uQ2xpY2s9e2FjdGlvblRvZ2dsZX0+XHJcbi8vIFx0XHRcdFx0PHNwYW4+XHJcbi8vIFx0XHRcdFx0XHQ8aW1nXHJcbi8vIFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMjVweCcgfX1cclxuLy8gXHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE5MTk5L3NoYXJlLnN2ZydcclxuLy8gXHRcdFx0XHRcdFx0YWx0PScnXHJcbi8vIFx0XHRcdFx0XHQvPlxyXG4vLyBcdFx0XHRcdDwvc3Bhbj5cclxuLy8gXHRcdFx0XHQ8dWw+XHJcbi8vIFx0XHRcdFx0XHQ8bGk+XHJcbi8vIFx0XHRcdFx0XHRcdDxhXHJcbi8vIFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3aGF0c2FwcC1pY29uJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuLy8gXHRcdFx0XHRcdFx0XHRocmVmPXtgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/dGV4dD1IZXkgbG9vayBpIGp1c3QgZm91bmQgb3V0IHRoaXMgQW1hemluZyBhcnRpY2xlIG9uIFwiJHtOaWR9XCIsQ2hlY2sgaXQgb3V0IDogJHt1cmx9YH1cclxuLy8gXHRcdFx0XHRcdFx0XHR0YXJnZXQ9J19ibGFuayc+XHJcbi8vIFx0XHRcdFx0XHRcdFx0U2hhcmUgb25cclxuLy8gXHRcdFx0XHRcdFx0XHQ8aW1nXHJcbi8vIFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzI1cHgnLCBtYXJnaW5MZWZ0OiAnMjBweCcgfX1cclxuLy8gXHRcdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMDMxNTAvd2hhdHNhcHAtc3ltYm9sLWxvZ28uc3ZnJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdFx0YWx0PXsnc2hhcmUgJyArIE5pZCArICcgb24gV2hhdHNhcHAnfVxyXG4vLyBcdFx0XHRcdFx0XHRcdC8+XHJcbi8vIFx0XHRcdFx0XHRcdDwvYT5cclxuLy8gXHRcdFx0XHRcdDwvbGk+XHJcblxyXG4vLyBcdFx0XHRcdFx0PGxpPlxyXG4vLyBcdFx0XHRcdFx0XHQ8YVxyXG4vLyBcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbWFpbC1pY29uJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdGhyZWY9e2BtYWlsdG86P1N1YmplY3Q9JHsnQXJ0aWNsZSBvbiAnICsgTmlkXHJcbi8vIFx0XHRcdFx0XHRcdFx0XHR9JkJvZHk9SGV5IGxvb2sgaSBqdXN0IGZvdW5kIG91dCB0aGlzIEFtYXppbmcgYXJ0aWNsZSBvbiBcIiR7TmlkfVwiLENoZWNrIGl0IG91dCA6ICR7dXJsfWB9XHJcbi8vIFx0XHRcdFx0XHRcdFx0dGFyZ2V0PSdfdG9wJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdHJlbD0nbm9mb2xsb3cnPlxyXG4vLyBcdFx0XHRcdFx0XHRcdFNoYXJlIG9uXHJcbi8vIFx0XHRcdFx0XHRcdFx0PGltZ1xyXG4vLyBcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyNXB4JywgbWFyZ2luTGVmdDogJzIwcHgnIH19XHJcbi8vIFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3NoYXJlLWltYWdlJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzMwMzE2MS9nbWFpbC1pY29uLWxvZ28uc3ZnJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdFx0YWx0PXsnc2hhcmUgJyArIE5pZCArICcgb24gR21haWwnfVxyXG4vLyBcdFx0XHRcdFx0XHRcdC8+XHJcbi8vIFx0XHRcdFx0XHRcdDwvYT5cclxuLy8gXHRcdFx0XHRcdDwvbGk+XHJcbi8vIFx0XHRcdFx0PC91bD5cclxuLy8gXHRcdFx0PC9kaXY+XHJcbi8vIFx0XHQ8Lz5cclxuLy8gXHQpO1xyXG4vLyB9O1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IHsgbmFtZSB9ID0gcHJvcHMubWF0Y2gucGFyYW1zO1xyXG5cdGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcblxyXG5cclxuXHJcblx0Y29uc3QgZ2V0QXJ0aWNsZSA9IGFzeW5jIChuYW1lKSA9PiB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcclxuXHRcdFx0YGFwaS9hcnRpY2xlL2dldGAsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0cmV0dXJuIHJlcy5kYXRhLmFydGljbGU7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0QXJ0aWNsZUVmZmVjdCA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0YXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcnRpY2xlID0gYXdhaXQgZ2V0QXJ0aWNsZShuYW1lLnJlcGxhY2UoLy0vZywgJyAnKSk7XHJcblx0XHRcdHNldEFydGljbGUoYXJ0aWNsZSk7XHJcblx0XHR9LFxyXG5cdFx0W25hbWVdLFxyXG5cdClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldEFydGljbGVFZmZlY3QoKVxyXG5cdH0sIFtnZXRBcnRpY2xlRWZmZWN0XSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGFydGljbGUpXHJcblx0Y29uc3QgZ29Ub1RvcCA9ICgpID0+IHtcclxuXHRcdHNjcm9sbFRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKSk7XHJcblx0fTtcclxuXHJcblxyXG5cdGNvbnN0IGh0bWwgPSBhcnRpY2xlICYmIGFydGljbGUuY29udGVudDtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RlZC1hcnRpY2xlJz5cclxuXHJcblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9J2Z1bGwtdmlldy1hcnRpY2xlIHAtMic+XHJcblx0XHRcdFx0XHQ8Q29sIHNtPXsyfT57LyogQWRkcyBIZXJlICovfTwvQ29sPlxyXG5cclxuXHRcdFx0XHRcdDxDb2wgaWQ9J3RvcCcgc3R5bGU9e3sgcGFkZGluZzogJzBweCcgfX0gc209ezh9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncWwtc25vdyc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Z1bGwtYXJ0aWNsZSBxbC1lZGl0b3InPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1JlYWN0SHRtbFBhcnNlcihodG1sKX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0b3AtaWNvbic+XHJcblx0XHRcdFx0XHRcdFx0PENoZXZyb25zVXAgc2l6ZT0nNTAnIGNvbG9yPScjZGMxNDNjJyBvbkNsaWNrPXtnb1RvVG9wfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cclxuXHRcdFx0XHRcdDxDb2wgc209ezJ9PnsvKiBBZGRzIEhlcmUgKi99PC9Db2w+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRhdXRoOiBzdGF0ZS5hdXRoXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0U3BlY2lhbGl0eSB9KShBcnRpY2xlKTtcclxuXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG4vLyBjb25zdCBBcnRpY2xlID0gKHByb3BzKSA9PiB7XHJcbi8vIFx0Y29uc3QgbmFtZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5uYW1lXHJcbi8vIFx0Y29uc29sZS5sb2cobmFtZS5yZXBsYWNlKC8tL2csICcgJykpXHJcbi8vIFx0cmV0dXJuIChcclxuLy8gXHRcdDxkaXY+XHJcbi8vIFx0XHRcdDxkaXY+XHJcbi8vIFx0XHRcdFx0bG9yZW0xMDBcclxuLy8gXHRcdFx0PC9kaXY+XHJcbi8vIFx0XHQ8L2Rpdj5cclxuLy8gXHQpO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBcnRpY2xlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXIsIGxvZ2luIH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuY29uc3QgQXV0aCA9ICh7IGxvZ2luLCByZWdpc3RlciwgdG9rZW4sIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgaWYgKHRva2VuKSByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL2xlYXJuXCIgLz47XHJcbiAgY29uc3QgZGluVGV4dCA9IFwiPENvZGVycyBHYWxhLz5cIjtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0eXBlID09PSBcInNpZ251cFwiKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbiBoMVwiKS5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlZFwiKTtcclxuXHJcbiAgICAgIHJlZ2lzdGVyKGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb24gaDFcIikuY2xhc3NMaXN0LmFkZChcImNoYW5nZWRcIik7XHJcbiAgICAgIGxvZ2luKGRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCI+XHJcbiAgICAgIDxTZW8gdGl0bGU9XCJMb2dJblwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJkaW5UYWdcIj57ZGluVGV4dH08L2g2PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJzaWdudXBcIiA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgxPlNpZ24gVXA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+SGV5LCBXZWxjb21lIHRvIENvZGVyc0dhbGEgISE8L3A+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5IZXkgdGhlcmUsIFdlbGNvbWUgQmFjayAhITwvcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGUgPT09IFwic2lnbnVwXCIgPyBcImZsZXhcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt0eXBlID09PSBcInNpZ251cFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2RlUmVmZXJyZWRcIj5SZWZlciBDb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29kZVJlZmVycmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQQjE4RkM2OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZVJlZmZlcmVkOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gXCJzaWdudXBcIiA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlbWVtYmVyTWVcIj5IYXZlIGFuIGFjY291bnQ/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtZW1iZXJNZVwiPkZvcmdvdCBQYXNzd29yZD88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvc2lnbnVwXCI+U2lnblVwPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWduaW5cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvZ2luLCByZWdpc3RlciB9KShBdXRoKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGdldEFsbEFydGljbGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9hcnRpY2xlJztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgRmVhdHVyZWQgZnJvbSAnLi4vc2VjdGlvbnMvYmxvZy9GZWF0dXJlZCc7XHJcbmltcG9ydCBMYXRlc3QgZnJvbSAnLi4vc2VjdGlvbnMvYmxvZy9MYXRlc3QnO1xyXG5pbXBvcnQgQWxsIGZyb20gJy4uL3NlY3Rpb25zL2Jsb2cvQWxsJztcclxuXHJcbmNvbnN0IEJsb2cgPSAoeyBnZXRBbGxBcnRpY2xlcywgYXJ0aWNsZXMsIGlzQWRtaW4gfSkgPT4ge1xyXG5cdHRoaXMubG9hZERhdGEgPSAoc3RvcmUpID0+IHtcclxuXHRcdHJldHVybiBzdG9yZS5kaXNwYXRjaChnZXRBbGxBcnRpY2xlcygpKTtcclxuXHR9O1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoYXJ0aWNsZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdGdldEFsbEFydGljbGVzKCk7XHJcblx0XHR9XHJcblx0fSwgW2dldEFsbEFydGljbGVzXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jb250YWluZXInPlxyXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT0nbmF2X190b3AnPlxyXG5cdFx0XHRcdDxhIHJlbD0nbm9mb2xsb3cnIGhyZWY9JyMnIGNsYXNzTmFtZT0nbmF2X190b3BfX2xpbmsnPjwvYT5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHRcdHtpc0FkbWluICYmIChcclxuXHRcdFx0XHQ8TmF2TGluayB0bz0nL2FydGljbGUvYWRkJyByZWw9J25vZm9sbG93Jz5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT0nbGcnIGJsb2NrPlxyXG5cdFx0XHRcdFx0XHRBZGQgQXJ0aWNsZVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxyXG5cdFx0XHRcdDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiAnRG9zaXMnIH19IGNsYXNzTmFtZT0ndGl0bGVfX2gxJz5cclxuXHRcdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0XHRDb2RlcnNHYWxhIDxzcGFuPkJsb2c8L3NwYW4+XHJcblx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RpdGxlX19zdWInPlNvcnJ5IDooPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPSdncmlkJz5cclxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2dyaWRfX2NvbC0yJz5cclxuXHRcdFx0XHRcdDxMYXRlc3QgYXJ0aWNsZT17YXJ0aWNsZXMgJiYgYXJ0aWNsZXNbMF19IC8+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdncmlkX19jb2xfX3RpdGxlJz5GZWF0dXJlZCBBcnRpY2xlczwvaDM+XHJcblx0XHRcdFx0XHRcdDxGZWF0dXJlZCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XHJcblx0XHRcdFx0XHRcdHsvKiA8TmV3c2xldHRlckZvcm0gLz4gKi99XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZ3JpZF9fY29sX190aXRsZSc+QWxzbyBSZWFkLi4uPC9oMz5cclxuXHRcdFx0XHQ8QWxsIGFydGljbGVzPXthcnRpY2xlc30gLz5cclxuXHRcdFx0PC9hcnRpY2xlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRhcnRpY2xlczogc3RhdGUuYXJ0aWNsZS5hcnRpY2xlcyxcclxuXHRpc0FkbWluOiBzdGF0ZS5hdXRoLmlzQWRtaW4sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0QWxsQXJ0aWNsZXMgfSkoQmxvZyk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vc2VjdGlvbnMvaG9tZS9IZXJvJztcclxuaW1wb3J0IEhlcm9DYXJkcyBmcm9tICcuLi9zZWN0aW9ucy9ob21lL0hlcm9DYXJkcyc7XHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi4vbGF5b3V0L3ByZWxvYWRlcic7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cdHZhciBob21lQ29udGVudCA9ICdhZHNmJztcclxuXHRyZXR1cm4gKFxyXG5cdFx0PG1vdGlvbi5kaXZcclxuXHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcblx0XHRcdGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG5cdFx0XHRleGl0PXt7IG9wYWNpdHk6IDAgfX0+XHJcblx0XHRcdDxTZW8gdGl0bGU9J0hvbWUnIG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX0gLz5cclxuXHRcdFx0PGRpdiBpZD0nbXlEaXYnPlxyXG5cdFx0XHRcdHtob21lQ29udGVudCA/IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHRcdDxIZXJvIC8+XHJcblx0XHRcdFx0XHRcdDxIZXJvQ2FyZHMgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8UHJlbG9hZGVyIC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L21vdGlvbi5kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0Lyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL3NlY3Rpb25zL2xlYXJuL0NhcmQnO1xyXG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XHJcblxyXG5jb25zdCBMZWFybiA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PG1vdGlvbi5kaXZcclxuXHRcdFx0ZXhpdD17eyBvcGFjaXR5OiAwIH19XHJcblx0XHRcdGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG5cdFx0XHRpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0+XHJcblx0XHRcdDxTZW8gdGl0bGU9J0xlYXJuJyBtZXRhPXtbeyBuYW1lOiAncm9ib3RzJywgY29udGVudDogJ2luZGV4IGZvbGxvdycgfV19IC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbGVhcm4tY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8QWRtaW5CdXR0b25zIHR5cGU9J0FkZCcgdXJsPScvYWRkY2FyZCcgZGF0YT17eyBuYW1lOiAnQ291cnNlcycgfX0gLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcblx0XHRcdFx0XHQ8Q2FyZCAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0PC9tb3Rpb24uZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFybjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbiwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgU2VvIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IENoZXZyb25zVXAsIENyb3NzIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zJztcclxuaW1wb3J0IHsgZ2V0U3BlY2lhbGl0eSwgY2xlYXJBcnRpY2xlLCBzZWxlY3RWaWRlbyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IFZpZGVvUHJldmlldyBmcm9tICcuLi9zZWN0aW9ucy9wcmV2aWV3L1ZpZGVvUHJldmlldyc7XHJcbmltcG9ydCBUb3BpY3NPdmVydmlldyBmcm9tICcuLi9zZWN0aW9ucy9wcmV2aWV3L1RvcGljc092ZXJ2aWV3JztcclxuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xyXG5cclxuY29uc3QgUHJldmlldyA9ICh7XHJcblx0bWF0Y2gsXHJcblx0c2VsZWN0VmlkZW8sXHJcblx0Y2xlYXJBcnRpY2xlLFxyXG5cdGdldFNwZWNpYWxpdHksXHJcblx0c3BlY2lhbGl0eSxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFtjbG9zZSwgc2V0Q2xvc2VdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3QgeyBzcGVjaWFsaXR5TmFtZSB9ID0gbWF0Y2gucGFyYW1zXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjbGVhckFydGljbGUoKTtcclxuXHRcdGdldFNwZWNpYWxpdHkoc3BlY2lhbGl0eU5hbWUpO1xyXG5cdH0sIFtjbGVhckFydGljbGUsIGdldFNwZWNpYWxpdHksIHNwZWNpYWxpdHlOYW1lXSk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNlbGVjdFZpZGVvKHNwZWNpYWxpdHkpO1xyXG5cdH0sIFtzcGVjaWFsaXR5LCBzZWxlY3RWaWRlb10pO1xyXG5cclxuXHRyZXR1cm4gc3BlY2lhbGl0eSA/IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSd0b3BpY3Mtb3ZyLWNvbnQnPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdvdmVybGF5J1xyXG5cdFx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6IGNsb3NlID8gJ25vbmUnIDogJ2Jsb2NrJyB9fVxyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldENsb3NlKCFjbG9zZSl9PjwvZGl2PlxyXG5cdFx0XHQ8U2VvXHJcblx0XHRcdFx0dGl0bGU9J1NlbGVjdCBBcnRpY2xlJ1xyXG5cdFx0XHRcdG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NwZWNpYWxpdHktY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3BlY2lhbGl0eS1oZWFkaW5nJz5cclxuXHRcdFx0XHRcdDxoMj57c3BlY2lhbGl0eS5uYW1lfTwvaDI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdDxDb2xcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0b3BpYy1vdnItY29udGFpbmVyJ1xyXG5cdFx0XHRcdFx0XHRsZz17NH1cclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiBjbG9zZSA/ICcyNXZoJyA6ICc1MHZoJyB9fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RvcGljcy1vdmVydmlldyc+XHJcblx0XHRcdFx0XHRcdFx0PGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScgfX0gY2xhc3NOYW1lPSdvdmVydmlldyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Ub3BpY3MgT3ZlcnZpZXcgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdBZGQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybD17YC8ke3NwZWNpYWxpdHkubmFtZX0vdG9waWMvYWRkL2B9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e3sgbmFtZTogJ1RvcGljcycgfX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xvc2UtdG9nZ2xlJz5cclxuXHRcdFx0XHRcdFx0XHRcdHtjbG9zZSA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gb25DbGljaz17KCkgPT4gc2V0Q2xvc2UoIWNsb3NlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENoZXZyb25zVXAgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gb25DbGljaz17KCkgPT4gc2V0Q2xvc2UoIWNsb3NlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENyb3NzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8QWNjb3JkaW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxUb3BpY3NPdmVydmlldyBzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eS5uYW1lfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L0FjY29yZGlvbj5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbCBsPXs4fT5cclxuXHRcdFx0XHRcdFx0PFZpZGVvUHJldmlldyBzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eS5uYW1lfSAvPlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpIDogbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRzcGVjaWFsaXR5OiBzdGF0ZS5zcGVjaWFsaXR5LnNwZWNpYWxpdHksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuXHRnZXRTcGVjaWFsaXR5LFxyXG5cdGNsZWFyQXJ0aWNsZSxcclxuXHRzZWxlY3RWaWRlbyxcclxufSkoUHJldmlldyk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vc2VjdGlvbnMvZWRpdG9yJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XHJcblxyXG5pbXBvcnQgeyBhZGRBcnRpY2xlLCBlZGl0QXJ0aWNsZSwgZ2V0QXJ0aWNsZSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBDaGV2cm9uc1VwIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zJztcclxuXHJcbmNvbnN0IFVwc2VydEFydGljbGUgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCB7IGFkZEFydGljbGUsIHNwZWNpYWxpdGllcywgZWRpdEFydGljbGUsIGdldEFydGljbGUsIHByZXZBcnRpY2xlIH0gPVxyXG5cdFx0cHJvcHM7XHJcblx0Y29uc3QgW2NvbnRlbnQsIHNldGNvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtuYW1lLCBzZXRuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBba2V5d29yZHMsIHNldEFydGljbGVLZXl3b3Jkc10gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2ZlYXR1cmVkLCBzZXRmZWF0dXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3RodW1ibmFpbFVybCwgc2V0dGh1bWJuYWlsVXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHQvLyBjb25zdCBbTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Ly8gY29uc3QgdG9waWNJZCA9IFwiRVJST1JfTkFfRElZT1wiO1xyXG5cdGZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQpIHtcclxuXHRcdGlzQ2xpZW50ICYmXHJcblx0XHRcdHdpbmRvdy5zY3JvbGwoe1xyXG5cdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcclxuXHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRjb25zdCBnb1RvVG9wID0gKCkgPT4ge1xyXG5cdFx0c2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zb2xlLmxvZyhwcm9wcy5tYXRjaC5wYXJhbXMuYXJ0aWNsZUlkKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChwcm9wcy5lZGl0KSB7XHJcblx0XHRcdGdldEFydGljbGUocHJvcHMubWF0Y2gucGFyYW1zLmFydGljbGVJZCk7XHJcblx0XHR9XHJcblx0fSwgW3Byb3BzLCBnZXRBcnRpY2xlXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUVkaXRvciA9IChodG1sKSA9PiB7XHJcblx0XHRzZXRjb250ZW50KGh0bWwpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSBhc3luYyAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc29sZS5sb2cobmFtZSk7XHJcblx0XHRjb25zb2xlLmxvZyhrZXl3b3Jkcyk7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHRuYW1lOiBuYW1lID09PSAnJyA/IHByZXZBcnRpY2xlLm5hbWUgOiBuYW1lLFxyXG5cdFx0XHRrZXl3b3Jkczoga2V5d29yZHMgPT09ICcnID8gcHJldkFydGljbGUua2V5d29yZHMgOiBrZXl3b3JkcyxcclxuXHRcdFx0Y29udGVudDogY29udGVudCA9PT0gJycgPyBwcmV2QXJ0aWNsZS5jb250ZW50IDogY29udGVudCxcclxuXHRcdH07XHJcblx0XHRlZGl0QXJ0aWNsZShkYXRhLCBwcmV2QXJ0aWNsZS5faWQsIHNwZWNpYWxpdGllcy5zcGVjaWFsaXR5Lk5hbWUpO1xyXG5cdFx0dG9hc3QoJ0FydGljbGUgdXBkYXRlZCBzdWNjZXNzZnVsbHknKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVBZGQgPSBhc3luYyAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coeyBjb250ZW50LCBuYW1lLCBrZXl3b3JkcyB9KTtcclxuXHRcdGFkZEFydGljbGUoeyBjb250ZW50LCBuYW1lLCBrZXl3b3JkcywgZmVhdHVyZWQsIHRodW1ibmFpbFVybCB9KTtcclxuXHRcdHRvYXN0KCdBcnRpY2xlIGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Um93IGNsYXNzTmFtZT0nZnVsbC12aWV3LWFydGljbGUgcC0yJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NoYXJlLWljb25zJz48L2Rpdj5cclxuXHJcblx0XHRcdDxDb2wgc209ezF9PjwvQ29sPlxyXG5cclxuXHRcdFx0PENvbCBpZD0ndG9wJyBzbT17MTB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9JycgaWQ9Jyc+XHJcblx0XHRcdFx0XHRcdFx0e3Byb3BzLmVkaXRcclxuXHRcdFx0XHRcdFx0XHRcdD8gYFVwZGF0ZSBBcnRpY2xlIC0gJHtwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5uYW1lfWBcclxuXHRcdFx0XHRcdFx0XHRcdDogJ0FkZCBhIEFydGljbGUnfVxyXG5cdFx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG5cdFx0XHRcdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J25hbWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdBcnRpY2xlIE5hbWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5uYW1lIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0ndGh1bWJuYWlsVXJsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQXJ0aWNsZSBUaHVtYm5haWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS50aHVtYm5haWxVcmwgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldHRodW1ibmFpbFVybChlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdrZXl3b3JkcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0FydGljbGUgRGVzY3JpcHRpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5rZXl3b3JkcyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXJ0aWNsZUtleXdvcmRzKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdmZWF0dXJlZCc+SXNGZWF0dXJlZCAmbmJzcDsgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5mZWF0dXJlZCA6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRmZWF0dXJlZCghZmVhdHVyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjaGVja2JveCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2ZlYXR1cmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cHJvcHMuZWRpdCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5jb250ZW50ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEVkaXRvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0b3I9e2hhbmRsZUVkaXRvcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5jb250ZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxFZGl0b3IgaGFuZGxlRWRpdG9yPXtoYW5kbGVFZGl0b3J9IGRlZmF1bHRWYWx1ZT0nJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FkZC1hcnRpY2xlLWJ1dHRvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0J1dHRvbj17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IGhhbmRsZUVkaXQoZSkgOiBoYW5kbGVBZGQoZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Byb3BzLmVkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9wLWljb24nPlxyXG5cdFx0XHRcdFx0PENoZXZyb25zVXAgc2l6ZT0nNTAnIGNvbG9yPScjZGMxNDNjJyBvbkNsaWNrPXtnb1RvVG9wfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0NvbD5cclxuXHJcblx0XHRcdDxDb2wgc209ezF9PjwvQ29sPlxyXG5cdFx0PC9Sb3c+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRzcGVjaWFsaXRpZXM6IHN0YXRlLnNwZWNpYWxpdHksXHJcblx0cHJldkFydGljbGU6IHN0YXRlLmFydGljbGUuc2VsZWN0ZWRBcnRpY2xlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcblx0YWRkQXJ0aWNsZSxcclxuXHRlZGl0QXJ0aWNsZSxcclxuXHRnZXRBcnRpY2xlLFxyXG59KShVcHNlcnRBcnRpY2xlKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XHJcbmltcG9ydCB7IHNlcnZpY2VHZXQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgYWRkU3BlY2lhbGl0eSwgZWRpdFNwZWNpYWxpdHkgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9zZWN0aW9ucy9lZGl0b3InO1xyXG5cclxuY29uc3QgVXBzZXJ0Q2FyZCA9ICh7IGFkZFNwZWNpYWxpdHksIGVkaXRTcGVjaWFsaXR5LCBlZGl0LCBtYXRjaCB9KSA9PiB7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRpZiAoZWRpdCkge1xyXG5cdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoXHJcblx0XHRcdFx0XHRgYXBpL3NwZWNpYWxpdHkvZ2V0LyR7bWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lfWBcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0Y29uc3QgeyBuYW1lLCBpbWFnZVVybCwgY29udGVudCwgX2lkIH0gPSByZXMuZGF0YS5zcGVjaWFsaXR5O1xyXG5cdFx0XHRcdHNldERhdGEoeyBuYW1lLCBpbWFnZVVybCwgY29udGVudCwgX2lkIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0ZmV0Y2hEYXRhKCk7XHJcblx0fSwgW2VkaXQsIG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZV0pO1xyXG5cdGNvbnNvbGUubG9nKGVkaXQsIGRhdGEpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0c2V0U3RhdGUoe1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0W2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVFZGl0b3IgPSAoaHRtbCkgPT4ge1xyXG5cdFx0c2V0U3RhdGUoe1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0Y29udGVudDogaHRtbCxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAoZWRpdCkgZWRpdFNwZWNpYWxpdHkoc3RhdGUsIGRhdGEuX2lkKTtcclxuXHRcdGVsc2UgYWRkU3BlY2lhbGl0eShzdGF0ZSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbXQtNCc+XHJcblx0XHRcdDxmb3JtIGNsYXNzTmFtZT0nbXQtNSc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdGlkPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nU3BlY2lhbGl0eSBOYW1lJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtlZGl0ID8gZGF0YSAmJiBkYXRhLm5hbWUgOiAnJ31cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRpZD0naW1hZ2VVcmwnXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdJbWFnZSBVUkwnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2VkaXQgPyBkYXRhICYmIGRhdGEuaW1hZ2VVcmwgOiAnJ31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdHshZWRpdCAmJiAoXHJcblx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdhbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0ltYWdlIGFsdCB0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdxbC1zbm93Jz5cclxuXHRcdFx0XHRcdFx0e2VkaXQgPyAoXHJcblx0XHRcdFx0XHRcdFx0ZGF0YSAmJiBkYXRhLmNvbnRlbnQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8RWRpdG9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZGF0YSAmJiBkYXRhLmNvbnRlbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncWwtZWRpdG9yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0b3I9e2hhbmRsZUVkaXRvcn1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0KSA6IG51bGxcclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8RWRpdG9yXHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3FsLWVkaXRvcidcclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXRvcj17aGFuZGxlRWRpdG9yfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWRkLWFydGljbGUtYnV0dG9uJz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBoYW5kbGVyPXtoYW5kbGVTdWJtaXR9IGlzQnV0dG9uPXt0cnVlfSB0eXBlPSdzdWJtaXQnPlxyXG5cdFx0XHRcdFx0XHRcdHtlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ31cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBhZGRTcGVjaWFsaXR5LCBlZGl0U3BlY2lhbGl0eSB9KShVcHNlcnRDYXJkKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTG9ja0J1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGFkZFRvcGljLCBlZGl0VG9waWMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5jb25zdCBVcHNlcnRUb3BpYyA9ICh7XHJcblx0c3BlY2lhbGl0eSxcclxuXHRtYXRjaCxcclxuXHRhZGRUb3BpYyxcclxuXHRlZGl0VG9waWMsXHJcblx0bG9jYXRpb24sXHJcblx0ZWRpdCxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHsgbG9ja2VkOiBmYWxzZSB9KTtcclxuXHRjb25zb2xlLmxvZyhsb2NhdGlvbik7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldERhdGEoe1xyXG5cdFx0XHRsb2NrZWQ6IGxvY2F0aW9uLnByb3BzICYmIGxvY2F0aW9uLnByb3BzLmlzTG9ja2VkLFxyXG5cdFx0XHRuYW1lOiBsb2NhdGlvbi5wcm9wcyAmJiBsb2NhdGlvbi5wcm9wcy5uYW1lLFxyXG5cdFx0fSk7XHJcblx0fSwgW2xvY2F0aW9uLnByb3BzXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAoIWVkaXQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0eyAuLi5kYXRhLCBzcGVjaWFsaXR5SWQ6IHNwZWNpYWxpdHkuX2lkIH0sXHJcblx0XHRcdFx0bWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lXHJcblx0XHRcdCk7XHJcblx0XHRcdGFkZFRvcGljKFxyXG5cdFx0XHRcdHsgLi4uZGF0YSwgc3BlY2lhbGl0eUlkOiBzcGVjaWFsaXR5Ll9pZCB9LFxyXG5cdFx0XHRcdG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0b2FzdCgnVG9waWMgQWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlZGl0VG9waWMoZGF0YSwgbWF0Y2gucGFyYW1zLnRvcGljSWQsIG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZSk7XHJcblx0XHRcdHRvYXN0KCdVcGRhdGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Vwc2VydC10b3BpYy1mb3JtJz5cclxuXHRcdFx0XHQ8aDM+e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfSBUb3BpYzwvaDM+XHJcblx0XHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0taW5wdXQnPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2xvY2F0aW9uLnByb3BzICYmIGxvY2F0aW9uLnByb3BzLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXREYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KSk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1idXR0b24nPlxyXG5cdFx0XHRcdFx0XHQ8TG9ja0J1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGlzTG9ja2VkPXtkYXRhLmxvY2tlZH1cclxuXHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXREYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2NrZWQ6ICFwcmV2LmxvY2tlZCB9KSk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBpc0J1dHRvbj17dHJ1ZX0gaGFuZGxlcj17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0c3BlY2lhbGl0eTogc3RhdGUuc3BlY2lhbGl0eS5zcGVjaWFsaXR5LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGFkZFRvcGljLCBlZGl0VG9waWMgfSkoVXBzZXJ0VG9waWMpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XHJcbmltcG9ydCB7IGFkZFZpZGVvLCBlZGl0VmlkZW8sIGdldFZpZGVvIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBVcHNlcnRWaWRlbyA9ICh7XHJcblx0ZWRpdCxcclxuXHRtYXRjaCxcclxuXHRhZGRWaWRlbyxcclxuXHRlZGl0VmlkZW8sXHJcblx0Z2V0VmlkZW8sXHJcblx0c3BlY2lhbGl0aWVzLFxyXG5cdHByZXZWaWRlbyxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKHByZXZWaWRlbyA/IHByZXZWaWRlby5uYW1lIDogJycpO1xyXG5cdGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXHJcblx0XHRwcmV2VmlkZW8gPyBwcmV2VmlkZW8uZGVzY3JpcHRpb24gOiAnJ1xyXG5cdCk7XHJcblx0Y29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKHByZXZWaWRlbyA/IHByZXZWaWRlby51cmwgOiAnJyk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUFkZCA9IGFzeW5jIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRhd2FpdCBhZGRWaWRlbyhcclxuXHRcdFx0eyBuYW1lLCBkZXNjcmlwdGlvbiwgdXJsIH0sXHJcblx0XHRcdG1hdGNoLnBhcmFtcy50b3BpY0lkLFxyXG5cdFx0XHRzcGVjaWFsaXRpZXMuc3BlY2lhbGl0eS5uYW1lXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSBhc3luYyAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0YXdhaXQgZWRpdFZpZGVvKFxyXG5cdFx0XHR7IG5hbWUsIGRlc2NyaXB0aW9uLCB1cmwgfSxcclxuXHRcdFx0cHJldlZpZGVvLl9pZCxcclxuXHRcdFx0c3BlY2lhbGl0aWVzLnNwZWNpYWxpdHkubmFtZVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3Vwc2VydC1jb250YWluZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBzZXJ0LXZpZGVvLWZvcm0nPlxyXG5cdFx0XHRcdDxoMz57ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCAnfVZpZGVvPC9oMz5cclxuXHRcdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPk5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlVybDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3VybH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzQnV0dG9uPXt0cnVlfVxyXG5cdFx0XHRcdFx0aGFuZGxlcj17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0ZWRpdCA/IGhhbmRsZUVkaXQoZSkgOiBoYW5kbGVBZGQoZSk7XHJcblx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdHtlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ31cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdHNwZWNpYWxpdGllczogc3RhdGUuc3BlY2lhbGl0eSxcclxuXHRwcmV2VmlkZW86IHN0YXRlLnZpZGVvLnNlbGVjdGVkVmlkZW8sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuXHRhZGRWaWRlbyxcclxuXHRlZGl0VmlkZW8sXHJcblx0Z2V0VmlkZW8sXHJcbn0pKFVwc2VydFZpZGVvKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgUHJpdmF0ZVJvdXRlID0gKHtcclxuICBjb21wb25lbnQ6IENvbXBvbmVudCxcclxuICBhdXRoOiB7IGlzQXV0aGVudGljYXRlZCB9LFxyXG4gIC4uLnJlc3RcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um91dGVcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAgIHJlbmRlcj17KHByb3BzKSA9PlxyXG4gICAgICAgICFpc0F1dGhlbnRpY2F0ZWQgPyA8UmVkaXJlY3QgdG89XCIvbG9naW5cIiAvPiA6IDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gICAgICB9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgYXV0aDogc3RhdGUuYXV0aCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJpdmF0ZVJvdXRlKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTZW8gPSAoe1xyXG5cdGRlc2NyaXB0aW9uLFxyXG5cdHRpdGxlID0gJyAnLFxyXG5cdGxhbmcgPSAnZW4nLFxyXG5cdG1ldGEgPSBbXSxcclxuXHRyaWNocmVzdWx0LFxyXG59KSA9PiB7XHJcblx0Ly8gY29uc3QgeyBmYXZpY29uIH0gPSAnJztcclxuXHJcblx0Y29uc3QgbWV0YVRpdGxlID0gYENvZGVyc0dhbGEgfCAke3RpdGxlfWA7XHJcblx0Y29uc3QgbWV0YURlc2NyaXB0aW9uID1cclxuXHRcdFwiQ29kZXJzR2FsYSdzIG9ubHkgcHVycG9zZSBpcyB0byBwcm92aWRlIGNvZGluZyBrbm93bGVkZ2UsIHN1Y2ggYXMgV2ViIGRldmVsb3BtZW50IHRoYXQgaW5jbHVkZXMgSFRNTCBDU1MgSlMgTm9kZSBSZWFjdCBNb25nb0RiLCBNYWNoaW5lIExlYXJuaW5nLCBEYXRhIFN0cnVjdHVyZXMgYW5kIEFsZ29yaXRobVwiIHx8XHJcblx0XHRkZXNjcmlwdGlvbjtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxIZWxtZXRcclxuXHRcdFx0dGl0bGU9e21ldGFUaXRsZX1cclxuXHRcdFx0aHRtbEF0dHJpYnV0ZXM9e3sgbGFuZyB9fVxyXG5cdFx0XHRtZXRhPXtbXHJcblx0XHRcdFx0eyBuYW1lOiBgZGVzY3JpcHRpb25gLCBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24gfSxcclxuXHRcdFx0XHR7IHByb3BlcnR5OiBgb2c6dGl0bGVgLCBjb250ZW50OiBtZXRhVGl0bGUgfSxcclxuXHRcdFx0XHR7IHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLCBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24gfSxcclxuXHRcdFx0XHR7IHByb3BlcnR5OiBgb2c6dHlwZWAsIGNvbnRlbnQ6IGB3ZWJzaXRlYCB9LFxyXG5cdFx0XHRcdHsgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsIGNvbnRlbnQ6IGBzdW1tYXJ5YCB9LFxyXG5cdFx0XHRcdHsgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLCBjb250ZW50OiBtZXRhVGl0bGUgfSxcclxuXHRcdFx0XHR7IG5hbWU6IGB0d2l0dGVyOmRlc2NyaXB0aW9uYCwgY29udGVudDogbWV0YURlc2NyaXB0aW9uIH0sXHJcblx0XHRcdF0uY29uY2F0KG1ldGEpfVxyXG5cdFx0XHRsaW5rPXtbeyByZWw6ICdpY29uJywgdHlwZTogJ2ltYWdlL3BuZycsIGhyZWY6ICdmYXZpY29uJyB9XX1cclxuXHRcdFx0c2NyaXB0PXtbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dHlwZTogJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxyXG5cdFx0XHRcdFx0aW5uZXJIVE1MOiBKU09OLnN0cmluZ2lmeShyaWNocmVzdWx0KSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdfVxyXG5cdFx0Lz5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTRVJWSUNFX1VSTCB9IGZyb20gJy4vJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlUG9zdCA9IGFzeW5jIChwYXRoLCBwYXlsb2FkLCBoZWFkZXJzID0gbnVsbCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtTRVJWSUNFX1VSTH0vJHtwYXRofWAsIHBheWxvYWQsIHtcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZUdldCA9IGFzeW5jIChwYXRoLCBwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7U0VSVklDRV9VUkx9LyR7cGF0aH1gLCBwYXlsb2FkKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBTRVJWSUNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL1ByaXZhdGVSb3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2VvJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXRBdXRoVG9rZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2FwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QXV0aFRva2VuID0gKHRva2VuKSA9PiB7XHJcbiAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gIGlmICh0b2tlbikge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBKV1QgJHt0b2tlbn1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZWxldGUgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzY3JvbGxUbyA9IChlbGVtZW50KSA9PiB7XHJcblx0aXNDbGllbnQgJiZcclxuXHRcdHdpbmRvdy5zY3JvbGwoe1xyXG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXHJcblx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXHJcblx0XHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0NsaWVudCA9XHJcblx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ID8gdHJ1ZSA6IGZhbHNlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtdGlwcHknO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERlbGV0ZSwgVXBkYXRlLCBBZGQgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xyXG5cclxuY29uc3QgVG9vbHRpcFdyYXBwZXIgPSAoeyB0aXRsZSwgcG9zaXRpb24sIGNoaWxkcmVuIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRvb2x0aXAgdGl0bGU9e3RpdGxlfSBwb3NpdGlvbj17cG9zaXRpb259IHRyaWdnZXI9J21vdXNlZW50ZXInPlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L1Rvb2x0aXA+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IEFkbWluQnV0dG9ucyA9ICh7IHR5cGUsIHVybCwgaGFuZGxlciwgaXNBZG1pbiwgZGF0YSA9IHt9IH0pID0+XHJcblx0aXNBZG1pbiA/IChcclxuXHRcdDxUb29sdGlwV3JhcHBlciB0aXRsZT17YCR7dHlwZX0gXCIke2RhdGEubmFtZX1cImB9IHBvc2l0aW9uPXsndG9wJ30+XHJcblx0XHRcdDxBZG1pbkJ1dHRvbnNXcmFwcGVyXHJcblx0XHRcdFx0dHlwZT17dHlwZX1cclxuXHRcdFx0XHR1cmw9e3VybH1cclxuXHRcdFx0XHRoYW5kbGVyPXtoYW5kbGVyfVxyXG5cdFx0XHRcdGRhdGE9e2RhdGF9XHJcblx0XHRcdC8+XHJcblx0XHQ8L1Rvb2x0aXBXcmFwcGVyPlxyXG5cdCkgOlxyXG5cdFx0PEFkbWluQnV0dG9uc1dyYXBwZXJcclxuXHRcdFx0dHlwZT17XCJOb25lXCJ9XHJcblx0XHRcdHVybD17dXJsfVxyXG5cdFx0XHRoYW5kbGVyPXtoYW5kbGVyfVxyXG5cdFx0XHRkYXRhPXtkYXRhfVxyXG5cdFx0Lz5cclxuXHQ7XHJcblxyXG5jb25zdCBBZG1pbkJ1dHRvbnNXcmFwcGVyID0gKHsgdHlwZSwgdXJsLCBoYW5kbGVyLCBkYXRhIH0pID0+IHtcclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ0FkZCc6XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PExpbmsgdG89e3VybH0+XHJcblx0XHRcdFx0XHQ8QWRkIHNpemU9JzIwJyBjb2xvcj0nIzAwMCcgLz5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0Y2FzZSAnRWRpdCc6XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdHRvPXt7XHJcblx0XHRcdFx0XHRcdHBhdGhuYW1lOiB1cmwsXHJcblx0XHRcdFx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0XHRcdFx0bmFtZTogZGF0YS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdGlzTG9ja2VkOiBkYXRhLmxvY2tlZCxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0PFVwZGF0ZSBzaXplPScyMCcgY29sb3I9JyMwMDAnIC8+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdGNhc2UgJ0RlbGV0ZSc6XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIsIG91dGxpbmU6IFwibm9uZVwiIH19XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGhhbmRsZXIoZGF0YSk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0LXRvcGljLW1vZGFsLXRvZ2dsZSc+XHJcblx0XHRcdFx0XHQ8RGVsZXRlIHNpemU9JzIwJyBjb2xvcj0nY3JpbXNvbicgLz5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0KTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gPGJ1dHRvbiBocmVmPVwiI1wiXHJcblx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIsIG91dGxpbmU6IFwibm9uZVwiLCB9fVxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nZWRpdC10b3BpYy1tb2RhbC10b2dnbGUnPlxyXG5cdFx0XHRcdDxEZWxldGUgc2l6ZT0nMCcgY29sb3I9JycgLz5cclxuXHRcdFx0PC9idXR0b24+O1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRpc0FkbWluOiBzdGF0ZS5hdXRoLmlzQWRtaW4sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEFkbWluQnV0dG9ucyk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTG9jaywgUmVhZCwgVW5sb2NrIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcclxuXHJcbmNvbnN0IElubmVyRGl2ID0gKHsgaGFuZGxlciwgY2hpbGRyZW4sIGRhcmssIGJnIH0pID0+XHJcblx0Y2hpbGRyZW4gPyAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke2RhcmsgJiYgJ2RhcmsnfWB9XHJcblx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCR7YmcgJiYgJ2JnJ31gIH19XHJcblx0XHRcdG9uQ2xpY2s9e2hhbmRsZXIgPyBoYW5kbGVyIDogKGUpID0+IGNvbnNvbGUubG9nKGUsIGhhbmRsZXIpfT5cclxuXHRcdFx0PHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cclxuXHRcdFx0PHN2Zz5cclxuXHRcdFx0XHQ8cG9seWxpbmVcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nbzEnXHJcblx0XHRcdFx0XHRwb2ludHM9JzAgMCwgMTUwIDAsIDE1MCA1NSwgMCA1NSwgMCAwJz48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDxwb2x5bGluZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdvMidcclxuXHRcdFx0XHRcdHBvaW50cz0nMCAwLCAxNTAgMCwgMTUwIDU1LCAwIDU1LCAwIDAnPjwvcG9seWxpbmU+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0PC9kaXY+XHJcblx0KSA6IChcclxuXHRcdDw+XHJcblx0XHRcdHsnICAgJ31cclxuXHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0PFJlYWQgc2l6ZT17MTl9IC8+XHJcblx0XHRcdDwvc3Bhbj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIHVybCwgZGFyaywgYmcsIGlzQnV0dG9uLCBoYW5kbGVyIH0pID0+IHtcclxuXHRyZXR1cm4gdHlwZW9mIGlzQnV0dG9uID09ICd1bmRlZmluZWQnID8gKFxyXG5cdFx0PExpbmsgdG89e3VybCAmJiB1cmx9PlxyXG5cdFx0XHQ8SW5uZXJEaXYgZGFyaz17ZGFya30gYmc9e2JnfT5cclxuXHRcdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdDwvSW5uZXJEaXY+XHJcblx0XHQ8L0xpbms+XHJcblx0KSA6IChcclxuXHRcdDxJbm5lckRpdiBkYXJrPXtkYXJrfSBiZz17Ymd9IGhhbmRsZXI9e2hhbmRsZXJ9PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L0lubmVyRGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTG9ja0J1dHRvbiA9ICh7IGlzTG9ja2VkLCBoYW5kbGVyIH0pID0+IHtcclxuXHRyZXR1cm4gPHNwYW4gb25DbGljaz17aGFuZGxlcn0+e2lzTG9ja2VkID8gPExvY2sgLz4gOiA8VW5sb2NrIC8+fTwvc3Bhbj47XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vQWRtaW5CdXR0b25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9Vc2VyQnV0dG9ucyc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZvb3RlclNvY2lhbE1lZGlhID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYVwiPlxyXG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2dtYWlsLmNvbVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMzAzMTYxL2dtYWlsLWljb24tbG9nby5zdmdcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTgzNjA4L3R3aXR0ZXIuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vYmloYW5pLnByaXlhXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzExMTE5OS9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb21cIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzIxNzc1My9naXRodWIuc3ZnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImdpdGh1YlwiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Rm9vdGVyTWVzc2FnZSgpXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgc2V0Rm9vdGVyTWVzc2FnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TWVzc2FnZSgnRW50ZXIgWW91ciBFbWFpbCBoZXJlIHRvIHN1YnNjcmliZSBmb3IgTmV3c2xldHRlcicpIH1cclxuICAgICwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250XCI+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtY29sXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5Db2RlcnMgR2FsYTwvc3Bhbj5cclxuICAgICAgICAgICAgPEZvb3RlclNvY2lhbE1lZGlhIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJpZ2h0cy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgJmNvcHk7IDIwMjAgQ29kZXJzIEdhbGEgLCBBbGwgUmlnaHRzIFJlc2VydmVkXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb2xcIj5cclxuICAgICAgICAgICAgPGgxPk91ciBOZXdzbGV0dGVyPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCIgZm9ybSBuZXdzbGV0dGVyLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRiXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0blwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEFjY29yZGlvbiwgQnV0dG9uLCBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldERpc3BsYXlNb2RlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91aSc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG4vLyA9LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT1cclxuaW1wb3J0IFNpZ25lZE91dExpbmtzIGZyb20gJy4vU2lnbmVkT3V0TGlua3MnO1xyXG5pbXBvcnQgU2lnbmVkSW5MaW5rcyBmcm9tICcuL1NpZ25lZEluTGlua3MnO1xyXG4vLyA9LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT1cclxuXHJcbi8vIGxvZ28gaW1wb3J0c1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2NnVHJhbnNwYXJlbnQuUE5HJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGF1dGgsIHVpLCBzZXREaXNwbGF5TW9kZSB9KSA9PiB7XHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGNvbnN0IFtuYXZiYXJFeHBhbmRlZCwgc2V0bmF2YmFyRXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtzd2l0Y2hlZCwgc2V0c3dpdGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQodWkuZGlzcGxheU1vZGUpO1xyXG5cdFx0Y29uc29sZS5sb2codWkuZGlzcGxheU1vZGUpO1xyXG5cdFx0aWYgKHVpLmRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcclxuXHRcdFx0c2V0c3dpdGNoZWQodHJ1ZSk7XHJcblx0XHR9XHJcblx0fSwgW3NldHN3aXRjaGVkLCB1aS5kaXNwbGF5TW9kZV0pO1xyXG5cclxuXHQvLyBHZXR0aW5nIHRoZSBjdXJyZW50IG1vZGUgZnJvbSBsb2NhbCBzdG9yYWdlXHJcblx0aWYgKGlzQ2xpZW50KSB7XHJcblx0XHRsZXQgbW9kZSA9ICdsaWdodCc7XHJcblxyXG5cdFx0bW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RlJyk7XHJcblxyXG5cdFx0aWYgKG1vZGUgPT09ICdkYXJrJykge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vXHJcblxyXG5cdC8vIGNvbnN0IGxpbmtzID0gPFNpZ25lZE91dExpbmtzIC8+O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J25hdmlnYXRpb24td3JhcCBiZy1saWdodCBzdGFydC1oZWFkZXIgc3RhcnQtc3R5bGUnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8QWNjb3JkaW9uXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2lzQ2xpZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDc2NyA/IG51bGwgOiAnZHJvcGRvd24tYWNjb3JkaW9uJ30+XHJcblx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHQ8Q29sPlxyXG5cdFx0XHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89Jy8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgPj0gNzY3ID8gJzJyZW0nIDogJzEuMnJlbScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1sb2dvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17TG9nb31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9JydcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3N3aXRjaCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldERpc3BsYXlNb2RlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0c3dpdGNoZWQoIXN3aXRjaGVkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgc3dpdGNoIGZsb2F0LXJpZ2h0ICR7c3dpdGNoZWQgPyAnc3dpdGNoZWQnIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1aS5kaXNwbGF5TW9kZSA9PT0gJ2RhcmsnID8gJyMxMTEnIDogJyNmMWYxZjEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2NpcmNsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtb2RlLWljb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzIwcHgnIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1aS5kaXNwbGF5TW9kZSA9PT0gJ2RhcmsnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMTU4L21vb24uc3ZnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvODM3MjYvc3VuLnN2ZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncG9pbnRzLWJveCAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncG9pbnRzLXRleHQnPiBQb2ludHMgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJDRyBQb2ludHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy83MTUvNzE1NzA5LnN2ZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwb2ludHMtaW1nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+IHthdXRoLnVzZXIgJiYgYXV0aC51c2VyLnBvaW50c30gPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaWduZWQtbGlua3MnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7YXV0aC5pc0F1dGhlbnRpY2F0ZWQgJiYgYXV0aC5pc0F1dGhlbnRpY2F0ZWQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTaWduZWRJbkxpbmtzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFNpZ25lZE91dExpbmtzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8QWNjb3JkaW9uLlRvZ2dsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1idG4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRuYXZiYXJFeHBhbmRlZCghbmF2YmFyRXhwYW5kZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcz17QnV0dG9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdsaW5rJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudEtleT0nNSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNuYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtY29udHJvbHM9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17bmF2YmFyRXhwYW5kZWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nVG9nZ2xlIG5hdmlnYXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZXItaWNvbic+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Ub2dnbGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWNjb3JkaW9uLkNvbGxhcHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nICdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50S2V5PSc1Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7YXV0aC51c2VyICYmIGF1dGgudXNlci51c2VySWQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2lnbmVkSW5MaW5rcyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2lnbmVkT3V0TGlua3MgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG5cdFx0XHRcdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDwvUm93PlxyXG5cdFx0XHRcdDwvQWNjb3JkaW9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbi8vICAgYXV0aDogc3RhdGUuYXV0aCxcclxuLy8gfSk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0YXV0aDogc3RhdGUuYXV0aCxcclxuXHRcdHVpOiBzdGF0ZS51aSxcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgc2V0RGlzcGxheU1vZGUgfSkoTmF2YmFyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgU2lnbmVkSW5MaW5rcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT0nbmF2YmFyLW5hdiBtbC1hdXRvIHB5LTQgcHktbWQtMCc+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNCc+XHJcblx0XHRcdFx0XHQ8TmF2TGluayB0bz0nL2hvbWUnIGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG5cdFx0XHRcdFx0XHRIb21lXHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00Jz5cclxuXHRcdFx0XHRcdDxOYXZMaW5rIHRvPScvYWJvdXQnIGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG5cdFx0XHRcdFx0XHRBYm91dFxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNCc+XHJcblx0XHRcdFx0XHQ8TmF2TGlua1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1saW5rICdcclxuXHRcdFx0XHRcdFx0dG89Jy9sZWFybidcclxuXHRcdFx0XHRcdFx0cm9sZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSdmYWxzZSc+XHJcblx0XHRcdFx0XHRcdExlYXJuXHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+PC9kaXY+XHJcblx0XHRcdFx0PC9saT5cclxuXHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNCc+XHJcblx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGhyZWY9Jy8nXHJcblx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbGluayc+XHJcblx0XHRcdFx0XHRcdExvZ091dFxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmVkSW5MaW5rcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgU2lnbmVkT3V0TGlua3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG8gcHktNCBweS1tZC0wXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTRcIj5cclxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxyXG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTRcIj5cclxuICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgIHRvPVwiL2xlYXJuXCJcclxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExlYXJuXHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj48L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00XCI+XHJcbiAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICB0bz1cIi9sb2dpblwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj48L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25lZE91dExpbmtzO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL0J1dHRvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Zvb3Rlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1zZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWJveFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlcjFcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyMlwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXIzXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXIiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7IGFydGljbGVzOiBbXSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJ0aWNsZVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9BUlRJQ0xFJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0b3BpY3M6IHBheWxvYWQsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSAnR0VUX0FSVElDTEUnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlbGVjdGVkQXJ0aWNsZTogcGF5bG9hZC5hcnRpY2xlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnR0VUX0FMTF9BUlRJQ0xFUyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YXJ0aWNsZXM6IHBheWxvYWQuYXJ0aWNsZXMsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdDTEVBUl9BUlRJQ0xFJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWxlY3RlZEFydGljbGU6IHt9LFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ0FERF9BUlRJQ0xFX0VSUk9SJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0TE9HSU5fU1VDQ0VTUyxcclxuXHRMT0dJTl9GQUlMLFxyXG5cdFJFR0lTVEVSX1NVQ0NFU1MsXHJcblx0UkVHSVNURVJfRkFJTCxcclxuXHRVU0VSX0xPQURFRCxcclxuXHRBVVRIX0VSUk9SLFxyXG5cdExPR09VVCxcclxuXHRTRU5EX1JFU0VUX0VNQUlMLFxyXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHRva2VuOiBpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcclxuXHRpc0F1dGhlbnRpY2F0ZWQ6IG51bGwsXHJcblx0bG9hZGluZzogZmFsc2UsXHJcblx0dXNlcjogbnVsbCxcclxuXHRpc0FkbWluOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgVVNFUl9MT0FERUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dXNlcjogcGF5bG9hZCxcclxuXHRcdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXHJcblx0XHRcdFx0aXNBZG1pbjogcGF5bG9hZC5yb2xlID09PSAwID8gZmFsc2UgOiB0cnVlLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBSRUdJU1RFUl9TVUNDRVNTOlxyXG5cdFx0Y2FzZSBMT0dJTl9TVUNDRVNTOlxyXG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBwYXlsb2FkLnRva2VuKTtcclxuXHRcdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHBheWxvYWQudXNlcklkKTtcclxuXHRcdFx0Y29uc29sZS5sb2cocGF5bG9hZCk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdC4uLnBheWxvYWQsXHJcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiB0cnVlLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBSRUdJU1RFUl9GQUlMOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dJTl9GQUlMOlxyXG5cdFx0Y2FzZSBBVVRIX0VSUk9SOlxyXG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuXHRcdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJZCcpO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRva2VuOiBudWxsLFxyXG5cdFx0XHRcdGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0dXNlcklkOiBudWxsLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dPVVQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dG9rZW46IG51bGwsXHJcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgU0VORF9SRVNFVF9FTUFJTDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ1NFVF9BVVRIX0xPQURFUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgc3BlY2lhbGl0eSBmcm9tICcuL3NwZWNpYWxpdHknO1xyXG5pbXBvcnQgdG9waWMgZnJvbSAnLi90b3BpYyc7XHJcbmltcG9ydCBhcnRpY2xlIGZyb20gJy4vYXJ0aWNsZSc7XHJcbmltcG9ydCB1aSBmcm9tICcuL3VpJztcclxuaW1wb3J0IHZpZGVvIGZyb20gJy4vdmlkZW8nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuXHRhdXRoLFxyXG5cdHNwZWNpYWxpdHksXHJcblx0dG9waWMsXHJcblx0YXJ0aWNsZSxcclxuXHR1aSxcclxuXHR2aWRlbyxcclxufSk7XHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzcGVjaWFsaXRpZXM6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BlY2lhbGl0eVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ0dFVF9TUEVDSUFMSVRJRVMnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNwZWNpYWxpdGllczogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ0dFVF9TUEVDSUFMSVRZJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzcGVjaWFsaXR5OiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnQ0xFQVJfU1BFQ0lBTElUWSc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3BlY2lhbGl0eToge30sXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUSUVTX0VSUk9SJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUWV9FUlJPUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0dG9waWNzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvcGljUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0Y29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcblxyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSAnR0VUX1RPUElDUyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dG9waWNzOiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ0dFVF9UT1BJQ1NfRVJST1InOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG9wZW5Ub3BpY3M6IFtdLFxyXG5cdGRpc3BsYXlNb2RlOlxyXG5cdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKVxyXG5cdFx0XHQ/IGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RlJylcclxuXHRcdFx0OiAnbGlnaHQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdWlSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ1NFVF9PUEVOX1RPUElDUyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0b3BlblRvcGljczogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ1NFVF9ESVNQTEFZX01PREUnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRpc3BsYXlNb2RlOiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHNlbGVjdGVkVmlkZW86IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9WSURFTyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dG9waWNzOiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ0dFVF9WSURFTyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2VsZWN0ZWRWaWRlbzogcGF5bG9hZC52aWRlbyxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ1NFTEVDVF9WSURFTyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2VsZWN0ZWRWaWRlbzogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ0NMRUFSX1ZJREVPJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWxlY3RlZFZpZGVvOiB7fSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlICdBRERfVklERU9fRVJST1InOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGVDYXJkID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJwcm9maWxlLWNhcmRcIj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGgxPntkYXRhLm5hbWV9PC9oMT5cclxuICAgICAgICA8aDI+SGVsbG8hPC9oMj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1iaW9cIj5cclxuICAgICAgICA8cD57ZGF0YS5iaW99PC9wPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgbGlzdC11bnN0eWxlZCBsaXN0LWlubGluZVwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17ZGF0YS5wb3J0Zm9saW9Vcmx9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xODg5OTAvYnJvd3Nlci13ZWJzaXRlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtkYXRhLmluc3RhVXJsfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTExMTk5L2luc3RhZ3JhbS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17ZGF0YS50d2l0dGVyVXJsfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTgzNjA4L3R3aXR0ZXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2RhdGEuZ2l0aHViVXJsfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMjE3NzUzL2dpdGh1Yi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXNpZGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFib3V0VXMgPSAoKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbXlGdW5jdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNTUwKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGUtY2FyZFwiKVxyXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLWNhcmQtYW5pbVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdXMtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11cy1oZWFkaW5nXCI+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIEFib3V0IDxzcGFuPlVzPC9zcGFuPlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzLXRleHRcIj5cclxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1b2QgZG9sb3JcclxuICAgICAgICAgIGRvbG9yZSBvZGl0LCBuZXF1ZSBpdGFxdWUgaXVyZSBxdWFzIG1vbGxpdGlhIG5paGlsIGN1bXF1ZSByZW0gaGFydW1cclxuICAgICAgICAgIGNvbnNlcXV1bnR1ciBjb25zZWN0ZXR1ci4gQXV0ZW0gZnVnaXQsIGRvbG9yaWJ1cyBzaW50IGVuaW0gZXJyb3Igc2VxdWlcclxuICAgICAgICAgIHF1byByZW0gbWluaW1hIG1hZ25pIGV4Y2VwdHVyaSBleHBlZGl0YSBtb2xsaXRpYSByZWN1c2FuZGFlIGhhcnVtXHJcbiAgICAgICAgICBhbGlhcyByZXBlbGxlbmR1cywgc2l0IHZvbHVwdGF0ZSBmYWNpbGlzIHNpbWlsaXF1ZSBhdCBpbiBhc3BlcmlvcmVzXHJcbiAgICAgICAgICBzdW50IGluYW0gc2FlcGUgcXVpLiBOaXNpIG1pbmltYSBpcHNhIGlsbG8gdGVtcG9yZSBxdW9kIGVuaW0gZXVtXHJcbiAgICAgICAgICBxdWlkZW0/XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtY2FyZHNcIj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBsZz17Nn0+XHJcbiAgICAgICAgICAgIDxQcm9maWxlQ2FyZFxyXG4gICAgICAgICAgICAgIGRhdGE9e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUHJpeWFcIixcclxuICAgICAgICAgICAgICAgIHBvcnRmb2xpb1VybDogXCJodHRwczovL2tub3ctcHJpeWEtYmloYW5pLnZlcmNlbC5hcHBcIixcclxuICAgICAgICAgICAgICAgIGluc3RhVXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYmloYW5pLnByaXlhXCIsXHJcbiAgICAgICAgICAgICAgICBnaXRodWJVcmw6IFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9Qcml5YUJpaGFuaVwiLFxyXG4gICAgICAgICAgICAgICAgdHdpdHRlclVybDogXCJodHRwczovL3R3aXR0ZXIuY29tL3BfYmloYW5pXCIsXHJcbiAgICAgICAgICAgICAgICBiaW86XHJcbiAgICAgICAgICAgICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdGVtcG9yYSBldmVuaWV0IHF1YWUgbmVxdWUgaGljIGRvbG9yaWJ1cyB2b2x1cHRhdGlidXMgaW5jaWR1bnQgcXVpYSBmYWNpbGlzIGJsYW5kaXRpaXMuXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgbGc9ezZ9PlxyXG4gICAgICAgICAgICA8UHJvZmlsZUNhcmRcclxuICAgICAgICAgICAgICBkYXRhPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkthcnRpa1wiLFxyXG4gICAgICAgICAgICAgICAgcG9ydGZvbGlvVXJsOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgaW5zdGFVcmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9iaWhhbmkucHJpeWFcIixcclxuICAgICAgICAgICAgICAgIGdpdGh1YlVybDogXCJodHRwczovL3d3dy5naXRodWIuY29tL2thcnRpazE4Z1wiLFxyXG4gICAgICAgICAgICAgICAgdHdpdHRlclVybDogXCJodHRwczovL3R3aXR0ZXIuY29tL0drYWFydGlrXCIsXHJcbiAgICAgICAgICAgICAgICBiaW86XHJcbiAgICAgICAgICAgICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdGVtcG9yYSBldmVuaWV0IHF1YWUgbmVxdWUgaGljIGRvbG9yaWJ1cyB2b2x1cHRhdGlidXMgaW5jaWR1bnQgcXVpYSBmYWNpbGlzIGJsYW5kaXRpaXMuXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBRdWVzdGlvbnMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25zLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInMtcy0xXCI+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgQWJvdXQgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPkNvZGVycyBHYWxhPC9zcGFuPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC1kaW5cIj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICBXaGF0IGlzIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkNvZGVycyBHYWxhPC9zcGFuPj9cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBkb2xvciBleHBsaWNhYm8gb3B0aW9cclxuICAgICAgICAgIGZ1Z2lhdCBxdW8gbnVtcXVhbSEgTW9sbGl0aWEsIGZhY2lsaXMgYXBlcmlhbSBuaWhpbCB2b2x1cHRhdGVcclxuICAgICAgICAgIGNvbnNlcXV1bnR1ciBkb2xvcmUsIGhpYyBhYiB0b3RhbSBibGFuZGl0aWlzIGxvcmVtMzAgYWNjdXNhbnRpdW0sXHJcbiAgICAgICAgICBtYWduYW0gb2RpdCBldW0/XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aHktZGluXCI+XHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIFdoeSA8c3BhbiBjbGFzc05hbWU9XCJcIj5Db2RlcnMgR2FsYTwvc3Bhbj4/XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWkgZG9sb3IgZXhwbGljYWJvIG9wdGlvXHJcbiAgICAgICAgICBmdWdpYXQgcXVvIG51bXF1YW0hIE1vbGxpdGlhLCBmYWNpbGlzIGFwZXJpYW0gbmloaWwgdm9sdXB0YXRlXHJcbiAgICAgICAgICBjb25zZXF1dW50dXIgZG9sb3JlLCBoaWMgYWIgdG90YW0gYmxhbmRpdGlpcyBhY2N1c2FudGl1bSwgbWFnbmFtIG9kaXRcclxuICAgICAgICAgIGV1bT9cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtZGluXCI+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgV2hhdCBpcyA8c3BhbiBjbGFzc05hbWU9XCJcIj5Db2RlcnMgR2FsYTwvc3Bhbj4/XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWkgZG9sb3IgZXhwbGljYWJvIG9wdGlvXHJcbiAgICAgICAgICBmdWdpYXQgcXVvIG51bXF1YW0hIE1vbGxpdGlhLCBmYWNpbGlzIGFwZXJpYW0gbmloaWwgdm9sdXB0YXRlXHJcbiAgICAgICAgICBjb25zZXF1dW50dXIgZG9sb3JlLCBoaWMgYWIgdG90YW0gYmxhbmRpdGlpcyBsb3JlbTMwIGFjY3VzYW50aXVtLFxyXG4gICAgICAgICAgbWFnbmFtIG9kaXQgZXVtP1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgQWxsID0gKHsgYXJ0aWNsZXMgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZF9fY29sLTNcIj5cclxuICAgICAgICAgICAge2FydGljbGVzICYmXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBBcnRpY2xlSWQgPSBhcnRpY2xlICYmIGFydGljbGUuX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS1tZFwiIGtleT17QXJ0aWNsZUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2Jsb2cvcmVhZC8ke2FydGljbGUgJiYgYXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIi1cIil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUudGh1bWJuYWlsVXJsID8gYXJ0aWNsZS50aHVtYm5haWxVcmwgOiBcImh0dHBzOi8vY29kZXJzZ2FsYS5jb20vc3RhdGljL21lZGlhL2NnVHJhbnNwYXJlbnQuNmE5YzM0OTYuUE5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2ltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmlkX19pdGVtX19jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlICYmIG1vbWVudChhcnRpY2xlLmNyZWF0ZWRBdCkuZm9ybWF0KFwiREQgTU0gWVlZWVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX3RpdGxlXCI+e2FydGljbGUgJiYgYXJ0aWNsZS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9fYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnkgQ29kZXJzR2FsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgRmVhdHVyZWQgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHthcnRpY2xlcyAmJlxyXG5cdFx0XHRcdGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGFydGljbGUgJiYgYXJ0aWNsZS5mZWF0dXJlZCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhhcnRpY2xlKTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgQXJ0aWNsZUlkID0gYXJ0aWNsZSAmJiBhcnRpY2xlLl9pZDtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZF9faXRlbS1zbScga2V5PXthcnRpY2xlICYmIGFydGljbGUuaWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89e2AvYmxvZy9yZWFkLyR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csICctJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZ3JpZF9faXRlbV9fY2F0ZWdvcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2FydGljbGUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9tZW50KGFydGljbGUuY3JlYXRlZEF0KS5mb3JtYXQoJ0REIE1NIFlZWVknKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nZ3JpZF9faXRlbV9fdGl0bGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2FydGljbGUgJiYgYXJ0aWNsZS5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdncmlkX19pdGVtX19hdXRob3InPkJ5IENvZGVyc0dhbGE8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFydGljbGUudGh1bWJuYWlsVXJsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBhcnRpY2xlLnRodW1ibmFpbFVybFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ2h0dHBzOi8vY29kZXJzZ2FsYS5jb20vc3RhdGljL21lZGlhL2NnVHJhbnNwYXJlbnQuNmE5YzM0OTYuUE5HJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdncmlkX19pdGVtX19pbWcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9JydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBMYXRlc3QgPSAoeyBhcnRpY2xlIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGFydGljbGUgJiYgYXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIi1cIikpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS1sZ1wiPmBcclxuICAgICAgICAgICAge2FydGljbGUgJiYgPE5hdkxpbmsgdG89e2AvYmxvZy9yZWFkLyR7YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiLVwiKX1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXthcnRpY2xlLnRodW1ibmFpbFVybCA/IGFydGljbGUudGh1bWJuYWlsVXJsIDogXCJodHRwczovL2NvZGVyc2dhbGEuY29tL3N0YXRpYy9tZWRpYS9jZ1RyYW5zcGFyZW50LjZhOWMzNDk2LlBOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2ltZ1wiIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2ltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmlkX19pdGVtX19jYXRlZ29yeVwiPiB7YXJ0aWNsZSAmJiBtb21lbnQoYXJ0aWNsZS5jcmVhdGVkQXQpLmZvcm1hdChcIkREIE1NIFlZWVlcIil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX3RpdGxlXCI+e2FydGljbGUubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9fYXV0aG9yXCI+QnkgQ29kZXJzR2FsYTwvcD5cclxuICAgICAgICAgICAgPC9OYXZMaW5rPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXRlc3Q7XHJcbiIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcyc7XHJcbi8vIGltcG9ydCBSZWFjdFF1aWxsLCB7IFF1aWxsIH0gZnJvbSAncmVhY3QtcXVpbGwnO1xyXG4vLyBsZXQgQmxvY2tFbWJlZCA9IFF1aWxsLmltcG9ydCgnYmxvdHMvYmxvY2svZW1iZWQnKTtcclxuLy8gbGV0IElubGluZSA9IFF1aWxsLmltcG9ydCgnYmxvdHMvaW5saW5lJyk7XHJcbi8vIGhsanMuY29uZmlndXJlKHtcclxuLy8gICBsYW5ndWFnZXM6IFsnamF2YXNjcmlwdCcsICdweXRob24nLCAnaHRtbCcsICdjc3MnXSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBDdXN0b21CdXR0b24gPSAoKSA9PiAoXHJcbi8vICAgPGltZ1xyXG4vLyAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fVxyXG4vLyAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy83NzU4NC9pbWFnZS5zdmdcIlxyXG4vLyAgICAgYWx0PVwiXCJcclxuLy8gICAvPlxyXG4vLyApO1xyXG5cclxuLy8gLy8gY29uc3QgQ29kZUxpbmUgPSAoKSA9PiAoXHJcbi8vIC8vICAgPGltZ1xyXG4vLyAvLyAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fVxyXG4vLyAvLyAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8yOTQxNDUvY29kZS5zdmdcIlxyXG4vLyAvLyAgICAgYWx0PVwiXCJcclxuLy8gLy8gICAvPlxyXG4vLyAvLyApO1xyXG5cclxuLy8gY29uc3QgU2l6ZSA9IFF1aWxsLmltcG9ydCgnZm9ybWF0cy9zaXplJyk7XHJcbi8vIFNpemUud2hpdGVsaXN0ID0gW1xyXG4vLyAgICcxJyxcclxuLy8gICAnMicsXHJcbi8vICAgJzQnLFxyXG4vLyAgICc2JyxcclxuLy8gICAnOCcsXHJcbi8vICAgJzEwJyxcclxuLy8gICAnMTInLFxyXG4vLyAgICcxNCcsXHJcbi8vICAgJzE2JyxcclxuLy8gICAnMjAnLFxyXG4vLyAgICcyNCcsXHJcbi8vICAgJzI2JyxcclxuLy8gICAnMzAnLFxyXG4vLyBdO1xyXG4vLyBRdWlsbC5yZWdpc3RlcihTaXplLCB0cnVlKTtcclxuXHJcbi8vIGNsYXNzIGlubGluZUNvZGVCbG90IGV4dGVuZHMgSW5saW5lIHsgfVxyXG4vLyBpbmxpbmVDb2RlQmxvdC5ibG90TmFtZSA9ICdpbmxpbmVDb2RlJztcclxuLy8gaW5saW5lQ29kZUJsb3QudGFnTmFtZSA9ICdjb2RlJztcclxuXHJcbi8vIGNsYXNzIEltYWdlQmxvdCBleHRlbmRzIEJsb2NrRW1iZWQge1xyXG4vLyAgIHN0YXRpYyBjcmVhdGUodmFsdWUpIHtcclxuLy8gICAgIGxldCBub2RlID0gc3VwZXIuY3JlYXRlKCk7XHJcbi8vICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYWx0JywgdmFsdWUuYWx0KTtcclxuLy8gICAgIG5vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCB2YWx1ZS51cmwpO1xyXG4vLyAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdmFsdWUuY2xhc3MpO1xyXG4vLyAgICAgcmV0dXJuIG5vZGU7XHJcbi8vICAgfVxyXG5cclxuLy8gICBzdGF0aWMgdmFsdWUobm9kZSkge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgYWx0OiBub2RlLmdldEF0dHJpYnV0ZSgnYWx0JyksXHJcbi8vICAgICAgIHVybDogbm9kZS5nZXRBdHRyaWJ1dGUoJ3NyYycpLFxyXG4vLyAgICAgICBjbGFzczogbm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyksXHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBJbWFnZUJsb3QuYmxvdE5hbWUgPSAnaW1hZ2UnO1xyXG4vLyBJbWFnZUJsb3QudGFnTmFtZSA9ICdpbWcnO1xyXG4vLyBRdWlsbC5yZWdpc3RlcihJbWFnZUJsb3QpO1xyXG4vLyBRdWlsbC5yZWdpc3RlcihpbmxpbmVDb2RlQmxvdCk7XHJcblxyXG4vLyBjb25zdCBpbnNlcnRJbWFnZSA9ICgpID0+IHtcclxuLy8gICBsZXQgdXJsID0gcHJvbXB0KCdFbnRlciBsaW5rIFVSTCcpO1xyXG4vLyAgIGxldCBhbHQgPSBwcm9tcHQoJ0VudGVyIGxpbmsgYWx0Jyk7XHJcbi8vICAgbGV0IGNsYXMgPSBwcm9tcHQoJ0VudGVyIGNsYXNzIE5hbWUnKTtcclxuLy8gICBsZXQgcmFuZ2UgPSB0aGlzLnF1aWxsLmdldFNlbGVjdGlvbih0cnVlKTtcclxuLy8gICBjb25zb2xlLmxvZyhRdWlsbC5zb3VyY2VzKTtcclxuLy8gICB0aGlzLnF1aWxsLmluc2VydFRleHQocmFuZ2UuaW5kZXgsICdcXG4nLCBRdWlsbC5zb3VyY2VzLlVTRVIpO1xyXG4vLyAgIHRoaXMucXVpbGwuaW5zZXJ0RW1iZWQoXHJcbi8vICAgICByYW5nZS5pbmRleCArIDEsXHJcbi8vICAgICAnaW1hZ2UnLFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBhbHQ6IGFsdCxcclxuLy8gICAgICAgdXJsOiB1cmwsXHJcbi8vICAgICAgIGNsYXNzOiBjbGFzLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIFF1aWxsLnNvdXJjZXMuVVNFUlxyXG4vLyAgICk7XHJcbi8vICAgdGhpcy5xdWlsbC5zZXRTZWxlY3Rpb24ocmFuZ2UuaW5kZXggKyAyLCBRdWlsbC5zb3VyY2VzLlNJTEVOVCk7XHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBpbnNlcnRJbmxpbmVDb2RlID0gKGUpID0+IHtcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgLy8gY29uc29sZS5sb2codGhpcy5xdWlsbCk7XHJcbi8vICAgLy8gdGhpcy5xdWlsbC5mb3JtYXQoXCJpbmxpbmVDb2RlXCIsIHRydWUpO1xyXG4vLyAgIGNvbnNvbGUubG9nKCdpbmxpbmUgY29kZSBpbnMnKTtcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoKSA9PiAoXHJcbi8vICAgPGRpdiBpZD1cInRvb2xiYXJcIj5cclxuLy8gICAgIDxzZWxlY3RcclxuLy8gICAgICAgY2xhc3NOYW1lPVwicWwtaGVhZGVyXCJcclxuLy8gICAgICAgZGVmYXVsdFZhbHVlPXsnJ31cclxuLy8gICAgICAgb25DaGFuZ2U9eyhlKSA9PiBlLnBlcnNpc3QoKX1cclxuLy8gICAgID5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiBzZWxlY3RlZD48L29wdGlvbj5cclxuLy8gICAgIDwvc2VsZWN0PlxyXG5cclxuLy8gICAgIDxzZWxlY3QgY2xhc3M9XCJxbC1mb250XCI+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZXJpZlwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwibW9ub3NwYWNlXCI+PC9vcHRpb24+XHJcbi8vICAgICA8L3NlbGVjdD5cclxuXHJcbi8vICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLXNpemVcIj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCIyXCI+XHJcbi8vICAgICAgICAgMlxyXG4vLyAgICAgICA8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE2XCI+MTY8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI0XCI+MjQ8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI2XCI+MjY8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwXCI+MzA8L29wdGlvbj5cclxuLy8gICAgIDwvc2VsZWN0PlxyXG5cclxuLy8gICAgIDxzZWxlY3QgY2xhc3M9XCJxbC1hbGlnblwiPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2VudGVyXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWdodFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwianVzdGlmeVwiPjwvb3B0aW9uPlxyXG4vLyAgICAgPC9zZWxlY3Q+XHJcblxyXG4vLyAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJxbC1iYWNrZ3JvdW5kXCI+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWRcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cImdyZWVuXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjNEY2OUY4XCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcmFuZ2VcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cInZpb2xldFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiI2QwZDFkMlwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxyXG4vLyAgICAgPC9zZWxlY3Q+XHJcblxyXG4vLyAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJxbC1jb2xvclwiPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiI0RBMEY0N1wiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzREQ0UxRFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzRGNjlGOFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwib3JhbmdlXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjOTkzM2ZmXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjZDBkMWQyXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XHJcbi8vICAgICA8L3NlbGVjdD5cclxuXHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWJvbGRcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaXRhbGljXCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLXVuZGVybGluZVwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1zdHJpa2VcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtYmxvY2txdW90ZVwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1kaXJlY3Rpb25cIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtbGlua1wiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1pbWFnZVwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC12aWRlb1wiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiB2YWx1ZT1cIm9yZGVyZWRcIiBjbGFzc05hbWU9XCJxbC1saXN0XCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIHZhbHVlPVwiYnVsbGV0XCIgY2xhc3NOYW1lPVwicWwtbGlzdFwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiB2YWx1ZT1cIi0xXCIgY2xhc3NOYW1lPVwicWwtaW5kZW50XCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIHZhbHVlPVwiKzFcIiBjbGFzc05hbWU9XCJxbC1pbmRlbnRcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtY29kZS1ibG9ja1wiPjwvYnV0dG9uPlxyXG5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaW5zZXJ0SW1hZ2VcIj5cclxuLy8gICAgICAgPEN1c3RvbUJ1dHRvbiAvPlxyXG4vLyAgICAgPC9idXR0b24+XHJcbi8vICAgPC9kaXY+XHJcbi8vICk7XHJcblxyXG4vLyAvKlxyXG4vLyAgKiBFZGl0b3IgY29tcG9uZW50IHdpdGggY3VzdG9tIHRvb2xiYXIgYW5kIGNvbnRlbnQgY29udGFpbmVyc1xyXG4vLyAgKi9cclxuXHJcbi8vIGNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuLy8gICAgIHN1cGVyKHByb3BzKTtcclxuLy8gICAgIHRoaXMuc3RhdGUgPSB7IGVkaXRvckh0bWw6IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIH07XHJcbi8vICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBoYW5kbGVDaGFuZ2UoaHRtbCkge1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRvckh0bWw6IGh0bWwgfSk7XHJcbi8vICAgICB0aGlzLnByb3BzLmhhbmRsZUVkaXRvcihodG1sKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZWRpdG9ySHRtbCk7XHJcblxyXG4vLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpO1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVkaXRvclwiPlxyXG4vLyAgICAgICAgIDxDdXN0b21Ub29sYmFyIC8+XHJcbi8vICAgICAgICAgPFJlYWN0UXVpbGxcclxuLy8gICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgIG1vZHVsZXM9e0VkaXRvci5tb2R1bGVzfVxyXG4vLyAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZWRpdG9ySHRtbCB8fCAnJ31cclxuLy8gICAgICAgICAvPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBFZGl0b3IubW9kdWxlcyA9IHtcclxuLy8gICBzeW50YXg6IHtcclxuLy8gICAgIGhpZ2hsaWdodDogKHRleHQpID0+IGhsanMuaGlnaGxpZ2h0QXV0byh0ZXh0KS52YWx1ZSxcclxuLy8gICB9LFxyXG4vLyAgIHRvb2xiYXI6IHtcclxuLy8gICAgIGNvbnRhaW5lcjogJyN0b29sYmFyJyxcclxuXHJcbi8vICAgICBoYW5kbGVyczoge1xyXG4vLyAgICAgICBpbnNlcnRJbWFnZTogaW5zZXJ0SW1hZ2UsXHJcbi8vICAgICAgIGluc2VydElubGluZUNvZGU6IGluc2VydElubGluZUNvZGUsXHJcbi8vICAgICB9LFxyXG4vLyAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBFZGl0b3IuZm9ybWF0cyA9IFtcclxuLy8gICAnaGVhZGVyJyxcclxuLy8gICAnZm9udCcsXHJcbi8vICAgJ3NpemUnLFxyXG4vLyAgICdib2xkJyxcclxuLy8gICAnaXRhbGljJyxcclxuLy8gICAndW5kZXJsaW5lJyxcclxuLy8gICAnc3RyaWtlJyxcclxuLy8gICAnYmxvY2txdW90ZScsXHJcbi8vICAgJ2xpc3QnLFxyXG4vLyAgICdidWxsZXQnLFxyXG4vLyAgICdpbmRlbnQnLFxyXG4vLyAgICdsaW5rJyxcclxuLy8gICAnaW1hZ2UnLFxyXG4vLyAgICdjb2xvcicsXHJcbi8vICAgJ2NvZGUtYmxvY2snLFxyXG4vLyBdO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgSGVybyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbHVuYTEuY28vNTdkOWI2LnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWltYWdlIC10d28gLWZsb2F0aW5nRGVsYXlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9sdW5hMS5jby8yMDcwZWUucG5nXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taW1hZ2UgLXRocmVlIC1mbG9hdGluZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2x1bmExLmNvL2ZkYTg2MC5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1pbWFnZSAtZm91ciAtZmxvYXRpbmdEZWxheVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taGVhZGVyXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8tbGFiZWxcIj5UaGlzIGlzLi4uPC9wPlxyXG5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taGVhZGxpbmUgXCI+Q29kZXJzIEdhbGE8L2gxPlxyXG5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBDb2RlcnMgR2FsYSBpcyBhIGZyZWUgdG8gdXNlIHBsYXRmb3JtLCB3aGljaCB3aWxsIGhlbHAgYW5kIGd1aWRlXHJcbiAgICAgICAgICAgIHlvdSwgbm90IG9ubHkgdG8gbGVhcm4gd2ViIGRldmVsb3BtZW50IGJ1dCBiZWNvbWUgYSBmcmVlLWxhbmNlciBsaWtlXHJcbiAgICAgICAgICAgIHVzLiBTbyBjbGljayBvbiBwbGF5IGFuZCBlbWJhcmsgYSBuZXcgam91cm5leSB3aXRoIHVzLlxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xlYXJuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheSAtY29yYWwgLXNtYWxsIC1wdWxzZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBIZXJvQ2FyZHMgPSAoKSA9PiB7XHJcblx0Ly8gcmVmcyBmb3IgdGhlIHRocmVlIHNlY3Rpb25cclxuXHRjb25zdCBoZXJvQmx1ZSA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IGhlcm9PcmFuZ2UgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBoZXJvR3JlZW4gPSB1c2VSZWYoKTtcclxuXHJcblx0Y29uc3Qgc2Nyb2xsRnVuY3Rpb24gPSAoKSA9PiB7XHJcblx0XHRpc0NsaWVudCAmJlxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG5cdFx0XHRcdHZhciBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHRcdFx0XHRpZiAoc2Nyb2xsIDwgMTUwKSB7XHJcblx0XHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29uZScpO1xyXG5cdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XHJcblx0XHRcdFx0XHRoZXJvR3JlZW4uY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0d28nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHNjcm9sbCA+IDE1MCAmJiBzY3JvbGwgPCA0NTApIHtcclxuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnb25lJyk7XHJcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhyZWUnKTtcclxuXHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3R3bycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gNDUwICYmIHNjcm9sbCA8IDY1MCkge1xyXG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndHdvJyk7XHJcblx0XHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29uZScpO1xyXG5cdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzY3JvbGwgPiA2NTApIHtcclxuXHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3R3bycpO1xyXG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcclxuXHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QuYWRkKCd0aHJlZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCA2MDApIHtcclxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuY3Rpb24pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoaXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiA2MDApIHtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHRcdFx0XHRoZXJvR3JlZW4uY3VycmVudC5jbGFzc0xpc3QuYWRkKCd0d28nKTtcclxuXHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndGhyZWUnKTtcclxuXHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ29uZScpO1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3R3bycpO1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XHJcblx0XHRcdFx0XHRcdH0sIDg1MCk7XHJcblx0XHRcdFx0XHR9LCA3NTApO1xyXG5cdFx0XHRcdH0sIDY1MCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0aXNDbGllbnQgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEZ1bmN0aW9uKTtcclxuXHRcdH07XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdoZXJvJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2hlcm8tYm94LWNvbnRhaW5lcic+XHJcblx0XHRcdFx0PExpbmsgdG89Jy9hYm91dCcgY2xhc3NOYW1lPSdoZXJvLWJveCc+XHJcblx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRyZWY9e2hlcm9CbHVlfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tYmx1ZSc+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0naGVyby1ib3hfX3RpdGxlJz5XaGF0IGlzIENvZGVyc0dhbGE/PC9oMj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0naGVyby1ib3hfX2JvZHknPlxyXG5cdFx0XHRcdFx0XHRDb2RlcnNHYWxhIGlzIGEgZnJlZSB0byB1c2UgcGxhdGZvcm0gZm9yIGFsbCB0aG9zZSBwZW9wbGUgd2hvIGFyZVxyXG5cdFx0XHRcdFx0XHR1bndpbGxpbmcgdG8gcGF5IGhpZ2ggcmFuc29tIHRvIHRoZXNlIGNyb29rZWQgY29hY2hpbmcgY2VudGVycyBmb3JcclxuXHRcdFx0XHRcdFx0bGVhcm5pbmcgd2ViIERldmVsb3BtZW50LiBXZSB3b24ndCBiZSBzcG9vbiBmZWVkaW5nIHlvdSBidXQgd2Ugd2lsbFxyXG5cdFx0XHRcdFx0XHRndWlkZSB5b3UuIEFueXdheSwgaWYgeW91IGFyZSBlYWdlciB0byBsZWFybiB5b3Ugd2lsbCBmaW5kIGEgd2F5LlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8TGluayB0bz0nL2Fib3V0LyNhYm91dHVzJyBjbGFzc05hbWU9J2hlcm8tYm94Jz5cclxuXHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdHJlZj17aGVyb0dyZWVufVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tZ3JlZW4nPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2hlcm8tYm94X190aXRsZSc+V2hvIGFyZSB3ZT88L2gyPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoZXJvLWJveF9fYm9keSc+XHJcblx0XHRcdFx0XHRcdFdlIHN0YXJ0ZWQgd2ViIGRldmVsb3BtZW50IG9uIG91ciBvd24sIHdpdGggbm8gZGlyZWN0aW9uIGFuZCBub1xyXG5cdFx0XHRcdFx0XHRjb2FjaGluZy4gQWxsIHdlIGhhZCB3YXMgZGV0ZXJtaW5hdGlvbiBhbmQgaW50ZXJuZXQuIFdlIGNvbnNpZGVyXHJcblx0XHRcdFx0XHRcdG91cnNlbHZlcyBsdWNreSB0byBiZSBhYmxlIHRvIHByb3ZpZGUgdGhlIHN1cHBvcnQgdGhhdCBoYWQgYmVlblxyXG5cdFx0XHRcdFx0XHRwcm92aWRlZCB0byB1cy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PExpbmsgdG89Jy9sZWFybicgY2xhc3NOYW1lPSdoZXJvLWJveCc+XHJcblx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRyZWY9e2hlcm9PcmFuZ2V9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGVyby1ib3hfX2NpcmNsZSBoZXJvLWJveF9fY2lyY2xlLS1vcmFuZ2UnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2hlcm8tYm94X190aXRsZSc+U3RhcnQgTGVhcm5pbmcgLi48L2gyPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoZXJvLWJveF9fYm9keSc+XHJcblx0XHRcdFx0XHRcdFJpZ2h0IG5vdyB3ZSBoYXZlIHRoZSBhcnRpY2xlcyBvbiBmcm9udC1lbmQtZGV2ZWxvcG1lbnQuIFdlIGFyZVxyXG5cdFx0XHRcdFx0XHR3b3JraW5nIHRpcmVsZXNzbHkgdG8gY292ZXIgYmFja2VuZC4gV2Ugd2lsbCBoYXZlIHRoZSBhcnRpY2xlcyBhaXJlZFxyXG5cdFx0XHRcdFx0XHRvbiBiYWNrZW5kIGJlZm9yZSBzZXB0ZW1iZXIuIFRoZSBjb3Vyc2Ugd2lsbCBjb3ZlciBGcm9udC1lbmQsIEFQSSxcclxuXHRcdFx0XHRcdFx0Tm9kZWpzLWV4cHJlc3MsIE1vbmdvRGIsIE15U1FMLCBIb3N0aW5nLCBSZWFjdCwgRmlyZWJhc2UuLi4gYW5kIGFcclxuXHRcdFx0XHRcdFx0bG90IG1vcmUgcHJvamVjdHMuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0NhcmRzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtdGlwcHknO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzY3JvbGxUbywgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi8uLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xyXG5cclxuY29uc3QgQXJ0aWNsZU5hbWVzID0gKHtcclxuXHRzZWxlY3RWaWRlbyxcclxuXHRhcnRpY2xlLFxyXG5cdGRlbGV0ZUFydGljbGUsXHJcblx0dG9waWMsXHJcblx0c3BlY2lhbGl0eU5hbWUsXHJcbn0pID0+IHtcclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc3QgeyBBcnRpY2xlTmFtZSwgX2lkIH0gPSBkYXRhO1xyXG5cdFx0Y29uc3QgY29uZmlybSA9XHJcblx0XHRcdGlzQ2xpZW50ICYmXHJcblx0XHRcdHdpbmRvdy5wcm9tcHQoYFlvdSBzdXJlIHdhbnQgdG8gZGVsZXRlIFwiJHtBcnRpY2xlTmFtZX1cIiA/IFkgb3IgTiBgKTtcclxuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcclxuXHRcdFx0ZGVsZXRlQXJ0aWNsZShfaWQsIHRvcGljLl9pZCwgc3BlY2lhbGl0eU5hbWUpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IHJlYWQtaWNvbic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPScgcmVhZCBjb2wtMTAnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGFydGljbGUpO1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdFZpZGVvKGFydGljbGUpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHBvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFRvKHBvcyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Rpc3BsYXktYXJ0aWNsZSc+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2FydGljbGUtbmFtZSBtLTAnPlxyXG5cdFx0XHRcdFx0XHRcdHthcnRpY2xlLkFydGljbGVOYW1lfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdhcnRpY2xlLWFjdGlvbi1pY29ucyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybD17YC9hcnRpY2xlL3VwZGF0ZS8ke2FydGljbGUuX2lkfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2FydGljbGV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdEZWxldGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9e2hhbmRsZURlbGV0ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17YXJ0aWNsZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvcHRpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtgUmVhZCBcIiR7YXJ0aWNsZS5BcnRpY2xlTmFtZX1cImB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRyaWdnZXI9J21vdXNlZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcj17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0VmlkZW8oYXJ0aWNsZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBwb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2Nyb2xsVG8ocG9zKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3VwZGF0ZS1kZWxldGUgZmxvYXQtcmlnaHQnPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0VmlkZW8gfSkoQXJ0aWNsZU5hbWVzKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi8uLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBnZXRTcGVjaWFsaXRpZXMsIGRlbGV0ZVNwZWNpYWxpdHkgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IENhcmQgPSAoeyBnZXRTcGVjaWFsaXRpZXMsIHNwZWNpYWxpdGllcywgZGVsZXRlU3BlY2lhbGl0eSB9KSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChzcGVjaWFsaXRpZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdGdldFNwZWNpYWxpdGllcygpO1xyXG5cdFx0fVxyXG5cdH0sIFtzcGVjaWFsaXRpZXMubGVuZ3RoLCBnZXRTcGVjaWFsaXRpZXNdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKGl0ZW0pID0+IHtcclxuXHRcdC8vIEdvdCB0byBoZWxwZXIsIGNoZWNrXHJcblx0XHRjb25zdCBjb25maXJtID1cclxuXHRcdFx0aXNDbGllbnQgJiZcclxuXHRcdFx0d2luZG93LnByb21wdChcclxuXHRcdFx0XHRgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke2l0ZW0uTmFtZX1cIiA/IFkgb3IgTiAoRGVsZXRpbmcgYSBzcGVjaWFsaXR5IHdpbGwgbGVhZCB0byBkZWxldGlvbiBvZiBhbGwgdG9waWNzIGFuZCBhcnRpY2xlcyBpbnNpZGUgaXQpIGBcclxuXHRcdFx0KTtcclxuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcclxuXHRcdFx0ZGVsZXRlU3BlY2lhbGl0eShpdGVtLl9pZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdsZWFybi1jb250YWluZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB0LTQnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0e3NwZWNpYWxpdGllcyAmJlxyXG5cdFx0XHRcdFx0XHRzcGVjaWFsaXRpZXMubWFwKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtpdGVtLl9pZH0gY2xhc3NOYW1lPSdjb2wtbGctNic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW1nQngnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltYWdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2l0ZW0uaW1hZ2VVcmx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17aXRlbS5hbHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA2MDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJzE1MHB4J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnYXV0bycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb250ZW50QngnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyPiB7aXRlbS5uYW1lfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybD17Jy91cGRhdGVzcGVjaWFsaXR5LycgKyBpdGVtLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2l0ZW19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdEZWxldGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVEZWxldGUoaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2l0ZW19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB1cmw9eycvbGVhcm4vJyArIGl0ZW0ubmFtZX0+U3RhcnQgTm93PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRzcGVjaWFsaXRpZXM6IHN0YXRlLnNwZWNpYWxpdHkuc3BlY2lhbGl0aWVzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcblx0Z2V0U3BlY2lhbGl0aWVzLFxyXG5cdGRlbGV0ZVNwZWNpYWxpdHksXHJcbn0pKENhcmQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtdGlwcHknO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBkZWxldGVWaWRlbywgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi8uLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xyXG5cclxuY29uc3QgVmlkZW9OYW1lcyA9ICh7XHJcblx0c2VsZWN0VmlkZW8sXHJcblx0dmlkZW8sXHJcblx0ZGVsZXRlVmlkZW8sXHJcblx0dG9waWMsXHJcblx0c3BlY2lhbGl0eU5hbWUsXHJcbn0pID0+IHtcclxuXHRjb25zb2xlLmxvZyh2aWRlbyk7XHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnN0IHsgVmlkZW9OYW1lLCBfaWQgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBjb25maXJtID1cclxuXHRcdFx0aXNDbGllbnQgJiZcclxuXHRcdFx0d2luZG93LnByb21wdChgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke1ZpZGVvTmFtZX1cIiA/IFkgb3IgTiBgKTtcclxuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcclxuXHRcdFx0ZGVsZXRlVmlkZW8oX2lkLCB0b3BpYy5faWQsIHNwZWNpYWxpdHlOYW1lKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3JvdyByZWFkLWljb24nPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVhZCBjb2wtMTAnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdFZpZGVvKHZpZGVvKTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkaXNwbGF5LWFydGljbGUnPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdhcnRpY2xlLW5hbWUgbS0wJz5cclxuXHRcdFx0XHRcdFx0XHR7dmlkZW8ubmFtZX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYXJ0aWNsZS1hY3Rpb24taWNvbnMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdFZGl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvdmlkZW8vdXBkYXRlLyR7dmlkZW8uX2lkfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e3ZpZGVvfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nRGVsZXRlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXtoYW5kbGVEZWxldGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e3ZpZGVvfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUb29sdGlwXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9wdGlvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e2BSZWFkIFwiJHt2aWRlby5uYW1lfVwiYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlcj0nbW91c2VlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0J1dHRvbj17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyh2aWRlbyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cGRhdGUtZGVsZXRlIGZsb2F0LXJpZ2h0Jz48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGRlbGV0ZVZpZGVvLCBzZWxlY3RWaWRlbyB9KShWaWRlb05hbWVzKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcclxuaW1wb3J0IHsgdW5sb2NrVG9waWMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3RvcGljJztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IEFydGljbGVQcmV2aWV3ID0gKHsgU2VsZWN0ZWRBcnRpY2xlLCBzcGVjaWFsaXR5TmFtZSwgdW5sb2NrVG9waWMgfSkgPT4ge1xyXG5cdGNvbnN0IFJlYWRNb3JlVXJsID1cclxuXHRcdFNlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubmFtZVxyXG5cdFx0XHQ/IGAvJHtzcGVjaWFsaXR5TmFtZX0vcmVhZC8ke1NlbGVjdGVkQXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCAnLScpfWBcclxuXHRcdFx0OiBgLyR7c3BlY2lhbGl0eU5hbWV9L3JlYWQvYmVmb3JlLXN0YXJ0aW5nYDtcclxuXHJcblx0Y29uc3QgaGFuZGxlVW5sb2NrID0gYXN5bmMgKHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKSA9PiB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCB1bmxvY2tUb3BpYyh0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdH07XHJcblx0Y29uc29sZS5sb2coU2VsZWN0ZWRBcnRpY2xlKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQtY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQnPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyBjYXJkLWhlYWRlcic+XHJcblx0XHRcdFx0XHRcdHtTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLm5hbWVcclxuXHRcdFx0XHRcdFx0XHQ/IFNlbGVjdGVkQXJ0aWNsZS5uYW1lXHJcblx0XHRcdFx0XHRcdFx0OiAnUmVhZCBUaGlzIEJlZm9yZSBZb3UgU3RhcnQuLi4nfVxyXG5cdFx0XHRcdFx0XHR7LyogPGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmbG9hdC1yaWdodCc+PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3FsLXNub3cnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZC1uby1ib2R5IHFsLWVkaXRvcic+XHJcblx0XHRcdFx0XHRcdFx0e1NlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubG9ja2VkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VG8gdmlldyB0aGlzIGFydGljbGUgcGxlYXNlIHVubG9jayBpdCB1c2luZyBwb2ludHN7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlVW5sb2NrKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLnRvcGljSWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwZWNpYWxpdHlOYW1lXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFVubG9ja1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFJlYWN0SHRtbFBhcnNlcihTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLmNvbnRlbnQpXHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlzQ2xpZW50ICYmXHJcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6ICcwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdHRvPXtSZWFkTW9yZVVybH0+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2xpbmsnPlxyXG5cdFx0XHRcdFx0XHRcdHtTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLmxvY2tlZFxyXG5cdFx0XHRcdFx0XHRcdFx0PyAnVW5sb2NrJ1xyXG5cdFx0XHRcdFx0XHRcdFx0OiAnUmVhZCBNb3JlLi4uLi4nfVxyXG5cdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgdW5sb2NrVG9waWMgfSkoQXJ0aWNsZVByZXZpZXcpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBnZXRUb3BpY3MsIGRlbGV0ZVRvcGljIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBBcnRpY2xlTmFtZXMgZnJvbSAnLi4vbGVhcm4vQXJ0aWNsZU5hbWVzJztcclxuaW1wb3J0IFZpZGVvTmFtZXMgZnJvbSAnLi4vbGVhcm4vVmlkZW9OYW1lcyc7XHJcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcclxuaW1wb3J0IHsgTG9jayB9IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucyc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBUb3BpY3NPdmVydmlldyA9ICh7XHJcblx0Z2V0VG9waWNzLFxyXG5cdHNwZWNpYWxpdHlOYW1lLFxyXG5cdHRvcGljcyxcclxuXHRkZWxldGVUb3BpYyxcclxuXHR1c2VyLFxyXG59KSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldFRvcGljcyhzcGVjaWFsaXR5TmFtZSk7XHJcblx0fSwgW2dldFRvcGljcywgc3BlY2lhbGl0eU5hbWVdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKHRvcGljKSA9PiB7XHJcblx0XHRjb25zdCBjb25maXJtID1cclxuXHRcdFx0aXNDbGllbnQgJiZcclxuXHRcdFx0d2luZG93LnByb21wdChcclxuXHRcdFx0XHRgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke3RvcGljLm5hbWV9XCIgPyBZIG9yIE4gKERlbGV0aW5nIGEgdG9waWMgd2lsbCBsZWFkIHRvIGRlbGV0aW9uIG9mIGFsbCBhcnRpY2xlcyBpbnNpZGUgaXQpIGBcclxuXHRcdFx0KTtcclxuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcclxuXHRcdFx0ZGVsZXRlVG9waWModG9waWMuX2lkLCBzcGVjaWFsaXR5TmFtZSk7XHJcblx0XHRcdHRvYXN0KCdEZWxldGVkIHNwZWNpYWxpdHkgc3VjZXNzZnVsbHknKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBpZD0nc3BlY2lhbGl0aWVzJyBjbGFzc05hbWU9J1RvcGljLW5hbWVzICc+XHJcblx0XHRcdHt0b3BpY3MubGVuZ3RoID4gMCAmJlxyXG5cdFx0XHRcdHRvcGljcy5tYXAoKHRvcGljKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17dG9waWMuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3AtMCBzcGVjaWFsaXR5LXRvcGljLWNvbnRhaW5lciBtLTEnXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e3RvcGljLl9pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdmbG9hdC1sZWZ0IHRvcGljTmFtZSc+e3RvcGljLm5hbWV9PC9oND5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8QWN0aW9uQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY2NvcmRpb25LZXk9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRTZWxlY3RlZElkPXtzZXRTZWxlY3RlZElkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZElkPXtzZWxlY3RlZElkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eU5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvcGljPXt0b3BpY31cclxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlcj17dXNlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3RvcGljLmxvY2tlZCAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0IXVzZXIudW5Mb2NrZWRUb3BpY3MuaW5jbHVkZXModG9waWMuX2lkKSA/IG51bGwgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uQ29sbGFwc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudEtleT17dG9waWMubmFtZS5zcGxpdCgvXFxzLykuam9pbignJyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0b3BpYy52aWRlb3MubGVuZ3RoID4gMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IHRvcGljLnZpZGVvcy5tYXAoKHZpZGVvKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VmlkZW9OYW1lc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcGljPXt0b3BpY31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWRlbz17dmlkZW99XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHlOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHRvcGljLmFydGljbGVzICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgdG9waWMuYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QXJ0aWNsZU5hbWVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9waWM9e3RvcGljfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFydGljbGU9e2FydGljbGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHlOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0dG9waWNzOiBzdGF0ZS50b3BpYy50b3BpY3MsXHJcblx0dXNlcjogc3RhdGUuYXV0aC51c2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFRvcGljcywgZGVsZXRlVG9waWMgfSkoXHJcblx0VG9waWNzT3ZlcnZpZXdcclxuKTtcclxuXHJcbmNvbnN0IEFjdGlvbkJ1dHRvbnMgPSAoe1xyXG5cdGhhbmRsZURlbGV0ZSxcclxuXHR0b3BpYyxcclxuXHRzcGVjaWFsaXR5TmFtZSxcclxuXHRzZWxlY3RlZElkLFxyXG5cdHNldFNlbGVjdGVkSWQsXHJcblx0dXNlcixcclxufSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWN0aW9uLWJ1dHRvbnMnPlxyXG5cdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0dHlwZT0nRWRpdCdcclxuXHRcdFx0XHRkYXRhPXt0b3BpY31cclxuXHRcdFx0XHR1cmw9e2AvJHtzcGVjaWFsaXR5TmFtZX0vdG9waWMvZWRpdC8ke3RvcGljLl9pZH1gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QWRtaW5CdXR0b25zIHR5cGU9J0RlbGV0ZScgaGFuZGxlcj17aGFuZGxlRGVsZXRlfSBkYXRhPXt0b3BpY30gLz5cclxuXHRcdFx0PEFkbWluQnV0dG9ucyB0eXBlPSdBZGQnIGRhdGE9e3RvcGljfSB1cmw9e2AvdmlkZW8vYWRkLyR7dG9waWMuX2lkfWB9IC8+XHJcblx0XHRcdHt0b3BpYy5sb2NrZWQgJiYgIXVzZXIudW5Mb2NrZWRUb3BpY3MuaW5jbHVkZXModG9waWMuX2lkKSA/IChcclxuXHRcdFx0XHQ8TG9jayAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxBY2NvcmRpb24uVG9nZ2xlXHJcblx0XHRcdFx0XHRhcz17QnV0dG9ufVxyXG5cdFx0XHRcdFx0dmFyaWFudD0nbGluaydcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxvYXQtcmlnaHQgYXJyb3ctZG93bidcclxuXHRcdFx0XHRcdGV2ZW50S2V5PXt0b3BpYy5uYW1lLnNwbGl0KC9cXHMvKS5qb2luKCcnKX0gLy8gdG8gcmVtb3ZlIHNwYWNlc1xyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoc2VsZWN0ZWRJZCA9PT0gdG9waWMuX2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZCgnJyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZCh0b3BpYy5faWQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdDxzdmdcclxuXHRcdFx0XHRcdFx0aWQ9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfVxyXG5cdFx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMzIgMzInXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24gaWNvbi1jaGV2cm9uLWJvdHRvbSBhcnRpY2xlLWR3biBhcnRpY2xlLXRvZ2dsZSBmYS1hbmdsZS1kb3duICR7XHJcblx0XHRcdFx0XHRcdFx0dG9waWMuX2lkID09PSBzZWxlY3RlZElkID8gJ3JvdGF0ZScgOiAnJ1xyXG5cdFx0XHRcdFx0XHR9YH0+XHJcblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xNi4wMDMgMTguNjI2bDcuMDgxLTcuMDgxTDI1IDEzLjQ2bC04Ljk5NyA4Ljk5OC05LjAwMy05IDEuOTE3LTEuOTE2eicgLz5cclxuXHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcnRpY2xlUHJldmlldyBmcm9tICcuL0FydGljbGVQcmV2aWV3JztcclxuXHJcbmNvbnN0IFZpZGVvUHJldmlldyA9ICh7IHZpZGVvIH0pID0+IHtcclxuXHRjb25zb2xlLmxvZyh2aWRlbyk7XHJcblx0cmV0dXJuIHZpZGVvICYmICF2aWRlby5jb250ZW50ID8gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3ZpZGVvLWNvbnRhaW5lcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlbyc+XHJcblx0XHRcdFx0PGlmcmFtZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdpZnJhbWUnXHJcblx0XHRcdFx0XHRzcmM9e3ZpZGVvLnVybH1cclxuXHRcdFx0XHRcdHRpdGxlPSdZb3VUdWJlIHZpZGVvIHBsYXllcidcclxuXHRcdFx0XHRcdGZyYW1lQm9yZGVyPScwJ1xyXG5cdFx0XHRcdFx0YWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUnXHJcblx0XHRcdFx0XHRhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ndGl0bGUnPnt2aWRlby5uYW1lfTwvaDM+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Rlc2MnPnt2aWRlby5kZXNjcmlwdGlvbn08L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlua2VkLWFydGljbGVzJz5cclxuXHRcdFx0XHRcdDxoND5BcnRpY2xlcyBSZWxhdGVkIHRvIHRoZSB0b3BpYzwvaDQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KSA6IChcclxuXHRcdDxBcnRpY2xlUHJldmlldyBTZWxlY3RlZEFydGljbGU9e3ZpZGVvfSAvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0dmlkZW86IHN0YXRlLnZpZGVvLnNlbGVjdGVkVmlkZW8sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFZpZGVvUHJldmlldyk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmE5YzM0OTYxNmRjNzY5MWVmNjBhMzIwNzAzY2I3N2EuUE5HXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaHRtbC1wYXJzZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRpcHB5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbG9hZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcmVsb2FkIGZyb20gJ3JlbG9hZCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3NyYy9Sb3V0ZXMnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXJzIGZyb20gJy4vc3JjL3JlZHVjZXJzJztcclxuXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5cclxudmFyIGluZGV4ID0gZnMucmVhZEZpbGVTeW5jKCdidWlsZC9pbmRleC5odG1sJykudG9TdHJpbmcoKTtcclxuXHJcbi8vIGNvbnN0IHBhcnRzID0gaHRtbC5zcGxpdCgnPCEtLSBub3QgcmVuZGVyZWQgLS0+Jyk7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdidWlsZCcpKTtcclxuXHJcbmlmIChkZXYpIHJlbG9hZChhcHApO1xyXG5cclxuYXBwLnVzZShhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHRjb25zdCBicmFuY2ggPSBtYXRjaFBhdGgoUm91dGVzLCByZXEudXJsKTtcclxuXHRjb25zb2xlLmxvZygnYnJhbmNoJywgYnJhbmNoKTtcclxuXHRjb25zdCBwcm9taXNlcyA9IGJyYW5jaC5tYXAoKHsgcm91dGUgfSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2cocm91dGUpO1xyXG5cdFx0bGV0IGNvbXBvbmVudCA9IHJvdXRlLmNvbXBvbmVudDtcclxuXHRcdGNvbnNvbGUubG9nKGNvbXBvbmVudCk7XHJcblx0XHRsZXQgbG9hZERhdGEgPSBjb21wb25lbnQubG9hZERhdGE7XHJcblx0XHRyZXR1cm4gbG9hZERhdGEgaW5zdGFuY2VvZiBGdW5jdGlvblxyXG5cdFx0XHQ/IGxvYWREYXRhKHN0b3JlKVxyXG5cdFx0XHQ6IFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuXHR9KTtcclxuXHRQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc3QgcmVhY3RNYXJrdXAgPSAoXHJcblx0XHRcdDxSZWFjdC5TdHJpY3RNb2RlPlxyXG5cdFx0XHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cdFx0XHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17e319PlxyXG5cdFx0XHRcdFx0XHR7cmVuZGVyUm91dGVzKFJvdXRlcyl9XHJcblx0XHRcdFx0XHQ8L1N0YXRpY1JvdXRlcj5cclxuXHRcdFx0XHQ8L1Byb3ZpZGVyPlxyXG5cdFx0XHQ8L1JlYWN0LlN0cmljdE1vZGU+XHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKHJlYWN0TWFya3VwKTtcclxuXHJcblx0XHRsZXQgZmluYWxIdG1sID0gaW5kZXhcclxuXHRcdFx0LnJlcGxhY2UoJzxkaXYgaWQ9XCJyb290XCI+PC9kaXY+JywgYDxkaXYgaWQ9XCJyb290XCI+JHtodG1sfTwvZGl2PmApXHJcblx0XHRcdC5yZXBsYWNlKFxyXG5cdFx0XHRcdCcvL3NjcmlwdCcsXHJcblx0XHRcdFx0YHdpbmRvdy5fSU5JVElBTF9EQVRBXyA9ICR7c2VyaWFsaXplKHN0b3JlLmdldFN0YXRlKCkpfWBcclxuXHRcdFx0KTtcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyhmaW5hbEh0bWwpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3dvcmtpbmcnKTtcclxuXHRcdHJlcy5zZW5kKGZpbmFsSHRtbCk7XHJcblx0XHRyZXMuZW5kKCk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uICR7UE9SVH1gKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=