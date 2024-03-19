import { readable, derived } from 'svelte/store';

const start = new Date();

export const time = readable('60:00', function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});
