if('serviceWorker' in navigator)
{
	function invokeUpdate(registration)
	{
		console.log('invoked');
		if(!registration) return;
		window.confirm("New version! OK to update?") ? registration.postMessage('SKIP_WAITING') : null;
	}

	navigator.serviceWorker.addEventListener('controllerchange', () => {
		console.log('controller changed');
		window.location.reload(true);
	});
	
	navigator.serviceWorker.register('./service-worker.js').then(registration => {
		console.log('service worker registered');
		if(registration.waiting)
			invokeUpdate(registration.waiting);

		registration.addEventListener('updatefound', () => {
			console.log('updatefound');
			if(registration.installing)
				registration.addEventListener('statechange', () => {
					console.log('state change');
					if(registration.waiting)
						invokeUpdate(registration.waiting);
				});
		});
	});
}