import { StrUtils } from "../utils";
import { ApexTokenTypes, AuraNodeTypes } from "../values";
import { AuraJSComment } from "./auraJSComment";

/**
 * Class to represent an Aura JavaScript Comment Block Node on Aura JavaScript when analize and parse Aura Components
 */
export class AuraJSCommentBlock extends AuraJSComment {

    /**
     * Create new Aura Javascript comment block
     * @param {{ [key: string]: any }} [commentObject] Comment instance 
     */
    constructor(commentObject?: { [key: string]: any }) {
        super(commentObject);
        this.nodeType = AuraNodeTypes.JS_COMMENT_BLOCK;
    }

    /**
     * Method to process comment tokens to extract data
     */
    processComment() {
        const len = this.tokens.length;
        let newLines = '';
        let onDescription = true;
        let onParams = false;
        let onReturn = false;
        let paramName;
        let paramType;
        let paramDesc = '';
        let returnType;
        let returnDesc = '';;
        let onParamDesc = false;
        let onReturnDesc = false;
        for (let i = 1; i < len; i++) {
            const lastToken = (i >= 1) ? this.tokens[i - 1] : undefined;
            const token = this.tokens[i];
            const nextToken = ((i + 1) <= (this.tokens.length - 1)) ? this.tokens[i + 1] : undefined;
            if (token.text === '*/') {
                continue;
            }
            if (lastToken && lastToken.range.end.line < token.range.start.line) {
                if ((lastToken.type !== ApexTokenTypes.COMMENT.BLOCK_START)) {
                    newLines += StrUtils.getNewLines(token.range.start.line - lastToken.range.end.line);
                }
                if (token.text === '*') {
                    continue;
                }
            }
            if (!onParams && token.text === '@' && nextToken && nextToken.text === 'param' && newLines.length > 0) {
                onParams = true;
                onDescription = false;
                onReturn = false;
            } else if (!onReturn && token.text === '@' && nextToken && (nextToken.text === 'return' || nextToken.text === 'returns') && newLines.length > 0) {
                onParams = false;
                onDescription = false;
                onReturn = true;
                onParamDesc = false;
            }
            if (onDescription) {
                if (lastToken) {
                    let ws = '';
                    if (lastToken.text === '*' && newLines.length > 0) {
                        ws = StrUtils.getWhitespaces((token.range.start.character - lastToken.range.end.character) - 1);
                    } else {
                        ws = StrUtils.getWhitespaces(token.range.start.character - lastToken.range.end.character);
                    }
                    this.description += newLines + ws + token.text;
                    newLines = '';
                }
            } else if (onParams) {
                if (token.text === '@' && nextToken && nextToken.text === 'param' && newLines.length > 0) {
                    newLines = '';
                    onParamDesc = false;
                    onReturnDesc = false;
                    if (paramName) {
                        this.params[paramName] = {
                            name: paramName,
                            datatype: paramType,
                            description: paramDesc.trim()
                        };
                        paramName = undefined;
                        paramType = undefined;
                        paramDesc = '';
                    }
                } else if (lastToken && lastToken.text === '@' && token.text === 'param' && nextToken && nextToken.text !== '{') {
                    onParamDesc = true;
                    paramType = 'any';
                } else if (lastToken && lastToken.text === '{') {
                    newLines = '';
                    paramType = token.text;
                    if (paramType === '*') {
                        paramType = 'any';
                    }
                } else if (paramType && lastToken && lastToken.text === '}') {
                    newLines = '';
                    paramName = token.text;
                    onParamDesc = true;
                } else if (onParamDesc) {
                    if (lastToken && lastToken.text === 'param' && !paramName) {
                        paramName = token.text;
                        continue;
                    }
                    let ws = '';
                    if (lastToken && lastToken.text === '*' && newLines.length > 0) {
                        ws = StrUtils.getWhitespaces((token.range.start.character - lastToken.range.end.character) - 1);
                    } else if (lastToken) {
                        ws = StrUtils.getWhitespaces(token.range.start.character - lastToken.range.end.character);
                    }
                    paramDesc += newLines + ws + token.text;
                    newLines = '';
                }
            } else if (onReturn) {
                if (token.text === '@' && nextToken && (nextToken.text === 'return' || nextToken.text === 'returns') && newLines.length > 0) {
                    newLines = '';
                    onParamDesc = false;
                    onReturnDesc = false;
                    if (paramName) {
                        this.params[paramName] = {
                            name: paramName,
                            datatype: paramType,
                            description: paramDesc.trim()
                        };
                        paramName = undefined;
                        paramType = undefined;
                        paramDesc = '';
                    }
                } else if (lastToken && lastToken.text === '@' && (token.text === 'return' || token.text === 'returns') && nextToken && nextToken.text !== '{') {
                    onReturnDesc = true;
                    returnType = 'any';
                } else if (lastToken && lastToken.text === '{') {
                    newLines = '';
                    returnType = token.text;
                    if (returnType === '*'){
                        returnType = 'any';
                    }
                } else if (returnType && lastToken && lastToken.text === '}') {
                    newLines = '';
                    onReturnDesc = true;
                } else if (onReturnDesc) {
                    let ws = '';
                    if (lastToken && lastToken.text === '*' && newLines.length > 0) {
                        ws = StrUtils.getWhitespaces((token.range.start.character - lastToken.range.end.character) - 1);
                    } else if (lastToken) {
                        ws = StrUtils.getWhitespaces(token.range.start.character - lastToken.range.end.character);
                    }
                    returnDesc += newLines + ws + token.text;
                    newLines = '';
                }
            }
        }
        if (paramName) {
            this.params[paramName] = {
                name: paramName,
                datatype: paramType,
                description: paramDesc.trim()
            };
            paramName = undefined;
            paramType = undefined;
            paramDesc = '';
        }
        if (returnDesc) {
            this.return = {
                datatype: returnType,
                description: returnDesc.trim()
            };
            returnType = undefined;
            returnDesc = '';
        }
        this.description = this.description.trim();
    }
}