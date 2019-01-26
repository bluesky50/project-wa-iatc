import React, { Component } from 'react';

import { AppContext } from '../../AppContext';
// import { TASK_DEFAULT } from '../../helpers/constants';

export default class TaskGroupCreationForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '',
			title: '',
			contextId: 1,
			taskThreadId: 1,
		}

		this.onChange = this.onChange.bind(this);
		this.handleSelectContext = this.handleSelectContext.bind(this)
		this.handleSelectTaskThread = this.handleSelectTaskThread.bind(this)
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

	handleSelectTaskThread(event) {
		this.setState({
			taskThreadId: event.target.value
		})
	}

	handleSubmit(context) {
		const taskGroupId = parseInt(this.state.id);
		const taskGroupContextId = parseInt(this.state.contextId);
		const taskGroupThreadId = parseInt(this.state.taskThreadId);
		const taskGroupTitle = this.state.title.trim();

		if (typeof(taskGroupId) === 'number' 
			&& typeof(taskGroupContextId) === 'number'
			&& typeof(taskGroupThreadId) === 'number'
			&& taskGroupTitle) {
			console.log(this.state);
			const newTaskGroup = {
				id: taskGroupId,
				title: taskGroupTitle,	
				contextId: taskGroupContextId,
				threadId: taskGroupThreadId
			}
			console.log(newTaskGroup);
			context.addTaskGroup(newTaskGroup)
			this.clearState();
		}
	}

	clearState() {
		this.setState({
			id: '',
			title: '',
			contextId: 1,
			taskThreadId: 1,
		})
	}
	renderContextSelection(contexts) {
		const contextComponents = contexts.map((c, key) => {
			return <option key={key} value={c.id}>{c.title}</option>;
		})
		return (
			<select name="contextId" onChange={this.handleSelectContext} value={this.state.contextId}>
				<option value=""  disabled>Select Task Thread</option>
				{contextComponents}
			</select>
		);
	}

	renderTaskThreadsSelection(taskThreads) {
		const taskThreadComponents = taskThreads.map((tt, key) => {
			return <option key={key} value={tt.id}>{tt.title}</option>;
		})
		return (
			<select name="taskThreadId" onChange={this.handleSelectTaskThread} value={this.state.taskThreadId}>
				<option value=""  disabled>Select Task Thread</option>
				{taskThreadComponents}
			</select>
		);
	}

	render() {
		const { id, title } = this.state;
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
								
								<p style={styles.text}>Parent Task Thread</p>
								{this.renderTaskThreadsSelection(context.taskThreads)}
								
								<p style={styles.text}>Parent Context</p>
								{this.renderContextSelection(context.contexts)}

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