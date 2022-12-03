import { randomInteger } from './number';

/**
 * Returns a random element from an array, without removing it.
 * @param arr The array to select the element from.
 */
export function randomElement<T>(arr: T[]) {
	return arr[randomInteger(0, arr.length - 1)];
}

/**
 * Returns an array with randomly selected elements from an array, without altering the original array.
 * @param arr The array to select the elements from.
 * @param times How many elements should be returned.
 */
export function randomElements<T>(arr: T[], times: number) {
	const elements = [];
	for (let x = 0; x < times; x++) elements.push(randomElement(arr));
	return elements;
}
