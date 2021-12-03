import { ApexGetter } from "./apexGetter";
import { ApexNode } from "./apexNode";
import { ApexSetter } from "./apexSetter";
import { ApexVariable } from "./apexVariable";
import { Token } from "./token";
/**
 * Class to represent an Apex Property Node when Parsing Apex Code
 */
export declare class ApexProperty extends ApexVariable {
    getter?: ApexGetter;
    setter?: ApexSetter;
    /**
     * Constructor to create an ApexProperty instance
     * @param {string | ApexVariable} idOrAnnotation Node id or Object with ApexProperty fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject: string | ApexVariable, name?: string, startToken?: Token);
    /**
     * Method to add getter or setter property child
     * @param {Object} child Getter or Setter to add to the property
     * @returns {ApexProperty} Return the ApexProperty instance
     */
    addChild(child: ApexNode): this;
}
