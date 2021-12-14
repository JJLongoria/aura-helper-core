export const AuraTokenTypes: AuraTokenTypes = {
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

interface AuraTokenTypes {
    UNKNOWN: string;
    IDENTIFIER: string;
    BRACKET: {
        CURLY_OPEN: string;
        CURLY_CLOSE: string;
        START_TAG_OPEN: string;
        INCOMPLETE_TAG_OPEN: string;
        START_TAG_CLOSE: string;
        END_TAG_OPEN: string;
        END_TAG_CLOSE: string;
        TAG_EMPTY_OPEN: string;
        TAG_EMPTY_CLOSE: string;
        TAG_EXMARK_OPEN: string;
        TAG_EXMARK_CLOSE: string;
        TAG_ENTITY_OPEN: string;
        TAG_ENTITY_CLOSE: string;
    },
    COMMENT: {
        START: string;
        END: string;
        CONTENT: string;
    },
    PUNCTUATION: {
        COMMA: string;
        COLON: string;
        SEMICOLON: string;
        BACKSLASH: string;
        DOUBLE_QUOTTES: string;
        DOUBLE_QUOTTES_START: string;
        DOUBLE_QUOTTES_END: string;
        AT: string;
        EXMARK: string;
        OBJECT_ACCESSOR: string;
        SAFE_OBJECT_ACCESSOR: string;
    },
    LITERAL: {
        DATE: string;
        DATE_PARAMETRIZED: string;
        DATE_PARAMETRIZED_START_PARAM: string;
        BOOLEAN: string;
        NULL: string;
        DATETIME: string;
        TIME: string;
        DOUBLE: string;
        DOUBLE_INDICATOR: string;
        INTEGER: string;
        STRING: string;
        LONG: string;
        LONG_INDICATOR: string;
    },
    OPERATOR: {
        ASSIGN: {
            ASSIGN: string;
        },
    },
    ENTITY: {
        NAMESPACE: string;
        TAG: {
            NAME: string;
            ATTRIBUTE: string;
            ATTRIBUTE_VALUE: string;
            CONTENT: string;
        },
        XML_ENTITY: {
            NAME: string;
        },
    }
};