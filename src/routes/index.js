import React from 'react';

import { Route, Switch } from 'react-router-dom';

import TaskDashboard from './TaskDashboard.js';

export default () => {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={TaskDashboard}/>
			</Switch>
		</React.Fragment>
	)
}
