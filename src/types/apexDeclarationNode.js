const ApexNode = require('./apexNode');
const Utils = require('../utils/utils');
const Token = require('./token');

/**
 * Class to represent an Apex Declaration Node. This class is designed to be a parent of all Declaration nodes like methods or classes
 */
class ApexDeclarationNode extends ApexNode {

    /**
     * Constructor to create an ApexDatatype instance
     * @param {String | Object} idOrObject Node id or Object with ApexDatatype fields
     * @param {String} [idOrObject] Declaration node type
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, type, name, startToken) {
        super(idOrObject, type, name, startToken);
        if (Utils.isObject(idOrObject)) {
            this.accessModifier = idOrObject.accessModifier;
            this.definitionModifier = idOrObject.definitionModifier;
            this.sharingModifier = idOrObject.sharingModifier;
            this.override = idOrObject.override;
            this.webservice = idOrObject.webservice;
            this.static = idOrObject.static;
            this.final = idOrObject.final;
            this.transient = idOrObject.transient;
            this.signature = idOrObject.signature;
            this.overrideSignature = idOrObject.overrideSignature;
            this.simplifiedSignature = idOrObject.simplifiedSignature;
            this.annotation = idOrObject.annotation;
            this.datatype = idOrObject.datatype;
            this.annotation = idOrObject.annotation;
            this.comment = idOrObject.comment;
            this.description = idOrObject.description;
            this.scope = idOrObject.scope;
            this.documentation = idOrObject.documentation;
            this.parentName = idOrObject.parentName;
        } else {
            this.accessModifier = undefined;
            this.definitionModifier = undefined;
            this.sharingModifier = undefined;
            this.override = undefined;
            this.webservice = undefined;
            this.static = undefined;
            this.final = undefined;
            this.transient = undefined;
            this.signature = undefined;
            this.overrideSignature = undefined;
            this.simplifiedSignature = undefined;
            this.annotation = undefined;
            this.datatype = undefined;
            this.annotation = undefined;
            this.comment = undefined;
            this.description = undefined;
            this.scope = undefined;
            this.documentation = undefined;
            this.parentName = undefined;
        }
    };

    addChild(child) {
    }

    getChildOrder(childOrType){

    }

    getOrderedChilds(childOrType){

    }

    getLastChild(childOrType){
        
    }

    getFirstChild(childOrType){

    }

    getAbosluteFirstChild(){

    }

    getAbsoluteLastChild(){

    }
}
module.exports = ApexDeclarationNode;