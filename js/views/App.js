import { e, Fragment } from '../import.js';
import Install from '../components/Install.js';
import Share from '../components/Share.js';

export default function App()
{
	return e(Fragment, null,
		e('header', null, e(Install)),
		e('aside', null, 'v95'),
		e('main', null, e('custom-icon')),
		e('footer', null, e(Share)));
}