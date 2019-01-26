import React from 'react';

import WorkHighlights from './WorkHighlights';
import PercentList from './PercentList';

const InfoContainer = (props) => {
	return (
		<div className="tdc__body">
			<PercentList/>
			<WorkHighlights/>
		</div>
	);
}

export default InfoContainer;