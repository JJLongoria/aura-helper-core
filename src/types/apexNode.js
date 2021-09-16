const Utils = require('../utils/utils');
const Token = require('./token');

/**
 * Class to represent an Apex Node. Designed to be a superclass of all Apex Nodes
 */
class ApexNode {

    /**
     * Constructor to create an ApexNode instance
     * @param {String | Object} idOrObject Node id or Object with ApexNode fields
     * @param {String} [idOrObject] Apex node type
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, nodeType, name, startToken) {
        if(Utils.isObject(idOrObject)){
            this.id = idOrObject.id;
            this.nodeType = idOrObject.nodeType;
            this.name = idOrObject.name;
            this.namespace = idOrObject.namespace;
            this.startToken = idOrObject.startToken;
            this.endToken = idOrObject.endToken;
            this.parentId = idOrObject.parentId;
            this.positionData = idOrObject.positionData;
            this.order = idOrObject.order;
            this.memberOrder = idOrObject.memberOrder;
        } else {
            this.id = idOrObject;
            this.nodeType = nodeType;
            this.name = name;
            this.namespace = undefined;
            this.startToken = startToken;
            this.endToken = undefined;
            this.parentId = undefined;
            this.positionData = undefined;
            this.order = 0;
            this.memberOrder = 0;
        }
    };
}
module.exports = ApexNode;