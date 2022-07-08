const BYTES_KILOBYTE = 1024;
const FORMATS = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

/**
 * Returns a random integer between "low" and "high".
 * @param low Minimum number, inclusive.
 * @param high Maximum number, inclusive.
 */
export function randomInteger(low: number, high: number) {
	return Math.floor(Math.random() * (high - low + 1) + low);
}

/**
 * Returns a random float between "low" and "high", with the amount of decimals based on "decimals".
 * @param low Minimum number, inclusive.
 * @param high Maximum number, inclusive.
 * @param decimals Number of decimals, default 2.
 */
export function randomFloat(low: number, high: number, decimals = 2) {
	return Number((Math.random() * (high - low + 1) + low).toFixed(decimals));
}

/**
 * Create a factory to select an element from an array, based on a "chance" property.
 * @param arr An array with possible elements, each element MUST have a "chance" property.
 */
export function chanceFactory<T extends { chance: number }>(arr: T[]) {
	return {
		/**
		 * Select an element from the array.
		 * @param chance Total chance of the elements. Leave blank for automatic calculation.
		 */
		select(
			totalChance = randomInteger(
				0,
				arr.reduce((a, b) => a + b.chance, 0)
			)
		) {
			for (let i = 0, total = 0; i < arr.length; ++i) {
				total += arr[i].chance;
				if (total >= totalChance) return arr[i];
			}

			return arr[0];
		}
	};
}

/**
 * Creates and returns and array with numbers ranging from "min" to "max".
 * @param min The minimum number, always inclusive.
 * @param max The maximum number, is inclusive or exclusive based on "inclusive" argument.
 * @param inclusive Should "max" be inclusive.
 */
export function range(min = 0, max = 0, inclusive = true) {
	const step = 1;
	if (!max) {
		max = min;
		min = 0;
	}

	if (inclusive) max += 1;
	if ((step > 0 && min >= max) || (step < 0 && min <= max)) return [];

	const result = [];
	for (let i = min; step > 0 ? i < max : i > max; i += step) result.push(i);

	return result;
}

/**
 * Converts bytes to human-readable formats.
 * @param bytes Number of bytes.
 * @param decimals How many decimals.
 */
export function formatBytes(bytes: number, decimals = 2) {
	if (bytes === 0) return '0 Bytes';

	const dm = decimals < 0 ? 0 : decimals;
	const i = Math.floor(Math.log(bytes) / Math.log(BYTES_KILOBYTE));

	return parseFloat((bytes / Math.pow(BYTES_KILOBYTE, i)).toFixed(dm)) + ' ' + FORMATS[i];
}
