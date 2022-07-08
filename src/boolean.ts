/**
 * Create a factory to select a boolean, based on weighting.
 * @param trueChance Chance of the result being "true", cannot exceed 1.
 */
export function booleanFactory(trueChance = 0.5) {
	if (trueChance >= 1 || trueChance < 0)
		throw new RangeError('"trueChance" must be greater than 0 and lower than 1.');
	return {
		/**
		 * Randomly selects true or false, based on "trueChance".
		 */
		select() {
			return Math.random() < trueChance;
		}
	};
}

/**
 * Returns a random boolean.
 */
export function randomBoolean() {
	return booleanFactory().select();
}
