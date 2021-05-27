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
          (0, _react.useEffect)(() => {// store.dispatch(loadUser());
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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

            if (errors) { }

            dispatch({
              type: _types.SEND_RESET_EMAIL_FAIL
            });
          }
        };

        exports.sendResetEmail = sendResetEmail;

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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
            if (edit) editSpeciality(state, data._id); else addSpeciality(state);
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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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


        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        /***/
}),

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

        var _default = () => {
          const store = (0, _redux.createStore)(_reducers.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(...middleware)));
          return store;
        }; // const store = createStore(
        // 	rootReducer,
        // 	initialState,
        // 	applyMiddleware(...middleware)
        // 	// composeWithDevTools(applyMiddleware(...middleware))
        // );
        // export default store;


        exports.default = _default;

        /***/
}),

/***/ "./src/assets/img/cgTransparent.PNG":
/*!******************************************!*\
  !*** ./src/assets/img/cgTransparent.PNG ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
          /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6a9c349616dc7691ef60a320703cb77a.PNG");

        /***/
}),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

        module.exports = require("axios");;

        /***/
}),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

        module.exports = require("express");;

        /***/
}),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

        module.exports = require("framer-motion");;

        /***/
}),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

        module.exports = require("fs");;

        /***/
}),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

        module.exports = require("moment");;

        /***/
}),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

        module.exports = require("react");;

        /***/
}),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

        module.exports = require("react-bootstrap");;

        /***/
}),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

        module.exports = require("react-dom/server");;

        /***/
}),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

        module.exports = require("react-helmet");;

        /***/
}),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/***/ ((module) => {

        module.exports = require("react-html-parser");;

        /***/
}),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

        module.exports = require("react-redux");;

        /***/
}),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

        module.exports = require("react-router-dom");;

        /***/
}),

/***/ "react-tippy":
/*!******************************!*\
  !*** external "react-tippy" ***!
  \******************************/
/***/ ((module) => {

        module.exports = require("react-tippy");;

        /***/
}),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

        module.exports = require("react-toastify");;

        /***/
}),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

        module.exports = require("redux");;

        /***/
}),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

        module.exports = require("redux-devtools-extension");;

        /***/
}),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

        module.exports = require("redux-thunk");;

        /***/
}),

/***/ "reload":
/*!*************************!*\
  !*** external "reload" ***!
  \*************************/
