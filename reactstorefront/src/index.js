import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/Main';
import Guitar from './components/Guitars'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Main />
			<Guitar />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root"));