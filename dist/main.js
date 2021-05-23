/******/ (() => {
	// webpackBootstrap
	/******/ 'use strict';
	/******/ var __webpack_modules__ = {
		/***/ './src/App.js':
			/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _reactToastify = __webpack_require__(
					/*! react-toastify */ 'react-toastify'
				);

				var _framerMotion = __webpack_require__(
					/*! framer-motion */ 'framer-motion'
				);

				var _reactLoadable = _interopRequireDefault(
					__webpack_require__(/*! react-loadable */ 'react-loadable')
				);

				var _auth = __webpack_require__(
					/*! ./actions/auth */ './src/actions/auth.js'
				);

				var _setAuthToken = __webpack_require__(
					/*! ./helpers/setAuthToken */ './src/helpers/setAuthToken.js'
				);

				// __webpack_require__(
				// 	/*! bootstrap/dist/js/bootstrap.js */ 'bootstrap/dist/js/bootstrap.js'
				// );

				var _store = _interopRequireDefault(
					__webpack_require__(/*! ./store */ './src/store.js')
				);

				var _preloader = __webpack_require__(
					/*! ./layout/preloader */ './src/layout/preloader.js'
				);

				var _Navbar = _interopRequireDefault(
					__webpack_require__(
						/*! ./layout/Navbar/Navbar */ './src/layout/Navbar/Navbar.js'
					)
				);

				var _Article = _interopRequireDefault(
					__webpack_require__(
						/*! ./components/Article */ './src/components/Article.js'
					)
				);

				var _UpsertCard = _interopRequireDefault(
					__webpack_require__(
						/*! ./components/UpsertCard */ './src/components/UpsertCard.js'
					)
				);

				var _UpsertArticle = _interopRequireDefault(
					__webpack_require__(
						/*! ./components/UpsertArticle */ './src/components/UpsertArticle.js'
					)
				);

				var _Auth = _interopRequireDefault(
					__webpack_require__(
						/*! ./components/Auth */ './src/components/Auth.js'
					)
				);

				var _UpsertTopic = _interopRequireDefault(
					__webpack_require__(
						/*! ./components/UpsertTopic */ './src/components/UpsertTopic.js'
					)
				);

				var _UpsertVideo = _interopRequireDefault(
					__webpack_require__(
						/*! ./components/UpsertVideo */ './src/components/UpsertVideo.js'
					)
				);

				var _Blog = _interopRequireDefault(
					__webpack_require__(
						/*! ./components/Blog */ './src/components/Blog.js'
					)
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _extends() {
					_extends =
						Object.assign ||
						function (target) {
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
					return _extends.apply(this, arguments);
				}

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				// import PrivateRoute from './helpers/PrivateRoute';
				const Preview = (0, _reactLoadable.default)({
					loader: () =>
						Promise.resolve().then(() =>
							_interopRequireWildcard(
								__webpack_require__(
									/*! ./components/Preview */ './src/components/Preview.js'
								)
							)
						),
					loading: () =>
						/*#__PURE__*/ _react.default.createElement(
							_preloader.Preloader,
							null
						),
				});
				const Home = (0, _reactLoadable.default)({
					loader: () =>
						Promise.resolve().then(() =>
							_interopRequireWildcard(
								__webpack_require__(
									/*! ./components/Home */ './src/components/Home.js'
								)
							)
						),
					loading: () =>
						/*#__PURE__*/ _react.default.createElement(
							_preloader.Preloader,
							null
						),
				});
				const About = (0, _reactLoadable.default)({
					loader: () =>
						Promise.resolve().then(() =>
							_interopRequireWildcard(
								__webpack_require__(
									/*! ./components/About */ './src/components/About.js'
								)
							)
						),
					loading: () =>
						/*#__PURE__*/ _react.default.createElement(
							_preloader.Preloader,
							null
						),
				});
				const Learn = (0, _reactLoadable.default)({
					loader: () =>
						Promise.resolve().then(() =>
							_interopRequireWildcard(
								__webpack_require__(
									/*! ./components/Learn */ './src/components/Learn.js'
								)
							)
						),
					loading: () =>
						/*#__PURE__*/ _react.default.createElement(
							_preloader.Preloader,
							null
						),
				});

				if (_setAuthToken.isClient && localStorage.token) {
					(0, _setAuthToken.setAuthToken)(localStorage.token);
				}

				const App = () => {
					(0, _react.useEffect)(() => {
						_store.default.dispatch((0, _auth.loadUser)());
					}, []);
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'App',
						},
						/*#__PURE__*/ _react.default.createElement(_Navbar.default, null),
						/*#__PURE__*/ _react.default.createElement(
							_framerMotion.AnimatePresence,
							null,
							/*#__PURE__*/ _react.default.createElement(
								_reactRouterDom.Switch,
								null,
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Redirect,
									{
										exact: true,
										from: '/',
										to: 'home',
									}
								),
								';',
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										exact: true,
										path: '/home',
										component: Home,
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										exact: true,
										path: '/about',
										component: About,
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										exact: true,
										path: '/learn',
										component: Learn,
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_Auth.default,
												_extends({}, props, {
													type: 'signup',
												})
											),
										exact: true,
										path: '/signup',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_UpsertTopic.default,
												_extends(
													{
														edit: false,
													},
													props
												)
											),
										exact: true,
										path: '/:specialityName/topic/add',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_UpsertTopic.default,
												_extends(
													{
														edit: true,
													},
													props
												)
											),
										exact: true,
										path: '/:specialityName/topic/edit/:topicId',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_Auth.default,
												_extends({}, props, {
													type: 'signup',
												})
											),
										exact: true,
										path: '/signup/:referCode',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_Auth.default,
												_extends({}, props, {
													type: 'login',
												})
											),
										exact: true,
										path: '/login',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										exact: true,
										path: '/learn/:specialityName',
										component: Preview,
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_UpsertArticle.default,
												_extends({}, props, {
													edit: false,
												})
											),
										exact: true,
										path: '/article/add',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_UpsertArticle.default,
												_extends({}, props, {
													edit: true,
												})
											),
										exact: true,
										path: '/article/update',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_UpsertVideo.default,
												_extends({}, props, {
													edit: false,
												})
											),
										exact: true,
										path: '/video/add/:topicId',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_UpsertVideo.default,
												_extends({}, props, {
													edit: true,
												})
											),
										exact: true,
										path: '/video/update/:videoId',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										exact: true,
										path: '/blog/read/:name',
										component: _Article.default,
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_UpsertCard.default,
												_extends({}, props, {
													edit: false,
												})
											),
										exact: true,
										path: '/AddCard',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										render: (props) =>
											/*#__PURE__*/ _react.default.createElement(
												_UpsertCard.default,
												_extends({}, props, {
													edit: true,
												})
											),
										exact: true,
										path: '/updatespeciality/:specialityName',
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Route,
									{
										exact: true,
										path: '/blog',
										component: _Blog.default,
									}
								)
							)
						),
						/*#__PURE__*/ _react.default.createElement(
							_reactToastify.ToastContainer,
							null
						)
					);
				};

				var _default = App;
				exports.default = _default;

				/***/
			},

		/***/ './src/actions/article.js':
			/*!********************************!*\
  !*** ./src/actions/article.js ***!
  \********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.deleteArticle =
					exports.editArticle =
					exports.addArticle =
					exports.getAllArticles =
					exports.getArticle =
					exports.clearArticle =
						void 0;

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _toast = __webpack_require__(
					/*! ./toast */ './src/actions/toast.js'
				);

				const clearArticle = (id) => async (dispatch) => {
					dispatch({
						type: 'CLEAR_ARTICLE',
					});
				};

				exports.clearArticle = clearArticle;

				const getArticle = (id) => async (dispatch) => {
					try {
						const res = await (0, _helpers.serviceGet)(`api/article/get/${id}`);
						console.log(res.data);
						(0, _toast.successToast)(res);
						dispatch({
							type: 'GET_ARTICLE',
							payload: res.data,
						});
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'GET_ARTICLE_ERROR',
							payload: {},
						});
					}
				};

				exports.getArticle = getArticle;

				const getAllArticles = () => async (dispatch) => {
					try {
						const res = await (0, _helpers.serviceGet)(`api/article/all`);
						console.log(res.status);
						(0, _toast.successToast)(res);
						dispatch({
							type: 'GET_ALL_ARTICLES',
							payload: res.data,
						});
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'GET_ALL_ARTICLES_ERROR',
							payload: {},
						});
					}
				};

				exports.getAllArticles = getAllArticles;

				const addArticle = (data) => async (dispatch) => {
					try {
						console.log(data);
						const res = await (0, _helpers.servicePost)(
							`api/article/add`,
							data,
							{
								'Content-Type': 'application/json',
							}
						);
						console.log(res.data);
						dispatch({
							type: 'ADD_ARTICLE',
							payload: res.data,
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
							payload: {},
						});
					}
				};

				exports.addArticle = addArticle;

				const editArticle = (data, id, specialityName) => async (dispatch) => {
					try {
						const res = await (0, _helpers.servicePost)(
							`api/article/update/${id}`,
							data,
							{
								'Content-Type': 'application/json',
							}
						);
						console.log(res.data);
						dispatch({
							type: 'EDIT_ARTICLE',
							payload: res.data,
						});
						const res2 = await (0, _helpers.serviceGet)(
							`api/topic/get/${specialityName}`
						);
						console.log(res2.data);
						(0, _toast.successToast)(res);
						dispatch({
							type: 'GET_TOPICS',
							payload: res2.data,
						});
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'EDIT_ARTICLE_ERROR',
							payload: {},
						});
					}
				};

				exports.editArticle = editArticle;

				const deleteArticle =
					(articleId, topicId, specialityName) => async (dispatch) => {
						try {
							const res = await (0, _helpers.servicePost)(
								`api/article/delete/${articleId}/${topicId}`,
								{},
								{
									'Content-Type': 'application/json',
								}
							);
							console.log(res.data);
							dispatch({
								type: 'DELETE_ARTICLE',
								payload: res.data,
							});
							const res2 = await (0, _helpers.serviceGet)(
								`api/topic/get/${specialityName}`
							);
							console.log(res2.data);
							(0, _toast.successToast)(res);
							dispatch({
								type: 'GET_TOPICS',
								payload: res2.data,
							});
						} catch (error) {
							(0, _toast.errorToast)(error);
							dispatch({
								type: 'DELETE_ARTICLE_ERROR',
								payload: {},
							});
						}
					};

				exports.deleteArticle = deleteArticle;

				/***/
			},

		/***/ './src/actions/auth.js':
			/*!*****************************!*\
  !*** ./src/actions/auth.js ***!
  \*****************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.sendResetEmail =
					exports.logout =
					exports.login =
					exports.register =
					exports.refreshUser =
					exports.loadUser =
						void 0;

				var _types = __webpack_require__(
					/*! ./types */ './src/actions/types.js'
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _toast = __webpack_require__(
					/*! ./toast */ './src/actions/toast.js'
				);

				// Load User : Every time we logged in or register or refresh the page its gonna load.
				const loadUser = () => async (dispatch) => {
					dispatch({
						type: 'SET_AUTH_LOADER',
					});

					if (_helpers.isClient && localStorage.token) {
						(0, _helpers.setAuthToken)(localStorage.token);
					}

					if (_helpers.isClient && localStorage.userId) {
						const userId = localStorage.getItem('userId');

						try {
							const res = await (0, _helpers.serviceGet)(
								`api/auth/user/${userId}`
							); // displayToast

							(0, _toast.successToast)(res);
							dispatch({
								type: _types.USER_LOADED,
								payload: res.data.user,
							});
						} catch (err) {
							// display toast
							(0, _toast.errorToast)(err);
							dispatch({
								type: _types.AUTH_ERROR,
							});
						}
					}
				};

				exports.loadUser = loadUser;

				const refreshUser = (user) => async (dispatch) => {
					dispatch({
						type: 'SET_AUTH_LOADER',
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
								payload: user,
							});
						} catch (err) {
							dispatch({
								type: _types.AUTH_ERROR,
							});
						}
					}
				};

				exports.refreshUser = refreshUser;

				const register = (data) => async (dispatch) => {
					dispatch({
						type: 'SET_AUTH_LOADER',
					});
					const headers = {
						'Content-Type': 'application/json',
					};
					const body = JSON.stringify(data);

					try {
						const res = await (0, _helpers.servicePost)(
							'api/auth/signup',
							body,
							headers
						);
						dispatch({
							type:
								res.status === 1
									? _types.REGISTER_SUCCESS
									: _types.REGISTER_FAIL,
							payload: res.data,
						});
						(0, _toast.successToast)(res);
						console.log(res);
						dispatch(loadUser());
					} catch (err) {
						// const errors = err.response.data.errors;
						(0, _toast.errorToast)(err);
						dispatch({
							type: _types.REGISTER_FAIL,
						});
					}
				};

				exports.register = register;

				const login =
					({ email, password }) =>
					async (dispatch) => {
						dispatch({
							type: 'SET_AUTH_LOADER',
						});
						const headers = {
							'Content-Type': 'application/json',
						};
						const body = JSON.stringify({
							email,
							password,
						});

						try {
							var _res$data, _res$data$user, _res$data2;

							const res = await (0, _helpers.servicePost)(
								'api/auth/login',
								body,
								headers
							);
							console.log(res);
							dispatch({
								type:
									res.status === 1 ? _types.LOGIN_SUCCESS : _types.LOGIN_FAIL,
								payload: {
									userId:
										(_res$data = res.data) === null || _res$data === void 0
											? void 0
											: (_res$data$user = _res$data.user) === null ||
											  _res$data$user === void 0
											? void 0
											: _res$data$user.userId,
									token:
										(_res$data2 = res.data) === null || _res$data2 === void 0
											? void 0
											: _res$data2.token,
								},
							});
							dispatch(loadUser());
							(0, _toast.successToast)(res);
						} catch (err) {
							console.log(err);
							(0, _toast.errorToast)(err);
							dispatch({
								type: _types.LOGIN_FAIL,
							});
						}
					};

				exports.login = login;

				const logout = () => (dispatch) => {
					if (_helpers.isClient) localStorage.clear();
					dispatch({
						type: 'LOGOUT',
					});
				};

				exports.logout = logout;

				const sendResetEmail =
					({ email }) =>
					async (dispatch) => {
						const config = {
							headers: {
								'Content-Type': 'application/json',
							},
						};
						const body = JSON.stringify({
							email,
						});

						try {
							const res = await (0, _helpers.servicePost)(
								'/api/forgotpassword',
								body,
								config
							);
							const messagesArray = res.data.messages; // brand added message alert

							messagesArray.forEach((message) =>
								dispatch((message.msg, 'danger'))
							);
							dispatch({
								type: _types.SEND_RESET_EMAIL,
								payload: res.data,
							});
						} catch (err) {
							const errors = err && err.response.data.errors;

							if (errors) {
							}

							dispatch({
								type: _types.SEND_RESET_EMAIL_FAIL,
							});
						}
					};

				exports.sendResetEmail = sendResetEmail;

				/***/
			},

		/***/ './src/actions/index.js':
			/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});

				var _article = __webpack_require__(
					/*! ./article */ './src/actions/article.js'
				);

				Object.keys(_article).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _article[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _article[key];
						},
					});
				});

				var _auth = __webpack_require__(/*! ./auth */ './src/actions/auth.js');

				Object.keys(_auth).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _auth[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _auth[key];
						},
					});
				});

				var _speciality = __webpack_require__(
					/*! ./speciality */ './src/actions/speciality.js'
				);

				Object.keys(_speciality).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _speciality[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _speciality[key];
						},
					});
				});

				var _topic = __webpack_require__(
					/*! ./topic */ './src/actions/topic.js'
				);

				Object.keys(_topic).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _topic[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _topic[key];
						},
					});
				});

				var _types = __webpack_require__(
					/*! ./types */ './src/actions/types.js'
				);

				Object.keys(_types).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _types[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _types[key];
						},
					});
				});

				var _ui = __webpack_require__(/*! ./ui */ './src/actions/ui.js');

				Object.keys(_ui).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _ui[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _ui[key];
						},
					});
				});

				var _video = __webpack_require__(
					/*! ./video */ './src/actions/video.js'
				);

				Object.keys(_video).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _video[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _video[key];
						},
					});
				});

				/***/
			},

		/***/ './src/actions/speciality.js':
			/*!***********************************!*\
  !*** ./src/actions/speciality.js ***!
  \***********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.deleteSpeciality =
					exports.editSpeciality =
					exports.addSpeciality =
					exports.getSpeciality =
					exports.clearSpeciality =
					exports.getSpecialities =
						void 0;

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _toast = __webpack_require__(
					/*! ./toast */ './src/actions/toast.js'
				);

				const getSpecialities = () => async (dispatch) => {
					try {
						const res = await (0, _helpers.serviceGet)('api/speciality/all');
						console.log(res);
						dispatch({
							type: 'GET_SPECIALITIES',
							payload: res.data,
						});
						(0, _toast.successToast)(res);
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'GET_SPECIALITIES_ERROR',
							payload: {},
						});
					}
				};

				exports.getSpecialities = getSpecialities;

				const clearSpeciality = () => async (dispatch) => {
					dispatch({
						type: 'CLEAR_SPECIALITY',
						payload: {},
					});
				};

				exports.clearSpeciality = clearSpeciality;

				const getSpeciality = (specialityName) => async (dispatch) => {
					try {
						const res = await (0, _helpers.serviceGet)(
							`api/speciality/get/${specialityName}`
						);
						dispatch({
							type: 'GET_SPECIALITY',
							payload: res.data.speciality,
						});
						(0, _toast.successToast)(res);
					} catch (error) {
						(0, _toast.errorToast)(error);
						console.log(error);
						dispatch({
							type: 'GET_SPECIALITY_ERROR',
							payload: {},
						});
					}
				};

				exports.getSpeciality = getSpeciality;

				const addSpeciality = (data) => async (dispatch) => {
					try {
						console.log(data);
						const res = await (0, _helpers.servicePost)(
							'api/speciality/add',
							data,
							{
								'Content-Type': 'application/json',
							}
						);
						console.log(res.data);
						dispatch({
							type: 'ADD_SPECIALITIY',
							payload: res.data,
						});
						const res2 = await (0, _helpers.serviceGet)('api/speciality/all');
						dispatch({
							type: 'GET_SPECIALITIES',
							payload: res2.data,
						});
						(0, _toast.successToast)(res);
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'ADD_SPECIALITY_ERROR',
							payload: {},
						});
					}
				};

				exports.addSpeciality = addSpeciality;

				const editSpeciality = (data, id) => async (dispatch) => {
					try {
						const res = await (0, _helpers.servicePost)(
							`api/speciality/update/${id}`,
							data,
							{
								'Content-Type': 'application/json',
							}
						);
						dispatch({
							type: 'EDIT_SPECIALITIY',
							payload: res.data,
						});
						const res2 = await (0, _helpers.serviceGet)('api/speciality/all');
						dispatch({
							type: 'GET_SPECIALITIES',
							payload: res2.data,
						});
						(0, _toast.successToast)(res);
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'EDIT_SPECIALITY_ERROR',
							payload: {},
						});
					}
				};

				exports.editSpeciality = editSpeciality;

				const deleteSpeciality = (id) => async (dispatch) => {
					try {
						const res = await (0, _helpers.servicePost)(
							`api/speciality/delete/${id}`,
							{},
							{
								'Content-Type': 'application/json',
							}
						);
						dispatch({
							type: 'DELETE_SPECIALITIY',
							payload: res.data,
						});
						const res2 = await (0, _helpers.serviceGet)('api/speciality/all');
						dispatch({
							type: 'GET_SPECIALITIES',
							payload: res2.data,
						});
						(0, _toast.successToast)(res);
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'DELETE_SPECIALITY_ERROR',
							payload: {},
						});
					}
				};

				exports.deleteSpeciality = deleteSpeciality;

				/***/
			},

		/***/ './src/actions/toast.js':
			/*!******************************!*\
  !*** ./src/actions/toast.js ***!
  \******************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.errorToast = exports.successToast = void 0;

				var _reactToastify = __webpack_require__(
					/*! react-toastify */ 'react-toastify'
				);

				const successToast = (res) => {
					res.status == 1
						? _reactToastify.toast.success(res.message, {
								position: 'top-right',
						  })
						: _reactToastify.toast.error(res.message, {
								position: 'top-right',
						  });
				};

				exports.successToast = successToast;

				const errorToast = (err) => {
					_reactToastify.toast.error(err.message, {
						position: 'top-right',
					});
				};

				exports.errorToast = errorToast;

				/***/
			},

		/***/ './src/actions/topic.js':
			/*!******************************!*\
  !*** ./src/actions/topic.js ***!
  \******************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.deleteTopic =
					exports.unlockTopic =
					exports.editTopic =
					exports.addTopic =
					exports.getTopics =
						void 0;

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _reactToastify = __webpack_require__(
					/*! react-toastify */ 'react-toastify'
				);

				var _toast = __webpack_require__(
					/*! ./toast */ './src/actions/toast.js'
				);

				const getTopics = (specialityName) => async (dispatch) => {
					try {
						const res = await (0, _helpers.serviceGet)(
							`api/topic/get/${specialityName}`
						);
						console.log(res.data);
						dispatch({
							type: 'GET_TOPICS',
							payload: res.data,
						});
						(0, _toast.successToast)(res);
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'GET_TOPICS_ERROR',
							payload: {},
						});
					}
				};

				exports.getTopics = getTopics;

				const addTopic = (data, specialityName) => async (dispatch) => {
					console.log(specialityName);

					try {
						console.log(data);
						const res = await (0, _helpers.servicePost)(`api/topic/add`, data, {
							'Content-Type': 'application/json',
						});
						(0, _toast.successToast)(res);
						console.log(res.data);
						dispatch({
							type: 'ADD_TOPIC',
							payload: res.data,
						}); // refresh topics

						const res2 = await (0, _helpers.serviceGet)(
							`api/topic/get/${specialityName}`
						);
						dispatch({
							type: 'GET_TOPICS',
							payload: res2.data,
						});
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'ADD_TOPIC_ERROR',
							payload: {},
						});
					}
				};

				exports.addTopic = addTopic;

				const editTopic = (data, id, specialityName) => async (dispatch) => {
					try {
						const res = await (0, _helpers.servicePost)(
							`api/topic/update/${id}`,
							data,
							{
								'Content-Type': 'application/json',
							}
						);
						console.log(res.data);
						dispatch({
							type: 'EDIT_TOPIC',
							payload: res.data,
						});
						(0, _toast.successToast)(res);
						const res2 = await (0, _helpers.serviceGet)(
							`api/topic/get/${specialityName}`
						);
						dispatch({
							type: 'GET_TOPICS',
							payload: res2.data,
						});
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'EDIT_TOPIC_ERROR',
							payload: {},
						});
					}
				};

				exports.editTopic = editTopic;

				const unlockTopic = (topicId, specialityName) => async (dispatch) => {
					console.log(specialityName);

					try {
						const res = await (0, _helpers.servicePost)(
							`api/topic/unlock/${topicId}`,
							{},
							{
								'Content-Type': 'application/json',
							}
						);
						(0, _toast.successToast)(res);
						dispatch({
							type: 'USERLOADED',
							payload: res.data.user,
						});
						dispatch({
							type: 'UNLOCK_TOPIC',
							payload: res.data,
						});
						const res2 = await (0, _helpers.serviceGet)(
							`api/topic/get/${specialityName}`
						);
						dispatch({
							type: 'GET_TOPICS',
							payload: res2.data,
						});
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'UNLOCK_TOPIC_ERROR',
							payload: {},
						});
					}
				};

				exports.unlockTopic = unlockTopic;

				const deleteTopic = (id, specialityName) => async (dispatch) => {
					console.log({
						id,
						specialityName,
					});

					try {
						const res = await (0, _helpers.servicePost)(
							`api/topic/delete/${id}`,
							{},
							{
								'Content-Type': 'application/json',
							}
						);
						console.log(res.data);
						(0, _toast.successToast)(res);
						dispatch({
							type: 'DELETE_TOPIC',
							payload: res.data,
						});
						const res2 = await (0, _helpers.serviceGet)(
							`api/topic/get/${specialityName}`
						);
						dispatch({
							type: 'GET_TOPICS',
							payload: res2.data,
						});
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'DELETE_TOPIC_ERROR',
							payload: {},
						});
					}
				};

				exports.deleteTopic = deleteTopic;

				/***/
			},

		/***/ './src/actions/types.js':
			/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
			/***/ (__unused_webpack_module, exports) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.AUTH_ERROR =
					exports.USER_LOADED =
					exports.LOGOUT =
					exports.SEND_RESET_EMAIL_FAIL =
					exports.SEND_RESET_EMAIL =
					exports.REGISTER_FAIL =
					exports.REGISTER_SUCCESS =
					exports.LOGIN_FAIL =
					exports.LOGIN_SUCCESS =
					exports.REMOVE_ALERT =
					exports.SET_ALERT =
						void 0;
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
			},

		/***/ './src/actions/ui.js':
			/*!***************************!*\
  !*** ./src/actions/ui.js ***!
  \***************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.setDisplayMode = exports.setOpenTopics = void 0;

				var _store = _interopRequireDefault(
					__webpack_require__(/*! ../store */ './src/store.js')
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const setOpenTopics = (id) => async (dispatch) => {
					console.log(id);

					const openTopicsArray = _store.default.getState().ui.openTopics;

					if (!openTopicsArray.includes(id)) {
						openTopicsArray.push(id);
					} else {
						openTopicsArray.splice(openTopicsArray.indexOf(id), 1);
					}

					dispatch({
						type: 'SET_OPEN_TOPICS',
						payload: openTopicsArray,
					});
				};

				exports.setOpenTopics = setOpenTopics;

				const setDisplayMode = () => async (dispatch) => {
					const displayMode =
						_store.default.getState().ui.displayMode === 'dark'
							? 'light'
							: 'dark';
					if (_helpers.isClient) localStorage.setItem('mode', displayMode);
					dispatch({
						type: 'SET_DISPLAY_MODE',
						payload: displayMode,
					});
				};

				exports.setDisplayMode = setDisplayMode;

				/***/
			},

		/***/ './src/actions/video.js':
			/*!******************************!*\
  !*** ./src/actions/video.js ***!
  \******************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.selectVideo =
					exports.deleteVideo =
					exports.editVideo =
					exports.addVideo =
					exports.getVideo =
						void 0;

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _toast = __webpack_require__(
					/*! ./toast */ './src/actions/toast.js'
				);

				const getVideo = (id) => async (dispatch) => {
					try {
						const res = await (0, _helpers.serviceGet)(`api/video/get/${id}`);
						(0, _toast.successToast)(res);
						dispatch({
							type: 'GET_VIDEO',
							payload: res.data,
						});
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'ADD_VIDEO_ERROR',
							payload: {},
						});
					}
				};

				exports.getVideo = getVideo;

				const addVideo = (data, id, specialityName) => async (dispatch) => {
					try {
						const res = await (0, _helpers.servicePost)(
							`api/video/add/${id}`,
							data,
							{
								'Content-Type': 'application/json',
							}
						);
						(0, _toast.successToast)(res);
						dispatch({
							type: 'ADD_VIDEO',
							payload: res.data,
						});
						const resTopic = await (0, _helpers.serviceGet)(
							`api/topic/get/${specialityName}`
						);
						console.log(resTopic);
						dispatch({
							type: 'GET_TOPICS',
							payload: resTopic.data,
						});
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'ADD_VIDEO_ERROR',
							payload: {},
						});
					}
				};

				exports.addVideo = addVideo;

				const editVideo = (data, id, specialityName) => async (dispatch) => {
					try {
						const res = await (0, _helpers.servicePost)(
							`api/video/update/${id}`,
							data,
							{
								'Content-Type': 'application/json',
							}
						);
						console.log(res.data);
						dispatch({
							type: 'EDIT_VIDEO',
							payload: res.data,
						});
						(0, _toast.successToast)(res);
						const resTopic = await (0, _helpers.serviceGet)(
							`api/topic/get/${specialityName}`
						);
						console.log(resTopic.data);
						dispatch({
							type: 'GET_TOPICS',
							payload: resTopic.data,
						});
					} catch (error) {
						(0, _toast.errorToast)(error);
						dispatch({
							type: 'EDIT_VIDEO_ERROR',
							payload: {},
						});
					}
				};

				exports.editVideo = editVideo;

				const deleteVideo =
					(videoId, topicId, specialityName) => async (dispatch) => {
						try {
							const res = await (0, _helpers.servicePost)(
								`api/video/delete/${videoId}/${topicId}`,
								{},
								{
									'Content-Type': 'application/json',
								}
							);
							console.log(res.data);
							dispatch({
								type: 'DELETE_VIDEO',
								payload: res.data,
							});
							const res2 = await (0, _helpers.serviceGet)(
								`api/topic/get/${specialityName}`
							);
							console.log(res2.data);
							(0, _toast.successToast)(res);
							dispatch({
								type: 'GET_TOPICS',
								payload: res2.data,
							});
						} catch (error) {
							(0, _toast.errorToast)(error);
							dispatch({
								type: 'DELETE_VIDEO_ERROR',
								payload: {},
							});
						}
					};

				exports.deleteVideo = deleteVideo;

				const selectVideo = (video) => (dispatch) => {
					try {
						dispatch({
							type: 'SELECT_VIDEO',
							payload: video,
						});
					} catch (error) {
						dispatch({
							type: 'SELECT_VIDEO_ERROR',
						});
					}
				};

				exports.selectVideo = selectVideo;

				/***/
			},

		/***/ './src/assets/icons/Add.js':
			/*!*********************************!*\
  !*** ./src/assets/icons/Add.js ***!
  \*********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.Add = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Add = ({ size = 33, color = '#000000' }) =>
					/*#__PURE__*/ _react.default.createElement(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: size,
							height: size,
							viewBox: '0 0 24 24',
							fill: 'none',
							stroke: color,
							strokeWidth: '3.5',
							strokeLinecap: 'square',
							strokeLinejoin: 'arcs',
						},
						/*#__PURE__*/ _react.default.createElement('line', {
							x1: '12',
							y1: '5',
							x2: '12',
							y2: '19',
						}),
						/*#__PURE__*/ _react.default.createElement('line', {
							x1: '5',
							y1: '12',
							x2: '19',
							y2: '12',
						})
					);

				exports.Add = Add;

				/***/
			},

		/***/ './src/assets/icons/Chevrons.js':
			/*!**************************************!*\
  !*** ./src/assets/icons/Chevrons.js ***!
  \**************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.ChevronsLeft = exports.ChevronsUp = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const ChevronsUp = ({ size = 33, color = '#000000' }) =>
					/*#__PURE__*/ _react.default.createElement(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: size,
							height: size,
							viewBox: '0 0 24 24',
							fill: 'none',
							stroke: color,
							strokeWidth: '3.5',
							strokeLinecap: 'square',
							strokeLinejoin: 'arcs',
						},
						/*#__PURE__*/ _react.default.createElement('path', {
							d: 'M17 11l-5-5-5 5M17 18l-5-5-5 5',
						})
					);

				exports.ChevronsUp = ChevronsUp;

				const ChevronsLeft = ({ size = 51, color = '#000000' }) =>
					/*#__PURE__*/ _react.default.createElement(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: size,
							height: size,
							viewBox: '0 0 24 24',
							fill: 'none',
							stroke: color,
							strokeWidth: '2.5',
							strokeLinecap: 'square',
							strokeLinejoin: 'arcs',
						},
						/*#__PURE__*/ _react.default.createElement('path', {
							d: 'M11 17l-5-5 5-5M18 17l-5-5 5-5',
						})
					);

				exports.ChevronsLeft = ChevronsLeft;

				/***/
			},

		/***/ './src/assets/icons/Cross.js':
			/*!***********************************!*\
  !*** ./src/assets/icons/Cross.js ***!
  \***********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.Cross = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Cross = ({ size = 32, color = '#000000' }) =>
					/*#__PURE__*/ _react.default.createElement(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: size,
							height: size,
							viewBox: '0 0 24 24',
							fill: 'none',
							stroke: color,
							strokeWidth: '1.5',
							strokeLinecap: 'square',
							strokeLinejoin: 'arcs',
						},
						/*#__PURE__*/ _react.default.createElement('line', {
							x1: '18',
							y1: '6',
							x2: '6',
							y2: '18',
						}),
						/*#__PURE__*/ _react.default.createElement('line', {
							x1: '6',
							y1: '6',
							x2: '18',
							y2: '18',
						})
					);

				exports.Cross = Cross;

				/***/
			},

		/***/ './src/assets/icons/Delete.js':
			/*!************************************!*\
  !*** ./src/assets/icons/Delete.js ***!
  \************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.Delete = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Delete = ({ size = 33, color = '#000000' }) =>
					/*#__PURE__*/ _react.default.createElement(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: size,
							height: size,
							viewBox: '0 0 24 24',
							fill: 'none',
							stroke: color,
							strokeWidth: '2',
							strokeLinecap: 'square',
							strokeLinejoin: 'arcs',
						},
						/*#__PURE__*/ _react.default.createElement('polyline', {
							points: '3 6 5 6 21 6',
						}),
						/*#__PURE__*/ _react.default.createElement('path', {
							d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
						}),
						/*#__PURE__*/ _react.default.createElement('line', {
							x1: '10',
							y1: '11',
							x2: '10',
							y2: '17',
						}),
						/*#__PURE__*/ _react.default.createElement('line', {
							x1: '14',
							y1: '11',
							x2: '14',
							y2: '17',
						})
					);

				exports.Delete = Delete;

				/***/
			},

		/***/ './src/assets/icons/Lock.js':
			/*!**********************************!*\
  !*** ./src/assets/icons/Lock.js ***!
  \**********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.Unlock = exports.Lock = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Lock = ({ size = 33, color = '#DC143C', handler }) => {
					return /*#__PURE__*/ _react.default.createElement(
						'svg',
						{
							onClick: handler,
							xmlns: 'http://www.w3.org/2000/svg',
							width: '43',
							height: '43',
							viewBox: '0 0 24 24',
							fill: 'none',
							stroke: color,
							'stroke-width': '2',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round',
						},
						/*#__PURE__*/ _react.default.createElement('rect', {
							x: '3',
							y: '11',
							width: '18',
							height: '11',
							rx: '2',
							ry: '2',
						}),
						/*#__PURE__*/ _react.default.createElement('path', {
							d: 'M7 11V7a5 5 0 0 1 10 0v4',
						})
					);
				};

				exports.Lock = Lock;

				const Unlock = ({ size = 33, color = '#00FF00' }) =>
					/*#__PURE__*/ _react.default.createElement(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: '43',
							height: '43',
							viewBox: '0 0 24 24',
							fill: 'none',
							stroke: color,
							'stroke-width': '2',
							'stroke-linecap': 'round',
							'stroke-linejoin': 'round',
						},
						/*#__PURE__*/ _react.default.createElement('rect', {
							x: '3',
							y: '11',
							width: '18',
							height: '11',
							rx: '2',
							ry: '2',
						}),
						/*#__PURE__*/ _react.default.createElement('path', {
							d: 'M7 11V7a5 5 0 0 1 9.9-1',
						})
					);

				exports.Unlock = Unlock;

				/***/
			},

		/***/ './src/assets/icons/Read.js':
			/*!**********************************!*\
  !*** ./src/assets/icons/Read.js ***!
  \**********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.Read = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Read = ({ size = 33, color = '#000000' }) =>
					/*#__PURE__*/ _react.default.createElement(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: size,
							height: size,
							viewBox: '0 0 24 24',
						},
						/*#__PURE__*/ _react.default.createElement('path', {
							d: 'M12 4.706c-2.938-1.83-7.416-2.566-12-2.706v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.876-12 2.706zm-10 13.104v-13.704c5.157.389 7.527 1.463 9 2.334v13.168c-1.525-.546-4.716-1.504-9-1.798zm20 0c-4.283.293-7.475 1.252-9 1.799v-13.171c1.453-.861 3.83-1.942 9-2.332v13.704zm-2-10.214c-2.086.312-4.451 1.023-6 1.672v-1.064c1.668-.622 3.881-1.315 6-1.626v1.018zm0 3.055c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0 6.093c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm-16-6.104c2.119.311 4.332 1.004 6 1.626v1.064c-1.549-.649-3.914-1.361-6-1.672v-1.018zm0 5.09c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.316-6-1.626v1.017zm0 6.093c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017z',
						})
					);

				exports.Read = Read;

				/***/
			},

		/***/ './src/assets/icons/Update.js':
			/*!************************************!*\
  !*** ./src/assets/icons/Update.js ***!
  \************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.Update = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Update = ({ size = 33, color = '#000000' }) =>
					/*#__PURE__*/ _react.default.createElement(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: size,
							height: size,
							viewBox: '0 0 24 24',
							fill: 'none',
							stroke: color,
							strokeWidth: '2',
							strokeLinecap: 'square',
							strokeLinejoin: 'arcs',
						},
						/*#__PURE__*/ _react.default.createElement('path', {
							d: 'M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34',
						}),
						/*#__PURE__*/ _react.default.createElement('polygon', {
							points: '18 2 22 6 12 16 8 16 8 12 18 2',
						})
					);

				exports.Update = Update;

				/***/
			},

		/***/ './src/assets/icons/index.js':
			/*!***********************************!*\
  !*** ./src/assets/icons/index.js ***!
  \***********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});

				var _Add = __webpack_require__(
					/*! ./Add */ './src/assets/icons/Add.js'
				);

				Object.keys(_Add).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _Add[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _Add[key];
						},
					});
				});

				var _Delete = __webpack_require__(
					/*! ./Delete */ './src/assets/icons/Delete.js'
				);

				Object.keys(_Delete).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _Delete[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _Delete[key];
						},
					});
				});

				var _Update = __webpack_require__(
					/*! ./Update */ './src/assets/icons/Update.js'
				);

				Object.keys(_Update).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _Update[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _Update[key];
						},
					});
				});

				var _Chevrons = __webpack_require__(
					/*! ./Chevrons */ './src/assets/icons/Chevrons.js'
				);

				Object.keys(_Chevrons).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _Chevrons[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _Chevrons[key];
						},
					});
				});

				var _Read = __webpack_require__(
					/*! ./Read */ './src/assets/icons/Read.js'
				);

				Object.keys(_Read).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _Read[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _Read[key];
						},
					});
				});

				var _Lock = __webpack_require__(
					/*! ./Lock */ './src/assets/icons/Lock.js'
				);

				Object.keys(_Lock).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _Lock[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _Lock[key];
						},
					});
				});

				var _Cross = __webpack_require__(
					/*! ./Cross */ './src/assets/icons/Cross.js'
				);

				Object.keys(_Cross).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _Cross[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _Cross[key];
						},
					});
				});

				/***/
			},

		/***/ './src/components/About.js':
			/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _framerMotion = __webpack_require__(
					/*! framer-motion */ 'framer-motion'
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _Questions = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/about/Questions */ './src/sections/about/Questions.js'
					)
				);

				var _AboutUs = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/about/AboutUs */ './src/sections/about/AboutUs.js'
					)
				);

				var _layout = __webpack_require__(
					/*! ../layout */ './src/layout/index.js'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const About = () => {
					return /*#__PURE__*/ _react.default.createElement(
						_framerMotion.motion.div,
						{
							initial: {
								opacity: 0,
							},
							animate: {
								opacity: 1,
							},
							exit: {
								opacity: 0,
							},
						},
						/*#__PURE__*/ _react.default.createElement(_helpers.Seo, {
							title: 'About',
						}),
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'about-page scroller',
							},
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'ovr-wave top-slide',
								},
								/*#__PURE__*/ _react.default.createElement(
									'h1',
									{
										style: {
											textAlign: 'center',
										},
									},
									'Hello there,'
								),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'subheading-about',
									},
									'We created ',
									/*#__PURE__*/ _react.default.createElement(
										'span',
										{
											className: 'logo text-dark',
										},
										'Coders Gala'
									),
									' to provide You Quality resources to learn From'
								),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									null,
									/*#__PURE__*/ _react.default.createElement('img', {
										alt: 'scroll icon',
										src: 'https://gifimage.net/wp-content/uploads/2018/05/scroll-gif-10.gif',
										className: 'scroll-icon',
									})
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								_Questions.default,
								null
							),
							/*#__PURE__*/ _react.default.createElement(
								_AboutUs.default,
								null
							),
							/*#__PURE__*/ _react.default.createElement(_layout.Footer, null)
						)
					);
				};

				var _default = About;
				exports.default = _default;

				/***/
			},

		/***/ './src/components/Article.js':
			/*!***********************************!*\
  !*** ./src/components/Article.js ***!
  \***********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactBootstrap = __webpack_require__(
					/*! react-bootstrap */ 'react-bootstrap'
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _reactHtmlParser = _interopRequireDefault(
					__webpack_require__(/*! react-html-parser */ 'react-html-parser')
				);

				var _layout = __webpack_require__(
					/*! ../layout */ './src/layout/index.js'
				);

				var _actions = __webpack_require__(
					/*! ../actions */ './src/actions/index.js'
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _icons = __webpack_require__(
					/*! ../assets/icons */ './src/assets/icons/index.js'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

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
				const Article = (props) => {
					const { name } = props.match.params;
					const [article, setArticle] = (0, _react.useState)({});

					const getArticle = async (name) => {
						const res = await (0, _helpers.servicePost)(
							`api/article/get`,
							{
								name,
							},
							{
								'Content-Type': 'application/json',
							}
						);
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
					return /*#__PURE__*/ _react.default.createElement(
						_react.default.Fragment,
						null,
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'selected-article',
							},
							/*#__PURE__*/ _react.default.createElement(
								_reactBootstrap.Row,
								{
									className: 'full-view-article p-2',
								},
								/*#__PURE__*/ _react.default.createElement(
									_reactBootstrap.Col,
									{
										sm: 2,
									}
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactBootstrap.Col,
									{
										id: 'top',
										style: {
											padding: '0px',
										},
										sm: 8,
									},
									/*#__PURE__*/ _react.default.createElement(
										'div',
										{
											className: 'ql-snow',
										},
										/*#__PURE__*/ _react.default.createElement(
											'div',
											{
												className: 'full-article ql-editor',
											},
											(0, _reactHtmlParser.default)(html)
										)
									),
									/*#__PURE__*/ _react.default.createElement(
										'div',
										{
											className: 'top-icon',
										},
										/*#__PURE__*/ _react.default.createElement(
											_icons.ChevronsUp,
											{
												size: '50',
												color: '#dc143c',
												onClick: goToTop,
											}
										)
									)
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactBootstrap.Col,
									{
										sm: 2,
									}
								)
							)
						),
						/*#__PURE__*/ _react.default.createElement(_layout.Footer, null)
					);
				};

				const mapStateToProps = (state) => ({
					auth: state.auth,
				});

				var _default = (0, _reactRedux.connect)(mapStateToProps, {
					getSpeciality: _actions.getSpeciality,
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
			},

		/***/ './src/components/Auth.js':
			/*!********************************!*\
  !*** ./src/components/Auth.js ***!
  \********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _auth = __webpack_require__(
					/*! ../actions/auth */ './src/actions/auth.js'
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) {
							symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(object, sym).enumerable;
							});
						}
						keys.push.apply(keys, symbols);
					}
					return keys;
				}

				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) {
							ownKeys(Object(source), true).forEach(function (key) {
								_defineProperty(target, key, source[key]);
							});
						} else if (Object.getOwnPropertyDescriptors) {
							Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
							);
						} else {
							ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								);
							});
						}
					}
					return target;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true,
						});
					} else {
						obj[key] = value;
					}
					return obj;
				}

				const Auth = ({ login, register, token, type }) => {
					const [data, setData] = (0, _react.useState)({});
					if (token)
						return /*#__PURE__*/ _react.default.createElement(
							_reactRouterDom.Redirect,
							{
								to: '/learn',
							}
						);
					const dinText = '<Coders Gala/>';

					const handleSubmit = (e) => {
						e.preventDefault();

						if (type === 'signup') {
							document.querySelector('.section h1').classList.add('changed');
							register(data);
						} else {
							e.preventDefault();
							document.querySelector('.section h1').classList.add('changed');
							login(data);
						}
					};

					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'auth-container',
						},
						/*#__PURE__*/ _react.default.createElement(_helpers.Seo, {
							title: 'LogIn',
						}),
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'container',
							},
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'form-container',
								},
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'section',
									},
									/*#__PURE__*/ _react.default.createElement(
										'h6',
										{
											className: 'dinTag',
										},
										dinText
									),
									type === 'signup'
										? /*#__PURE__*/ _react.default.createElement(
												_react.default.Fragment,
												null,
												/*#__PURE__*/ _react.default.createElement(
													'h1',
													null,
													'Sign Up'
												),
												/*#__PURE__*/ _react.default.createElement(
													'p',
													null,
													'Hey, Welcome to CodersGala !!'
												)
										  )
										: /*#__PURE__*/ _react.default.createElement(
												_react.default.Fragment,
												null,
												/*#__PURE__*/ _react.default.createElement(
													'h1',
													null,
													'Login'
												),
												/*#__PURE__*/ _react.default.createElement(
													'p',
													null,
													'Hey there, Welcome Back !!'
												)
										  ),
									/*#__PURE__*/ _react.default.createElement(
										'form',
										{
											onSubmit: handleSubmit,
										},
										/*#__PURE__*/ _react.default.createElement(
											'div',
											{
												className: type === 'signup' ? 'flex' : '',
											},
											/*#__PURE__*/ _react.default.createElement(
												'div',
												{
													className: 'form-field',
												},
												/*#__PURE__*/ _react.default.createElement(
													'label',
													{
														htmlFor: 'email',
													},
													'Email'
												),
												/*#__PURE__*/ _react.default.createElement('input', {
													onChange: (e) => {
														setData((prev) =>
															_objectSpread(
																_objectSpread({}, prev),
																{},
																{
																	email: e.target.value,
																}
															)
														);
													},
													type: 'email',
													className: 'form-control',
													required: true,
													placeholder: 'First Name',
												})
											),
											/*#__PURE__*/ _react.default.createElement(
												'div',
												{
													className: 'form-field',
												},
												/*#__PURE__*/ _react.default.createElement(
													'label',
													{
														htmlFor: 'password',
													},
													'Password'
												),
												/*#__PURE__*/ _react.default.createElement('input', {
													required: true,
													onChange: (e) => {
														setData((prev) =>
															_objectSpread(
																_objectSpread({}, prev),
																{},
																{
																	password: e.target.value,
																}
															)
														);
													},
													type: 'password',
													className: 'form-control',
													placeholder: 'Last Name',
												})
											)
										),
										type === 'signup'
											? /*#__PURE__*/ _react.default.createElement(
													_react.default.Fragment,
													null,
													' ',
													/*#__PURE__*/ _react.default.createElement(
														'div',
														{
															className: 'flex',
														},
														/*#__PURE__*/ _react.default.createElement(
															'div',
															{
																className: 'form-field',
															},
															/*#__PURE__*/ _react.default.createElement(
																'label',
																{
																	htmlFor: 'firstName',
																},
																'First Name'
															),
															/*#__PURE__*/ _react.default.createElement(
																'input',
																{
																	onChange: (e) => {
																		setData((prev) =>
																			_objectSpread(
																				_objectSpread({}, prev),
																				{},
																				{
																					firstName: e.target.value,
																				}
																			)
																		);
																	},
																	type: 'text',
																	id: 'lastName',
																	className: 'form-control',
																	required: true,
																	placeholder: 'First Name',
																}
															)
														),
														/*#__PURE__*/ _react.default.createElement(
															'div',
															{
																className: 'form-field',
															},
															/*#__PURE__*/ _react.default.createElement(
																'label',
																{
																	htmlFor: 'lastName',
																},
																'Last Name'
															),
															/*#__PURE__*/ _react.default.createElement(
																'input',
																{
																	onChange: (e) => {
																		setData((prev) =>
																			_objectSpread(
																				_objectSpread({}, prev),
																				{},
																				{
																					lastName: e.target.value,
																				}
																			)
																		);
																	},
																	type: 'text',
																	id: 'lastName',
																	className: 'form-control',
																	required: true,
																	placeholder: 'Last Name',
																}
															)
														)
													),
													/*#__PURE__*/ _react.default.createElement(
														'div',
														{
															className: 'flex',
														},
														/*#__PURE__*/ _react.default.createElement(
															'div',
															{
																className: 'form-field',
															},
															/*#__PURE__*/ _react.default.createElement(
																'label',
																{
																	htmlFor: 'age',
																},
																'Age'
															),
															/*#__PURE__*/ _react.default.createElement(
																'input',
																{
																	onChange: (e) => {
																		setData((prev) =>
																			_objectSpread(
																				_objectSpread({}, prev),
																				{},
																				{
																					age: e.target.value,
																				}
																			)
																		);
																	},
																	type: 'number',
																	id: 'age',
																	className: 'form-control',
																	required: true,
																	placeholder: 'Age',
																}
															)
														),
														/*#__PURE__*/ _react.default.createElement(
															'div',
															{
																className: 'form-field',
															},
															/*#__PURE__*/ _react.default.createElement(
																'label',
																{
																	htmlFor: 'codeReferred',
																},
																'Refer Code'
															),
															/*#__PURE__*/ _react.default.createElement(
																'input',
																{
																	type: 'text',
																	id: 'codeReferred',
																	placeholder: 'PB18FC69',
																	defaultValue: '',
																	className: 'form-control',
																	onChange: (e) => {
																		setData((prev) =>
																			_objectSpread(
																				_objectSpread({}, prev),
																				{},
																				{
																					codeReffered: e.target.value,
																				}
																			)
																		);
																	},
																}
															)
														)
													)
											  )
											: null,
										type === 'signup'
											? /*#__PURE__*/ _react.default.createElement(
													'div',
													{
														className: 'form-options',
													},
													/*#__PURE__*/ _react.default.createElement(
														'div',
														{
															className: 'checkbox-field',
														},
														/*#__PURE__*/ _react.default.createElement(
															'label',
															{
																htmlFor: 'rememberMe',
															},
															'Have an account?'
														)
													),
													/*#__PURE__*/ _react.default.createElement(
														_reactRouterDom.NavLink,
														{
															to: '/login',
														},
														'Login'
													)
											  )
											: /*#__PURE__*/ _react.default.createElement(
													'div',
													{
														className: 'form-options',
													},
													/*#__PURE__*/ _react.default.createElement(
														'div',
														{
															className: 'checkbox-field',
														},
														/*#__PURE__*/ _react.default.createElement(
															'label',
															{
																htmlFor: 'rememberMe',
															},
															'Forgot Password?'
														)
													),
													/*#__PURE__*/ _react.default.createElement(
														_reactRouterDom.NavLink,
														{
															to: '/signup',
														},
														'SignUp'
													)
											  ),
										/*#__PURE__*/ _react.default.createElement(
											'div',
											{
												className: 'form-field',
											},
											/*#__PURE__*/ _react.default.createElement('input', {
												type: 'submit',
												className: 'btn btn-signin',
												value: 'Submit',
											})
										)
									)
								)
							)
						)
					);
				};

				const mapStateToProps = (state) => ({
					token: state.auth.token,
				});

				var _default = (0, _reactRedux.connect)(mapStateToProps, {
					login: _auth.login,
					register: _auth.register,
				})(Auth);

				exports.default = _default;

				/***/
			},

		/***/ './src/components/Blog.js':
			/*!********************************!*\
  !*** ./src/components/Blog.js ***!
  \********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _article = __webpack_require__(
					/*! ../actions/article */ './src/actions/article.js'
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _reactBootstrap = __webpack_require__(
					/*! react-bootstrap */ 'react-bootstrap'
				);

				var _Featured = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/blog/Featured */ './src/sections/blog/Featured.js'
					)
				);

				var _Latest = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/blog/Latest */ './src/sections/blog/Latest.js'
					)
				);

				var _All = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/blog/All */ './src/sections/blog/All.js'
					)
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				const Blog = ({ getAllArticles, articles, isAdmin }) => {
					(0, _react.useEffect)(() => {
						if (articles.length === 0) {
							getAllArticles();
						}
					}, [articles, getAllArticles]);
					console.log(articles);
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'blog-container',
						},
						/*#__PURE__*/ _react.default.createElement(
							'nav',
							{
								className: 'nav__top',
							},
							/*#__PURE__*/ _react.default.createElement('a', {
								rel: 'nofollow',
								href: '#',
								className: 'nav__top__link',
							})
						),
						isAdmin &&
							/*#__PURE__*/ _react.default.createElement(
								_reactRouterDom.NavLink,
								{
									to: '/article/add',
									rel: 'nofollow',
								},
								/*#__PURE__*/ _react.default.createElement(
									_reactBootstrap.Button,
									{
										variant: 'primary',
										size: 'lg',
										block: true,
									},
									'Add Article'
								)
							),
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'title',
							},
							/*#__PURE__*/ _react.default.createElement(
								'h1',
								{
									style: {
										fontFamily: 'Dosis',
									},
									className: 'title__h1',
								},
								' ',
								'CodersGala ',
								/*#__PURE__*/ _react.default.createElement('span', null, 'Blog')
							),
							/*#__PURE__*/ _react.default.createElement(
								'p',
								{
									className: 'title__sub',
								},
								'Sorry :('
							)
						),
						/*#__PURE__*/ _react.default.createElement(
							'article',
							{
								className: 'grid',
							},
							/*#__PURE__*/ _react.default.createElement(
								'section',
								{
									className: 'grid__col-2',
								},
								/*#__PURE__*/ _react.default.createElement(_Latest.default, {
									article: articles && articles[0],
								}),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									null,
									/*#__PURE__*/ _react.default.createElement(
										'h3',
										{
											className: 'grid__col__title',
										},
										'Featured Articles'
									),
									/*#__PURE__*/ _react.default.createElement(
										_Featured.default,
										{
											articles: articles,
										}
									)
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								'h3',
								{
									className: 'grid__col__title',
								},
								'Also Read...'
							),
							/*#__PURE__*/ _react.default.createElement(_All.default, {
								articles: articles,
							})
						)
					);
				};

				const mapStateToProps = (state) => ({
					articles: state.article.articles,
					isAdmin: state.auth.isAdmin,
				});

				var _default = (0, _reactRedux.connect)(mapStateToProps, {
					getAllArticles: _article.getAllArticles,
				})(Blog);

				exports.default = _default;

				/***/
			},

		/***/ './src/components/Home.js':
			/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _framerMotion = __webpack_require__(
					/*! framer-motion */ 'framer-motion'
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _Hero = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/home/Hero */ './src/sections/home/Hero.js'
					)
				);

				var _HeroCards = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/home/HeroCards */ './src/sections/home/HeroCards.js'
					)
				);

				var _preloader = _interopRequireDefault(
					__webpack_require__(
						/*! ../layout/preloader */ './src/layout/preloader.js'
					)
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Home = () => {
					var homeContent = 'adsf';
					return /*#__PURE__*/ _react.default.createElement(
						_framerMotion.motion.div,
						{
							initial: {
								opacity: 0,
							},
							animate: {
								opacity: 1,
							},
							exit: {
								opacity: 0,
							},
						},
						/*#__PURE__*/ _react.default.createElement(_helpers.Seo, {
							title: 'Home',
							meta: [
								{
									name: 'robots',
									content: 'index follow',
								},
							],
						}),
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								id: 'myDiv',
							},
							homeContent
								? /*#__PURE__*/ _react.default.createElement(
										'div',
										{
											className: 'home-container',
										},
										/*#__PURE__*/ _react.default.createElement(
											_Hero.default,
											null
										),
										/*#__PURE__*/ _react.default.createElement(
											_HeroCards.default,
											null
										)
								  )
								: /*#__PURE__*/ _react.default.createElement(
										_preloader.default,
										null
								  )
						)
					);
				};

				var _default = Home;
				exports.default = _default;

				/***/
			},

		/***/ './src/components/Learn.js':
			/*!*********************************!*\
  !*** ./src/components/Learn.js ***!
  \*********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _framerMotion = __webpack_require__(
					/*! framer-motion */ 'framer-motion'
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _layout = __webpack_require__(
					/*! ../layout/ */ './src/layout/index.js'
				);

				var _Card = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/learn/Card */ './src/sections/learn/Card.js'
					)
				);

				var _AdminButtons = _interopRequireDefault(
					__webpack_require__(
						/*! ../layout/Buttons/AdminButtons */ './src/layout/Buttons/AdminButtons.js'
					)
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Learn = () => {
					return /*#__PURE__*/ _react.default.createElement(
						_framerMotion.motion.div,
						{
							exit: {
								opacity: 0,
							},
							animate: {
								opacity: 1,
							},
							initial: {
								opacity: 0,
							},
						},
						/*#__PURE__*/ _react.default.createElement(_helpers.Seo, {
							title: 'Learn',
							meta: [
								{
									name: 'robots',
									content: 'index follow',
								},
							],
						}),
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'container learn-container',
							},
							/*#__PURE__*/ _react.default.createElement(
								_AdminButtons.default,
								{
									type: 'Add',
									url: '/addcard',
									data: {
										name: 'Courses',
									},
								}
							),
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'flex',
								},
								/*#__PURE__*/ _react.default.createElement(_Card.default, null)
							)
						),
						/*#__PURE__*/ _react.default.createElement(_layout.Footer, null)
					);
				};

				var _default = Learn;
				exports.default = _default;

				/***/
			},

		/***/ './src/components/Preview.js':
			/*!***********************************!*\
  !*** ./src/components/Preview.js ***!
  \***********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _reactBootstrap = __webpack_require__(
					/*! react-bootstrap */ 'react-bootstrap'
				);

				var _layout = __webpack_require__(
					/*! ../layout */ './src/layout/index.js'
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _icons = __webpack_require__(
					/*! ../assets/icons */ './src/assets/icons/index.js'
				);

				var _actions = __webpack_require__(
					/*! ../actions */ './src/actions/index.js'
				);

				var _VideoPreview = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/preview/VideoPreview */ './src/sections/preview/VideoPreview.js'
					)
				);

				var _TopicsOverview = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/preview/TopicsOverview */ './src/sections/preview/TopicsOverview.js'
					)
				);

				var _AdminButtons = _interopRequireDefault(
					__webpack_require__(
						/*! ../layout/Buttons/AdminButtons */ './src/layout/Buttons/AdminButtons.js'
					)
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				const Preview = ({
					match,
					selectVideo,
					clearArticle,
					getSpeciality,
					speciality,
				}) => {
					const [close, setClose] = (0, _react.useState)(true);
					const { specialityName } = match.params;
					(0, _react.useEffect)(() => {
						clearArticle();
						getSpeciality(specialityName);
					}, [clearArticle, getSpeciality, specialityName]);
					(0, _react.useEffect)(() => {
						selectVideo(speciality);
					}, [speciality, selectVideo]);
					return speciality
						? /*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'topics-ovr-cont',
								},
								/*#__PURE__*/ _react.default.createElement('div', {
									className: 'overlay',
									style: {
										display: close ? 'none' : 'block',
									},
									onClick: () => setClose(!close),
								}),
								/*#__PURE__*/ _react.default.createElement(_helpers.Seo, {
									title: 'Select Article',
									meta: [
										{
											name: 'robots',
											content: 'index follow',
										},
									],
								}),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'speciality-container',
									},
									/*#__PURE__*/ _react.default.createElement(
										'div',
										{
											className: 'speciality-heading',
										},
										/*#__PURE__*/ _react.default.createElement(
											'h2',
											null,
											speciality.name
										)
									),
									/*#__PURE__*/ _react.default.createElement(
										_reactBootstrap.Row,
										null,
										/*#__PURE__*/ _react.default.createElement(
											_reactBootstrap.Col,
											{
												className: 'topic-ovr-container',
												lg: 4,
												style: {
													height: close ? '25vh' : '50vh',
												},
											},
											/*#__PURE__*/ _react.default.createElement(
												'div',
												{
													className: 'topics-overview',
												},
												/*#__PURE__*/ _react.default.createElement(
													'h3',
													{
														style: {
															fontSize: '1rem',
														},
														className: 'overview',
													},
													/*#__PURE__*/ _react.default.createElement(
														'span',
														null,
														'Topics Overview '
													),
													/*#__PURE__*/ _react.default.createElement(
														_AdminButtons.default,
														{
															type: 'Add',
															url: `/${speciality.name}/topic/add/`,
															data: {
																name: 'Topics',
															},
														}
													)
												),
												/*#__PURE__*/ _react.default.createElement(
													'div',
													{
														className: 'close-toggle',
													},
													close
														? /*#__PURE__*/ _react.default.createElement(
																'span',
																{
																	onClick: () => setClose(!close),
																},
																/*#__PURE__*/ _react.default.createElement(
																	_icons.ChevronsUp,
																	null
																)
														  )
														: /*#__PURE__*/ _react.default.createElement(
																'span',
																{
																	onClick: () => setClose(!close),
																},
																/*#__PURE__*/ _react.default.createElement(
																	_icons.Cross,
																	null
																)
														  )
												)
											),
											/*#__PURE__*/ _react.default.createElement(
												_reactBootstrap.Accordion,
												null,
												/*#__PURE__*/ _react.default.createElement(
													_TopicsOverview.default,
													{
														specialityName: speciality.name,
													}
												)
											)
										),
										/*#__PURE__*/ _react.default.createElement(
											_reactBootstrap.Col,
											{
												l: 8,
											},
											/*#__PURE__*/ _react.default.createElement(
												_VideoPreview.default,
												{
													specialityName: speciality.name,
												}
											)
										)
									)
								),
								/*#__PURE__*/ _react.default.createElement(_layout.Footer, null)
						  )
						: null;
				};

				const mapStateToProps = (state) => ({
					speciality: state.speciality.speciality,
				});

				var _default = (0, _reactRedux.connect)(mapStateToProps, {
					getSpeciality: _actions.getSpeciality,
					clearArticle: _actions.clearArticle,
					selectVideo: _actions.selectVideo,
				})(Preview);

				exports.default = _default;

				/***/
			},

		/***/ './src/components/UpsertArticle.js':
			/*!*****************************************!*\
  !*** ./src/components/UpsertArticle.js ***!
  \*****************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactBootstrap = __webpack_require__(
					/*! react-bootstrap */ 'react-bootstrap'
				);

				var _editor = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/editor */ './src/sections/editor.js'
					)
				);

				var _reactToastify = __webpack_require__(
					/*! react-toastify */ 'react-toastify'
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _layout = __webpack_require__(
					/*! ../layout */ './src/layout/index.js'
				);

				var _actions = __webpack_require__(
					/*! ../actions */ './src/actions/index.js'
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _icons = __webpack_require__(
					/*! ../assets/icons */ './src/assets/icons/index.js'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				const UpsertArticle = (props) => {
					const {
						addArticle,
						specialities,
						editArticle,
						getArticle,
						prevArticle,
					} = props;
					const [content, setcontent] = (0, _react.useState)('');
					const [name, setname] = (0, _react.useState)('');
					const [keywords, setArticleKeywords] = (0, _react.useState)('');
					const [featured, setfeatured] = (0, _react.useState)(false);
					const [thumbnailUrl, setthumbnailUrl] = (0, _react.useState)(''); // const [Loading, setLoading] = useState(false);
					// const topicId = "ERROR_NA_DIYO";

					function scrollTo(element) {
						_helpers.isClient &&
							window.scroll({
								behavior: 'smooth',
								left: 0,
								top: element.offsetTop,
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

					const handleEditor = (html) => {
						setcontent(html);
					};

					const handleEdit = async (e) => {
						e.preventDefault();
						console.log(name);
						console.log(keywords);
						const data = {
							name: name === '' ? prevArticle.name : name,
							keywords: keywords === '' ? prevArticle.keywords : keywords,
							content: content === '' ? prevArticle.content : content,
						};
						editArticle(data, prevArticle._id, specialities.speciality.Name);
						(0, _reactToastify.toast)('Article updated successfully');
					};

					const handleAdd = async (e) => {
						e.preventDefault(); // console.log({ content, name, keywords });

						addArticle({
							content,
							name,
							keywords,
							featured,
							thumbnailUrl,
						});
						(0, _reactToastify.toast)('Article added successfully');
					};

					return /*#__PURE__*/ _react.default.createElement(
						_reactBootstrap.Row,
						{
							className: 'full-view-article p-2',
						},
						/*#__PURE__*/ _react.default.createElement('div', {
							className: 'share-icons',
						}),
						/*#__PURE__*/ _react.default.createElement(_reactBootstrap.Col, {
							sm: 1,
						}),
						/*#__PURE__*/ _react.default.createElement(
							_reactBootstrap.Col,
							{
								id: 'top',
								sm: 10,
							},
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: '',
								},
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: '',
									},
									/*#__PURE__*/ _react.default.createElement(
										'h4',
										{
											className: '',
											id: '',
										},
										props.edit
											? `Update Article - ${prevArticle && prevArticle.name}`
											: 'Add a Article'
									)
								),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'content',
									},
									/*#__PURE__*/ _react.default.createElement(
										'form',
										null,
										/*#__PURE__*/ _react.default.createElement(
											'div',
											{
												className: 'form-group',
											},
											/*#__PURE__*/ _react.default.createElement('input', {
												type: 'text',
												id: 'name',
												placeholder: 'Article Name',
												className: 'form-control',
												defaultValue: props.edit
													? prevArticle && prevArticle.name
													: '',
												onChange: (e) => {
													setname(e.target.value);
												},
											}),
											/*#__PURE__*/ _react.default.createElement('br', null),
											/*#__PURE__*/ _react.default.createElement('input', {
												type: 'text',
												id: 'thumbnailUrl',
												placeholder: 'Article Thumbnail',
												className: 'form-control',
												defaultValue: props.edit
													? prevArticle && prevArticle.thumbnailUrl
													: '',
												onChange: (e) => {
													setthumbnailUrl(e.target.value);
												},
											}),
											/*#__PURE__*/ _react.default.createElement('br', null),
											/*#__PURE__*/ _react.default.createElement('input', {
												type: 'text',
												id: 'keywords',
												placeholder: 'Article Description',
												className: 'form-control',
												defaultValue: props.edit
													? prevArticle && prevArticle.keywords
													: '',
												onChange: (e) => {
													setArticleKeywords(e.target.value);
												},
											}),
											/*#__PURE__*/ _react.default.createElement('br', null),
											/*#__PURE__*/ _react.default.createElement(
												'label',
												{
													htmlFor: 'featured',
												},
												'IsFeatured \xA0 '
											),
											/*#__PURE__*/ _react.default.createElement('input', {
												defaultValue: props.edit
													? prevArticle && prevArticle.featured
													: false,
												onChange: () => {
													setfeatured(!featured);
												},
												type: 'checkbox',
												id: 'featured',
											}),
											/*#__PURE__*/ _react.default.createElement('br', null),
											/*#__PURE__*/ _react.default.createElement(
												_react.default.Fragment,
												null,
												props.edit
													? prevArticle && prevArticle.content
														? /*#__PURE__*/ _react.default.createElement(
																_editor.default,
																{
																	handleEditor: handleEditor,
																	defaultValue:
																		prevArticle && prevArticle.content,
																}
														  )
														: null
													: /*#__PURE__*/ _react.default.createElement(
															_editor.default,
															{
																handleEditor: handleEditor,
																defaultValue: '',
															}
													  )
											),
											/*#__PURE__*/ _react.default.createElement(
												'div',
												{
													className: 'add-article-button',
												},
												/*#__PURE__*/ _react.default.createElement(
													_layout.Button,
													{
														isButton: true,
														handler: (e) => {
															props.edit ? handleEdit(e) : handleAdd(e);
														},
													},
													props.edit ? 'Update' : 'Add'
												)
											)
										)
									)
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'top-icon',
								},
								/*#__PURE__*/ _react.default.createElement(_icons.ChevronsUp, {
									size: '50',
									color: '#dc143c',
									onClick: goToTop,
								})
							)
						),
						/*#__PURE__*/ _react.default.createElement(_reactBootstrap.Col, {
							sm: 1,
						})
					);
				};

				const mapStateToProps = (state) => ({
					specialities: state.speciality,
					prevArticle: state.article.selectedArticle,
				});

				var _default = (0, _reactRedux.connect)(mapStateToProps, {
					addArticle: _actions.addArticle,
					editArticle: _actions.editArticle,
					getArticle: _actions.getArticle,
				})(UpsertArticle);

				exports.default = _default;

				/***/
			},

		/***/ './src/components/UpsertCard.js':
			/*!**************************************!*\
  !*** ./src/components/UpsertCard.js ***!
  \**************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _layout = __webpack_require__(
					/*! ../layout */ './src/layout/index.js'
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				var _actions = __webpack_require__(
					/*! ../actions */ './src/actions/index.js'
				);

				var _editor = _interopRequireDefault(
					__webpack_require__(
						/*! ../sections/editor */ './src/sections/editor.js'
					)
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) {
							symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(object, sym).enumerable;
							});
						}
						keys.push.apply(keys, symbols);
					}
					return keys;
				}

				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) {
							ownKeys(Object(source), true).forEach(function (key) {
								_defineProperty(target, key, source[key]);
							});
						} else if (Object.getOwnPropertyDescriptors) {
							Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
							);
						} else {
							ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								);
							});
						}
					}
					return target;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true,
						});
					} else {
						obj[key] = value;
					}
					return obj;
				}

				const UpsertCard = ({ addSpeciality, editSpeciality, edit, match }) => {
					const [state, setState] = (0, _react.useState)({});
					const [data, setData] = (0, _react.useState)({});
					(0, _react.useEffect)(() => {
						const fetchData = async () => {
							if (edit) {
								const res = await (0, _helpers.serviceGet)(
									`api/speciality/get/${match.params.specialityName}`
								);
								console.log(res);
								const { name, imageUrl, content, _id } = res.data.speciality;
								setData({
									name,
									imageUrl,
									content,
									_id,
								});
							}
						};

						fetchData();
					}, [edit, match.params.specialityName]);
					console.log(edit, data);

					const handleChange = (e) => {
						setState(
							_objectSpread(
								_objectSpread({}, state),
								{},
								{
									[e.target.id]: e.target.value,
								}
							)
						);
					};

					const handleEditor = (html) => {
						setState(
							_objectSpread(
								_objectSpread({}, state),
								{},
								{
									content: html,
								}
							)
						);
					};

					const handleSubmit = async (e) => {
						e.preventDefault();
						if (edit) editSpeciality(state, data._id);
						else addSpeciality(state);
					};

					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'container mt-4',
						},
						/*#__PURE__*/ _react.default.createElement(
							'form',
							{
								className: 'mt-5',
							},
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'form-group',
								},
								/*#__PURE__*/ _react.default.createElement('input', {
									type: 'text',
									id: 'name',
									required: true,
									placeholder: 'Speciality Name',
									className: 'form-control',
									defaultValue: edit ? data && data.name : '',
									onChange: handleChange,
								}),
								/*#__PURE__*/ _react.default.createElement('br', null),
								/*#__PURE__*/ _react.default.createElement('input', {
									required: true,
									type: 'text',
									id: 'imageUrl',
									onChange: handleChange,
									placeholder: 'Image URL',
									className: 'form-control',
									defaultValue: edit ? data && data.imageUrl : '',
								}),
								/*#__PURE__*/ _react.default.createElement('br', null),
								!edit &&
									/*#__PURE__*/ _react.default.createElement(
										_react.default.Fragment,
										null,
										/*#__PURE__*/ _react.default.createElement('input', {
											required: true,
											type: 'text',
											id: 'alt',
											onChange: handleChange,
											placeholder: 'Image alt text',
											className: 'form-control',
										}),
										/*#__PURE__*/ _react.default.createElement('br', null)
									),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'ql-snow',
									},
									edit
										? data && data.content
											? /*#__PURE__*/ _react.default.createElement(
													_editor.default,
													{
														required: true,
														defaultValue: data && data.content,
														className: 'ql-editor',
														handleEditor: handleEditor,
													}
											  )
											: null
										: /*#__PURE__*/ _react.default.createElement(
												_editor.default,
												{
													required: true,
													defaultValue: '',
													className: 'ql-editor',
													handleEditor: handleEditor,
												}
										  )
								),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'add-article-button',
									},
									/*#__PURE__*/ _react.default.createElement(
										_layout.Button,
										{
											handler: handleSubmit,
											isButton: true,
											type: 'submit',
										},
										edit ? 'Update' : 'Add'
									)
								)
							)
						)
					);
				};

				var _default = (0, _reactRedux.connect)(null, {
					addSpeciality: _actions.addSpeciality,
					editSpeciality: _actions.editSpeciality,
				})(UpsertCard);

				exports.default = _default;

				/***/
			},

		/***/ './src/components/UpsertTopic.js':
			/*!***************************************!*\
  !*** ./src/components/UpsertTopic.js ***!
  \***************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _layout = __webpack_require__(
					/*! ../layout */ './src/layout/index.js'
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _actions = __webpack_require__(
					/*! ../actions */ './src/actions/index.js'
				);

				var _reactToastify = __webpack_require__(
					/*! react-toastify */ 'react-toastify'
				);

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) {
							symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(object, sym).enumerable;
							});
						}
						keys.push.apply(keys, symbols);
					}
					return keys;
				}

				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) {
							ownKeys(Object(source), true).forEach(function (key) {
								_defineProperty(target, key, source[key]);
							});
						} else if (Object.getOwnPropertyDescriptors) {
							Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
							);
						} else {
							ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								);
							});
						}
					}
					return target;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true,
						});
					} else {
						obj[key] = value;
					}
					return obj;
				}

				const UpsertTopic = ({
					speciality,
					match,
					addTopic,
					editTopic,
					location,
					edit,
				}) => {
					const [data, setData] = (0, _react.useState)({
						locked: false,
					});
					console.log(location);
					(0, _react.useEffect)(() => {
						setData({
							locked: location.props && location.props.isLocked,
							name: location.props && location.props.name,
						});
					}, [location.props]);

					const handleSubmit = async (e) => {
						e.preventDefault();

						if (!edit) {
							console.log(
								_objectSpread(
									_objectSpread({}, data),
									{},
									{
										specialityId: speciality._id,
									}
								),
								match.params.specialityName
							);
							addTopic(
								_objectSpread(
									_objectSpread({}, data),
									{},
									{
										specialityId: speciality._id,
									}
								),
								match.params.specialityName
							);
							(0, _reactToastify.toast)('Topic Added successfully');
						} else {
							editTopic(
								data,
								match.params.topicId,
								match.params.specialityName
							);
							(0, _reactToastify.toast)('Updated');
						}
					};

					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'upsert-container',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'upsert-topic-form',
							},
							/*#__PURE__*/ _react.default.createElement(
								'h3',
								null,
								edit ? 'Update' : 'Add',
								' Topic'
							),
							/*#__PURE__*/ _react.default.createElement(
								'form',
								null,
								' ',
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'form-input',
									},
									/*#__PURE__*/ _react.default.createElement('input', {
										defaultValue: location.props && location.props.name,
										onChange: (e) => {
											setData((prev) =>
												_objectSpread(
													_objectSpread({}, prev),
													{},
													{
														name: e.target.value,
													}
												)
											);
										},
										type: 'text',
									})
								),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'form-button',
									},
									/*#__PURE__*/ _react.default.createElement(
										_layout.LockButton,
										{
											isLocked: data.locked,
											handler: () => {
												setData((prev) =>
													_objectSpread(
														_objectSpread({}, prev),
														{},
														{
															locked: !prev.locked,
														}
													)
												);
											},
										}
									)
								),
								/*#__PURE__*/ _react.default.createElement(
									_layout.Button,
									{
										isButton: true,
										handler: handleSubmit,
									},
									edit ? 'Update' : 'Add'
								)
							)
						)
					);
				};

				const mapStateToProps = (state) => ({
					speciality: state.speciality.speciality,
				});

				var _default = (0, _reactRedux.connect)(mapStateToProps, {
					addTopic: _actions.addTopic,
					editTopic: _actions.editTopic,
				})(UpsertTopic);

				exports.default = _default;

				/***/
			},

		/***/ './src/components/UpsertVideo.js':
			/*!***************************************!*\
  !*** ./src/components/UpsertVideo.js ***!
  \***************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _layout = __webpack_require__(
					/*! ../layout */ './src/layout/index.js'
				);

				var _actions = __webpack_require__(
					/*! ../actions */ './src/actions/index.js'
				);

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				const UpsertVideo = ({
					edit,
					match,
					addVideo,
					editVideo,
					getVideo,
					specialities,
					prevVideo,
				}) => {
					const [name, setName] = (0, _react.useState)(
						prevVideo ? prevVideo.name : ''
					);
					const [description, setDescription] = (0, _react.useState)(
						prevVideo ? prevVideo.description : ''
					);
					const [url, setUrl] = (0, _react.useState)(
						prevVideo ? prevVideo.url : ''
					);

					const handleAdd = async (e) => {
						e.preventDefault();
						await addVideo(
							{
								name,
								description,
								url,
							},
							match.params.topicId,
							specialities.speciality.name
						);
					};

					const handleEdit = async (e) => {
						e.preventDefault();
						await editVideo(
							{
								name,
								description,
								url,
							},
							prevVideo._id,
							specialities.speciality.name
						);
					};

					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'upsert-container',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'upsert-video-form',
							},
							/*#__PURE__*/ _react.default.createElement(
								'h3',
								null,
								edit ? 'Update' : 'Add ',
								'Video'
							),
							/*#__PURE__*/ _react.default.createElement(
								'form',
								null,
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'form-group',
									},
									/*#__PURE__*/ _react.default.createElement(
										'label',
										null,
										'Name'
									),
									/*#__PURE__*/ _react.default.createElement('input', {
										type: 'text',
										value: name,
										onChange: (e) => setName(e.target.value),
									})
								),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'form-group',
									},
									/*#__PURE__*/ _react.default.createElement(
										'label',
										null,
										'Url'
									),
									/*#__PURE__*/ _react.default.createElement('input', {
										type: 'text',
										value: url,
										onChange: (e) => setUrl(e.target.value),
									})
								),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'form-group',
									},
									/*#__PURE__*/ _react.default.createElement(
										'label',
										null,
										'Description'
									),
									/*#__PURE__*/ _react.default.createElement('textarea', {
										value: description,
										onChange: (e) => setDescription(e.target.value),
									})
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								_layout.Button,
								{
									isButton: true,
									handler: (e) => {
										edit ? handleEdit(e) : handleAdd(e);
									},
								},
								edit ? 'Update' : 'Add'
							)
						)
					);
				};

				const mapStateToProps = (state) => ({
					specialities: state.speciality,
					prevVideo: state.video.selectedVideo,
				});

				var _default = (0, _reactRedux.connect)(mapStateToProps, {
					addVideo: _actions.addVideo,
					editVideo: _actions.editVideo,
					getVideo: _actions.getVideo,
				})(UpsertVideo);

				exports.default = _default;

				/***/
			},

		/***/ './src/helpers/PrivateRoute.js':
			/*!*************************************!*\
  !*** ./src/helpers/PrivateRoute.js ***!
  \*************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _extends() {
					_extends =
						Object.assign ||
						function (target) {
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
					return _extends.apply(this, arguments);
				}

				function _objectWithoutProperties(source, excluded) {
					if (source == null) return {};
					var target = _objectWithoutPropertiesLoose(source, excluded);
					var key, i;
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
						for (i = 0; i < sourceSymbolKeys.length; i++) {
							key = sourceSymbolKeys[i];
							if (excluded.indexOf(key) >= 0) continue;
							if (!Object.prototype.propertyIsEnumerable.call(source, key))
								continue;
							target[key] = source[key];
						}
					}
					return target;
				}

				function _objectWithoutPropertiesLoose(source, excluded) {
					if (source == null) return {};
					var target = {};
					var sourceKeys = Object.keys(source);
					var key, i;
					for (i = 0; i < sourceKeys.length; i++) {
						key = sourceKeys[i];
						if (excluded.indexOf(key) >= 0) continue;
						target[key] = source[key];
					}
					return target;
				}

				const PrivateRoute = (_ref) => {
					let {
							component: Component,
							auth: { isAuthenticated },
						} = _ref,
						rest = _objectWithoutProperties(_ref, ['component', 'auth']);

					return /*#__PURE__*/ _react.default.createElement(
						_reactRouterDom.Route,
						_extends({}, rest, {
							render: (props) =>
								!isAuthenticated
									? /*#__PURE__*/ _react.default.createElement(
											_reactRouterDom.Redirect,
											{
												to: '/login',
											}
									  )
									: /*#__PURE__*/ _react.default.createElement(
											Component,
											props
									  ),
						})
					);
				};

				const mapStateToProps = (state) => ({
					auth: state.auth,
				});

				var _default = (0, _reactRedux.connect)(mapStateToProps)(PrivateRoute);

				exports.default = _default;

				/***/
			},

		/***/ './src/helpers/Seo.js':
			/*!****************************!*\
  !*** ./src/helpers/Seo.js ***!
  \****************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.Seo = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactHelmet = __webpack_require__(
					/*! react-helmet */ 'react-helmet'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Seo = ({
					description,
					title = ' ',
					lang = 'en',
					meta = [],
					richresult,
				}) => {
					// const { favicon } = '';
					const metaTitle = `CodersGala | ${title}`;
					const metaDescription =
						"CodersGala's only purpose is to provide coding knowledge, such as Web development that includes HTML CSS JS Node React MongoDb, Machine Learning, Data Structures and Algorithm" ||
						0;
					return /*#__PURE__*/ _react.default.createElement(
						_reactHelmet.Helmet,
						{
							title: metaTitle,
							htmlAttributes: {
								lang,
							},
							meta: [
								{
									name: `description`,
									content: metaDescription,
								},
								{
									property: `og:title`,
									content: metaTitle,
								},
								{
									property: `og:description`,
									content: metaDescription,
								},
								{
									property: `og:type`,
									content: `website`,
								},
								{
									name: `twitter:card`,
									content: `summary`,
								},
								{
									name: `twitter:title`,
									content: metaTitle,
								},
								{
									name: `twitter:description`,
									content: metaDescription,
								},
							].concat(meta),
							link: [
								{
									rel: 'icon',
									type: 'image/png',
									href: 'favicon',
								},
							],
							script: [
								{
									type: 'application/ld+json',
									innerHTML: JSON.stringify(richresult),
								},
							],
						}
					);
				};

				exports.Seo = Seo;

				/***/
			},

		/***/ './src/helpers/api.js':
			/*!****************************!*\
  !*** ./src/helpers/api.js ***!
  \****************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.serviceGet = exports.servicePost = void 0;

				var _ = __webpack_require__(/*! ./ */ './src/helpers/index.js');

				var _axios = _interopRequireDefault(
					__webpack_require__(/*! axios */ 'axios')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const servicePost = async (path, payload, headers = null) => {
					return new Promise((resolve, reject) => {
						_axios.default
							.post(`${_.SERVICE_URL}/${path}`, payload, {
								headers: headers,
							})
							.then(function (response) {
								resolve(response.data);
							})
							.catch(function (error) {
								reject(error);
							});
					});
				};

				exports.servicePost = servicePost;

				const serviceGet = async (path, payload) => {
					return new Promise((resolve, reject) => {
						_axios.default
							.get(`${_.SERVICE_URL}/${path}`, payload)
							.then(function (response) {
								resolve(response.data);
							})
							.catch(function (error) {
								reject(error);
							});
					});
				};

				exports.serviceGet = serviceGet;

				/***/
			},

		/***/ './src/helpers/constants.js':
			/*!**********************************!*\
  !*** ./src/helpers/constants.js ***!
  \**********************************/
			/***/ (__unused_webpack_module, exports) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.SERVICE_URL = void 0;
				const SERVICE_URL = 'http://localhost:3001';
				exports.SERVICE_URL = SERVICE_URL;

				/***/
			},

		/***/ './src/helpers/index.js':
			/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});

				var _PrivateRoute = __webpack_require__(
					/*! ./PrivateRoute */ './src/helpers/PrivateRoute.js'
				);

				Object.keys(_PrivateRoute).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _PrivateRoute[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _PrivateRoute[key];
						},
					});
				});

				var _Seo = __webpack_require__(/*! ./Seo */ './src/helpers/Seo.js');

				Object.keys(_Seo).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _Seo[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _Seo[key];
						},
					});
				});

				var _setAuthToken = __webpack_require__(
					/*! ./setAuthToken */ './src/helpers/setAuthToken.js'
				);

				Object.keys(_setAuthToken).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _setAuthToken[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _setAuthToken[key];
						},
					});
				});

				var _api = __webpack_require__(/*! ./api */ './src/helpers/api.js');

				Object.keys(_api).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _api[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _api[key];
						},
					});
				});

				var _constants = __webpack_require__(
					/*! ./constants */ './src/helpers/constants.js'
				);

				Object.keys(_constants).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _constants[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _constants[key];
						},
					});
				});

				var _utils = __webpack_require__(
					/*! ./utils */ './src/helpers/utils.js'
				);

				Object.keys(_utils).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _utils[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _utils[key];
						},
					});
				});

				/***/
			},

		/***/ './src/helpers/setAuthToken.js':
			/*!*************************************!*\
  !*** ./src/helpers/setAuthToken.js ***!
  \*************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.setAuthToken = void 0;

				var _axios = _interopRequireDefault(
					__webpack_require__(/*! axios */ 'axios')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const setAuthToken = (token) => {
					console.log(token);

					if (token) {
						_axios.default.defaults.headers.common[
							'Authorization'
						] = `JWT ${token}`;
					} else {
						delete _axios.default.defaults.headers.common['Authorization'];
					}
				};

				exports.setAuthToken = setAuthToken;

				/***/
			},

		/***/ './src/helpers/utils.js':
			/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
			/***/ (__unused_webpack_module, exports) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.isClient = exports.scrollTo = void 0;

				const scrollTo = (element) => {
					isClient &&
						window.scroll({
							behavior: 'smooth',
							left: 0,
							top: element.offsetTop,
						});
				};

				exports.scrollTo = scrollTo;
				const isClient =
					typeof window !== 'undefined' && window.document ? true : false;
				exports.isClient = isClient;

				/***/
			},

		/***/ './src/layout/Buttons/AdminButtons.js':
			/*!********************************************!*\
  !*** ./src/layout/Buttons/AdminButtons.js ***!
  \********************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactTippy = __webpack_require__(/*! react-tippy */ 'react-tippy');

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _icons = __webpack_require__(
					/*! ../../assets/icons */ './src/assets/icons/index.js'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const TooltipWrapper = ({ title, position, children }) => {
					return /*#__PURE__*/ _react.default.createElement(
						_reactTippy.Tooltip,
						{
							title: title,
							position: position,
							trigger: 'mouseenter',
						},
						children
					);
				};

				const AdminButtons = ({ type, url, handler, isAdmin, data = {} }) =>
					isAdmin
						? /*#__PURE__*/ _react.default.createElement(
								TooltipWrapper,
								{
									title: `${type} "${data.name}"`,
									position: 'top',
								},
								/*#__PURE__*/ _react.default.createElement(
									AdminButtonsWrapper,
									{
										type: type,
										url: url,
										handler: handler,
										data: data,
									}
								)
						  )
						: /*#__PURE__*/ _react.default.createElement(AdminButtonsWrapper, {
								type: 'None',
								url: url,
								handler: handler,
								data: data,
						  });

				const AdminButtonsWrapper = ({ type, url, handler, data }) => {
					switch (type) {
						case 'Add':
							return /*#__PURE__*/ _react.default.createElement(
								_reactRouterDom.Link,
								{
									to: url,
								},
								/*#__PURE__*/ _react.default.createElement(_icons.Add, {
									size: '20',
									color: '#000',
								})
							);

						case 'Edit':
							return /*#__PURE__*/ _react.default.createElement(
								_reactRouterDom.Link,
								{
									to: {
										pathname: url,
										props: {
											name: data.name,
											isLocked: data.locked,
										},
									},
								},
								/*#__PURE__*/ _react.default.createElement(_icons.Update, {
									size: '20',
									color: '#000',
								})
							);

						case 'Delete':
							return /*#__PURE__*/ _react.default.createElement(
								'button',
								{
									style: {
										background: 'none',
										border: 'none',
										outline: 'none',
									},
									onClick: () => {
										handler(data);
									},
									className: 'edit-topic-modal-toggle',
								},
								/*#__PURE__*/ _react.default.createElement(_icons.Delete, {
									size: '20',
									color: 'crimson',
								})
							);

						default:
							return /*#__PURE__*/ _react.default.createElement(
								'button',
								{
									href: '#',
									style: {
										background: 'none',
										border: 'none',
										outline: 'none',
									},
									className: 'edit-topic-modal-toggle',
								},
								/*#__PURE__*/ _react.default.createElement(_icons.Delete, {
									size: '0',
									color: '',
								})
							);
					}
				};

				const mapStateToProps = (state) => ({
					isAdmin: state.auth.isAdmin,
				});

				var _default = (0, _reactRedux.connect)(
					mapStateToProps,
					null
				)(AdminButtons);

				exports.default = _default;

				/***/
			},

		/***/ './src/layout/Buttons/UserButtons.js':
			/*!*******************************************!*\
  !*** ./src/layout/Buttons/UserButtons.js ***!
  \*******************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.LockButton = exports.Button = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _icons = __webpack_require__(
					/*! ../../assets/icons */ './src/assets/icons/index.js'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const InnerDiv = ({ handler, children, dark, bg }) =>
					children
						? /*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: `button ${dark && 'dark'}`,
									style: {
										backgroundColor: `${bg && 'bg'}`,
									},
									onClick: handler ? handler : (e) => console.log(e, handler),
								},
								/*#__PURE__*/ _react.default.createElement(
									'span',
									null,
									children
								),
								/*#__PURE__*/ _react.default.createElement(
									'svg',
									null,
									/*#__PURE__*/ _react.default.createElement('polyline', {
										className: 'o1',
										points: '0 0, 150 0, 150 55, 0 55, 0 0',
									}),
									/*#__PURE__*/ _react.default.createElement('polyline', {
										className: 'o2',
										points: '0 0, 150 0, 150 55, 0 55, 0 0',
									})
								)
						  )
						: /*#__PURE__*/ _react.default.createElement(
								_react.default.Fragment,
								null,
								'   ',
								/*#__PURE__*/ _react.default.createElement(
									'span',
									null,
									/*#__PURE__*/ _react.default.createElement(_icons.Read, {
										size: 19,
									})
								)
						  );

				const Button = ({ children, url, dark, bg, isButton, handler }) => {
					return typeof isButton == 'undefined'
						? /*#__PURE__*/ _react.default.createElement(
								_reactRouterDom.Link,
								{
									to: url && url,
								},
								/*#__PURE__*/ _react.default.createElement(
									InnerDiv,
									{
										dark: dark,
										bg: bg,
									},
									children
								)
						  )
						: /*#__PURE__*/ _react.default.createElement(
								InnerDiv,
								{
									dark: dark,
									bg: bg,
									handler: handler,
								},
								children
						  );
				};

				exports.Button = Button;

				const LockButton = ({ isLocked, handler }) => {
					return /*#__PURE__*/ _react.default.createElement(
						'span',
						{
							onClick: handler,
						},
						isLocked
							? /*#__PURE__*/ _react.default.createElement(_icons.Lock, null)
							: /*#__PURE__*/ _react.default.createElement(_icons.Unlock, null)
					);
				};

				exports.LockButton = LockButton;

				/***/
			},

		/***/ './src/layout/Buttons/index.js':
			/*!*************************************!*\
  !*** ./src/layout/Buttons/index.js ***!
  \*************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});

				var _AdminButtons = __webpack_require__(
					/*! ./AdminButtons */ './src/layout/Buttons/AdminButtons.js'
				);

				Object.keys(_AdminButtons).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _AdminButtons[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _AdminButtons[key];
						},
					});
				});

				var _UserButtons = __webpack_require__(
					/*! ./UserButtons */ './src/layout/Buttons/UserButtons.js'
				);

				Object.keys(_UserButtons).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _UserButtons[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _UserButtons[key];
						},
					});
				});

				/***/
			},

		/***/ './src/layout/Footer.js':
			/*!******************************!*\
  !*** ./src/layout/Footer.js ***!
  \******************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.Footer = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				const FooterSocialMedia = () => {
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'social-media',
						},
						/*#__PURE__*/ _react.default.createElement(
							'a',
							{
								rel: 'nofollow',
								href: 'https://gmail.com',
							},
							/*#__PURE__*/ _react.default.createElement('img', {
								src: 'https://www.svgrepo.com/show/303161/gmail-icon-logo.svg',
								alt: '',
							})
						),
						/*#__PURE__*/ _react.default.createElement(
							'a',
							{
								rel: 'nofollow',
								href: 'https://twitter.com',
							},
							/*#__PURE__*/ _react.default.createElement('img', {
								src: 'https://www.svgrepo.com/show/183608/twitter.svg',
								alt: '',
							})
						),
						/*#__PURE__*/ _react.default.createElement(
							'a',
							{
								rel: 'nofollow',
								href: 'https://instagram.com/bihani.priya',
							},
							/*#__PURE__*/ _react.default.createElement('img', {
								src: 'https://www.svgrepo.com/show/111199/instagram.svg',
								alt: '',
							})
						),
						/*#__PURE__*/ _react.default.createElement(
							'a',
							{
								rel: 'nofollow',
								href: 'https://github.com',
							},
							/*#__PURE__*/ _react.default.createElement('img', {
								src: 'https://www.svgrepo.com/show/217753/github.svg',
								className: 'github',
								alt: '',
							})
						)
					);
				};

				const Footer = () => {
					const [email, setEmail] = (0, _react.useState)('');
					const [message, setMessage] = (0, _react.useState)('');
					(0, _react.useEffect)(() => {
						setFooterMessage();
					});
					const setFooterMessage = (0, _react.useCallback)(() => {
						setMessage('Enter Your Email here to subscribe for Newsletter');
					}, []);
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'footer-cont',
						},
						/*#__PURE__*/ _react.default.createElement(
							'footer',
							null,
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'footer-container',
								},
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'left-col',
									},
									/*#__PURE__*/ _react.default.createElement(
										'span',
										{
											className: 'logo',
										},
										'Coders Gala'
									),
									/*#__PURE__*/ _react.default.createElement(
										FooterSocialMedia,
										null
									),
									/*#__PURE__*/ _react.default.createElement(
										'p',
										{
											className: 'rights-text',
										},
										'\xA9 2020 Coders Gala , All Rights Reserved'
									)
								),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'right-col',
									},
									/*#__PURE__*/ _react.default.createElement(
										'h1',
										null,
										'Our Newsletter'
									),
									/*#__PURE__*/ _react.default.createElement('div', {
										className: 'border',
									}),
									/*#__PURE__*/ _react.default.createElement(
										'p',
										null,
										message
									),
									/*#__PURE__*/ _react.default.createElement(
										'form',
										{
											className: ' form newsletter-form',
										},
										/*#__PURE__*/ _react.default.createElement('input', {
											type: 'email',
											value: email,
											onChange: (e) => {
												setEmail(e.target.value);
											},
											name: 'Email',
											className: 'txtb',
											placeholder: 'Enter Your Email',
										}),
										/*#__PURE__*/ _react.default.createElement('input', {
											type: 'submit',
											value: 'submit',
											className: 'btn',
										})
									)
								)
							)
						)
					);
				};

				exports.Footer = Footer;

				/***/
			},

		/***/ './src/layout/Navbar/Navbar.js':
			/*!*************************************!*\
  !*** ./src/layout/Navbar/Navbar.js ***!
  \*************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _reactBootstrap = __webpack_require__(
					/*! react-bootstrap */ 'react-bootstrap'
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _ui = __webpack_require__(
					/*! ../../actions/ui */ './src/actions/ui.js'
				);

				var _helpers = __webpack_require__(
					/*! ../../helpers */ './src/helpers/index.js'
				);

				var _SignedOutLinks = _interopRequireDefault(
					__webpack_require__(
						/*! ./SignedOutLinks */ './src/layout/Navbar/SignedOutLinks.js'
					)
				);

				var _SignedInLinks = _interopRequireDefault(
					__webpack_require__(
						/*! ./SignedInLinks */ './src/layout/Navbar/SignedInLinks.js'
					)
				);

				var _cgTransparent = _interopRequireDefault(
					__webpack_require__(
						/*! ../../assets/img/cgTransparent.PNG */ './src/assets/img/cgTransparent.PNG'
					)
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
				// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
				// logo imports
				const Navbar = ({ auth, ui, setDisplayMode }) => {
					// -------------------------------------------------
					const [navbarExpanded, setnavbarExpanded] = (0, _react.useState)(
						false
					);
					const [switched, setswitched] = (0, _react.useState)(false);
					(0, _react.useEffect)(() => {
						_helpers.isClient &&
							document.querySelector('body').classList.add(ui.displayMode);
						console.log(ui.displayMode);

						if (ui.displayMode === 'dark') {
							setswitched(true);
						}
					}, [setswitched, ui.displayMode]); // Getting the current mode from local storage

					if (_helpers.isClient) {
						let mode = 'light';
						mode = _helpers.isClient ? localStorage.getItem('mode') : 'light';

						if (mode === 'dark') {
							document.querySelector('body').classList.add('dark');
						} else {
							document.querySelector('body').classList.remove('dark');
						}
					} //
					// const links = <SignedOutLinks />;

					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'navigation-wrap bg-light start-header start-style',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'container',
							},
							/*#__PURE__*/ _react.default.createElement(
								_reactBootstrap.Accordion,
								{
									className:
										_helpers.isClient && window.innerWidth >= 767
											? null
											: 'dropdown-accordion',
								},
								/*#__PURE__*/ _react.default.createElement(
									_reactBootstrap.Row,
									null,
									/*#__PURE__*/ _react.default.createElement(
										_reactBootstrap.Col,
										null,
										/*#__PURE__*/ _react.default.createElement(
											'nav',
											{
												className: 'navbar navbar-expand-md navbar-light',
											},
											/*#__PURE__*/ _react.default.createElement(
												_reactRouterDom.Link,
												{
													to: '/',
												},
												/*#__PURE__*/ _react.default.createElement('img', {
													style: {
														fontSize:
															_helpers.isClient && window.innerHeight >= 767
																? '2rem'
																: '1.2rem',
													},
													className: 'nav-logo',
													src: _cgTransparent.default,
													alt: '',
												})
											),
											/*#__PURE__*/ _react.default.createElement(
												'div',
												{
													id: 'switch',
													onClick: () => {
														setDisplayMode();
														setswitched(!switched);
													},
													className: `switch float-right ${
														switched ? 'switched' : ''
													}`,
												},
												/*#__PURE__*/ _react.default.createElement(
													'div',
													{
														style: {
															backgroundColor:
																ui.displayMode === 'dark' ? '#111' : '#f1f1f1',
														},
														id: 'circle',
													},
													/*#__PURE__*/ _react.default.createElement('img', {
														className: 'mode-icon',
														style: {
															width: '20px',
														},
														src:
															ui.displayMode === 'dark'
																? 'https://www.svgrepo.com/show/3158/moon.svg'
																: 'https://www.svgrepo.com/show/83726/sun.svg',
														alt: '',
													})
												)
											),
											/*#__PURE__*/ _react.default.createElement(
												'div',
												{
													className: 'points-box ',
												},
												/*#__PURE__*/ _react.default.createElement(
													'div',
													null,
													/*#__PURE__*/ _react.default.createElement(
														'span',
														{
															className: 'points-text',
														},
														' Points '
													),
													/*#__PURE__*/ _react.default.createElement(
														'span',
														null,
														/*#__PURE__*/ _react.default.createElement('img', {
															alt: 'CG Points',
															src: 'https://image.flaticon.com/icons/svg/715/715709.svg',
															className: 'points-img',
														})
													),
													/*#__PURE__*/ _react.default.createElement(
														'span',
														null,
														' ',
														auth.user && auth.user.points,
														' '
													)
												)
											),
											/*#__PURE__*/ _react.default.createElement(
												'div',
												{
													className: 'signed-links',
												},
												auth.isAuthenticated && auth.isAuthenticated
													? /*#__PURE__*/ _react.default.createElement(
															_react.default.Fragment,
															null,
															/*#__PURE__*/ _react.default.createElement(
																_SignedInLinks.default,
																null
															)
													  )
													: /*#__PURE__*/ _react.default.createElement(
															_SignedOutLinks.default,
															null
													  )
											),
											/*#__PURE__*/ _react.default.createElement(
												_reactBootstrap.Accordion.Toggle,
												{
													className: 'nav-btn',
													onClick: () => {
														setnavbarExpanded(!navbarExpanded);
													},
													as: _reactBootstrap.Button,
													variant: 'link',
													eventKey: '5',
												},
												/*#__PURE__*/ _react.default.createElement(
													'a',
													{
														className: 'navbar-toggler',
														type: 'button',
														'data-target': '#navbarSupportedContent',
														'aria-controls': 'navbarSupportedContent',
														'aria-expanded': navbarExpanded,
														'aria-label': 'Toggle navigation',
													},
													/*#__PURE__*/ _react.default.createElement('span', {
														className: 'navbar-toggler-icon',
													})
												)
											),
											/*#__PURE__*/ _react.default.createElement(
												_reactBootstrap.Accordion.Collapse,
												{
													className: ' ',
													id: 'navbarSupportedContent',
													eventKey: '5',
												},
												/*#__PURE__*/ _react.default.createElement(
													'div',
													null,
													auth.user && auth.user.userId
														? /*#__PURE__*/ _react.default.createElement(
																_SignedInLinks.default,
																null
														  )
														: /*#__PURE__*/ _react.default.createElement(
																_SignedOutLinks.default,
																null
														  )
												)
											)
										)
									)
								)
							)
						)
					);
				}; // const mapStateToProps = (state) => ({
				//   auth: state.auth,
				// });

				const mapStateToProps = (state) => {
					return {
						auth: state.auth,
						ui: state.ui,
					};
				};

				var _default = (0, _reactRedux.connect)(mapStateToProps, {
					setDisplayMode: _ui.setDisplayMode,
				})(Navbar);

				exports.default = _default;

				/***/
			},

		/***/ './src/layout/Navbar/SignedInLinks.js':
			/*!********************************************!*\
  !*** ./src/layout/Navbar/SignedInLinks.js ***!
  \********************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _helpers = __webpack_require__(
					/*! ../../helpers */ './src/helpers/index.js'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const SignedInLinks = () => {
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						null,
						/*#__PURE__*/ _react.default.createElement(
							'ul',
							{
								className: 'navbar-nav ml-auto py-4 py-md-0',
							},
							/*#__PURE__*/ _react.default.createElement(
								'li',
								{
									className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4',
								},
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.NavLink,
									{
										to: '/home',
										className: 'nav-link',
									},
									'Home'
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								'li',
								{
									className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4',
								},
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.NavLink,
									{
										to: '/about',
										className: 'nav-link',
									},
									'About'
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								'li',
								{
									className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4',
								},
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.NavLink,
									{
										className: 'nav-link ',
										to: '/learn',
										role: 'button',
										'aria-expanded': 'false',
									},
									'Learn'
								),
								/*#__PURE__*/ _react.default.createElement('div', {
									className: 'dropdown-menu',
								})
							),
							/*#__PURE__*/ _react.default.createElement(
								'li',
								{
									className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4',
								},
								/*#__PURE__*/ _react.default.createElement(
									'a',
									{
										onClick: () => {
											localStorage.clear();
										},
										href: '/',
										type: 'button',
										className: 'nav-link',
									},
									'LogOut'
								)
							)
						)
					);
				};

				var _default = SignedInLinks;
				exports.default = _default;

				/***/
			},

		/***/ './src/layout/Navbar/SignedOutLinks.js':
			/*!*********************************************!*\
  !*** ./src/layout/Navbar/SignedOutLinks.js ***!
  \*********************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const SignedOutLinks = () => {
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						null,
						/*#__PURE__*/ _react.default.createElement(
							'ul',
							{
								className: 'navbar-nav ml-auto py-4 py-md-0',
							},
							/*#__PURE__*/ _react.default.createElement(
								'li',
								{
									className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4',
								},
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.NavLink,
									{
										to: '/home',
										className: 'nav-link',
									},
									'Home'
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								'li',
								{
									className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4',
								},
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.NavLink,
									{
										to: '/about',
										className: 'nav-link',
									},
									'About'
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								'li',
								{
									className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4',
								},
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.NavLink,
									{
										className: 'nav-link ',
										to: '/learn',
										role: 'button',
										'aria-expanded': 'false',
									},
									'Learn'
								),
								/*#__PURE__*/ _react.default.createElement('div', {
									className: 'dropdown-menu',
								})
							),
							/*#__PURE__*/ _react.default.createElement(
								'li',
								{
									className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4',
								},
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.NavLink,
									{
										className: 'nav-link ',
										to: '/login',
										role: 'button',
										'aria-haspopup': 'true',
										'aria-expanded': 'false',
									},
									'Login'
								),
								/*#__PURE__*/ _react.default.createElement('div', {
									className: 'dropdown-menu',
								})
							)
						)
					);
				};

				var _default = SignedOutLinks;
				exports.default = _default;

				/***/
			},

		/***/ './src/layout/index.js':
			/*!*****************************!*\
  !*** ./src/layout/index.js ***!
  \*****************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});

				var _Buttons = __webpack_require__(
					/*! ./Buttons */ './src/layout/Buttons/index.js'
				);

				Object.keys(_Buttons).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _Buttons[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _Buttons[key];
						},
					});
				});

				var _Footer = __webpack_require__(
					/*! ./Footer */ './src/layout/Footer.js'
				);

				Object.keys(_Footer).forEach(function (key) {
					if (key === 'default' || key === '__esModule') return;
					if (key in exports && exports[key] === _Footer[key]) return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function () {
							return _Footer[key];
						},
					});
				});

				/***/
			},

		/***/ './src/layout/preloader.js':
			/*!*********************************!*\
  !*** ./src/layout/preloader.js ***!
  \*********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = exports.Preloader = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Preloader = () => {
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'loader-section',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'loader-box',
							},
							/*#__PURE__*/ _react.default.createElement('span', {
								className: 'loader1',
							}),
							/*#__PURE__*/ _react.default.createElement('span', {
								className: 'loader2',
							}),
							/*#__PURE__*/ _react.default.createElement('span', {
								className: 'loader3',
							})
						)
					);
				};

				exports.Preloader = Preloader;
				var _default = Preloader;
				exports.default = _default;

				/***/
			},

		/***/ './src/reducers/article.js':
			/*!*********************************!*\
  !*** ./src/reducers/article.js ***!
  \*********************************/
			/***/ (__unused_webpack_module, exports) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = articleReducer;

				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) {
							symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(object, sym).enumerable;
							});
						}
						keys.push.apply(keys, symbols);
					}
					return keys;
				}

				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) {
							ownKeys(Object(source), true).forEach(function (key) {
								_defineProperty(target, key, source[key]);
							});
						} else if (Object.getOwnPropertyDescriptors) {
							Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
							);
						} else {
							ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								);
							});
						}
					}
					return target;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true,
						});
					} else {
						obj[key] = value;
					}
					return obj;
				}

				const initialState = {
					articles: [],
				};

				function articleReducer(state = initialState, action) {
					const { type, payload } = action;

					switch (type) {
						case 'ADD_ARTICLE':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									topics: payload,
								}
							);

						case 'GET_ARTICLE':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									selectedArticle: payload.article,
								}
							);

						case 'GET_ALL_ARTICLES':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									articles: payload.articles,
								}
							);

						case 'CLEAR_ARTICLE':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									selectedArticle: {},
								}
							);

						case 'ADD_ARTICLE_ERROR':
							return _objectSpread({}, state);

						default:
							return state;
					}
				}

				/***/
			},

		/***/ './src/reducers/auth.js':
			/*!******************************!*\
  !*** ./src/reducers/auth.js ***!
  \******************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = authReducer;

				var _types = __webpack_require__(
					/*! ../actions/types */ './src/actions/types.js'
				);

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) {
							symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(object, sym).enumerable;
							});
						}
						keys.push.apply(keys, symbols);
					}
					return keys;
				}

				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) {
							ownKeys(Object(source), true).forEach(function (key) {
								_defineProperty(target, key, source[key]);
							});
						} else if (Object.getOwnPropertyDescriptors) {
							Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
							);
						} else {
							ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								);
							});
						}
					}
					return target;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true,
						});
					} else {
						obj[key] = value;
					}
					return obj;
				}

				const initialState = {
					token: _helpers.isClient && localStorage.getItem('token'),
					isAuthenticated: null,
					loading: false,
					user: null,
					isAdmin: null,
				};

				function authReducer(state = initialState, action) {
					const { type, payload } = action;

					switch (type) {
						case _types.USER_LOADED:
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									user: payload,
									isAuthenticated: true,
									isAdmin: payload.role === 0 ? false : true,
									loading: false,
								}
							);

						case _types.REGISTER_SUCCESS:
						case _types.LOGIN_SUCCESS:
							_helpers.isClient && localStorage.setItem('token', payload.token);
							_helpers.isClient &&
								localStorage.setItem('userId', payload.userId);
							console.log(payload);
							return _objectSpread(
								_objectSpread(_objectSpread({}, state), payload),
								{},
								{
									isAuthenticated: true,
									loading: false,
								}
							);

						case _types.REGISTER_FAIL:
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									loading: false,
								}
							);

						case _types.LOGIN_FAIL:
						case _types.AUTH_ERROR:
							_helpers.isClient && localStorage.removeItem('token');
							_helpers.isClient && localStorage.removeItem('userId');
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									token: null,
									isAuthenticated: false,
									loading: false,
									userId: null,
								}
							);

						case _types.LOGOUT:
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									token: null,
									isAuthenticated: false,
									loading: false,
								}
							);

						case _types.SEND_RESET_EMAIL:
							return _objectSpread(_objectSpread({}, state), payload);

						case 'SET_AUTH_LOADER':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									loading: true,
								}
							);

						default:
							return state;
					}
				}

				/***/
			},

		/***/ './src/reducers/index.js':
			/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _redux = __webpack_require__(/*! redux */ 'redux');

				var _auth = _interopRequireDefault(
					__webpack_require__(/*! ./auth */ './src/reducers/auth.js')
				);

				var _speciality = _interopRequireDefault(
					__webpack_require__(
						/*! ./speciality */ './src/reducers/speciality.js'
					)
				);

				var _topic = _interopRequireDefault(
					__webpack_require__(/*! ./topic */ './src/reducers/topic.js')
				);

				var _article = _interopRequireDefault(
					__webpack_require__(/*! ./article */ './src/reducers/article.js')
				);

				var _ui = _interopRequireDefault(
					__webpack_require__(/*! ./ui */ './src/reducers/ui.js')
				);

				var _video = _interopRequireDefault(
					__webpack_require__(/*! ./video */ './src/reducers/video.js')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				var _default = (0, _redux.combineReducers)({
					auth: _auth.default,
					speciality: _speciality.default,
					topic: _topic.default,
					article: _article.default,
					ui: _ui.default,
					video: _video.default,
				});

				exports.default = _default;

				/***/
			},

		/***/ './src/reducers/speciality.js':
			/*!************************************!*\
  !*** ./src/reducers/speciality.js ***!
  \************************************/
			/***/ (__unused_webpack_module, exports) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = specialityReducer;

				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) {
							symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(object, sym).enumerable;
							});
						}
						keys.push.apply(keys, symbols);
					}
					return keys;
				}

				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) {
							ownKeys(Object(source), true).forEach(function (key) {
								_defineProperty(target, key, source[key]);
							});
						} else if (Object.getOwnPropertyDescriptors) {
							Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
							);
						} else {
							ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								);
							});
						}
					}
					return target;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true,
						});
					} else {
						obj[key] = value;
					}
					return obj;
				}

				const initialState = {
					specialities: [],
				};

				function specialityReducer(state = initialState, action) {
					const { type, payload } = action;

					switch (type) {
						case 'GET_SPECIALITIES':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									specialities: payload,
								}
							);

						case 'GET_SPECIALITY':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									speciality: payload,
								}
							);

						case 'CLEAR_SPECIALITY':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									speciality: {},
								}
							);

						case 'GET_SPECIALITIES_ERROR':
							return _objectSpread({}, state);

						case 'GET_SPECIALITY_ERROR':
							return _objectSpread({}, state);

						default:
							return state;
					}
				}

				/***/
			},

		/***/ './src/reducers/topic.js':
			/*!*******************************!*\
  !*** ./src/reducers/topic.js ***!
  \*******************************/
			/***/ (__unused_webpack_module, exports) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = topicReducer;

				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) {
							symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(object, sym).enumerable;
							});
						}
						keys.push.apply(keys, symbols);
					}
					return keys;
				}

				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) {
							ownKeys(Object(source), true).forEach(function (key) {
								_defineProperty(target, key, source[key]);
							});
						} else if (Object.getOwnPropertyDescriptors) {
							Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
							);
						} else {
							ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								);
							});
						}
					}
					return target;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true,
						});
					} else {
						obj[key] = value;
					}
					return obj;
				}

				const initialState = {
					topics: [],
				};

				function topicReducer(state = initialState, action) {
					const { type, payload } = action;

					switch (type) {
						case 'GET_TOPICS':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									topics: payload,
								}
							);

						case 'GET_TOPICS_ERROR':
							return _objectSpread({}, state);

						default:
							return state;
					}
				}

				/***/
			},

		/***/ './src/reducers/ui.js':
			/*!****************************!*\
  !*** ./src/reducers/ui.js ***!
  \****************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = uiReducer;

				var _helpers = __webpack_require__(
					/*! ../helpers */ './src/helpers/index.js'
				);

				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) {
							symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(object, sym).enumerable;
							});
						}
						keys.push.apply(keys, symbols);
					}
					return keys;
				}

				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) {
							ownKeys(Object(source), true).forEach(function (key) {
								_defineProperty(target, key, source[key]);
							});
						} else if (Object.getOwnPropertyDescriptors) {
							Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
							);
						} else {
							ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								);
							});
						}
					}
					return target;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true,
						});
					} else {
						obj[key] = value;
					}
					return obj;
				}

				const initialState = {
					openTopics: [],
					displayMode:
						_helpers.isClient && localStorage.getItem('mode')
							? _helpers.isClient && localStorage.getItem('mode')
							: 'light',
				};

				function uiReducer(state = initialState, action) {
					const { type, payload } = action;

					switch (type) {
						case 'SET_OPEN_TOPICS':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									openTopics: payload,
								}
							);

						case 'SET_DISPLAY_MODE':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									displayMode: payload,
								}
							);

						default:
							return state;
					}
				}

				/***/
			},

		/***/ './src/reducers/video.js':
			/*!*******************************!*\
  !*** ./src/reducers/video.js ***!
  \*******************************/
			/***/ (__unused_webpack_module, exports) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = videoReducer;

				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly) {
							symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(object, sym).enumerable;
							});
						}
						keys.push.apply(keys, symbols);
					}
					return keys;
				}

				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) {
							ownKeys(Object(source), true).forEach(function (key) {
								_defineProperty(target, key, source[key]);
							});
						} else if (Object.getOwnPropertyDescriptors) {
							Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
							);
						} else {
							ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								);
							});
						}
					}
					return target;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true,
						});
					} else {
						obj[key] = value;
					}
					return obj;
				}

				const initialState = {
					selectedVideo: null,
				};

				function videoReducer(state = initialState, action) {
					const { type, payload } = action;

					switch (type) {
						case 'ADD_VIDEO':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									topics: payload,
								}
							);

						case 'GET_VIDEO':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									selectedVideo: payload.video,
								}
							);

						case 'SELECT_VIDEO':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									selectedVideo: payload,
								}
							);

						case 'CLEAR_VIDEO':
							return _objectSpread(
								_objectSpread({}, state),
								{},
								{
									selectedVideo: {},
								}
							);

						case 'ADD_VIDEO_ERROR':
							return _objectSpread({}, state);

						default:
							return state;
					}
				}

				/***/
			},

		/***/ './src/sections/about/AboutUs.js':
			/*!***************************************!*\
  !*** ./src/sections/about/AboutUs.js ***!
  \***************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactBootstrap = __webpack_require__(
					/*! react-bootstrap */ 'react-bootstrap'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const ProfileCard = ({ data }) => {
					return /*#__PURE__*/ _react.default.createElement(
						'aside',
						{
							className: 'profile-card',
						},
						/*#__PURE__*/ _react.default.createElement(
							'header',
							null,
							/*#__PURE__*/ _react.default.createElement('img', {
								src: '',
								alt: '',
							}),
							/*#__PURE__*/ _react.default.createElement('h1', null, data.name),
							/*#__PURE__*/ _react.default.createElement('h2', null, 'Hello!')
						),
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'profile-bio',
							},
							/*#__PURE__*/ _react.default.createElement('p', null, data.bio),
							/*#__PURE__*/ _react.default.createElement(
								'ul',
								{
									className: 'social-icons list-unstyled list-inline',
								},
								/*#__PURE__*/ _react.default.createElement(
									'li',
									null,
									/*#__PURE__*/ _react.default.createElement(
										'a',
										{
											target: '__blank',
											href: data.portfolioUrl,
										},
										/*#__PURE__*/ _react.default.createElement('img', {
											style: {
												width: '25px',
											},
											src: 'https://www.svgrepo.com/show/188990/browser-website.svg',
											alt: '',
										})
									)
								),
								/*#__PURE__*/ _react.default.createElement(
									'li',
									null,
									/*#__PURE__*/ _react.default.createElement(
										'a',
										{
											target: '__blank',
											href: data.instaUrl,
										},
										/*#__PURE__*/ _react.default.createElement('img', {
											style: {
												width: '25px',
											},
											src: 'https://www.svgrepo.com/show/111199/instagram.svg',
											alt: '',
										})
									)
								),
								/*#__PURE__*/ _react.default.createElement(
									'li',
									null,
									/*#__PURE__*/ _react.default.createElement(
										'a',
										{
											target: '__blank',
											href: data.twitterUrl,
										},
										/*#__PURE__*/ _react.default.createElement('img', {
											style: {
												width: '25px',
											},
											src: 'https://www.svgrepo.com/show/183608/twitter.svg',
											alt: '',
										})
									)
								),
								/*#__PURE__*/ _react.default.createElement(
									'li',
									null,
									/*#__PURE__*/ _react.default.createElement(
										'a',
										{
											target: '__blank',
											href: data.githubUrl,
										},
										/*#__PURE__*/ _react.default.createElement('img', {
											style: {
												width: '25px',
											},
											src: 'https://www.svgrepo.com/show/217753/github.svg',
											className: 'github',
											alt: '',
										})
									)
								)
							)
						)
					);
				};

				const AboutUs = () => {
					if (typeof window !== 'undefined') {
						window.onscroll = function () {
							myFunction();
						};

						function myFunction() {
							if (window.scrollY > 1550) {
								document
									.querySelector('.profile-card')
									.classList.add('profile-card-anim');
							}
						}
					}

					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'about-us-container',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							null,
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'about-us-heading',
								},
								/*#__PURE__*/ _react.default.createElement(
									'h2',
									null,
									'About ',
									/*#__PURE__*/ _react.default.createElement('span', null, 'Us')
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'about-us-text',
								},
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor dolore odit, neque itaque iure quas mollitia nihil cumque rem harum consequuntur consectetur. Autem fugit, doloribus sint enim error sequi quo rem minima magni excepturi expedita mollitia recusandae harum alias repellendus, sit voluptate facilis similique at in asperiores sunt inam saepe qui. Nisi minima ipsa illo tempore quod enim eum quidem?'
							)
						),
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'profile-cards',
							},
							/*#__PURE__*/ _react.default.createElement(
								_reactBootstrap.Row,
								null,
								/*#__PURE__*/ _react.default.createElement(
									_reactBootstrap.Col,
									{
										lg: 6,
									},
									/*#__PURE__*/ _react.default.createElement(ProfileCard, {
										data: {
											name: 'Priya',
											portfolioUrl: 'https://know-priya-bihani.vercel.app',
											instaUrl: 'https://www.instagram.com/bihani.priya',
											githubUrl: 'https://www.github.com/PriyaBihani',
											twitterUrl: 'https://twitter.com/p_bihani',
											bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora eveniet quae neque hic doloribus voluptatibus incidunt quia facilis blanditiis.',
										},
									})
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactBootstrap.Col,
									{
										lg: 6,
									},
									/*#__PURE__*/ _react.default.createElement(ProfileCard, {
										data: {
											name: 'Kartik',
											portfolioUrl: 'https://google.com',
											instaUrl: 'https://www.instagram.com/bihani.priya',
											githubUrl: 'https://www.github.com/kartik18g',
											twitterUrl: 'https://twitter.com/Gkaartik',
											bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora eveniet quae neque hic doloribus voluptatibus incidunt quia facilis blanditiis.',
										},
									})
								)
							)
						)
					);
				};

				var _default = AboutUs;
				exports.default = _default;

				/***/
			},

		/***/ './src/sections/about/Questions.js':
			/*!*****************************************!*\
  !*** ./src/sections/about/Questions.js ***!
  \*****************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Questions = () => {
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'questions-container',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 's-s-1',
							},
							/*#__PURE__*/ _react.default.createElement(
								'h2',
								null,
								'About ',
								/*#__PURE__*/ _react.default.createElement(
									'span',
									{
										className: 'logo',
									},
									'Coders Gala'
								)
							)
						),
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: '',
							},
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'what-din',
								},
								/*#__PURE__*/ _react.default.createElement('br', null),
								/*#__PURE__*/ _react.default.createElement(
									'h4',
									null,
									'What is ',
									/*#__PURE__*/ _react.default.createElement(
										'span',
										{
											className: '',
										},
										'Coders Gala'
									),
									'?'
								),
								'sit amet consectetur adipisicing elit. Animi dolor explicabo optio fugiat quo numquam! Mollitia, facilis aperiam nihil voluptate consequuntur dolore, hic ab totam blanditiis lorem30 accusantium, magnam odit eum?'
							),
							/*#__PURE__*/ _react.default.createElement('br', null),
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'why-din',
								},
								/*#__PURE__*/ _react.default.createElement(
									'h4',
									null,
									'Why ',
									/*#__PURE__*/ _react.default.createElement(
										'span',
										{
											className: '',
										},
										'Coders Gala'
									),
									'?'
								),
								'sit amet consectetur adipisicing elit. Animi dolor explicabo optio fugiat quo numquam! Mollitia, facilis aperiam nihil voluptate consequuntur dolore, hic ab totam blanditiis accusantium, magnam odit eum?'
							),
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'what-din',
								},
								/*#__PURE__*/ _react.default.createElement('br', null),
								/*#__PURE__*/ _react.default.createElement(
									'h4',
									null,
									'What is ',
									/*#__PURE__*/ _react.default.createElement(
										'span',
										{
											className: '',
										},
										'Coders Gala'
									),
									'?'
								),
								'sit amet consectetur adipisicing elit. Animi dolor explicabo optio fugiat quo numquam! Mollitia, facilis aperiam nihil voluptate consequuntur dolore, hic ab totam blanditiis lorem30 accusantium, magnam odit eum?'
							),
							/*#__PURE__*/ _react.default.createElement('br', null)
						)
					);
				};

				var _default = Questions;
				exports.default = _default;

				/***/
			},

		/***/ './src/sections/blog/All.js':
			/*!**********************************!*\
  !*** ./src/sections/blog/All.js ***!
  \**********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _moment = _interopRequireDefault(
					__webpack_require__(/*! moment */ 'moment')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const All = ({ articles }) => {
					return /*#__PURE__*/ _react.default.createElement(
						'section',
						{
							className: 'grid__col-3',
						},
						articles &&
							articles.map((article) => {
								const ArticleId = article && article._id;
								return /*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'grid__item-md',
										key: ArticleId,
									},
									/*#__PURE__*/ _react.default.createElement(
										_reactRouterDom.NavLink,
										{
											to: `/blog/read/${
												article && article.name.replace(/\s/g, '-')
											}`,
										},
										/*#__PURE__*/ _react.default.createElement('img', {
											alt: '',
											src: article.thumbnailUrl
												? article.thumbnailUrl
												: 'https://codersgala.com/static/media/cgTransparent.6a9c3496.PNG',
											className: 'grid__item__img',
										}),
										/*#__PURE__*/ _react.default.createElement(
											'p',
											{
												className: 'grid__item__category',
											},
											' ',
											article &&
												(0, _moment.default)(article.createdAt).format(
													'DD MM YYYY'
												)
										),
										/*#__PURE__*/ _react.default.createElement(
											'h4',
											{
												className: 'grid__item__title',
											},
											article && article.name
										),
										/*#__PURE__*/ _react.default.createElement(
											'p',
											{
												className: 'grid__item__author',
											},
											' ',
											'By CodersGala'
										)
									)
								);
							})
					);
				};

				var _default = All;
				exports.default = _default;

				/***/
			},

		/***/ './src/sections/blog/Featured.js':
			/*!***************************************!*\
  !*** ./src/sections/blog/Featured.js ***!
  \***************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _moment = _interopRequireDefault(
					__webpack_require__(/*! moment */ 'moment')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Featured = ({ articles }) => {
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						null,
						articles &&
							articles.map((article) => {
								if (article && article.featured === true) {
									console.log(article);
									const ArticleId = article && article._id;
									return /*#__PURE__*/ _react.default.createElement(
										'div',
										{
											className: 'grid__item-sm',
											key: article && article.id,
										},
										/*#__PURE__*/ _react.default.createElement(
											_reactRouterDom.NavLink,
											{
												to: `/blog/read/${
													article && article.name.replace(/\s/g, '-')
												}`,
											},
											/*#__PURE__*/ _react.default.createElement(
												'div',
												null,
												/*#__PURE__*/ _react.default.createElement(
													'p',
													{
														className: 'grid__item__category',
													},
													article &&
														(0, _moment.default)(article.createdAt).format(
															'DD MM YYYY'
														)
												),
												/*#__PURE__*/ _react.default.createElement(
													'h4',
													{
														className: 'grid__item__title',
													},
													article && article.name
												),
												/*#__PURE__*/ _react.default.createElement('br', null),
												/*#__PURE__*/ _react.default.createElement('br', null),
												/*#__PURE__*/ _react.default.createElement(
													'p',
													{
														className: 'grid__item__author',
													},
													'By CodersGala'
												)
											),
											/*#__PURE__*/ _react.default.createElement(
												'div',
												null,
												/*#__PURE__*/ _react.default.createElement('img', {
													src: article.thumbnailUrl
														? article.thumbnailUrl
														: 'https://codersgala.com/static/media/cgTransparent.6a9c3496.PNG',
													className: 'grid__item__img',
													alt: '',
												})
											)
										)
									);
								}

								return null;
							})
					);
				};

				var _default = Featured;
				exports.default = _default;

				/***/
			},

		/***/ './src/sections/blog/Latest.js':
			/*!*************************************!*\
  !*** ./src/sections/blog/Latest.js ***!
  \*************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _moment = _interopRequireDefault(
					__webpack_require__(/*! moment */ 'moment')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Latest = ({ article }) => {
					console.log(article && article.name.replace(/\s/g, '-'));
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'grid__item-lg',
						},
						'`',
						article &&
							/*#__PURE__*/ _react.default.createElement(
								_reactRouterDom.NavLink,
								{
									to: `/blog/read/${
										article && article.name.replace(/\s/g, '-')
									}`,
								},
								/*#__PURE__*/ _react.default.createElement('img', {
									alt: '',
									src: article.thumbnailUrl
										? article.thumbnailUrl
										: 'https://codersgala.com/static/media/cgTransparent.6a9c3496.PNG',
									className: 'grid__item__img',
									className: 'grid__item__img',
								}),
								/*#__PURE__*/ _react.default.createElement(
									'p',
									{
										className: 'grid__item__category',
									},
									' ',
									article &&
										(0, _moment.default)(article.createdAt).format('DD MM YYYY')
								),
								/*#__PURE__*/ _react.default.createElement(
									'h4',
									{
										className: 'grid__item__title',
									},
									article.name
								),
								/*#__PURE__*/ _react.default.createElement(
									'p',
									{
										className: 'grid__item__author',
									},
									'By CodersGala'
								)
							)
					);
				};

				var _default = Latest;
				exports.default = _default;

				/***/
			},

		/***/ './src/sections/editor.js':
			/*!********************************!*\
  !*** ./src/sections/editor.js ***!
  \********************************/
			/***/ () => {
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
				/***/
			},

		/***/ './src/sections/home/Hero.js':
			/*!***********************************!*\
  !*** ./src/sections/home/Hero.js ***!
  \***********************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const Hero = () => {
					return /*#__PURE__*/ _react.default.createElement(
						'section',
						{
							className: 'floatingHero',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'floatingHero-container',
							},
							/*#__PURE__*/ _react.default.createElement('img', {
								src: 'https://luna1.co/57d9b6.png',
								alt: '',
								className: 'floatingHero-image -two -floatingDelay',
							}),
							/*#__PURE__*/ _react.default.createElement('img', {
								src: 'https://luna1.co/2070ee.png',
								alt: '',
								className: 'floatingHero-image -three -floating',
							}),
							/*#__PURE__*/ _react.default.createElement('img', {
								src: 'https://luna1.co/fda860.png',
								alt: '',
								className: 'floatingHero-image -four -floatingDelay',
							}),
							/*#__PURE__*/ _react.default.createElement(
								'header',
								{
									className: 'floatingHero-header',
								},
								/*#__PURE__*/ _react.default.createElement(
									'p',
									{
										className: 'floatingHero-label',
									},
									'This is...'
								),
								/*#__PURE__*/ _react.default.createElement(
									'h1',
									{
										className: 'floatingHero-headline ',
									},
									'Coders Gala'
								),
								/*#__PURE__*/ _react.default.createElement(
									'p',
									{
										className: 'floatingHero-description',
									},
									'Coders Gala is a free to use platform, which will help and guide you, not only to learn web development but become a free-lancer like us. So click on play and embark a new journey with us.'
								),
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.NavLink,
									{
										to: '/learn',
									},
									/*#__PURE__*/ _react.default.createElement('div', {
										className: 'video-play -coral -small -pulse',
									})
								)
							)
						)
					);
				};

				var _default = Hero;
				exports.default = _default;

				/***/
			},

		/***/ './src/sections/home/HeroCards.js':
			/*!****************************************!*\
  !*** ./src/sections/home/HeroCards.js ***!
  \****************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _helpers = __webpack_require__(
					/*! ../../helpers */ './src/helpers/index.js'
				);

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				const HeroCards = () => {
					// refs for the three section
					const heroBlue = (0, _react.useRef)();
					const heroOrange = (0, _react.useRef)();
					const heroGreen = (0, _react.useRef)();

					const scrollFunction = () => {
						_helpers.isClient &&
							window.addEventListener('scroll', () => {
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
							_helpers.isClient &&
								window.removeEventListener('scroll', scrollFunction);
						};
					}, []);
					return /*#__PURE__*/ _react.default.createElement(
						'section',
						{
							className: 'hero',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'hero-box-container',
							},
							/*#__PURE__*/ _react.default.createElement(
								_reactRouterDom.Link,
								{
									to: '/about',
									className: 'hero-box',
								},
								/*#__PURE__*/ _react.default.createElement('span', {
									ref: heroBlue,
									className: 'hero-box__circle hero-box__circle--blue',
								}),
								/*#__PURE__*/ _react.default.createElement(
									'h2',
									{
										className: 'hero-box__title',
									},
									'What is CodersGala?'
								),
								/*#__PURE__*/ _react.default.createElement(
									'p',
									{
										className: 'hero-box__body',
									},
									"CodersGala is a free to use platform for all those people who are unwilling to pay high ransom to these crooked coaching centers for learning web Development. We won't be spoon feeding you but we will guide you. Anyway, if you are eager to learn you will find a way."
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								_reactRouterDom.Link,
								{
									to: '/about/#aboutus',
									className: 'hero-box',
								},
								/*#__PURE__*/ _react.default.createElement('span', {
									ref: heroGreen,
									className: 'hero-box__circle hero-box__circle--green',
								}),
								/*#__PURE__*/ _react.default.createElement(
									'h2',
									{
										className: 'hero-box__title',
									},
									'Who are we?'
								),
								/*#__PURE__*/ _react.default.createElement(
									'p',
									{
										className: 'hero-box__body',
									},
									'We started web development on our own, with no direction and no coaching. All we had was determination and internet. We consider ourselves lucky to be able to provide the support that had been provided to us.'
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								_reactRouterDom.Link,
								{
									to: '/learn',
									className: 'hero-box',
								},
								/*#__PURE__*/ _react.default.createElement('span', {
									ref: heroOrange,
									className: 'hero-box__circle hero-box__circle--orange',
								}),
								/*#__PURE__*/ _react.default.createElement(
									'h2',
									{
										className: 'hero-box__title',
									},
									'Start Learning ..'
								),
								/*#__PURE__*/ _react.default.createElement(
									'p',
									{
										className: 'hero-box__body',
									},
									'Right now we have the articles on front-end-development. We are working tirelessly to cover backend. We will have the articles aired on backend before september. The course will cover Front-end, API, Nodejs-express, MongoDb, MySQL, Hosting, React, Firebase... and a lot more projects.'
								)
							)
						)
					);
				};

				var _default = HeroCards;
				exports.default = _default;

				/***/
			},

		/***/ './src/sections/learn/ArticleNames.js':
			/*!********************************************!*\
  !*** ./src/sections/learn/ArticleNames.js ***!
  \********************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactTippy = __webpack_require__(/*! react-tippy */ 'react-tippy');

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _helpers = __webpack_require__(
					/*! ../../helpers */ './src/helpers/index.js'
				);

				var _layout = __webpack_require__(
					/*! ../../layout */ './src/layout/index.js'
				);

				var _actions = __webpack_require__(
					/*! ../../actions */ './src/actions/index.js'
				);

				var _AdminButtons = _interopRequireDefault(
					__webpack_require__(
						/*! ../../layout/Buttons/AdminButtons */ './src/layout/Buttons/AdminButtons.js'
					)
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const ArticleNames = ({
					selectVideo,
					article,
					deleteArticle,
					topic,
					specialityName,
				}) => {
					const handleDelete = (data) => {
						const { ArticleName, _id } = data;
						const confirm =
							_helpers.isClient &&
							window.prompt(
								`You sure want to delete "${ArticleName}" ? Y or N `
							);

						if (confirm === 'Y') {
							deleteArticle(_id, topic._id, specialityName);
						}
					};

					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'row read-icon',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: ' read col-10',
							},
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'item',
								},
								/*#__PURE__*/ _react.default.createElement(
									'a',
									{
										type: 'button',
										onClick: () => {
											console.log(article);
											selectVideo(article);
											const pos = document.querySelector('.card-container');

											if (_helpers.isClient && window.innerWidth <= 500) {
												(0, _helpers.scrollTo)(pos);
											}
										},
										className: 'display-article',
									},
									/*#__PURE__*/ _react.default.createElement(
										'li',
										{
											className: 'article-name m-0',
										},
										article.ArticleName,
										' ',
										/*#__PURE__*/ _react.default.createElement(
											'span',
											{
												className: 'article-action-icons',
											},
											/*#__PURE__*/ _react.default.createElement(
												_AdminButtons.default,
												{
													type: 'Edit',
													url: `/article/update/${article._id}`,
													data: article,
												}
											),
											/*#__PURE__*/ _react.default.createElement(
												_AdminButtons.default,
												{
													type: 'Delete',
													handler: handleDelete,
													data: article,
												}
											),
											/*#__PURE__*/ _react.default.createElement(
												_reactTippy.Tooltip, // options
												{
													title: `Read "${article.ArticleName}"`,
													position: 'top',
													trigger: 'mouseenter',
												},
												/*#__PURE__*/ _react.default.createElement(
													_layout.Button,
													{
														isButton: true,
														handler: () => {
															selectVideo(article);
															const pos =
																document.querySelector('.card-container');

															if (
																_helpers.isClient &&
																window.innerWidth <= 500
															) {
																(0, _helpers.scrollTo)(pos);
															}
														},
													}
												)
											)
										)
									)
								)
							)
						),
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'col-2',
							},
							/*#__PURE__*/ _react.default.createElement('div', {
								className: 'update-delete float-right',
							})
						)
					);
				};

				var _default = (0, _reactRedux.connect)(null, {
					deleteArticle: _actions.deleteArticle,
					selectVideo: _actions.selectVideo,
				})(ArticleNames);

				exports.default = _default;

				/***/
			},

		/***/ './src/sections/learn/Card.js':
			/*!************************************!*\
  !*** ./src/sections/learn/Card.js ***!
  \************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _layout = __webpack_require__(
					/*! ../../layout */ './src/layout/index.js'
				);

				var _helpers = __webpack_require__(
					/*! ../../helpers */ './src/helpers/index.js'
				);

				var _AdminButtons = _interopRequireDefault(
					__webpack_require__(
						/*! ../../layout/Buttons/AdminButtons */ './src/layout/Buttons/AdminButtons.js'
					)
				);

				var _actions = __webpack_require__(
					/*! ../../actions */ './src/actions/index.js'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				const Card = ({ getSpecialities, specialities, deleteSpeciality }) => {
					(0, _react.useEffect)(() => {
						if (specialities.length === 0) {
							getSpecialities();
						}
					}, [specialities.length, getSpecialities]);

					const handleDelete = (item) => {
						// Got to helper, check
						const confirm =
							_helpers.isClient &&
							window.prompt(
								`You sure want to delete "${item.Name}" ? Y or N (Deleting a speciality will lead to deletion of all topics and articles inside it) `
							);

						if (confirm === 'Y') {
							deleteSpeciality(item._id);
						}
					};

					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'learn-container',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'container pt-4',
							},
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'row',
								},
								specialities &&
									specialities.map((item) => {
										return /*#__PURE__*/ _react.default.createElement(
											'div',
											{
												key: item._id,
												className: 'col-lg-6',
											},
											/*#__PURE__*/ _react.default.createElement(
												'div',
												{
													className: 'card',
												},
												/*#__PURE__*/ _react.default.createElement(
													'div',
													{
														className: 'imgBx',
													},
													/*#__PURE__*/ _react.default.createElement('img', {
														className: 'image',
														src: item.imageUrl,
														alt: item.alt,
													})
												),
												/*#__PURE__*/ _react.default.createElement(
													'div',
													{
														style: {
															height:
																_helpers.isClient && window.innerWidth <= 600
																	? '150px'
																	: 'auto',
														},
														className: 'contentBx',
													},
													/*#__PURE__*/ _react.default.createElement(
														'h2',
														null,
														' ',
														item.name
													),
													/*#__PURE__*/ _react.default.createElement(
														_AdminButtons.default,
														{
															type: 'Edit',
															url: '/updatespeciality/' + item.name,
															data: item,
														}
													),
													/*#__PURE__*/ _react.default.createElement(
														_AdminButtons.default,
														{
															type: 'Delete',
															handler: () => {
																handleDelete(item);
															},
															data: item,
														}
													),
													/*#__PURE__*/ _react.default.createElement(
														_layout.Button,
														{
															url: '/learn/' + item.name,
														},
														'Start Now'
													)
												)
											)
										);
									})
							)
						)
					);
				};

				const mapStateToProps = (state) => ({
					specialities: state.speciality.specialities,
				});

				var _default = (0, _reactRedux.connect)(mapStateToProps, {
					getSpecialities: _actions.getSpecialities,
					deleteSpeciality: _actions.deleteSpeciality,
				})(Card);

				exports.default = _default;

				/***/
			},

		/***/ './src/sections/learn/VideoNames.js':
			/*!******************************************!*\
  !*** ./src/sections/learn/VideoNames.js ***!
  \******************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactTippy = __webpack_require__(/*! react-tippy */ 'react-tippy');

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _layout = __webpack_require__(
					/*! ../../layout */ './src/layout/index.js'
				);

				var _helpers = __webpack_require__(
					/*! ../../helpers */ './src/helpers/index.js'
				);

				var _actions = __webpack_require__(
					/*! ../../actions */ './src/actions/index.js'
				);

				var _AdminButtons = _interopRequireDefault(
					__webpack_require__(
						/*! ../../layout/Buttons/AdminButtons */ './src/layout/Buttons/AdminButtons.js'
					)
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const VideoNames = ({
					selectVideo,
					video,
					deleteVideo,
					topic,
					specialityName,
				}) => {
					console.log(video);

					const handleDelete = (data) => {
						const { VideoName, _id } = data;
						const confirm =
							_helpers.isClient &&
							window.prompt(`You sure want to delete "${VideoName}" ? Y or N `);

						if (confirm === 'Y') {
							deleteVideo(_id, topic._id, specialityName);
						}
					};

					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'row read-icon',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'read col-10',
							},
							/*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'item',
								},
								/*#__PURE__*/ _react.default.createElement(
									'a',
									{
										type: 'button',
										onClick: () => {
											selectVideo(video);
										},
										className: 'display-article',
									},
									/*#__PURE__*/ _react.default.createElement(
										'li',
										{
											className: 'article-name m-0',
										},
										video.name,
										' ',
										/*#__PURE__*/ _react.default.createElement(
											'span',
											{
												className: 'article-action-icons',
											},
											/*#__PURE__*/ _react.default.createElement(
												_AdminButtons.default,
												{
													type: 'Edit',
													url: `/video/update/${video._id}`,
													data: video,
												}
											),
											/*#__PURE__*/ _react.default.createElement(
												_AdminButtons.default,
												{
													type: 'Delete',
													handler: handleDelete,
													data: video,
												}
											),
											/*#__PURE__*/ _react.default.createElement(
												_reactTippy.Tooltip, // options
												{
													title: `Read "${video.name}"`,
													position: 'top',
													trigger: 'mouseenter',
												},
												/*#__PURE__*/ _react.default.createElement(
													_layout.Button,
													{
														isButton: true,
														handler: () => {
															selectVideo(video);
														},
													}
												)
											)
										)
									)
								)
							)
						),
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'col-2',
							},
							/*#__PURE__*/ _react.default.createElement('div', {
								className: 'update-delete float-right',
							})
						)
					);
				};

				var _default = (0, _reactRedux.connect)(null, {
					deleteVideo: _actions.deleteVideo,
					selectVideo: _actions.selectVideo,
				})(VideoNames);

				exports.default = _default;

				/***/
			},

		/***/ './src/sections/preview/ArticlePreview.js':
			/*!************************************************!*\
  !*** ./src/sections/preview/ArticlePreview.js ***!
  \************************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRouterDom = __webpack_require__(
					/*! react-router-dom */ 'react-router-dom'
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _reactHtmlParser = _interopRequireDefault(
					__webpack_require__(/*! react-html-parser */ 'react-html-parser')
				);

				var _topic = __webpack_require__(
					/*! ../../actions/topic */ './src/actions/topic.js'
				);

				var _helpers = __webpack_require__(
					/*! ../../helpers */ './src/helpers/index.js'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const ArticlePreview = ({
					SelectedArticle,
					specialityName,
					unlockTopic,
				}) => {
					const ReadMoreUrl =
						SelectedArticle && SelectedArticle.name
							? `/${specialityName}/read/${SelectedArticle.name.replace(
									/\s/g,
									'-'
							  )}`
							: `/${specialityName}/read/before-starting`;

					const handleUnlock = async (topicId, specialityName) => {
						const res = await unlockTopic(topicId, specialityName);
						console.log(res);
					};

					console.log(SelectedArticle);
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'card-container',
						},
						/*#__PURE__*/ _react.default.createElement(
							'div',
							{
								className: 'card',
							},
							/*#__PURE__*/ _react.default.createElement(
								'div',
								null,
								/*#__PURE__*/ _react.default.createElement(
									'h1',
									{
										className: 'material-icons card-header',
									},
									SelectedArticle && SelectedArticle.name
										? SelectedArticle.name
										: 'Read This Before You Start...'
								),
								/*#__PURE__*/ _react.default.createElement('hr', null),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'ql-snow',
									},
									/*#__PURE__*/ _react.default.createElement(
										'div',
										{
											className: 'card-no-body ql-editor',
										},
										SelectedArticle && SelectedArticle.locked
											? /*#__PURE__*/ _react.default.createElement(
													'div',
													null,
													'To view this article please unlock it using points',
													' ',
													/*#__PURE__*/ _react.default.createElement(
														'button',
														{
															onClick: () => {
																handleUnlock(
																	SelectedArticle && SelectedArticle.topicId,
																	specialityName
																);
															},
														},
														'Unlock'
													),
													' '
											  )
											: (0, _reactHtmlParser.default)(
													SelectedArticle && SelectedArticle.content
											  )
									)
								)
							),
							/*#__PURE__*/ _react.default.createElement(
								'div',
								null,
								/*#__PURE__*/ _react.default.createElement(
									_reactRouterDom.Link,
									{
										onClick: () => {
											_helpers.isClient &&
												window.scroll({
													behavior: 'smooth',
													left: 0,
													top: '0px',
												});
										},
										to: ReadMoreUrl,
									},
									/*#__PURE__*/ _react.default.createElement(
										'h2',
										{
											className: 'link',
										},
										SelectedArticle && SelectedArticle.locked
											? 'Unlock'
											: 'Read More.....'
									)
								)
							)
						)
					);
				};

				var _default = (0, _reactRedux.connect)(null, {
					unlockTopic: _topic.unlockTopic,
				})(ArticlePreview);

				exports.default = _default;

				/***/
			},

		/***/ './src/sections/preview/TopicsOverview.js':
			/*!************************************************!*\
  !*** ./src/sections/preview/TopicsOverview.js ***!
  \************************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _reactToastify = __webpack_require__(
					/*! react-toastify */ 'react-toastify'
				);

				var _reactBootstrap = __webpack_require__(
					/*! react-bootstrap */ 'react-bootstrap'
				);

				var _actions = __webpack_require__(
					/*! ../../actions */ './src/actions/index.js'
				);

				var _ArticleNames = _interopRequireDefault(
					__webpack_require__(
						/*! ../learn/ArticleNames */ './src/sections/learn/ArticleNames.js'
					)
				);

				var _VideoNames = _interopRequireDefault(
					__webpack_require__(
						/*! ../learn/VideoNames */ './src/sections/learn/VideoNames.js'
					)
				);

				var _AdminButtons = _interopRequireDefault(
					__webpack_require__(
						/*! ../../layout/Buttons/AdminButtons */ './src/layout/Buttons/AdminButtons.js'
					)
				);

				var _icons = __webpack_require__(
					/*! ../../assets/icons */ './src/assets/icons/index.js'
				);

				var _helpers = __webpack_require__(
					/*! ../../helpers */ './src/helpers/index.js'
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _getRequireWildcardCache(nodeInterop) {
					if (typeof WeakMap !== 'function') return null;
					var cacheBabelInterop = new WeakMap();
					var cacheNodeInterop = new WeakMap();
					return (_getRequireWildcardCache = function (nodeInterop) {
						return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
					})(nodeInterop);
				}

				function _interopRequireWildcard(obj, nodeInterop) {
					if (!nodeInterop && obj && obj.__esModule) {
						return obj;
					}
					if (
						obj === null ||
						(typeof obj !== 'object' && typeof obj !== 'function')
					) {
						return { default: obj };
					}
					var cache = _getRequireWildcardCache(nodeInterop);
					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}
					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var key in obj) {
						if (
							key !== 'default' &&
							Object.prototype.hasOwnProperty.call(obj, key)
						) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;
							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}
					newObj.default = obj;
					if (cache) {
						cache.set(obj, newObj);
					}
					return newObj;
				}

				const TopicsOverview = ({
					getTopics,
					specialityName,
					topics,
					deleteTopic,
					user,
				}) => {
					(0, _react.useEffect)(() => {
						getTopics(specialityName);
					}, [getTopics, specialityName]);

					const handleDelete = (topic) => {
						const confirm =
							_helpers.isClient &&
							window.prompt(
								`You sure want to delete "${topic.name}" ? Y or N (Deleting a topic will lead to deletion of all articles inside it) `
							);

						if (confirm === 'Y') {
							deleteTopic(topic._id, specialityName);
							(0, _reactToastify.toast)('Deleted speciality sucessfully');
						}
					};

					const [selectedId, setSelectedId] = (0, _react.useState)();
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							id: 'specialities',
							className: 'Topic-names ',
						},
						topics.length > 0 &&
							topics.map((topic) => {
								return /*#__PURE__*/ _react.default.createElement(
									'div',
									{
										key: topic._id,
									},
									/*#__PURE__*/ _react.default.createElement('br', null),
									/*#__PURE__*/ _react.default.createElement(
										'div',
										{
											className: 'p-0 speciality-topic-container m-1',
											key: topic._id,
										},
										/*#__PURE__*/ _react.default.createElement(
											'h4',
											{
												className: 'float-left topicName',
											},
											topic.name
										),
										/*#__PURE__*/ _react.default.createElement(ActionButtons, {
											accordionKey: topic.name.split(/\s/).join(''),
											setSelectedId: setSelectedId,
											selectedId: selectedId,
											specialityName: specialityName,
											topic: topic,
											user: user,
											handleDelete: handleDelete,
										}),
										/*#__PURE__*/ _react.default.createElement('hr', null),
										topic.locked && !user.unLockedTopics.includes(topic._id)
											? null
											: /*#__PURE__*/ _react.default.createElement(
													_reactBootstrap.Accordion.Collapse,
													{
														eventKey: topic.name.split(/\s/).join(''),
													},
													/*#__PURE__*/ _react.default.createElement(
														'ol',
														null,
														topic.videos.length > 0
															? topic.videos.map((video) => {
																	return /*#__PURE__*/ _react.default.createElement(
																		_VideoNames.default,
																		{
																			topic: topic,
																			video: video,
																			specialityName: specialityName,
																		}
																	);
															  })
															: topic.articles &&
																	topic.articles.map((article) => {
																		return /*#__PURE__*/ _react.default.createElement(
																			_ArticleNames.default,
																			{
																				topic: topic,
																				article: article,
																				specialityName: specialityName,
																			}
																		);
																	})
													)
											  )
									)
								);
							})
					);
				};

				const mapStateToProps = (state) => ({
					topics: state.topic.topics,
					user: state.auth.user,
				});

				var _default = (0, _reactRedux.connect)(mapStateToProps, {
					getTopics: _actions.getTopics,
					deleteTopic: _actions.deleteTopic,
				})(TopicsOverview);

				exports.default = _default;

				const ActionButtons = ({
					handleDelete,
					topic,
					specialityName,
					selectedId,
					setSelectedId,
					user,
				}) => {
					return /*#__PURE__*/ _react.default.createElement(
						'div',
						{
							className: 'action-buttons',
						},
						/*#__PURE__*/ _react.default.createElement(_AdminButtons.default, {
							type: 'Edit',
							data: topic,
							url: `/${specialityName}/topic/edit/${topic._id}`,
						}),
						/*#__PURE__*/ _react.default.createElement(_AdminButtons.default, {
							type: 'Delete',
							handler: handleDelete,
							data: topic,
						}),
						/*#__PURE__*/ _react.default.createElement(_AdminButtons.default, {
							type: 'Add',
							data: topic,
							url: `/video/add/${topic._id}`,
						}),
						topic.locked && !user.unLockedTopics.includes(topic._id)
							? /*#__PURE__*/ _react.default.createElement(_icons.Lock, null)
							: /*#__PURE__*/ _react.default.createElement(
									_reactBootstrap.Accordion.Toggle,
									{
										as: _reactBootstrap.Button,
										variant: 'link',
										className: 'float-right arrow-down',
										eventKey: topic.name.split(/\s/).join(''), // to remove spaces
										onClick: () => {
											if (selectedId === topic._id) {
												setSelectedId('');
											} else {
												setSelectedId(topic._id);
											}
										},
									},
									/*#__PURE__*/ _react.default.createElement(
										'svg',
										{
											id: topic.name.split(/\s/).join(''),
											viewBox: '0 0 32 32',
											className: `icon icon-chevron-bottom article-dwn article-toggle fa-angle-down ${
												topic._id === selectedId ? 'rotate' : ''
											}`,
										},
										/*#__PURE__*/ _react.default.createElement('path', {
											d: 'M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z',
										})
									)
							  )
					);
				};

				/***/
			},

		/***/ './src/sections/preview/VideoPreview.js':
			/*!**********************************************!*\
  !*** ./src/sections/preview/VideoPreview.js ***!
  \**********************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ 'react')
				);

				var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

				var _ArticlePreview = _interopRequireDefault(
					__webpack_require__(
						/*! ./ArticlePreview */ './src/sections/preview/ArticlePreview.js'
					)
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const VideoPreview = ({ video }) => {
					console.log(video);
					return video && !video.content
						? /*#__PURE__*/ _react.default.createElement(
								'div',
								{
									className: 'video-container',
								},
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'video',
									},
									/*#__PURE__*/ _react.default.createElement('iframe', {
										className: 'iframe',
										src: video.url,
										title: 'YouTube video player',
										frameBorder: '0',
										allow:
											'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
										allowFullScreen: true,
									})
								),
								/*#__PURE__*/ _react.default.createElement(
									'div',
									{
										className: 'info',
									},
									/*#__PURE__*/ _react.default.createElement(
										'h3',
										{
											className: 'title',
										},
										video.name
									),
									/*#__PURE__*/ _react.default.createElement(
										'div',
										{
											className: 'desc',
										},
										video.description
									),
									/*#__PURE__*/ _react.default.createElement(
										'div',
										{
											className: 'linked-articles',
										},
										/*#__PURE__*/ _react.default.createElement(
											'h4',
											null,
											'Articles Related to the topic'
										)
									)
								)
						  )
						: /*#__PURE__*/ _react.default.createElement(
								_ArticlePreview.default,
								{
									SelectedArticle: video,
								}
						  );
				};

				const mapStateToProps = (state) => ({
					video: state.video.selectedVideo,
				});

				var _default = (0, _reactRedux.connect)(
					mapStateToProps,
					null
				)(VideoPreview);

				exports.default = _default;

				/***/
			},

		/***/ './src/store.js':
			/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', {
					value: true,
				});
				exports.default = void 0;

				var _redux = __webpack_require__(/*! redux */ 'redux');

				var _reduxDevtoolsExtension = __webpack_require__(
					/*! redux-devtools-extension */ 'redux-devtools-extension'
				);

				var _reduxThunk = _interopRequireDefault(
					__webpack_require__(/*! redux-thunk */ 'redux-thunk')
				);

				var _reducers = _interopRequireDefault(
					__webpack_require__(/*! ./reducers */ './src/reducers/index.js')
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				const initialState = {};
				const middleware = [_reduxThunk.default];
				const store = (0, _redux.createStore)(
					_reducers.default,
					initialState,
					(0, _reduxDevtoolsExtension.composeWithDevTools)(
						(0, _redux.applyMiddleware)(...middleware)
					)
				);
				var _default = store;
				exports.default = _default;

				/***/
			},

		/***/ './src/assets/img/cgTransparent.PNG':
			/*!******************************************!*\
  !*** ./src/assets/img/cgTransparent.PNG ***!
  \******************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r(__webpack_exports__);
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
					/* harmony export */
				});
				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					__webpack_require__.p + '6a9c349616dc7691ef60a320703cb77a.PNG';

				/***/
			},

		/***/ axios:
			/*!************************!*\
  !*** external "axios" ***!
  \************************/
			/***/ (module) => {
				module.exports = require('axios');

				/***/
			},

		/***/ 'bootstrap/dist/js/bootstrap.js':
			/*!*************************************************!*\
  !*** external "bootstrap/dist/js/bootstrap.js" ***!
  \*************************************************/
			/***/ (module) => {
				module.exports = require('bootstrap/dist/js/bootstrap.js');

				/***/
			},

		/***/ express:
			/*!**************************!*\
  !*** external "express" ***!
  \**************************/
			/***/ (module) => {
				module.exports = require('express');

				/***/
			},

		/***/ 'framer-motion':
			/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
			/***/ (module) => {
				module.exports = require('framer-motion');

				/***/
			},

		/***/ fs:
			/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
			/***/ (module) => {
				module.exports = require('fs');

				/***/
			},

		/***/ moment:
			/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
			/***/ (module) => {
				module.exports = require('moment');

				/***/
			},

		/***/ react:
			/*!************************!*\
  !*** external "react" ***!
  \************************/
			/***/ (module) => {
				module.exports = require('react');

				/***/
			},

		/***/ 'react-bootstrap':
			/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
			/***/ (module) => {
				module.exports = require('react-bootstrap');

				/***/
			},

		/***/ 'react-dom/server':
			/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
			/***/ (module) => {
				module.exports = require('react-dom/server');

				/***/
			},

		/***/ 'react-helmet':
			/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
			/***/ (module) => {
				module.exports = require('react-helmet');

				/***/
			},

		/***/ 'react-html-parser':
			/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
			/***/ (module) => {
				module.exports = require('react-html-parser');

				/***/
			},

		/***/ 'react-loadable':
			/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
			/***/ (module) => {
				module.exports = require('react-loadable');

				/***/
			},

		/***/ 'react-redux':
			/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
			/***/ (module) => {
				module.exports = require('react-redux');

				/***/
			},

		/***/ 'react-router-dom':
			/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
			/***/ (module) => {
				module.exports = require('react-router-dom');

				/***/
			},

		/***/ 'react-tippy':
			/*!******************************!*\
  !*** external "react-tippy" ***!
  \******************************/
			/***/ (module) => {
				module.exports = require('react-tippy');

				/***/
			},

		/***/ 'react-toastify':
			/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
			/***/ (module) => {
				module.exports = require('react-toastify');

				/***/
			},

		/***/ redux:
			/*!************************!*\
  !*** external "redux" ***!
  \************************/
			/***/ (module) => {
				module.exports = require('redux');

				/***/
			},

		/***/ 'redux-devtools-extension':
			/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
			/***/ (module) => {
				module.exports = require('redux-devtools-extension');

				/***/
			},

		/***/ 'redux-thunk':
			/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
			/***/ (module) => {
				module.exports = require('redux-thunk');

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/define property getters */
	/******/ (() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (
					__webpack_require__.o(definition, key) &&
					!__webpack_require__.o(exports, key)
				) {
					/******/ Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key],
					});
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ (() => {
		/******/ __webpack_require__.o = (obj, prop) =>
			Object.prototype.hasOwnProperty.call(obj, prop);
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ (() => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = (exports) => {
			/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, {
					value: 'Module',
				});
				/******/
			}
			/******/ Object.defineProperty(exports, '__esModule', { value: true });
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/publicPath */
	/******/ (() => {
		/******/ __webpack_require__.p = '';
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

		var _express = _interopRequireDefault(
			__webpack_require__(/*! express */ 'express')
		);

		var _react = _interopRequireDefault(
			__webpack_require__(/*! react */ 'react')
		);

		var _server = __webpack_require__(
			/*! react-dom/server */ 'react-dom/server'
		);

		var _reactRouterDom = __webpack_require__(
			/*! react-router-dom */ 'react-router-dom'
		);

		var _reactRedux = __webpack_require__(/*! react-redux */ 'react-redux');

		var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ 'fs'));

		var _App = _interopRequireDefault(
			__webpack_require__(/*! ./src/App */ './src/App.js')
		);

		var _store = _interopRequireDefault(
			__webpack_require__(/*! ./src/store */ './src/store.js')
		);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		const PORT = process.env.PORT || 3000;

		const html = _fs.default.readFileSync('build/index.html').toString();

		const parts = html.split('<!-- not rendered -->');
		const app = (0, _express.default)();
		app.use(_express.default.static('build'));
		app.use((req, res) => {
			const reactMarkup = /*#__PURE__*/ _react.default.createElement(
				_react.default.StrictMode,
				null,
				/*#__PURE__*/ _react.default.createElement(
					_reactRedux.Provider,
					{
						store: _store.default,
					},
					/*#__PURE__*/ _react.default.createElement(
						_reactRouterDom.StaticRouter,
						{
							url: req.url,
						},
						/*#__PURE__*/ _react.default.createElement(_App.default, null)
					)
				)
			);

			res.send(
				`${parts[0]}${(0, _server.renderToString)(reactMarkup)}${parts[1]}`
			);
			res.end();
		});
		console.log(`listening on ${PORT}`);
		app.listen(PORT);
	})();

	/******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy9hcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvc3BlY2lhbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3RvYXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvdG9waWMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hY3Rpb25zL3VpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2FjdGlvbnMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0FkZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaWNvbnMvQ2hldnJvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0Nyb3NzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9EZWxldGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL0xvY2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL1JlYWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvYXNzZXRzL2ljb25zL1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BYm91dC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9BdXRoLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQmxvZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9MZWFybi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvY29tcG9uZW50cy9VcHNlcnRBcnRpY2xlLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVXBzZXJ0Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1Vwc2VydFRvcGljLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVXBzZXJ0VmlkZW8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9Qcml2YXRlUm91dGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9TZW8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9oZWxwZXJzL3NldEF1dGhUb2tlbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9oZWxwZXJzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvQnV0dG9ucy9Vc2VyQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvQnV0dG9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvRm9vdGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9OYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9OYXZiYXIvU2lnbmVkSW5MaW5rcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvTmF2YmFyL1NpZ25lZE91dExpbmtzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9sYXlvdXQvcHJlbG9hZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9yZWR1Y2Vycy9zcGVjaWFsaXR5LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL3RvcGljLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL3VpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3JlZHVjZXJzL3ZpZGVvLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Fib3V0L0Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvYWJvdXQvUXVlc3Rpb25zLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Jsb2cvQWxsLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2Jsb2cvRmVhdHVyZWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvYmxvZy9MYXRlc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvZWRpdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL2hvbWUvSGVyby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9ob21lL0hlcm9DYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9sZWFybi9BcnRpY2xlTmFtZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvbGVhcm4vQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9sZWFybi9WaWRlb05hbWVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0Ly4vc3JjL3NlY3Rpb25zL3ByZXZpZXcvQXJ0aWNsZVByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvLi9zcmMvc2VjdGlvbnMvcHJldmlldy9Ub3BpY3NPdmVydmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zZWN0aW9ucy9wcmV2aWV3L1ZpZGVvUHJldmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NyYy9hc3NldHMvaW1nL2NnVHJhbnNwYXJlbnQuUE5HIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1odG1sLXBhcnNlclwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtbG9hZGFibGVcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10aXBweVwiIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtY29uZmlnLXJlYWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1jb25maWctcmVhY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWNvbmZpZy1yZWFjdC8uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJQcmV2aWV3IiwibG9hZGVyIiwibG9hZGluZyIsIkhvbWUiLCJBYm91dCIsIkxlYXJuIiwiaXNDbGllbnQiLCJsb2NhbFN0b3JhZ2UiLCJ0b2tlbiIsIkFwcCIsInN0b3JlIiwiZGlzcGF0Y2giLCJwcm9wcyIsIkFydGljbGUiLCJCbG9nIiwiY2xlYXJBcnRpY2xlIiwiaWQiLCJ0eXBlIiwiZ2V0QXJ0aWNsZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicGF5bG9hZCIsImVycm9yIiwiZ2V0QWxsQXJ0aWNsZXMiLCJzdGF0dXMiLCJhZGRBcnRpY2xlIiwiZWRpdEFydGljbGUiLCJzcGVjaWFsaXR5TmFtZSIsInJlczIiLCJkZWxldGVBcnRpY2xlIiwiYXJ0aWNsZUlkIiwidG9waWNJZCIsImxvYWRVc2VyIiwidXNlcklkIiwiZ2V0SXRlbSIsIlVTRVJfTE9BREVEIiwidXNlciIsImVyciIsIkFVVEhfRVJST1IiLCJyZWZyZXNoVXNlciIsInJlZ2lzdGVyIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiUkVHSVNURVJfU1VDQ0VTUyIsIlJFR0lTVEVSX0ZBSUwiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTCIsImxvZ291dCIsImNsZWFyIiwic2VuZFJlc2V0RW1haWwiLCJjb25maWciLCJtZXNzYWdlc0FycmF5IiwibWVzc2FnZXMiLCJmb3JFYWNoIiwibWVzc2FnZSIsIm1zZyIsIlNFTkRfUkVTRVRfRU1BSUwiLCJlcnJvcnMiLCJyZXNwb25zZSIsIlNFTkRfUkVTRVRfRU1BSUxfRkFJTCIsImdldFNwZWNpYWxpdGllcyIsImNsZWFyU3BlY2lhbGl0eSIsImdldFNwZWNpYWxpdHkiLCJzcGVjaWFsaXR5IiwiYWRkU3BlY2lhbGl0eSIsImVkaXRTcGVjaWFsaXR5IiwiZGVsZXRlU3BlY2lhbGl0eSIsInN1Y2Nlc3NUb2FzdCIsInRvYXN0Iiwic3VjY2VzcyIsInBvc2l0aW9uIiwiZXJyb3JUb2FzdCIsImdldFRvcGljcyIsImFkZFRvcGljIiwiZWRpdFRvcGljIiwidW5sb2NrVG9waWMiLCJkZWxldGVUb3BpYyIsIlNFVF9BTEVSVCIsIlJFTU9WRV9BTEVSVCIsIkxPR09VVCIsInNldE9wZW5Ub3BpY3MiLCJvcGVuVG9waWNzQXJyYXkiLCJnZXRTdGF0ZSIsInVpIiwib3BlblRvcGljcyIsImluY2x1ZGVzIiwicHVzaCIsInNwbGljZSIsImluZGV4T2YiLCJzZXREaXNwbGF5TW9kZSIsImRpc3BsYXlNb2RlIiwic2V0SXRlbSIsImdldFZpZGVvIiwiYWRkVmlkZW8iLCJyZXNUb3BpYyIsImVkaXRWaWRlbyIsImRlbGV0ZVZpZGVvIiwidmlkZW9JZCIsInNlbGVjdFZpZGVvIiwidmlkZW8iLCJBZGQiLCJzaXplIiwiY29sb3IiLCJDaGV2cm9uc1VwIiwiQ2hldnJvbnNMZWZ0IiwiQ3Jvc3MiLCJEZWxldGUiLCJMb2NrIiwiaGFuZGxlciIsIlVubG9jayIsIlJlYWQiLCJVcGRhdGUiLCJvcGFjaXR5IiwidGV4dEFsaWduIiwibmFtZSIsIm1hdGNoIiwicGFyYW1zIiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJnZXRBcnRpY2xlRWZmZWN0IiwicmVwbGFjZSIsImdvVG9Ub3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaHRtbCIsImNvbnRlbnQiLCJwYWRkaW5nIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhdXRoIiwiQXV0aCIsInNldERhdGEiLCJkaW5UZXh0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInByZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYWdlIiwiY29kZVJlZmZlcmVkIiwiYXJ0aWNsZXMiLCJpc0FkbWluIiwibGVuZ3RoIiwiZm9udEZhbWlseSIsImhvbWVDb250ZW50IiwiY2xvc2UiLCJzZXRDbG9zZSIsImRpc3BsYXkiLCJoZWlnaHQiLCJmb250U2l6ZSIsIlVwc2VydEFydGljbGUiLCJzcGVjaWFsaXRpZXMiLCJwcmV2QXJ0aWNsZSIsInNldGNvbnRlbnQiLCJzZXRuYW1lIiwia2V5d29yZHMiLCJzZXRBcnRpY2xlS2V5d29yZHMiLCJmZWF0dXJlZCIsInNldGZlYXR1cmVkIiwidGh1bWJuYWlsVXJsIiwic2V0dGh1bWJuYWlsVXJsIiwic2Nyb2xsVG8iLCJlbGVtZW50Iiwid2luZG93Iiwic2Nyb2xsIiwiYmVoYXZpb3IiLCJsZWZ0IiwidG9wIiwib2Zmc2V0VG9wIiwiZWRpdCIsImhhbmRsZUVkaXRvciIsImhhbmRsZUVkaXQiLCJfaWQiLCJOYW1lIiwiaGFuZGxlQWRkIiwic2VsZWN0ZWRBcnRpY2xlIiwiVXBzZXJ0Q2FyZCIsInNldFN0YXRlIiwiZmV0Y2hEYXRhIiwiaW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJVcHNlcnRUb3BpYyIsImxvY2F0aW9uIiwibG9ja2VkIiwiaXNMb2NrZWQiLCJzcGVjaWFsaXR5SWQiLCJVcHNlcnRWaWRlbyIsInByZXZWaWRlbyIsInNldE5hbWUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidXJsIiwic2V0VXJsIiwic2VsZWN0ZWRWaWRlbyIsIlByaXZhdGVSb3V0ZSIsImNvbXBvbmVudCIsIkNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJTZW8iLCJ0aXRsZSIsImxhbmciLCJtZXRhIiwicmljaHJlc3VsdCIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsInByb3BlcnR5IiwiY29uY2F0IiwicmVsIiwiaHJlZiIsImlubmVySFRNTCIsInNlcnZpY2VQb3N0IiwicGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJwb3N0IiwiU0VSVklDRV9VUkwiLCJ0aGVuIiwiY2F0Y2giLCJzZXJ2aWNlR2V0IiwiZ2V0Iiwic2V0QXV0aFRva2VuIiwiZGVmYXVsdHMiLCJjb21tb24iLCJUb29sdGlwV3JhcHBlciIsImNoaWxkcmVuIiwiQWRtaW5CdXR0b25zIiwiQWRtaW5CdXR0b25zV3JhcHBlciIsInBhdGhuYW1lIiwiYmFja2dyb3VuZCIsImJvcmRlciIsIm91dGxpbmUiLCJJbm5lckRpdiIsImRhcmsiLCJiZyIsImJhY2tncm91bmRDb2xvciIsIkJ1dHRvbiIsImlzQnV0dG9uIiwiTG9ja0J1dHRvbiIsIkZvb3RlclNvY2lhbE1lZGlhIiwiRm9vdGVyIiwic2V0RW1haWwiLCJzZXRNZXNzYWdlIiwic2V0Rm9vdGVyTWVzc2FnZSIsIk5hdmJhciIsIm5hdmJhckV4cGFuZGVkIiwic2V0bmF2YmFyRXhwYW5kZWQiLCJzd2l0Y2hlZCIsInNldHN3aXRjaGVkIiwibW9kZSIsInJlbW92ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIkxvZ28iLCJ3aWR0aCIsInBvaW50cyIsIlNpZ25lZEluTGlua3MiLCJTaWduZWRPdXRMaW5rcyIsIlByZWxvYWRlciIsImluaXRpYWxTdGF0ZSIsImFydGljbGVSZWR1Y2VyIiwiYWN0aW9uIiwidG9waWNzIiwiYXV0aFJlZHVjZXIiLCJyb2xlIiwicmVtb3ZlSXRlbSIsInRvcGljIiwic3BlY2lhbGl0eVJlZHVjZXIiLCJ0b3BpY1JlZHVjZXIiLCJ1aVJlZHVjZXIiLCJ2aWRlb1JlZHVjZXIiLCJQcm9maWxlQ2FyZCIsImJpbyIsInBvcnRmb2xpb1VybCIsImluc3RhVXJsIiwidHdpdHRlclVybCIsImdpdGh1YlVybCIsIkFib3V0VXMiLCJvbnNjcm9sbCIsIm15RnVuY3Rpb24iLCJzY3JvbGxZIiwiUXVlc3Rpb25zIiwiQWxsIiwibWFwIiwiQXJ0aWNsZUlkIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiRmVhdHVyZWQiLCJMYXRlc3QiLCJIZXJvIiwiSGVyb0NhcmRzIiwiaGVyb0JsdWUiLCJoZXJvT3JhbmdlIiwiaGVyb0dyZWVuIiwic2Nyb2xsRnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQXJ0aWNsZU5hbWVzIiwiaGFuZGxlRGVsZXRlIiwiQXJ0aWNsZU5hbWUiLCJjb25maXJtIiwicHJvbXB0IiwicG9zIiwiQ2FyZCIsIml0ZW0iLCJhbHQiLCJWaWRlb05hbWVzIiwiVmlkZW9OYW1lIiwiQXJ0aWNsZVByZXZpZXciLCJTZWxlY3RlZEFydGljbGUiLCJSZWFkTW9yZVVybCIsImhhbmRsZVVubG9jayIsIlRvcGljc092ZXJ2aWV3Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJzcGxpdCIsImpvaW4iLCJ1bkxvY2tlZFRvcGljcyIsInZpZGVvcyIsIkFjdGlvbkJ1dHRvbnMiLCJWaWRlb1ByZXZpZXciLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJyb290UmVkdWNlciIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJ0b1N0cmluZyIsInBhcnRzIiwiYXBwIiwidXNlIiwiZXhwcmVzcyIsInN0YXRpYyIsInJlcSIsInJlYWN0TWFya3VwIiwic2VuZCIsImVuZCIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHLDRCQUFTO0FBQ3hCQyxRQUFNLEVBQUUsK0VBQWEseURBQWIsR0FEZ0I7QUFFeEJDLFNBQU8sRUFBRSxtQkFBTSw2QkFBQyxvQkFBRDtBQUZTLENBQVQsQ0FBaEI7QUFLQSxNQUFNQyxJQUFJLEdBQUcsNEJBQVM7QUFDckJGLFFBQU0sRUFBRSwrRUFBYSxtREFBYixHQURhO0FBRXJCQyxTQUFPLEVBQUUsbUJBQU0sNkJBQUMsb0JBQUQ7QUFGTSxDQUFULENBQWI7QUFJQSxNQUFNRSxLQUFLLEdBQUcsNEJBQVM7QUFDdEJILFFBQU0sRUFBRSwrRUFBYSxxREFBYixHQURjO0FBRXRCQyxTQUFPLEVBQUUsbUJBQU0sNkJBQUMsb0JBQUQ7QUFGTyxDQUFULENBQWQ7QUFJQSxNQUFNRyxLQUFLLEdBQUcsNEJBQVM7QUFDdEJKLFFB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SUFBM0MsQ0FKUSxlQUtSO0FBQUcsYUFBUyxFQUFDO0FBQWIscUJBTFEsQ0FEaEIsQ0FESjtBQVdILENBYkQ7O2VBZWVzTCxNOzs7Ozs7Ozs7OztBQ25CZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pQQTs7QUFDQTs7OztBQUVBLE1BQU1DLElBQUksR0FBRyxNQUFNO0FBQ2pCLHNCQUNFO0FBQVMsYUFBUyxFQUFDO0FBQW5CLGtCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFDRSxPQUFHLEVBQUMsNkJBRE47QUFFRSxPQUFHLEVBQUMsRUFGTjtBQUdFLGFBQVMsRUFBQztBQUhaLElBREYsZUFNRTtBQUNFLE9BQUcsRUFBQyw2QkFETjtBQUVFLE9BQUcsRUFBQyxFQUZOO0FBR0UsYUFBUyxFQUFDO0FBSFosSUFORixlQVdFO0FBQ0UsT0FBRyxFQUFDLDZCQUROO0FBRUUsT0FBRyxFQUFDLEVBRk47QUFHRSxhQUFTLEVBQUM7QUFIWixJQVhGLGVBaUJFO0FBQVEsYUFBUyxFQUFDO0FBQWxCLGtCQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsa0JBREYsZUFHRTtBQUFJLGFBQVMsRUFBQztBQUFkLG1CQUhGLGVBS0U7QUFBRyxhQUFTLEVBQUM7QUFBYixvTUFMRixlQVdFLDZCQUFDLHVCQUFEO0FBQVMsTUFBRSxFQUFDO0FBQVosa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURGLENBWEYsQ0FqQkYsQ0FERixDQURGO0FBcUNELENBdENEOztlQXdDZUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NmOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUN2QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxvQkFBakI7QUFDQSxRQUFNQyxVQUFVLEdBQUcsb0JBQW5CO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLG9CQUFsQjs7QUFFQSxRQUFNQyxjQUFjLEdBQUcsTUFBTTtBQUM1Qi9TLHlCQUNDMEssTUFBTSxDQUFDc0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsTUFBTTtBQUN2QyxVQUFJckksTUFBTSxHQUFHRCxNQUFNLENBQUN1SCxPQUFwQjs7QUFDQSxVQUFJdEgsTUFBTSxHQUFHLEdBQWIsRUFBa0I7QUFDakJpSSxnQkFBUSxDQUFDSyxPQUFULENBQWlCdkssU0FBakIsQ0FBMkJ5SCxNQUEzQixDQUFrQyxLQUFsQztBQUNBMEMsa0JBQVUsQ0FBQ0ksT0FBWCxDQUFtQnZLLFNBQW5CLENBQTZCeUgsTUFBN0IsQ0FBb0MsT0FBcEM7QUFDQTJDLGlCQUFTLENBQUNHLE9BQVYsQ0FBa0J2SyxTQUFsQixDQUE0QnlILE1BQTVCLENBQW1DLEtBQW5DO0FBQ0E7O0FBQ0QsVUFBSXhGLE1BQU0sR0FBRyxHQUFULElBQWdCQSxNQUFNLEdBQUcsR0FBN0IsRUFBa0M7QUFDakNpSSxnQkFBUSxDQUFDSyxPQUFULENBQWlCdkssU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLEtBQS9CO0FBQ0FrSyxrQkFBVSxDQUFDSSxPQUFYLENBQW1CdkssU0FBbkIsQ0FBNkJ5SCxNQUE3QixDQUFvQyxPQUFwQztBQUNBMkMsaUJBQVMsQ0FBQ0csT0FBVixDQUFrQnZLLFNBQWxCLENBQTRCeUgsTUFBNUIsQ0FBbUMsS0FBbkM7QUFDQTs7QUFDRCxVQUFJeEYsTUFBTSxHQUFHLEdBQVQsSUFBZ0JBLE1BQU0sR0FBRyxHQUE3QixFQUFrQztBQUNqQ21JLGlCQUFTLENBQUNHLE9BQVYsQ0FBa0J2SyxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsS0FBaEM7QUFDQWlLLGdCQUFRLENBQUNLLE9BQVQsQ0FBaUJ2SyxTQUFqQixDQUEyQnlILE1BQTNCLENBQWtDLEtBQWxDO0FBQ0EwQyxrQkFBVSxDQUFDSSxPQUFYLENBQW1CdkssU0FBbkIsQ0FBNkJ5SCxNQUE3QixDQUFvQyxPQUFwQztBQUNBOztBQUNELFVBQUl4RixNQUFNLEdBQUcsR0FBYixFQUFrQjtBQUNqQm1JLGlCQUFTLENBQUNHLE9BQVYsQ0FBa0J2SyxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsS0FBaEM7QUFDQWlLLGdCQUFRLENBQUNLLE9BQVQsQ0FBaUJ2SyxTQUFqQixDQUEyQnlILE1BQTNCLENBQWtDLEtBQWxDO0FBQ0EwQyxrQkFBVSxDQUFDSSxPQUFYLENBQW1CdkssU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLE9BQWpDO0FBQ0E7QUFDRCxLQXRCRCxDQUREO0FBd0JBLEdBekJEOztBQTJCQSx3QkFBVSxNQUFNO0FBQ2YsUUFBSSxPQUFPK0IsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNsQyxVQUFJQSxNQUFNLENBQUMwRixVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQzVCMUYsY0FBTSxDQUFDc0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELGNBQWxDO0FBQ0E7QUFDRDs7QUFDRCxRQUFJL1MscUJBQVkwSyxNQUFNLENBQUMwRixVQUFQLEdBQW9CLEdBQXBDLEVBQXlDO0FBQ3hDekksY0FBUSxDQUFDcUwsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07QUFDbkRGLGlCQUFTLENBQUNHLE9BQVYsQ0FBa0J2SyxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsS0FBaEM7QUFDQWtLLGtCQUFVLENBQUNJLE9BQVgsQ0FBbUJ2SyxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsT0FBakM7QUFDQWlLLGdCQUFRLENBQUNLLE9BQVQsQ0FBaUJ2SyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsS0FBL0I7QUFDQStCLGNBQU0sQ0FBQ3dJLFVBQVAsQ0FBa0IsTUFBTTtBQUN2Qk4sa0JBQVEsQ0FBQ0ssT0FBVCxDQUFpQnZLLFNBQWpCLENBQTJCeUgsTUFBM0IsQ0FBa0MsS0FBbEM7QUFDQXpGLGdCQUFNLENBQUN3SSxVQUFQLENBQWtCLE1BQU07QUFDdkJKLHFCQUFTLENBQUNHLE9BQVYsQ0FBa0J2SyxTQUFsQixDQUE0QnlILE1BQTVCLENBQW1DLEtBQW5DO0FBQ0F6RixrQkFBTSxDQUFDd0ksVUFBUCxDQUFrQixNQUFNO0FBQ3ZCTCx3QkFBVSxDQUFDSSxPQUFYLENBQW1CdkssU0FBbkIsQ0FBNkJ5SCxNQUE3QixDQUFvQyxPQUFwQztBQUNBLGFBRkQsRUFFRyxHQUZIO0FBR0EsV0FMRCxFQUtHLEdBTEg7QUFNQSxTQVJELEVBUUcsR0FSSDtBQVNBLE9BYkQ7QUFjQTs7QUFDRCxXQUFPLE1BQU07QUFDWm5RLDJCQUFZMEssTUFBTSxDQUFDeUksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNKLGNBQXJDLENBQVo7QUFDQSxLQUZEO0FBR0EsR0F6QkQsRUF5QkcsRUF6Qkg7QUEyQkEsc0JBQ0M7QUFBUyxhQUFTLEVBQUM7QUFBbkIsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyw2QkFBQyxvQkFBRDtBQUFNLE1BQUUsRUFBQyxRQUFUO0FBQWtCLGFBQVMsRUFBQztBQUE1QixrQkFDQztBQUNDLE9BQUcsRUFBRUgsUUFETjtBQUVDLGFBQVMsRUFBQztBQUZYLElBREQsZUFJQztBQUFJLGFBQVMsRUFBQztBQUFkLDJCQUpELGVBS0M7QUFBRyxhQUFTLEVBQUM7QUFBYixrUkFMRCxDQURELGVBYUMsNkJBQUMsb0JBQUQ7QUFBTSxNQUFFLEVBQUMsaUJBQVQ7QUFBMkIsYUFBUyxFQUFDO0FBQXJDLGtCQUNDO0FBQ0MsT0FBRyxFQUFFRSxTQUROO0FBRUMsYUFBUyxFQUFDO0FBRlgsSUFERCxlQUlDO0FBQUksYUFBUyxFQUFDO0FBQWQsbUJBSkQsZUFLQztBQUFHLGFBQVMsRUFBQztBQUFiLHdOQUxELENBYkQsZUF5QkMsNkJBQUMsb0JBQUQ7QUFBTSxNQUFFLEVBQUMsUUFBVDtBQUFrQixhQUFTLEVBQUM7QUFBNUIsa0JBQ0M7QUFDQyxPQUFHLEVBQUVELFVBRE47QUFFQyxhQUFTLEVBQUM7QUFGWCxJQURELGVBSUM7QUFBSSxhQUFTLEVBQUM7QUFBZCx5QkFKRCxlQUtDO0FBQUcsYUFBUyxFQUFDO0FBQWIsb1NBTEQsQ0F6QkQsQ0FERCxDQUREO0FBMkNBLENBdkdEOztlQXlHZUYsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0dmOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTVMsWUFBWSxHQUFHLENBQUM7QUFDckJqTixhQURxQjtBQUVyQm1CLFNBRnFCO0FBR3JCN0YsZUFIcUI7QUFJckIwUCxPQUpxQjtBQUtyQjVQO0FBTHFCLENBQUQsS0FNZjtBQUNMLFFBQU04UixZQUFZLEdBQUlyUyxJQUFELElBQVU7QUFDOUIsVUFBTTtBQUFFc1MsaUJBQUY7QUFBZW5JO0FBQWYsUUFBdUJuSyxJQUE3QjtBQUNBLFVBQU11UyxPQUFPLEdBQ1p2VCxxQkFDQTBLLE1BQU0sQ0FBQzhJLE1BQVAsQ0FBZSw0QkFBMkJGLFdBQVksYUFBdEQsQ0FGRDs7QUFHQSxRQUFJQyxPQUFPLEtBQUssR0FBaEIsRUFBcUI7QUFDcEI5UixtQkFBYSxDQUFDMEosR0FBRCxFQUFNZ0csS0FBSyxDQUFDaEcsR0FBWixFQUFpQjVKLGNBQWpCLENBQWI7QUFDQTtBQUNELEdBUkQ7O0FBVUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLFdBQU8sRUFBRSxNQUFNO0FBQ2RULGFBQU8sQ0FBQ0MsR0FBUixDQUFZdUcsT0FBWjtBQUNBbkIsaUJBQVcsQ0FBQ21CLE9BQUQsQ0FBWDtBQUNBLFlBQU1tTSxHQUFHLEdBQUc5TCxRQUFRLENBQUNjLGFBQVQsQ0FBdUIsaUJBQXZCLENBQVo7O0FBQ0EsVUFBSXpJLHFCQUFZMEssTUFBTSxDQUFDMEYsVUFBUCxJQUFxQixHQUFyQyxFQUEwQztBQUN6QywrQkFBU3FELEdBQVQ7QUFDQTtBQUNELEtBVEY7QUFVQyxhQUFTLEVBQUM7QUFWWCxrQkFXQztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0VuTSxPQUFPLENBQUNnTSxXQURWLEVBQ3VCLEdBRHZCLGVBRUM7QUFBTSxhQUFTLEVBQUM7QUFBaEIsa0JBQ0MsNkJBQUMscUJBQUQ7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLE9BQUcsRUFBRyxtQkFBa0JoTSxPQUFPLENBQUM2RCxHQUFJLEVBRnJDO0FBR0MsUUFBSSxFQUFFN0Q7QUFIUCxJQURELGVBTUMsNkJBQUMscUJBQUQ7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLFdBQU8sRUFBRStMLFlBRlY7QUFHQyxRQUFJLEVBQUUvTDtBQUhQLElBTkQsZUFXQyw2QkFBQyxtQkFBRCxDQUNDO0FBREQ7QUFFQyxTQUFLLEVBQUcsU0FBUUEsT0FBTyxDQUFDZ00sV0FBWSxHQUZyQztBQUdDLFlBQVEsRUFBQyxLQUhWO0FBSUMsV0FBTyxFQUFDO0FBSlQsa0JBS0MsNkJBQUMsY0FBRDtBQUNDLFlBQVEsRUFBRSxJQURYO0FBRUMsV0FBTyxFQUFFLE1BQU07QUFDZG5OLGlCQUFXLENBQUNtQixPQUFELENBQVg7QUFDQSxZQUFNbU0sR0FBRyxHQUFHOUwsUUFBUSxDQUFDYyxhQUFULENBQXVCLGlCQUF2QixDQUFaOztBQUNBLFVBQUl6SSxxQkFBWTBLLE1BQU0sQ0FBQzBGLFVBQVAsSUFBcUIsR0FBckMsRUFBMEM7QUFDekMsK0JBQVNxRCxHQUFUO0FBQ0E7QUFDRDtBQVJGLElBTEQsQ0FYRCxDQUZELENBWEQsQ0FERCxDQURELENBREQsZUFnREM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLElBREQsQ0FoREQsQ0FERDtBQXNEQSxDQXZFRDs7ZUF5RWUseUJBQVEsSUFBUixFQUFjO0FBQUVoUyxlQUFhLEVBQWJBLHNCQUFGO0FBQWlCMEUsYUFBVyxFQUFYQTtBQUFqQixDQUFkLEVBQThDaU4sWUFBOUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNTSxJQUFJLEdBQUcsQ0FBQztBQUFFN1AsaUJBQUY7QUFBbUJpRyxjQUFuQjtBQUFpQzNGO0FBQWpDLENBQUQsS0FBeUQ7QUFDckUsd0JBQVUsTUFBTTtBQUNmLFFBQUkyRixZQUFZLENBQUNULE1BQWIsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDOUJ4RixxQkFBZTtBQUNmO0FBQ0QsR0FKRCxFQUlHLENBQUNpRyxZQUFZLENBQUNULE1BQWQsRUFBc0J4RixlQUF0QixDQUpIOztBQU1BLFFBQU13UCxZQUFZLEdBQUlNLElBQUQsSUFBVTtBQUM5QjtBQUNBLFVBQU1KLE9BQU8sR0FDWnZULHFCQUNBMEssTUFBTSxDQUFDOEksTUFBUCxDQUNFLDRCQUEyQkcsSUFBSSxDQUFDdkksSUFBSyxnR0FEdkMsQ0FGRDs7QUFLQSxRQUFJbUksT0FBTyxLQUFLLEdBQWhCLEVBQXFCO0FBQ3BCcFAsc0JBQWdCLENBQUN3UCxJQUFJLENBQUN4SSxHQUFOLENBQWhCO0FBQ0E7QUFDRCxHQVZEOztBQVlBLHNCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0VyQixZQUFZLElBQ1pBLFlBQVksQ0FBQ3NJLEdBQWIsQ0FBa0J1QixJQUFELElBQVU7QUFDMUIsd0JBQ0M7QUFBSyxTQUFHLEVBQUVBLElBQUksQ0FBQ3hJLEdBQWY7QUFBb0IsZUFBUyxFQUFDO0FBQTlCLG9CQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDQztBQUNDLGVBQVMsRUFBQyxPQURYO0FBRUMsU0FBRyxFQUFFd0ksSUFBSSxDQUFDakksUUFGWDtBQUdDLFNBQUcsRUFBRWlJLElBQUksQ0FBQ0M7QUFIWCxNQURELENBREQsZUFRQztBQUNDLFdBQUssRUFBRTtBQUNOakssY0FBTSxFQUNMM0oscUJBQVkwSyxNQUFNLENBQUMwRixVQUFQLElBQXFCLEdBQWpDLEdBQ0csT0FESCxHQUVHO0FBSkUsT0FEUjtBQU9DLGVBQVMsRUFBQztBQVBYLG9CQVFDLDhDQUFNdUQsSUFBSSxDQUFDeE0sSUFBWCxDQVJELGVBU0MsNkJBQUMscUJBQUQ7QUFDQyxVQUFJLEVBQUMsTUFETjtBQUVDLFNBQUcsRUFBRSx1QkFBdUJ3TSxJQUFJLENBQUN4TSxJQUZsQztBQUdDLFVBQUksRUFBRXdNO0FBSFAsTUFURCxlQWNDLDZCQUFDLHFCQUFEO0FBQ0MsVUFBSSxFQUFDLFFBRE47QUFFQyxhQUFPLEVBQUUsTUFBTTtBQUNkTixvQkFBWSxDQUFDTSxJQUFELENBQVo7QUFDQSxPQUpGO0FBS0MsVUFBSSxFQUFFQTtBQUxQLE1BZEQsZUFxQkMsNkJBQUMsY0FBRDtBQUFRLFNBQUcsRUFBRSxZQUFZQSxJQUFJLENBQUN4TTtBQUE5QixtQkFyQkQsQ0FSRCxDQURELENBREQ7QUFvQ0EsR0FyQ0QsQ0FGRixDQURELENBREQsQ0FERDtBQStDQSxDQWxFRDs7QUFvRUEsTUFBTWEsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbkM2QixjQUFZLEVBQUU3QixLQUFLLENBQUNqRSxVQUFOLENBQWlCOEY7QUFESSxDQUFaLENBQXhCOztlQUllLHlCQUFROUIsZUFBUixFQUF5QjtBQUN2Q25FLGlCQUFlLEVBQWZBLHdCQUR1QztBQUV2Q00sa0JBQWdCLEVBQWhCQTtBQUZ1QyxDQUF6QixFQUdadVAsSUFIWSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VmOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUcsVUFBVSxHQUFHLENBQUM7QUFDbkIxTixhQURtQjtBQUVuQkMsT0FGbUI7QUFHbkJILGFBSG1CO0FBSW5Ca0wsT0FKbUI7QUFLbkI1UDtBQUxtQixDQUFELEtBTWI7QUFDTFQsU0FBTyxDQUFDQyxHQUFSLENBQVlxRixLQUFaOztBQUNBLFFBQU1pTixZQUFZLEdBQUlyUyxJQUFELElBQVU7QUFDOUIsVUFBTTtBQUFFOFMsZUFBRjtBQUFhM0k7QUFBYixRQUFxQm5LLElBQTNCO0FBQ0EsVUFBTXVTLE9BQU8sR0FDWnZULHFCQUNBMEssTUFBTSxDQUFDOEksTUFBUCxDQUFlLDRCQUEyQk0sU0FBVSxhQUFwRCxDQUZEOztBQUdBLFFBQUlQLE9BQU8sS0FBSyxHQUFoQixFQUFxQjtBQUNwQnROLGlCQUFXLENBQUNrRixHQUFELEVBQU1nRyxLQUFLLENBQUNoRyxHQUFaLEVBQWlCNUosY0FBakIsQ0FBWDtBQUNBO0FBQ0QsR0FSRDs7QUFVQSxzQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsV0FBTyxFQUFFLE1BQU07QUFDZDRFLGlCQUFXLENBQUNDLEtBQUQsQ0FBWDtBQUNBLEtBSkY7QUFLQyxhQUFTLEVBQUM7QUFMWCxrQkFNQztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0VBLEtBQUssQ0FBQ2UsSUFEUixFQUNjLEdBRGQsZUFFQztBQUFNLGFBQVMsRUFBQztBQUFoQixrQkFDQyw2QkFBQyxxQkFBRDtBQUNDLFFBQUksRUFBQyxNQUROO0FBRUMsT0FBRyxFQUFHLGlCQUFnQmYsS0FBSyxDQUFDK0UsR0FBSSxFQUZqQztBQUdDLFFBQUksRUFBRS9FO0FBSFAsSUFERCxlQU1DLDZCQUFDLHFCQUFEO0FBQ0MsUUFBSSxFQUFDLFFBRE47QUFFQyxXQUFPLEVBQUVpTixZQUZWO0FBR0MsUUFBSSxFQUFFak47QUFIUCxJQU5ELGVBV0MsNkJBQUMsbUJBQUQsQ0FDQztBQUREO0FBRUMsU0FBSyxFQUFHLFNBQVFBLEtBQUssQ0FBQ2UsSUFBSyxHQUY1QjtBQUdDLFlBQVEsRUFBQyxLQUhWO0FBSUMsV0FBTyxFQUFDO0FBSlQsa0JBS0MsNkJBQUMsY0FBRDtBQUNDLFlBQVEsRUFBRSxJQURYO0FBRUMsV0FBTyxFQUFFLE1BQU07QUFDZGhCLGlCQUFXLENBQUNDLEtBQUQsQ0FBWDtBQUNBO0FBSkYsSUFMRCxDQVhELENBRkQsQ0FORCxDQURELENBREQsQ0FERCxlQXVDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFERCxDQXZDRCxDQUREO0FBNkNBLENBL0REOztlQWlFZSx5QkFBUSxJQUFSLEVBQWM7QUFBRUgsYUFBVyxFQUFYQSxvQkFBRjtBQUFlRSxhQUFXLEVBQVhBO0FBQWYsQ0FBZCxFQUE0QzBOLFVBQTVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RWY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNRSxjQUFjLEdBQUcsQ0FBQztBQUFFQyxpQkFBRjtBQUFtQnpTLGdCQUFuQjtBQUFtQ3FEO0FBQW5DLENBQUQsS0FBc0Q7QUFDNUUsUUFBTXFQLFdBQVcsR0FDaEJELGVBQWUsSUFBSUEsZUFBZSxDQUFDN00sSUFBbkMsR0FDSSxJQUFHNUYsY0FBZSxTQUFReVMsZUFBZSxDQUFDN00sSUFBaEIsQ0FBcUJNLE9BQXJCLENBQTZCLEtBQTdCLEVBQW9DLEdBQXBDLENBQXlDLEVBRHZFLEdBRUksSUFBR2xHLGNBQWUsdUJBSHZCOztBQUtBLFFBQU0yUyxZQUFZLEdBQUcsT0FBT3ZTLE9BQVAsRUFBZ0JKLGNBQWhCLEtBQW1DO0FBQ3ZELFVBQU1WLEdBQUcsR0FBRyxNQUFNK0QsV0FBVyxDQUFDakQsT0FBRCxFQUFVSixjQUFWLENBQTdCO0FBQ0FULFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsR0FIRDs7QUFJQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlpVCxlQUFaO0FBQ0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLHVEQUNDO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDRUEsZUFBZSxJQUFJQSxlQUFlLENBQUM3TSxJQUFuQyxHQUNFNk0sZUFBZSxDQUFDN00sSUFEbEIsR0FFRSwrQkFISixDQURELGVBU0Msd0NBVEQsZUFVQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTZNLGVBQWUsSUFBSUEsZUFBZSxDQUFDbEksTUFBbkMsZ0JBQ0EsZ0dBQ29ELEdBRHBELGVBRUM7QUFDQyxXQUFPLEVBQUUsTUFBTTtBQUNkb0ksa0JBQVksQ0FDWEYsZUFBZSxJQUFJQSxlQUFlLENBQUNyUyxPQUR4QixFQUVYSixjQUZXLENBQVo7QUFJQTtBQU5GLGNBRkQsRUFVVyxHQVZYLENBREEsR0FjQSw4QkFBZ0J5UyxlQUFlLElBQUlBLGVBQWUsQ0FBQ2xNLE9BQW5ELENBZkYsQ0FERCxDQVZELENBREQsZUFnQ0MsdURBQ0MsNkJBQUMsb0JBQUQ7QUFDQyxXQUFPLEVBQUUsTUFBTTtBQUNkOUgsMkJBQ0MwSyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNiQyxnQkFBUSxFQUFFLFFBREc7QUFFYkMsWUFBSSxFQUFFLENBRk87QUFHYkMsV0FBRyxFQUFFO0FBSFEsT0FBZCxDQUREO0FBTUEsS0FSRjtBQVNDLE1BQUUsRUFBRW1KO0FBVEwsa0JBVUM7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNFRCxlQUFlLElBQUlBLGVBQWUsQ0FBQ2xJLE1BQW5DLEdBQ0UsUUFERixHQUVFLGdCQUhKLENBVkQsQ0FERCxDQWhDRCxDQURELENBREQ7QUF1REEsQ0FsRUQ7O2VBb0VlLHlCQUFRLElBQVIsRUFBYztBQUFFbEgsYUFBVyxFQUFYQTtBQUFGLENBQWQsRUFBK0JtUCxjQUEvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VmOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLE1BQU1JLGNBQWMsR0FBRyxDQUFDO0FBQ3ZCMVAsV0FEdUI7QUFFdkJsRCxnQkFGdUI7QUFHdkJ3UCxRQUh1QjtBQUl2QmxNLGFBSnVCO0FBS3ZCN0M7QUFMdUIsQ0FBRCxLQU1qQjtBQUNMLHdCQUFVLE1BQU07QUFDZnlDLGFBQVMsQ0FBQ2xELGNBQUQsQ0FBVDtBQUNBLEdBRkQsRUFFRyxDQUFDa0QsU0FBRCxFQUFZbEQsY0FBWixDQUZIOztBQUlBLFFBQU04UixZQUFZLEdBQUlsQyxLQUFELElBQVc7QUFDL0IsVUFBTW9DLE9BQU8sR0FDWnZULHFCQUNBMEssTUFBTSxDQUFDOEksTUFBUCxDQUNFLDRCQUEyQnJDLEtBQUssQ0FBQ2hLLElBQUssZ0ZBRHhDLENBRkQ7O0FBS0EsUUFBSW9NLE9BQU8sS0FBSyxHQUFoQixFQUFxQjtBQUNwQjFPLGlCQUFXLENBQUNzTSxLQUFLLENBQUNoRyxHQUFQLEVBQVk1SixjQUFaLENBQVg7QUFDQSxnQ0FBTSxnQ0FBTjtBQUNBO0FBQ0QsR0FWRDs7QUFZQSxRQUFNLENBQUM2UyxVQUFELEVBQWFDLGFBQWIsSUFBOEIsc0JBQXBDO0FBRUEsc0JBQ0M7QUFBSyxNQUFFLEVBQUMsY0FBUjtBQUF1QixhQUFTLEVBQUM7QUFBakMsS0FDRXRELE1BQU0sQ0FBQzFILE1BQVAsR0FBZ0IsQ0FBaEIsSUFDQTBILE1BQU0sQ0FBQ3FCLEdBQVAsQ0FBWWpCLEtBQUQsSUFBVztBQUNyQix3QkFDQztBQUFLLFNBQUcsRUFBRUEsS0FBSyxDQUFDaEc7QUFBaEIsb0JBQ0Msd0NBREQsZUFFQztBQUNDLGVBQVMsRUFBQyxvQ0FEWDtBQUVDLFNBQUcsRUFBRWdHLEtBQUssQ0FBQ2hHO0FBRlosb0JBR0M7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUFzQ2dHLEtBQUssQ0FBQ2hLLElBQTVDLENBSEQsZUFLQyw2QkFBQyxhQUFEO0FBQ0Msa0JBQVksRUFBRWdLLEtBQUssQ0FBQ2hLLElBQU4sQ0FBV21OLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUJDLElBQXZCLENBQTRCLEVBQTVCLENBRGY7QUFFQyxtQkFBYSxFQUFFRixhQUZoQjtBQUdDLGdCQUFVLEVBQUVELFVBSGI7QUFJQyxvQkFBYyxFQUFFN1MsY0FKakI7QUFLQyxXQUFLLEVBQUU0UCxLQUxSO0FBTUMsVUFBSSxFQUFFblAsSUFOUDtBQU9DLGtCQUFZLEVBQUVxUjtBQVBmLE1BTEQsZUFlQyx3Q0FmRCxFQWdCRWxDLEtBQUssQ0FBQ3JGLE1BQU4sSUFDRCxDQUFDOUosSUFBSSxDQUFDd1MsY0FBTCxDQUFvQmxQLFFBQXBCLENBQTZCNkwsS0FBSyxDQUFDaEcsR0FBbkMsQ0FEQSxHQUMwQyxJQUQxQyxnQkFFQSw2QkFBQyx5QkFBRCxDQUFXLFFBQVg7QUFDQyxjQUFRLEVBQUVnRyxLQUFLLENBQUNoSyxJQUFOLENBQVdtTixLQUFYLENBQWlCLElBQWpCLEVBQXVCQyxJQUF2QixDQUE0QixFQUE1QjtBQURYLG9CQUVDLHlDQUNFcEQsS0FBSyxDQUFDc0QsTUFBTixDQUFhcEwsTUFBYixHQUFzQixDQUF0QixHQUNFOEgsS0FBSyxDQUFDc0QsTUFBTixDQUFhckMsR0FBYixDQUFrQmhNLEtBQUQsSUFBVztBQUM1QiwwQkFDQyw2QkFBQyxtQkFBRDtBQUNDLGFBQUssRUFBRStLLEtBRFI7QUFFQyxhQUFLLEVBQUUvSyxLQUZSO0FBR0Msc0JBQWMsRUFBRTdFO0FBSGpCLFFBREQ7QUFPQyxLQVJELENBREYsR0FVRTRQLEtBQUssQ0FBQ2hJLFFBQU4sSUFDQWdJLEtBQUssQ0FBQ2hJLFFBQU4sQ0FBZWlKLEdBQWYsQ0FBb0I5SyxPQUFELElBQWE7QUFDaEMsMEJBQ0MsNkJBQUMscUJBQUQ7QUFDQyxhQUFLLEVBQUU2SixLQURSO0FBRUMsZUFBTyxFQUFFN0osT0FGVjtBQUdDLHNCQUFjLEVBQUUvRjtBQUhqQixRQUREO0FBT0MsS0FSRCxDQVpKLENBRkQsQ0FsQkYsQ0FGRCxDQUREO0FBa0RBLEdBbkRELENBRkYsQ0FERDtBQXlEQSxDQWxGRDs7QUFvRkEsTUFBTXlHLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ25DOEksUUFBTSxFQUFFOUksS0FBSyxDQUFDa0osS0FBTixDQUFZSixNQURlO0FBRW5DL08sTUFBSSxFQUFFaUcsS0FBSyxDQUFDQyxJQUFOLENBQVdsRztBQUZrQixDQUFaLENBQXhCOztlQUtlLHlCQUFRZ0csZUFBUixFQUF5QjtBQUFFdkQsV0FBUyxFQUFUQSxrQkFBRjtBQUFhSSxhQUFXLEVBQVhBO0FBQWIsQ0FBekIsRUFDZHNQLGNBRGMsQzs7OztBQUlmLE1BQU1PLGFBQWEsR0FBRyxDQUFDO0FBQ3RCckIsY0FEc0I7QUFFdEJsQyxPQUZzQjtBQUd0QjVQLGdCQUhzQjtBQUl0QjZTLFlBSnNCO0FBS3RCQyxlQUxzQjtBQU10QnJTO0FBTnNCLENBQUQsS0FPaEI7QUFDTCxzQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDZCQUFDLHFCQUFEO0FBQ0MsUUFBSSxFQUFDLE1BRE47QUFFQyxRQUFJLEVBQUVtUCxLQUZQO0FBR0MsT0FBRyxFQUFHLElBQUc1UCxjQUFlLGVBQWM0UCxLQUFLLENBQUNoRyxHQUFJO0FBSGpELElBREQsZUFNQyw2QkFBQyxxQkFBRDtBQUFjLFFBQUksRUFBQyxRQUFuQjtBQUE0QixXQUFPLEVBQUVrSSxZQUFyQztBQUFtRCxRQUFJLEVBQUVsQztBQUF6RCxJQU5ELGVBT0MsNkJBQUMscUJBQUQ7QUFBYyxRQUFJLEVBQUMsS0FBbkI7QUFBeUIsUUFBSSxFQUFFQSxLQUEvQjtBQUFzQyxPQUFHLEVBQUcsY0FBYUEsS0FBSyxDQUFDaEcsR0FBSTtBQUFuRSxJQVBELEVBUUVnRyxLQUFLLENBQUNyRixNQUFOLElBQWdCLENBQUM5SixJQUFJLENBQUN3UyxjQUFMLENBQW9CbFAsUUFBcEIsQ0FBNkI2TCxLQUFLLENBQUNoRyxHQUFuQyxDQUFqQixnQkFDQSw2QkFBQyxXQUFELE9BREEsZ0JBR0EsNkJBQUMseUJBQUQsQ0FBVyxNQUFYO0FBQ0MsTUFBRSxFQUFFa0Usc0JBREw7QUFFQyxXQUFPLEVBQUMsTUFGVDtBQUdDLGFBQVMsRUFBQyx3QkFIWDtBQUlDLFlBQVEsRUFBRThCLEtBQUssQ0FBQ2hLLElBQU4sQ0FBV21OLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUJDLElBQXZCLENBQTRCLEVBQTVCLENBSlgsQ0FJNEM7QUFKNUM7QUFLQyxXQUFPLEVBQUUsTUFBTTtBQUNkLFVBQUlILFVBQVUsS0FBS2pELEtBQUssQ0FBQ2hHLEdBQXpCLEVBQThCO0FBQzdCa0oscUJBQWEsQ0FBQyxFQUFELENBQWI7QUFDQSxPQUZELE1BRU87QUFDTkEscUJBQWEsQ0FBQ2xELEtBQUssQ0FBQ2hHLEdBQVAsQ0FBYjtBQUNBO0FBQ0Q7QUFYRixrQkFZQztBQUNDLE1BQUUsRUFBRWdHLEtBQUssQ0FBQ2hLLElBQU4sQ0FBV21OLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUJDLElBQXZCLENBQTRCLEVBQTVCLENBREw7QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLGFBQVMsRUFBRyxxRUFDWHBELEtBQUssQ0FBQ2hHLEdBQU4sS0FBY2lKLFVBQWQsR0FBMkIsUUFBM0IsR0FBc0MsRUFDdEM7QUFMRixrQkFNQztBQUFNLEtBQUMsRUFBQztBQUFSLElBTkQsQ0FaRCxDQVhGLENBREQ7QUFvQ0EsQ0E1Q0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNTyxZQUFZLEdBQUcsQ0FBQztBQUFFdk87QUFBRixDQUFELEtBQWU7QUFDbkN0RixTQUFPLENBQUNDLEdBQVIsQ0FBWXFGLEtBQVo7QUFDQSxTQUFPQSxLQUFLLElBQUksQ0FBQ0EsS0FBSyxDQUFDMEIsT0FBaEIsZ0JBQ047QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQ0MsYUFBUyxFQUFDLFFBRFg7QUFFQyxPQUFHLEVBQUUxQixLQUFLLENBQUNrRyxHQUZaO0FBR0MsU0FBSyxFQUFDLHNCQUhQO0FBSUMsZUFBVyxFQUFDLEdBSmI7QUFLQyxTQUFLLEVBQUMsMEZBTFA7QUFNQyxtQkFBZTtBQU5oQixJQURELENBREQsZUFVQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBdUJsRyxLQUFLLENBQUNlLElBQTdCLENBREQsZUFFQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQXVCZixLQUFLLENBQUNnRyxXQUE3QixDQUZELGVBR0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyx5RUFERCxDQUhELENBVkQsQ0FETSxnQkFvQk4sNkJBQUMsdUJBQUQ7QUFBZ0IsbUJBQWUsRUFBRWhHO0FBQWpDLElBcEJEO0FBc0JBLENBeEJEOztBQTBCQSxNQUFNNEIsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbkM3QixPQUFLLEVBQUU2QixLQUFLLENBQUM3QixLQUFOLENBQVlvRztBQURnQixDQUFaLENBQXhCOztlQUllLHlCQUFReEUsZUFBUixFQUF5QixJQUF6QixFQUErQjJNLFlBQS9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2Y7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNL0QsWUFBWSxHQUFHLEVBQXJCO0FBRUEsTUFBTWdFLFVBQVUsR0FBRyxDQUFDQyxtQkFBRCxDQUFuQjtBQUVBLE1BQU16VSxLQUFLLEdBQUcsd0JBQ1owVSxpQkFEWSxFQUVabEUsWUFGWSxFQUdaLGlEQUFvQiw0QkFBZ0IsR0FBR2dFLFVBQW5CLENBQXBCLENBSFksQ0FBZDtlQU1leFUsSzs7Ozs7Ozs7Ozs7Ozs7O0FDZmYsaUVBQWUscUJBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7O0FDQS9FLG1DOzs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTTJVLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosSUFBb0IsSUFBakM7O0FBRUEsTUFBTWxOLElBQUksR0FBR3FOLFlBQUdDLFlBQUgsQ0FBZ0Isa0JBQWhCLEVBQW9DQyxRQUFwQyxFQUFiOztBQUVBLE1BQU1DLEtBQUssR0FBR3hOLElBQUksQ0FBQ3lNLEtBQUwsQ0FBVyx1QkFBWCxDQUFkO0FBRUEsTUFBTWdCLEdBQUcsR0FBRyx1QkFBWjtBQUVBQSxHQUFHLENBQUNDLEdBQUosQ0FBUUMsaUJBQVFDLE1BQVIsQ0FBZSxPQUFmLENBQVI7QUFDQUgsR0FBRyxDQUFDQyxHQUFKLENBQVEsQ0FBQ0csR0FBRCxFQUFNN1UsR0FBTixLQUFjO0FBQ3JCLFFBQU04VSxXQUFXLGdCQUNoQiw2QkFBQyxjQUFELENBQU8sVUFBUCxxQkFDQyw2QkFBQyxvQkFBRDtBQUFVLFNBQUssRUFBRXZWO0FBQWpCLGtCQUNDLDZCQUFDLDRCQUFEO0FBQWMsT0FBRyxFQUFFc1YsR0FBRyxDQUFDcEo7QUFBdkIsa0JBQ0MsNkJBQUMsWUFBRCxPQURELENBREQsQ0FERCxDQUREOztBQVVBekwsS0FBRyxDQUFDK1UsSUFBSixDQUFVLEdBQUVQLEtBQUssQ0FBQyxDQUFELENBQUksR0FBRSw0QkFBZU0sV0FBZixDQUE0QixHQUFFTixLQUFLLENBQUMsQ0FBRCxDQUFJLEVBQTlEO0FBQ0F4VSxLQUFHLENBQUNnVixHQUFKO0FBQ0EsQ0FiRDtBQWVBL1UsT0FBTyxDQUFDQyxHQUFSLENBQWEsZ0JBQWVnVSxJQUFLLEVBQWpDO0FBQ0FPLEdBQUcsQ0FBQ1EsTUFBSixDQUFXZixJQUFYLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcclxuXHJcbmltcG9ydCB7IGxvYWRVc2VyIH0gZnJvbSAnLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBzZXRBdXRoVG9rZW4sIGlzQ2xpZW50IH0gZnJvbSAnLi9oZWxwZXJzL3NldEF1dGhUb2tlbic7XHJcblxyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qcyc7XHJcblxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IFByZWxvYWRlciBhcyBMb2FkZXIgfSBmcm9tICcuL2xheW91dC9wcmVsb2FkZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbGF5b3V0L05hdmJhci9OYXZiYXInO1xyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aWNsZSc7XHJcbmltcG9ydCBVcHNlcnRDYXJkIGZyb20gJy4vY29tcG9uZW50cy9VcHNlcnRDYXJkJztcclxuaW1wb3J0IFVwc2VydEFydGljbGUgZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydEFydGljbGUnO1xyXG5pbXBvcnQgQXV0aCBmcm9tICcuL2NvbXBvbmVudHMvQXV0aCc7XHJcbmltcG9ydCBVcHNlcnRUb3BpYyBmcm9tICcuL2NvbXBvbmVudHMvVXBzZXJ0VG9waWMnO1xyXG5pbXBvcnQgVXBzZXJ0VmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL1Vwc2VydFZpZGVvJztcclxuaW1wb3J0IEJsb2cgZnJvbSAnLi9jb21wb25lbnRzL0Jsb2cnO1xyXG4vLyBpbXBvcnQgUHJpdmF0ZVJvdXRlIGZyb20gJy4vaGVscGVycy9Qcml2YXRlUm91dGUnO1xyXG5cclxuY29uc3QgUHJldmlldyA9IExvYWRhYmxlKHtcclxuXHRsb2FkZXI6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL1ByZXZpZXcnKSxcclxuXHRsb2FkaW5nOiAoKSA9PiA8TG9hZGVyIC8+LFxyXG59KTtcclxuXHJcbmNvbnN0IEhvbWUgPSBMb2FkYWJsZSh7XHJcblx0bG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Ib21lJyksXHJcblx0bG9hZGluZzogKCkgPT4gPExvYWRlciAvPixcclxufSk7XHJcbmNvbnN0IEFib3V0ID0gTG9hZGFibGUoe1xyXG5cdGxvYWRlcjogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvQWJvdXQnKSxcclxuXHRsb2FkaW5nOiAoKSA9PiA8TG9hZGVyIC8+LFxyXG59KTtcclxuY29uc3QgTGVhcm4gPSBMb2FkYWJsZSh7XHJcblx0bG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9MZWFybicpLFxyXG5cdGxvYWRpbmc6ICgpID0+IDxMb2FkZXIgLz4sXHJcbn0pO1xyXG5cclxuaWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS50b2tlbikge1xyXG5cdHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2UudG9rZW4pO1xyXG59XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHN0b3JlLmRpc3BhdGNoKGxvYWRVc2VyKCkpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxyXG5cdFx0XHQ8TmF2YmFyIC8+XHJcblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XHJcblx0XHRcdFx0PFN3aXRjaD5cclxuXHRcdFx0XHRcdDxSZWRpcmVjdCBleGFjdCBmcm9tPScvJyB0bz0naG9tZScgLz47XHJcblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nL2hvbWUnIGNvbXBvbmVudD17SG9tZX0gLz5cclxuXHRcdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPScvYWJvdXQnIGNvbXBvbmVudD17QWJvdXR9IC8+XHJcblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nL2xlYXJuJyBjb21wb25lbnQ9e0xlYXJufSAvPlxyXG5cdFx0XHRcdFx0PFJvdXRlXHJcblx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiA8QXV0aCB7Li4ucHJvcHN9IHR5cGU9eydzaWdudXAnfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nL3NpZ251cCdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Um91dGVcclxuXHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IDxVcHNlcnRUb3BpYyBlZGl0PXtmYWxzZX0gey4uLnByb3BzfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nLzpzcGVjaWFsaXR5TmFtZS90b3BpYy9hZGQnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFJvdXRlXHJcblx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiA8VXBzZXJ0VG9waWMgZWRpdD17dHJ1ZX0gey4uLnByb3BzfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nLzpzcGVjaWFsaXR5TmFtZS90b3BpYy9lZGl0Lzp0b3BpY0lkJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPEF1dGggey4uLnByb3BzfSB0eXBlPXsnc2lnbnVwJ30gLz59XHJcblx0XHRcdFx0XHRcdGV4YWN0XHJcblx0XHRcdFx0XHRcdHBhdGg9Jy9zaWdudXAvOnJlZmVyQ29kZSdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Um91dGVcclxuXHRcdFx0XHRcdFx0cmVuZGVyPXsocHJvcHMpID0+IDxBdXRoIHsuLi5wcm9wc30gdHlwZT17J2xvZ2luJ30gLz59XHJcblx0XHRcdFx0XHRcdGV4YWN0XHJcblx0XHRcdFx0XHRcdHBhdGg9Jy9sb2dpbidcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nL2xlYXJuLzpzcGVjaWFsaXR5TmFtZScgY29tcG9uZW50PXtQcmV2aWV3fSAvPlxyXG5cdFx0XHRcdFx0PFJvdXRlXHJcblx0XHRcdFx0XHRcdHJlbmRlcj17KHByb3BzKSA9PiA8VXBzZXJ0QXJ0aWNsZSB7Li4ucHJvcHN9IGVkaXQ9e2ZhbHNlfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nL2FydGljbGUvYWRkJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydEFydGljbGUgey4uLnByb3BzfSBlZGl0PXt0cnVlfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nL2FydGljbGUvdXBkYXRlJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydFZpZGVvIHsuLi5wcm9wc30gZWRpdD17ZmFsc2V9IC8+fVxyXG5cdFx0XHRcdFx0XHRleGFjdFxyXG5cdFx0XHRcdFx0XHRwYXRoPScvdmlkZW8vYWRkLzp0b3BpY0lkJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydFZpZGVvIHsuLi5wcm9wc30gZWRpdD17dHJ1ZX0gLz59XHJcblx0XHRcdFx0XHRcdGV4YWN0XHJcblx0XHRcdFx0XHRcdHBhdGg9Jy92aWRlby91cGRhdGUvOnZpZGVvSWQnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy9ibG9nL3JlYWQvOm5hbWUnIGNvbXBvbmVudD17QXJ0aWNsZX0gLz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydENhcmQgey4uLnByb3BzfSBlZGl0PXtmYWxzZX0gLz59XHJcblx0XHRcdFx0XHRcdGV4YWN0XHJcblx0XHRcdFx0XHRcdHBhdGg9Jy9BZGRDYXJkJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZVxyXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyhwcm9wcykgPT4gPFVwc2VydENhcmQgey4uLnByb3BzfSBlZGl0PXt0cnVlfSAvPn1cclxuXHRcdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdFx0cGF0aD0nL3VwZGF0ZXNwZWNpYWxpdHkvOnNwZWNpYWxpdHlOYW1lJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPScvYmxvZycgY29tcG9uZW50PXtCbG9nfSAvPlxyXG5cdFx0XHRcdDwvU3dpdGNoPlxyXG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cclxuXHRcdFx0PFRvYXN0Q29udGFpbmVyIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcclxuZXhwb3J0IGNvbnN0IGNsZWFyQXJ0aWNsZSA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogJ0NMRUFSX0FSVElDTEUnLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFydGljbGUgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXJ0aWNsZS9nZXQvJHtpZH1gKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdHRVRfQVJUSUNMRScsXHJcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGVycm9yVG9hc3QoZXJyb3IpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdHRVRfQVJUSUNMRV9FUlJPUicsXHJcbiAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbEFydGljbGVzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hcnRpY2xlL2FsbGApO1xyXG4gICAgY29uc29sZS5sb2cocmVzLnN0YXR1cylcclxuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdHRVRfQUxMX0FSVElDTEVTJyxcclxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZXJyb3JUb2FzdChlcnJvcilcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0dFVF9BTExfQVJUSUNMRVNfRVJST1InLFxyXG4gICAgICBwYXlsb2FkOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRBcnRpY2xlID0gKGRhdGEpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS9hcnRpY2xlL2FkZGAsIGRhdGEsIHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQUREX0FSVElDTEUnLFxyXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgc3VjY2Vzc1RvYXN0KHJlcylcclxuICAgIC8vIGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXMyLmRhdGEpO1xyXG5cclxuICAgIC8vIGRpc3BhdGNoKHtcclxuICAgIC8vICAgdHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG4gICAgLy8gICBwYXlsb2FkOiByZXMyLmRhdGEsXHJcbiAgICAvLyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZXJyb3JUb2FzdChlcnJvcilcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0FERF9BUlRJQ0xFX0VSUk9SJyxcclxuICAgICAgcGF5bG9hZDoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdEFydGljbGUgPSAoZGF0YSwgaWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS9hcnRpY2xlL3VwZGF0ZS8ke2lkfWAsIGRhdGEsIHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnRURJVF9BUlRJQ0xFJyxcclxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMyLmRhdGEpO1xyXG5cclxuICAgIHN1Y2Nlc3NUb2FzdChyZXMpXHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnR0VUX1RPUElDUycsXHJcbiAgICAgIHBheWxvYWQ6IHJlczIuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBlcnJvclRvYXN0KGVycm9yKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnRURJVF9BUlRJQ0xFX0VSUk9SJyxcclxuICAgICAgcGF5bG9hZDoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQXJ0aWNsZSA9IChhcnRpY2xlSWQsIHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoXHJcbiAgZGlzcGF0Y2hcclxuKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxyXG4gICAgICBgYXBpL2FydGljbGUvZGVsZXRlLyR7YXJ0aWNsZUlkfS8ke3RvcGljSWR9YCxcclxuICAgICAge30sXHJcbiAgICAgIHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnREVMRVRFX0FSVElDTEUnLFxyXG4gICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuICAgIGNvbnNvbGUubG9nKHJlczIuZGF0YSk7XHJcblxyXG4gICAgc3VjY2Vzc1RvYXN0KHJlcylcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuICAgICAgcGF5bG9hZDogcmVzMi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGVycm9yVG9hc3QoZXJyb3IpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdERUxFVEVfQVJUSUNMRV9FUlJPUicsXHJcbiAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG5cdFJFR0lTVEVSX1NVQ0NFU1MsXHJcblx0UkVHSVNURVJfRkFJTCxcclxuXHRMT0dJTl9TVUNDRVNTLFxyXG5cdExPR0lOX0ZBSUwsXHJcblx0VVNFUl9MT0FERUQsXHJcblx0QVVUSF9FUlJPUixcclxuXHRTRU5EX1JFU0VUX0VNQUlMLFxyXG5cdFNFTkRfUkVTRVRfRU1BSUxfRkFJTCxcclxufSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IHNlcnZpY2VHZXQsIHNlcnZpY2VQb3N0LCBzZXRBdXRoVG9rZW4sIGlzQ2xpZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xyXG5cclxuLy8gTG9hZCBVc2VyIDogRXZlcnkgdGltZSB3ZSBsb2dnZWQgaW4gb3IgcmVnaXN0ZXIgb3IgcmVmcmVzaCB0aGUgcGFnZSBpdHMgZ29ubmEgbG9hZC5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkVXNlciA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGRpc3BhdGNoKHtcclxuXHRcdHR5cGU6ICdTRVRfQVVUSF9MT0FERVInLFxyXG5cdH0pO1xyXG5cdGlmIChpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UudG9rZW4pIHtcclxuXHRcdHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2UudG9rZW4pO1xyXG5cdH1cclxuXHJcblx0aWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS51c2VySWQpIHtcclxuXHRcdGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvYXV0aC91c2VyLyR7dXNlcklkfWApO1xyXG5cdFx0XHQvLyBkaXNwbGF5VG9hc3RcclxuXHRcdFx0c3VjY2Vzc1RvYXN0KHJlcyk7XHJcblxyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogVVNFUl9MT0FERUQsXHJcblx0XHRcdFx0cGF5bG9hZDogcmVzLmRhdGEudXNlcixcclxuXHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0Ly8gZGlzcGxheSB0b2FzdFxyXG5cdFx0XHRlcnJvclRvYXN0KGVycik7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBBVVRIX0VSUk9SLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVmcmVzaFVzZXIgPSAodXNlcikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0ZGlzcGF0Y2goe1xyXG5cdFx0dHlwZTogJ1NFVF9BVVRIX0xPQURFUicsXHJcblx0fSk7XHJcblx0aWYgKGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS50b2tlbikge1xyXG5cdFx0c2V0QXV0aFRva2VuKGxvY2FsU3RvcmFnZS50b2tlbik7XHJcblx0fVxyXG5cclxuXHRpZiAoaXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnVzZXJJZCkge1xyXG5cdFx0Y29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdC8vIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hdXRoL3VzZXIvJHt1c2VySWR9YCk7XHJcblx0XHRcdGF3YWl0IHNlcnZpY2VHZXQoYGFwaS9hdXRoL3VzZXIvJHt1c2VySWR9YCk7XHJcblxyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogVVNFUl9MT0FERUQsXHJcblx0XHRcdFx0cGF5bG9hZDogdXNlcixcclxuXHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IEFVVEhfRVJST1IsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IChkYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRkaXNwYXRjaCh7XHJcblx0XHR0eXBlOiAnU0VUX0FVVEhfTE9BREVSJyxcclxuXHR9KTtcclxuXHRjb25zdCBoZWFkZXJzID0ge1xyXG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdCgnYXBpL2F1dGgvc2lnbnVwJywgYm9keSwgaGVhZGVycyk7XHJcblxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiByZXMuc3RhdHVzID09PSAxID8gUkVHSVNURVJfU1VDQ0VTUyA6IFJFR0lTVEVSX0ZBSUwsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcyk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdGRpc3BhdGNoKGxvYWRVc2VyKCkpO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Ly8gY29uc3QgZXJyb3JzID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xyXG5cdFx0ZXJyb3JUb2FzdChlcnIpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiBSRUdJU1RFUl9GQUlMLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID1cclxuXHQoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT5cclxuXHRhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ1NFVF9BVVRIX0xPQURFUicsXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IGhlYWRlcnMgPSB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdCgnYXBpL2F1dGgvbG9naW4nLCBib2R5LCBoZWFkZXJzKTtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogcmVzLnN0YXR1cyA9PT0gMSA/IExPR0lOX1NVQ0NFU1MgOiBMT0dJTl9GQUlMLFxyXG5cdFx0XHRcdHBheWxvYWQ6IHsgdXNlcklkOiByZXMuZGF0YT8udXNlcj8udXNlcklkLCB0b2tlbjogcmVzLmRhdGE/LnRva2VuIH0sXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZGlzcGF0Y2gobG9hZFVzZXIoKSk7XHJcblx0XHRcdHN1Y2Nlc3NUb2FzdChyZXMpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdGVycm9yVG9hc3QoZXJyKTtcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IExPR0lOX0ZBSUwsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcblx0aWYgKGlzQ2xpZW50KSBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHRkaXNwYXRjaCh7XHJcblx0XHR0eXBlOiAnTE9HT1VUJyxcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kUmVzZXRFbWFpbCA9XHJcblx0KHsgZW1haWwgfSkgPT5cclxuXHRhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRcdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgZW1haWwgfSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJy9hcGkvZm9yZ290cGFzc3dvcmQnLCBib2R5LCBjb25maWcpO1xyXG5cclxuXHRcdFx0Y29uc3QgbWVzc2FnZXNBcnJheSA9IHJlcy5kYXRhLm1lc3NhZ2VzO1xyXG5cdFx0XHQvLyBicmFuZCBhZGRlZCBtZXNzYWdlIGFsZXJ0XHJcblx0XHRcdG1lc3NhZ2VzQXJyYXkuZm9yRWFjaCgobWVzc2FnZSkgPT4gZGlzcGF0Y2goKG1lc3NhZ2UubXNnLCAnZGFuZ2VyJykpKTtcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IFNFTkRfUkVTRVRfRU1BSUwsXHJcblx0XHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGNvbnN0IGVycm9ycyA9IGVyciAmJiBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnM7XHJcblx0XHRcdGlmIChlcnJvcnMpIHtcclxuXHRcdFx0fVxyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogU0VORF9SRVNFVF9FTUFJTF9GQUlMLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL2FydGljbGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2F1dGgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NwZWNpYWxpdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL3RvcGljJztcclxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdWknO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZpZGVvJztcclxuIiwiaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgZXJyb3JUb2FzdCwgc3VjY2Vzc1RvYXN0IH0gZnJvbSAnLi90b2FzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3BlY2lhbGl0aWVzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoJ2FwaS9zcGVjaWFsaXR5L2FsbCcpO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRJRVMnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRJRVNfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhclNwZWNpYWxpdHkgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRkaXNwYXRjaCh7XHJcblx0XHR0eXBlOiAnQ0xFQVJfU1BFQ0lBTElUWScsXHJcblx0XHRwYXlsb2FkOiB7fSxcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTcGVjaWFsaXR5ID0gKHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL3NwZWNpYWxpdHkvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUWScsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLnNwZWNpYWxpdHksXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUWV9FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFNwZWNpYWxpdHkgPSAoZGF0YSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoJ2FwaS9zcGVjaWFsaXR5L2FkZCcsIGRhdGEsIHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX1NQRUNJQUxJVElZJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KCdhcGkvc3BlY2lhbGl0eS9hbGwnKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRJRVMnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdBRERfU1BFQ0lBTElUWV9FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRTcGVjaWFsaXR5ID0gKGRhdGEsIGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZVBvc3QoYGFwaS9zcGVjaWFsaXR5L3VwZGF0ZS8ke2lkfWAsIGRhdGEsIHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0pO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnRURJVF9TUEVDSUFMSVRJWScsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldCgnYXBpL3NwZWNpYWxpdHkvYWxsJyk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfU1BFQ0lBTElUSUVTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnRURJVF9TUEVDSUFMSVRZX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlU3BlY2lhbGl0eSA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxyXG5cdFx0XHRgYXBpL3NwZWNpYWxpdHkvZGVsZXRlLyR7aWR9YCxcclxuXHRcdFx0e30sXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnREVMRVRFX1NQRUNJQUxJVElZJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KCdhcGkvc3BlY2lhbGl0eS9hbGwnKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9TUEVDSUFMSVRJRVMnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdERUxFVEVfU1BFQ0lBTElUWV9FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3VjY2Vzc1RvYXN0ID0gKHJlcykgPT4ge1xyXG4gICAgcmVzLnN0YXR1cyA9PSAxID8gdG9hc3Quc3VjY2VzcyhyZXMubWVzc2FnZSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgfSkgOiB0b2FzdC5lcnJvcihyZXMubWVzc2FnZSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvclRvYXN0ID0gKGVycikgPT4ge1xyXG4gICAgdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgc2VydmljZUdldCwgc2VydmljZVBvc3QgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IGVycm9yVG9hc3QsIHN1Y2Nlc3NUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRvcGljcyA9IChzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1NfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb3BpYyA9IChkYXRhLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coc3BlY2lhbGl0eU5hbWUpO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvdG9waWMvYWRkYCwgZGF0YSwge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX1RPUElDJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdC8vIHJlZnJlc2ggdG9waWNzXHJcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX1RPUElDX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFRvcGljID0gKGRhdGEsIGlkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvdG9waWMvdXBkYXRlLyR7aWR9YCwgZGF0YSwge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdFRElUX1RPUElDJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0XHRjb25zdCByZXMyID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXHJcblx0XHRcdHBheWxvYWQ6IHJlczIuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRlcnJvclRvYXN0KGVycm9yKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnRURJVF9UT1BJQ19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVubG9ja1RvcGljID0gKHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRjb25zb2xlLmxvZyhzcGVjaWFsaXR5TmFtZSk7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxyXG5cdFx0XHRgYXBpL3RvcGljL3VubG9jay8ke3RvcGljSWR9YCxcclxuXHRcdFx0e30sXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ1VTRVJMT0FERUQnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YS51c2VyLFxyXG5cdFx0fSk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdVTkxPQ0tfVE9QSUMnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgcmVzMiA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXMyLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdVTkxPQ0tfVE9QSUNfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVUb3BpYyA9IChpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKHsgaWQsIHNwZWNpYWxpdHlOYW1lIH0pO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcclxuXHRcdFx0YGFwaS90b3BpYy9kZWxldGUvJHtpZH1gLFxyXG5cdFx0XHR7fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnREVMRVRFX1RPUElDJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdERUxFVEVfVE9QSUNfRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IFNFVF9BTEVSVCA9ICdTRVRfQUxFUlQnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0FMRVJUID0gJ1JFTU9WRV9BTEVSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU5fU1VDQ0VTUyA9ICdMT0dJTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUwgPSAnTE9HSU5fRkFJTCc7XHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9TVUNDRVNTID0gJ1JFR0lTVEVSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVHSVNURVJfRkFJTCA9ICdSRUdJU1RFUl9GQUlMJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfUkVTRVRfRU1BSUwgPSAnU0VORF9SRVNFVF9FTUFJTCc7XHJcbmV4cG9ydCBjb25zdCBTRU5EX1JFU0VUX0VNQUlMX0ZBSUwgPSAnU0VORF9SRVNFVF9FTUFJTF9GQUlMJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBVU0VSX0xPQURFRCA9ICdVU0VSTE9BREVEJztcclxuZXhwb3J0IGNvbnN0IEFVVEhfRVJST1IgPSAnQVVUSF9FUlJPUic7XHJcbiIsImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0T3BlblRvcGljcyA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coaWQpO1xyXG5cdGNvbnN0IG9wZW5Ub3BpY3NBcnJheSA9IHN0b3JlLmdldFN0YXRlKCkudWkub3BlblRvcGljcztcclxuXHRpZiAoIW9wZW5Ub3BpY3NBcnJheS5pbmNsdWRlcyhpZCkpIHtcclxuXHRcdG9wZW5Ub3BpY3NBcnJheS5wdXNoKGlkKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0b3BlblRvcGljc0FycmF5LnNwbGljZShvcGVuVG9waWNzQXJyYXkuaW5kZXhPZihpZCksIDEpO1xyXG5cdH1cclxuXHJcblx0ZGlzcGF0Y2goe1xyXG5cdFx0dHlwZTogJ1NFVF9PUEVOX1RPUElDUycsXHJcblx0XHRwYXlsb2FkOiBvcGVuVG9waWNzQXJyYXksXHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0RGlzcGxheU1vZGUgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHRjb25zdCBkaXNwbGF5TW9kZSA9XHJcblx0XHRzdG9yZS5nZXRTdGF0ZSgpLnVpLmRpc3BsYXlNb2RlID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnO1xyXG5cdGlmIChpc0NsaWVudCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vZGUnLCBkaXNwbGF5TW9kZSk7XHJcblxyXG5cdGRpc3BhdGNoKHtcclxuXHRcdHR5cGU6ICdTRVRfRElTUExBWV9NT0RFJyxcclxuXHRcdHBheWxvYWQ6IGRpc3BsYXlNb2RlLFxyXG5cdH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBzZXJ2aWNlR2V0LCBzZXJ2aWNlUG9zdCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBlcnJvclRvYXN0LCBzdWNjZXNzVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFZpZGVvID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgc2VydmljZUdldChgYXBpL3ZpZGVvL2dldC8ke2lkfWApO1xyXG5cdFx0c3VjY2Vzc1RvYXN0KHJlcylcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9WSURFTycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdBRERfVklERU9fRVJST1InLFxyXG5cdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRWaWRlbyA9IChkYXRhLCBpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KGBhcGkvdmlkZW8vYWRkLyR7aWR9YCwgZGF0YSwge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnQUREX1ZJREVPJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzLmRhdGEsXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCByZXNUb3BpYyA9IGF3YWl0IHNlcnZpY2VHZXQoYGFwaS90b3BpYy9nZXQvJHtzcGVjaWFsaXR5TmFtZX1gKTtcclxuXHRcdGNvbnNvbGUubG9nKHJlc1RvcGljKTtcclxuXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdHRVRfVE9QSUNTJyxcclxuXHRcdFx0cGF5bG9hZDogcmVzVG9waWMuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG5cdFx0ZXJyb3JUb2FzdChlcnJvcilcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0FERF9WSURFT19FUlJPUicsXHJcblx0XHRcdHBheWxvYWQ6IHt9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRWaWRlbyA9IChkYXRhLCBpZCwgc3BlY2lhbGl0eU5hbWUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChgYXBpL3ZpZGVvL3VwZGF0ZS8ke2lkfWAsIGRhdGEsIHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiAnRURJVF9WSURFTycsXHJcblx0XHRcdHBheWxvYWQ6IHJlcy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0XHRzdWNjZXNzVG9hc3QocmVzKVxyXG5cclxuXHRcdGNvbnN0IHJlc1RvcGljID0gYXdhaXQgc2VydmljZUdldChgYXBpL3RvcGljL2dldC8ke3NwZWNpYWxpdHlOYW1lfWApO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHJlc1RvcGljLmRhdGEpO1xyXG5cclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ0dFVF9UT1BJQ1MnLFxyXG5cdFx0XHRwYXlsb2FkOiByZXNUb3BpYy5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6ICdFRElUX1ZJREVPX0VSUk9SJyxcclxuXHRcdFx0cGF5bG9hZDoge30sXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVmlkZW8gPVxyXG5cdCh2aWRlb0lkLCB0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBzZXJ2aWNlUG9zdChcclxuXHRcdFx0XHRgYXBpL3ZpZGVvL2RlbGV0ZS8ke3ZpZGVvSWR9LyR7dG9waWNJZH1gLFxyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiAnREVMRVRFX1ZJREVPJyxcclxuXHRcdFx0XHRwYXlsb2FkOiByZXMuZGF0YSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHJlczIgPSBhd2FpdCBzZXJ2aWNlR2V0KGBhcGkvdG9waWMvZ2V0LyR7c3BlY2lhbGl0eU5hbWV9YCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlczIuZGF0YSk7XHJcblx0XHRcdHN1Y2Nlc3NUb2FzdChyZXMpXHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiAnR0VUX1RPUElDUycsXHJcblx0XHRcdFx0cGF5bG9hZDogcmVzMi5kYXRhLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGVycm9yVG9hc3QoZXJyb3IpXHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiAnREVMRVRFX1ZJREVPX0VSUk9SJyxcclxuXHRcdFx0XHRwYXlsb2FkOiB7fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RWaWRlbyA9ICh2aWRlbykgPT4gKGRpc3BhdGNoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ1NFTEVDVF9WSURFTycsXHJcblx0XHRcdHBheWxvYWQ6IHZpZGVvLFxyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogJ1NFTEVDVF9WSURFT19FUlJPUicsXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBBZGQgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcclxuXHQ8c3ZnXHJcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHR3aWR0aD17c2l6ZX1cclxuXHRcdGhlaWdodD17c2l6ZX1cclxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuXHRcdGZpbGw9J25vbmUnXHJcblx0XHRzdHJva2U9e2NvbG9yfVxyXG5cdFx0c3Ryb2tlV2lkdGg9JzMuNSdcclxuXHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcclxuXHRcdHN0cm9rZUxpbmVqb2luPSdhcmNzJz5cclxuXHRcdDxsaW5lIHgxPScxMicgeTE9JzUnIHgyPScxMicgeTI9JzE5Jz48L2xpbmU+XHJcblx0XHQ8bGluZSB4MT0nNScgeTE9JzEyJyB4Mj0nMTknIHkyPScxMic+PC9saW5lPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoZXZyb25zVXAgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcclxuXHQ8c3ZnXHJcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHR3aWR0aD17c2l6ZX1cclxuXHRcdGhlaWdodD17c2l6ZX1cclxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuXHRcdGZpbGw9J25vbmUnXHJcblx0XHRzdHJva2U9e2NvbG9yfVxyXG5cdFx0c3Ryb2tlV2lkdGg9JzMuNSdcclxuXHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcclxuXHRcdHN0cm9rZUxpbmVqb2luPSdhcmNzJz5cclxuXHRcdDxwYXRoIGQ9J00xNyAxMWwtNS01LTUgNU0xNyAxOGwtNS01LTUgNScgLz5cclxuXHQ8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGV2cm9uc0xlZnQgPSAoeyBzaXplID0gNTEsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcclxuXHQ8c3ZnXHJcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHR3aWR0aD17c2l6ZX1cclxuXHRcdGhlaWdodD17c2l6ZX1cclxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuXHRcdGZpbGw9J25vbmUnXHJcblx0XHRzdHJva2U9e2NvbG9yfVxyXG5cdFx0c3Ryb2tlV2lkdGg9JzIuNSdcclxuXHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcclxuXHRcdHN0cm9rZUxpbmVqb2luPSdhcmNzJz5cclxuXHRcdDxwYXRoIGQ9J00xMSAxN2wtNS01IDUtNU0xOCAxN2wtNS01IDUtNScgLz5cclxuXHQ8L3N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IENyb3NzID0gKHsgc2l6ZSA9IDMyLCBjb2xvciA9ICcjMDAwMDAwJyB9KSA9PiAoXHJcblx0PHN2Z1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0d2lkdGg9e3NpemV9XHJcblx0XHRoZWlnaHQ9e3NpemV9XHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdHN0cm9rZVdpZHRoPScxLjUnXHJcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXHJcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XHJcblx0XHQ8bGluZSB4MT0nMTgnIHkxPSc2JyB4Mj0nNicgeTI9JzE4Jz48L2xpbmU+XHJcblx0XHQ8bGluZSB4MT0nNicgeTE9JzYnIHgyPScxOCcgeTI9JzE4Jz48L2xpbmU+XHJcblx0PC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBEZWxldGUgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHdpZHRoPXtzaXplfVxyXG4gICAgaGVpZ2h0PXtzaXplfVxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICBzdHJva2U9e2NvbG9yfVxyXG4gICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgIHN0cm9rZUxpbmVjYXA9XCJzcXVhcmVcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJhcmNzXCJcclxuICA+XHJcbiAgICA8cG9seWxpbmUgcG9pbnRzPVwiMyA2IDUgNiAyMSA2XCI+PC9wb2x5bGluZT5cclxuICAgIDxwYXRoIGQ9XCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcIj48L3BhdGg+XHJcbiAgICA8bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCI+PC9saW5lPlxyXG4gICAgPGxpbmUgeDE9XCIxNFwiIHkxPVwiMTFcIiB4Mj1cIjE0XCIgeTI9XCIxN1wiPjwvbGluZT5cclxuICA8L3N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NrID0gKHsgc2l6ZSA9IDMzLCBjb2xvciA9ICcjREMxNDNDJywgaGFuZGxlciB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzdmdcclxuXHRcdFx0b25DbGljaz17aGFuZGxlcn1cclxuXHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0XHR3aWR0aD0nNDMnXHJcblx0XHRcdGhlaWdodD0nNDMnXHJcblx0XHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuXHRcdFx0ZmlsbD0nbm9uZSdcclxuXHRcdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdFx0c3Ryb2tlLXdpZHRoPScyJ1xyXG5cdFx0XHRzdHJva2UtbGluZWNhcD0ncm91bmQnXHJcblx0XHRcdHN0cm9rZS1saW5lam9pbj0ncm91bmQnPlxyXG5cdFx0XHQ8cmVjdCB4PSczJyB5PScxMScgd2lkdGg9JzE4JyBoZWlnaHQ9JzExJyByeD0nMicgcnk9JzInPjwvcmVjdD5cclxuXHRcdFx0PHBhdGggZD0nTTcgMTFWN2E1IDUgMCAwIDEgMTAgMHY0Jz48L3BhdGg+XHJcblx0XHQ8L3N2Zz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVubG9jayA9ICh7IHNpemUgPSAzMywgY29sb3IgPSAnIzAwRkYwMCcgfSkgPT4gKFxyXG5cdDxzdmdcclxuXHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdHdpZHRoPSc0MydcclxuXHRcdGhlaWdodD0nNDMnXHJcblx0XHR2aWV3Qm94PScwIDAgMjQgMjQnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0c3Ryb2tlPXtjb2xvcn1cclxuXHRcdHN0cm9rZS13aWR0aD0nMidcclxuXHRcdHN0cm9rZS1saW5lY2FwPSdyb3VuZCdcclxuXHRcdHN0cm9rZS1saW5lam9pbj0ncm91bmQnPlxyXG5cdFx0PHJlY3QgeD0nMycgeT0nMTEnIHdpZHRoPScxOCcgaGVpZ2h0PScxMScgcng9JzInIHJ5PScyJz48L3JlY3Q+XHJcblx0XHQ8cGF0aCBkPSdNNyAxMVY3YTUgNSAwIDAgMSA5LjktMSc+PC9wYXRoPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlYWQgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcclxuXHQ8c3ZnXHJcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHR3aWR0aD17c2l6ZX1cclxuXHRcdGhlaWdodD17c2l6ZX1cclxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCc+XHJcblx0XHQ8cGF0aCBkPSdNMTIgNC43MDZjLTIuOTM4LTEuODMtNy40MTYtMi41NjYtMTItMi43MDZ2MTcuNzE0YzMuOTM3LjEyIDcuNzk1LjY4MSAxMC42NjcgMS45OTUuODQ2LjM4OCAxLjgxNy4zODggMi42NjcgMCAyLjg3Mi0xLjMxNCA2LjcyOS0xLjg3NSAxMC42NjYtMS45OTV2LTE3LjcxNGMtNC41ODQuMTQtOS4wNjIuODc2LTEyIDIuNzA2em0tMTAgMTMuMTA0di0xMy43MDRjNS4xNTcuMzg5IDcuNTI3IDEuNDYzIDkgMi4zMzR2MTMuMTY4Yy0xLjUyNS0uNTQ2LTQuNzE2LTEuNTA0LTktMS43OTh6bTIwIDBjLTQuMjgzLjI5My03LjQ3NSAxLjI1Mi05IDEuNzk5di0xMy4xNzFjMS40NTMtLjg2MSAzLjgzLTEuOTQyIDktMi4zMzJ2MTMuNzA0em0tMi0xMC4yMTRjLTIuMDg2LjMxMi00LjQ1MSAxLjAyMy02IDEuNjcydi0xLjA2NGMxLjY2OC0uNjIyIDMuODgxLTEuMzE1IDYtMS42MjZ2MS4wMTh6bTAgMy4wNTVjLTIuMTE5LjMxMS00LjMzMiAxLjAwNC02IDEuNjI2djEuMDY0YzEuNTQ5LS42NDkgMy45MTQtMS4zNjEgNi0xLjY3M3YtMS4wMTd6bTAtMi4wMzFjLTIuMTE5LjMxMS00LjMzMiAxLjAwNC02IDEuNjI2djEuMDY0YzEuNTQ5LS42NDkgMy45MTQtMS4zNjEgNi0xLjY3M3YtMS4wMTd6bTAgNi4wOTNjLTIuMTE5LjMxMS00LjMzMiAxLjAwNC02IDEuNjI2djEuMDY0YzEuNTQ5LS42NDkgMy45MTQtMS4zNjEgNi0xLjY3M3YtMS4wMTd6bTAtMi4wMzFjLTIuMTE5LjMxMS00LjMzMiAxLjAwNC02IDEuNjI2djEuMDY0YzEuNTQ5LS42NDkgMy45MTQtMS4zNjEgNi0xLjY3M3YtMS4wMTd6bS0xNi02LjEwNGMyLjExOS4zMTEgNC4zMzIgMS4wMDQgNiAxLjYyNnYxLjA2NGMtMS41NDktLjY0OS0zLjkxNC0xLjM2MS02LTEuNjcydi0xLjAxOHptMCA1LjA5YzIuMDg2LjMxMiA0LjQ1MSAxLjAyMyA2IDEuNjczdi0xLjA2NGMtMS42NjgtLjYyMi0zLjg4MS0xLjMxNS02LTEuNjI2djEuMDE3em0wLTIuMDMxYzIuMDg2LjMxMiA0LjQ1MSAxLjAyMyA2IDEuNjczdi0xLjA2NGMtMS42NjgtLjYyMi0zLjg4MS0xLjMxNi02LTEuNjI2djEuMDE3em0wIDYuMDkzYzIuMDg2LjMxMiA0LjQ1MSAxLjAyMyA2IDEuNjczdi0xLjA2NGMtMS42NjgtLjYyMi0zLjg4MS0xLjMxNS02LTEuNjI2djEuMDE3em0wLTIuMDMxYzIuMDg2LjMxMiA0LjQ1MSAxLjAyMyA2IDEuNjczdi0xLjA2NGMtMS42NjgtLjYyMi0zLjg4MS0xLjMxNS02LTEuNjI2djEuMDE3eicgLz5cclxuXHQ8L3N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGUgPSAoeyBzaXplID0gMzMsIGNvbG9yID0gJyMwMDAwMDAnIH0pID0+IChcclxuXHQ8c3ZnXHJcblx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHR3aWR0aD17c2l6ZX1cclxuXHRcdGhlaWdodD17c2l6ZX1cclxuXHRcdHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuXHRcdGZpbGw9J25vbmUnXHJcblx0XHRzdHJva2U9e2NvbG9yfVxyXG5cdFx0c3Ryb2tlV2lkdGg9JzInXHJcblx0XHRzdHJva2VMaW5lY2FwPSdzcXVhcmUnXHJcblx0XHRzdHJva2VMaW5lam9pbj0nYXJjcyc+XHJcblx0XHQ8cGF0aCBkPSdNMjAgMTQuNjZWMjBhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDUuMzQnPjwvcGF0aD5cclxuXHRcdDxwb2x5Z29uIHBvaW50cz0nMTggMiAyMiA2IDEyIDE2IDggMTYgOCAxMiAxOCAyJz48L3BvbHlnb24+XHJcblx0PC9zdmc+XHJcbik7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vQWRkJztcclxuZXhwb3J0ICogZnJvbSAnLi9EZWxldGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1VwZGF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ2hldnJvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JlYWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvY2snO1xyXG5leHBvcnQgKiBmcm9tICcuL0Nyb3NzJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmltcG9ydCBRdWVzdGlvbnMgZnJvbSAnLi4vc2VjdGlvbnMvYWJvdXQvUXVlc3Rpb25zJztcclxuaW1wb3J0IEFib3V0VXMgZnJvbSAnLi4vc2VjdGlvbnMvYWJvdXQvQWJvdXRVcyc7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2xheW91dCc7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgID5cclxuICAgICAgPFNlbyB0aXRsZT1cIkFib3V0XCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYWdlIHNjcm9sbGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdnItd2F2ZSB0b3Atc2xpZGVcIj5cclxuICAgICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkhlbGxvIHRoZXJlLDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmhlYWRpbmctYWJvdXRcIj5cclxuICAgICAgICAgICAgV2UgY3JlYXRlZCA8c3BhbiBjbGFzc05hbWU9XCJsb2dvIHRleHQtZGFya1wiPkNvZGVycyBHYWxhPC9zcGFuPiB0b1xyXG4gICAgICAgICAgICBwcm92aWRlIFlvdSBRdWFsaXR5IHJlc291cmNlcyB0byBsZWFybiBGcm9tXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9XCJzY3JvbGwgaWNvblwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9naWZpbWFnZS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDUvc2Nyb2xsLWdpZi0xMC5naWZcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbC1pY29uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxRdWVzdGlvbnMgLz5cclxuICAgICAgICA8QWJvdXRVcyAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tICdyZWFjdC1odG1sLXBhcnNlcic7XHJcblxyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9sYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgZ2V0U3BlY2lhbGl0eSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBzZXJ2aWNlUG9zdCwgc2Nyb2xsVG8gfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgQ2hldnJvbnNVcCB9IGZyb20gJy4uL2Fzc2V0cy9pY29ucyc7XHJcblxyXG4vLyBjb25zdCBTaGFyZUFydGljbGUgPSAoeyBOaWQsIHVybCB9LCBwcm9wcykgPT4ge1xyXG5cclxuXHJcbi8vIFx0ZnVuY3Rpb24gYWN0aW9uVG9nZ2xlKCkge1xyXG4vLyBcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGlvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0cmV0dXJuIChcclxuLy8gXHRcdDw+XHJcbi8vIFx0XHRcdDxkaXYgY2xhc3M9J2FjdGlvbicgb25DbGljaz17YWN0aW9uVG9nZ2xlfT5cclxuLy8gXHRcdFx0XHQ8c3Bhbj5cclxuLy8gXHRcdFx0XHRcdDxpbWdcclxuLy8gXHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcyNXB4JyB9fVxyXG4vLyBcdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTkxOTkvc2hhcmUuc3ZnJ1xyXG4vLyBcdFx0XHRcdFx0XHRhbHQ9JydcclxuLy8gXHRcdFx0XHRcdC8+XHJcbi8vIFx0XHRcdFx0PC9zcGFuPlxyXG4vLyBcdFx0XHRcdDx1bD5cclxuLy8gXHRcdFx0XHRcdDxsaT5cclxuLy8gXHRcdFx0XHRcdFx0PGFcclxuLy8gXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3doYXRzYXBwLWljb24nXHJcbi8vIFx0XHRcdFx0XHRcdFx0cmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdGhyZWY9e2BodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD90ZXh0PUhleSBsb29rIGkganVzdCBmb3VuZCBvdXQgdGhpcyBBbWF6aW5nIGFydGljbGUgb24gXCIke05pZH1cIixDaGVjayBpdCBvdXQgOiAke3VybH1gfVxyXG4vLyBcdFx0XHRcdFx0XHRcdHRhcmdldD0nX2JsYW5rJz5cclxuLy8gXHRcdFx0XHRcdFx0XHRTaGFyZSBvblxyXG4vLyBcdFx0XHRcdFx0XHRcdDxpbWdcclxuLy8gXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMjVweCcsIG1hcmdpbkxlZnQ6ICcyMHB4JyB9fVxyXG4vLyBcdFx0XHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzMwMzE1MC93aGF0c2FwcC1zeW1ib2wtbG9nby5zdmcnXHJcbi8vIFx0XHRcdFx0XHRcdFx0XHRhbHQ9eydzaGFyZSAnICsgTmlkICsgJyBvbiBXaGF0c2FwcCd9XHJcbi8vIFx0XHRcdFx0XHRcdFx0Lz5cclxuLy8gXHRcdFx0XHRcdFx0PC9hPlxyXG4vLyBcdFx0XHRcdFx0PC9saT5cclxuXHJcbi8vIFx0XHRcdFx0XHQ8bGk+XHJcbi8vIFx0XHRcdFx0XHRcdDxhXHJcbi8vIFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtYWlsLWljb24nXHJcbi8vIFx0XHRcdFx0XHRcdFx0aHJlZj17YG1haWx0bzo/U3ViamVjdD0keydBcnRpY2xlIG9uICcgKyBOaWRcclxuLy8gXHRcdFx0XHRcdFx0XHRcdH0mQm9keT1IZXkgbG9vayBpIGp1c3QgZm91bmQgb3V0IHRoaXMgQW1hemluZyBhcnRpY2xlIG9uIFwiJHtOaWR9XCIsQ2hlY2sgaXQgb3V0IDogJHt1cmx9YH1cclxuLy8gXHRcdFx0XHRcdFx0XHR0YXJnZXQ9J190b3AnXHJcbi8vIFx0XHRcdFx0XHRcdFx0cmVsPSdub2ZvbGxvdyc+XHJcbi8vIFx0XHRcdFx0XHRcdFx0U2hhcmUgb25cclxuLy8gXHRcdFx0XHRcdFx0XHQ8aW1nXHJcbi8vIFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzI1cHgnLCBtYXJnaW5MZWZ0OiAnMjBweCcgfX1cclxuLy8gXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nc2hhcmUtaW1hZ2UnXHJcbi8vIFx0XHRcdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMzAzMTYxL2dtYWlsLWljb24tbG9nby5zdmcnXHJcbi8vIFx0XHRcdFx0XHRcdFx0XHRhbHQ9eydzaGFyZSAnICsgTmlkICsgJyBvbiBHbWFpbCd9XHJcbi8vIFx0XHRcdFx0XHRcdFx0Lz5cclxuLy8gXHRcdFx0XHRcdFx0PC9hPlxyXG4vLyBcdFx0XHRcdFx0PC9saT5cclxuLy8gXHRcdFx0XHQ8L3VsPlxyXG4vLyBcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdDwvPlxyXG4vLyBcdCk7XHJcbi8vIH07XHJcblxyXG5jb25zdCBBcnRpY2xlID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgeyBuYW1lIH0gPSBwcm9wcy5tYXRjaC5wYXJhbXM7XHJcblx0Y29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHJcblxyXG5cclxuXHRjb25zdCBnZXRBcnRpY2xlID0gYXN5bmMgKG5hbWUpID0+IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VQb3N0KFxyXG5cdFx0XHRgYXBpL2FydGljbGUvZ2V0YCxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWVcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHRyZXR1cm4gcmVzLmRhdGEuYXJ0aWNsZTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRBcnRpY2xlRWZmZWN0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHRhc3luYyAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFydGljbGUgPSBhd2FpdCBnZXRBcnRpY2xlKG5hbWUucmVwbGFjZSgvLS9nLCAnICcpKTtcclxuXHRcdFx0c2V0QXJ0aWNsZShhcnRpY2xlKTtcclxuXHRcdH0sXHJcblx0XHRbbmFtZV0sXHJcblx0KVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0QXJ0aWNsZUVmZmVjdCgpXHJcblx0fSwgW2dldEFydGljbGVFZmZlY3RdKTtcclxuXHJcblx0Y29uc29sZS5sb2coYXJ0aWNsZSlcclxuXHRjb25zdCBnb1RvVG9wID0gKCkgPT4ge1xyXG5cdFx0c2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpKTtcclxuXHR9O1xyXG5cclxuXHJcblx0Y29uc3QgaHRtbCA9IGFydGljbGUgJiYgYXJ0aWNsZS5jb250ZW50O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlbGVjdGVkLWFydGljbGUnPlxyXG5cclxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT0nZnVsbC12aWV3LWFydGljbGUgcC0yJz5cclxuXHRcdFx0XHRcdDxDb2wgc209ezJ9PnsvKiBBZGRzIEhlcmUgKi99PC9Db2w+XHJcblxyXG5cdFx0XHRcdFx0PENvbCBpZD0ndG9wJyBzdHlsZT17eyBwYWRkaW5nOiAnMHB4JyB9fSBzbT17OH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdxbC1zbm93Jz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZnVsbC1hcnRpY2xlIHFsLWVkaXRvcic+XHJcblx0XHRcdFx0XHRcdFx0XHR7UmVhY3RIdG1sUGFyc2VyKGh0bWwpfVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RvcC1pY29uJz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2hldnJvbnNVcCBzaXplPSc1MCcgY29sb3I9JyNkYzE0M2MnIG9uQ2xpY2s9e2dvVG9Ub3B9IC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblxyXG5cdFx0XHRcdFx0PENvbCBzbT17Mn0+ey8qIEFkZHMgSGVyZSAqL308L0NvbD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdGF1dGg6IHN0YXRlLmF1dGhcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRTcGVjaWFsaXR5IH0pKEFydGljbGUpO1xyXG5cclxuXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbi8vIGNvbnN0IEFydGljbGUgPSAocHJvcHMpID0+IHtcclxuLy8gXHRjb25zdCBuYW1lID0gcHJvcHMubWF0Y2gucGFyYW1zLm5hbWVcclxuLy8gXHRjb25zb2xlLmxvZyhuYW1lLnJlcGxhY2UoLy0vZywgJyAnKSlcclxuLy8gXHRyZXR1cm4gKFxyXG4vLyBcdFx0PGRpdj5cclxuLy8gXHRcdFx0PGRpdj5cclxuLy8gXHRcdFx0XHRsb3JlbTEwMFxyXG4vLyBcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdDwvZGl2PlxyXG4vLyBcdCk7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEFydGljbGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0LCBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyByZWdpc3RlciwgbG9naW4gfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCB7IFNlbyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5jb25zdCBBdXRoID0gKHsgbG9naW4sIHJlZ2lzdGVyLCB0b2tlbiwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBpZiAodG9rZW4pIHJldHVybiA8UmVkaXJlY3QgdG89XCIvbGVhcm5cIiAvPjtcclxuICBjb25zdCBkaW5UZXh0ID0gXCI8Q29kZXJzIEdhbGEvPlwiO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHR5cGUgPT09IFwic2lnbnVwXCIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uIGgxXCIpLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2VkXCIpO1xyXG5cclxuICAgICAgcmVnaXN0ZXIoZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbiBoMVwiKS5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlZFwiKTtcclxuICAgICAgbG9naW4oZGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1jb250YWluZXJcIj5cclxuICAgICAgPFNlbyB0aXRsZT1cIkxvZ0luXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImRpblRhZ1wiPntkaW5UZXh0fTwvaDY+XHJcbiAgICAgICAgICAgIHt0eXBlID09PSBcInNpZ251cFwiID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aDE+U2lnbiBVcDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5IZXksIFdlbGNvbWUgdG8gQ29kZXJzR2FsYSAhITwvcD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPkhleSB0aGVyZSwgV2VsY29tZSBCYWNrICEhPC9wPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZSA9PT0gXCJzaWdudXBcIiA/IFwiZmxleFwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3R5cGUgPT09IFwic2lnbnVwXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VcIj5BZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvZGVSZWZlcnJlZFwiPlJlZmVyIENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb2RlUmVmZXJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBCMThGQzY5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgocHJldikgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlUmVmZmVyZWQ6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgIHt0eXBlID09PSBcInNpZ251cFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVtZW1iZXJNZVwiPkhhdmUgYW4gYWNjb3VudD88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW1lbWJlck1lXCI+Rm9yZ290IFBhc3N3b3JkPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9zaWdudXBcIj5TaWduVXA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ25pblwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgdG9rZW46IHN0YXRlLmF1dGgudG9rZW4sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgbG9naW4sIHJlZ2lzdGVyIH0pKEF1dGgpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZ2V0QWxsQXJ0aWNsZXMgfSBmcm9tIFwiLi4vYWN0aW9ucy9hcnRpY2xlXCI7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBGZWF0dXJlZCBmcm9tICcuLi9zZWN0aW9ucy9ibG9nL0ZlYXR1cmVkJ1xyXG5pbXBvcnQgTGF0ZXN0IGZyb20gJy4uL3NlY3Rpb25zL2Jsb2cvTGF0ZXN0J1xyXG5pbXBvcnQgQWxsIGZyb20gJy4uL3NlY3Rpb25zL2Jsb2cvQWxsJ1xyXG5cclxuXHJcblxyXG5jb25zdCBCbG9nID0gKHsgZ2V0QWxsQXJ0aWNsZXMsIGFydGljbGVzLCBpc0FkbWluIH0pID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFydGljbGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBnZXRBbGxBcnRpY2xlcygpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FydGljbGVzLCBnZXRBbGxBcnRpY2xlc10pXHJcblxyXG4gICAgY29uc29sZS5sb2coYXJ0aWNsZXMpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2X190b3BcIj5cclxuICAgICAgICAgICAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXZfX3RvcF9fbGlua1wiPjwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIHtpc0FkbWluICYmIDxOYXZMaW5rIHRvPVwiL2FydGljbGUvYWRkXCIgcmVsPVwibm9mb2xsb3dcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBibG9jaz5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgQXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OiBcIkRvc2lzXCIgfX0gY2xhc3NOYW1lPVwidGl0bGVfX2gxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIENvZGVyc0dhbGEgPHNwYW4+QmxvZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZV9fc3ViXCI+U29ycnkgOig8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkX19jb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXRlc3QgYXJ0aWNsZT17YXJ0aWNsZXMgJiYgYXJ0aWNsZXNbMF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImdyaWRfX2NvbF9fdGl0bGVcIj5GZWF0dXJlZCBBcnRpY2xlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmV3c2xldHRlckZvcm0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZF9fY29sX190aXRsZVwiPkFsc28gUmVhZC4uLjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8QWxsIGFydGljbGVzPXthcnRpY2xlc30gLz5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgYXJ0aWNsZXM6IHN0YXRlLmFydGljbGUuYXJ0aWNsZXMsXHJcbiAgICBpc0FkbWluOiBzdGF0ZS5hdXRoLmlzQWRtaW4sXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldEFsbEFydGljbGVzIH0pKEJsb2cpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vc2VjdGlvbnMvaG9tZS9IZXJvJztcclxuaW1wb3J0IEhlcm9DYXJkcyBmcm9tICcuLi9zZWN0aW9ucy9ob21lL0hlcm9DYXJkcyc7XHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi4vbGF5b3V0L3ByZWxvYWRlcic7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cdHZhciBob21lQ29udGVudCA9ICdhZHNmJztcclxuXHRyZXR1cm4gKFxyXG5cdFx0PG1vdGlvbi5kaXZcclxuXHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcblx0XHRcdGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG5cdFx0XHRleGl0PXt7IG9wYWNpdHk6IDAgfX0+XHJcblx0XHRcdDxTZW8gdGl0bGU9J0hvbWUnIG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX0gLz5cclxuXHRcdFx0PGRpdiBpZD0nbXlEaXYnPlxyXG5cdFx0XHRcdHtob21lQ29udGVudCA/IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRhaW5lcic+XHJcblx0XHRcdFx0XHRcdDxIZXJvIC8+XHJcblx0XHRcdFx0XHRcdDxIZXJvQ2FyZHMgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8UHJlbG9hZGVyIC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L21vdGlvbi5kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyBTZW8gfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0Lyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL3NlY3Rpb25zL2xlYXJuL0NhcmQnO1xyXG5pbXBvcnQgQWRtaW5CdXR0b25zIGZyb20gJy4uL2xheW91dC9CdXR0b25zL0FkbWluQnV0dG9ucyc7XHJcblxyXG5jb25zdCBMZWFybiA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PG1vdGlvbi5kaXZcclxuXHRcdFx0ZXhpdD17eyBvcGFjaXR5OiAwIH19XHJcblx0XHRcdGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG5cdFx0XHRpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0+XHJcblx0XHRcdDxTZW8gdGl0bGU9J0xlYXJuJyBtZXRhPXtbeyBuYW1lOiAncm9ib3RzJywgY29udGVudDogJ2luZGV4IGZvbGxvdycgfV19IC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbGVhcm4tY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8QWRtaW5CdXR0b25zIHR5cGU9J0FkZCcgdXJsPScvYWRkY2FyZCcgZGF0YT17eyBuYW1lOiAnQ291cnNlcycgfX0gLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcblx0XHRcdFx0XHQ8Q2FyZCAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0PC9tb3Rpb24uZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFybjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbiwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgU2VvIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IENoZXZyb25zVXAsIENyb3NzIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zJztcclxuaW1wb3J0IHsgZ2V0U3BlY2lhbGl0eSwgY2xlYXJBcnRpY2xlLCBzZWxlY3RWaWRlbyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IFZpZGVvUHJldmlldyBmcm9tICcuLi9zZWN0aW9ucy9wcmV2aWV3L1ZpZGVvUHJldmlldyc7XHJcbmltcG9ydCBUb3BpY3NPdmVydmlldyBmcm9tICcuLi9zZWN0aW9ucy9wcmV2aWV3L1RvcGljc092ZXJ2aWV3JztcclxuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xyXG5cclxuY29uc3QgUHJldmlldyA9ICh7XHJcblx0bWF0Y2gsXHJcblx0c2VsZWN0VmlkZW8sXHJcblx0Y2xlYXJBcnRpY2xlLFxyXG5cdGdldFNwZWNpYWxpdHksXHJcblx0c3BlY2lhbGl0eSxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFtjbG9zZSwgc2V0Q2xvc2VdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3QgeyBzcGVjaWFsaXR5TmFtZSB9ID0gbWF0Y2gucGFyYW1zXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjbGVhckFydGljbGUoKTtcclxuXHRcdGdldFNwZWNpYWxpdHkoc3BlY2lhbGl0eU5hbWUpO1xyXG5cdH0sIFtjbGVhckFydGljbGUsIGdldFNwZWNpYWxpdHksIHNwZWNpYWxpdHlOYW1lXSk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNlbGVjdFZpZGVvKHNwZWNpYWxpdHkpO1xyXG5cdH0sIFtzcGVjaWFsaXR5LCBzZWxlY3RWaWRlb10pO1xyXG5cclxuXHRyZXR1cm4gc3BlY2lhbGl0eSA/IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSd0b3BpY3Mtb3ZyLWNvbnQnPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdvdmVybGF5J1xyXG5cdFx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6IGNsb3NlID8gJ25vbmUnIDogJ2Jsb2NrJyB9fVxyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldENsb3NlKCFjbG9zZSl9PjwvZGl2PlxyXG5cdFx0XHQ8U2VvXHJcblx0XHRcdFx0dGl0bGU9J1NlbGVjdCBBcnRpY2xlJ1xyXG5cdFx0XHRcdG1ldGE9e1t7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiAnaW5kZXggZm9sbG93JyB9XX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NwZWNpYWxpdHktY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3BlY2lhbGl0eS1oZWFkaW5nJz5cclxuXHRcdFx0XHRcdDxoMj57c3BlY2lhbGl0eS5uYW1lfTwvaDI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdDxDb2xcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0b3BpYy1vdnItY29udGFpbmVyJ1xyXG5cdFx0XHRcdFx0XHRsZz17NH1cclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiBjbG9zZSA/ICcyNXZoJyA6ICc1MHZoJyB9fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RvcGljcy1vdmVydmlldyc+XHJcblx0XHRcdFx0XHRcdFx0PGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScgfX0gY2xhc3NOYW1lPSdvdmVydmlldyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Ub3BpY3MgT3ZlcnZpZXcgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdBZGQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybD17YC8ke3NwZWNpYWxpdHkubmFtZX0vdG9waWMvYWRkL2B9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e3sgbmFtZTogJ1RvcGljcycgfX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2xvc2UtdG9nZ2xlJz5cclxuXHRcdFx0XHRcdFx0XHRcdHtjbG9zZSA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gb25DbGljaz17KCkgPT4gc2V0Q2xvc2UoIWNsb3NlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENoZXZyb25zVXAgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gb25DbGljaz17KCkgPT4gc2V0Q2xvc2UoIWNsb3NlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENyb3NzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8QWNjb3JkaW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxUb3BpY3NPdmVydmlldyBzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eS5uYW1lfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L0FjY29yZGlvbj5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbCBsPXs4fT5cclxuXHRcdFx0XHRcdFx0PFZpZGVvUHJldmlldyBzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eS5uYW1lfSAvPlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpIDogbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRzcGVjaWFsaXR5OiBzdGF0ZS5zcGVjaWFsaXR5LnNwZWNpYWxpdHksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuXHRnZXRTcGVjaWFsaXR5LFxyXG5cdGNsZWFyQXJ0aWNsZSxcclxuXHRzZWxlY3RWaWRlbyxcclxufSkoUHJldmlldyk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vc2VjdGlvbnMvZWRpdG9yJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XHJcblxyXG5pbXBvcnQgeyBhZGRBcnRpY2xlLCBlZGl0QXJ0aWNsZSwgZ2V0QXJ0aWNsZSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBDaGV2cm9uc1VwIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zJztcclxuXHJcbmNvbnN0IFVwc2VydEFydGljbGUgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCB7IGFkZEFydGljbGUsIHNwZWNpYWxpdGllcywgZWRpdEFydGljbGUsIGdldEFydGljbGUsIHByZXZBcnRpY2xlIH0gPVxyXG5cdFx0cHJvcHM7XHJcblx0Y29uc3QgW2NvbnRlbnQsIHNldGNvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtuYW1lLCBzZXRuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBba2V5d29yZHMsIHNldEFydGljbGVLZXl3b3Jkc10gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2ZlYXR1cmVkLCBzZXRmZWF0dXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3RodW1ibmFpbFVybCwgc2V0dGh1bWJuYWlsVXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHQvLyBjb25zdCBbTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Ly8gY29uc3QgdG9waWNJZCA9IFwiRVJST1JfTkFfRElZT1wiO1xyXG5cdGZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQpIHtcclxuXHRcdGlzQ2xpZW50ICYmXHJcblx0XHRcdHdpbmRvdy5zY3JvbGwoe1xyXG5cdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcclxuXHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRjb25zdCBnb1RvVG9wID0gKCkgPT4ge1xyXG5cdFx0c2Nyb2xsVG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zb2xlLmxvZyhwcm9wcy5tYXRjaC5wYXJhbXMuYXJ0aWNsZUlkKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChwcm9wcy5lZGl0KSB7XHJcblx0XHRcdGdldEFydGljbGUocHJvcHMubWF0Y2gucGFyYW1zLmFydGljbGVJZCk7XHJcblx0XHR9XHJcblx0fSwgW3Byb3BzLCBnZXRBcnRpY2xlXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUVkaXRvciA9IChodG1sKSA9PiB7XHJcblx0XHRzZXRjb250ZW50KGh0bWwpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSBhc3luYyAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc29sZS5sb2cobmFtZSk7XHJcblx0XHRjb25zb2xlLmxvZyhrZXl3b3Jkcyk7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHRuYW1lOiBuYW1lID09PSAnJyA/IHByZXZBcnRpY2xlLm5hbWUgOiBuYW1lLFxyXG5cdFx0XHRrZXl3b3Jkczoga2V5d29yZHMgPT09ICcnID8gcHJldkFydGljbGUua2V5d29yZHMgOiBrZXl3b3JkcyxcclxuXHRcdFx0Y29udGVudDogY29udGVudCA9PT0gJycgPyBwcmV2QXJ0aWNsZS5jb250ZW50IDogY29udGVudCxcclxuXHRcdH07XHJcblx0XHRlZGl0QXJ0aWNsZShkYXRhLCBwcmV2QXJ0aWNsZS5faWQsIHNwZWNpYWxpdGllcy5zcGVjaWFsaXR5Lk5hbWUpO1xyXG5cdFx0dG9hc3QoJ0FydGljbGUgdXBkYXRlZCBzdWNjZXNzZnVsbHknKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVBZGQgPSBhc3luYyAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coeyBjb250ZW50LCBuYW1lLCBrZXl3b3JkcyB9KTtcclxuXHRcdGFkZEFydGljbGUoeyBjb250ZW50LCBuYW1lLCBrZXl3b3JkcywgZmVhdHVyZWQsIHRodW1ibmFpbFVybCB9KTtcclxuXHRcdHRvYXN0KCdBcnRpY2xlIGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Um93IGNsYXNzTmFtZT0nZnVsbC12aWV3LWFydGljbGUgcC0yJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3NoYXJlLWljb25zJz48L2Rpdj5cclxuXHJcblx0XHRcdDxDb2wgc209ezF9PjwvQ29sPlxyXG5cclxuXHRcdFx0PENvbCBpZD0ndG9wJyBzbT17MTB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9JycgaWQ9Jyc+XHJcblx0XHRcdFx0XHRcdFx0e3Byb3BzLmVkaXRcclxuXHRcdFx0XHRcdFx0XHRcdD8gYFVwZGF0ZSBBcnRpY2xlIC0gJHtwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5uYW1lfWBcclxuXHRcdFx0XHRcdFx0XHRcdDogJ0FkZCBhIEFydGljbGUnfVxyXG5cdFx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG5cdFx0XHRcdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J25hbWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdBcnRpY2xlIE5hbWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5uYW1lIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0ndGh1bWJuYWlsVXJsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQXJ0aWNsZSBUaHVtYm5haWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS50aHVtYm5haWxVcmwgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldHRodW1ibmFpbFVybChlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdrZXl3b3JkcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0FydGljbGUgRGVzY3JpcHRpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5rZXl3b3JkcyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXJ0aWNsZUtleXdvcmRzKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdmZWF0dXJlZCc+SXNGZWF0dXJlZCAmbmJzcDsgPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVkaXQgPyBwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5mZWF0dXJlZCA6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRmZWF0dXJlZCghZmVhdHVyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjaGVja2JveCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2ZlYXR1cmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cHJvcHMuZWRpdCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5jb250ZW50ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEVkaXRvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0b3I9e2hhbmRsZUVkaXRvcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwcmV2QXJ0aWNsZSAmJiBwcmV2QXJ0aWNsZS5jb250ZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxFZGl0b3IgaGFuZGxlRWRpdG9yPXtoYW5kbGVFZGl0b3J9IGRlZmF1bHRWYWx1ZT0nJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FkZC1hcnRpY2xlLWJ1dHRvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0J1dHRvbj17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMuZWRpdCA/IGhhbmRsZUVkaXQoZSkgOiBoYW5kbGVBZGQoZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Byb3BzLmVkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9wLWljb24nPlxyXG5cdFx0XHRcdFx0PENoZXZyb25zVXAgc2l6ZT0nNTAnIGNvbG9yPScjZGMxNDNjJyBvbkNsaWNrPXtnb1RvVG9wfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0NvbD5cclxuXHJcblx0XHRcdDxDb2wgc209ezF9PjwvQ29sPlxyXG5cdFx0PC9Sb3c+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRzcGVjaWFsaXRpZXM6IHN0YXRlLnNwZWNpYWxpdHksXHJcblx0cHJldkFydGljbGU6IHN0YXRlLmFydGljbGUuc2VsZWN0ZWRBcnRpY2xlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcblx0YWRkQXJ0aWNsZSxcclxuXHRlZGl0QXJ0aWNsZSxcclxuXHRnZXRBcnRpY2xlLFxyXG59KShVcHNlcnRBcnRpY2xlKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XHJcbmltcG9ydCB7IHNlcnZpY2VHZXQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgYWRkU3BlY2lhbGl0eSwgZWRpdFNwZWNpYWxpdHkgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9zZWN0aW9ucy9lZGl0b3InO1xyXG5cclxuY29uc3QgVXBzZXJ0Q2FyZCA9ICh7IGFkZFNwZWNpYWxpdHksIGVkaXRTcGVjaWFsaXR5LCBlZGl0LCBtYXRjaCB9KSA9PiB7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRpZiAoZWRpdCkge1xyXG5cdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2VHZXQoXHJcblx0XHRcdFx0XHRgYXBpL3NwZWNpYWxpdHkvZ2V0LyR7bWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lfWBcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0Y29uc3QgeyBuYW1lLCBpbWFnZVVybCwgY29udGVudCwgX2lkIH0gPSByZXMuZGF0YS5zcGVjaWFsaXR5O1xyXG5cdFx0XHRcdHNldERhdGEoeyBuYW1lLCBpbWFnZVVybCwgY29udGVudCwgX2lkIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0ZmV0Y2hEYXRhKCk7XHJcblx0fSwgW2VkaXQsIG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZV0pO1xyXG5cdGNvbnNvbGUubG9nKGVkaXQsIGRhdGEpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0c2V0U3RhdGUoe1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0W2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVFZGl0b3IgPSAoaHRtbCkgPT4ge1xyXG5cdFx0c2V0U3RhdGUoe1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0Y29udGVudDogaHRtbCxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAoZWRpdCkgZWRpdFNwZWNpYWxpdHkoc3RhdGUsIGRhdGEuX2lkKTtcclxuXHRcdGVsc2UgYWRkU3BlY2lhbGl0eShzdGF0ZSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgbXQtNCc+XHJcblx0XHRcdDxmb3JtIGNsYXNzTmFtZT0nbXQtNSc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdGlkPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nU3BlY2lhbGl0eSBOYW1lJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtlZGl0ID8gZGF0YSAmJiBkYXRhLm5hbWUgOiAnJ31cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRpZD0naW1hZ2VVcmwnXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdJbWFnZSBVUkwnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2VkaXQgPyBkYXRhICYmIGRhdGEuaW1hZ2VVcmwgOiAnJ31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdHshZWRpdCAmJiAoXHJcblx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdhbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0ltYWdlIGFsdCB0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdxbC1zbm93Jz5cclxuXHRcdFx0XHRcdFx0e2VkaXQgPyAoXHJcblx0XHRcdFx0XHRcdFx0ZGF0YSAmJiBkYXRhLmNvbnRlbnQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8RWRpdG9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZGF0YSAmJiBkYXRhLmNvbnRlbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncWwtZWRpdG9yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0b3I9e2hhbmRsZUVkaXRvcn1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0KSA6IG51bGxcclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8RWRpdG9yXHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3FsLWVkaXRvcidcclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXRvcj17aGFuZGxlRWRpdG9yfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWRkLWFydGljbGUtYnV0dG9uJz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBoYW5kbGVyPXtoYW5kbGVTdWJtaXR9IGlzQnV0dG9uPXt0cnVlfSB0eXBlPSdzdWJtaXQnPlxyXG5cdFx0XHRcdFx0XHRcdHtlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ31cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBhZGRTcGVjaWFsaXR5LCBlZGl0U3BlY2lhbGl0eSB9KShVcHNlcnRDYXJkKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTG9ja0J1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGFkZFRvcGljLCBlZGl0VG9waWMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5jb25zdCBVcHNlcnRUb3BpYyA9ICh7XHJcblx0c3BlY2lhbGl0eSxcclxuXHRtYXRjaCxcclxuXHRhZGRUb3BpYyxcclxuXHRlZGl0VG9waWMsXHJcblx0bG9jYXRpb24sXHJcblx0ZWRpdCxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHsgbG9ja2VkOiBmYWxzZSB9KTtcclxuXHRjb25zb2xlLmxvZyhsb2NhdGlvbik7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldERhdGEoe1xyXG5cdFx0XHRsb2NrZWQ6IGxvY2F0aW9uLnByb3BzICYmIGxvY2F0aW9uLnByb3BzLmlzTG9ja2VkLFxyXG5cdFx0XHRuYW1lOiBsb2NhdGlvbi5wcm9wcyAmJiBsb2NhdGlvbi5wcm9wcy5uYW1lLFxyXG5cdFx0fSk7XHJcblx0fSwgW2xvY2F0aW9uLnByb3BzXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAoIWVkaXQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0eyAuLi5kYXRhLCBzcGVjaWFsaXR5SWQ6IHNwZWNpYWxpdHkuX2lkIH0sXHJcblx0XHRcdFx0bWF0Y2gucGFyYW1zLnNwZWNpYWxpdHlOYW1lXHJcblx0XHRcdCk7XHJcblx0XHRcdGFkZFRvcGljKFxyXG5cdFx0XHRcdHsgLi4uZGF0YSwgc3BlY2lhbGl0eUlkOiBzcGVjaWFsaXR5Ll9pZCB9LFxyXG5cdFx0XHRcdG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0b2FzdCgnVG9waWMgQWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlZGl0VG9waWMoZGF0YSwgbWF0Y2gucGFyYW1zLnRvcGljSWQsIG1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5TmFtZSk7XHJcblx0XHRcdHRvYXN0KCdVcGRhdGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSd1cHNlcnQtY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Vwc2VydC10b3BpYy1mb3JtJz5cclxuXHRcdFx0XHQ8aDM+e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfSBUb3BpYzwvaDM+XHJcblx0XHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0taW5wdXQnPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2xvY2F0aW9uLnByb3BzICYmIGxvY2F0aW9uLnByb3BzLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXREYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KSk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1idXR0b24nPlxyXG5cdFx0XHRcdFx0XHQ8TG9ja0J1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGlzTG9ja2VkPXtkYXRhLmxvY2tlZH1cclxuXHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXREYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2NrZWQ6ICFwcmV2LmxvY2tlZCB9KSk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBpc0J1dHRvbj17dHJ1ZX0gaGFuZGxlcj17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFx0e2VkaXQgPyAnVXBkYXRlJyA6ICdBZGQnfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0c3BlY2lhbGl0eTogc3RhdGUuc3BlY2lhbGl0eS5zcGVjaWFsaXR5LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGFkZFRvcGljLCBlZGl0VG9waWMgfSkoVXBzZXJ0VG9waWMpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2xheW91dCc7XHJcbmltcG9ydCB7IGFkZFZpZGVvLCBlZGl0VmlkZW8sIGdldFZpZGVvIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBVcHNlcnRWaWRlbyA9ICh7XHJcblx0ZWRpdCxcclxuXHRtYXRjaCxcclxuXHRhZGRWaWRlbyxcclxuXHRlZGl0VmlkZW8sXHJcblx0Z2V0VmlkZW8sXHJcblx0c3BlY2lhbGl0aWVzLFxyXG5cdHByZXZWaWRlbyxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKHByZXZWaWRlbyA/IHByZXZWaWRlby5uYW1lIDogJycpO1xyXG5cdGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXHJcblx0XHRwcmV2VmlkZW8gPyBwcmV2VmlkZW8uZGVzY3JpcHRpb24gOiAnJ1xyXG5cdCk7XHJcblx0Y29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKHByZXZWaWRlbyA/IHByZXZWaWRlby51cmwgOiAnJyk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUFkZCA9IGFzeW5jIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRhd2FpdCBhZGRWaWRlbyhcclxuXHRcdFx0eyBuYW1lLCBkZXNjcmlwdGlvbiwgdXJsIH0sXHJcblx0XHRcdG1hdGNoLnBhcmFtcy50b3BpY0lkLFxyXG5cdFx0XHRzcGVjaWFsaXRpZXMuc3BlY2lhbGl0eS5uYW1lXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSBhc3luYyAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0YXdhaXQgZWRpdFZpZGVvKFxyXG5cdFx0XHR7IG5hbWUsIGRlc2NyaXB0aW9uLCB1cmwgfSxcclxuXHRcdFx0cHJldlZpZGVvLl9pZCxcclxuXHRcdFx0c3BlY2lhbGl0aWVzLnNwZWNpYWxpdHkubmFtZVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3Vwc2VydC1jb250YWluZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXBzZXJ0LXZpZGVvLWZvcm0nPlxyXG5cdFx0XHRcdDxoMz57ZWRpdCA/ICdVcGRhdGUnIDogJ0FkZCAnfVZpZGVvPC9oMz5cclxuXHRcdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPk5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlVybDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3VybH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzQnV0dG9uPXt0cnVlfVxyXG5cdFx0XHRcdFx0aGFuZGxlcj17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0ZWRpdCA/IGhhbmRsZUVkaXQoZSkgOiBoYW5kbGVBZGQoZSk7XHJcblx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdHtlZGl0ID8gJ1VwZGF0ZScgOiAnQWRkJ31cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cdHNwZWNpYWxpdGllczogc3RhdGUuc3BlY2lhbGl0eSxcclxuXHRwcmV2VmlkZW86IHN0YXRlLnZpZGVvLnNlbGVjdGVkVmlkZW8sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuXHRhZGRWaWRlbyxcclxuXHRlZGl0VmlkZW8sXHJcblx0Z2V0VmlkZW8sXHJcbn0pKFVwc2VydFZpZGVvKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgUHJpdmF0ZVJvdXRlID0gKHtcclxuICBjb21wb25lbnQ6IENvbXBvbmVudCxcclxuICBhdXRoOiB7IGlzQXV0aGVudGljYXRlZCB9LFxyXG4gIC4uLnJlc3RcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um91dGVcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAgIHJlbmRlcj17KHByb3BzKSA9PlxyXG4gICAgICAgICFpc0F1dGhlbnRpY2F0ZWQgPyA8UmVkaXJlY3QgdG89XCIvbG9naW5cIiAvPiA6IDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gICAgICB9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgYXV0aDogc3RhdGUuYXV0aCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJpdmF0ZVJvdXRlKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTZW8gPSAoe1xyXG5cdGRlc2NyaXB0aW9uLFxyXG5cdHRpdGxlID0gJyAnLFxyXG5cdGxhbmcgPSAnZW4nLFxyXG5cdG1ldGEgPSBbXSxcclxuXHRyaWNocmVzdWx0LFxyXG59KSA9PiB7XHJcblx0Ly8gY29uc3QgeyBmYXZpY29uIH0gPSAnJztcclxuXHJcblx0Y29uc3QgbWV0YVRpdGxlID0gYENvZGVyc0dhbGEgfCAke3RpdGxlfWA7XHJcblx0Y29uc3QgbWV0YURlc2NyaXB0aW9uID1cclxuXHRcdFwiQ29kZXJzR2FsYSdzIG9ubHkgcHVycG9zZSBpcyB0byBwcm92aWRlIGNvZGluZyBrbm93bGVkZ2UsIHN1Y2ggYXMgV2ViIGRldmVsb3BtZW50IHRoYXQgaW5jbHVkZXMgSFRNTCBDU1MgSlMgTm9kZSBSZWFjdCBNb25nb0RiLCBNYWNoaW5lIExlYXJuaW5nLCBEYXRhIFN0cnVjdHVyZXMgYW5kIEFsZ29yaXRobVwiIHx8XHJcblx0XHRkZXNjcmlwdGlvbjtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxIZWxtZXRcclxuXHRcdFx0dGl0bGU9e21ldGFUaXRsZX1cclxuXHRcdFx0aHRtbEF0dHJpYnV0ZXM9e3sgbGFuZyB9fVxyXG5cdFx0XHRtZXRhPXtbXHJcblx0XHRcdFx0eyBuYW1lOiBgZGVzY3JpcHRpb25gLCBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24gfSxcclxuXHRcdFx0XHR7IHByb3BlcnR5OiBgb2c6dGl0bGVgLCBjb250ZW50OiBtZXRhVGl0bGUgfSxcclxuXHRcdFx0XHR7IHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLCBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24gfSxcclxuXHRcdFx0XHR7IHByb3BlcnR5OiBgb2c6dHlwZWAsIGNvbnRlbnQ6IGB3ZWJzaXRlYCB9LFxyXG5cdFx0XHRcdHsgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsIGNvbnRlbnQ6IGBzdW1tYXJ5YCB9LFxyXG5cdFx0XHRcdHsgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLCBjb250ZW50OiBtZXRhVGl0bGUgfSxcclxuXHRcdFx0XHR7IG5hbWU6IGB0d2l0dGVyOmRlc2NyaXB0aW9uYCwgY29udGVudDogbWV0YURlc2NyaXB0aW9uIH0sXHJcblx0XHRcdF0uY29uY2F0KG1ldGEpfVxyXG5cdFx0XHRsaW5rPXtbeyByZWw6ICdpY29uJywgdHlwZTogJ2ltYWdlL3BuZycsIGhyZWY6ICdmYXZpY29uJyB9XX1cclxuXHRcdFx0c2NyaXB0PXtbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dHlwZTogJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxyXG5cdFx0XHRcdFx0aW5uZXJIVE1MOiBKU09OLnN0cmluZ2lmeShyaWNocmVzdWx0KSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdfVxyXG5cdFx0Lz5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTRVJWSUNFX1VSTCB9IGZyb20gJy4vJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlUG9zdCA9IGFzeW5jIChwYXRoLCBwYXlsb2FkLCBoZWFkZXJzID0gbnVsbCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtTRVJWSUNFX1VSTH0vJHtwYXRofWAsIHBheWxvYWQsIHtcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZUdldCA9IGFzeW5jIChwYXRoLCBwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7U0VSVklDRV9VUkx9LyR7cGF0aH1gLCBwYXlsb2FkKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBTRVJWSUNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL1ByaXZhdGVSb3V0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2VvJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXRBdXRoVG9rZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2FwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QXV0aFRva2VuID0gKHRva2VuKSA9PiB7XHJcbiAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gIGlmICh0b2tlbikge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBKV1QgJHt0b2tlbn1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZWxldGUgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzY3JvbGxUbyA9IChlbGVtZW50KSA9PiB7XHJcblx0aXNDbGllbnQgJiZcclxuXHRcdHdpbmRvdy5zY3JvbGwoe1xyXG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXHJcblx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXHJcblx0XHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0NsaWVudCA9XHJcblx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ID8gdHJ1ZSA6IGZhbHNlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtdGlwcHknO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERlbGV0ZSwgVXBkYXRlLCBBZGQgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xyXG5cclxuY29uc3QgVG9vbHRpcFdyYXBwZXIgPSAoeyB0aXRsZSwgcG9zaXRpb24sIGNoaWxkcmVuIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRvb2x0aXAgdGl0bGU9e3RpdGxlfSBwb3NpdGlvbj17cG9zaXRpb259IHRyaWdnZXI9J21vdXNlZW50ZXInPlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L1Rvb2x0aXA+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IEFkbWluQnV0dG9ucyA9ICh7IHR5cGUsIHVybCwgaGFuZGxlciwgaXNBZG1pbiwgZGF0YSA9IHt9IH0pID0+XHJcblx0aXNBZG1pbiA/IChcclxuXHRcdDxUb29sdGlwV3JhcHBlciB0aXRsZT17YCR7dHlwZX0gXCIke2RhdGEubmFtZX1cImB9IHBvc2l0aW9uPXsndG9wJ30+XHJcblx0XHRcdDxBZG1pbkJ1dHRvbnNXcmFwcGVyXHJcblx0XHRcdFx0dHlwZT17dHlwZX1cclxuXHRcdFx0XHR1cmw9e3VybH1cclxuXHRcdFx0XHRoYW5kbGVyPXtoYW5kbGVyfVxyXG5cdFx0XHRcdGRhdGE9e2RhdGF9XHJcblx0XHRcdC8+XHJcblx0XHQ8L1Rvb2x0aXBXcmFwcGVyPlxyXG5cdCkgOlxyXG5cdFx0PEFkbWluQnV0dG9uc1dyYXBwZXJcclxuXHRcdFx0dHlwZT17XCJOb25lXCJ9XHJcblx0XHRcdHVybD17dXJsfVxyXG5cdFx0XHRoYW5kbGVyPXtoYW5kbGVyfVxyXG5cdFx0XHRkYXRhPXtkYXRhfVxyXG5cdFx0Lz5cclxuXHQ7XHJcblxyXG5jb25zdCBBZG1pbkJ1dHRvbnNXcmFwcGVyID0gKHsgdHlwZSwgdXJsLCBoYW5kbGVyLCBkYXRhIH0pID0+IHtcclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ0FkZCc6XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PExpbmsgdG89e3VybH0+XHJcblx0XHRcdFx0XHQ8QWRkIHNpemU9JzIwJyBjb2xvcj0nIzAwMCcgLz5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0Y2FzZSAnRWRpdCc6XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdHRvPXt7XHJcblx0XHRcdFx0XHRcdHBhdGhuYW1lOiB1cmwsXHJcblx0XHRcdFx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0XHRcdFx0bmFtZTogZGF0YS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdGlzTG9ja2VkOiBkYXRhLmxvY2tlZCxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0PFVwZGF0ZSBzaXplPScyMCcgY29sb3I9JyMwMDAnIC8+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdGNhc2UgJ0RlbGV0ZSc6XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIsIG91dGxpbmU6IFwibm9uZVwiIH19XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGhhbmRsZXIoZGF0YSk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0LXRvcGljLW1vZGFsLXRvZ2dsZSc+XHJcblx0XHRcdFx0XHQ8RGVsZXRlIHNpemU9JzIwJyBjb2xvcj0nY3JpbXNvbicgLz5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0KTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gPGJ1dHRvbiBocmVmPVwiI1wiXHJcblx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIsIG91dGxpbmU6IFwibm9uZVwiLCB9fVxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nZWRpdC10b3BpYy1tb2RhbC10b2dnbGUnPlxyXG5cdFx0XHRcdDxEZWxldGUgc2l6ZT0nMCcgY29sb3I9JycgLz5cclxuXHRcdFx0PC9idXR0b24+O1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRpc0FkbWluOiBzdGF0ZS5hdXRoLmlzQWRtaW4sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEFkbWluQnV0dG9ucyk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTG9jaywgUmVhZCwgVW5sb2NrIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcclxuXHJcbmNvbnN0IElubmVyRGl2ID0gKHsgaGFuZGxlciwgY2hpbGRyZW4sIGRhcmssIGJnIH0pID0+XHJcblx0Y2hpbGRyZW4gPyAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke2RhcmsgJiYgJ2RhcmsnfWB9XHJcblx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCR7YmcgJiYgJ2JnJ31gIH19XHJcblx0XHRcdG9uQ2xpY2s9e2hhbmRsZXIgPyBoYW5kbGVyIDogKGUpID0+IGNvbnNvbGUubG9nKGUsIGhhbmRsZXIpfT5cclxuXHRcdFx0PHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cclxuXHRcdFx0PHN2Zz5cclxuXHRcdFx0XHQ8cG9seWxpbmVcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nbzEnXHJcblx0XHRcdFx0XHRwb2ludHM9JzAgMCwgMTUwIDAsIDE1MCA1NSwgMCA1NSwgMCAwJz48L3BvbHlsaW5lPlxyXG5cdFx0XHRcdDxwb2x5bGluZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdvMidcclxuXHRcdFx0XHRcdHBvaW50cz0nMCAwLCAxNTAgMCwgMTUwIDU1LCAwIDU1LCAwIDAnPjwvcG9seWxpbmU+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0PC9kaXY+XHJcblx0KSA6IChcclxuXHRcdDw+XHJcblx0XHRcdHsnICAgJ31cclxuXHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0PFJlYWQgc2l6ZT17MTl9IC8+XHJcblx0XHRcdDwvc3Bhbj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIHVybCwgZGFyaywgYmcsIGlzQnV0dG9uLCBoYW5kbGVyIH0pID0+IHtcclxuXHRyZXR1cm4gdHlwZW9mIGlzQnV0dG9uID09ICd1bmRlZmluZWQnID8gKFxyXG5cdFx0PExpbmsgdG89e3VybCAmJiB1cmx9PlxyXG5cdFx0XHQ8SW5uZXJEaXYgZGFyaz17ZGFya30gYmc9e2JnfT5cclxuXHRcdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdDwvSW5uZXJEaXY+XHJcblx0XHQ8L0xpbms+XHJcblx0KSA6IChcclxuXHRcdDxJbm5lckRpdiBkYXJrPXtkYXJrfSBiZz17Ymd9IGhhbmRsZXI9e2hhbmRsZXJ9PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L0lubmVyRGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTG9ja0J1dHRvbiA9ICh7IGlzTG9ja2VkLCBoYW5kbGVyIH0pID0+IHtcclxuXHRyZXR1cm4gPHNwYW4gb25DbGljaz17aGFuZGxlcn0+e2lzTG9ja2VkID8gPExvY2sgLz4gOiA8VW5sb2NrIC8+fTwvc3Bhbj47XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vQWRtaW5CdXR0b25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9Vc2VyQnV0dG9ucyc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZvb3RlclNvY2lhbE1lZGlhID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYVwiPlxyXG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2dtYWlsLmNvbVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMzAzMTYxL2dtYWlsLWljb24tbG9nby5zdmdcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTgzNjA4L3R3aXR0ZXIuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vYmloYW5pLnByaXlhXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzExMTE5OS9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb21cIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzIxNzc1My9naXRodWIuc3ZnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImdpdGh1YlwiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Rm9vdGVyTWVzc2FnZSgpXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgc2V0Rm9vdGVyTWVzc2FnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TWVzc2FnZSgnRW50ZXIgWW91ciBFbWFpbCBoZXJlIHRvIHN1YnNjcmliZSBmb3IgTmV3c2xldHRlcicpIH1cclxuICAgICwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250XCI+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtY29sXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5Db2RlcnMgR2FsYTwvc3Bhbj5cclxuICAgICAgICAgICAgPEZvb3RlclNvY2lhbE1lZGlhIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJpZ2h0cy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgJmNvcHk7IDIwMjAgQ29kZXJzIEdhbGEgLCBBbGwgUmlnaHRzIFJlc2VydmVkXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb2xcIj5cclxuICAgICAgICAgICAgPGgxPk91ciBOZXdzbGV0dGVyPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCIgZm9ybSBuZXdzbGV0dGVyLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRiXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0blwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEFjY29yZGlvbiwgQnV0dG9uLCBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldERpc3BsYXlNb2RlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91aSc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG4vLyA9LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT1cclxuaW1wb3J0IFNpZ25lZE91dExpbmtzIGZyb20gJy4vU2lnbmVkT3V0TGlua3MnO1xyXG5pbXBvcnQgU2lnbmVkSW5MaW5rcyBmcm9tICcuL1NpZ25lZEluTGlua3MnO1xyXG4vLyA9LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT0tPS09LT1cclxuXHJcbi8vIGxvZ28gaW1wb3J0c1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2NnVHJhbnNwYXJlbnQuUE5HJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGF1dGgsIHVpLCBzZXREaXNwbGF5TW9kZSB9KSA9PiB7XHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGNvbnN0IFtuYXZiYXJFeHBhbmRlZCwgc2V0bmF2YmFyRXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtzd2l0Y2hlZCwgc2V0c3dpdGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aXNDbGllbnQgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQodWkuZGlzcGxheU1vZGUpO1xyXG5cdFx0Y29uc29sZS5sb2codWkuZGlzcGxheU1vZGUpO1xyXG5cdFx0aWYgKHVpLmRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcclxuXHRcdFx0c2V0c3dpdGNoZWQodHJ1ZSk7XHJcblx0XHR9XHJcblx0fSwgW3NldHN3aXRjaGVkLCB1aS5kaXNwbGF5TW9kZV0pO1xyXG5cclxuXHQvLyBHZXR0aW5nIHRoZSBjdXJyZW50IG1vZGUgZnJvbSBsb2NhbCBzdG9yYWdlXHJcblx0aWYgKGlzQ2xpZW50KSB7XHJcblx0XHRsZXQgbW9kZSA9ICdsaWdodCc7XHJcblxyXG5cdFx0bW9kZSA9IGlzQ2xpZW50ID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKSA6ICdsaWdodCc7XHJcblxyXG5cdFx0aWYgKG1vZGUgPT09ICdkYXJrJykge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vXHJcblxyXG5cdC8vIGNvbnN0IGxpbmtzID0gPFNpZ25lZE91dExpbmtzIC8+O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J25hdmlnYXRpb24td3JhcCBiZy1saWdodCBzdGFydC1oZWFkZXIgc3RhcnQtc3R5bGUnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8QWNjb3JkaW9uXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e1xyXG5cdFx0XHRcdFx0XHRpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjcgPyBudWxsIDogJ2Ryb3Bkb3duLWFjY29yZGlvbidcclxuXHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHQ8Q29sPlxyXG5cdFx0XHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89Jy8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgPj0gNzY3XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnMnJlbSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcxLjJyZW0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbG9nbydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e0xvZ299XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PScnXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdzd2l0Y2gnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXREaXNwbGF5TW9kZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldHN3aXRjaGVkKCFzd2l0Y2hlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHN3aXRjaCBmbG9hdC1yaWdodCAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaGVkID8gJ3N3aXRjaGVkJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVpLmRpc3BsYXlNb2RlID09PSAnZGFyaycgPyAnIzExMScgOiAnI2YxZjFmMScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0nY2lyY2xlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21vZGUtaWNvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMjBweCcgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVpLmRpc3BsYXlNb2RlID09PSAnZGFyaydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzMxNTgvbW9vbi5zdmcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy84MzcyNi9zdW4uc3ZnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PScnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwb2ludHMtYm94ICc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwb2ludHMtdGV4dCc+IFBvaW50cyA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nQ0cgUG9pbnRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy83MTUvNzE1NzA5LnN2ZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwb2ludHMtaW1nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+IHthdXRoLnVzZXIgJiYgYXV0aC51c2VyLnBvaW50c30gPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaWduZWQtbGlua3MnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7YXV0aC5pc0F1dGhlbnRpY2F0ZWQgJiYgYXV0aC5pc0F1dGhlbnRpY2F0ZWQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTaWduZWRJbkxpbmtzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFNpZ25lZE91dExpbmtzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8QWNjb3JkaW9uLlRvZ2dsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1idG4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRuYXZiYXJFeHBhbmRlZCghbmF2YmFyRXhwYW5kZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcz17QnV0dG9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdsaW5rJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudEtleT0nNSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNuYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtY29udHJvbHM9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17bmF2YmFyRXhwYW5kZWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nVG9nZ2xlIG5hdmlnYXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZXItaWNvbic+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Ub2dnbGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWNjb3JkaW9uLkNvbGxhcHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nICdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50S2V5PSc1Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7YXV0aC51c2VyICYmIGF1dGgudXNlci51c2VySWQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2lnbmVkSW5MaW5rcyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2lnbmVkT3V0TGlua3MgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG5cdFx0XHRcdFx0XHRcdDwvbmF2PlxyXG5cdFx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDwvUm93PlxyXG5cdFx0XHRcdDwvQWNjb3JkaW9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbi8vICAgYXV0aDogc3RhdGUuYXV0aCxcclxuLy8gfSk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0YXV0aDogc3RhdGUuYXV0aCxcclxuXHRcdHVpOiBzdGF0ZS51aSxcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgc2V0RGlzcGxheU1vZGUgfSkoTmF2YmFyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgU2lnbmVkSW5MaW5rcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT0nbmF2YmFyLW5hdiBtbC1hdXRvIHB5LTQgcHktbWQtMCc+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNCc+XHJcblx0XHRcdFx0XHQ8TmF2TGluayB0bz0nL2hvbWUnIGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG5cdFx0XHRcdFx0XHRIb21lXHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00Jz5cclxuXHRcdFx0XHRcdDxOYXZMaW5rIHRvPScvYWJvdXQnIGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG5cdFx0XHRcdFx0XHRBYm91dFxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNCc+XHJcblx0XHRcdFx0XHQ8TmF2TGlua1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1saW5rICdcclxuXHRcdFx0XHRcdFx0dG89Jy9sZWFybidcclxuXHRcdFx0XHRcdFx0cm9sZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSdmYWxzZSc+XHJcblx0XHRcdFx0XHRcdExlYXJuXHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+PC9kaXY+XHJcblx0XHRcdFx0PC9saT5cclxuXHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNCc+XHJcblx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGhyZWY9Jy8nXHJcblx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbGluayc+XHJcblx0XHRcdFx0XHRcdExvZ091dFxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmVkSW5MaW5rcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgU2lnbmVkT3V0TGlua3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG8gcHktNCBweS1tZC0wXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTRcIj5cclxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcGwtNCBwbC1tZC0wIG1sLTAgbWwtbWQtNFwiPlxyXG4gICAgICAgICAgPE5hdkxpbmsgdG89XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBsLTQgcGwtbWQtMCBtbC0wIG1sLW1kLTRcIj5cclxuICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgIHRvPVwiL2xlYXJuXCJcclxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExlYXJuXHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj48L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC00IHBsLW1kLTAgbWwtMCBtbC1tZC00XCI+XHJcbiAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICB0bz1cIi9sb2dpblwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj48L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25lZE91dExpbmtzO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL0J1dHRvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Zvb3Rlcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1zZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWJveFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlcjFcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyMlwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXIzXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXIiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7IGFydGljbGVzOiBbXSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJ0aWNsZVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9BUlRJQ0xFJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0b3BpY3M6IHBheWxvYWQsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSAnR0VUX0FSVElDTEUnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlbGVjdGVkQXJ0aWNsZTogcGF5bG9hZC5hcnRpY2xlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnR0VUX0FMTF9BUlRJQ0xFUyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YXJ0aWNsZXM6IHBheWxvYWQuYXJ0aWNsZXMsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdDTEVBUl9BUlRJQ0xFJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWxlY3RlZEFydGljbGU6IHt9LFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ0FERF9BUlRJQ0xFX0VSUk9SJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0TE9HSU5fU1VDQ0VTUyxcclxuXHRMT0dJTl9GQUlMLFxyXG5cdFJFR0lTVEVSX1NVQ0NFU1MsXHJcblx0UkVHSVNURVJfRkFJTCxcclxuXHRVU0VSX0xPQURFRCxcclxuXHRBVVRIX0VSUk9SLFxyXG5cdExPR09VVCxcclxuXHRTRU5EX1JFU0VUX0VNQUlMLFxyXG59IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHRva2VuOiBpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcclxuXHRpc0F1dGhlbnRpY2F0ZWQ6IG51bGwsXHJcblx0bG9hZGluZzogZmFsc2UsXHJcblx0dXNlcjogbnVsbCxcclxuXHRpc0FkbWluOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgVVNFUl9MT0FERUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dXNlcjogcGF5bG9hZCxcclxuXHRcdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXHJcblx0XHRcdFx0aXNBZG1pbjogcGF5bG9hZC5yb2xlID09PSAwID8gZmFsc2UgOiB0cnVlLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBSRUdJU1RFUl9TVUNDRVNTOlxyXG5cdFx0Y2FzZSBMT0dJTl9TVUNDRVNTOlxyXG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBwYXlsb2FkLnRva2VuKTtcclxuXHRcdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHBheWxvYWQudXNlcklkKTtcclxuXHRcdFx0Y29uc29sZS5sb2cocGF5bG9hZCk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdC4uLnBheWxvYWQsXHJcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiB0cnVlLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBSRUdJU1RFUl9GQUlMOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dJTl9GQUlMOlxyXG5cdFx0Y2FzZSBBVVRIX0VSUk9SOlxyXG5cdFx0XHRpc0NsaWVudCAmJiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuXHRcdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJZCcpO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRva2VuOiBudWxsLFxyXG5cdFx0XHRcdGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0dXNlcklkOiBudWxsLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBMT0dPVVQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dG9rZW46IG51bGwsXHJcblx0XHRcdFx0aXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgU0VORF9SRVNFVF9FTUFJTDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ1NFVF9BVVRIX0xPQURFUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgc3BlY2lhbGl0eSBmcm9tICcuL3NwZWNpYWxpdHknO1xyXG5pbXBvcnQgdG9waWMgZnJvbSAnLi90b3BpYyc7XHJcbmltcG9ydCBhcnRpY2xlIGZyb20gJy4vYXJ0aWNsZSc7XHJcbmltcG9ydCB1aSBmcm9tICcuL3VpJztcclxuaW1wb3J0IHZpZGVvIGZyb20gJy4vdmlkZW8nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuXHRhdXRoLFxyXG5cdHNwZWNpYWxpdHksXHJcblx0dG9waWMsXHJcblx0YXJ0aWNsZSxcclxuXHR1aSxcclxuXHR2aWRlbyxcclxufSk7XHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRzcGVjaWFsaXRpZXM6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BlY2lhbGl0eVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ0dFVF9TUEVDSUFMSVRJRVMnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNwZWNpYWxpdGllczogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ0dFVF9TUEVDSUFMSVRZJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzcGVjaWFsaXR5OiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSAnQ0xFQVJfU1BFQ0lBTElUWSc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3BlY2lhbGl0eToge30sXHJcblx0XHRcdH07XHJcblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUSUVTX0VSUk9SJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlICdHRVRfU1BFQ0lBTElUWV9FUlJPUic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0dG9waWNzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvcGljUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblx0Y29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcblxyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSAnR0VUX1RPUElDUyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dG9waWNzOiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ0dFVF9UT1BJQ1NfRVJST1InOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG9wZW5Ub3BpY3M6IFtdLFxyXG5cdGRpc3BsYXlNb2RlOlxyXG5cdFx0aXNDbGllbnQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKVxyXG5cdFx0XHQ/IGlzQ2xpZW50ICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RlJylcclxuXHRcdFx0OiAnbGlnaHQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdWlSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHRjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ1NFVF9PUEVOX1RPUElDUyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0b3BlblRvcGljczogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ1NFVF9ESVNQTEFZX01PREUnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRpc3BsYXlNb2RlOiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHNlbGVjdGVkVmlkZW86IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERF9WSURFTyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dG9waWNzOiBwYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgJ0dFVF9WSURFTyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2VsZWN0ZWRWaWRlbzogcGF5bG9hZC52aWRlbyxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ1NFTEVDVF9WSURFTyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2VsZWN0ZWRWaWRlbzogcGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgJ0NMRUFSX1ZJREVPJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWxlY3RlZFZpZGVvOiB7fSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlICdBRERfVklERU9fRVJST1InOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGVDYXJkID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJwcm9maWxlLWNhcmRcIj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGgxPntkYXRhLm5hbWV9PC9oMT5cclxuICAgICAgICA8aDI+SGVsbG8hPC9oMj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1iaW9cIj5cclxuICAgICAgICA8cD57ZGF0YS5iaW99PC9wPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgbGlzdC11bnN0eWxlZCBsaXN0LWlubGluZVwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17ZGF0YS5wb3J0Zm9saW9Vcmx9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8xODg5OTAvYnJvd3Nlci13ZWJzaXRlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9fYmxhbmtcIiBocmVmPXtkYXRhLmluc3RhVXJsfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTExMTk5L2luc3RhZ3JhbS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfX2JsYW5rXCIgaHJlZj17ZGF0YS50d2l0dGVyVXJsfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMTgzNjA4L3R3aXR0ZXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX19ibGFua1wiIGhyZWY9e2RhdGEuZ2l0aHViVXJsfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvMjE3NzUzL2dpdGh1Yi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXNpZGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFib3V0VXMgPSAoKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbXlGdW5jdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNTUwKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGUtY2FyZFwiKVxyXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLWNhcmQtYW5pbVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdXMtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11cy1oZWFkaW5nXCI+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIEFib3V0IDxzcGFuPlVzPC9zcGFuPlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzLXRleHRcIj5cclxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1b2QgZG9sb3JcclxuICAgICAgICAgIGRvbG9yZSBvZGl0LCBuZXF1ZSBpdGFxdWUgaXVyZSBxdWFzIG1vbGxpdGlhIG5paGlsIGN1bXF1ZSByZW0gaGFydW1cclxuICAgICAgICAgIGNvbnNlcXV1bnR1ciBjb25zZWN0ZXR1ci4gQXV0ZW0gZnVnaXQsIGRvbG9yaWJ1cyBzaW50IGVuaW0gZXJyb3Igc2VxdWlcclxuICAgICAgICAgIHF1byByZW0gbWluaW1hIG1hZ25pIGV4Y2VwdHVyaSBleHBlZGl0YSBtb2xsaXRpYSByZWN1c2FuZGFlIGhhcnVtXHJcbiAgICAgICAgICBhbGlhcyByZXBlbGxlbmR1cywgc2l0IHZvbHVwdGF0ZSBmYWNpbGlzIHNpbWlsaXF1ZSBhdCBpbiBhc3BlcmlvcmVzXHJcbiAgICAgICAgICBzdW50IGluYW0gc2FlcGUgcXVpLiBOaXNpIG1pbmltYSBpcHNhIGlsbG8gdGVtcG9yZSBxdW9kIGVuaW0gZXVtXHJcbiAgICAgICAgICBxdWlkZW0/XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtY2FyZHNcIj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBsZz17Nn0+XHJcbiAgICAgICAgICAgIDxQcm9maWxlQ2FyZFxyXG4gICAgICAgICAgICAgIGRhdGE9e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUHJpeWFcIixcclxuICAgICAgICAgICAgICAgIHBvcnRmb2xpb1VybDogXCJodHRwczovL2tub3ctcHJpeWEtYmloYW5pLnZlcmNlbC5hcHBcIixcclxuICAgICAgICAgICAgICAgIGluc3RhVXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYmloYW5pLnByaXlhXCIsXHJcbiAgICAgICAgICAgICAgICBnaXRodWJVcmw6IFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9Qcml5YUJpaGFuaVwiLFxyXG4gICAgICAgICAgICAgICAgdHdpdHRlclVybDogXCJodHRwczovL3R3aXR0ZXIuY29tL3BfYmloYW5pXCIsXHJcbiAgICAgICAgICAgICAgICBiaW86XHJcbiAgICAgICAgICAgICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdGVtcG9yYSBldmVuaWV0IHF1YWUgbmVxdWUgaGljIGRvbG9yaWJ1cyB2b2x1cHRhdGlidXMgaW5jaWR1bnQgcXVpYSBmYWNpbGlzIGJsYW5kaXRpaXMuXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgbGc9ezZ9PlxyXG4gICAgICAgICAgICA8UHJvZmlsZUNhcmRcclxuICAgICAgICAgICAgICBkYXRhPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkthcnRpa1wiLFxyXG4gICAgICAgICAgICAgICAgcG9ydGZvbGlvVXJsOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgaW5zdGFVcmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9iaWhhbmkucHJpeWFcIixcclxuICAgICAgICAgICAgICAgIGdpdGh1YlVybDogXCJodHRwczovL3d3dy5naXRodWIuY29tL2thcnRpazE4Z1wiLFxyXG4gICAgICAgICAgICAgICAgdHdpdHRlclVybDogXCJodHRwczovL3R3aXR0ZXIuY29tL0drYWFydGlrXCIsXHJcbiAgICAgICAgICAgICAgICBiaW86XHJcbiAgICAgICAgICAgICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdGVtcG9yYSBldmVuaWV0IHF1YWUgbmVxdWUgaGljIGRvbG9yaWJ1cyB2b2x1cHRhdGlidXMgaW5jaWR1bnQgcXVpYSBmYWNpbGlzIGJsYW5kaXRpaXMuXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBRdWVzdGlvbnMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25zLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInMtcy0xXCI+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgQWJvdXQgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPkNvZGVycyBHYWxhPC9zcGFuPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC1kaW5cIj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICBXaGF0IGlzIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkNvZGVycyBHYWxhPC9zcGFuPj9cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBkb2xvciBleHBsaWNhYm8gb3B0aW9cclxuICAgICAgICAgIGZ1Z2lhdCBxdW8gbnVtcXVhbSEgTW9sbGl0aWEsIGZhY2lsaXMgYXBlcmlhbSBuaWhpbCB2b2x1cHRhdGVcclxuICAgICAgICAgIGNvbnNlcXV1bnR1ciBkb2xvcmUsIGhpYyBhYiB0b3RhbSBibGFuZGl0aWlzIGxvcmVtMzAgYWNjdXNhbnRpdW0sXHJcbiAgICAgICAgICBtYWduYW0gb2RpdCBldW0/XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aHktZGluXCI+XHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIFdoeSA8c3BhbiBjbGFzc05hbWU9XCJcIj5Db2RlcnMgR2FsYTwvc3Bhbj4/XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWkgZG9sb3IgZXhwbGljYWJvIG9wdGlvXHJcbiAgICAgICAgICBmdWdpYXQgcXVvIG51bXF1YW0hIE1vbGxpdGlhLCBmYWNpbGlzIGFwZXJpYW0gbmloaWwgdm9sdXB0YXRlXHJcbiAgICAgICAgICBjb25zZXF1dW50dXIgZG9sb3JlLCBoaWMgYWIgdG90YW0gYmxhbmRpdGlpcyBhY2N1c2FudGl1bSwgbWFnbmFtIG9kaXRcclxuICAgICAgICAgIGV1bT9cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtZGluXCI+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgV2hhdCBpcyA8c3BhbiBjbGFzc05hbWU9XCJcIj5Db2RlcnMgR2FsYTwvc3Bhbj4/XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWkgZG9sb3IgZXhwbGljYWJvIG9wdGlvXHJcbiAgICAgICAgICBmdWdpYXQgcXVvIG51bXF1YW0hIE1vbGxpdGlhLCBmYWNpbGlzIGFwZXJpYW0gbmloaWwgdm9sdXB0YXRlXHJcbiAgICAgICAgICBjb25zZXF1dW50dXIgZG9sb3JlLCBoaWMgYWIgdG90YW0gYmxhbmRpdGlpcyBsb3JlbTMwIGFjY3VzYW50aXVtLFxyXG4gICAgICAgICAgbWFnbmFtIG9kaXQgZXVtP1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgQWxsID0gKHsgYXJ0aWNsZXMgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZF9fY29sLTNcIj5cclxuICAgICAgICAgICAge2FydGljbGVzICYmXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBBcnRpY2xlSWQgPSBhcnRpY2xlICYmIGFydGljbGUuX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS1tZFwiIGtleT17QXJ0aWNsZUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2Jsb2cvcmVhZC8ke2FydGljbGUgJiYgYXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIi1cIil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUudGh1bWJuYWlsVXJsID8gYXJ0aWNsZS50aHVtYm5haWxVcmwgOiBcImh0dHBzOi8vY29kZXJzZ2FsYS5jb20vc3RhdGljL21lZGlhL2NnVHJhbnNwYXJlbnQuNmE5YzM0OTYuUE5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2ltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmlkX19pdGVtX19jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlICYmIG1vbWVudChhcnRpY2xlLmNyZWF0ZWRBdCkuZm9ybWF0KFwiREQgTU0gWVlZWVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX3RpdGxlXCI+e2FydGljbGUgJiYgYXJ0aWNsZS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9fYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnkgQ29kZXJzR2FsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgRmVhdHVyZWQgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHthcnRpY2xlcyAmJlxyXG5cdFx0XHRcdGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGFydGljbGUgJiYgYXJ0aWNsZS5mZWF0dXJlZCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhhcnRpY2xlKTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgQXJ0aWNsZUlkID0gYXJ0aWNsZSAmJiBhcnRpY2xlLl9pZDtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZF9faXRlbS1zbScga2V5PXthcnRpY2xlICYmIGFydGljbGUuaWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG89e2AvYmxvZy9yZWFkLyR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csICctJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZ3JpZF9faXRlbV9fY2F0ZWdvcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2FydGljbGUgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9tZW50KGFydGljbGUuY3JlYXRlZEF0KS5mb3JtYXQoJ0REIE1NIFlZWVknKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nZ3JpZF9faXRlbV9fdGl0bGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2FydGljbGUgJiYgYXJ0aWNsZS5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdncmlkX19pdGVtX19hdXRob3InPkJ5IENvZGVyc0dhbGE8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFydGljbGUudGh1bWJuYWlsVXJsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBhcnRpY2xlLnRodW1ibmFpbFVybFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ2h0dHBzOi8vY29kZXJzZ2FsYS5jb20vc3RhdGljL21lZGlhL2NnVHJhbnNwYXJlbnQuNmE5YzM0OTYuUE5HJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdncmlkX19pdGVtX19pbWcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9JydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBMYXRlc3QgPSAoeyBhcnRpY2xlIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGFydGljbGUgJiYgYXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIi1cIikpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbS1sZ1wiPmBcclxuICAgICAgICAgICAge2FydGljbGUgJiYgPE5hdkxpbmsgdG89e2AvYmxvZy9yZWFkLyR7YXJ0aWNsZSAmJiBhcnRpY2xlLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiLVwiKX1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXthcnRpY2xlLnRodW1ibmFpbFVybCA/IGFydGljbGUudGh1bWJuYWlsVXJsIDogXCJodHRwczovL2NvZGVyc2dhbGEuY29tL3N0YXRpYy9tZWRpYS9jZ1RyYW5zcGFyZW50LjZhOWMzNDk2LlBOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2ltZ1wiIGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX2ltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmlkX19pdGVtX19jYXRlZ29yeVwiPiB7YXJ0aWNsZSAmJiBtb21lbnQoYXJ0aWNsZS5jcmVhdGVkQXQpLmZvcm1hdChcIkREIE1NIFlZWVlcIil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW1fX3RpdGxlXCI+e2FydGljbGUubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbV9fYXV0aG9yXCI+QnkgQ29kZXJzR2FsYTwvcD5cclxuICAgICAgICAgICAgPC9OYXZMaW5rPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXRlc3Q7XHJcbiIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcyc7XHJcbi8vIGltcG9ydCBSZWFjdFF1aWxsLCB7IFF1aWxsIH0gZnJvbSAncmVhY3QtcXVpbGwnO1xyXG4vLyBsZXQgQmxvY2tFbWJlZCA9IFF1aWxsLmltcG9ydCgnYmxvdHMvYmxvY2svZW1iZWQnKTtcclxuLy8gbGV0IElubGluZSA9IFF1aWxsLmltcG9ydCgnYmxvdHMvaW5saW5lJyk7XHJcbi8vIGhsanMuY29uZmlndXJlKHtcclxuLy8gICBsYW5ndWFnZXM6IFsnamF2YXNjcmlwdCcsICdweXRob24nLCAnaHRtbCcsICdjc3MnXSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBDdXN0b21CdXR0b24gPSAoKSA9PiAoXHJcbi8vICAgPGltZ1xyXG4vLyAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fVxyXG4vLyAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy83NzU4NC9pbWFnZS5zdmdcIlxyXG4vLyAgICAgYWx0PVwiXCJcclxuLy8gICAvPlxyXG4vLyApO1xyXG5cclxuLy8gLy8gY29uc3QgQ29kZUxpbmUgPSAoKSA9PiAoXHJcbi8vIC8vICAgPGltZ1xyXG4vLyAvLyAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JyB9fVxyXG4vLyAvLyAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy8yOTQxNDUvY29kZS5zdmdcIlxyXG4vLyAvLyAgICAgYWx0PVwiXCJcclxuLy8gLy8gICAvPlxyXG4vLyAvLyApO1xyXG5cclxuLy8gY29uc3QgU2l6ZSA9IFF1aWxsLmltcG9ydCgnZm9ybWF0cy9zaXplJyk7XHJcbi8vIFNpemUud2hpdGVsaXN0ID0gW1xyXG4vLyAgICcxJyxcclxuLy8gICAnMicsXHJcbi8vICAgJzQnLFxyXG4vLyAgICc2JyxcclxuLy8gICAnOCcsXHJcbi8vICAgJzEwJyxcclxuLy8gICAnMTInLFxyXG4vLyAgICcxNCcsXHJcbi8vICAgJzE2JyxcclxuLy8gICAnMjAnLFxyXG4vLyAgICcyNCcsXHJcbi8vICAgJzI2JyxcclxuLy8gICAnMzAnLFxyXG4vLyBdO1xyXG4vLyBRdWlsbC5yZWdpc3RlcihTaXplLCB0cnVlKTtcclxuXHJcbi8vIGNsYXNzIGlubGluZUNvZGVCbG90IGV4dGVuZHMgSW5saW5lIHsgfVxyXG4vLyBpbmxpbmVDb2RlQmxvdC5ibG90TmFtZSA9ICdpbmxpbmVDb2RlJztcclxuLy8gaW5saW5lQ29kZUJsb3QudGFnTmFtZSA9ICdjb2RlJztcclxuXHJcbi8vIGNsYXNzIEltYWdlQmxvdCBleHRlbmRzIEJsb2NrRW1iZWQge1xyXG4vLyAgIHN0YXRpYyBjcmVhdGUodmFsdWUpIHtcclxuLy8gICAgIGxldCBub2RlID0gc3VwZXIuY3JlYXRlKCk7XHJcbi8vICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYWx0JywgdmFsdWUuYWx0KTtcclxuLy8gICAgIG5vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCB2YWx1ZS51cmwpO1xyXG4vLyAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdmFsdWUuY2xhc3MpO1xyXG4vLyAgICAgcmV0dXJuIG5vZGU7XHJcbi8vICAgfVxyXG5cclxuLy8gICBzdGF0aWMgdmFsdWUobm9kZSkge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgYWx0OiBub2RlLmdldEF0dHJpYnV0ZSgnYWx0JyksXHJcbi8vICAgICAgIHVybDogbm9kZS5nZXRBdHRyaWJ1dGUoJ3NyYycpLFxyXG4vLyAgICAgICBjbGFzczogbm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyksXHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBJbWFnZUJsb3QuYmxvdE5hbWUgPSAnaW1hZ2UnO1xyXG4vLyBJbWFnZUJsb3QudGFnTmFtZSA9ICdpbWcnO1xyXG4vLyBRdWlsbC5yZWdpc3RlcihJbWFnZUJsb3QpO1xyXG4vLyBRdWlsbC5yZWdpc3RlcihpbmxpbmVDb2RlQmxvdCk7XHJcblxyXG4vLyBjb25zdCBpbnNlcnRJbWFnZSA9ICgpID0+IHtcclxuLy8gICBsZXQgdXJsID0gcHJvbXB0KCdFbnRlciBsaW5rIFVSTCcpO1xyXG4vLyAgIGxldCBhbHQgPSBwcm9tcHQoJ0VudGVyIGxpbmsgYWx0Jyk7XHJcbi8vICAgbGV0IGNsYXMgPSBwcm9tcHQoJ0VudGVyIGNsYXNzIE5hbWUnKTtcclxuLy8gICBsZXQgcmFuZ2UgPSB0aGlzLnF1aWxsLmdldFNlbGVjdGlvbih0cnVlKTtcclxuLy8gICBjb25zb2xlLmxvZyhRdWlsbC5zb3VyY2VzKTtcclxuLy8gICB0aGlzLnF1aWxsLmluc2VydFRleHQocmFuZ2UuaW5kZXgsICdcXG4nLCBRdWlsbC5zb3VyY2VzLlVTRVIpO1xyXG4vLyAgIHRoaXMucXVpbGwuaW5zZXJ0RW1iZWQoXHJcbi8vICAgICByYW5nZS5pbmRleCArIDEsXHJcbi8vICAgICAnaW1hZ2UnLFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBhbHQ6IGFsdCxcclxuLy8gICAgICAgdXJsOiB1cmwsXHJcbi8vICAgICAgIGNsYXNzOiBjbGFzLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIFF1aWxsLnNvdXJjZXMuVVNFUlxyXG4vLyAgICk7XHJcbi8vICAgdGhpcy5xdWlsbC5zZXRTZWxlY3Rpb24ocmFuZ2UuaW5kZXggKyAyLCBRdWlsbC5zb3VyY2VzLlNJTEVOVCk7XHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBpbnNlcnRJbmxpbmVDb2RlID0gKGUpID0+IHtcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgLy8gY29uc29sZS5sb2codGhpcy5xdWlsbCk7XHJcbi8vICAgLy8gdGhpcy5xdWlsbC5mb3JtYXQoXCJpbmxpbmVDb2RlXCIsIHRydWUpO1xyXG4vLyAgIGNvbnNvbGUubG9nKCdpbmxpbmUgY29kZSBpbnMnKTtcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoKSA9PiAoXHJcbi8vICAgPGRpdiBpZD1cInRvb2xiYXJcIj5cclxuLy8gICAgIDxzZWxlY3RcclxuLy8gICAgICAgY2xhc3NOYW1lPVwicWwtaGVhZGVyXCJcclxuLy8gICAgICAgZGVmYXVsdFZhbHVlPXsnJ31cclxuLy8gICAgICAgb25DaGFuZ2U9eyhlKSA9PiBlLnBlcnNpc3QoKX1cclxuLy8gICAgID5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiBzZWxlY3RlZD48L29wdGlvbj5cclxuLy8gICAgIDwvc2VsZWN0PlxyXG5cclxuLy8gICAgIDxzZWxlY3QgY2xhc3M9XCJxbC1mb250XCI+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZXJpZlwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwibW9ub3NwYWNlXCI+PC9vcHRpb24+XHJcbi8vICAgICA8L3NlbGVjdD5cclxuXHJcbi8vICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInFsLXNpemVcIj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCIyXCI+XHJcbi8vICAgICAgICAgMlxyXG4vLyAgICAgICA8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPjg8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE2XCI+MTY8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI0XCI+MjQ8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI2XCI+MjY8L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwXCI+MzA8L29wdGlvbj5cclxuLy8gICAgIDwvc2VsZWN0PlxyXG5cclxuLy8gICAgIDxzZWxlY3QgY2xhc3M9XCJxbC1hbGlnblwiPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2VudGVyXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWdodFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwianVzdGlmeVwiPjwvb3B0aW9uPlxyXG4vLyAgICAgPC9zZWxlY3Q+XHJcblxyXG4vLyAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJxbC1iYWNrZ3JvdW5kXCI+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWRcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cImdyZWVuXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjNEY2OUY4XCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcmFuZ2VcIj48L29wdGlvbj5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cInZpb2xldFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiI2QwZDFkMlwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHNlbGVjdGVkPjwvb3B0aW9uPlxyXG4vLyAgICAgPC9zZWxlY3Q+XHJcblxyXG4vLyAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJxbC1jb2xvclwiPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiI0RBMEY0N1wiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzREQ0UxRFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzRGNjlGOFwiPjwvb3B0aW9uPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwib3JhbmdlXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjOTkzM2ZmXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCIjZDBkMWQyXCI+PC9vcHRpb24+XHJcbi8vICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XHJcbi8vICAgICA8L3NlbGVjdD5cclxuXHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLWJvbGRcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaXRhbGljXCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInFsLXVuZGVybGluZVwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1zdHJpa2VcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtYmxvY2txdW90ZVwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1kaXJlY3Rpb25cIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtbGlua1wiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC1pbWFnZVwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxbC12aWRlb1wiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiB2YWx1ZT1cIm9yZGVyZWRcIiBjbGFzc05hbWU9XCJxbC1saXN0XCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIHZhbHVlPVwiYnVsbGV0XCIgY2xhc3NOYW1lPVwicWwtbGlzdFwiPjwvYnV0dG9uPlxyXG4vLyAgICAgPGJ1dHRvbiB2YWx1ZT1cIi0xXCIgY2xhc3NOYW1lPVwicWwtaW5kZW50XCI+PC9idXR0b24+XHJcbi8vICAgICA8YnV0dG9uIHZhbHVlPVwiKzFcIiBjbGFzc05hbWU9XCJxbC1pbmRlbnRcIj48L2J1dHRvbj5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtY29kZS1ibG9ja1wiPjwvYnV0dG9uPlxyXG5cclxuLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWwtaW5zZXJ0SW1hZ2VcIj5cclxuLy8gICAgICAgPEN1c3RvbUJ1dHRvbiAvPlxyXG4vLyAgICAgPC9idXR0b24+XHJcbi8vICAgPC9kaXY+XHJcbi8vICk7XHJcblxyXG4vLyAvKlxyXG4vLyAgKiBFZGl0b3IgY29tcG9uZW50IHdpdGggY3VzdG9tIHRvb2xiYXIgYW5kIGNvbnRlbnQgY29udGFpbmVyc1xyXG4vLyAgKi9cclxuXHJcbi8vIGNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuLy8gICAgIHN1cGVyKHByb3BzKTtcclxuLy8gICAgIHRoaXMuc3RhdGUgPSB7IGVkaXRvckh0bWw6IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIH07XHJcbi8vICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBoYW5kbGVDaGFuZ2UoaHRtbCkge1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRvckh0bWw6IGh0bWwgfSk7XHJcbi8vICAgICB0aGlzLnByb3BzLmhhbmRsZUVkaXRvcihodG1sKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZWRpdG9ySHRtbCk7XHJcblxyXG4vLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpO1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVkaXRvclwiPlxyXG4vLyAgICAgICAgIDxDdXN0b21Ub29sYmFyIC8+XHJcbi8vICAgICAgICAgPFJlYWN0UXVpbGxcclxuLy8gICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgIG1vZHVsZXM9e0VkaXRvci5tb2R1bGVzfVxyXG4vLyAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZWRpdG9ySHRtbCB8fCAnJ31cclxuLy8gICAgICAgICAvPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBFZGl0b3IubW9kdWxlcyA9IHtcclxuLy8gICBzeW50YXg6IHtcclxuLy8gICAgIGhpZ2hsaWdodDogKHRleHQpID0+IGhsanMuaGlnaGxpZ2h0QXV0byh0ZXh0KS52YWx1ZSxcclxuLy8gICB9LFxyXG4vLyAgIHRvb2xiYXI6IHtcclxuLy8gICAgIGNvbnRhaW5lcjogJyN0b29sYmFyJyxcclxuXHJcbi8vICAgICBoYW5kbGVyczoge1xyXG4vLyAgICAgICBpbnNlcnRJbWFnZTogaW5zZXJ0SW1hZ2UsXHJcbi8vICAgICAgIGluc2VydElubGluZUNvZGU6IGluc2VydElubGluZUNvZGUsXHJcbi8vICAgICB9LFxyXG4vLyAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBFZGl0b3IuZm9ybWF0cyA9IFtcclxuLy8gICAnaGVhZGVyJyxcclxuLy8gICAnZm9udCcsXHJcbi8vICAgJ3NpemUnLFxyXG4vLyAgICdib2xkJyxcclxuLy8gICAnaXRhbGljJyxcclxuLy8gICAndW5kZXJsaW5lJyxcclxuLy8gICAnc3RyaWtlJyxcclxuLy8gICAnYmxvY2txdW90ZScsXHJcbi8vICAgJ2xpc3QnLFxyXG4vLyAgICdidWxsZXQnLFxyXG4vLyAgICdpbmRlbnQnLFxyXG4vLyAgICdsaW5rJyxcclxuLy8gICAnaW1hZ2UnLFxyXG4vLyAgICdjb2xvcicsXHJcbi8vICAgJ2NvZGUtYmxvY2snLFxyXG4vLyBdO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgSGVybyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbHVuYTEuY28vNTdkOWI2LnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXRpbmdIZXJvLWltYWdlIC10d28gLWZsb2F0aW5nRGVsYXlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9sdW5hMS5jby8yMDcwZWUucG5nXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taW1hZ2UgLXRocmVlIC1mbG9hdGluZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2x1bmExLmNvL2ZkYTg2MC5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1pbWFnZSAtZm91ciAtZmxvYXRpbmdEZWxheVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taGVhZGVyXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8tbGFiZWxcIj5UaGlzIGlzLi4uPC9wPlxyXG5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbG9hdGluZ0hlcm8taGVhZGxpbmUgXCI+Q29kZXJzIEdhbGE8L2gxPlxyXG5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb2F0aW5nSGVyby1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBDb2RlcnMgR2FsYSBpcyBhIGZyZWUgdG8gdXNlIHBsYXRmb3JtLCB3aGljaCB3aWxsIGhlbHAgYW5kIGd1aWRlXHJcbiAgICAgICAgICAgIHlvdSwgbm90IG9ubHkgdG8gbGVhcm4gd2ViIGRldmVsb3BtZW50IGJ1dCBiZWNvbWUgYSBmcmVlLWxhbmNlciBsaWtlXHJcbiAgICAgICAgICAgIHVzLiBTbyBjbGljayBvbiBwbGF5IGFuZCBlbWJhcmsgYSBuZXcgam91cm5leSB3aXRoIHVzLlxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xlYXJuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheSAtY29yYWwgLXNtYWxsIC1wdWxzZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBIZXJvQ2FyZHMgPSAoKSA9PiB7XHJcblx0Ly8gcmVmcyBmb3IgdGhlIHRocmVlIHNlY3Rpb25cclxuXHRjb25zdCBoZXJvQmx1ZSA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IGhlcm9PcmFuZ2UgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBoZXJvR3JlZW4gPSB1c2VSZWYoKTtcclxuXHJcblx0Y29uc3Qgc2Nyb2xsRnVuY3Rpb24gPSAoKSA9PiB7XHJcblx0XHRpc0NsaWVudCAmJlxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG5cdFx0XHRcdHZhciBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHRcdFx0XHRpZiAoc2Nyb2xsIDwgMTUwKSB7XHJcblx0XHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29uZScpO1xyXG5cdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XHJcblx0XHRcdFx0XHRoZXJvR3JlZW4uY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0d28nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHNjcm9sbCA+IDE1MCAmJiBzY3JvbGwgPCA0NTApIHtcclxuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnb25lJyk7XHJcblx0XHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhyZWUnKTtcclxuXHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3R3bycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gNDUwICYmIHNjcm9sbCA8IDY1MCkge1xyXG5cdFx0XHRcdFx0aGVyb0dyZWVuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndHdvJyk7XHJcblx0XHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29uZScpO1xyXG5cdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzY3JvbGwgPiA2NTApIHtcclxuXHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3R3bycpO1xyXG5cdFx0XHRcdFx0aGVyb0JsdWUuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdvbmUnKTtcclxuXHRcdFx0XHRcdGhlcm9PcmFuZ2UuY3VycmVudC5jbGFzc0xpc3QuYWRkKCd0aHJlZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCA2MDApIHtcclxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuY3Rpb24pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoaXNDbGllbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiA2MDApIHtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHRcdFx0XHRoZXJvR3JlZW4uY3VycmVudC5jbGFzc0xpc3QuYWRkKCd0d28nKTtcclxuXHRcdFx0XHRoZXJvT3JhbmdlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndGhyZWUnKTtcclxuXHRcdFx0XHRoZXJvQmx1ZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ29uZScpO1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGhlcm9CbHVlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJyk7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGhlcm9HcmVlbi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3R3bycpO1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aGVyb09yYW5nZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RocmVlJyk7XHJcblx0XHRcdFx0XHRcdH0sIDg1MCk7XHJcblx0XHRcdFx0XHR9LCA3NTApO1xyXG5cdFx0XHRcdH0sIDY1MCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0aXNDbGllbnQgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEZ1bmN0aW9uKTtcclxuXHRcdH07XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdoZXJvJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2hlcm8tYm94LWNvbnRhaW5lcic+XHJcblx0XHRcdFx0PExpbmsgdG89Jy9hYm91dCcgY2xhc3NOYW1lPSdoZXJvLWJveCc+XHJcblx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRyZWY9e2hlcm9CbHVlfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tYmx1ZSc+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0naGVyby1ib3hfX3RpdGxlJz5XaGF0IGlzIENvZGVyc0dhbGE/PC9oMj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0naGVyby1ib3hfX2JvZHknPlxyXG5cdFx0XHRcdFx0XHRDb2RlcnNHYWxhIGlzIGEgZnJlZSB0byB1c2UgcGxhdGZvcm0gZm9yIGFsbCB0aG9zZSBwZW9wbGUgd2hvIGFyZVxyXG5cdFx0XHRcdFx0XHR1bndpbGxpbmcgdG8gcGF5IGhpZ2ggcmFuc29tIHRvIHRoZXNlIGNyb29rZWQgY29hY2hpbmcgY2VudGVycyBmb3JcclxuXHRcdFx0XHRcdFx0bGVhcm5pbmcgd2ViIERldmVsb3BtZW50LiBXZSB3b24ndCBiZSBzcG9vbiBmZWVkaW5nIHlvdSBidXQgd2Ugd2lsbFxyXG5cdFx0XHRcdFx0XHRndWlkZSB5b3UuIEFueXdheSwgaWYgeW91IGFyZSBlYWdlciB0byBsZWFybiB5b3Ugd2lsbCBmaW5kIGEgd2F5LlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8TGluayB0bz0nL2Fib3V0LyNhYm91dHVzJyBjbGFzc05hbWU9J2hlcm8tYm94Jz5cclxuXHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdHJlZj17aGVyb0dyZWVufVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hlcm8tYm94X19jaXJjbGUgaGVyby1ib3hfX2NpcmNsZS0tZ3JlZW4nPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2hlcm8tYm94X190aXRsZSc+V2hvIGFyZSB3ZT88L2gyPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoZXJvLWJveF9fYm9keSc+XHJcblx0XHRcdFx0XHRcdFdlIHN0YXJ0ZWQgd2ViIGRldmVsb3BtZW50IG9uIG91ciBvd24sIHdpdGggbm8gZGlyZWN0aW9uIGFuZCBub1xyXG5cdFx0XHRcdFx0XHRjb2FjaGluZy4gQWxsIHdlIGhhZCB3YXMgZGV0ZXJtaW5hdGlvbiBhbmQgaW50ZXJuZXQuIFdlIGNvbnNpZGVyXHJcblx0XHRcdFx0XHRcdG91cnNlbHZlcyBsdWNreSB0byBiZSBhYmxlIHRvIHByb3ZpZGUgdGhlIHN1cHBvcnQgdGhhdCBoYWQgYmVlblxyXG5cdFx0XHRcdFx0XHRwcm92aWRlZCB0byB1cy5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PExpbmsgdG89Jy9sZWFybicgY2xhc3NOYW1lPSdoZXJvLWJveCc+XHJcblx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRyZWY9e2hlcm9PcmFuZ2V9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naGVyby1ib3hfX2NpcmNsZSBoZXJvLWJveF9fY2lyY2xlLS1vcmFuZ2UnPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2hlcm8tYm94X190aXRsZSc+U3RhcnQgTGVhcm5pbmcgLi48L2gyPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoZXJvLWJveF9fYm9keSc+XHJcblx0XHRcdFx0XHRcdFJpZ2h0IG5vdyB3ZSBoYXZlIHRoZSBhcnRpY2xlcyBvbiBmcm9udC1lbmQtZGV2ZWxvcG1lbnQuIFdlIGFyZVxyXG5cdFx0XHRcdFx0XHR3b3JraW5nIHRpcmVsZXNzbHkgdG8gY292ZXIgYmFja2VuZC4gV2Ugd2lsbCBoYXZlIHRoZSBhcnRpY2xlcyBhaXJlZFxyXG5cdFx0XHRcdFx0XHRvbiBiYWNrZW5kIGJlZm9yZSBzZXB0ZW1iZXIuIFRoZSBjb3Vyc2Ugd2lsbCBjb3ZlciBGcm9udC1lbmQsIEFQSSxcclxuXHRcdFx0XHRcdFx0Tm9kZWpzLWV4cHJlc3MsIE1vbmdvRGIsIE15U1FMLCBIb3N0aW5nLCBSZWFjdCwgRmlyZWJhc2UuLi4gYW5kIGFcclxuXHRcdFx0XHRcdFx0bG90IG1vcmUgcHJvamVjdHMuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0NhcmRzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtdGlwcHknO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzY3JvbGxUbywgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi8uLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xyXG5cclxuY29uc3QgQXJ0aWNsZU5hbWVzID0gKHtcclxuXHRzZWxlY3RWaWRlbyxcclxuXHRhcnRpY2xlLFxyXG5cdGRlbGV0ZUFydGljbGUsXHJcblx0dG9waWMsXHJcblx0c3BlY2lhbGl0eU5hbWUsXHJcbn0pID0+IHtcclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc3QgeyBBcnRpY2xlTmFtZSwgX2lkIH0gPSBkYXRhO1xyXG5cdFx0Y29uc3QgY29uZmlybSA9XHJcblx0XHRcdGlzQ2xpZW50ICYmXHJcblx0XHRcdHdpbmRvdy5wcm9tcHQoYFlvdSBzdXJlIHdhbnQgdG8gZGVsZXRlIFwiJHtBcnRpY2xlTmFtZX1cIiA/IFkgb3IgTiBgKTtcclxuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcclxuXHRcdFx0ZGVsZXRlQXJ0aWNsZShfaWQsIHRvcGljLl9pZCwgc3BlY2lhbGl0eU5hbWUpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IHJlYWQtaWNvbic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPScgcmVhZCBjb2wtMTAnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGFydGljbGUpO1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdFZpZGVvKGFydGljbGUpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHBvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFRvKHBvcyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Rpc3BsYXktYXJ0aWNsZSc+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2FydGljbGUtbmFtZSBtLTAnPlxyXG5cdFx0XHRcdFx0XHRcdHthcnRpY2xlLkFydGljbGVOYW1lfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdhcnRpY2xlLWFjdGlvbi1pY29ucyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybD17YC9hcnRpY2xlL3VwZGF0ZS8ke2FydGljbGUuX2lkfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2FydGljbGV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdEZWxldGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9e2hhbmRsZURlbGV0ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17YXJ0aWNsZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBvcHRpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtgUmVhZCBcIiR7YXJ0aWNsZS5BcnRpY2xlTmFtZX1cImB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRyaWdnZXI9J21vdXNlZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNCdXR0b249e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcj17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0VmlkZW8oYXJ0aWNsZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBwb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2Nyb2xsVG8ocG9zKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3VwZGF0ZS1kZWxldGUgZmxvYXQtcmlnaHQnPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0VmlkZW8gfSkoQXJ0aWNsZU5hbWVzKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi8uLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xyXG5pbXBvcnQgeyBnZXRTcGVjaWFsaXRpZXMsIGRlbGV0ZVNwZWNpYWxpdHkgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IENhcmQgPSAoeyBnZXRTcGVjaWFsaXRpZXMsIHNwZWNpYWxpdGllcywgZGVsZXRlU3BlY2lhbGl0eSB9KSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChzcGVjaWFsaXRpZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdGdldFNwZWNpYWxpdGllcygpO1xyXG5cdFx0fVxyXG5cdH0sIFtzcGVjaWFsaXRpZXMubGVuZ3RoLCBnZXRTcGVjaWFsaXRpZXNdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKGl0ZW0pID0+IHtcclxuXHRcdC8vIEdvdCB0byBoZWxwZXIsIGNoZWNrXHJcblx0XHRjb25zdCBjb25maXJtID1cclxuXHRcdFx0aXNDbGllbnQgJiZcclxuXHRcdFx0d2luZG93LnByb21wdChcclxuXHRcdFx0XHRgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke2l0ZW0uTmFtZX1cIiA/IFkgb3IgTiAoRGVsZXRpbmcgYSBzcGVjaWFsaXR5IHdpbGwgbGVhZCB0byBkZWxldGlvbiBvZiBhbGwgdG9waWNzIGFuZCBhcnRpY2xlcyBpbnNpZGUgaXQpIGBcclxuXHRcdFx0KTtcclxuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcclxuXHRcdFx0ZGVsZXRlU3BlY2lhbGl0eShpdGVtLl9pZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdsZWFybi1jb250YWluZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB0LTQnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0e3NwZWNpYWxpdGllcyAmJlxyXG5cdFx0XHRcdFx0XHRzcGVjaWFsaXRpZXMubWFwKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtpdGVtLl9pZH0gY2xhc3NOYW1lPSdjb2wtbGctNic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW1nQngnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltYWdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2l0ZW0uaW1hZ2VVcmx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17aXRlbS5hbHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0NsaWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA2MDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJzE1MHB4J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnYXV0bycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb250ZW50QngnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyPiB7aXRlbS5uYW1lfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J0VkaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybD17Jy91cGRhdGVzcGVjaWFsaXR5LycgKyBpdGVtLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2l0ZW19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdEZWxldGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVEZWxldGUoaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2l0ZW19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB1cmw9eycvbGVhcm4vJyArIGl0ZW0ubmFtZX0+U3RhcnQgTm93PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuXHRzcGVjaWFsaXRpZXM6IHN0YXRlLnNwZWNpYWxpdHkuc3BlY2lhbGl0aWVzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcblx0Z2V0U3BlY2lhbGl0aWVzLFxyXG5cdGRlbGV0ZVNwZWNpYWxpdHksXHJcbn0pKENhcmQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtdGlwcHknO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBpc0NsaWVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBkZWxldGVWaWRlbywgc2VsZWN0VmlkZW8gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IEFkbWluQnV0dG9ucyBmcm9tICcuLi8uLi9sYXlvdXQvQnV0dG9ucy9BZG1pbkJ1dHRvbnMnO1xyXG5cclxuY29uc3QgVmlkZW9OYW1lcyA9ICh7XHJcblx0c2VsZWN0VmlkZW8sXHJcblx0dmlkZW8sXHJcblx0ZGVsZXRlVmlkZW8sXHJcblx0dG9waWMsXHJcblx0c3BlY2lhbGl0eU5hbWUsXHJcbn0pID0+IHtcclxuXHRjb25zb2xlLmxvZyh2aWRlbyk7XHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnN0IHsgVmlkZW9OYW1lLCBfaWQgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBjb25maXJtID1cclxuXHRcdFx0aXNDbGllbnQgJiZcclxuXHRcdFx0d2luZG93LnByb21wdChgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke1ZpZGVvTmFtZX1cIiA/IFkgb3IgTiBgKTtcclxuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcclxuXHRcdFx0ZGVsZXRlVmlkZW8oX2lkLCB0b3BpYy5faWQsIHNwZWNpYWxpdHlOYW1lKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3JvdyByZWFkLWljb24nPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVhZCBjb2wtMTAnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdFZpZGVvKHZpZGVvKTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkaXNwbGF5LWFydGljbGUnPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdhcnRpY2xlLW5hbWUgbS0wJz5cclxuXHRcdFx0XHRcdFx0XHR7dmlkZW8ubmFtZX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYXJ0aWNsZS1hY3Rpb24taWNvbnMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFkbWluQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdFZGl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw9e2AvdmlkZW8vdXBkYXRlLyR7dmlkZW8uX2lkfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e3ZpZGVvfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxBZG1pbkJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nRGVsZXRlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXtoYW5kbGVEZWxldGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e3ZpZGVvfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUb29sdGlwXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIG9wdGlvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e2BSZWFkIFwiJHt2aWRlby5uYW1lfVwiYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlcj0nbW91c2VlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0J1dHRvbj17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RWaWRlbyh2aWRlbyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1cGRhdGUtZGVsZXRlIGZsb2F0LXJpZ2h0Jz48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGRlbGV0ZVZpZGVvLCBzZWxlY3RWaWRlbyB9KShWaWRlb05hbWVzKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcclxuaW1wb3J0IHsgdW5sb2NrVG9waWMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3RvcGljJztcclxuaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IEFydGljbGVQcmV2aWV3ID0gKHsgU2VsZWN0ZWRBcnRpY2xlLCBzcGVjaWFsaXR5TmFtZSwgdW5sb2NrVG9waWMgfSkgPT4ge1xyXG5cdGNvbnN0IFJlYWRNb3JlVXJsID1cclxuXHRcdFNlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubmFtZVxyXG5cdFx0XHQ/IGAvJHtzcGVjaWFsaXR5TmFtZX0vcmVhZC8ke1NlbGVjdGVkQXJ0aWNsZS5uYW1lLnJlcGxhY2UoL1xccy9nLCAnLScpfWBcclxuXHRcdFx0OiBgLyR7c3BlY2lhbGl0eU5hbWV9L3JlYWQvYmVmb3JlLXN0YXJ0aW5nYDtcclxuXHJcblx0Y29uc3QgaGFuZGxlVW5sb2NrID0gYXN5bmMgKHRvcGljSWQsIHNwZWNpYWxpdHlOYW1lKSA9PiB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCB1bmxvY2tUb3BpYyh0b3BpY0lkLCBzcGVjaWFsaXR5TmFtZSk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdH07XHJcblx0Y29uc29sZS5sb2coU2VsZWN0ZWRBcnRpY2xlKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQtY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQnPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyBjYXJkLWhlYWRlcic+XHJcblx0XHRcdFx0XHRcdHtTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLm5hbWVcclxuXHRcdFx0XHRcdFx0XHQ/IFNlbGVjdGVkQXJ0aWNsZS5uYW1lXHJcblx0XHRcdFx0XHRcdFx0OiAnUmVhZCBUaGlzIEJlZm9yZSBZb3UgU3RhcnQuLi4nfVxyXG5cdFx0XHRcdFx0XHR7LyogPGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdmbG9hdC1yaWdodCc+PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3FsLXNub3cnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZC1uby1ib2R5IHFsLWVkaXRvcic+XHJcblx0XHRcdFx0XHRcdFx0e1NlbGVjdGVkQXJ0aWNsZSAmJiBTZWxlY3RlZEFydGljbGUubG9ja2VkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VG8gdmlldyB0aGlzIGFydGljbGUgcGxlYXNlIHVubG9jayBpdCB1c2luZyBwb2ludHN7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlVW5sb2NrKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLnRvcGljSWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwZWNpYWxpdHlOYW1lXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFVubG9ja1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFJlYWN0SHRtbFBhcnNlcihTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLmNvbnRlbnQpXHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlzQ2xpZW50ICYmXHJcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6ICcwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdHRvPXtSZWFkTW9yZVVybH0+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J2xpbmsnPlxyXG5cdFx0XHRcdFx0XHRcdHtTZWxlY3RlZEFydGljbGUgJiYgU2VsZWN0ZWRBcnRpY2xlLmxvY2tlZFxyXG5cdFx0XHRcdFx0XHRcdFx0PyAnVW5sb2NrJ1xyXG5cdFx0XHRcdFx0XHRcdFx0OiAnUmVhZCBNb3JlLi4uLi4nfVxyXG5cdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgdW5sb2NrVG9waWMgfSkoQXJ0aWNsZVByZXZpZXcpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBnZXRUb3BpY3MsIGRlbGV0ZVRvcGljIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBBcnRpY2xlTmFtZXMgZnJvbSAnLi4vbGVhcm4vQXJ0aWNsZU5hbWVzJztcclxuaW1wb3J0IFZpZGVvTmFtZXMgZnJvbSAnLi4vbGVhcm4vVmlkZW9OYW1lcyc7XHJcbmltcG9ydCBBZG1pbkJ1dHRvbnMgZnJvbSAnLi4vLi4vbGF5b3V0L0J1dHRvbnMvQWRtaW5CdXR0b25zJztcclxuaW1wb3J0IHsgTG9jayB9IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucyc7XHJcbmltcG9ydCB7IGlzQ2xpZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG5jb25zdCBUb3BpY3NPdmVydmlldyA9ICh7XHJcblx0Z2V0VG9waWNzLFxyXG5cdHNwZWNpYWxpdHlOYW1lLFxyXG5cdHRvcGljcyxcclxuXHRkZWxldGVUb3BpYyxcclxuXHR1c2VyLFxyXG59KSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldFRvcGljcyhzcGVjaWFsaXR5TmFtZSk7XHJcblx0fSwgW2dldFRvcGljcywgc3BlY2lhbGl0eU5hbWVdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKHRvcGljKSA9PiB7XHJcblx0XHRjb25zdCBjb25maXJtID1cclxuXHRcdFx0aXNDbGllbnQgJiZcclxuXHRcdFx0d2luZG93LnByb21wdChcclxuXHRcdFx0XHRgWW91IHN1cmUgd2FudCB0byBkZWxldGUgXCIke3RvcGljLm5hbWV9XCIgPyBZIG9yIE4gKERlbGV0aW5nIGEgdG9waWMgd2lsbCBsZWFkIHRvIGRlbGV0aW9uIG9mIGFsbCBhcnRpY2xlcyBpbnNpZGUgaXQpIGBcclxuXHRcdFx0KTtcclxuXHRcdGlmIChjb25maXJtID09PSAnWScpIHtcclxuXHRcdFx0ZGVsZXRlVG9waWModG9waWMuX2lkLCBzcGVjaWFsaXR5TmFtZSk7XHJcblx0XHRcdHRvYXN0KCdEZWxldGVkIHNwZWNpYWxpdHkgc3VjZXNzZnVsbHknKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBpZD0nc3BlY2lhbGl0aWVzJyBjbGFzc05hbWU9J1RvcGljLW5hbWVzICc+XHJcblx0XHRcdHt0b3BpY3MubGVuZ3RoID4gMCAmJlxyXG5cdFx0XHRcdHRvcGljcy5tYXAoKHRvcGljKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17dG9waWMuX2lkfT5cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3AtMCBzcGVjaWFsaXR5LXRvcGljLWNvbnRhaW5lciBtLTEnXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e3RvcGljLl9pZH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdmbG9hdC1sZWZ0IHRvcGljTmFtZSc+e3RvcGljLm5hbWV9PC9oND5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8QWN0aW9uQnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY2NvcmRpb25LZXk9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRTZWxlY3RlZElkPXtzZXRTZWxlY3RlZElkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZElkPXtzZWxlY3RlZElkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXR5TmFtZT17c3BlY2lhbGl0eU5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvcGljPXt0b3BpY31cclxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlcj17dXNlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3RvcGljLmxvY2tlZCAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0IXVzZXIudW5Mb2NrZWRUb3BpY3MuaW5jbHVkZXModG9waWMuX2lkKSA/IG51bGwgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uQ29sbGFwc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudEtleT17dG9waWMubmFtZS5zcGxpdCgvXFxzLykuam9pbignJyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0b3BpYy52aWRlb3MubGVuZ3RoID4gMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IHRvcGljLnZpZGVvcy5tYXAoKHZpZGVvKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VmlkZW9OYW1lc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcGljPXt0b3BpY31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWRlbz17dmlkZW99XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHlOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHRvcGljLmFydGljbGVzICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgdG9waWMuYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QXJ0aWNsZU5hbWVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9waWM9e3RvcGljfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFydGljbGU9e2FydGljbGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lhbGl0eU5hbWU9e3NwZWNpYWxpdHlOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0dG9waWNzOiBzdGF0ZS50b3BpYy50b3BpY3MsXHJcblx0dXNlcjogc3RhdGUuYXV0aC51c2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldFRvcGljcywgZGVsZXRlVG9waWMgfSkoXHJcblx0VG9waWNzT3ZlcnZpZXdcclxuKTtcclxuXHJcbmNvbnN0IEFjdGlvbkJ1dHRvbnMgPSAoe1xyXG5cdGhhbmRsZURlbGV0ZSxcclxuXHR0b3BpYyxcclxuXHRzcGVjaWFsaXR5TmFtZSxcclxuXHRzZWxlY3RlZElkLFxyXG5cdHNldFNlbGVjdGVkSWQsXHJcblx0dXNlcixcclxufSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWN0aW9uLWJ1dHRvbnMnPlxyXG5cdFx0XHQ8QWRtaW5CdXR0b25zXHJcblx0XHRcdFx0dHlwZT0nRWRpdCdcclxuXHRcdFx0XHRkYXRhPXt0b3BpY31cclxuXHRcdFx0XHR1cmw9e2AvJHtzcGVjaWFsaXR5TmFtZX0vdG9waWMvZWRpdC8ke3RvcGljLl9pZH1gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QWRtaW5CdXR0b25zIHR5cGU9J0RlbGV0ZScgaGFuZGxlcj17aGFuZGxlRGVsZXRlfSBkYXRhPXt0b3BpY30gLz5cclxuXHRcdFx0PEFkbWluQnV0dG9ucyB0eXBlPSdBZGQnIGRhdGE9e3RvcGljfSB1cmw9e2AvdmlkZW8vYWRkLyR7dG9waWMuX2lkfWB9IC8+XHJcblx0XHRcdHt0b3BpYy5sb2NrZWQgJiYgIXVzZXIudW5Mb2NrZWRUb3BpY3MuaW5jbHVkZXModG9waWMuX2lkKSA/IChcclxuXHRcdFx0XHQ8TG9jayAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxBY2NvcmRpb24uVG9nZ2xlXHJcblx0XHRcdFx0XHRhcz17QnV0dG9ufVxyXG5cdFx0XHRcdFx0dmFyaWFudD0nbGluaydcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxvYXQtcmlnaHQgYXJyb3ctZG93bidcclxuXHRcdFx0XHRcdGV2ZW50S2V5PXt0b3BpYy5uYW1lLnNwbGl0KC9cXHMvKS5qb2luKCcnKX0gLy8gdG8gcmVtb3ZlIHNwYWNlc1xyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoc2VsZWN0ZWRJZCA9PT0gdG9waWMuX2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZCgnJyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJZCh0b3BpYy5faWQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdDxzdmdcclxuXHRcdFx0XHRcdFx0aWQ9e3RvcGljLm5hbWUuc3BsaXQoL1xccy8pLmpvaW4oJycpfVxyXG5cdFx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMzIgMzInXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24gaWNvbi1jaGV2cm9uLWJvdHRvbSBhcnRpY2xlLWR3biBhcnRpY2xlLXRvZ2dsZSBmYS1hbmdsZS1kb3duICR7XHJcblx0XHRcdFx0XHRcdFx0dG9waWMuX2lkID09PSBzZWxlY3RlZElkID8gJ3JvdGF0ZScgOiAnJ1xyXG5cdFx0XHRcdFx0XHR9YH0+XHJcblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xNi4wMDMgMTguNjI2bDcuMDgxLTcuMDgxTDI1IDEzLjQ2bC04Ljk5NyA4Ljk5OC05LjAwMy05IDEuOTE3LTEuOTE2eicgLz5cclxuXHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcnRpY2xlUHJldmlldyBmcm9tICcuL0FydGljbGVQcmV2aWV3JztcclxuXHJcbmNvbnN0IFZpZGVvUHJldmlldyA9ICh7IHZpZGVvIH0pID0+IHtcclxuXHRjb25zb2xlLmxvZyh2aWRlbyk7XHJcblx0cmV0dXJuIHZpZGVvICYmICF2aWRlby5jb250ZW50ID8gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3ZpZGVvLWNvbnRhaW5lcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd2aWRlbyc+XHJcblx0XHRcdFx0PGlmcmFtZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdpZnJhbWUnXHJcblx0XHRcdFx0XHRzcmM9e3ZpZGVvLnVybH1cclxuXHRcdFx0XHRcdHRpdGxlPSdZb3VUdWJlIHZpZGVvIHBsYXllcidcclxuXHRcdFx0XHRcdGZyYW1lQm9yZGVyPScwJ1xyXG5cdFx0XHRcdFx0YWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUnXHJcblx0XHRcdFx0XHRhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ndGl0bGUnPnt2aWRlby5uYW1lfTwvaDM+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Rlc2MnPnt2aWRlby5kZXNjcmlwdGlvbn08L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlua2VkLWFydGljbGVzJz5cclxuXHRcdFx0XHRcdDxoND5BcnRpY2xlcyBSZWxhdGVkIHRvIHRoZSB0b3BpYzwvaDQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KSA6IChcclxuXHRcdDxBcnRpY2xlUHJldmlldyBTZWxlY3RlZEFydGljbGU9e3ZpZGVvfSAvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblx0dmlkZW86IHN0YXRlLnZpZGVvLnNlbGVjdGVkVmlkZW8sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFZpZGVvUHJldmlldyk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmE5YzM0OTYxNmRjNzY5MWVmNjBhMzIwNzAzY2I3N2EuUE5HXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1odG1sLXBhcnNlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGFibGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10aXBweVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL3NyYy9BcHAnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zcmMvc3RvcmUnO1xyXG5cclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcclxuXHJcbmNvbnN0IGh0bWwgPSBmcy5yZWFkRmlsZVN5bmMoJ2J1aWxkL2luZGV4Lmh0bWwnKS50b1N0cmluZygpO1xyXG5cclxuY29uc3QgcGFydHMgPSBodG1sLnNwbGl0KCc8IS0tIG5vdCByZW5kZXJlZCAtLT4nKTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ2J1aWxkJykpO1xyXG5hcHAudXNlKChyZXEsIHJlcykgPT4ge1xyXG5cdGNvbnN0IHJlYWN0TWFya3VwID0gKFxyXG5cdFx0PFJlYWN0LlN0cmljdE1vZGU+XHJcblx0XHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cdFx0XHRcdDxTdGF0aWNSb3V0ZXIgdXJsPXtyZXEudXJsfT5cclxuXHRcdFx0XHRcdDxBcHAgLz5cclxuXHRcdFx0XHQ8L1N0YXRpY1JvdXRlcj5cclxuXHRcdFx0PC9Qcm92aWRlcj5cclxuXHRcdDwvUmVhY3QuU3RyaWN0TW9kZT5cclxuXHQpO1xyXG5cclxuXHRyZXMuc2VuZChgJHtwYXJ0c1swXX0ke3JlbmRlclRvU3RyaW5nKHJlYWN0TWFya3VwKX0ke3BhcnRzWzFdfWApO1xyXG5cdHJlcy5lbmQoKTtcclxufSk7XHJcblxyXG5jb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uICR7UE9SVH1gKTtcclxuYXBwLmxpc3RlbihQT1JUKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
