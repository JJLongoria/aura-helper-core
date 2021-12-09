import { ApexInterface } from ".";
import { Utils } from "../utils";
import { ApexNodeTypes } from "../values";
import { ApexConstructor } from "./apexConstructor";
import { ApexDeclarationNode } from "./apexDeclarationNode";
import { ApexEnum } from "./apexEnum";
import { ApexInitializer } from "./apexInitializer";
import { ApexMethod } from "./apexMethod";
import { ApexNode } from "./apexNode";
import { ApexProperty } from "./apexProperty";
import { ApexStaticConstructor } from "./apexStaticConstructor";
import { ApexVariable } from "./apexVariable";
import { SOQLQuery } from "./soqlQuery";
import { Token } from "./token";

/**
 * Class to represent an Apex Class Node when Parsing Apex Code
 */
export class ApexClass extends ApexDeclarationNode {

    initializer?: ApexInitializer;
    staticConstructor?: ApexStaticConstructor;
    classes: { [key: string]: ApexClass };
    interfaces: { [key: string]: ApexClass };
    enums: { [key: string]: ApexEnum };
    variables: { [key: string]: ApexVariable };
    methods: { [key: string]: ApexMethod };
    constructors: { [key: string]: ApexConstructor };
    extendsType?: string;
    extends?: ApexClass | ApexInterface;
    implementTypes: string[];
    implements: { [key: string]: ApexInterface };
    totalMembers: number;
    queries: SOQLQuery[];

