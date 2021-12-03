import { ApexConstructor } from "./apexConstructor";
import { ApexDeclarationNode } from "./apexDeclarationNode";
import { ApexEnum } from "./apexEnum";
import { ApexInitializer } from "./apexInitializer";
import { ApexMethod } from "./apexMethod";
import { ApexStaticConstructor } from "./apexStaticConstructor";
import { ApexVariable } from "./apexVariable";
import { SOQLQuery } from "./soqlQuery";
import { Token } from "./token";
/**
 * Class to represent an Apex Class Node when Parsing Apex Code
 */
export declare class ApexClass extends ApexDeclarationNode {
    initializer?: ApexInitializer;
    staticConstructor?: ApexStaticConstructor;
    classes: {
        [key: string]: ApexClass;
    };
    interfaces: {
        [key: string]: ApexClass;
    };
    enums: {
        [key: string]: ApexEnum;
    };
    variables: {
        [key: string]: ApexVariable;
    };
    methods: {
        [key: string]: ApexMethod;
    };
    constructors: {
        [key: string]: ApexConstructor;
    };
    extendsType?: string;
    extends?: ApexClass;
    implementTypes: string[];
    implements: {
        [key: string]: ApexClass;
    };
    totalMembers: number;
    queries: SOQLQuery[];
    /**
     * Constructor to create an ApexClass instance
     * @param {string | ApexClass} idOrClass Node id or Object with ApexClass fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrClass: string | ApexClass, name?: string, startToken?: Token);
    /**
     * Method to add an Apex Class child node (methods, fields, properties, static constructor...)
     * @param {ApexDeclarationNode} child
     * @returns {ApexClass} Return the ApexClass instance
     */
    addChild(child: ApexDeclarationNode): ApexClass;
    /**
     * Method to get the child order by type to the specified child type (You can pass a child directly to analize the node type)
     * @param {string | ApexDeclarationNode} childOrType Node type or node to extract the type
     * @returns {number} Return the child order number. 0 if not exist any child. The first child number is 1.
     */
    getChildOrder(childOrType: string | ApexDeclarationNode): number;
    getOrderedChilds(childOrType: string | ApexDeclarationNode): ApexDeclarationNode[] | SOQLQuery[];
    /**
     * Method to get the last child by type. (You can pass a child directly to analize the node type)
     * @param {string | ApexDeclarationNode} childOrType Node type or node to extract the type
     * @returns {ApexDeclarationNode | SOQLQuery} Return the last child by type (undefined if not exists childs of the selected type)
     */
    getLastChild(childOrType: string | ApexDeclarationNode): ApexDeclarationNode | SOQLQuery | undefined;
    /**
     * Method to get the first child by type. (You can pass a child directly to analize the node type)
     * @param {string | ApexDeclarationNode} childOrType Node type or node to extract the type
     * @returns {number} Return the first child by type (undefined if not exists childs of the selected type)
     */
    getFirstChild(childOrType: string | ApexDeclarationNode): ApexDeclarationNode | SOQLQuery | undefined;
    /**
     * Method to get the first absolute child into all class members.
     *
     * @returns {number} Returns the first class child into the file
     */
    getAbosluteFirstChild(): ApexDeclarationNode | SOQLQuery | undefined;
    /**
     * Method to get the last absolute child into all class members.
     *
     * @returns {number} Returns the last class child into the file
     */
    getAbsoluteLastChild(): ApexDeclarationNode | SOQLQuery | undefined;
}
