/**
 * Class to handle and throw errors when execute not supported operations
 */
export class OperationNotSupportedException extends Error {

	/**
	 * Constructor to create the exception
	 * @param {string} message Exception message
	 */
	constructor(message: string) {
		super(message);
		this.name = "OperationNotSupportedException";
	}
}