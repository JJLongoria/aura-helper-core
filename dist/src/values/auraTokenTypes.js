"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraTokenTypes = void 0;
exports.AuraTokenTypes = {
    UNKNOWN: "token.type.unknown",
    IDENTIFIER: "token.type.identifier",
    BRACKET: {
        CURLY_OPEN: "bracket.curly.open",
        CURLY_CLOSE: "bracket.curly.close",
        START_TAG_OPEN: "bracket.start.tag.open",
        INCOMPLETE_TAG_OPEN: "bracket.start.incomplete.tag.open",
        START_TAG_CLOSE: "bracket.start.tag.close",
        END_TAG_OPEN: "bracket.end.tag.open",
        END_TAG_CLOSE: "bracket.end.tag.close",
        TAG_EMPTY_OPEN: "bracket.tag.empty.open",
        TAG_EMPTY_CLOSE: "bracket.tag.empty.close",
        TAG_EXMARK_OPEN: 'bracket.tag.exmark.open',
        TAG_EXMARK_CLOSE: 'bracket.tag.exmark.close',
        TAG_ENTITY_OPEN: "bracket.tag.entity.open",
        TAG_ENTITY_CLOSE: "bracket.tag.entity.close",
    },
    COMMENT: {
        START: "comment.start",
        END: "comment.end",
        CONTENT: "comment.content",
    },
    PUNCTUATION: {
        COMMA: "punctuation.comma",
        COLON: "punctuation.colon",
        SEMICOLON: "punctuation.semicolon",
        BACKSLASH: "punctuation.backslash",
        DOUBLE_QUOTTES: "punctuation.double.quottes",
        DOUBLE_QUOTTES_START: "punctuation.double.quottes.start",
        DOUBLE_QUOTTES_END: "punctuation.double.quottes.end",
        AT: "puctuation.at",
        EXMARK: "puctuation.exmark",
        OBJECT_ACCESSOR: "punctuation.object.accessor",
        SAFE_OBJECT_ACCESSOR: "punctuation.safe.object.accessor",
    },
    LITERAL: {
        DATE: "literal.date",
        DATE_PARAMETRIZED: "literal.date.parametrized",
        DATE_PARAMETRIZED_START_PARAM: "literal.date.parametrized.start.param",
        BOOLEAN: "literal.boolean",
        NULL: "literal.null",
        DATETIME: "literal.datetime",
        TIME: "literal.time",
        DOUBLE: "literal.double",
        DOUBLE_INDICATOR: "literal.double.indicator",
        INTEGER: "literal.number",
        STRING: "literal.string",
        LONG: "literal.long",
        LONG_INDICATOR: "literal.long.indicator"
    },
    OPERATOR: {
        ASSIGN: {
            ASSIGN: "operator.assign"
        },
    },
    ENTITY: {
        NAMESPACE: 'entity.namespace',
        TAG: {
            NAME: 'entity.tag.name',
            ATTRIBUTE: 'entity.tag.attribute',
            ATTRIBUTE_VALUE: 'entity.tag.attribute.value',
            CONTENT: 'entity.tag.content'
        },
        XML_ENTITY: {
            NAME: 'entity.xmlEntity.name'
        },
    }
};
//# sourceMappingURL=auraTokenTypes.js.map