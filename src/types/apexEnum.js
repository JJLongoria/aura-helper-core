const ApexNodeType = require('../values/apexNodeTypes');
const ApexDeclarationNode = require('./apexDeclarationNode');
const Token = require('./token');
const Utils = require('../utils/utils');

/**
 * Class to represent an Apex Enum Node when Parsing Apex Code
 */
class ApexEnum extends ApexDeclarationNode {

    /**
     * Constructor to create an ApexEnum instance
     * @param {String | Object} idOrObject Node id or Object with ApexEnum fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken) {
        super(idOrObject, ApexNodeType.ENUM, name, startToken);
        if(Utils.isObject(idOrObject)){
            this.values = idOrObject.values;
            this.positionData = idOrObject.positionData;
        } else {
            this.values = [];
            this.positionData = undefined;
        }
    }

    /**
     * Method to add an Apex Enum child node. Childs of enums are enum values.
     * @param {Token} child 
     * @returns {ApexClass} Return the ApexClass instance
     */
    addChild(child) {
        if(child){
            this.values.push(child);
            child.order = this.values.length;
            child.memberOrder = child.order;
        }
        return this;
    }

    /**
     * Method to get the last enum value
     * @returns {Token} Return the last enum value token
     */
    getLastChild(){
        return (this.values.length > 0) ? this.values[0] : undefined;
    }

    /**
     * Method to get the first enum value
     * @returns {Token} Return the first enum value token
     */
    getFirstChild(){
        return (this.values.length > 0) ? this.values[this.values.length - 1] : undefined;
    }

    /**
     * Method to get the first enum value (Equals to getFirstChild())
     * @returns {Token} Return the first enum value token
     */
    getAbosluteFirstChild(){
        return this.getFirstChild();
    }

    /**
     * Method to get the first enum value (Equals to getLastChild())
     * @returns {Token} Return the first enum value token
     */
    getAbsoluteLastChild(){
        return this.getLastChild();
    }
}
module.exports = ApexEnum;