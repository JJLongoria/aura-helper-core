"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexDeclarationNode = void 0;
const apexNode_1 = require("./apexNode");
/**
 * Class to represent an Apex Declaration Node. This class is designed to be a parent of all Declaration nodes like methods or classes
 */
class ApexDeclarationNode extends apexNode_1.ApexNode {
    /**
     * Constructor to create an ApexDatatype instance
     * @param {string | ApexDeclarationNode} idOrDeclaration Node id or Object with ApexDatatype fields
     * @param {string} [idOrDeclaration] Declaration node type
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrDeclaration, type, name, startToken) {
        super(idOrDeclaration, type, name, startToken);
        if (idOrDeclaration instanceof ApexDeclarationNode) {
            this.accessModifier = idOrDeclaration.accessModifier;
            this.definitionModifier = idOrDeclaration.definitionModifier;
            this.sharingModifier = idOrDeclaration.sharingModifier;
            this.override = idOrDeclaration.override;
            this.webservice = idOrDeclaration.webservice;
            this.static = idOrDeclaration.static;
            this.final = idOrDeclaration.final;
            this.transient = idOrDeclaration.transient;
            this.signature = idOrDeclaration.signature;
            this.overrideSignature = idOrDeclaration.overrideSignature;
            this.simplifiedSignature = idOrDeclaration.simplifiedSignature;
            this.annotation = idOrDeclaration.annotation;
            this.datatype = idOrDeclaration.datatype;
            this.annotation = idOrDeclaration.annotation;
            this.comment = idOrDeclaration.comment;
            this.description = idOrDeclaration.description;
            this.scope = idOrDeclaration.scope;
            this.documentation = idOrDeclaration.documentation;
            this.parentName = idOrDeclaration.parentName;
        }
        else {
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
    }
    ;
    addChild(_child) {
    }
    getChildOrder(_childOrType) {
    }
    getOrderedChilds(_childOrType) {
    }
    getLastChild(_childOrType) {
    }
    getFirstChild(_childOrType) {
    }
    getAbosluteFirstChild() {
    }
    getAbsoluteLastChild() {
    }
}
exports.ApexDeclarationNode = ApexDeclarationNode;
//# sourceMappingURL=apexDeclarationNode.js.map