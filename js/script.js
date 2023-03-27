import { createRoot, e } from './import.js';
import App from './views/App.js';

if('serviceWorker' in navigator)
{
	function invokeUpdate(registration)
	{
		if(!registration) return;
		window.confirm("New version! OK to update?") ? registration.postMessage('SKIP_WAITING') : null;
	}

	navigator.serviceWorker.addEventListener('controllerchange', () => window.location.reload(true));
	
	navigator.serviceWorker.register('./service-worker.js').then(registration => {
		if(registration.waiting)
			invokeUpdate(registration.waiting);

		registration.addEventListener('updatefound', () => {
			if(registration.installing)
				registration.addEventListener('statechange', () => {
					if(registration.waiting)
						invokeUpdate(registration.waiting);
				});
		});
	});
}

createRoot(document.querySelector('#app')).render(e(App));