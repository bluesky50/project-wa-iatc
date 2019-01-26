import React, { Component } from 'react';

import TaskSectionTop from './TaskSectionTop';
import TaskSectionBottom from './TaskSectionBottom';
import EventSection from './EventSection';
// import { AppContext } from '../../AppContext';

// import { tasks } from '../../seed/tasks';

import { TASK_ACTIVE, TASK_COMPLETE, TASK_QUEUED, TASK_DEFAULT } from '../../helpers/constants';

export default class BodyLeft extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasksStatusSelection: TASK_ACTIVE
		}

		this.toggleTasksSelection = this.toggleTasksSelection.bind(this);
	}

	toggleTasksSelection(status) {
		this.setState({
			tasksStatusSelection: status
		});
	}

	renderSection() {
		switch(this.state.tasksStatusSelection) {
			case TASK_ACTIVE:
				return <TaskSectionTop title={'Active Tasks'} taskStatus={this.state.tasksStatusSelection} />
			case TASK_COMPLETE:
				return <TaskSectionBottom title={"Completed Tasks"} taskStatus={TASK_COMPLETE} />
			case TASK_QUEUED:
				return <TaskSectionBottom title={"Queued Tasks"} taskStatus={TASK_QUEUED} />
			case TASK_DEFAULT:
				return <TaskSectionBottom title={"New Tasks"} taskStatus={TASK_DEFAULT} />
			default:
				return <TaskSectionTop title={'Active Tasks'} taskStatus={this.state.tasksStatusSelection} />
		}
	}

	render() {
		return (
			<div className="tdc__body__left">
				{/* <AppContext.Consumer>
					{(context) => {
						return (
							<React.Fragment> */}
								<div>
									<button style={{ color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_ACTIVE)}> active </button>
									<button style={{ color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_QUEUED)}> queued </button>
									<button style={{ color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_COMPLETE)}> complete </button>
									<button style={{ color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_DEFAULT)}> new </button>
								</div>
								{this.renderSection()}
								{/* <TaskSectionTop title={sectionTitle} taskStatus={this.state.tasksStatusSelection} /> */}
								{/* <TaskSectionBottom title={"Completed Tasks"} taskStatus={TASK_COMPLETE} /> */}
								<EventSection title={"Events"}/>
							{/* </React.Fragment>
						);
					}} */}
					{/* <Section title={"Upcoming Tasks"}/> */}
				{/* </AppContext.Consumer> */}
			</div>
		);
	}
}