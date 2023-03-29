import { e, Fragment } from '../import.js';
import Dialog from '../components/Dialog.js';
import Install from '../components/Install.js';
import Share from '../components/Share.js';

export default function App()
{
	return e(Fragment, null,
		e('div', {id: 'app'},
			e('header', null, e(Install)),
			e('main', null, e('custom-icon')),
			e('footer', null, e(Share))),
		e(Dialog));
}