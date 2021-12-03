export declare const AuraTokenTypes: {
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
    };
    COMMENT: {
        START: string;
        END: string;
        CONTENT: string;
    };
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
    };
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
    };
    OPERATOR: {
        ASSIGN: {
            ASSIGN: string;
        };
    };
    ENTITY: {
        NAMESPACE: string;
        TAG: {
            NAME: string;
            ATTRIBUTE: string;
            ATTRIBUTE_VALUE: string;
            CONTENT: string;
        };
        XML_ENTITY: {
            NAME: string;
        };
    };
};
