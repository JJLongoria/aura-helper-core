import { ApexAnnotation } from "./apexAnnotation";
import { ApexComment } from "./apexComment";
import { ApexDatatype } from "./apexDatatype";
import { ApexNode } from "./apexNode";
import { Token } from "./token";
/**
 * Class to represent an Apex Declaration Node. This class is designed to be a parent of all Declaration nodes like methods or classes
 */
export declare class ApexDeclarationNode extends ApexNode {
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
    comment?: ApexComment;
    description?: string;
    scope?: number;
    documentation?: string;
    parentName?: string;
    /**
     * Constructor to create an ApexDatatype instance
     * @param {string | ApexDeclarationNode} idOrDeclaration Node id or Object with ApexDatatype fields
     * @param {string} [idOrDeclaration] Declaration node type
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrDeclaration: string | ApexDeclarationNode, type?: string, name?: string, startToken?: Token);
    addChild(_child?: ApexNode | Token): void;
    getChildOrder(_childOrType?: ApexNode | string): void;
    getOrderedChilds(_childOrType?: ApexNode | string): void;
    getLastChild(_childOrType?: ApexNode | string): void;
    getFirstChild(_childOrType?: ApexNode | string): void;
    getAbosluteFirstChild(): void;
    getAbsoluteLastChild(): void;
}
