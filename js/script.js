(()=>{
	if('serviceWorker' in navigator)
	{
		navigator.serviceWorker.addEventListener('controllerchange', () => window.confirm("New version! OK to update?") ? window.location.reload(true) : null);
		navigator.serviceWorker.register('service-worker.js');
	}

	const shareData = {
		title: 'PWA',
		text: 'Progressive Web Application',
		url: 'https://grimpirate.github.io/pwa-skeleton/'
	};

	if(navigator.canShare(shareData))
	{
		const share = document.querySelector('footer > button');

		share.addEventListener('click', async () => {
			await navigator.share(shareData);
		});

		share.classList.toggle('hidden');
	}

	window.addEventListener('beforeinstallprompt', ev => {
		ev.preventDefault();

		const install = document.querySelector('header > button');

		install.addEventListener('click', async () => {
			ev.prompt();
			await ev.userChoice;

			install.classList.toggle('hidden');
		}, {once: true});

		install.classList.toggle('hidden');
	}, {once: true});
})();