const ApexVariable = require('./apexVariable');
const ApexNodeType = require('../values/apexNodeTypes');
const ApexGetter = require('./apexGetter');
const ApexSetter = require('./apexSetter');
const Utils = require('../utils/utils');
const Token = require('./token');

/**
 * Class to represent an Apex Property Node when Parsing Apex Code
 */
class ApexProperty extends ApexVariable{

    /**
     * Constructor to create an ApexProperty instance
     * @param {String | Object} idOrObject Node id or Object with ApexProperty fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken){
        super(idOrObject, name, startToken);
        this.nodeType = ApexNodeType.PROPERTY;
        if(Utils.isObject(idOrObject)){
            this.getter = serializeChild(idOrObject.getter);
            this.setter = serializeChild(idOrObject.setter);
        } else {
            this.getter = undefined;
            this.setter = undefined;
        }
    }

    /**
     * Method to add getter or setter property child
     * @param {Object} child Getter or Setter to add to the property
     * @returns {ApexProperty} Return the ApexProperty instance
     */
    addChild(child){
        if(child && child.nodeType === ApexNodeType.GETTER)
            this.getter = child;
        else if(child && child.nodeType === ApexNodeType.SETTER)
            this.setter = child;
        return this;
    }
}
module.exports = ApexProperty;

function serializeChild(child) {
    if (!child)
        return child;
    if (child.nodeType === ApexNodeType.GETTER) {
        return new ApexGetter(child);
    } else if (child.nodeType === ApexNodeType.SETTER) {
        return new ApexSetter(child);
    }
    return child;
}