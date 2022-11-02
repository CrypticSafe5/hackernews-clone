import NewComments from '../pages/NewComments';
import { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import Newest from '../pages/Newest';
import Submit from '../pages/Submit';
import Front from '../pages/Front';
import News from '../pages/News';
import Jobs from '../pages/Jobs';
import Show from '../pages/Show';
import Ask from '../pages/Ask';

export const routeList: RouteObject[] = [
	{
		path: '/ask',
		element: createElement(Ask)
	},
	{
		path: '/front',
		element: createElement(Front)
	},
	{
		path: '/jobs',
		element: createElement(Jobs)
	},
	{
		path: '/newcomments',
		element: createElement(NewComments)
	},
	{
		path: '/new',
		element: createElement(Newest)
	},
	{
		path: '/news',
		element: createElement(News)
	},
	{
		path: '/submit',
		element: createElement(Submit)
	},
	{
		path: '/show',
		element: createElement(Show)
	},
];
