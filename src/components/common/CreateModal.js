import React, { Component } from 'react';

import * as OBJECT_NAMES from '../../helpers/objectNames';

import TaskCreationForm from '../forms/TaskCreationForm';
import TaskThreadCreationForm from '../forms/TaskThreadCreationForm';
import TaskGroupCreationForm from '../forms/TaskGroupCreationForm';

export default class CreateModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selection: OBJECT_NAMES.OBJECT_TASK
		}

		this.updateSelection = this.updateSelection.bind(this);
	}

	updateSelection(event) {
		this.setState({
			selection: event.target.value
		});
	}

	renderOptions() {
		const options = Object.entries(OBJECT_NAMES).map((objectEntry, key) => {
			return <option key={key} value={objectEntry[1]}>{objectEntry[1]}</option>;
		});
		return (
			<select onChange={this.updateSelection}>
				{options}
			</select>
		)
	}

	renderForm() {
		switch(this.state.selection) {
			case OBJECT_NAMES.OBJECT_TASK:
				return <TaskCreationForm/>
			case OBJECT_NAMES.OBJECT_TASK_THREAD:
				return <TaskThreadCreationForm/>
			case OBJECT_NAMES.OBJECT_TASK_GROUP:
				return <TaskGroupCreationForm/>
			default:
				return <TaskCreationForm/>
		}
	}

	render() {
		return (
			<div className="modal-container">
				<div className="create-modal">
					<div className="create-modal__header">
						{this.renderOptions()}
						<button onClick={() => this.props.actions.toggleModal()}>Close</button>
					</div>
					{this.renderForm()}
				</div>
			</div>
		);
	}
}