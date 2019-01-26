// import { 
// 	TASK_ACTIVE, 
// 	TASK_COMPLETE, 
// 	TASK_DEFAULT, 
// 	TASK_QUEUED,
// 	TASK_THREAD_ACTIVE,
// 	TASK_THREAD_COMPLETE,
// 	TASK_THREAD_DEFAULT,
// 	TASK_THREAD_QUEUED,
// } from './constants';
// import {
// 	TASK_ACTIVE_STRING,
// 	TASK_COMPLETE_STRING,
// 	TASK_DEFAULT_STRING,
// 	TASK_QUEUED_STRING,
// 	TASK_THREAD_ACTIVE_STRING,
// 	TASK_THREAD_COMPLETE_STRING,
// 	TASK_THREAD_DEFAULT_STRING,
// 	TASK_THREAD_QUEUED_STRING
// } from './objectStatusStrings';

// export function convertTaskStatusToString(taskStatus) {
// 	switch(taskStatus) {
// 		case TASK_ACTIVE:
// 			return TASK_ACTIVE_STRING;
// 		case TASK_COMPLETE:
// 			return TASK_COMPLETE_STRING;
// 		case TASK_DEFAULT:
// 			return TASK_DEFAULT_STRING;
// 		case TASK_QUEUED:
// 			return TASK_QUEUED_STRING;
// 		default:
// 			return "Unknown";
// 	}
// }	

// export function convertTaskThreadStatusToString(taskThreadStatus) {
// 	switch(taskThreadStatus) {
// 		case TASK_THREAD_ACTIVE:
// 			return TASK_THREAD_ACTIVE_STRING;
// 		case TASK_THREAD_COMPLETE:
// 			return TASK_THREAD_COMPLETE_STRING;
// 		case TASK_THREAD_DEFAULT:
// 			return TASK_THREAD_DEFAULT_STRING;
// 		case TASK_THREAD_QUEUED:
// 			return TASK_THREAD_QUEUED_STRING;
// 		default:
// 			return "Unknown";
// 	}
// }
import { taskStatusMap, taskThreadStatusMap } from './objectStatusMap';

export function convertTaskStatusToString(taskStatus) {
	return taskStatusMap[taskStatus];
}

export function convertTaskThreadStatusToString(taskThreadStatus) {
	return taskThreadStatusMap[taskThreadStatus];
}