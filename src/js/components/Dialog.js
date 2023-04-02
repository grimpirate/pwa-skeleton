import { e, useEffect, useRef } from '../import.js';

const changeEvent = new Promise(resolve => {
	if('serviceWorker' in navigator)
		navigator.serviceWorker.addEventListener('controllerchange', () => {resolve()}, {once: true});
});

export default function Dialog()
{
	const dialog = useRef(null);

	useEffect(() => {
		changeEvent.then(() => {
			dialog.current.showModal();
		});
	});

	return e('dialog', {ref: dialog},
		e('p', null, 'New content available. Reload?'),
		e('form', {method: 'dialog'},
			e('button', {onClick: () => window.location.reload()}, 'Reload'),
			e('button', null, 'Cancel')));
}