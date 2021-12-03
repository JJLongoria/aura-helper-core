"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionData = void 0;
/**
 * Class to represent a cursor position when analize language files
 */
class PositionData {
    constructor(startPartOrPositionData, endPart, nodeType, nodeId, source) {
        if (startPartOrPositionData instanceof PositionData) {
            this.startPart = startPartOrPositionData.startPart;
            this.endPart = startPartOrPositionData.endPart;
            this.nodeType = startPartOrPositionData.nodeType;
            this.nodeId = startPartOrPositionData.nodeId;
            this.onText = startPartOrPositionData.onText;
            this.signature = startPartOrPositionData.signature;
            this.activeAttributeName = startPartOrPositionData.activeAttributeName;
            this.isParamEmpty = startPartOrPositionData.isParamEmpty;
            this.isOnAttributeValue = startPartOrPositionData.isOnAttributeValue;
            this.tagData = startPartOrPositionData.tagData;
            this.query = startPartOrPositionData.query;
            this.source = startPartOrPositionData.source;
            this.parentName = startPartOrPositionData.parentName;
            this.token = startPartOrPositionData.token;
            this.lastToken = startPartOrPositionData.lastToken;
            this.twoLastToken = startPartOrPositionData.twoLastToken;
            this.nextToken = startPartOrPositionData.nextToken;
            this.twoNextToken = startPartOrPositionData.twoNextToken;
        }
        else {
            this.startPart = startPartOrPositionData;
            this.endPart = endPart || startPartOrPositionData;
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
exports.PositionData = PositionData;
//# sourceMappingURL=positionData.js.map