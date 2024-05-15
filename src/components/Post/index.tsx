import React from 'react';

export default function Post(props: HackerNews.Item) {
	return (
		<>
			<h1><a href={props.url}>{props.title}</a></h1>
			<span>Score: {props.score} points</span>
			<span>Descendants: {props.descendants}</span>
			<hr/>
		</>
	);
}
