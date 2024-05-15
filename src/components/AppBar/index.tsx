import { routeList } from '../../configs/routes';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import './index.css';

export default function AppBar(props: React.PropsWithChildren) {
	return (
		<>
			<div className="appbar-banner">
				{routeList.map((e, i) => (
					e.onAppBar && <Link className="appbar-link" to={e.path as string} key={`appbar-${i}`}>{e.title}</Link>
				))}
			</div>
			<Outlet/>
		</>
	);
}
