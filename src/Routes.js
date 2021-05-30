import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Learn from './components/Learn';
import Article from './components/Article';
import Preview from './components/Preview';
import Blog from './components/Blog';
import Auth from './components/Auth';
import UpsertCard from './components/UpsertCard';
import UpsertTopic from './components/UpsertTopic';
import UpsertArticle from './components/UpsertArticle';
import UpsertVideo from './components/UpsertVideo';
// import PrivateRoute from './helpers/PrivateRoute';

const routes = [
	{
		path: '/home',
		component: Home,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/learn',
		component: Learn,
	},
	{
		path: '/blog/read/:name',
		component: Article,
	},
	{
		path: '/learn/:specialityName',
		component: Preview,
	},
	{
		path: '/blog',
		component: Blog,

	},
	{
		path: '/signup',
		render: (props) => <Auth {...props} type={'signup'} />,
	},
	{
		path: '/signup/:referCode',
		render: (props) => <Auth {...props} type={'signup'} />,
	},
	{
		path: '/login',
		render: (props) => <Auth {...props} type={'login'} />,
	},
	{
		path: '/AddCard',
		render: (props) => <UpsertCard edit={false} {...props} />,
	},
	{
		path: '/updatespeciality/:specialityName',
		render: (props) => <UpsertCard edit={true} {...props} />,
	},
	{
		path: '/:specialityName/topic/add',
		render: (props) => <UpsertTopic edit={false} {...props} />,
	},
	{
		path: '/:specialityName/topic/edit/:topicId',
		render: (props) => <UpsertTopic edit={true} {...props} />,
	},
	{
		path: '/article/add',
		render: (props) => <UpsertArticle edit={false} {...props} />,
	},
	{
		path: '/article/update',
		render: (props) => <UpsertArticle edit={true} {...props} />,
	},
	{
		path: '/video/add/:topicId',
		render: (props) => <UpsertVideo edit={false} {...props} />,
	},
	{
		path: '/video/update/:videoId',
		render: (props) => <UpsertVideo edit={true} {...props} />,
	},
];

export default routes;
