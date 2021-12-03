export declare const ApexTokenTypes: {
    UNKNOWN: string;
    IDENTIFIER: string;
    ANNOTATION: {
        ENTITY: string;
        NAME: string;
        CONTENT: string;
    };
    DATATYPE: {
        PRIMITIVE: string;
        COLLECTION: string;
        SOBJECT: string;
        CUSTOM_CLASS: string;
        SUPPORT_CLASS: string;
        SUPPORT_NAMESPACE: string;
    };
    LITERAL: {
        DATE: string;
        DATE_PARAMETRIZED: string;
        DATE_PARAMETRIZED_START_PARAM: string;
        DATE_PARAMETRIZED_PARAM_VARIABLE: string;
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
    QUERY: {
        ORDER: string;
        CLAUSE: {
            SELECT: string;
            FIND: string;
            USING_SCOPE: string;
            ORDER_BY: string;
            WHERE: string;
            WHEN: string;
            TYPE_OF: string;
            THEN: string;
            NULLS: string;
            FROM: string;
            END: string;
            ELSE: string;
            GROUP_BY: string;
            HAVING: string;
            WITH: string;
            LIMIT: string;
            OFFSET: string;
            FOR: string;
        };
        FUNCTION: string;
        OPERATOR: string;
        VALUE_BIND: string;
        SCOPE_VALUE: string;
        NULLS_VALUE: string;
    };
    DATABASE: {
        DML: string;
        TRIGGER_EXEC: string;
    };
    DECLARATION: {
        ENTITY: {
            CLASS: string;
            ENUM: string;
            INTERFACE: string;
            VARIABLE: string;
            FUNCTION: string;
            CONSTRUCTOR: string;
            PROPERTY: string;
        };
    };
    ENTITY: {
        VARIABLE: string;
        FUNCTION: string;
        CLASS_MEMBER: string;
        CLASS_FUNCTION: string;
        SOBJECT_FIELD: string;
        SOBJECT_PROJECTION_FIELD: string;
        ALIAS_FIELD: string;
        SUPPORT_CLASS_FUNCTION: string;
        SUPPORT_CLASS_MEMBER: string;
        ENUM_VALUE: string;
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
            TRIGGER: string;
            STATIC_CONSTRUCTOR: string;
            PROPERTY_GETTER: string;
            PROPERTY_SETTER: string;
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
        };
        OTHER: string;
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
        AT: string;
        EXMARK: string;
    };
    BRACKET: {
        CURLY_OPEN: string;
        CURLY_CLOSE: string;
        INITIALIZER_OPEN: string;
        INITIALIZER_CLOSE: string;
        SQUARE_OPEN: string;
        SQUARE_CLOSE: string;
        PARAMETRIZED_TYPE_OPEN: string;
        PARAMETRIZED_TYPE_CLOSE: string;
        INIT_VALUES_OPEN: string;
        INIT_VALUES_CLOSE: string;
        QUERY_START: string;
        QUERY_END: string;
        INNER_QUERY_START: string;
        INNER_QUERY_END: string;
        PARENTHESIS_PARAM_OPEN: string;
        PARENTHESIS_PARAM_CLOSE: string;
        PARENTHESIS_DECLARATION_PARAM_OPEN: string;
        PARENTHESIS_DECLARATION_PARAM_CLOSE: string;
        PARENTHESIS_GUARD_OPEN: string;
        PARENTHESIS_GUARD_CLOSE: string;
        TRIGGER_GUARD_OPEN: string;
        TRIGGER_GUARD_CLOSE: string;
        ANNOTATION_PARAM_OPEN: string;
        ANNOTATION_PARAM_CLOSE: string;
        CASTING_OPEN: string;
        CASTING_CLOSE: string;
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
            MAP_KEY_VALUE: string;
            ASSIGN: string;
        };
    };
};