/***/ ((module) => {

        module.exports = require("reload");;

        /***/
}),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

        module.exports = require("serialize-javascript");;

        /***/
})

    /******/
});
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
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
    /******/
})();
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

  /******/
})()
  ;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvUm91dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3NwZWNpYWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy90b2FzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3RvcGljLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy91aS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3ZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9BZGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0NoZXZyb25zLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9Dcm9zcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaWNvbnMvRGVsZXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9Mb2NrLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9SZWFkLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0Jsb2cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvTGVhcm4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9QcmV2aWV3LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVXBzZXJ0QXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9VcHNlcnRUb3BpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydFZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvUHJpdmF0ZVJvdXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvU2VvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9zZXRBdXRoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0J1dHRvbnMvVXNlckJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0J1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL05hdmJhci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL1NpZ25lZEluTGlua3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L05hdmJhci9TaWduZWRPdXRMaW5rcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvbGF5b3V0L3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy9hcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvc3BlY2lhbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy90b3BpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy91aS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy92aWRlby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9hYm91dC9BYm91dFVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Fib3V0L1F1ZXN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ibG9nL0FsbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ibG9nL0ZlYXR1cmVkLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Jsb2cvTGF0ZXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2VkaXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ob21lL0hlcm8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvaG9tZS9IZXJvQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvbGVhcm4vQXJ0aWNsZU5hbWVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2xlYXJuL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvbGVhcm4vVmlkZW9OYW1lcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9wcmV2aWV3L0FydGljbGVQcmV2aWV3LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL3ByZXZpZXcvVG9waWNzT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvcHJldmlldy9WaWRlb1ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ltZy9jZ1RyYW5zcGFyZW50LlBORyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWh0bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtdGlwcHlcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVsb2FkXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiaXNDbGllbnQiLCJsb2NhbFN0b3JhZ2UiLCJ0b2tlbiIsIkFwcCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXMiLCJtYXAiLCJwYXRoIiwiY29tcG9uZW50IiwicmVuZGVyIiwiSG9tZSIsIkFib3V0IiwiTGVhcm4iLCJBcnRpY2xlIiwiUHJldmlldyIsIkJsb2ciLCJwcm9wcyIsImNsZWFyQXJ0aWNsZSIsImlkIiwiZGlzcGF0Y2giLCJ0eXBlIiwiZ2V0QXJ0aWNsZSIsInJlcyIsImRhdGEiLCJwYXlsb2FkIiwiZXJyb3IiLCJnZXRBbGxBcnRpY2xlcyIsInN0YXR1cyIsImFkZEFydGljbGUiLCJlZGl0QXJ0aWNsZSIsInNwZWNpYWxpdHlOYW1lIiwicmVzMiIsImRlbGV0ZUFydGljbGUiLCJhcnRpY2xlSWQiLCJ0b3BpY0lkIiwibG9hZFVzZXIiLCJ1c2VySWQiLCJnZXRJdGVtIiwiVVNFUl9MT0FERUQiLCJ1c2VyIiwiZXJyIiwiQVVUSF9FUlJPUiIsInJlZnJlc2hVc2VyIiwicmVnaXN0ZXIiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJSRUdJU1RFUl9TVUNDRVNTIiwiUkVHSVNURVJfRkFJTCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMIiwibG9nb3V0IiwiY2xlYXIiLCJzZW5kUmVzZXRFbWFpbCIsImNvbmZpZyIsIm1lc3NhZ2VzQXJyYXkiLCJtZXNzYWdlcyIsImZvckVhY2giLCJtZXNzYWdlIiwibXNnIiwiU0VORF9SRVNFVF9FTUFJTCIsImVycm9ycyIsInJlc3BvbnNlIiwiU0VORF9SRVNFVF9FTUFJTF9GQUlMIiwiZ2V0U3BlY2lhbGl0aWVzIiwiY2xlYXJTcGVjaWFsaXR5IiwiZ2V0U3BlY2lhbGl0eSIsInNwZWNpYWxpdHkiLCJhZGRTcGVjaWFsaXR5IiwiZWRpdFNwZWNpYWxpdHkiLCJkZWxldGVTcGVjaWFsaXR5Iiwic3VjY2Vzc1RvYXN0IiwidG9hc3QiLCJzdWNjZXNzIiwicG9zaXRpb24iLCJlcnJvclRvYXN0IiwiZ2V0VG9waWNzIiwiYWRkVG9waWMiLCJlZGl0VG9waWMiLCJ1bmxvY2tUb3BpYyIsImRlbGV0ZVRvcGljIiwiU0VUX0FMRVJUIiwiUkVNT1ZFX0FMRVJUIiwiTE9HT1VUIiwic2V0T3BlblRvcGljcyIsIm9wZW5Ub3BpY3NBcnJheSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJ1aSIsIm9wZW5Ub3BpY3MiLCJpbmNsdWRlcyIsInB1c2giLCJzcGxpY2UiLCJpbmRleE9mIiwic2V0RGlzcGxheU1vZGUiLCJkaXNwbGF5TW9kZSIsInNldEl0ZW0iLCJnZXRWaWRlbyIsImFkZFZpZGVvIiwicmVzVG9waWMiLCJlZGl0VmlkZW8iLCJkZWxldGVWaWRlbyIsInZpZGVvSWQiLCJzZWxlY3RWaWRlbyIsInZpZGVvIiwiQWRkIiwic2l6ZSIsImNvbG9yIiwiQ2hldnJvbnNVcCIsIkNoZXZyb25zTGVmdCIsIkNyb3NzIiwiRGVsZXRlIiwiTG9jayIsImhhbmRsZXIiLCJVbmxvY2siLCJSZWFkIiwiVXBkYXRlIiwib3BhY2l0eSIsInRleHRBbGlnbiIsIm5hbWUiLCJtYXRjaCIsInBhcmFtcyIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwiZ2V0QXJ0aWNsZUVmZmVjdCIsInJlcGxhY2UiLCJnb1RvVG9wIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImh0bWwiLCJjb250ZW50IiwicGFkZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiYXV0aCIsIkF1dGgiLCJzZXREYXRhIiwiZGluVGV4dCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcmV2IiwidGFyZ2V0IiwidmFsdWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFnZSIsImNvZGVSZWZmZXJlZCIsImFydGljbGVzIiwiaXNBZG1pbiIsImxlbmd0aCIsImZvbnRGYW1pbHkiLCJsb2FkRGF0YSIsImhvbWVDb250ZW50IiwiY2xvc2UiLCJzZXRDbG9zZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJmb250U2l6ZSIsIlVwc2VydEFydGljbGUiLCJzcGVjaWFsaXRpZXMiLCJwcmV2QXJ0aWNsZSIsInNldGNvbnRlbnQiLCJzZXRuYW1lIiwia2V5d29yZHMiLCJzZXRBcnRpY2xlS2V5d29yZHMiLCJmZWF0dXJlZCIsInNldGZlYXR1cmVkIiwidGh1bWJuYWlsVXJsIiwic2V0dGh1bWJuYWlsVXJsIiwic2Nyb2xsVG8iLCJlbGVtZW50Iiwid2luZG93Iiwic2Nyb2xsIiwiYmVoYXZpb3IiLCJsZWZ0IiwidG9wIiwib2Zmc2V0VG9wIiwiZWRpdCIsImhhbmRsZUVkaXRvciIsImhhbmRsZUVkaXQiLCJfaWQiLCJOYW1lIiwiaGFuZGxlQWRkIiwic2VsZWN0ZWRBcnRpY2xlIiwiVXBzZXJ0Q2FyZCIsInNldFN0YXRlIiwiZmV0Y2hEYXRhIiwiaW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJVcHNlcnRUb3BpYyIsImxvY2F0aW9uIiwibG9ja2VkIiwiaXNMb2NrZWQiLCJzcGVjaWFsaXR5SWQiLCJVcHNlcnRWaWRlbyIsInByZXZWaWRlbyIsInNldE5hbWUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidXJsIiwic2V0VXJsIiwic2VsZWN0ZWRWaWRlbyIsIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJTZW8iLCJ0aXRsZSIsImxhbmciLCJtZXRhIiwicmljaHJlc3VsdCIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsInByb3BlcnR5IiwiY29uY2F0IiwicmVsIiwiaHJlZiIsImlubmVySFRNTCIsInNlcnZpY2VQb3N0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInBvc3QiLCJTRVJWSUNFX1VSTCIsInRoZW4iLCJjYXRjaCIsInNlcnZpY2VHZXQiLCJnZXQiLCJzZXRBdXRoVG9rZW4iLCJkZWZhdWx0cyIsImNvbW1vbiIsIlRvb2x0aXBXcmFwcGVyIiwiY2hpbGRyZW4iLCJBZG1pbkJ1dHRvbnMiLCJBZG1pbkJ1dHRvbnNXcmFwcGVyIiwicGF0aG5hbWUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwib3V0bGluZSIsIklubmVyRGl2IiwiZGFyayIsImJnIiwiYmFja2dyb3VuZENvbG9yIiwiQnV0dG9uIiwiaXNCdXR0b24iLCJMb2NrQnV0dG9uIiwiRm9vdGVyU29jaWFsTWVkaWEiLCJGb290ZXIiLCJzZXRFbWFpbCIsInNldE1lc3NhZ2UiLCJzZXRGb290ZXJNZXNzYWdlIiwiTmF2YmFyIiwibmF2YmFyRXhwYW5kZWQiLCJzZXRuYXZiYXJFeHBhbmRlZCIsInN3aXRjaGVkIiwic2V0c3dpdGNoZWQiLCJtb2RlIiwicmVtb3ZlIiwiaW5uZXJIZWlnaHQiLCJMb2dvIiwid2lkdGgiLCJwb2ludHMiLCJTaWduZWRJbkxpbmtzIiwiU2lnbmVkT3V0TGlua3MiLCJQcmVsb2FkZXIiLCJpbml0aWFsU3RhdGUiLCJhcnRpY2xlUmVkdWNlciIsImFjdGlvbiIsInRvcGljcyIsImxvYWRpbmciLCJhdXRoUmVkdWNlciIsInJvbGUiLCJyZW1vdmVJdGVtIiwidG9waWMiLCJzcGVjaWFsaXR5UmVkdWNlciIsInRvcGljUmVkdWNlciIsInVpUmVkdWNlciIsInZpZGVvUmVkdWNlciIsIlByb2ZpbGVDYXJkIiwiYmlvIiwicG9ydGZvbGlvVXJsIiwiaW5zdGFVcmwiLCJ0d2l0dGVyVXJsIiwiZ2l0aHViVXJsIiwiQWJvdXRVcyIsIm9uc2Nyb2xsIiwibXlGdW5jdGlvbiIsInNjcm9sbFkiLCJRdWVzdGlvbnMiLCJBbGwiLCJBcnRpY2xlSWQiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJGZWF0dXJlZCIsIkxhdGVzdCIsIkhlcm8iLCJIZXJvQ2FyZHMiLCJoZXJvQmx1ZSIsImhlcm9PcmFuZ2UiLCJoZXJvR3JlZW4iLCJzY3JvbGxGdW5jdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiaW5uZXJXaWR0aCIsInNldFRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQXJ0aWNsZU5hbWVzIiwiaGFuZGxlRGVsZXRlIiwiQXJ0aWNsZU5hbWUiLCJjb25maXJtIiwicHJvbXB0IiwicG9zIiwiQ2FyZCIsIml0ZW0iLCJhbHQiLCJWaWRlb05hbWVzIiwiVmlkZW9OYW1lIiwiQXJ0aWNsZVByZXZpZXciLCJTZWxlY3RlZEFydGljbGUiLCJSZWFkTW9yZVVybCIsImhhbmRsZVVubG9jayIsIlRvcGljc092ZXJ2aWV3Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJzcGxpdCIsImpvaW4iLCJ1bkxvY2tlZFRvcGljcyIsInZpZGVvcyIsIkFjdGlvbkJ1dHRvbnMiLCJWaWRlb1ByZXZpZXciLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJyb290UmVkdWNlciIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiaW5kZXgiLCJmcyIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwiYXBwIiwiZGV2IiwidXNlIiwiZXhwcmVzcyIsInN0YXRpYyIsInJlcSIsImFjdGl2ZVJvdXRlIiwiZmluZCIsInJvdXRlIiwicHJvbWlzZSIsInJlYWN0TWFya3VwIiwiZmluYWxIdG1sIiwic2VuZCIsImVuZCIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJQSwwQkFBWUMsWUFBWSxDQUFDQyxLQUE3QixFQUFvQztBQUNuQyxrQ0FBYUQsWUFBWSxDQUFDQyxLQUExQjtBQUNBOztBQUVELE1BQU1DLEdBQUcsR0FBRyxNQUFNO0FBQ2pCLHdCQUFVLE1BQU0sQ0FDZjtBQUNBLEdBRkQsRUFFRyxFQUZIO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyw2QkFBQyxlQUFELE9BREQsZUFFQyw2QkFBQyw2QkFBRCxxQkFDQyw2QkFBQyxzQkFBRCxxQkFDQyw2QkFBQyxxQkFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBQztBQUFs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LENBQUNDLEdBQVIsQ0FBYSxnQkFBZWtWLElBQUssRUFBakMsQ0FBdkIsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgUmVkaXJlY3QsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gJy4vYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IHNldEF1dGhUb2tlbiwgaXNDbGllbnQgfSBmcm9tICcuL2hlbHBlcnMvc2V0QXV0aFRva2VuJztcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL1JvdXRlcyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbGF5b3V0L05hdmJhci9OYXZiYXInO1xuXG5pZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnRva2VuKSB7XG5cdHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2UudG9rZW4pO1xufVxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gc3RvcmUuZGlzcGF0Y2gobG9hZFVzZXIoKSk7XG5cdH0sIFtdKTtcblx0Y29uc29sZS5sb2coJ2FwcCwgY2hlY2tpbmcgd29ya2luZycpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxuXHRcdFx0PE5hdmJhciAvPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nLyc+XG5cdFx0XHRcdFx0XHQ8UmVkaXJlY3QgdG89Jy9ob21lJyAvPlxuXHRcdFx0XHRcdDwvUm91dGU+XG5cdFx0XHRcdFx0e3JvdXRlcy5tYXAoKHsgcGF0aCwgY29tcG9uZW50LCByZW5kZXIgfSkgPT4gKFxuXHRcdFx0XHRcdFx0PFJvdXRlXG5cdFx0XHRcdFx0XHRcdGtleT17cGF0aH1cblx0XHRcdFx0XHRcdFx0cGF0aD17cGF0aH1cblx0XHRcdFx0XHRcdFx0ZXhhY3Rcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50PXtjb21wb25lbnR9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17cmVuZGVyfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxUb2FzdENvbnRhaW5lciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXQnO1xuaW1wb3J0IExlYXJuIGZyb20gJy4vY29tcG9uZW50cy9MZWFybic7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aWNsZSc7XG5pbXBvcnQgUHJldmlldyBmcm9tICcuL2NvbXBvbmVudHMvUHJldmlldyc7XG5pbXBvcnQgQmxvZyBmcm9tICcuL2NvbXBvbmVudHMvQmxvZyc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL2NvbXBvbmVudHMvQXV0aCc7XG5pbXBvcnQgVXBzZXJ0Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0Q2FyZCc7XG5pbXBvcnQgVXBzZXJ0VG9waWMgZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydFRvcGljJztcbmltcG9ydCBVcHNlcnRBcnRpY2xlIGZyb20gJy4vY29tcG9uZW50cy9VcHNlcnRBcnRpY2xlJztcbmltcG9ydCBVcHNlcnRWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0VmlkZW8nO1xuLy8gaW1wb3J0IFByaXZhdGVSb3V0ZSBmcm9tICcuL2hlbHBlcnMvUHJpdmF0ZVJvdXRlJztcblxuY29uc3Qgcm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogJy9ob21lJyxcblx0XHRjb21wb25lbnQ6IEhvbWUsXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnL2Fib3V0Jyxcblx0XHRjb21wb25lbnQ6IEFib3V0LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogJy9sZWFybicsXG5cdFx0Y29tcG9uZW50OiBMZWFybixcblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvYmxvZy9yZWFkLzpuYW1lJyxcblx0XHRjb21wb25lbnQ6IEFydGljbGUsXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnL2xlYXJuLzpzcGVjaWFsaXR5TmFtZScsXG5cdFx0Y29tcG9uZW50OiBQcmV2aWV3LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogJy9ibG9nJyxcblx0XHQuLi5CbG9nLFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogJy9zaWdudXAnLFxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8QXV0aCB7Li4ucHJvcHN9IHR5cGU9eydzaWdudXAnfSAvPixcblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvc2lnbnVwLzpyZWZlckNvZGUnLFxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8QXV0aCB7Li4ucHJvcHN9IHR5cGU9eydzaWdudXAnfSAvPixcblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvbG9naW4nLFxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8QXV0aCB7Li4ucHJvcHN9IHR5cGU9eydsb2dpbid9IC8+LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogJy9BZGRDYXJkJyxcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydENhcmQgZWRpdD17ZmFsc2V9IHsuLi5wcm9wc30gLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnL3VwZGF0ZXNwZWNpYWxpdHkvOnNwZWNpYWxpdHlOYW1lJyxcblx0XHRyZW5kZXI6IChwcm9wcykgPT4gPFVwc2VydENhcmQgZWRpdD17dHJ1ZX0gey4uLnByb3BzfSAvPixcblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvOnNwZWNpYWxpdHlOYW1lL3RvcGljL2FkZCcsXG5cdFx0cmVuZGVyOiAocHJvcHMpID0+IDxVcHNlcnRUb3BpYyBlZGl0PXtmYWxzZX0gey4uLnByb3BzfSAvPixcblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvOnNwZWNpYWxpdHlOYW1lL3RvcGljL2VkaXQvOnRvcGljSWQnLFxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0VG9waWMgZWRpdD17dHJ1ZX0gey4uLnByb3BzfSAvPixcblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvYXJ0aWNsZS9hZGQnLFxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0QXJ0aWNsZSBlZGl0PXtmYWxzZX0gey4uLnByb3BzfSAvPixcblx0fSxcblx0e1xuXHRcdHBhdGg6ICcvYXJ0aWNsZS91cGRhdGUnLFxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0QXJ0aWNsZSBlZGl0PXt0cnVlfSB7Li4ucHJvcHN9IC8+LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogJy92aWRlby9hZGQvOnRvcGljSWQnLFxuXHRcdHJlbmRlcjogKHByb3BzKSA9PiA8VXBzZXJ0VmlkZW8gZWRpdD17ZmFsc2V9IHsuLi5wcm9wc30gLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiAnL3ZpZGVvL3VwZGF0ZS86dmlkZW9JZCcsXG5cdFx0cmVuZGVyOiAocHJvcHMpID0+IDxVcHNlcnRWaWRlbyBlZGl0PXt0cnVlfSB7Li4ucHJvcHN9IC8+LFxuXHR9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwiaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xuZXhwb3J0IGNvbnN0IGNsZWFyQXJ0aWNsZSA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQ0xFQVJfQVJUSUNMRScsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFydGljbGUgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hcnRpY2xlL2dldC8ke2lkfWApO1xuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdHRVRfQVJUSUNMRScsXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvclRvYXN0KGVycm9yKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdHRVRfQVJUSUNMRV9FUlJPUicsXG4gICAgICBwYXlsb2FkOiB7fSxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbEFydGljbGVzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL2FydGljbGUvYWxsYCk7XG4gICAgY29uc29sZS5sb2cocmVzLnN0YXR1cylcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdHRVRfQUxMX0FSVElDTEVTJyxcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9yVG9hc3QoZXJyb3IpXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0dFVF9BTExfQVJUSUNMRVNfRVJST1InLFxuICAgICAgcGF5bG9hZDoge30sXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRBcnRpY2xlID0gKGRhdGEpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS9hcnRpY2xlL2FkZGAsIGRhdGEsIHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdBRERfQVJUSUNMRScsXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcbiAgICB9KTtcbiAgICBzdWNjZXNzVG9hc3QocmVzKVxuICAgIC8vIGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzMi5kYXRhKTtcblxuICAgIC8vIGRpc3BhdGNoKHtcbiAgICAvLyAgIHR5cGU6ICdHRVRfVE9QSUNTJyxcbiAgICAvLyAgIHBheWxvYWQ6IHJlczIuZGF0YSxcbiAgICAvLyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvclRvYXN0KGVycm9yKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdBRERfQVJUSUNMRV9FUlJPUicsXG4gICAgICBwYXlsb2FkOiB7fSxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRBcnRpY2xlID0gKGRhdGEsIGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS9hcnRpY2xlL3VwZGF0ZS8ke2lkfWAsIGRhdGEsIHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdFRElUX0FSVElDTEUnLFxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXG4gICAgfSk7XG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcbiAgICBjb25zb2xlLmxvZyhyZXMyLmRhdGEpO1xuXG4gICAgc3VjY2Vzc1RvYXN0KHJlcylcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdHRVRfVE9QSUNTJyxcbiAgICAgIHBheWxvYWQ6IHJlczIuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvclRvYXN0KGVycm9yKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdFRElUX0FSVElDTEVfRVJST1InLFxuICAgICAgcGF5bG9hZDoge30sXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBcnRpY2xlID0gKGFydGljbGVJZCwgdG9waWNJZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChcbiAgZGlzcGF0Y2hcbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxuICAgICAgYGFwaS9hcnRpY2xlL2RlbGV0ZS8ke2FydGljbGVJZH0vJHt0b3BpY0lkfWAsXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnREVMRVRFX0FSVElDTEUnLFxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXG4gICAgfSk7XG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcbiAgICBjb25zb2xlLmxvZyhyZXMyLmRhdGEpO1xuXG4gICAgc3VjY2Vzc1RvYXN0KHJlcylcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdHRVRfVE9QSUNTJyxcbiAgICAgIHBheWxvYWQ6IHJlczIuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvclRvYXN0KGVycm9yKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdERUxFVEVfQVJUSUNMRV9FUlJPUicsXG4gICAgICBwYXlsb2FkOiB7fSxcbiAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7XG5cdFJFR0lTVEVSX1NVQ0NFU1MsXG5cdFJFR0lTVEVSX0ZBSUwsXG5cdExPR0lOX1NVQ0NFU1MsXG5cdExPR0lOX0ZBSUwsXG5cdFVTRVJfTE9BREVELFxuXHRBVVRIX0VSUk9SLFxuXHRTRU5EX1JFU0VUX0VNQUlMLFxuXHRTRU5EX1JFU0VUX0VNQUlMX0ZBSUwsXG59IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCwgc2V0QXV0aFRva2VuLCBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XG5cbi8vIExvYWQgVXNlciA6IEV2ZXJ5IHRpbWUgd2UgbG9nZ2VkIGluIG9yIHJlZ2lzdGVyIG9yIHJlZnJlc2ggdGhlIHBhZ2UgaXRzIGdvbm5hIGxvYWQuXG5cbmV4cG9ydCBjb25zdCBsb2FkVXNlciA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRkaXNwYXRjaCh7XG5cdFx0dHlwZTogJ1NFVF9BVVRIX0xPQURFUicsXG5cdH0pO1xuXHRpZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnRva2VuKSB7XG5cdFx0c2V0QXV0aFRva2VuKGxvY2FsU3RvcmFnZS50b2tlbik7XG5cdH1cblxuXHRpZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnVzZXJJZCkge1xuXHRcdGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXV0aC91c2VyLyR7dXNlcklkfWApO1xuXHRcdFx0Ly8gZGlzcGxheVRvYXN0XG5cdFx0XHRzdWNjZXNzVG9hc3QocmVzKTtcblxuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiBVU0VSX0xPQURFRCxcblx0XHRcdFx0cGF5bG9hZDogcmVzLmRhdGEudXNlcixcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Ly8gZGlzcGxheSB0b2FzdFxuXHRcdFx0ZXJyb3JUb2FzdChlcnIpO1xuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiBBVVRIX0VSUk9SLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgcmVmcmVzaFVzZXIgPSAodXNlcikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiAnU0VUX0FVVEhfTE9BREVSJyxcblx0fSk7XG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudG9rZW4pIHtcblx0XHRzZXRBdXRoVG9rZW4obG9jYWxTdG9yYWdlLnRva2VuKTtcblx0fVxuXG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudXNlcklkKSB7XG5cdFx0Y29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdC8vIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hdXRoL3VzZXIvJHt1c2VySWR9YCk7XG5cdFx0XHRhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXV0aC91c2VyLyR7dXNlcklkfWApO1xuXG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6IFVTRVJfTE9BREVELFxuXHRcdFx0XHRwYXlsb2FkOiB1c2VyLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6IEFVVEhfRVJST1IsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IChkYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0ZGlzcGF0Y2goe1xuXHRcdHR5cGU6ICdTRVRfQVVUSF9MT0FERVInLFxuXHR9KTtcblx0Y29uc3QgaGVhZGVycyA9IHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHR9O1xuXG5cdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCdhcGkvYXV0aC9zaWdudXAnLCBib2R5LCBoZWFkZXJzKTtcblxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IHJlcy5zdGF0dXMgPT09IDEgPyBSRUdJU1RFUl9TVUNDRVNTIDogUkVHSVNURVJfRkFJTCxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcyk7XG5cblx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdGRpc3BhdGNoKGxvYWRVc2VyKCkpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBjb25zdCBlcnJvcnMgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG5cdFx0ZXJyb3JUb2FzdChlcnIpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IFJFR0lTVEVSX0ZBSUwsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9XG5cdCh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PlxuXHRhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnU0VUX0FVVEhfTE9BREVSJyxcblx0XHR9KTtcblx0XHRjb25zdCBoZWFkZXJzID0ge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9O1xuXG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCdhcGkvYXV0aC9sb2dpbicsIGJvZHksIGhlYWRlcnMpO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6IHJlcy5zdGF0dXMgPT09IDEgPyBMT0dJTl9TVUNDRVNTIDogTE9HSU5fRkFJTCxcblx0XHRcdFx0cGF5bG9hZDogeyB1c2VySWQ6IHJlcy5kYXRhPy51c2VyPy51c2VySWQsIHRva2VuOiByZXMuZGF0YT8udG9rZW4gfSxcblx0XHRcdH0pO1xuXG5cdFx0XHRkaXNwYXRjaChsb2FkVXNlcigpKTtcblx0XHRcdHN1Y2Nlc3NUb2FzdChyZXMpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdGVycm9yVG9hc3QoZXJyKTtcblx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogTE9HSU5fRkFJTCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuXHRpZiAoaXNDbGllbnQpIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRkaXNwYXRjaCh7XG5cdFx0dHlwZTogJ0xPR09VVCcsXG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRSZXNldEVtYWlsID1cblx0KHsgZW1haWwgfSkgPT5cblx0YXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3QgY29uZmlnID0ge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IGVtYWlsIH0pO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KCcvYXBpL2ZvcmdvdHBhc3N3b3JkJywgYm9keSwgY29uZmlnKTtcblxuXHRcdFx0Y29uc3QgbWVzc2FnZXNBcnJheSA9IHJlcy5kYXRhLm1lc3NhZ2VzO1xuXHRcdFx0Ly8gYnJhbmQgYWRkZWQgbWVzc2FnZSBhbGVydFxuXHRcdFx0bWVzc2FnZXNBcnJheS5mb3JFYWNoKChtZXNzYWdlKSA9PiBkaXNwYXRjaCgobWVzc2FnZS5tc2csICdkYW5nZXInKSkpO1xuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiBTRU5EX1JFU0VUX0VNQUlMLFxuXHRcdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc3QgZXJyb3JzID0gZXJyICYmIGVyci5yZXNwb25zZS5kYXRhLmVycm9ycztcblx0XHRcdGlmIChlcnJvcnMpIHtcblx0XHRcdH1cblx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogU0VORF9SRVNFVF9FTUFJTF9GQUlMLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hcnRpY2xlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aCc7XG5leHBvcnQgKiBmcm9tICcuL3NwZWNpYWxpdHknO1xuZXhwb3J0ICogZnJvbSAnLi90b3BpYyc7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vdWknO1xuZXhwb3J0ICogZnJvbSAnLi92aWRlbyc7XG4iLCJpbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XG5cbmV4cG9ydCBjb25zdCBnZXRTcGVjaWFsaXRpZXMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KCdhcGkvc3BlY2lhbGl0eS9hbGwnKTtcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFU19FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyU3BlY2lhbGl0eSA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRkaXNwYXRjaCh7XG5cdFx0dHlwZTogJ0NMRUFSX1NQRUNJQUxJVFknLFxuXHRcdHBheWxvYWQ6IHt9LFxuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTcGVjaWFsaXR5ID0gKHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvc3BlY2lhbGl0eS9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVFknLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEuc3BlY2lhbGl0eSxcblx0XHR9KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUWV9FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGFkZFNwZWNpYWxpdHkgPSAoZGF0YSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJ2FwaS9zcGVjaWFsaXR5L2FkZCcsIGRhdGEsIHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdBRERfU1BFQ0lBTElUSVknLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoJ2FwaS9zcGVjaWFsaXR5L2FsbCcpO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcblx0XHR9KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0FERF9TUEVDSUFMSVRZX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFNwZWNpYWxpdHkgPSAoZGF0YSwgaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvc3BlY2lhbGl0eS91cGRhdGUvJHtpZH1gLCBkYXRhLCB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0pO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdFRElUX1NQRUNJQUxJVElZJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KCdhcGkvc3BlY2lhbGl0eS9hbGwnKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFUycsXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXG5cdFx0fSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdFRElUX1NQRUNJQUxJVFlfRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTcGVjaWFsaXR5ID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcblx0XHRcdGBhcGkvc3BlY2lhbGl0eS9kZWxldGUvJHtpZH1gLFxuXHRcdFx0e30sXG5cdFx0XHR7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnREVMRVRFX1NQRUNJQUxJVElZJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KCdhcGkvc3BlY2lhbGl0eS9hbGwnKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1NQRUNJQUxJVElFUycsXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXG5cdFx0fSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdERUxFVEVfU1BFQ0lBTElUWV9FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcbiIsImltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5cbmV4cG9ydCBjb25zdCBzdWNjZXNzVG9hc3QgPSAocmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cyA9PSAxID8gdG9hc3Quc3VjY2VzcyhyZXMubWVzc2FnZSwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICB9KSA6IHRvYXN0LmVycm9yKHJlcy5tZXNzYWdlLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgZXJyb3JUb2FzdCA9IChlcnIpID0+IHtcbiAgICB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcblxuZXhwb3J0IGNvbnN0IGdldFRvcGljcyA9IChzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1NfRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRUb3BpYyA9IChkYXRhLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnNvbGUubG9nKHNwZWNpYWxpdHlOYW1lKTtcblx0dHJ5IHtcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3RvcGljL2FkZGAsIGRhdGEsIHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0FERF9UT1BJQycsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0XHQvLyByZWZyZXNoIHRvcGljc1xuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0FERF9UT1BJQ19FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRUb3BpYyA9IChkYXRhLCBpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvdG9waWMvdXBkYXRlLyR7aWR9YCwgZGF0YSwge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0VESVRfVE9QSUMnLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdFRElUX1RPUElDX0VSUk9SJyxcblx0XHRcdHBheWxvYWQ6IHt9LFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgdW5sb2NrVG9waWMgPSAodG9waWNJZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRjb25zb2xlLmxvZyhzcGVjaWFsaXR5TmFtZSk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoXG5cdFx0XHRgYXBpL3RvcGljL3VubG9jay8ke3RvcGljSWR9YCxcblx0XHRcdHt9LFxuXHRcdFx0e1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnVVNFUkxPQURFRCcsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YS51c2VyLFxuXHRcdH0pO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdVTkxPQ0tfVE9QSUMnLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcblxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdVTkxPQ0tfVE9QSUNfRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUb3BpYyA9IChpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRjb25zb2xlLmxvZyh7IGlkLCBzcGVjaWFsaXR5TmFtZSB9KTtcblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcblx0XHRcdGBhcGkvdG9waWMvZGVsZXRlLyR7aWR9YCxcblx0XHRcdHt9LFxuXHRcdFx0e1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0RFTEVURV9UT1BJQycsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdERUxFVEVfVE9QSUNfRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG4iLCJleHBvcnQgY29uc3QgU0VUX0FMRVJUID0gJ1NFVF9BTEVSVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0FMRVJUID0gJ1JFTU9WRV9BTEVSVCc7XG5cbmV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTID0gJ0xPR0lOX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUwgPSAnTE9HSU5fRkFJTCc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfU1VDQ0VTUyA9ICdSRUdJU1RFUl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GQUlMID0gJ1JFR0lTVEVSX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IFNFTkRfUkVTRVRfRU1BSUwgPSAnU0VORF9SRVNFVF9FTUFJTCc7XG5leHBvcnQgY29uc3QgU0VORF9SRVNFVF9FTUFJTF9GQUlMID0gJ1NFTkRfUkVTRVRfRU1BSUxfRkFJTCc7XG5cbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfTE9BREVEID0gJ1VTRVJMT0FERUQnO1xuZXhwb3J0IGNvbnN0IEFVVEhfRVJST1IgPSAnQVVUSF9FUlJPUic7XG4iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IHNldE9wZW5Ub3BpY3MgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHRjb25zb2xlLmxvZyhpZCk7XG5cdGNvbnN0IG9wZW5Ub3BpY3NBcnJheSA9IHN0b3JlLmdldFN0YXRlKCkudWkub3BlblRvcGljcztcblx0aWYgKCFvcGVuVG9waWNzQXJyYXkuaW5jbHVkZXMoaWQpKSB7XG5cdFx0b3BlblRvcGljc0FycmF5LnB1c2goaWQpO1xuXHR9IGVsc2Uge1xuXHRcdG9wZW5Ub3BpY3NBcnJheS5zcGxpY2Uob3BlblRvcGljc0FycmF5LmluZGV4T2YoaWQpLCAxKTtcblx0fVxuXG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiAnU0VUX09QRU5fVE9QSUNTJyxcblx0XHRwYXlsb2FkOiBvcGVuVG9waWNzQXJyYXksXG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldERpc3BsYXlNb2RlID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnN0IGRpc3BsYXlNb2RlID1cblx0XHRzdG9yZS5nZXRTdGF0ZSgpLnVpLmRpc3BsYXlNb2RlID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnO1xuXHRpZiAoaXNDbGllbnQpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb2RlJywgZGlzcGxheU1vZGUpO1xuXG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiAnU0VUX0RJU1BMQVlfTU9ERScsXG5cdFx0cGF5bG9hZDogZGlzcGxheU1vZGUsXG5cdH0pO1xufTtcbiIsImltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcblxuXG5cbmV4cG9ydCBjb25zdCBnZXRWaWRlbyA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL3ZpZGVvL2dldC8ke2lkfWApO1xuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9WSURFTycsXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdBRERfVklERU9fRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRWaWRlbyA9IChkYXRhLCBpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXG5cblx0dHJ5IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3ZpZGVvL2FkZC8ke2lkfWAsIGRhdGEsIHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnQUREX1ZJREVPJyxcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgcmVzVG9waWMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XG5cdFx0Y29uc29sZS5sb2cocmVzVG9waWMpO1xuXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxuXHRcdFx0cGF5bG9hZDogcmVzVG9waWMuZGF0YSxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0FERF9WSURFT19FUlJPUicsXG5cdFx0XHRwYXlsb2FkOiB7fSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRWaWRlbyA9IChkYXRhLCBpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvdmlkZW8vdXBkYXRlLyR7aWR9YCwgZGF0YSwge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0VESVRfVklERU8nLFxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXG5cdFx0fSk7XG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcblxuXHRcdGNvbnN0IHJlc1RvcGljID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xuXG5cdFx0Y29uc29sZS5sb2cocmVzVG9waWMuZGF0YSk7XG5cblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXG5cdFx0XHRwYXlsb2FkOiByZXNUb3BpYy5kYXRhLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yVG9hc3QoZXJyb3IpXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0VESVRfVklERU9fRVJST1InLFxuXHRcdFx0cGF5bG9hZDoge30sXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVWaWRlbyA9XG5cdCh2aWRlb0lkLCB0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxuXHRcdFx0XHRgYXBpL3ZpZGVvL2RlbGV0ZS8ke3ZpZGVvSWR9LyR7dG9waWNJZH1gLFxuXHRcdFx0XHR7fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6ICdERUxFVEVfVklERU8nLFxuXHRcdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcblx0XHRcdGNvbnNvbGUubG9nKHJlczIuZGF0YSk7XG5cdFx0XHRzdWNjZXNzVG9hc3QocmVzKVxuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXG5cdFx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRlcnJvclRvYXN0KGVycm9yKVxuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiAnREVMRVRFX1ZJREVPX0VSUk9SJyxcblx0XHRcdFx0cGF5bG9hZDoge30sXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RWaWRlbyA9ICh2aWRlbykgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdHRyeSB7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ1NFTEVDVF9WSURFTycsXG5cdFx0XHRwYXlsb2FkOiB2aWRlbyxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnU0VMRUNUX1ZJREVPX0VSUk9SJyxcblx0XHR9KTtcblx0fVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQWRkID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXG5cdDxzdmdcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0d2lkdGg9e3NpemV9XG5cdFx0aGVpZ2h0PXtzaXplfVxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcblx0XHRmaWxsPSdub25lJ1xuXHRcdHN0cm9rZT17Y29sb3J9XG5cdFx0c3Ryb2tlV2lkdGg9JzMuNSdcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxuXHRcdDxsaW5lIHgxPScxMicgeTE9JzUnIHgyPScxMicgeTI9JzE5Jz48L2xpbmU+XG5cdFx0PGxpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInPjwvbGluZT5cblx0PC9zdmc+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENoZXZyb25zVXAgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcblx0PHN2Z1xuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0XHR3aWR0aD17c2l6ZX1cblx0XHRoZWlnaHQ9e3NpemV9XG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xuXHRcdGZpbGw9J25vbmUnXG5cdFx0c3Ryb2tlPXtjb2xvcn1cblx0XHRzdHJva2VXaWR0aD0nMy41J1xuXHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XG5cdFx0PHBhdGggZD0nTTE3IDExbC01LTUtNSA1TTE3IDE4bC01LTUtNSA1JyAvPlxuXHQ8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBDaGV2cm9uc0xlZnQgPSAoeyBzaXplID0gNTEsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcblx0PHN2Z1xuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0XHR3aWR0aD17c2l6ZX1cblx0XHRoZWlnaHQ9e3NpemV9XG5cdFx0dmlld0JveD0nMCAwIDI0IDI0J1xuXHRcdGZpbGw9J25vbmUnXG5cdFx0c3Ryb2tlPXtjb2xvcn1cblx0XHRzdHJva2VXaWR0aD0nMi41J1xuXHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XG5cdFx0PHBhdGggZD0nTTExIDE3bC01LTUgNS01TTE4IDE3bC01LTUgNS01JyAvPlxuXHQ8L3N2Zz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IENyb3NzID0gKHsgc2l6ZSA9IDMyLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXG5cdDxzdmdcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdFx0d2lkdGg9e3NpemV9XG5cdFx0aGVpZ2h0PXtzaXplfVxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcblx0XHRmaWxsPSdub25lJ1xuXHRcdHN0cm9rZT17Y29sb3J9XG5cdFx0c3Ryb2tlV2lkdGg9JzEuNSdcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXG5cdFx0c3Ryb2tlTGluZWpvaW49J2FyY3MnPlxuXHRcdDxsaW5lIHgxPScxOCcgeTE9JzYnIHgyPSc2JyB5Mj0nMTgnPjwvbGluZT5cblx0XHQ8bGluZSB4MT0nNicgeTE9JzYnIHgyPScxOCcgeTI9JzE4Jz48L2xpbmU+XG5cdDwvc3ZnPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgRGVsZXRlID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB3aWR0aD17c2l6ZX1cbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHN0cm9rZT17Y29sb3J9XG4gICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICBzdHJva2VMaW5lY2FwPVwic3F1YXJlXCJcbiAgICBzdHJva2VMaW5lam9pbj1cImFyY3NcIlxuICA+XG4gICAgPHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiPjwvcG9seWxpbmU+XG4gICAgPHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiPjwvcGF0aD5cbiAgICA8bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCI+PC9saW5lPlxuICAgIDxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIj48L2xpbmU+XG4gIDwvc3ZnPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBMb2NrID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjREMxNDNDJywgaGFuZGxlciB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHN2Z1xuXHRcdFx0b25DbGljaz17aGFuZGxlcn1cblx0XHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0XHRcdHdpZHRoPSc0Mydcblx0XHRcdGhlaWdodD0nNDMnXG5cdFx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXG5cdFx0XHRmaWxsPSdub25lJ1xuXHRcdFx0c3Ryb2tlPXtjb2xvcn1cblx0XHRcdHN0cm9rZS13aWR0aD0nMidcblx0XHRcdHN0cm9rZS1saW5lY2FwPSdyb3VuZCdcblx0XHRcdHN0cm9rZS1saW5lam9pbj0ncm91bmQnPlxuXHRcdFx0PHJlY3QgeD0nMycgeT0nMTEnIHdpZHRoPScxOCcgaGVpZ2h0PScxMScgcng9JzInIHJ5PScyJz48L3JlY3Q+XG5cdFx0XHQ8cGF0aCBkPSdNNyAxMVY3YTUgNSAwIDAgMSAxMCAwdjQnPjwvcGF0aD5cblx0XHQ8L3N2Zz5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBVbmxvY2sgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMEZGMDAnIH0pID0+IChcblx0PHN2Z1xuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0XHR3aWR0aD0nNDMnXG5cdFx0aGVpZ2h0PSc0Mydcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXG5cdFx0ZmlsbD0nbm9uZSdcblx0XHRzdHJva2U9e2NvbG9yfVxuXHRcdHN0cm9rZS13aWR0aD0nMidcblx0XHRzdHJva2UtbGluZWNhcD0ncm91bmQnXG5cdFx0c3Ryb2tlLWxpbmVqb2luPSdyb3VuZCc+XG5cdFx0PHJlY3QgeD0nMycgeT0nMTEnIHdpZHRoPScxOCcgaGVpZ2h0PScxMScgcng9JzInIHJ5PScyJz48L3JlY3Q+XG5cdFx0PHBhdGggZD0nTTcgMTFWN2E1IDUgMCAwIDEgOS45LTEnPjwvcGF0aD5cblx0PC9zdmc+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFJlYWQgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcblx0PHN2Z1xuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0XHR3aWR0aD17c2l6ZX1cblx0XHRoZWlnaHQ9e3NpemV9XG5cdFx0dmlld0JveD0nMCAwIDI0IDI0Jz5cblx0XHQ8cGF0aCBkPSdNMTIgNC43MDZjLTIuOTM4LTEuODMtNy40MTYtMi41NjYtMTItMi43MDZ2MTcuNzE0YzMuOTM3LjEyIDcuNzk1LjY4MSAxMC42NjcgMS45OTUuODQ2LjM4OCAxLjgxNy4zODggMi42NjcgMCAyLjg3Mi0xLjMxNCA2LjcyOS0xLjg3NSAxMC42NjYtMS45OTV2LTE3LjcxNGMtNC41ODQuMTQtOS4wNjIuODc2LTEyIDIuNzA2em0tMTAgMTMuMTA0di0xMy43MDRjNS4xNTcuMzg5IDcuNTI3IDEuNDYzIDkgMi4zMzR2MTMuMTY4Yy0xLjUyNS0uNTQ2LTQuNzE2LTEuNTA0LTktMS43OTh6bTIwIDBjLTQuMjgzLjI5My03LjQ3NSAxLjI1Mi05IDEuNzk5di0xMy4xNzFjMS40NTMtLjg2MSAzLjgzLTEuOTQyIDktMi4zMzJ2MTMuNzA0em0tMi0xMC4yMTRjLTIuMDg2LjMxMi00LjQ1MSAxLjAyMy02IDEuNjcydi0xLjA2NGMxLjY2OC0uNjIyIDMuODgxLTEuMzE1IDYtMS42MjZ2MS4wMTh6bTAgMy4wNTVjLTIuMTE5LjMxMS00LjMzMiAxLjAwNC02IDEuNjI2djEuMDY0YzEuNTQ5LS42NDkgMy45MTQtMS4zNjEgNi0xLjY3M3YtMS4wMTd6bTAtMi4wMzFjLTIuMTE5LjMxMS00LjMzMiAxLjAwNC02IDEuNjI2djEuMDY0YzEuNTQ5LS42NDkgMy45MTQtMS4zNjEgNi0xLjY3M3YtMS4wMTd6bTAgNi4wOTNjLTIuMTE5LjMxMS00LjMzMiAxLjAwNC02IDEuNjI2djEuMDY0YzEuNTQ5LS42NDkgMy45MTQtMS4zNjEgNi0xLjY3M3YtMS4wMTd6bTAtMi4wMzFjLTIuMTE5LjMxMS00LjMzMiAxLjAwNC02IDEuNjI2djEuMDY0YzEuNTQ5LS42NDkgMy45MTQtMS4zNjEgNi0xLjY3M3YtMS4wMTd6bS0xNi02LjEwNGMyLjExOS4zMTEgNC4zMzIgMS4wMDQgNiAxLjYyNnYxLjA2NGMtMS41NDktLjY0OS0zLjkxNC0xLjM2MS02LTEuNjcydi0xLjAxOHptMCA1LjA5YzIuMDg2LjMxMiA0LjQ1MSAxLjAyMyA2IDEuNjczdi0xLjA2NGMtMS42NjgtLjYyMi0zLjg4MS0xLjMxNS02LTEuNjI2djEuMDE3em0wLTIuMDMxYzIuMDg2LjMxMiA0LjQ1MSAxLjAyMyA2IDEuNjczdi0xLjA2NGMtMS42NjgtLjYyMi0zLjg4MS0xLjMxNi02LTEuNjI2djEuMDE3em0wIDYuMDkzYzIuMDg2LjMxMiA0LjQ1MSAxLjAyMyA2IDEuNjczdi0xLjA2NGMtMS42NjgtLjYyMi0zLjg4MS0xLjMxNS02LTEuNjI2djEuMDE3em0wLTIuMDMxYzIuMDg2LjMxMiA0LjQ1MSAxLjAyMyA2IDEuNjczdi0xLjA2NGMtMS42NjgtLjYyMi0zLjg4MS0xLjMxNS02LTEuNjI2djEuMDE3eicgLz5cblx0PC9zdmc+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFVwZGF0ZSA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwMDAwMCcgfSkgPT4gKFxuXHQ8c3ZnXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdHdpZHRoPXtzaXplfVxuXHRcdGhlaWdodD17c2l6ZX1cblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXG5cdFx0ZmlsbD0nbm9uZSdcblx0XHRzdHJva2U9e2NvbG9yfVxuXHRcdHN0cm9rZVdpZHRoPScyJ1xuXHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XG5cdFx0PHBhdGggZD0nTTIwIDE0LjY2VjIwYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmg1LjM0Jz48L3BhdGg+XG5cdFx0PHBvbHlnb24gcG9pbnRzPScxOCAyIDIyIDYgMTIgMTYgOCAxNiA4IDEyIDE4IDInPjwvcG9seWdvbj5cblx0PC9zdmc+XG4pO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9BZGQnO1xuZXhwb3J0ICogZnJvbSAnLi9EZWxldGUnO1xuZXhwb3J0ICogZnJvbSAnLi9VcGRhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9DaGV2cm9ucyc7XG5leHBvcnQgKiBmcm9tICcuL1JlYWQnO1xuZXhwb3J0ICogZnJvbSAnLi9Mb2NrJztcbmV4cG9ydCAqIGZyb20gJy4vQ3Jvc3MnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IFF1ZXN0aW9ucyBmcm9tICcuLi9zZWN0aW9ucy9hYm91dC9RdWVzdGlvbnMnO1xuaW1wb3J0IEFib3V0VXMgZnJvbSAnLi4vc2VjdGlvbnMvYWJvdXQvQWJvdXRVcyc7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9sYXlvdXQnO1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgID5cbiAgICAgIDxTZW8gdGl0bGU9XCJBYm91dFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXBhZ2Ugc2Nyb2xsZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdnItd2F2ZSB0b3Atc2xpZGVcIj5cbiAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5IZWxsbyB0aGVyZSw8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGluZy1hYm91dFwiPlxuICAgICAgICAgICAgV2UgY3JlYXRlZCA8c3BhbiBjbGFzc05hbWU9XCJsb2dvIHRleHQtZGFya1wiPkNvZGVycyBHYWxhPC9zcGFuPiB0b1xuICAgICAgICAgICAgcHJvdmlkZSBZb3UgUXVhbGl0eSByZXNvdXJjZXMgdG8gbGVhcm4gRnJvbVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cInNjcm9sbCBpY29uXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9naWZpbWFnZS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDUvc2Nyb2xsLWdpZi0xMC5naWZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGwtaWNvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFF1ZXN0aW9ucyAvPlxuICAgICAgICA8QWJvdXRVcyAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcblxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0JztcblxuaW1wb3J0IHsgZ2V0U3BlY2lhbGl0eSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2VydmljZVBvc3QsIHNjcm9sbFRvIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBDaGV2cm9uc1VwIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zJztcblxuLy8gY29uc3QgU2hhcmVBcnRpY2xlID0gKHsgTmlkLCB1cmwgfSwgcHJvcHMpID0+IHtcblxuXG4vLyBcdGZ1bmN0aW9uIGFjdGlvblRvZ2dsZSgpIHtcbi8vIFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4gKFxuLy8gXHRcdDw+XG4vLyBcdFx0XHQ8ZGl2IGNsYXNzPSdhY3Rpb24nIG9uQ2xpY2s9e2FjdGlvblRvZ2dsZX0+XG4vLyBcdFx0XHRcdDxzcGFuPlxuLy8gXHRcdFx0XHRcdDxpbWdcbi8vIFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMjVweCcgfX1cbi8vIFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xOTE5OS9zaGFyZS5zdmcnXG4vLyBcdFx0XHRcdFx0XHRhbHQ9Jydcbi8vIFx0XHRcdFx0XHQvPlxuLy8gXHRcdFx0XHQ8L3NwYW4+XG4vLyBcdFx0XHRcdDx1bD5cbi8vIFx0XHRcdFx0XHQ8bGk+XG4vLyBcdFx0XHRcdFx0XHQ8YVxuLy8gXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3doYXRzYXBwLWljb24nXG4vLyBcdFx0XHRcdFx0XHRcdHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbi8vIFx0XHRcdFx0XHRcdFx0aHJlZj17YGh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9SGV5IGxvb2sgaSBqdXN0IGZvdW5kIG91dCB0aGlzIEFtYXppbmcgYXJ0aWNsZSBvbiBcIiR7TmlkfVwiLENoZWNrIGl0IG91dCA6ICR7dXJsfWB9XG4vLyBcdFx0XHRcdFx0XHRcdHRhcmdldD0nX2JsYW5rJz5cbi8vIFx0XHRcdFx0XHRcdFx0U2hhcmUgb25cbi8vIFx0XHRcdFx0XHRcdFx0PGltZ1xuLy8gXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMjVweCcsIG1hcmdpbkxlZnQ6ICcyMHB4JyB9fVxuLy8gXHRcdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMDMxNTAvd2hhdHNhcHAtc3ltYm9sLWxvZ28uc3ZnJ1xuLy8gXHRcdFx0XHRcdFx0XHRcdGFsdD17J3NoYXJlICcgKyBOaWQgKyAnIG9uIFdoYXRzYXBwJ31cbi8vIFx0XHRcdFx0XHRcdFx0Lz5cbi8vIFx0XHRcdFx0XHRcdDwvYT5cbi8vIFx0XHRcdFx0XHQ8L2xpPlxuXG4vLyBcdFx0XHRcdFx0PGxpPlxuLy8gXHRcdFx0XHRcdFx0PGFcbi8vIFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtYWlsLWljb24nXG4vLyBcdFx0XHRcdFx0XHRcdGhyZWY9e2BtYWlsdG86P1N1YmplY3Q9JHsnQXJ0aWNsZSBvbiAnICsgTmlkXG4vLyBcdFx0XHRcdFx0XHRcdFx0fSZCb2R5PUhleSBsb29rIGkganVzdCBmb3VuZCBvdXQgdGhpcyBBbWF6aW5nIGFydGljbGUgb24gXCIke05pZH1cIixDaGVjayBpdCBvdXQgOiAke3VybH1gfVxuLy8gXHRcdFx0XHRcdFx0XHR0YXJnZXQ9J190b3AnXG4vLyBcdFx0XHRcdFx0XHRcdHJlbD0nbm9mb2xsb3cnPlxuLy8gXHRcdFx0XHRcdFx0XHRTaGFyZSBvblxuLy8gXHRcdFx0XHRcdFx0XHQ8aW1nXG4vLyBcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyNXB4JywgbWFyZ2luTGVmdDogJzIwcHgnIH19XG4vLyBcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdzaGFyZS1pbWFnZSdcbi8vIFx0XHRcdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMzAzMTYxL2dtYWlsLWljb24tbG9nby5zdmcnXG4vLyBcdFx0XHRcdFx0XHRcdFx0YWx0PXsnc2hhcmUgJyArIE5pZCArICcgb24gR21haWwnfVxuLy8gXHRcdFx0XHRcdFx0XHQvPlxuLy8gXHRcdFx0XHRcdFx0PC9hPlxuLy8gXHRcdFx0XHRcdDwvbGk+XG4vLyBcdFx0XHRcdDwvdWw+XG4vLyBcdFx0XHQ8L2Rpdj5cbi8vIFx0XHQ8Lz5cbi8vIFx0KTtcbi8vIH07XG5cbmNvbnN0IEFydGljbGUgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBuYW1lIH0gPSBwcm9wcy5tYXRjaC5wYXJhbXM7XG5cdGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKHt9KTtcblxuXG5cblxuXHRjb25zdCBnZXRBcnRpY2xlID0gYXN5bmMgKG5hbWUpID0+IHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcblx0XHRcdGBhcGkvYXJ0aWNsZS9nZXRgLFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuIHJlcy5kYXRhLmFydGljbGU7XG5cdH07XG5cblx0Y29uc3QgZ2V0QXJ0aWNsZUVmZmVjdCA9IHVzZUNhbGxiYWNrKFxuXHRcdGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IGFydGljbGUgPSBhd2FpdCBnZXRBcnRpY2xlKG5hbWUucmVwbGFjZSgvLS9nLCAnICcpKTtcblx0XHRcdHNldEFydGljbGUoYXJ0aWNsZSk7XG5cdFx0fSxcblx0XHRbbmFtZV0sXG5cdClcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdldEFydGljbGVFZmZlY3QoKVxuXHR9LCBbZ2V0QXJ0aWNsZUVmZmVjdF0pO1xuXG5cdGNvbnNvbGUubG9nKGFydGljbGUpXG5cdGNvbnN0IGdvVG9Ub3AgPSAoKSA9PiB7XG5cdFx0c2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpKTtcblx0fTtcblxuXG5cdGNvbnN0IGh0bWwgPSBhcnRpY2xlICYmIGFydGljbGUuY29udGVudDtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0ZWQtYXJ0aWNsZSc+XG5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9J2Z1bGwtdmlldy1hcnRpY2xlIHAtMic+XG5cdFx0XHRcdFx0PENvbCBzbT17Mn0+ey8qIEFkZHMgSGVyZSAqL308L0NvbD5cblxuXHRcdFx0XHRcdDxDb2wgaWQ9J3RvcCcgc3R5bGU9e3sgcGFkZGluZzogJzBweCcgfX0gc209ezh9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3FsLXNub3cnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZnVsbC1hcnRpY2xlIHFsLWVkaXRvcic+XG5cdFx0XHRcdFx0XHRcdFx0e1JlYWN0SHRtbFBhcnNlcihodG1sKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0b3AtaWNvbic+XG5cdFx0XHRcdFx0XHRcdDxDaGV2cm9uc1VwIHNpemU9JzUwJyBjb2xvcj0nI2RjMTQzYycgb25DbGljaz17Z29Ub1RvcH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvQ29sPlxuXG5cdFx0XHRcdFx0PENvbCBzbT17Mn0+ey8qIEFkZHMgSGVyZSAqL308L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHRhdXRoOiBzdGF0ZS5hdXRoXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0U3BlY2lhbGl0eSB9KShBcnRpY2xlKTtcblxuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vIGNvbnN0IEFydGljbGUgPSAocHJvcHMpID0+IHtcbi8vIFx0Y29uc3QgbmFtZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5uYW1lXG4vLyBcdGNvbnNvbGUubG9nKG5hbWUucmVwbGFjZSgvLS9nLCAnICcpKVxuLy8gXHRyZXR1cm4gKFxuLy8gXHRcdDxkaXY+XG4vLyBcdFx0XHQ8ZGl2PlxuLy8gXHRcdFx0XHRsb3JlbTEwMFxuLy8gXHRcdFx0PC9kaXY+XG4vLyBcdFx0PC9kaXY+XG4vLyBcdCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEFydGljbGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWRpcmVjdCwgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyByZWdpc3RlciwgbG9naW4gfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XG5pbXBvcnQgeyBTZW8gfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuXG5jb25zdCBBdXRoID0gKHsgbG9naW4sIHJlZ2lzdGVyLCB0b2tlbiwgdHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICBpZiAodG9rZW4pIHJldHVybiA8UmVkaXJlY3QgdG89XCIvbGVhcm5cIiAvPjtcbiAgY29uc3QgZGluVGV4dCA9IFwiPENvZGVycyBHYWxhLz5cIjtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodHlwZSA9PT0gXCJzaWdudXBcIikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uIGgxXCIpLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2VkXCIpO1xuXG4gICAgICByZWdpc3RlcihkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uIGgxXCIpLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2VkXCIpO1xuICAgICAgbG9naW4oZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWNvbnRhaW5lclwiPlxuICAgICAgPFNlbyB0aXRsZT1cIkxvZ0luXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJkaW5UYWdcIj57ZGluVGV4dH08L2g2PlxuICAgICAgICAgICAge3R5cGUgPT09IFwic2lnbnVwXCIgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgxPlNpZ24gVXA8L2gxPlxuICAgICAgICAgICAgICAgIDxwPkhleSwgV2VsY29tZSB0byBDb2RlcnNHYWxhICEhPC9wPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5IZXkgdGhlcmUsIFdlbGNvbWUgQmFjayAhITwvcD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlID09PSBcInNpZ251cFwiID8gXCJmbGV4XCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHt0eXBlID09PSBcInNpZ251cFwiID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29kZVJlZmVycmVkXCI+UmVmZXIgQ29kZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvZGVSZWZlcnJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBCMThGQzY5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlUmVmZmVyZWQ6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgIHt0eXBlID09PSBcInNpZ251cFwiID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtZW1iZXJNZVwiPkhhdmUgYW4gYWNjb3VudD88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtZW1iZXJNZVwiPkZvcmdvdCBQYXNzd29yZD88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9zaWdudXBcIj5TaWduVXA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ25pblwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvZ2luLCByZWdpc3RlciB9KShBdXRoKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldEFsbEFydGljbGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9hcnRpY2xlJztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgRmVhdHVyZWQgZnJvbSAnLi4vc2VjdGlvbnMvYmxvZy9GZWF0dXJlZCc7XG5pbXBvcnQgTGF0ZXN0IGZyb20gJy4uL3NlY3Rpb25zL2Jsb2cvTGF0ZXN0JztcbmltcG9ydCBBbGwgZnJvbSAnLi4vc2VjdGlvbnMvYmxvZy9BbGwnO1xuXG5jb25zdCBCbG9nID0gKHsgZ2V0QWxsQXJ0aWNsZXMsIGFydGljbGVzLCBpc0FkbWluIH0pID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoYXJ0aWNsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRnZXRBbGxBcnRpY2xlcygpO1xuXHRcdH1cblx0fSwgW2dldEFsbEFydGljbGVzXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jb250YWluZXInPlxuXHRcdFx0PG5hdiBjbGFzc05hbWU9J25hdl9fdG9wJz5cblx0XHRcdFx0PGEgcmVsPSdub2ZvbGxvdycgaHJlZj0nIycgY2xhc3NOYW1lPSduYXZfX3RvcF9fbGluayc+PC9hPlxuXHRcdFx0PC9uYXY+XG5cdFx0XHR7aXNBZG1pbiAmJiAoXG5cdFx0XHRcdDxOYXZMaW5rIHRvPScvYXJ0aWNsZS9hZGQnIHJlbD0nbm9mb2xsb3cnPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgc2l6ZT0nbGcnIGJsb2NrPlxuXHRcdFx0XHRcdFx0QWRkIEFydGljbGVcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0KX1cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG5cdFx0XHRcdDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiAnRG9zaXMnIH19IGNsYXNzTmFtZT0ndGl0bGVfX2gxJz5cblx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdENvZGVyc0dhbGEgPHNwYW4+QmxvZzwvc3Bhbj5cblx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0aXRsZV9fc3ViJz5Tb3JyeSA6KDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPSdncmlkJz5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdncmlkX19jb2wtMic+XG5cdFx0XHRcdFx0PExhdGVzdCBhcnRpY2xlPXthcnRpY2xlcyAmJiBhcnRpY2xlc1swXX0gLz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZ3JpZF9fY29sX190aXRsZSc+RmVhdHVyZWQgQXJ0aWNsZXM8L2gzPlxuXHRcdFx0XHRcdFx0PEZlYXR1cmVkIGFydGljbGVzPXthcnRpY2xlc30gLz5cblx0XHRcdFx0XHRcdHsvKiA8TmV3c2xldHRlckZvcm0gLz4gKi99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nZ3JpZF9fY29sX190aXRsZSc+QWxzbyBSZWFkLi4uPC9oMz5cblx0XHRcdFx0PEFsbCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG5cdFx0XHQ8L2FydGljbGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG5cdGFydGljbGVzOiBzdGF0ZS5hcnRpY2xlLmFydGljbGVzLFxuXHRpc0FkbWluOiBzdGF0ZS5hdXRoLmlzQWRtaW4sXG59KTtcblxuY29uc3QgbG9hZERhdGEgPSAoc3RvcmUpID0+IHtcblx0cmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldEFsbEFydGljbGVzKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnQ6IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldEFsbEFydGljbGVzIH0pKEJsb2cpLFxuXHRsb2FkRGF0YSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL3NlY3Rpb25zL2hvbWUvSGVybyc7XG5pbXBvcnQgSGVyb0NhcmRzIGZyb20gJy4uL3NlY3Rpb25zL2hvbWUvSGVyb0NhcmRzJztcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi4vbGF5b3V0L3ByZWxvYWRlcic7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cdHZhciBob21lQ29udGVudCA9ICdhZHNmJztcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG5cdFx0XHRhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cblx0XHRcdGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cblx0XHRcdDxTZW8gdGl0bGU9J0hvbWUnIG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX0gLz5cblx0XHRcdDxkaXYgaWQ9J215RGl2Jz5cblx0XHRcdFx0e2hvbWVDb250ZW50ID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHQ8SGVybyAvPlxuXHRcdFx0XHRcdFx0PEhlcm9DYXJkcyAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxQcmVsb2FkZXIgLz5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2xheW91dC8nO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vc2VjdGlvbnMvbGVhcm4vQ2FyZCc7XG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XG5cbmNvbnN0IExlYXJuID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRleGl0PXt7IG9wYWNpdHk6IDAgfX1cblx0XHRcdGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuXHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwIH19PlxuXHRcdFx0PFNlbyB0aXRsZT0nTGVhcm4nIG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX0gLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbGVhcm4tY29udGFpbmVyJz5cblx0XHRcdFx0PEFkbWluQnV0dG9ucyB0eXBlPSdBZGQnIHVybD0nL2FkZGNhcmQnIGRhdGE9e3sgbmFtZTogJ0NvdXJzZXMnIH19IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cblx0XHRcdFx0XHQ8Q2FyZCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlYXJuO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IENoZXZyb25zVXAsIENyb3NzIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zJztcbmltcG9ydCB7IGdldFNwZWNpYWxpdHksIGNsZWFyQXJ0aWNsZSwgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi9hY3Rpb25zJztcblxuaW1wb3J0IFZpZGVvUHJldmlldyBmcm9tICcuLi9zZWN0aW9ucy9wcmV2aWV3L1ZpZGVvUHJldmlldyc7XG5pbXBvcnQgVG9waWNzT3ZlcnZpZXcgZnJvbSAnLi4vc2VjdGlvbnMvcHJldmlldy9Ub3BpY3NPdmVydmlldyc7XG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XG5cbmNvbnN0IFByZXZpZXcgPSAoe1xuXHRtYXRjaCxcblx0c2VsZWN0VmlkZW8sXG5cdGNsZWFyQXJ0aWNsZSxcblx0Z2V0U3BlY2lhbGl0eSxcblx0c3BlY2lhbGl0eSxcbn0pID0+IHtcblx0Y29uc3QgW2Nsb3NlLCBzZXRDbG9zZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgeyBzcGVjaWFsaXR5TmFtZSB9ID0gbWF0Y2gucGFyYW1zXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjbGVhckFydGljbGUoKTtcblx0XHRnZXRTcGVjaWFsaXR5KHNwZWNpYWxpdHlOYW1lKTtcblx0fSwgW2NsZWFyQXJ0aWNsZSwgZ2V0U3BlY2lhbGl0eSwgc3BlY2lhbGl0eU5hbWVdKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZWxlY3RWaWRlbyhzcGVjaWFsaXR5KTtcblx0fSwgW3NwZWNpYWxpdHksIHNlbGVjdFZpZGVvXSk7XG5cblx0cmV0dXJuIHNwZWNpYWxpdHkgPyAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J3RvcGljcy1vdnItY29udCc+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT0nb3ZlcmxheSdcblx0XHRcdFx0c3R5bGU9e3sgZGlzcGxheTogY2xvc2UgPyAnbm9uZScgOiAnYmxvY2snIH19XG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldENsb3NlKCFjbG9zZSl9PjwvZGl2PlxuXHRcdFx0PFNlb1xuXHRcdFx0XHR0aXRsZT0nU2VsZWN0IEFydGljbGUnXG5cdFx0XHRcdG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3BlY2lhbGl0eS1jb250YWluZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3BlY2lhbGl0eS1oZWFkaW5nJz5cblx0XHRcdFx0XHQ8aDI+e3NwZWNpYWxpdHkubmFtZX08L2gyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHQ8Q29sXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RvcGljLW92ci1jb250YWluZXInXG5cdFx0XHRcdFx0XHRsZz17NH1cblx0XHRcdFx0XHRcdHN0eWxlPXt7IGhlaWdodDogY2xvc2UgPyAnMjV2aCcgOiAnNTB2aCcgfX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9waWNzLW92ZXJ2aWV3Jz5cblx0XHRcdFx0XHRcdFx0PGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScgfX0gY2xhc3NOYW1lPSdvdmVydmlldyc+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+VG9waWNzIE92ZXJ2aWV3IDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdBZGQnXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvJHtzcGVjaWFsaXR5Lm5hbWV9L3RvcGljL2FkZC9gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17eyBuYW1lOiAnVG9waWNzJyB9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjbG9zZS10b2dnbGUnPlxuXHRcdFx0XHRcdFx0XHRcdHtjbG9zZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldENsb3NlKCFjbG9zZSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2hldnJvbnNVcCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRDbG9zZSghY2xvc2UpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENyb3NzIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxBY2NvcmRpb24+XG5cdFx0XHRcdFx0XHRcdDxUb3BpY3NPdmVydmlldyBzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eS5uYW1lfSAvPlxuXHRcdFx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbCBsPXs4fT5cblx0XHRcdFx0XHRcdDxWaWRlb1ByZXZpZXcgc3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHkubmFtZX0gLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8L2Rpdj5cblx0KSA6IG51bGw7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG5cdHNwZWNpYWxpdHk6IHN0YXRlLnNwZWNpYWxpdHkuc3BlY2lhbGl0eSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xuXHRnZXRTcGVjaWFsaXR5LFxuXHRjbGVhckFydGljbGUsXG5cdHNlbGVjdFZpZGVvLFxufSkoUHJldmlldyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vc2VjdGlvbnMvZWRpdG9yJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XG5cbmltcG9ydCB7IGFkZEFydGljbGUsIGVkaXRBcnRpY2xlLCBnZXRBcnRpY2xlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ2hldnJvbnNVcCB9IGZyb20gJy4uL2Fzc2V0cy9pY29ucyc7XG5cbmNvbnN0IFVwc2VydEFydGljbGUgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBhZGRBcnRpY2xlLCBzcGVjaWFsaXRpZXMsIGVkaXRBcnRpY2xlLCBnZXRBcnRpY2xlLCBwcmV2QXJ0aWNsZSB9ID1cblx0XHRwcm9wcztcblx0Y29uc3QgW2NvbnRlbnQsIHNldGNvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbbmFtZSwgc2V0bmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtrZXl3b3Jkcywgc2V0QXJ0aWNsZUtleXdvcmRzXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2ZlYXR1cmVkLCBzZXRmZWF0dXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFt0aHVtYm5haWxVcmwsIHNldHRodW1ibmFpbFVybF0gPSB1c2VTdGF0ZSgnJyk7XG5cdC8vIGNvbnN0IFtMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Ly8gY29uc3QgdG9waWNJZCA9IFwiRVJST1JfTkFfRElZT1wiO1xuXHRmdW5jdGlvbiBzY3JvbGxUbyhlbGVtZW50KSB7XG5cdFx0aXNDbGllbnQgJiZcblx0XHRcdHdpbmRvdy5zY3JvbGwoe1xuXHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG5cdFx0XHR9KTtcblx0fVxuXHRjb25zdCBnb1RvVG9wID0gKCkgPT4ge1xuXHRcdHNjcm9sbFRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKSk7XG5cdH07XG5cblx0Y29uc29sZS5sb2cocHJvcHMubWF0Y2gucGFyYW1zLmFydGljbGVJZCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAocHJvcHMuZWRpdCkge1xuXHRcdFx0Z2V0QXJ0aWNsZShwcm9wcy5tYXRjaC5wYXJhbXMuYXJ0aWNsZUlkKTtcblx0XHR9XG5cdH0sIFtwcm9wcywgZ2V0QXJ0aWNsZV0pO1xuXG5cdGNvbnN0IGhhbmRsZUVkaXRvciA9IChodG1sKSA9PiB7XG5cdFx0c2V0Y29udGVudChodG1sKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVFZGl0ID0gYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2cobmFtZSk7XG5cdFx0Y29uc29sZS5sb2coa2V5d29yZHMpO1xuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHRuYW1lOiBuYW1lID09PSAnJyA/IHByZXZBcnRpY2xlLm5hbWUgOiBuYW1lLFxuXHRcdFx0a2V5d29yZHM6IGtleXdvcmRzID09PSAnJyA/IHByZXZBcnRpY2xlLmtleXdvcmRzIDoga2V5d29yZHMsXG5cdFx0XHRjb250ZW50OiBjb250ZW50ID09PSAnJyA/IHByZXZBcnRpY2xlLmNvbnRlbnQgOiBjb250ZW50LFxuXHRcdH07XG5cdFx0ZWRpdEFydGljbGUoZGF0YSwgcHJldkFydGljbGUuX2lkLCBzcGVjaWFsaXRpZXMuc3BlY2lhbGl0eS5OYW1lKTtcblx0XHR0b2FzdCgnQXJ0aWNsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseScpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUFkZCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHsgY29udGVudCwgbmFtZSwga2V5d29yZHMgfSk7XG5cdFx0YWRkQXJ0aWNsZSh7IGNvbnRlbnQsIG5hbWUsIGtleXdvcmRzLCBmZWF0dXJlZCwgdGh1bWJuYWlsVXJsIH0pO1xuXHRcdHRvYXN0KCdBcnRpY2xlIGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PFJvdyBjbGFzc05hbWU9J2Z1bGwtdmlldy1hcnRpY2xlIHAtMic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2hhcmUtaWNvbnMnPjwvZGl2PlxuXG5cdFx0XHQ8Q29sIHNtPXsxfT48L0NvbD5cblxuXHRcdFx0PENvbCBpZD0ndG9wJyBzbT17MTB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9JycgaWQ9Jyc+XG5cdFx0XHRcdFx0XHRcdHtwcm9wcy5lZGl0XG5cdFx0XHRcdFx0XHRcdFx0PyBgVXBkYXRlIEFydGljbGUgLSAke3ByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLm5hbWV9YFxuXHRcdFx0XHRcdFx0XHRcdDogJ0FkZCBhIEFydGljbGUnfVxuXHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J25hbWUnXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQXJ0aWNsZSBOYW1lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gcHJldkFydGljbGUgJiYgcHJldkFydGljbGUubmFtZSA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0bmFtZShlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3RodW1ibmFpbFVybCdcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdBcnRpY2xlIFRodW1ibmFpbCdcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IHByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLnRodW1ibmFpbFVybCA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0dGh1bWJuYWlsVXJsKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdrZXl3b3Jkcydcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdBcnRpY2xlIERlc2NyaXB0aW9uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5lZGl0ID8gcHJldkFydGljbGUgJiYgcHJldkFydGljbGUua2V5d29yZHMgOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEFydGljbGVLZXl3b3JkcyhlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2ZlYXR1cmVkJz5Jc0ZlYXR1cmVkICZuYnNwOyA8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IHByZXZBcnRpY2xlICYmIHByZXZBcnRpY2xlLmZlYXR1cmVkIDogZmFsc2Vcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldGZlYXR1cmVkKCFmZWF0dXJlZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nZmVhdHVyZWQnXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdHtwcm9wcy5lZGl0ID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5jb250ZW50ID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFZGl0b3Jcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXRvcj17aGFuZGxlRWRpdG9yfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5jb250ZW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RWRpdG9yIGhhbmRsZUVkaXRvcj17aGFuZGxlRWRpdG9yfSBkZWZhdWx0VmFsdWU9JycgLz5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWRkLWFydGljbGUtYnV0dG9uJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IGhhbmRsZUVkaXQoZSkgOiBoYW5kbGVBZGQoZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cHJvcHMuZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9wLWljb24nPlxuXHRcdFx0XHRcdDxDaGV2cm9uc1VwIHNpemU9JzUwJyBjb2xvcj0nI2RjMTQzYycgb25DbGljaz17Z29Ub1RvcH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0NvbD5cblxuXHRcdFx0PENvbCBzbT17MX0+PC9Db2w+XG5cdFx0PC9Sb3c+XG5cdCk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG5cdHNwZWNpYWxpdGllczogc3RhdGUuc3BlY2lhbGl0eSxcblx0cHJldkFydGljbGU6IHN0YXRlLmFydGljbGUuc2VsZWN0ZWRBcnRpY2xlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG5cdGFkZEFydGljbGUsXG5cdGVkaXRBcnRpY2xlLFxuXHRnZXRBcnRpY2xlLFxufSkoVXBzZXJ0QXJ0aWNsZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHsgaXNDbGllbnQsIHNlcnZpY2VHZXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGFkZFNwZWNpYWxpdHksIGVkaXRTcGVjaWFsaXR5IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL3NlY3Rpb25zL2VkaXRvcic7XG5cbmNvbnN0IFVwc2VydENhcmQgPSAoeyBhZGRTcGVjaWFsaXR5LCBlZGl0U3BlY2lhbGl0eSwgZWRpdCwgbWF0Y2ggfSkgPT4ge1xuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKGVkaXQpIHtcblx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChcblx0XHRcdFx0XHRgYXBpL3NwZWNpYWxpdHkvZ2V0LyR7bWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lfWBcblx0XHRcdFx0KTtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0Y29uc3QgeyBuYW1lLCBpbWFnZVVybCwgY29udGVudCwgX2lkIH0gPSByZXMuZGF0YS5zcGVjaWFsaXR5O1xuXHRcdFx0XHRzZXREYXRhKHsgbmFtZSwgaW1hZ2VVcmwsIGNvbnRlbnQsIF9pZCB9KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGZldGNoRGF0YSgpO1xuXHR9LCBbZWRpdCwgbWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lXSk7XG5cdGNvbnNvbGUubG9nKGVkaXQsIGRhdGEpO1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0c2V0U3RhdGUoe1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVFZGl0b3IgPSAoaHRtbCkgPT4ge1xuXHRcdHNldFN0YXRlKHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Y29udGVudDogaHRtbCxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoZWRpdCkgZWRpdFNwZWNpYWxpdHkoc3RhdGUsIGRhdGEuX2lkKTtcblx0XHRlbHNlIGFkZFNwZWNpYWxpdHkoc3RhdGUpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBtdC00Jz5cblx0XHRcdDxmb3JtIGNsYXNzTmFtZT0nbXQtNSc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRpZD0nbmFtZSdcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nU3BlY2lhbGl0eSBOYW1lJ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2VkaXQgPyBkYXRhICYmIGRhdGEubmFtZSA6ICcnfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRpZD0naW1hZ2VVcmwnXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0ltYWdlIFVSTCdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtlZGl0ID8gZGF0YSAmJiBkYXRhLmltYWdlVXJsIDogJyd9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHR7IWVkaXQgJiYgKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdGlkPSdhbHQnXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nSW1hZ2UgYWx0IHRleHQnXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdxbC1zbm93Jz5cblxuXHRcdFx0XHRcdFx0e2lzQ2xpZW50ICYmIDxFZGl0b3Jcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncWwtZWRpdG9yJ1xuXHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0b3I9e2hhbmRsZUVkaXRvcn1cblx0XHRcdFx0XHRcdC8+fVxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FkZC1hcnRpY2xlLWJ1dHRvbic+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGhhbmRsZXI9e2hhbmRsZVN1Ym1pdH0gaXNCdXR0b249e3RydWV9IHR5cGU9J3N1Ym1pdCc+XG5cdFx0XHRcdFx0XHRcdHtlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ31cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBhZGRTcGVjaWFsaXR5LCBlZGl0U3BlY2lhbGl0eSB9KShVcHNlcnRDYXJkKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBMb2NrQnV0dG9uIH0gZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRUb3BpYywgZWRpdFRvcGljIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuY29uc3QgVXBzZXJ0VG9waWMgPSAoe1xuXHRzcGVjaWFsaXR5LFxuXHRtYXRjaCxcblx0YWRkVG9waWMsXG5cdGVkaXRUb3BpYyxcblx0bG9jYXRpb24sXG5cdGVkaXQsXG59KSA9PiB7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHsgbG9ja2VkOiBmYWxzZSB9KTtcblx0Y29uc29sZS5sb2cobG9jYXRpb24pO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldERhdGEoe1xuXHRcdFx0bG9ja2VkOiBsb2NhdGlvbi5wcm9wcyAmJiBsb2NhdGlvbi5wcm9wcy5pc0xvY2tlZCxcblx0XHRcdG5hbWU6IGxvY2F0aW9uLnByb3BzICYmIGxvY2F0aW9uLnByb3BzLm5hbWUsXG5cdFx0fSk7XG5cdH0sIFtsb2NhdGlvbi5wcm9wc10pO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICghZWRpdCkge1xuXHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdHsgLi4uZGF0YSwgc3BlY2lhbGl0eUlkOiBzcGVjaWFsaXR5Ll9pZCB9LFxuXHRcdFx0XHRtYXRjaC5wYXJhbXMuc3BlY2lhbGl0eU5hbWVcblx0XHRcdCk7XG5cdFx0XHRhZGRUb3BpYyhcblx0XHRcdFx0eyAuLi5kYXRhLCBzcGVjaWFsaXR5SWQ6IHNwZWNpYWxpdHkuX2lkIH0sXG5cdFx0XHRcdG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZVxuXHRcdFx0KTtcblx0XHRcdHRvYXN0KCdUb3BpYyBBZGRlZCBzdWNjZXNzZnVsbHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWRpdFRvcGljKGRhdGEsIG1hdGNoLnBhcmFtcy50b3BpY0lkLCBtYXRjaC5wYXJhbXMuc3BlY2lhbGl0eU5hbWUpO1xuXHRcdFx0dG9hc3QoJ1VwZGF0ZWQnKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBzZXJ0LWNvbnRhaW5lcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBzZXJ0LXRvcGljLWZvcm0nPlxuXHRcdFx0XHQ8aDM+e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfSBUb3BpYzwvaDM+XG5cdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0taW5wdXQnPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17bG9jYXRpb24ucHJvcHMgJiYgbG9jYXRpb24ucHJvcHMubmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0RGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgbmFtZTogZS50YXJnZXQudmFsdWUgfSkpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1idXR0b24nPlxuXHRcdFx0XHRcdFx0PExvY2tCdXR0b25cblx0XHRcdFx0XHRcdFx0aXNMb2NrZWQ9e2RhdGEubG9ja2VkfVxuXHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0RGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgbG9ja2VkOiAhcHJldi5sb2NrZWQgfSkpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8QnV0dG9uIGlzQnV0dG9uPXt0cnVlfSBoYW5kbGVyPXtoYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdFx0e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcblx0c3BlY2lhbGl0eTogc3RhdGUuc3BlY2lhbGl0eS5zcGVjaWFsaXR5LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGFkZFRvcGljLCBlZGl0VG9waWMgfSkoVXBzZXJ0VG9waWMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBhZGRWaWRlbywgZWRpdFZpZGVvLCBnZXRWaWRlbyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jb25zdCBVcHNlcnRWaWRlbyA9ICh7XG5cdGVkaXQsXG5cdG1hdGNoLFxuXHRhZGRWaWRlbyxcblx0ZWRpdFZpZGVvLFxuXHRnZXRWaWRlbyxcblx0c3BlY2lhbGl0aWVzLFxuXHRwcmV2VmlkZW8sXG59KSA9PiB7XG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKHByZXZWaWRlbyA/IHByZXZWaWRlby5uYW1lIDogJycpO1xuXHRjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFxuXHRcdHByZXZWaWRlbyA/IHByZXZWaWRlby5kZXNjcmlwdGlvbiA6ICcnXG5cdCk7XG5cdGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShwcmV2VmlkZW8gPyBwcmV2VmlkZW8udXJsIDogJycpO1xuXG5cdGNvbnN0IGhhbmRsZUFkZCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGF3YWl0IGFkZFZpZGVvKFxuXHRcdFx0eyBuYW1lLCBkZXNjcmlwdGlvbiwgdXJsIH0sXG5cdFx0XHRtYXRjaC5wYXJhbXMudG9waWNJZCxcblx0XHRcdHNwZWNpYWxpdGllcy5zcGVjaWFsaXR5Lm5hbWVcblx0XHQpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSBhc3luYyAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRhd2FpdCBlZGl0VmlkZW8oXG5cdFx0XHR7IG5hbWUsIGRlc2NyaXB0aW9uLCB1cmwgfSxcblx0XHRcdHByZXZWaWRlby5faWQsXG5cdFx0XHRzcGVjaWFsaXRpZXMuc3BlY2lhbGl0eS5uYW1lXG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtY29udGFpbmVyJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtdmlkZW8tZm9ybSc+XG5cdFx0XHRcdDxoMz57ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCAnfVZpZGVvPC9oMz5cblx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxuXHRcdFx0XHRcdFx0PGxhYmVsPk5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+VXJsPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dXJsfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cblx0XHRcdFx0XHRcdDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2Rlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzQnV0dG9uPXt0cnVlfVxuXHRcdFx0XHRcdGhhbmRsZXI9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRlZGl0ID8gaGFuZGxlRWRpdChlKSA6IGhhbmRsZUFkZChlKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHR7ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCd9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG5cdHNwZWNpYWxpdGllczogc3RhdGUuc3BlY2lhbGl0eSxcblx0cHJldlZpZGVvOiBzdGF0ZS52aWRlby5zZWxlY3RlZFZpZGVvLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG5cdGFkZFZpZGVvLFxuXHRlZGl0VmlkZW8sXG5cdGdldFZpZGVvLFxufSkoVXBzZXJ0VmlkZW8pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBQcml2YXRlUm91dGUgPSAoe1xuICBjb21wb25lbnQ6IENvbXBvbmVudCxcbiAgYXV0aDogeyBpc0F1dGhlbnRpY2F0ZWQgfSxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZVxuICAgICAgey4uLnJlc3R9XG4gICAgICByZW5kZXI9eyhwcm9wcykgPT5cbiAgICAgICAgIWlzQXV0aGVudGljYXRlZCA/IDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+IDogPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgYXV0aDogc3RhdGUuYXV0aCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJpdmF0ZVJvdXRlKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5leHBvcnQgY29uc3QgU2VvID0gKHtcblx0ZGVzY3JpcHRpb24sXG5cdHRpdGxlID0gJyAnLFxuXHRsYW5nID0gJ2VuJyxcblx0bWV0YSA9IFtdLFxuXHRyaWNocmVzdWx0LFxufSkgPT4ge1xuXHQvLyBjb25zdCB7IGZhdmljb24gfSA9ICcnO1xuXG5cdGNvbnN0IG1ldGFUaXRsZSA9IGBDb2RlcnNHYWxhIHwgJHt0aXRsZX1gO1xuXHRjb25zdCBtZXRhRGVzY3JpcHRpb24gPVxuXHRcdFwiQ29kZXJzR2FsYSdzIG9ubHkgcHVycG9zZSBpcyB0byBwcm92aWRlIGNvZGluZyBrbm93bGVkZ2UsIHN1Y2ggYXMgV2ViIGRldmVsb3BtZW50IHRoYXQgaW5jbHVkZXMgSFRNTCBDU1MgSlMgTm9kZSBSZWFjdCBNb25nb0RiLCBNYWNoaW5lIExlYXJuaW5nLCBEYXRhIFN0cnVjdHVyZXMgYW5kIEFsZ29yaXRobVwiIHx8XG5cdFx0ZGVzY3JpcHRpb247XG5cblx0cmV0dXJuIChcblx0XHQ8SGVsbWV0XG5cdFx0XHR0aXRsZT17bWV0YVRpdGxlfVxuXHRcdFx0aHRtbEF0dHJpYnV0ZXM9e3sgbGFuZyB9fVxuXHRcdFx0bWV0YT17W1xuXHRcdFx0XHR7IG5hbWU6IGBkZXNjcmlwdGlvbmAsIGNvbnRlbnQ6IG1ldGFEZXNjcmlwdGlvbiB9LFxuXHRcdFx0XHR7IHByb3BlcnR5OiBgb2c6dGl0bGVgLCBjb250ZW50OiBtZXRhVGl0bGUgfSxcblx0XHRcdFx0eyBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCwgY29udGVudDogbWV0YURlc2NyaXB0aW9uIH0sXG5cdFx0XHRcdHsgcHJvcGVydHk6IGBvZzp0eXBlYCwgY29udGVudDogYHdlYnNpdGVgIH0sXG5cdFx0XHRcdHsgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsIGNvbnRlbnQ6IGBzdW1tYXJ5YCB9LFxuXHRcdFx0XHR7IG5hbWU6IGB0d2l0dGVyOnRpdGxlYCwgY29udGVudDogbWV0YVRpdGxlIH0sXG5cdFx0XHRcdHsgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLCBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24gfSxcblx0XHRcdF0uY29uY2F0KG1ldGEpfVxuXHRcdFx0bGluaz17W3sgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9wbmcnLCBocmVmOiAnZmF2aWNvbicgfV19XG5cdFx0XHRzY3JpcHQ9e1tcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHR5cGU6ICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcblx0XHRcdFx0XHRpbm5lckhUTUw6IEpTT04uc3RyaW5naWZ5KHJpY2hyZXN1bHQpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XX1cblx0XHQvPlxuXHQpO1xufTtcbiIsImltcG9ydCB7IFNFUlZJQ0VfVVJMIH0gZnJvbSAnLi8nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IHNlcnZpY2VQb3N0ID0gYXN5bmMgKHBhdGgsIHBheWxvYWQsIGhlYWRlcnMgPSBudWxsKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke1NFUlZJQ0VfVVJMfS8ke3BhdGh9YCwgcGF5bG9hZCwge1xuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXJ2aWNlR2V0ID0gYXN5bmMgKHBhdGgsIHBheWxvYWQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgJHtTRVJWSUNFX1VSTH0vJHtwYXRofWAsIHBheWxvYWQpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XG4iLCJleHBvcnQgKiBmcm9tICcuL1ByaXZhdGVSb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL1Nlbyc7XG5leHBvcnQgKiBmcm9tICcuL3NldEF1dGhUb2tlbic7XG5leHBvcnQgKiBmcm9tICcuL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBzZXRBdXRoVG9rZW4gPSAodG9rZW4pID0+IHtcbiAgY29uc29sZS5sb2codG9rZW4pO1xuICBpZiAodG9rZW4pIHtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEpXVCAke3Rva2VufWA7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ107XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3Qgc2Nyb2xsVG8gPSAoZWxlbWVudCkgPT4ge1xuXHRpc0NsaWVudCAmJlxuXHRcdHdpbmRvdy5zY3JvbGwoe1xuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG5cdFx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNDbGllbnQgPVxuXHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPyB0cnVlIDogZmFsc2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LXRpcHB5JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBEZWxldGUsIFVwZGF0ZSwgQWRkIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcblxuY29uc3QgVG9vbHRpcFdyYXBwZXIgPSAoeyB0aXRsZSwgcG9zaXRpb24sIGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VG9vbHRpcCB0aXRsZT17dGl0bGV9IHBvc2l0aW9uPXtwb3NpdGlvbn0gdHJpZ2dlcj0nbW91c2VlbnRlcic+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9Ub29sdGlwPlxuXHQpO1xufTtcblxuY29uc3QgQWRtaW5CdXR0b25zID0gKHsgdHlwZSwgdXJsLCBoYW5kbGVyLCBpc0FkbWluLCBkYXRhID0ge30gfSkgPT5cblx0aXNBZG1pbiA/IChcblx0XHQ8VG9vbHRpcFdyYXBwZXIgdGl0bGU9e2Ake3R5cGV9IFwiJHtkYXRhLm5hbWV9XCJgfSBwb3NpdGlvbj17J3RvcCd9PlxuXHRcdFx0PEFkbWluQnV0dG9uc1dyYXBwZXJcblx0XHRcdFx0dHlwZT17dHlwZX1cblx0XHRcdFx0dXJsPXt1cmx9XG5cdFx0XHRcdGhhbmRsZXI9e2hhbmRsZXJ9XG5cdFx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0XHQvPlxuXHRcdDwvVG9vbHRpcFdyYXBwZXI+XG5cdCkgOlxuXHRcdDxBZG1pbkJ1dHRvbnNXcmFwcGVyXG5cdFx0XHR0eXBlPXtcIk5vbmVcIn1cblx0XHRcdHVybD17dXJsfVxuXHRcdFx0aGFuZGxlcj17aGFuZGxlcn1cblx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0Lz5cblx0O1xuXG5jb25zdCBBZG1pbkJ1dHRvbnNXcmFwcGVyID0gKHsgdHlwZSwgdXJsLCBoYW5kbGVyLCBkYXRhIH0pID0+IHtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSAnQWRkJzpcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxMaW5rIHRvPXt1cmx9PlxuXHRcdFx0XHRcdDxBZGQgc2l6ZT0nMjAnIGNvbG9yPScjMDAwJyAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQpO1xuXG5cdFx0Y2FzZSAnRWRpdCc6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdHRvPXt7XG5cdFx0XHRcdFx0XHRwYXRobmFtZTogdXJsLFxuXHRcdFx0XHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0XHRcdFx0bmFtZTogZGF0YS5uYW1lLFxuXHRcdFx0XHRcdFx0XHRpc0xvY2tlZDogZGF0YS5sb2NrZWQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxVcGRhdGUgc2l6ZT0nMjAnIGNvbG9yPScjMDAwJyAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQpO1xuXG5cdFx0Y2FzZSAnRGVsZXRlJzpcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgb3V0bGluZTogXCJub25lXCIgfX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyKGRhdGEpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0LXRvcGljLW1vZGFsLXRvZ2dsZSc+XG5cdFx0XHRcdFx0PERlbGV0ZSBzaXplPScyMCcgY29sb3I9J2NyaW1zb24nIC8+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0KTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gPGJ1dHRvbiBocmVmPVwiI1wiXG5cdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6IFwibm9uZVwiLCBib3JkZXI6IFwibm9uZVwiLCBvdXRsaW5lOiBcIm5vbmVcIiwgfX1cblx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0LXRvcGljLW1vZGFsLXRvZ2dsZSc+XG5cdFx0XHRcdDxEZWxldGUgc2l6ZT0nMCcgY29sb3I9JycgLz5cblx0XHRcdDwvYnV0dG9uPjtcblx0fVxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHRpc0FkbWluOiBzdGF0ZS5hdXRoLmlzQWRtaW4sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEFkbWluQnV0dG9ucyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgTG9jaywgUmVhZCwgVW5sb2NrIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcblxuY29uc3QgSW5uZXJEaXYgPSAoeyBoYW5kbGVyLCBjaGlsZHJlbiwgZGFyaywgYmcgfSkgPT5cblx0Y2hpbGRyZW4gPyAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtgYnV0dG9uICR7ZGFyayAmJiAnZGFyayd9YH1cblx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCR7YmcgJiYgJ2JnJ31gIH19XG5cdFx0XHRvbkNsaWNrPXtoYW5kbGVyID8gaGFuZGxlciA6IChlKSA9PiBjb25zb2xlLmxvZyhlLCBoYW5kbGVyKX0+XG5cdFx0XHQ8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXHRcdFx0PHN2Zz5cblx0XHRcdFx0PHBvbHlsaW5lXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdvMSdcblx0XHRcdFx0XHRwb2ludHM9JzAgMCwgMTUwIDAsIDE1MCA1NSwgMCA1NSwgMCAwJz48L3BvbHlsaW5lPlxuXHRcdFx0XHQ8cG9seWxpbmVcblx0XHRcdFx0XHRjbGFzc05hbWU9J28yJ1xuXHRcdFx0XHRcdHBvaW50cz0nMCAwLCAxNTAgMCwgMTUwIDU1LCAwIDU1LCAwIDAnPjwvcG9seWxpbmU+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0KSA6IChcblx0XHQ8PlxuXHRcdFx0eycgICAnfVxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdDxSZWFkIHNpemU9ezE5fSAvPlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvPlxuXHQpO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIHVybCwgZGFyaywgYmcsIGlzQnV0dG9uLCBoYW5kbGVyIH0pID0+IHtcblx0cmV0dXJuIHR5cGVvZiBpc0J1dHRvbiA9PSAndW5kZWZpbmVkJyA/IChcblx0XHQ8TGluayB0bz17dXJsICYmIHVybH0+XG5cdFx0XHQ8SW5uZXJEaXYgZGFyaz17ZGFya30gYmc9e2JnfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9Jbm5lckRpdj5cblx0XHQ8L0xpbms+XG5cdCkgOiAoXG5cdFx0PElubmVyRGl2IGRhcms9e2Rhcmt9IGJnPXtiZ30gaGFuZGxlcj17aGFuZGxlcn0+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9Jbm5lckRpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBMb2NrQnV0dG9uID0gKHsgaXNMb2NrZWQsIGhhbmRsZXIgfSkgPT4ge1xuXHRyZXR1cm4gPHNwYW4gb25DbGljaz17aGFuZGxlcn0+e2lzTG9ja2VkID8gPExvY2sgLz4gOiA8VW5sb2NrIC8+fTwvc3Bhbj47XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9BZG1pbkJ1dHRvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9Vc2VyQnV0dG9ucyc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZvb3RlclNvY2lhbE1lZGlhID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhXCI+XG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2dtYWlsLmNvbVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8zMDMxNjEvZ21haWwtaWNvbi1sb2dvLnN2Z1wiXG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE4MzYwOC90d2l0dGVyLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICA8L2E+XG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vYmloYW5pLnByaXlhXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xMTExOTkvaW5zdGFncmFtLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICA8L2E+XG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb21cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMjE3NzUzL2dpdGh1Yi5zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdpdGh1YlwiXG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvb3Rlck1lc3NhZ2UoKVxuICB9KVxuXG4gIGNvbnN0IHNldEZvb3Rlck1lc3NhZ2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldE1lc3NhZ2UoJ0VudGVyIFlvdXIgRW1haWwgaGVyZSB0byBzdWJzY3JpYmUgZm9yIE5ld3NsZXR0ZXInKSB9XG4gICAgLCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRcIj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1jb2xcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5Db2RlcnMgR2FsYTwvc3Bhbj5cbiAgICAgICAgICAgIDxGb290ZXJTb2NpYWxNZWRpYSAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmlnaHRzLXRleHRcIj5cbiAgICAgICAgICAgICAgJmNvcHk7IDIwMjAgQ29kZXJzIEdhbGEgLCBBbGwgUmlnaHRzIFJlc2VydmVkXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb2xcIj5cbiAgICAgICAgICAgIDxoMT5PdXIgTmV3c2xldHRlcjwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPjwvZGl2PlxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiIGZvcm0gbmV3c2xldHRlci1mb3JtXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRiXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIlxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG5cIiAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24sIENvbCwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXREaXNwbGF5TW9kZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdWknO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuLy8gPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09XG5pbXBvcnQgU2lnbmVkT3V0TGlua3MgZnJvbSAnLi9TaWduZWRPdXRMaW5rcyc7XG5pbXBvcnQgU2lnbmVkSW5MaW5rcyBmcm9tICcuL1NpZ25lZEluTGlua3MnO1xuLy8gPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09XG5cbi8vIGxvZ28gaW1wb3J0c1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9jZ1RyYW5zcGFyZW50LlBORyc7XG5cbmNvbnN0IE5hdmJhciA9ICh7IGF1dGgsIHVpLCBzZXREaXNwbGF5TW9kZSB9KSA9PiB7XG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Y29uc3QgW25hdmJhckV4cGFuZGVkLCBzZXRuYXZiYXJFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzd2l0Y2hlZCwgc2V0c3dpdGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQodWkuZGlzcGxheU1vZGUpO1xuXHRcdGNvbnNvbGUubG9nKHVpLmRpc3BsYXlNb2RlKTtcblx0XHRpZiAodWkuZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuXHRcdFx0c2V0c3dpdGNoZWQodHJ1ZSk7XG5cdFx0fVxuXHR9LCBbc2V0c3dpdGNoZWQsIHVpLmRpc3BsYXlNb2RlXSk7XG5cblx0Ly8gR2V0dGluZyB0aGUgY3VycmVudCBtb2RlIGZyb20gbG9jYWwgc3RvcmFnZVxuXHRpZiAoaXNDbGllbnQpIHtcblx0XHRsZXQgbW9kZSA9ICdsaWdodCc7XG5cblx0XHRtb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKTtcblxuXHRcdGlmIChtb2RlID09PSAnZGFyaycpIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly9cblxuXHQvLyBjb25zdCBsaW5rcyA9IDxTaWduZWRPdXRMaW5rcyAvPjtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSduYXZpZ2F0aW9uLXdyYXAgYmctbGlnaHQgc3RhcnQtaGVhZGVyIHN0YXJ0LXN0eWxlJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuXHRcdFx0XHQ8QWNjb3JkaW9uPlxuXHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbmF2YmFyLWxpZ2h0Jz5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz0nLyc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IGlzQ2xpZW50ICYmIHdpbmRvdy5pbm5lckhlaWdodCA+PSA3NjcgPyAnMnJlbScgOiAnMS4ycmVtJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbG9nbydcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtMb2dvfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9Jydcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdzd2l0Y2gnXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldERpc3BsYXlNb2RlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldHN3aXRjaGVkKCFzd2l0Y2hlZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgc3dpdGNoIGZsb2F0LXJpZ2h0ICR7c3dpdGNoZWQgPyAnc3dpdGNoZWQnIDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVpLmRpc3BsYXlNb2RlID09PSAnZGFyaycgPyAnIzExMScgOiAnI2YxZjFmMScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjaXJjbGUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtb2RlLWljb24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1aS5kaXNwbGF5TW9kZSA9PT0gJ2RhcmsnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMzE1OC9tb29uLnN2Zydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy84MzcyNi9zdW4uc3ZnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9Jydcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwb2ludHMtYm94ICc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3BvaW50cy10ZXh0Jz4gUG9pbnRzIDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiQ0cgUG9pbnRzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzcxNS83MTU3MDkuc3ZnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwb2ludHMtaW1nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+IHthdXRoLnVzZXIgJiYgYXV0aC51c2VyLnBvaW50c30gPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2lnbmVkLWxpbmtzJz5cblx0XHRcdFx0XHRcdFx0XHRcdHthdXRoLmlzQXV0aGVudGljYXRlZCAmJiBhdXRoLmlzQXV0aGVudGljYXRlZCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2lnbmVkSW5MaW5rcyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTaWduZWRPdXRMaW5rcyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uVG9nZ2xlXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1idG4nXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldG5hdmJhckV4cGFuZGVkKCFuYXZiYXJFeHBhbmRlZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0YXM9e0J1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2xpbmsnXG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudEtleT0nNSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdmJhci10b2dnbGVyJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PScjbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17bmF2YmFyRXhwYW5kZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J1RvZ2dsZSBuYXZpZ2F0aW9uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlci1pY29uJz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9BY2NvcmRpb24uVG9nZ2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uQ29sbGFwc2Vcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nICdcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRLZXk9JzUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2F1dGgudXNlciAmJiBhdXRoLnVzZXIudXNlcklkID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTaWduZWRJbkxpbmtzIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNpZ25lZE91dExpbmtzIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Db2xsYXBzZT5cblx0XHRcdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbi8vICAgYXV0aDogc3RhdGUuYXV0aCxcbi8vIH0pO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHRhdXRoOiBzdGF0ZS5hdXRoLFxuXHRcdHVpOiBzdGF0ZS51aSxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IHNldERpc3BsYXlNb2RlIH0pKE5hdmJhcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuY29uc3QgU2lnbmVkSW5MaW5rcyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PHVsIGNsYXNzTmFtZT0nbmF2YmFyLW5hdiBtbC1hdXRvIHB5LTQgcHktbWQtMCc+XG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTQnPlxuXHRcdFx0XHRcdDxOYXZMaW5rIHRvPScvaG9tZScgY2xhc3NOYW1lPSduYXYtbGluayc+XG5cdFx0XHRcdFx0XHRIb21lXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00Jz5cblx0XHRcdFx0XHQ8TmF2TGluayB0bz0nL2Fib3V0JyBjbGFzc05hbWU9J25hdi1saW5rJz5cblx0XHRcdFx0XHRcdEFib3V0XG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00Jz5cblx0XHRcdFx0XHQ8TmF2TGlua1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbGluayAnXG5cdFx0XHRcdFx0XHR0bz0nL2xlYXJuJ1xuXHRcdFx0XHRcdFx0cm9sZT0nYnV0dG9uJ1xuXHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnPlxuXHRcdFx0XHRcdFx0TGVhcm5cblx0XHRcdFx0XHQ8L05hdkxpbms+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPjwvZGl2PlxuXHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTQnPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGhyZWY9Jy8nXG5cdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1saW5rJz5cblx0XHRcdFx0XHRcdExvZ091dFxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduZWRJbkxpbmtzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgU2lnbmVkT3V0TGlua3MgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG8gcHktNCBweS1tZC0wXCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00XCI+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvaG9tZVwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBcIlxuICAgICAgICAgICAgdG89XCIvbGVhcm5cIlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIExlYXJuXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPjwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBcIlxuICAgICAgICAgICAgdG89XCIvbG9naW5cIlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPjwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25lZE91dExpbmtzO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9CdXR0b25zJztcbmV4cG9ydCAqIGZyb20gJy4vRm9vdGVyJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBQcmVsb2FkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItc2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItYm94XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlcjFcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlcjJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlcjNcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlciIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgYXJ0aWNsZXM6IFtdIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFydGljbGVSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcblx0Y29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XG5cblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSAnQUREX0FSVElDTEUnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRvcGljczogcGF5bG9hZCxcblx0XHRcdH07XG5cblx0XHRjYXNlICdHRVRfQVJUSUNMRSc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VsZWN0ZWRBcnRpY2xlOiBwYXlsb2FkLmFydGljbGUsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0dFVF9BTExfQVJUSUNMRVMnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGFydGljbGVzOiBwYXlsb2FkLmFydGljbGVzLFxuXHRcdFx0fTtcblx0XHRjYXNlICdDTEVBUl9BUlRJQ0xFJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZWxlY3RlZEFydGljbGU6IHt9LFxuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ0FERF9BUlRJQ0xFX0VSUk9SJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdExPR0lOX1NVQ0NFU1MsXG5cdExPR0lOX0ZBSUwsXG5cdFJFR0lTVEVSX1NVQ0NFU1MsXG5cdFJFR0lTVEVSX0ZBSUwsXG5cdFVTRVJfTE9BREVELFxuXHRBVVRIX0VSUk9SLFxuXHRMT0dPVVQsXG5cdFNFTkRfUkVTRVRfRU1BSUwsXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHR0b2tlbjogaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyksXG5cdGlzQXV0aGVudGljYXRlZDogbnVsbCxcblx0bG9hZGluZzogZmFsc2UsXG5cdHVzZXI6IG51bGwsXG5cdGlzQWRtaW46IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuXG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgVVNFUl9MT0FERUQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlcjogcGF5bG9hZCxcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuXHRcdFx0XHRpc0FkbWluOiBwYXlsb2FkLnJvbGUgPT09IDAgPyBmYWxzZSA6IHRydWUsXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHRjYXNlIFJFR0lTVEVSX1NVQ0NFU1M6XG5cdFx0Y2FzZSBMT0dJTl9TVUNDRVNTOlxuXHRcdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcGF5bG9hZC50b2tlbik7XG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgcGF5bG9hZC51c2VySWQpO1xuXHRcdFx0Y29uc29sZS5sb2cocGF5bG9hZCk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHQuLi5wYXlsb2FkLFxuXHRcdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHRjYXNlIFJFR0lTVEVSX0ZBSUw6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHR9O1xuXHRcdGNhc2UgTE9HSU5fRkFJTDpcblx0XHRjYXNlIEFVVEhfRVJST1I6XG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcblx0XHRcdGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySWQnKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0b2tlbjogbnVsbCxcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdHVzZXJJZDogbnVsbCxcblx0XHRcdH07XG5cdFx0Y2FzZSBMT0dPVVQ6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dG9rZW46IG51bGwsXG5cdFx0XHRcdGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHRjYXNlIFNFTkRfUkVTRVRfRU1BSUw6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Li4ucGF5bG9hZCxcblx0XHRcdH07XG5cblx0XHRjYXNlICdTRVRfQVVUSF9MT0FERVInOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgc3BlY2lhbGl0eSBmcm9tICcuL3NwZWNpYWxpdHknO1xuaW1wb3J0IHRvcGljIGZyb20gJy4vdG9waWMnO1xuaW1wb3J0IGFydGljbGUgZnJvbSAnLi9hcnRpY2xlJztcbmltcG9ydCB1aSBmcm9tICcuL3VpJztcbmltcG9ydCB2aWRlbyBmcm9tICcuL3ZpZGVvJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcblx0YXV0aCxcblx0c3BlY2lhbGl0eSxcblx0dG9waWMsXG5cdGFydGljbGUsXG5cdHVpLFxuXHR2aWRlbyxcbn0pO1xuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRzcGVjaWFsaXRpZXM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BlY2lhbGl0eVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblxuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUSUVTJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzcGVjaWFsaXRpZXM6IHBheWxvYWQsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0dFVF9TUEVDSUFMSVRZJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzcGVjaWFsaXR5OiBwYXlsb2FkLFxuXHRcdFx0fTtcblx0XHRjYXNlICdDTEVBUl9TUEVDSUFMSVRZJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzcGVjaWFsaXR5OiB7fSxcblx0XHRcdH07XG5cdFx0Y2FzZSAnR0VUX1NQRUNJQUxJVElFU19FUlJPUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdH07XG5cblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUWV9FUlJPUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHRvcGljczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b3BpY1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblxuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdHRVRfVE9QSUNTJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0b3BpY3M6IHBheWxvYWQsXG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnR0VUX1RPUElDU19FUlJPUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRvcGVuVG9waWNzOiBbXSxcblx0ZGlzcGxheU1vZGU6XG5cdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKVxuXHRcdFx0PyBpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpXG5cdFx0XHQ6ICdsaWdodCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1aVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSAnU0VUX09QRU5fVE9QSUNTJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRvcGVuVG9waWNzOiBwYXlsb2FkLFxuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfRElTUExBWV9NT0RFJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRkaXNwbGF5TW9kZTogcGF5bG9hZCxcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHNlbGVjdGVkVmlkZW86IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblxuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRjYXNlICdBRERfVklERU8nOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRvcGljczogcGF5bG9hZCxcblx0XHRcdH07XG5cblx0XHRjYXNlICdHRVRfVklERU8nOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNlbGVjdGVkVmlkZW86IHBheWxvYWQudmlkZW8sXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFTEVDVF9WSURFTyc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VsZWN0ZWRWaWRlbzogcGF5bG9hZCxcblx0XHRcdH07XG5cdFx0Y2FzZSAnQ0xFQVJfVklERU8nOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNlbGVjdGVkVmlkZW86IHt9LFxuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ0FERF9WSURFT19FUlJPUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgUHJvZmlsZUNhcmQgPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwicHJvZmlsZS1jYXJkXCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxoMT57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgIDxoMj5IZWxsbyE8L2gyPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYmlvXCI+XG4gICAgICAgIDxwPntkYXRhLmJpb308L3A+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgbGlzdC11bnN0eWxlZCBsaXN0LWlubGluZVwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtkYXRhLnBvcnRmb2xpb1VybH0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzE4ODk5MC9icm93c2VyLXdlYnNpdGUuc3ZnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2RhdGEuaW5zdGFVcmx9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiIH19XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xMTExOTkvaW5zdGFncmFtLnN2Z1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtkYXRhLnR3aXR0ZXJVcmx9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiIH19XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xODM2MDgvdHdpdHRlci5zdmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17ZGF0YS5naXRodWJVcmx9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjVweFwiIH19XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8yMTc3NTMvZ2l0aHViLnN2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FzaWRlPlxuICApO1xufTtcblxuY29uc3QgQWJvdXRVcyA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBteUZ1bmN0aW9uKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNTUwKSB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZS1jYXJkXCIpXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLWNhcmQtYW5pbVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdXMtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzLWhlYWRpbmdcIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBBYm91dCA8c3Bhbj5Vczwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11cy10ZXh0XCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVvZCBkb2xvclxuICAgICAgICAgIGRvbG9yZSBvZGl0LCBuZXF1ZSBpdGFxdWUgaXVyZSBxdWFzIG1vbGxpdGlhIG5paGlsIGN1bXF1ZSByZW0gaGFydW1cbiAgICAgICAgICBjb25zZXF1dW50dXIgY29uc2VjdGV0dXIuIEF1dGVtIGZ1Z2l0LCBkb2xvcmlidXMgc2ludCBlbmltIGVycm9yIHNlcXVpXG4gICAgICAgICAgcXVvIHJlbSBtaW5pbWEgbWFnbmkgZXhjZXB0dXJpIGV4cGVkaXRhIG1vbGxpdGlhIHJlY3VzYW5kYWUgaGFydW1cbiAgICAgICAgICBhbGlhcyByZXBlbGxlbmR1cywgc2l0IHZvbHVwdGF0ZSBmYWNpbGlzIHNpbWlsaXF1ZSBhdCBpbiBhc3BlcmlvcmVzXG4gICAgICAgICAgc3VudCBpbmFtIHNhZXBlIHF1aS4gTmlzaSBtaW5pbWEgaXBzYSBpbGxvIHRlbXBvcmUgcXVvZCBlbmltIGV1bVxuICAgICAgICAgIHF1aWRlbT9cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jYXJkc1wiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbGc9ezZ9PlxuICAgICAgICAgICAgPFByb2ZpbGVDYXJkXG4gICAgICAgICAgICAgIGRhdGE9e3tcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlByaXlhXCIsXG4gICAgICAgICAgICAgICAgcG9ydGZvbGlvVXJsOiBcImh0dHBzOi8va25vdy1wcml5YS1iaWhhbmkudmVyY2VsLmFwcFwiLFxuICAgICAgICAgICAgICAgIGluc3RhVXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYmloYW5pLnByaXlhXCIsXG4gICAgICAgICAgICAgICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vUHJpeWFCaWhhbmlcIixcbiAgICAgICAgICAgICAgICB0d2l0dGVyVXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vcF9iaWhhbmlcIixcbiAgICAgICAgICAgICAgICBiaW86XG4gICAgICAgICAgICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdW50IHRlbXBvcmEgZXZlbmlldCBxdWFlIG5lcXVlIGhpYyBkb2xvcmlidXMgdm9sdXB0YXRpYnVzIGluY2lkdW50IHF1aWEgZmFjaWxpcyBibGFuZGl0aWlzLlwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDxDb2wgbGc9ezZ9PlxuICAgICAgICAgICAgPFByb2ZpbGVDYXJkXG4gICAgICAgICAgICAgIGRhdGE9e3tcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkthcnRpa1wiLFxuICAgICAgICAgICAgICAgIHBvcnRmb2xpb1VybDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbiAgICAgICAgICAgICAgICBpbnN0YVVybDogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2JpaGFuaS5wcml5YVwiLFxuICAgICAgICAgICAgICAgIGdpdGh1YlVybDogXCJodHRwczovL3d3dy5naXRodWIuY29tL2thcnRpazE4Z1wiLFxuICAgICAgICAgICAgICAgIHR3aXR0ZXJVcmw6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9Ha2FhcnRpa1wiLFxuICAgICAgICAgICAgICAgIGJpbzpcbiAgICAgICAgICAgICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdGVtcG9yYSBldmVuaWV0IHF1YWUgbmVxdWUgaGljIGRvbG9yaWJ1cyB2b2x1cHRhdGlidXMgaW5jaWR1bnQgcXVpYSBmYWNpbGlzIGJsYW5kaXRpaXMuXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRVcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUXVlc3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25zLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzLXMtMVwiPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgQWJvdXQgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPkNvZGVycyBHYWxhPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtZGluXCI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgV2hhdCBpcyA8c3BhbiBjbGFzc05hbWU9XCJcIj5Db2RlcnMgR2FsYTwvc3Bhbj4/XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBkb2xvciBleHBsaWNhYm8gb3B0aW9cbiAgICAgICAgICBmdWdpYXQgcXVvIG51bXF1YW0hIE1vbGxpdGlhLCBmYWNpbGlzIGFwZXJpYW0gbmloaWwgdm9sdXB0YXRlXG4gICAgICAgICAgY29uc2VxdXVudHVyIGRvbG9yZSwgaGljIGFiIHRvdGFtIGJsYW5kaXRpaXMgbG9yZW0zMCBhY2N1c2FudGl1bSxcbiAgICAgICAgICBtYWduYW0gb2RpdCBldW0/XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aHktZGluXCI+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgV2h5IDxzcGFuIGNsYXNzTmFtZT1cIlwiPkNvZGVycyBHYWxhPC9zcGFuPj9cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pIGRvbG9yIGV4cGxpY2FibyBvcHRpb1xuICAgICAgICAgIGZ1Z2lhdCBxdW8gbnVtcXVhbSEgTW9sbGl0aWEsIGZhY2lsaXMgYXBlcmlhbSBuaWhpbCB2b2x1cHRhdGVcbiAgICAgICAgICBjb25zZXF1dW50dXIgZG9sb3JlLCBoaWMgYWIgdG90YW0gYmxhbmRpdGlpcyBhY2N1c2FudGl1bSwgbWFnbmFtIG9kaXRcbiAgICAgICAgICBldW0/XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtZGluXCI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgV2hhdCBpcyA8c3BhbiBjbGFzc05hbWU9XCJcIj5Db2RlcnMgR2FsYTwvc3Bhbj4/XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBkb2xvciBleHBsaWNhYm8gb3B0aW9cbiAgICAgICAgICBmdWdpYXQgcXVvIG51bXF1YW0hIE1vbGxpdGlhLCBmYWNpbGlzIGFwZXJpYW0gbmloaWwgdm9sdXB0YXRlXG4gICAgICAgICAgY29uc2VxdXVudHVyIGRvbG9yZSwgaGljIGFiIHRvdGFtIGJsYW5kaXRpaXMgbG9yZW0zMCBhY2N1c2FudGl1bSxcbiAgICAgICAgICBtYWduYW0gb2RpdCBldW0/XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25zO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgQWxsID0gKHsgYXJ0aWNsZXMgfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZF9fY29sLTNcIj5cbiAgICAgICAgICAgIHthcnRpY2xlcyAmJlxuICAgICAgICAgICAgICAgIGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBBcnRpY2xlSWQgPSBhcnRpY2xlICYmIGFydGljbGUuX2lkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19pdGVtLW1kXCIga2V5PXtBcnRpY2xlSWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2Jsb2cvcmVhZC8ke2FydGljbGUgJiYgYXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIi1cIil9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUudGh1bWJuYWlsVXJsID8gYXJ0aWNsZS50aHVtYm5haWxVcmwgOiBcImh0dHBzOi8vY29kZXJzZ2FsYS5jb20vc3RhdGljL21lZGlhL2NnVHJhbnNwYXJlbnQuNmE5YzM0OTYuUE5HXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkX19pdGVtX19pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmlkX19pdGVtX19jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUgJiYgbW9tZW50KGFydGljbGUuY3JlYXRlZEF0KS5mb3JtYXQoXCJERCBNTSBZWVlZXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJncmlkX19pdGVtX190aXRsZVwiPnthcnRpY2xlICYmIGFydGljbGUubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmlkX19pdGVtX19hdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IENvZGVyc0dhbGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IEZlYXR1cmVkID0gKHsgYXJ0aWNsZXMgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHR7YXJ0aWNsZXMgJiZcblx0XHRcdFx0YXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGFydGljbGUgJiYgYXJ0aWNsZS5mZWF0dXJlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYXJ0aWNsZSk7XG5cdFx0XHRcdFx0XHRjb25zdCBBcnRpY2xlSWQgPSBhcnRpY2xlICYmIGFydGljbGUuX2lkO1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWRfX2l0ZW0tc20nIGtleT17YXJ0aWNsZSAmJiBhcnRpY2xlLmlkfT5cblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0dG89e2AvYmxvZy9yZWFkLyR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFydGljbGUgJiYgYXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCAnLScpXG5cdFx0XHRcdFx0XHRcdFx0XHR9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2dyaWRfX2l0ZW1fX2NhdGVnb3J5Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YXJ0aWNsZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9tZW50KGFydGljbGUuY3JlYXRlZEF0KS5mb3JtYXQoJ0REIE1NIFlZWVknKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdncmlkX19pdGVtX190aXRsZSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2FydGljbGUgJiYgYXJ0aWNsZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZ3JpZF9faXRlbV9fYXV0aG9yJz5CeSBDb2RlcnNHYWxhPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFydGljbGUudGh1bWJuYWlsVXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gYXJ0aWNsZS50aHVtYm5haWxVcmxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnaHR0cHM6Ly9jb2RlcnNnYWxhLmNvbS9zdGF0aWMvbWVkaWEvY2dUcmFuc3BhcmVudC42YTljMzQ5Ni5QTkcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZ3JpZF9faXRlbV9faW1nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IExhdGVzdCA9ICh7IGFydGljbGUgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFydGljbGUgJiYgYXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIi1cIikpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19pdGVtLWxnXCI+YFxuICAgICAgICAgICAge2FydGljbGUgJiYgPE5hdkxpbmsgdG89e2AvYmxvZy9yZWFkLyR7YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiLVwiKX1gfT5cbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17YXJ0aWNsZS50aHVtYm5haWxVcmwgPyBhcnRpY2xlLnRodW1ibmFpbFVybCA6IFwiaHR0cHM6Ly9jb2RlcnNnYWxhLmNvbS9zdGF0aWMvbWVkaWEvY2dUcmFuc3BhcmVudC42YTljMzQ5Ni5QTkdcIn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9faW1nXCIgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9faW1nXCIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmlkX19pdGVtX19jYXRlZ29yeVwiPiB7YXJ0aWNsZSAmJiBtb21lbnQoYXJ0aWNsZS5jcmVhdGVkQXQpLmZvcm1hdChcIkREIE1NIFlZWVlcIil9PC9wPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJncmlkX19pdGVtX190aXRsZVwiPnthcnRpY2xlLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmlkX19pdGVtX19hdXRob3JcIj5CeSBDb2RlcnNHYWxhPC9wPlxuICAgICAgICAgICAgPC9OYXZMaW5rPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhdGVzdDtcbiIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnO1xuLy8gaW1wb3J0IFJlYWN0UXVpbGwsIHsgUXVpbGwgfSBmcm9tICdyZWFjdC1xdWlsbCc7XG4vLyBsZXQgQmxvY2tFbWJlZCA9IFF1aWxsLmltcG9ydCgnYmxvdHMvYmxvY2svZW1iZWQnKTtcbi8vIGxldCBJbmxpbmUgPSBRdWlsbC5pbXBvcnQoJ2Jsb3RzL2lubGluZScpO1xuLy8gaGxqcy5jb25maWd1cmUoe1xuLy8gICAgIGxhbmd1YWdlczogWydqYXZhc2NyaXB0JywgJ3B5dGhvbicsICdodG1sJywgJ2NzcyddLFxuLy8gfSk7XG5cbi8vIGNvbnN0IEN1c3RvbUJ1dHRvbiA9ICgpID0+IChcbi8vICAgICA8aW1nXG4vLyAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcgfX1cbi8vICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy83NzU4NC9pbWFnZS5zdmdcIlxuLy8gICAgICAgICBhbHQ9XCJcIlxuLy8gICAgIC8+XG4vLyApO1xuXG4vLyAvLyBjb25zdCBDb2RlTGluZSA9ICgpID0+IChcbi8vIC8vICAgPGltZ1xuLy8gLy8gICAgIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcgfX1cbi8vIC8vICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzI5NDE0NS9jb2RlLnN2Z1wiXG4vLyAvLyAgICAgYWx0PVwiXCJcbi8vIC8vICAgLz5cbi8vIC8vICk7XG5cbi8vIGNvbnN0IFNpemUgPSBRdWlsbC5pbXBvcnQoJ2Zvcm1hdHMvc2l6ZScpO1xuLy8gU2l6ZS53aGl0ZWxpc3QgPSBbXG4vLyAgICAgJzEnLFxuLy8gICAgICcyJyxcbi8vICAgICAnNCcsXG4vLyAgICAgJzYnLFxuLy8gICAgICc4Jyxcbi8vICAgICAnMTAnLFxuLy8gICAgICcxMicsXG4vLyAgICAgJzE0Jyxcbi8vICAgICAnMTYnLFxuLy8gICAgICcyMCcsXG4vLyAgICAgJzI0Jyxcbi8vICAgICAnMjYnLFxuLy8gICAgICczMCcsXG4vLyBdO1xuLy8gUXVpbGwucmVnaXN0ZXIoU2l6ZSwgdHJ1ZSk7XG5cbi8vIGNsYXNzIGlubGluZUNvZGVCbG90IGV4dGVuZHMgSW5saW5lIHsgfVxuLy8gaW5saW5lQ29kZUJsb3QuYmxvdE5hbWUgPSAnaW5saW5lQ29kZSc7XG4vLyBpbmxpbmVDb2RlQmxvdC50YWdOYW1lID0gJ2NvZGUnO1xuXG4vLyBjbGFzcyBJbWFnZUJsb3QgZXh0ZW5kcyBCbG9ja0VtYmVkIHtcbi8vICAgICBzdGF0aWMgY3JlYXRlKHZhbHVlKSB7XG4vLyAgICAgICAgIGxldCBub2RlID0gc3VwZXIuY3JlYXRlKCk7XG4vLyAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhbHQnLCB2YWx1ZS5hbHQpO1xuLy8gICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgdmFsdWUudXJsKTtcbi8vICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdmFsdWUuY2xhc3MpO1xuLy8gICAgICAgICByZXR1cm4gbm9kZTtcbi8vICAgICB9XG5cbi8vICAgICBzdGF0aWMgdmFsdWUobm9kZSkge1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgYWx0OiBub2RlLmdldEF0dHJpYnV0ZSgnYWx0JyksXG4vLyAgICAgICAgICAgICB1cmw6IG5vZGUuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbi8vICAgICAgICAgICAgIGNsYXNzOiBub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSxcbi8vICAgICAgICAgfTtcbi8vICAgICB9XG4vLyB9XG4vLyBJbWFnZUJsb3QuYmxvdE5hbWUgPSAnaW1hZ2UnO1xuLy8gSW1hZ2VCbG90LnRhZ05hbWUgPSAnaW1nJztcbi8vIFF1aWxsLnJlZ2lzdGVyKEltYWdlQmxvdCk7XG4vLyBRdWlsbC5yZWdpc3RlcihpbmxpbmVDb2RlQmxvdCk7XG5cbi8vIGNvbnN0IGluc2VydEltYWdlID0gKCkgPT4ge1xuLy8gICAgIGxldCB1cmwgPSBwcm9tcHQoJ0VudGVyIGxpbmsgVVJMJyk7XG4vLyAgICAgbGV0IGFsdCA9IHByb21wdCgnRW50ZXIgbGluayBhbHQnKTtcbi8vICAgICBsZXQgY2xhcyA9IHByb21wdCgnRW50ZXIgY2xhc3MgTmFtZScpO1xuLy8gICAgIGxldCByYW5nZSA9IHRoaXMucXVpbGwuZ2V0U2VsZWN0aW9uKHRydWUpO1xuLy8gICAgIGNvbnNvbGUubG9nKFF1aWxsLnNvdXJjZXMpO1xuLy8gICAgIHRoaXMucXVpbGwuaW5zZXJ0VGV4dChyYW5nZS5pbmRleCwgJ1xcbicsIFF1aWxsLnNvdXJjZXMuVVNFUik7XG4vLyAgICAgdGhpcy5xdWlsbC5pbnNlcnRFbWJlZChcbi8vICAgICAgICAgcmFuZ2UuaW5kZXggKyAxLFxuLy8gICAgICAgICAnaW1hZ2UnLFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICBhbHQ6IGFsdCxcbi8vICAgICAgICAgICAgIHVybDogdXJsLFxuLy8gICAgICAgICAgICAgY2xhc3M6IGNsYXMsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIFF1aWxsLnNvdXJjZXMuVVNFUlxuLy8gICAgICk7XG4vLyAgICAgdGhpcy5xdWlsbC5zZXRTZWxlY3Rpb24ocmFuZ2UuaW5kZXggKyAyLCBRdWlsbC5zb3VyY2VzLlNJTEVOVCk7XG4vLyB9O1xuXG4vLyBjb25zdCBpbnNlcnRJbmxpbmVDb2RlID0gKGUpID0+IHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5xdWlsbCk7XG4vLyAgICAgLy8gdGhpcy5xdWlsbC5mb3JtYXQoXCJpbmxpbmVDb2RlXCIsIHRydWUpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdpbmxpbmUgY29kZSBpbnMnKTtcbi8vIH07XG5cbi8vIGNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoKSA9PiAoXG4vLyAgICAgPGRpdiBpZD1cInRvb2xiYXJcIj5cbi8vICAgICAgICAgPHNlbGVjdFxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicWwtaGVhZGVyXCJcbi8vICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Jyd9XG4vLyAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGUucGVyc2lzdCgpfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxuLy8gICAgICAgICA8L3NlbGVjdD5cblxuLy8gICAgICAgICA8c2VsZWN0IGNsYXNzPVwicWwtZm9udFwiPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlcmlmXCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vbm9zcGFjZVwiPjwvb3B0aW9uPlxuLy8gICAgICAgICA8L3NlbGVjdD5cblxuLy8gICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLXNpemVcIj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIjJcIj5cbi8vICAgICAgICAgICAgICAgICAyXG4vLyAgICAgICAgICAgICA8L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI0XCI+MjQ8L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNlwiPjI2PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPlxuLy8gICAgICAgICA8L3NlbGVjdD5cblxuLy8gICAgICAgICA8c2VsZWN0IGNsYXNzPVwicWwtYWxpZ25cIj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZW50ZXJcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlnaHRcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqdXN0aWZ5XCI+PC9vcHRpb24+XG4vLyAgICAgICAgIDwvc2VsZWN0PlxuXG4vLyAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtYmFja2dyb3VuZFwiPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlZFwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdyZWVuXCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzRGNjlGOFwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9yYW5nZVwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZpb2xldFwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiNkMGQxZDJcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XG4vLyAgICAgICAgIDwvc2VsZWN0PlxuXG4vLyAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicWwtY29sb3JcIj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjREEwRjQ3XCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzREQ0UxRFwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiM0RjY5RjhcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcmFuZ2VcIj48L29wdGlvbj5cbi8vICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjOTkzM2ZmXCI+PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiI2QwZDFkMlwiPjwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD48L29wdGlvbj5cbi8vICAgICAgICAgPC9zZWxlY3Q+XG5cbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1ib2xkXCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaXRhbGljXCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtdW5kZXJsaW5lXCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtc3RyaWtlXCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtYmxvY2txdW90ZVwiPjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWRpcmVjdGlvblwiPjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWxpbmtcIj48L2J1dHRvbj5cbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1pbWFnZVwiPjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLXZpZGVvXCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gdmFsdWU9XCJvcmRlcmVkXCIgY2xhc3NOYW1lPVwicWwtbGlzdFwiPjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIHZhbHVlPVwiYnVsbGV0XCIgY2xhc3NOYW1lPVwicWwtbGlzdFwiPjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIHZhbHVlPVwiLTFcIiBjbGFzc05hbWU9XCJxbC1pbmRlbnRcIj48L2J1dHRvbj5cbi8vICAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIisxXCIgY2xhc3NOYW1lPVwicWwtaW5kZW50XCI+PC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtY29kZS1ibG9ja1wiPjwvYnV0dG9uPlxuXG4vLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaW5zZXJ0SW1hZ2VcIj5cbi8vICAgICAgICAgICAgIDxDdXN0b21CdXR0b24gLz5cbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgPC9kaXY+XG4vLyApO1xuXG4vLyAvKlxuLy8gICogRWRpdG9yIGNvbXBvbmVudCB3aXRoIGN1c3RvbSB0b29sYmFyIGFuZCBjb250ZW50IGNvbnRhaW5lcnNcbi8vICAqL1xuXG4vLyBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZWRpdG9ySHRtbDogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgfTtcbi8vICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuLy8gICAgIH1cblxuLy8gICAgIGhhbmRsZUNoYW5nZShodG1sKSB7XG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0b3JIdG1sOiBodG1sIH0pO1xuLy8gICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUVkaXRvcihodG1sKTtcbi8vICAgICB9XG5cbi8vICAgICByZW5kZXIoKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZWRpdG9ySHRtbCk7XG5cbi8vICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpO1xuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVkaXRvclwiPlxuLy8gICAgICAgICAgICAgICAgIDxDdXN0b21Ub29sYmFyIC8+XG4vLyAgICAgICAgICAgICAgICAgPFJlYWN0UXVpbGxcbi8vICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuLy8gICAgICAgICAgICAgICAgICAgICBtb2R1bGVzPXtFZGl0b3IubW9kdWxlc31cbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZWRpdG9ySHRtbCB8fCAnJ31cbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBFZGl0b3IubW9kdWxlcyA9IHtcbi8vICAgICBzeW50YXg6IHtcbi8vICAgICAgICAgaGlnaGxpZ2h0OiAodGV4dCkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKHRleHQpLnZhbHVlLFxuLy8gICAgIH0sXG4vLyAgICAgdG9vbGJhcjoge1xuLy8gICAgICAgICBjb250YWluZXI6ICcjdG9vbGJhcicsXG5cbi8vICAgICAgICAgaGFuZGxlcnM6IHtcbi8vICAgICAgICAgICAgIGluc2VydEltYWdlOiBpbnNlcnRJbWFnZSxcbi8vICAgICAgICAgICAgIGluc2VydElubGluZUNvZGU6IGluc2VydElubGluZUNvZGUsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgfSxcbi8vIH07XG5cbi8vIEVkaXRvci5mb3JtYXRzID0gW1xuLy8gICAgICdoZWFkZXInLFxuLy8gICAgICdmb250Jyxcbi8vICAgICAnc2l6ZScsXG4vLyAgICAgJ2JvbGQnLFxuLy8gICAgICdpdGFsaWMnLFxuLy8gICAgICd1bmRlcmxpbmUnLFxuLy8gICAgICdzdHJpa2UnLFxuLy8gICAgICdibG9ja3F1b3RlJyxcbi8vICAgICAnbGlzdCcsXG4vLyAgICAgJ2J1bGxldCcsXG4vLyAgICAgJ2luZGVudCcsXG4vLyAgICAgJ2xpbmsnLFxuLy8gICAgICdpbWFnZScsXG4vLyAgICAgJ2NvbG9yJyxcbi8vICAgICAnY29kZS1ibG9jaycsXG4vLyBdO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgSGVybyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9sdW5hMS5jby81N2Q5YjYucG5nXCJcbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1pbWFnZSAtdHdvIC1mbG9hdGluZ0RlbGF5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbHVuYTEuY28vMjA3MGVlLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taW1hZ2UgLXRocmVlIC1mbG9hdGluZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJodHRwczovL2x1bmExLmNvL2ZkYTg2MC5wbmdcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWltYWdlIC1mb3VyIC1mbG9hdGluZ0RlbGF5XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1oZWFkZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8tbGFiZWxcIj5UaGlzIGlzLi4uPC9wPlxuXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1oZWFkbGluZSBcIj5Db2RlcnMgR2FsYTwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIENvZGVycyBHYWxhIGlzIGEgZnJlZSB0byB1c2UgcGxhdGZvcm0sIHdoaWNoIHdpbGwgaGVscCBhbmQgZ3VpZGVcbiAgICAgICAgICAgIHlvdSwgbm90IG9ubHkgdG8gbGVhcm4gd2ViIGRldmVsb3BtZW50IGJ1dCBiZWNvbWUgYSBmcmVlLWxhbmNlciBsaWtlXG4gICAgICAgICAgICB1cy4gU28gY2xpY2sgb24gcGxheSBhbmQgZW1iYXJrIGEgbmV3IGpvdXJuZXkgd2l0aCB1cy5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9sZWFyblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5IC1jb3JhbCAtc21hbGwgLXB1bHNlXCI+PC9kaXY+XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBIZXJvQ2FyZHMgPSAoKSA9PiB7XG5cdC8vIHJlZnMgZm9yIHRoZSB0aHJlZSBzZWN0aW9uXG5cdGNvbnN0IGhlcm9CbHVlID0gdXNlUmVmKCk7XG5cdGNvbnN0IGhlcm9PcmFuZ2UgPSB1c2VSZWYoKTtcblx0Y29uc3QgaGVyb0dyZWVuID0gdXNlUmVmKCk7XG5cblx0Y29uc3Qgc2Nyb2xsRnVuY3Rpb24gPSAoKSA9PiB7XG5cdFx0aXNDbGllbnQgJiZcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRcdHZhciBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdFx0aWYgKHNjcm9sbCA8IDE1MCkge1xuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XG5cdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHNjcm9sbCA+IDE1MCAmJiBzY3JvbGwgPCA0NTApIHtcblx0XHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ29uZScpO1xuXHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xuXHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3R3bycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzY3JvbGwgPiA0NTAgJiYgc2Nyb2xsIDwgNjUwKSB7XG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndHdvJyk7XG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhyZWUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gNjUwKSB7XG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndHdvJyk7XG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndGhyZWUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuY3Rpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiA2MDApIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3R3bycpO1xuXHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndGhyZWUnKTtcblx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdvbmUnKTtcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XG5cdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJyk7XG5cdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aHJlZScpO1xuXHRcdFx0XHRcdFx0fSwgODUwKTtcblx0XHRcdFx0XHR9LCA3NTApO1xuXHRcdFx0XHR9LCA2NTApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRpc0NsaWVudCAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuY3Rpb24pO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0naGVybyc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naGVyby1ib3gtY29udGFpbmVyJz5cblx0XHRcdFx0PExpbmsgdG89Jy9hYm91dCcgY2xhc3NOYW1lPSdoZXJvLWJveCc+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHJlZj17aGVyb0JsdWV9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tYmx1ZSc+PC9zcGFuPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2hlcm8tYm94X190aXRsZSc+V2hhdCBpcyBDb2RlcnNHYWxhPzwvaDI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoZXJvLWJveF9fYm9keSc+XG5cdFx0XHRcdFx0XHRDb2RlcnNHYWxhIGlzIGEgZnJlZSB0byB1c2UgcGxhdGZvcm0gZm9yIGFsbCB0aG9zZSBwZW9wbGUgd2hvIGFyZVxuXHRcdFx0XHRcdFx0dW53aWxsaW5nIHRvIHBheSBoaWdoIHJhbnNvbSB0byB0aGVzZSBjcm9va2VkIGNvYWNoaW5nIGNlbnRlcnMgZm9yXG5cdFx0XHRcdFx0XHRsZWFybmluZyB3ZWIgRGV2ZWxvcG1lbnQuIFdlIHdvbid0IGJlIHNwb29uIGZlZWRpbmcgeW91IGJ1dCB3ZSB3aWxsXG5cdFx0XHRcdFx0XHRndWlkZSB5b3UuIEFueXdheSwgaWYgeW91IGFyZSBlYWdlciB0byBsZWFybiB5b3Ugd2lsbCBmaW5kIGEgd2F5LlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8TGluayB0bz0nL2Fib3V0LyNhYm91dHVzJyBjbGFzc05hbWU9J2hlcm8tYm94Jz5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0cmVmPXtoZXJvR3JlZW59XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tZ3JlZW4nPjwvc3Bhbj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdoZXJvLWJveF9fdGl0bGUnPldobyBhcmUgd2U/PC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hlcm8tYm94X19ib2R5Jz5cblx0XHRcdFx0XHRcdFdlIHN0YXJ0ZWQgd2ViIGRldmVsb3BtZW50IG9uIG91ciBvd24sIHdpdGggbm8gZGlyZWN0aW9uIGFuZCBub1xuXHRcdFx0XHRcdFx0Y29hY2hpbmcuIEFsbCB3ZSBoYWQgd2FzIGRldGVybWluYXRpb24gYW5kIGludGVybmV0LiBXZSBjb25zaWRlclxuXHRcdFx0XHRcdFx0b3Vyc2VsdmVzIGx1Y2t5IHRvIGJlIGFibGUgdG8gcHJvdmlkZSB0aGUgc3VwcG9ydCB0aGF0IGhhZCBiZWVuXG5cdFx0XHRcdFx0XHRwcm92aWRlZCB0byB1cy5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89Jy9sZWFybicgY2xhc3NOYW1lPSdoZXJvLWJveCc+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHJlZj17aGVyb09yYW5nZX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGVyby1ib3hfX2NpcmNsZSBoZXJvLWJveF9fY2lyY2xlLS1vcmFuZ2UnPjwvc3Bhbj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdoZXJvLWJveF9fdGl0bGUnPlN0YXJ0IExlYXJuaW5nIC4uPC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2hlcm8tYm94X19ib2R5Jz5cblx0XHRcdFx0XHRcdFJpZ2h0IG5vdyB3ZSBoYXZlIHRoZSBhcnRpY2xlcyBvbiBmcm9udC1lbmQtZGV2ZWxvcG1lbnQuIFdlIGFyZVxuXHRcdFx0XHRcdFx0d29ya2luZyB0aXJlbGVzc2x5IHRvIGNvdmVyIGJhY2tlbmQuIFdlIHdpbGwgaGF2ZSB0aGUgYXJ0aWNsZXMgYWlyZWRcblx0XHRcdFx0XHRcdG9uIGJhY2tlbmQgYmVmb3JlIHNlcHRlbWJlci4gVGhlIGNvdXJzZSB3aWxsIGNvdmVyIEZyb250LWVuZCwgQVBJLFxuXHRcdFx0XHRcdFx0Tm9kZWpzLWV4cHJlc3MsIE1vbmdvRGIsIE15U1FMLCBIb3N0aW5nLCBSZWFjdCwgRmlyZWJhc2UuLi4gYW5kIGFcblx0XHRcdFx0XHRcdGxvdCBtb3JlIHByb2plY3RzLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb0NhcmRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2Nyb2xsVG8sIGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9sYXlvdXQnO1xuaW1wb3J0IHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcblxuY29uc3QgQXJ0aWNsZU5hbWVzID0gKHtcblx0c2VsZWN0VmlkZW8sXG5cdGFydGljbGUsXG5cdGRlbGV0ZUFydGljbGUsXG5cdHRvcGljLFxuXHRzcGVjaWFsaXR5TmFtZSxcbn0pID0+IHtcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKGRhdGEpID0+IHtcblx0XHRjb25zdCB7IEFydGljbGVOYW1lLCBfaWQgfSA9IGRhdGE7XG5cdFx0Y29uc3QgY29uZmlybSA9XG5cdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0d2luZG93LnByb21wdChgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke0FydGljbGVOYW1lfVwiID8gWSBvciBOIGApO1xuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcblx0XHRcdGRlbGV0ZUFydGljbGUoX2lkLCB0b3BpYy5faWQsIHNwZWNpYWxpdHlOYW1lKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IHJlYWQtaWNvbic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIHJlYWQgY29sLTEwJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2l0ZW0nPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGFydGljbGUpO1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyhhcnRpY2xlKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxUbyhwb3MpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkaXNwbGF5LWFydGljbGUnPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nYXJ0aWNsZS1uYW1lIG0tMCc+XG5cdFx0XHRcdFx0XHRcdHthcnRpY2xlLkFydGljbGVOYW1lfXsnICd9XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYXJ0aWNsZS1hY3Rpb24taWNvbnMnPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvYXJ0aWNsZS91cGRhdGUvJHthcnRpY2xlLl9pZH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17YXJ0aWNsZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9e2hhbmRsZURlbGV0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2FydGljbGV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gb3B0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e2BSZWFkIFwiJHthcnRpY2xlLkFydGljbGVOYW1lfVwiYH1cblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHRcdFx0XHR0cmlnZ2VyPSdtb3VzZWVudGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyhhcnRpY2xlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBwb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPD0gNTAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzY3JvbGxUbyhwb3MpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cGRhdGUtZGVsZXRlIGZsb2F0LXJpZ2h0Jz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGRlbGV0ZUFydGljbGUsIHNlbGVjdFZpZGVvIH0pKEFydGljbGVOYW1lcyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2xheW91dCc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi8uLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xuaW1wb3J0IHsgZ2V0U3BlY2lhbGl0aWVzLCBkZWxldGVTcGVjaWFsaXR5IH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5cbmNvbnN0IENhcmQgPSAoeyBnZXRTcGVjaWFsaXRpZXMsIHNwZWNpYWxpdGllcywgZGVsZXRlU3BlY2lhbGl0eSB9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHNwZWNpYWxpdGllcy5sZW5ndGggPT09IDApIHtcblx0XHRcdGdldFNwZWNpYWxpdGllcygpO1xuXHRcdH1cblx0fSwgW3NwZWNpYWxpdGllcy5sZW5ndGgsIGdldFNwZWNpYWxpdGllc10pO1xuXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpdGVtKSA9PiB7XG5cdFx0Ly8gR290IHRvIGhlbHBlciwgY2hlY2tcblx0XHRjb25zdCBjb25maXJtID1cblx0XHRcdGlzQ2xpZW50ICYmXG5cdFx0XHR3aW5kb3cucHJvbXB0KFxuXHRcdFx0XHRgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke2l0ZW0uTmFtZX1cIiA/IFkgb3IgTiAoRGVsZXRpbmcgYSBzcGVjaWFsaXR5IHdpbGwgbGVhZCB0byBkZWxldGlvbiBvZiBhbGwgdG9waWNzIGFuZCBhcnRpY2xlcyBpbnNpZGUgaXQpIGBcblx0XHRcdCk7XG5cdFx0aWYgKGNvbmZpcm0gPT09ICdZJykge1xuXHRcdFx0ZGVsZXRlU3BlY2lhbGl0eShpdGVtLl9pZCk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2xlYXJuLWNvbnRhaW5lcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB0LTQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cblx0XHRcdFx0XHR7c3BlY2lhbGl0aWVzICYmXG5cdFx0XHRcdFx0XHRzcGVjaWFsaXRpZXMubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0uX2lkfSBjbGFzc05hbWU9J2NvbC1sZy02Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ltZ0J4Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltYWdlJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpdGVtLmltYWdlVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtpdGVtLmFsdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzQ2xpZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJzE1MHB4J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ2F1dG8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb250ZW50QngnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj4ge2l0ZW0ubmFtZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw9eycvdXBkYXRlc3BlY2lhbGl0eS8nICsgaXRlbS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17aXRlbX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2l0ZW19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHVybD17Jy9sZWFybi8nICsgaXRlbS5uYW1lfT5TdGFydCBOb3c8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHRzcGVjaWFsaXRpZXM6IHN0YXRlLnNwZWNpYWxpdHkuc3BlY2lhbGl0aWVzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG5cdGdldFNwZWNpYWxpdGllcyxcblx0ZGVsZXRlU3BlY2lhbGl0eSxcbn0pKENhcmQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vbGF5b3V0JztcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBkZWxldGVWaWRlbywgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcblxuY29uc3QgVmlkZW9OYW1lcyA9ICh7XG5cdHNlbGVjdFZpZGVvLFxuXHR2aWRlbyxcblx0ZGVsZXRlVmlkZW8sXG5cdHRvcGljLFxuXHRzcGVjaWFsaXR5TmFtZSxcbn0pID0+IHtcblx0Y29uc29sZS5sb2codmlkZW8pO1xuXHRjb25zdCBoYW5kbGVEZWxldGUgPSAoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IHsgVmlkZW9OYW1lLCBfaWQgfSA9IGRhdGE7XG5cdFx0Y29uc3QgY29uZmlybSA9XG5cdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0d2luZG93LnByb21wdChgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke1ZpZGVvTmFtZX1cIiA/IFkgb3IgTiBgKTtcblx0XHRpZiAoY29uZmlybSA9PT0gJ1knKSB7XG5cdFx0XHRkZWxldGVWaWRlbyhfaWQsIHRvcGljLl9pZCwgc3BlY2lhbGl0eU5hbWUpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgcmVhZC1pY29uJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWFkIGNvbC0xMCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyh2aWRlbyk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkaXNwbGF5LWFydGljbGUnPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nYXJ0aWNsZS1uYW1lIG0tMCc+XG5cdFx0XHRcdFx0XHRcdHt2aWRlby5uYW1lfXsnICd9XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYXJ0aWNsZS1hY3Rpb24taWNvbnMnPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvdmlkZW8vdXBkYXRlLyR7dmlkZW8uX2lkfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXt2aWRlb31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0RlbGV0ZSdcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9e2hhbmRsZURlbGV0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e3ZpZGVvfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXBcblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9wdGlvbnNcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtgUmVhZCBcIiR7dmlkZW8ubmFtZX1cImB9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlcj0nbW91c2VlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzQnV0dG9uPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0VmlkZW8odmlkZW8pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3VwZGF0ZS1kZWxldGUgZmxvYXQtcmlnaHQnPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgZGVsZXRlVmlkZW8sIHNlbGVjdFZpZGVvIH0pKFZpZGVvTmFtZXMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcbmltcG9ydCB7IHVubG9ja1RvcGljIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy90b3BpYyc7XG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBBcnRpY2xlUHJldmlldyA9ICh7IFNlbGVjdGVkQXJ0aWNsZSwgc3BlY2lhbGl0eU5hbWUsIHVubG9ja1RvcGljIH0pID0+IHtcblx0Y29uc3QgUmVhZE1vcmVVcmwgPVxuXHRcdFNlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubmFtZVxuXHRcdFx0PyBgLyR7c3BlY2lhbGl0eU5hbWV9L3JlYWQvJHtTZWxlY3RlZEFydGljbGUubmFtZS5yZXBsYWNlKC9cXHMvZywgJy0nKX1gXG5cdFx0XHQ6IGAvJHtzcGVjaWFsaXR5TmFtZX0vcmVhZC9iZWZvcmUtc3RhcnRpbmdgO1xuXG5cdGNvbnN0IGhhbmRsZVVubG9jayA9IGFzeW5jICh0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4ge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHVubG9ja1RvcGljKHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKTtcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHR9O1xuXHRjb25zb2xlLmxvZyhTZWxlY3RlZEFydGljbGUpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRhaW5lcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMgY2FyZC1oZWFkZXInPlxuXHRcdFx0XHRcdFx0e1NlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubmFtZVxuXHRcdFx0XHRcdFx0XHQ/IFNlbGVjdGVkQXJ0aWNsZS5uYW1lXG5cdFx0XHRcdFx0XHRcdDogJ1JlYWQgVGhpcyBCZWZvcmUgWW91IFN0YXJ0Li4uJ31cblx0XHRcdFx0XHRcdHsvKiA8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmbG9hdC1yaWdodCc+PC9oMz5cblx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdxbC1zbm93Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLW5vLWJvZHkgcWwtZWRpdG9yJz5cblx0XHRcdFx0XHRcdFx0e1NlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubG9ja2VkID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRUbyB2aWV3IHRoaXMgYXJ0aWNsZSBwbGVhc2UgdW5sb2NrIGl0IHVzaW5nIHBvaW50c3snICd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVVbmxvY2soXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLnRvcGljSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRVbmxvY2tcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0UmVhY3RIdG1sUGFyc2VyKFNlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUuY29udGVudClcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGwoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogJzBweCcsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dG89e1JlYWRNb3JlVXJsfT5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2xpbmsnPlxuXHRcdFx0XHRcdFx0XHR7U2VsZWN0ZWRBcnRpY2xlICYmIFNlbGVjdGVkQXJ0aWNsZS5sb2NrZWRcblx0XHRcdFx0XHRcdFx0XHQ/ICdVbmxvY2snXG5cdFx0XHRcdFx0XHRcdFx0OiAnUmVhZCBNb3JlLi4uLi4nfVxuXHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgdW5sb2NrVG9waWMgfSkoQXJ0aWNsZVByZXZpZXcpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBBY2NvcmRpb24sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBnZXRUb3BpY3MsIGRlbGV0ZVRvcGljIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgQXJ0aWNsZU5hbWVzIGZyb20gJy4uL2xlYXJuL0FydGljbGVOYW1lcyc7XG5pbXBvcnQgVmlkZW9OYW1lcyBmcm9tICcuLi9sZWFybi9WaWRlb05hbWVzJztcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcbmltcG9ydCB7IExvY2sgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuY29uc3QgVG9waWNzT3ZlcnZpZXcgPSAoe1xuXHRnZXRUb3BpY3MsXG5cdHNwZWNpYWxpdHlOYW1lLFxuXHR0b3BpY3MsXG5cdGRlbGV0ZVRvcGljLFxuXHR1c2VyLFxufSkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdldFRvcGljcyhzcGVjaWFsaXR5TmFtZSk7XG5cdH0sIFtnZXRUb3BpY3MsIHNwZWNpYWxpdHlOYW1lXSk7XG5cblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKHRvcGljKSA9PiB7XG5cdFx0Y29uc3QgY29uZmlybSA9XG5cdFx0XHRpc0NsaWVudCAmJlxuXHRcdFx0d2luZG93LnByb21wdChcblx0XHRcdFx0YFlvdSBzdXJlIHdhbnQgdG8gZGVsZXRlIFwiJHt0b3BpYy5uYW1lfVwiID8gWSBvciBOIChEZWxldGluZyBhIHRvcGljIHdpbGwgbGVhZCB0byBkZWxldGlvbiBvZiBhbGwgYXJ0aWNsZXMgaW5zaWRlIGl0KSBgXG5cdFx0XHQpO1xuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcblx0XHRcdGRlbGV0ZVRvcGljKHRvcGljLl9pZCwgc3BlY2lhbGl0eU5hbWUpO1xuXHRcdFx0dG9hc3QoJ0RlbGV0ZWQgc3BlY2lhbGl0eSBzdWNlc3NmdWxseScpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD0nc3BlY2lhbGl0aWVzJyBjbGFzc05hbWU9J1RvcGljLW5hbWVzICc+XG5cdFx0XHR7dG9waWNzLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0dG9waWNzLm1hcCgodG9waWMpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e3RvcGljLl9pZH0+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwLTAgc3BlY2lhbGl0eS10b3BpYy1jb250YWluZXIgbS0xJ1xuXHRcdFx0XHRcdFx0XHRcdGtleT17dG9waWMuX2lkfT5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdmbG9hdC1sZWZ0IHRvcGljTmFtZSc+e3RvcGljLm5hbWV9PC9oND5cblxuXHRcdFx0XHRcdFx0XHRcdDxBY3Rpb25CdXR0b25zXG5cdFx0XHRcdFx0XHRcdFx0XHRhY2NvcmRpb25LZXk9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfVxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZD17c2V0U2VsZWN0ZWRJZH1cblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkSWQ9e3NlbGVjdGVkSWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eU5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XG5cdFx0XHRcdFx0XHRcdFx0XHR1c2VyPXt1c2VyfVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdFx0XHRcdHt0b3BpYy5sb2NrZWQgJiZcblx0XHRcdFx0XHRcdFx0XHQhdXNlci51bkxvY2tlZFRvcGljcy5pbmNsdWRlcyh0b3BpYy5faWQpID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uQ29sbGFwc2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRLZXk9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0b3BpYy52aWRlb3MubGVuZ3RoID4gMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0b3BpYy52aWRlb3MubWFwKCh2aWRlbykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VmlkZW9OYW1lc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZGVvPXt2aWRlb31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHlOYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiB0b3BpYy5hcnRpY2xlcyAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0b3BpYy5hcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFydGljbGVOYW1lc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BpYz17dG9waWN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFydGljbGU9e2FydGljbGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwZWNpYWxpdHlOYW1lPXtzcGVjaWFsaXR5TmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb2w+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Db2xsYXBzZT5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHR0b3BpY3M6IHN0YXRlLnRvcGljLnRvcGljcyxcblx0dXNlcjogc3RhdGUuYXV0aC51c2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFRvcGljcywgZGVsZXRlVG9waWMgfSkoXG5cdFRvcGljc092ZXJ2aWV3XG4pO1xuXG5jb25zdCBBY3Rpb25CdXR0b25zID0gKHtcblx0aGFuZGxlRGVsZXRlLFxuXHR0b3BpYyxcblx0c3BlY2lhbGl0eU5hbWUsXG5cdHNlbGVjdGVkSWQsXG5cdHNldFNlbGVjdGVkSWQsXG5cdHVzZXIsXG59KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2FjdGlvbi1idXR0b25zJz5cblx0XHRcdDxBZG1pbkJ1dHRvbnNcblx0XHRcdFx0dHlwZT0nRWRpdCdcblx0XHRcdFx0ZGF0YT17dG9waWN9XG5cdFx0XHRcdHVybD17YC8ke3NwZWNpYWxpdHlOYW1lfS90b3BpYy9lZGl0LyR7dG9waWMuX2lkfWB9XG5cdFx0XHQvPlxuXHRcdFx0PEFkbWluQnV0dG9ucyB0eXBlPSdEZWxldGUnIGhhbmRsZXI9e2hhbmRsZURlbGV0ZX0gZGF0YT17dG9waWN9IC8+XG5cdFx0XHQ8QWRtaW5CdXR0b25zIHR5cGU9J0FkZCcgZGF0YT17dG9waWN9IHVybD17YC92aWRlby9hZGQvJHt0b3BpYy5faWR9YH0gLz5cblx0XHRcdHt0b3BpYy5sb2NrZWQgJiYgIXVzZXIudW5Mb2NrZWRUb3BpY3MuaW5jbHVkZXModG9waWMuX2lkKSA/IChcblx0XHRcdFx0PExvY2sgLz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxBY2NvcmRpb24uVG9nZ2xlXG5cdFx0XHRcdFx0YXM9e0J1dHRvbn1cblx0XHRcdFx0XHR2YXJpYW50PSdsaW5rJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxvYXQtcmlnaHQgYXJyb3ctZG93bidcblx0XHRcdFx0XHRldmVudEtleT17dG9waWMubmFtZS5zcGxpdCgvXFxzLykuam9pbignJyl9IC8vIHRvIHJlbW92ZSBzcGFjZXNcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoc2VsZWN0ZWRJZCA9PT0gdG9waWMuX2lkKSB7XG5cdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkSWQoJycpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZCh0b3BpYy5faWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdGlkPXt0b3BpYy5uYW1lLnNwbGl0KC9cXHMvKS5qb2luKCcnKX1cblx0XHRcdFx0XHRcdHZpZXdCb3g9JzAgMCAzMiAzMidcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24gaWNvbi1jaGV2cm9uLWJvdHRvbSBhcnRpY2xlLWR3biBhcnRpY2xlLXRvZ2dsZSBmYS1hbmdsZS1kb3duICR7XG5cdFx0XHRcdFx0XHRcdHRvcGljLl9pZCA9PT0gc2VsZWN0ZWRJZCA/ICdyb3RhdGUnIDogJydcblx0XHRcdFx0XHRcdH1gfT5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xNi4wMDMgMTguNjI2bDcuMDgxLTcuMDgxTDI1IDEzLjQ2bC04Ljk5NyA4Ljk5OC05LjAwMy05IDEuOTE3LTEuOTE2eicgLz5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PC9BY2NvcmRpb24uVG9nZ2xlPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcnRpY2xlUHJldmlldyBmcm9tICcuL0FydGljbGVQcmV2aWV3JztcblxuY29uc3QgVmlkZW9QcmV2aWV3ID0gKHsgdmlkZW8gfSkgPT4ge1xuXHRjb25zb2xlLmxvZyh2aWRlbyk7XG5cdHJldHVybiB2aWRlbyAmJiAhdmlkZW8uY29udGVudCA/IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndmlkZW8tY29udGFpbmVyJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlbyc+XG5cdFx0XHRcdDxpZnJhbWVcblx0XHRcdFx0XHRjbGFzc05hbWU9J2lmcmFtZSdcblx0XHRcdFx0XHRzcmM9e3ZpZGVvLnVybH1cblx0XHRcdFx0XHR0aXRsZT0nWW91VHViZSB2aWRlbyBwbGF5ZXInXG5cdFx0XHRcdFx0ZnJhbWVCb3JkZXI9JzAnXG5cdFx0XHRcdFx0YWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUnXG5cdFx0XHRcdFx0YWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dmlkZW8ubmFtZX08L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVzYyc+e3ZpZGVvLmRlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlua2VkLWFydGljbGVzJz5cblx0XHRcdFx0XHQ8aDQ+QXJ0aWNsZXMgUmVsYXRlZCB0byB0aGUgdG9waWM8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpIDogKFxuXHRcdDxBcnRpY2xlUHJldmlldyBTZWxlY3RlZEFydGljbGU9e3ZpZGVvfSAvPlxuXHQpO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuXHR2aWRlbzogc3RhdGUudmlkZW8uc2VsZWN0ZWRWaWRlbyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlkZW9QcmV2aWV3KTtcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbiAgKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuLy8gY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbi8vIFx0cm9vdFJlZHVjZXIsXG4vLyBcdGluaXRpYWxTdGF0ZSxcbi8vIFx0YXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG4vLyBcdC8vIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuLy8gKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZhOWMzNDk2MTZkYzc2OTFlZjYwYTMyMDcwM2NiNzdhLlBOR1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWh0bWwtcGFyc2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdGlwcHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVsb2FkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHJlbG9hZCBmcm9tICdyZWxvYWQnO1xuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdzZXJpYWxpemUtamF2YXNjcmlwdCc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9zcmMvQXBwJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9zcmMvUm91dGVzJztcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL3NyYy9zdG9yZSc7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbnZhciBpbmRleCA9IGZzLnJlYWRGaWxlU3luYygnYnVpbGQvaW5kZXguaHRtbCcpLnRvU3RyaW5nKCk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdidWlsZCcpKTtcblxuaWYgKGRldikgcmVsb2FkKGFwcCk7XG5cbmFwcC51c2UoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cdGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoKTtcblx0Y29uc3QgYWN0aXZlUm91dGUgPSByb3V0ZXMuZmluZCgocm91dGUpID0+IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSkpIHx8IHt9O1xuXG5cdGNvbnNvbGUubG9nKGFjdGl2ZVJvdXRlKTtcblxuXHRjb25zdCBwcm9taXNlID0gYWN0aXZlUm91dGUubG9hZERhdGFcblx0XHQ/IGFjdGl2ZVJvdXRlLmxvYWREYXRhKHN0b3JlKVxuXHRcdDogUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0cHJvbWlzZS50aGVuKChkYXRhKSA9PiB7XG5cdFx0Y29uc3QgcmVhY3RNYXJrdXAgPSAoXG5cdFx0XHQ8UmVhY3QuU3RyaWN0TW9kZT5cblx0XHRcdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0XHRcdFx0PFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17e319PlxuXHRcdFx0XHRcdFx0PEFwcCAvPlxuXHRcdFx0XHRcdDwvU3RhdGljUm91dGVyPlxuXHRcdFx0XHQ8L1Byb3ZpZGVyPlxuXHRcdFx0PC9SZWFjdC5TdHJpY3RNb2RlPlxuXHRcdCk7XG5cdFx0Y29uc3QgaHRtbCA9IHJlbmRlclRvU3RyaW5nKHJlYWN0TWFya3VwKTtcblx0XHRsZXQgZmluYWxIdG1sID0gaW5kZXhcblx0XHRcdC5yZXBsYWNlKCc8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PicsIGA8ZGl2IGlkPVwicm9vdFwiPiR7aHRtbH08L2Rpdj5gKVxuXHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdCcvL3NjcmlwdCcsXG5cdFx0XHRcdGB3aW5kb3cuX0lOSVRJQUxfREFUQV8gPSAke3NlcmlhbGl6ZShzdG9yZS5nZXRTdGF0ZSgpKS5yZXBsYWNlKFxuXHRcdFx0XHRcdC88L2csXG5cdFx0XHRcdFx0J1xcXFx1MDAzYydcblx0XHRcdFx0KX1gXG5cdFx0XHQpO1xuXHRcdGNvbnNvbGUubG9nKCd3b3JraW5nJywgZmluYWxIdG1sKTtcblx0XHRyZXMuc2VuZChmaW5hbEh0bWwpO1xuXHRcdHJlcy5lbmQoKTtcblx0fSk7XG59KTtcblxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uICR7UE9SVH1gKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9