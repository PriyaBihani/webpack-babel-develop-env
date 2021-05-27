import App from './App';
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
import { Redirect } from 'react-router';
// import PrivateRoute from './helpers/PrivateRoute';

const routes = [
	{
		path: '/home',
		exact: true,
		component: Home,
	},
	{
		path: '/about',
		exact: true,
		component: About,
	},
	{
		path: '/learn',
		exact: true,
		component: Learn,
	},
	{
		path: '/blog/read/:name',
		exact: true,
		component: Article,
	},
	{
		path: '/learn/:specialityName',
		exact: true,
		component: Preview,
	},
	{
		path: '/blog',
		exact: true,
		component: Blog,
	},
	{
		path: '/signup',
		exact: true,
		render: (props) => <Auth {...props} type={'signup'} />,
	},
	{
		path: '/signup/:referCode',
		exact: true,
		render: (props) => <Auth {...props} type={'signup'} />,
	},
	{
		path: '/login',
		exact: true,
		render: (props) => <Auth {...props} type={'login'} />,
	},
	{
		path: '/AddCard',
		exact: true,
		render: (props) => <UpsertCard edit={false} {...props} />,
	},
	{
		path: '/updatespeciality/:specialityName',
		exact: true,
		render: (props) => <UpsertCard edit={true} {...props} />,
	},
	{
		path: '/:specialityName/topic/add',
		exact: true,
		render: (props) => <UpsertTopic edit={false} {...props} />,
	},
	{
		path: '/:specialityName/topic/edit/:topicId',
		exact: true,
		render: (props) => <UpsertTopic edit={true} {...props} />,
	},
	{
		path: '/article/add',
		exact: true,
		render: (props) => <UpsertArticle edit={false} {...props} />,
	},
	{
		path: '/article/update',
		exact: true,
		render: (props) => <UpsertArticle edit={true} {...props} />,
	},
	{
		path: '/video/add/:topicId',
		exact: true,
		render: (props) => <UpsertVideo edit={false} {...props} />,
	},
	{
		path: '/video/update/:videoId',
		exact: true,
		render: (props) => <UpsertVideo edit={true} {...props} />,
	},
];

export default routes;
