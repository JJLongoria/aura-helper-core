/**
 * Class to handle and throw errors when data format are wrong
 */
class WrongFormatException extends Error {

	/**
	 * Constructor to create the exception
	 * @param {String} message Exception message
	 */
	constructor(message) {
		super(message);
		this.name = "WrongFormatException";
	}
}
module.exports = WrongFormatException;