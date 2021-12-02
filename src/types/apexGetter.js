/**
 * Class to represent a Property Apex Getter Node when Parsing Apex Code
 */
class ApexGetter extends ApexNode {

    /**
     * Constructor to create an ApexGetter instance
     * @param {string | ApexGetter} idOrGetter Node id or Object with ApexGetter fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrGetter: string | ApexGetter, name?: string, startToken?: Token) {
        super(idOrGetter, ApexNodeType.GETTER, name, startToken);
        if (Utils.isObject(idOrGetter)) {
            this.variables = serialize(idOrGetter.variables);
            this.queries = idOrGetter.queries;
        } else {
            this.variables = {};
            this.queries = [];
        }
    }

    /**
     * Method to add the declared variables into the getter code block
     * @param {ApexVariable} child ApexVariable child to add 
     * @returns {ApexGetter} Return the ApexGetter instance
     */
    addChild(child) {
        if (child && child.nodeType === ApexNodeType.VARIABLE) {
            this.variables[child.name.toLowerCase()] = child;
            child.order = Utils.countKeys(this.variables);
            child.memberOrder = child.order;
        } else if (child && child.nodeType === ApexNodeType.SOQL) {
            this.queries.push(child);
        }
        return this;
    }

    /**
     * Method to get the last child into the getter body
     * @returns {ApexVariable} Return the last ApexVariable declared or undefined if not found any variables
     */
    getLastChild() {
        if (!Utils.hasKeys(this.variables))
            return undefined;
        let child = Utils.getFirstElement(this.variables);
        for (const key of Object.keys(this.variables)) {
            const node = this.variables[key];
            if (node.order > child.order) {
                child = node;
            }
        }
        return child;
    }

    /**
     * Method to get the first child into the getter body
     * @returns {ApexVariable} Return the first ApexVariable declared or undefined if not found any variables
     */
    getFirstChild() {
        if (!Utils.hasKeys(this.variables))
            return undefined;
        let child = Utils.getFirstElement(this.variables);
        for (const key of Object.keys(this.variables)) {
            const node = this.variables[key];
            if (node.order < child.order) {
                child = node;
            }
        }
        return child;
    }

    /**
     * Method to get the first child into the getter body (Equals to getFirstChild())
     * @returns {ApexVariable} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbosluteFirstChild() {
        return this.getFirstChild();
    }

    /**
     * Method to get the last child into the getter body (Equals to getLastChild())
     * @returns {ApexVariable} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbsoluteLastChild() {
        return this.getLastChild();
    }
}
module.exports = ApexGetter;

function serialize(objects) {
    if (!objects)
        return objects;
    for (const objKey of Object.keys(objects)) {
        const child = objects[objKey];
        objects[objKey] = serializeChild(child);
    }
    return objects;
}

function serializeChild(child) {
    if (!child)
        return child;
    if (child.nodeType === ApexNodeType.VARIABLE) {
        return new ApexVariable(child);
    }
    return child;
}