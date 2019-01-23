import React from 'react';

import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';

const Body = () => {
	return (
		<div className="tdc__body">
			<BodyLeft></BodyLeft>
			<BodyRight></BodyRight>
		</div>
	);
}

export default Body;