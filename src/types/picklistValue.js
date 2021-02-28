class PicklistValue {
    constructor(nameOrObject, value, defaultValue, active) {
        if (typeof nameOrObject === 'object') {
            this.label = nameOrObject.label;
            this.value = nameOrObject.value;
            this.defaultValue = nameOrObject.defaultValue;
            this.active = nameOrObject.active;
        } else {
            this.label = nameOrObject;
            this.value = value;
            this.defaultValue = defaultValue;
            this.active = active;
        }
    }

    setLabel(label){
        this.label = label;
    }

    setValue(value){
        this.value = value;
    }

    setDefaultValue(defaultValue){
        this.defaultValue = (defaultValue !== undefined) ? defaultValue : false;
    }

    setActive(active){
        this.active = active;
    }
}
module.exports = PicklistValue;