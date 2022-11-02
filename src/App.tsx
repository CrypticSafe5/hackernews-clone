import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeList } from './configs/routes';
import AppBar from './components/AppBar';
import React from 'react';
import './App.css';

const router = createBrowserRouter(routeList);

export default function App() {
	return (
		<AppBar>
			<RouterProvider router={router}/>
		</AppBar>
	);
}
