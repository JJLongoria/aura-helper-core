"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexEnum = void 0;
const values_1 = require("../values");
const apexDeclarationNode_1 = require("./apexDeclarationNode");
/**
 * Class to represent an Apex Enum Node when Parsing Apex Code
 */
class ApexEnum extends apexDeclarationNode_1.ApexDeclarationNode {
    /**
     * Constructor to create an ApexEnum instance
     * @param {string | ApexEnum} idOrEnum Node id or Object with ApexEnum fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrEnum, name, startToken) {
        super(idOrEnum, values_1.ApexNodeTypes.ENUM, name, startToken);
        if (idOrEnum instanceof ApexEnum) {
            this.values = idOrEnum.values;
            this.positionData = idOrEnum.positionData;
        }
        else {
            this.values = [];
            this.positionData = undefined;
        }
    }
    /**
     * Method to add an Apex Enum child node. Childs of enums are enum values.
     * @param {Token} child
     * @returns {ApexEnum} Return the ApexEnum instance
     */
    addChild(child) {
        if (child) {
            this.values.push(child);
        }
        return this;
    }
    /**
     * Method to get the last enum value
     * @returns {Token | undefined} Return the last enum value token
     */
    getLastChild() {
        return (this.values.length > 0) ? this.values[0] : undefined;
    }
    /**
     * Method to get the first enum value
     * @returns {Token | undefined} Return the first enum value token
     */
    getFirstChild() {
        return (this.values.length > 0) ? this.values[this.values.length - 1] : undefined;
    }
    /**
     * Method to get the first enum value (Equals to getFirstChild())
     * @returns {Token | undefined} Return the first enum value token
     */
    getAbosluteFirstChild() {
        return this.getFirstChild();
    }
    /**
     * Method to get the first enum value (Equals to getLastChild())
     * @returns {Token | undefined} Return the first enum value token
     */
    getAbsoluteLastChild() {
        return this.getLastChild();
    }
}
exports.ApexEnum = ApexEnum;
//# sourceMappingURL=apexEnum.js.map