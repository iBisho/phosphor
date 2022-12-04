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

/**
 * Removes an element from an array, given an element of it.
 * @param arr The array to remove the element of.
 * @param val The element to remove.
 * @returns "true" if the element was removed, otherwise "false".
 */
export function remove<T>(arr: T[], val: T) {
	const index = arr.indexOf(val);
	if (index > -1) {
		arr.splice(index, 1);
		return true;
	}

	return false;
}

/**
 * Switches an element from source to target.
 * @param source Original array to switch the element from.
 * @param target Target array.
 * @param val Element to switch.
 */
export function switchElement<T>(source: T[], target: T[], val: T) {
	remove(source, val);
	target.push(val);
	return true;
}
