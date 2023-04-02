import { e, useEffect, useState } from '../import.js';

export default function Share()
{
	const [share, setShare] = useState(null);
	const [data, setData] = useState({
		title: 'PWA',
		text: 'Progressive Web Application',
		url: 'https://grimpirate.github.io/pwa-skeleton/'
	});

	useEffect(() => {
		if(!share && navigator.canShare(data))
			setShare(e('button', {onClick: async () => {
				await navigator.share(data);
			}},
				'Share',
				e('svg', {viewBox: '0 0 10 10', role: 'img', 'aria-hidden': 'true', focusable: 'false'},
					e('path', {d: 'M8 8L2 5L8 2'}),
					e('circle', {cx: 8, cy: 2, r: 2}),
					e('circle', {cx: 2, cy: 5, r: 2}),
					e('circle', {cx: 8, cy: 8, r: 2}))));
	});

	return share;
}