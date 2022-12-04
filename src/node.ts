import { randomBytes } from 'crypto';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

/**
 * Holds operations for "time" miliseconds.
 * @param time How many miliseconds should the code stop.
 */
export function sleep(time: number) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * Returns a cryptographically-secure random string.
 * @param options - Options.
 * @param options.stringBase - String base used for the random string.
 * @param options.byteLength - How many bytes should the random string have (in hex and base64, the amount of characters is double the bytes).
 */
export function generateSecure({
	stringBase = 'hex',
	byteLength = 20
}: {
	stringBase?:
		| 'hex'
		| 'ascii'
		| 'utf8'
		| 'utf-8'
		| 'utf16le'
		| 'ucs2'
		| 'ucs-2'
		| 'base64'
		| 'latin1'
		| 'binary';
	byteLength?: number;
} = {}) {
	return new Promise<string>((resolve, reject) => {
		randomBytes(byteLength, (err, buffer) => {
			if (err) reject(err);
			else resolve(buffer.toString(stringBase));
		});
	});
}

/**
 * Returns a cryptographically-secure random hexadecimal string.
 * @param byteLength How many bytes should the random string have (hint: the # of characters is double the bytes).
 */
export function generateHex(byteLength = 20) {
	return generateSecure({
		byteLength
	});
}

/**
 * Recursively deletes all files and folders inside a root folder.
 * @param root Root directory to start deleting.
 */
export async function recursiveCacheDelete(root: string) {
	for (const file of await readdir(root)) {
		const fullPath = join(root, file);
		if ((await stat(fullPath)).isDirectory()) await recursiveCacheDelete(fullPath);
		else delete require.cache[fullPath];
	}
}
