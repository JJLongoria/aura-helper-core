/**
 * Class to handle and throw errors when execute not supported operations
 */
class OperationNotSupportedException extends Error {

	/**
	 * Constructor to create the exception
	 * @param {String} message Exception message
	 */
	constructor(message) {
		super(message);
		this.name = "OperationNotSupportedException";
	}
}
module.exports = OperationNotSupportedException;