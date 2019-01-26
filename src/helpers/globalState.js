import { tasks } from '../seed/tasks';
import { goals } from '../seed/goals';
import { objectives } from '../seed/objectives';

export const globalState = {
	events: [],
	workSessions: [],
	timedTaskStartEvents: [],
	tasks,
	goals,
	objectives,
	addEvent: (newEvent) => {
		this.setState({ events: [...this.state.events, newEvent]})
	},
	addTask: (newTask) => {
		this.setState({ tasks: [...this.state.tasks, newTask]})
	},
	addGoal: (newGoal) => {
		this.setState({ goals: [...this.state.goals, newGoal]})
	},
	addObjectives: (newObjective) => {
		this.setState({ objectives: [...this.state.objectives, newObjective]})
	},
	startTimedTaskEvent: (taskId) => {
		const timedTaskStartEvent = {
			taskId,
			startTime: Date.now()
		}
		this.setState({
			timedTaskStartEvents: [...this.state.timedTaskStartEvents, timedTaskStartEvent]
		});
	},
	stopTimedTaskEvent: (taskId) => {
		const newTimedTaskStartEvents = [];
		const workSession = {
			taskId,
			startTime: null,
			endTime: Date.now()
		};
		this.state.timedTaskStartEvents.forEach((te) => {
			if (te.taskId === taskId) {
				workSession.startTime = te.startTime;
			} else {
				newTimedTaskStartEvents.push(te);
			}
		});

		this.setState({
			timedTaskStartEvents: newTimedTaskStartEvents,
			workSessions: [...this.state.workSessions, workSession]
		});
	},
	completeTask: (taskId) => {
		this.setState({ 
			tasks: this.state.tasks.map((t) => {
				if (t.id === taskId) {
					return {...t, status: 'completed'}
				}
				return t;
			})
		})
	},
	activateTask: (taskId) => {
		this.setState({
			tasks: this.state.tasks.map((t) => {
				if (t.id === taskId) {
					return {...t, status: 'active'}
				}
				return t;
			})
		})
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
};
