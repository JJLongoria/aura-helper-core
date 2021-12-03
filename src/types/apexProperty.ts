import { ApexNodeTypes } from "../values";
import { ApexGetter } from "./apexGetter";
import { ApexNode } from "./apexNode";
import { ApexSetter } from "./apexSetter";
import { ApexVariable } from "./apexVariable";
import { Token } from "./token";

/**
 * Class to represent an Apex Property Node when Parsing Apex Code
 */
export class ApexProperty extends ApexVariable {

    getter?: ApexGetter;
    setter?: ApexSetter;

    /**
     * Constructor to create an ApexProperty instance
     * @param {string | ApexVariable} idOrAnnotation Node id or Object with ApexProperty fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject: string | ApexVariable, name?: string, startToken?: Token) {
        super(idOrObject, name, startToken);
        this.nodeType = ApexNodeTypes.PROPERTY;
        if (idOrObject instanceof ApexProperty) {
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
    addChild(child: ApexNode) {
        if (child && child.nodeType === ApexNodeTypes.GETTER && child instanceof ApexGetter) {
            this.getter = child;
        }
        else if (child && child.nodeType === ApexNodeTypes.SETTER && child instanceof ApexSetter) {
            this.setter = child;
        }
        return this;
    }
}

function serializeChild(child: any) {
    if (!child) {
        return child;
    }
    if (child.nodeType === ApexNodeTypes.GETTER) {
        return new ApexGetter(child);
    } else if (child.nodeType === ApexNodeTypes.SETTER) {
        return new ApexSetter(child);
    }
    return child;
}