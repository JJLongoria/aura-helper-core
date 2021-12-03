import { Token } from "./token";
/**
 * Class to represent a cursor position when analize language files
 */
export declare class PositionData {
    startPart: string;
    endPart: string;
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
    constructor(startPartOrPositionData: string | PositionData, endPart?: string, nodeType?: string, nodeId?: string, source?: string);
}
