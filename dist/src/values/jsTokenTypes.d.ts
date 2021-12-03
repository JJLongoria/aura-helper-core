export declare const JSTokenTypes: {
    UNKNOWN: string;
    IDENTIFIER: string;
    DATATYPE: {
        OBJECT: string;
        STRING: string;
        VOID: string;
        ARRAY: string;
        DATE: string;
        NUMBER: string;
        MATH: string;
    };
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
    DECLARATION: {
        ENTITY: {
            CLASS: string;
            ENUM: string;
            INTERFACE: string;
            VARIABLE: string;
            CONSTANT: string;
            FUNCTION: string;
            CONSTRUCTOR: string;
        };
    };
    ENTITY: {
        VARIABLE: string;
        FUNCTION: string;
    };
    KEYWORD: {
        FLOW_CONTROL: {
            IF: string;
            SWITCH: string;
            SWITCH_CASE: string;
            ELSE_IF: string;
            ELSE: string;
            BREAK: string;
            CONTINUE: string;
            RETURN: string;
            TRY: string;
            CATCH: string;
            FINALLY: string;
            DO: string;
            FOR: string;
            WHILE: string;
            WHILE_DO: string;
            THROW: string;
        };
        DECLARATION: {
            CLASS: string;
            INTERFACE: string;
            ENUM: string;
            EXTENDS: string;
            IMPLEMENTS: string;
            VARIABLE: string;
            CONSTANT: string;
            FUNCTION: string;
            CONSTRUCTOR: string;
        };
        MODIFIER: {
            DEFINITION: string;
            ACCESS: string;
            FINAL: string;
            OVERRIDE: string;
            STATIC: string;
            TEST_METHOD: string;
            WEB_SERVICE: string;
            SHARING: string;
            TRANSIENT: string;
        };
        OBJECT: {
            NEW: string;
            THIS: string;
            SUPER: string;
            TYPEOF: string;
            PROTOTYPE: string;
        };
        OTHER: string;
        PREDEFINED_OBJECT: string;
        FOR_FUTURE: string;
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
        PARENTHESIS_PARAM_OPEN: string;
        PARENTHESIS_PARAM_CLOSE: string;
        PARENTHESIS_DECLARATION_PARAM_OPEN: string;
        PARENTHESIS_DECLARATION_PARAM_CLOSE: string;
        PARENTHESIS_GUARD_OPEN: string;
        PARENTHESIS_GUARD_CLOSE: string;
    };
    COMMENT: {
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
            ASSIGN: string;
        };
    };
};