    /**
     * Constructor to create an ApexClass instance
     * @param {string | { [key: string]: any }} idOrClass Node id or Object with ApexClass fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrClass: string | { [key: string]: any }, name?: string, startToken?: Token) {
        super(idOrClass, ApexNodeTypes.CLASS, name, startToken);
        if (idOrClass && typeof idOrClass !== 'string') {
            this.initializer = serializeChild(idOrClass.initializer);
            this.staticConstructor = serializeChild(idOrClass.staticConstructor);
            this.classes = serialize(idOrClass.classes);
            this.interfaces = serialize(idOrClass.interfaces);
            this.enums = serialize(idOrClass.enums);
            this.variables = serialize(idOrClass.variables);
            this.methods = serialize(idOrClass.methods);
            this.constructors = serialize(idOrClass.constructors);
            this.extendsType = idOrClass.extendsType;
            this.extends = serializeChild(idOrClass.extends);
            this.implementTypes = idOrClass.implementTypes;
            this.implements = serialize(idOrClass.implements);
            this.positionData = idOrClass.positionData;
            this.totalMembers = idOrClass.totalMembers;
            this.queries = serialize(idOrClass.queries);
        } else {
            this.initializer = undefined;
            this.staticConstructor = undefined;
            this.classes = {};
            this.interfaces = {};
            this.enums = {};
            this.variables = {};
            this.methods = {};
            this.constructors = {};
            this.extendsType = undefined;
            this.extends = undefined;
            this.implementTypes = [];
            this.implements = {};
            this.positionData = undefined;
            this.totalMembers = 0;
            this.queries = [];
        }
    }

    /**
     * Method to add an Apex Class child node (methods, fields, properties, static constructor...)
     * @param {ApexDeclarationNode | SOQLQuery} child 
     * @returns {ApexClass} Return the ApexClass instance
     */
    addChild(child: ApexDeclarationNode | SOQLQuery): ApexClass {
        if (!child) {
            return this;
        }
        if (child.nodeType === ApexNodeTypes.INITIALIZER && child instanceof ApexInitializer) {
            this.initializer = child;
        } else if (child.nodeType === ApexNodeTypes.STATIC_CONSTRUCTOR && child instanceof ApexStaticConstructor) {
            this.staticConstructor = child;
        } else if (child.nodeType === ApexNodeTypes.CLASS && child instanceof ApexClass) {
            this.classes[child.name.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeTypes.INTERFACE && child instanceof ApexClass) {
            this.interfaces[child.name.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeTypes.ENUM && child instanceof ApexEnum) {
            this.enums[child.name.toLowerCase()] = child;
        } else if ((child.nodeType === ApexNodeTypes.VARIABLE || child.nodeType === ApexNodeTypes.PROPERTY) && (child instanceof ApexVariable || child instanceof ApexProperty)) {
            this.variables[child.name.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeTypes.METHOD && child instanceof ApexMethod && child.simplifiedSignature) {
            this.methods[child.simplifiedSignature.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeTypes.CONSTRUCTOR && child instanceof ApexConstructor && child.simplifiedSignature) {
            this.constructors[child.simplifiedSignature.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeTypes.SOQL && child instanceof SOQLQuery) {
            this.queries.push(child);
        }
        this.totalMembers++;
        child.parentName = this.name;
        child.order = this.getChildOrder(child);
        child.memberOrder = this.totalMembers;
        return this;
    }

    /**
     * Method to get the child order by type to the specified child type (You can pass a child directly to analize the node type)
     * @param {string | ApexDeclarationNode | SOQLQuery} childOrType Node type or node to extract the type
     * @returns {number} Return the child order number. 0 if not exist any child. The first child number is 1.
     */
    getChildOrder(childOrType: string | ApexDeclarationNode | SOQLQuery): number {
        const type = childOrType instanceof ApexNode ? childOrType.nodeType : childOrType;
        if (type === ApexNodeTypes.INITIALIZER) {
            return 1;
        } else if (type === ApexNodeTypes.STATIC_CONSTRUCTOR) {
            return 1;
        } else if (type === ApexNodeTypes.CLASS) {
            return Utils.countKeys(this.classes);
        } else if (type === ApexNodeTypes.INTERFACE) {
            return Utils.countKeys(this.interfaces);
        } else if (type === ApexNodeTypes.ENUM) {
            return Utils.countKeys(this.enums);
        } else if (type === ApexNodeTypes.VARIABLE || type === ApexNodeTypes.PROPERTY) {
            return Utils.countKeys(this.variables);
        } else if (type === ApexNodeTypes.METHOD) {
            return Utils.countKeys(this.methods);
        } else if (type === ApexNodeTypes.CONSTRUCTOR) {
            return Utils.countKeys(this.constructors);
        } else if (type === ApexNodeTypes.SOQL) {
            return this.queries.length;
        }
        return 0;
    }

    getOrderedChilds(childOrType: string | ApexDeclarationNode | SOQLQuery): ApexDeclarationNode[] | SOQLQuery[] {
        let ordered = [];
        const type = childOrType instanceof ApexNode ? childOrType.nodeType : childOrType;
        if (type === ApexNodeTypes.INITIALIZER && !Utils.isNull(this.initializer)) {
            ordered.push(this.initializer);
        } else if (type === ApexNodeTypes.STATIC_CONSTRUCTOR && !Utils.isNull(this.staticConstructor)) {
            ordered.push(this.staticConstructor);
        } else if (type === ApexNodeTypes.CLASS && Utils.hasKeys(this.classes)) {
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                ordered.push(node);
            }
        } else if (type === ApexNodeTypes.INTERFACE && Utils.hasKeys(this.interfaces)) {
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                ordered.push(node);
            }
        } else if (type === ApexNodeTypes.ENUM && Utils.hasKeys(this.enums)) {
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                ordered.push(node);
            }
        } else if ((type === ApexNodeTypes.VARIABLE || type === ApexNodeTypes.PROPERTY) && Utils.hasKeys(this.variables)) {
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                ordered.push(node);
            }
        } else if (type === ApexNodeTypes.METHOD && Utils.hasKeys(this.methods)) {
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                ordered.push(node);
            }
        } else if (type === ApexNodeTypes.CONSTRUCTOR && Utils.hasKeys(this.constructors)) {
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                ordered.push(node);
            }
        } else if (type === ApexNodeTypes.SOQL && this.queries.length > 0) {
            for (const node of this.queries) {
                ordered.push(node);
            }
        }
        return Utils.sort(ordered, ['order']);
    }

    /**
     * Method to get the last child by type. (You can pass a child directly to analize the node type)
     * @param {string | ApexDeclarationNode} childOrType Node type or node to extract the type
     * @returns {ApexDeclarationNode | SOQLQuery} Return the last child by type (undefined if not exists childs of the selected type)
     */
    getLastChild(childOrType: string | ApexDeclarationNode | SOQLQuery): ApexDeclarationNode | SOQLQuery | undefined {
        const type = (childOrType instanceof ApexNode) ? childOrType.nodeType : childOrType;
        let child;
        if (type === ApexNodeTypes.INITIALIZER && !Utils.isNull(this.initializer)) {
            child = this.initializer;
        } else if (type === ApexNodeTypes.STATIC_CONSTRUCTOR && !Utils.isNull(this.staticConstructor)) {
            child = this.staticConstructor;
        } else if (type === ApexNodeTypes.CLASS && Utils.hasKeys(this.classes)) {
            child = Utils.getFirstElement(this.classes);
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeTypes.INTERFACE && Utils.hasKeys(this.interfaces)) {
            child = Utils.getFirstElement(this.interfaces);
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeTypes.ENUM && Utils.hasKeys(this.enums)) {
            child = Utils.getFirstElement(this.enums);
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if ((type === ApexNodeTypes.VARIABLE || type === ApexNodeTypes.PROPERTY) && Utils.hasKeys(this.variables)) {
            child = Utils.getFirstElement(this.variables);
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeTypes.METHOD && Utils.hasKeys(this.methods)) {
            child = Utils.getFirstElement(this.methods);
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeTypes.CONSTRUCTOR && Utils.hasKeys(this.constructors)) {
            child = Utils.getFirstElement(this.constructors);
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeTypes.SOQL && this.queries.length > 0) {
            child = this.queries[0];
            for (const node of this.queries) {
                if (node.order > child.order) {
                    child = node;
                }
            }
        }
        return child;
    }

    /**
     * Method to get the first child by type. (You can pass a child directly to analize the node type)
     * @param {string | ApexDeclarationNode} childOrType Node type or node to extract the type
     * @returns {number} Return the first child by type (undefined if not exists childs of the selected type)
     */
    getFirstChild(childOrType: string | ApexDeclarationNode | SOQLQuery): ApexDeclarationNode | SOQLQuery | undefined {
        const type = childOrType instanceof ApexNode ? childOrType.nodeType : childOrType;
        let child;
        if (type === ApexNodeTypes.INITIALIZER && !Utils.isNull(this.initializer)) {
            child = this.initializer;
        } else if (type === ApexNodeTypes.STATIC_CONSTRUCTOR && !Utils.isNull(this.staticConstructor)) {
            child = this.staticConstructor;
        } else if (type === ApexNodeTypes.CLASS && Utils.hasKeys(this.classes)) {
            child = Utils.getFirstElement(this.classes);
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeTypes.INTERFACE && Utils.hasKeys(this.interfaces)) {
            child = Utils.getFirstElement(this.interfaces);
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeTypes.ENUM && Utils.hasKeys(this.enums)) {
            child = Utils.getFirstElement(this.enums);
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if ((type === ApexNodeTypes.VARIABLE || type === ApexNodeTypes.PROPERTY) && Utils.hasKeys(this.variables)) {
            child = Utils.getFirstElement(this.variables);
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeTypes.METHOD && Utils.hasKeys(this.methods)) {
            child = Utils.getFirstElement(this.methods);
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeTypes.CONSTRUCTOR && Utils.hasKeys(this.constructors)) {
            child = Utils.getFirstElement(this.constructors);
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeTypes.SOQL && this.queries.length > 0) {
            child = this.queries[0];
            for (const node of this.queries) {
                if (node.order < child.order) {
                    child = node;
                }
            }
        }
        return child;
    }

    /**
     * Method to get the first absolute child into all class members. 
     * 
     * @returns {number} Returns the first class child into the file
     */
    getAbosluteFirstChild(): ApexDeclarationNode | SOQLQuery | undefined {
        let child: ApexDeclarationNode | SOQLQuery | undefined;
        if (this.initializer) {
            if (!child || child.memberOrder > this.initializer.memberOrder) {
                child = this.initializer;
            }
        }
        if (this.staticConstructor) {
            if (!child || child.memberOrder > this.staticConstructor.memberOrder) {
                child = this.staticConstructor;
            }
        }
        if (Utils.hasKeys(this.classes)) {
            if (!child) {
                child = Utils.getFirstElement(this.classes);
            }
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.interfaces)) {
            if (!child) {
                child = Utils.getFirstElement(this.interfaces);
            }
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.enums)) {
            if (!child) {
                child = Utils.getFirstElement(this.enums);
            }
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.variables)) {
            if (!child) {
                child = Utils.getFirstElement(this.variables);
            }
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.methods)) {
            if (!child) {
                child = Utils.getFirstElement(this.methods);
            }
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.constructors)) {
            if (!child) {
                child = Utils.getFirstElement(this.constructors);
            }
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (this.queries.length > 0) {
            if (Utils.isNull(child)) {
                child = this.queries[0];
            }
            for (const node of this.queries) {
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        return child;
    }

    /**
     * Method to get the last absolute child into all class members. 
     * 
     * @returns {number} Returns the last class child into the file
     */
    getAbsoluteLastChild() {
        let child: ApexDeclarationNode | SOQLQuery | undefined;
        if (this.initializer) {
            if (!child || child.memberOrder < this.initializer.memberOrder) {
                child = this.initializer;
            }
        }
        if (this.staticConstructor) {
            if (!child || child.memberOrder < this.staticConstructor.memberOrder) {
                child = this.staticConstructor;
            }
        }
        if (Utils.hasKeys(this.classes)) {
            if (Utils.isNull(child)) {
                child = Utils.getFirstElement(this.classes);
            }
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.interfaces)) {
            if (Utils.isNull(child)) {
                child = Utils.getFirstElement(this.interfaces);
            }
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.enums)) {
            if (Utils.isNull(child)) {
                child = Utils.getFirstElement(this.enums);
            }
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.variables)) {
            if (Utils.isNull(child)) {
                child = Utils.getFirstElement(this.variables);
            }
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.methods)) {
            if (Utils.isNull(child)) {
                child = Utils.getFirstElement(this.methods);
            }
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.constructors)) {
            if (Utils.isNull(child)) {
                child = Utils.getFirstElement(this.constructors);
            }
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (this.queries.length > 0) {
            if (Utils.isNull(child)) {
                child = this.queries[0];
            }
            for (const node of this.queries) {
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        return child;
    }
}

function serialize(objects: any) {
    if (!objects) {
        return objects;
    }
    if (Utils.isObject(objects)) {
        for (const objKey of Object.keys(objects)) {
            const child = objects[objKey];
            objects[objKey] = serializeChild(child);
        }
    } else {
        for (let index = 0; index < objects.length; index++) {
            objects[index] = serializeChild(objects[index]);

        }
    }
    return objects;
}

function serializeChild(child: any) {
    if (!child) {
        return child;
    }
    if (child.nodeType === ApexNodeTypes.INITIALIZER) {
        return new ApexInitializer(child);
    } else if (child.nodeType === ApexNodeTypes.STATIC_CONSTRUCTOR) {
        return new ApexStaticConstructor(child);
    } else if (child.nodeType === ApexNodeTypes.CLASS) {
        return new ApexClass(child);
    } else if (child.nodeType === ApexNodeTypes.INTERFACE) {
        const node = new ApexClass(child);
        node.nodeType === ApexNodeTypes.INTERFACE;
        return node;
    } else if (child.nodeType === ApexNodeTypes.ENUM) {
        return new ApexEnum(child);
    } else if (child.nodeType === ApexNodeTypes.VARIABLE) {
        return new ApexVariable(child);
    } else if (child.nodeType === ApexNodeTypes.PROPERTY) {
        return new ApexProperty(child);
    } else if (child.nodeType === ApexNodeTypes.METHOD) {
        return new ApexMethod(child);
    } else if (child.nodeType === ApexNodeTypes.CONSTRUCTOR) {
        return new ApexConstructor(child);
    } else if (child.nodeType === ApexNodeTypes.SOQL) {
        return new SOQLQuery(child);
    }
    return child;
}
