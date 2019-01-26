import React, { Component } from 'react';

import WorkSessionSection from './WorkSessionSection';
import GoalSection from './GoalSection';

import { AppContext } from '../../AppContext';

import { TASK_THREAD_ACTIVE, TASK_THREAD_COMPLETE, TASK_THREAD_QUEUED } from '../../helpers/constants';

export default class BodyRight extends Component {
	constructor(props) {
		super(props);

		this.state = {
			taskThreadsStatusSelection: TASK_THREAD_ACTIVE
		}

		this.toggleTaskThreadsSelection = this.toggleTaskThreadsSelection.bind(this);
	}

	toggleTaskThreadsSelection(statusSelection) {
		this.setState({
			taskThreadsStatusSelection: statusSelection
		});
	}

	render() {
		const style = {
			color: 'black',
			height: '20px',
			flex: 1
		}
		return (
			<div className="tdc__body__right">
				{/* <AppContext.Consumer>
					{(context) => {
						return (
							<React.Fragment> */}
								
								<div style={{ display: 'flex' }}>
									<button style={style} onClick={() => this.toggleTaskThreadsSelection(TASK_THREAD_ACTIVE)}>Active</button>
									<button style={style} onClick={() => this.toggleTaskThreadsSelection(TASK_THREAD_COMPLETE)}>Complete</button>
									<button style={style} onClick={() => this.toggleTaskThreadsSelection(TASK_THREAD_QUEUED)}>QUEUED</button>
								</div>
								<GoalSection title={"Active Goals"} taskThreadsStatus={this.state.taskThreadsStatusSelection}/>
								<WorkSessionSection title={"Work Session Log"} />
							{/* </React.Fragment>
						);
					}}
				</AppContext.Consumer> */}
				
			</div>
		);
	}
}
