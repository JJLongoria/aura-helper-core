class SObjectField {
    constructor(nameOrObject, label, type, custom) {
        if (typeof nameOrObject === 'object') {
            this.name = nameOrObject.name;
            this.label = nameOrObject.label;
            this.type = nameOrObject.type;
            this.custom = (nameOrObject.custom !== undefined) ? nameOrObject.custom : false;
            this.length = nameOrObject.length;
            this.relationshipName = nameOrObject.relationshipName;
            this.nillable = nameOrObject.nillable;
            this.picklistValues = nameOrObject.picklistValues;
            this.referenceTo = nameOrObject.referenceTo;
            this.namespace = nameOrObject.namespace;
            this.description = nameOrObject.description;
        } else {
            this.name = nameOrObject;
            this.label = label;
            this.type = type;
            this.custom = (custom !== undefined) ? custom : false;
            this.length = undefined;
            this.namespace = undefined;
            this.relationshipName = undefined;
            this.nillable = true;
            this.picklistValues = [];
            this.referenceTo = [];
            this.description = '';
        }
    }

    setName(name) {
        let splits = name.split('__');
        let namespace = undefined;
        if (splits.length > 2) {
            namespace = splits[0].trim();
        }
        if(namespace !== undefined)
            this.namespace = namespace;
        this.name = name;
    }

    setLabel(label) {
        this.label = label;
    }

    setType(type) {
        this.type = type;
    }

    setCustom(custom) {
        this.custom = (custom !== undefined) ? custom : false;
        return this;
    }

    setLenght(length) {
        this.length = length;
        return this;
    }

    setNillable(nillable) {
        this.nillable = (nillable !== undefined) ? nillable : false;
        return this;
    }

    setRelationshipName(relationshipName) {
        this.relationshipName = relationshipName;
        return this;
    }

    setNamespace(namespace) {
        this.namespace = namespace;
        return this;
    }

    addPicklistValue(pickVal) {
        this.picklistValues.push(pickVal);
        return this;
    }

    addReferenceTo(ref) {
        this.referenceTo.push(ref);
        return this;
    }
}
module.exports = SObjectField;