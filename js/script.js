import { createRoot, e } from './import.js';
import App from './views/App.js';

if('serviceWorker' in navigator)
{
	navigator.serviceWorker.addEventListener('controllerchange', () => window.confirm("New version! OK to update?") ? window.location.reload(true) : null);
	navigator.serviceWorker.register('service-worker.js');
}

createRoot(document.querySelector('#app')).render(e(App));