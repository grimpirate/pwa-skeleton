import { e, useEffect, useState } from '../import.js';

const installEvent = new Promise(resolve => {
	window.addEventListener('beforeinstallprompt', ev => {
		ev.preventDefault();
		resolve(ev);
	}, {once: true});
});

export default function Install()
{
	const [install, setInstall] = useState(null);

	useEffect(() => {
		if(!install)
			installEvent.then(resolved => {
				setInstall(e('button', {onClick: async () => {
					resolved.prompt();
					await resolved.userChoice();
				}},
					'Install',
					e('svg', {viewBox: '0 0 10 10', role: 'img', 'aria-hidden': 'true', focusable: 'false'},
						e('path', {d: 'M0 9H10M1 3L5 7L9 3M5 0V6'}))));
			});
	});

	return install;
}