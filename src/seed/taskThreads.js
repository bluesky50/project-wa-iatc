import { TASK_THREAD_ACTIVE, TASK_THREAD_COMPLETE, TASK_THREAD_QUEUED } from '../helpers/constants';

export const taskThreads = [
	{ id: 1, title: 'Goal1', status: TASK_THREAD_ACTIVE },
	{ id: 2, title: 'Goal2', status: TASK_THREAD_ACTIVE },
	{ id: 3, title: 'Goal3', status: TASK_THREAD_ACTIVE },
	{ id: 4, title: 'Goal4', status: TASK_THREAD_QUEUED },
	{ id: 5, title: 'Goal5', status: TASK_THREAD_QUEUED }
];