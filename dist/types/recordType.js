"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordType = void 0;
/**
 * Class to represent a SObject Record Type
 */
class RecordType {
    /**
     * Create a Record type instance
     * @param {string | RecordType} devNameOrRecordType Recordtype developer name or RecordType instance
     * @param {string} [name] Record type name
     * @param {boolean} [isDefault] true to set as default
     * @param {boolean} [isMaster] true to set as master
     */
    constructor(devNameOrRecordType, name, isDefault, isMaster) {
        if (devNameOrRecordType instanceof RecordType) {
            this.developerName = devNameOrRecordType.developerName;
            this.name = devNameOrRecordType.name;
            this.default = devNameOrRecordType.default;
            this.master = devNameOrRecordType.master;
        }
        else {
            this.developerName = devNameOrRecordType;
            this.name = name || this.developerName;
            this.default = (isDefault !== undefined) ? isDefault : false;
            this.master = (isMaster !== undefined) ? isMaster : false;
        }
    }
    /**
     * Set Record Type developer name
     * @param {string} devName Record type developer name
     */
    setDeveloperName(devName) {
        this.developerName = devName;
    }
    /**
     * Set Record Type name
     * @param {string} name Record type name
     */
    setName(name) {
        this.name = name;
    }
    /**
     * Set record type as default
     * @param {boolean} isDefault true to set as default
     */
    setDefault(isDefault) {
        this.default = (isDefault !== undefined) ? isDefault : false;
    }
    /**
     * Set record type as master
     * @param {boolean} isMaster true to set as master
     */
    setMaster(isMaster) {
        this.master = (isMaster !== undefined) ? isMaster : false;
    }
}
exports.RecordType = RecordType;
//# sourceMappingURL=recordType.js.map