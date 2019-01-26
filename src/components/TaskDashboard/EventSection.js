import React from 'react';

import EventList from './EventList';

import { AppContext } from '../../AppContext';

const EventsSection = (props) => {
	const { title } = props;
	return (
		<div className="tdc-section">
			<div className="tdc-section__header">
				<p>{title}</p>
			</div>
			<div className="tdc-section__body">
				<AppContext.Consumer>
					{(context) => {
						return (
							<EventList events={context.events}/>
						);
					}}
				</AppContext.Consumer>
			</div>
		</div>
	);
}

export default EventsSection;