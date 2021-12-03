/**
 * Class to represent a SObject Record Type
 */
export declare class RecordType {
    developerName: string;
    name: string;
    default: boolean;
    master: boolean;
    /**
     * Create a Record type instance
     * @param {string | RecordType} devNameOrRecordType Recordtype developer name or RecordType instance
     * @param {string} [name] Record type name
     * @param {boolean} [isDefault] true to set as default
     * @param {boolean} [isMaster] true to set as master
     */
    constructor(devNameOrRecordType: string | RecordType, name?: string, isDefault?: boolean, isMaster?: boolean);
    /**
     * Set Record Type developer name
     * @param {string} devName Record type developer name
     */
    setDeveloperName(devName: string): void;
    /**
     * Set Record Type name
     * @param {string} name Record type name
     */
    setName(name: string): void;
    /**
     * Set record type as default
     * @param {boolean} isDefault true to set as default
     */
    setDefault(isDefault: boolean): void;
    /**
     * Set record type as master
     * @param {boolean} isMaster true to set as master
     */
    setMaster(isMaster: boolean): void;
}
