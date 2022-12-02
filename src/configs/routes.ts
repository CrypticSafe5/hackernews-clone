import NewComments from '../pages/NewComments';
import { RouteObject } from 'react-router-dom';
import AppBar from '../components/AppBar';
import { createElement } from 'react';
import Newest from '../pages/Newest';
import Submit from '../pages/Submit';
import Front from '../pages/Front';
import News from '../pages/News';
import Jobs from '../pages/Jobs';
import Show from '../pages/Show';
import Ask from '../pages/Ask';

interface RouteMeta {
	title: string;
	onAppBar: boolean;
}

export const defaultRoute: RouteObject & RouteMeta = {
	path: '/front',
		element: createElement(Front),
		title: 'Front',
		onAppBar: true
};

export const routeList: (RouteObject & RouteMeta)[] = [
	defaultRoute,
	{
		path: '/ask',
		element: createElement(Ask),
		title: 'Ask',
		onAppBar: true
	},
	{
		path: '/jobs',
		element: createElement(Jobs),
		title: 'Jobs',
		onAppBar: true
	},
	{
		path: '/newcomments',
		element: createElement(NewComments),
		title: 'New comments',
		onAppBar: true
	},
	{
		path: '/new',
		element: createElement(Newest),
		title: 'New',
		onAppBar: true
	},
	{
		path: '/news',
		element: createElement(News),
		title: 'News',
		onAppBar: true
	},
	{
		path: '/submit',
		element: createElement(Submit),
		title: 'Submit',
		onAppBar: true
	},
	{
		path: '/show',
		element: createElement(Show),
		title: 'Show',
		onAppBar: true
	},
	{
		path: '*',
		element: defaultRoute.element,
		title: defaultRoute.title,
		onAppBar: false
	},
];

export const wrappedRouteList: RouteObject[] = [
	{
		element: createElement(AppBar),
		children: routeList
	}
]
