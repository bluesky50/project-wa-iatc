import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import Body from '../components/TaskDashboard/Body';
import InfoContainer from '../components/common/InfoContainer';
import CreateModal from '../components/common/CreateModal';

export default class TaskDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false
		}
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		})
	}

	renderModal() {
		if (this.state.isModalOpen) {
			const actions = {
				toggleModal: this.toggleModal
			}
			return <CreateModal actions={actions}/>
		}
		return null;
	}

	render() {
		return (
			<div className="tdc">
				{this.renderModal()}
				<div className="tdc__header">
					<h3>Task Dashboard</h3>
					<button onClick={() => this.toggleModal()}>Open Create Modal</button>
					<Link to="/events">Events</Link>
					<Link to="/tasks">Tasks</Link>
					<Link to="/threads">Threads</Link>
					<Link to="/sessions">Sessions</Link>
					<h3>Other Info</h3>
				</div>
				<InfoContainer/>
				<Body/>
			</div>
		)
	}
}
