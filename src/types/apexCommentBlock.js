const ApexComment = require('./apexComment');
const ApexNodeType = require('../values/apexNodeTypes');
const ApexTokenType = require('../values/apexTokenTypes');
const Token = require('./token');
const Utils = require('../utils/utils');
const StrUtils = require('../utils/strUtils');

/**
 * Class to represent an Apex Comment Block Node when Parsing Apex Code
 */
class ApexCommentBlock extends ApexComment {

    /**
     * Constructor to create an ApexCommentBlock instance
     * @param {String | Object} idOrObject Node id or Object with ApexCommentBlock fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken) {
        super(idOrObject, name, startToken);
        this.nodeType = ApexNodeType.BLOCK_COMMENT;
        if (Utils.isObject(idOrObject)) {
            this.tags = idOrObject.tags;
            this.startWithAsterisk = idOrObject.startWithAsterisk;
        } else {
            this.tags = {};
            this.startWithAsterisk = true;
        }
    }

    processComment(template) {
        processCommentWithTemplate(this, template);
    }
}
module.exports = ApexCommentBlock;

function processCommentWithTemplate(comment, template) {
    if (!template)
        return;
    const len = comment.tokens.length;
    let text = '';
    for (let i = 0; i < len; i++) {
        const lastToken = (i >= 1) ? comment.tokens[i - 1] : undefined;
        const token = comment.tokens[i];
        const nextToken = (i + 1 < comment.tokens.length) ? comment.tokens[i + 1] : undefined;
        const newLine = (lastToken && token && lastToken.range.start.line < token.range.start.line) || !lastToken;
        if (newLine && (token.type === ApexTokenType.COMMENT.BLOCK_START || token.type === ApexTokenType.COMMENT.BLOCK_END || token.text === '*')) {
            if (token.text === '*') {
                comment.startWithAsterisk = true;
            }
            continue;
        }
        if (newLine && token.range.start.character > 0)
            text += StrUtils.getWhitespaces(token.range.start.character - 1);
        text += token.text;
        if (nextToken && token && token.range.start.line === nextToken.range.start.line)
            text += StrUtils.getWhitespaces(nextToken.range.start.character - token.range.end.character);
        if (nextToken && token && token.range.start.line < nextToken.range.start.line)
            text += StrUtils.getNewLines(nextToken.range.start.line - token.range.start.line);
    }
    if(!text)
        return;
    text = text.trim();
    if (template.tags && Utils.hasKeys(template.tags)) {
        const commentLines = text.split('\n');
        const tagsToProcress = [];
        const keywordOrderByTag = {};
        for (const tagName of Object.keys(template.tags)) {
            const tag = template.tags[tagName];
            const tagSymbol = tag.symbol || template.tagSymbol;
            if (!tag.anywhere) {
                tagsToProcress.push(tagSymbol + tagName);
            }
            if (tag.keywords) {
                for (const keyword of tag.keywords) {
                    const keywordIndexOf = tag.template.indexOf('{!' + keyword.name + '}');
                    if (keywordIndexOf != -1) {
                        if (!keywordOrderByTag[tagName])
                            keywordOrderByTag[tagName] = [];
                        keywordOrderByTag[tagName].push({
                            keyword: keyword,
                            order: keywordIndexOf
                        });
                    }
                }
                keywordOrderByTag[tagName] = Utils.sort(keywordOrderByTag[tagName], ['order']);
            }
        }
        const tagsRegexp = new RegExp('^(' + tagsToProcress.join('|') + ')\\s+.*$');
        let onDescription = true;
        let description = '';
        let tagName;
        let oldTagName;
        let tag;
        let tagNewLine = false;
        let tagKeyords;
        for (const line of commentLines) {
            if (tagsRegexp.test(line)) {
                onDescription = false;
                oldTagName = tagName;
                tagName = line.split(' ')[0];
                for (const tagNameTmp of Object.keys(template.tags)) {
                    const tag = template.tags[tagNameTmp];
                    const tagSymbol = tag.symbol || template.tagSymbol;
                    if (StrUtils.contains(tagName, tagNameTmp)) {
                        tagName = StrUtils.replace(tagName, tagSymbol, '');
                    }
                }
                tagNewLine = false;
                tagKeyords = keywordOrderByTag[tagName];
                tag = template.tags[tagName];
            } else if (!onDescription) {
                tagNewLine = true;
            }
            if (onDescription) {
                description += line;
            } else {
                if (tagKeyords) {
                    if (!oldTagName || (oldTagName && tagName && oldTagName != tagName)) {
                        const tag = template.tags[tagName];
                        if (!comment.tags[tagName])
                            comment.tags[tagName] = [];
                        comment.tags[tagName].push({
                            keywords: {},
                            content: ''
                        });
                        comment.tags[tagName][comment.tags[tagName].length - 1].content += line;
                        let processedLine = line.substring(tagName.length + 1).trim();
                        let processedTemplate = StrUtils.replace(tag.template, '}{', '} {');
                        for (let index = 0; index < tagKeyords.length; index++) {
                            const keyword = tagKeyords[index].keyword;
                            let dataRegexp;
                            if (index == tagKeyords.length - 1) {
                                dataRegexp = new RegExp('([a-zA-Z0-9À-ÿ]|.)*');
                            } else {
                                dataRegexp = new RegExp('([a-zA-Z0-9À-ÿ]|_|–|\\[|\\]|<|>|\\.|,\\s*|,|\\\\|#|@|"|\'|!|·|\\$|~|%|\\&|\\/|\\(|\\)|\\?|¿|¡|\\*|\\+|\\:|\\;|€|\\^|`|\\{|\\}|¨)+');
                            }
                            const regexpExec = dataRegexp.exec(processedLine);
                            let data = regexpExec ? regexpExec[0] : undefined;
                            if (!Utils.isNull(data)) {
                                const keywordKey = '{!' + keyword.name + '}';
                                const nextKeyword = index < tagKeyords.length - 1 ? tagKeyords[index + 1].keyword : undefined;
                                const indexOf = processedTemplate.indexOf(keywordKey);
                                const startChars = (indexOf > 0) ? processedTemplate.substring(0, indexOf) : undefined;
                                let endChars = undefined;
                                if (nextKeyword) {
                                    const nextKeywordKey = '{!' + nextKeyword.name + '}';
                                    endChars = processedTemplate.substring(indexOf + keywordKey.length, processedTemplate.indexOf(nextKeywordKey));
                                } else {
                                    if (indexOf + keywordKey.length < processedTemplate.length) {
                                        endChars = processedTemplate.substring(indexOf + keywordKey.length);
                                    }
                                }
                                if (startChars) {
                                    data = data.substring(startChars.length);
                                } 
                                if (endChars) {
                                    if (endChars.startsWith(' '))
                                        endChars = undefined;
                                    else if (StrUtils.contains(endChars, ' '))
                                        endChars = endChars.split(' ')[0];
                                    if(endChars){
                                        data = data.substring(0, data.length - endChars.length);
                                    }
                                }
                                comment.tags[tagName][comment.tags[tagName].length - 1].keywords[keyword.name] = data;
                                const dataToRemove = ((startChars) ? startChars : '') + data + ((endChars) ? endChars : '');
                                processedLine = processedLine.substring(dataToRemove.length).trim();
                                const keywordToRemove = ((startChars) ? startChars : '') + keywordKey + ((endChars) ? endChars : '');
                                processedTemplate = StrUtils.replace(processedTemplate, keywordToRemove, '').trim();
                            }
                        }
                    } else if (tagNewLine) {
                        const keyword = tagKeyords[tagKeyords.length - 1].keyword;
                        comment.tags[tagName][comment.tags[tagName].length - 1].keywords[keyword.name] += line;
                        comment.tags[tagName][comment.tags[tagName].length - 1].content += line;
                    }
                } else {
                    if (!comment.tags[tagName])
                        comment.tags[tagName] = [];
                    comment.tags[tagName].push({
                        keywords: {},
                        content: ''
                    });
                    comment.tags[tagName][comment.tags[tagName].length - 1].content += line;
                }
            }
        }
        comment.description = description;
    } else {
        comment.description = text;
    }
}