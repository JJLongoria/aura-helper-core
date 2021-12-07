import { PositionData } from ".";
import { Token } from "./token";

export interface AuraTag {
    name?: string;
    namespace?: string;
    fullName?: Token;
    startToken?: Token;
    endToken?: Token;
    attributes: { [key: string]: AuraTagData };
    positionData?: PositionData;
}

export interface AuraTagData {
    name: Token;
    value: Token;
}