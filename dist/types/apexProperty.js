"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexProperty = void 0;
const values_1 = require("../values");
const apexGetter_1 = require("./apexGetter");
const apexSetter_1 = require("./apexSetter");
const apexVariable_1 = require("./apexVariable");
/**
 * Class to represent an Apex Property Node when Parsing Apex Code
 */
class ApexProperty extends apexVariable_1.ApexVariable {
    /**
     * Constructor to create an ApexProperty instance
     * @param {string | ApexVariable} idOrAnnotation Node id or Object with ApexProperty fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken) {
        super(idOrObject, name, startToken);
        this.nodeType = values_1.ApexNodeTypes.PROPERTY;
        if (idOrObject instanceof ApexProperty) {
            this.getter = serializeChild(idOrObject.getter);
            this.setter = serializeChild(idOrObject.setter);
        }
        else {
            this.getter = undefined;
            this.setter = undefined;
        }
    }
    /**
     * Method to add getter or setter property child
     * @param {Object} child Getter or Setter to add to the property
     * @returns {ApexProperty} Return the ApexProperty instance
     */
    addChild(child) {
        if (child && child.nodeType === values_1.ApexNodeTypes.GETTER && child instanceof apexGetter_1.ApexGetter) {
            this.getter = child;
        }
        else if (child && child.nodeType === values_1.ApexNodeTypes.SETTER && child instanceof apexSetter_1.ApexSetter) {
            this.setter = child;
        }
        return this;
    }
}
exports.ApexProperty = ApexProperty;
function serializeChild(child) {
    if (!child) {
        return child;
    }
    if (child.nodeType === values_1.ApexNodeTypes.GETTER) {
        return new apexGetter_1.ApexGetter(child);
    }
    else if (child.nodeType === values_1.ApexNodeTypes.SETTER) {
        return new apexSetter_1.ApexSetter(child);
    }
    return child;
}
//# sourceMappingURL=apexProperty.js.map