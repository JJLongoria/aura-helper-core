"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrievePackage = void 0;
/**
 * Class to represent a Retrieve Package section on Retrieve Result JSON response
 */
class RetrievePackage {
    /**
     * Create new Retrieve Package instance
     * @param nameOrPackage Package name or Retrive Pacakge instance
     */
    constructor(nameOrPackage) {
        if (nameOrPackage instanceof RetrievePackage) {
            this.name = nameOrPackage.name;
        }
        else {
            this.name = nameOrPackage;
        }
    }
}
exports.RetrievePackage = RetrievePackage;
//# sourceMappingURL=retrievePackage.js.map