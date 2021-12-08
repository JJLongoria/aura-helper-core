/**
 * Class to represent a SObject Field Picklist value
 */
export class PicklistValue {

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
    constructor(labelOrPickValue?: string | PicklistValue, value?: string, defaultValue?: boolean, active?: boolean) {
        if (labelOrPickValue instanceof PicklistValue) {
            this.label = labelOrPickValue.label;
            this.value = labelOrPickValue.value;
            this.defaultValue = labelOrPickValue.defaultValue;
            this.active = labelOrPickValue.active;
        } else {
            this.label = labelOrPickValue || '';
            this.value = value || this.label;
            this.defaultValue = (defaultValue !== undefined) ? defaultValue : false;
            this.active = (active !== undefined) ? active : true;
        }
    }

    /**
     * Method to set label value
     * @param {string} label Label to set
     */
    setLabel(label: string): void{
        this.label = label;
    }

    /**
     * Method to set value (API Name)
     * @param {string} label value to set
     */
    setValue(value: string): void{
        this.value = value;
    }

    /**
     * Method to set value as default
     * @param {boolean} defaultValue true to set as default
     */
    setDefaultValue(defaultValue: boolean): void{
        this.defaultValue = (defaultValue !== undefined) ? defaultValue : false;
    }

    /**
     * Method to set value as active
     * @param {boolean} active true to set as active
     */
    setActive(active: boolean): void{
        this.active = (active !== undefined) ? active : true;
    }
}