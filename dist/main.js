(() => {
	var e,
		t = {
			637: (e, t, a) => {
				'use strict';
				var n = a(297),
					l = a.n(n);
				const r = require('express');
				var o = a.n(r),
					c = a(481),
					s = a(79);
				const i = require('react-dom/server'),
					d = require('@loadable/server');
				var m = a(146);
				const p = require('fs');
				var u = a.n(p);
				const E = require('path');
				var y = a.n(E);
				require('reload');
				const h = require('serialize-javascript');
				var v = a.n(h),
					g = a(34),
					f = a(762),
					w = a(897),
					N = a(693),
					T = a(561),
					C = a(176),
					I = a(694),
					A = a.n(I),
					S = a(69);
				const R = [A()],
					_ = (0, T.createStore)(
						S.Z,
						{},
						(0, C.composeWithDevTools)((0, T.applyMiddleware)(...R))
					);
				var b = a(76),
					k = a(226),
					L = a(350),
					x = a(163);
				const O = () =>
						l().createElement(
							'div',
							null,
							l().createElement(
								'ul',
								{ className: 'navbar-nav ml-auto py-4 py-md-0' },
								l().createElement(
									'li',
									{ className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4' },
									l().createElement(
										m.NavLink,
										{ to: '/home', className: 'nav-link' },
										'Home'
									)
								),
								l().createElement(
									'li',
									{ className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4' },
									l().createElement(
										m.NavLink,
										{ to: '/about', className: 'nav-link' },
										'About'
									)
								),
								l().createElement(
									'li',
									{ className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4' },
									l().createElement(
										m.NavLink,
										{
											className: 'nav-link ',
											to: '/learn',
											role: 'button',
											'aria-expanded': 'false',
										},
										'Learn'
									),
									l().createElement('div', { className: 'dropdown-menu' })
								),
								l().createElement(
									'li',
									{ className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4' },
									l().createElement(
										m.NavLink,
										{
											className: 'nav-link ',
											to: '/login',
											role: 'button',
											'aria-haspopup': 'true',
											'aria-expanded': 'false',
										},
										'Login'
									),
									l().createElement('div', { className: 'dropdown-menu' })
								)
							)
						),
					D = () =>
						l().createElement(
							'div',
							null,
							l().createElement(
								'ul',
								{ className: 'navbar-nav ml-auto py-4 py-md-0' },
								l().createElement(
									'li',
									{ className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4' },
									l().createElement(
										m.NavLink,
										{ to: '/home', className: 'nav-link' },
										'Home'
									)
								),
								l().createElement(
									'li',
									{ className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4' },
									l().createElement(
										m.NavLink,
										{ to: '/about', className: 'nav-link' },
										'About'
									)
								),
								l().createElement(
									'li',
									{ className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4' },
									l().createElement(
										m.NavLink,
										{
											className: 'nav-link ',
											to: '/learn',
											role: 'button',
											'aria-expanded': 'false',
										},
										'Learn'
									),
									l().createElement('div', { className: 'dropdown-menu' })
								),
								l().createElement(
									'li',
									{ className: 'nav-item pl-4 pl-md-0 ml-0 ml-md-4' },
									l().createElement(
										'a',
										{
											onClick: () => {
												x.C5 && localStorage.clear();
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
				var P = a(81);
				const q = (0, s.connect)((e) => ({ auth: e.auth, ui: e.ui }), {
					setDisplayMode: L.U,
				})(({ auth: e, ui: t, setDisplayMode: a }) => {
					const [r, o] = (0, n.useState)(!1),
						[c, s] = (0, n.useState)(!1);
					if (
						((0, n.useEffect)(() => {
							document.querySelector('body').classList.add(t.displayMode),
								console.log(t.displayMode),
								'dark' === t.displayMode && s(!0);
						}, [s, t.displayMode]),
						x.C5)
					) {
						let e = 'light';
						(e = localStorage.getItem('mode')),
							'dark' === e
								? document.querySelector('body').classList.add('dark')
								: document.querySelector('body').classList.remove('dark');
					}
					return l().createElement(
						'div',
						{ className: 'navigation-wrap bg-light start-header start-style' },
						l().createElement(
							'div',
							{ className: 'container' },
							l().createElement(
								k.Accordion,
								null,
								l().createElement(
									k.Row,
									null,
									l().createElement(
										k.Col,
										null,
										l().createElement(
											'nav',
											{ className: 'navbar navbar-expand-md navbar-light' },
											l().createElement(
												m.Link,
												{ to: '/' },
												l().createElement('img', {
													style: {
														fontSize:
															x.C5 && window.innerHeight >= 767
																? '2rem'
																: '1.2rem',
													},
													className: 'nav-logo',
													src: P,
													alt: '',
												})
											),
											l().createElement(
												'div',
												{
													id: 'switch',
													onClick: () => {
														a(), s(!c);
													},
													className:
														'switch float-right ' + (c ? 'switched' : ''),
												},
												l().createElement(
													'div',
													{
														style: {
															backgroundColor:
																'dark' === t.displayMode ? '#111' : '#f1f1f1',
														},
														id: 'circle',
													},
													l().createElement('img', {
														className: 'mode-icon',
														style: { width: '20px' },
														src:
															'dark' === t.displayMode
																? 'https://www.svgrepo.com/show/3158/moon.svg'
																: 'https://www.svgrepo.com/show/83726/sun.svg',
														alt: '',
													})
												)
											),
											l().createElement(
												'div',
												{ className: 'points-box ' },
												l().createElement(
													'div',
													null,
													l().createElement(
														'span',
														{ className: 'points-text' },
														' Points '
													),
													l().createElement(
														'span',
														null,
														l().createElement('img', {
															alt: 'CG Points',
															src: 'https://image.flaticon.com/icons/svg/715/715709.svg',
															className: 'points-img',
														})
													),
													l().createElement(
														'span',
														null,
														' ',
														e.user && e.user.points,
														' '
													)
												)
											),
											l().createElement(
												'div',
												{ className: 'signed-links' },
												e.isAuthenticated && e.isAuthenticated
													? l().createElement(
															l().Fragment,
															null,
															l().createElement(D, null)
													  )
													: l().createElement(O, null)
											),
											l().createElement(
												k.Accordion.Toggle,
												{
													className: 'nav-btn',
													onClick: () => {
														o(!r);
													},
													as: k.Button,
													variant: 'link',
													eventKey: '5',
												},
												l().createElement(
													'a',
													{
														className: 'navbar-toggler',
														type: 'button',
														'data-target': '#navbarSupportedContent',
														'aria-controls': 'navbarSupportedContent',
														'aria-expanded': r,
														'aria-label': 'Toggle navigation',
													},
													l().createElement('span', {
														className: 'navbar-toggler-icon',
													})
												)
											),
											l().createElement(
												k.Accordion.Collapse,
												{
													className: ' ',
													id: 'navbarSupportedContent',
													eventKey: '5',
												},
												l().createElement(
													'div',
													null,
													e.user && e.user.userId
														? l().createElement(D, null)
														: l().createElement(O, null)
												)
											)
										)
									)
								)
							)
						)
					);
				});
				N.isClient && localStorage.token && (0, N.u)(localStorage.token);
				const V = () => (
					(0, n.useEffect)(() => {
						_.dispatch((0, w.II)());
					}, []),
					console.log('app, checking working'),
					l().createElement(
						'div',
						{ className: 'App' },
						l().createElement(q, null),
						l().createElement(
							f.AnimatePresence,
							null,
							l().createElement(
								m.Switch,
								null,
								l().createElement(
									m.Route,
									{ exact: !0, path: '/' },
									l().createElement(m.Redirect, { to: '/home' })
								),
								b.Z.map(({ path: e, component: t, render: a }) =>
									l().createElement(m.Route, {
										key: e,
										path: e,
										exact: !0,
										component: t,
										render: a,
									})
								)
							)
						),
						l().createElement(g.ToastContainer, null)
					)
				);
				var G = a(895);
				const F = process.env.PORT || 3e3;
				var $ = u().readFileSync('build/index.html').toString();
				const j = o()();
				j.use(o().static('build')),
					j.use(async (e, t) => {
						var a;
						let n;
						const r = (0, G.Z)(),
							o = y().resolve('./build/loadable-stats.json');
						b.Z.map((t) => {
							const a = (0, m.matchPath)(e.url, {
								...t,
								exact: !0,
								url: e.url,
							});
							a && (n = { ...t, params: a.params });
						}),
							console.log('ad', n),
							(null !== (a = n) && void 0 !== a && a.loadData
								? n.loadData(r, n.params)
								: Promise.resolve()
							).then((a) => {
								const n = l().createElement(
										l().StrictMode,
										null,
										l().createElement(
											s.Provider,
											{ store: r },
											l().createElement(
												m.StaticRouter,
												{ location: e.url, context: {} },
												l().createElement(V, null)
											)
										)
									),
									p = new d.ChunkExtractor({ statsFile: o, publicPath: '/' }),
									u = (0, i.renderToString)(p.collectChunks(n)),
									E = c.Helmet.renderStatic();
								let y = $.replace(
									'\x3c!-- Helmet --\x3e',
									`${E.title.toString()}\n                 ${E.meta.toString()}\n                 ${E.link.toString()}`
								)
									.replace('<div id="root"></div>', `<div id="root">${u}</div>`)
									.replace(
										'//script',
										`window._INITIAL_DATA_ = ${v()(r.getState()).replace(
											/</g,
											'\\u003c'
										)}`
									)
									.replace('\x3c!-- loadable --\x3e', p.getScriptTags());
								t.send(y), t.end();
							});
					}),
					j.listen(F, () => console.log(`listening on ${F}`));
			},
			76: (e, t, a) => {
				'use strict';
				a.d(t, { Z: () => u });
				var n = a(297),
					l = a.n(n),
					r = a(279),
					o = a.n(r),
					c = a(558),
					s = a(194),
					i = a(300),
					d = a(142),
					m = a(204);
				function p() {
					return (p =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var a = arguments[t];
								for (var n in a)
									Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
							}
							return e;
						}).apply(this, arguments);
				}
				const u = [
					{
						path: '/home',
						component: o()({
							resolved: {},
							chunkName: () => 'components-Home',
							isReady(e) {
								const t = this.resolve(e);
								return !0 === this.resolved[t] && !!a.m[t];
							},
							importAsync: () => a.e(926).then(a.bind(a, 313)),
							requireAsync(e) {
								const t = this.resolve(e);
								return (
									(this.resolved[t] = !1),
									this.importAsync(e).then((e) => ((this.resolved[t] = !0), e))
								);
							},
							requireSync(e) {
								const t = this.resolve(e);
								return a(t);
							},
							resolve: () => 313,
						}),
					},
					{
						path: '/about',
						component: o()({
							resolved: {},
							chunkName: () => 'components-About',
							isReady(e) {
								const t = this.resolve(e);
								return !0 === this.resolved[t] && !!a.m[t];
							},
							importAsync: () => a.e(739).then(a.bind(a, 932)),
							requireAsync(e) {
								const t = this.resolve(e);
								return (
									(this.resolved[t] = !1),
									this.importAsync(e).then((e) => ((this.resolved[t] = !0), e))
								);
							},
							requireSync(e) {
								const t = this.resolve(e);
								return a(t);
							},
							resolve: () => 932,
						}),
					},
					{
						path: '/learn',
						component: o()({
							resolved: {},
							chunkName: () => 'components-Learn',
							isReady(e) {
								const t = this.resolve(e);
								return !0 === this.resolved[t] && !!a.m[t];
							},
							importAsync: () => a.e(826).then(a.bind(a, 521)),
							requireAsync(e) {
								const t = this.resolve(e);
								return (
									(this.resolved[t] = !1),
									this.importAsync(e).then((e) => ((this.resolved[t] = !0), e))
								);
							},
							requireSync(e) {
								const t = this.resolve(e);
								return a(t);
							},
							resolve: () => 521,
						}),
					},
					{
						path: '/blog/read/:name',
						...o()({
							resolved: {},
							chunkName: () => 'components-Article',
							isReady(e) {
								const t = this.resolve(e);
								return !0 === this.resolved[t] && !!a.m[t];
							},
							importAsync: () => a.e(811).then(a.bind(a, 825)),
							requireAsync(e) {
								const t = this.resolve(e);
								return (
									(this.resolved[t] = !1),
									this.importAsync(e).then((e) => ((this.resolved[t] = !0), e))
								);
							},
							requireSync(e) {
								const t = this.resolve(e);
								return a(t);
							},
							resolve: () => 825,
						}),
					},
					{
						path: '/learn/:specialityName',
						...o()({
							resolved: {},
							chunkName: () => 'components-Preview',
							isReady(e) {
								const t = this.resolve(e);
								return !0 === this.resolved[t] && !!a.m[t];
							},
							importAsync: () => a.e(877).then(a.bind(a, 893)),
							requireAsync(e) {
								const t = this.resolve(e);
								return (
									(this.resolved[t] = !1),
									this.importAsync(e).then((e) => ((this.resolved[t] = !0), e))
								);
							},
							requireSync(e) {
								const t = this.resolve(e);
								return a(t);
							},
							resolve: () => 893,
						}),
					},
					{
						path: '/blog',
						...o()({
							resolved: {},
							chunkName: () => 'components-Blog',
							isReady(e) {
								const t = this.resolve(e);
								return !0 === this.resolved[t] && !!a.m[t];
							},
							importAsync: () => a.e(889).then(a.bind(a, 116)),
							requireAsync(e) {
								const t = this.resolve(e);
								return (
									(this.resolved[t] = !1),
									this.importAsync(e).then((e) => ((this.resolved[t] = !0), e))
								);
							},
							requireSync(e) {
								const t = this.resolve(e);
								return a(t);
							},
							resolve: () => 116,
						}),
					},
					{
						path: '/signup',
						render: (e) => l().createElement(c.Z, p({}, e, { type: 'signup' })),
					},
					{
						path: '/signup/:referCode',
						render: (e) => l().createElement(c.Z, p({}, e, { type: 'signup' })),
					},
					{
						path: '/login',
						render: (e) => l().createElement(c.Z, p({}, e, { type: 'login' })),
					},
					{
						path: '/AddCard',
						render: (e) => l().createElement(s.Z, p({ edit: !1 }, e)),
					},
					{
						path: '/updatespeciality/:specialityName',
						render: (e) => l().createElement(s.Z, p({ edit: !0 }, e)),
					},
					{
						path: '/:specialityName/topic/add',
						render: (e) => l().createElement(i.Z, p({ edit: !1 }, e)),
					},
					{
						path: '/:specialityName/topic/edit/:topicId',
						render: (e) => l().createElement(i.Z, p({ edit: !0 }, e)),
					},
					{
						path: '/article/add',
						render: (e) => l().createElement(d.Z, p({ edit: !1 }, e)),
					},
					{
						path: '/article/update',
						render: (e) => l().createElement(d.Z, p({ edit: !0 }, e)),
					},
					{
						path: '/video/add/:topicId',
						render: (e) => l().createElement(m.Z, p({ edit: !1 }, e)),
					},
					{
						path: '/video/update/:videoId',
						render: (e) => l().createElement(m.Z, p({ edit: !0 }, e)),
					},
				];
			},
			868: (e, t, a) => {
				'use strict';
				a.d(t, {
					xf: () => r,
					HA: () => o,
					fq: () => c,
					zC: () => s,
					qM: () => i,
					OD: () => d,
					jX: () => m,
				});
				var n = a(163),
					l = a(51);
				const r = (e) => async (e) => {
						e({ type: 'CLEAR_ARTICLE' });
					},
					o = (e) => async (t) => {
						const { action: a, articleId: r, userId: o } = e;
						try {
							const e = await (0, n.FE)(
								`api/article/${r}/${a}`,
								{ userId: o },
								{ 'Content-Type': 'application/json' }
							);
							console.log(e.data),
								(0, l.Q)(e),
								t({ type: 'LIKE_ARTICLE', payload: e.data });
						} catch (e) {
							(0, l.J)(e), t({ type: 'LIKE_ARTICLE_ERROR', payload: {} });
						}
					},
					c = (e) => async (t) => {
						try {
							const a = await (0, n.FE)(
								'api/article/get',
								{ name: e },
								{ 'Content-Type': 'application/json' }
							);
							(0, l.Q)(a),
								console.log(a.data),
								t({ type: 'GET_ARTICLE', payload: a.data });
						} catch (e) {
							(0, l.J)(e), t({ type: 'GET_ARTICLE_ERROR', payload: {} });
						}
					},
					s = () => async (e) => {
						try {
							const t = await (0, n.iV)('api/article/all');
							console.log(t.status),
								(0, l.Q)(t),
								e({ type: 'GET_ALL_ARTICLES', payload: t.data });
						} catch (t) {
							(0, l.J)(t), e({ type: 'GET_ALL_ARTICLES_ERROR', payload: {} });
						}
					},
					i = (e) => async (t) => {
						try {
							console.log(e);
							const a = await (0, n.FE)('api/article/add', e, {
								'Content-Type': 'application/json',
							});
							console.log(a.data),
								t({ type: 'ADD_ARTICLE', payload: a.data }),
								(0, l.Q)(a);
						} catch (e) {
							(0, l.J)(e), t({ type: 'ADD_ARTICLE_ERROR', payload: {} });
						}
					},
					d = (e, t, a) => async (r) => {
						try {
							const o = await (0, n.FE)(`api/article/update/${t}`, e, {
								'Content-Type': 'application/json',
							});
							console.log(o.data), r({ type: 'EDIT_ARTICLE', payload: o.data });
							const c = await (0, n.iV)(`api/topic/get/${a}`);
							console.log(c.data),
								(0, l.Q)(o),
								r({ type: 'GET_TOPICS', payload: c.data });
						} catch (e) {
							(0, l.J)(e), r({ type: 'EDIT_ARTICLE_ERROR', payload: {} });
						}
					},
					m = (e, t, a) => async (r) => {
						try {
							const o = await (0, n.FE)(
								`api/article/delete/${e}/${t}`,
								{},
								{ 'Content-Type': 'application/json' }
							);
							console.log(o.data),
								r({ type: 'DELETE_ARTICLE', payload: o.data });
							const c = await (0, n.iV)(`api/topic/get/${a}`);
							console.log(c.data),
								(0, l.Q)(o),
								r({ type: 'GET_TOPICS', payload: c.data });
						} catch (e) {
							(0, l.J)(e), r({ type: 'DELETE_ARTICLE_ERROR', payload: {} });
						}
					};
			},
			897: (e, t, a) => {
				'use strict';
				a.d(t, { II: () => o, z2: () => c, x4: () => s });
				var n = a(962),
					l = a(163),
					r = a(51);
				const o = () => async (e) => {
						if (
							(console.log('loadUser'),
							e({ type: 'SET_AUTH_LOADER' }),
							console.log(l.C5),
							l.C5 && localStorage.token && (0, l.uB)(localStorage.token),
							l.C5 && localStorage.userId)
						) {
							const t = localStorage.getItem('userId');
							try {
								const a = await (0, l.iV)(`api/auth/user/${t}`);
								(0, r.Q)(a),
									console.log('this is user', a.data),
									e({ type: 'USER_LOADED', payload: a.data.user });
							} catch (t) {
								(0, r.J)(t), e({ type: n.Ny });
							}
						}
					},
					c = (e) => async (t) => {
						t({ type: 'SET_AUTH_LOADER' });
						const a = { 'Content-Type': 'application/json' },
							c = JSON.stringify(e);
						try {
							const e = await (0, l.FE)('api/auth/signup', c, a);
							t({ type: 1 === e.status ? n.bp : n.YY, payload: e.data }),
								(0, r.Q)(e),
								console.log(e),
								t(o());
						} catch (e) {
							(0, r.J)(e), t({ type: n.YY });
						}
					},
					s =
						({ email: e, password: t }) =>
						async (a) => {
							a({ type: 'SET_AUTH_LOADER' });
							const c = { 'Content-Type': 'application/json' },
								s = JSON.stringify({ email: e, password: t });
							try {
								var i, d, m;
								const e = await (0, l.FE)('api/auth/login', s, c);
								console.log(e),
									a({
										type: 1 === e.status ? n.XP : n.Qj,
										payload: {
											userId:
												null === (i = e.data) ||
												void 0 === i ||
												null === (d = i.user) ||
												void 0 === d
													? void 0
													: d.userId,
											token:
												null === (m = e.data) || void 0 === m
													? void 0
													: m.token,
										},
									}),
									a(o()),
									(0, r.Q)(e);
							} catch (e) {
								console.log(e), (0, r.J)(e), a({ type: n.Qj });
							}
						};
			},
			49: (e, t, a) => {
				'use strict';
				a.d(t, {
					qM: () => n.qM,
					yz: () => s,
					Gr: () => m.Gr,
					cN: () => u,
					xf: () => n.xf,
					jX: () => n.jX,
					Lc: () => d,
					BK: () => m.BK,
					FM: () => y,
					OD: () => n.OD,
					nT: () => i,
					wA: () => m.wA,
					md: () => E,
					fq: () => n.fq,
					hZ: () => o,
					hg: () => c,
					BB: () => m.BB,
					om: () => p,
					Uw: () => h,
				});
				var n = a(868),
					l = (a(897), a(163)),
					r = a(51);
				const o = () => async (e) => {
						try {
							const t = await (0, l.iV)('api/speciality/all');
							console.log(t),
								e({ type: 'GET_SPECIALITIES', payload: t.data }),
								(0, r.Q)(t);
						} catch (t) {
							(0, r.J)(t), e({ type: 'GET_SPECIALITIES_ERROR', payload: {} });
						}
					},
					c = (e) => async (t) => {
						try {
							const a = await (0, l.iV)(`api/speciality/get/${e}`);
							t({ type: 'GET_SPECIALITY', payload: a.data.speciality }),
								(0, r.Q)(a);
						} catch (e) {
							(0, r.J)(e),
								console.log(e),
								t({ type: 'GET_SPECIALITY_ERROR', payload: {} });
						}
					},
					s = (e) => async (t) => {
						try {
							console.log(e);
							const a = await (0, l.FE)('api/speciality/add', e, {
								'Content-Type': 'application/json',
							});
							console.log(a.data),
								t({ type: 'ADD_SPECIALITIY', payload: a.data }),
								t({
									type: 'GET_SPECIALITIES',
									payload: (await (0, l.iV)('api/speciality/all')).data,
								}),
								(0, r.Q)(a);
						} catch (e) {
							(0, r.J)(e), t({ type: 'ADD_SPECIALITY_ERROR', payload: {} });
						}
					},
					i = (e, t) => async (a) => {
						try {
							const n = await (0, l.FE)(`api/speciality/update/${t}`, e, {
								'Content-Type': 'application/json',
							});
							a({ type: 'EDIT_SPECIALITIY', payload: n.data }),
								a({
									type: 'GET_SPECIALITIES',
									payload: (await (0, l.iV)('api/speciality/all')).data,
								}),
								(0, r.Q)(n);
						} catch (e) {
							(0, r.J)(e), a({ type: 'EDIT_SPECIALITY_ERROR', payload: {} });
						}
					},
					d = (e) => async (t) => {
						try {
							const a = await (0, l.FE)(
								`api/speciality/delete/${e}`,
								{},
								{ 'Content-Type': 'application/json' }
							);
							t({ type: 'DELETE_SPECIALITIY', payload: a.data }),
								t({
									type: 'GET_SPECIALITIES',
									payload: (await (0, l.iV)('api/speciality/all')).data,
								}),
								(0, r.Q)(a);
						} catch (e) {
							(0, r.J)(e), t({ type: 'DELETE_SPECIALITY_ERROR', payload: {} });
						}
					};
				var m = a(83);
				a(350);
				const p = (e) => async (t) => {
						try {
							const a = await (0, l.iV)(`api/video/get/${e}`);
							(0, r.Q)(a), t({ type: 'GET_VIDEO', payload: a.data });
						} catch (e) {
							(0, r.J)(e), t({ type: 'ADD_VIDEO_ERROR', payload: {} });
						}
					},
					u = (e, t, a) => async (n) => {
						try {
							const o = await (0, l.FE)(`api/video/add/${t}`, e, {
								'Content-Type': 'application/json',
							});
							(0, r.Q)(o), n({ type: 'ADD_VIDEO', payload: o.data });
							const c = await (0, l.iV)(`api/topic/get/${a}`);
							console.log(c), n({ type: 'GET_TOPICS', payload: c.data });
						} catch (e) {
							(0, r.J)(e), n({ type: 'ADD_VIDEO_ERROR', payload: {} });
						}
					},
					E = (e, t, a) => async (n) => {
						try {
							const o = await (0, l.FE)(`api/video/update/${t}`, e, {
								'Content-Type': 'application/json',
							});
							console.log(o.data),
								n({ type: 'EDIT_VIDEO', payload: o.data }),
								(0, r.Q)(o);
							const c = await (0, l.iV)(`api/topic/get/${a}`);
							console.log(c.data), n({ type: 'GET_TOPICS', payload: c.data });
						} catch (e) {
							(0, r.J)(e), n({ type: 'EDIT_VIDEO_ERROR', payload: {} });
						}
					},
					y = (e, t, a) => async (n) => {
						try {
							const o = await (0, l.FE)(
								`api/video/delete/${e}/${t}`,
								{},
								{ 'Content-Type': 'application/json' }
							);
							console.log(o.data), n({ type: 'DELETE_VIDEO', payload: o.data });
							const c = await (0, l.iV)(`api/topic/get/${a}`);
							console.log(c.data),
								(0, r.Q)(o),
								n({ type: 'GET_TOPICS', payload: c.data });
						} catch (e) {
							(0, r.J)(e), n({ type: 'DELETE_VIDEO_ERROR', payload: {} });
						}
					},
					h = (e) => (t) => {
						try {
							t({ type: 'SELECT_VIDEO', payload: e });
						} catch (e) {
							t({ type: 'SELECT_VIDEO_ERROR' });
						}
					};
			},
			51: (e, t, a) => {
				'use strict';
				a.d(t, { Q: () => l, J: () => r });
				var n = a(34);
				const l = (e) => {
						1 == e.status
							? n.toast.success(e.message, { position: 'top-right' })
							: n.toast.error(e.message, { position: 'top-right' });
					},
					r = (e) => {
						n.toast.error(e.message, { position: 'top-right' });
					};
			},
			83: (e, t, a) => {
				'use strict';
				a.d(t, {
					BB: () => r,
					Gr: () => o,
					wA: () => c,
					fQ: () => s,
					BK: () => i,
				});
				var n = a(163),
					l = (a(34), a(51));
				const r = (e) => async (t) => {
						try {
							const a = await (0, n.iV)(`api/topic/get/${e}`);
							console.log(a.data),
								t({ type: 'GET_TOPICS', payload: a.data }),
								(0, l.Q)(a);
						} catch (e) {
							(0, l.J)(e), t({ type: 'GET_TOPICS_ERROR', payload: {} });
						}
					},
					o = (e, t) => async (a) => {
						console.log(t);
						try {
							console.log(e);
							const r = await (0, n.FE)('api/topic/add', e, {
								'Content-Type': 'application/json',
							});
							(0, l.Q)(r),
								console.log(r.data),
								a({ type: 'ADD_TOPIC', payload: r.data }),
								a({
									type: 'GET_TOPICS',
									payload: (await (0, n.iV)(`api/topic/get/${t}`)).data,
								});
						} catch (e) {
							(0, l.J)(e), a({ type: 'ADD_TOPIC_ERROR', payload: {} });
						}
					},
					c = (e, t, a) => async (r) => {
						try {
							const o = await (0, n.FE)(`api/topic/update/${t}`, e, {
								'Content-Type': 'application/json',
							});
							console.log(o.data),
								r({ type: 'EDIT_TOPIC', payload: o.data }),
								(0, l.Q)(o),
								r({
									type: 'GET_TOPICS',
									payload: (await (0, n.iV)(`api/topic/get/${a}`)).data,
								});
						} catch (e) {
							(0, l.J)(e), r({ type: 'EDIT_TOPIC_ERROR', payload: {} });
						}
					},
					s = (e, t) => async (a) => {
						console.log(t);
						try {
							const r = await (0, n.FE)(
								`api/topic/unlock/${e}`,
								{},
								{ 'Content-Type': 'application/json' }
							);
							(0, l.Q)(r),
								a({ type: 'USERLOADED', payload: r.data.user }),
								a({ type: 'UNLOCK_TOPIC', payload: r.data }),
								a({
									type: 'GET_TOPICS',
									payload: (await (0, n.iV)(`api/topic/get/${t}`)).data,
								});
						} catch (e) {
							(0, l.J)(e), a({ type: 'UNLOCK_TOPIC_ERROR', payload: {} });
						}
					},
					i = (e, t) => async (a) => {
						console.log({ id: e, specialityName: t });
						try {
							const r = await (0, n.FE)(
								`api/topic/delete/${e}`,
								{},
								{ 'Content-Type': 'application/json' }
							);
							console.log(r.data),
								(0, l.Q)(r),
								a({ type: 'DELETE_TOPIC', payload: r.data }),
								a({
									type: 'GET_TOPICS',
									payload: (await (0, n.iV)(`api/topic/get/${t}`)).data,
								});
						} catch (e) {
							(0, l.J)(e), a({ type: 'DELETE_TOPIC_ERROR', payload: {} });
						}
					};
			},
			962: (e, t, a) => {
				'use strict';
				a.d(t, {
					XP: () => n,
					Qj: () => l,
					bp: () => r,
					YY: () => o,
					sK: () => c,
					Nv: () => s,
					Cy: () => i,
					Ny: () => d,
				});
				const n = 'LOGIN_SUCCESS',
					l = 'LOGIN_FAIL',
					r = 'REGISTER_SUCCESS',
					o = 'REGISTER_FAIL',
					c = 'SEND_RESET_EMAIL',
					s = 'LOGOUT',
					i = 'USERLOADED',
					d = 'AUTH_ERROR';
			},
			350: (e, t, a) => {
				'use strict';
				a.d(t, { U: () => r });
				var n = a(895),
					l = a(163);
				const r = () => async (e) => {
					const t = 'dark' === n.Z.getState().ui.displayMode ? 'light' : 'dark';
					l.C5 && localStorage.setItem('mode', t),
						e({ type: 'SET_DISPLAY_MODE', payload: t });
				};
			},
			304: (e, t, a) => {
				'use strict';
				a.d(t, {
					mm: () => r,
					Es: () => s,
					X1: () => p,
					HG: () => o,
					HE: () => d,
					OS: () => i,
					Sl: () => m,
					BN: () => c,
				});
				var n = a(297),
					l = a.n(n);
				const r = ({ size: e = 33, color: t = '#000000' }) =>
						l().createElement(
							'svg',
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: e,
								height: e,
								viewBox: '0 0 24 24',
								fill: 'none',
								stroke: t,
								strokeWidth: '3.5',
								strokeLinecap: 'square',
								strokeLinejoin: 'arcs',
							},
							l().createElement('line', {
								x1: '12',
								y1: '5',
								x2: '12',
								y2: '19',
							}),
							l().createElement('line', {
								x1: '5',
								y1: '12',
								x2: '19',
								y2: '12',
							})
						),
					o = ({ size: e = 33, color: t = '#000000' }) =>
						l().createElement(
							'svg',
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: e,
								height: e,
								viewBox: '0 0 24 24',
								fill: 'none',
								stroke: t,
								strokeWidth: '2',
								strokeLinecap: 'square',
								strokeLinejoin: 'arcs',
							},
							l().createElement('polyline', { points: '3 6 5 6 21 6' }),
							l().createElement('path', {
								d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
							}),
							l().createElement('line', {
								x1: '10',
								y1: '11',
								x2: '10',
								y2: '17',
							}),
							l().createElement('line', {
								x1: '14',
								y1: '11',
								x2: '14',
								y2: '17',
							})
						),
					c = ({ size: e = 33, color: t = '#000000' }) =>
						l().createElement(
							'svg',
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: e,
								height: e,
								viewBox: '0 0 24 24',
								fill: 'none',
								stroke: t,
								strokeWidth: '2',
								strokeLinecap: 'square',
								strokeLinejoin: 'arcs',
							},
							l().createElement('path', {
								d: 'M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34',
							}),
							l().createElement('polygon', {
								points: '18 2 22 6 12 16 8 16 8 12 18 2',
							})
						),
					s = ({ size: e = 33, color: t = '#000000' }) =>
						l().createElement(
							'svg',
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: e,
								height: e,
								viewBox: '0 0 24 24',
								fill: 'none',
								stroke: t,
								strokeWidth: '3.5',
								strokeLinecap: 'square',
								strokeLinejoin: 'arcs',
							},
							l().createElement('path', { d: 'M17 11l-5-5-5 5M17 18l-5-5-5 5' })
						),
					i = ({ size: e = 33, color: t = '#000000' }) =>
						l().createElement(
							'svg',
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: e,
								height: e,
								viewBox: '0 0 24 24',
							},
							l().createElement('path', {
								d: 'M12 4.706c-2.938-1.83-7.416-2.566-12-2.706v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.876-12 2.706zm-10 13.104v-13.704c5.157.389 7.527 1.463 9 2.334v13.168c-1.525-.546-4.716-1.504-9-1.798zm20 0c-4.283.293-7.475 1.252-9 1.799v-13.171c1.453-.861 3.83-1.942 9-2.332v13.704zm-2-10.214c-2.086.312-4.451 1.023-6 1.672v-1.064c1.668-.622 3.881-1.315 6-1.626v1.018zm0 3.055c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0 6.093c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm-16-6.104c2.119.311 4.332 1.004 6 1.626v1.064c-1.549-.649-3.914-1.361-6-1.672v-1.018zm0 5.09c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.316-6-1.626v1.017zm0 6.093c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017z',
							})
						),
					d = ({ size: e = 33, color: t = '#DC143C', handler: a }) =>
						l().createElement(
							'svg',
							{
								onClick: a,
								xmlns: 'http://www.w3.org/2000/svg',
								width: '43',
								height: '43',
								viewBox: '0 0 24 24',
								fill: 'none',
								stroke: t,
								'stroke-width': '2',
								'stroke-linecap': 'round',
								'stroke-linejoin': 'round',
							},
							l().createElement('rect', {
								x: '3',
								y: '11',
								width: '18',
								height: '11',
								rx: '2',
								ry: '2',
							}),
							l().createElement('path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' })
						),
					m = ({ size: e = 33, color: t = '#00FF00' }) =>
						l().createElement(
							'svg',
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: '43',
								height: '43',
								viewBox: '0 0 24 24',
								fill: 'none',
								stroke: t,
								'stroke-width': '2',
								'stroke-linecap': 'round',
								'stroke-linejoin': 'round',
							},
							l().createElement('rect', {
								x: '3',
								y: '11',
								width: '18',
								height: '11',
								rx: '2',
								ry: '2',
							}),
							l().createElement('path', { d: 'M7 11V7a5 5 0 0 1 9.9-1' })
						),
					p = ({ size: e = 32, color: t = '#000000' }) =>
						l().createElement(
							'svg',
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: e,
								height: e,
								viewBox: '0 0 24 24',
								fill: 'none',
								stroke: t,
								strokeWidth: '1.5',
								strokeLinecap: 'square',
								strokeLinejoin: 'arcs',
							},
							l().createElement('line', {
								x1: '18',
								y1: '6',
								x2: '6',
								y2: '18',
							}),
							l().createElement('line', {
								x1: '6',
								y1: '6',
								x2: '18',
								y2: '18',
							})
						);
			},
			558: (e, t, a) => {
				'use strict';
				a.d(t, { Z: () => i });
				var n = a(297),
					l = a.n(n),
					r = a(146),
					o = a(79),
					c = a(897),
					s = a(163);
				const i = (0, o.connect)((e) => ({ token: e.auth.token }), {
					login: c.x4,
					register: c.z2,
				})(({ login: e, register: t, token: a, type: o }) => {
					const [c, i] = (0, n.useState)({});
					return a
						? l().createElement(r.Redirect, { to: '/learn' })
						: l().createElement(
								'div',
								{ className: 'auth-container' },
								l().createElement(s.pQ, { title: 'LogIn' }),
								l().createElement(
									'div',
									{ className: 'container' },
									l().createElement(
										'div',
										{ className: 'form-container' },
										l().createElement(
											'div',
											{ className: 'section' },
											l().createElement(
												'h6',
												{ className: 'dinTag' },
												'<Coders Gala/>'
											),
											'signup' === o
												? l().createElement(
														l().Fragment,
														null,
														l().createElement('h1', null, 'Sign Up'),
														l().createElement(
															'p',
															null,
															'Hey, Welcome to CodersGala !!'
														)
												  )
												: l().createElement(
														l().Fragment,
														null,
														l().createElement('h1', null, 'Login'),
														l().createElement(
															'p',
															null,
															'Hey there, Welcome Back !!'
														)
												  ),
											l().createElement(
												'form',
												{
													onSubmit: (a) => {
														a.preventDefault(),
															'signup' === o
																? (document
																		.querySelector('.section h1')
																		.classList.add('changed'),
																  t(c))
																: (a.preventDefault(),
																  document
																		.querySelector('.section h1')
																		.classList.add('changed'),
																  e(c));
													},
												},
												l().createElement(
													'div',
													{ className: 'signup' === o ? 'flex' : '' },
													l().createElement(
														'div',
														{ className: 'form-field' },
														l().createElement(
															'label',
															{ htmlFor: 'email' },
															'Email'
														),
														l().createElement('input', {
															onChange: (e) => {
																i((t) => ({ ...t, email: e.target.value }));
															},
															type: 'email',
															className: 'form-control',
															required: !0,
															placeholder: 'First Name',
														})
													),
													l().createElement(
														'div',
														{ className: 'form-field' },
														l().createElement(
															'label',
															{ htmlFor: 'password' },
															'Password'
														),
														l().createElement('input', {
															required: !0,
															onChange: (e) => {
																i((t) => ({ ...t, password: e.target.value }));
															},
															type: 'password',
															className: 'form-control',
															placeholder: 'Last Name',
														})
													)
												),
												'signup' === o
													? l().createElement(
															l().Fragment,
															null,
															' ',
															l().createElement(
																'div',
																{ className: 'flex' },
																l().createElement(
																	'div',
																	{ className: 'form-field' },
																	l().createElement(
																		'label',
																		{ htmlFor: 'firstName' },
																		'First Name'
																	),
																	l().createElement('input', {
																		onChange: (e) => {
																			i((t) => ({
																				...t,
																				firstName: e.target.value,
																			}));
																		},
																		type: 'text',
																		id: 'lastName',
																		className: 'form-control',
																		required: !0,
																		placeholder: 'First Name',
																	})
																),
																l().createElement(
																	'div',
																	{ className: 'form-field' },
																	l().createElement(
																		'label',
																		{ htmlFor: 'lastName' },
																		'Last Name'
																	),
																	l().createElement('input', {
																		onChange: (e) => {
																			i((t) => ({
																				...t,
																				lastName: e.target.value,
																			}));
																		},
																		type: 'text',
																		id: 'lastName',
																		className: 'form-control',
																		required: !0,
																		placeholder: 'Last Name',
																	})
																)
															),
															l().createElement(
																'div',
																{ className: 'flex' },
																l().createElement(
																	'div',
																	{ className: 'form-field' },
																	l().createElement(
																		'label',
																		{ htmlFor: 'age' },
																		'Age'
																	),
																	l().createElement('input', {
																		onChange: (e) => {
																			i((t) => ({ ...t, age: e.target.value }));
																		},
																		type: 'number',
																		id: 'age',
																		className: 'form-control',
																		required: !0,
																		placeholder: 'Age',
																	})
																),
																l().createElement(
																	'div',
																	{ className: 'form-field' },
																	l().createElement(
																		'label',
																		{ htmlFor: 'codeReferred' },
																		'Refer Code'
																	),
																	l().createElement('input', {
																		type: 'text',
																		id: 'codeReferred',
																		placeholder: 'PB18FC69',
																		defaultValue: '',
																		className: 'form-control',
																		onChange: (e) => {
																			i((t) => ({
																				...t,
																				codeReffered: e.target.value,
																			}));
																		},
																	})
																)
															)
													  )
													: null,
												'signup' === o
													? l().createElement(
															'div',
															{ className: 'form-options' },
															l().createElement(
																'div',
																{ className: 'checkbox-field' },
																l().createElement(
																	'label',
																	{ htmlFor: 'rememberMe' },
																	'Have an account?'
																)
															),
															l().createElement(
																r.NavLink,
																{ to: '/login' },
																'Login'
															)
													  )
													: l().createElement(
															'div',
															{ className: 'form-options' },
															l().createElement(
																'div',
																{ className: 'checkbox-field' },
																l().createElement(
																	'label',
																	{ htmlFor: 'rememberMe' },
																	'Forgot Password?'
																)
															),
															l().createElement(
																r.NavLink,
																{ to: '/signup' },
																'SignUp'
															)
													  ),
												l().createElement(
													'div',
													{ className: 'form-field' },
													l().createElement('input', {
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
				});
			},
			142: (e, t, a) => {
				'use strict';
				a.d(t, { Z: () => E });
				var n = a(297),
					l = a.n(n),
					r = a(226),
					o = a(13),
					c = a.n(o),
					s = a(34),
					i = a(79),
					d = a(46),
					m = a(49),
					p = a(163),
					u = a(304);
				const E = (0, i.connect)(
					(e) => ({
						specialities: e.speciality,
						prevArticle: e.article.selectedArticle,
					}),
					{ addArticle: m.qM, editArticle: m.OD, getArticle: m.fq }
				)((e) => {
					const {
							addArticle: t,
							specialities: a,
							editArticle: o,
							getArticle: i,
							prevArticle: m,
						} = e,
						[E, y] = (0, n.useState)(''),
						[h, v] = (0, n.useState)(''),
						[g, f] = (0, n.useState)(''),
						[w, N] = (0, n.useState)(!1),
						[T, C] = (0, n.useState)('');
					console.log(e.match.params.articleId),
						(0, n.useEffect)(() => {
							e.edit && i(e.match.params.articleId);
						}, [e, i]);
					const I = (e) => {
						y(e);
					};
					return l().createElement(
						r.Row,
						{ className: 'full-view-article p-2' },
						l().createElement('div', { className: 'share-icons' }),
						l().createElement(r.Col, { sm: 1 }),
						l().createElement(
							r.Col,
							{ id: 'top', sm: 10 },
							l().createElement(
								'div',
								{ className: '' },
								l().createElement(
									'div',
									{ className: '' },
									l().createElement(
										'h4',
										{ className: '', id: '' },
										e.edit ? `Update Article - ${m && m.name}` : 'Add a Article'
									)
								),
								l().createElement(
									'div',
									{ className: 'content' },
									l().createElement(
										'form',
										null,
										l().createElement(
											'div',
											{ className: 'form-group' },
											l().createElement('input', {
												type: 'text',
												id: 'name',
												placeholder: 'Article Name',
												className: 'form-control',
												defaultValue: e.edit ? m && m.name : '',
												onChange: (e) => {
													v(e.target.value);
												},
											}),
											l().createElement('br', null),
											l().createElement('input', {
												type: 'text',
												id: 'thumbnailUrl',
												placeholder: 'Article Thumbnail',
												className: 'form-control',
												defaultValue: e.edit ? m && m.thumbnailUrl : '',
												onChange: (e) => {
													C(e.target.value);
												},
											}),
											l().createElement('br', null),
											l().createElement('input', {
												type: 'text',
												id: 'keywords',
												placeholder: 'Article Description',
												className: 'form-control',
												defaultValue: e.edit ? m && m.keywords : '',
												onChange: (e) => {
													f(e.target.value);
												},
											}),
											l().createElement('br', null),
											l().createElement(
												'label',
												{ htmlFor: 'featured' },
												'IsFeatured   '
											),
											l().createElement('input', {
												defaultValue: !!e.edit && m && m.featured,
												onChange: () => {
													N(!w);
												},
												type: 'checkbox',
												id: 'featured',
											}),
											l().createElement('br', null),
											l().createElement(
												l().Fragment,
												null,
												e.edit
													? m && m.content
														? l().createElement(c(), {
																handleEditor: I,
																defaultValue: m && m.content,
														  })
														: null
													: l().createElement(c(), {
															handleEditor: I,
															defaultValue: '',
													  })
											),
											l().createElement(
												'div',
												{ className: 'add-article-button' },
												l().createElement(
													d.zx,
													{
														isButton: !0,
														handler: (n) => {
															e.edit
																? (async (e) => {
																		e.preventDefault(),
																			console.log(h),
																			console.log(g);
																		const t = {
																			name: '' === h ? m.name : h,
																			keywords: '' === g ? m.keywords : g,
																			content: '' === E ? m.content : E,
																		};
																		o(t, m._id, a.speciality.Name),
																			(0, s.toast)(
																				'Article updated successfully'
																			);
																  })(n)
																: (async (e) => {
																		e.preventDefault(),
																			t({
																				content: E,
																				name: h,
																				keywords: g,
																				featured: w,
																				thumbnailUrl: T,
																			}),
																			(0, s.toast)(
																				'Article added successfully'
																			);
																  })(n);
														},
													},
													e.edit ? 'Update' : 'Add'
												)
											)
										)
									)
								)
							),
							l().createElement(
								'div',
								{ className: 'top-icon' },
								l().createElement(u.Es, {
									size: '50',
									color: '#dc143c',
									onClick: () => {
										var e;
										(e = document.getElementById('nav')),
											p.C5 &&
												window.scroll({
													behavior: 'smooth',
													left: 0,
													top: e.offsetTop,
												});
									},
								})
							)
						),
						l().createElement(r.Col, { sm: 1 })
					);
				});
			},
			194: (e, t, a) => {
				'use strict';
				a.d(t, { Z: () => m });
				var n = a(297),
					l = a.n(n),
					r = a(79),
					o = a(46),
					c = a(163),
					s = a(49),
					i = a(13),
					d = a.n(i);
				const m = (0, r.connect)(null, {
					addSpeciality: s.yz,
					editSpeciality: s.nT,
				})(({ addSpeciality: e, editSpeciality: t, edit: a, match: r }) => {
					const [s, i] = (0, n.useState)({}),
						[m, p] = (0, n.useState)({});
					(0, n.useEffect)(() => {
						(async () => {
							if (a) {
								const e = await (0, c.iV)(
									`api/speciality/get/${r.params.specialityName}`
								);
								console.log(e);
								const {
									name: t,
									imageUrl: a,
									content: n,
									_id: l,
								} = e.data.speciality;
								p({ name: t, imageUrl: a, content: n, _id: l });
							}
						})();
					}, [a, r.params.specialityName]),
						console.log(a, m);
					const u = (e) => {
						i({ ...s, [e.target.id]: e.target.value });
					};
					return l().createElement(
						'div',
						{ className: 'container mt-4' },
						l().createElement(
							'form',
							{ className: 'mt-5' },
							l().createElement(
								'div',
								{ className: 'form-group' },
								l().createElement('input', {
									type: 'text',
									id: 'name',
									required: !0,
									placeholder: 'Speciality Name',
									className: 'form-control',
									defaultValue: a ? m && m.name : '',
									onChange: u,
								}),
								l().createElement('br', null),
								l().createElement('input', {
									required: !0,
									type: 'text',
									id: 'imageUrl',
									onChange: u,
									placeholder: 'Image URL',
									className: 'form-control',
									defaultValue: a ? m && m.imageUrl : '',
								}),
								l().createElement('br', null),
								!a &&
									l().createElement(
										l().Fragment,
										null,
										l().createElement('input', {
											required: !0,
											type: 'text',
											id: 'alt',
											onChange: u,
											placeholder: 'Image alt text',
											className: 'form-control',
										}),
										l().createElement('br', null)
									),
								l().createElement(
									'div',
									{ className: 'ql-snow' },
									c.C5 &&
										l().createElement(d(), {
											required: !0,
											defaultValue: '',
											className: 'ql-editor',
											handleEditor: (e) => {
												i({ ...s, content: e });
											},
										})
								),
								l().createElement(
									'div',
									{ className: 'add-article-button' },
									l().createElement(
										o.zx,
										{
											handler: async (n) => {
												n.preventDefault(), a ? t(s, m._id) : e(s);
											},
											isButton: !0,
											type: 'submit',
										},
										a ? 'Update' : 'Add'
									)
								)
							)
						)
					);
				});
			},
			300: (e, t, a) => {
				'use strict';
				a.d(t, { Z: () => i });
				var n = a(297),
					l = a.n(n),
					r = a(46),
					o = a(79),
					c = a(49),
					s = a(34);
				const i = (0, o.connect)(
					(e) => ({ speciality: e.speciality.speciality }),
					{ addTopic: c.Gr, editTopic: c.wA }
				)(
					({
						speciality: e,
						match: t,
						addTopic: a,
						editTopic: o,
						location: c,
						edit: i,
					}) => {
						const [d, m] = (0, n.useState)({ locked: !1 });
						return (
							console.log(c),
							(0, n.useEffect)(() => {
								m({
									locked: c.props && c.props.isLocked,
									name: c.props && c.props.name,
								});
							}, [c.props]),
							l().createElement(
								'div',
								{ className: 'upsert-container' },
								l().createElement(
									'div',
									{ className: 'upsert-topic-form' },
									l().createElement('h3', null, i ? 'Update' : 'Add', ' Topic'),
									l().createElement(
										'form',
										null,
										' ',
										l().createElement(
											'div',
											{ className: 'form-input' },
											l().createElement('input', {
												defaultValue: c.props && c.props.name,
												onChange: (e) => {
													m((t) => ({ ...t, name: e.target.value }));
												},
												type: 'text',
											})
										),
										l().createElement(
											'div',
											{ className: 'form-button' },
											l().createElement(r.Q5, {
												isLocked: d.locked,
												handler: () => {
													m((e) => ({ ...e, locked: !e.locked }));
												},
											})
										),
										l().createElement(
											r.zx,
											{
												isButton: !0,
												handler: async (n) => {
													n.preventDefault(),
														i
															? (o(
																	d,
																	t.params.topicId,
																	t.params.specialityName
															  ),
															  (0, s.toast)('Updated'))
															: (console.log(
																	{ ...d, specialityId: e._id },
																	t.params.specialityName
															  ),
															  a(
																	{ ...d, specialityId: e._id },
																	t.params.specialityName
															  ),
															  (0, s.toast)('Topic Added successfully'));
												},
											},
											i ? 'Update' : 'Add'
										)
									)
								)
							)
						);
					}
				);
			},
			204: (e, t, a) => {
				'use strict';
				a.d(t, { Z: () => s });
				var n = a(297),
					l = a.n(n),
					r = a(79),
					o = a(46),
					c = a(49);
				const s = (0, r.connect)(
					(e) => ({
						specialities: e.speciality,
						prevVideo: e.video.selectedVideo,
					}),
					{ addVideo: c.cN, editVideo: c.md, getVideo: c.om }
				)(
					({
						edit: e,
						match: t,
						addVideo: a,
						editVideo: r,
						getVideo: c,
						specialities: s,
						prevVideo: i,
					}) => {
						const [d, m] = (0, n.useState)(i ? i.name : ''),
							[p, u] = (0, n.useState)(i ? i.description : ''),
							[E, y] = (0, n.useState)(i ? i.url : '');
						return l().createElement(
							'div',
							{ className: 'upsert-container' },
							l().createElement(
								'div',
								{ className: 'upsert-video-form' },
								l().createElement('h3', null, e ? 'Update' : 'Add ', 'Video'),
								l().createElement(
									'form',
									null,
									l().createElement(
										'div',
										{ className: 'form-group' },
										l().createElement('label', null, 'Name'),
										l().createElement('input', {
											type: 'text',
											value: d,
											onChange: (e) => m(e.target.value),
										})
									),
									l().createElement(
										'div',
										{ className: 'form-group' },
										l().createElement('label', null, 'Url'),
										l().createElement('input', {
											type: 'text',
											value: E,
											onChange: (e) => y(e.target.value),
										})
									),
									l().createElement(
										'div',
										{ className: 'form-group' },
										l().createElement('label', null, 'Description'),
										l().createElement('textarea', {
											value: p,
											onChange: (e) => u(e.target.value),
										})
									)
								),
								l().createElement(
									o.zx,
									{
										isButton: !0,
										handler: (n) => {
											e
												? (async (e) => {
														e.preventDefault(),
															await r(
																{ name: d, description: p, url: E },
																i._id,
																s.speciality.name
															);
												  })(n)
												: (async (e) => {
														e.preventDefault(),
															await a(
																{ name: d, description: p, url: E },
																t.params.topicId,
																s.speciality.name
															);
												  })(n);
										},
									},
									e ? 'Update' : 'Add'
								)
							)
						);
					}
				);
			},
			163: (e, t, a) => {
				'use strict';
				a.d(t, {
					rq: () => E,
					pQ: () => s,
					p6: () => y.p6,
					C5: () => y.C5,
					X5: () => y.X5,
					iV: () => u,
					FE: () => p,
					uB: () => i.u,
				});
				var n = a(297),
					l = a.n(n),
					r = a(146);
				function o() {
					return (o =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var a = arguments[t];
								for (var n in a)
									Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
							}
							return e;
						}).apply(this, arguments);
				}
				(0, a(79).connect)((e) => ({ auth: e.auth }))(
					({ component: e, auth: { isAuthenticated: t }, ...a }) =>
						l().createElement(
							r.Route,
							o({}, a, {
								render: (a) =>
									t
										? l().createElement(e, a)
										: l().createElement(r.Redirect, { to: '/login' }),
							})
						)
				);
				var c = a(481);
				const s = ({
					description: e,
					title: t = ' ',
					lang: a = 'en',
					meta: n = [],
					richresult: r,
				}) => {
					const o = `CodersGala | ${t}`,
						s =
							"CodersGala's only purpose is to provide coding knowledge, such as Web development that includes HTML CSS JS Node React MongoDb, Machine Learning, Data Structures and Algorithm";
					return l().createElement(c.Helmet, {
						title: o,
						htmlAttributes: { lang: a },
						meta: [
							{ name: 'description', content: s },
							{ property: 'og:title', content: o },
							{ property: 'og:description', content: s },
							{ property: 'og:type', content: 'website' },
							{ name: 'twitter:card', content: 'summary' },
							{ name: 'twitter:title', content: o },
							{ name: 'twitter:description', content: s },
						].concat(n),
						link: [{ rel: 'icon', type: 'image/png', href: 'favicon' }],
						script: [
							{ type: 'application/ld+json', innerHTML: JSON.stringify(r) },
						],
					});
				};
				var i = a(693),
					d = a(376),
					m = a.n(d);
				const p = async (e, t, a = null) =>
						new Promise((n, l) => {
							m()
								.post(`${E}/${e}`, t, { headers: a })
								.then(function (e) {
									n(e.data);
								})
								.catch(function (e) {
									l(e);
								});
						}),
					u = async (e, t) =>
						new Promise((a, n) => {
							m()
								.get(`${E}/${e}`, t)
								.then(function (e) {
									a(e.data);
								})
								.catch(function (e) {
									n(e);
								});
						}),
					E = 'http://localhost:3001';
				var y = a(722);
			},
			693: (e, t, a) => {
				'use strict';
				a.d(t, { u: () => r });
				var n = a(376),
					l = a.n(n);
				const r = (e) => {
					console.log(e),
						e
							? (l().defaults.headers.common.Authorization = `JWT ${e}`)
							: delete l().defaults.headers.common.Authorization;
				};
			},
			722: (e, t, a) => {
				'use strict';
				a.d(t, { X5: () => n, C5: () => l, p6: () => r });
				const n = (e) => {
						l &&
							window.scroll({ behavior: 'smooth', left: 0, top: e.offsetTop });
					},
					l = !('undefined' == typeof window || !window.document),
					r = (
						e,
						t = {
							minute: 'numeric',
							hour: 'numeric',
							month: 'short',
							day: 'numeric',
							year: 'numeric',
						}
					) => {
						try {
							return new Intl.DateTimeFormat('en-US', t).format(new Date(e));
						} catch (e) {
							return e.message;
						}
					};
			},
			388: (e, t, a) => {
				'use strict';
				a.d(t, { Z: () => m });
				var n = a(297),
					l = a.n(n),
					r = a(636),
					o = a(79),
					c = a(146),
					s = a(304);
				const i = ({ title: e, position: t, children: a }) =>
						l().createElement(
							r.Tooltip,
							{ title: e, position: t, trigger: 'mouseenter' },
							a
						),
					d = ({ type: e, url: t, handler: a, data: n }) => {
						switch (e) {
							case 'Add':
								return l().createElement(
									c.Link,
									{ to: t },
									l().createElement(s.mm, { size: '20', color: '#000' })
								);
							case 'Edit':
								return l().createElement(
									c.Link,
									{
										to: {
											pathname: t,
											props: { name: n.name, isLocked: n.locked },
										},
									},
									l().createElement(s.BN, { size: '20', color: '#000' })
								);
							case 'Delete':
								return l().createElement(
									'button',
									{
										style: {
											background: 'none',
											border: 'none',
											outline: 'none',
										},
										onClick: () => {
											a(n);
										},
										className: 'edit-topic-modal-toggle',
									},
									l().createElement(s.HG, { size: '20', color: 'crimson' })
								);
							default:
								return l().createElement(
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
									l().createElement(s.HG, { size: '0', color: '' })
								);
						}
					},
					m = (0, o.connect)(
						(e) => ({ isAdmin: e.auth.isAdmin }),
						null
					)(({ type: e, url: t, handler: a, isAdmin: n, data: r = {} }) =>
						n
							? l().createElement(
									i,
									{ title: `${e} "${r.name}"`, position: 'top' },
									l().createElement(d, { type: e, url: t, handler: a, data: r })
							  )
							: l().createElement(d, {
									type: 'None',
									url: t,
									handler: a,
									data: r,
							  })
					);
			},
			46: (e, t, a) => {
				'use strict';
				a.d(t, { zx: () => s, $_: () => m, Q5: () => i }), a(388);
				var n = a(297),
					l = a.n(n),
					r = a(146),
					o = a(304);
				const c = ({ handler: e, children: t, dark: a, bg: n }) =>
						t
							? l().createElement(
									'div',
									{
										className: `button ${a && 'dark'}`,
										style: { backgroundColor: `${n && 'bg'}` },
										onClick: e || ((t) => console.log(t, e)),
									},
									l().createElement('span', null, t),
									l().createElement(
										'svg',
										null,
										l().createElement('polyline', {
											className: 'o1',
											points: '0 0, 150 0, 150 55, 0 55, 0 0',
										}),
										l().createElement('polyline', {
											className: 'o2',
											points: '0 0, 150 0, 150 55, 0 55, 0 0',
										})
									)
							  )
							: l().createElement(
									l().Fragment,
									null,
									'   ',
									l().createElement(
										'span',
										null,
										l().createElement(o.OS, { size: 19 })
									)
							  ),
					s = ({
						children: e,
						url: t,
						dark: a,
						bg: n,
						isButton: o,
						handler: s,
					}) =>
						void 0 === o
							? l().createElement(
									r.Link,
									{ to: t && t },
									l().createElement(c, { dark: a, bg: n }, e)
							  )
							: l().createElement(c, { dark: a, bg: n, handler: s }, e),
					i = ({ isLocked: e, handler: t }) =>
						l().createElement(
							'span',
							{ onClick: t },
							e ? l().createElement(o.HE, null) : l().createElement(o.Sl, null)
						),
					d = () =>
						l().createElement(
							'div',
							{ className: 'social-media' },
							l().createElement(
								'a',
								{ rel: 'nofollow', href: 'https://gmail.com' },
								l().createElement('img', {
									src: 'https://www.svgrepo.com/show/303161/gmail-icon-logo.svg',
									alt: '',
								})
							),
							l().createElement(
								'a',
								{ rel: 'nofollow', href: 'https://twitter.com' },
								l().createElement('img', {
									src: 'https://www.svgrepo.com/show/183608/twitter.svg',
									alt: '',
								})
							),
							l().createElement(
								'a',
								{ rel: 'nofollow', href: 'https://instagram.com/bihani.priya' },
								l().createElement('img', {
									src: 'https://www.svgrepo.com/show/111199/instagram.svg',
									alt: '',
								})
							),
							l().createElement(
								'a',
								{ rel: 'nofollow', href: 'https://github.com' },
								l().createElement('img', {
									src: 'https://www.svgrepo.com/show/217753/github.svg',
									className: 'github',
									alt: '',
								})
							)
						),
					m = () => {
						const [e, t] = (0, n.useState)(''),
							[a, r] = (0, n.useState)('');
						(0, n.useEffect)(() => {
							o();
						});
						const o = (0, n.useCallback)(() => {
							r('Enter Your Email here to subscribe for Newsletter');
						}, []);
						return l().createElement(
							'div',
							{ className: 'footer-cont' },
							l().createElement(
								'footer',
								null,
								l().createElement(
									'div',
									{ className: 'footer-container' },
									l().createElement(
										'div',
										{ className: 'left-col' },
										l().createElement(
											'span',
											{ className: 'logo' },
											'Coders Gala'
										),
										l().createElement(d, null),
										l().createElement(
											'p',
											{ className: 'rights-text' },
											'© 2020 Coders Gala , All Rights Reserved'
										)
									),
									l().createElement(
										'div',
										{ className: 'right-col' },
										l().createElement('h1', null, 'Our Newsletter'),
										l().createElement('div', { className: 'border' }),
										l().createElement('p', null, a),
										l().createElement(
											'form',
											{ className: ' form newsletter-form' },
											l().createElement('input', {
												type: 'email',
												value: e,
												onChange: (e) => {
													t(e.target.value);
												},
												name: 'Email',
												className: 'txtb',
												placeholder: 'Enter Your Email',
											}),
											l().createElement('input', {
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
			},
			69: (e, t, a) => {
				'use strict';
				a.d(t, { Z: () => u });
				var n = a(561),
					l = a(962),
					r = a(722);
				const o = {
						token: r.C5 && localStorage.getItem('token'),
						isAuthenticated: null,
						loading: !1,
						user: null,
						isAdmin: null,
					},
					c = { specialities: [] },
					s = { topics: [] },
					i = { articles: [] };
				var d = a(163);
				const m = {
						openTopics: [],
						displayMode:
							d.C5 && localStorage.getItem('mode')
								? d.C5 && localStorage.getItem('mode')
								: 'light',
					},
					p = { selectedVideo: null },
					u = (0, n.combineReducers)({
						auth: function (e = o, t) {
							const { type: a, payload: n } = t;
							switch (a) {
								case l.Cy:
									return {
										...e,
										user: n,
										isAuthenticated: !0,
										isAdmin: 0 !== n.role,
										loading: !1,
									};
								case 'LIKE_ARTICLE':
									return console.log(n.user), { ...e, user: n.user };
								case l.bp:
								case l.XP:
									return (
										r.C5 && localStorage.setItem('token', n.token),
										r.C5 && localStorage.setItem('userId', n.userId),
										console.log(n),
										{ ...e, ...n, isAuthenticated: !0, loading: !1 }
									);
								case l.YY:
									return { ...e, loading: !1 };
								case l.Qj:
								case l.Ny:
									return (
										r.C5 && localStorage.removeItem('token'),
										r.C5 && localStorage.removeItem('userId'),
										{
											...e,
											token: null,
											isAuthenticated: !1,
											loading: !1,
											userId: null,
										}
									);
								case l.Nv:
									return {
										...e,
										token: null,
										isAuthenticated: !1,
										loading: !1,
									};
								case l.sK:
									return { ...e, ...n };
								case 'SET_AUTH_LOADER':
									return { ...e, loading: !0 };
								default:
									return e;
							}
						},
						speciality: function (e = c, t) {
							const { type: a, payload: n } = t;
							switch (a) {
								case 'GET_SPECIALITIES':
									return { ...e, specialities: n };
								case 'GET_SPECIALITY':
									return { ...e, speciality: n };
								case 'CLEAR_SPECIALITY':
									return { ...e, speciality: {} };
								case 'GET_SPECIALITIES_ERROR':
								case 'GET_SPECIALITY_ERROR':
									return { ...e };
								default:
									return e;
							}
						},
						topic: function (e = s, t) {
							const { type: a, payload: n } = t;
							switch (a) {
								case 'GET_TOPICS':
									return { ...e, topics: n };
								case 'GET_TOPICS_ERROR':
									return { ...e };
								default:
									return e;
							}
						},
						article: function (e = i, t) {
							const { type: a, payload: n } = t;
							switch (a) {
								case 'ADD_ARTICLE':
									return { ...e, topics: n };
								case 'GET_ARTICLE':
									return { ...e, selectedArticle: n.article };
								case 'GET_ALL_ARTICLES':
									return { ...e, articles: n.articles };
								case 'CLEAR_ARTICLE':
									return { ...e, selectedArticle: {} };
								case 'ADD_ARTICLE_ERROR':
									return { ...e };
								default:
									return e;
							}
						},
						ui: function (e = m, t) {
							const { type: a, payload: n } = t;
							switch (a) {
								case 'SET_OPEN_TOPICS':
									return { ...e, openTopics: n };
								case 'SET_DISPLAY_MODE':
									return { ...e, displayMode: n };
								default:
									return e;
							}
						},
						video: function (e = p, t) {
							const { type: a, payload: n } = t;
							switch (a) {
								case 'ADD_VIDEO':
									return { ...e, topics: n };
								case 'GET_VIDEO':
									return { ...e, selectedVideo: n.video };
								case 'SELECT_VIDEO':
									return { ...e, selectedVideo: n };
								case 'CLEAR_VIDEO':
									return { ...e, selectedVideo: {} };
								case 'ADD_VIDEO_ERROR':
									return { ...e };
								default:
									return e;
							}
						},
					});
			},
			13: () => {},
			895: (e, t, a) => {
				'use strict';
				a.d(t, { Z: () => d });
				var n = a(561),
					l = a(176),
					r = a(694),
					o = a.n(r),
					c = a(69);
				const s = {},
					i = [o()],
					d = () =>
						(0, n.createStore)(
							c.Z,
							s,
							(0, l.composeWithDevTools)((0, n.applyMiddleware)(...i))
						);
			},
			81: (e, t, a) => {
				'use strict';
				e.exports = a.p + '6a9c349616dc7691ef60.PNG';
			},
			279: (e) => {
				'use strict';
				e.exports = require('@loadable/component');
			},
			376: (e) => {
				'use strict';
				e.exports = require('axios');
			},
			762: (e) => {
				'use strict';
				e.exports = require('framer-motion');
			},
			297: (e) => {
				'use strict';
				e.exports = require('react');
			},
			226: (e) => {
				'use strict';
				e.exports = require('react-bootstrap');
			},
			481: (e) => {
				'use strict';
				e.exports = require('react-helmet');
			},
			795: (e) => {
				'use strict';
				e.exports = require('react-html-parser');
			},
			79: (e) => {
				'use strict';
				e.exports = require('react-redux');
			},
			146: (e) => {
				'use strict';
				e.exports = require('react-router-dom');
			},
			162: (e) => {
				'use strict';
				e.exports = require('react-search-autocomplete');
			},
			636: (e) => {
				'use strict';
				e.exports = require('react-tippy');
			},
			34: (e) => {
				'use strict';
				e.exports = require('react-toastify');
			},
			561: (e) => {
				'use strict';
				e.exports = require('redux');
			},
			176: (e) => {
				'use strict';
				e.exports = require('redux-devtools-extension');
			},
			694: (e) => {
				'use strict';
				e.exports = require('redux-thunk');
			},
		},
		a = {};
	function n(e) {
		var l = a[e];
		if (void 0 !== l) return l.exports;
		var r = (a[e] = { exports: {} });
		return t[e](r, r.exports, n), r.exports;
	}
	(n.m = t),
		(n.n = (e) => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return n.d(t, { a: t }), t;
		}),
		(n.d = (e, t) => {
			for (var a in t)
				n.o(t, a) &&
					!n.o(e, a) &&
					Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
		}),
		(n.f = {}),
		(n.e = (e) =>
			Promise.all(Object.keys(n.f).reduce((t, a) => (n.f[a](e, t), t), []))),
		(n.u = (e) =>
			({
				739: 'components-About',
				811: 'components-Article',
				826: 'components-Learn',
				877: 'components-Preview',
				889: 'components-Blog',
				926: 'components-Home',
			}[e] + '.js')),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(n.r = (e) => {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(n.p = ''),
		(e = { 179: 1 }),
		(n.f.require = (t, a) => {
			e[t] ||
				((t) => {
					var a = t.modules,
						l = t.ids,
						r = t.runtime;
					for (var o in a) n.o(a, o) && (n.m[o] = a[o]);
					r && r(n);
					for (var c = 0; c < l.length; c++) e[l[c]] = 1;
				})(require('./' + n.u(t)));
		});
	n(637);
})();
