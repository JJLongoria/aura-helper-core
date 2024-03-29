import { ApexCommentBlock } from ".";
import { ApexAnnotation } from "./apexAnnotation";
import { ApexComment } from "./apexComment";
import { ApexDatatype } from "./apexDatatype";
import { ApexNode } from "./apexNode";
import { Token } from "./token";

/**
 * Class to represent an Apex Declaration Node. This class is designed to be a parent of all Declaration nodes like methods or classes
 */
export class ApexDeclarationNode extends ApexNode {

    accessModifier?: Token;
    definitionModifier?: Token;
    sharingModifier?: Token;
    override?: Token;
    webservice?: Token;
    static?: Token;
    final?: Token;
    transient?: Token;
    signature?: string;
    overrideSignature?: string;
    simplifiedSignature?: string;
    annotation?: ApexAnnotation;
    datatype?: ApexDatatype;
    comment?: ApexComment | ApexCommentBlock;
    description?: string;
    scope: number;
    documentation?: string;
    parentName?: string;

    /**
     * Constructor to create an ApexDatatype instance
     * @param {string | { [key: string]: any }} idOrDeclaration Node id or Object with ApexDatatype fields
     * @param {string} [idOrDeclaration] Declaration node type
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrDeclaration: string | { [key: string]: any }, type?: string, name?: string, startToken?: Token) {
        super(idOrDeclaration, type, name, startToken);
        if (idOrDeclaration && typeof idOrDeclaration !== 'string') {
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
            this.scope = 0;
            this.documentation = undefined;
            this.parentName = undefined;
        }
    };

    addChild(_child?: ApexNode | Token) {
    }

    getChildOrder(_childOrType?: ApexNode | string){

    }

    getOrderedChilds(_childOrType?: ApexNode | string){

    }

    getLastChild(_childOrType?: ApexNode | string){
        
    }

    getFirstChild(_childOrType?: ApexNode | string){

    }

    getAbosluteFirstChild(){

    }

    getAbsoluteLastChild(){

    }
}