/**
 * Class to represent a SObject Record Type
 */
export class RecordType {

    developerName: string;
    name: string;
    default: boolean;
    master: boolean;

    /**
     * Create a Record type instance
     * @param {string | { [key: string]: any }} devNameOrRecordType Recordtype developer name or RecordType instance
     * @param {string} [name] Record type name
     * @param {boolean} [isDefault] true to set as default
     * @param {boolean} [isMaster] true to set as master
     */
    constructor(devNameOrRecordType?: string | { [key: string]: any }, name?: string, isDefault?: boolean, isMaster?: boolean) {
        if (devNameOrRecordType && typeof devNameOrRecordType !== 'string') {
            this.developerName = devNameOrRecordType.developerName;
            this.name = devNameOrRecordType.name;
            this.default = (devNameOrRecordType.default === undefined) ? false : devNameOrRecordType.default;
            this.master = (devNameOrRecordType.master === undefined) ? false : devNameOrRecordType.master;
        } else {
            this.developerName = devNameOrRecordType || '';
            this.name = name || this.developerName;
            this.default = (isDefault !== undefined) ? isDefault : false;
            this.master = (isMaster !== undefined) ? isMaster : false;
        }
    }

    /**
     * Set Record Type developer name
     * @param {string} devName Record type developer name
     */
    setDeveloperName(devName: string): void {
        this.developerName = devName;
    }

    /**
     * Set Record Type name
     * @param {string} name Record type name
     */
    setName(name: string): void {
        this.name = name;
    }

    /**
     * Set record type as default
     * @param {boolean} isDefault true to set as default
     */
    setDefault(isDefault: boolean): void {
        this.default = (isDefault !== undefined) ? isDefault : false;
    }

    /**
     * Set record type as master
     * @param {boolean} isMaster true to set as master
     */
    setMaster(isMaster: boolean): void {
        this.master = (isMaster !== undefined) ? isMaster : false;
    }
}