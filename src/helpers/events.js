export function createEvent(eventTitle, eventType, objectType, objectId, userId) {
	return {
		createdBy: userId,
		eventTitle,
		eventType,
		objectType,
		objectId,
		createdAt: Date.now()
	}
}