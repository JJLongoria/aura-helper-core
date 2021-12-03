/**
 * Class to represent a SObject Field Picklist value
 */
export declare class PicklistValue {
    label: string;
    value: string;
    defaultValue: boolean;
    active: boolean;
    /**
     *
     * @param {string | PicklistValue} labelOrPickValue Picklist label or PicklistValue instance
     * @param {string} [value] Picklist value (API Name)
     * @param {boolean} [defaultValue] true to set as default value (false by default)
     * @param {boolean} [active] tru to set active (true by default)
     */
    constructor(labelOrPickValue: string | PicklistValue, value?: string, defaultValue?: boolean, active?: boolean);
    /**
     * Method to set label value
     * @param {string} label Label to set
     */
    setLabel(label: string): void;
    /**
     * Method to set value (API Name)
     * @param {string} label value to set
     */
    setValue(value: string): void;
    /**
     * Method to set value as default
     * @param {boolean} defaultValue true to set as default
     */
    setDefaultValue(defaultValue: boolean): void;
    /**
     * Method to set value as active
     * @param {boolean} active true to set as active
     */
    setActive(active: boolean): void;
}
