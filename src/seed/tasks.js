import { TASK_ACTIVE, TASK_COMPLETE, TASK_QUEUED, TASK_DEFAULT } from '../helpers/constants';

export const tasks = [
	{ id: 1, groupId: 1, title: 'taskTitle', status: TASK_ACTIVE, contextId: 1 },
	{ id: 2, groupId: 1, title: 'taskTitle', status: TASK_ACTIVE, contextId: 1 },
	{ id: 3, groupId: 1, title: 'taskTitle', status: TASK_ACTIVE, contextId: 1 },
	{ id: 4, groupId: 1, title: 'taskTitle', status: TASK_ACTIVE, contextId: 1 },
	{ id: 5, groupId: 1, title: 'taskTitle', status: TASK_ACTIVE, contextId: 1 },
	{ id: 6, groupId: 1, title: 'taskTitle', status: TASK_COMPLETE, contextId: 1 },
	{ id: 7, groupId: 1, title: 'taskTitle', status: TASK_COMPLETE, contextId: 1 },
	{ id: 8, groupId: 1, title: 'taskTitle', status: TASK_COMPLETE, contextId: 1 },
	{ id: 9, groupId: 1, title: 'taskTitle', status: TASK_COMPLETE, contextId: 1 },
	{ id: 10, groupId: 1, title: 'taskTitle', status: TASK_COMPLETE, contextId: 1 },
	{ id: 11, groupId: 1, title: 'taskTitle', status: TASK_QUEUED, contextId: 2 },
	{ id: 12, groupId: 1, title: 'taskTitle', status: TASK_QUEUED, contextId: 2 },
	{ id: 13, groupId: 1, title: 'taskTitle', status: TASK_QUEUED, contextId: 2 },
	{ id: 14, groupId: 1, title: 'taskTitle', status: TASK_QUEUED, contextId: 2 },
	{ id: 15, groupId: 1, title: 'taskTitle', status: TASK_QUEUED, contextId: 2 },
	{ id: 16, groupId: 1, title: 'taskTitle', status: TASK_DEFAULT, contextId: 2 },
	{ id: 17, groupId: 1, title: 'taskTitle', status: TASK_DEFAULT, contextId: 2 },
	{ id: 18, groupId: 1, title: 'taskTitle', status: TASK_DEFAULT, contextId: 2 },
	{ id: 19, groupId: 1, title: 'taskTitle', status: TASK_DEFAULT, contextId: 2 },
	{ id: 20, groupId: 1, title: 'taskTitle', status: TASK_DEFAULT, contextId: 2 },
];