/**
 * Class to handle and throw errors when data format are wrong
 */
export class WrongFormatException extends Error {

	/**
	 * Constructor to create the exception
	 * @param {string} message Exception message
	 */
	constructor(message: string) {
		super(message);
		this.name = "WrongFormatException";
	}
}