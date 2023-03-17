(()=>{
	if('serviceWorker' in navigator)
	{
		navigator.serviceWorker.addEventListener('controllerchange', () => window.confirm("New version! OK to update?") ? window.location.reload(true) : null);
		navigator.serviceWorker.register('service-worker.js');
	}

	let install = null;

	window.addEventListener('beforeinstallprompt', ev => {
		ev.preventDefault();

		install = m('button', {onclick: async () => {
			ev.prompt();
			await ev.userChoice;
		}},
			'Install',
			m('span'),
			m('svg', {viewBox: '0 0 10 10', role: 'img', 'aria-hidden': 'true', focusable: 'false'},
				m('path', {d: 'M0 9H10M1 3L5 7L9 3M5 0V6'})));

		m.redraw();
	}, {once: true});

	const shareData = {
		title: 'PWA',
		text: 'Progressive Web Application',
		url: 'https://grimpirate.github.io/pwa-skeleton/'
	};

	m.mount(document.body, {
		view: () => {
			return [
				m('header', install),
				m('main',
					m('custom-icon')),
				m('footer',
					navigator.canShare(shareData)
					? m('button', {onclick: async () => {
						await navigator.share(shareData)
					}},
						'Share',
						m('span'),
						m('svg', {viewBox: '0 0 10 10', role: 'img', 'aria-hidden': 'true', focusable: 'false'},
							m('path', {d: 'M8 8L2 5L8 2'}),
							m('circle', {cx: 8, cy: 2, r: 2}),
							m('circle', {cx: 2, cy: 5, r: 2}),
							m('circle', {cx: 8, cy: 8, r: 2})))
					: null
				)
			];
		}
	});
})();