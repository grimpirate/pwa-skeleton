(()=>{
	if('serviceWorker' in navigator)
	{
		navigator.serviceWorker.addEventListener('controllerchange', () => window.confirm("New version! OK to update?") ? window.location.reload(true) : null);
		navigator.serviceWorker.register('service-worker.js');
	}

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