import './polyfills';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
