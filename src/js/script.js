import { createRoot, e } from './import.js';
import App from './views/App.js';

Notification.requestPermission();

createRoot(document.querySelector('#react')).render(e(App));