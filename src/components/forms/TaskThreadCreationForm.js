import React, { Component } from 'react';

import { AppContext } from '../../AppContext';
import { TASK_THREAD_DEFAULT } from '../../helpers/constants';

export default class TaskThreadCreationForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '',
			title: '',
			contextId: 1,
		}

		this.onChange = this.onChange.bind(this);
		this.handleSelectContext = this.handleSelectContext.bind(this)
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSelectContext(event) {
		this.setState({
			contextId: event.target.value
		});
	}

	handleSubmit(context) {
		const taskId = parseInt(this.state.id);
		const taskContextId = parseInt(this.state.contextId);
		const taskTitle = this.state.title.trim();

		if (typeof(taskId) === 'number' && typeof(taskContextId) === 'number') {
			const newTaskThread = {
				id: taskId,
				title: taskTitle,
				status: TASK_THREAD_DEFAULT,
				contextId: taskContextId,
			}
			context.addTaskThread(newTaskThread)
			this.clearState();
		}
	}

	clearState() {
		this.setState({
			id: '',
			title: '',
			contextId: 1,
		})
	}
	renderContextSelection(contexts) {
		const contextComponents = contexts.map((c, key) => {
			return <option key={key} value={c.id}>{c.title}</option>;
		})
		return (
			<select name="contextId" onChange={this.handleSelectContext} value={this.state.contextId}>
				<option value="" disabled>Select Task Thread</option>
				{contextComponents}
			</select>
		);
	}

	render() {
		const { id, title, contextId } = this.state;
		return (
			<AppContext.Consumer>
				{(context) => {
					return (
						<div style={styles.container}>
							<form style={styles.container} onChange={this.onChange} autoComplete="off">
								<p style={styles.text}>id</p>
								<input type='text' style={styles.text} name='id' placeholder='id' value={id}></input>

								<p style={styles.text}>Title</p>
								<input type='text' style={styles.text} name='title' placeholder='title' value={title}></input>
								
								<p style={styles.text}>Parent Context</p>
								{this.renderContextSelection(context.contexts)}

								{/* 
									<input type='text' style={styles.text} name='contextId' placeholder='contextId' value={contextId}></input>
								
								
									<input type='text' style={styles.text} name='taskGroupId' placeholder='taskGroupId' value={taskGroupId}></input> */}
							</form>
							<button style={styles.text} onClick={() => this.handleSubmit(context)}>Submit</button>
						</div>
					);
				}}
			</AppContext.Consumer>
		);
	}
}

const styles = {
	text: {
		color: 'black',
		border: '0px',
		borderRadius: '4px',
		height: "24px",
		marginBottom: '6px',
		padding: '6px'
	},
	container: {
		alignItems: 'center',
		display: 'flex',
		flexFlow: 'column',
		width: '100%',
	}
}