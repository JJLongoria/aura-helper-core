/**
 * Class to handle and throw errors when exceute not allowed operations
 */
class OperationNotAllowedException extends Error {

	/**
	 * Constructor to create the exception
	 * @param {String} message Exception message
	 */
	constructor(message) {
		super(message);
		this.name = "OperationNotAllowedException";
	}
}
module.exports = OperationNotAllowedException;