const Utils = require('../utils/utils');

class PositionData {

    constructor(startPartOrObject, endPart, nodeType, nodeId, source) {
        if (Utils.isObject(startPartOrObject)) {
            this.startPart = startPartOrObject.startPart;
            this.endPart = startPartOrObject.endPart;
            this.nodeType = startPartOrObject.nodeType;
            this.nodeId = startPartOrObject.nodeId;
            this.onText = startPartOrObject.onText;
            this.signature = startPartOrObject.signature;
            this.activeAttributeName = startPartOrObject.activeAttributeName;
            this.isParamEmpty = startPartOrObject.isParamEmpty;
            this.isOnAttributeValue = startPartOrObject.isOnAttributeValue;
            this.tagData = startPartOrObject.tagData;
            this.query = startPartOrObject.query;
            this.source = startPartOrObject.source;
            this.parentName = startPartOrObject.parentName;
            this.token = startPartOrObject.token;
            this.lastToken = startPartOrObject.lastToken;
            this.twoLastToken = startPartOrObject.twoLastToken;
            this.nextToken = startPartOrObject.nextToken;
            this.twoNextToken = startPartOrObject.twoNextToken;
        } else {
            this.startPart = startPartOrObject;
            this.endPart = endPart;
            this.nodeType = nodeType;
            this.nodeId = nodeId;
            this.onText = false;
            this.signature = undefined;
            this.activeAttributeName = undefined;
            this.isParamEmpty = undefined;
            this.isOnAttributeValue = undefined;
            this.tagData = undefined;
            this.query = undefined;
            this.source = source;
            this.parentName = undefined;
            this.token = undefined;
            this.lastToken = undefined;
            this.twoLastToken = undefined;
            this.nextToken = undefined;
            this.twoNextToken = undefined;
        }
    }
}
module.exports = PositionData;
