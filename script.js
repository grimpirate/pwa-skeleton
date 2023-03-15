(()=>{
	if('serviceWorker' in navigator)
	{
		navigator.serviceWorker.addEventListener('controllerchange', () => window.confirm("New version! OK to update?") ? window.location.reload(true) : null);
		navigator.serviceWorker.register('service-worker.js');
	}

	document.querySelector('#share > button').addEventListener('click', async () => {
		await navigator.share({
			title: 'PWA',
			text: 'Progressive Web Application',
			url: 'https://grimpirate.github.io/pwa-skeleton/'
		});
	});

	window.addEventListener('beforeinstallprompt', ev => {
		ev.preventDefault();

		const install = document.querySelector('#install');

		install.querySelector('button').addEventListener('click', async () => {
			ev.prompt();
			await ev.userChoice;

			install.classList.toggle('hidden');
		}, {once: true});

		install.classList.toggle('hidden');
	}, {once: true});
})();