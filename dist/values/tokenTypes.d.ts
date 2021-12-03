export declare const TokenTypes: {
    UNKNOWN: string;
    IDENTIFIER: string;
    LITERAL: {
        DATE: string;
        DATE_PARAMETRIZED: string;
        DATE_PARAMETRIZED_START_PARAM: string;
        BOOLEAN: string;
        NULL: string;
        UNDEFINED: string;
        NAN: string;
        INFINITY: string;
        DATETIME: string;
        TIME: string;
        DOUBLE: string;
        DOUBLE_INDICATOR: string;
        INTEGER: string;
        STRING: string;
        LONG: string;
        LONG_INDICATOR: string;
    };
    PUNCTUATION: {
        COMMA: string;
        COLON: string;
        SEMICOLON: string;
        OBJECT_ACCESSOR: string;
        SAFE_OBJECT_ACCESSOR: string;
        BACKSLASH: string;
        QUOTTES: string;
        QUOTTES_START: string;
        QUOTTES_END: string;
        DOUBLE_QUOTTES: string;
        DOUBLE_QUOTTES_START: string;
        DOUBLE_QUOTTES_END: string;
        AT: string;
        EXMARK: string;
    };
    BRACKET: {
        CURLY_OPEN: string;
        CURLY_CLOSE: string;
        SQUARE_OPEN: string;
        SQUARE_CLOSE: string;
    };
    COMMENT: {
        XML_START: string;
        XML_END: string;
        BLOCK_START: string;
        BLOCK_END: string;
        LINE: string;
        LINE_DOC: string;
        CONTENT: string;
    };
    OPERATOR: {
        PRIORITY: {
            PARENTHESIS_OPEN: string;
            PARENTHESIS_CLOSE: string;
        };
        BITWISE: {
            UNSIGNED_RIGHT_ASSIGN: string;
            SIGNED_RIGTH_ASSIGN: string;
            LEFT_ASSIGN: string;
            UNSIGNED_RIGHT: string;
            SIGNED_RIGHT: string;
            SIGNED_LEFT: string;
            EXCLUSIVE_OR_ASSIGN: string;
            EXCLUSIVE_OR: string;
            OR: string;
            AND: string;
        };
        LOGICAL: {
            INEQUALITY_EXACT: string;
            EQUALITY_EXACT: string;
            INEQUALITY: string;
            EQUALITY: string;
            OR: string;
            OR_ASSIGN: string;
            AND: string;
            AND_ASSIGN: string;
            GREATER_THAN_EQUALS: string;
            LESS_THAN_EQUALS: string;
            NOT: string;
            GREATER_THAN: string;
            LESS_THAN: string;
            INSTANCE_OF: string;
        };
        ARITHMETIC: {
            DECREMENT: string;
            INCREMENT: string;
            ADD_ASSIGN: string;
            SUBSTRACT_ASSIGN: string;
            MULTIPLY_ASSIGN: string;
            DIVIDE_ASSIGN: string;
            ADD: string;
            POSITIVE: string;
            SUBSTRACT: string;
            NEGATIVE: string;
            MULTIPLY: string;
            DIVIDE: string;
            PARENTHESIS_OPEN: string;
            PARENTHESIS_CLOSE: string;
        };
        ASSIGN: {
            MAP_KEY_VALUE: string;
            ASSIGN: string;
        };
    };
};
