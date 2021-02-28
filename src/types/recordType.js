class RecordType {
    constructor(nameOrObject, name, def, personAccountDefault) {
        if (typeof nameOrObject === 'object') {
            this.developerName = nameOrObject.developerName;
            this.name = nameOrObject.name;
            this.default = nameOrObject.def;
            this.personAccountDefault = nameOrObject.personAccountDefault;
        } else {
            this.developerName = nameOrObject;
            this.name = name;
            this.default = def;
            this.personAccountDefault = personAccountDefault;
        }
    }

    setDeveloperName(devName){
        this.developerName = devName;
    }

    setName(name){
        this.name = name;
    }

    setDefault(def){
        this.default = (def !== undefined) ? def : false;
    }

    setPersonAccountDefault(personAccountDefault){
        this.personAccountDefault = (personAccountDefault !== undefined) ? personAccountDefault : false;
    }
}
module.exports = RecordType;