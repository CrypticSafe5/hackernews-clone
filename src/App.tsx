import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { wrappedRouteList } from './configs/routes';
import React from 'react';
import './App.css';

const router = createBrowserRouter(wrappedRouteList);

export default function App() {
	return (
		<RouterProvider router={router}/>
	);
}
