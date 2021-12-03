"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSNotSupportedException = void 0;
/**
 * Class to handle and throw errors when execute the Framework with not supported operative system
 */
class OSNotSupportedException extends Error {
    /**
     * Constructor to create the exception
     */
    constructor() {
        super('Operative System Not Supported');
        this.name = "OSNotSupportedException";
    }
}
exports.OSNotSupportedException = OSNotSupportedException;
//# sourceMappingURL=osNotSuportedException.js.map