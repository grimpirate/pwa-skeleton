(()=>{
	if('serviceWorker' in navigator)
	{
		navigator.serviceWorker.addEventListener('controllerchange', () => window.confirm("New version! OK to update?") ? window.location.reload(true) : null);
		navigator.serviceWorker.register('service-worker.js');
	}

	let deferredPromptEvent;

	window.addEventListener('beforeinstallprompt', ev => {
		ev.preventDefault();
		deferredPromptEvent = ev;
	});

	document.querySelector('#install > button').addEventListener('click', async () => {
		deferredPromptEvent.prompt();
		await deferredPromptEvent.userChoice;
		deferredPromptEvent = null;
	});
})();