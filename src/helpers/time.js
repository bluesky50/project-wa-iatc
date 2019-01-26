export const totalMinsInDay = 1440;
export const totalMillisecondsInDay = 1440 * 60 * 1000;
export const totalWorkHoursInDay = 8;

export function millisToMinutesAndSeconds(millis) {
	// const millis = endTime - startTime;
	const minutes = Math.floor(millis / 60000);
	const seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export function millisToMinutes(millis) {
	const minutes = Math.floor(millis / 60000);
	return minutes;
}

export function adjustDateDays(date, days) {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

export function adjustMillisDays(millis, days) {
	return (days * 1000 * 60 * 60 * 24) + millis;
}