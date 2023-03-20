import { createRoot, e, Fragment, useEffect, useState } from './import.js';

(()=>{
	if('serviceWorker' in navigator)
	{
		navigator.serviceWorker.addEventListener('controllerchange', () => window.confirm("New version! OK to update?") ? window.location.reload(true) : null);
		navigator.serviceWorker.register('service-worker.js');
	}

	const installEvent = new Promise(resolve => {
		window.addEventListener('beforeinstallprompt', ev => {
			ev.preventDefault();
			resolve(ev);
		}, {once: true});
	});

	const shareData = {
		title: 'PWA',
		text: 'Progressive Web Application',
		url: 'https://grimpirate.github.io/pwa-skeleton/'
	};

	function App()
	{
		const [install, setInstall] = useState(null);

		useEffect(() => {
			if(!install);
			installEvent.then(resolved => {
				setInstall(e('button', {onClick: async () => {
					resolved.prompt();
					await resolved.userChoice();
				}},
					'Install',
					e('span'),
					e('svg', {viewBox: '0 0 10 10', role: 'img', 'aria-hidden': 'true', focusable: 'false'},
						e('path', {d: 'M0 9H10M1 3L5 7L9 3M5 0V6'}))));
			});
		});

		return e(Fragment, null,
			e('header', null, install),
			e('main', null, e('custom-icon')),
			e('footer', null,
				navigator.canShare(shareData)
				? e('button', {onClick: async() => {
					await navigator.share(shareData);
				}},
					'Share',
					e('span'),
					e('svg', {viewBox: '0 0 10 10', role: 'img', 'aria-hidden': 'true', focusable: 'false'},
						e('path', {d: 'M8 8L2 5L8 2'}),
						e('circle', {cx: 8, cy: 2, r: 2}),
						e('circle', {cx: 2, cy: 5, r: 2}),
						e('circle', {cx: 8, cy: 8, r: 2})))
				: null));
	}

	createRoot(document.querySelector('#app')).render(e(App));
})();