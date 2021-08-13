const Utils = require('../utils/utils');

class PositionData {

    constructor(startPartOrObject, endPart, nodeType, nodeId){
        if (Utils.isObject(startPartOrObject)) {
            this.startPart = startPartOrObject.startPart;
            this.endPart = startPartOrObject.endPart;
            this.nodeType = startPartOrObject.nodeType;
            this.nodeId = startPartOrObject.nodeId;
        } else {
            this.startPart = startPartOrObject;
            this.endPart = endPart;
            this.nodeType = nodeType;
            this.nodeId = nodeId;
        }
    }
}
module.exports = PositionData;
        