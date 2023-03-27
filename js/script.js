import { createRoot, e } from './import.js';
import App from './views/App.js';

createRoot(document.querySelector('#app')).render(e(App));