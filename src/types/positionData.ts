import { Token } from "./token";

/**
 * Class to represent a cursor position when analize language files
 */
export class PositionData {

    startPart?: string;
    endPart?: string;
    nodeType?: string;
    nodeId?: string;
    onText: boolean;
    signature?: string;
    activeAttributeName?: string;
    isParamEmpty?: boolean;
    isOnAttributeValue?: boolean;
    tagData?: any;
    query?: any;
    source?: string;
    parentName?: string;
    token?: Token;
    lastToken?: Token;
    twoLastToken?: Token;
    nextToken?: Token;
    twoNextToken?: Token;
    strQueryStartIndex?: number;
    strQueryEndIndex?: number;

    constructor(startPartOrPositionData?: string | { [key: string]: any }, endPart?: string, nodeType?: string, nodeId?: string, source?: string) {
        if (startPartOrPositionData && typeof startPartOrPositionData !== 'string') {
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
        } else {
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
