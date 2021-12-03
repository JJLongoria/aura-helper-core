"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicklistValue = void 0;
/**
 * Class to represent a SObject Field Picklist value
 */
class PicklistValue {
    /**
     *
     * @param {string | PicklistValue} labelOrPickValue Picklist label or PicklistValue instance
     * @param {string} [value] Picklist value (API Name)
     * @param {boolean} [defaultValue] true to set as default value (false by default)
     * @param {boolean} [active] tru to set active (true by default)
     */
    constructor(labelOrPickValue, value, defaultValue, active) {
        if (labelOrPickValue instanceof PicklistValue) {
            this.label = labelOrPickValue.label;
            this.value = labelOrPickValue.value;
            this.defaultValue = labelOrPickValue.defaultValue;
            this.active = labelOrPickValue.active;
        }
        else {
            this.label = labelOrPickValue;
            this.value = value || this.label;
            this.defaultValue = (defaultValue !== undefined) ? defaultValue : false;
            this.active = (active !== undefined) ? active : true;
        }
    }
    /**
     * Method to set label value
     * @param {string} label Label to set
     */
    setLabel(label) {
        this.label = label;
    }
    /**
     * Method to set value (API Name)
     * @param {string} label value to set
     */
    setValue(value) {
        this.value = value;
    }
    /**
     * Method to set value as default
     * @param {boolean} defaultValue true to set as default
     */
    setDefaultValue(defaultValue) {
        this.defaultValue = (defaultValue !== undefined) ? defaultValue : false;
    }
    /**
     * Method to set value as active
     * @param {boolean} active true to set as active
     */
    setActive(active) {
        this.active = (active !== undefined) ? active : true;
    }
}
exports.PicklistValue = PicklistValue;
//# sourceMappingURL=picklistValue.js.map