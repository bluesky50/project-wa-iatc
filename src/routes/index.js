import React, {Component} from 'react';

import { Route, Switch } from 'react-router-dom';

import TaskDashboard from './TaskDashboard.js';
import AllEventsListPage from './AllEventsListPage';
import AllTasksListPage from './AllTasksListPage';
import AllTaskThreadsListPage from './AllTaskThreadsListPage';
import AllWorkSessionsListPage from './AllWorkSessionsListPage';

import { AppContext } from '../AppContext';
import { tasks } from '../seed/tasks';
import { taskThreads } from '../seed/taskThreads';
import { taskGroups } from '../seed/taskGroups';
import { contexts } from '../seed/contexts';
import { createEvent } from '../helpers/events';

import { convertTaskStatusToString } from '../helpers/statusHelpers';

import { TASK_COMPLETE, TASK_ACTIVE, TASK_QUEUED, TASK_DEFAULT } from '../helpers/constants';
import { EVENT_TYPE_CREATE, EVENT_TYPE_UPDATE, EVENT_TYPE_DELETE } from '../helpers/constants';
import {  OBJECT_TASK, OBJECT_TASK_GROUP, OBJECT_TASK_THREAD } from '../helpers/objectNames';
// import { globalState } from '../helpers/globalState';

class AppProvider extends Component {
	state = {
		events: [],
		contexts,
		workSessions: [],
		timedTaskStartEvents: [],
		tasks,
		taskThreads,
		taskGroups,
		addEvent: (newEvent) => {
			this.setState({ events: [...this.state.events, newEvent]})
		},
		addTask: (newTask) => {
			const newEvent = createEvent(`${OBJECT_TASK} '${newTask.title}' has been created`, EVENT_TYPE_CREATE, OBJECT_TASK, newTask.id, 1);
			this.setState({ 
				tasks: [...this.state.tasks, newTask],
				events: [...this.state.events, { id: this.state.events.length, ...newEvent }]
			})
		},
		addTaskThread: (newTaskThread) => {
			const newEvent = createEvent(`${OBJECT_TASK_THREAD} '${newTaskThread.title}' has been created`, EVENT_TYPE_CREATE, OBJECT_TASK_THREAD, newTaskThread.id, 1);
			this.setState({ 
				taskThreads: [...this.state.taskThreads, newTaskThread],
				events: [...this.state.events, { id: this.state.events.length, ...newEvent }]
			});
		},
		addTaskGroup: (newTaskGroup) => {
			console.log(this.state.taskGroups);
			const newEvent = createEvent(`${OBJECT_TASK_GROUP} '${newTaskGroup.title}' has been created`, EVENT_TYPE_CREATE, OBJECT_TASK_GROUP, newTaskGroup.id, 1);
			this.setState({ 
				taskGroups: [...this.state.taskGroups, newTaskGroup],
				// taskTheads: [...this.state.taskThreads],
				events: [...this.state.events, { id: this.state.events.length, ...newEvent }]
			})
			setTimeout(() => {
				console.log(this.state.taskGroups);
			}, 1000);
		},
		startTimedTaskEvent: (taskId) => {
			console.log('global state.start(' + taskId + '): ', this.state.timedTaskStartEvents);
			const startEventForTask = this.state.timedTaskStartEvents.filter((te) => {
				return taskId === te.taskId;
			});
			console.log('global state.start(' + taskId+ '): ', startEventForTask);
			
			if (startEventForTask.length === 0) {
				console.log("**** adding new task event start" );
				const timedTaskStartEvent = {
					taskId,
					startTime: Date.now()
				}
				this.setState({
					timedTaskStartEvents: [...this.state.timedTaskStartEvents, timedTaskStartEvent]
				});
			}
		},
		stopTimedTaskEvent: (taskId) => {
			console.log('global state.stop(): removing taskId', taskId, 'from timedTaskStartEvents');
			const newTimedTaskStartEvents = [];
			const workSession = {
				taskId,
				startTime: null,
				endTime: Date.now() // + (1000 * 60 * 5)
			};
			this.state.timedTaskStartEvents.forEach((te) => {
				if (te.taskId === taskId) {
					workSession.startTime = te.startTime;
				} else {
					newTimedTaskStartEvents.push(te);
				}
			});
	
			const newWorkSessions = workSession.startTime ? [...this.state.workSessions, workSession] : [...this.state.workSessions];
			console.log('global state.stop(): number of timed task start events ', newTimedTaskStartEvents.length);
			this.setState({
				timedTaskStartEvents: newTimedTaskStartEvents,
				workSessions: newWorkSessions
			});
		},
		updateTaskStatus: (taskId, status) => {
			
			const filteredTasks = this.state.tasks.filter((t) => {
				return t.id === taskId;
			});

			if (filteredTasks.length > 0 && filteredTasks[0].status !== status) {
				const newEvent = createEvent(`${OBJECT_TASK} #${taskId} has been updated to ${convertTaskStatusToString(status)}`, EVENT_TYPE_UPDATE, OBJECT_TASK, taskId, 1);
				const newTaskData = {
					status,
					completedAt: status === TASK_COMPLETE ? Date.now() : null,
					activatedAt: status === TASK_ACTIVE ? Date.now() : null,
					queuedAt: status === TASK_QUEUED ? Date.now() : null,
					createdAt: status === TASK_DEFAULT ? Date.now() : null,
				}
				const newTasks = this.state.tasks.map((t) => {
					if (t.id === taskId) {
						return {...t, ...newTaskData}
					}
					return t;
				});
				this.setState({ 
					tasks: newTasks,
					events: [...this.state.events, { id: this.state.events.length, ...newEvent }]
				});
			}
		},
		addWorkSession: (taskId, startTime, endTime) => {
			const workSession = {
				taskId,
				startTime,
				endTime
			}
			this.setState({
				workSessions: [...this.state.workSessions, workSession]
			});
		}
	}

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		); 
	}
}

export default () => {
	return (
		<React.Fragment>
			<AppProvider>
				<Switch>
					<Route exact path="/" component={TaskDashboard}/>
					<Route exact path="/events" component={AllEventsListPage}/>
					<Route exact path="/tasks" component={AllTasksListPage}/>
					<Route exact path="/threads" component={AllTaskThreadsListPage}/>
					<Route exact path="/sessions" component={AllWorkSessionsListPage}/>
				</Switch>
			</AppProvider>
		</React.Fragment>
	)
}
