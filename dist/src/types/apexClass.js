"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexClass = void 0;
const utils_1 = require("../utils");
const values_1 = require("../values");
const apexConstructor_1 = require("./apexConstructor");
const apexDeclarationNode_1 = require("./apexDeclarationNode");
const apexEnum_1 = require("./apexEnum");
const apexInitializer_1 = require("./apexInitializer");
const apexMethod_1 = require("./apexMethod");
const apexProperty_1 = require("./apexProperty");
const apexStaticConstructor_1 = require("./apexStaticConstructor");
const apexVariable_1 = require("./apexVariable");
const soqlQuery_1 = require("./soqlQuery");
/**
 * Class to represent an Apex Class Node when Parsing Apex Code
 */
class ApexClass extends apexDeclarationNode_1.ApexDeclarationNode {
    /**
     * Constructor to create an ApexClass instance
     * @param {string | ApexClass} idOrClass Node id or Object with ApexClass fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrClass, name, startToken) {
        super(idOrClass, values_1.ApexNodeTypes.CLASS, name, startToken);
        if (idOrClass instanceof ApexClass) {
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
        }
        else {
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
     * @param {ApexDeclarationNode} child
     * @returns {ApexClass} Return the ApexClass instance
     */
    addChild(child) {
        if (!child) {
            return this;
        }
        if (child.nodeType === values_1.ApexNodeTypes.INITIALIZER && child instanceof apexInitializer_1.ApexInitializer) {
            this.initializer = child;
        }
        else if (child.nodeType === values_1.ApexNodeTypes.STATIC_CONSTRUCTOR && child instanceof apexStaticConstructor_1.ApexStaticConstructor) {
            this.staticConstructor = child;
        }
        else if (child.nodeType === values_1.ApexNodeTypes.CLASS && child instanceof ApexClass) {
            this.classes[child.name.toLowerCase()] = child;
        }
        else if (child.nodeType === values_1.ApexNodeTypes.INTERFACE && child instanceof ApexClass) {
            this.interfaces[child.name.toLowerCase()] = child;
        }
        else if (child.nodeType === values_1.ApexNodeTypes.ENUM && child instanceof apexEnum_1.ApexEnum) {
            this.enums[child.name.toLowerCase()] = child;
        }
        else if ((child.nodeType === values_1.ApexNodeTypes.VARIABLE || child.nodeType === values_1.ApexNodeTypes.PROPERTY) && (child instanceof apexVariable_1.ApexVariable || child instanceof apexProperty_1.ApexProperty)) {
            this.variables[child.name.toLowerCase()] = child;
        }
        else if (child.nodeType === values_1.ApexNodeTypes.METHOD && child instanceof apexMethod_1.ApexMethod && child.simplifiedSignature) {
            this.methods[child.simplifiedSignature.toLowerCase()] = child;
        }
        else if (child.nodeType === values_1.ApexNodeTypes.CONSTRUCTOR && child instanceof apexConstructor_1.ApexConstructor && child.simplifiedSignature) {
            this.constructors[child.simplifiedSignature.toLowerCase()] = child;
        }
        else if (child.nodeType === values_1.ApexNodeTypes.SOQL && child instanceof soqlQuery_1.SOQLQuery) {
            child.parentName = this.name;
            child.order = this.getChildOrder(child);
            child.memberOrder = this.totalMembers;
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
     * @param {string | ApexDeclarationNode} childOrType Node type or node to extract the type
     * @returns {number} Return the child order number. 0 if not exist any child. The first child number is 1.
     */
    getChildOrder(childOrType) {
        const type = childOrType instanceof apexDeclarationNode_1.ApexDeclarationNode ? childOrType.nodeType : childOrType;
        if (type === values_1.ApexNodeTypes.INITIALIZER) {
            return 1;
        }
        else if (type === values_1.ApexNodeTypes.STATIC_CONSTRUCTOR) {
            return 1;
        }
        else if (type === values_1.ApexNodeTypes.CLASS) {
            return utils_1.Utils.countKeys(this.classes);
        }
        else if (type === values_1.ApexNodeTypes.INTERFACE) {
            return utils_1.Utils.countKeys(this.interfaces);
        }
        else if (type === values_1.ApexNodeTypes.ENUM) {
            return utils_1.Utils.countKeys(this.enums);
        }
        else if (type === values_1.ApexNodeTypes.VARIABLE || type === values_1.ApexNodeTypes.PROPERTY) {
            return utils_1.Utils.countKeys(this.variables);
        }
        else if (type === values_1.ApexNodeTypes.METHOD) {
            return utils_1.Utils.countKeys(this.methods);
        }
        else if (type === values_1.ApexNodeTypes.CONSTRUCTOR) {
            return utils_1.Utils.countKeys(this.constructors);
        }
        else if (type === values_1.ApexNodeTypes.SOQL) {
            return this.queries.length;
        }
        return 0;
    }
    getOrderedChilds(childOrType) {
        let ordered = [];
        const type = childOrType instanceof apexDeclarationNode_1.ApexDeclarationNode ? childOrType.nodeType : childOrType;
        if (type === values_1.ApexNodeTypes.INITIALIZER && !utils_1.Utils.isNull(this.initializer)) {
            ordered.push(this.initializer);
        }
        else if (type === values_1.ApexNodeTypes.STATIC_CONSTRUCTOR && !utils_1.Utils.isNull(this.staticConstructor)) {
            ordered.push(this.staticConstructor);
        }
        else if (type === values_1.ApexNodeTypes.CLASS && utils_1.Utils.hasKeys(this.classes)) {
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                ordered.push(node);
            }
        }
        else if (type === values_1.ApexNodeTypes.INTERFACE && utils_1.Utils.hasKeys(this.interfaces)) {
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                ordered.push(node);
            }
        }
        else if (type === values_1.ApexNodeTypes.ENUM && utils_1.Utils.hasKeys(this.enums)) {
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                ordered.push(node);
            }
        }
        else if ((type === values_1.ApexNodeTypes.VARIABLE || type === values_1.ApexNodeTypes.PROPERTY) && utils_1.Utils.hasKeys(this.variables)) {
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                ordered.push(node);
            }
        }
        else if (type === values_1.ApexNodeTypes.METHOD && utils_1.Utils.hasKeys(this.methods)) {
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                ordered.push(node);
            }
        }
        else if (type === values_1.ApexNodeTypes.CONSTRUCTOR && utils_1.Utils.hasKeys(this.constructors)) {
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                ordered.push(node);
            }
        }
        else if (type === values_1.ApexNodeTypes.SOQL && this.queries.length > 0) {
            for (const node of this.queries) {
                ordered.push(node);
            }
        }
        return utils_1.Utils.sort(ordered, ['order']);
    }
    /**
     * Method to get the last child by type. (You can pass a child directly to analize the node type)
     * @param {string | ApexDeclarationNode} childOrType Node type or node to extract the type
     * @returns {ApexDeclarationNode | SOQLQuery} Return the last child by type (undefined if not exists childs of the selected type)
     */
    getLastChild(childOrType) {
        const type = childOrType instanceof apexDeclarationNode_1.ApexDeclarationNode ? childOrType.nodeType : childOrType;
        let child;
        if (type === values_1.ApexNodeTypes.INITIALIZER && !utils_1.Utils.isNull(this.initializer)) {
            child = this.initializer;
        }
        else if (type === values_1.ApexNodeTypes.STATIC_CONSTRUCTOR && !utils_1.Utils.isNull(this.staticConstructor)) {
            child = this.staticConstructor;
        }
        else if (type === values_1.ApexNodeTypes.CLASS && utils_1.Utils.hasKeys(this.classes)) {
            child = utils_1.Utils.getFirstElement(this.classes);
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        }
        else if (type === values_1.ApexNodeTypes.INTERFACE && utils_1.Utils.hasKeys(this.interfaces)) {
            child = utils_1.Utils.getFirstElement(this.interfaces);
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        }
        else if (type === values_1.ApexNodeTypes.ENUM && utils_1.Utils.hasKeys(this.enums)) {
            child = utils_1.Utils.getFirstElement(this.enums);
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        }
        else if ((type === values_1.ApexNodeTypes.VARIABLE || type === values_1.ApexNodeTypes.PROPERTY) && utils_1.Utils.hasKeys(this.variables)) {
            child = utils_1.Utils.getFirstElement(this.variables);
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        }
        else if (type === values_1.ApexNodeTypes.METHOD && utils_1.Utils.hasKeys(this.methods)) {
            child = utils_1.Utils.getFirstElement(this.methods);
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        }
        else if (type === values_1.ApexNodeTypes.CONSTRUCTOR && utils_1.Utils.hasKeys(this.constructors)) {
            child = utils_1.Utils.getFirstElement(this.constructors);
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        }
        else if (type === values_1.ApexNodeTypes.SOQL && this.queries.length > 0) {
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
    getFirstChild(childOrType) {
        const type = childOrType instanceof apexDeclarationNode_1.ApexDeclarationNode ? childOrType.nodeType : childOrType;
        let child;
        if (type === values_1.ApexNodeTypes.INITIALIZER && !utils_1.Utils.isNull(this.initializer)) {
            child = this.initializer;
        }
        else if (type === values_1.ApexNodeTypes.STATIC_CONSTRUCTOR && !utils_1.Utils.isNull(this.staticConstructor)) {
            child = this.staticConstructor;
        }
        else if (type === values_1.ApexNodeTypes.CLASS && utils_1.Utils.hasKeys(this.classes)) {
            child = utils_1.Utils.getFirstElement(this.classes);
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        }
        else if (type === values_1.ApexNodeTypes.INTERFACE && utils_1.Utils.hasKeys(this.interfaces)) {
            child = utils_1.Utils.getFirstElement(this.interfaces);
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        }
        else if (type === values_1.ApexNodeTypes.ENUM && utils_1.Utils.hasKeys(this.enums)) {
            child = utils_1.Utils.getFirstElement(this.enums);
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        }
        else if ((type === values_1.ApexNodeTypes.VARIABLE || type === values_1.ApexNodeTypes.PROPERTY) && utils_1.Utils.hasKeys(this.variables)) {
            child = utils_1.Utils.getFirstElement(this.variables);
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        }
        else if (type === values_1.ApexNodeTypes.METHOD && utils_1.Utils.hasKeys(this.methods)) {
            child = utils_1.Utils.getFirstElement(this.methods);
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        }
        else if (type === values_1.ApexNodeTypes.CONSTRUCTOR && utils_1.Utils.hasKeys(this.constructors)) {
            child = utils_1.Utils.getFirstElement(this.constructors);
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        }
        else if (type === values_1.ApexNodeTypes.SOQL && this.queries.length > 0) {
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
    getAbosluteFirstChild() {
        let child;
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
        if (utils_1.Utils.hasKeys(this.classes)) {
            if (!child) {
                child = utils_1.Utils.getFirstElement(this.classes);
            }
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (utils_1.Utils.hasKeys(this.interfaces)) {
            if (!child) {
                child = utils_1.Utils.getFirstElement(this.interfaces);
            }
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (utils_1.Utils.hasKeys(this.enums)) {
            if (!child) {
                child = utils_1.Utils.getFirstElement(this.enums);
            }
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (utils_1.Utils.hasKeys(this.variables)) {
            if (!child) {
                child = utils_1.Utils.getFirstElement(this.variables);
            }
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (utils_1.Utils.hasKeys(this.methods)) {
            if (!child) {
                child = utils_1.Utils.getFirstElement(this.methods);
            }
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (utils_1.Utils.hasKeys(this.constructors)) {
            if (!child) {
                child = utils_1.Utils.getFirstElement(this.constructors);
            }
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (child && node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (this.queries.length > 0) {
            if (utils_1.Utils.isNull(child)) {
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
        let child;
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
        if (utils_1.Utils.hasKeys(this.classes)) {
            if (utils_1.Utils.isNull(child)) {
                child = utils_1.Utils.getFirstElement(this.classes);
            }
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (utils_1.Utils.hasKeys(this.interfaces)) {
            if (utils_1.Utils.isNull(child)) {
                child = utils_1.Utils.getFirstElement(this.interfaces);
            }
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (utils_1.Utils.hasKeys(this.enums)) {
            if (utils_1.Utils.isNull(child)) {
                child = utils_1.Utils.getFirstElement(this.enums);
            }
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (utils_1.Utils.hasKeys(this.variables)) {
            if (utils_1.Utils.isNull(child)) {
                child = utils_1.Utils.getFirstElement(this.variables);
            }
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (utils_1.Utils.hasKeys(this.methods)) {
            if (utils_1.Utils.isNull(child)) {
                child = utils_1.Utils.getFirstElement(this.methods);
            }
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (utils_1.Utils.hasKeys(this.constructors)) {
            if (utils_1.Utils.isNull(child)) {
                child = utils_1.Utils.getFirstElement(this.constructors);
            }
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (child && node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (this.queries.length > 0) {
            if (utils_1.Utils.isNull(child)) {
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
exports.ApexClass = ApexClass;
function serialize(objects) {
    if (!objects) {
        return objects;
    }
    if (utils_1.Utils.isObject(objects)) {
        for (const objKey of Object.keys(objects)) {
            const child = objects[objKey];
            objects[objKey] = serializeChild(child);
        }
    }
    else {
        for (let index = 0; index < objects.length; index++) {
            objects[index] = serializeChild(objects[index]);
        }
    }
    return objects;
}
function serializeChild(child) {
    if (!child) {
        return child;
    }
    if (child.nodeType === values_1.ApexNodeTypes.INITIALIZER) {
        return new apexInitializer_1.ApexInitializer(child);
    }
    else if (child.nodeType === values_1.ApexNodeTypes.STATIC_CONSTRUCTOR) {
        return new apexStaticConstructor_1.ApexStaticConstructor(child);
    }
    else if (child.nodeType === values_1.ApexNodeTypes.CLASS) {
        return new ApexClass(child);
    }
    else if (child.nodeType === values_1.ApexNodeTypes.INTERFACE) {
        const node = new ApexClass(child);
        node.nodeType === values_1.ApexNodeTypes.INTERFACE;
        return node;
    }
    else if (child.nodeType === values_1.ApexNodeTypes.ENUM) {
        return new apexEnum_1.ApexEnum(child);
    }
    else if (child.nodeType === values_1.ApexNodeTypes.VARIABLE) {
        return new apexVariable_1.ApexVariable(child);
    }
    else if (child.nodeType === values_1.ApexNodeTypes.PROPERTY) {
        return new apexProperty_1.ApexProperty(child);
    }
    else if (child.nodeType === values_1.ApexNodeTypes.METHOD) {
        return new apexMethod_1.ApexMethod(child);
    }
    else if (child.nodeType === values_1.ApexNodeTypes.CONSTRUCTOR) {
        return new apexConstructor_1.ApexConstructor(child);
    }
    else if (child.nodeType === values_1.ApexNodeTypes.SOQL) {
        return new soqlQuery_1.SOQLQuery(child);
    }
    return child;
}
//# sourceMappingURL=apexClass.js.map