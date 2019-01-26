import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { AppContext } from '../AppContext';
import Header from '../components/common/header';

const TaskThread = (props) => {
	const { id, title, status } = props.taskThread;
	return (
		<div style={styles.taskContainer}>
			<p>{title} - #{id} - status: {status}</p>
		</div>
	);
}

class TaskThreadsList extends Component {
	renderTaskThreads() {
		const { taskThreads } = this.props;

		return taskThreads.map((tt) => {
			return <TaskThread key={tt.id} taskThread={tt} />
		});
	}

	render() {
		return (
			<div style={styles.listContainer}>
				{this.renderTaskThreads()}
			</div>
		);
	}
}

export default class AllTaskThreadsListPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contextSelections: [],
			taskThreadStatusSelections: [],
		}
	}

	addContextSelection(contextId) {
		const newContextSelections = [...this.state.contextSelections, contextId];
		this.setState({
			contextSelections: newContextSelections
		});
	}

	removeContextSelection(contextId) {
		const newContextSelections = this.state.contextSelections.filter(cId=> cId === contextId)
		this.setState({
			contextSelections: newContextSelections
		});
	}

	addTaskStatusSelection(taskStatus) {
		const newTaskStatusSelections = [...this.state.taskStatusSelections, taskStatus];
		this.setState({
			taskStatusSelections: newTaskStatusSelections
		});
	}

	removeTaskStatusSelection(taskStatus) {
		const newTaskStatusSelections = this.state.taskStatusSelections.filter(ts => ts === taskStatus)
		this.setState({
			taskStatusSelections: newTaskStatusSelections
		});
	}

	render() {
		return (
			<div style={styles.pageContainer}>
				<Link to="/">Dashboard</Link>	
				<Header title={"Tasks List"}/>
				<AppContext.Consumer>
					{(context) => {
						const { taskThreadStatusSelections, contextSelections } = this.state;

						let filteredTaskThreads = context.taskThreads;
						
						if (taskThreadStatusSelections.length > 0) {
							filteredTaskThreads = filteredTaskThreads.filter((t) => {
								return taskThreadStatusSelections.includes(t.status);
							});
						}
						
						if (contextSelections.length > 0) {
							filteredTaskThreads = filteredTaskThreads.filter((t) => {
								return contextSelections.includes(t.contextId);
							});
						}

						return <TaskThreadsList taskThreads={filteredTaskThreads}/>
					}}
				</AppContext.Consumer>
			</div>
		);
	}
}

const styles = {
	pageContainer: {
		background: 'rgb(28, 39, 53)',
		height: '100vh',
		padding: '10px',
		width: '100%',
	},
	headerContainer: {
		border: '1px solid gray',
		display: 'flex',
		marginBottom: '10px',
		padding: '10px',
		width: '100%'
	},
	listContainer: {
		border: '1px solid gray',
		display: 'flex',
		flexFlow: 'column',
		marginBottom: '10px',
		padding: '4px',
		width: '100%'
	},
	taskContainer: {
		border: '1px solid gray',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '4px',
		width: '100%',
	}
}
