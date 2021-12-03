const ApexNodeType = require('../values/apexNodeTypes');
const ApexDeclarationNode = require('./apexDeclarationNode');
const ApexInitializer = require('./apexInitializer');
const ApexStaticConstructor = require('./apexStaticConstructor');
const ApexConstructor = require('./apexConstructor');
const ApexMethod = require('./apexMethod');
const ApexEnum = require('./apexEnum');
const ApexVariable = require('./apexVariable');
const ApexProperty = require('./apexProperty');
const SOQLQuery = require('./soqlQuery');
const Utils = require('../utils/utils');
const Token = require('./token');

/**
 * Class to represent an Apex Class Node when Parsing Apex Code
 */
class ApexClass extends ApexDeclarationNode {

    /**
     * Constructor to create an ApexClass instance
     * @param {string | Object} idOrObject Node id or Object with ApexClass fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken) {
        super(idOrObject, ApexNodeType.CLASS, name, startToken);
        if (Utils.isObject(idOrObject)) {
            this.initializer = serializeChild(idOrObject.initializer);
            this.staticConstructor = serializeChild(idOrObject.staticConstructor);
            this.classes = serialize(idOrObject.classes);
            this.interfaces = serialize(idOrObject.interfaces);
            this.enums = serialize(idOrObject.enums);
            this.variables = serialize(idOrObject.variables);
            this.methods = serialize(idOrObject.methods);
            this.constructors = serialize(idOrObject.constructors);
            this.extendsType = idOrObject.extendsType;
            this.extends = serializeChild(idOrObject.extends);
            this.implementTypes = idOrObject.implementTypes;
            this.implements = serialize(idOrObject.implements);
            this.positionData = idOrObject.positionData;
            this.totalMembers = idOrObject.totalMembers;
            this.queries = serialize(idOrObject.queries);
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
     * @param {Object} child 
     * @returns {ApexClass} Return the ApexClass instance
     */
    addChild(child) {
        if (!child)
            return this;
        if (child.nodeType === ApexNodeType.INITIALIZER) {
            this.initializer = child;
        } else if (child.nodeType === ApexNodeType.STATIC_CONSTRUCTOR) {
            this.staticConstructor = child;
        } else if (child.nodeType === ApexNodeType.CLASS) {
            this.classes[child.name.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeType.INTERFACE) {
            this.interfaces[child.name.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeType.ENUM) {
            this.enums[child.name.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeType.VARIABLE || child.nodeType === ApexNodeType.PROPERTY) {
            this.variables[child.name.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeType.METHOD) {
            this.methods[child.simplifiedSignature.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeType.CONSTRUCTOR) {
            this.constructors[child.simplifiedSignature.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeType.SOQL) {
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
     * @param {string | Object} childOrType Node type or node to extract the type
     * @returns {Number} Return the child order number. 0 if not exist any child. The first child number is 1.
     */
    getChildOrder(childOrType) {
        const type = Utils.isObject(childOrType) ? childOrType.nodeType : childOrType;
        if (type === ApexNodeType.INITIALIZER) {
            return 1;
        } else if (type === ApexNodeType.STATIC_CONSTRUCTOR) {
            return 1;
        } else if (type === ApexNodeType.CLASS) {
            return Utils.countKeys(this.classes);
        } else if (type === ApexNodeType.INTERFACE) {
            return Utils.countKeys(this.interfaces);
        } else if (type === ApexNodeType.ENUM) {
            return Utils.countKeys(this.enums);
        } else if (type === ApexNodeType.VARIABLE || type === ApexNodeType.PROPERTY) {
            return Utils.countKeys(this.variables);
        } else if (type === ApexNodeType.METHOD) {
            return Utils.countKeys(this.methods);
        } else if (type === ApexNodeType.CONSTRUCTOR) {
            return Utils.countKeys(this.constructors);
        } else if (type === ApexNodeType.SOQL) {
            return this.queries.length;
        }
        return 0;
    }

    getOrderedChilds(childOrType) {
        let ordered = [];
        const type = Utils.isObject(childOrType) ? childOrType.nodeType : childOrType;
        if (type === ApexNodeType.INITIALIZER && !Utils.isNull(this.initializer)) {
            ordered.push(this.initializer);
        } else if (type === ApexNodeType.STATIC_CONSTRUCTOR && !Utils.isNull(this.staticConstructor)) {
            ordered.push(this.staticConstructor);
        } else if (type === ApexNodeType.CLASS && Utils.hasKeys(this.classes)) {
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                ordered.push(node);
            }
        } else if (type === ApexNodeType.INTERFACE && Utils.hasKeys(this.interfaces)) {
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                ordered.push(node);
            }
        } else if (type === ApexNodeType.ENUM && Utils.hasKeys(this.enums)) {
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                ordered.push(node);
            }
        } else if ((type === ApexNodeType.VARIABLE || type === ApexNodeType.PROPERTY) && Utils.hasKeys(this.variables)) {
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                ordered.push(node);
            }
        } else if (type === ApexNodeType.METHOD && Utils.hasKeys(this.methods)) {
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                ordered.push(node);
            }
        } else if (type === ApexNodeType.CONSTRUCTOR && Utils.hasKeys(this.constructors)) {
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                ordered.push(node);
            }
        } else if (type === ApexNodeType.SOQL && this.queries.length > 0) {
            for (const node of this.queries) {
                ordered.push(node);
            }
        }
        return Utils.sort(ordered, ['order']);
    }

    /**
     * Method to get the last child by type. (You can pass a child directly to analize the node type)
     * @param {string | Object} childOrType Node type or node to extract the type
     * @returns {Number} Return the last child by type (undefined if not exists childs of the selected type)
     */
    getLastChild(childOrType) {
        const type = Utils.isObject(childOrType) ? childOrType.nodeType : childOrType;
        let child;
        if (type === ApexNodeType.INITIALIZER && !Utils.isNull(this.initializer)) {
            child = this.initializer;
        } else if (type === ApexNodeType.STATIC_CONSTRUCTOR && !Utils.isNull(this.staticConstructor)) {
            child = this.staticConstructor;
        } else if (type === ApexNodeType.CLASS && Utils.hasKeys(this.classes)) {
            child = Utils.getFirstElement(this.classes);
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeType.INTERFACE && Utils.hasKeys(this.interfaces)) {
            child = Utils.getFirstElement(this.interfaces);
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeType.ENUM && Utils.hasKeys(this.enums)) {
            child = Utils.getFirstElement(this.enums);
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if ((type === ApexNodeType.VARIABLE || type === ApexNodeType.PROPERTY) && Utils.hasKeys(this.variables)) {
            child = Utils.getFirstElement(this.variables);
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeType.METHOD && Utils.hasKeys(this.methods)) {
            child = Utils.getFirstElement(this.methods);
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeType.CONSTRUCTOR && Utils.hasKeys(this.constructors)) {
            child = Utils.getFirstElement(this.constructors);
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (node.order > child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeType.SOQL && this.queries.length > 0) {
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
     * @param {string | Object} childOrType Node type or node to extract the type
     * @returns {Number} Return the first child by type (undefined if not exists childs of the selected type)
     */
    getFirstChild(childOrType) {
        const type = Utils.isObject(childOrType) ? childOrType.nodeType : childOrType;
        let child;
        if (type === ApexNodeType.INITIALIZER && !Utils.isNull(this.initializer)) {
            child = this.initializer;
        } else if (type === ApexNodeType.STATIC_CONSTRUCTOR && !Utils.isNull(this.staticConstructor)) {
            child = this.staticConstructor;
        } else if (type === ApexNodeType.CLASS && Utils.hasKeys(this.classes)) {
            child = Utils.getFirstElement(this.classes);
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeType.INTERFACE && Utils.hasKeys(this.interfaces)) {
            child = Utils.getFirstElement(this.interfaces);
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeType.ENUM && Utils.hasKeys(this.enums)) {
            child = Utils.getFirstElement(this.enums);
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if ((type === ApexNodeType.VARIABLE || type === ApexNodeType.PROPERTY) && Utils.hasKeys(this.variables)) {
            child = Utils.getFirstElement(this.variables);
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeType.METHOD && Utils.hasKeys(this.methods)) {
            child = Utils.getFirstElement(this.methods);
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeType.CONSTRUCTOR && Utils.hasKeys(this.constructors)) {
            child = Utils.getFirstElement(this.constructors);
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (node.order < child.order) {
                    child = node;
                }
            }
        } else if (type === ApexNodeType.SOQL && this.queries.length > 0) {
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
     * @returns {Number} Returns the first class child into the file
     */
    getAbosluteFirstChild() {
        let child;
        if (!Utils.isNull(this.initializer)) {
            if (Utils.isNull(child) || child.memberOrder > this.initializer.memberOrder)
                child = this.initializer;
        }
        if (!Utils.isNull(this.staticConstructor)) {
            if (Utils.isNull(child) || child.memberOrder > this.staticConstructor.memberOrder)
                child = this.staticConstructor;
        }
        if (Utils.hasKeys(this.classes)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.classes);
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.interfaces)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.interfaces);
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.enums)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.enums);
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.variables)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.variables);
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.methods)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.methods);
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.constructors)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.constructors);
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        if (this.queries.length > 0) {
            if (Utils.isNull(child))
                child = this.queries[0];
            for (const node of this.queries) {
                if (node.memberOrder < child.memberOrder) {
                    child = node;
                }
            }
        }
        return child;
    }

    /**
     * Method to get the last absolute child into all class members. 
     * 
     * @returns {Number} Returns the last class child into the file
     */
    getAbsoluteLastChild() {
        let child;
        if (!Utils.isNull(this.initializer)) {
            if (Utils.isNull(child) || child.memberOrder < this.initializer.memberOrder)
                child = this.initializer;
        }
        if (!Utils.isNull(this.staticConstructor)) {
            if (Utils.isNull(child) || child.memberOrder < this.staticConstructor.memberOrder)
                child = this.staticConstructor;
        }
        if (Utils.hasKeys(this.classes)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.classes);
            for (const key of Object.keys(this.classes)) {
                const node = this.classes[key];
                if (node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.interfaces)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.interfaces);
            for (const key of Object.keys(this.interfaces)) {
                const node = this.interfaces[key];
                if (node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.enums)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.enums);
            for (const key of Object.keys(this.enums)) {
                const node = this.enums[key];
                if (node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.variables)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.variables);
            for (const key of Object.keys(this.variables)) {
                const node = this.variables[key];
                if (node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.methods)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.methods);
            for (const key of Object.keys(this.methods)) {
                const node = this.methods[key];
                if (node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (Utils.hasKeys(this.constructors)) {
            if (Utils.isNull(child))
                child = Utils.getFirstElement(this.constructors);
            for (const key of Object.keys(this.constructors)) {
                const node = this.constructors[key];
                if (node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        if (this.queries.length > 0) {
            if (Utils.isNull(child))
                child = this.queries[0];
            for (const node of this.queries) {
                if (node.memberOrder > child.memberOrder) {
                    child = node;
                }
            }
        }
        return child;
    }
}
module.exports = ApexClass;

function serialize(objects) {
    if (!objects)
        return objects;
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

function serializeChild(child) {
    if (!child)
        return child;
    if (child.nodeType === ApexNodeType.INITIALIZER) {
        return new ApexInitializer(child);
    } else if (child.nodeType === ApexNodeType.STATIC_CONSTRUCTOR) {
        return new ApexStaticConstructor(child);
    } else if (child.nodeType === ApexNodeType.CLASS) {
        return new ApexClass(child);
    } else if (child.nodeType === ApexNodeType.INTERFACE) {
        const node = new ApexClass(child);
        node.nodeType === ApexNodeType.INTERFACE;
        return node;
    } else if (child.nodeType === ApexNodeType.ENUM) {
        return new ApexEnum(child);
    } else if (child.nodeType === ApexNodeType.VARIABLE) {
        return new ApexVariable(child);
    } else if (child.nodeType === ApexNodeType.PROPERTY) {
        return new ApexProperty(child);
    } else if (child.nodeType === ApexNodeType.METHOD) {
        return new ApexMethod(child);
    } else if (child.nodeType === ApexNodeType.CONSTRUCTOR) {
        return new ApexConstructor(child);
    } else if (child.nodeType === ApexNodeType.SOQL) {
        return new SOQLQuery(child);
    }
    return child;
}
