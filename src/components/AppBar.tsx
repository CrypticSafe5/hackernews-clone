import { routeList } from '../configs/routes';
import { Link } from 'react-router-dom';
import React from 'react';

export default function AppBar(props: React.PropsWithChildren) {
	return (
		<>
			<div>
				{routeList.map((e, i) => (
					<Link to={e.path as string} key={`appbar-${i}`}>{e.path}</Link>
				))}
			</div>
			<>{props.children}</>
		</>
	);
}
